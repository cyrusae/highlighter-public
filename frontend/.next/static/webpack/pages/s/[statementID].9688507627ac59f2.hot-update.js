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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\nfunction update(statementID) {\n    return _update.apply(this, arguments);\n}\nfunction _update() {\n    _update = //This isn't working yet\n    _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(statementID) {\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/upd8/\".concat(statementID), {\n                        method: \"PUT\"\n                    });\n                case 2:\n                    _ctx.next = 4;\n                    return next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/upd8/\");\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _update.apply(this, arguments);\n}\nfunction encode(statementID, phrase, code) {\n    return _encode.apply(this, arguments);\n}\nfunction _encode() {\n    _encode = _asyncToGenerator(_Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(statementID, phrase, code) {\n        return _Users_watcher_GitHere_highlighter_public_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3001/code/\");\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _encode.apply(this, arguments);\n}\nvar Statement = function(_param) {\n    var pile = _param.pile, rest = _objectWithoutProperties(_param, [\n        \"pile\"\n    ]);\n    console.log(\"Contents of 'rest':\");\n    console.log(rest);\n    var content = pile.content;\n    var statementID = pile.statementID;\n    // if (!props.coded) {\n    //  props.coded = true;\n    // }\n    // let statementIDforDiv = '\"' + statement.statementID + '\"';\n    // TODO: Add ability to fetch other factors (metadata) when those are added to schema.prisma\n    return(//TODO: make a layout for display (also, controls)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"statement\",\n        dangerouslySetInnerHTML: {\n            __html: content\n        }\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, _this));\n};\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO1NBTWpCRSxNQUFNLENBQUNDLFdBQW1CO1dBQTFCRCxPQUFNOztTQUFOQSxPQUFNO0lBQU5BLE9BQU0sR0FGckIsd0JBQXdCO0lBRXhCLGlNQUFzQkMsV0FBbUIsRUFBaUI7Ozs7OzJCQUNuREMsS0FBSyxDQUFDLDZCQUE0QixDQUFjLE9BQVpELFdBQVcsQ0FBRSxFQUFFO3dCQUN4REUsTUFBTSxFQUFFLEtBQUs7cUJBQ2IsQ0FBQzs7OzJCQUNJSix1REFBVyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0tBQzNCO1dBTGNDLE9BQU07O1NBT05LLE1BQU0sQ0FBQ0osV0FBbUIsRUFBRUssTUFBYyxFQUFFQyxJQUFZO1dBQXhERixPQUFNOztTQUFOQSxPQUFNO0lBQU5BLE9BQU0sR0FBckIsaU1BQXNCSixXQUFtQixFQUFFSyxNQUFjLEVBQUVDLElBQVksRUFBaUI7Ozs7OzJCQUNqRkwsS0FBSyxDQUFFLDZCQUEyQixDQUFFOzs7Ozs7S0FDMUM7V0FGY0csT0FBTTs7QUFNckIsSUFBTUcsU0FBUyxHQUEwQyxpQkFBdUI7UUFBcEJDLElBQUksVUFBSkEsSUFBSSxFQUFLQyxJQUFJO1FBQWJELE1BQUk7O0lBQzlERSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ25DRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7SUFDbkIsSUFBSUcsT0FBTyxHQUFHSixJQUFJLENBQUNJLE9BQU87SUFDMUIsSUFBSVosV0FBVyxHQUFXUSxJQUFJLENBQUNSLFdBQVc7SUFDM0Msc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixJQUFJO0lBQ0osNkRBQTZEO0lBRTdELDRGQUE0RjtJQUUzRixPQUNDLGtEQUFrRDtrQkFDbEQsOERBQUNhLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVdDO1FBQUFBLHVCQUF1QixFQUFFO1lBQUNDLE1BQU0sRUFBRUosT0FBTztTQUFDOzs7OzthQUFHLEVBQ3ZFO0NBQ0Q7QUFoQktMLEtBQUFBLFNBQVM7O0FBa0JmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3MvW3N0YXRlbWVudElEXS50c3g/ODA1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0ZW1lbnQnXG5cbi8vVGhpcyBpc24ndCB3b3JraW5nIHlldFxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUoc3RhdGVtZW50SUQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXBkOC8ke3N0YXRlbWVudElEfWAsIHtcbiAgbWV0aG9kOiAnUFVUJ1xuIH0pXG4gYXdhaXQgUm91dGVyLnB1c2goJy91cGQ4LycpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuY29kZShzdGF0ZW1lbnRJRDogbnVtYmVyLCBwaHJhc2U6IHN0cmluZywgY29kZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jb2RlL2ApXG59XG5cblxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPHtzdGF0ZW1lbnQ6IFN0YXRlbWVudFByb3BzfT4gPSAoeyBwaWxlLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc29sZS5sb2coXCJDb250ZW50cyBvZiAncmVzdCc6XCIpO1xuICBjb25zb2xlLmxvZyhyZXN0KTtcbiBsZXQgY29udGVudCA9IHBpbGUuY29udGVudDtcbiBsZXQgc3RhdGVtZW50SUQ6IG51bWJlciA9IHBpbGUuc3RhdGVtZW50SUQ7XG4vLyBpZiAoIXByb3BzLmNvZGVkKSB7XG4vLyAgcHJvcHMuY29kZWQgPSB0cnVlO1xuLy8gfVxuLy8gbGV0IHN0YXRlbWVudElEZm9yRGl2ID0gJ1wiJyArIHN0YXRlbWVudC5zdGF0ZW1lbnRJRCArICdcIic7XG5cbi8vIFRPRE86IEFkZCBhYmlsaXR5IHRvIGZldGNoIG90aGVyIGZhY3RvcnMgKG1ldGFkYXRhKSB3aGVuIHRob3NlIGFyZSBhZGRlZCB0byBzY2hlbWEucHJpc21hXG5cbiByZXR1cm4gKFxuICAvL1RPRE86IG1ha2UgYSBsYXlvdXQgZm9yIGRpc3BsYXkgKGFsc28sIGNvbnRyb2xzKVxuICA8ZGl2IGNsYXNzTmFtZT0nc3RhdGVtZW50J2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50fX0vPlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50XG5cbi8vUVVFU1RJT046IFdvdWxkIGl0IGJlIHRvbyBjaGVla3kgdG8gaW50ZWdyYXRlIHRoZSBjb250cm9scyBpbnRvIHRoaXMgcGFnZSBpbnN0ZWFkIG9mIGEgZGlmZmVyZW50IGNvbXBvbmVudCBhbmQgdXNlIHRoYXQgdG8gZW5jb2RlIHRoZSBJRCBvbiB0aGUgY29udHJvbCBmaXJpbmc/XG4vL0FjdHVhbGx5IHRoYXQncyBwcm9iYWJseSB0aGUgcmlnaHQgd2F5IHRvIGRvIGl0XG4vL252bSBpdCBjYW4gcmVjZWl2ZSBwcm9wcyBiZXR0ZXIgb24gaXRzIG93biBJIHRoaW5rPyBVbnN1cmUuIEV4YW1wbGUgYXQgcC8gZG9lc24ndCBoZWxwIG11Y2guXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiAge1xuLy8gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdGF0ZW1lbnQvJHtjb250ZXh0LnBhcmFtcy5zdGF0ZW1lbnRJRH1gKSBcbiAgY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0OlwiKTtcbiBjb25zb2xlLmxvZyhhd2FpdCByZXMuY2xvbmUoKS50ZXh0KCkpIFxuIGNvbnN0IHBpbGUgPSBhd2FpdCByZXMuanNvbigpXG4gY29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBwaWxlOlwiKVxuIGNvbnNvbGUubG9nKHBpbGUpXG4vLyBjYXRjaCAoZSkge2NvbnNvbGUubG9nKGUpfSAvL3doZXJlIGNhbiB0aGlzIGdvIHRvIG5vdCBicmVhayB0aGluZ3M/XG4gIHJldHVybiB7XG4gIHByb3BzOiBcbiAgIHsgcGlsZSB9XG4gfTtcbn0gIFxuLy99Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwidXBkYXRlIiwic3RhdGVtZW50SUQiLCJmZXRjaCIsIm1ldGhvZCIsInB1c2giLCJlbmNvZGUiLCJwaHJhc2UiLCJjb2RlIiwiU3RhdGVtZW50IiwicGlsZSIsInJlc3QiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});