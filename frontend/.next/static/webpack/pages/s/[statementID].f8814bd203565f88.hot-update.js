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

/***/ "./components/FlagTracker.tsx":
/*!************************************!*\
  !*** ./components/FlagTracker.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar FlagTracker = function(current) {\n    _s();\n    var newFlag = current + \" \" + \"&#013; &#010;\"; //last part should produce line breaks\n    var flagNew = function(old) {\n        return old += newFlag;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var flags = localStorage.getItem(\"flag\");\n        document.getElementById(\"flagButton\").addEventListener(\"click\", {});\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flagtracker\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    children: \"Statements flagged this session:\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    id: \"flags\",\n                    children: function() {\n                        if ((typeof document === \"undefined\" ? \"undefined\" : _typeof(document)) !== undefined) {\n                            var flags = localStorage.getItem(\"flag\");\n                            return flags;\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n            lineNumber: 14,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, _this);\n};\n_s(FlagTracker, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = FlagTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlagTracker);\nvar _c;\n$RefreshReg$(_c, \"FlagTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZsYWdUcmFja2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7QUFBd0M7O0FBRXhDLElBQU1FLFdBQVcsR0FBZ0MsU0FBQ0MsT0FBTyxFQUFLOztJQUM3RCxJQUFNQyxPQUFPLEdBQUdELE9BQU8sR0FBRyxHQUFHLEdBQUksZUFBYSxFQUFHLHNDQUFzQztJQUN2RixJQUFNRSxPQUFPLEdBQUcsU0FBQ0MsR0FBRztlQUFLQSxHQUFHLElBQUlGLE9BQU87S0FBQTtJQUV2Q0gsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2YsSUFBSU0sS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeENDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0tBQ25FLENBQUM7SUFFRixxQkFDQyw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsYUFBYTtrQkFDM0IsNEVBQUNDLFNBQU87OzhCQUNQLDhEQUFDQyxTQUFPOzhCQUFDLGtDQUFnQzs7Ozs7eUJBQVU7OEJBQ25ELDhEQUFDQyxVQUFRO29CQUFDQyxFQUFFLEVBQUMsT0FBTzs4QkFBRSxXQUFNO3dCQUM1QixJQUFJLFFBQU9SLFFBQVEsaUNBQWYsT0FBZSxDQUFSQSxRQUFRLE9BQUtTLFNBQVMsRUFBRTs0QkFDbEMsSUFBTVosS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQzFDLE9BQU9GLEtBQUssQ0FBQzt5QkFDYjtxQkFDRDs7Ozs7eUJBQVk7Ozs7OztpQkFDSDs7Ozs7YUFDTCxDQUNOO0NBQ0Q7R0F0QktMLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQXdCakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGFnVHJhY2tlci50c3g/NWIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsYWdUcmFja2VyOiBSZWFjdC5GQzx7Y3VycmVudDogbnVtYmVyfT4gPSAoY3VycmVudCkgPT4ge1xuIGNvbnN0IG5ld0ZsYWcgPSBjdXJyZW50ICsgJyAnICsgYCYjMDEzOyAmIzAxMDtgOyAvL2xhc3QgcGFydCBzaG91bGQgcHJvZHVjZSBsaW5lIGJyZWFrc1xuIGNvbnN0IGZsYWdOZXcgPSAob2xkKSA9PiBvbGQgKz0gbmV3RmxhZztcblxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gIGxldCBmbGFncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFnQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB7fSlcbiB9KVxuXG4gcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9J2ZsYWd0cmFja2VyJz5cbiAgIDxkZXRhaWxzPlxuICAgIDxzdW1tYXJ5PlN0YXRlbWVudHMgZmxhZ2dlZCB0aGlzIHNlc3Npb246PC9zdW1tYXJ5PlxuICAgIDx0ZXh0YXJlYSBpZD0nZmxhZ3MnPnsoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgIGNvbnN0IGZsYWdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKTtcbiAgICAgcmV0dXJuIGZsYWdzO1xuICAgIH1cbiAgIH19PC90ZXh0YXJlYT5cbiAgIDwvZGV0YWlscz5cbiAgPC9kaXY+XG4gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGFnVHJhY2tlciAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJGbGFnVHJhY2tlciIsImN1cnJlbnQiLCJuZXdGbGFnIiwiZmxhZ05ldyIsIm9sZCIsImZsYWdzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGV0YWlscyIsInN1bW1hcnkiLCJ0ZXh0YXJlYSIsImlkIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FlagTracker.tsx\n");

/***/ })

});