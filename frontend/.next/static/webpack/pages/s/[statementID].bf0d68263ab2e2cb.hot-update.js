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

/***/ "./components/Workspace.tsx":
/*!**********************************!*\
  !*** ./components/Workspace.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n// import styles from './Statement.module.css'\nvar StatementBox = function(param) {\n    var sample = param.sample;\n    _s();\n    var content = sample[\"content\"];\n    var statementID = sample[\"statementID\"];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.getElementsByTagName(\"mark\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"statement\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metadata\",\n                children: [\n                    \"ID: \",\n                    statementID\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Workspace.tsx\",\n                lineNumber: 16,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"statebox\",\n                id: \"statebox\",\n                dangerouslySetInnerHTML: {\n                    __html: content\n                }\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Workspace.tsx\",\n                lineNumber: 17,\n                columnNumber: 3\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Workspace.tsx\",\n        lineNumber: 15,\n        columnNumber: 2\n    }, _this);\n};\n_s(StatementBox, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = StatementBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatementBox);\nvar _c;\n$RefreshReg$(_c, \"StatementBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmtzcGFjZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBbUQ7O0FBR25ELDhDQUE4QztBQUU5QyxJQUFNRSxZQUFZLEdBQTZELGdCQUFnQjtRQUFiQyxNQUFNLFNBQU5BLE1BQU07O0lBQ3ZGLElBQUlDLE9BQU8sR0FBR0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUMvQixJQUFJRSxXQUFXLEdBQUdGLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFFdkNGLGdEQUFTLENBQUMsV0FBTTtRQUNmSyxRQUFRLENBQUNDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztLQUN0QyxDQUFDO0lBRUQscUJBQ0EsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7OzBCQUN6Qiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7O29CQUFDLE1BQUk7b0JBQUNKLFdBQVc7Ozs7OztxQkFBTzswQkFDakQsOERBQUNHLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVO2dCQUFDQyxFQUFFLEVBQUMsVUFBVTtnQkFBQ0MsdUJBQXVCLEVBQUU7b0JBQUNDLE1BQU0sRUFBRVIsT0FBTztpQkFBQzs7Ozs7cUJBQUc7Ozs7OzthQUNoRixDQUNOO0NBQ0E7R0FkS0YsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBZ0JsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dvcmtzcGFjZS50c3g/NTMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tIFwiLi9TdGF0ZW1lbnRcIlxuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4vU3RhdGVtZW50Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IFN0YXRlbWVudEJveDogUmVhY3QuRkM8e3NhbXBsZTogU3RhdGVtZW50UHJvcHNbXSwgZ2xvc3Nhcnk6IENvZGVMaXN0fT4gPSAoIHtzYW1wbGV9ICkgPT4ge1xuIGxldCBjb250ZW50ID0gc2FtcGxlW1wiY29udGVudFwiXTtcbiBsZXQgc3RhdGVtZW50SUQgPSBzYW1wbGVbXCJzdGF0ZW1lbnRJRFwiXTtcblxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXJrJylcbn0pXG5cbiByZXR1cm4gKFxuIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZW1lbnQnPlxuICA8ZGl2IGNsYXNzTmFtZT0nbWV0YWRhdGEnPklEOiB7c3RhdGVtZW50SUR9PC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZWJveCcgaWQ9J3N0YXRlYm94JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudH19Lz5cbiA8L2Rpdj5cbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50Qm94Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiU3RhdGVtZW50Qm94Iiwic2FtcGxlIiwiY29udGVudCIsInN0YXRlbWVudElEIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Workspace.tsx\n");

/***/ })

});