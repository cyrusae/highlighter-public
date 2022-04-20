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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Statement.tsx":
/*!**********************************!*\
  !*** ./components/Statement.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Statement = ({ statement  })=>{\n    console.log(statement);\n    let content = statement.content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"statementBox\",\n        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/[statementID]\", `/s/${statement.statementID}`)\n        ,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"statement\",\n            id: statement.statementID.toString(),\n            dangerouslySetInnerHTML: {\n                __html: content\n            }\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, undefined);\n};\n// Previously I'd had this in:\n// <div id='notes'>\n//<StatementAnnotation comment={statement.comment} />\n// </div>\n// However, since annotations will need to be directly editable, best to leave for later.\nfunction StatementAnnotation(props) {\n    const comments = props.comment;\n    if (comments === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Add ability to add comments.\"\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: comments\n    }, void 0, false);\n}\n// TO DO: Best way to also query and load information about the existing encodings, if any \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statement);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRlbWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ087QUFZaEMsTUFBTUUsU0FBUyxHQUEwQyxDQUFDLEVBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQzFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDLENBQUM7SUFDdkIsSUFBSUcsT0FBTyxHQUFHSCxTQUFTLENBQUNHLE9BQU87SUFFaEMscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGNBQWM7UUFBQ0MsT0FBTyxFQUFFLElBQU1SLHVEQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLEVBQUVFLFNBQVMsQ0FBQ1EsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUFBO2tCQUN6Ryw0RUFBQ0osS0FBRztZQUFDQyxTQUFTLEVBQUMsV0FBVztZQUFDSSxFQUFFLEVBQUVULFNBQVMsQ0FBQ1EsV0FBVyxDQUFDRSxRQUFRLEVBQUU7WUFBRUMsdUJBQXVCLEVBQUU7Z0JBQUNDLE1BQU0sRUFBRVQsT0FBTzthQUFDOzs7OztxQkFBRzs7Ozs7aUJBQzFHLENBQ047Q0FDRDtBQUVELDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIscURBQXFEO0FBQ3JELFNBQVM7QUFDVCx5RkFBeUY7QUFHekYsU0FBU1UsbUJBQW1CLENBQUNDLEtBQWlDLEVBQUU7SUFDL0QsTUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLE9BQU87SUFDOUIsSUFBSUQsUUFBUSxLQUFLLElBQUksRUFBRTtRQUN0QixxQkFDQztzQkFBRSw4QkFFRjt5QkFBRyxDQUNIO0tBQ0Q7SUFDRCxxQkFDQztrQkFDRUEsUUFBUTtxQkFDUCxDQUNIO0NBQ0Q7QUFTRCwyRkFBMkY7QUFFM0YsaUVBQWVoQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL2NvbXBvbmVudHMvU3RhdGVtZW50LnRzeD9iY2QwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFN0YXRlbWVudFByb3BzID0ge1xuIHN0YXRlbWVudElEOiBudW1iZXI7XG4gY29udGVudDogc3RyaW5nO1xuIGNvZGVkOiBib29sZWFuO1xuIGNvbW1lbnQ6IHN0cmluZyB8IG51bGw7XG4gdXBkYXRlZEF0OiBEYXRlO1xuLy8gbmV4dElEOiBudW1iZXIgfCBudWxsO1xuLy8gcHJldklEOiBudW1iZXIgfCBudWxsO1xufVxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPHtzdGF0ZW1lbnQ6IFN0YXRlbWVudFByb3BzfT4gPSAoeyBzdGF0ZW1lbnQgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpO1xuICBsZXQgY29udGVudCA9IHN0YXRlbWVudC5jb250ZW50O1xuXG4gcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9J3N0YXRlbWVudEJveCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9zL1tzdGF0ZW1lbnRJRF0nLCBgL3MvJHtzdGF0ZW1lbnQuc3RhdGVtZW50SUR9YCl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZW1lbnQnIGlkPXtzdGF0ZW1lbnQuc3RhdGVtZW50SUQudG9TdHJpbmcoKX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnR9fS8+XG4gIDwvZGl2PlxuIClcbn1cblxuLy8gUHJldmlvdXNseSBJJ2QgaGFkIHRoaXMgaW46XG4vLyA8ZGl2IGlkPSdub3Rlcyc+XG4vLzxTdGF0ZW1lbnRBbm5vdGF0aW9uIGNvbW1lbnQ9e3N0YXRlbWVudC5jb21tZW50fSAvPlxuLy8gPC9kaXY+XG4vLyBIb3dldmVyLCBzaW5jZSBhbm5vdGF0aW9ucyB3aWxsIG5lZWQgdG8gYmUgZGlyZWN0bHkgZWRpdGFibGUsIGJlc3QgdG8gbGVhdmUgZm9yIGxhdGVyLlxuXG5cbmZ1bmN0aW9uIFN0YXRlbWVudEFubm90YXRpb24ocHJvcHM6IHsgY29tbWVudDogc3RyaW5nIHwgbnVsbCB9KSB7XG4gY29uc3QgY29tbWVudHMgPSBwcm9wcy5jb21tZW50O1xuIGlmIChjb21tZW50cyA9PT0gbnVsbCkge1xuICByZXR1cm4gKFxuICAgPD5cbiAgICBBZGQgYWJpbGl0eSB0byBhZGQgY29tbWVudHMuXG4gICA8Lz5cbiAgKVxuIH1cbiByZXR1cm4gKFxuICA8PlxuICAge2NvbW1lbnRzfVxuICA8Lz5cbiApXG59XG5cbmV4cG9ydCB0eXBlIEVuY29kaW5nUHJvcHMgPSB7XG4gcGFyZW50OiBudW1iZXIgfCBudWxsO1xuIGNvZGVVc2VkOiBzdHJpbmcgfCBudWxsO1xuIHBocmFzZTogc3RyaW5nIHwgbnVsbDtcbiBjb21tZW50czogc3RyaW5nIHwgbnVsbDtcbn1cblxuLy8gVE8gRE86IEJlc3Qgd2F5IHRvIGFsc28gcXVlcnkgYW5kIGxvYWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV4aXN0aW5nIGVuY29kaW5ncywgaWYgYW55IFxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnQiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwdXNoIiwic3RhdGVtZW50SUQiLCJpZCIsInRvU3RyaW5nIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJTdGF0ZW1lbnRBbm5vdGF0aW9uIiwicHJvcHMiLCJjb21tZW50cyIsImNvbW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Statement.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Statement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Statement */ \"./components/Statement.tsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ \"react-bootstrap/Card\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Desk = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: props.pile.map((statement)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default()), {\n                body: true,\n                className: \"statement\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Statement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    statement: statement\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 8\n                }, undefined)\n            }, statement.statementID, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async ()=>{\n    const res = await fetch(\"http://localhost:3001/all\");\n    //  console.log(await res.clone().text()) \n    const pile = await res.json();\n    console.log(pile);\n    return {\n        props: {\n            pile\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desk);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFMEM7QUFFNUI7QUFRdkMsTUFBTUcsSUFBSSxHQUFvQkMsQ0FBQUEsS0FBSyxHQUFJO0lBQ3JDLHFCQUNFLDhEQUFDQyxNQUFJO2tCQUNIRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxTQUFTLGlCQUN4Qiw4REFBQ04sNkRBQUk7Z0JBQUNPLElBQUk7Z0JBQTZCQyxTQUFTLEVBQUMsV0FBVzswQkFDM0QsNEVBQUNULDZEQUFTO29CQUFDTyxTQUFTLEVBQUVBLFNBQVM7Ozs7OzZCQUFJO2VBRHBCQSxTQUFTLENBQUNHLFdBQVc7Ozs7eUJBRS9CO1FBQ1AsQ0FBQzs7Ozs7aUJBQ0csQ0FDTjtDQUNGO0FBRU0sTUFBTUMsa0JBQWtCLEdBQXVCLFVBQVk7SUFDaEUsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztJQUN0RCwwQ0FBMEM7SUFDeEMsTUFBTVIsSUFBSSxHQUFHLE1BQU1PLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsSUFBSSxDQUFDO0lBQ2pCLE9BQU87UUFDTkYsS0FBSyxFQUNKO1lBQUVFLElBQUk7U0FBRTtLQUNUO0NBQ0Y7QUFFRCxpRUFBZUgsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IFN0YXRlbWVudCwgeyBTdGF0ZW1lbnRQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3RhdGVtZW50J1xuaW1wb3J0IHsgTmF2TWluaSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJ1xuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciwgU3RhY2sgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cblxudHlwZSBQcm9wcyA9IHtcbiAgcGlsZTogU3RhdGVtZW50UHJvcHNbXVxufVxuXG5jb25zdCBEZXNrOiBSZWFjdC5GQzxQcm9wcz4gPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgIHtwcm9wcy5waWxlLm1hcChzdGF0ZW1lbnQgPT4gKFxuICAgICAgPENhcmQgYm9keSBrZXk9e3N0YXRlbWVudC5zdGF0ZW1lbnRJRH0gY2xhc3NOYW1lPVwic3RhdGVtZW50XCI+XG4gICAgICAgPFN0YXRlbWVudCBzdGF0ZW1lbnQ9e3N0YXRlbWVudH0gLz5cbiAgICAgPC9DYXJkPlxuICAgICkpfVxuICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FsbCcpIFxuLy8gIGNvbnNvbGUubG9nKGF3YWl0IHJlcy5jbG9uZSgpLnRleHQoKSkgXG4gIGNvbnN0IHBpbGUgPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKHBpbGUpIFxuICByZXR1cm4ge1xuICAgcHJvcHM6IFxuICAgIHsgcGlsZSB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVza1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3RhdGVtZW50IiwiQ2FyZCIsIkRlc2siLCJwcm9wcyIsIm1haW4iLCJwaWxlIiwibWFwIiwic3RhdGVtZW50IiwiYm9keSIsImNsYXNzTmFtZSIsInN0YXRlbWVudElEIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Card");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();