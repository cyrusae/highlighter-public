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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar FlagTracker = function(param) {\n    var current = param.current;\n    _s();\n    console.log(current);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), flagged = ref[0], setFlagged = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var flags = localStorage.getItem(\"flag\");\n        if (flags !== null) setFlagged(localStorage.getItem(\"flag\"));\n        if (flags === null) flags = \"\";\n        document.getElementById(\"flagButton\").addEventListener(\"click\", function flag() {\n            if (flags.includes(current.toString()) === false) {\n                var commentary = prompt(\"Why flag this?\", \"\");\n                flags += \"<li>\" + current + \": \" + commentary + \"</li>\";\n            }\n            localStorage.setItem(\"flag\", flags);\n            setFlagged(localStorage.getItem(\"flag\"));\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flagtracker\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    children: \"Statements flagged this session:\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"flags\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        dangerouslySetInnerHTML: {\n                            __html: flagged\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: function() {\n                        localStorage.clear();\n                        setFlagged(\"\");\n                    },\n                    children: \"Clear flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n            lineNumber: 23,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, _this);\n};\n_s(FlagTracker, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = FlagTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlagTracker);\nvar _c;\n$RefreshReg$(_c, \"FlagTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZsYWdUcmFja2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFrRDs7QUFFbEQsSUFBTUcsV0FBVyxHQUFnQyxnQkFBZTtRQUFiQyxPQUFPLFNBQVBBLE9BQU87O0lBQ3pEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDLENBQUM7SUFDckIsSUFBZ0NGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFKN0MsT0FJZ0IsR0FBaUJBLEdBQVksR0FBN0IsRUFKaEIsVUFJNEIsR0FBS0EsR0FBWSxHQUFqQjtJQUUzQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2YsSUFBSVEsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBSUYsS0FBSyxLQUFLLElBQUksRUFBRUQsVUFBVSxDQUFDRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUlGLEtBQUssS0FBSyxJQUFJLEVBQUVBLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDL0JHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsU0FBU0MsSUFBSSxHQUFHO1lBQy9FLElBQUlOLEtBQUssQ0FBQ08sUUFBUSxDQUFDWixPQUFPLENBQUNhLFFBQVEsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUNqRCxJQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7Z0JBQy9DVixLQUFLLElBQUssTUFBTSxHQUFHTCxPQUFPLEdBQUcsSUFBSSxHQUFHYyxVQUFVLEdBQUcsT0FBTyxDQUFFO2FBQzFEO1lBQ0RSLFlBQVksQ0FBQ1UsT0FBTyxDQUFDLE1BQU0sRUFBRVgsS0FBSyxDQUFDLENBQUM7WUFDcENELFVBQVUsQ0FBQ0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6QyxDQUFDLENBQUM7S0FDSCxDQUFDO0lBRUYscUJBQ0MsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGFBQWE7a0JBQzNCLDRFQUFDQyxTQUFPOzs4QkFDUCw4REFBQ0MsU0FBTzs4QkFBQyxrQ0FBZ0M7Ozs7O3lCQUFVOzhCQUNuRCw4REFBQ0gsS0FBRztvQkFBQ0ksRUFBRSxFQUFDLE9BQU87OEJBQUMsNEVBQUNDLElBQUU7d0JBQUNDLHVCQUF1QixFQUFFOzRCQUFDQyxNQUFNLEVBQUVyQixPQUFPO3lCQUFDOzs7Ozs2QkFBTzs7Ozs7eUJBQU07OEJBQzNFLDhEQUFDc0IsUUFBTTtvQkFBQ0MsSUFBSSxFQUFDLFFBQVE7b0JBQUNDLE9BQU8sRUFBRSxXQUFNO3dCQUFDckIsWUFBWSxDQUFDc0IsS0FBSyxFQUFFLENBQUM7d0JBQUN4QixVQUFVLENBQUMsRUFBRSxDQUFDO3FCQUFDOzhCQUFFLGFBQVc7Ozs7O3lCQUFTOzs7Ozs7aUJBQ3hGOzs7OzthQUNMLENBQ047Q0FDRDtHQTNCS0wsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBNkJqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZsYWdUcmFja2VyLnRzeD81YjI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsYWdUcmFja2VyOiBSZWFjdC5GQzx7Y3VycmVudDogbnVtYmVyfT4gPSAoe2N1cnJlbnR9KSA9PiB7XG4gY29uc29sZS5sb2coY3VycmVudCk7XG4gY29uc3QgWyBmbGFnZ2VkLCBzZXRGbGFnZ2VkIF0gPSB1c2VTdGF0ZSgnJylcblxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gIGxldCBmbGFncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJyk7XG4gIGlmIChmbGFncyAhPT0gbnVsbCkgc2V0RmxhZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpKTsgXG4gIGlmIChmbGFncyA9PT0gbnVsbCkgZmxhZ3MgPSAnJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGZsYWcoKSB7XG4gICBpZiAoZmxhZ3MuaW5jbHVkZXMoY3VycmVudC50b1N0cmluZygpKSA9PT0gZmFsc2UpIHtcbiAgICBjb25zdCBjb21tZW50YXJ5ID0gcHJvbXB0KCdXaHkgZmxhZyB0aGlzPycsICcnKTtcbiAgICBmbGFncyArPSAoJzxsaT4nICsgY3VycmVudCArICc6ICcgKyBjb21tZW50YXJ5ICsgJzwvbGk+Jyk7XG4gICB9O1xuICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZsYWcnLCBmbGFncyk7XG4gICBzZXRGbGFnZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJykpO1xuICB9KTtcbiB9KVxuXG4gcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9J2ZsYWd0cmFja2VyJz5cbiAgIDxkZXRhaWxzPlxuICAgIDxzdW1tYXJ5PlN0YXRlbWVudHMgZmxhZ2dlZCB0aGlzIHNlc3Npb246PC9zdW1tYXJ5PlxuICAgIDxkaXYgaWQ9J2ZsYWdzJz48dWwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGZsYWdnZWR9fT48L3VsPjwvZGl2PlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7bG9jYWxTdG9yYWdlLmNsZWFyKCk7IHNldEZsYWdnZWQoJycpfX0+Q2xlYXIgZmxhZ3M8L2J1dHRvbj5cbiAgIDwvZGV0YWlscz5cbiAgPC9kaXY+XG4gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGFnVHJhY2tlciAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZsYWdUcmFja2VyIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJmbGFnZ2VkIiwic2V0RmxhZ2dlZCIsImZsYWdzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmxhZyIsImluY2x1ZGVzIiwidG9TdHJpbmciLCJjb21tZW50YXJ5IiwicHJvbXB0Iiwic2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImRldGFpbHMiLCJzdW1tYXJ5IiwiaWQiLCJ1bCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FlagTracker.tsx\n");

/***/ })

});