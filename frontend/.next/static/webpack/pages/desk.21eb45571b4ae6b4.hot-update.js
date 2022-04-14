"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/desk",{

/***/ "./components/Statement.tsx":
/*!**********************************!*\
  !*** ./components/Statement.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Statement = function(param) {\n    var statement = param.statement;\n    var content = statement.content;\n    var statementIDforDiv = '\"' + statement.statementID + '\"';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"statementBox\",\n        onClick: function() {\n            return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/[statementID]\", \"/s/\".concat(statement.statementID));\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"statement\",\n            id: statementIDforDiv,\n            dangerouslySetInnerHTML: {\n                __html: content\n            }\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, _this);\n};\n_c = Statement;\n// Previously I'd had this in:\n// <div id='notes'>\n//<StatementAnnotation comment={statement.comment} />\n// </div>\n// However, since annotations will need to be directly editable, best to leave for later.\nfunction StatementAnnotation(props) {\n    var comments = props.comment;\n    if (comments === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Add ability to add comments.\"\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: comments\n    }, void 0, false);\n}\n_c1 = StatementAnnotation;\n// TO DO: Best way to also query and load information about the existing encodings, if any \n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c, _c1;\n$RefreshReg$(_c, \"Statement\");\n$RefreshReg$(_c1, \"StatementAnnotation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRlbWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUF5QjtBQUNPO0FBU2hDLElBQU1FLFNBQVMsR0FBMEMsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7SUFDbkUsSUFBSUMsT0FBTyxHQUFHRCxTQUFTLENBQUNDLE9BQU87SUFDL0IsSUFBSUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHRixTQUFTLENBQUNHLFdBQVcsR0FBRyxHQUFHO0lBRTFELHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxjQUFjO1FBQUNDLE9BQU8sRUFBRTttQkFBTVIsdURBQVcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFJLENBQXdCLE9BQXRCRSxTQUFTLENBQUNHLFdBQVcsQ0FBRSxDQUFDO1NBQUE7a0JBQ3pHLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxXQUFXO1lBQUNHLEVBQUUsRUFBRU4saUJBQWlCO1lBQUVPLHVCQUF1QixFQUFFO2dCQUFDQyxNQUFNLEVBQUVULE9BQU87YUFBQzs7Ozs7aUJBQUc7Ozs7O2FBQzNGLENBQ047Q0FDRDtBQVRLRixLQUFBQSxTQUFTO0FBV2YsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQixxREFBcUQ7QUFDckQsU0FBUztBQUNULHlGQUF5RjtBQUd6RixTQUFTWSxtQkFBbUIsQ0FBQ0MsS0FBaUMsRUFBRTtJQUMvRCxJQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsT0FBTztJQUM5QixJQUFJRCxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3RCLHFCQUNDO3NCQUFFLDhCQUVGO3lCQUFHLENBQ0g7S0FDRDtJQUNELHFCQUNDO2tCQUNFQSxRQUFRO3FCQUNQLENBQ0g7Q0FDRDtBQWRRRixNQUFBQSxtQkFBbUI7QUF3QjVCLDJGQUEyRjtBQUUzRiwrREFBZVosU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N0YXRlbWVudC50c3g/YmNkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBTdGF0ZW1lbnRQcm9wcyA9IHtcbiBzdGF0ZW1lbnRJRDogbnVtYmVyO1xuIGNvbnRlbnQ6IHN0cmluZztcbiBjb2RlZDogYm9vbGVhbjtcbiBjb21tZW50OiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPHtzdGF0ZW1lbnQ6IFN0YXRlbWVudFByb3BzfT4gPSAoeyBzdGF0ZW1lbnQgfSkgPT4ge1xuICBsZXQgY29udGVudCA9IHN0YXRlbWVudC5jb250ZW50O1xuICBsZXQgc3RhdGVtZW50SURmb3JEaXYgPSAnXCInICsgc3RhdGVtZW50LnN0YXRlbWVudElEICsgJ1wiJztcblxuIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZW1lbnRCb3gnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcy9bc3RhdGVtZW50SURdJywgYC9zLyR7c3RhdGVtZW50LnN0YXRlbWVudElEfWApfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhdGVtZW50JyBpZD17c3RhdGVtZW50SURmb3JEaXZ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50fX0vPlxuICA8L2Rpdj5cbiApXG59XG5cbi8vIFByZXZpb3VzbHkgSSdkIGhhZCB0aGlzIGluOlxuLy8gPGRpdiBpZD0nbm90ZXMnPlxuLy88U3RhdGVtZW50QW5ub3RhdGlvbiBjb21tZW50PXtzdGF0ZW1lbnQuY29tbWVudH0gLz5cbi8vIDwvZGl2PlxuLy8gSG93ZXZlciwgc2luY2UgYW5ub3RhdGlvbnMgd2lsbCBuZWVkIHRvIGJlIGRpcmVjdGx5IGVkaXRhYmxlLCBiZXN0IHRvIGxlYXZlIGZvciBsYXRlci5cblxuXG5mdW5jdGlvbiBTdGF0ZW1lbnRBbm5vdGF0aW9uKHByb3BzOiB7IGNvbW1lbnQ6IHN0cmluZyB8IG51bGwgfSkge1xuIGNvbnN0IGNvbW1lbnRzID0gcHJvcHMuY29tbWVudDtcbiBpZiAoY29tbWVudHMgPT09IG51bGwpIHtcbiAgcmV0dXJuIChcbiAgIDw+XG4gICAgQWRkIGFiaWxpdHkgdG8gYWRkIGNvbW1lbnRzLlxuICAgPC8+XG4gIClcbiB9XG4gcmV0dXJuIChcbiAgPD5cbiAgIHtjb21tZW50c31cbiAgPC8+XG4gKVxufVxuXG5leHBvcnQgdHlwZSBFbmNvZGluZ1Byb3BzID0ge1xuIHBhcmVudDogbnVtYmVyIHwgbnVsbDtcbi8vIGlkOiBudW1iZXIgfCBudWxsO1xuIGNvZGVVc2VkOiBzdHJpbmcgfCBudWxsO1xuIHBocmFzZTogc3RyaW5nIHwgbnVsbDtcbiBjb21tZW50czogc3RyaW5nIHwgbnVsbDtcbn1cblxuLy8gVE8gRE86IEJlc3Qgd2F5IHRvIGFsc28gcXVlcnkgYW5kIGxvYWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV4aXN0aW5nIGVuY29kaW5ncywgaWYgYW55IFxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnQiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZW50Iiwic3RhdGVtZW50SURmb3JEaXYiLCJzdGF0ZW1lbnRJRCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwdXNoIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlN0YXRlbWVudEFubm90YXRpb24iLCJwcm9wcyIsImNvbW1lbnRzIiwiY29tbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Statement.tsx\n");

/***/ })

});