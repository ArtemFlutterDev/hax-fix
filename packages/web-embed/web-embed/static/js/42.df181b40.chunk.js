(this.webpackJsonp=this.webpackJsonp||[]).push([[42],{2935:function(e,t,n){"use strict";n.r(t),n.d(t,"Multicall",(function(){return h})),n.d(t,"providers",(function(){return b}));var a=n(61),i=n(444);const r={erc1271:Object.freeze({__proto__:null,abi:[{type:"function",name:"isValidSignature",constant:!0,inputs:[{type:"bytes32"},{type:"bytes"}],outputs:[{type:"bytes4"}],payable:!1,stateMutability:"view"}],returns:{isValidSignatureBytes32:"0x1626ba7e"}}),factory:Object.freeze({__proto__:null,abi:[{type:"function",name:"deploy",constant:!1,inputs:[{type:"address"},{type:"bytes32"}],outputs:[],payable:!0,stateMutability:"payable"}]}),mainModule:Object.freeze({__proto__:null,abi:[{type:"function",name:"nonce",constant:!0,inputs:[],outputs:[{type:"uint256"}],payable:!1,stateMutability:"view"},{type:"function",name:"readNonce",constant:!0,inputs:[{type:"uint256"}],outputs:[{type:"uint256"}],payable:!1,stateMutability:"view"},{type:"function",name:"updateImplementation",constant:!1,inputs:[{type:"address"}],outputs:[],payable:!1,stateMutability:"nonpayable"},{type:"function",name:"selfExecute",constant:!1,inputs:[{components:[{type:"bool",name:"delegateCall"},{type:"bool",name:"revertOnError"},{type:"uint256",name:"gasLimit"},{type:"address",name:"target"},{type:"uint256",name:"value"},{type:"bytes",name:"data"}],type:"tuple[]"}],outputs:[],payable:!1,stateMutability:"nonpayable"},{type:"function",name:"execute",constant:!1,inputs:[{components:[{type:"bool",name:"delegateCall"},{type:"bool",name:"revertOnError"},{type:"uint256",name:"gasLimit"},{type:"address",name:"target"},{type:"uint256",name:"value"},{type:"bytes",name:"data"}],type:"tuple[]"},{type:"uint256"},{type:"bytes"}],outputs:[],payable:!1,stateMutability:"nonpayable"},{type:"function",name:"createContract",inputs:[{type:"bytes"}],payable:!0,stateMutability:"payable"}]}),mainModuleUpgradable:Object.freeze({__proto__:null,abi:[{type:"function",name:"updateImageHash",constant:!0,inputs:[{type:"bytes32"}],outputs:[],payable:!1,stateMutability:"view"},{type:"function",name:"imageHash",constant:!0,inputs:[],outputs:[{type:"bytes32"}],payable:!1,stateMutability:"view"}]}),sequenceUtils:Object.freeze({__proto__:null,abi:[{inputs:[{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_mainModule",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_wallet",type:"address"},{indexed:!0,internalType:"bytes32",name:"_imageHash",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"_threshold",type:"uint256"},{indexed:!1,internalType:"bytes",name:"_signers",type:"bytes"}],name:"RequiredConfig",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_wallet",type:"address"},{indexed:!0,internalType:"address",name:"_signer",type:"address"}],name:"RequiredSigner",type:"event"},{inputs:[{internalType:"address",name:"_addr",type:"address"}],name:"callBalanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"callBlockNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_i",type:"uint256"}],name:"callBlockhash",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"callChainId",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"_addr",type:"address"}],name:"callCode",outputs:[{internalType:"bytes",name:"code",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_addr",type:"address"}],name:"callCodeHash",outputs:[{internalType:"bytes32",name:"codeHash",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_addr",type:"address"}],name:"callCodeSize",outputs:[{internalType:"uint256",name:"size",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"callCoinbase",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"callDifficulty",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"callGasLeft",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"callGasLimit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"callGasPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"callOrigin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"callTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"knownImageHashes",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"lastImageHashUpdate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lastSignerUpdate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lastWalletUpdate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"bool",name:"delegateCall",type:"bool"},{internalType:"bool",name:"revertOnError",type:"bool"},{internalType:"uint256",name:"gasLimit",type:"uint256"},{internalType:"address",name:"target",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],internalType:"struct IModuleCalls.Transaction[]",name:"_txs",type:"tuple[]"}],name:"multiCall",outputs:[{internalType:"bool[]",name:"_successes",type:"bool[]"},{internalType:"bytes[]",name:"_results",type:"bytes[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_wallet",type:"address"},{internalType:"uint256",name:"_threshold",type:"uint256"},{components:[{internalType:"uint256",name:"weight",type:"uint256"},{internalType:"address",name:"signer",type:"address"}],internalType:"struct RequireUtils.Member[]",name:"_members",type:"tuple[]"},{internalType:"bool",name:"_index",type:"bool"}],name:"publishConfig",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_wallet",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"uint256",name:"_sizeMembers",type:"uint256"},{internalType:"bytes",name:"_signature",type:"bytes"},{internalType:"bool",name:"_index",type:"bool"}],name:"publishInitialSigners",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_wallet",type:"address"},{internalType:"uint256",name:"_nonce",type:"uint256"}],name:"requireMinNonce",outputs:[],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_expiration",type:"uint256"}],name:"requireNonExpired",outputs:[],stateMutability:"view",type:"function"}]}),requireFreshSigner:Object.freeze({__proto__:null,abi:[{inputs:[{internalType:"address",name:"",type:"address"}],name:"requireFreshSigner",outputs:[],stateMutability:"nonpayable",type:"function"}]})};var s=n(3518);n(299);const o=(e,t=!1)=>(((e,t=!1,n=!1)=>{if(!e)throw new Error("invalid network config: empty config");const a=[];if(Array.isArray(e)?a.push(...e):a.push(e),0===a.length){if(t)throw new Error("invalid network config: empty config");return!1}const i=a.map(e=>e.chainId).sort(),r=i.filter((e,t)=>i.indexOf(e)!==t);if(r.length>0){if(t)throw new Error("invalid network config: duplicate chainIds "+r);return!1}a.forEach(e=>e.name=e.name.toLowerCase());const s=a.map(e=>e.name).sort(),o=s.filter((e,t)=>s.indexOf(e)!==t);if(o.length>0){if(t)throw new Error("invalid network config: duplicate network names "+o);return!1}let l=!1,u=!1;for(let c=0;c<a.length;c++){const e=a[c];if((!e.rpcUrl||""===e.rpcUrl)&&!e.provider){if(t)throw new Error(`invalid network config for chainId ${e.chainId}: rpcUrl or provider must be provided`);return!1}if(!n&&!e.relayer){if(t)throw new Error(`invalid network config for chainId ${e.chainId}: relayer must be provided`);return!1}if(e.isDefaultChain){if(l){if(t)throw new Error(`invalid network config for chainId ${e.chainId}: DefaultChain is already set by another config`);return!1}l=!0}if(e.isAuthChain){if(u&&t)throw new Error(`invalid network config for chainId ${e.chainId}: AuthChain is already set by another config`);u=!0}}if(!l){if(t)throw new Error("invalid network config: DefaultChain must be set");return!1}if(!u){if(t)throw new Error("invalid network config: AuthChain must be set");return!1}})(e,!0,t),e),l=(e,t,n)=>{let a=[];if(a="function"===typeof e&&n?e(n):e,t){a.forEach(e=>e.isDefaultChain=!1);const e=a.filter(e=>e.chainId===t);if(!e||0===e.length)throw new Error(`defaultChainId ${t} cannot be found in network list`);e[0].isDefaultChain=!0}return o(((e,t)=>{if(!e)return[];const n=e.sort((e,t)=>e.chainId===t.chainId?0:e.chainId<t.chainId?-1:1),a=parseInt(t);if(t){let n=!1;if(e.forEach(e=>{e.isDefaultChain=!1,e.name!==t&&e.chainId!==a||(n=!0,e.isDefaultChain=!0)}),!n)throw new Error(`unable to set default network as chain '${t}' does not exist`)}const i=n.findIndex(e=>e.isDefaultChain);i>0&&n.splice(0,0,n.splice(i,1)[0]);const r=n.findIndex(e=>e.isAuthChain&&!0!==e.isDefaultChain);return r>0&&n.splice(1,0,n.splice(r,1)[0]),n})(a))};let u;!function(e){e[e.MAINNET=1]="MAINNET",e[e.ROPSTEN=3]="ROPSTEN",e[e.RINKEBY=4]="RINKEBY",e[e.GOERLI=5]="GOERLI",e[e.KOVAN=42]="KOVAN",e[e.POLYGON=137]="POLYGON",e[e.POLYGON_MUMBAI=80001]="POLYGON_MUMBAI",e[e.BSC=56]="BSC",e[e.BSC_TESTNET=97]="BSC_TESTNET",e[e.OPTIMISM=10]="OPTIMISM",e[e.OPTIMISM_TESTNET=69]="OPTIMISM_TESTNET",e[e.ARBITRUM=42161]="ARBITRUM",e[e.ARBITRUM_TESTNET=421611]="ARBITRUM_TESTNET",e[e.AVALANCHE=43114]="AVALANCHE",e[e.AVALANCHE_TESTNET=43113]="AVALANCHE_TESTNET",e[e.FANTOM=250]="FANTOM",e[e.FANTOM_TESTNET=4002]="FANTOM_TESTNET",e[e.GNOSIS=100]="GNOSIS"}(u||(u={}));l(e=>[{title:"Ethereum",name:"mainnet",chainId:u.MAINNET,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",rpcUrl:Object(s.d)(e.baseRpcUrl+"/mainnet"),relayer:{url:Object(s.d)(e.baseRelayerUrl+"/mainnet")},isDefaultChain:!0},{title:"Polygon",name:"polygon",chainId:u.POLYGON,rpcUrl:"https://rpc-mainnet.matic.network",relayer:{url:Object(s.d)(e.baseRelayerUrl+"/matic")},isAuthChain:!0}],1,{baseRpcUrl:"https://nodes.sequence.app",baseRelayerUrl:"https://relayers.sequence.app"}),l(e=>[{name:"rinkeby",chainId:u.RINKEBY,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",testnet:!0,rpcUrl:Object(s.d)(e.baseRpcUrl+"/rinkeby"),relayer:{url:Object(s.d)(e.baseRelayerUrl+"/rinkeby")},isDefaultChain:!0},{name:"goerli",chainId:u.GOERLI,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",testnet:!0,rpcUrl:Object(s.d)(e.baseRpcUrl+"/goerli"),relayer:{url:Object(s.d)(e.baseRelayerUrl+"/goerli")},isAuthChain:!0}],void 0,{baseRpcUrl:"https://nodes.sequence.app",baseRelayerUrl:"https://relayers.sequence.app"});function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let p;function d(e,t){return e.reduce((function(e,n,a){return t(n,a)?e[0].push(n):e[1].push(n),e}),[[],[]])}!function(e){e.ethCall="eth_call",e.ethGetBalance="eth_getBalance",e.ethGetCode="eth_getCode"}(p||(p={}));const y={batchSize:50,timeWindow:50,contract:"0xd130B43062D875a4B7aF3f8fc036Bc6e9D3E1B3E",verbose:!1};class h{constructor(e){var t=this;if(this.batchableJsonRpcMethods=[p.ethCall,p.ethGetCode,p.ethGetBalance],this.multicallInterface=new i.ethers.utils.Interface(r.sequenceUtils.abi),this.options=void 0,this.timeout=void 0,this.queue=[],this.scheduleExecution=()=>{this.queue.length>0&&(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(this.run,this.options.timeWindow))},this.handle=(e,t,n)=>this.batchableJsonRpcMethods.find(e=>e===t.method)?(this.queue.push({request:t,callback:n,next:e}),this.options.verbose,void this.scheduleExecution()):(this.options.verbose,e(t,n)),this.run=async function(){t.options.verbose;const e=Math.min(t.options.batchSize,t.queue.length);if(0===e)return;if(1===e)return t.forward(t.queue[0]),t.queue=[],void t.options.verbose;t.options.verbose;var n=t.queue.slice(0,e);t.queue=e===t.queue.length?[]:t.queue.slice(e),t.options.verbose,0!==t.queue.length&&t.scheduleExecution();const r=n[0].next;let o;var[n,l]=d(n,e=>{try{if(e.next!==r)return!1;switch(e.request.method){case p.ethCall:if(e.request.params[0].from||e.request.params[0].gasPrice||e.request.params[0].value)return!1;case p.ethGetBalance:case p.ethGetCode:const i=function(e){if(void 0===e)return"latest";switch(e){case"earliest":case"latest":case"pending":return e}return a.a.from(e)}(e.request.params[1]);if(void 0===o&&(o=i),(t=i)!==(n=o)&&!(a.a.isBigNumber(t)?a.a.isBigNumber(n)&&t.eq(n):!a.a.isBigNumber(n)&&t===n))return!1}return!0}catch(i){return!1}var t,n});if(0!==l.length&&(t.options.verbose,t.forward(l),0===n.length))return;let u=n.map(e=>{try{switch(e.request.method){case p.ethCall:return{delegateCall:!1,revertOnError:!1,target:e.request.params[0].to,data:e.request.params[0].data,gasLimit:e.request.params[0].gas?e.request.params[0].gas:0,value:0};case p.ethGetCode:return{delegateCall:!1,revertOnError:!1,target:t.options.contract,gasLimit:0,value:0,data:t.multicallInterface.encodeFunctionData(t.multicallInterface.getFunction("callCode"),[e.request.params[0]])};case p.ethGetBalance:return{delegateCall:!1,revertOnError:!1,target:t.options.contract,gasLimit:0,value:0,data:t.multicallInterface.encodeFunctionData(t.multicallInterface.getFunction("callBalanceOf"),[e.request.params[0]])};default:return null}}catch(n){return null}});var[n,l]=d(n,(e,t)=>void 0!==u[t]);if(u=u.filter(e=>e),0!==l.length&&(t.options.verbose,t.forward(l),0===n.length))return;let c;try{c=t.multicallInterface.encodeFunctionData(t.multicallInterface.getFunction("multiCall"),[u])}catch(m){return void t.forward(n)}const y=Object(s.a)(),h=await async function(e,t){try{return await e}catch(n){return t instanceof Function?t(n):t}}(Object(s.c)(r)({id:y,jsonrpc:"2.0",method:p.ethCall,params:[{to:t.options.contract,value:0,data:c},a.a.isBigNumber(o)?o.toNumber():o]}),e=>({jsonrpc:"2.0",id:y,result:void 0,error:e}));if(h.error)return t.forward(n);let f;try{f=t.multicallInterface.decodeFunctionResult(t.multicallInterface.getFunction("multiCall"),h.result)}catch(b){return void t.forward(n)}t.options.verbose,n.forEach((e,n)=>{if(f[0][n])switch(e.request.method){case p.ethCall:e.callback(void 0,{jsonrpc:e.request.jsonrpc,id:e.request.id,result:f[1][n]});break;case p.ethGetCode:e.callback(void 0,{jsonrpc:e.request.jsonrpc,id:e.request.id,result:i.ethers.utils.defaultAbiCoder.decode(["bytes"],f[1][n])[0]});break;case p.ethGetBalance:e.callback(void 0,{jsonrpc:e.request.jsonrpc,id:e.request.id,result:i.ethers.utils.defaultAbiCoder.decode(["uint256"],f[1][n])[0]})}else t.forward(e)})},this.options=e?c({},h.DefaultOptions,e):h.DefaultOptions,this.options.batchSize<=0)throw new Error("Invalid batch size of "+this.options.batchSize)}forward(e){Array.isArray(e)?e.forEach(e=>e.next(e.request,e.callback)):e.next(e.request,e.callback)}static isMulticall(e){return e&&void 0!==e.handle&&void 0!==e.conf&&h.isMulticallOptions(e.options)}static isMulticallOptions(e){return void 0!==e&&void 0!==e.batchSize&&void 0!==e.timeWindow&&void 0!==e.contract}}h.DefaultOptions=c({},y);const f=["getNetwork","getBlockNumber","getGasPrice","getTransactionCount","getStorageAt","sendTransaction","estimateGas","getBlock","getTransaction","getTransactionReceipt","getLogs","emit","litenerCount","addListener","removeListener","waitForTransaction","detectNetwork","getBlockWithTransactions"];class m extends i.ethers.providers.BaseProvider{constructor(e,t){var n;super(e.getNetwork()),n=this,this.provider=e,this.multicall=void 0,this.listenerCount=this.provider.listenerCount,this.getResolver=async function(e){const t=n.provider;if(t.getResolver){const a=await t.getResolver(await e);return a?new i.ethers.providers.Resolver(n,a.address,a.name):null}return t.getResolver(await e)},this.next=async function(e,t){try{switch(e.method){case p.ethCall:n.callback(e,t,await n.provider.call(e.params[0],e.params[1]));break;case p.ethGetCode:n.callback(e,t,await n.provider.getCode(e.params[0],e.params[1]));break;case p.ethGetBalance:n.callback(e,t,await n.provider.getBalance(e.params[0],e.params[1]))}}catch(a){n.callback(e,t,void 0,a)}},this.multicall=h.isMulticall(t)?t:new h(t),f.forEach(t=>{void 0!==e[t]&&(this[t]=(...n)=>e[t](...n))})}callback(e,t,n,a){t(a,{jsonrpc:"2.0",id:e.id,result:n,error:a})}async call(e,t){return this.rpcCall(p.ethCall,e,t)}async getCode(e,t){return this.rpcCall(p.ethGetCode,e,t)}async getBalance(e,t){return this.rpcCall(p.ethGetBalance,e,t)}async rpcCall(e,...t){const n=Object(s.a)();return(await Object(s.c)(this.multicall.handle)(this.next,{jsonrpc:"2.0",id:n,method:e,params:t})).result}}var b=Object.freeze({__proto__:null,ProxyMethods:f,MulticallProvider:m,MulticallExternalProvider:class{constructor(e,t){if(this.provider=e,this.multicall=void 0,this.multicall=h.isMulticall(t)?t:new h(t),e.send){const t=async function(t,n){e.send(t,n)};this.send=(e,n)=>{this.multicall.handle(t,e,n)}}if(e.sendAsync){const t=async function(t,n){e.sendAsync(t,n)};this.sendAsync=(e,n)=>{this.multicall.handle(t,e,n)}}}get isMetaMask(){return this.provider.isMetaMask}get isStatus(){return this.provider.isStatus}},multicallMiddleware:e=>t=>{const n=h.isMulticall(e)?e:new h(e);return(e,a)=>n.handle(t,e,a)}})},3518:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return l}));n(4061),n(444),n(61),n(283);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i;!function(e){e[e.DEBUG=1]="DEBUG",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.DISABLED=5]="DISABLED"}(i||(i={}));const r=new class{constructor(e){this.config=e,this.logLevel=void 0,this.configure(e)}configure(e){switch(this.config=a({},this.config,e),this.config.logLevel){case"DEBUG":this.logLevel=i.DEBUG;break;case"INFO":this.logLevel=i.INFO;break;case"WARN":this.logLevel=i.WARN;break;case"ERROR":this.logLevel=i.ERROR;break;case"DISABLED":this.logLevel=i.DISABLED;break;default:this.logLevel=i.INFO}void 0===this.config.silence&&(this.config.silence=!1)}debug(e,...t){!0!==this.config.silence&&(this.logLevel,i.DEBUG)}info(e,...t){!0!==this.config.silence&&(this.logLevel,i.INFO)}warn(e,...t){!0!==this.config.silence&&this.logLevel<=i.WARN&&this.config.onwarn&&this.config.onwarn(e,t)}error(e,...t){!0!==this.config.silence&&this.logLevel<=i.ERROR&&this.config.onerror&&this.config.onerror(e,t)}}({logLevel:"INFO",silence:!0});function s(e,t){return function(...n){const a=Array.prototype.slice.call(n);return new Promise(async(n,i)=>{try{a.push((e,t)=>e?i(e):n(t)),await e.apply(t,a)}catch(r){i(r)}})}}const o=(e=0,t=Number.MAX_SAFE_INTEGER)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e);const l=e=>e.replace(/([^:]\/)\/+/g,"$1")}).call(this,n(100))},4061:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));const a="function"===typeof atob,i="function"===typeof btoa,r="function"===typeof Buffer,s="function"===typeof TextDecoder?new TextDecoder:void 0,o="function"===typeof TextEncoder?new TextEncoder:void 0,l=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),u=(e=>{let t={};return e.forEach((e,n)=>t[e]=n),t})(l),c=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,p=String.fromCharCode.bind(String),d="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),y=e=>e.replace(/=/g,"").replace(/[+\/]/g,e=>"+"==e?"-":"_"),h=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),f=e=>{let t,n,a,i,r="";const s=e.length%3;for(let o=0;o<e.length;){if((n=e.charCodeAt(o++))>255||(a=e.charCodeAt(o++))>255||(i=e.charCodeAt(o++))>255)throw new TypeError("invalid character found");t=n<<16|a<<8|i,r+=l[t>>18&63]+l[t>>12&63]+l[t>>6&63]+l[63&t]}return s?r.slice(0,s-3)+"===".substring(s):r},m=i?e=>btoa(e):r?e=>Buffer.from(e,"binary").toString("base64"):f,b=r?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let n=0,a=e.length;n<a;n+=4096)t.push(p.apply(null,e.subarray(n,n+4096)));return m(t.join(""))},g=(e,t=!1)=>t?y(b(e)):b(e),v=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?p(192|t>>>6)+p(128|63&t):p(224|t>>>12&15)+p(128|t>>>6&63)+p(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return p(240|t>>>18&7)+p(128|t>>>12&63)+p(128|t>>>6&63)+p(128|63&t)},w=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,T=e=>e.replace(w,v),C=r?e=>Buffer.from(e,"utf8").toString("base64"):o?e=>b(o.encode(e)):e=>m(T(e)),A=(e,t=!1)=>t?y(C(e)):C(e),E=e=>A(e,!0),M=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,I=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return p(55296+(t>>>10))+p(56320+(1023&t));case 3:return p((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return p((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},O=e=>e.replace(M,I),_=e=>{if(e=e.replace(/\s+/g,""),!c.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,n,a,i="";for(let r=0;r<e.length;)t=u[e.charAt(r++)]<<18|u[e.charAt(r++)]<<12|(n=u[e.charAt(r++)])<<6|(a=u[e.charAt(r++)]),i+=64===n?p(t>>16&255):64===a?p(t>>16&255,t>>8&255):p(t>>16&255,t>>8&255,255&t);return i},B=a?e=>atob(h(e)):r?e=>Buffer.from(e,"base64").toString("binary"):_,R=r?e=>d(Buffer.from(e,"base64")):e=>d(B(e),e=>e.charCodeAt(0)),N=e=>R(S(e)),x=r?e=>Buffer.from(e,"base64").toString("utf8"):s?e=>s.decode(R(e)):e=>O(B(e)),S=e=>h(e.replace(/[-_]/g,e=>"-"==e?"+":"/")),U=e=>x(S(e)),k=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),q=function(){const e=(e,t)=>Object.defineProperty(String.prototype,e,k(t));e("fromBase64",(function(){return U(this)})),e("toBase64",(function(e){return A(this,e)})),e("toBase64URI",(function(){return A(this,!0)})),e("toBase64URL",(function(){return A(this,!0)})),e("toUint8Array",(function(){return N(this)}))},L=function(){const e=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,k(t));e("toBase64",(function(e){return g(this,e)})),e("toBase64URI",(function(){return g(this,!0)})),e("toBase64URL",(function(){return g(this,!0)}))},F={version:"3.7.2",VERSION:"3.7.2",atob:B,atobPolyfill:_,btoa:m,btoaPolyfill:f,fromBase64:U,toBase64:A,encode:A,encodeURI:E,encodeURL:E,utob:T,btou:O,decode:U,isValid:e=>{if("string"!==typeof e)return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},fromUint8Array:g,toUint8Array:N,extendString:q,extendUint8Array:L,extendBuiltins:()=>{q(),L()}}}}]);