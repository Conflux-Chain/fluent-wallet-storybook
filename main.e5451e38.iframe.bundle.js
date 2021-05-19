(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1179:function(module,exports){},1181:function(module,exports){},1190:function(module,exports){},1192:function(module,exports){},1217:function(module,exports){},1219:function(module,exports){},1220:function(module,exports){},1225:function(module,exports){},1227:function(module,exports){},1233:function(module,exports){},1235:function(module,exports){},1253:function(module,exports){},1265:function(module,exports){},1268:function(module,exports){},1280:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(464).configure)([__webpack_require__(1281),__webpack_require__(1282)],module,!1)}).call(this,__webpack_require__(73)(module))},1281:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1281},1282:function(module,exports,__webpack_require__){var map={"./doc-ui/rpc-parameter/index.stories.js":1288};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1282},1283:function(module,exports,__webpack_require__){var map={"./cfx_epoch-number":260,"./cfx_epoch-number/":260,"./cfx_epoch-number/index":260,"./cfx_epoch-number/index.js":260,"./wallet_add-vault":273,"./wallet_add-vault/":273,"./wallet_add-vault/index":273,"./wallet_add-vault/index.js":273,"./wallet_create-account":261,"./wallet_create-account/":261,"./wallet_create-account/index":261,"./wallet_create-account/index.js":261,"./wallet_generate-address":262,"./wallet_generate-address/":262,"./wallet_generate-address/index":262,"./wallet_generate-address/index.js":262,"./wallet_generate-mnemonic":263,"./wallet_generate-mnemonic/":263,"./wallet_generate-mnemonic/index":263,"./wallet_generate-mnemonic/index.js":263,"./wallet_generate-private-key":264,"./wallet_generate-private-key/":264,"./wallet_generate-private-key/index":264,"./wallet_generate-private-key/index.js":264,"./wallet_get-vaults":265,"./wallet_get-vaults/":265,"./wallet_get-vaults/index":265,"./wallet_get-vaults/index.js":265,"./wallet_import-address":266,"./wallet_import-address/":266,"./wallet_import-address/index":266,"./wallet_import-address/index.js":266,"./wallet_import-mnemonic":267,"./wallet_import-mnemonic/":267,"./wallet_import-mnemonic/index":267,"./wallet_import-mnemonic/index.js":267,"./wallet_import-private-key":268,"./wallet_import-private-key/":268,"./wallet_import-private-key/index":268,"./wallet_import-private-key/index.js":268,"./wallet_is-locked":269,"./wallet_is-locked/":269,"./wallet_is-locked/index":269,"./wallet_is-locked/index.js":269,"./wallet_lock":270,"./wallet_lock/":270,"./wallet_lock/index":270,"./wallet_lock/index.js":270,"./wallet_unlock":271,"./wallet_unlock/":271,"./wallet_unlock/index":271,"./wallet_unlock/index.js":271,"./wallet_validate-password":272,"./wallet_validate-password/":272,"./wallet_validate-password/index":272,"./wallet_validate-password/index.js":272};function webpackAsyncContext(req){return webpackAsyncContextResolve(req).then(__webpack_require__)}function webpackAsyncContextResolve(req){return Promise.all([__webpack_require__.e(6),__webpack_require__.e(0),__webpack_require__.e(7)]).then((function(){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}))}webpackAsyncContext.keys=function webpackAsyncContextKeys(){return Object.keys(map)},webpackAsyncContext.resolve=webpackAsyncContextResolve,webpackAsyncContext.id=1283,module.exports=webpackAsyncContext},1288:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"wallet_validatePassword",(function(){return wallet_validatePassword})),__webpack_require__.d(__webpack_exports__,"wallet_addVault",(function(){return wallet_addVault})),__webpack_require__.d(__webpack_exports__,"wallet_createAccount",(function(){return wallet_createAccount}));var react=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),esm=__webpack_require__(253),dist_es2015=__webpack_require__(627),RPCS={},Stores={},useRPC=function(rpcName){if(!rpcName)throw new Error("invalid rpcName: "+rpcName);var isNewRpc=!Stores[rpcName];isNewRpc&&(Stores[rpcName]=function(rpcName){return Object(esm.a)((function(set,get){return{_retryCount:0,cantLoadRPC:null,loadingRPC:!0,rpcName:rpcName,setRPC:function(){var rpcName=get().rpcName;if(rpcName){if(RPCS[rpcName])return set(Object.assign({},RPCS[rpcName],{loadingRPC:!1}));var rpcPkgName=`${rpcName.slice(0,rpcName.lastIndexOf("_")+1)}${Object(dist_es2015.a)(rpcName.slice(rpcName.lastIndexOf("_")+1))}`;window&&__webpack_require__(1283)("./"+rpcPkgName).then((function(rpc){return set(Object.assign({},rpc,{loadingRPC:!1}))})).catch((function(err){var _get2=get(),_retryCount=_get2._retryCount,setRPC=_get2.setRPC;if(_retryCount<5)return set((function(_ref){return{_retryCount:_ref._retryCount+1}})),void setRPC();console.error(err),set({cantLoadRPC:err})}))}}}}))}(rpcName));var s=Stores[rpcName]();return Object(react.useEffect)((function(){isNewRpc&&s.setRPC()}),[isNewRpc]),s};useRPC.__docgenInfo={description:"",methods:[],displayName:"useRPC"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/doc-ui/useRPC/index.js"]={name:"useRPC",docgenInfo:useRPC.__docgenInfo,path:"packages/doc-ui/useRPC/index.js"});var SPEC=null,GEN=null,useSpec_Stores={},createSpec=function(id){return Object(esm.a)((function(set,get){return{_id:id,_specRetryCount:0,_genRetryCount:0,cantLoadSpec:null,cantLoadGen:null,loadingSpec:!0,loadingGen:!0,schema:null,doc:null,parsedData:null,data:null,spec:SPEC,gen:GEN,error:null,valid:null,validating:!1,setData:function(data){var parsedData;try{parsedData=JSON.parse(data)}catch(err){}set(void 0!==parsedData?{parsedData:parsedData}:{parsedData:data}),set({data:data}),get().validate()},isLoading:function(){return get().loadingSpec},validate:async function(){var s=get();if(s.loadingSpec||!s.schema||null===s.data||"undefined"===s.data||""===s.data)return null;set({validating:!0});var valid=await s.spec.validate(s.schema,s.parsedData);return set({valid:valid,validating:!1}),s.setError(),valid},setDoc:function(){var _s$spec,s=get();if(null!==(_s$spec=s.spec)&&void 0!==_s$spec&&_s$spec.generateDocumentation&&s.schema){var doc=s.spec.generateDocumentation(s.schema);return set({doc:doc}),doc}},setError:async function(){var s=get();if(s.validating||null===s.valid||s.valid)return null;var error=await s.spec.explain(s.schema,s.parsedData);return Array.isArray(error)||(error=[error]),set({error:error}),error},setSchema:function(schema){return set({schema:schema}),get().validate(),get().setDoc()},setSpec:function(){var _get=get(),spec=_get.spec,setDoc=_get.setDoc,validate=_get.validate;if(spec)return validate(),void setDoc();window&&Promise.all([__webpack_require__.e(0),__webpack_require__.e(10)]).then(__webpack_require__.bind(null,1465)).then((function(spec){SPEC=spec,set({spec:spec,loadingSpec:!1})})).then((function(){return get().validate()})).then((function(){return get().setDoc()})).catch((function(err){var _get2=get(),_specRetryCount=_get2._specRetryCount,setSpec=_get2.setSpec;if(_specRetryCount<5)return set((function(_ref){return{_specRetryCount:_ref._specRetryCount+1}})),void setSpec();console.error(err),set({cantLoadSpec:err})}))},setGen:function(){get().gen||window&&Promise.all([__webpack_require__.e(0),__webpack_require__.e(11)]).then(__webpack_require__.bind(null,1466)).then((function(_ref2){var gen=_ref2.gen;GEN=gen,set({gen:gen,loadingGen:!1})})).catch((function(err){var _get4=get(),_genRetryCount=_get4._genRetryCount,setGen=_get4.setGen;if(_genRetryCount<5)return set((function(_ref3){return{_genRetryCount:_ref3._genRetryCount+1}})),void setGen();console.error(err),set({cantLoadGen:err})}))}}}))},useSpec=function(id){var _ref4=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},schema=_ref4.schema,data=_ref4.data;if(!id)throw new Error("invalid spec id: "+id);var isNewSpec=!useSpec_Stores[id];isNewSpec&&(useSpec_Stores[id]=createSpec(id));var useStore=useSpec_Stores[id],s=useStore();return Object(react.useEffect)((function(){schema&&s.setSchema(schema)}),[schema]),Object(react.useEffect)((function(){data&&s.setData(data)}),[data]),Object(react.useEffect)((function(){isNewSpec&&(s.setSpec(),s.setGen())}),[isNewSpec]),s};useSpec.__docgenInfo={description:"",methods:[],displayName:"useSpec"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/doc-ui/useSpec/index.js"]={name:"useSpec",docgenInfo:useSpec.__docgenInfo,path:"packages/doc-ui/useSpec/index.js"});var jsx_runtime=__webpack_require__(6);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Var="var",renderParams=function(rpcName,_ref){var path=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0],children=_ref.children,params=_objectWithoutProperties(_ref,["children"]),k=params.k;return null!=children&&children.length?Object(jsx_runtime.jsx)(Param,Object.assign({hasChildren:!0,rpcName:rpcName},params,{path:path,children:children.map((function(c,idx){return renderParams(rpcName,Object.assign({},c,{parentK:k}),[].concat(_toConsumableArray(path),[idx]))}))}),k||path):Object(jsx_runtime.jsx)(Param,Object.assign({hasChildren:!1,rpcName:rpcName,path:path},params),k||path)};renderParams.displayName="renderParams";var Parameters=function(_ref2){var parameters=_ref2.parameters,rpcName=_ref2.rpcName,params=parameters,schemas=useRPC(rpcName).schemas;return params=useSpec(rpcName,{schema:null==schemas?void 0:schemas.input}).doc||params,Object(jsx_runtime.jsxs)("section",{className:"parameters",children:[Object(jsx_runtime.jsx)("h4",{children:"Parameters"}),Object(jsx_runtime.jsx)("form",{id:"rpc-form-"+rpcName,children:Object(jsx_runtime.jsxs)("table",{children:[Object(jsx_runtime.jsxs)("caption",{children:["Parameters of RPC method ",Object(jsx_runtime.jsx)(Var,{children:rpcName})]}),Object(jsx_runtime.jsx)("tbody",{children:renderParams(rpcName,params)})]})})]})};Parameters.displayName="Parameters";var Doc=function(_ref3){var doc=_ref3.doc;return Object(jsx_runtime.jsx)("p",{children:doc})};Doc.displayName="Doc";var Type=function(_ref4){var type=_ref4.type;return Object(jsx_runtime.jsx)(Var,{children:type})};Type.displayName="Type";var DataEntry=function(_ref5){var htmlElement=_ref5.htmlElement,rpcName=_ref5.rpcName,id=_ref5.id,onChange=_ref5.onChange,value=_ref5.value,Tag=(null==htmlElement?void 0:htmlElement.el)||"input",otherProps={};return"select"===Tag&&(console.log(htmlElement.values),otherProps.children=htmlElement.values.map((function(v,idx){return Object(jsx_runtime.jsx)("option",{value:v,children:""+v},idx)}))),"checkbox"===(null==htmlElement?void 0:htmlElement.type)?otherProps.checked=value:otherProps.value=value,Object(jsx_runtime.jsx)(Tag,Object.assign({id:id,onChange:onChange,form:"rpc-form-"+rpcName,type:(null==htmlElement?void 0:htmlElement.type)||"text"},otherProps))};DataEntry.displayName="DataEntry";var Validator=function(_ref6){var valid=_ref6.valid,error=_ref6.error,empty=_ref6.empty;return Object(jsx_runtime.jsx)("p",{children:empty?"Empty":valid?"Valid!":error})};Validator.displayName="Validator";var obj=Object(jsx_runtime.jsx)(Var,{children:"object"}),ParamWithChildren=function(_ref7){var type=_ref7.type,children=_ref7.children,rpcName=_ref7.rpcName,k=_ref7.k,kv=_ref7.kv,path=_ref7.path,legendOpts={cat:"array of",or:"one of",and:"all of",map:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[obj," with keys"]}),"?":"array with zero or one","*":"array with zero or more item as described","+":"array with one or more as described"},entryId=`${rpcName}-${kv&&k}-entry`,mapKey=Object(jsx_runtime.jsx)("label",{htmlFor:entryId,children:Object(jsx_runtime.jsx)(Var,{children:k})});return Object(jsx_runtime.jsxs)("tr",{className:"paramwithchildren",children:[path.length>1&&Object(jsx_runtime.jsx)("td",{children:k||path[path.length-1]}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsxs)("fieldset",{children:[Object(jsx_runtime.jsxs)("legend",{children:[kv&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[mapKey," ",": "," ",legendOpts[type]]}),!kv&&legendOpts[type]]}),Object(jsx_runtime.jsx)("table",{children:Object(jsx_runtime.jsx)("tbody",{children:children})})]})})]})};ParamWithChildren.displayName="ParamWithChildren";var TypeToHideValidation=["checkbox","radio"],ElementToHideValidation=["select"],ChildParam=function(_ref8){var _value$htmlElement,_value$htmlElement2,kv=_ref8.kv,parentK=_ref8.parentK,value=_ref8.value,rpcName=_ref8.rpcName,k=_ref8.k,path=_ref8.path,entryId=`${rpcName}-${(k||parentK||"")+"-"+path.join("-")}-entry`,name=Object(jsx_runtime.jsx)(Var,{children:k||path[path.length-1]}),_useSpec2=useSpec(entryId,{schema:null==value?void 0:value.schema}),setData=_useSpec2.setData,data=_useSpec2.data,valid=_useSpec2.valid,error=_useSpec2.error,gen=_useSpec2.gen,hideValidation=TypeToHideValidation.includes(null==value||null===(_value$htmlElement=value.htmlElement)||void 0===_value$htmlElement?void 0:_value$htmlElement.type)||ElementToHideValidation.includes(null==value||null===(_value$htmlElement2=value.htmlElement)||void 0===_value$htmlElement2?void 0:_value$htmlElement2.el);return Object(jsx_runtime.jsxs)("tr",{className:"childparam",children:[Object(jsx_runtime.jsxs)("td",{children:[kv&&Object(jsx_runtime.jsx)(Var,{children:k}),!kv&&Object(jsx_runtime.jsx)(Var,{children:path[path.length-1]})]}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsxs)("fieldset",{children:[Object(jsx_runtime.jsx)("legend",{children:Object(jsx_runtime.jsx)("label",{htmlFor:entryId,children:name})}),Object(jsx_runtime.jsx)("table",{children:Object(jsx_runtime.jsxs)("tbody",{children:[Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Type"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)(Type,Object.assign({},value))})]},"type"),Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Doc"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)(Doc,Object.assign({},value))})]},"doc"),Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Entry"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)(DataEntry,Object.assign({onChange:function(e){"checkbox"===e.target.type?setData(e.target.checked):setData(e.target.value)},value:null===data?"":data,rpcName:rpcName,id:entryId},value))})]},"data-entry"),!hideValidation&&Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Validation"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)(Validator,Object.assign({empty:null===data||""===data,valid:null==valid||valid,error:null!=error?error:[]},value))})]},"validator"),!hideValidation&&Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{children:"Random data"}),Object(jsx_runtime.jsx)("td",{children:Object(jsx_runtime.jsx)("button",{type:"button",onClick:function(){if(gen&&null!=value&&value.schema){var generated=gen(null==value?void 0:value.schema);if(Array.isArray(generated)||"object"==typeof generated)try{generated=JSON.stringify(generated)}catch(err){}setData(generated)}},children:"fill"})})]},"generator")]})})]})})]})};ChildParam.displayName="ChildParam";var Param=function(_ref9){var hasChildren=_ref9.hasChildren,props=_objectWithoutProperties(_ref9,["hasChildren"]);return hasChildren?Object(jsx_runtime.jsx)(ParamWithChildren,Object.assign({},props)):Object(jsx_runtime.jsx)(ChildParam,Object.assign({},props))};Param.displayName="Param",Doc.propTypes={doc:prop_types_default.a.string.isRequired},Type.propTypes={type:prop_types_default.a.string.isRequired},DataEntry.propTypes={value:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.bool]).isRequired,onChange:prop_types_default.a.func.isRequired,id:prop_types_default.a.string.isRequired,rpcName:prop_types_default.a.string.isRequired,htmlElement:prop_types_default.a.shape({el:prop_types_default.a.string,type:prop_types_default.a.string,values:prop_types_default.a.array})},DataEntry.defaulProps={htmlElement:{el:"input",type:"text",values:void 0}},Parameters.propTypes={parameters:prop_types_default.a.object.isRequired,rpcName:prop_types_default.a.string.isRequired},Param.propTypes={hasChildren:prop_types_default.a.bool.isRequired},ChildParam.propTypes={rpcName:prop_types_default.a.string.isRequired,path:prop_types_default.a.arrayOf(prop_types_default.a.number).isRequired,k:prop_types_default.a.string,kv:prop_types_default.a.bool,parentK:prop_types_default.a.string,value:prop_types_default.a.object.isRequired},ChildParam.defaultProps={k:void 0,kv:void 0,parentK:void 0},ParamWithChildren.propTypes={path:prop_types_default.a.arrayOf(prop_types_default.a.number).isRequired,k:prop_types_default.a.string,kv:prop_types_default.a.bool,rpcName:prop_types_default.a.string.isRequired,type:prop_types_default.a.oneOf(["map","or","and","cat","+","*","?","alt"]).isRequired,children:prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node),prop_types_default.a.node]).isRequired},ParamWithChildren.defaultProps={k:void 0,kv:void 0,parentK:void 0},Validator.propTypes={valid:prop_types_default.a.bool.isRequired,error:prop_types_default.a.array.isRequired,empty:prop_types_default.a.bool.isRequired},Parameters.__docgenInfo={description:"",methods:[],displayName:"Parameters",props:{parameters:{type:{name:"object"},required:!0,description:""},rpcName:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/doc-ui/rpc-parameter/index.js"]={name:"Parameters",docgenInfo:Parameters.__docgenInfo,path:"packages/doc-ui/rpc-parameter/index.js"});__webpack_exports__.default={title:"Doc Component/RPC Parameters",component:Parameters};var Template=function(args){return Object(jsx_runtime.jsx)(Parameters,Object.assign({},args))};Template.displayName="Template";var wallet_validatePassword=Template.bind({});wallet_validatePassword.args={parameters:{type:"map",children:[{type:"string",value:{doc:"String between 8 to 128 character",type:"password",htmlElement:{el:"input"}},kv:!0,k:"password"}]},rpcName:"wallet_validatePassword"};var wallet_addVault=Template.bind({});wallet_addVault.args={parameters:{type:"or",children:[{type:"map",children:[{type:"string",value:{doc:"String between 8 to 128 character",type:"password",htmlElement:{el:"input"}},kv:!0,k:"password"},{type:"mnemonic",value:{doc:"Mnemonic phrase",type:"mnemonic",htmlElement:{el:"input"}},kv:!0,k:"mnemonic"}]},{type:"map",children:[{type:"string",value:{doc:"String between 8 to 128 character",type:"password",htmlElement:{el:"input"}},kv:!0,k:"password"},{type:"privateKey",value:{doc:"0x-prefixed private key",type:"privateKey",htmlElement:{el:"input"}},kv:!0,k:"privateKey"}]},{type:"map",children:[{type:"string",value:{doc:"String between 8 to 128 character",type:"password",htmlElement:{el:"input"}},kv:!0,k:"password"},{type:"or",children:[{type:"re",value:{doc:"0x-prefixed address, confrom to regex /^0x[0-9a-fA-F]{40}$/",type:"re",htmlElement:{el:"input"}}},{type:"base32Address-1029-user",value:{doc:"Conflux base32 address with 'user' type and networkId is 1029",type:"base32Address-1029-user",htmlElement:{el:"input"}}},{type:"base32Address-1-user",value:{doc:"Conflux base32 address with 'user' type and networkId is 1",type:"base32Address-1-user",htmlElement:{el:"input"}}}],kv:!0,k:"address"}]}]},rpcName:"wallet_addVault"};var wallet_createAccount=Template.bind({});wallet_createAccount.args={parameters:{type:"map",children:[{type:"integer?",value:{doc:"natural number, id of vault in database",type:"integer?",htmlElement:{el:"input",type:"number"}},kv:!0,k:"vaultId"},{type:"true?",value:{doc:"only create 0x1-prefixed account(both in conflux and ethereum-like chains) if specify true",optional:!0,type:"true?",htmlElement:{el:"input",type:"checkbox"}},kv:!0,k:"only0x1Prefixed"},{type:"string",value:{doc:"hd wallet derivation path without the last address_index, check https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#abstract for detail",optional:!0,type:"string",htmlElement:{el:"input"}},kv:!0,k:"hdPath"}]},rpcName:"wallet_createAccount"},wallet_validatePassword.parameters=Object.assign({storySource:{source:"args => <Parameters {...args} />"}},wallet_validatePassword.parameters),wallet_addVault.parameters=Object.assign({storySource:{source:"args => <Parameters {...args} />"}},wallet_addVault.parameters),wallet_createAccount.parameters=Object.assign({storySource:{source:"args => <Parameters {...args} />"}},wallet_createAccount.parameters)},1293:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(44),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},651:function(module,exports,__webpack_require__){__webpack_require__(652),__webpack_require__(936),__webpack_require__(937),__webpack_require__(1285),__webpack_require__(1286),__webpack_require__(1290),__webpack_require__(1291),__webpack_require__(1289),__webpack_require__(1287),__webpack_require__(1292),__webpack_require__(1175),__webpack_require__(1271),__webpack_require__(1272),__webpack_require__(1277),__webpack_require__(1293),module.exports=__webpack_require__(1280)},748:function(module,exports){},937:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(464)}},[[651,3,4]]]);