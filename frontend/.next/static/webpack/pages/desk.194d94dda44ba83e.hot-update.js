"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/desk",{

/***/ "./components/Statement.tsx":
/*!**********************************!*\
  !*** ./components/Statement.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\n\n\n\nvar Statement = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var content = props.content;\n    var statementIDforDiv = '\"' + statement.statementID + '\"';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"statementBox\",\n        onClick: function() {\n            return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/[statementID]\", \"/s/\".concat(statement.statementID));\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"statement\",\n            id: statementIDforDiv,\n            dangerouslySetInnerHTML: {\n                __html: content\n            }\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, _this);\n};\n_c = Statement;\n// Previously I'd had this in:\n// <div id='notes'>\n//<StatementAnnotation comment={statement.comment} />\n// </div>\n// However, since annotations will need to be directly editable, best to leave for later.\nfunction StatementAnnotation(props) {\n    var comments = props.comment;\n    if (comments === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Add ability to add comments.\"\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: comments\n    }, void 0, false);\n}\n_c1 = StatementAnnotation;\n// TO DO: Best way to also query and load information about the existing encodings, if any \n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c, _c1;\n$RefreshReg$(_c, \"Statement\");\n$RefreshReg$(_c1, \"StatementAnnotation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRlbWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7OztBQUF5QjtBQUNPO0FBU2hDLElBQU1FLFNBQVMsR0FBMEMsZ0JBQVE7UUFBUCxzRkFBRTtJQUMxRCxJQUFJQyxPQUFPLEdBQUdDLEtBQUssQ0FBQ0QsT0FBTztJQUMzQixJQUFJRSxpQkFBaUIsR0FBRyxHQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsV0FBVyxHQUFHLEdBQUc7SUFFMUQscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGNBQWM7UUFBQ0MsT0FBTyxFQUFFO21CQUFNVCx1REFBVyxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBd0IsT0FBdEJLLFNBQVMsQ0FBQ0MsV0FBVyxDQUFFLENBQUM7U0FBQTtrQkFDekcsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFdBQVc7WUFBQ0csRUFBRSxFQUFFUCxpQkFBaUI7WUFBRVEsdUJBQXVCLEVBQUU7Z0JBQUNDLE1BQU0sRUFBRVgsT0FBTzthQUFDOzs7OztpQkFBRzs7Ozs7YUFDM0YsQ0FDTjtDQUNEO0FBVEtELEtBQUFBLFNBQVM7QUFXZiw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1QseUZBQXlGO0FBR3pGLFNBQVNhLG1CQUFtQixDQUFDWCxLQUFpQyxFQUFFO0lBQy9ELElBQU1ZLFFBQVEsR0FBR1osS0FBSyxDQUFDYSxPQUFPO0lBQzlCLElBQUlELFFBQVEsS0FBSyxJQUFJLEVBQUU7UUFDdEIscUJBQ0M7c0JBQUUsOEJBRUY7eUJBQUcsQ0FDSDtLQUNEO0lBQ0QscUJBQ0M7a0JBQ0VBLFFBQVE7cUJBQ1AsQ0FDSDtDQUNEO0FBZFFELE1BQUFBLG1CQUFtQjtBQXdCNUIsMkZBQTJGO0FBRTNGLCtEQUFlYixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RhdGVtZW50LnRzeD9iY2QwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFN0YXRlbWVudFByb3BzID0ge1xuIHN0YXRlbWVudElEOiBudW1iZXI7XG4gY29udGVudDogc3RyaW5nO1xuIGNvZGVkOiBib29sZWFuO1xuIGNvbW1lbnQ6IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IFN0YXRlbWVudDogUmVhY3QuRkM8e3N0YXRlbWVudDogU3RhdGVtZW50UHJvcHN9PiA9ICh7fSkgPT4ge1xuICBsZXQgY29udGVudCA9IHByb3BzLmNvbnRlbnQ7XG4gIGxldCBzdGF0ZW1lbnRJRGZvckRpdiA9ICdcIicgKyBzdGF0ZW1lbnQuc3RhdGVtZW50SUQgKyAnXCInO1xuXG4gcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9J3N0YXRlbWVudEJveCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9zL1tzdGF0ZW1lbnRJRF0nLCBgL3MvJHtzdGF0ZW1lbnQuc3RhdGVtZW50SUR9YCl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZW1lbnQnIGlkPXtzdGF0ZW1lbnRJRGZvckRpdn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnR9fS8+XG4gIDwvZGl2PlxuIClcbn1cblxuLy8gUHJldmlvdXNseSBJJ2QgaGFkIHRoaXMgaW46XG4vLyA8ZGl2IGlkPSdub3Rlcyc+XG4vLzxTdGF0ZW1lbnRBbm5vdGF0aW9uIGNvbW1lbnQ9e3N0YXRlbWVudC5jb21tZW50fSAvPlxuLy8gPC9kaXY+XG4vLyBIb3dldmVyLCBzaW5jZSBhbm5vdGF0aW9ucyB3aWxsIG5lZWQgdG8gYmUgZGlyZWN0bHkgZWRpdGFibGUsIGJlc3QgdG8gbGVhdmUgZm9yIGxhdGVyLlxuXG5cbmZ1bmN0aW9uIFN0YXRlbWVudEFubm90YXRpb24ocHJvcHM6IHsgY29tbWVudDogc3RyaW5nIHwgbnVsbCB9KSB7XG4gY29uc3QgY29tbWVudHMgPSBwcm9wcy5jb21tZW50O1xuIGlmIChjb21tZW50cyA9PT0gbnVsbCkge1xuICByZXR1cm4gKFxuICAgPD5cbiAgICBBZGQgYWJpbGl0eSB0byBhZGQgY29tbWVudHMuXG4gICA8Lz5cbiAgKVxuIH1cbiByZXR1cm4gKFxuICA8PlxuICAge2NvbW1lbnRzfVxuICA8Lz5cbiApXG59XG5cbmV4cG9ydCB0eXBlIEVuY29kaW5nUHJvcHMgPSB7XG4gcGFyZW50OiBudW1iZXIgfCBudWxsO1xuLy8gaWQ6IG51bWJlciB8IG51bGw7XG4gY29kZVVzZWQ6IHN0cmluZyB8IG51bGw7XG4gcGhyYXNlOiBzdHJpbmcgfCBudWxsO1xuIGNvbW1lbnRzOiBzdHJpbmcgfCBudWxsO1xufVxuXG4vLyBUTyBETzogQmVzdCB3YXkgdG8gYWxzbyBxdWVyeSBhbmQgbG9hZCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXhpc3RpbmcgZW5jb2RpbmdzLCBpZiBhbnkgXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudCJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsIlN0YXRlbWVudCIsImNvbnRlbnQiLCJwcm9wcyIsInN0YXRlbWVudElEZm9yRGl2Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50SUQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJTdGF0ZW1lbnRBbm5vdGF0aW9uIiwiY29tbWVudHMiLCJjb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Statement.tsx\n");

/***/ })

});