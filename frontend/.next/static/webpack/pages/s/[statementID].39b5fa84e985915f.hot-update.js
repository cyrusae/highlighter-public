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

/***/ "./components/ReCodeButton.tsx":
/*!*************************************!*\
  !*** ./components/ReCodeButton.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ReCodeButton = function(param) {\n    var code = param.code, current = param.current, glossary = param.glossary;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var button = document.getElementById(\"reCodeButton\");\n        var statement = document.getElementById(\"statebox\");\n        button.addEventListener(\"onclick\", function() {\n            var encoded = document.getSelection().anchorNode.parentElement;\n            var oldCode = encoded.className;\n            var phrase = encoded.innerText;\n            encoded.className = code;\n            var html = statement.innerHTML;\n            var plaintext = statement.innerText;\n            axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"http://localhost:3001/recode/\", {\n                currentID: current,\n                annot8: html,\n                plain: plaintext,\n                phrase: phrase,\n                codeUsed: code,\n                oldCode: oldCode\n            });\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        size: \"sm\",\n        variant: \"outline-warning\",\n        id: \"reCodeButton\",\n        className: \"ms-auto codebutton recode\",\n        children: \"Recode\"\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/ReCodeButton.tsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, _this);\n};\n_s(ReCodeButton, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ReCodeButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReCodeButton);\nvar _c;\n$RefreshReg$(_c, \"ReCodeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlQ29kZUJ1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDZjtBQUVpQjs7QUFFM0MsSUFBTUksWUFBWSxHQUFvRSxnQkFBaUM7UUFBOUJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsUUFBUSxTQUFSQSxRQUFROztJQUMvR04sZ0RBQVMsQ0FBQyxXQUFNO1FBQ2YsSUFBTU8sTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDdEQsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUM7UUFDckRGLE1BQU0sQ0FBQ0ksZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFdBQU07WUFDeEMsSUFBTUMsT0FBTyxHQUFHSixRQUFRLENBQUNLLFlBQVksRUFBRSxDQUFDQyxVQUFVLENBQUNDLGFBQWE7WUFDaEUsSUFBTUMsT0FBTyxHQUFHSixPQUFPLENBQUNLLFNBQVM7WUFDakMsSUFBTUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFNBQVM7WUFDaENQLE9BQU8sQ0FBQ0ssU0FBUyxHQUFHYixJQUFJLENBQUM7WUFDekIsSUFBSWdCLElBQUksR0FBR1YsU0FBUyxDQUFDVyxTQUFTO1lBQzlCLElBQUlDLFNBQVMsR0FBR1osU0FBUyxDQUFDUyxTQUFTO1lBQ25DbEIsZ0RBQVMsQ0FBQywrQkFBK0IsRUFBRTtnQkFDMUN1QixTQUFTLEVBQUVuQixPQUFPO2dCQUNsQm9CLE1BQU0sRUFBRUwsSUFBSTtnQkFDWk0sS0FBSyxFQUFFSixTQUFTO2dCQUNoQkosTUFBTSxFQUFFQSxNQUFNO2dCQUNkUyxRQUFRLEVBQUV2QixJQUFJO2dCQUNkWSxPQUFPLEVBQUVBLE9BQU87YUFDaEIsQ0FBQztTQUNGLENBQUM7S0FDRixDQUFDLENBQUM7SUFDSCxxQkFDQyw4REFBQ2QsOERBQU07UUFBQzBCLElBQUksRUFBQyxJQUFJO1FBQUNDLE9BQU8sRUFBQyxpQkFBaUI7UUFBQ0MsRUFBRSxFQUFDLGNBQWM7UUFBQ2IsU0FBUyxFQUFDLDJCQUEyQjtrQkFBQyxRQUFNOzs7OzthQUFTLENBQ25IO0NBQ0Q7R0F4QktkLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQTBCbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZUNvZGVCdXR0b24udHN4PzEyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDb2RlTGlzdCB9IGZyb20gJy4vR2xvc3NhcnknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuXG5jb25zdCBSZUNvZGVCdXR0b246IFJlYWN0LkZDPHtjb2RlOiBzdHJpbmcsIGN1cnJlbnQ6IG51bWJlciwgZ2xvc3Nhcnk6IENvZGVMaXN0W119PiA9ICh7IGNvZGUsIGN1cnJlbnQsIGdsb3NzYXJ5IH0pID0+IHtcbiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVDb2RlQnV0dG9uJyk7XG4gIGNvbnN0IHN0YXRlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZWJveCcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignb25jbGljaycsICgpID0+IHtcbiAgIGNvbnN0IGVuY29kZWQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5hbmNob3JOb2RlLnBhcmVudEVsZW1lbnQ7XG4gICBjb25zdCBvbGRDb2RlID0gZW5jb2RlZC5jbGFzc05hbWU7XG4gICBjb25zdCBwaHJhc2UgPSBlbmNvZGVkLmlubmVyVGV4dDtcbiAgIGVuY29kZWQuY2xhc3NOYW1lID0gY29kZTtcbiAgIGxldCBodG1sID0gc3RhdGVtZW50LmlubmVySFRNTDtcbiAgIGxldCBwbGFpbnRleHQgPSBzdGF0ZW1lbnQuaW5uZXJUZXh0O1xuICAgYXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVjb2RlLycsIHtcbiAgICBjdXJyZW50SUQ6IGN1cnJlbnQsXG4gICAgYW5ub3Q4OiBodG1sLFxuICAgIHBsYWluOiBwbGFpbnRleHQsXG4gICAgcGhyYXNlOiBwaHJhc2UsXG4gICAgY29kZVVzZWQ6IGNvZGUsXG4gICAgb2xkQ29kZTogb2xkQ29kZVxuICAgfSlcbiAgfSlcbiB9KTtcbiByZXR1cm4gKFxuICA8QnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9J291dGxpbmUtd2FybmluZycgaWQ9J3JlQ29kZUJ1dHRvbicgY2xhc3NOYW1lPSdtcy1hdXRvIGNvZGVidXR0b24gcmVjb2RlJz5SZWNvZGU8L0J1dHRvbj5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlQ29kZUJ1dHRvbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImF4aW9zIiwiQnV0dG9uIiwiUmVDb2RlQnV0dG9uIiwiY29kZSIsImN1cnJlbnQiLCJnbG9zc2FyeSIsImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGF0ZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZW5jb2RlZCIsImdldFNlbGVjdGlvbiIsImFuY2hvck5vZGUiLCJwYXJlbnRFbGVtZW50Iiwib2xkQ29kZSIsImNsYXNzTmFtZSIsInBocmFzZSIsImlubmVyVGV4dCIsImh0bWwiLCJpbm5lckhUTUwiLCJwbGFpbnRleHQiLCJwdXQiLCJjdXJyZW50SUQiLCJhbm5vdDgiLCJwbGFpbiIsImNvZGVVc2VkIiwic2l6ZSIsInZhcmlhbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ReCodeButton.tsx\n");

/***/ })

});