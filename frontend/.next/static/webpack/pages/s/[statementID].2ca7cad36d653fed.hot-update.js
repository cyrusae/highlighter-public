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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"NavMini\": function() { return /* binding */ NavMini; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Stack */ \"./node_modules/react-bootstrap/esm/Stack.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    //\tconsole.log(\"received statementID as 'current' is:\"); console.log(from.statement[\"statementID\"]); \n    var current = from.statement[\"statementID\"];\n    //\tconsole.log(\"next value is:\"); console.log(from.nextID);\n    var next = from.nextID;\n    //\tconsole.log(\"previous value is:\"); console.log(from.prevID);\n    var prev = from.prevID;\n    //\tconsole.log(\"received act value is:\"); console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"nextButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 27,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"prevButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 38,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            variant: \"danger\",\n            id: \"flagButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"pauseButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 56,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), flagged = ref[0], setFlagged = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var bg = document.getElementById(\"flagS\");\n        var flags = localStorage.getItem(\"flag\");\n        bg.style.backgroundColor = \"#53565A\";\n        if (flags !== null) {\n            setFlagged(localStorage.getItem(\"flag\"));\n            bg.style.backgroundColor = \"#610C04\";\n        }\n        if (flags === null) {\n            flags = \"\";\n            document.getElementById(\"flagButton\").addEventListener(\"click\", function flag() {\n                if (flags.includes(current.toString()) === false) {\n                    var commentary = prompt(\"Why flag this?\", \"\");\n                    flags += \"<li>\" + current + \": \" + commentary + \"</li>\";\n                }\n                localStorage.setItem(\"flag\", flags);\n                setFlagged(localStorage.getItem(\"flag\"));\n                bg.style.backgroundColor = \"#53565A\";\n            });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        gap: 1,\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 96,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 97,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 98,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 99,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 95,\n        columnNumber: 3\n    }, _this);\n};\n_s(Nav, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c1 = Nav;\nvar NavMini = function(param) {\n    var current = param.current;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"multinav\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            variant: \"outline-danger\",\n            id: \"flagButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n            },\n            children: \"flag\"\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 107,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 106,\n        columnNumber: 3\n    }, _this);\n};\n_c2 = NavMini;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n$RefreshReg$(_c2, \"NavMini\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWUsR0FBRyxTQUFTLENBQUM7YUFDckMsQ0FBQyxDQUFDO1NBQ0g7S0FDRCxDQUFDO0lBQ0YscUJBQ0MsOERBQUM5Qiw2REFBSztRQUFDc0MsR0FBRyxFQUFFLENBQUM7UUFBRTVCLEVBQUUsRUFBQyxLQUFLOzswQkFDdEIsOERBQUNULFNBQVM7Z0JBQUNDLElBQUksRUFBRUUsT0FBTztnQkFBRUQsR0FBRyxFQUFFLE1BQU07Ozs7O3FCQUFJOzBCQUN6Qyw4REFBQ0YsU0FBUztnQkFBQ0MsSUFBSSxFQUFFRSxPQUFPO2dCQUFFRCxHQUFHLEVBQUUsT0FBTzs7Ozs7cUJBQUk7MEJBQzFDLDhEQUFDRixTQUFTO2dCQUFDQyxJQUFJLEVBQUVFLE9BQU87Z0JBQUVELEdBQUcsRUFBRSxNQUFNOzs7OztxQkFBSTswQkFDekMsOERBQUNGLFNBQVM7Z0JBQUNDLElBQUksRUFBRUUsT0FBTztnQkFBRUQsR0FBRyxFQUFFLE1BQU07Ozs7O3FCQUFJOzs7Ozs7YUFDbEMsQ0FDUjtDQUNEO0dBaENZaUIsR0FBRztBQUFIQSxNQUFBQSxHQUFHO0FBa0NULElBQU1tQixPQUFPLEdBQWdDLGdCQUFlO1FBQWJuQyxPQUFPLFNBQVBBLE9BQU87SUFDNUQscUJBQ0MsOERBQUNvQyxLQUFHO1FBQUM1QixTQUFTLEVBQUMsVUFBVTtrQkFDeEIsNEVBQUNiLDhEQUFNO1lBQUNvQixPQUFPLEVBQUMsZ0JBQWdCO1lBQUNULEVBQUUsRUFBQyxZQUFZO1lBQUNDLElBQUksRUFBQyxRQUFRO1lBQUNDLFNBQVMsRUFBQyxRQUFRO1lBQUNDLE9BQU8sRUFBRSxXQUFNO2dCQUMvRmYsZ0RBQVMsQ0FBQyw4QkFBOEIsRUFBRTtvQkFDMUNtQixTQUFTLEVBQUViLE9BQU87aUJBQ2xCLENBQUMsQ0FBQzthQUNIO3NCQUFFLE1BRUg7Ozs7O2lCQUFTOzs7OzthQUNKLENBQ047Q0FDRDtBQVpZbUMsTUFBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4PzgzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBSZWFkZXJQcm9wcyB9IGZyb20gJy4uL3BhZ2VzL3MvW3N0YXRlbWVudElEXSdcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi9TdGF0ZW1lbnQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXG5pbXBvcnQgU3RhY2sgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1N0YWNrJ1xuXG5cbmV4cG9ydCB0eXBlIE5hdkJ1dHRvblByb3BzID0ge1xuIGFjdGlvbjogJ25leHQnIHwgJ3ByZXYnIHwgJ2ZsYWcnIHwgJ3BhdXNlJztcblx0cmVhZDogUmVhZGVyUHJvcHNbXTtcbn1cblxuY29uc3QgTmF2QnV0dG9uOiBSZWFjdC5GQzx7ZnJvbTogUmVhZGVyUHJvcHM7IGFjdDogTmF2QnV0dG9uUHJvcHNbXCJhY3Rpb25cIl19PiA9ICh7ZnJvbSwgYWN0fSkgPT4ge1xuLy9cdGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgc3RhdGVtZW50SUQgYXMgJ2N1cnJlbnQnIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSk7IFxuXHRjb25zdCBjdXJyZW50ID0gZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXTtcbi8vXHRjb25zb2xlLmxvZyhcIm5leHQgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLm5leHRJRCk7XG5cdGNvbnN0IG5leHQgPSBmcm9tLm5leHRJRDtcbi8vXHRjb25zb2xlLmxvZyhcInByZXZpb3VzIHZhbHVlIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5wcmV2SUQpO1xuXHRjb25zdCBwcmV2ID0gZnJvbS5wcmV2SUQ7XG4vL1x0Y29uc29sZS5sb2coXCJyZWNlaXZlZCBhY3QgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhhY3QpO1xuXG4gaWYgKGFjdCA9PT0gJ25leHQnKSB7XG4gIHJldHVybiAoXG4gICA8QnV0dG9uIGlkPSduZXh0QnV0dG9uJyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBcdGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xlYXZlLycsIHsgXG5cdFx0XHRcdFx0XHRjdXJyZW50SUQ6IGN1cnJlbnQsXG5cdFx0XHRcdFx0XHRub3c6IG5vdyxcblx0XHRcdFx0XHR9KTtcbiAgICAgUm91dGVyLnB1c2goJy9zLycsIGAvcy8ke25leHR9YCl9fT5cbiAgICAgIHthY3R9XG4gICA8L0J1dHRvbj5cbiAgKX0gZWxzZSBpZiAoYWN0ID09PSAncHJldicpIHtcbiAgICByZXR1cm4gKFxuICAgICA8QnV0dG9uIGlkPSdwcmV2QnV0dG9uJyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IGN1cnJlbnRJRDogY3VycmVudCB9KTtcbiAgICAgIFJvdXRlci5wdXNoKCcvcy8nLCBgL3MvJHtwcmV2fWApfX0+XG4gICAgICAge2FjdH1cbiBcdFx0PC9CdXR0b24+XG4gXHQpfSBlbHNlIGlmIChhY3QgPT09ICdmbGFnJykge1xuICAgXHRyZXR1cm4gKFxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgaWQ9J2ZsYWdCdXR0b24nIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBcdFx0XHRcdCBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IFxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJRDogY3VycmVudCxcblx0XHRcdFx0XHRcdFx0XHRub3c6IG5vdyxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHR7YWN0fVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG4gXHQpfSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcbiAgIFx0IDxCdXR0b24gXG4gICAgIGlkPSdwYXVzZUJ1dHRvbicgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBcdFx0YXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBcblx0XHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0XHRub3c6IG5vdyxcblx0XHRcdFx0XHRcdH0pO319PlxuICAgXHQgICB7YWN0fVxuICBcdCAgPC9CdXR0b24+XG4gIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTmF2OiBSZWFjdC5GQzx7Y3VycmVudDogUmVhZGVyUHJvcHN9PiA9ICh7Y3VycmVudH0pID0+IHtcblxuXHRjb25zdCBbIGZsYWdnZWQsIHNldEZsYWdnZWQgXSA9IHVzZVN0YXRlKCcnKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBiZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFnUycpO1xuICBsZXQgZmxhZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpO1xuXHRcdGJnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNTM1NjVBJ1xuXHRcdGlmIChmbGFncyAhPT0gbnVsbCkge1xuXHRcdFx0c2V0RmxhZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpKTtcblx0XHRcdGJnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjEwQzA0Jztcblx0XHR9OyBcbiAgaWYgKGZsYWdzID09PSBudWxsKSB7XG5cdFx0XHRmbGFncyA9ICcnO1xuXHQgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFnQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBmbGFnKCkge1xuICBcdCBpZiAoZmxhZ3MuaW5jbHVkZXMoY3VycmVudC50b1N0cmluZygpKSA9PT0gZmFsc2UpIHtcbiAgXHQgIGNvbnN0IGNvbW1lbnRhcnkgPSBwcm9tcHQoJ1doeSBmbGFnIHRoaXM/JywgJycpO1xuICBcdCAgZmxhZ3MgKz0gKCc8bGk+JyArIGN1cnJlbnQgKyAnOiAnICsgY29tbWVudGFyeSArICc8L2xpPicpO1xuIFx0ICB9O1xuIFx0ICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxhZycsIGZsYWdzKTtcbiBcdCAgc2V0RmxhZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpKTtcblx0XHRcdFx0Ymcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM1MzU2NUEnO1xuIFx0IH0pO1xuXHRcdH1cbiB9KVxuIHJldHVybiAoXG4gIDxTdGFjayBnYXA9ezF9IGlkPSduYXYnPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydwcmV2J30gLz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsncGF1c2UnfSAvPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydmbGFnJ30gLz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsnbmV4dCd9IC8+XG4gIDwvU3RhY2s+XG4gKVxufVxuXG5leHBvcnQgY29uc3QgTmF2TWluaTogUmVhY3QuRkM8e2N1cnJlbnQ6IG51bWJlcn0+ID0gKHtjdXJyZW50fSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtdWx0aW5hdic+XG5cdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIGlkPSdmbGFnQnV0dG9uJyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gIFx0XHQgYXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBcblx0XHRcdFx0XHRjdXJyZW50SUQ6IGN1cnJlbnQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fX0+XG5cdFx0XHRcdGZsYWdcblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSb3V0ZXIiLCJheGlvcyIsIkJ1dHRvbiIsIlN0YWNrIiwiTmF2QnV0dG9uIiwiZnJvbSIsImFjdCIsImN1cnJlbnQiLCJzdGF0ZW1lbnQiLCJuZXh0IiwibmV4dElEIiwicHJldiIsInByZXZJRCIsImlkIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJub3ciLCJEYXRlIiwicHV0IiwiY3VycmVudElEIiwicHVzaCIsInZhcmlhbnQiLCJOYXYiLCJmbGFnZ2VkIiwic2V0RmxhZ2dlZCIsImJnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZsYWdzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZsYWciLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiY29tbWVudGFyeSIsInByb21wdCIsInNldEl0ZW0iLCJnYXAiLCJOYXZNaW5pIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});