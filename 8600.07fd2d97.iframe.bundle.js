"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8600],{"./packages/components/node_modules/@ariakit/core/esm/tab/tab-store.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createTabStore});var _chunks_VH2P7HEP_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/VH2P7HEP.js"),_chunks_I2WJ7JBQ_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/I2WJ7JBQ.js"),_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/KLPDXTDE.js"),_chunks_22HHDS5F_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/22HHDS5F.js"),_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");function createTabStore(_a={}){var _b=_a,{composite:parentComposite,combobox}=_b,props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.S0)(_b,["composite","combobox"]);const independentKeys=["items","renderedItems","moves","orientation","virtualFocus","includesBaseElement","baseElement","focusLoop","focusShift","focusWrap"],store=(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.yt)(props.store,(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.CE)(parentComposite,independentKeys),(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.CE)(combobox,independentKeys)),syncState=null==store?void 0:store.getState(),composite=(0,_chunks_VH2P7HEP_js__WEBPACK_IMPORTED_MODULE_2__.t)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.ih)({},props),{store,includesBaseElement:(0,_chunks_22HHDS5F_js__WEBPACK_IMPORTED_MODULE_3__.LS)(props.includesBaseElement,null==syncState?void 0:syncState.includesBaseElement,!1),orientation:(0,_chunks_22HHDS5F_js__WEBPACK_IMPORTED_MODULE_3__.LS)(props.orientation,null==syncState?void 0:syncState.orientation,"horizontal"),focusLoop:(0,_chunks_22HHDS5F_js__WEBPACK_IMPORTED_MODULE_3__.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),panels=(0,_chunks_I2WJ7JBQ_js__WEBPACK_IMPORTED_MODULE_4__.h)(),initialState=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.ih)({},composite.getState()),{selectedId:(0,_chunks_22HHDS5F_js__WEBPACK_IMPORTED_MODULE_3__.LS)(props.selectedId,null==syncState?void 0:syncState.selectedId,props.defaultSelectedId),selectOnMove:(0,_chunks_22HHDS5F_js__WEBPACK_IMPORTED_MODULE_3__.LS)(props.selectOnMove,null==syncState?void 0:syncState.selectOnMove,!0)}),tab=(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.MT)(initialState,composite,store);(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.cY)(tab,(()=>(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.Z_)(tab,["moves"],(()=>{const{activeId,selectOnMove}=tab.getState();if(!selectOnMove)return;if(!activeId)return;const tabItem=composite.item(activeId);tabItem&&(tabItem.dimmed||tabItem.disabled||tab.setState("selectedId",tabItem.id))})))),(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.cY)(tab,(()=>(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.dC)(tab,["selectedId"],((state,prev)=>{parentComposite&&state.selectedId===prev.selectedId||tab.setState("activeId",state.selectedId)})))),(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.cY)(tab,(()=>(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.Z_)(tab,["selectedId","renderedItems"],(state=>{if(void 0!==state.selectedId)return;const{activeId,renderedItems}=tab.getState(),tabItem=composite.item(activeId);if(!tabItem||tabItem.disabled||tabItem.dimmed){const tabItem2=renderedItems.find((item=>!item.disabled&&!item.dimmed));tab.setState("selectedId",null==tabItem2?void 0:tabItem2.id)}else tab.setState("selectedId",tabItem.id)})))),(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.cY)(tab,(()=>(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.Z_)(tab,["renderedItems"],(state=>{const tabs=state.renderedItems;if(tabs.length)return(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.Z_)(panels,["renderedItems"],(state2=>{const items=state2.renderedItems;items.some((panel=>!panel.tabId))&&items.forEach(((panel,i)=>{if(panel.tabId)return;const tabItem=tabs[i];tabItem&&panels.renderItem((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.ih)({},panel),{tabId:tabItem.id}))}))}))}))));let selectedIdFromSelectedValue=null;return(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.cY)(tab,(()=>{const backupSelectedId=()=>{selectedIdFromSelectedValue=tab.getState().selectedId},restoreSelectedId=()=>{tab.setState("selectedId",selectedIdFromSelectedValue)};return parentComposite&&"setSelectElement"in parentComposite?(0,_chunks_22HHDS5F_js__WEBPACK_IMPORTED_MODULE_3__.tS)((0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.Z_)(parentComposite,["value"],backupSelectedId),(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.Z_)(parentComposite,["open"],restoreSelectedId)):combobox?(0,_chunks_22HHDS5F_js__WEBPACK_IMPORTED_MODULE_3__.tS)((0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.Z_)(combobox,["selectedValue"],backupSelectedId),(0,_chunks_KLPDXTDE_js__WEBPACK_IMPORTED_MODULE_1__.Z_)(combobox,["open"],restoreSelectedId)):void 0})),(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.ih)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__.ih)({},composite),tab),{panels,setSelectedId:id=>tab.setState("selectedId",id),select:id=>{tab.setState("selectedId",id),composite.move(id)}})}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3L4UCDWT.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vo:()=>useComboboxProviderContext,h3:()=>useComboboxContext});var _53KINMNA_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/53KINMNA.js"),_URSEQETI_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/URSEQETI.js"),_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/YIF72NQG.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ctx=((0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),(0,_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.re)([_URSEQETI_js__WEBPACK_IMPORTED_MODULE_2__.qo,_53KINMNA_js__WEBPACK_IMPORTED_MODULE_3__.Lq],[_URSEQETI_js__WEBPACK_IMPORTED_MODULE_2__.ZQ,_53KINMNA_js__WEBPACK_IMPORTED_MODULE_3__.al])),useComboboxContext=ctx.useContext,useComboboxProviderContext=(ctx.useScopedContext,ctx.useProviderContext);ctx.ContextProvider,ctx.ScopedContextProvider,(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1)},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/FXF6FFAU.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EB:()=>useSelectScopedContext,TG:()=>useSelectContext,bq:()=>SelectItemCheckedContext,ht:()=>useSelectProviderContext,jC:()=>SelectScopedContextProvider,vP:()=>SelectHeadingContext});var _53KINMNA_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/53KINMNA.js"),_URSEQETI_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/URSEQETI.js"),_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/YIF72NQG.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ctx=(0,_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.re)([_URSEQETI_js__WEBPACK_IMPORTED_MODULE_2__.qo,_53KINMNA_js__WEBPACK_IMPORTED_MODULE_3__.Lq],[_URSEQETI_js__WEBPACK_IMPORTED_MODULE_2__.ZQ,_53KINMNA_js__WEBPACK_IMPORTED_MODULE_3__.al]),useSelectContext=ctx.useContext,useSelectScopedContext=ctx.useScopedContext,useSelectProviderContext=ctx.useProviderContext,SelectScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider),SelectItemCheckedContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1),SelectHeadingContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null)},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HOOW7GH2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useTabStore});var _3L4UCDWT_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3L4UCDWT.js"),_FXF6FFAU_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/FXF6FFAU.js"),_WH6Q5C3D_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/WH6Q5C3D.js"),_DTNGDFNU_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DTNGDFNU.js"),_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OPTPHWV7.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),_ariakit_core_tab_tab_store__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/tab/tab-store.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useTabStore(props={}){const combobox=(0,_3L4UCDWT_js__WEBPACK_IMPORTED_MODULE_5__.h3)(),composite=(0,_FXF6FFAU_js__WEBPACK_IMPORTED_MODULE_6__.TG)()||combobox;props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__.EZ)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__.ih)({},props),{composite:void 0!==props.composite?props.composite:composite,combobox:void 0!==props.combobox?props.combobox:combobox});const[store,update]=(0,_DTNGDFNU_js__WEBPACK_IMPORTED_MODULE_3__.oR)(_ariakit_core_tab_tab_store__WEBPACK_IMPORTED_MODULE_7__.j,props);return function useTabStoreProps(store,update,props){(0,_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_1__.rf)(update,[props.composite,props.combobox]),store=(0,_WH6Q5C3D_js__WEBPACK_IMPORTED_MODULE_2__.b)(store,update,props),(0,_DTNGDFNU_js__WEBPACK_IMPORTED_MODULE_3__.XS)(store,props,"selectedId","setSelectedId"),(0,_DTNGDFNU_js__WEBPACK_IMPORTED_MODULE_3__.XS)(store,props,"selectOnMove");const[panels,updatePanels]=(0,_DTNGDFNU_js__WEBPACK_IMPORTED_MODULE_3__.oR)((()=>store.panels),{});return(0,_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_1__.rf)(updatePanels,[store,updatePanels]),Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__.EZ)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__.ih)({},store),{panels})),[store,panels]),{composite:props.composite,combobox:props.combobox})}(store,update,props)}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/XHMHIT7V.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A5:()=>TabScopedContextProvider,Nt:()=>useTabProviderContext,aq:()=>useTabScopedContext});var _53KINMNA_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/53KINMNA.js"),ctx=(0,__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/YIF72NQG.js").re)([_53KINMNA_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_53KINMNA_js__WEBPACK_IMPORTED_MODULE_1__.al]),useTabScopedContext=(ctx.useContext,ctx.useScopedContext),useTabProviderContext=ctx.useProviderContext,TabScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./packages/components/node_modules/@ariakit/react-core/esm/tab/tab-list.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>TabList});var _chunks_XHMHIT7V_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/XHMHIT7V.js"),_chunks_QMBMAMY2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/QMBMAMY2.js"),_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/YIF72NQG.js"),_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OPTPHWV7.js"),_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/22HHDS5F.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useTabList=(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((function useTabList2(_a){var _b=_a,{store}=_b,props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_XHMHIT7V_js__WEBPACK_IMPORTED_MODULE_3__.Nt)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1);const orientation=store.useState((state=>"both"===state.orientation?void 0:state.orientation));return props=(0,_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_XHMHIT7V_js__WEBPACK_IMPORTED_MODULE_3__.A5,{value:store,children:element})),[store]),store.composite&&(props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({focusable:!1},props)),props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"tablist","aria-orientation":orientation},props),props=(0,_chunks_QMBMAMY2_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store},props))})),TabList=(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.Gp)((function TabList2(props){const htmlProps=useTabList(props);return(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./packages/components/node_modules/@ariakit/react-core/esm/tab/tab-panel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>TabPanel});var _chunks_XHMHIT7V_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/XHMHIT7V.js"),_chunks_OEBCGVCG_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OEBCGVCG.js"),_chunks_TNHM3SUC_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/TNHM3SUC.js"),_chunks_DYAGAZRT_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DYAGAZRT.js"),_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/YIF72NQG.js"),_chunks_5UDX7WKK_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/5UDX7WKK.js"),_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OPTPHWV7.js"),_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),_ariakit_core_tab_tab_store__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/tab/tab-store.js"),_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/utils/focus.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/22HHDS5F.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useTabPanel=(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_2__.Bi)((function useTabPanel2(_a){var _b=_a,{store,unmountOnHide,tabId:tabIdProp,getItem:getItemProp}=_b,props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.S0)(_b,["store","unmountOnHide","tabId","getItem"]);const context=(0,_chunks_XHMHIT7V_js__WEBPACK_IMPORTED_MODULE_4__.Nt)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.kG)(store,!1);const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),id=(0,_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_6__.Me)(props.id),[hasTabbableChildren,setHasTabbableChildren]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(!element)return;const tabbable=(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.SI)(element);setHasTabbableChildren(!!tabbable.length)}),[]);const getItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item=>{const nextItem=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({},item),{id:id||item.id,tabId:tabIdProp});return getItemProp?getItemProp(nextItem):nextItem}),[id,tabIdProp,getItemProp]),onKeyDownProp=props.onKeyDown,onKeyDown=(0,_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_6__.zX)((event=>{if(null==onKeyDownProp||onKeyDownProp(event),event.defaultPrevented)return;if(!(null==store?void 0:store.composite))return;const state=store.getState(),tab=(0,_ariakit_core_tab_tab_store__WEBPACK_IMPORTED_MODULE_8__.j)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({},state),{activeId:state.selectedId}));tab.setState("renderedItems",state.renderedItems);const action={ArrowLeft:tab.previous,ArrowRight:tab.next,Home:tab.first,End:tab.last}[event.key];if(!action)return;const nextId=action();nextId&&(event.preventDefault(),store.move(nextId))}));props=(0,_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_6__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunks_XHMHIT7V_js__WEBPACK_IMPORTED_MODULE_4__.A5,{value:store,children:element})),[store]);const tabId=store.panels.useState((()=>{var _a2;return tabIdProp||(null==(_a2=null==store?void 0:store.panels.item(id))?void 0:_a2.tabId)})),open=store.useState((state=>!!tabId&&state.selectedId===tabId)),disclosure=(0,_chunks_5UDX7WKK_js__WEBPACK_IMPORTED_MODULE_9__.M)({open}),mounted=disclosure.useState("mounted");return props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({id,role:"tabpanel","aria-labelledby":tabId||void 0},props),{children:unmountOnHide&&!mounted?null:props.children,ref:(0,_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_6__.qq)(ref,props.ref),onKeyDown}),props=(0,_chunks_DYAGAZRT_js__WEBPACK_IMPORTED_MODULE_10__.k)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({focusable:!store.composite&&!hasTabbableChildren},props)),props=(0,_chunks_TNHM3SUC_js__WEBPACK_IMPORTED_MODULE_11__.fM)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({store:disclosure},props)),props=(0,_chunks_OEBCGVCG_js__WEBPACK_IMPORTED_MODULE_12__.g)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({store:store.panels},props),{getItem}))})),TabPanel=(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_2__.Gp)((function TabPanel2(props){const htmlProps=useTabPanel(props);return(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_2__.az)("div",htmlProps)}))},"./packages/components/node_modules/@ariakit/react-core/esm/tab/tab.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Tab});var _chunks_XHMHIT7V_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/XHMHIT7V.js"),_chunks_UN4MKOLN_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/UN4MKOLN.js"),_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/YIF72NQG.js"),_chunks_DTNGDFNU_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DTNGDFNU.js"),_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OPTPHWV7.js"),_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/22HHDS5F.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useTab=(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_2__.Bi)((function useTab2(_a){var _b=_a,{store,accessibleWhenDisabled=!0,getItem:getItemProp}=_b,props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.S0)(_b,["store","accessibleWhenDisabled","getItem"]);const context=(0,_chunks_XHMHIT7V_js__WEBPACK_IMPORTED_MODULE_4__.aq)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.kG)(store,!1);const defaultId=(0,_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_6__.Me)(),id=props.id||defaultId,dimmed=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.EE)(props),getItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item=>{const nextItem=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({},item),{dimmed});return getItemProp?getItemProp(nextItem):nextItem}),[dimmed,getItemProp]),onClickProp=props.onClick,onClick=(0,_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_6__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||null==store||store.setSelectedId(id)})),panelId=store.panels.useState((state=>{var _a2;return null==(_a2=state.items.find((item=>item.tabId===id)))?void 0:_a2.id})),shouldRegisterItem=!!defaultId&&props.shouldRegisterItem,isActive=store.useState((state=>!!id&&state.activeId===id)),selected=store.useState((state=>!!id&&state.selectedId===id)),hasActiveItem=store.useState((state=>!!store.item(state.activeId))),canRegisterComposedItem=isActive||selected&&!hasActiveItem;props=(0,_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_6__.OJ)(props,(element=>{if(!(null==store?void 0:store.composite))return element;const defaultProps={id,store:store.composite,shouldRegisterItem:canRegisterComposedItem&&shouldRegisterItem,render:element};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunks_UN4MKOLN_js__WEBPACK_IMPORTED_MODULE_7__.A,(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({},defaultProps),{render:store.combobox&&store.composite!==store.combobox?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunks_UN4MKOLN_js__WEBPACK_IMPORTED_MODULE_7__.A,(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({},defaultProps),{store:store.combobox})):element}))}),[store,id,canRegisterComposedItem,shouldRegisterItem]);return(0,_chunks_DTNGDFNU_js__WEBPACK_IMPORTED_MODULE_8__.Kw)(store.combobox||store.composite,"virtualFocus")&&(props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({},props),{tabIndex:-1})),props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({id,role:"tab","aria-selected":selected,"aria-controls":panelId||void 0},props),{onClick}),props=(0,_chunks_UN4MKOLN_js__WEBPACK_IMPORTED_MODULE_7__.E)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({store},props),{accessibleWhenDisabled,getItem,shouldRegisterItem}))})),Tab=(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_2__.X$)((0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_2__.Gp)((function Tab2(props){const htmlProps=useTab(props);return(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_2__.az)("button",htmlProps)})))}}]);