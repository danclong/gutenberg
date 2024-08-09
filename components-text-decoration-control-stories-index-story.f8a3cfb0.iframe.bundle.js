"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[3813],{"./packages/block-editor/src/components/segmented-text-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SegmentedTextControl});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/base-control/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function SegmentedTextControl({label,value,options,onChange,className}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("block-editor-segmented-text-control",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ZP.VisualLabel,{as:"legend",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"block-editor-segmented-text-control__buttons",children:options.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ZP,{size:"compact",icon:option.icon,label:option.label,isPressed:option.value===value,onClick:()=>onChange(option.value)},option.value)))})]})}SegmentedTextControl.displayName="SegmentedTextControl",SegmentedTextControl.__docgenInfo={description:"Control to facilitate selecting a text style from a set of options.\n\n@param {Object}   props           Component props.\n@param {string}   props.label     A label for the option.\n@param {string}   props.value     Currently selected value.\n@param {Function} props.onChange  Callback to handle onChange.\n@param {Option[]} props.options   Array of options to display.\n@param {string}   props.className Additional class name to apply.\n\n@return {Element} Element to render.",methods:[],displayName:"SegmentedTextControl"}},"./packages/icons/build-module/library/format-strikethrough.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"})})},"./packages/icons/build-module/library/format-underline.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"})})},"./packages/icons/build-module/library/reset.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M7 11.5h10V13H7z"})})},"./packages/block-editor/src/components/text-decoration-control/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),library_reset=__webpack_require__("./packages/icons/build-module/library/reset.js"),format_underline=__webpack_require__("./packages/icons/build-module/library/format-underline.js"),format_strikethrough=__webpack_require__("./packages/icons/build-module/library/format-strikethrough.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),segmented_text_control=__webpack_require__("./packages/block-editor/src/components/segmented-text-control/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TEXT_DECORATIONS=[{label:(0,build_module.__)("None"),value:"none",icon:library_reset.Z},{label:(0,build_module.__)("Underline"),value:"underline",icon:format_underline.Z},{label:(0,build_module.__)("Strikethrough"),value:"line-through",icon:format_strikethrough.Z}];function TextDecorationControl({value,onChange,className}){return(0,jsx_runtime.jsx)(segmented_text_control.Z,{label:(0,build_module.__)("Decoration"),options:TEXT_DECORATIONS,className:(0,clsx.Z)("block-editor-text-decoration-control",className),value,onChange:newValue=>{onChange(newValue===value?void 0:newValue)}})}TextDecorationControl.displayName="TextDecorationControl",TextDecorationControl.__docgenInfo={description:"Control to facilitate text decoration selections.\n\n@param {Object}   props           Component props.\n@param {string}   props.value     Currently selected text decoration.\n@param {Function} props.onChange  Handles change in text decoration selection.\n@param {string}   props.className Additional class name to apply.\n\n@return {Element} Text decoration control.",methods:[],displayName:"TextDecorationControl"};const index_story={title:"BlockEditor/TextDecorationControl",component:TextDecorationControl,argTypes:{onChange:{action:"onChange"},size:{options:["default","__unstable-large"],control:{type:"radio"}}},parameters:{sourceLink:"packages/block-editor/src/components/text-decoration-control",badges:[]}},Template=({onChange,...args})=>{const[value,setValue]=(0,react.useState)();return(0,jsx_runtime.jsx)(TextDecorationControl,{...args,onChange:(...changeArgs)=>{onChange(...changeArgs),setValue(...changeArgs)},value})};Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState();\n  return <TextDecorationControl {...args} onChange={(...changeArgs) => {\n    onChange(...changeArgs);\n    setValue(...changeArgs);\n  }} value={value} />;\n}",...Default.parameters?.docs?.source}}}}}]);