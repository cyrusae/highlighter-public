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

/***/ "./pages/codes.tsx":
/*!*************************!*\
  !*** ./pages/codes.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Colormaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Colormaker */ \"./components/Colormaker.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_Remap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Remap */ \"./components/Remap.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar Codepage = function(props) {\n    var arcss = [];\n    for(var i = 0; i < props.initialGlossary.length; i++){\n        var str = \"mark.\" + props.initialGlossary[i].shortCode + \" { background-color: \" + props.initialGlossary[i].colorCode + \"; } \";\n        arcss.push(str);\n    }\n    var css = arcss.join(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                glossary: props.initialGlossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/codes.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Colormaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/codes.tsx\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Remap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                glossary: props.initialGlossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/codes.tsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/codes.tsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, _this);\n};\n_c = Codepage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Codepage);\nvar _c;\n$RefreshReg$(_c, \"Codepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb2Rlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDeUI7QUFDdUM7QUFDTDtBQUN0QjtBQU1yQyxJQUFNSSxRQUFRLEdBQW9CLFNBQUNDLEtBQUssRUFBSztJQUMzQyxJQUFJQyxLQUFLLEdBQWEsRUFBRTtJQUN4QixJQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxlQUFlLENBQUNDLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLENBQUU7UUFDckQsSUFBTUcsR0FBRyxHQUFHLE9BQU8sR0FBR0wsS0FBSyxDQUFDRyxlQUFlLENBQUNELENBQUMsQ0FBQyxDQUFDSSxTQUFTLEdBQUcsdUJBQXVCLEdBQUdOLEtBQUssQ0FBQ0csZUFBZSxDQUFDRCxDQUFDLENBQUMsQ0FBQ0ssU0FBUyxHQUFHLE1BQU07UUFDaElOLEtBQUssQ0FBQ08sSUFBSSxDQUFDSCxHQUFHLENBQUMsQ0FBQztLQUNqQjtJQUNELElBQU1JLEdBQUcsR0FBR1IsS0FBSyxDQUFDUyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzNCLHFCQUNDLDhEQUFDQyxLQUFHOzswQkFDSCw4REFBQ2QsNERBQVE7Z0JBQUNlLFFBQVEsRUFBRVosS0FBSyxDQUFDRyxlQUFlOzs7OztxQkFBSTswQkFDN0MsOERBQUNQLDhEQUFVOzs7O3FCQUFFOzBCQUNiLDhEQUFDRSx5REFBRztnQkFBQ2MsUUFBUSxFQUFFWixLQUFLLENBQUNHLGVBQWU7Ozs7O3FCQUFHOzs7Ozs7YUFDbEMsQ0FDTjtDQUNEO0FBZEtKLEtBQUFBLFFBQVE7O0FBZWQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29kZXMudHN4P2UxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb2xvcm1ha2VyLCB7IENvZGVQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3JtYWtlcidcbmltcG9ydCBHbG9zc2FyeSwgeyBDb2RlTGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvR2xvc3NhcnknXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvUmVtYXAnXG5cbnR5cGUgUHJvcHMgPSB7XG4gaW5pdGlhbEdsb3NzYXJ5OiBDb2RlUHJvcHNbXTtcbn1cblxuY29uc3QgQ29kZXBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBsZXQgYXJjc3M6IHN0cmluZ1tdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMuaW5pdGlhbEdsb3NzYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RyID0gJ21hcmsuJyArIHByb3BzLmluaXRpYWxHbG9zc2FyeVtpXS5zaG9ydENvZGUgKyAnIHsgYmFja2dyb3VuZC1jb2xvcjogJyArIHByb3BzLmluaXRpYWxHbG9zc2FyeVtpXS5jb2xvckNvZGUgKyAnOyB9ICc7XG4gICAgYXJjc3MucHVzaChzdHIpO1xuICB9XG4gIGNvbnN0IGNzcyA9IGFyY3NzLmpvaW4oJycpO1xuIHJldHVybiAoXG4gIDxkaXY+XG4gICA8R2xvc3NhcnkgZ2xvc3Nhcnk9e3Byb3BzLmluaXRpYWxHbG9zc2FyeX0gLz5cbiAgIDxDb2xvcm1ha2VyLz5cbiAgIDxNYXAgZ2xvc3Nhcnk9e3Byb3BzLmluaXRpYWxHbG9zc2FyeX0vPlxuICA8L2Rpdj5cbiApXG59XG5leHBvcnQgZGVmYXVsdCBDb2RlcGFnZVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2dsb3NzYCk7XG4gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0OlwiKTsgY29uc29sZS5sb2coYXdhaXQgcmVzLmNsb25lKCkudGV4dCgpKTtcbiBjb25zdCBpbml0aWFsR2xvc3NhcnkgPSBhd2FpdCByZXMuanNvbigpO1xuIGNvbnNvbGUubG9nKFwiaGVyZSdzIHRoZSBnbG9zc2FyeSBvdXRwdXQgb24gbG9hZDpcIik7IGNvbnNvbGUubG9nKGluaXRpYWxHbG9zc2FyeSk7XG4gcmV0dXJuIHtcbiAgcHJvcHM6XG4gICB7IGluaXRpYWxHbG9zc2FyeSB9XG4gfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29sb3JtYWtlciIsIkdsb3NzYXJ5IiwiTWFwIiwiQ29kZXBhZ2UiLCJwcm9wcyIsImFyY3NzIiwiaSIsImluaXRpYWxHbG9zc2FyeSIsImxlbmd0aCIsInN0ciIsInNob3J0Q29kZSIsImNvbG9yQ29kZSIsInB1c2giLCJjc3MiLCJqb2luIiwiZGl2IiwiZ2xvc3NhcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/codes.tsx\n");

/***/ })

});