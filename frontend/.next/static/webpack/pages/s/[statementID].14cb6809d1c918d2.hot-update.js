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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"NavMini\": function() { return /* binding */ NavMini; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Stack */ \"./node_modules/react-bootstrap/esm/Stack.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    //\tconsole.log(\"received statementID as 'current' is:\"); console.log(from.statement[\"statementID\"]); \n    var current = from.statement[\"statementID\"];\n    //\tconsole.log(\"next value is:\"); console.log(from.nextID);\n    var next = from.nextID;\n    //\tconsole.log(\"previous value is:\"); console.log(from.prevID);\n    var prev = from.prevID;\n    //\tconsole.log(\"received act value is:\"); console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            size: \"lg\",\n            id: \"nextButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 27,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            size: \"lg\",\n            id: \"prevButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 38,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            size: \"sm\",\n            disabled: true,\n            variant: \"danger\",\n            id: \"flagButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            size: \"sm\",\n            id: \"pauseButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 56,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), flagged = ref[0], setFlagged = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var bg = document.getElementById(\"flagS\");\n        var flags = localStorage.getItem(\"flag\");\n        bg.style.backgroundColor = \"#53565A\";\n        if (flags !== null) {\n            setFlagged(localStorage.getItem(\"flag\"));\n            bg.style.backgroundColor = \"#610C04\";\n        }\n        if (flags === null) {\n            flags = \"\";\n            document.getElementById(\"flagButton\").addEventListener(\"click\", function flag() {\n                if (flags.includes(current.toString()) === false) {\n                    var commentary = prompt(\"Why flag this?\", \"\");\n                    flags += \"<li>\" + current + \": \" + commentary + \"</li>\";\n                    return;\n                }\n                localStorage.setItem(\"flag\", flags);\n                setFlagged(localStorage.getItem(\"flag\"));\n                bg.style.backgroundColor = \"#53565A\";\n            });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        gap: 1,\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 97,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 98,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 98,\n                columnNumber: 46\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 99,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 96,\n        columnNumber: 3\n    }, _this);\n};\n_s(Nav, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c1 = Nav;\nvar NavMini = function(param) {\n    var current = param.current;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"multinav\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            variant: \"outline-danger\",\n            id: \"flagButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n            },\n            children: \"flag\"\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 107,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 106,\n        columnNumber: 3\n    }, _this);\n};\n_c2 = NavMini;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n$RefreshReg$(_c2, \"NavMini\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBUzs7Ozs7YUFDSixDQUNOO0NBQ0Q7QUFaWXFDLE1BQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD84M2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgUmVhZGVyUHJvcHMgfSBmcm9tICcuLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0nXG5pbXBvcnQgeyBTdGF0ZW1lbnRQcm9wcyB9IGZyb20gJy4vU3RhdGVtZW50J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJ1xuaW1wb3J0IFN0YWNrIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9TdGFjaydcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IHR5cGUgTmF2QnV0dG9uUHJvcHMgPSB7XG4gYWN0aW9uOiAnbmV4dCcgfCAncHJldicgfCAnZmxhZycgfCAncGF1c2UnO1xuXHRyZWFkOiBSZWFkZXJQcm9wc1tdO1xufVxuXG5jb25zdCBOYXZCdXR0b246IFJlYWN0LkZDPHtmcm9tOiBSZWFkZXJQcm9wczsgYWN0OiBOYXZCdXR0b25Qcm9wc1tcImFjdGlvblwiXX0+ID0gKHtmcm9tLCBhY3R9KSA9PiB7XG4vL1x0Y29uc29sZS5sb2coXCJyZWNlaXZlZCBzdGF0ZW1lbnRJRCBhcyAnY3VycmVudCcgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdKTsgXG5cdGNvbnN0IGN1cnJlbnQgPSBmcm9tLnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdO1xuLy9cdGNvbnNvbGUubG9nKFwibmV4dCB2YWx1ZSBpczpcIik7IGNvbnNvbGUubG9nKGZyb20ubmV4dElEKTtcblx0Y29uc3QgbmV4dCA9IGZyb20ubmV4dElEO1xuLy9cdGNvbnNvbGUubG9nKFwicHJldmlvdXMgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLnByZXZJRCk7XG5cdGNvbnN0IHByZXYgPSBmcm9tLnByZXZJRDtcbi8vXHRjb25zb2xlLmxvZyhcInJlY2VpdmVkIGFjdCB2YWx1ZSBpczpcIik7IGNvbnNvbGUubG9nKGFjdCk7XG5cbiBpZiAoYWN0ID09PSAnbmV4dCcpIHtcbiAgcmV0dXJuIChcbiAgIDxCdXR0b24gc2l6ZT0nbGcnIGlkPSduZXh0QnV0dG9uJyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBcdGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xlYXZlLycsIHsgXG5cdFx0XHRcdFx0XHRjdXJyZW50SUQ6IGN1cnJlbnQsXG5cdFx0XHRcdFx0XHRub3c6IG5vdyxcblx0XHRcdFx0XHR9KTtcbiAgICAgUm91dGVyLnB1c2goJy9zLycsIGAvcy8ke25leHR9YCl9fT5cbiAgICAgIHthY3R9XG4gICA8L0J1dHRvbj5cbiAgKX0gZWxzZSBpZiAoYWN0ID09PSAncHJldicpIHtcbiAgICByZXR1cm4gKFxuICAgICA8QnV0dG9uIHNpemU9J2xnJyBpZD0ncHJldkJ1dHRvbicgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgICAgYXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBjdXJyZW50SUQ6IGN1cnJlbnQgfSk7XG4gICAgICBSb3V0ZXIucHVzaCgnL3MvJywgYC9zLyR7cHJldn1gKX19PlxuICAgICAgIHthY3R9XG4gXHRcdDwvQnV0dG9uPlxuIFx0KX0gZWxzZSBpZiAoYWN0ID09PSAnZmxhZycpIHtcbiAgIFx0cmV0dXJuIChcbiAgICAgIDxCdXR0b24gc2l6ZT0nc20nIGRpc2FibGVkIHZhcmlhbnQ9XCJkYW5nZXJcIiBpZD0nZmxhZ0J1dHRvbicgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIFx0XHRcdFx0IGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xlYXZlLycsIHsgXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0XHRcdG5vdzogbm93LFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdHthY3R9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cbiBcdCl9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuICAgXHQgPEJ1dHRvbiBzaXplPSdzbSdcbiAgICAgaWQ9J3BhdXNlQnV0dG9uJyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIFx0XHRheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50SUQ6IGN1cnJlbnQsXG5cdFx0XHRcdFx0XHRcdG5vdzogbm93LFxuXHRcdFx0XHRcdFx0fSk7fX0+XG4gICBcdCAgIHthY3R9XG4gIFx0ICA8L0J1dHRvbj5cbiAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBOYXY6IFJlYWN0LkZDPHtjdXJyZW50OiBSZWFkZXJQcm9wc30+ID0gKHtjdXJyZW50fSkgPT4ge1xuXG5cdGNvbnN0IFsgZmxhZ2dlZCwgc2V0RmxhZ2dlZCBdID0gdXNlU3RhdGUoJycpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGJnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdTJyk7XG4gIGxldCBmbGFncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJyk7XG5cdFx0Ymcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM1MzU2NUEnO1xuXHRcdGlmIChmbGFncyAhPT0gbnVsbCkge1xuXHRcdFx0c2V0RmxhZ2dlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpKTtcblx0XHRcdGJnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjEwQzA0Jztcblx0XHR9OyBcbiAgaWYgKGZsYWdzID09PSBudWxsKSB7XG5cdFx0XHRmbGFncyA9ICcnO1xuXHQgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFnQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBmbGFnKCkge1xuICBcdCBpZiAoZmxhZ3MuaW5jbHVkZXMoY3VycmVudC50b1N0cmluZygpKSA9PT0gZmFsc2UpIHtcbiAgXHQgIGNvbnN0IGNvbW1lbnRhcnkgPSBwcm9tcHQoJ1doeSBmbGFnIHRoaXM/JywgJycpO1xuICBcdCAgZmxhZ3MgKz0gKCc8bGk+JyArIGN1cnJlbnQgKyAnOiAnICsgY29tbWVudGFyeSArICc8L2xpPicpO1xuXHRcdFx0XHRcdHJldHVybjtcbiBcdCAgfTtcbiBcdCAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZsYWcnLCBmbGFncyk7XG4gXHQgIHNldEZsYWdnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKSk7XG5cdFx0XHRcdGJnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNTM1NjVBJztcbiBcdCB9KTtcblx0XHR9XG4gfSlcbiByZXR1cm4gKFxuICA8U3RhY2sgZ2FwPXsxfSBpZD0nbmF2Jz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsncHJldid9IC8+XG5cdFx0XHQ8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J3BhdXNlJ30gLz48TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J2ZsYWcnfSAvPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eyduZXh0J30gLz5cbiAgPC9TdGFjaz5cbiApXG59XG5cbmV4cG9ydCBjb25zdCBOYXZNaW5pOiBSZWFjdC5GQzx7Y3VycmVudDogbnVtYmVyfT4gPSAoe2N1cnJlbnR9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J211bHRpbmF2Jz5cblx0XHRcdDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgaWQ9J2ZsYWdCdXR0b24nIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgXHRcdCBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IFxuXHRcdFx0XHRcdGN1cnJlbnRJRDogY3VycmVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9fT5cblx0XHRcdFx0ZmxhZ1xuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9kaXY+XG5cdClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsImF4aW9zIiwiQnV0dG9uIiwiU3RhY2siLCJOYXZCdXR0b24iLCJmcm9tIiwiYWN0IiwiY3VycmVudCIsInN0YXRlbWVudCIsIm5leHQiLCJuZXh0SUQiLCJwcmV2IiwicHJldklEIiwic2l6ZSIsImlkIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJub3ciLCJEYXRlIiwicHV0IiwiY3VycmVudElEIiwicHVzaCIsImRpc2FibGVkIiwidmFyaWFudCIsIk5hdiIsImZsYWdnZWQiLCJzZXRGbGFnZ2VkIiwiYmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmxhZ3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZmxhZyIsImluY2x1ZGVzIiwidG9TdHJpbmciLCJjb21tZW50YXJ5IiwicHJvbXB0Iiwic2V0SXRlbSIsImdhcCIsIk5hdk1pbmkiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});