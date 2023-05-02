(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(4369)}])},4369:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),next_head__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9008),next_head__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7294);let Home=()=>{let[userInput,setUserInput]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),[apiOutput,setApiOutput]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),[isGenerating,setIsGenerating]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),callGenerateEndpoint=async()=>{setIsGenerating(!0),console.log("Calling OpenAI...");let response=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userInput})}),data=await response.json(),{output}=data;console.log("OpenAI replied...",output.text),setApiOutput("".concat(output.text)),setIsGenerating(!1)},onUserChangedText=event=>{setUserInput(event.target.value)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"root",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_head__WEBPACK_IMPORTED_MODULE_1___default(),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:"GPT-3 Writer | buildspace"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"header",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"header-title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Generate a Recipe"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"header-subtitle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"insert the ingredients you would wish to use to create a dish (ex. eggs, flour, pasta sauce, berries, etc)."})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"prompt-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{value:userInput,onChange:onUserChangedText,placeholder:"enter your ingredients here",className:"prompt-box"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"prompt-buttons",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:isGenerating?"generate-button loading":"generate-button",onClick:callGenerateEndpoint,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"generate",children:isGenerating?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"loader"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Generate"})})})})]}),apiOutput&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"output",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"output-header-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"output-header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:"Your Recipe"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"output-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:apiOutput})})]})]})};__webpack_exports__.default=Home},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3121)}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=5557)}),_N_E=__webpack_require__.O()}]);