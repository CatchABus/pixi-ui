"use strict";(self.webpackChunk_pixijs_ui=self.webpackChunk_pixijs_ui||[]).push([[672],{"./src/stories/maskedFrame/MaskedFrameSprite.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sprite:()=>Sprite,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs"),_MaskedFrame__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/MaskedFrame.ts"),_utils_helpers_argTypes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/argTypes.ts"),_utils_helpers_loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/helpers/loader.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/helpers/resize.ts"),args={borderColor:"#FFFFFF",borderWidth:10},Sprite=function Sprite(_ref){var borderColor=_ref.borderColor,borderWidth=_ref.borderWidth,view=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.W20;return(0,_utils_helpers_loader__WEBPACK_IMPORTED_MODULE_1__.z)(["avatar.png","avatar_mask.png"]).then((function(){borderColor=Number(borderColor.replace("#","0x"));var frame=new _MaskedFrame__WEBPACK_IMPORTED_MODULE_2__.O({target:"avatar.png",mask:"avatar_mask.png",borderWidth,borderColor});view.addChild(frame),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_3__.w)(view)})),{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_3__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Container } from 'pixi.js';\nimport { MaskedFrame } from '../../MaskedFrame';\nimport { argTypes, getDefaultArgs } from '../../utils/helpers/argTypes';\nimport { preloadAssets } from '../../utils/helpers/loader';\nimport { centerElement } from '../../utils/helpers/resize';\n\nconst args = {\n    borderColor: '#FFFFFF',\n    borderWidth: 10,\n};\n\n// TODO: implement preloading\nexport const Sprite = ({ borderColor, borderWidth }: any) => {\n    const view = new Container();\n\n    const assets = [`avatar.png`, `avatar_mask.png`];\n\n    preloadAssets(assets).then(() => {\n        borderColor = Number(borderColor.replace('#', '0x'));\n\n        // Component usage !!!\n        const frame = new MaskedFrame({\n            target: `avatar.png`,\n            mask: `avatar_mask.png`,\n            borderWidth,\n            borderColor,\n        });\n\n        view.addChild(frame);\n\n        centerElement(view);\n    });\n\n    return { view, resize: () => centerElement(view) };\n};\n\nexport default {\n    title: 'UI components/MaskedFrame/Sprite',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{sprite:{startLoc:{col:22,line:13},endLoc:{col:1,line:35},startBody:{col:22,line:13},endBody:{col:1,line:35}}}}},title:"UI components/MaskedFrame/Sprite",argTypes:(0,_utils_helpers_argTypes__WEBPACK_IMPORTED_MODULE_4__.P)(args),args:(0,_utils_helpers_argTypes__WEBPACK_IMPORTED_MODULE_4__.V)(args)};var __namedExportsOrder=["Sprite"]},"./src/MaskedFrame.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MaskedFrame});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var MaskedFrame=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(MaskedFrame,_Container);var _super=_createSuper(MaskedFrame);function MaskedFrame(_ref){var _this,target=_ref.target,mask=_ref.mask,borderWidth=_ref.borderWidth,borderColor=_ref.borderColor;if(function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MaskedFrame),(_this=_super.call(this)).target="string"==typeof target?new pixi_js__WEBPACK_IMPORTED_MODULE_0__.jyi(pixi_js__WEBPACK_IMPORTED_MODULE_0__.xEZ.from(target)):target,_this.targetMask="string"==typeof mask?new pixi_js__WEBPACK_IMPORTED_MODULE_0__.jyi(pixi_js__WEBPACK_IMPORTED_MODULE_0__.xEZ.from(mask)):mask,_this.target.addChild(_this.targetMask),_this.target.mask=_this.targetMask,borderWidth){_this.border=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TCu).beginFill(borderColor).drawRect(0,0,_this.target.width+2*borderWidth,_this.target.height+2*borderWidth),_this.target.x=borderWidth,_this.target.y=borderWidth;var borderMask="string"==typeof mask?new pixi_js__WEBPACK_IMPORTED_MODULE_0__.jyi(pixi_js__WEBPACK_IMPORTED_MODULE_0__.xEZ.from(mask)):mask.clone();borderMask.width+=2*borderWidth,borderMask.height+=2*borderWidth,_this.border.mask=borderMask,_this.border.addChild(borderMask),_this.addChild(_this.border)}return _this.addChild(_this.target),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(MaskedFrame,[{key:"showBorder",value:function showBorder(){this.border&&(this.border.visible=!0)}},{key:"hideBorder",value:function hideBorder(){this.border&&(this.border.visible=!1)}}]),MaskedFrame}(pixi_js__WEBPACK_IMPORTED_MODULE_0__.W20)},"./src/utils/helpers/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},count:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0;key.includes("font")&&(min=1),args[key]>=0?args[key]>=100?exportArgTypes[key]={control:{type:"range",min,max:1e3,step:10}}:args[key]>10?exportArgTypes[key]={control:{type:"range",min,max:100,step:1}}:exportArgTypes[key]={control:{type:"range",min,max:10,step:1}}:args[key]<=-100?exportArgTypes[key]={control:{type:"range",min:-1e3,max:1e3,step:10}}:args[key]<-10?exportArgTypes[key]={control:{type:"range",min:-100,max:100,step:10}}:exportArgTypes[key]={control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/utils/helpers/loader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>preloadAssets});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs");function preloadAssets(assets){return new Promise((function(resolve){var loader=pixi_js__WEBPACK_IMPORTED_MODULE_0__.aNw.shared;assets.forEach((function(asset){!loader.resources[asset]&&loader.add(asset)})),loader.load((function(){resolve()}))}))}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2,view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2}__webpack_require__.d(__webpack_exports__,{w:()=>centerElement})}}]);