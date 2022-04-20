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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\n\n\n\nvar CodeButton = function(param) {\n    var code = param.code, current = param.current, glossary = param.glossary;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                if ((typeof document === \"undefined\" ? \"undefined\" : _typeof(document)) !== undefined) {\n                    var statement = document.getElementById(\"statebox\");\n                    var highlight = document.getSelection();\n                    var phrase = highlight.toString();\n                    var html = statement.innerHTML.toString();\n                    //to add tooltips:\n                    for(var i = 0; i < glossary.length; i++){\n                        if (glossary[i].shortCode === code) {\n                            var tooltip = '<span class=\"tooltip\">' + glossary[i].codeName + \"(\" + +\"</span>\";\n                            break;\n                        }\n                    }\n                    //remove that to remove tooltips\n                    var highlighted = '<mark class=\"' + code + '\">' + phrase + tooltip + \"</mark>\";\n                    var output = html.replace(phrase, highlighted);\n                    console.log(output);\n                    statement.innerHTML = output;\n                    var plaintext = statement.innerText;\n                    var now = Date.now();\n                    axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"http://localhost:3001/upd8/\", {\n                        currentID: current,\n                        now: now,\n                        annot8: output,\n                        plain: plaintext,\n                        phrase: phrase,\n                        codeUsed: code\n                    });\n                }\n            //send this to the backend (output, plaintext, the phrase, and the highlight, along with existing context of where we are)\n            //   axios.put('../upd8', {})\n            //   will need to change props handling so that this can know the following:\n            //    ID of statement we're on (current) to tie the record to it; actually I think that might be it\n            },\n            children: \"Code\"\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/CodeButton.tsx\",\n            lineNumber: 10,\n            columnNumber: 3\n        }, _this)\n    }, void 0, false);\n};\n_c = CodeButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeButton);\nvar _c;\n$RefreshReg$(_c, \"CodeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvZGVCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBQXdDO0FBR2Q7QUFHMUIsSUFBTUUsVUFBVSxHQUFvRSxnQkFBK0I7UUFBN0JDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBQzVHLHFCQUNDO2tCQUNBLDRFQUFDQyxRQUFNO1lBQUNDLE9BQU8sRUFBRSxXQUFNO2dCQUN0QixJQUFJLFFBQU9DLFFBQVEsaUNBQWYsT0FBZSxDQUFSQSxRQUFRLE9BQUtDLFNBQVMsRUFBRTtvQkFDbkMsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxVQUFVLENBQUM7b0JBQ3JELElBQU1DLFNBQVMsR0FBR0osUUFBUSxDQUFDSyxZQUFZLEVBQUU7b0JBQ3pDLElBQU1DLE1BQU0sR0FBR0YsU0FBUyxDQUFDRyxRQUFRLEVBQUU7b0JBQ25DLElBQU1DLElBQUksR0FBR04sU0FBUyxDQUFDTyxTQUFTLENBQUNGLFFBQVEsRUFBRTtvQkFDOUMsa0JBQWtCO29CQUNmLElBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHYixRQUFRLENBQUNjLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUU7d0JBQ3pDLElBQUliLFFBQVEsQ0FBQ2EsQ0FBQyxDQUFDLENBQUNFLFNBQVMsS0FBS2pCLElBQUksRUFBRTs0QkFDbkMsSUFBSWtCLE9BQU8sR0FBRyx3QkFBd0IsR0FBR2hCLFFBQVEsQ0FBQ2EsQ0FBQyxDQUFDLENBQUNJLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBRSxTQUFTOzRCQUNqRixNQUFNO3lCQUFFO3FCQUNUO29CQUNKLGdDQUFnQztvQkFDN0IsSUFBTUMsV0FBVyxHQUFHLGVBQWUsR0FBR3BCLElBQUksR0FBRyxJQUFJLEdBQUdXLE1BQU0sR0FBR08sT0FBTyxHQUFHLFNBQVM7b0JBQ2hGLElBQU1HLE1BQU0sR0FBR1IsSUFBSSxDQUFDUyxPQUFPLENBQUNYLE1BQU0sRUFBRVMsV0FBVyxDQUFDO29CQUNoREcsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO29CQUNwQmQsU0FBUyxDQUFDTyxTQUFTLEdBQUdPLE1BQU0sQ0FBQztvQkFDN0IsSUFBTUksU0FBUyxHQUFHbEIsU0FBUyxDQUFDbUIsU0FBUztvQkFDckMsSUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUcsRUFBRTtvQkFDdEI3QixnREFBUyxDQUFDLDZCQUE2QixFQUFFO3dCQUN2Q2dDLFNBQVMsRUFBRTdCLE9BQU87d0JBQ2xCMEIsR0FBRyxFQUFFQSxHQUFHO3dCQUNSSSxNQUFNLEVBQUVWLE1BQU07d0JBQ2RXLEtBQUssRUFBRVAsU0FBUzt3QkFDaEJkLE1BQU0sRUFBRUEsTUFBTTt3QkFDZHNCLFFBQVEsRUFBRWpDLElBQUk7cUJBQ2YsQ0FBQztpQkFBQztZQUNILDBIQUEwSDtZQUM3SCw2QkFBNkI7WUFDN0IsNEVBQTRFO1lBQzVFLG1HQUFtRzthQUNoRztzQkFBRSxNQUVIOzs7OztpQkFBUztxQkFDTixDQUNIO0NBQ0Q7QUF2Q0tELEtBQUFBLFVBQVU7QUF5Q2hCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29kZUJ1dHRvbi50c3g/ZGFmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQ29kZUxpc3QgfSBmcm9tICcuL0dsb3NzYXJ5JztcblxuY29uc3QgQ29kZUJ1dHRvbjogUmVhY3QuRkM8e2NvZGU6IHN0cmluZywgY3VycmVudDogbnVtYmVyLCBnbG9zc2FyeTogQ29kZUxpc3RbXX0+ID0gKHtjb2RlLCBjdXJyZW50LCBnbG9zc2FyeX0pID0+IHtcbiByZXR1cm4gKFxuICA8PlxuICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgY29uc3Qgc3RhdGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlYm94Jyk7XG4gICBjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgIGNvbnN0IHBocmFzZSA9IGhpZ2hsaWdodC50b1N0cmluZygpO1xuICAgY29uc3QgaHRtbCA9IHN0YXRlbWVudC5pbm5lckhUTUwudG9TdHJpbmcoKTtcbi8vdG8gYWRkIHRvb2x0aXBzOlxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9zc2FyeS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChnbG9zc2FyeVtpXS5zaG9ydENvZGUgPT09IGNvZGUpIHtcbiAgICAgdmFyIHRvb2x0aXAgPSAnPHNwYW4gY2xhc3M9XCJ0b29sdGlwXCI+JyArIGdsb3NzYXJ5W2ldLmNvZGVOYW1lICsgJygnICsgKyAnPC9zcGFuPic7XG4gICAgIGJyZWFrOyB9XG4gICB9XG4vL3JlbW92ZSB0aGF0IHRvIHJlbW92ZSB0b29sdGlwc1xuICAgY29uc3QgaGlnaGxpZ2h0ZWQgPSAnPG1hcmsgY2xhc3M9XCInICsgY29kZSArICdcIj4nICsgcGhyYXNlICsgdG9vbHRpcCArICc8L21hcms+JztcbiAgIGNvbnN0IG91dHB1dCA9IGh0bWwucmVwbGFjZShwaHJhc2UsIGhpZ2hsaWdodGVkKTtcbiAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gICBzdGF0ZW1lbnQuaW5uZXJIVE1MID0gb3V0cHV0O1xuICAgY29uc3QgcGxhaW50ZXh0ID0gc3RhdGVtZW50LmlubmVyVGV4dDtcbiAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91cGQ4LycsIHtcbiAgICAgY3VycmVudElEOiBjdXJyZW50LFxuICAgICBub3c6IG5vdyxcbiAgICAgYW5ub3Q4OiBvdXRwdXQsXG4gICAgIHBsYWluOiBwbGFpbnRleHQsXG4gICAgIHBocmFzZTogcGhyYXNlLFxuICAgICBjb2RlVXNlZDogY29kZVxuICAgfSl9XG4gICAvL3NlbmQgdGhpcyB0byB0aGUgYmFja2VuZCAob3V0cHV0LCBwbGFpbnRleHQsIHRoZSBwaHJhc2UsIGFuZCB0aGUgaGlnaGxpZ2h0LCBhbG9uZyB3aXRoIGV4aXN0aW5nIGNvbnRleHQgb2Ygd2hlcmUgd2UgYXJlKVxuLy8gICBheGlvcy5wdXQoJy4uL3VwZDgnLCB7fSlcbi8vICAgd2lsbCBuZWVkIHRvIGNoYW5nZSBwcm9wcyBoYW5kbGluZyBzbyB0aGF0IHRoaXMgY2FuIGtub3cgdGhlIGZvbGxvd2luZzpcbi8vICAgIElEIG9mIHN0YXRlbWVudCB3ZSdyZSBvbiAoY3VycmVudCkgdG8gdGllIHRoZSByZWNvcmQgdG8gaXQ7IGFjdHVhbGx5IEkgdGhpbmsgdGhhdCBtaWdodCBiZSBpdFxuICB9fT5cbiAgIENvZGVcbiAgPC9idXR0b24+XG4gIDwvPlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZUJ1dHRvbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiQ29kZUJ1dHRvbiIsImNvZGUiLCJjdXJyZW50IiwiZ2xvc3NhcnkiLCJidXR0b24iLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJ1bmRlZmluZWQiLCJzdGF0ZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhpZ2hsaWdodCIsImdldFNlbGVjdGlvbiIsInBocmFzZSIsInRvU3RyaW5nIiwiaHRtbCIsImlubmVySFRNTCIsImkiLCJsZW5ndGgiLCJzaG9ydENvZGUiLCJ0b29sdGlwIiwiY29kZU5hbWUiLCJoaWdobGlnaHRlZCIsIm91dHB1dCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwicGxhaW50ZXh0IiwiaW5uZXJUZXh0Iiwibm93IiwiRGF0ZSIsInB1dCIsImN1cnJlbnRJRCIsImFubm90OCIsInBsYWluIiwiY29kZVVzZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CodeButton.tsx\n");

/***/ })

});