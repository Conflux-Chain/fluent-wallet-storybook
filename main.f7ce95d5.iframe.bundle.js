(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1021:function(module,exports){},1023:function(module,exports){},1033:function(module,exports){},1035:function(module,exports){},1060:function(module,exports){},1061:function(module,exports){},1066:function(module,exports){},1068:function(module,exports){},1075:function(module,exports){},1094:function(module,exports){},1114:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(477).configure)([__webpack_require__(1115),__webpack_require__(1116)],module,!1)}).call(this,__webpack_require__(109)(module))},1115:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1115},1116:function(module,exports,__webpack_require__){var map={"./doc-ui/rpc-parameter/index.stories.js":1124};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1116},1117:function(module,exports,__webpack_require__){var map={"./cfx_accounts":253,"./cfx_accounts/":253,"./cfx_accounts/index":253,"./cfx_accounts/index.js":253,"./cfx_call":254,"./cfx_call/":254,"./cfx_call/index":254,"./cfx_call/index.js":254,"./cfx_chain-id":255,"./cfx_chain-id/":255,"./cfx_chain-id/index":255,"./cfx_chain-id/index.js":255,"./cfx_epoch-number":256,"./cfx_epoch-number/":256,"./cfx_epoch-number/index":256,"./cfx_epoch-number/index.js":256,"./cfx_estimate-gas-and-collateral":257,"./cfx_estimate-gas-and-collateral/":257,"./cfx_estimate-gas-and-collateral/index":257,"./cfx_estimate-gas-and-collateral/index.js":257,"./cfx_gas-price":258,"./cfx_gas-price/":258,"./cfx_gas-price/index":258,"./cfx_gas-price/index.js":258,"./cfx_get-account":259,"./cfx_get-account/":259,"./cfx_get-account/index":259,"./cfx_get-account/index.js":259,"./cfx_get-balance":260,"./cfx_get-balance/":260,"./cfx_get-balance/index":260,"./cfx_get-balance/index.js":260,"./cfx_get-code":261,"./cfx_get-code/":261,"./cfx_get-code/index":261,"./cfx_get-code/index.js":261,"./cfx_get-next-nonce":262,"./cfx_get-next-nonce/":262,"./cfx_get-next-nonce/index":262,"./cfx_get-next-nonce/index.js":262,"./cfx_get-status":263,"./cfx_get-status/":263,"./cfx_get-status/index":263,"./cfx_get-status/index.js":263,"./cfx_net-version":264,"./cfx_net-version/":264,"./cfx_net-version/index":264,"./cfx_net-version/index.js":264,"./cfx_request-accounts":248,"./cfx_request-accounts/":248,"./cfx_request-accounts/index":248,"./cfx_request-accounts/index.js":248,"./cfx_sign-typed-data_v4":244,"./cfx_sign-typed-data_v4/":244,"./cfx_sign-typed-data_v4/index":244,"./cfx_sign-typed-data_v4/index.js":244,"./eth_accounts":265,"./eth_accounts/":265,"./eth_accounts/index":265,"./eth_accounts/index.js":265,"./eth_block-number":266,"./eth_block-number/":266,"./eth_block-number/index":266,"./eth_block-number/index.js":266,"./eth_call":267,"./eth_call/":267,"./eth_call/index":267,"./eth_call/index.js":267,"./eth_chain-id":268,"./eth_chain-id/":268,"./eth_chain-id/index":268,"./eth_chain-id/index.js":268,"./eth_estimate-gas":269,"./eth_estimate-gas/":269,"./eth_estimate-gas/index":269,"./eth_estimate-gas/index.js":269,"./eth_gas-price":270,"./eth_gas-price/":270,"./eth_gas-price/index":270,"./eth_gas-price/index.js":270,"./eth_get-balance":271,"./eth_get-balance/":271,"./eth_get-balance/index":271,"./eth_get-balance/index.js":271,"./eth_get-code":272,"./eth_get-code/":272,"./eth_get-code/index":272,"./eth_get-code/index.js":272,"./eth_get-transaction-count":273,"./eth_get-transaction-count/":273,"./eth_get-transaction-count/index":273,"./eth_get-transaction-count/index.js":273,"./eth_request-accounts":249,"./eth_request-accounts/":249,"./eth_request-accounts/index":249,"./eth_request-accounts/index.js":249,"./eth_sign-typed-data_v4":274,"./eth_sign-typed-data_v4/":274,"./eth_sign-typed-data_v4/index":274,"./eth_sign-typed-data_v4/index.js":274,"./net_version":275,"./net_version/":275,"./net_version/index":275,"./net_version/index.js":275,"./personal_sign":276,"./personal_sign/":276,"./personal_sign/index":276,"./personal_sign/index.js":276,"./wallet_add-conflux-chain":277,"./wallet_add-conflux-chain/":277,"./wallet_add-conflux-chain/index":277,"./wallet_add-conflux-chain/index.js":277,"./wallet_add-ethereum-chain":250,"./wallet_add-ethereum-chain/":250,"./wallet_add-ethereum-chain/index":250,"./wallet_add-ethereum-chain/index.js":250,"./wallet_add-hd-path":278,"./wallet_add-hd-path/":278,"./wallet_add-hd-path/index":278,"./wallet_add-hd-path/index.js":278,"./wallet_add-network":251,"./wallet_add-network/":251,"./wallet_add-network/index":251,"./wallet_add-network/index.js":251,"./wallet_add-pending-user-auth-request":279,"./wallet_add-pending-user-auth-request/":279,"./wallet_add-pending-user-auth-request/index":279,"./wallet_add-pending-user-auth-request/index.js":279,"./wallet_add-vault":280,"./wallet_add-vault/":280,"./wallet_add-vault/index":280,"./wallet_add-vault/index.js":280,"./wallet_create-account":281,"./wallet_create-account/":281,"./wallet_create-account/index":281,"./wallet_create-account/index.js":281,"./wallet_create-address":282,"./wallet_create-address/":282,"./wallet_create-address/index":282,"./wallet_create-address/index.js":282,"./wallet_delete-account-group":283,"./wallet_delete-account-group/":283,"./wallet_delete-account-group/index":283,"./wallet_delete-account-group/index.js":283,"./wallet_delete-app":284,"./wallet_delete-app/":284,"./wallet_delete-app/index":284,"./wallet_delete-app/index.js":284,"./wallet_delete-network":285,"./wallet_delete-network/":285,"./wallet_delete-network/index":285,"./wallet_delete-network/index.js":285,"./wallet_detect-network-type":286,"./wallet_detect-network-type/":286,"./wallet_detect-network-type/index":286,"./wallet_detect-network-type/index.js":286,"./wallet_discover-accounts":330,"./wallet_discover-accounts/":330,"./wallet_discover-accounts/index":330,"./wallet_discover-accounts/index.js":330,"./wallet_export-account":287,"./wallet_export-account-group":288,"./wallet_export-account-group/":288,"./wallet_export-account-group/index":288,"./wallet_export-account-group/index.js":288,"./wallet_export-account/":287,"./wallet_export-account/index":287,"./wallet_export-account/index.js":287,"./wallet_export-all":289,"./wallet_export-all/":289,"./wallet_export-all/index":289,"./wallet_export-all/index.js":289,"./wallet_generate-address":290,"./wallet_generate-address/":290,"./wallet_generate-address/index":290,"./wallet_generate-address/index.js":290,"./wallet_generate-mnemonic":291,"./wallet_generate-mnemonic/":291,"./wallet_generate-mnemonic/index":291,"./wallet_generate-mnemonic/index.js":291,"./wallet_generate-private-key":292,"./wallet_generate-private-key/":292,"./wallet_generate-private-key/index":292,"./wallet_generate-private-key/index.js":292,"./wallet_get-account-address-by-network":293,"./wallet_get-account-address-by-network/":293,"./wallet_get-account-address-by-network/index":293,"./wallet_get-account-address-by-network/index.js":293,"./wallet_get-account-group":294,"./wallet_get-account-group-vault-value":295,"./wallet_get-account-group-vault-value/":295,"./wallet_get-account-group-vault-value/index":295,"./wallet_get-account-group-vault-value/index.js":295,"./wallet_get-account-group/":294,"./wallet_get-account-group/index":294,"./wallet_get-account-group/index.js":294,"./wallet_get-address-private-key":296,"./wallet_get-address-private-key/":296,"./wallet_get-address-private-key/index":296,"./wallet_get-address-private-key/index.js":296,"./wallet_get-balance":329,"./wallet_get-balance/":329,"./wallet_get-balance/index":329,"./wallet_get-balance/index.js":329,"./wallet_get-current-account":297,"./wallet_get-current-account/":297,"./wallet_get-current-account/index":297,"./wallet_get-current-account/index.js":297,"./wallet_get-current-network":298,"./wallet_get-current-network/":298,"./wallet_get-current-network/index":298,"./wallet_get-current-network/index.js":298,"./wallet_get-current-viewing-app":299,"./wallet_get-current-viewing-app/":299,"./wallet_get-current-viewing-app/index":299,"./wallet_get-current-viewing-app/index.js":299,"./wallet_get-network":300,"./wallet_get-network/":300,"./wallet_get-network/index":300,"./wallet_get-network/index.js":300,"./wallet_get-next-nonce":301,"./wallet_get-next-nonce/":301,"./wallet_get-next-nonce/index":301,"./wallet_get-next-nonce/index.js":301,"./wallet_get-pending-auth-request":302,"./wallet_get-pending-auth-request/":302,"./wallet_get-pending-auth-request/index":302,"./wallet_get-pending-auth-request/index.js":302,"./wallet_get-permissions":303,"./wallet_get-permissions/":303,"./wallet_get-permissions/index":303,"./wallet_get-permissions/index.js":303,"./wallet_import-address":304,"./wallet_import-address/":304,"./wallet_import-address/index":304,"./wallet_import-address/index.js":304,"./wallet_import-all":305,"./wallet_import-all/":305,"./wallet_import-all/index":305,"./wallet_import-all/index.js":305,"./wallet_import-mnemonic":306,"./wallet_import-mnemonic/":306,"./wallet_import-mnemonic/index":306,"./wallet_import-mnemonic/index.js":306,"./wallet_import-private-key":307,"./wallet_import-private-key/":307,"./wallet_import-private-key/index":307,"./wallet_import-private-key/index.js":307,"./wallet_is-locked":308,"./wallet_is-locked/":308,"./wallet_is-locked/index":308,"./wallet_is-locked/index.js":308,"./wallet_lock":309,"./wallet_lock/":309,"./wallet_lock/index":309,"./wallet_lock/index.js":309,"./wallet_refetch-token-list":310,"./wallet_refetch-token-list/":310,"./wallet_refetch-token-list/index":310,"./wallet_refetch-token-list/index.js":310,"./wallet_register-site-metadata":311,"./wallet_register-site-metadata/":311,"./wallet_register-site-metadata/index":311,"./wallet_register-site-metadata/index.js":311,"./wallet_request-permissions":328,"./wallet_request-permissions/":328,"./wallet_request-permissions/index":328,"./wallet_request-permissions/index.js":328,"./wallet_request-unlock-ui":312,"./wallet_request-unlock-ui/":312,"./wallet_request-unlock-ui/index":312,"./wallet_request-unlock-ui/index.js":312,"./wallet_set-app-current-account":313,"./wallet_set-app-current-account/":313,"./wallet_set-app-current-account/index":313,"./wallet_set-app-current-account/index.js":313,"./wallet_set-app-current-network":314,"./wallet_set-app-current-network/":314,"./wallet_set-app-current-network/index":314,"./wallet_set-app-current-network/index.js":314,"./wallet_set-current-account":315,"./wallet_set-current-account/":315,"./wallet_set-current-account/index":315,"./wallet_set-current-account/index.js":315,"./wallet_set-current-network":316,"./wallet_set-current-network/":316,"./wallet_set-current-network/index":316,"./wallet_set-current-network/index.js":316,"./wallet_switch-conflux-chain":317,"./wallet_switch-conflux-chain/":317,"./wallet_switch-conflux-chain/index":317,"./wallet_switch-conflux-chain/index.js":317,"./wallet_switch-ethereum-chain":243,"./wallet_switch-ethereum-chain/":243,"./wallet_switch-ethereum-chain/index":243,"./wallet_switch-ethereum-chain/index.js":243,"./wallet_unlock":318,"./wallet_unlock/":318,"./wallet_unlock/index":318,"./wallet_unlock/index.js":318,"./wallet_update-account":319,"./wallet_update-account-group":320,"./wallet_update-account-group/":320,"./wallet_update-account-group/index":320,"./wallet_update-account-group/index.js":320,"./wallet_update-account/":319,"./wallet_update-account/index":319,"./wallet_update-account/index.js":319,"./wallet_update-token-list":331,"./wallet_update-token-list/":331,"./wallet_update-token-list/index":331,"./wallet_update-token-list/index.js":331,"./wallet_user-approved-auth-request":321,"./wallet_user-approved-auth-request/":321,"./wallet_user-approved-auth-request/index":321,"./wallet_user-approved-auth-request/index.js":321,"./wallet_user-rejected-auth-request":322,"./wallet_user-rejected-auth-request/":322,"./wallet_user-rejected-auth-request/index":322,"./wallet_user-rejected-auth-request/index.js":322,"./wallet_validate-app-permissions":323,"./wallet_validate-app-permissions/":323,"./wallet_validate-app-permissions/index":323,"./wallet_validate-app-permissions/index.js":323,"./wallet_validate-mnemonic":324,"./wallet_validate-mnemonic/":324,"./wallet_validate-mnemonic/index":324,"./wallet_validate-mnemonic/index.js":324,"./wallet_validate-password":325,"./wallet_validate-password/":325,"./wallet_validate-password/index":325,"./wallet_validate-password/index.js":325,"./wallet_validate-private-key":326,"./wallet_validate-private-key/":326,"./wallet_validate-private-key/index":326,"./wallet_validate-private-key/index.js":326,"./wallet_zero-account-group":327,"./wallet_zero-account-group/":327,"./wallet_zero-account-group/index":327,"./wallet_zero-account-group/index.js":327};function webpackAsyncContext(req){return webpackAsyncContextResolve(req).then(__webpack_require__)}function webpackAsyncContextResolve(req){return Promise.all([__webpack_require__.e(7),__webpack_require__.e(0),__webpack_require__.e(8)]).then((function(){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}))}webpackAsyncContext.keys=function webpackAsyncContextKeys(){return Object.keys(map)},webpackAsyncContext.resolve=webpackAsyncContextResolve,webpackAsyncContext.id=1117,module.exports=webpackAsyncContext},1124:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"wallet_validatePassword",(function(){return wallet_validatePassword})),__webpack_require__.d(__webpack_exports__,"wallet_addVault",(function(){return wallet_addVault})),__webpack_require__.d(__webpack_exports__,"wallet_createAccount",(function(){return wallet_createAccount}));var react=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),zustand=__webpack_require__(240),zustand_default=__webpack_require__.n(zustand),dist_es2015=__webpack_require__(642);function _toArray(arr){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var RPCS={},Stores={},useRPC=function(rpcName){if(!rpcName)throw new Error(`invalid rpcName: ${rpcName}`);var isNewRpc=!Stores[rpcName];isNewRpc&&(Stores[rpcName]=function(rpcName){return zustand_default()((function(set,get){return{_retryCount:0,cantLoadRPC:null,loadingRPC:!0,rpcName:rpcName,setRPC:function(){var rpcName=get().rpcName;if(rpcName){if(RPCS[rpcName])return set(Object.assign({},RPCS[rpcName],{loadingRPC:!1}));var _rpcNameSplit=_toArray(rpcName.split("_")),rpcPkgNamePrefix=_rpcNameSplit[0],rpcPkgName=_rpcNameSplit.slice(1).reduce((function(acc,n){return acc+"_"+Object(dist_es2015.a)(n)}),rpcPkgNamePrefix);window&&__webpack_require__(1117)("./"+rpcPkgName).then((function(rpc){return set(Object.assign({},rpc,{loadingRPC:!1}))})).catch((function(err){if(/\[Package Error\]/.test(null==err?void 0:err.message)&&/skypack\.dev/.test(null==err?void 0:err.fileName))console.error(err);else{var _get2=get(),_retryCount=_get2._retryCount,setRPC=_get2.setRPC;if(_retryCount<5)return set((function(_ref){return{_retryCount:_ref._retryCount+1}})),void setRPC();console.error(err),set({cantLoadRPC:err})}}))}}}}))}(rpcName));var s=Stores[rpcName]();return Object(react.useEffect)((function(){isNewRpc&&s.setRPC()}),[isNewRpc,s]),s};useRPC.__docgenInfo={description:"",methods:[],displayName:"useRPC"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/doc-ui/useRPC/index.js"]={name:"useRPC",docgenInfo:useRPC.__docgenInfo,path:"packages/doc-ui/useRPC/index.js"});var SPEC=null,GEN=null,useSpec_Stores={},createSpec=function(id){return zustand_default()((function(set,get){return{_id:id,_specRetryCount:0,_genRetryCount:0,cantLoadSpec:null,cantLoadGen:null,loadingSpec:!0,loadingGen:!0,schema:null,doc:null,parsedData:null,data:null,spec:SPEC,gen:GEN,error:null,valid:null,validating:!1,setData:function(data){var parsedData;try{parsedData=JSON.parse(data)}catch(err){}set(void 0!==parsedData?{parsedData:parsedData}:{parsedData:data}),set({data:data}),get().validate()},isLoading:function(){return get().loadingSpec},validate:async function(){var s=get();if(s.loadingSpec||!s.schema||null===s.data||"undefined"===s.data||""===s.data)return null;set({validating:!0});var valid=await s.spec.validate(s.schema,s.parsedData);return set({valid:valid,validating:!1}),s.setError(),valid},setDoc:function(){var _s$spec,s=get();if(null!==(_s$spec=s.spec)&&void 0!==_s$spec&&_s$spec.generateDocumentation&&s.schema){var doc=s.spec.generateDocumentation(s.schema);return set({doc:doc}),doc}},setError:async function(){var s=get();if(s.validating||null===s.valid||s.valid)return null;var error=await s.spec.explain(s.schema,s.parsedData);return Array.isArray(error)||(error=[error]),set({error:error}),error},setSchema:function(schema){return set({schema:schema}),get().validate(),get().setDoc()},setSpec:function(){var _get=get(),spec=_get.spec,setDoc=_get.setDoc,validate=_get.validate;if(spec)return validate(),void setDoc();window&&Promise.all([__webpack_require__.e(0),__webpack_require__.e(13)]).then(__webpack_require__.bind(null,1442)).then((function(spec){SPEC=spec,set({spec:spec,loadingSpec:!1})})).then((function(){return get().validate()})).then((function(){return get().setDoc()})).catch((function(err){var _get2=get(),_specRetryCount=_get2._specRetryCount,setSpec=_get2.setSpec;if(_specRetryCount<5)return set((function(_ref){return{_specRetryCount:_ref._specRetryCount+1}})),void setSpec();console.error(err),set({cantLoadSpec:err})}))},setGen:function(){get().gen||window&&Promise.all([__webpack_require__.e(0),__webpack_require__.e(14)]).then(__webpack_require__.bind(null,1443)).then((function(_ref2){var gen=_ref2.gen;GEN=gen,set({gen:gen,loadingGen:!1})})).catch((function(err){var _get4=get(),_genRetryCount=_get4._genRetryCount,setGen=_get4.setGen;if(_genRetryCount<5)return set((function(_ref3){return{_genRetryCount:_ref3._genRetryCount+1}})),void setGen();console.error(err),set({cantLoadGen:err})}))}}}))},useSpec=function(id){var _ref4=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},schema=_ref4.schema,data=_ref4.data;if(!id)throw new Error(`invalid spec id: ${id}`);var isNewSpec=!useSpec_Stores[id];isNewSpec&&(useSpec_Stores[id]=createSpec(id));var useStore=useSpec_Stores[id],s=useStore();return Object(react.useEffect)((function(){schema&&s.setSchema(schema)}),[Boolean(schema),id]),Object(react.useEffect)((function(){data&&s.setData(data)}),[Boolean(data),id]),Object(react.useEffect)((function(){isNewSpec&&(s.setSpec(),s.setGen())}),[isNewSpec,id]),s};useSpec.__docgenInfo={description:"",methods:[],displayName:"useSpec"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/doc-ui/useSpec/index.js"]={name:"useSpec",docgenInfo:useSpec.__docgenInfo,path:"packages/doc-ui/useSpec/index.js"});var jsx_runtime=__webpack_require__(7),_excluded=["children"],_excluded2=["hasChildren"];function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return rpc_parameter_arrayLikeToArray(arr)}(arr)||function rpc_parameter_iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function rpc_parameter_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return rpc_parameter_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rpc_parameter_arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rpc_parameter_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Var="var",renderParams=function(rpcName,_ref){var path=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0],children=_ref.children,params=_objectWithoutProperties(_ref,_excluded),k=params.k;return null!=children&&children.length?Object(jsx_runtime.jsx)(Param,Object.assign({hasChildren:!0,rpcName:rpcName},params,{path:path,children:children.map((function(c,idx){return renderParams(rpcName,Object.assign({},c,{parentK:k}),[].concat(_toConsumableArray(path),[idx]))}))}),k||path):Object(jsx_runtime.jsx)(Param,Object.assign({hasChildren:!1,rpcName:rpcName,path:path},params),k||path)};renderParams.displayName="renderParams";var Parameters=function(_ref2){var parameters=_ref2.parameters,rpcName=_ref2.rpcName,params=parameters,schemas=useRPC(rpcName).schemas;return params=useSpec(rpcName,{schema:null==schemas?void 0:schemas.input}).doc||params,Object(jsx_runtime.jsxs)("section",{className:"parameters",children:[Object(jsx_runtime.jsx)("h4",{children:"Parameters"}),Object(jsx_runtime.jsx)("form",{id:`rpc-form-${rpcName}`,children:Object(jsx_runtime.jsxs)("table",{children:[Object(jsx_runtime.jsxs)("caption",{children:["Parameters of RPC method ",Object(jsx_runtime.jsx)(Var,{children:rpcName})]}),Object(jsx_runtime.jsx)("tbody",{children:renderParams(rpcName,params)})]})})]})};Parameters.displayName="Parameters";var Doc=function(_ref3){var doc=_ref3.doc;return Object(jsx_runtime.jsx)("p",{children:doc})};Doc.displayName="Doc";var Type=function(_ref4){var type=_ref4.type;return Object(jsx_runtime.jsx)(Var,{children:type})};Type.displayName="Type";var DataEntry=function(_ref5){var htmlElement=_ref5.htmlElement,rpcName=_ref5.rpcName,id=_ref5.id,onChange=_ref5.onChange,value=_ref5.value,Tag=(null==htmlElement?void 0:htmlElement.el)||"input",otherProps={};return"select"===Tag&&(otherProps.children=htmlElement.values.map((function(v,idx){return Object(jsx_runtime.jsx)("option",{value:v,children:""+v},idx)}))),"checkbox"===(null==htmlElement?void 0:htmlElement.type)?otherProps.checked=value:otherProps.value=value,Object(jsx_runtime.jsx)(Tag,Object.assign({id:id,onChange:onChange,form:`rpc-form-${rpcName}`,type:(null==htmlElement?void 0:htmlElement.type)||"text"},otherProps))};DataEntry.displayName="DataEntry";var Validator=function(_ref6){var valid=_ref6.valid,error=_ref6.error,empty=_ref6.empty;return Object(jsx_runtime.jsx)("p",{children:empty?"Empty":valid?"Valid!":error})};Validator.displayName="Validator";var obj=Object(jsx_runtime.jsx)(Var,{children:"object"}),ParamWithChildren=function(_ref7){var type=_ref7.type,children=_ref7.children,rpcName=_ref7.rpcName,k=_ref7.k,kv=_ref7.kv,path=_ref7.path,value=_ref7.value,legendOpts={maybe:"optional",cat:"array of",or:"one of",and:"all of",map:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[obj," with keys"]}),catn:"array item with below schema","?":"zero or one","*":"zero or more","+":"one or more"},entryId=`${rpcName}-${kv&&k}-entry`,mapKey=Object(jsx_runtime.jsxs)("label",{htmlFor:entryId,children:[Object(jsx_runtime.jsx)(Var,{children:k}),(null==value?void 0:value.optional)&&"(optional)"]});return Object(jsx_runtime.jsxs)("tr",{className:"paramwithchildren",children:[path.length>1&&Object(jsx_runtime.jsx)("td",{children:k||path[path.length-1]}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsxs)("fieldset",{children:[Object(jsx_runtime.jsxs)("legend",{children:[kv&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[mapKey," ",": "," ",legendOpts[type]]}),!kv&&legendOpts[type]," ",(null==value?void 0:value.optional)&&" (optional)"]}),Object(jsx_runtime.jsx)("table",{children:Object(jsx_runtime.jsx)("tbody",{children:children})})]})})]})};ParamWithChildren.displayName="ParamWithChildren";var TypeToHideValidation=["checkbox","radio"],ElementToHideValidation=["select"],ChildParam=function(_ref8){var _value$htmlElement,_value$htmlElement2,kv=_ref8.kv,parentK=_ref8.parentK,value=_ref8.value,rpcName=_ref8.rpcName,k=_ref8.k,path=_ref8.path,entryId=`${rpcName}-${(k||parentK||"")+"-"+path.join("-")}-entry`,name=Object(jsx_runtime.jsx)(Var,{children:(null==value?void 0:value.catnk)||k||path[path.length-1]}),_useSpec2=useSpec(entryId,{schema:null==value?void 0:value.schema}),setData=_useSpec2.setData,data=_useSpec2.data,valid=_useSpec2.valid,error=_useSpec2.error,gen=_useSpec2.gen,hideValidation=TypeToHideValidation.includes(null==value||null===(_value$htmlElement=value.htmlElement)||void 0===_value$htmlElement?void 0:_value$htmlElement.type)||ElementToHideValidation.includes(null==value||null===(_value$htmlElement2=value.htmlElement)||void 0===_value$htmlElement2?void 0:_value$htmlElement2.el);return Object(jsx_runtime.jsxs)("tr",{className:"childparam",children:[Object(jsx_runtime.jsxs)("td",{children:[kv&&Object(jsx_runtime.jsx)(Var,{children:k}),!kv&&Object(jsx_runtime.jsx)(Var,{children:path[path.length-1]})]}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsxs)("fieldset",{children:[Object(jsx_runtime.jsx)("legend",{children:Object(jsx_runtime.jsx)("label",{htmlFor:entryId,children:name})}),Object(jsx_runtime.jsx)("table",{children:Object(jsx_runtime.jsxs)("tbody",{children:[Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Type"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)(Type,Object.assign({},value))})]},"type"),Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Doc"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)(Doc,Object.assign({},value))})]},"doc"),(null==value?void 0:value.optional)&&Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Optional"}),Object(jsx_runtime.jsx)("td",{children:"true"})]},"optional"),Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Entry"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)(DataEntry,Object.assign({onChange:function(e){"checkbox"===e.target.type?setData(e.target.checked):setData(e.target.value)},value:null===data?"":data,rpcName:rpcName,id:entryId},value))})]},"data-entry"),!hideValidation&&Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Validation"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)(Validator,Object.assign({empty:null===data||""===data,valid:null==valid||valid,error:null!=error?error:[]},value))})]},"validator"),!hideValidation&&Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Random data"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)("button",{type:"button",onClick:function(){if(gen&&null!=value&&value.schema){var generated=gen(null==value?void 0:value.schema);if(Array.isArray(generated)||"object"==typeof generated)try{generated=JSON.stringify(generated)}catch(err){}setData(generated)}},children:"Random"})})]},"generator")]})})]})})]})};ChildParam.displayName="ChildParam";var Param=function(_ref9){var hasChildren=_ref9.hasChildren,props=_objectWithoutProperties(_ref9,_excluded2);return hasChildren?Object(jsx_runtime.jsx)(ParamWithChildren,Object.assign({},props)):Object(jsx_runtime.jsx)(ChildParam,Object.assign({},props))};Param.displayName="Param",Doc.propTypes={doc:prop_types_default.a.string.isRequired},Type.propTypes={type:prop_types_default.a.string.isRequired},DataEntry.propTypes={value:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.bool]).isRequired,onChange:prop_types_default.a.func.isRequired,id:prop_types_default.a.string.isRequired,rpcName:prop_types_default.a.string.isRequired,htmlElement:prop_types_default.a.shape({el:prop_types_default.a.string,type:prop_types_default.a.string,values:prop_types_default.a.array})},DataEntry.defaulProps={htmlElement:{el:"input",type:"text",values:void 0}},Parameters.propTypes={parameters:prop_types_default.a.object.isRequired,rpcName:prop_types_default.a.string.isRequired},Param.propTypes={hasChildren:prop_types_default.a.bool.isRequired},ChildParam.propTypes={rpcName:prop_types_default.a.string.isRequired,path:prop_types_default.a.arrayOf(prop_types_default.a.number).isRequired,k:prop_types_default.a.string,kv:prop_types_default.a.bool,parentK:prop_types_default.a.string,value:prop_types_default.a.object.isRequired},ChildParam.defaultProps={k:void 0,kv:void 0,parentK:void 0},ParamWithChildren.propTypes={path:prop_types_default.a.arrayOf(prop_types_default.a.number).isRequired,k:prop_types_default.a.string,kv:prop_types_default.a.bool,rpcName:prop_types_default.a.string.isRequired,type:prop_types_default.a.oneOf(["map","or","and","cat","catn","+","*","?","alt","maybe"]).isRequired,value:prop_types_default.a.object,children:prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node),prop_types_default.a.node]).isRequired},ParamWithChildren.defaultProps={value:void 0,k:void 0,kv:void 0,parentK:void 0},Validator.propTypes={valid:prop_types_default.a.bool.isRequired,error:prop_types_default.a.array.isRequired,empty:prop_types_default.a.bool.isRequired},Parameters.__docgenInfo={description:"",methods:[],displayName:"Parameters",props:{parameters:{type:{name:"object"},required:!0,description:""},rpcName:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/doc-ui/rpc-parameter/index.js"]={name:"Parameters",docgenInfo:Parameters.__docgenInfo,path:"packages/doc-ui/rpc-parameter/index.js"});__webpack_exports__.default={title:"Doc Component/RPC Parameters",component:Parameters};var Template=function(args){return Object(jsx_runtime.jsx)(Parameters,Object.assign({},args))};Template.displayName="Template";var wallet_validatePassword=Template.bind({});wallet_validatePassword.args={parameters:{type:"map",children:[{type:"string",value:{doc:"String between 8 to 128 character",type:"password",htmlElement:{el:"input"}},kv:!0,k:"password"}]},rpcName:"wallet_validatePassword"};var wallet_addVault=Template.bind({});wallet_addVault.args={parameters:{type:"or",children:[{type:"map",children:[{type:"string",value:{doc:"String between 8 to 128 character",type:"password",htmlElement:{el:"input"}},kv:!0,k:"password"},{type:"mnemonic",value:{doc:"Mnemonic phrase",type:"mnemonic",htmlElement:{el:"input"}},kv:!0,k:"mnemonic"}]},{type:"map",children:[{type:"string",value:{doc:"String between 8 to 128 character",type:"password",htmlElement:{el:"input"}},kv:!0,k:"password"},{type:"privateKey",value:{doc:"0x-prefixed private key",type:"privateKey",htmlElement:{el:"input"}},kv:!0,k:"privateKey"}]},{type:"map",children:[{type:"string",value:{doc:"String between 8 to 128 character",type:"password",htmlElement:{el:"input"}},kv:!0,k:"password"},{type:"or",children:[{type:"re",value:{doc:"0x-prefixed address, confrom to regex /^0x[0-9a-fA-F]{40}$/",type:"re",htmlElement:{el:"input"}}},{type:"base32Address-1029-user",value:{doc:"Conflux base32 address with 'user' type and networkId is 1029",type:"base32Address-1029-user",htmlElement:{el:"input"}}},{type:"base32Address-1-user",value:{doc:"Conflux base32 address with 'user' type and networkId is 1",type:"base32Address-1-user",htmlElement:{el:"input"}}}],kv:!0,k:"address"}]}]},rpcName:"wallet_addVault"};var wallet_createAccount=Template.bind({});wallet_createAccount.args={parameters:{type:"map",children:[{type:"integer?",value:{doc:"natural number, id of vault in database",type:"integer?",htmlElement:{el:"input",type:"number"}},kv:!0,k:"vaultId"},{type:"true?",value:{doc:"only create 0x1-prefixed account(both in conflux and ethereum-like chains) if specify true",optional:!0,type:"true?",htmlElement:{el:"input",type:"checkbox"}},kv:!0,k:"only0x1Prefixed"},{type:"string",value:{doc:"hd wallet derivation path without the last address_index, check https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#abstract for detail",optional:!0,type:"string",htmlElement:{el:"input"}},kv:!0,k:"hdPath"}]},rpcName:"wallet_createAccount"},wallet_validatePassword.parameters=Object.assign({storySource:{source:"args => <Parameters {...args} />"}},wallet_validatePassword.parameters),wallet_addVault.parameters=Object.assign({storySource:{source:"args => <Parameters {...args} />"}},wallet_addVault.parameters),wallet_createAccount.parameters=Object.assign({storySource:{source:"args => <Parameters {...args} />"}},wallet_createAccount.parameters)},1129:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(47),esm=__webpack_require__(3),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},664:function(module,exports,__webpack_require__){__webpack_require__(665),__webpack_require__(826),__webpack_require__(827),__webpack_require__(1119),__webpack_require__(1120),__webpack_require__(1126),__webpack_require__(1127),__webpack_require__(1125),__webpack_require__(1121),__webpack_require__(1128),__webpack_require__(1122),__webpack_require__(1016),__webpack_require__(1110),__webpack_require__(1123),__webpack_require__(1111),__webpack_require__(1129),module.exports=__webpack_require__(1114)},732:function(module,exports){},827:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(477)}},[[664,5,6]]]);