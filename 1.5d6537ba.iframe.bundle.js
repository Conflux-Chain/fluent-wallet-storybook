(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1160:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"popup",(function(){return popup_namespaceObject})),__webpack_require__.d(__webpack_exports__,"notification",(function(){return notification_namespaceObject})),__webpack_require__.d(__webpack_exports__,"badge",(function(){return badge_namespaceObject})),__webpack_require__.d(__webpack_exports__,"idle",(function(){return idle_namespaceObject})),__webpack_require__.d(__webpack_exports__,"tab",(function(){return tab_namespaceObject})),__webpack_require__.d(__webpack_exports__,"browser",(function(){return browser_polyfill_default.a}));var popup_namespaceObject={};__webpack_require__.r(popup_namespaceObject),__webpack_require__.d(popup_namespaceObject,"show",(function(){return show})),__webpack_require__.d(popup_namespaceObject,"removePopup",(function(){return removePopup})),__webpack_require__.d(popup_namespaceObject,"onFocusChanged",(function(){return onFocusChanged})),__webpack_require__.d(popup_namespaceObject,"onRemoved",(function(){return onRemoved})),__webpack_require__.d(popup_namespaceObject,"remove",(function(){return remove}));var notification_namespaceObject={};__webpack_require__.r(notification_namespaceObject),__webpack_require__.d(notification_namespaceObject,"create",(function(){return create}));var badge_namespaceObject={};__webpack_require__.r(badge_namespaceObject),__webpack_require__.d(badge_namespaceObject,"set",(function(){return set})),__webpack_require__.d(badge_namespaceObject,"clear",(function(){return clear}));var idle_namespaceObject={};__webpack_require__.r(idle_namespaceObject),__webpack_require__.d(idle_namespaceObject,"query",(function(){return query})),__webpack_require__.d(idle_namespaceObject,"isLocked",(function(){return isLocked})),__webpack_require__.d(idle_namespaceObject,"isIdle",(function(){return isIdle})),__webpack_require__.d(idle_namespaceObject,"listen",(function(){return listen}));var tab_namespaceObject={};__webpack_require__.r(tab_namespaceObject),__webpack_require__.d(tab_namespaceObject,"getCurrent",(function(){return getCurrent}));var _browser$windows3,_browser$windows4,browser_polyfill=__webpack_require__(1148),browser_polyfill_default=__webpack_require__.n(browser_polyfill),checks=__webpack_require__(1154),FOCUS_LISTENER=null,REMOVED_LISTENER=null,popup_focus=async function(wid){if(FOCUS_LISTENER)try{await browser_polyfill_default.a.windows.get(wid)&&await browser_polyfill_default.a.windows.update(wid,{focused:!0})}catch(err){FOCUS_LISTENER&&(browser_polyfill_default.a.windows.onFocusChanged.hasListener(FOCUS_LISTENER)&&browser_polyfill_default.a.windows.onFocusChanged.removeListener(FOCUS_LISTENER),FOCUS_LISTENER=null)}else FOCUS_LISTENER=function(){return popup_focus(wid)},REMOVED_LISTENER=function(removedWId){removedWId===wid&&(browser_polyfill_default.a.windows.onFocusChanged.hasListener(FOCUS_LISTENER)&&browser_polyfill_default.a.windows.onFocusChanged.removeListener(FOCUS_LISTENER),FOCUS_LISTENER=null,browser_polyfill_default.a.windows.onRemoved.hasListener(REMOVED_LISTENER)&&browser_polyfill_default.a.windows.onRemoved.removeListener(REMOVED_LISTENER),REMOVED_LISTENER=null)},browser_polyfill_default.a.windows.onRemoved.addListener(REMOVED_LISTENER),browser_polyfill_default.a.windows.onFocusChanged.addListener(FOCUS_LISTENER)},newPopup=async function(_ref){var url=_ref.url,alwaysOnTop=_ref.alwaysOnTop,lastFocused=await browser_polyfill_default.a.windows.getLastFocused({windowTypes:["normal"]}).catch((function(){})),w=await browser_polyfill_default.a.windows.create({type:"popup",focused:!0,url:url,width:360,height:620,left:null==lastFocused?void 0:lastFocused.left,top:null==lastFocused?void 0:lastFocused.top});return alwaysOnTop&&popup_focus(w.id),w},show=async function(){var _browser$windows,_await$browser$window,_ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref2$url=_ref2.url,url=void 0===_ref2$url?"popup.html":_ref2$url,_ref2$alwaysOnTop=_ref2.alwaysOnTop,alwaysOnTop=void 0!==_ref2$alwaysOnTop&&_ref2$alwaysOnTop;if(null!==browser_polyfill_default.a&&void 0!==browser_polyfill_default.a&&null!==(_browser$windows=browser_polyfill_default.a.windows)&&void 0!==_browser$windows&&_browser$windows.getAll){var popup=null===(_await$browser$window=(await browser_polyfill_default.a.windows.getAll()).filter((function(w){return"popup"===w.type})))||void 0===_await$browser$window?void 0:_await$browser$window[0];return popup?await browser_polyfill_default.a.windows.update(popup.id,{focused:!0}):popup=await newPopup({url:url,alwaysOnTop:alwaysOnTop}),popup}},removePopup=async function(){var _browser$windows2;if(null!==browser_polyfill_default.a&&void 0!==browser_polyfill_default.a&&null!==(_browser$windows2=browser_polyfill_default.a.windows)&&void 0!==_browser$windows2&&_browser$windows2.getAll){try{var _await$browser$window2,popup=null===(_await$browser$window2=(await browser_polyfill_default.a.windows.getAll()).filter((function(w){return"popup"===w.type})))||void 0===_await$browser$window2?void 0:_await$browser$window2[0];return popup&&await remove(popup.id),!0}catch(err){}return!1}},ON_FOCUS_CHANGED=[],ON_REMOVED=[];null!==browser_polyfill_default.a&&void 0!==browser_polyfill_default.a&&null!==(_browser$windows3=browser_polyfill_default.a.windows)&&void 0!==_browser$windows3&&_browser$windows3.onFocusChanged&&(browser_polyfill_default.a.windows.onFocusChanged.addListener((function(id){ON_FOCUS_CHANGED=ON_FOCUS_CHANGED.reduce((function(acc,f){try{if(f(id))return acc.concat(f)}catch(err){}return acc}),[])})),browser_polyfill_default.a.windows.onRemoved.addListener((function(id){ON_REMOVED=ON_REMOVED.reduce((function(acc,f){try{if(!0===f(id))return acc.concat(f)}catch(err){}return acc}),[])})));var _browser$idle,onFocusChanged=function(windowId,f){if(!Object(checks.b)(f))throw new Error("Invalid callback, must be a function");ON_FOCUS_CHANGED.push((function(id){return windowId!==id||f(id)}))},onRemoved=function(windowId,f){if(!Object(checks.b)(f))throw new Error("Invalid callback, must be a function");ON_REMOVED.push((function(id){return windowId!==id||f(id)}))},remove=null===(_browser$windows4=browser_polyfill_default.a.windows)||void 0===_browser$windows4?void 0:_browser$windows4.remove,create=function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_options$id=options.id,id=void 0===_options$id?"__FLUENT_NOTIFICATION__":_options$id,_options$type=options.type,type=void 0===_options$type?"basic":_options$type,_options$message=options.message,message=void 0===_options$message?"":_options$message,_options$title=options.title,title=void 0===_options$title?"Fluent wallet":_options$title,_options$iconUrl=options.iconUrl,iconUrl=void 0===_options$iconUrl?"images/icon-64.png":_options$iconUrl;return browser_polyfill_default.a.notifications.create(id,Object.assign({},options,{type:type,message:message,title:title,iconUrl:iconUrl}))},set=function(_ref){var _ref$text=_ref.text,text=void 0===_ref$text?"":_ref$text,_ref$color=_ref.color,color=void 0===_ref$color?"green":_ref$color;return Promise.all([browser_polyfill_default.a.browserAction.setBadgeText({text:text}),browser_polyfill_default.a.browserAction.setBadgeBackgroundColor({color:color})])},clear=function(){return browser_polyfill_default.a.browserAction.setBadgeText({text:""})};null===browser_polyfill_default.a||void 0===browser_polyfill_default.a||null===(_browser$idle=browser_polyfill_default.a.idle)||void 0===_browser$idle||_browser$idle.setDetectionInterval(15);var query=function(){return browser_polyfill_default.a.idle.queryState(15)},isLocked=async function(){return"locked"===await query()},isIdle=async function(){return"idle"===await query()},listen=function(f){browser_polyfill_default.a.idle.onStateChanged.addListener((function(s){return(null==s?void 0:s.newState)&&"active"!==(null==s?void 0:s.newState)&&f(s.newState)}))},getCurrent=function(){return browser_polyfill_default.a.tabs.query({active:!0})}}}]);