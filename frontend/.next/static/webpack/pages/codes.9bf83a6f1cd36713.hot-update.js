"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/codes",{

/***/ "./components/Remap.tsx":
/*!******************************!*\
  !*** ./components/Remap.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar Map = function(param) {\n    var glossary = param.glossary;\n    var _this1 = _this;\n    var bgopen = \" { background-color: \";\n    var bgclose = \"; }  \";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"sassmap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Map for use in Sass\"\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 3\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                            children: \"Reload the page to regenerate.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 3\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                        children: \"$codes: (\"\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 4\n                    }, _this),\n                    glossary === null || glossary === void 0 ? void 0 : glossary.map(function(code) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                            children: [\n                                '\"',\n                                code.shortCode,\n                                '\": ',\n                                code.colorCode,\n                                \", \"\n                            ]\n                        }, code.shortCode, true, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 28\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                        children: \");\"\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"details\", {\n                        open: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"summary\", {\n                                children: \"When using...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                children: [\n                                    \"Remember to trim the trailing space and comma off of your output before using it. When pasting into \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                                        children: \"markers.css\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 109\n                                    }, _this),\n                                    \", check that no data has been lost.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 4\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                lineNumber: 13,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: \"justcss\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Plain CSS to copy and paste\"\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 5\n                    }, _this),\n                    glossary === null || glossary === void 0 ? void 0 : glossary.map(function(code) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                            children: [\n                                \".\",\n                                code.shortCode,\n                                \",  \",\n                                bgopen,\n                                code.colorCode,\n                                bgclose\n                            ]\n                        }, code.shortCode, true, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 28\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n                lineNumber: 26,\n                columnNumber: 3\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Map;\nvar getServerSideProps = function() {\n    var _ref = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, glossary;\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"https://localhost:3001/gloss\");\n                case 2:\n                    res = _ctx.sent;\n                    console.log(\"here's await res clone text output:\");\n                    _ctx.t0 = console;\n                    _ctx.next = 7;\n                    return res.clone().text();\n                case 7:\n                    _ctx.t1 = _ctx.sent;\n                    _ctx.t0.log.call(_ctx.t0, _ctx.t1);\n                    _ctx.next = 11;\n                    return res.json();\n                case 11:\n                    glossary = _ctx.sent;\n                    console.log(\"here's the glossary output:\");\n                    console.log(glossary);\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            glossary: glossary\n                        }\n                    });\n                case 15:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getServerSideProps() {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3g/NGVlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IENvZGVMaXN0IH0gZnJvbSAnLi9HbG9zc2FyeSdcbmltcG9ydCB7IENvZGVQcm9wcyB9IGZyb20gJy4vQ29sb3JtYWtlcidcblxuY29uc3QgTWFwOiBSZWFjdC5GQzx7Z2xvc3Nhcnk6IENvZGVQcm9wc1tdfT4gPSAoeyBnbG9zc2FyeSB9KSA9PiB7XG4gIGNvbnN0IGJnb3BlbiA9ICcgeyBiYWNrZ3JvdW5kLWNvbG9yOiAnO1xuICBjb25zdCBiZ2Nsb3NlID0gJzsgfSAgJztcblxuIHJldHVybiAoXG4gIDw+XG4gIDxkaXYgaWQ9J3Nhc3NtYXAnPlxuICA8aDI+TWFwIGZvciB1c2UgaW4gU2FzczwvaDI+XG4gIDxwPjxpPlJlbG9hZCB0aGUgcGFnZSB0byByZWdlbmVyYXRlLjwvaT48L3A+XG4gICA8Y29kZT5cbiAgICAkY29kZXM6ICg8L2NvZGU+XG4gICAge2dsb3NzYXJ5Py5tYXAoY29kZSA9PiA8Y29kZSBrZXk9e2NvZGUuc2hvcnRDb2RlfT5cIntjb2RlLnNob3J0Q29kZX1cIjoge2NvZGUuY29sb3JDb2RlfSwgPC9jb2RlPil9XG4gICAgPGNvZGU+KTtcbiAgIDwvY29kZT5cbiAgIDxkZXRhaWxzIG9wZW4+XG4gICAgIDxzdW1tYXJ5PldoZW4gdXNpbmcuLi48L3N1bW1hcnk+XG4gICAgIDxpPlJlbWVtYmVyIHRvIHRyaW0gdGhlIHRyYWlsaW5nIHNwYWNlIGFuZCBjb21tYSBvZmYgb2YgeW91ciBvdXRwdXQgYmVmb3JlIHVzaW5nIGl0LiBXaGVuIHBhc3RpbmcgaW50byA8Y29kZT5tYXJrZXJzLmNzczwvY29kZT4sIGNoZWNrIHRoYXQgbm8gZGF0YSBoYXMgYmVlbiBsb3N0LjwvaT5cbiAgICA8L2RldGFpbHM+XG4gIDwvZGl2PlxuICA8ZGl2IGlkPSdqdXN0Y3NzJz5cbiAgICA8aDI+UGxhaW4gQ1NTIHRvIGNvcHkgYW5kIHBhc3RlPC9oMj5cbiAgICB7Z2xvc3Nhcnk/Lm1hcChjb2RlID0+IDxjb2RlIGtleT17Y29kZS5zaG9ydENvZGV9Pi57Y29kZS5zaG9ydENvZGV9LCAge2Jnb3Blbn17Y29kZS5jb2xvckNvZGV9e2JnY2xvc2V9PC9jb2RlPil9XG4gIDwvZGl2PlxuICA8Lz5cbiApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMS9nbG9zc2ApO1xuIGNvbnNvbGUubG9nKFwiaGVyZSdzIGF3YWl0IHJlcyBjbG9uZSB0ZXh0IG91dHB1dDpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHJlcy5jbG9uZSgpLnRleHQoKSk7XG4gY29uc3QgZ2xvc3NhcnkgPSBhd2FpdCByZXMuanNvbigpO1xuIGNvbnNvbGUubG9nKFwiaGVyZSdzIHRoZSBnbG9zc2FyeSBvdXRwdXQ6XCIpOyBjb25zb2xlLmxvZyhnbG9zc2FyeSk7XG4gcmV0dXJuIHtcbiAgcHJvcHM6XG4gICB7IGdsb3NzYXJ5IH1cbiB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcCAiXSwibmFtZXMiOlsiUmVhY3QiLCJNYXAiLCJnbG9zc2FyeSIsImJnb3BlbiIsImJnY2xvc2UiLCJkaXYiLCJpZCIsImgyIiwicCIsImkiLCJjb2RlIiwibWFwIiwic2hvcnRDb2RlIiwiY29sb3JDb2RlIiwiZGV0YWlscyIsIm9wZW4iLCJzdW1tYXJ5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwiY2xvbmUiLCJ0ZXh0IiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Remap.tsx\n");

/***/ })

});