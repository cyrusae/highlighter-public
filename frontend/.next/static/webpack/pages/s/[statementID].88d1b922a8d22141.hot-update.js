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

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\n\n\n\n\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    //\tconsole.log(\"received statementID as 'current' is:\"); console.log(from.statement[\"statementID\"]); \n    var current = from.statement[\"statementID\"];\n    //\tconsole.log(\"next value is:\"); console.log(from.nextID);\n    var next = from.nextID;\n    //\tconsole.log(\"previous value is:\"); console.log(from.prevID);\n    var prev = from.prevID;\n    //\tconsole.log(\"received act value is:\"); console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 33,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        var newFlag = current + \" \" + \"&#013; &#010;\"; //last part should produce line breaks\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                if ((typeof document === \"undefined\" ? \"undefined\" : _typeof(document)) !== null && document.getElementById(\"flags\").innerText.includes(current) === false) {\n                    var now = Date.now();\n                    axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                        currentID: current,\n                        now: now\n                    });\n                    var flags = localStorage.getItem(\"flag\");\n                    if (flags.includes(current) === false) document.getElementById(\"flags\").innerHTML += newFlag;\n                }\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 57,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    var here = parseInt(current.statement[\"statementID\"].toString(), 10);\n    //\tconsole.log('Nav attempts to log current statementID here:'); console.log(here);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 75,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 77,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 78,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 74,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Nav;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFBNEM7QUFDWjtBQUNQO0FBUXpCLElBQU1HLFNBQVMsR0FBaUUsZ0JBQWlCO1FBQWZDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxHQUFHLFNBQUhBLEdBQUc7SUFDM0YscUdBQXFHO0lBQ3BHLElBQU1DLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQzlDLDJEQUEyRDtJQUMxRCxJQUFNQyxJQUFJLEdBQUdKLElBQUksQ0FBQ0ssTUFBTTtJQUN6QiwrREFBK0Q7SUFDOUQsSUFBTUMsSUFBSSxHQUFHTixJQUFJLENBQUNPLE1BQU07SUFDekIsMkRBQTJEO0lBRTFELElBQUlOLEdBQUcsS0FBSyxNQUFNLEVBQUU7UUFDbkIscUJBQ0MsOERBQUNPLFFBQU07WUFBQ0MsSUFBSSxFQUFDLFFBQVE7WUFBQ0MsU0FBUyxFQUFDLFFBQVE7WUFBQ0MsT0FBTyxFQUFFLFdBQU07Z0JBQ3RELElBQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDRCxHQUFHLEVBQUU7Z0JBQ3RCZCxnREFBUyxDQUFDLDhCQUE4QixFQUFFO29CQUN6Q2lCLFNBQVMsRUFBRWIsT0FBTztvQkFDbEJVLEdBQUcsRUFBRUEsR0FBRztpQkFDUixDQUFDLENBQUM7Z0JBQ0hmLHVEQUFXLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBTyxPQUFMTyxJQUFJLENBQUUsQ0FBQzthQUFDO3NCQUMvQkgsR0FBRzs7Ozs7aUJBQ0UsQ0FDVDtLQUFDLE1BQU0sSUFBSUEsR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMxQixxQkFDQyw4REFBQ08sUUFBTTtZQUFDQyxJQUFJLEVBQUMsUUFBUTtZQUFDQyxTQUFTLEVBQUMsUUFBUTtZQUFDQyxPQUFPLEVBQUUsV0FBTTtnQkFDdkRiLGdEQUFTLENBQUMsOEJBQThCLEVBQUU7b0JBQUVpQixTQUFTLEVBQUViLE9BQU87aUJBQUUsQ0FBQyxDQUFDO2dCQUNsRUwsdURBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFPLE9BQUxTLElBQUksQ0FBRSxDQUFDO2FBQUM7c0JBQy9CTCxHQUFHOzs7OztpQkFDQyxDQUNUO0tBQUMsTUFBTSxJQUFJQSxHQUFHLEtBQUssTUFBTSxFQUFFO1FBQzFCLElBQU1nQixPQUFPLEdBQUdmLE9BQU8sR0FBRyxHQUFHLEdBQUksZUFBYSxFQUFHLHNDQUFzQztRQUN2RixxQkFDRSw4REFBQ00sUUFBTTtZQUFDQyxJQUFJLEVBQUMsUUFBUTtZQUFDQyxTQUFTLEVBQUMsUUFBUTtZQUFDQyxPQUFPLEVBQUUsV0FBTTtnQkFDdkQsSUFBSSxRQUFPTyxRQUFRLGlDQUFmLE9BQWUsQ0FBUkEsUUFBUSxPQUFLLElBQUksSUFBSUEsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDbkIsT0FBTyxDQUFDLEtBQUssS0FBSyxFQUNyRztvQkFDQyxJQUFNVSxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBRyxFQUFFO29CQUN0QmQsZ0RBQVMsQ0FBQyw4QkFBOEIsRUFBRTt3QkFDekNpQixTQUFTLEVBQUViLE9BQU87d0JBQ2xCVSxHQUFHLEVBQUVBLEdBQUc7cUJBQ1IsQ0FBQyxDQUFDO29CQUNILElBQUlVLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN4QyxJQUFJRixLQUFLLENBQUNELFFBQVEsQ0FBQ25CLE9BQU8sQ0FBQyxLQUFLLEtBQUssRUFDckNnQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ00sU0FBUyxJQUFJUixPQUFPO2lCQUNyRDthQUFDO3NCQUNGaEIsR0FBRzs7Ozs7aUJBQ0ksQ0FDWjtLQUFDLE1BQU07UUFDTixxQkFDQyw4REFBQ08sUUFBTTtZQUFDQyxJQUFJLEVBQUMsUUFBUTtZQUFDQyxTQUFTLEVBQUMsUUFBUTtZQUN4Q0MsT0FBTyxFQUFFLFdBQU07Z0JBQ2QsSUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUcsRUFBRTtnQkFDdEJkLGdEQUFTLENBQUMsOEJBQThCLEVBQUU7b0JBQ3pDaUIsU0FBUyxFQUFFYixPQUFPO29CQUNsQlUsR0FBRyxFQUFFQSxHQUFHO2lCQUNSLENBQUMsQ0FBQzthQUFDO3NCQUNGWCxHQUFHOzs7OztpQkFDRyxDQUNYO0tBQ0E7Q0FDRjtBQXpES0YsS0FBQUEsU0FBUztBQTJEUixJQUFNMkIsR0FBRyxHQUFxQyxnQkFBZTtRQUFieEIsT0FBTyxTQUFQQSxPQUFPO0lBQzdELElBQU15QixJQUFJLEdBQUdDLFFBQVEsQ0FBQzFCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDMEIsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3ZFLG1GQUFtRjtJQUNsRixxQkFDQyw4REFBQ0MsS0FBRztRQUFDQyxFQUFFLEVBQUMsS0FBSzs7MEJBQ1osOERBQUNoQyxTQUFTO2dCQUFDQyxJQUFJLEVBQUVFLE9BQU87Z0JBQUVELEdBQUcsRUFBRSxNQUFNOzs7OztxQkFBSTswQkFDekMsOERBQUNGLFNBQVM7Z0JBQUNDLElBQUksRUFBRUUsT0FBTztnQkFBRUQsR0FBRyxFQUFFLE9BQU87Ozs7O3FCQUFJOzBCQUMxQyw4REFBQ0YsU0FBUztnQkFBQ0MsSUFBSSxFQUFFRSxPQUFPO2dCQUFFRCxHQUFHLEVBQUUsTUFBTTs7Ozs7cUJBQUk7MEJBQ3pDLDhEQUFDRixTQUFTO2dCQUFDQyxJQUFJLEVBQUVFLE9BQU87Z0JBQUVELEdBQUcsRUFBRSxNQUFNOzs7OztxQkFBSTs7Ozs7O2FBQ3BDLENBQ047Q0FDRDtBQVhZeUIsTUFBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4PzgzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBSZWFkZXJQcm9wcyB9IGZyb20gJy4uL3BhZ2VzL3MvW3N0YXRlbWVudElEXSdcblxuZXhwb3J0IHR5cGUgTmF2QnV0dG9uUHJvcHMgPSB7XG4gYWN0aW9uOiAnbmV4dCcgfCAncHJldicgfCAnZmxhZycgfCAncGF1c2UnO1xuXHRyZWFkOiBSZWFkZXJQcm9wc1tdO1xufVxuXG5jb25zdCBOYXZCdXR0b246IFJlYWN0LkZDPHtmcm9tOiBSZWFkZXJQcm9wczsgYWN0OiBOYXZCdXR0b25Qcm9wc1tcImFjdGlvblwiXX0+ID0gKHtmcm9tLCBhY3R9KSA9PiB7XG4vL1x0Y29uc29sZS5sb2coXCJyZWNlaXZlZCBzdGF0ZW1lbnRJRCBhcyAnY3VycmVudCcgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdKTsgXG5cdGNvbnN0IGN1cnJlbnQgPSBmcm9tLnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdO1xuLy9cdGNvbnNvbGUubG9nKFwibmV4dCB2YWx1ZSBpczpcIik7IGNvbnNvbGUubG9nKGZyb20ubmV4dElEKTtcblx0Y29uc3QgbmV4dCA9IGZyb20ubmV4dElEO1xuLy9cdGNvbnNvbGUubG9nKFwicHJldmlvdXMgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLnByZXZJRCk7XG5cdGNvbnN0IHByZXYgPSBmcm9tLnByZXZJRDtcbi8vXHRjb25zb2xlLmxvZyhcInJlY2VpdmVkIGFjdCB2YWx1ZSBpczpcIik7IGNvbnNvbGUubG9nKGFjdCk7XG5cbiBpZiAoYWN0ID09PSAnbmV4dCcpIHtcbiAgcmV0dXJuIChcbiAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgXHRheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IFxuXHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0bm93OiBub3csXG5cdFx0XHRcdFx0fSk7XG4gICAgIFJvdXRlci5wdXNoKCcvcy8nLCBgL3MvJHtuZXh0fWApfX0+XG4gICAgICB7YWN0fVxuICAgPC9idXR0b24+XG4gICl9IGVsc2UgaWYgKGFjdCA9PT0gJ3ByZXYnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IGN1cnJlbnRJRDogY3VycmVudCB9KTtcbiAgICAgIFJvdXRlci5wdXNoKCcvcy8nLCBgL3MvJHtwcmV2fWApfX0+XG4gICAgICAge2FjdH1cbiBcdFx0PC9idXR0b24+XG4gXHQpfSBlbHNlIGlmIChhY3QgPT09ICdmbGFnJykge1xuICAgXHRjb25zdCBuZXdGbGFnID0gY3VycmVudCArICcgJyArIGAmIzAxMzsgJiMwMTA7YDsgLy9sYXN0IHBhcnQgc2hvdWxkIHByb2R1Y2UgbGluZSBicmVha3NcbiAgIFx0cmV0dXJuIChcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IG51bGwgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdzJykuaW5uZXJUZXh0LmluY2x1ZGVzKGN1cnJlbnQpID09PSBmYWxzZSlcbiAgICAgIFx0XHR7IFxuICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgXHRcdFx0XHQgIFx0YXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub3c6IG5vdyxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGZsYWdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChmbGFncy5pbmNsdWRlcyhjdXJyZW50KSA9PT0gZmFsc2UpXG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZ3MnKS5pbm5lckhUTUwgKz0gbmV3RmxhZyBcbiAgICAgICAgfX19PlxuXHRcdFx0XHRcdFx0XHR7YWN0fVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG4gXHQpfSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcbiAgIFx0IDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBcdFx0YXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBcblx0XHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0XHRub3c6IG5vdyxcblx0XHRcdFx0XHRcdH0pO319PlxuICAgXHQgICB7YWN0fVxuICBcdCAgPC9idXR0b24+XG4gIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTmF2OiBSZWFjdC5GQzx7Y3VycmVudDogUmVhZGVyUHJvcHN9PiA9ICh7Y3VycmVudH0pID0+IHtcblx0Y29uc3QgaGVyZSA9IHBhcnNlSW50KGN1cnJlbnQuc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl0udG9TdHJpbmcoKSwgMTApXG4vL1x0Y29uc29sZS5sb2coJ05hdiBhdHRlbXB0cyB0byBsb2cgY3VycmVudCBzdGF0ZW1lbnRJRCBoZXJlOicpOyBjb25zb2xlLmxvZyhoZXJlKTtcbiByZXR1cm4gKFxuICA8ZGl2IGlkPSduYXYnPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydwcmV2J30gLz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsncGF1c2UnfSAvPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydmbGFnJ30gLz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsnbmV4dCd9IC8+XG4gIDwvZGl2PlxuIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJheGlvcyIsIk5hdkJ1dHRvbiIsImZyb20iLCJhY3QiLCJjdXJyZW50Iiwic3RhdGVtZW50IiwibmV4dCIsIm5leHRJRCIsInByZXYiLCJwcmV2SUQiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm5vdyIsIkRhdGUiLCJwdXQiLCJjdXJyZW50SUQiLCJwdXNoIiwibmV3RmxhZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJpbmNsdWRlcyIsImZsYWdzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlubmVySFRNTCIsIk5hdiIsImhlcmUiLCJwYXJzZUludCIsInRvU3RyaW5nIiwiZGl2IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});