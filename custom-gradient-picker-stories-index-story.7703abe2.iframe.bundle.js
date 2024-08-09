"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[5175],{"./packages/components/src/custom-gradient-picker/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C6:()=>GRADIENT_OPTIONS,KE:()=>DEFAULT_LINEAR_GRADIENT_ANGLE,Pg:()=>HORIZONTAL_GRADIENT_ORIENTATION,dk:()=>DIRECTIONAL_ORIENTATION_ANGLE_MAP,ob:()=>DEFAULT_GRADIENT});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js");const DEFAULT_GRADIENT="linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)",DEFAULT_LINEAR_GRADIENT_ANGLE=180,HORIZONTAL_GRADIENT_ORIENTATION={type:"angular",value:"90"},GRADIENT_OPTIONS=[{value:"linear-gradient",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Linear")},{value:"radial-gradient",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radial")}],DIRECTIONAL_ORIENTATION_ANGLE_MAP={top:0,"top right":45,"right top":45,right:90,"right bottom":135,"bottom right":135,bottom:180,"bottom left":225,"left bottom":225,left:270,"top left":315,"left top":315}},"./packages/components/src/custom-gradient-picker/gradient-bar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CustomGradientBar});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),colord=__webpack_require__("./node_modules/colord/index.mjs"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),plus=__webpack_require__("./packages/icons/build-module/library/plus.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),legacy_adapter=__webpack_require__("./packages/components/src/color-picker/legacy-adapter.tsx"),visually_hidden_component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),color_palette=__webpack_require__("./packages/components/src/color-palette/index.tsx");const MINIMUM_DISTANCE_BETWEEN_INSERTER_AND_POINT=10,MINIMUM_DISTANCE_BETWEEN_POINTS=0,KEYBOARD_CONTROL_POINT_VARIATION=MINIMUM_DISTANCE_BETWEEN_INSERTER_AND_POINT;function clampPercent(value){return Math.max(0,Math.min(100,value))}function updateControlPoint(points,index,newPoint){const newValue=points.slice();return newValue[index]=newPoint,newValue}function updateControlPointPosition(points,index,newPosition){if(function isOverlapping(value,initialIndex,newPosition,minDistance=MINIMUM_DISTANCE_BETWEEN_POINTS){const initialPosition=value[initialIndex].position,minPosition=Math.min(initialPosition,newPosition),maxPosition=Math.max(initialPosition,newPosition);return value.some((({position},index)=>index!==initialIndex&&(Math.abs(position-newPosition)<minDistance||minPosition<position&&position<maxPosition)))}(points,index,newPosition))return points;return updateControlPoint(points,index,{...points[index],position:newPosition})}function updateControlPointColor(points,index,newColor){return updateControlPoint(points,index,{...points[index],color:newColor})}function getHorizontalRelativeGradientPosition(mouseXCoordinate,containerElement){if(!containerElement)return;const{x,width}=containerElement.getBoundingClientRect(),absolutePositionValue=mouseXCoordinate-x;return Math.round(clampPercent(100*absolutePositionValue/width))}var dropdown_content_wrapper=__webpack_require__("./packages/components/src/dropdown/dropdown-content-wrapper.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ControlPointButton({isOpen,position,color,...additionalProps}){const descriptionId=`components-custom-gradient-picker__control-point-button-description-${(0,use_instance_id.Z)(ControlPointButton)}`;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src_button.ZP,{"aria-label":(0,build_module.gB)((0,build_module.__)("Gradient control point at position %1$s%% with color code %2$s."),position,color),"aria-describedby":descriptionId,"aria-haspopup":"true","aria-expanded":isOpen,className:(0,clsx.Z)("components-custom-gradient-picker__control-point-button",{"is-active":isOpen}),...additionalProps}),(0,jsx_runtime.jsx)(visually_hidden_component.Z,{id:descriptionId,children:(0,build_module.__)("Use your left or right arrow keys or drag and drop with the mouse to change the gradient position. Press the button to change the color or remove the control point.")})]})}function GradientColorPickerDropdown({isRenderedInSidebar,className,...props}){const popoverProps=(0,react.useMemo)((()=>({placement:"bottom",offset:8,resize:!1})),[]),mergedClassName=(0,clsx.Z)("components-custom-gradient-picker__control-point-dropdown",className);return(0,jsx_runtime.jsx)(color_palette.qK,{isRenderedInSidebar,popoverProps,className:mergedClassName,...props})}function ControlPoints({disableRemove,disableAlpha,gradientPickerDomRef,ignoreMarkerPosition,value:controlPoints,onChange,onStartControlPointChange,onStopControlPointChange,__experimentalIsRenderedInSidebar}){const controlPointMoveState=(0,react.useRef)(),onMouseMove=event=>{if(void 0===controlPointMoveState.current||null===gradientPickerDomRef.current)return;const relativePosition=getHorizontalRelativeGradientPosition(event.clientX,gradientPickerDomRef.current),{initialPosition,index,significantMoveHappened}=controlPointMoveState.current;!significantMoveHappened&&Math.abs(initialPosition-relativePosition)>=5&&(controlPointMoveState.current.significantMoveHappened=!0),onChange(updateControlPointPosition(controlPoints,index,relativePosition))},cleanEventListeners=()=>{window&&window.removeEventListener&&controlPointMoveState.current&&controlPointMoveState.current.listenersActivated&&(window.removeEventListener("mousemove",onMouseMove),window.removeEventListener("mouseup",cleanEventListeners),onStopControlPointChange(),controlPointMoveState.current.listenersActivated=!1)},cleanEventListenersRef=(0,react.useRef)();return cleanEventListenersRef.current=cleanEventListeners,(0,react.useEffect)((()=>()=>{cleanEventListenersRef.current?.()}),[]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:controlPoints.map(((point,index)=>{const initialPosition=point?.position;return ignoreMarkerPosition!==initialPosition&&(0,jsx_runtime.jsx)(GradientColorPickerDropdown,{isRenderedInSidebar:__experimentalIsRenderedInSidebar,onClose:onStopControlPointChange,renderToggle:({isOpen,onToggle})=>(0,jsx_runtime.jsx)(ControlPointButton,{onClick:()=>{controlPointMoveState.current&&controlPointMoveState.current.significantMoveHappened||(isOpen?onStopControlPointChange():onStartControlPointChange(),onToggle())},onMouseDown:()=>{window&&window.addEventListener&&(controlPointMoveState.current={initialPosition,index,significantMoveHappened:!1,listenersActivated:!0},onStartControlPointChange(),window.addEventListener("mousemove",onMouseMove),window.addEventListener("mouseup",cleanEventListeners))},onKeyDown:event=>{"ArrowLeft"===event.code?(event.stopPropagation(),onChange(updateControlPointPosition(controlPoints,index,clampPercent(point.position-KEYBOARD_CONTROL_POINT_VARIATION)))):"ArrowRight"===event.code&&(event.stopPropagation(),onChange(updateControlPointPosition(controlPoints,index,clampPercent(point.position+KEYBOARD_CONTROL_POINT_VARIATION))))},isOpen,position:point.position,color:point.color},index),renderContent:({onClose})=>(0,jsx_runtime.jsxs)(dropdown_content_wrapper.Z,{paddingSize:"none",children:[(0,jsx_runtime.jsx)(legacy_adapter.A,{enableAlpha:!disableAlpha,color:point.color,onChange:color=>{onChange(updateControlPointColor(controlPoints,index,(0,colord.Vi)(color).toRgbString()))}}),!disableRemove&&controlPoints.length>2&&(0,jsx_runtime.jsx)(component.Z,{className:"components-custom-gradient-picker__remove-control-point-wrapper",alignment:"center",children:(0,jsx_runtime.jsx)(src_button.ZP,{onClick:()=>{onChange(function removeControlPoint(points,index){return points.filter(((_point,pointIndex)=>pointIndex!==index))}(controlPoints,index)),onClose()},variant:"link",children:(0,build_module.__)("Remove Control Point")})})]}),style:{left:`${point.position}%`,transform:"translateX( -50% )"}},index)}))})}function InsertPoint({value:controlPoints,onChange,onOpenInserter,onCloseInserter,insertPosition,disableAlpha,__experimentalIsRenderedInSidebar}){const[alreadyInsertedPoint,setAlreadyInsertedPoint]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(GradientColorPickerDropdown,{isRenderedInSidebar:__experimentalIsRenderedInSidebar,className:"components-custom-gradient-picker__inserter",onClose:()=>{onCloseInserter()},renderToggle:({isOpen,onToggle})=>(0,jsx_runtime.jsx)(src_button.ZP,{"aria-expanded":isOpen,"aria-haspopup":"true",onClick:()=>{isOpen?onCloseInserter():(setAlreadyInsertedPoint(!1),onOpenInserter()),onToggle()},className:"components-custom-gradient-picker__insert-point-dropdown",icon:plus.Z}),renderContent:()=>(0,jsx_runtime.jsx)(dropdown_content_wrapper.Z,{paddingSize:"none",children:(0,jsx_runtime.jsx)(legacy_adapter.A,{enableAlpha:!disableAlpha,onChange:color=>{alreadyInsertedPoint?onChange(function updateControlPointColorByPosition(points,position,newColor){const index=points.findIndex((point=>point.position===position));return updateControlPointColor(points,index,newColor)}(controlPoints,insertPosition,(0,colord.Vi)(color).toRgbString())):(onChange(function addControlPoint(points,position,color){const nextIndex=points.findIndex((point=>point.position>position)),newPoint={color,position},newPoints=points.slice();return newPoints.splice(nextIndex-1,0,newPoint),newPoints}(controlPoints,insertPosition,(0,colord.Vi)(color).toRgbString())),setAlreadyInsertedPoint(!0))}})}),style:null!==insertPosition?{left:`${insertPosition}%`,transform:"translateX( -50% )"}:void 0})}GradientColorPickerDropdown.displayName="GradientColorPickerDropdown",InsertPoint.displayName="InsertPoint",ControlPoints.InsertPoint=InsertPoint;const control_points=ControlPoints;try{ControlPoints.displayName="ControlPoints",ControlPoints.__docgenInfo={description:"",displayName:"ControlPoints",props:{disableRemove:{defaultValue:null,description:"",name:"disableRemove",required:!0,type:{name:"boolean"}},disableAlpha:{defaultValue:null,description:"",name:"disableAlpha",required:!0,type:{name:"boolean"}},gradientPickerDomRef:{defaultValue:null,description:"",name:"gradientPickerDomRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},ignoreMarkerPosition:{defaultValue:null,description:"",name:"ignoreMarkerPosition",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ControlPoint[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(controlPoints: ControlPoint[]) => void"}},onStartControlPointChange:{defaultValue:null,description:"",name:"onStartControlPointChange",required:!0,type:{name:"() => void"}},onStopControlPointChange:{defaultValue:null,description:"",name:"onStopControlPointChange",required:!0,type:{name:"() => void"}},__experimentalIsRenderedInSidebar:{defaultValue:null,description:"",name:"__experimentalIsRenderedInSidebar",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/gradient-bar/control-points.tsx#ControlPoints"]={docgenInfo:ControlPoints.__docgenInfo,name:"ControlPoints",path:"packages/components/src/custom-gradient-picker/gradient-bar/control-points.tsx#ControlPoints"})}catch(__react_docgen_typescript_loader_error){}const customGradientBarReducer=(state,action)=>{switch(action.type){case"MOVE_INSERTER":if("IDLE"===state.id||"MOVING_INSERTER"===state.id)return{id:"MOVING_INSERTER",insertPosition:action.insertPosition};break;case"STOP_INSERTER_MOVE":if("MOVING_INSERTER"===state.id)return{id:"IDLE"};break;case"OPEN_INSERTER":if("MOVING_INSERTER"===state.id)return{id:"INSERTING_CONTROL_POINT",insertPosition:state.insertPosition};break;case"CLOSE_INSERTER":if("INSERTING_CONTROL_POINT"===state.id)return{id:"IDLE"};break;case"START_CONTROL_CHANGE":if("IDLE"===state.id)return{id:"MOVING_CONTROL_POINT"};break;case"STOP_CONTROL_CHANGE":if("MOVING_CONTROL_POINT"===state.id)return{id:"IDLE"}}return state},customGradientBarReducerInitialState={id:"IDLE"};function CustomGradientBar({background,hasGradient,value:controlPoints,onChange,disableInserter=!1,disableAlpha=!1,__experimentalIsRenderedInSidebar=!1}){const gradientMarkersContainerDomRef=(0,react.useRef)(null),[gradientBarState,gradientBarStateDispatch]=(0,react.useReducer)(customGradientBarReducer,customGradientBarReducerInitialState),onMouseEnterAndMove=event=>{if(!gradientMarkersContainerDomRef.current)return;const insertPosition=getHorizontalRelativeGradientPosition(event.clientX,gradientMarkersContainerDomRef.current);controlPoints.some((({position})=>Math.abs(insertPosition-position)<MINIMUM_DISTANCE_BETWEEN_INSERTER_AND_POINT))?"MOVING_INSERTER"===gradientBarState.id&&gradientBarStateDispatch({type:"STOP_INSERTER_MOVE"}):gradientBarStateDispatch({type:"MOVE_INSERTER",insertPosition})},isMovingInserter="MOVING_INSERTER"===gradientBarState.id,isInsertingControlPoint="INSERTING_CONTROL_POINT"===gradientBarState.id;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx.Z)("components-custom-gradient-picker__gradient-bar",{"has-gradient":hasGradient}),onMouseEnter:onMouseEnterAndMove,onMouseMove:onMouseEnterAndMove,onMouseLeave:()=>{gradientBarStateDispatch({type:"STOP_INSERTER_MOVE"})},children:[(0,jsx_runtime.jsx)("div",{className:"components-custom-gradient-picker__gradient-bar-background",style:{background,opacity:hasGradient?1:.4}}),(0,jsx_runtime.jsxs)("div",{ref:gradientMarkersContainerDomRef,className:"components-custom-gradient-picker__markers-container",children:[!disableInserter&&(isMovingInserter||isInsertingControlPoint)&&(0,jsx_runtime.jsx)(control_points.InsertPoint,{__experimentalIsRenderedInSidebar,disableAlpha,insertPosition:gradientBarState.insertPosition,value:controlPoints,onChange,onOpenInserter:()=>{gradientBarStateDispatch({type:"OPEN_INSERTER"})},onCloseInserter:()=>{gradientBarStateDispatch({type:"CLOSE_INSERTER"})}}),(0,jsx_runtime.jsx)(control_points,{__experimentalIsRenderedInSidebar,disableAlpha,disableRemove:disableInserter,gradientPickerDomRef:gradientMarkersContainerDomRef,ignoreMarkerPosition:isInsertingControlPoint?gradientBarState.insertPosition:void 0,value:controlPoints,onChange,onStartControlPointChange:()=>{gradientBarStateDispatch({type:"START_CONTROL_CHANGE"})},onStopControlPointChange:()=>{gradientBarStateDispatch({type:"STOP_CONTROL_CHANGE"})}})]})]})}CustomGradientBar.displayName="CustomGradientBar";try{gradientbar.displayName="gradientbar",gradientbar.__docgenInfo={description:"",displayName:"gradientbar",props:{background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"Background<string | number>"}},hasGradient:{defaultValue:null,description:"",name:"hasGradient",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ControlPoint[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newControlPoints: ControlPoint[]) => void"}},disableInserter:{defaultValue:{value:"false"},description:"",name:"disableInserter",required:!1,type:{name:"boolean"}},disableAlpha:{defaultValue:{value:"false"},description:"",name:"disableAlpha",required:!1,type:{name:"boolean"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/gradient-bar/index.tsx#gradientbar"]={docgenInfo:gradientbar.__docgenInfo,name:"gradientbar",path:"packages/components/src/custom-gradient-picker/gradient-bar/index.tsx#gradientbar"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/custom-gradient-picker/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>custom_gradient_picker});var build_module=__webpack_require__("./packages/i18n/build-module/index.js"),angle_picker_control=__webpack_require__("./packages/components/src/angle-picker-control/index.tsx"),gradient_bar=__webpack_require__("./packages/components/src/custom-gradient-picker/gradient-bar/index.tsx"),component=__webpack_require__("./packages/components/src/flex/flex/component.tsx"),select_control=__webpack_require__("./packages/components/src/select-control/index.tsx"),v_stack_component=__webpack_require__("./packages/components/src/v-stack/component.tsx"),node=__webpack_require__("./node_modules/gradient-parser/build/node.js"),colord=__webpack_require__("./node_modules/colord/index.mjs"),names=__webpack_require__("./node_modules/colord/plugins/names.mjs"),constants=__webpack_require__("./packages/components/src/custom-gradient-picker/constants.ts");function serializeGradientColorStop({type,value,length}){return`${function serializeGradientColor({type,value}){return"literal"===type?value:"hex"===type?`#${value}`:`${type}(${value.join(",")})`}({type,value})} ${function serializeGradientPosition(position){if(!position)return"";const{value,type}=position;return`${value}${type}`}(length)}`}function serializeGradient({type,orientation,colorStops}){const serializedOrientation=function serializeGradientOrientation(orientation){if(!Array.isArray(orientation)&&orientation&&"angular"===orientation.type)return`${orientation.value}deg`}(orientation);return`${type}(${[serializedOrientation,...colorStops.sort(((colorStop1,colorStop2)=>{const getNumericStopValue=colorStop=>void 0===colorStop?.length?.value?0:parseInt(colorStop.length.value);return getNumericStopValue(colorStop1)-getNumericStopValue(colorStop2)})).map(serializeGradientColorStop)].filter(Boolean).join(",")})`}function hasUnsupportedLength(item){return void 0===item.length||"%"!==item.length.type}function getStopCssColor(colorStop){switch(colorStop.type){case"hex":return`#${colorStop.value}`;case"literal":return colorStop.value;case"rgb":case"rgba":return`${colorStop.type}(${colorStop.value.join(",")})`;default:return"transparent"}}(0,colord.l7)([names.Z]);var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),flex_block_component=__webpack_require__("./packages/components/src/flex/flex-block/component.tsx");const SelectWrapper=(0,emotion_styled_base_browser_esm.Z)(flex_block_component.Z,{target:"e10bzpgi1"})({name:"1gvx10y",styles:"flex-grow:5"}),AccessoryWrapper=(0,emotion_styled_base_browser_esm.Z)(flex_block_component.Z,{target:"e10bzpgi0"})({name:"1gvx10y",styles:"flex-grow:5"});try{SelectWrapper.displayName="SelectWrapper",SelectWrapper.__docgenInfo={description:"",displayName:"SelectWrapper",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"select"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#SelectWrapper"]={docgenInfo:SelectWrapper.__docgenInfo,name:"SelectWrapper",path:"packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#SelectWrapper"})}catch(__react_docgen_typescript_loader_error){}try{AccessoryWrapper.displayName="AccessoryWrapper",AccessoryWrapper.__docgenInfo={description:"",displayName:"AccessoryWrapper",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"select"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#AccessoryWrapper"]={docgenInfo:AccessoryWrapper.__docgenInfo,name:"AccessoryWrapper",path:"packages/components/src/custom-gradient-picker/styles/custom-gradient-picker-styles.tsx#AccessoryWrapper"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GradientAnglePicker=({gradientAST,hasGradient,onChange})=>{var _gradientAST$orientat;const angle=null!==(_gradientAST$orientat=gradientAST?.orientation?.value)&&void 0!==_gradientAST$orientat?_gradientAST$orientat:constants.KE;return(0,jsx_runtime.jsx)(angle_picker_control.Z,{onChange:newAngle=>{onChange(serializeGradient({...gradientAST,orientation:{type:"angular",value:`${newAngle}`}}))},value:hasGradient?angle:""})};GradientAnglePicker.displayName="GradientAnglePicker";const GradientTypePicker=({gradientAST,hasGradient,onChange})=>{const{type}=gradientAST;return(0,jsx_runtime.jsx)(select_control.Z,{__nextHasNoMarginBottom:!0,className:"components-custom-gradient-picker__type-picker",label:(0,build_module.__)("Type"),labelPosition:"top",onChange:next=>{"linear-gradient"===next&&onChange(serializeGradient({...gradientAST,orientation:gradientAST.orientation?void 0:constants.Pg,type:"linear-gradient"})),"radial-gradient"===next&&(()=>{const{orientation,...restGradientAST}=gradientAST;onChange(serializeGradient({...restGradientAST,type:"radial-gradient"}))})()},options:constants.C6,size:"__unstable-large",value:hasGradient?type:void 0})};function CustomGradientPicker({value,onChange,__experimentalIsRenderedInSidebar=!1}){const{gradientAST,hasGradient}=function getGradientAstWithDefault(value){let gradientAST,hasGradient=!!value;const valueToParse=null!=value?value:constants.ob;try{gradientAST=node.parse(valueToParse)[0]}catch(error){console.warn("wp.components.CustomGradientPicker failed to parse the gradient with error",error),gradientAST=node.parse(constants.ob)[0],hasGradient=!1}if(Array.isArray(gradientAST.orientation)||"directional"!==gradientAST.orientation?.type||(gradientAST.orientation={type:"angular",value:constants.dk[gradientAST.orientation.value].toString()}),gradientAST.colorStops.some(hasUnsupportedLength)){const{colorStops}=gradientAST,step=100/(colorStops.length-1);colorStops.forEach(((stop,index)=>{stop.length={value:""+step*index,type:"%"}}))}return{gradientAST,hasGradient}}(value),background=function getLinearGradientRepresentation(gradientAST){return serializeGradient({type:"linear-gradient",orientation:constants.Pg,colorStops:gradientAST.colorStops})}(gradientAST),controlPoints=gradientAST.colorStops.map((colorStop=>({color:getStopCssColor(colorStop),position:parseInt(colorStop.length.value)})));return(0,jsx_runtime.jsxs)(v_stack_component.Z,{spacing:4,className:"components-custom-gradient-picker",children:[(0,jsx_runtime.jsx)(gradient_bar.Z,{__experimentalIsRenderedInSidebar,background,hasGradient,value:controlPoints,onChange:newControlPoints=>{onChange(serializeGradient(function getGradientAstWithControlPoints(gradientAST,newControlPoints){return{...gradientAST,colorStops:newControlPoints.map((({position,color})=>{const{r,g,b,a}=(0,colord.Vi)(color).toRgb();return{length:{type:"%",value:position?.toString()},type:a<1?"rgba":"rgb",value:a<1?[`${r}`,`${g}`,`${b}`,`${a}`]:[`${r}`,`${g}`,`${b}`]}}))}}(gradientAST,newControlPoints)))}}),(0,jsx_runtime.jsxs)(component.Z,{gap:3,className:"components-custom-gradient-picker__ui-line",children:[(0,jsx_runtime.jsx)(SelectWrapper,{children:(0,jsx_runtime.jsx)(GradientTypePicker,{gradientAST,hasGradient,onChange})}),(0,jsx_runtime.jsx)(AccessoryWrapper,{children:"linear-gradient"===gradientAST.type&&(0,jsx_runtime.jsx)(GradientAnglePicker,{gradientAST,hasGradient,onChange})})]})]})}GradientTypePicker.displayName="GradientTypePicker",CustomGradientPicker.displayName="CustomGradientPicker";const custom_gradient_picker=CustomGradientPicker;try{CustomGradientPicker.displayName="CustomGradientPicker",CustomGradientPicker.__docgenInfo={description:"CustomGradientPicker is a React component that renders a UI for specifying\nlinear or radial gradients. Radial gradients are displayed in the picker as\na slice of the gradient from the center to the outside.\n\n```jsx\nimport { CustomGradientPicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyCustomGradientPicker = () => {\n  const [ gradient, setGradient ] = useState();\n\n  return (\n    <CustomGradientPicker\n\t\tvalue={ gradient }\n\t\tonChange={ setGradient }\n    />\n  );\n};\n```",displayName:"CustomGradientPicker",props:{__nextHasNoMargin:{defaultValue:{value:"false"},description:"Start opting in to the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)\n@deprecated Default behavior since WP 6.5. Prop can be safely removed.\n@ignore",name:"__nextHasNoMargin",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'"},description:"The current value of the gradient. Pass a css gradient string (See default value for example).\nOptionally pass in a `null` value to specify no gradient is currently selected.",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The function called when a new gradient has been defined. It is passed to\nthe `currentGradient` as an argument.",name:"onChange",required:!0,type:{name:"(currentGradient: string) => void"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"Whether this is rendered in the sidebar.",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-gradient-picker/index.tsx#CustomGradientPicker"]={docgenInfo:CustomGradientPicker.__docgenInfo,name:"CustomGradientPicker",path:"packages/components/src/custom-gradient-picker/index.tsx#CustomGradientPicker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/custom-gradient-picker/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/custom-gradient-picker/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CustomGradientPicker",component:___WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{sourceLink:"packages/components/src/custom-gradient-picker",badges:[],actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},CustomGradientPickerWithState=({onChange,...props})=>{const[gradient,setGradient]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...props,value:gradient,onChange:newGradient=>{setGradient(newGradient),onChange(newGradient)}})};CustomGradientPickerWithState.displayName="CustomGradientPickerWithState";const Default=CustomGradientPickerWithState.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...props\n}) => {\n  const [gradient, setGradient] = useState<string>();\n  return <CustomGradientPicker {...props} value={gradient} onChange={newGradient => {\n    setGradient(newGradient);\n    onChange(newGradient);\n  }} />;\n}",...Default.parameters?.docs?.source}}}}}]);