"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FlagTracker.tsx":
/*!************************************!*\
  !*** ./components/FlagTracker.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FlagBar\": function() { return /* binding */ FlagBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nvar FlagBar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), show = ref[0], setShow = ref[1];\n    var handleClose = function() {\n        return setShow(false);\n    };\n    var handleOpen = function() {\n        return setShow(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"flagS\",\n                onClick: handleOpen,\n                children: \"\\u2691\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Offcanvas, {\n                show: show,\n                onHide: handleClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Offcanvas.Header, {\n                        closeButton: true,\n                        children: \"This session\"\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Offcanvas.Body, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Put flagtracker here.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(FlagBar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = FlagBar;\nvar Flags = function(param) {\n    var current = param.current;\n    _s1();\n    // console.log(current);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var bar = document.getElementById(\"flagbar\");\n        if (localStorage.getItem(\"flag\") === null) {\n            bar.style.backgroundColor = \"#53565A\";\n        } else {\n            bar.style.backgroundColor = \"#610C04\";\n        }\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), flagged = ref[0], setFlagged = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var flags = localStorage.getItem(\"flag\");\n        if (flags !== null) setFlagged(localStorage.getItem(\"flag\"));\n        if (flags === null) flags = \"\";\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flagtracker\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    children: \"Statements flagged this session:\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 6\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"flags\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        dangerouslySetInnerHTML: {\n                            __html: flagged\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 6\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    size: \"sm\",\n                    type: \"button\",\n                    onClick: function() {\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:3001/saveflags\", {\n                            content: flagged,\n                            type: \"flags\"\n                        });\n                    },\n                    children: \"Save flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 6\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    size: \"sm\",\n                    type: \"button\",\n                    onClick: function() {\n                        return navigator.clipboard.writeText(flagged);\n                    },\n                    children: \"Copy flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 6\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    size: \"sm\",\n                    type: \"button\",\n                    onClick: function() {\n                        localStorage.clear();\n                        setFlagged(\"\");\n                    },\n                    children: \"Clear flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 6\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n        lineNumber: 44,\n        columnNumber: 4\n    }, _this);\n};\n_s1(Flags, \"BeYfrJf5GpG0M6qXunlriH4W0Lo=\");\n_c1 = Flags;\nvar FlagTracker = function(param) {\n    var current = param.current;\n    _s2();\n    // console.log(current);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), flagged = ref[0], setFlagged = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var flags = localStorage.getItem(\"flag\");\n        if (flags !== null) setFlagged(localStorage.getItem(\"flag\"));\n        if (flags === null) flags = \"\";\n        document.getElementById(\"flagButton\").addEventListener(\"click\", function flag() {\n            if (flags.includes(current.toString()) === false) {\n                var commentary = prompt(\"Why flag this?\", \"\");\n                flags += \"<li>\" + current + \": \" + commentary + \"</li>\";\n            }\n            localStorage.setItem(\"flag\", flags);\n            setFlagged(localStorage.getItem(\"flag\"));\n        });\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var bar = document.getElementById(\"flagbar\");\n        if (localStorage.getItem(\"flag\") === null) {\n            bar.style.backgroundColor = \"#53565A\";\n        } else {\n            bar.style.backgroundColor = \"#610C04\";\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flagtracker\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    children: \"Statements flagged this session:\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"flags\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        dangerouslySetInnerHTML: {\n                            __html: flagged\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    size: \"sm\",\n                    type: \"button\",\n                    onClick: function() {\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:3001/saveflags\", {\n                            content: flagged,\n                            type: \"flags\"\n                        });\n                    },\n                    children: \"Save flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    size: \"sm\",\n                    type: \"button\",\n                    onClick: function() {\n                        return navigator.clipboard.writeText(flagged);\n                    },\n                    children: \"Copy flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    size: \"sm\",\n                    type: \"button\",\n                    onClick: function() {\n                        localStorage.clear();\n                        setFlagged(\"\");\n                    },\n                    children: \"Clear flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n            lineNumber: 96,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n        lineNumber: 95,\n        columnNumber: 3\n    }, _this);\n};\n_s2(FlagTracker, \"DnDRc95DuJngCDdEyM2Q+/qD68w=\");\n_c2 = FlagTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlagTracker);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FlagBar\");\n$RefreshReg$(_c1, \"Flags\");\n$RefreshReg$(_c2, \"FlagTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7NEJBQzVGd0MsT0FBTyxFQUFFWixPQUFPOzRCQUNoQlUsSUFBSSxFQUFFLE9BQU87eUJBQ2IsQ0FBQztxQkFBQTs4QkFBRSxZQUVKOzs7Ozt5QkFBUzs4QkFDVCw4REFBQ2pDLG1EQUFNO29CQUFDZ0MsSUFBSSxFQUFDLElBQUk7b0JBQUNDLElBQUksRUFBQyxRQUFRO29CQUFDekIsT0FBTyxFQUFFOytCQUFNNEIsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ2YsT0FBTyxDQUFDO3FCQUFBOzhCQUFFLFlBRXZGOzs7Ozt5QkFBUzs4QkFDVCw4REFBQ3ZCLG1EQUFNO29CQUFDZ0MsSUFBSSxFQUFDLElBQUk7b0JBQUNDLElBQUksRUFBQyxRQUFRO29CQUFDekIsT0FBTyxFQUFFLFdBQU07d0JBQUNXLFlBQVksQ0FBQ29CLEtBQUssRUFBRSxDQUFDO3dCQUFDZixVQUFVLENBQUMsRUFBRSxDQUFDO3FCQUFDOzhCQUFFLGFBRXZGOzs7Ozt5QkFBUzs7Ozs7O2lCQUNBOzs7OzthQUNMLENBQ047Q0FDRDtJQWpES2dCLFdBQVc7QUFBWEEsTUFBQUEsV0FBVztBQW1EakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGFnVHJhY2tlci50c3g/NWIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbCwgT2ZmY2FudmFzLCBCdXR0b24sIFN0YWNrIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgY29uc3QgRmxhZ0JhcjogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3coZmFsc2UpO1xuIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRTaG93KHRydWUpO1xuIHJldHVybiAoXG4gIDw+XG4gICA8ZGl2IGlkPSdmbGFnUycgb25DbGljaz17aGFuZGxlT3Blbn0+4pqRPC9kaXY+XG4gICA8T2ZmY2FudmFzIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxuICAgIDxPZmZjYW52YXMuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICBUaGlzIHNlc3Npb25cbiAgICA8L09mZmNhbnZhcy5IZWFkZXI+XG4gICAgPE9mZmNhbnZhcy5Cb2R5PlxuICAgICA8cD5QdXQgZmxhZ3RyYWNrZXIgaGVyZS48L3A+XG4gICAgPC9PZmZjYW52YXMuQm9keT5cbiAgIDwvT2ZmY2FudmFzPlxuICA8Lz5cbiApXG59XG5cbmNvbnN0IEZsYWdzOiBSZWFjdC5GQzx7Y3VycmVudDogbnVtYmVyfT4gPSAoe2N1cnJlbnR9KSA9PiB7XG4gLy8gY29uc29sZS5sb2coY3VycmVudCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFnYmFyJylcbiAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpID09PSBudWxsKSB7XG4gICAgYmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzUzNTY1QVwiO1xuICAgfSBlbHNlIHtcbiAgICBiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNjEwQzA0XCJcbiAgIH1cbiAgfSlcblxuICBjb25zdCBbIGZsYWdnZWQsIHNldEZsYWdnZWQgXSA9IHVzZVN0YXRlKCcnKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIGxldCBmbGFncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJyk7XG4gICBpZiAoZmxhZ3MgIT09IG51bGwpIHNldEZsYWdnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKSk7IFxuICAgaWYgKGZsYWdzID09PSBudWxsKSBmbGFncyA9ICcnO1xuICB9KVxuIFxuICByZXR1cm4gKFxuICAgPGRpdiBjbGFzc05hbWU9J2ZsYWd0cmFja2VyJz5cbiAgICA8ZGV0YWlscz5cbiAgICAgPHN1bW1hcnk+U3RhdGVtZW50cyBmbGFnZ2VkIHRoaXMgc2Vzc2lvbjo8L3N1bW1hcnk+XG4gICAgIDxkaXYgaWQ9J2ZsYWdzJz5cbiAgICAgIDx1bCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZmxhZ2dlZH19PjwvdWw+XG4gICAgIDwvZGl2PlxuICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3NhdmVmbGFncycsIHtcbiAgICAgIGNvbnRlbnQ6IGZsYWdnZWQsXG4gICAgICB0eXBlOiAnZmxhZ3MnXG4gICAgIH0pfT5cbiAgICAgIFNhdmUgZmxhZ3NcbiAgICAgPC9CdXR0b24+XG4gICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChmbGFnZ2VkKX0+XG4gICAgICBDb3B5IGZsYWdzXG4gICAgIDwvQnV0dG9uPlxuICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpOyBzZXRGbGFnZ2VkKCcnKX19PlxuICAgICAgQ2xlYXIgZmxhZ3NcbiAgICAgPC9CdXR0b24+XG4gICAgPC9kZXRhaWxzPlxuICAgPC9kaXY+XG4gIClcbiB9XG5cbmNvbnN0IEZsYWdUcmFja2VyOiBSZWFjdC5GQzx7Y3VycmVudDogbnVtYmVyfT4gPSAoe2N1cnJlbnR9KSA9PiB7XG4vLyBjb25zb2xlLmxvZyhjdXJyZW50KTtcbiBjb25zdCBbIGZsYWdnZWQsIHNldEZsYWdnZWQgXSA9IHVzZVN0YXRlKCcnKVxuXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgbGV0IGZsYWdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKTtcbiAgaWYgKGZsYWdzICE9PSBudWxsKSBzZXRGbGFnZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJykpOyBcbiAgaWYgKGZsYWdzID09PSBudWxsKSBmbGFncyA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZ0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gZmxhZygpIHtcbiAgIGlmIChmbGFncy5pbmNsdWRlcyhjdXJyZW50LnRvU3RyaW5nKCkpID09PSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbW1lbnRhcnkgPSBwcm9tcHQoJ1doeSBmbGFnIHRoaXM/JywgJycpO1xuICAgIGZsYWdzICs9ICgnPGxpPicgKyBjdXJyZW50ICsgJzogJyArIGNvbW1lbnRhcnkgKyAnPC9saT4nKTtcbiAgIH07XG4gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxhZycsIGZsYWdzKTtcbiAgIHNldEZsYWdnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKSk7XG4gIH0pO1xuIH0pXG5cbiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZ2JhcicpXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpID09PSBudWxsKSB7XG4gICBiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNTM1NjVBXCI7XG4gIH0gZWxzZSB7XG4gICBiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNjEwQzA0XCJcbiAgfVxuIH0pXG5cbiByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nZmxhZ3RyYWNrZXInPlxuICAgPGRldGFpbHM+XG4gICAgPHN1bW1hcnk+U3RhdGVtZW50cyBmbGFnZ2VkIHRoaXMgc2Vzc2lvbjo8L3N1bW1hcnk+XG4gICAgPGRpdiBpZD0nZmxhZ3MnPlxuICAgICA8dWwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGZsYWdnZWR9fT48L3VsPlxuICAgIDwvZGl2PlxuICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvc2F2ZWZsYWdzJywge1xuICAgICBjb250ZW50OiBmbGFnZ2VkLFxuICAgICB0eXBlOiAnZmxhZ3MnXG4gICAgfSl9PlxuICAgICBTYXZlIGZsYWdzXG4gICAgPC9CdXR0b24+XG4gICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGZsYWdnZWQpfT5cbiAgICAgQ29weSBmbGFnc1xuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7bG9jYWxTdG9yYWdlLmNsZWFyKCk7IHNldEZsYWdnZWQoJycpfX0+XG4gICAgIENsZWFyIGZsYWdzXG4gICAgPC9CdXR0b24+XG4gICA8L2RldGFpbHM+XG4gIDwvZGl2PlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxhZ1RyYWNrZXIgIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk9mZmNhbnZhcyIsIkJ1dHRvbiIsIkZsYWdCYXIiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsImRpdiIsImlkIiwib25DbGljayIsIm9uSGlkZSIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiQm9keSIsInAiLCJGbGFncyIsImN1cnJlbnQiLCJiYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmxhZ2dlZCIsInNldEZsYWdnZWQiLCJmbGFncyIsImNsYXNzTmFtZSIsImRldGFpbHMiLCJzdW1tYXJ5IiwidWwiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInNpemUiLCJ0eXBlIiwicG9zdCIsImNvbnRlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjbGVhciIsIkZsYWdUcmFja2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZsYWciLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiY29tbWVudGFyeSIsInByb21wdCIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FlagTracker.tsx\n");

/***/ })

});