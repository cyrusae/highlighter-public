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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FootBook\": function() { return /* binding */ FootBook; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar FootBook = function(param) {\n    var glossary = param.glossary;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Boolean), /*#__PURE__*/ footer = ref[0], setFooter = ref[1];\n    var css = \"\";\n    for(var i = 0; i < glossary.length; i++){\n        var str = \"mark.\" + glossary[i].shortCode + \" { background-color: \" + glossary[i].colorCode + \"; } \";\n        css += str;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var flossary = document.getElementById(\"glossary\");\n        var glable = document.getElementById(\"glable\");\n        if (footer === false) {\n            flossary.style.height = \"5vh\";\n            flossary.style.overflowY = \"hidden\";\n            glable.style.height = \"0\";\n        } else {\n            flossary.style.height = \"50vh\";\n            flossary.style.overflowY = \"scroll\";\n            glable.style.height = \"45vh\";\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"glossary\",\n        className: \"feet\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"codebook\",\n                onClick: function() {\n                    if (footer === true) {\n                        setFooter(false);\n                    } else {\n                        setFooter(true);\n                    }\n                    console.log(footer);\n                },\n                children: \"Codebook\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                id: \"glable\",\n                striped: true,\n                bordered: true,\n                hover: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"Code\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: \"Gloss\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                        children: glossary === null || glossary === void 0 ? void 0 : glossary.map(function(code) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n                                            className: code.shortCode,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                                                children: code.shortCode\n                                            }, void 0, false, {\n                                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 42\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 9\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 8\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n                                            className: code.shortCode,\n                                            children: code.codeName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 9\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 8\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                        children: code.codeGloss\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 8\n                                    }, _this1)\n                                ]\n                            }, code.shortCode, true, {\n                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 7\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, _this);\n};\n_s(FootBook, \"8kSsqqbjTorCVP0aMo7uC+O3Eds=\");\n_c = FootBook;\nvar Glossary = function(param) {\n    var glossary = param.glossary;\n    var _this2 = _this;\n    var css = \"\";\n    for(var i = 0; i < glossary.length; i++){\n        var str = \"mark.\" + glossary[i].shortCode + \" { background-color: \" + glossary[i].colorCode + \"; } \";\n        css += str;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"details\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n            [\n                \"d98a5bd557e88eec\",\n                [\n                    css\n                ]\n            ]\n        ]) + \" \" + \"glossary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"summary\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                    [\n                        \"d98a5bd557e88eec\",\n                        [\n                            css\n                        ]\n                    ]\n                ]),\n                children: \"Currently-existing codes:\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"definitions\",\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                    [\n                        \"d98a5bd557e88eec\",\n                        [\n                            css\n                        ]\n                    ]\n                ]),\n                children: glossary === null || glossary === void 0 ? void 0 : glossary.map(function(code) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                            [\n                                \"d98a5bd557e88eec\",\n                                [\n                                    css\n                                ]\n                            ]\n                        ]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                    [\n                                        \"d98a5bd557e88eec\",\n                                        [\n                                            css\n                                        ]\n                                    ]\n                                ]) + \" \" + (code.shortCode || \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"dfn\", {\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                            [\n                                                \"d98a5bd557e88eec\",\n                                                [\n                                                    css\n                                                ]\n                                            ]\n                                        ]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                                [\n                                                    \"d98a5bd557e88eec\",\n                                                    [\n                                                        css\n                                                    ]\n                                                ]\n                                            ]),\n                                            children: code.codeName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 44\n                                        }, _this2)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 39\n                                    }, _this2),\n                                    \" (\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"abbr\", {\n                                        title: code.codeName,\n                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                            [\n                                                \"d98a5bd557e88eec\",\n                                                [\n                                                    css\n                                                ]\n                                            ]\n                                        ]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                                [\n                                                    \"d98a5bd557e88eec\",\n                                                    [\n                                                        css\n                                                    ]\n                                                ]\n                                            ]),\n                                            children: code.shortCode\n                                        }, void 0, false, {\n                                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 102\n                                        }, _this2)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 74\n                                    }, _this2),\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 6\n                            }, _this2),\n                            \": \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default().dynamic([\n                                    [\n                                        \"d98a5bd557e88eec\",\n                                        [\n                                            css\n                                        ]\n                                    ]\n                                ]),\n                                children: code.codeGloss\n                            }, void 0, false, {\n                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 148\n                            }, _this2)\n                        ]\n                    }, code.shortCode, true, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 5\n                    }, _this2);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                lineNumber: 75,\n                columnNumber: 4\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"d98a5bd557e88eec\",\n                dynamic: [\n                    css\n                ],\n                children: 'mark.__jsx-style-dynamic-selector{font-family:\"Victor Mono\",\"Anonymous Pro\",\"Courier Prime\",monospace}'.concat(css)\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n        lineNumber: 73,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Glossary;\nvar getServerSideProps = function() {\n    var _ref = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, glossary;\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/gloss\");\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    glossary = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            glossary: glossary\n                        }\n                    });\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getServerSideProps() {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Glossary);\nvar _c, _c1;\n$RefreshReg$(_c, \"FootBook\");\n$RefreshReg$(_c1, \"Glossary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsWUFBbUI7aURBRTFCO3dCQUNOa0QsS0FBSyxFQUNKOzRCQUFFbEQsUUFBUSxFQUFSQSxRQUFRO3lCQUFFO3FCQUNiOzs7Ozs7S0FDRDtvQkFUWThDLGtCQUFrQjs7O0dBUzlCO0FBRUQsK0RBQWVQLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9zc2FyeS50c3g/MmRkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IENvZGVQcm9wcyB9IGZyb20gJy4vQ29sb3JtYWtlcidcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC1ib290c3RyYXAvVGFibGUnXG5cbmV4cG9ydCB0eXBlIENvZGVMaXN0ID0ge1xuIHNob3J0Q29kZTogc3RyaW5nO1xuIGNvZGVOYW1lOiBzdHJpbmcgfCBudWxsO1xuIGNvZGVHbG9zczogc3RyaW5nIHwgbnVsbDtcbiBjb2xvckNvZGU6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBGb290Qm9vazogUmVhY3QuRkM8e2dsb3NzYXJ5OiBDb2RlUHJvcHNbXX0+ID0gKHsgZ2xvc3NhcnkgfSkgPT4ge1xuXG4gY29uc3QgWyBmb290ZXIsIHNldEZvb3RlciBdID0gdXNlU3RhdGUoQm9vbGVhbilcbiAgbGV0IGNzczogc3RyaW5nID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2xvc3NhcnkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdHIgPSAnbWFyay4nICsgZ2xvc3NhcnlbaV0uc2hvcnRDb2RlICsgJyB7IGJhY2tncm91bmQtY29sb3I6ICcgKyBnbG9zc2FyeVtpXS5jb2xvckNvZGUgKyAnOyB9ICc7XG4gICAgY3NzICs9IHN0cjtcbiAgfVxuIFxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gIGNvbnN0IGZsb3NzYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dsb3NzYXJ5Jyk7XG4gIGNvbnN0IGdsYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnbGFibGUnKTtcbiAgaWYgKGZvb3RlciA9PT0gZmFsc2UpIHtcbiAgIGZsb3NzYXJ5LnN0eWxlLmhlaWdodCA9IFwiNXZoXCI7XG4gICBmbG9zc2FyeS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICAgZ2xhYmxlLnN0eWxlLmhlaWdodCA9IFwiMFwiXG4gIH0gZWxzZSB7XG4gICBmbG9zc2FyeS5zdHlsZS5oZWlnaHQgPSBcIjUwdmhcIjtcbiAgIGZsb3NzYXJ5LnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gICBnbGFibGUuc3R5bGUuaGVpZ2h0ID0gXCI0NXZoXCJcbiAgfVxuIH0pXG4gcmV0dXJuIChcbiAgPGRpdiBpZD1cImdsb3NzYXJ5XCIgY2xhc3NOYW1lPVwiZmVldFwiPlxuICAgPGJ1dHRvbiBpZD0nY29kZWJvb2snIG9uQ2xpY2s9eygpID0+IHsgaWYgKGZvb3RlciA9PT0gdHJ1ZSkgeyBzZXRGb290ZXIoZmFsc2UpfSBlbHNlIHsgc2V0Rm9vdGVyKHRydWUpfTsgY29uc29sZS5sb2coZm9vdGVyKSB9fT5Db2RlYm9vazwvYnV0dG9uPlxuICAgPFRhYmxlIGlkPVwiZ2xhYmxlXCIgc3RyaXBlZCBib3JkZXJlZCBob3Zlcj5cbiAgICA8dGhlYWQ+XG4gICAgIDx0cj5cbiAgICAgIDx0aCBzY29wZT0nY29sJz5Db2RlPC90aD5cbiAgICAgIDx0aCBzY29wZT0nY29sJz5OYW1lPC90aD5cbiAgICAgIDx0aCBzY29wZT0nY29sJz5HbG9zczwvdGg+XG4gICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgIHtnbG9zc2FyeT8ubWFwKGNvZGUgPT4gXG4gICAgICA8dHIga2V5PXtjb2RlLnNob3J0Q29kZX0+XG4gICAgICAgPHRkPlxuICAgICAgICA8bWFyayBjbGFzc05hbWU9e2NvZGUuc2hvcnRDb2RlfT48Yj57Y29kZS5zaG9ydENvZGV9PC9iPjwvbWFyaz5cbiAgICAgICA8L3RkPlxuICAgICAgIDx0ZD5cbiAgICAgICAgPG1hcmsgY2xhc3NOYW1lPXtjb2RlLnNob3J0Q29kZX0+e2NvZGUuY29kZU5hbWV9PC9tYXJrPlxuICAgICAgIDwvdGQ+XG4gICAgICAgPHRkPlxuICAgICAgICB7Y29kZS5jb2RlR2xvc3N9XG4gICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICl9XG4gICAgPC90Ym9keT5cbiAgIDwvVGFibGU+XG4gIDwvZGl2PlxuIClcbn1cblxuY29uc3QgR2xvc3Nhcnk6IFJlYWN0LkZDPHtnbG9zc2FyeTogQ29kZVByb3BzW119PiA9ICh7IGdsb3NzYXJ5IH0pID0+IHtcbiAgbGV0IGNzczogc3RyaW5nID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2xvc3NhcnkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdHIgPSAnbWFyay4nICsgZ2xvc3NhcnlbaV0uc2hvcnRDb2RlICsgJyB7IGJhY2tncm91bmQtY29sb3I6ICcgKyBnbG9zc2FyeVtpXS5jb2xvckNvZGUgKyAnOyB9ICc7XG4gICAgY3NzICs9IHN0cjtcbiAgfVxuIHJldHVybiAoXG4gIDxkZXRhaWxzIGNsYXNzTmFtZT0gJ2dsb3NzYXJ5Jz5cbiAgIDxzdW1tYXJ5PkN1cnJlbnRseS1leGlzdGluZyBjb2Rlczo8L3N1bW1hcnk+XG4gICA8ZGl2IGlkPSdkZWZpbml0aW9ucyc+XG4gICAge2dsb3NzYXJ5Py5tYXAoY29kZSA9PiAoXG4gICAgPHAga2V5PXtjb2RlLnNob3J0Q29kZX0+XG4gICAgIDxtYXJrIGNsYXNzTmFtZT17Y29kZS5zaG9ydENvZGV9PjxkZm4+PGI+e2NvZGUuY29kZU5hbWV9PC9iPjwvZGZuPiAoPGFiYnIgdGl0bGU9e2NvZGUuY29kZU5hbWV9Pjxjb2RlPntjb2RlLnNob3J0Q29kZX08L2NvZGU+PC9hYmJyPik8L21hcms+OiA8aT57Y29kZS5jb2RlR2xvc3N9PC9pPlxuICAgIDwvcD5cbiAgICkpfVxuICAgPC9kaXY+XG4gIDxzdHlsZSBqc3g+XG4gICAge2BtYXJrIHtcbiAgICAgICBmb250LWZhbWlseTogXCJWaWN0b3IgTW9ub1wiLCBcIkFub255bW91cyBQcm9cIiwgXCJDb3VyaWVyIFByaW1lXCIsIG1vbm9zcGFjZTtcbiAgICAgIH1cbiAgICAgJHtjc3N9YH1cbiAgPC9zdHlsZT5cbiAgPC9kZXRhaWxzPlxuIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2xvc3NgKTtcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSdzIGF3YWl0IHJlcyBjbG9uZSB0ZXh0IG91dHB1dDpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHJlcy5jbG9uZSgpLnRleHQoKSk7XG4gY29uc3QgZ2xvc3NhcnkgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgdGhlIGdsb3NzYXJ5IG91dHB1dDpcIik7IGNvbnNvbGUubG9nKGdsb3NzYXJ5KTtcbiByZXR1cm4ge1xuICBwcm9wczpcbiAgIHsgZ2xvc3NhcnkgfVxuIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvc3NhcnkgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWJsZSIsIkZvb3RCb29rIiwiZ2xvc3NhcnkiLCJCb29sZWFuIiwiZm9vdGVyIiwic2V0Rm9vdGVyIiwiY3NzIiwiaSIsImxlbmd0aCIsInN0ciIsInNob3J0Q29kZSIsImNvbG9yQ29kZSIsImZsb3NzYXJ5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdsYWJsZSIsInN0eWxlIiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsInN0cmlwZWQiLCJib3JkZXJlZCIsImhvdmVyIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsIm1hcCIsImNvZGUiLCJ0ZCIsIm1hcmsiLCJiIiwiY29kZU5hbWUiLCJjb2RlR2xvc3MiLCJHbG9zc2FyeSIsImRldGFpbHMiLCJzdW1tYXJ5IiwicCIsImRmbiIsImFiYnIiLCJ0aXRsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Glossary.tsx\n");

/***/ })

});