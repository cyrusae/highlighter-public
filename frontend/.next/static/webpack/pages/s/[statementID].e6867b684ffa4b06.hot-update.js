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

/***/ "./components/UnCodeButton.tsx":
/*!*************************************!*\
  !*** ./components/UnCodeButton.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar UnCodeButton = function(param) {\n    var current = param.current;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var button = document.getElementById(\"unCodeButton\");\n        button.addEventListener(\"onclick\", function() {\n            var encoded = document.getSelection().anchorNode.parentElement;\n            var phrase = encoded.innerText;\n            encoded.replaceWith(phrase);\n            var html = document.getElementById(\"statebox\").innerHTML;\n            axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"http://localhost:3001/uncode/\", {\n                currentID: current,\n                phrase: phrase,\n                unnot8: html\n            });\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        size: \"sm\",\n        variant: \"outline-danger\",\n        id: \"unCodeButton\",\n        className: \"ms-auto codebutton uncode\",\n        children: \"Uncode\"\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/UnCodeButton.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, _this);\n};\n_s(UnCodeButton, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = UnCodeButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnCodeButton);\nvar _c;\n$RefreshReg$(_c, \"UnCodeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VuQ29kZUJ1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDZjtBQUNrQjs7QUFFM0MsSUFBTUksWUFBWSxHQUFnQyxnQkFBaUI7UUFBZEMsT0FBTyxTQUFQQSxPQUFPOztJQUMzREosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2YsSUFBTUssTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDdERGLE1BQU0sQ0FBQ0csZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFdBQU07WUFDeEMsSUFBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLFlBQVksRUFBRSxDQUFDQyxVQUFVLENBQUNDLGFBQWE7WUFDaEUsSUFBTUMsTUFBTSxHQUFHSixPQUFPLENBQUNLLFNBQVM7WUFDaENMLE9BQU8sQ0FBQ00sV0FBVyxDQUFDRixNQUFNLENBQUMsQ0FBQztZQUM1QixJQUFJRyxJQUFJLEdBQUdWLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDVSxTQUFTO1lBQ3hEaEIsZ0RBQVMsQ0FBQywrQkFBK0IsRUFBRTtnQkFDMUNrQixTQUFTLEVBQUVmLE9BQU87Z0JBQ2xCUyxNQUFNLEVBQUVBLE1BQU07Z0JBQ2RPLE1BQU0sRUFBRUosSUFBSTthQUNaLENBQUM7U0FDRixDQUFDO0tBQ0YsQ0FBQztJQUNGLHFCQUNDLDhEQUFDZCw4REFBTTtRQUFDbUIsSUFBSSxFQUFDLElBQUk7UUFBQ0MsT0FBTyxFQUFDLGdCQUFnQjtRQUFDQyxFQUFFLEVBQUMsY0FBYztRQUFDQyxTQUFTLEVBQUMsMkJBQTJCO2tCQUFDLFFBQU07Ozs7O2FBQVMsQ0FDbEg7Q0FDRDtHQWxCS3JCLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQW9CbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VbkNvZGVCdXR0b24udHN4PzFjY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuXG5jb25zdCBVbkNvZGVCdXR0b246IFJlYWN0LkZDPHtjdXJyZW50OiBudW1iZXJ9PiA9ICh7IGN1cnJlbnQgfSkgPT4ge1xuIHVzZUVmZmVjdCgoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bkNvZGVCdXR0b24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ29uY2xpY2snLCAoKSA9PiB7XG4gICBjb25zdCBlbmNvZGVkID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuYW5jaG9yTm9kZS5wYXJlbnRFbGVtZW50O1xuICAgY29uc3QgcGhyYXNlID0gZW5jb2RlZC5pbm5lclRleHQ7XG4gICBlbmNvZGVkLnJlcGxhY2VXaXRoKHBocmFzZSk7XG4gICBsZXQgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZWJveCcpLmlubmVySFRNTDtcbiAgIGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3VuY29kZS8nLCB7XG4gICAgY3VycmVudElEOiBjdXJyZW50LFxuICAgIHBocmFzZTogcGhyYXNlLFxuICAgIHVubm90ODogaHRtbFxuICAgfSlcbiAgfSlcbiB9KVxuIHJldHVybiAoXG4gIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD0nb3V0bGluZS1kYW5nZXInIGlkPSd1bkNvZGVCdXR0b24nIGNsYXNzTmFtZT0nbXMtYXV0byBjb2RlYnV0dG9uIHVuY29kZSc+VW5jb2RlPC9CdXR0b24+XG4gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVbkNvZGVCdXR0b24gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJCdXR0b24iLCJVbkNvZGVCdXR0b24iLCJjdXJyZW50IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmNvZGVkIiwiZ2V0U2VsZWN0aW9uIiwiYW5jaG9yTm9kZSIsInBhcmVudEVsZW1lbnQiLCJwaHJhc2UiLCJpbm5lclRleHQiLCJyZXBsYWNlV2l0aCIsImh0bWwiLCJpbm5lckhUTUwiLCJwdXQiLCJjdXJyZW50SUQiLCJ1bm5vdDgiLCJzaXplIiwidmFyaWFudCIsImlkIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UnCodeButton.tsx\n");

/***/ })

});