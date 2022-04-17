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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar Map = function(param) {\n    var glossary = param.glossary;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n            children: [\n                \"$codes: (\",\n                glossary === null || glossary === void 0 ? void 0 : glossary.map(function(code) {\n                    return '\"'.concat(code.shortCode, '\": ').concat(code.color);\n                }),\n                \");\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n            lineNumber: 10,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Remap.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, _this);\n};\n_c = Map;\n//TODO: Figuring out how best to let this update more than once without redirecting on the page \nvar getServerSideProps = function() {\n    var _ref = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, glossary;\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"https://localhost:3001/gloss\");\n                case 2:\n                    res = _ctx.sent;\n                    console.log(\"here's await res clone text output:\");\n                    _ctx.t0 = console;\n                    _ctx.next = 7;\n                    return res.clone().text();\n                case 7:\n                    _ctx.t1 = _ctx.sent;\n                    _ctx.t0.log.call(_ctx.t0, _ctx.t1);\n                    _ctx.next = 11;\n                    return res.json();\n                case 11:\n                    glossary = _ctx.sent;\n                    console.log(\"here's the glossary output:\");\n                    console.log(glossary);\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            glossary: glossary\n                        }\n                    });\n                case 15:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getServerSideProps() {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlbWFwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBTXpCLElBQU1DLEdBQUcsR0FBc0MsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTtJQUN6RCxxQkFDQyw4REFBQ0MsS0FBRztrQkFDSCw0RUFBQ0MsTUFBSTs7Z0JBQUMsV0FFTDtnQkFBQ0YsUUFBUSxhQUFSQSxRQUFRLFdBQUssR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxRQUFRLENBQUVHLEdBQUcsQ0FBQ0QsU0FBQUEsSUFBSTsyQkFBSSxHQUFFLENBQXNCQSxNQUFVLENBQTlCQSxJQUFJLENBQUNFLFNBQVMsRUFBQyxLQUFHLENBQWEsUUFBWEYsSUFBSSxDQUFDRyxLQUFLLENBQUU7aUJBQUEsQ0FBRztnQkFBQyxJQUVoRTs7Ozs7O2lCQUFPOzs7OzthQUNGLENBQ047Q0FDRDtBQVZLTixLQUFBQSxHQUFHO0FBV1QsZ0dBQWdHO0FBRXpGLElBQU1PLGtCQUFrQjtlQUF1QixtTUFBWTtZQUMzREMsR0FBRyxFQUVIUCxRQUFROzs7OzsyQkFGSVEsS0FBSyxDQUFFLDhCQUE0QixDQUFFOztvQkFBakRELEdBQUcsWUFBOEM7b0JBQ3ZERSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDOzhCQUFDRCxPQUFPOzsyQkFBV0YsR0FBRyxDQUFDSSxLQUFLLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFOzs7b0JBQXBDSCxRQUFRQyxHQUFHLHVCQUEwQjs7MkJBQ2xFSCxHQUFHLENBQUNNLElBQUksRUFBRTs7b0JBQTNCYixRQUFRLFlBQW1CO29CQUNqQ1MsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztvQkFBQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFFBQVEsQ0FBQyxDQUFDO2lEQUMzRDt3QkFDTmMsS0FBSyxFQUNKOzRCQUFFZCxRQUFRLEVBQVJBLFFBQVE7eUJBQUU7cUJBQ2I7Ozs7OztLQUNEO29CQVRZTSxrQkFBa0I7OztHQVM5QjtBQUVELCtEQUFlUCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVtYXAudHN4PzRlZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBDb2RlTGlzdCB9IGZyb20gJy4vR2xvc3NhcnknXG5pbXBvcnQgeyBDb2RlUHJvcHMgfSBmcm9tICcuL0NvbG9ybWFrZXInXG5cbmNvbnN0IE1hcDogUmVhY3QuRkM8e2dsb3NzYXJ5OiBDb2RlUHJvcHNbXX0+ID0gKHsgZ2xvc3NhcnkgfSkgPT4ge1xuIHJldHVybiAoXG4gIDxkaXY+XG4gICA8Y29kZT5cbiAgICAkY29kZXM6IChcbiAgICB7Z2xvc3Nhcnk/Lm1hcChjb2RlID0+IGBcIiR7Y29kZS5zaG9ydENvZGV9XCI6ICR7Y29kZS5jb2xvcn1gLCApfVxuICAgICk7XG4gICA8L2NvZGU+XG4gIDwvZGl2PlxuIClcbn1cbi8vVE9ETzogRmlndXJpbmcgb3V0IGhvdyBiZXN0IHRvIGxldCB0aGlzIHVwZGF0ZSBtb3JlIHRoYW4gb25jZSB3aXRob3V0IHJlZGlyZWN0aW5nIG9uIHRoZSBwYWdlIFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbG9jYWxob3N0OjMwMDEvZ2xvc3NgKTtcbiBjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQ6XCIpOyBjb25zb2xlLmxvZyhhd2FpdCByZXMuY2xvbmUoKS50ZXh0KCkpO1xuIGNvbnN0IGdsb3NzYXJ5ID0gYXdhaXQgcmVzLmpzb24oKTtcbiBjb25zb2xlLmxvZyhcImhlcmUncyB0aGUgZ2xvc3Nhcnkgb3V0cHV0OlwiKTsgY29uc29sZS5sb2coZ2xvc3NhcnkpO1xuIHJldHVybiB7XG4gIHByb3BzOlxuICAgeyBnbG9zc2FyeSB9XG4gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXAgIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWFwIiwiZ2xvc3NhcnkiLCJkaXYiLCJjb2RlIiwibWFwIiwic2hvcnRDb2RlIiwiY29sb3IiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjbG9uZSIsInRleHQiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Remap.tsx\n");

/***/ })

});