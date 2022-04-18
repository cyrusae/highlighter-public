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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\n\n\n\nvar CodeButton = function(param) {\n    var code = param.code, current = param.current;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                if ((typeof document === \"undefined\" ? \"undefined\" : _typeof(document)) !== undefined) {\n                    var statement = document.getElementById(\"statebox\");\n                    var highlight = document.getSelection();\n                    var phrase = highlight.toString();\n                    var html = statement.innerHTML.toString();\n                    var highlighted = '<mark class=\"' + code + '\">' + phrase + \"</mark>\";\n                    var output = html.replace(phrase, highlighted);\n                    console.log(output);\n                    statement.innerHTML = output;\n                    var plaintext = statement.innerText;\n                    var now = Date.now();\n                    axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"http://localhost:3001/upd8/\", {\n                        currentID: current,\n                        now: now,\n                        annot8: output,\n                        plain: plaintext,\n                        phrase: phrase,\n                        codeUsed: code\n                    });\n                }\n            //send this to the backend (output, plaintext, the phrase, and the highlight, along with existing context of where we are)\n            //   axios.put('../upd8', {})\n            //   will need to change props handling so that this can know the following:\n            //    ID of statement we're on (current) to tie the record to it; actually I think that might be it\n            },\n            children: \"Code\"\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/CodeButton.tsx\",\n            lineNumber: 9,\n            columnNumber: 3\n        }, _this)\n    }, void 0, false);\n};\n_c = CodeButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeButton);\nvar _c;\n$RefreshReg$(_c, \"CodeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvZGVCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBQXdDO0FBR2Q7QUFFMUIsSUFBTUUsVUFBVSxHQUE4QyxnQkFBcUI7UUFBbkJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87SUFDNUUscUJBQ0M7a0JBQ0EsNEVBQUNDLFFBQU07WUFBQ0MsT0FBTyxFQUFFLFdBQU07Z0JBQ3RCLElBQUksUUFBT0MsUUFBUSxpQ0FBZixPQUFlLENBQVJBLFFBQVEsT0FBS0MsU0FBUyxFQUFFO29CQUNuQyxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFVBQVUsQ0FBQztvQkFDckQsSUFBTUMsU0FBUyxHQUFHSixRQUFRLENBQUNLLFlBQVksRUFBRTtvQkFDekMsSUFBTUMsTUFBTSxHQUFHRixTQUFTLENBQUNHLFFBQVEsRUFBRTtvQkFDbkMsSUFBTUMsSUFBSSxHQUFHTixTQUFTLENBQUNPLFNBQVMsQ0FBQ0YsUUFBUSxFQUFFO29CQUMzQyxJQUFNRyxXQUFXLEdBQUcsZUFBZSxHQUFHZCxJQUFJLEdBQUcsSUFBSSxHQUFHVSxNQUFNLEdBQUcsU0FBUztvQkFDdEUsSUFBTUssTUFBTSxHQUFHSCxJQUFJLENBQUNJLE9BQU8sQ0FBQ04sTUFBTSxFQUFFSSxXQUFXLENBQUM7b0JBQ2hERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7b0JBQ3BCVCxTQUFTLENBQUNPLFNBQVMsR0FBR0UsTUFBTSxDQUFDO29CQUM3QixJQUFNSSxTQUFTLEdBQUdiLFNBQVMsQ0FBQ2MsU0FBUztvQkFDckMsSUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUcsRUFBRTtvQkFDdEJ2QixnREFBUyxDQUFDLDZCQUE2QixFQUFFO3dCQUN2QzBCLFNBQVMsRUFBRXZCLE9BQU87d0JBQ2xCb0IsR0FBRyxFQUFFQSxHQUFHO3dCQUNSSSxNQUFNLEVBQUVWLE1BQU07d0JBQ2RXLEtBQUssRUFBRVAsU0FBUzt3QkFDaEJULE1BQU0sRUFBRUEsTUFBTTt3QkFDZGlCLFFBQVEsRUFBRTNCLElBQUk7cUJBQ2YsQ0FBQztpQkFBQztZQUNILDBIQUEwSDtZQUM3SCw2QkFBNkI7WUFDN0IsNEVBQTRFO1lBQzVFLG1HQUFtRzthQUNoRztzQkFBRSxNQUVIOzs7OztpQkFBUztxQkFDTixDQUNIO0NBQ0Q7QUFoQ0tELEtBQUFBLFVBQVU7QUFrQ2hCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29kZUJ1dHRvbi50c3g/ZGFmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDb2RlQnV0dG9uOiBSZWFjdC5GQzx7Y29kZTogc3RyaW5nLCBjdXJyZW50OiBudW1iZXJ9PiA9ICh7Y29kZSwgY3VycmVudH0pID0+IHtcbiByZXR1cm4gKFxuICA8PlxuICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgY29uc3Qgc3RhdGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlYm94Jyk7XG4gICBjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgIGNvbnN0IHBocmFzZSA9IGhpZ2hsaWdodC50b1N0cmluZygpO1xuICAgY29uc3QgaHRtbCA9IHN0YXRlbWVudC5pbm5lckhUTUwudG9TdHJpbmcoKTtcbiAgIGNvbnN0IGhpZ2hsaWdodGVkID0gJzxtYXJrIGNsYXNzPVwiJyArIGNvZGUgKyAnXCI+JyArIHBocmFzZSArICc8L21hcms+JztcbiAgIGNvbnN0IG91dHB1dCA9IGh0bWwucmVwbGFjZShwaHJhc2UsIGhpZ2hsaWdodGVkKTtcbiAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gICBzdGF0ZW1lbnQuaW5uZXJIVE1MID0gb3V0cHV0O1xuICAgY29uc3QgcGxhaW50ZXh0ID0gc3RhdGVtZW50LmlubmVyVGV4dDtcbiAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91cGQ4LycsIHtcbiAgICAgY3VycmVudElEOiBjdXJyZW50LFxuICAgICBub3c6IG5vdyxcbiAgICAgYW5ub3Q4OiBvdXRwdXQsXG4gICAgIHBsYWluOiBwbGFpbnRleHQsXG4gICAgIHBocmFzZTogcGhyYXNlLFxuICAgICBjb2RlVXNlZDogY29kZVxuICAgfSl9XG4gICAvL3NlbmQgdGhpcyB0byB0aGUgYmFja2VuZCAob3V0cHV0LCBwbGFpbnRleHQsIHRoZSBwaHJhc2UsIGFuZCB0aGUgaGlnaGxpZ2h0LCBhbG9uZyB3aXRoIGV4aXN0aW5nIGNvbnRleHQgb2Ygd2hlcmUgd2UgYXJlKVxuLy8gICBheGlvcy5wdXQoJy4uL3VwZDgnLCB7fSlcbi8vICAgd2lsbCBuZWVkIHRvIGNoYW5nZSBwcm9wcyBoYW5kbGluZyBzbyB0aGF0IHRoaXMgY2FuIGtub3cgdGhlIGZvbGxvd2luZzpcbi8vICAgIElEIG9mIHN0YXRlbWVudCB3ZSdyZSBvbiAoY3VycmVudCkgdG8gdGllIHRoZSByZWNvcmQgdG8gaXQ7IGFjdHVhbGx5IEkgdGhpbmsgdGhhdCBtaWdodCBiZSBpdFxuICB9fT5cbiAgIENvZGVcbiAgPC9idXR0b24+XG4gIDwvPlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZUJ1dHRvbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiQ29kZUJ1dHRvbiIsImNvZGUiLCJjdXJyZW50IiwiYnV0dG9uIiwib25DbGljayIsImRvY3VtZW50IiwidW5kZWZpbmVkIiwic3RhdGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoaWdobGlnaHQiLCJnZXRTZWxlY3Rpb24iLCJwaHJhc2UiLCJ0b1N0cmluZyIsImh0bWwiLCJpbm5lckhUTUwiLCJoaWdobGlnaHRlZCIsIm91dHB1dCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwicGxhaW50ZXh0IiwiaW5uZXJUZXh0Iiwibm93IiwiRGF0ZSIsInB1dCIsImN1cnJlbnRJRCIsImFubm90OCIsInBsYWluIiwiY29kZVVzZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CodeButton.tsx\n");

/***/ })

});