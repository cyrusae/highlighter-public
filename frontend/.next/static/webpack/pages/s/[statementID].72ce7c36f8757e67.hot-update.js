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

/***/ "./components/Glossary.tsx":
/*!*********************************!*\
  !*** ./components/Glossary.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FootBook\": function() { return /* binding */ FootBook; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar FootBook = function(param) {\n    var glossary = param.glossary;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Boolean), /*#__PURE__*/ footer = ref[0], setFooter = ref[1];\n    var css = \"\";\n    for(var i = 0; i < glossary.length; i++){\n        var str = \"mark.\" + glossary[i].shortCode + \" { background-color: \" + glossary[i].colorCode + \"; } \";\n        css += str;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var flossary = document.getElementById(\"glossary\");\n        var glable = document.getElementById(\"glable\");\n        if (footer === false) {\n            flossary.style.height = \"5vh\";\n            flossary.style.overflowY = \"hidden\";\n            glable.style.height = \"0\";\n        } else {\n            flossary.style.height = \"50vh\";\n            flossary.style.overflowY = \"scroll\";\n            glable.style.height = \"45vh\";\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"glossary\",\n        className: \"feet\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"codebook\",\n                onClick: function() {\n                    if (footer === true) {\n                        setFooter(false);\n                    } else {\n                        setFooter(true);\n                    }\n                },\n                children: \"Codebook\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                id: \"glable\",\n                striped: true,\n                bordered: true,\n                hover: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"Code\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"Gloss\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                        children: glossary === null || glossary === void 0 ? void 0 : glossary.map(function(code) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n                                            className: code.shortCode,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                                                children: code.shortCode\n                                            }, void 0, false, {\n                                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 42\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 9\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 8\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n                                            className: code.shortCode,\n                                            children: code.codeName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 9\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 8\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                        children: code.codeGloss\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 8\n                                    }, _this1)\n                                ]\n                            }, code.shortCode, true, {\n                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 7\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, _this);\n};\n_s(FootBook, \"8kSsqqbjTorCVP0aMo7uC+O3Eds=\");\n_c = FootBook;\nvar Glossary = function(param) {\n    var glossary = param.glossary;\n    var _this2 = _this;\n    var css = \"\";\n    for(var i = 0; i < glossary.length; i++){\n        var str = \"mark.\" + glossary[i].shortCode + \" { background-color: \" + glossary[i].colorCode + \"; } \";\n        css += str;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"details\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n            [\n                \"d98a5bd557e88eec\",\n                [\n                    css\n                ]\n            ]\n        ]) + \" \" + \"glossary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"summary\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                    [\n                        \"d98a5bd557e88eec\",\n                        [\n                            css\n                        ]\n                    ]\n                ]),\n                children: \"Currently-existing codes:\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"definitions\",\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                    [\n                        \"d98a5bd557e88eec\",\n                        [\n                            css\n                        ]\n                    ]\n                ]),\n                children: glossary === null || glossary === void 0 ? void 0 : glossary.map(function(code) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                            [\n                                \"d98a5bd557e88eec\",\n                                [\n                                    css\n                                ]\n                            ]\n                        ]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                    [\n                                        \"d98a5bd557e88eec\",\n                                        [\n                                            css\n                                        ]\n                                    ]\n                                ]) + \" \" + (code.shortCode || \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"dfn\", {\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                            [\n                                                \"d98a5bd557e88eec\",\n                                                [\n                                                    css\n                                                ]\n                                            ]\n                                        ]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                                [\n                                                    \"d98a5bd557e88eec\",\n                                                    [\n                                                        css\n                                                    ]\n                                                ]\n                                            ]),\n                                            children: code.codeName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 44\n                                        }, _this2)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 39\n                                    }, _this2),\n                                    \" (\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"abbr\", {\n                                        title: code.codeName,\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                            [\n                                                \"d98a5bd557e88eec\",\n                                                [\n                                                    css\n                                                ]\n                                            ]\n                                        ]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                                [\n                                                    \"d98a5bd557e88eec\",\n                                                    [\n                                                        css\n                                                    ]\n                                                ]\n                                            ]),\n                                            children: code.shortCode\n                                        }, void 0, false, {\n                                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 102\n                                        }, _this2)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 74\n                                    }, _this2),\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 6\n                            }, _this2),\n                            \": \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                    [\n                                        \"d98a5bd557e88eec\",\n                                        [\n                                            css\n                                        ]\n                                    ]\n                                ]),\n                                children: code.codeGloss\n                            }, void 0, false, {\n                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 148\n                            }, _this2)\n                        ]\n                    }, code.shortCode, true, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 5\n                    }, _this2);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                lineNumber: 75,\n                columnNumber: 4\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"d98a5bd557e88eec\",\n                dynamic: [\n                    css\n                ],\n                children: 'mark.__jsx-style-dynamic-selector{font-family:\"Victor Mono\",\"Anonymous Pro\",\"Courier Prime\",monospace}'.concat(css)\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n        lineNumber: 73,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Glossary;\nvar getServerSideProps = function() {\n    var _ref = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, glossary;\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/gloss\");\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    glossary = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            glossary: glossary\n                        }\n                    });\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getServerSideProps() {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Glossary);\nvar _c, _c1;\n$RefreshReg$(_c, \"FootBook\");\n$RefreshReg$(_c1, \"Glossary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQVJBLFFBQVE7eUJBQUU7cUJBQ2I7Ozs7OztLQUNEO29CQVRZNEMsa0JBQWtCOzs7R0FTOUI7QUFFRCwrREFBZVAsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dsb3NzYXJ5LnRzeD8yZGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgQ29kZVByb3BzIH0gZnJvbSAnLi9Db2xvcm1ha2VyJ1xuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UYWJsZSdcblxuZXhwb3J0IHR5cGUgQ29kZUxpc3QgPSB7XG4gc2hvcnRDb2RlOiBzdHJpbmc7XG4gY29kZU5hbWU6IHN0cmluZyB8IG51bGw7XG4gY29kZUdsb3NzOiBzdHJpbmcgfCBudWxsO1xuIGNvbG9yQ29kZTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IEZvb3RCb29rOiBSZWFjdC5GQzx7Z2xvc3Nhcnk6IENvZGVQcm9wc1tdfT4gPSAoeyBnbG9zc2FyeSB9KSA9PiB7XG5cbiBjb25zdCBbIGZvb3Rlciwgc2V0Rm9vdGVyIF0gPSB1c2VTdGF0ZShCb29sZWFuKVxuICBsZXQgY3NzOiBzdHJpbmcgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9zc2FyeS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0ciA9ICdtYXJrLicgKyBnbG9zc2FyeVtpXS5zaG9ydENvZGUgKyAnIHsgYmFja2dyb3VuZC1jb2xvcjogJyArIGdsb3NzYXJ5W2ldLmNvbG9yQ29kZSArICc7IH0gJztcbiAgICBjc3MgKz0gc3RyO1xuICB9XG4gXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3QgZmxvc3NhcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2xvc3NhcnknKTtcbiAgY29uc3QgZ2xhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dsYWJsZScpO1xuICBpZiAoZm9vdGVyID09PSBmYWxzZSkge1xuICAgZmxvc3Nhcnkuc3R5bGUuaGVpZ2h0ID0gXCI1dmhcIjtcbiAgIGZsb3NzYXJ5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gICBnbGFibGUuc3R5bGUuaGVpZ2h0ID0gXCIwXCJcbiAgfSBlbHNlIHtcbiAgIGZsb3NzYXJ5LnN0eWxlLmhlaWdodCA9IFwiNTB2aFwiO1xuICAgZmxvc3Nhcnkuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgIGdsYWJsZS5zdHlsZS5oZWlnaHQgPSBcIjQ1dmhcIlxuICB9XG4gfSlcbiByZXR1cm4gKFxuICA8ZGl2IGlkPVwiZ2xvc3NhcnlcIiBjbGFzc05hbWU9XCJmZWV0XCI+XG4gICA8YnV0dG9uIGlkPSdjb2RlYm9vaycgb25DbGljaz17KCkgPT4geyBpZiAoZm9vdGVyID09PSB0cnVlKSB7IHNldEZvb3RlcihmYWxzZSkgfSBlbHNlIHsgc2V0Rm9vdGVyKHRydWUpIH07IH19PkNvZGVib29rPC9idXR0b24+XG4gICA8VGFibGUgaWQ9XCJnbGFibGVcIiBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyPlxuICAgIDx0aGVhZD5cbiAgICAgPHRyPlxuICAgICAgPHRoIHNjb3BlPSdjb2wnPkNvZGU8L3RoPlxuICAgICAgPHRoIHNjb3BlPSdjb2wnPk5hbWU8L3RoPlxuICAgICAgPHRoIHNjb3BlPSdjb2wnPkdsb3NzPC90aD5cbiAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAge2dsb3NzYXJ5Py5tYXAoY29kZSA9PiBcbiAgICAgIDx0ciBrZXk9e2NvZGUuc2hvcnRDb2RlfT5cbiAgICAgICA8dGQ+XG4gICAgICAgIDxtYXJrIGNsYXNzTmFtZT17Y29kZS5zaG9ydENvZGV9PjxiPntjb2RlLnNob3J0Q29kZX08L2I+PC9tYXJrPlxuICAgICAgIDwvdGQ+XG4gICAgICAgPHRkPlxuICAgICAgICA8bWFyayBjbGFzc05hbWU9e2NvZGUuc2hvcnRDb2RlfT57Y29kZS5jb2RlTmFtZX08L21hcms+XG4gICAgICAgPC90ZD5cbiAgICAgICA8dGQ+XG4gICAgICAgIHtjb2RlLmNvZGVHbG9zc31cbiAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgKX1cbiAgICA8L3Rib2R5PlxuICAgPC9UYWJsZT5cbiAgPC9kaXY+XG4gKVxufVxuXG5jb25zdCBHbG9zc2FyeTogUmVhY3QuRkM8e2dsb3NzYXJ5OiBDb2RlUHJvcHNbXX0+ID0gKHsgZ2xvc3NhcnkgfSkgPT4ge1xuICBsZXQgY3NzOiBzdHJpbmcgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9zc2FyeS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0ciA9ICdtYXJrLicgKyBnbG9zc2FyeVtpXS5zaG9ydENvZGUgKyAnIHsgYmFja2dyb3VuZC1jb2xvcjogJyArIGdsb3NzYXJ5W2ldLmNvbG9yQ29kZSArICc7IH0gJztcbiAgICBjc3MgKz0gc3RyO1xuICB9XG4gcmV0dXJuIChcbiAgPGRldGFpbHMgY2xhc3NOYW1lPSAnZ2xvc3NhcnknPlxuICAgPHN1bW1hcnk+Q3VycmVudGx5LWV4aXN0aW5nIGNvZGVzOjwvc3VtbWFyeT5cbiAgIDxkaXYgaWQ9J2RlZmluaXRpb25zJz5cbiAgICB7Z2xvc3Nhcnk/Lm1hcChjb2RlID0+IChcbiAgICA8cCBrZXk9e2NvZGUuc2hvcnRDb2RlfT5cbiAgICAgPG1hcmsgY2xhc3NOYW1lPXtjb2RlLnNob3J0Q29kZX0+PGRmbj48Yj57Y29kZS5jb2RlTmFtZX08L2I+PC9kZm4+ICg8YWJiciB0aXRsZT17Y29kZS5jb2RlTmFtZX0+PGNvZGU+e2NvZGUuc2hvcnRDb2RlfTwvY29kZT48L2FiYnI+KTwvbWFyaz46IDxpPntjb2RlLmNvZGVHbG9zc308L2k+XG4gICAgPC9wPlxuICAgKSl9XG4gICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD5cbiAgICB7YG1hcmsge1xuICAgICAgIGZvbnQtZmFtaWx5OiBcIlZpY3RvciBNb25vXCIsIFwiQW5vbnltb3VzIFByb1wiLCBcIkNvdXJpZXIgUHJpbWVcIiwgbW9ub3NwYWNlO1xuICAgICAgfVxuICAgICAke2Nzc31gfVxuICA8L3N0eWxlPlxuICA8L2RldGFpbHM+XG4gKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9nbG9zc2ApO1xuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0OlwiKTsgY29uc29sZS5sb2coYXdhaXQgcmVzLmNsb25lKCkudGV4dCgpKTtcbiBjb25zdCBnbG9zc2FyeSA9IGF3YWl0IHJlcy5qc29uKCk7XG4vLyBjb25zb2xlLmxvZyhcImhlcmUncyB0aGUgZ2xvc3Nhcnkgb3V0cHV0OlwiKTsgY29uc29sZS5sb2coZ2xvc3NhcnkpO1xuIHJldHVybiB7XG4gIHByb3BzOlxuICAgeyBnbG9zc2FyeSB9XG4gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9zc2FyeSAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhYmxlIiwiRm9vdEJvb2siLCJnbG9zc2FyeSIsIkJvb2xlYW4iLCJmb290ZXIiLCJzZXRGb290ZXIiLCJjc3MiLCJpIiwibGVuZ3RoIiwic3RyIiwic2hvcnRDb2RlIiwiY29sb3JDb2RlIiwiZmxvc3NhcnkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2xhYmxlIiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHJpcGVkIiwiYm9yZGVyZWQiLCJob3ZlciIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJtYXAiLCJjb2RlIiwidGQiLCJtYXJrIiwiYiIsImNvZGVOYW1lIiwiY29kZUdsb3NzIiwiR2xvc3NhcnkiLCJkZXRhaWxzIiwic3VtbWFyeSIsInAiLCJkZm4iLCJhYmJyIiwidGl0bGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Glossary.tsx\n");

/***/ })

});