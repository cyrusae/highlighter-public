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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nfunction update(statementID) {\n    return _update.apply(this, arguments);\n}\nfunction _update() {\n    _update = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(statementID) {\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/upd8/\".concat(statementID), {\n                        method: \"PUT\"\n                    });\n                case 2:\n                    _ctx.next = 4;\n                    return next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/upd8/\");\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _update.apply(this, arguments);\n}\nfunction encode(statementID, phrase, code) {\n    return _encode.apply(this, arguments);\n}\nfunction _encode() {\n    _encode = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(statementID, phrase, code) {\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/code/\");\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _encode.apply(this, arguments);\n}\nvar Statement = function(param) {\n    var statement = param.statement;\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var statementID = statement.statementID;\n    console.log(\"statementID attempts to log the current ID:\");\n    console.log(statementID);\n    var content = statement.content;\n    console.log(\"statementID attempts to log the statement content:\");\n    console.log(content);\n    var next = statement.nextID;\n    console.log(\"statementID attempts to log next ID\");\n    console.log(next);\n    return(//TODO: make a layout for display (also, controls)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"metadata\",\n                children: [\n                    \"ID: \",\n                    statementID\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"statement\",\n                id: \"statebox\",\n                dangerouslySetInnerHTML: {\n                    __html: content\n                }\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__.Nav, {\n                current: statement\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, _this));\n};\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTztBQUdpQjtTQUdsQ0csTUFBTSxDQUFDQyxXQUFtQjtXQUExQkQsT0FBTTs7U0FBTkEsT0FBTTtJQUFOQSxPQUFNLEdBQXJCLGlNQUFzQkMsV0FBbUIsRUFBaUI7Ozs7OzJCQUNuREMsS0FBSyxDQUFDLDZCQUE0QixDQUFjLE9BQVpELFdBQVcsQ0FBRSxFQUFFO3dCQUN4REUsTUFBTSxFQUFFLEtBQUs7cUJBQ2IsQ0FBQzs7OzJCQUNJTCx1REFBVyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0tBQzNCO1dBTGNFLE9BQU07O1NBT05LLE1BQU0sQ0FBQ0osV0FBbUIsRUFBRUssTUFBYyxFQUFFQyxJQUFZO1dBQXhERixPQUFNOztTQUFOQSxPQUFNO0lBQU5BLE9BQU0sR0FBckIsaU1BQXNCSixXQUFtQixFQUFFSyxNQUFjLEVBQUVDLElBQVksRUFBaUI7Ozs7OzJCQUNqRkwsS0FBSyxDQUFFLDZCQUEyQixDQUFFOzs7Ozs7S0FDMUM7V0FGY0csT0FBTTs7QUFJckIsSUFBTUcsU0FBUyxHQUEwQyxnQkFBaUI7UUFBZkMsU0FBUyxTQUFUQSxTQUFTO0lBQ25FLGdGQUFnRjtJQUNoRixJQUFJUixXQUFXLEdBQVdRLFNBQVMsQ0FBQ1IsV0FBVztJQUMvQ1MsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUFDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsV0FBVyxDQUFDLENBQUM7SUFDckYsSUFBSVcsT0FBTyxHQUFHSCxTQUFTLENBQUNHLE9BQU87SUFDL0JGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7SUFBQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hGLElBQUlDLElBQUksR0FBR0osU0FBUyxDQUFDSyxNQUFNO0lBQzNCSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQUNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQztJQUV0RSxPQUNDLGtEQUFrRDtrQkFDbEQsOERBQUNFLEtBQUc7OzBCQUNGLDhEQUFDQSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTs7b0JBQUMsTUFBSTtvQkFBQ2YsV0FBVzs7Ozs7O3FCQUFPOzBCQUNqRCw4REFBQ2MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7Z0JBQUNDLEVBQUUsRUFBQyxVQUFVO2dCQUFDQyx1QkFBdUIsRUFBRTtvQkFBQ0MsTUFBTSxFQUFFUCxPQUFPO2lCQUFDOzs7OztxQkFBRzswQkFDdEYsOERBQUNiLHVEQUFHO2dCQUFDcUIsT0FBTyxFQUFFWCxTQUFTOzs7OztxQkFBSTs7Ozs7O2FBQ3ZCLEVBRU47Q0FDRDtBQWxCS0QsS0FBQUEsU0FBUzs7QUFvQmYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcy9bc3RhdGVtZW50SURdLnRzeD84MDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YXRlbWVudCdcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCB7IGpzb24gfSBmcm9tICdzdHJlYW0vY29uc3VtZXJzJ1xuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUoc3RhdGVtZW50SUQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXBkOC8ke3N0YXRlbWVudElEfWAsIHtcbiAgbWV0aG9kOiAnUFVUJ1xuIH0pXG4gYXdhaXQgUm91dGVyLnB1c2goJy91cGQ4LycpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuY29kZShzdGF0ZW1lbnRJRDogbnVtYmVyLCBwaHJhc2U6IHN0cmluZywgY29kZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jb2RlL2ApXG59XG5cbmNvbnN0IFN0YXRlbWVudDogUmVhY3QuRkM8e3N0YXRlbWVudDogU3RhdGVtZW50UHJvcHN9PiA9ICh7c3RhdGVtZW50fSkgPT4ge1xuIC8vIGNvbnNvbGUubG9nKFwiQ29udGVudHMgb2YgJ3Jlc3QnOlwiKTsgY29uc29sZS5sb2cocmVzdCk7IC8vdHJvdWJsZXNob290aW5nIHRvb2xcbiBsZXQgc3RhdGVtZW50SUQ6IG51bWJlciA9IHN0YXRlbWVudC5zdGF0ZW1lbnRJRDtcbiBjb25zb2xlLmxvZygnc3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBjdXJyZW50IElEOicpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnRJRCk7XG4gbGV0IGNvbnRlbnQgPSBzdGF0ZW1lbnQuY29udGVudDtcbiBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgc3RhdGVtZW50IGNvbnRlbnQ6XCIpOyBjb25zb2xlLmxvZyhjb250ZW50KTtcbiBsZXQgbmV4dCA9IHN0YXRlbWVudC5uZXh0SUQ7XG4gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgbmV4dCBJRFwiKTsgY29uc29sZS5sb2cobmV4dCk7XG5cbiByZXR1cm4gKFxuICAvL1RPRE86IG1ha2UgYSBsYXlvdXQgZm9yIGRpc3BsYXkgKGFsc28sIGNvbnRyb2xzKVxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZXRhZGF0YSc+SUQ6IHtzdGF0ZW1lbnRJRH08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhdGVtZW50JyBpZD0nc3RhdGVib3gnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50fX0vPlxuICAgIDxOYXYgY3VycmVudD17c3RhdGVtZW50fSAvPlxuICA8L2Rpdj5cbiAgXG4gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRcblxuLy9RVUVTVElPTjogV291bGQgaXQgYmUgdG9vIGNoZWVreSB0byBpbnRlZ3JhdGUgdGhlIGNvbnRyb2xzIGludG8gdGhpcyBwYWdlIGluc3RlYWQgb2YgYSBkaWZmZXJlbnQgY29tcG9uZW50IGFuZCB1c2UgdGhhdCB0byBlbmNvZGUgdGhlIElEIG9uIHRoZSBjb250cm9sIGZpcmluZz9cbi8vQWN0dWFsbHkgdGhhdCdzIHByb2JhYmx5IHRoZSByaWdodCB3YXkgdG8gZG8gaXRcbi8vbnZtIGl0IGNhbiByZWNlaXZlIHByb3BzIGJldHRlciBvbiBpdHMgb3duIEkgdGhpbms/IFVuc3VyZS4gRXhhbXBsZSBhdCBwLyBkb2Vzbid0IGhlbHAgbXVjaC5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+ICB7XG4vLyAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YXRlbWVudC8ke2NvbnRleHQucGFyYW1zLnN0YXRlbWVudElEfWApIFxuICBjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQ6XCIpO1xuIGNvbnNvbGUubG9nKGF3YWl0IHJlcy5jbG9uZSgpLnRleHQoKSkgXG4gY29uc3Qgc3RhdGVtZW50ID0gYXdhaXQgcmVzLmpzb24oKVxuIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgc3RhdGVtZW50OlwiKVxuIGNvbnNvbGUubG9nKHN0YXRlbWVudClcbi8vIGNhdGNoIChlKSB7Y29uc29sZS5sb2coZSl9IC8vd2hlcmUgY2FuIHRoaXMgZ28gdG8gbm90IGJyZWFrIHRoaW5ncz9cbiAgcmV0dXJuIHtcbiAgcHJvcHM6IFxuICAgeyBzdGF0ZW1lbnQgfVxuIH07XG59ICBcbi8vfSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsIk5hdiIsInVwZGF0ZSIsInN0YXRlbWVudElEIiwiZmV0Y2giLCJtZXRob2QiLCJwdXNoIiwiZW5jb2RlIiwicGhyYXNlIiwiY29kZSIsIlN0YXRlbWVudCIsInN0YXRlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwibmV4dCIsIm5leHRJRCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});