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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\n\nfunction update(statementID) {\n    return _update.apply(this, arguments);\n}\nfunction _update() {\n    _update = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(statementID) {\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/upd8/\".concat(statementID), {\n                        method: \"PUT\"\n                    });\n                case 2:\n                    _ctx.next = 4;\n                    return next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/upd8/\");\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _update.apply(this, arguments);\n}\nfunction encode(statementID, phrase, code) {\n    return _encode.apply(this, arguments);\n}\nfunction _encode() {\n    _encode = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(statementID, phrase, code) {\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/code/\");\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _encode.apply(this, arguments);\n}\n//Working:\nvar Statement = function(_param) {\n    var statement = _param.statement, rest = _objectWithoutProperties(_param, [\n        \"statement\"\n    ]);\n    // console.log(\"Contents of 'rest':\"); //troubleshooting tool\n    // console.log(rest); //troubleshooting tool\n    var content = statement.content;\n    var statementID = statement.statementID;\n    var next = statement.nextID;\n    return(//TODO: make a layout for display (also, controls)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"statement\",\n                id: \"statebox\",\n                dangerouslySetInnerHTML: {\n                    __html: content\n                }\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__.Nav, {\n                current: statement\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, _this));\n};\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTztBQUdpQjtTQUdsQ0csTUFBTSxDQUFDQyxXQUFtQjtXQUExQkQsT0FBTTs7U0FBTkEsT0FBTTtJQUFOQSxPQUFNLEdBQXJCLGlNQUFzQkMsV0FBbUIsRUFBaUI7Ozs7OzJCQUNuREMsS0FBSyxDQUFDLDZCQUE0QixDQUFjLE9BQVpELFdBQVcsQ0FBRSxFQUFFO3dCQUN4REUsTUFBTSxFQUFFLEtBQUs7cUJBQ2IsQ0FBQzs7OzJCQUNJTCx1REFBVyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0tBQzNCO1dBTGNFLE9BQU07O1NBT05LLE1BQU0sQ0FBQ0osV0FBbUIsRUFBRUssTUFBYyxFQUFFQyxJQUFZO1dBQXhERixPQUFNOztTQUFOQSxPQUFNO0lBQU5BLE9BQU0sR0FBckIsaU1BQXNCSixXQUFtQixFQUFFSyxNQUFjLEVBQUVDLElBQVksRUFBaUI7Ozs7OzJCQUNqRkwsS0FBSyxDQUFFLDZCQUEyQixDQUFFOzs7Ozs7S0FDMUM7V0FGY0csT0FBTTs7QUFLckIsVUFBVTtBQUNWLElBQU1HLFNBQVMsR0FBMEMsaUJBQTRCO1FBQXpCQyxTQUFTLFVBQVRBLFNBQVMsRUFBS0MsSUFBSTtRQUFsQkQsV0FBUzs7SUFDcEUsNkRBQTZEO0lBQzdELDRDQUE0QztJQUM1QyxJQUFJRSxPQUFPLEdBQUdGLFNBQVMsQ0FBQ0UsT0FBTztJQUMvQixJQUFJVixXQUFXLEdBQVdRLFNBQVMsQ0FBQ1IsV0FBVztJQUMvQyxJQUFJVyxJQUFJLEdBQUdILFNBQVMsQ0FBQ0ksTUFBTTtJQUUzQixPQUNDLGtEQUFrRDtrQkFDbEQsOERBQUNDLE1BQUk7OzBCQUNILDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVztnQkFBQ0MsRUFBRSxFQUFDLFVBQVU7Z0JBQUNDLHVCQUF1QixFQUFFO29CQUFDQyxNQUFNLEVBQUVSLE9BQU87aUJBQUM7Ozs7O3FCQUFHOzBCQUN0Riw4REFBQ1osdURBQUc7Z0JBQUNxQixPQUFPLEVBQUVYLFNBQVM7Ozs7O3FCQUFJOzs7Ozs7YUFDdEIsRUFFUDtDQUNEO0FBZktELEtBQUFBLFNBQVM7O0FBaUJmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3MvW3N0YXRlbWVudElEXS50c3g/ODA1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0ZW1lbnQnXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24nXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnc3RyZWFtL2NvbnN1bWVycydcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlKHN0YXRlbWVudElEOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3VwZDgvJHtzdGF0ZW1lbnRJRH1gLCB7XG4gIG1ldGhvZDogJ1BVVCdcbiB9KVxuIGF3YWl0IFJvdXRlci5wdXNoKCcvdXBkOC8nKVxufVxuXG5hc3luYyBmdW5jdGlvbiBlbmNvZGUoc3RhdGVtZW50SUQ6IG51bWJlciwgcGhyYXNlOiBzdHJpbmcsIGNvZGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvY29kZS9gKVxufVxuXG5cbi8vV29ya2luZzpcbmNvbnN0IFN0YXRlbWVudDogUmVhY3QuRkM8e3N0YXRlbWVudDogU3RhdGVtZW50UHJvcHN9PiA9ICh7IHN0YXRlbWVudCwgLi4ucmVzdCB9KSA9PiB7XG4gLy8gY29uc29sZS5sb2coXCJDb250ZW50cyBvZiAncmVzdCc6XCIpOyAvL3Ryb3VibGVzaG9vdGluZyB0b29sXG4gLy8gY29uc29sZS5sb2cocmVzdCk7IC8vdHJvdWJsZXNob290aW5nIHRvb2xcbiBsZXQgY29udGVudCA9IHN0YXRlbWVudC5jb250ZW50O1xuIGxldCBzdGF0ZW1lbnRJRDogbnVtYmVyID0gc3RhdGVtZW50LnN0YXRlbWVudElEO1xuIGxldCBuZXh0ID0gc3RhdGVtZW50Lm5leHRJRDtcblxuIHJldHVybiAoXG4gIC8vVE9ETzogbWFrZSBhIGxheW91dCBmb3IgZGlzcGxheSAoYWxzbywgY29udHJvbHMpXG4gIDxtYWluPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZW1lbnQnIGlkPSdzdGF0ZWJveCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnR9fS8+XG4gICAgPE5hdiBjdXJyZW50PXtzdGF0ZW1lbnR9IC8+XG4gIDwvbWFpbj5cbiAgXG4gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRcblxuLy9RVUVTVElPTjogV291bGQgaXQgYmUgdG9vIGNoZWVreSB0byBpbnRlZ3JhdGUgdGhlIGNvbnRyb2xzIGludG8gdGhpcyBwYWdlIGluc3RlYWQgb2YgYSBkaWZmZXJlbnQgY29tcG9uZW50IGFuZCB1c2UgdGhhdCB0byBlbmNvZGUgdGhlIElEIG9uIHRoZSBjb250cm9sIGZpcmluZz9cbi8vQWN0dWFsbHkgdGhhdCdzIHByb2JhYmx5IHRoZSByaWdodCB3YXkgdG8gZG8gaXRcbi8vbnZtIGl0IGNhbiByZWNlaXZlIHByb3BzIGJldHRlciBvbiBpdHMgb3duIEkgdGhpbms/IFVuc3VyZS4gRXhhbXBsZSBhdCBwLyBkb2Vzbid0IGhlbHAgbXVjaC5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+ICB7XG4vLyAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YXRlbWVudC8ke2NvbnRleHQucGFyYW1zLnN0YXRlbWVudElEfWApIFxuICBjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQ6XCIpO1xuIGNvbnNvbGUubG9nKGF3YWl0IHJlcy5jbG9uZSgpLnRleHQoKSkgXG4gY29uc3Qgc3RhdGVtZW50ID0gYXdhaXQgcmVzLmpzb24oKVxuIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgc3RhdGVtZW50OlwiKVxuIGNvbnNvbGUubG9nKHN0YXRlbWVudClcbi8vIGNhdGNoIChlKSB7Y29uc29sZS5sb2coZSl9IC8vd2hlcmUgY2FuIHRoaXMgZ28gdG8gbm90IGJyZWFrIHRoaW5ncz9cbiAgcmV0dXJuIHtcbiAgcHJvcHM6IFxuICAgeyAuLi5zdGF0ZW1lbnQgfVxuIH07XG59ICBcbi8vfSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsIk5hdiIsInVwZGF0ZSIsInN0YXRlbWVudElEIiwiZmV0Y2giLCJtZXRob2QiLCJwdXNoIiwiZW5jb2RlIiwicGhyYXNlIiwiY29kZSIsIlN0YXRlbWVudCIsInN0YXRlbWVudCIsInJlc3QiLCJjb250ZW50IiwibmV4dCIsIm5leHRJRCIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});