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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar FlagTracker = function(current) {\n    _s();\n    var newFlag = current + \". \"; //last part should produce line breaks\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), flagged = ref[0], setFlagged = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var flags = localStorage.getItem(\"flag\");\n        if (flags !== null && flags !== undefined) setFlagged(localStorage.getItem(\"flag\"));\n        document.getElementById(\"flagButton\").addEventListener(\"click\", function flag() {\n            flags += newFlag;\n            localStorage.setItem(\"flag\", flags);\n            setFlagged(localStorage.getItem(\"flag\"));\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flagtracker\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    children: \"Statements flagged this session:\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    id: \"flags\",\n                    value: flagged,\n                    onChange: function(e) {\n                        return localStorage.setItem(\"flag\", e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: function() {\n                        localStorage.clear();\n                        setFlagged(\"\");\n                    },\n                    children: \"Clear flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, _this);\n};\n_s(FlagTracker, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = FlagTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlagTracker);\nvar _c;\n$RefreshReg$(_c, \"FlagTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZsYWdUcmFja2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFrRDs7QUFFbEQsSUFBTUcsV0FBVyxHQUFnQyxTQUFDQyxPQUFPLEVBQUs7O0lBQzdELElBQU1DLE9BQU8sR0FBR0QsT0FBTyxHQUFHLElBQUksRUFBRSxzQ0FBc0M7SUFDdEUsSUFBZ0NGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFKN0MsT0FJZ0IsR0FBaUJBLEdBQVksR0FBN0IsRUFKaEIsVUFJNEIsR0FBS0EsR0FBWSxHQUFqQjtJQUUzQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2YsSUFBSU8sS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBSUYsS0FBSyxLQUFLLElBQUksSUFBSUEsS0FBSyxLQUFLRyxTQUFTLEVBQUVKLFVBQVUsQ0FBQ0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwRkUsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFTQyxJQUFJLEdBQUc7WUFDL0VQLEtBQUssSUFBSUgsT0FBTyxDQUFDO1lBQ2pCSSxZQUFZLENBQUNPLE9BQU8sQ0FBQyxNQUFNLEVBQUVSLEtBQUssQ0FBQyxDQUFDO1lBQ3BDRCxVQUFVLENBQUNFLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDekMsQ0FBQyxDQUFDO0tBQ0gsQ0FBQztJQUVGLHFCQUNDLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxhQUFhO2tCQUMzQiw0RUFBQ0MsU0FBTzs7OEJBQ1AsOERBQUNDLFNBQU87OEJBQUMsa0NBQWdDOzs7Ozt5QkFBVTs4QkFDbkQsOERBQUNDLFVBQVE7b0JBQUNDLEVBQUUsRUFBQyxPQUFPO29CQUFDQyxLQUFLLEVBQUVqQixPQUFPO29CQUFFa0IsUUFBUSxFQUFFLFNBQUNDLENBQUM7K0JBQUtoQixZQUFZLENBQUNPLE9BQU8sQ0FBQyxNQUFNLEVBQUVTLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7cUJBQUE7Ozs7O3lCQUFhOzhCQUMvRyw4REFBQ0ksUUFBTTtvQkFBQ0MsSUFBSSxFQUFDLFFBQVE7b0JBQUNDLE9BQU8sRUFBRSxXQUFNO3dCQUFDcEIsWUFBWSxDQUFDcUIsS0FBSyxFQUFFLENBQUM7d0JBQUN2QixVQUFVLENBQUMsRUFBRSxDQUFDO3FCQUFDOzhCQUFFLGFBQVc7Ozs7O3lCQUFTOzs7Ozs7aUJBQ3hGOzs7OzthQUNMLENBQ047Q0FDRDtHQXZCS0osV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBeUJqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZsYWdUcmFja2VyLnRzeD81YjI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsYWdUcmFja2VyOiBSZWFjdC5GQzx7Y3VycmVudDogbnVtYmVyfT4gPSAoY3VycmVudCkgPT4ge1xuIGNvbnN0IG5ld0ZsYWcgPSBjdXJyZW50ICsgJy4gJzsgLy9sYXN0IHBhcnQgc2hvdWxkIHByb2R1Y2UgbGluZSBicmVha3NcbiBjb25zdCBbIGZsYWdnZWQsIHNldEZsYWdnZWQgXSA9IHVzZVN0YXRlKCcnKVxuXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgbGV0IGZsYWdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKTtcbiAgaWYgKGZsYWdzICE9PSBudWxsICYmIGZsYWdzICE9PSB1bmRlZmluZWQpIHNldEZsYWdnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFnQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBmbGFnKCkge1xuICAgZmxhZ3MgKz0gbmV3RmxhZztcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmbGFnJywgZmxhZ3MpO1xuICAgc2V0RmxhZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpKTtcbiAgfSk7XG4gfSlcblxuIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdmbGFndHJhY2tlcic+XG4gICA8ZGV0YWlscz5cbiAgICA8c3VtbWFyeT5TdGF0ZW1lbnRzIGZsYWdnZWQgdGhpcyBzZXNzaW9uOjwvc3VtbWFyeT5cbiAgICA8dGV4dGFyZWEgaWQ9J2ZsYWdzJyB2YWx1ZT17ZmxhZ2dlZH0gb25DaGFuZ2U9eyhlKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxhZycsIGUudGFyZ2V0LnZhbHVlKX0+PC90ZXh0YXJlYT5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpOyBzZXRGbGFnZ2VkKCcnKX19PkNsZWFyIGZsYWdzPC9idXR0b24+XG4gICA8L2RldGFpbHM+XG4gIDwvZGl2PlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxhZ1RyYWNrZXIgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGbGFnVHJhY2tlciIsImN1cnJlbnQiLCJuZXdGbGFnIiwiZmxhZ2dlZCIsInNldEZsYWdnZWQiLCJmbGFncyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZsYWciLCJzZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGV0YWlscyIsInN1bW1hcnkiLCJ0ZXh0YXJlYSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FlagTracker.tsx\n");

/***/ })

});