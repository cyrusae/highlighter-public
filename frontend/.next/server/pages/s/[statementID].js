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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//This isn't working yet\nasync function update(statementID) {\n    await fetch(`http://localhost:3001/upd8/${statementID}`, {\n        method: \"PUT\"\n    });\n    await next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/upd8/\");\n}\nasync function encode(statementID, phrase, code) {\n    await fetch(`http://localhost:3001/code/`);\n}\nconst Statement = (props)=>{\n    let content = props.content;\n    // if (!props.coded) {\n    //  props.coded = true;\n    // }\n    let statementIDasClass = '\"' + props.statementID + '\"';\n    // TODO: Add ability to fetch other factors (metadata) when those are added to schema.prisma\n    return(//TODO: make a layout for display (also, controls)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"statement\",\n        children: [\n            \"This isn't working yet.\",\n            content\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, undefined));\n};\n//QUESTION: Would it be too cheeky to integrate the controls into this page instead of a different component and use that to encode the ID on the control firing?\n//Actually that's probably the right way to do it\nconst getServerSideProps = async (context)=>{\n    const res = await fetch(`http://localhost:3001/${context.params.statementID}`);\n    console.log(await res.clone().text()) //will not show me it :(\n    ;\n    const pile = await res.json();\n    console.log(pile) //also will not show me it :(\n    ;\n    return {\n        props: {\n            pile\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statement);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDTztBQUloQyx3QkFBd0I7QUFFeEIsZUFBZUUsTUFBTSxDQUFDQyxXQUFtQixFQUFpQjtJQUN6RCxNQUFNQyxLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRUQsV0FBVyxDQUFDLENBQUMsRUFBRTtRQUN4REUsTUFBTSxFQUFFLEtBQUs7S0FDYixDQUFDO0lBQ0YsTUFBTUosdURBQVcsQ0FBQyxRQUFRLENBQUM7Q0FDM0I7QUFFRCxlQUFlTSxNQUFNLENBQUNKLFdBQW1CLEVBQUVLLE1BQWMsRUFBRUMsSUFBWSxFQUFpQjtJQUN2RixNQUFNTCxLQUFLLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0NBQzFDO0FBSUQsTUFBTU0sU0FBUyxHQUE2QkMsQ0FBQUEsS0FBSyxHQUFJO0lBQ3BELElBQUlDLE9BQU8sR0FBR0QsS0FBSyxDQUFDQyxPQUFPO0lBQzVCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsSUFBSTtJQUNILElBQUlDLGtCQUFrQixHQUFHLEdBQUcsR0FBR0YsS0FBSyxDQUFDUixXQUFXLEdBQUcsR0FBRztJQUV2RCw0RkFBNEY7SUFFM0YsT0FDQyxrREFBa0Q7a0JBQ2xELDhEQUFDVyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOztZQUFDLHlCQUUxQjtZQUFDSCxPQUFPOzs7Ozs7aUJBQ0gsRUFDTjtDQUNEO0FBRUQsaUtBQWlLO0FBQ2pLLGlEQUFpRDtBQUUxQyxNQUFNSSxrQkFBa0IsR0FBdUIsT0FBT0MsT0FBTyxHQUFLO0lBQ3hFLE1BQU1DLEdBQUcsR0FBRyxNQUFNZCxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsRUFBRWEsT0FBTyxDQUFDRSxNQUFNLENBQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlFaUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTUgsR0FBRyxDQUFDSSxLQUFLLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0I7O0lBQzlELE1BQU1DLElBQUksR0FBRyxNQUFNTixHQUFHLENBQUNPLElBQUksRUFBRTtJQUM3QkwsT0FBTyxDQUFDQyxHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDLDZCQUE2Qjs7SUFDL0MsT0FBTztRQUNOYixLQUFLLEVBQ0o7WUFBRWEsSUFBSTtTQUFFO0tBSVQ7Q0FDRDtBQUVELGlFQUFlZCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL3MvW3N0YXRlbWVudElEXS50c3g/ODA1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0ZW1lbnQnXG5cbi8vVGhpcyBpc24ndCB3b3JraW5nIHlldFxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUoc3RhdGVtZW50SUQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXBkOC8ke3N0YXRlbWVudElEfWAsIHtcbiAgbWV0aG9kOiAnUFVUJ1xuIH0pXG4gYXdhaXQgUm91dGVyLnB1c2goJy91cGQ4LycpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuY29kZShzdGF0ZW1lbnRJRDogbnVtYmVyLCBwaHJhc2U6IHN0cmluZywgY29kZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jb2RlL2ApXG59XG5cblxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPFN0YXRlbWVudFByb3BzPiA9IHByb3BzID0+IHtcbiBsZXQgY29udGVudCA9IHByb3BzLmNvbnRlbnQ7XG4vLyBpZiAoIXByb3BzLmNvZGVkKSB7XG4vLyAgcHJvcHMuY29kZWQgPSB0cnVlO1xuLy8gfVxuIGxldCBzdGF0ZW1lbnRJRGFzQ2xhc3MgPSAnXCInICsgcHJvcHMuc3RhdGVtZW50SUQgKyAnXCInO1xuXG4vLyBUT0RPOiBBZGQgYWJpbGl0eSB0byBmZXRjaCBvdGhlciBmYWN0b3JzIChtZXRhZGF0YSkgd2hlbiB0aG9zZSBhcmUgYWRkZWQgdG8gc2NoZW1hLnByaXNtYVxuXG4gcmV0dXJuIChcbiAgLy9UT0RPOiBtYWtlIGEgbGF5b3V0IGZvciBkaXNwbGF5IChhbHNvLCBjb250cm9scylcbiAgPGRpdiBjbGFzc05hbWU9J3N0YXRlbWVudCc+XG4gICBUaGlzIGlzbid0IHdvcmtpbmcgeWV0LlxuICAge2NvbnRlbnR9XG4gIDwvZGl2PlxuIClcbn1cblxuLy9RVUVTVElPTjogV291bGQgaXQgYmUgdG9vIGNoZWVreSB0byBpbnRlZ3JhdGUgdGhlIGNvbnRyb2xzIGludG8gdGhpcyBwYWdlIGluc3RlYWQgb2YgYSBkaWZmZXJlbnQgY29tcG9uZW50IGFuZCB1c2UgdGhhdCB0byBlbmNvZGUgdGhlIElEIG9uIHRoZSBjb250cm9sIGZpcmluZz9cbi8vQWN0dWFsbHkgdGhhdCdzIHByb2JhYmx5IHRoZSByaWdodCB3YXkgdG8gZG8gaXRcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxLyR7Y29udGV4dC5wYXJhbXMuc3RhdGVtZW50SUR9YCkgXG4gY29uc29sZS5sb2coYXdhaXQgcmVzLmNsb25lKCkudGV4dCgpKSAvL3dpbGwgbm90IHNob3cgbWUgaXQgOihcbiBjb25zdCBwaWxlID0gYXdhaXQgcmVzLmpzb24oKVxuIGNvbnNvbGUubG9nKHBpbGUpIC8vYWxzbyB3aWxsIG5vdCBzaG93IG1lIGl0IDooXG4gcmV0dXJuIHtcbiAgcHJvcHM6IFxuICAgeyBwaWxlIH1cbi8vICAgcHJvcHM6IHsgcGlsZToge1xuLy8gICAgdGVzdDogJ3Rlc3QnfSBcbi8vICAgfSxcbiB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudCAiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJ1cGRhdGUiLCJzdGF0ZW1lbnRJRCIsImZldGNoIiwibWV0aG9kIiwicHVzaCIsImVuY29kZSIsInBocmFzZSIsImNvZGUiLCJTdGF0ZW1lbnQiLCJwcm9wcyIsImNvbnRlbnQiLCJzdGF0ZW1lbnRJRGFzQ2xhc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImNsb25lIiwidGV4dCIsInBpbGUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

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