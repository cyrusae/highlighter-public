"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/s/[statementID]",{

/***/ "./components/CodeButton.tsx":
/*!***********************************!*\
  !*** ./components/CodeButton.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\n\n\n\nvar CodeButton = function(param) {\n    var code = param.code, current = param.current, glossary = param.glossary;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                if ((typeof document === \"undefined\" ? \"undefined\" : _typeof(document)) !== undefined) {\n                    var statement = document.getElementById(\"statebox\");\n                    var highlight = document.getSelection();\n                    var phrase = highlight.toString();\n                    var html = statement.innerHTML.toString();\n                    //to add tooltips:\n                    //   for (let i = 0; i < glossary.length; i++) {\n                    //    if (glossary[i].shortCode === code) {\n                    //     var tooltip = '<span class=\"tooltip\">' + glossary[i].codeName + '</span>';\n                    //     break; }\n                    //   }\n                    //remove that to remove tooltips\n                    //Add '(' + glossary[i].codeGloss + ')' +  to have the gloss alongside it, but this may cause issues fitting on your screen unless you shrink the tooltip size accordingly\n                    var highlighted = '<mark class=\"' + code + '\">' + phrase + \"</mark>\";\n                    var output = html.replace(phrase, highlighted);\n                    console.log(output);\n                    statement.innerHTML = output;\n                    var plaintext = statement.innerText;\n                    var now = Date.now();\n                    axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"http://localhost:3001/upd8/\", {\n                        currentID: current,\n                        now: now,\n                        annot8: output,\n                        plain: plaintext,\n                        phrase: phrase,\n                        codeUsed: code\n                    });\n                }\n            //send this to the backend (output, plaintext, the phrase, and the highlight, along with existing context of where we are)\n            //   axios.put('../upd8', {})\n            //   will need to change props handling so that this can know the following:\n            //    ID of statement we're on (current) to tie the record to it; actually I think that might be it\n            },\n            children: \"Code\"\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/CodeButton.tsx\",\n            lineNumber: 10,\n            columnNumber: 3\n        }, _this)\n    }, void 0, false);\n};\n_c = CodeButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeButton);\nvar _c;\n$RefreshReg$(_c, \"CodeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvZGVCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBQXdDO0FBR2Q7QUFHMUIsSUFBTUUsVUFBVSxHQUFvRSxnQkFBK0I7UUFBN0JDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBQzVHLHFCQUNDO2tCQUNBLDRFQUFDQyxRQUFNO1lBQUNDLE9BQU8sRUFBRSxXQUFNO2dCQUN0QixJQUFJLFFBQU9DLFFBQVEsaUNBQWYsT0FBZSxDQUFSQSxRQUFRLE9BQUtDLFNBQVMsRUFBRTtvQkFDbkMsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxVQUFVLENBQUM7b0JBQ3JELElBQU1DLFNBQVMsR0FBR0osUUFBUSxDQUFDSyxZQUFZLEVBQUU7b0JBQ3pDLElBQU1DLE1BQU0sR0FBR0YsU0FBUyxDQUFDRyxRQUFRLEVBQUU7b0JBQ25DLElBQU1DLElBQUksR0FBR04sU0FBUyxDQUFDTyxTQUFTLENBQUNGLFFBQVEsRUFBRTtvQkFDOUMsa0JBQWtCO29CQUNsQixnREFBZ0Q7b0JBQ2hELDJDQUEyQztvQkFDM0MsaUZBQWlGO29CQUNqRixlQUFlO29CQUNmLE1BQU07b0JBQ04sZ0NBQWdDO29CQUNoQywwS0FBMEs7b0JBRXZLLElBQU1HLFdBQVcsR0FBRyxlQUFlLEdBQUdmLElBQUksR0FBRyxJQUFJLEdBQUdXLE1BQU0sR0FBRyxTQUFTO29CQUN0RSxJQUFNSyxNQUFNLEdBQUdILElBQUksQ0FBQ0ksT0FBTyxDQUFDTixNQUFNLEVBQUVJLFdBQVcsQ0FBQztvQkFDaERHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUMsQ0FBQztvQkFDcEJULFNBQVMsQ0FBQ08sU0FBUyxHQUFHRSxNQUFNLENBQUM7b0JBQzdCLElBQU1JLFNBQVMsR0FBR2IsU0FBUyxDQUFDYyxTQUFTO29CQUNyQyxJQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBRyxFQUFFO29CQUN0QnhCLGdEQUFTLENBQUMsNkJBQTZCLEVBQUU7d0JBQ3ZDMkIsU0FBUyxFQUFFeEIsT0FBTzt3QkFDbEJxQixHQUFHLEVBQUVBLEdBQUc7d0JBQ1JJLE1BQU0sRUFBRVYsTUFBTTt3QkFDZFcsS0FBSyxFQUFFUCxTQUFTO3dCQUNoQlQsTUFBTSxFQUFFQSxNQUFNO3dCQUNkaUIsUUFBUSxFQUFFNUIsSUFBSTtxQkFDZixDQUFDO2lCQUFDO1lBQ0gsMEhBQTBIO1lBQzdILDZCQUE2QjtZQUM3Qiw0RUFBNEU7WUFDNUUsbUdBQW1HO2FBQ2hHO3NCQUFFLE1BRUg7Ozs7O2lCQUFTO3FCQUNOLENBQ0g7Q0FDRDtBQXpDS0QsS0FBQUEsVUFBVTtBQTJDaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQnV0dG9uLnRzeD9kYWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDb2RlTGlzdCB9IGZyb20gJy4vR2xvc3NhcnknO1xuXG5jb25zdCBDb2RlQnV0dG9uOiBSZWFjdC5GQzx7Y29kZTogc3RyaW5nLCBjdXJyZW50OiBudW1iZXIsIGdsb3NzYXJ5OiBDb2RlTGlzdFtdfT4gPSAoe2NvZGUsIGN1cnJlbnQsIGdsb3NzYXJ5fSkgPT4ge1xuIHJldHVybiAoXG4gIDw+XG4gIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICBjb25zdCBzdGF0ZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGVib3gnKTtcbiAgIGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuICAgY29uc3QgcGhyYXNlID0gaGlnaGxpZ2h0LnRvU3RyaW5nKCk7XG4gICBjb25zdCBodG1sID0gc3RhdGVtZW50LmlubmVySFRNTC50b1N0cmluZygpO1xuLy90byBhZGQgdG9vbHRpcHM6XG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2xvc3NhcnkubGVuZ3RoOyBpKyspIHtcbi8vICAgIGlmIChnbG9zc2FyeVtpXS5zaG9ydENvZGUgPT09IGNvZGUpIHtcbi8vICAgICB2YXIgdG9vbHRpcCA9ICc8c3BhbiBjbGFzcz1cInRvb2x0aXBcIj4nICsgZ2xvc3NhcnlbaV0uY29kZU5hbWUgKyAnPC9zcGFuPic7XG4vLyAgICAgYnJlYWs7IH1cbi8vICAgfVxuLy9yZW1vdmUgdGhhdCB0byByZW1vdmUgdG9vbHRpcHNcbi8vQWRkICcoJyArIGdsb3NzYXJ5W2ldLmNvZGVHbG9zcyArICcpJyArICB0byBoYXZlIHRoZSBnbG9zcyBhbG9uZ3NpZGUgaXQsIGJ1dCB0aGlzIG1heSBjYXVzZSBpc3N1ZXMgZml0dGluZyBvbiB5b3VyIHNjcmVlbiB1bmxlc3MgeW91IHNocmluayB0aGUgdG9vbHRpcCBzaXplIGFjY29yZGluZ2x5XG5cbiAgIGNvbnN0IGhpZ2hsaWdodGVkID0gJzxtYXJrIGNsYXNzPVwiJyArIGNvZGUgKyAnXCI+JyArIHBocmFzZSArICc8L21hcms+JztcbiAgIGNvbnN0IG91dHB1dCA9IGh0bWwucmVwbGFjZShwaHJhc2UsIGhpZ2hsaWdodGVkKTtcbiAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gICBzdGF0ZW1lbnQuaW5uZXJIVE1MID0gb3V0cHV0O1xuICAgY29uc3QgcGxhaW50ZXh0ID0gc3RhdGVtZW50LmlubmVyVGV4dDtcbiAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91cGQ4LycsIHtcbiAgICAgY3VycmVudElEOiBjdXJyZW50LFxuICAgICBub3c6IG5vdyxcbiAgICAgYW5ub3Q4OiBvdXRwdXQsXG4gICAgIHBsYWluOiBwbGFpbnRleHQsXG4gICAgIHBocmFzZTogcGhyYXNlLFxuICAgICBjb2RlVXNlZDogY29kZVxuICAgfSl9XG4gICAvL3NlbmQgdGhpcyB0byB0aGUgYmFja2VuZCAob3V0cHV0LCBwbGFpbnRleHQsIHRoZSBwaHJhc2UsIGFuZCB0aGUgaGlnaGxpZ2h0LCBhbG9uZyB3aXRoIGV4aXN0aW5nIGNvbnRleHQgb2Ygd2hlcmUgd2UgYXJlKVxuLy8gICBheGlvcy5wdXQoJy4uL3VwZDgnLCB7fSlcbi8vICAgd2lsbCBuZWVkIHRvIGNoYW5nZSBwcm9wcyBoYW5kbGluZyBzbyB0aGF0IHRoaXMgY2FuIGtub3cgdGhlIGZvbGxvd2luZzpcbi8vICAgIElEIG9mIHN0YXRlbWVudCB3ZSdyZSBvbiAoY3VycmVudCkgdG8gdGllIHRoZSByZWNvcmQgdG8gaXQ7IGFjdHVhbGx5IEkgdGhpbmsgdGhhdCBtaWdodCBiZSBpdFxuICB9fT5cbiAgIENvZGVcbiAgPC9idXR0b24+XG4gIDwvPlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZUJ1dHRvbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiQ29kZUJ1dHRvbiIsImNvZGUiLCJjdXJyZW50IiwiZ2xvc3NhcnkiLCJidXR0b24iLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJ1bmRlZmluZWQiLCJzdGF0ZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhpZ2hsaWdodCIsImdldFNlbGVjdGlvbiIsInBocmFzZSIsInRvU3RyaW5nIiwiaHRtbCIsImlubmVySFRNTCIsImhpZ2hsaWdodGVkIiwib3V0cHV0IiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJwbGFpbnRleHQiLCJpbm5lclRleHQiLCJub3ciLCJEYXRlIiwicHV0IiwiY3VycmVudElEIiwiYW5ub3Q4IiwicGxhaW4iLCJjb2RlVXNlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CodeButton.tsx\n");

/***/ })

});