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
exports.id = "pages/s/[statementID]";
exports.ids = ["pages/s/[statementID]"];
exports.modules = {

/***/ "./pages/s/[statementID].tsx":
/*!***********************************!*\
  !*** ./pages/s/[statementID].tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//This isn't working yet\nasync function update(statementID) {\n    await fetch(`http://localhost:3001/upd8/${statementID}`, {\n        method: \"PUT\"\n    });\n    await next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/upd8/\");\n}\nasync function encode(statementID, phrase, code) {\n    await fetch(`http://localhost:3001/code/`);\n}\nconst Statement = ({ statement  })=>{\n    let content = statement.content;\n    let statementID = statement.statementID;\n    // if (!props.coded) {\n    //  props.coded = true;\n    // }\n    // let statementIDforDiv = '\"' + statement.statementID + '\"';\n    // TODO: Add ability to fetch other factors (metadata) when those are added to schema.prisma\n    return(//TODO: make a layout for display (also, controls)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"statement\",\n        dangerouslySetInnerHTML: {\n            __html: content\n        }\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, undefined));\n};\n//QUESTION: Would it be too cheeky to integrate the controls into this page instead of a different component and use that to encode the ID on the control firing?\n//Actually that's probably the right way to do it\nconst getServerSideProps = async (context)=>{\n    console.log(context.params);\n    const res = await fetch(`http://localhost:3001/statement/${context.params.statementID}`);\n    console.log(await res.clone().text());\n    const pile = await res.json();\n    return {\n        props: {\n            pile\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statement);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDTztBQUloQyx3QkFBd0I7QUFFeEIsZUFBZUUsTUFBTSxDQUFDQyxXQUFtQixFQUFpQjtJQUN6RCxNQUFNQyxLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRUQsV0FBVyxDQUFDLENBQUMsRUFBRTtRQUN4REUsTUFBTSxFQUFFLEtBQUs7S0FDYixDQUFDO0lBQ0YsTUFBTUosdURBQVcsQ0FBQyxRQUFRLENBQUM7Q0FDM0I7QUFFRCxlQUFlTSxNQUFNLENBQUNKLFdBQW1CLEVBQUVLLE1BQWMsRUFBRUMsSUFBWSxFQUFpQjtJQUN2RixNQUFNTCxLQUFLLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0NBQzFDO0FBSUQsTUFBTU0sU0FBUyxHQUEwQyxDQUFDLEVBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQzNFLElBQUlDLE9BQU8sR0FBR0QsU0FBUyxDQUFDQyxPQUFPO0lBQy9CLElBQUlULFdBQVcsR0FBV1EsU0FBUyxDQUFDUixXQUFXO0lBQ2hELHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsSUFBSTtJQUNKLDZEQUE2RDtJQUU3RCw0RkFBNEY7SUFFM0YsT0FDQyxrREFBa0Q7a0JBQ2xELDhEQUFDVSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXQztRQUFBQSx1QkFBdUIsRUFBRTtZQUFDQyxNQUFNLEVBQUVKLE9BQU87U0FBQzs7Ozs7aUJBQUcsRUFDdkU7Q0FDRDtBQUVELGlLQUFpSztBQUNqSyxpREFBaUQ7QUFFMUMsTUFBTUssa0JBQWtCLEdBQXVCLE9BQU9DLE9BQU8sR0FBSztJQUN2RUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csTUFBTSxDQUFDO0lBQzVCLE1BQU1DLEdBQUcsR0FBRyxNQUFNbEIsS0FBSyxDQUFDLENBQUMsZ0NBQWdDLEVBQUVjLE9BQU8sQ0FBQ0csTUFBTSxDQUFDbEIsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4RmdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU1FLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFLENBQUNDLElBQUksRUFBRSxDQUFDO0lBQ3JDLE1BQU1DLElBQUksR0FBRyxNQUFNSCxHQUFHLENBQUNJLElBQUksRUFBRTtJQUM3QixPQUFPO1FBQ05DLEtBQUssRUFDSjtZQUFFRixJQUFJO1NBQUU7S0FDVDtDQUNEO0FBRUQsaUVBQWVmLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvcy9bc3RhdGVtZW50SURdLnRzeD84MDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YXRlbWVudCdcblxuLy9UaGlzIGlzbid0IHdvcmtpbmcgeWV0XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZW1lbnRJRDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91cGQ4LyR7c3RhdGVtZW50SUR9YCwge1xuICBtZXRob2Q6ICdQVVQnXG4gfSlcbiBhd2FpdCBSb3V0ZXIucHVzaCgnL3VwZDgvJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5jb2RlKHN0YXRlbWVudElEOiBudW1iZXIsIHBocmFzZTogc3RyaW5nLCBjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2NvZGUvYClcbn1cblxuXG5cbmNvbnN0IFN0YXRlbWVudDogUmVhY3QuRkM8e3N0YXRlbWVudDogU3RhdGVtZW50UHJvcHN9PiA9ICh7IHN0YXRlbWVudCB9KSA9PiB7XG4gbGV0IGNvbnRlbnQgPSBzdGF0ZW1lbnQuY29udGVudDtcbiBsZXQgc3RhdGVtZW50SUQ6IG51bWJlciA9IHN0YXRlbWVudC5zdGF0ZW1lbnRJRDtcbi8vIGlmICghcHJvcHMuY29kZWQpIHtcbi8vICBwcm9wcy5jb2RlZCA9IHRydWU7XG4vLyB9XG4vLyBsZXQgc3RhdGVtZW50SURmb3JEaXYgPSAnXCInICsgc3RhdGVtZW50LnN0YXRlbWVudElEICsgJ1wiJztcblxuLy8gVE9ETzogQWRkIGFiaWxpdHkgdG8gZmV0Y2ggb3RoZXIgZmFjdG9ycyAobWV0YWRhdGEpIHdoZW4gdGhvc2UgYXJlIGFkZGVkIHRvIHNjaGVtYS5wcmlzbWFcblxuIHJldHVybiAoXG4gIC8vVE9ETzogbWFrZSBhIGxheW91dCBmb3IgZGlzcGxheSAoYWxzbywgY29udHJvbHMpXG4gIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZW1lbnQnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnR9fS8+XG4gKVxufVxuXG4vL1FVRVNUSU9OOiBXb3VsZCBpdCBiZSB0b28gY2hlZWt5IHRvIGludGVncmF0ZSB0aGUgY29udHJvbHMgaW50byB0aGlzIHBhZ2UgaW5zdGVhZCBvZiBhIGRpZmZlcmVudCBjb21wb25lbnQgYW5kIHVzZSB0aGF0IHRvIGVuY29kZSB0aGUgSUQgb24gdGhlIGNvbnRyb2wgZmlyaW5nP1xuLy9BY3R1YWxseSB0aGF0J3MgcHJvYmFibHkgdGhlIHJpZ2h0IHdheSB0byBkbyBpdFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyhjb250ZXh0LnBhcmFtcylcbiBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YXRlbWVudC8ke2NvbnRleHQucGFyYW1zLnN0YXRlbWVudElEfWApIFxuIGNvbnNvbGUubG9nKGF3YWl0IHJlcy5jbG9uZSgpLnRleHQoKSkgXG4gY29uc3QgcGlsZSA9IGF3YWl0IHJlcy5qc29uKClcbiByZXR1cm4ge1xuICBwcm9wczogXG4gICB7IHBpbGUgfVxuIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50ICJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsInVwZGF0ZSIsInN0YXRlbWVudElEIiwiZmV0Y2giLCJtZXRob2QiLCJwdXNoIiwiZW5jb2RlIiwicGhyYXNlIiwiY29kZSIsIlN0YXRlbWVudCIsInN0YXRlbWVudCIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIiwicmVzIiwiY2xvbmUiLCJ0ZXh0IiwicGlsZSIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/s/[statementID].tsx"));
module.exports = __webpack_exports__;

})();