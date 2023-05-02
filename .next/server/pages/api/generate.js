"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generate)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/generate.js

const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
const basePromptPrefix = `Write me a detailed step-by-step recipe with the dish name at the top  by a professional chef for a dish. Make sure not to include any ingredients not mentioned unless you cannot produce a decent recipe with the listed ingredients. These are the only ingredients I have: `;
const generateAction = async (req, res)=>{
    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);
    const baseCompletion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${basePromptPrefix}${req.body.userInput}\n`,
        temperature: 0.22,
        max_tokens: 1250
    });
    const basePromptOutput = baseCompletion.data.choices.pop();
    res.status(200).json({
        output: basePromptOutput
    });
};
/* harmony default export */ const generate = (generateAction);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(961));
module.exports = __webpack_exports__;

})();