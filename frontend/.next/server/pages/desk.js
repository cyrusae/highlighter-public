"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/desk";
exports.ids = ["pages/desk"];
exports.modules = {

/***/ "./components/Statement.tsx":
/*!**********************************!*\
  !*** ./components/Statement.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Statement = ({ statement  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"statementContent\",\n        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/[statementID]\", `/s/${statement.statementID}`)\n        ,\n        children: statement.content\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n// Previously I'd had this in:\n// <div id='notes'>\n//<StatementAnnotation comment={statement.comment} />\n// </div>\n// However, since annotations will need to be directly editable, best to leave for later.\nfunction StatementAnnotation(props) {\n    const comments = props.comment;\n    if (comments === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Add ability to add comments.\"\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: comments\n    }, void 0, false);\n}\n// TO DO: Best way to also query and load information about the existing encodings, if any \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statement);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRlbWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ087QUFTaEMsTUFBTUUsU0FBUyxHQUEwQyxDQUFDLEVBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQzNFLHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLEVBQUUsRUFBQyxrQkFBa0I7UUFBQ0MsT0FBTyxFQUFFLElBQU1MLHVEQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLEVBQUVFLFNBQVMsQ0FBQ0ssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUFBO2tCQUNyR0wsU0FBUyxDQUFDTSxPQUFPOzs7OztpQkFDZCxDQUNOO0NBQ0Q7QUFFRCw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1QseUZBQXlGO0FBR3pGLFNBQVNDLG1CQUFtQixDQUFDQyxLQUFpQyxFQUFFO0lBQy9ELE1BQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxPQUFPO0lBQzlCLElBQUlELFFBQVEsS0FBSyxJQUFJLEVBQUU7UUFDdEIscUJBQ0M7c0JBQUUsOEJBRUY7eUJBQUcsQ0FDSDtLQUNEO0lBQ0QscUJBQ0M7a0JBQ0VBLFFBQVE7cUJBQ1AsQ0FDSDtDQUNEO0FBVUQsMkZBQTJGO0FBRTNGLGlFQUFlVixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL2NvbXBvbmVudHMvU3RhdGVtZW50LnRzeD9iY2QwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFN0YXRlbWVudFByb3BzID0ge1xuIHN0YXRlbWVudElEOiBudW1iZXI7XG4gY29udGVudDogc3RyaW5nO1xuIGNvZGVkOiBib29sZWFuO1xuIGNvbW1lbnQ6IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IFN0YXRlbWVudDogUmVhY3QuRkM8e3N0YXRlbWVudDogU3RhdGVtZW50UHJvcHN9PiA9ICh7IHN0YXRlbWVudCB9KSA9PiB7XG4gcmV0dXJuIChcbiAgPGRpdiBpZD0nc3RhdGVtZW50Q29udGVudCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9zL1tzdGF0ZW1lbnRJRF0nLCBgL3MvJHtzdGF0ZW1lbnQuc3RhdGVtZW50SUR9YCl9PlxuICAgIHtzdGF0ZW1lbnQuY29udGVudH1cbiAgPC9kaXY+XG4gKVxufVxuXG4vLyBQcmV2aW91c2x5IEknZCBoYWQgdGhpcyBpbjpcbi8vIDxkaXYgaWQ9J25vdGVzJz5cbi8vPFN0YXRlbWVudEFubm90YXRpb24gY29tbWVudD17c3RhdGVtZW50LmNvbW1lbnR9IC8+XG4vLyA8L2Rpdj5cbi8vIEhvd2V2ZXIsIHNpbmNlIGFubm90YXRpb25zIHdpbGwgbmVlZCB0byBiZSBkaXJlY3RseSBlZGl0YWJsZSwgYmVzdCB0byBsZWF2ZSBmb3IgbGF0ZXIuXG5cblxuZnVuY3Rpb24gU3RhdGVtZW50QW5ub3RhdGlvbihwcm9wczogeyBjb21tZW50OiBzdHJpbmcgfCBudWxsIH0pIHtcbiBjb25zdCBjb21tZW50cyA9IHByb3BzLmNvbW1lbnQ7XG4gaWYgKGNvbW1lbnRzID09PSBudWxsKSB7XG4gIHJldHVybiAoXG4gICA8PlxuICAgIEFkZCBhYmlsaXR5IHRvIGFkZCBjb21tZW50cy5cbiAgIDwvPlxuICApXG4gfVxuIHJldHVybiAoXG4gIDw+XG4gICB7Y29tbWVudHN9XG4gIDwvPlxuIClcbn1cblxuZXhwb3J0IHR5cGUgRW5jb2RpbmdQcm9wcyA9IHtcbiBwYXJlbnQ6IG51bWJlciB8IG51bGw7XG4vLyBpZDogbnVtYmVyIHwgbnVsbDtcbiBjb2RlVXNlZDogc3RyaW5nIHwgbnVsbDtcbiBwaHJhc2U6IHN0cmluZyB8IG51bGw7XG4gY29tbWVudHM6IHN0cmluZyB8IG51bGw7XG59XG5cbi8vIFRPIERPOiBCZXN0IHdheSB0byBhbHNvIHF1ZXJ5IGFuZCBsb2FkIGluZm9ybWF0aW9uIGFib3V0IHRoZSBleGlzdGluZyBlbmNvZGluZ3MsIGlmIGFueSBcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZGl2IiwiaWQiLCJvbkNsaWNrIiwicHVzaCIsInN0YXRlbWVudElEIiwiY29udGVudCIsIlN0YXRlbWVudEFubm90YXRpb24iLCJwcm9wcyIsImNvbW1lbnRzIiwiY29tbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Statement.tsx\n");

/***/ }),

/***/ "./pages/desk.tsx":
/*!************************!*\
  !*** ./pages/desk.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Statement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Statement */ \"./components/Statement.tsx\");\n\n\n\nconst Desk = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: props.unseen.map((statement)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"statement\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Statement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    statement: statement\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/desk.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 8\n                }, undefined)\n            }, statement.statementID, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/desk.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/desk.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async ()=>{\n    const res = await fetch(\"http://localhost:3001/unseen\");\n    console.log(res);\n//  const pile = await res.json()\n//  return {\n//   props: { pile },\n//  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desk);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFMEM7QUFPbkUsTUFBTUUsSUFBSSxHQUFxQkMsQ0FBQUEsS0FBSyxHQUFJO0lBQ3RDLHFCQUNFLDhEQUFDQyxNQUFJO2tCQUNIRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxTQUFTLGlCQUMxQiw4REFBQ0MsS0FBRztnQkFBNkJDLFNBQVMsRUFBQyxXQUFXOzBCQUNyRCw0RUFBQ1IsNkRBQVM7b0JBQUNNLFNBQVMsRUFBRUEsU0FBUzs7Ozs7NkJBQUk7ZUFEMUJBLFNBQVMsQ0FBQ0csV0FBVzs7Ozt5QkFFMUI7UUFDTixDQUFDOzs7OztpQkFDRyxDQUNOO0NBQ0Y7QUFFTSxNQUFNQyxrQkFBa0IsR0FBdUIsVUFBWTtJQUNoRSxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDO0lBQ3ZEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDO0FBQ2xCLGlDQUFpQztBQUNqQyxZQUFZO0FBQ1gscUJBQXFCO0FBQ3RCLEtBQUs7Q0FDSjtBQUVELGlFQUFlVixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2Rlc2sudHN4Pzg4YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBTdGF0ZW1lbnQsIHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL1N0YXRlbWVudCdcblxuXG50eXBlIFByb3BzID0ge1xuICB1bnNlZW46IFN0YXRlbWVudFByb3BzW11cbn1cblxuY29uc3QgRGVzayA6IFJlYWN0LkZDPFByb3BzPiA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAge3Byb3BzLnVuc2Vlbi5tYXAoc3RhdGVtZW50ID0+IChcbiAgICAgIDxkaXYga2V5PXtzdGF0ZW1lbnQuc3RhdGVtZW50SUR9IGNsYXNzTmFtZT1cInN0YXRlbWVudFwiPlxuICAgICAgIDxTdGF0ZW1lbnQgc3RhdGVtZW50PXtzdGF0ZW1lbnR9IC8+XG4gICAgIDwvZGl2PlxuICAgICkpfVxuICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Vuc2VlbicpXG4gIGNvbnNvbGUubG9nKHJlcylcbi8vICBjb25zdCBwaWxlID0gYXdhaXQgcmVzLmpzb24oKVxuLy8gIHJldHVybiB7XG4gLy8gICBwcm9wczogeyBwaWxlIH0sXG4vLyAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNrXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdGF0ZW1lbnQiLCJEZXNrIiwicHJvcHMiLCJtYWluIiwidW5zZWVuIiwibWFwIiwic3RhdGVtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3RhdGVtZW50SUQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/desk.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/desk.tsx"));
module.exports = __webpack_exports__;

})();