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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"NavMini\": function() { return /* binding */ NavMini; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Stack */ \"./node_modules/react-bootstrap/esm/Stack.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar NavTogl = function(param) {\n    var from = param.from;\n    var currentID = from.statement[\"statementID\"];\n    var nextID = from.nextID;\n    var prevID = from.prevID;\n};\n_c = NavTogl;\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    //\tconsole.log(\"received statementID as 'current' is:\"); console.log(from.statement[\"statementID\"]); \n    var current = from.statement[\"statementID\"];\n    //\tconsole.log(\"next value is:\"); console.log(from.nextID);\n    var next = from.nextID;\n    //\tconsole.log(\"previous value is:\"); console.log(from.prevID);\n    var prev = from.prevID;\n    //\tconsole.log(\"received act value is:\"); console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            size: \"lg\",\n            id: \"nextButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 34,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            size: \"lg\",\n            id: \"prevButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 45,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            size: \"sm\",\n            disabled: true,\n            variant: \"danger\",\n            id: \"flagButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            size: \"sm\",\n            id: \"pauseButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 63,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c1 = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), flagged = ref[0], setFlagged = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var bg = document.getElementById(\"flagS\");\n        var flags = localStorage.getItem(\"flag\");\n        bg.style.backgroundColor = \"#53565A\";\n        if (flags !== null) {\n            setFlagged(localStorage.getItem(\"flag\"));\n            bg.style.backgroundColor = \"#610C04\";\n        }\n        if (flags === null) {\n            flags = \"\";\n            document.getElementById(\"flagButton\").addEventListener(\"click\", function flag() {\n                if (flags.includes(current.toString()) === false) {\n                    var commentary = prompt(\"Why flag this?\", \"\");\n                    flags += \"<li>\" + current + \": \" + commentary + \"</li>\";\n                    return;\n                }\n                localStorage.setItem(\"flag\", flags);\n                setFlagged(localStorage.getItem(\"flag\"));\n                bg.style.backgroundColor = \"#53565A\";\n            });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        gap: 1,\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 104,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 105,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 105,\n                columnNumber: 46\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 106,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 103,\n        columnNumber: 3\n    }, _this);\n};\n_s(Nav, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c2 = Nav;\nvar NavMini = function(param) {\n    var current = param.current;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"multinav\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            variant: \"outline-danger\",\n            id: \"flagButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n            },\n            children: \"flag\"\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 114,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 113,\n        columnNumber: 3\n    }, _this);\n};\n_c3 = NavMini;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NavTogl\");\n$RefreshReg$(_c1, \"NavButton\");\n$RefreshReg$(_c2, \"Nav\");\n$RefreshReg$(_c3, \"NavMini\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3VCLE9BQU8sRUFBQyxnQkFBZ0I7WUFBQ1QsRUFBRSxFQUFDLFlBQVk7WUFBQ0MsSUFBSSxFQUFDLFFBQVE7WUFBQ0MsU0FBUyxFQUFDLFFBQVE7WUFBQ0MsT0FBTyxFQUFFLFdBQU07Z0JBQy9GbEIsZ0RBQVMsQ0FBQyw4QkFBOEIsRUFBRTtvQkFDMUNLLFNBQVMsRUFBRU0sT0FBTztpQkFDbEIsQ0FBQyxDQUFDO2FBQ0g7c0JBQUUsTUFFSDs7Ozs7aUJBQVM7Ozs7O2FBQ0osQ0FDTjtDQUNEO0FBWllpQyxNQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/ODNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IFJlYWRlclByb3BzIH0gZnJvbSAnLi4vcGFnZXMvcy9bc3RhdGVtZW50SURdJ1xuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuL1N0YXRlbWVudCdcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbidcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcidcbmltcG9ydCBTdGFjayBmcm9tICdyZWFjdC1ib290c3RyYXAvU3RhY2snXG5pbXBvcnQgeyBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCB0eXBlIE5hdkJ1dHRvblByb3BzID0ge1xuIGFjdGlvbjogJ25leHQnIHwgJ3ByZXYnIHwgJ2ZsYWcnIHwgJ3BhdXNlJztcblx0cmVhZDogUmVhZGVyUHJvcHNbXTtcbn1cblxuY29uc3QgTmF2VG9nbDogUmVhY3QuRkM8e2Zyb206IFJlYWRlclByb3BzfT4gPSAoeyBmcm9tIH0pID0+IHtcblx0Y29uc3QgY3VycmVudElEID0gZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXTtcblx0Y29uc3QgbmV4dElEID0gZnJvbS5uZXh0SUQ7XG5cdGNvbnN0IHByZXZJRCA9IGZyb20ucHJldklEO1xuXHRcbn1cblxuY29uc3QgTmF2QnV0dG9uOiBSZWFjdC5GQzx7ZnJvbTogUmVhZGVyUHJvcHM7IGFjdDogTmF2QnV0dG9uUHJvcHNbXCJhY3Rpb25cIl19PiA9ICh7ZnJvbSwgYWN0fSkgPT4ge1xuLy9cdGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgc3RhdGVtZW50SUQgYXMgJ2N1cnJlbnQnIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSk7IFxuXHRjb25zdCBjdXJyZW50ID0gZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXTtcbi8vXHRjb25zb2xlLmxvZyhcIm5leHQgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLm5leHRJRCk7XG5cdGNvbnN0IG5leHQgPSBmcm9tLm5leHRJRDtcbi8vXHRjb25zb2xlLmxvZyhcInByZXZpb3VzIHZhbHVlIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5wcmV2SUQpO1xuXHRjb25zdCBwcmV2ID0gZnJvbS5wcmV2SUQ7XG4vL1x0Y29uc29sZS5sb2coXCJyZWNlaXZlZCBhY3QgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhhY3QpO1xuXG4gaWYgKGFjdCA9PT0gJ25leHQnKSB7XG4gIHJldHVybiAoXG4gICA8QnV0dG9uIHNpemU9J2xnJyBpZD0nbmV4dEJ1dHRvbicgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgXHRheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IFxuXHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0bm93OiBub3csXG5cdFx0XHRcdFx0fSk7XG4gICAgIFJvdXRlci5wdXNoKCcvcy8nLCBgL3MvJHtuZXh0fWApfX0+XG4gICAgICB7YWN0fVxuICAgPC9CdXR0b24+XG4gICl9IGVsc2UgaWYgKGFjdCA9PT0gJ3ByZXYnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPEJ1dHRvbiBzaXplPSdsZycgaWQ9J3ByZXZCdXR0b24nIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgIGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xlYXZlLycsIHsgY3VycmVudElEOiBjdXJyZW50IH0pO1xuICAgICAgUm91dGVyLnB1c2goJy9zLycsIGAvcy8ke3ByZXZ9YCl9fT5cbiAgICAgICB7YWN0fVxuIFx0XHQ8L0J1dHRvbj5cbiBcdCl9IGVsc2UgaWYgKGFjdCA9PT0gJ2ZsYWcnKSB7XG4gICBcdHJldHVybiAoXG4gICAgICA8QnV0dG9uIHNpemU9J3NtJyBkaXNhYmxlZCB2YXJpYW50PVwiZGFuZ2VyXCIgaWQ9J2ZsYWdCdXR0b24nIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBcdFx0XHRcdCBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IFxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJRDogY3VycmVudCxcblx0XHRcdFx0XHRcdFx0XHRub3c6IG5vdyxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHR7YWN0fVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG4gXHQpfSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcbiAgIFx0IDxCdXR0b24gc2l6ZT0nc20nXG4gICAgIGlkPSdwYXVzZUJ1dHRvbicgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBcdFx0YXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBcblx0XHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0XHRub3c6IG5vdyxcblx0XHRcdFx0XHRcdH0pO319PlxuICAgXHQgICB7YWN0fVxuICBcdCAgPC9CdXR0b24+XG4gIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTmF2OiBSZWFjdC5GQzx7Y3VycmVudDogUmVhZGVyUHJvcHN9PiA9ICh7Y3VycmVudH0pID0+IHtcblxuXHRjb25zdCBbIGZsYWdnZWQsIHNldEZsYWdnZWQgXSA9IHVzZVN0YXRlKCcnKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBiZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFnUycpO1xuICBsZXQgZmxhZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpO1xuXHRcdGJnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNTM1NjVBJztcblx0XHRpZiAoZmxhZ3MgIT09IG51bGwpIHtcblx0XHRcdHNldEZsYWdnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKSk7XG5cdFx0XHRiZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzYxMEMwNCc7XG5cdFx0fTsgXG4gIGlmIChmbGFncyA9PT0gbnVsbCkge1xuXHRcdFx0ZmxhZ3MgPSAnJztcblx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZ0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gZmxhZygpIHtcbiAgXHQgaWYgKGZsYWdzLmluY2x1ZGVzKGN1cnJlbnQudG9TdHJpbmcoKSkgPT09IGZhbHNlKSB7XG4gIFx0ICBjb25zdCBjb21tZW50YXJ5ID0gcHJvbXB0KCdXaHkgZmxhZyB0aGlzPycsICcnKTtcbiAgXHQgIGZsYWdzICs9ICgnPGxpPicgKyBjdXJyZW50ICsgJzogJyArIGNvbW1lbnRhcnkgKyAnPC9saT4nKTtcblx0XHRcdFx0XHRyZXR1cm47XG4gXHQgIH07XG4gXHQgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmbGFnJywgZmxhZ3MpO1xuIFx0ICBzZXRGbGFnZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJykpO1xuXHRcdFx0XHRiZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzUzNTY1QSc7XG4gXHQgfSk7XG5cdFx0fVxuIH0pXG4gcmV0dXJuIChcbiAgPFN0YWNrIGdhcD17MX0gaWQ9J25hdic+XG4gICA8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J3ByZXYnfSAvPlxuXHRcdFx0PE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydwYXVzZSd9IC8+PE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydmbGFnJ30gLz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsnbmV4dCd9IC8+XG4gIDwvU3RhY2s+XG4gKVxufVxuXG5leHBvcnQgY29uc3QgTmF2TWluaTogUmVhY3QuRkM8e2N1cnJlbnQ6IG51bWJlcn0+ID0gKHtjdXJyZW50fSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtdWx0aW5hdic+XG5cdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIGlkPSdmbGFnQnV0dG9uJyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gIFx0XHQgYXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBcblx0XHRcdFx0XHRjdXJyZW50SUQ6IGN1cnJlbnQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fX0+XG5cdFx0XHRcdGZsYWdcblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSb3V0ZXIiLCJheGlvcyIsIkJ1dHRvbiIsIlN0YWNrIiwiTmF2VG9nbCIsImZyb20iLCJjdXJyZW50SUQiLCJzdGF0ZW1lbnQiLCJuZXh0SUQiLCJwcmV2SUQiLCJOYXZCdXR0b24iLCJhY3QiLCJjdXJyZW50IiwibmV4dCIsInByZXYiLCJzaXplIiwiaWQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm5vdyIsIkRhdGUiLCJwdXQiLCJwdXNoIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwiTmF2IiwiZmxhZ2dlZCIsInNldEZsYWdnZWQiLCJiZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmbGFncyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJmbGFnIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImNvbW1lbnRhcnkiLCJwcm9tcHQiLCJzZXRJdGVtIiwiZ2FwIiwiTmF2TWluaSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});