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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar FlagTracker = function(param) {\n    var current = param.current;\n    _s();\n    console.log(current);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), flagged = ref[0], setFlagged = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var flags = localStorage.getItem(\"flag\");\n        if (flags !== null) setFlagged(localStorage.getItem(\"flag\"));\n        if (flags === null) flags = \"\";\n        document.getElementById(\"flagButton\").addEventListener(\"click\", function flag() {\n            if (flags.includes(current.toString()) === false) {\n                var commentary = prompt(\"Why flag this?\", \"\");\n                flags += \"<li>\" + current + \": \" + commentary + \"</li>\";\n            }\n            localStorage.setItem(\"flag\", flags);\n            setFlagged(localStorage.getItem(\"flag\"));\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flagtracker\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            open: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    children: \"Statements flagged this session:\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"flags\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        dangerouslySetInnerHTML: {\n                            __html: flagged\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: function() {\n                        return navigator.clipboard.writeText(flagged);\n                    },\n                    children: \"Copy flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: function() {\n                        localStorage.clear();\n                        setFlagged(\"\");\n                    },\n                    children: \"Clear flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n            lineNumber: 23,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, _this);\n};\n_s(FlagTracker, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = FlagTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlagTracker);\nvar _c;\n$RefreshReg$(_c, \"FlagTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZsYWdUcmFja2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFrRDs7QUFFbEQsSUFBTUcsV0FBVyxHQUFnQyxnQkFBZTtRQUFiQyxPQUFPLFNBQVBBLE9BQU87O0lBQ3pEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDLENBQUM7SUFDckIsSUFBZ0NGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFKN0MsT0FJZ0IsR0FBaUJBLEdBQVksR0FBN0IsRUFKaEIsVUFJNEIsR0FBS0EsR0FBWSxHQUFqQjtJQUUzQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2YsSUFBSVEsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBSUYsS0FBSyxLQUFLLElBQUksRUFBRUQsVUFBVSxDQUFDRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUlGLEtBQUssS0FBSyxJQUFJLEVBQUVBLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDL0JHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsU0FBU0MsSUFBSSxHQUFHO1lBQy9FLElBQUlOLEtBQUssQ0FBQ08sUUFBUSxDQUFDWixPQUFPLENBQUNhLFFBQVEsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUNqRCxJQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7Z0JBQy9DVixLQUFLLElBQUssTUFBTSxHQUFHTCxPQUFPLEdBQUcsSUFBSSxHQUFHYyxVQUFVLEdBQUcsT0FBTyxDQUFFO2FBQzFEO1lBQ0RSLFlBQVksQ0FBQ1UsT0FBTyxDQUFDLE1BQU0sRUFBRVgsS0FBSyxDQUFDLENBQUM7WUFDcENELFVBQVUsQ0FBQ0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6QyxDQUFDLENBQUM7S0FDSCxDQUFDO0lBRUYscUJBQ0MsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGFBQWE7a0JBQzNCLDRFQUFDQyxTQUFPO1lBQUNDLElBQUk7OzhCQUNaLDhEQUFDQyxTQUFPOzhCQUFDLGtDQUFnQzs7Ozs7eUJBQVU7OEJBQ25ELDhEQUFDSixLQUFHO29CQUFDSyxFQUFFLEVBQUMsT0FBTzs4QkFDZCw0RUFBQ0MsSUFBRTt3QkFBQ0MsdUJBQXVCLEVBQUU7NEJBQUNDLE1BQU0sRUFBRXRCLE9BQU87eUJBQUM7Ozs7OzZCQUFPOzs7Ozt5QkFBTTs4QkFDNUQsOERBQUN1QixRQUFNO29CQUFDQyxJQUFJLEVBQUMsUUFBUTtvQkFBQ0MsT0FBTyxFQUFFOytCQUFNQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDNUIsT0FBTyxDQUFDO3FCQUFBOzhCQUFFLFlBQVU7Ozs7O3lCQUFTOzhCQUNoRyw4REFBQ3VCLFFBQU07b0JBQUNDLElBQUksRUFBQyxRQUFRO29CQUFDQyxPQUFPLEVBQUUsV0FBTTt3QkFBQ3RCLFlBQVksQ0FBQzBCLEtBQUssRUFBRSxDQUFDO3dCQUFDNUIsVUFBVSxDQUFDLEVBQUUsQ0FBQztxQkFBQzs4QkFBRSxhQUFXOzs7Ozt5QkFBUzs7Ozs7O2lCQUN4Rjs7Ozs7YUFDTCxDQUNOO0NBQ0Q7R0E3QktMLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQStCakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGFnVHJhY2tlci50c3g/NWIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGbGFnVHJhY2tlcjogUmVhY3QuRkM8e2N1cnJlbnQ6IG51bWJlcn0+ID0gKHtjdXJyZW50fSkgPT4ge1xuIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuIGNvbnN0IFsgZmxhZ2dlZCwgc2V0RmxhZ2dlZCBdID0gdXNlU3RhdGUoJycpXG5cbiB1c2VFZmZlY3QoKCkgPT4ge1xuICBsZXQgZmxhZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpO1xuICBpZiAoZmxhZ3MgIT09IG51bGwpIHNldEZsYWdnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKSk7IFxuICBpZiAoZmxhZ3MgPT09IG51bGwpIGZsYWdzID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFnQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBmbGFnKCkge1xuICAgaWYgKGZsYWdzLmluY2x1ZGVzKGN1cnJlbnQudG9TdHJpbmcoKSkgPT09IGZhbHNlKSB7XG4gICAgY29uc3QgY29tbWVudGFyeSA9IHByb21wdCgnV2h5IGZsYWcgdGhpcz8nLCAnJyk7XG4gICAgZmxhZ3MgKz0gKCc8bGk+JyArIGN1cnJlbnQgKyAnOiAnICsgY29tbWVudGFyeSArICc8L2xpPicpO1xuICAgfTtcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmbGFnJywgZmxhZ3MpO1xuICAgc2V0RmxhZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpKTtcbiAgfSk7XG4gfSlcblxuIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdmbGFndHJhY2tlcic+XG4gICA8ZGV0YWlscyBvcGVuPlxuICAgIDxzdW1tYXJ5PlN0YXRlbWVudHMgZmxhZ2dlZCB0aGlzIHNlc3Npb246PC9zdW1tYXJ5PlxuICAgIDxkaXYgaWQ9J2ZsYWdzJz5cbiAgICAgPHVsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBmbGFnZ2VkfX0+PC91bD48L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZmxhZ2dlZCl9PkNvcHkgZmxhZ3M8L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpOyBzZXRGbGFnZ2VkKCcnKX19PkNsZWFyIGZsYWdzPC9idXR0b24+XG4gICA8L2RldGFpbHM+XG4gIDwvZGl2PlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxhZ1RyYWNrZXIgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGbGFnVHJhY2tlciIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwiZmxhZ2dlZCIsInNldEZsYWdnZWQiLCJmbGFncyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZsYWciLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiY29tbWVudGFyeSIsInByb21wdCIsInNldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJkZXRhaWxzIiwib3BlbiIsInN1bW1hcnkiLCJpZCIsInVsIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FlagTracker.tsx\n");

/***/ })

});