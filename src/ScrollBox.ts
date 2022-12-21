import type { InteractionEvent } from 'pixi.js';
import { Container, Graphics, Point, Sprite, Texture } from 'pixi.js';

import type { LayoutType } from './Layout';
import { Layout } from './Layout';
import type { DragObject } from './utils';
import ScrollSpring from './utils/trackpad/ScrollSpring';
import { Trackpad } from './utils/trackpad/Trackpad';

export type ScrollBoxOptions = {
    type?: LayoutType;
    background?: number | string;
    width?: number;
    height?: number;
    radius?: number;
    elementsMargin?: number;
    items?: Container[];
    disableDynamicRendering?: boolean;
    vertPadding?: number;
    horPadding?: number;
    padding?: number;
    scrollSpeed?: number;
};

/**
 * ScrollBox for arranging and scrolling pixi containers withing some area with scrolling
 *
 * @example
 * ```
 * new ScrollBox({
 *     background: 0XFFFFFF,
 *     type: 'vertical',
 *     elementsMargin: 10,
 *     width: 200,
 *     height: 300,
 *     radius: 10,
 *     padding: 10,
 *     items: [
 *         new Graphics().beginFill(0x000000).drawRect(0, 0, 200, 50),
 *         new Graphics().beginFill(0x000000).drawRect(0, 0, 200, 50),
 *         new Graphics().beginFill(0x000000).drawRect(0, 0, 200, 50),
 *         new Graphics().beginFill(0x000000).drawRect(0, 0, 200, 50),
 *         new Graphics().beginFill(0x000000).drawRect(0, 0, 200, 50),
 *         new Graphics().beginFill(0x000000).drawRect(0, 0, 200, 50),
 *         new Graphics().beginFill(0x000000).drawRect(0, 0, 200, 50),
 *     ],
 * });
 * ```
 */

// TODO: make scroll inertion
// TODO: fix snap on mouse scroll with high padding value

export class ScrollBox extends Container {
    private background: Graphics | Sprite;
    private borderMask: Graphics;
    private lastWidth: number;
    private lastHeight: number;
    private __width = 0;
    private __height = 0;

    private isInteractive = false;

    private readonly onMouseScrollBinded: (event: any) => void;

    private readonly layout: Layout;

    private isDragging: number;

    private readonly freeSlot = {
        x: 0,
        y: 0,
    };

    private _trackpad: Trackpad;

    private childrenInteractiveStorage: boolean[] = [];

    constructor(private readonly options: ScrollBoxOptions) {
        super();

        this.addBackground();

        this.__width = options.width | this.background.width;
        this.__height = options.height | this.background.height;

        if (!options.vertPadding) {
            options.vertPadding = options.padding ?? 0;
        }

        if (!options.horPadding) {
            options.horPadding = options.padding ?? 0;
        }

        this.layout = new Layout({
            type: options.type,
            elementsMargin: options.elementsMargin,
            vertPadding: options.vertPadding,
            horPadding: options.horPadding,
        });

        super.addChild(this.layout);

        if (options.items?.length) {
            options.items.forEach((item) => {
                this.addItem(item);
            });
        }

        if (this.hasBounds) {
            this.addMask();
            this.makeScrollable();
        }

        this.onMouseScrollBinded = this.onMouseScroll.bind(this);

        const spring = new ScrollSpring();

        this._trackpad = new Trackpad({
            constrain: true,
            yEase: spring,
        });

        this._trackpad.yAxis.value = 0;

        this.resize();
    }

    private get hasBounds(): boolean {
        return !!this.__width || !!this.__height;
    }

    protected override onChildrenChange() {
        // do nothing we manage this in addItem
    }

    public addItem<T extends Container[]>(...items: T): T[0] {
        if (items.length > 1) {
            items.forEach((item) => this.addItem(item));
        } else {
            const child = items[0];

            if (!child.width || !child.height) {
                console.error('ScrollBox item should have size');
            }

            child.x = this.freeSlot.x;
            child.y = this.freeSlot.y;

            this.layout.addChild(child);

            if (!this.options.disableDynamicRendering) {
                child.renderable = this.isItemVisible(child);
            }

            const elementsMargin = this.options?.elementsMargin ?? 0;

            switch (this.options.type) {
                case 'horizontal':
                    this.freeSlot.x += elementsMargin + child.width;
                    break;

                default:
                    this.freeSlot.y += elementsMargin + child.height;
                    break;
            }
        }

        this.resize();

        return items[0];
    }

    public async removeItem(itemID: number) {
        const child = this.layout.children[itemID];

        if (!child) {
            return;
        }

        this.renderAllItems();

        this.layout.removeChild(child);

        this.resize();
    }

    public isItemVisible(item: Container): boolean {
        const isVertical =
            this.options.type === 'vertical' || !this.options.type;
        let isVisible = false;
        const layout = this.layout;

        if (isVertical) {
            const posY = item.y + layout.y;

            if (
                posY + item.height + this.options.vertPadding >= 0 &&
                posY - this.options.vertPadding - this.options.elementsMargin <=
                    this.options.height
            ) {
                isVisible = true;
            }
        } else {
            const posX = item.x + layout.x;

            if (posX + item.width >= 0 && posX <= this.options.width) {
                isVisible = true;
            }
        }

        return isVisible;
    }

    public get items(): Container[] | [] {
        return this.layout?.children ?? [];
    }

    private addBackground() {
        this.background =
            typeof this.options.background === 'string'
                ? new Sprite(Texture.from(this.options.background))
                : new Graphics();

        this.addChild(this.background);

        this.resize();
    }

    private addMask() {
        this.borderMask = new Graphics();
        super.addChild(this.borderMask);
        this.mask = this.borderMask;
        this.resize();
    }

    private makeScrollable() {
        this.borderMask.on('pointerdown', (e: InteractionEvent) => {
            this._trackpad.pointerDown(e.data.global);
        });

        this.borderMask.on('pointerup', () => {
            this._trackpad.pointerUp();
        });

        this.borderMask.on('pointerupoutside', () => {
            this._trackpad.pointerUp();
        });

        this.borderMask.on('pointermove', (e: InteractionEvent) => {
            this._trackpad.pointerMove(e.data.global);
        });

        const { onMouseHover, onMouseOut } = this;

        this.borderMask
            .on('mouseover', onMouseHover, this)
            .on('mouseout', onMouseOut, this);
    }

    private setInteractive(interactive: boolean) {
        this.isInteractive = interactive;
        this.borderMask.interactive = interactive;
    }

    private get layoutHeight(): number {
        return this.layout.height + this.options.vertPadding * 2;
    }

    private get layoutWidth(): number {
        return this.layout.width + this.options.horPadding * 2;
    }

    public resize(): void {
        if (
            this.borderMask &&
            (this.lastWidth !== this.layoutWidth ||
                this.lastHeight !== this.layoutHeight)
        ) {
            this.renderAllItems();

            const verPadding = this.options.vertPadding;
            const horPadding = this.options.horPadding;

            if (!this.options.width) {
                this.__width += this.layoutWidth;
            }

            if (!this.options.height) {
                this.__height += this.layoutHeight;
            }

            this.borderMask
                .clear()
                .lineStyle(0)
                .beginFill(0xffffff)
                .drawRoundedRect(
                    0,
                    0,
                    this.__width,
                    this.__height,
                    this.options.radius | 0,
                );

            if (
                this.background instanceof Graphics &&
                typeof this.options.background === 'number'
            ) {
                this.background
                    .clear()
                    .lineStyle(0)
                    .beginFill(this.options.background)
                    .drawRect(
                        0,
                        0,
                        this.__width + horPadding,
                        this.__height + verPadding,
                    );
            }

            if (this.options.type === 'horizontal') {
                this.setInteractive(this.layoutWidth > this.__width);
            } else {
                this.setInteractive(this.layoutHeight > this.__height);
            }

            this.lastWidth = this.layoutWidth;
            this.lastHeight = this.layoutHeight;

            if (this._trackpad) {
                const y =
                    this.borderMask.height -
                    this.layout.height -
                    this.options.vertPadding * 2;

                this._trackpad.yAxis.max = -Math.abs(y);
            }

            this.stopRenderHiddenItems();
        }

        // this.x = this.__width / 2
        // this.y = this.__height / 2;
    }

    private onMouseHover() {
        this.renderAllItems();

        document.addEventListener('mousewheel', this.onMouseScrollBinded);
        document.addEventListener('DOMMouseScroll', this.onMouseScrollBinded);
    }

    private onMouseOut() {
        this.stopRenderHiddenItems();

        document.removeEventListener('mousewheel', this.onMouseScrollBinded);
        document.removeEventListener(
            'DOMMouseScroll',
            this.onMouseScrollBinded,
        );
    }

    private onMouseScroll(event: any): void {
        if (
            this.options.type === 'horizontal' &&
            (typeof event.deltaX !== 'undefined' ||
                typeof event.deltaY !== 'undefined')
        ) {
            const targetPos = event.deltaY
                ? this.layout.x - event.deltaY
                : this.layout.x - event.deltaX;

            if (
                targetPos < 0 &&
                targetPos + this.layoutWidth + this.options.horPadding <
                    this.__width
            ) {
                this._trackpad.xAxis.value = this.__width - this.layoutWidth;
            } else if (targetPos > this.options.horPadding) {
                this._trackpad.xAxis.value = 0;
            } else {
                this._trackpad.xAxis.value = targetPos;
            }
        } else if (typeof event.deltaY !== 'undefined') {
            const targetPos = this.layout.y - event.deltaY;

            if (
                targetPos < 0 &&
                targetPos + this.layoutHeight + this.options.vertPadding <
                    this.__height
            ) {
                this._trackpad.yAxis.value = this.__height - this.layoutHeight;
            } else if (targetPos > this.options.vertPadding) {
                this._trackpad.yAxis.value = 0;
            } else {
                this._trackpad.yAxis.value = targetPos;
            }
        }
    }

    public async scrollDown() {
        if (!this.isInteractive) {
            await this.scrollTop();
        } else {
            await this.scrollTo(this.layout.children.length - 1);
        }
    }

    public async scrollTop() {
        this._trackpad.yAxis.value = 0;
    }

    public renderAllItems() {
        if (this.options.disableDynamicRendering) {
            return;
        }

        this.items.forEach((child) => {
            child.renderable = true;
        });
    }

    public stopRenderHiddenItems() {
        if (this.options.disableDynamicRendering) {
            return;
        }

        this.items.forEach((child) => {
            child.renderable = this.isItemVisible(child);
        });
    }

    public scrollTo(elementID: number) {
        if (!this.isInteractive) {
            return;
        }

        const target = this.layout.children[elementID];

        if (!target) {
            return;
        }

        this._trackpad.xAxis.value =
            this.options.type === 'horizontal'
                ? this.__width -
                  target.x -
                  target.width -
                  this.options.horPadding
                : 0;

        this._trackpad.yAxis.value =
            !this.options.type || this.options.type === 'vertical'
                ? this.__height -
                  target.y -
                  target.height -
                  this.options.vertPadding
                : 0;
    }

    public override get height(): number {
        return this.__height;
    }

    public override get width(): number {
        return this.__width;
    }

    public update() {
        this._trackpad.update();

        this.layout.y = this._trackpad.y;
    }
}
