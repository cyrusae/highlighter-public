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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar Glossary = function(param) {\n    var glossary = param.glossary;\n    var _this1 = _this;\n    var css = \"\";\n    for(var i = 0; i < glossary.length; i++){\n        var str = \"mark.\" + glossary[i].shortCode + \" { background-color: \" + glossary[i].colorCode + \"; } \";\n        css += str;\n    }\n    // console.log(\"imported css:\"); console.log(css);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"details\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"summary\", {\n                children: \"Currently-existing codes:\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, _this),\n            glossary === null || glossary === void 0 ? void 0 : glossary.map(function(code) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n                            className: code.shortCode,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"dfn\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                                        children: code.codeName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 44\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 39\n                                }, _this1),\n                                \" (\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"abbr\", {\n                                    title: code.codeName,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                                        children: code.shortCode\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 102\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 74\n                                }, _this1),\n                                \")\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 6\n                        }, _this1),\n                        \": \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                            children: code.codeGloss\n                        }, void 0, false, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 148\n                        }, _this1)\n                    ]\n                }, code.shortCode, true, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Glossary.tsx\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, _this);\n};\n_c = Glossary;\nvar getServerSideProps = function() {\n    var _ref = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, glossary;\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/gloss\");\n                case 2:\n                    res = _ctx.sent;\n                    console.log(\"here's await res clone text output:\");\n                    _ctx.t0 = console;\n                    _ctx.next = 7;\n                    return res.clone().text();\n                case 7:\n                    _ctx.t1 = _ctx.sent;\n                    _ctx.t0.log.call(_ctx.t0, _ctx.t1);\n                    _ctx.next = 11;\n                    return res.json();\n                case 11:\n                    glossary = _ctx.sent;\n                    console.log(\"here's the glossary output:\");\n                    console.log(glossary);\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            glossary: glossary\n                        }\n                    });\n                case 15:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getServerSideProps() {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Glossary);\nvar _c;\n$RefreshReg$(_c, \"Glossary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dsb3NzYXJ5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBV3pCLElBQU1DLFFBQVEsR0FBc0MsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDN0QsSUFBSUMsR0FBRyxHQUFXLEVBQUU7SUFDcEIsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtRQUN4QyxJQUFNRSxHQUFHLEdBQUcsT0FBTyxHQUFHSixRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDRyxTQUFTLEdBQUcsdUJBQXVCLEdBQUdMLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNJLFNBQVMsR0FBRyxNQUFNO1FBQ3RHTCxHQUFHLElBQUlHLEdBQUcsQ0FBQztLQUNaO0lBQ0gsa0RBQWtEO0lBQ2pELHFCQUNDLDhEQUFDRyxTQUFPOzswQkFDUCw4REFBQ0MsU0FBTzswQkFBQywyQkFBeUI7Ozs7O3FCQUFVO1lBQzNDUixRQUFRLGFBQVJBLFFBQVEsV0FBSyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLFFBQVEsQ0FBRVMsR0FBRyxDQUFDQyxTQUFBQSxJQUFJO3FDQUNsQiw4REFBQ0MsR0FBQzs7c0NBQ0QsOERBQUNDLE1BQUk7NEJBQUNDLFNBQVMsRUFBRUgsSUFBSSxDQUFDTCxTQUFTOzs4Q0FBRSw4REFBQ1MsS0FBRzs4Q0FBQyw0RUFBQ0MsR0FBQztrREFBRUwsSUFBSSxDQUFDTSxRQUFROzs7Ozs4Q0FBSzs7Ozs7MENBQU07Z0NBQUEsSUFBRTs4Q0FBQSw4REFBQ0MsTUFBSTtvQ0FBQ0MsS0FBSyxFQUFFUixJQUFJLENBQUNNLFFBQVE7OENBQUUsNEVBQUNOLE1BQUk7a0RBQUVBLElBQUksQ0FBQ0wsU0FBUzs7Ozs7OENBQVE7Ozs7OzBDQUFPO2dDQUFBLEdBQUM7Ozs7OztrQ0FBTzt3QkFBQSxJQUFFO3NDQUFBLDhEQUFDSCxHQUFDO3NDQUFFUSxJQUFJLENBQUNTLFNBQVM7Ozs7O2tDQUFLOzttQkFEOUpULElBQUksQ0FBQ0wsU0FBUzs7OzswQkFFbEI7YUFDSixDQUFDOzs7Ozs7YUFDTyxDQUNWO0NBQ0Q7QUFqQktOLEtBQUFBLFFBQVE7QUFtQlAsSUFBTXFCLGtCQUFrQjtlQUF1QixtTUFBWTtZQUMzREMsR0FBRyxFQUVIckIsUUFBUTs7Ozs7MkJBRklzQixLQUFLLENBQUUsNkJBQTJCLENBQUU7O29CQUFoREQsR0FBRyxZQUE2QztvQkFDdERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7OEJBQUNELE9BQU87OzJCQUFXRixHQUFHLENBQUNJLEtBQUssRUFBRSxDQUFDQyxJQUFJLEVBQUU7OztvQkFBcENILFFBQVFDLEdBQUcsdUJBQTBCOzsyQkFDbEVILEdBQUcsQ0FBQ00sSUFBSSxFQUFFOztvQkFBM0IzQixRQUFRLFlBQW1CO29CQUNqQ3VCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7b0JBQUNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeEIsUUFBUSxDQUFDLENBQUM7aURBQzNEO3dCQUNONEIsS0FBSyxFQUNKOzRCQUFFNUIsUUFBUSxFQUFSQSxRQUFRO3lCQUFFO3FCQUNiOzs7Ozs7S0FDRDtvQkFUWW9CLGtCQUFrQjs7O0dBUzlCO0FBRUQsK0RBQWVyQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2xvc3NhcnkudHN4PzJkZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IENvZGVQcm9wcyB9IGZyb20gJy4vQ29sb3JtYWtlcidcblxuZXhwb3J0IHR5cGUgQ29kZUxpc3QgPSB7XG4gc2hvcnRDb2RlOiBzdHJpbmc7XG4gY29kZU5hbWU6IHN0cmluZyB8IG51bGw7XG4gY29kZUdsb3NzOiBzdHJpbmcgfCBudWxsO1xuIGNvbG9yQ29kZTogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgR2xvc3Nhcnk6IFJlYWN0LkZDPHtnbG9zc2FyeTogQ29kZVByb3BzW119PiA9ICh7IGdsb3NzYXJ5IH0pID0+IHtcbiAgbGV0IGNzczogc3RyaW5nID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2xvc3NhcnkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdHIgPSAnbWFyay4nICsgZ2xvc3NhcnlbaV0uc2hvcnRDb2RlICsgJyB7IGJhY2tncm91bmQtY29sb3I6ICcgKyBnbG9zc2FyeVtpXS5jb2xvckNvZGUgKyAnOyB9ICc7XG4gICAgY3NzICs9IHN0cjtcbiAgfVxuLy8gY29uc29sZS5sb2coXCJpbXBvcnRlZCBjc3M6XCIpOyBjb25zb2xlLmxvZyhjc3MpO1xuIHJldHVybiAoXG4gIDxkZXRhaWxzPlxuICAgPHN1bW1hcnk+Q3VycmVudGx5LWV4aXN0aW5nIGNvZGVzOjwvc3VtbWFyeT5cbiAgIHtnbG9zc2FyeT8ubWFwKGNvZGUgPT4gKFxuICAgIDxwIGtleT17Y29kZS5zaG9ydENvZGV9PlxuICAgICA8bWFyayBjbGFzc05hbWU9e2NvZGUuc2hvcnRDb2RlfT48ZGZuPjxiPntjb2RlLmNvZGVOYW1lfTwvYj48L2Rmbj4gKDxhYmJyIHRpdGxlPXtjb2RlLmNvZGVOYW1lfT48Y29kZT57Y29kZS5zaG9ydENvZGV9PC9jb2RlPjwvYWJicj4pPC9tYXJrPjogPGk+e2NvZGUuY29kZUdsb3NzfTwvaT5cbiAgICA8L3A+XG4gICApKX1cbiAgPC9kZXRhaWxzPlxuIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2xvc3NgKTtcbiBjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQ6XCIpOyBjb25zb2xlLmxvZyhhd2FpdCByZXMuY2xvbmUoKS50ZXh0KCkpO1xuIGNvbnN0IGdsb3NzYXJ5ID0gYXdhaXQgcmVzLmpzb24oKTtcbiBjb25zb2xlLmxvZyhcImhlcmUncyB0aGUgZ2xvc3Nhcnkgb3V0cHV0OlwiKTsgY29uc29sZS5sb2coZ2xvc3NhcnkpO1xuIHJldHVybiB7XG4gIHByb3BzOlxuICAgeyBnbG9zc2FyeSB9XG4gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9zc2FyeSAiXSwibmFtZXMiOlsiUmVhY3QiLCJHbG9zc2FyeSIsImdsb3NzYXJ5IiwiY3NzIiwiaSIsImxlbmd0aCIsInN0ciIsInNob3J0Q29kZSIsImNvbG9yQ29kZSIsImRldGFpbHMiLCJzdW1tYXJ5IiwibWFwIiwiY29kZSIsInAiLCJtYXJrIiwiY2xhc3NOYW1lIiwiZGZuIiwiYiIsImNvZGVOYW1lIiwiYWJiciIsInRpdGxlIiwiY29kZUdsb3NzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwiY2xvbmUiLCJ0ZXh0IiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Glossary.tsx\n");

/***/ })

});