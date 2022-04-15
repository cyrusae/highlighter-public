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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//This isn't working yet\nasync function update(statementID) {\n    await fetch(`http://localhost:3001/upd8/${statementID}`, {\n        method: \"PUT\"\n    });\n    await next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/upd8/\");\n}\nasync function encode(statementID, phrase, code) {\n    await fetch(`http://localhost:3001/code/`);\n}\nconst Statement = ({ statement , ...rest })=>{\n    console.log(\"Contents of 'rest':\");\n    console.log(rest);\n    let content = statement.content;\n    let statementID = statement.statementID;\n    // if (!props.coded) {\n    //  props.coded = true;\n    // }\n    // let statementIDforDiv = '\"' + statement.statementID + '\"';\n    // TODO: Add ability to fetch other factors (metadata) when those are added to schema.prisma\n    return(//TODO: make a layout for display (also, controls)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"statement\",\n        dangerouslySetInnerHTML: {\n            __html: content\n        }\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statement);\n//QUESTION: Would it be too cheeky to integrate the controls into this page instead of a different component and use that to encode the ID on the control firing?\n//Actually that's probably the right way to do it\n//nvm it can receive props better on its own I think? Unsure. Example at p/ doesn't help much.\nconst getServerSideProps = async (context)=>{\n    //  try {\n    const res = await fetch(`http://localhost:3001/statement/${context.params.statementID}`);\n    console.log(\"here's await res clone text output:\");\n    console.log(await res.clone().text());\n    const statement = await res.json();\n    console.log(\"here is the statement:\");\n    console.log(statement);\n    // catch (e) {console.log(e)} //where can this go to not break things?\n    return {\n        props: {\n            statement\n        }\n    };\n} //}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDTztBQUloQyx3QkFBd0I7QUFFeEIsZUFBZUUsTUFBTSxDQUFDQyxXQUFtQixFQUFpQjtJQUN6RCxNQUFNQyxLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRUQsV0FBVyxDQUFDLENBQUMsRUFBRTtRQUN4REUsTUFBTSxFQUFFLEtBQUs7S0FDYixDQUFDO0lBQ0YsTUFBTUosdURBQVcsQ0FBQyxRQUFRLENBQUM7Q0FDM0I7QUFFRCxlQUFlTSxNQUFNLENBQUNKLFdBQW1CLEVBQUVLLE1BQWMsRUFBRUMsSUFBWSxFQUFpQjtJQUN2RixNQUFNTCxLQUFLLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0NBQzFDO0FBSUQsTUFBTU0sU0FBUyxHQUEwQyxDQUFDLEVBQUVDLFNBQVMsR0FBRSxHQUFHQyxJQUFJLEVBQUUsR0FBSztJQUNuRkMsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBQ25CLElBQUlHLE9BQU8sR0FBR0osU0FBUyxDQUFDSSxPQUFPO0lBQy9CLElBQUlaLFdBQVcsR0FBV1EsU0FBUyxDQUFDUixXQUFXO0lBQ2hELHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsSUFBSTtJQUNKLDZEQUE2RDtJQUU3RCw0RkFBNEY7SUFFM0YsT0FDQyxrREFBa0Q7a0JBQ2xELDhEQUFDYSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXQztRQUFBQSx1QkFBdUIsRUFBRTtZQUFDQyxNQUFNLEVBQUVKLE9BQU87U0FBQzs7Ozs7aUJBQUcsRUFDdkU7Q0FDRDtBQUVELGlFQUFlTCxTQUFTO0FBRXhCLGlLQUFpSztBQUNqSyxpREFBaUQ7QUFDakQsOEZBQThGO0FBRXZGLE1BQU1VLGtCQUFrQixHQUF1QixPQUFPQyxPQUFPLEdBQU07SUFDMUUsU0FBUztJQUNMLE1BQU1DLEdBQUcsR0FBRyxNQUFNbEIsS0FBSyxDQUFDLENBQUMsZ0NBQWdDLEVBQUVpQixPQUFPLENBQUNFLE1BQU0sQ0FBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUZVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDcERELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU1RLEdBQUcsQ0FBQ0UsS0FBSyxFQUFFLENBQUNDLElBQUksRUFBRSxDQUFDO0lBQ3JDLE1BQU1kLFNBQVMsR0FBRyxNQUFNVyxHQUFHLENBQUNJLElBQUksRUFBRTtJQUNsQ2IsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7SUFDckNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTLENBQUM7SUFDdkIsc0VBQXNFO0lBQ3BFLE9BQU87UUFDUGdCLEtBQUssRUFDSjtZQUFFaEIsU0FBUztTQUFFO0tBQ2QsQ0FBQztDQUNGLENBQ0QsR0FBRztBQURGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL3MvW3N0YXRlbWVudElEXS50c3g/ODA1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0ZW1lbnQnXG5cbi8vVGhpcyBpc24ndCB3b3JraW5nIHlldFxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUoc3RhdGVtZW50SUQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXBkOC8ke3N0YXRlbWVudElEfWAsIHtcbiAgbWV0aG9kOiAnUFVUJ1xuIH0pXG4gYXdhaXQgUm91dGVyLnB1c2goJy91cGQ4LycpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuY29kZShzdGF0ZW1lbnRJRDogbnVtYmVyLCBwaHJhc2U6IHN0cmluZywgY29kZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jb2RlL2ApXG59XG5cblxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPHtzdGF0ZW1lbnQ6IFN0YXRlbWVudFByb3BzfT4gPSAoeyBzdGF0ZW1lbnQsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkNvbnRlbnRzIG9mICdyZXN0JzpcIik7XG4gIGNvbnNvbGUubG9nKHJlc3QpO1xuIGxldCBjb250ZW50ID0gc3RhdGVtZW50LmNvbnRlbnQ7XG4gbGV0IHN0YXRlbWVudElEOiBudW1iZXIgPSBzdGF0ZW1lbnQuc3RhdGVtZW50SUQ7XG4vLyBpZiAoIXByb3BzLmNvZGVkKSB7XG4vLyAgcHJvcHMuY29kZWQgPSB0cnVlO1xuLy8gfVxuLy8gbGV0IHN0YXRlbWVudElEZm9yRGl2ID0gJ1wiJyArIHN0YXRlbWVudC5zdGF0ZW1lbnRJRCArICdcIic7XG5cbi8vIFRPRE86IEFkZCBhYmlsaXR5IHRvIGZldGNoIG90aGVyIGZhY3RvcnMgKG1ldGFkYXRhKSB3aGVuIHRob3NlIGFyZSBhZGRlZCB0byBzY2hlbWEucHJpc21hXG5cbiByZXR1cm4gKFxuICAvL1RPRE86IG1ha2UgYSBsYXlvdXQgZm9yIGRpc3BsYXkgKGFsc28sIGNvbnRyb2xzKVxuICA8ZGl2IGNsYXNzTmFtZT0nc3RhdGVtZW50J2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50fX0vPlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50XG5cbi8vUVVFU1RJT046IFdvdWxkIGl0IGJlIHRvbyBjaGVla3kgdG8gaW50ZWdyYXRlIHRoZSBjb250cm9scyBpbnRvIHRoaXMgcGFnZSBpbnN0ZWFkIG9mIGEgZGlmZmVyZW50IGNvbXBvbmVudCBhbmQgdXNlIHRoYXQgdG8gZW5jb2RlIHRoZSBJRCBvbiB0aGUgY29udHJvbCBmaXJpbmc/XG4vL0FjdHVhbGx5IHRoYXQncyBwcm9iYWJseSB0aGUgcmlnaHQgd2F5IHRvIGRvIGl0XG4vL252bSBpdCBjYW4gcmVjZWl2ZSBwcm9wcyBiZXR0ZXIgb24gaXRzIG93biBJIHRoaW5rPyBVbnN1cmUuIEV4YW1wbGUgYXQgcC8gZG9lc24ndCBoZWxwIG11Y2guXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiAge1xuLy8gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdGF0ZW1lbnQvJHtjb250ZXh0LnBhcmFtcy5zdGF0ZW1lbnRJRH1gKSBcbiAgY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0OlwiKTtcbiBjb25zb2xlLmxvZyhhd2FpdCByZXMuY2xvbmUoKS50ZXh0KCkpIFxuIGNvbnN0IHN0YXRlbWVudCA9IGF3YWl0IHJlcy5qc29uKClcbiBjb25zb2xlLmxvZyhcImhlcmUgaXMgdGhlIHN0YXRlbWVudDpcIilcbiBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpXG4vLyBjYXRjaCAoZSkge2NvbnNvbGUubG9nKGUpfSAvL3doZXJlIGNhbiB0aGlzIGdvIHRvIG5vdCBicmVhayB0aGluZ3M/XG4gIHJldHVybiB7XG4gIHByb3BzOiBcbiAgIHsgc3RhdGVtZW50IH1cbiB9O1xufSAgXG4vL30iXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJ1cGRhdGUiLCJzdGF0ZW1lbnRJRCIsImZldGNoIiwibWV0aG9kIiwicHVzaCIsImVuY29kZSIsInBocmFzZSIsImNvZGUiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJyZXN0IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJwYXJhbXMiLCJjbG9uZSIsInRleHQiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

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