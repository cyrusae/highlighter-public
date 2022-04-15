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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Statement = ({ statement  })=>{\n    console.log(statement);\n    let content = statement.content;\n    let statementIDforDiv = '\"' + statement.statementID + '\"';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"statementBox\",\n        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/[statementID]\", `/s/${statement.statementID}`)\n        ,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"statement\",\n            id: statementIDforDiv,\n            dangerouslySetInnerHTML: {\n                __html: content\n            }\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n// Previously I'd had this in:\n// <div id='notes'>\n//<StatementAnnotation comment={statement.comment} />\n// </div>\n// However, since annotations will need to be directly editable, best to leave for later.\nfunction StatementAnnotation(props) {\n    const comments = props.comment;\n    if (comments === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Add ability to add comments.\"\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: comments\n    }, void 0, false);\n}\n// TO DO: Best way to also query and load information about the existing encodings, if any \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statement);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRlbWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ087QUFVaEMsTUFBTUUsU0FBUyxHQUEwQyxDQUFDLEVBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQzFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDLENBQUM7SUFDdkIsSUFBSUcsT0FBTyxHQUFHSCxTQUFTLENBQUNHLE9BQU87SUFDL0IsSUFBSUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHSixTQUFTLENBQUNLLFdBQVcsR0FBRyxHQUFHO0lBRTFELHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxjQUFjO1FBQUNDLE9BQU8sRUFBRSxJQUFNVix1REFBVyxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxFQUFFRSxTQUFTLENBQUNLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFBQTtrQkFDekcsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFdBQVc7WUFBQ0csRUFBRSxFQUFFTixpQkFBaUI7WUFBRU8sdUJBQXVCLEVBQUU7Z0JBQUNDLE1BQU0sRUFBRVQsT0FBTzthQUFDOzs7OztxQkFBRzs7Ozs7aUJBQzNGLENBQ047Q0FDRDtBQUVELDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIscURBQXFEO0FBQ3JELFNBQVM7QUFDVCx5RkFBeUY7QUFHekYsU0FBU1UsbUJBQW1CLENBQUNDLEtBQWlDLEVBQUU7SUFDL0QsTUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLE9BQU87SUFDOUIsSUFBSUQsUUFBUSxLQUFLLElBQUksRUFBRTtRQUN0QixxQkFDQztzQkFBRSw4QkFFRjt5QkFBRyxDQUNIO0tBQ0Q7SUFDRCxxQkFDQztrQkFDRUEsUUFBUTtxQkFDUCxDQUNIO0NBQ0Q7QUFVRCwyRkFBMkY7QUFFM0YsaUVBQWVoQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL2NvbXBvbmVudHMvU3RhdGVtZW50LnRzeD9iY2QwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFN0YXRlbWVudFByb3BzID0ge1xuIHN0YXRlbWVudElEOiBudW1iZXI7XG4gY29udGVudDogc3RyaW5nO1xuIGNvZGVkOiBib29sZWFuO1xuIGNvbW1lbnQ6IHN0cmluZyB8IG51bGw7XG4gdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPHtzdGF0ZW1lbnQ6IFN0YXRlbWVudFByb3BzfT4gPSAoeyBzdGF0ZW1lbnQgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpO1xuICBsZXQgY29udGVudCA9IHN0YXRlbWVudC5jb250ZW50O1xuICBsZXQgc3RhdGVtZW50SURmb3JEaXYgPSAnXCInICsgc3RhdGVtZW50LnN0YXRlbWVudElEICsgJ1wiJztcblxuIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZW1lbnRCb3gnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcy9bc3RhdGVtZW50SURdJywgYC9zLyR7c3RhdGVtZW50LnN0YXRlbWVudElEfWApfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhdGVtZW50JyBpZD17c3RhdGVtZW50SURmb3JEaXZ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50fX0vPlxuICA8L2Rpdj5cbiApXG59XG5cbi8vIFByZXZpb3VzbHkgSSdkIGhhZCB0aGlzIGluOlxuLy8gPGRpdiBpZD0nbm90ZXMnPlxuLy88U3RhdGVtZW50QW5ub3RhdGlvbiBjb21tZW50PXtzdGF0ZW1lbnQuY29tbWVudH0gLz5cbi8vIDwvZGl2PlxuLy8gSG93ZXZlciwgc2luY2UgYW5ub3RhdGlvbnMgd2lsbCBuZWVkIHRvIGJlIGRpcmVjdGx5IGVkaXRhYmxlLCBiZXN0IHRvIGxlYXZlIGZvciBsYXRlci5cblxuXG5mdW5jdGlvbiBTdGF0ZW1lbnRBbm5vdGF0aW9uKHByb3BzOiB7IGNvbW1lbnQ6IHN0cmluZyB8IG51bGwgfSkge1xuIGNvbnN0IGNvbW1lbnRzID0gcHJvcHMuY29tbWVudDtcbiBpZiAoY29tbWVudHMgPT09IG51bGwpIHtcbiAgcmV0dXJuIChcbiAgIDw+XG4gICAgQWRkIGFiaWxpdHkgdG8gYWRkIGNvbW1lbnRzLlxuICAgPC8+XG4gIClcbiB9XG4gcmV0dXJuIChcbiAgPD5cbiAgIHtjb21tZW50c31cbiAgPC8+XG4gKVxufVxuXG5leHBvcnQgdHlwZSBFbmNvZGluZ1Byb3BzID0ge1xuIHBhcmVudDogbnVtYmVyIHwgbnVsbDtcbi8vIGlkOiBudW1iZXIgfCBudWxsO1xuIGNvZGVVc2VkOiBzdHJpbmcgfCBudWxsO1xuIHBocmFzZTogc3RyaW5nIHwgbnVsbDtcbiBjb21tZW50czogc3RyaW5nIHwgbnVsbDtcbn1cblxuLy8gVE8gRE86IEJlc3Qgd2F5IHRvIGFsc28gcXVlcnkgYW5kIGxvYWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV4aXN0aW5nIGVuY29kaW5ncywgaWYgYW55IFxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnQiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsInN0YXRlbWVudElEZm9yRGl2Iiwic3RhdGVtZW50SUQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJTdGF0ZW1lbnRBbm5vdGF0aW9uIiwicHJvcHMiLCJjb21tZW50cyIsImNvbW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Statement.tsx\n");

/***/ }),

/***/ "./pages/desk.tsx":
/*!************************!*\
  !*** ./pages/desk.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Statement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Statement */ \"./components/Statement.tsx\");\n\n\n\nconst Desk = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: props.pile.map((statement)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"statement\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Statement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    statement: statement\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/desk.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 8\n                }, undefined)\n            }, statement.statementID, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/desk.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/desk.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async ()=>{\n    const res = await fetch(\"http://localhost:3001/unseen\");\n    console.log(await res.clone().text());\n    const pile = await res.json();\n    console.log(pile);\n    return {\n        props: {\n            pile\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desk);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFMEM7QUFPbkUsTUFBTUUsSUFBSSxHQUFxQkMsQ0FBQUEsS0FBSyxHQUFJO0lBQ3RDLHFCQUNFLDhEQUFDQyxNQUFJO2tCQUNIRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxTQUFTLGlCQUN4Qiw4REFBQ0MsS0FBRztnQkFBNkJDLFNBQVMsRUFBQyxXQUFXOzBCQUNyRCw0RUFBQ1IsNkRBQVM7b0JBQUNNLFNBQVMsRUFBRUEsU0FBUzs7Ozs7NkJBQUk7ZUFEMUJBLFNBQVMsQ0FBQ0csV0FBVzs7Ozt5QkFFMUI7UUFDTixDQUFDOzs7OztpQkFDRyxDQUNOO0NBQ0Y7QUFFTSxNQUFNQyxrQkFBa0IsR0FBdUIsVUFBWTtJQUNoRSxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDO0lBQ3ZEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNSCxHQUFHLENBQUNJLEtBQUssRUFBRSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxNQUFNWixJQUFJLEdBQUcsTUFBTU8sR0FBRyxDQUFDTSxJQUFJLEVBQUU7SUFDN0JKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixJQUFJLENBQUM7SUFDakIsT0FBTztRQUNORixLQUFLLEVBQ0o7WUFBRUUsSUFBSTtTQUFFO0tBQ1Q7Q0FDRjtBQUVELGlFQUFlSCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2Rlc2sudHN4Pzg4YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBTdGF0ZW1lbnQsIHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL1N0YXRlbWVudCdcblxuXG50eXBlIFByb3BzID0ge1xuICBwaWxlOiBTdGF0ZW1lbnRQcm9wc1tdXG59XG5cbmNvbnN0IERlc2sgOiBSZWFjdC5GQzxQcm9wcz4gPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgIHtwcm9wcy5waWxlLm1hcChzdGF0ZW1lbnQgPT4gKFxuICAgICAgPGRpdiBrZXk9e3N0YXRlbWVudC5zdGF0ZW1lbnRJRH0gY2xhc3NOYW1lPVwic3RhdGVtZW50XCI+XG4gICAgICAgPFN0YXRlbWVudCBzdGF0ZW1lbnQ9e3N0YXRlbWVudH0gLz5cbiAgICAgPC9kaXY+XG4gICAgKSl9XG4gIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdW5zZWVuJykgXG4gIGNvbnNvbGUubG9nKGF3YWl0IHJlcy5jbG9uZSgpLnRleHQoKSkgXG4gIGNvbnN0IHBpbGUgPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKHBpbGUpIFxuICByZXR1cm4ge1xuICAgcHJvcHM6IFxuICAgIHsgcGlsZSB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVza1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3RhdGVtZW50IiwiRGVzayIsInByb3BzIiwibWFpbiIsInBpbGUiLCJtYXAiLCJzdGF0ZW1lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdGF0ZW1lbnRJRCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwiY29uc29sZSIsImxvZyIsImNsb25lIiwidGV4dCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/desk.tsx\n");

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