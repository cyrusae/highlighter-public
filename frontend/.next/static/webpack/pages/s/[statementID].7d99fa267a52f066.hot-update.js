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

/***/ "./pages/s/[statementID].tsx":
/*!***********************************!*\
  !*** ./pages/s/[statementID].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nfunction update(statementID) {\n    return _update.apply(this, arguments);\n}\nfunction _update() {\n    _update = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(statementID) {\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/upd8/\".concat(statementID), {\n                        method: \"PUT\"\n                    });\n                case 2:\n                    _ctx.next = 4;\n                    return next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/upd8/\");\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _update.apply(this, arguments);\n}\nfunction encode(statementID, phrase, code) {\n    return _encode.apply(this, arguments);\n}\nfunction _encode() {\n    _encode = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(statementID, phrase, code) {\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/code/\");\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _encode.apply(this, arguments);\n}\nvar Statement = function(param) {\n    var statement = param.statement;\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var statementID = statement.statementID;\n    console.log(\"statementID attempts to log the current ID:\");\n    console.log(statementID);\n    var content = statement.content;\n    console.log(\"statementID attempts to log the statement content:\");\n    console.log(content);\n    var next = statement.nextID;\n    console.log(\"statementID attempts to log next ID\");\n    console.log(next);\n    return(//TODO: make a layout for display (also, controls)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"metadata\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"statement\",\n                id: \"statebox\",\n                dangerouslySetInnerHTML: {\n                    __html: content\n                }\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__.Nav, {\n                current: statement\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, _this));\n};\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTztBQUdpQjtTQUdsQ0csTUFBTSxDQUFDQyxXQUFtQjtXQUExQkQsT0FBTTs7U0FBTkEsT0FBTTtJQUFOQSxPQUFNLEdBQXJCLGlNQUFzQkMsV0FBbUIsRUFBaUI7Ozs7OzJCQUNuREMsS0FBSyxDQUFDLDZCQUE0QixDQUFjLE9BQVpELFdBQVcsQ0FBRSxFQUFFO3dCQUN4REUsTUFBTSxFQUFFLEtBQUs7cUJBQ2IsQ0FBQzs7OzJCQUNJTCx1REFBVyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0tBQzNCO1dBTGNFLE9BQU07O1NBT05LLE1BQU0sQ0FBQ0osV0FBbUIsRUFBRUssTUFBYyxFQUFFQyxJQUFZO1dBQXhERixPQUFNOztTQUFOQSxPQUFNO0lBQU5BLE9BQU0sR0FBckIsaU1BQXNCSixXQUFtQixFQUFFSyxNQUFjLEVBQUVDLElBQVksRUFBaUI7Ozs7OzJCQUNqRkwsS0FBSyxDQUFFLDZCQUEyQixDQUFFOzs7Ozs7S0FDMUM7V0FGY0csT0FBTTs7QUFJckIsSUFBTUcsU0FBUyxHQUEwQyxnQkFBaUI7UUFBZkMsU0FBUyxTQUFUQSxTQUFTO0lBQ25FLGdGQUFnRjtJQUNoRixJQUFJUixXQUFXLEdBQVdRLFNBQVMsQ0FBQ1IsV0FBVztJQUMvQ1MsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUFDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsV0FBVyxDQUFDLENBQUM7SUFDckYsSUFBSVcsT0FBTyxHQUFHSCxTQUFTLENBQUNHLE9BQU87SUFDL0JGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7SUFBQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hGLElBQUlDLElBQUksR0FBR0osU0FBUyxDQUFDSyxNQUFNO0lBQzNCSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQUNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQztJQUV0RSxPQUNDLGtEQUFrRDtrQkFDbEQsOERBQUNFLE1BQUk7OzBCQUNILDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTs7Ozs7cUJBQU87MEJBQ2hDLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVztnQkFBQ0MsRUFBRSxFQUFDLFVBQVU7Z0JBQUNDLHVCQUF1QixFQUFFO29CQUFDQyxNQUFNLEVBQUVSLE9BQU87aUJBQUM7Ozs7O3FCQUFHOzBCQUN0Riw4REFBQ2IsdURBQUc7Z0JBQUNzQixPQUFPLEVBQUVaLFNBQVM7Ozs7O3FCQUFJOzs7Ozs7YUFDdEIsRUFFUDtDQUNEO0FBbEJLRCxLQUFBQSxTQUFTOztBQW9CZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4PzgwNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBTdGF0ZW1lbnRQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdGVtZW50J1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ3N0cmVhbS9jb25zdW1lcnMnXG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZW1lbnRJRDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91cGQ4LyR7c3RhdGVtZW50SUR9YCwge1xuICBtZXRob2Q6ICdQVVQnXG4gfSlcbiBhd2FpdCBSb3V0ZXIucHVzaCgnL3VwZDgvJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5jb2RlKHN0YXRlbWVudElEOiBudW1iZXIsIHBocmFzZTogc3RyaW5nLCBjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2NvZGUvYClcbn1cblxuY29uc3QgU3RhdGVtZW50OiBSZWFjdC5GQzx7c3RhdGVtZW50OiBTdGF0ZW1lbnRQcm9wc30+ID0gKHtzdGF0ZW1lbnR9KSA9PiB7XG4gLy8gY29uc29sZS5sb2coXCJDb250ZW50cyBvZiAncmVzdCc6XCIpOyBjb25zb2xlLmxvZyhyZXN0KTsgLy90cm91Ymxlc2hvb3RpbmcgdG9vbFxuIGxldCBzdGF0ZW1lbnRJRDogbnVtYmVyID0gc3RhdGVtZW50LnN0YXRlbWVudElEO1xuIGNvbnNvbGUubG9nKCdzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIGN1cnJlbnQgSUQ6Jyk7IGNvbnNvbGUubG9nKHN0YXRlbWVudElEKTtcbiBsZXQgY29udGVudCA9IHN0YXRlbWVudC5jb250ZW50O1xuIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBzdGF0ZW1lbnQgY29udGVudDpcIik7IGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuIGxldCBuZXh0ID0gc3RhdGVtZW50Lm5leHRJRDtcbiBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyBuZXh0IElEXCIpOyBjb25zb2xlLmxvZyhuZXh0KTtcblxuIHJldHVybiAoXG4gIC8vVE9ETzogbWFrZSBhIGxheW91dCBmb3IgZGlzcGxheSAoYWxzbywgY29udHJvbHMpXG4gIDxtYWluPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZXRhZGF0YSc+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J3N0YXRlbWVudCcgaWQ9J3N0YXRlYm94JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudH19Lz5cbiAgICA8TmF2IGN1cnJlbnQ9e3N0YXRlbWVudH0gLz5cbiAgPC9tYWluPlxuICBcbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudFxuXG4vL1FVRVNUSU9OOiBXb3VsZCBpdCBiZSB0b28gY2hlZWt5IHRvIGludGVncmF0ZSB0aGUgY29udHJvbHMgaW50byB0aGlzIHBhZ2UgaW5zdGVhZCBvZiBhIGRpZmZlcmVudCBjb21wb25lbnQgYW5kIHVzZSB0aGF0IHRvIGVuY29kZSB0aGUgSUQgb24gdGhlIGNvbnRyb2wgZmlyaW5nP1xuLy9BY3R1YWxseSB0aGF0J3MgcHJvYmFibHkgdGhlIHJpZ2h0IHdheSB0byBkbyBpdFxuLy9udm0gaXQgY2FuIHJlY2VpdmUgcHJvcHMgYmV0dGVyIG9uIGl0cyBvd24gSSB0aGluaz8gVW5zdXJlLiBFeGFtcGxlIGF0IHAvIGRvZXNuJ3QgaGVscCBtdWNoLlxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4gIHtcbi8vICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvc3RhdGVtZW50LyR7Y29udGV4dC5wYXJhbXMuc3RhdGVtZW50SUR9YCkgXG4gIGNvbnNvbGUubG9nKFwiaGVyZSdzIGF3YWl0IHJlcyBjbG9uZSB0ZXh0IG91dHB1dDpcIik7XG4gY29uc29sZS5sb2coYXdhaXQgcmVzLmNsb25lKCkudGV4dCgpKSBcbiBjb25zdCBzdGF0ZW1lbnQgPSBhd2FpdCByZXMuanNvbigpXG4gY29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBzdGF0ZW1lbnQ6XCIpXG4gY29uc29sZS5sb2coc3RhdGVtZW50KVxuLy8gY2F0Y2ggKGUpIHtjb25zb2xlLmxvZyhlKX0gLy93aGVyZSBjYW4gdGhpcyBnbyB0byBub3QgYnJlYWsgdGhpbmdzP1xuICByZXR1cm4ge1xuICBwcm9wczogXG4gICB7IHN0YXRlbWVudCB9XG4gfTtcbn0gIFxuLy99Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiTmF2IiwidXBkYXRlIiwic3RhdGVtZW50SUQiLCJmZXRjaCIsIm1ldGhvZCIsInB1c2giLCJlbmNvZGUiLCJwaHJhc2UiLCJjb2RlIiwiU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJuZXh0IiwibmV4dElEIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});