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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar CodeButton = function(param) {\n    var code = param.code, current = param.current, glossary = param.glossary;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var statement = document.getElementById(\"statebox\");\n        var phrases = document.getElementsByTagName(\"mark\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                if ((typeof document === \"undefined\" ? \"undefined\" : _typeof(document)) !== undefined) {\n                    var statement = document.getElementById(\"statebox\");\n                    var highlight = document.getSelection();\n                    var phrase = highlight.toString();\n                    var html = statement.innerHTML.toString();\n                    //to add tooltips:\n                    //   for (let i = 0; i < glossary.length; i++) {\n                    //    if (glossary[i].shortCode === code) {\n                    //     var tooltip = '<span class=\"tooltip\">' + glossary[i].codeName + '</span>';\n                    //     break; }\n                    //   }\n                    //remove that to remove tooltips\n                    //Add '(' + glossary[i].codeGloss + ')' +  to have the gloss alongside it, but this may cause issues fitting on your screen unless you shrink the tooltip size accordingly\n                    var highlighted = '<mark class=\"' + code + '\">' + phrase + \"</mark>\";\n                    var output = html.replace(phrase, highlighted);\n                    console.log(output);\n                    statement.innerHTML = output;\n                    var plaintext = statement.innerText;\n                    var now = Date.now();\n                    axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"http://localhost:3001/upd8/\", {\n                        currentID: current,\n                        now: now,\n                        annot8: output,\n                        plain: plaintext,\n                        phrase: phrase,\n                        codeUsed: code\n                    });\n                }\n            //send this to the backend (output, plaintext, the phrase, and the highlight, along with existing context of where we are)\n            //   axios.put('../upd8', {})\n            //   will need to change props handling so that this can know the following:\n            //    ID of statement we're on (current) to tie the record to it; actually I think that might be it\n            },\n            children: \"Code\"\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/CodeButton.tsx\",\n            lineNumber: 17,\n            columnNumber: 3\n        }, _this)\n    }, void 0, false);\n};\n_s(CodeButton, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = CodeButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeButton);\nvar _c;\n$RefreshReg$(_c, \"CodeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvZGVCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBQW1EO0FBR3pCOztBQUcxQixJQUFNRyxVQUFVLEdBQW9FLGdCQUErQjtRQUE3QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQzVHTCxnREFBUyxDQUFDLFdBQU07UUFDZixJQUFNTSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztRQUNyRCxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csb0JBQW9CLENBQUMsTUFBTSxDQUFDO0tBRXJELENBQUM7SUFHRixxQkFDQztrQkFDQSw0RUFBQ0MsUUFBTTtZQUFDQyxPQUFPLEVBQUUsV0FBTTtnQkFDdEIsSUFBSSxRQUFPTCxRQUFRLGlDQUFmLE9BQWUsQ0FBUkEsUUFBUSxPQUFLTSxTQUFTLEVBQUU7b0JBQ25DLElBQU1QLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDO29CQUNyRCxJQUFNTSxTQUFTLEdBQUdQLFFBQVEsQ0FBQ1EsWUFBWSxFQUFFO29CQUN6QyxJQUFNQyxNQUFNLEdBQUdGLFNBQVMsQ0FBQ0csUUFBUSxFQUFFO29CQUNuQyxJQUFNQyxJQUFJLEdBQUdaLFNBQVMsQ0FBQ2EsU0FBUyxDQUFDRixRQUFRLEVBQUU7b0JBQzlDLGtCQUFrQjtvQkFDbEIsZ0RBQWdEO29CQUNoRCwyQ0FBMkM7b0JBQzNDLGlGQUFpRjtvQkFDakYsZUFBZTtvQkFDZixNQUFNO29CQUNOLGdDQUFnQztvQkFDaEMsMEtBQTBLO29CQUV2SyxJQUFNRyxXQUFXLEdBQUcsZUFBZSxHQUFHakIsSUFBSSxHQUFHLElBQUksR0FBR2EsTUFBTSxHQUFHLFNBQVM7b0JBQ3RFLElBQU1LLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxPQUFPLENBQUNOLE1BQU0sRUFBRUksV0FBVyxDQUFDO29CQUNoREcsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO29CQUNwQmYsU0FBUyxDQUFDYSxTQUFTLEdBQUdFLE1BQU0sQ0FBQztvQkFDN0IsSUFBTUksU0FBUyxHQUFHbkIsU0FBUyxDQUFDb0IsU0FBUztvQkFDckMsSUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUcsRUFBRTtvQkFDdEIxQixnREFBUyxDQUFDLDZCQUE2QixFQUFFO3dCQUN2QzZCLFNBQVMsRUFBRTFCLE9BQU87d0JBQ2xCdUIsR0FBRyxFQUFFQSxHQUFHO3dCQUNSSSxNQUFNLEVBQUVWLE1BQU07d0JBQ2RXLEtBQUssRUFBRVAsU0FBUzt3QkFDaEJULE1BQU0sRUFBRUEsTUFBTTt3QkFDZGlCLFFBQVEsRUFBRTlCLElBQUk7cUJBQ2YsQ0FBQztpQkFBQztZQUNILDBIQUEwSDtZQUM3SCw2QkFBNkI7WUFDN0IsNEVBQTRFO1lBQzVFLG1HQUFtRzthQUNoRztzQkFBRSxNQUVIOzs7OztpQkFBUztxQkFDTixDQUNIO0NBQ0Q7R0FoREtELFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQWtEaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQnV0dG9uLnRzeD9kYWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IENvZGVMaXN0IH0gZnJvbSAnLi9HbG9zc2FyeSc7XG5cbmNvbnN0IENvZGVCdXR0b246IFJlYWN0LkZDPHtjb2RlOiBzdHJpbmcsIGN1cnJlbnQ6IG51bWJlciwgZ2xvc3Nhcnk6IENvZGVMaXN0W119PiA9ICh7Y29kZSwgY3VycmVudCwgZ2xvc3Nhcnl9KSA9PiB7XG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3Qgc3RhdGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlYm94JylcbiAgY29uc3QgcGhyYXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXJrJyk7XG5cbiB9KVxuXG5cbiByZXR1cm4gKFxuICA8PlxuICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgY29uc3Qgc3RhdGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlYm94Jyk7XG4gICBjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgIGNvbnN0IHBocmFzZSA9IGhpZ2hsaWdodC50b1N0cmluZygpO1xuICAgY29uc3QgaHRtbCA9IHN0YXRlbWVudC5pbm5lckhUTUwudG9TdHJpbmcoKTtcbi8vdG8gYWRkIHRvb2x0aXBzOlxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGdsb3NzYXJ5Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICBpZiAoZ2xvc3NhcnlbaV0uc2hvcnRDb2RlID09PSBjb2RlKSB7XG4vLyAgICAgdmFyIHRvb2x0aXAgPSAnPHNwYW4gY2xhc3M9XCJ0b29sdGlwXCI+JyArIGdsb3NzYXJ5W2ldLmNvZGVOYW1lICsgJzwvc3Bhbj4nO1xuLy8gICAgIGJyZWFrOyB9XG4vLyAgIH1cbi8vcmVtb3ZlIHRoYXQgdG8gcmVtb3ZlIHRvb2x0aXBzXG4vL0FkZCAnKCcgKyBnbG9zc2FyeVtpXS5jb2RlR2xvc3MgKyAnKScgKyAgdG8gaGF2ZSB0aGUgZ2xvc3MgYWxvbmdzaWRlIGl0LCBidXQgdGhpcyBtYXkgY2F1c2UgaXNzdWVzIGZpdHRpbmcgb24geW91ciBzY3JlZW4gdW5sZXNzIHlvdSBzaHJpbmsgdGhlIHRvb2x0aXAgc2l6ZSBhY2NvcmRpbmdseVxuXG4gICBjb25zdCBoaWdobGlnaHRlZCA9ICc8bWFyayBjbGFzcz1cIicgKyBjb2RlICsgJ1wiPicgKyBwaHJhc2UgKyAnPC9tYXJrPic7XG4gICBjb25zdCBvdXRwdXQgPSBodG1sLnJlcGxhY2UocGhyYXNlLCBoaWdobGlnaHRlZCk7XG4gICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuICAgc3RhdGVtZW50LmlubmVySFRNTCA9IG91dHB1dDtcbiAgIGNvbnN0IHBsYWludGV4dCA9IHN0YXRlbWVudC5pbm5lclRleHQ7XG4gICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgYXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdXBkOC8nLCB7XG4gICAgIGN1cnJlbnRJRDogY3VycmVudCxcbiAgICAgbm93OiBub3csXG4gICAgIGFubm90ODogb3V0cHV0LFxuICAgICBwbGFpbjogcGxhaW50ZXh0LFxuICAgICBwaHJhc2U6IHBocmFzZSxcbiAgICAgY29kZVVzZWQ6IGNvZGVcbiAgIH0pfVxuICAgLy9zZW5kIHRoaXMgdG8gdGhlIGJhY2tlbmQgKG91dHB1dCwgcGxhaW50ZXh0LCB0aGUgcGhyYXNlLCBhbmQgdGhlIGhpZ2hsaWdodCwgYWxvbmcgd2l0aCBleGlzdGluZyBjb250ZXh0IG9mIHdoZXJlIHdlIGFyZSlcbi8vICAgYXhpb3MucHV0KCcuLi91cGQ4Jywge30pXG4vLyAgIHdpbGwgbmVlZCB0byBjaGFuZ2UgcHJvcHMgaGFuZGxpbmcgc28gdGhhdCB0aGlzIGNhbiBrbm93IHRoZSBmb2xsb3dpbmc6XG4vLyAgICBJRCBvZiBzdGF0ZW1lbnQgd2UncmUgb24gKGN1cnJlbnQpIHRvIHRpZSB0aGUgcmVjb3JkIHRvIGl0OyBhY3R1YWxseSBJIHRoaW5rIHRoYXQgbWlnaHQgYmUgaXRcbiAgfX0+XG4gICBDb2RlXG4gIDwvYnV0dG9uPlxuICA8Lz5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVCdXR0b24iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkNvZGVCdXR0b24iLCJjb2RlIiwiY3VycmVudCIsImdsb3NzYXJ5Iiwic3RhdGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBocmFzZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiLCJoaWdobGlnaHQiLCJnZXRTZWxlY3Rpb24iLCJwaHJhc2UiLCJ0b1N0cmluZyIsImh0bWwiLCJpbm5lckhUTUwiLCJoaWdobGlnaHRlZCIsIm91dHB1dCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwicGxhaW50ZXh0IiwiaW5uZXJUZXh0Iiwibm93IiwiRGF0ZSIsInB1dCIsImN1cnJlbnRJRCIsImFubm90OCIsInBsYWluIiwiY29kZVVzZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CodeButton.tsx\n");

/***/ })

});