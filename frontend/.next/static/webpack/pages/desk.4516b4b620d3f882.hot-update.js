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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Statement = function(param) {\n    var statement = param.statement;\n    var content = statement.content;\n    var statementIDforDiv = '\"';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"statementBox\",\n        onClick: function() {\n            return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/[statementID]\", \"/s/\".concat(statement.statementID));\n        }\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, _this);\n};\n_c = Statement;\n// Previously I'd had this in:\n// <div id='notes'>\n//<StatementAnnotation comment={statement.comment} />\n// </div>\n// However, since annotations will need to be directly editable, best to leave for later.\nfunction StatementAnnotation(props) {\n    var comments = props.comment;\n    if (comments === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Add ability to add comments.\"\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: comments\n    }, void 0, false);\n}\n_c1 = StatementAnnotation;\n// TO DO: Best way to also query and load information about the existing encodings, if any \n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c, _c1;\n$RefreshReg$(_c, \"Statement\");\n$RefreshReg$(_c1, \"StatementAnnotation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRlbWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUF5QjtBQUNPO0FBU2hDLElBQU1FLFNBQVMsR0FBMEMsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7SUFDbkUsSUFBSUMsT0FBTyxHQUFHRCxTQUFTLENBQUNDLE9BQU87SUFDL0IsSUFBSUMsaUJBQWlCLEdBQUcsR0FBRztJQUM1QixxQkFDQyw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsY0FBYztRQUFDQyxPQUFPLEVBQUU7bUJBQU1QLHVEQUFXLENBQUMsa0JBQWtCLEVBQUUsS0FBSSxDQUF3QixPQUF0QkUsU0FBUyxDQUFDTyxXQUFXLENBQUUsQ0FBQztTQUFBOzs7OzthQUVyRyxDQUNOO0NBQ0Q7QUFSS1IsS0FBQUEsU0FBUztBQVVmLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIscURBQXFEO0FBQ3JELFNBQVM7QUFDVCx5RkFBeUY7QUFHekYsU0FBU1MsbUJBQW1CLENBQUNDLEtBQWlDLEVBQUU7SUFDL0QsSUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLE9BQU87SUFDOUIsSUFBSUQsUUFBUSxLQUFLLElBQUksRUFBRTtRQUN0QixxQkFDQztzQkFBRSw4QkFFRjt5QkFBRyxDQUNIO0tBQ0Q7SUFDRCxxQkFDQztrQkFDRUEsUUFBUTtxQkFDUCxDQUNIO0NBQ0Q7QUFkUUYsTUFBQUEsbUJBQW1CO0FBd0I1QiwyRkFBMkY7QUFFM0YsK0RBQWVULFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0ZW1lbnQudHN4P2JjZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IHR5cGUgU3RhdGVtZW50UHJvcHMgPSB7XG4gc3RhdGVtZW50SUQ6IG51bWJlcjtcbiBjb250ZW50OiBzdHJpbmc7XG4gY29kZWQ6IGJvb2xlYW47XG4gY29tbWVudDogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgU3RhdGVtZW50OiBSZWFjdC5GQzx7c3RhdGVtZW50OiBTdGF0ZW1lbnRQcm9wc30+ID0gKHsgc3RhdGVtZW50IH0pID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBzdGF0ZW1lbnQuY29udGVudDtcbiAgbGV0IHN0YXRlbWVudElEZm9yRGl2ID0gJ1wiJ1xuIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZW1lbnRCb3gnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcy9bc3RhdGVtZW50SURdJywgYC9zLyR7c3RhdGVtZW50LnN0YXRlbWVudElEfWApfT5cbiAgICBcbiAgPC9kaXY+XG4gKVxufVxuXG4vLyBQcmV2aW91c2x5IEknZCBoYWQgdGhpcyBpbjpcbi8vIDxkaXYgaWQ9J25vdGVzJz5cbi8vPFN0YXRlbWVudEFubm90YXRpb24gY29tbWVudD17c3RhdGVtZW50LmNvbW1lbnR9IC8+XG4vLyA8L2Rpdj5cbi8vIEhvd2V2ZXIsIHNpbmNlIGFubm90YXRpb25zIHdpbGwgbmVlZCB0byBiZSBkaXJlY3RseSBlZGl0YWJsZSwgYmVzdCB0byBsZWF2ZSBmb3IgbGF0ZXIuXG5cblxuZnVuY3Rpb24gU3RhdGVtZW50QW5ub3RhdGlvbihwcm9wczogeyBjb21tZW50OiBzdHJpbmcgfCBudWxsIH0pIHtcbiBjb25zdCBjb21tZW50cyA9IHByb3BzLmNvbW1lbnQ7XG4gaWYgKGNvbW1lbnRzID09PSBudWxsKSB7XG4gIHJldHVybiAoXG4gICA8PlxuICAgIEFkZCBhYmlsaXR5IHRvIGFkZCBjb21tZW50cy5cbiAgIDwvPlxuICApXG4gfVxuIHJldHVybiAoXG4gIDw+XG4gICB7Y29tbWVudHN9XG4gIDwvPlxuIClcbn1cblxuZXhwb3J0IHR5cGUgRW5jb2RpbmdQcm9wcyA9IHtcbiBwYXJlbnQ6IG51bWJlciB8IG51bGw7XG4vLyBpZDogbnVtYmVyIHwgbnVsbDtcbiBjb2RlVXNlZDogc3RyaW5nIHwgbnVsbDtcbiBwaHJhc2U6IHN0cmluZyB8IG51bGw7XG4gY29tbWVudHM6IHN0cmluZyB8IG51bGw7XG59XG5cbi8vIFRPIERPOiBCZXN0IHdheSB0byBhbHNvIHF1ZXJ5IGFuZCBsb2FkIGluZm9ybWF0aW9uIGFib3V0IHRoZSBleGlzdGluZyBlbmNvZGluZ3MsIGlmIGFueSBcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiY29udGVudCIsInN0YXRlbWVudElEZm9yRGl2IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInB1c2giLCJzdGF0ZW1lbnRJRCIsIlN0YXRlbWVudEFubm90YXRpb24iLCJwcm9wcyIsImNvbW1lbnRzIiwiY29tbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Statement.tsx\n");

/***/ })

});