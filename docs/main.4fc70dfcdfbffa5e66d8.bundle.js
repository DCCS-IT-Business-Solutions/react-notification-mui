(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(module,__webpack_exports__,__webpack_require__){"use strict";var NotificationType,react=__webpack_require__(0),Snackbar=__webpack_require__(697),SnackbarContent=__webpack_require__(695),IconButton=__webpack_require__(696),Typography=__webpack_require__(680),Close=__webpack_require__(162),Close_default=__webpack_require__.n(Close);function NotificationItem(props){var ref=react.createRef();function handleClose(event,reason){"clickaway"!==reason&&(event&&event.stopPropagation&&event.stopPropagation(),props.onClose(props.id))}return react.useEffect(function(){if(ref.current&&props.onSetHeight){var clientHeight=ref.current.clientHeight||0;props.onSetHeight(props.id,clientHeight)}},[]),react.createElement(Snackbar.a,{ref:ref,anchorOrigin:props.anchorOrigin,transitionDuration:props.transitionDuration,open:props.open,onClose:handleClose,onExited:function handleExited(){props.onExited(props.id)},autoHideDuration:props.remainingDuration,style:{marginTop:props.onCalcMarginTop(props.index),zIndex:10003}},props.title?react.createElement(SnackbarContent.a,{style:props.snackBarStyle,message:react.createElement(TitleMessageComponent,{message:props.message,messageStyle:props.snackBarMessageStyle,messageVariant:props.snackBarMessageVariant,title:props.title,titleStyle:props.snackBarTitleStyle,titleVariant:props.snackBarTitleVariant}),action:props.action||react.createElement(IconButton.a,{onClick:function(e){return handleClose(e,"SnackbarContentActionClose")}},react.createElement(Close_default.a,{style:{color:"#ffffff"}}))}):react.createElement(SnackbarContent.a,{style:props.snackBarStyle,message:react.createElement(ReactNodeOrString,{text:props.message,variant:props.snackBarMessageVariant,style:props.snackBarMessageStyle||props.snackBarStyle}),action:props.action||react.createElement(IconButton.a,{onClick:function(e){return handleClose(e,"SnackbarContentActionClose")}},react.createElement(Close_default.a,{style:{color:"#ffffff"}}))}))}function TitleMessageComponent(props){return react.createElement("div",null,react.createElement(ReactNodeOrString,{text:props.title,variant:props.titleVariant,style:props.titleStyle}),react.createElement(ReactNodeOrString,{text:props.message,variant:props.messageVariant,style:props.messageStyle}))}function ReactNodeOrString(props){return react.createElement("div",null,"string"==typeof props.text?react.createElement(Typography.a,{variant:props.variant,style:props.style},props.text):props.text)}!function(NotificationType){NotificationType[NotificationType.info=0]="info",NotificationType[NotificationType.warning=1]="warning",NotificationType[NotificationType.error=2]="error",NotificationType[NotificationType.custom=3]="custom"}(NotificationType||(NotificationType={}));try{NotificationItem.displayName="NotificationItem",NotificationItem.__docgenInfo={description:"",displayName:"NotificationItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(id: number) => void"}},onExited:{defaultValue:null,description:"",name:"onExited",required:!0,type:{name:"(id: number) => void"}},onSetHeight:{defaultValue:null,description:"",name:"onSetHeight",required:!1,type:{name:"(id: number, height: number) => void"}},onCalcMarginTop:{defaultValue:null,description:"",name:"onCalcMarginTop",required:!0,type:{name:"(index: number) => number"}},anchorOrigin:{defaultValue:null,description:"",name:"anchorOrigin",required:!0,type:{name:"SnackbarOrigin"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"ReactNode"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"NotificationType"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},remainingDuration:{defaultValue:null,description:"",name:"remainingDuration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/NotificationItem.tsx#NotificationItem"]={docgenInfo:NotificationItem.__docgenInfo,name:"NotificationItem",path:"src/NotificationItem.tsx#NotificationItem"})}catch(__react_docgen_typescript_loader_error){}var moment=__webpack_require__(1);__webpack_require__.d(__webpack_exports__,"b",function(){return NotificationContextProvider}),__webpack_require__.d(__webpack_exports__,"a",function(){return NotificationContext});var __assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};function NotificationContextProvider(props){var _a=react.useState([]),notifications=_a[0],setNotifications=_a[1];function addNotification(noti){!0===props.displayOldestOnTop?setNotifications(__spreadArrays(notifications,[__assign({},noti)])):setNotifications(__spreadArrays([__assign({},noti)],notifications))}function handleClose(id){setNotifications(notifications.map(function(noti){return noti.id===id?__assign(__assign({},noti),{open:!1}):__assign({},noti)}))}function handleExited(id){setNotifications(notifications.filter(function(noti){return noti.id!==id}))}function handleSetHeight(id,height){setNotifications(notifications.map(function(noti){return noti.id===id?__assign(__assign({},noti),{height:height}):__assign({},noti)}))}function handleCalcMarginTop(index){var marginTop=0;return notifications.slice(0,index).forEach(function(noti){return marginTop+=noti.height||0}),marginTop+8*index}function calcRemainingDuration(noti){if(noti.autoHideDuration)return noti.autoHideDuration-(moment.now()-noti.timestamp)}return react.createElement(NotificationContext.Provider,{value:{addInfo:function addInfo(message,title){var now=moment.now();addNotification(__assign(__assign({},props.infoProps),{id:now+Math.random(),timestamp:now,open:!0,variant:NotificationType.info,remainingDuration:props.infoProps.autoHideDuration,message:message,title:title}))},addWarning:function addWarning(message,title){var now=moment.now();addNotification(__assign(__assign({},props.warningProps),{id:now+Math.random(),timestamp:now,open:!0,variant:NotificationType.warning,remainingDuration:props.infoProps.autoHideDuration,message:message,title:title}))},addError:function addError(message,title){var now=moment.now();addNotification(__assign(__assign({},props.errorProps),{id:now+Math.random(),timestamp:now,open:!0,variant:NotificationType.error,remainingDuration:props.infoProps.autoHideDuration,message:message,title:title}))},addCustomNotification:function addCustomNotification(notification){var now=moment.now();addNotification(__assign(__assign({transitionDuration:750,enableClickAway:!1,snackBarMessageVariant:"body1",snackBarTitleVariant:"h6"},notification),{id:now+Math.random(),remainingDuration:notification.autoHideDuration,timestamp:now,open:!0,variant:NotificationType.custom}))}}},props.children,notifications.map(function(noti,index){return react.createElement(NotificationItem,__assign({},noti,{key:noti.id,index:index,onClose:handleClose,onExited:handleExited,remainingDuration:calcRemainingDuration(noti),onSetHeight:handleSetHeight,onCalcMarginTop:handleCalcMarginTop,anchorOrigin:props.anchorOrigin}))}))}NotificationContextProvider.defaultProps={anchorOrigin:{vertical:"top",horizontal:"right"},infoProps:{transitionDuration:750,enableClickAway:!1,autoHideDuration:2500,snackBarStyle:{backgroundColor:"green",color:"white",fontSize:16},snackBarMessageVariant:"body1",snackBarTitleVariant:"h6"},warningProps:{transitionDuration:750,enableClickAway:!1,autoHideDuration:2500,snackBarStyle:{backgroundColor:"orange",color:"white",fontSize:16},snackBarMessageVariant:"body1",snackBarTitleVariant:"h6"},errorProps:{transitionDuration:750,enableClickAway:!1,snackBarStyle:{backgroundColor:"red",color:"white",fontSize:16},snackBarMessageVariant:"body1",snackBarTitleVariant:"h6"}};var NotificationContext=react.createContext({});try{NotificationContextProvider.displayName="NotificationContextProvider",NotificationContextProvider.__docgenInfo={description:"",displayName:"NotificationContextProvider",props:{displayOldestOnTop:{defaultValue:null,description:"",name:"displayOldestOnTop",required:!1,type:{name:"boolean"}},infoProps:{defaultValue:null,description:"",name:"infoProps",required:!0,type:{name:"INotificationTypeProps"}},warningProps:{defaultValue:null,description:"",name:"warningProps",required:!0,type:{name:"INotificationTypeProps"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!0,type:{name:"INotificationTypeProps"}},anchorOrigin:{defaultValue:null,description:"",name:"anchorOrigin",required:!0,type:{name:"SnackbarOrigin"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/NotificationContext.tsx#NotificationContextProvider"]={docgenInfo:NotificationContextProvider.__docgenInfo,name:"NotificationContextProvider",path:"src/NotificationContext.tsx#NotificationContextProvider"})}catch(__react_docgen_typescript_loader_error){}},394:function(module,exports,__webpack_require__){__webpack_require__(395),__webpack_require__(506),module.exports=__webpack_require__(507)},417:function(module,exports){},507:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(46),__webpack_require__(38),__webpack_require__(37),__webpack_require__(47),__webpack_require__(48);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(115),req=__webpack_require__(669);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(197)(module))},669:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":670};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=669},670:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(118),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(387),_src_NotificationContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(163);function TestNotifications(props){var _a=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_src_NotificationContext__WEBPACK_IMPORTED_MODULE_4__.a),addInfo=_a.addInfo,addWarning=_a.addWarning,addError=_a.addError,addCustomNotification=_a.addCustomNotification;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){addInfo("This is an Info Notification. This part is the text part!","Info Notification")}},"Show Info Notification"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){addWarning("Warning Notification")}},"Show Warning Notification"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){addError("Error Notification")}},"Show Error Notification"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:function(){addCustomNotification({title:"CustomNotification",message:"This is a customNotification"})}},"Show Custom Notification"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null))}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Notification",module).add("Notification",function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_NotificationContext__WEBPACK_IMPORTED_MODULE_4__.b,{displayOldestOnTop:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{style:{minWidth:"600px",minHeight:"600px",padding:"10px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TestNotifications,null)))})}.call(this,__webpack_require__(197)(module))},678:function(module,exports,__webpack_require__){var map={"./af":255,"./af.js":255,"./ar":256,"./ar-dz":257,"./ar-dz.js":257,"./ar-kw":258,"./ar-kw.js":258,"./ar-ly":259,"./ar-ly.js":259,"./ar-ma":260,"./ar-ma.js":260,"./ar-sa":261,"./ar-sa.js":261,"./ar-tn":262,"./ar-tn.js":262,"./ar.js":256,"./az":263,"./az.js":263,"./be":264,"./be.js":264,"./bg":265,"./bg.js":265,"./bm":266,"./bm.js":266,"./bn":267,"./bn.js":267,"./bo":268,"./bo.js":268,"./br":269,"./br.js":269,"./bs":270,"./bs.js":270,"./ca":271,"./ca.js":271,"./cs":272,"./cs.js":272,"./cv":273,"./cv.js":273,"./cy":274,"./cy.js":274,"./da":275,"./da.js":275,"./de":276,"./de-at":277,"./de-at.js":277,"./de-ch":278,"./de-ch.js":278,"./de.js":276,"./dv":279,"./dv.js":279,"./el":280,"./el.js":280,"./en-SG":281,"./en-SG.js":281,"./en-au":282,"./en-au.js":282,"./en-ca":283,"./en-ca.js":283,"./en-gb":284,"./en-gb.js":284,"./en-ie":285,"./en-ie.js":285,"./en-il":286,"./en-il.js":286,"./en-nz":287,"./en-nz.js":287,"./eo":288,"./eo.js":288,"./es":289,"./es-do":290,"./es-do.js":290,"./es-us":291,"./es-us.js":291,"./es.js":289,"./et":292,"./et.js":292,"./eu":293,"./eu.js":293,"./fa":294,"./fa.js":294,"./fi":295,"./fi.js":295,"./fo":296,"./fo.js":296,"./fr":297,"./fr-ca":298,"./fr-ca.js":298,"./fr-ch":299,"./fr-ch.js":299,"./fr.js":297,"./fy":300,"./fy.js":300,"./ga":301,"./ga.js":301,"./gd":302,"./gd.js":302,"./gl":303,"./gl.js":303,"./gom-latn":304,"./gom-latn.js":304,"./gu":305,"./gu.js":305,"./he":306,"./he.js":306,"./hi":307,"./hi.js":307,"./hr":308,"./hr.js":308,"./hu":309,"./hu.js":309,"./hy-am":310,"./hy-am.js":310,"./id":311,"./id.js":311,"./is":312,"./is.js":312,"./it":313,"./it-ch":314,"./it-ch.js":314,"./it.js":313,"./ja":315,"./ja.js":315,"./jv":316,"./jv.js":316,"./ka":317,"./ka.js":317,"./kk":318,"./kk.js":318,"./km":319,"./km.js":319,"./kn":320,"./kn.js":320,"./ko":321,"./ko.js":321,"./ku":322,"./ku.js":322,"./ky":323,"./ky.js":323,"./lb":324,"./lb.js":324,"./lo":325,"./lo.js":325,"./lt":326,"./lt.js":326,"./lv":327,"./lv.js":327,"./me":328,"./me.js":328,"./mi":329,"./mi.js":329,"./mk":330,"./mk.js":330,"./ml":331,"./ml.js":331,"./mn":332,"./mn.js":332,"./mr":333,"./mr.js":333,"./ms":334,"./ms-my":335,"./ms-my.js":335,"./ms.js":334,"./mt":336,"./mt.js":336,"./my":337,"./my.js":337,"./nb":338,"./nb.js":338,"./ne":339,"./ne.js":339,"./nl":340,"./nl-be":341,"./nl-be.js":341,"./nl.js":340,"./nn":342,"./nn.js":342,"./pa-in":343,"./pa-in.js":343,"./pl":344,"./pl.js":344,"./pt":345,"./pt-br":346,"./pt-br.js":346,"./pt.js":345,"./ro":347,"./ro.js":347,"./ru":348,"./ru.js":348,"./sd":349,"./sd.js":349,"./se":350,"./se.js":350,"./si":351,"./si.js":351,"./sk":352,"./sk.js":352,"./sl":353,"./sl.js":353,"./sq":354,"./sq.js":354,"./sr":355,"./sr-cyrl":356,"./sr-cyrl.js":356,"./sr.js":355,"./ss":357,"./ss.js":357,"./sv":358,"./sv.js":358,"./sw":359,"./sw.js":359,"./ta":360,"./ta.js":360,"./te":361,"./te.js":361,"./tet":362,"./tet.js":362,"./tg":363,"./tg.js":363,"./th":364,"./th.js":364,"./tl-ph":365,"./tl-ph.js":365,"./tlh":366,"./tlh.js":366,"./tr":367,"./tr.js":367,"./tzl":368,"./tzl.js":368,"./tzm":369,"./tzm-latn":370,"./tzm-latn.js":370,"./tzm.js":369,"./ug-cn":371,"./ug-cn.js":371,"./uk":372,"./uk.js":372,"./ur":373,"./ur.js":373,"./uz":374,"./uz-latn":375,"./uz-latn.js":375,"./uz.js":374,"./vi":376,"./vi.js":376,"./x-pseudo":377,"./x-pseudo.js":377,"./yo":378,"./yo.js":378,"./zh-cn":379,"./zh-cn.js":379,"./zh-hk":380,"./zh-hk.js":380,"./zh-tw":381,"./zh-tw.js":381};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=678}},[[394,1,2]]]);
//# sourceMappingURL=main.4fc70dfcdfbffa5e66d8.bundle.js.map