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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\nvar _this = undefined;\n\n\n\n// import styles from './Statement.module.css'\nvar StatementBox = function(param) {\n    var sample = param.sample, glossary = param.glossary;\n    var content = sample[\"content\"];\n    var statementID = sample[\"statementID\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"envelope\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"statement\",\n            id: \"statement\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Header, {\n                    className: \"metadata\",\n                    children: [\n                        \"ID: \",\n                        statementID\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Workspace.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Body, {\n                    className: \"statebox\",\n                    id: \"statebox\",\n                    dangerouslySetInnerHTML: {\n                        __html: content\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Workspace.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 3\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Workspace.tsx\",\n            lineNumber: 13,\n            columnNumber: 21\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Workspace.tsx\",\n        lineNumber: 13,\n        columnNumber: 2\n    }, _this);\n};\n_c = StatementBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatementBox);\nvar _c;\n$RefreshReg$(_c, \"StatementBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmtzcGFjZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQW1EO0FBR1o7QUFFdkMsOENBQThDO0FBRTlDLElBQU1FLFlBQVksR0FBK0QsZ0JBQTBCO1FBQXZCQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBQ25HLElBQUlDLE9BQU8sR0FBR0YsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUMvQixJQUFJRyxXQUFXLEdBQUdILE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFFdkMscUJBQ0EsOERBQUNJLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLFVBQVU7a0JBQUMsNEVBQUNQLDREQUFJO1lBQUNRLFNBQVMsRUFBQyxXQUFXO1lBQUNELEVBQUUsRUFBQyxXQUFXOzs4QkFDNUQsOERBQUNQLG1FQUFXO29CQUFDUSxTQUFTLEVBQUMsVUFBVTs7d0JBQUMsTUFBSTt3QkFBQ0gsV0FBVzs7Ozs7O3lCQUFlOzhCQUNqRSw4REFBQ0wsaUVBQVM7b0JBQUNRLFNBQVMsRUFBQyxVQUFVO29CQUFDRCxFQUFFLEVBQUMsVUFBVTtvQkFBQ0ksdUJBQXVCLEVBQUU7d0JBQUNDLE1BQU0sRUFBRVIsT0FBTztxQkFBQzs7Ozs7eUJBQUc7Ozs7OztpQkFDckY7Ozs7O2FBQ0EsQ0FDUDtDQUNBO0FBWEtILEtBQUFBLFlBQVk7QUFhbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3Jrc3BhY2UudHN4PzUzMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENvZGVMaXN0IH0gZnJvbSBcIi4vR2xvc3NhcnlcIjtcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSBcIi4vU3RhdGVtZW50XCJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJ1xuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4vU3RhdGVtZW50Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IFN0YXRlbWVudEJveDogUmVhY3QuRkM8e3NhbXBsZTogU3RhdGVtZW50UHJvcHNbXSwgZ2xvc3Nhcnk6IENvZGVMaXN0W119PiA9ICgge3NhbXBsZSwgZ2xvc3Nhcnl9ICkgPT4ge1xuIGxldCBjb250ZW50ID0gc2FtcGxlW1wiY29udGVudFwiXTtcbiBsZXQgc3RhdGVtZW50SUQgPSBzYW1wbGVbXCJzdGF0ZW1lbnRJRFwiXTtcblxuIHJldHVybiAoXG4gPGRpdiBpZD0nZW52ZWxvcGUnPjxDYXJkIGNsYXNzTmFtZT0nc3RhdGVtZW50JyBpZD0nc3RhdGVtZW50Jz5cbiAgPENhcmQuSGVhZGVyIGNsYXNzTmFtZT0nbWV0YWRhdGEnPklEOiB7c3RhdGVtZW50SUR9PC9DYXJkLkhlYWRlcj5cbiAgPENhcmQuQm9keSBjbGFzc05hbWU9J3N0YXRlYm94JyBpZD0nc3RhdGVib3gnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50fX0vPlxuIDwvQ2FyZD5cbiAgPC9kaXY+XG4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudEJveCJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJTdGF0ZW1lbnRCb3giLCJzYW1wbGUiLCJnbG9zc2FyeSIsImNvbnRlbnQiLCJzdGF0ZW1lbnRJRCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiQm9keSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Workspace.tsx\n");

/***/ })

});