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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Statement = ({ statement  })=>{\n    //  console.log(statement);\n    let content = statement.content;\n    let IDstring = statement.statementID.toString();\n    //removed:\n    //  \n    // useEffect(() => {\n    //  let the = document.getElementById(IDstring);\n    //  the.addEventListener(//'onclick', () => {\n    //   Router.push('/s/[statementID]', `/s/${statement.statementID}`)\n    //  })\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: IDstring,\n        className: \"statementBox\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            body: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Text, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"statement\",\n                        id: statement.statementID.toString(),\n                        dangerouslySetInnerHTML: {\n                            __html: content\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 4\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 3\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/[statementID]\", `/s/${statement.statementID}`)\n                    ,\n                    children: \"view\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 3\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n            lineNumber: 31,\n            columnNumber: 2\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n        lineNumber: 30,\n        columnNumber: 2\n    }, undefined);\n};\n// Previously I'd had this in:\n// <div id='notes'>\n//<StatementAnnotation comment={statement.comment} />\n// </div>\n// However, since annotations will need to be directly editable, best to leave for later.\nfunction StatementAnnotation(props) {\n    const comments = props.comment;\n    if (comments === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Add ability to add comments.\"\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: comments\n    }, void 0, false);\n}\n// TO DO: Best way to also query and load information about the existing encodings, if any \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statement);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRlbWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDUjtBQUNlO0FBWS9DLE1BQU1JLFNBQVMsR0FBMEMsQ0FBQyxFQUFFQyxTQUFTLEdBQUUsR0FBSztJQUM1RSwyQkFBMkI7SUFDMUIsSUFBSUMsT0FBTyxHQUFHRCxTQUFTLENBQUNDLE9BQU87SUFDL0IsSUFBSUMsUUFBUSxHQUFHRixTQUFTLENBQUNHLFdBQVcsQ0FBQ0MsUUFBUSxFQUFFO0lBQ2hELFVBQVU7SUFDVixJQUFJO0lBQ0osb0JBQW9CO0lBQ3BCLGdEQUFnRDtJQUNoRCw2Q0FBNkM7SUFDN0MsbUVBQW1FO0lBQ25FLE1BQU07SUFDTixLQUFLO0lBR0oscUJBQ0EsOERBQUNDLEtBQUc7UUFBQ0MsRUFBRSxFQUFFSixRQUFRO1FBQUVLLFNBQVMsRUFBQyxjQUFjO2tCQUMzQyw0RUFBQ1QsaURBQUk7WUFBQ1UsSUFBSTs7OEJBQ1QsOERBQUNWLHNEQUFTOzhCQUNULDRFQUFDTyxLQUFHO3dCQUFDRSxTQUFTLEVBQUMsV0FBVzt3QkFBQ0QsRUFBRSxFQUFFTixTQUFTLENBQUNHLFdBQVcsQ0FBQ0MsUUFBUSxFQUFFO3dCQUFFTSx1QkFBdUIsRUFBRTs0QkFBQ0MsTUFBTSxFQUFFVixPQUFPO3lCQUFDOzs7OztpQ0FBRzs7Ozs7NkJBQ25HOzhCQUNaLDhEQUFDSixtREFBTTtvQkFBQ2UsT0FBTyxFQUFFLElBQU1oQix1REFBVyxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxFQUFFSSxTQUFTLENBQUNHLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQUE7OEJBQUUsTUFBSTs7Ozs7NkJBQVM7Ozs7OztxQkFDOUY7Ozs7O2lCQUNELENBQ0w7Q0FDRDtBQUVELDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIscURBQXFEO0FBQ3JELFNBQVM7QUFDVCx5RkFBeUY7QUFHekYsU0FBU1csbUJBQW1CLENBQUNDLEtBQWlDLEVBQUU7SUFDL0QsTUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLE9BQU87SUFDOUIsSUFBSUQsUUFBUSxLQUFLLElBQUksRUFBRTtRQUN0QixxQkFDQztzQkFBRSw4QkFFRjt5QkFBRyxDQUNIO0tBQ0Q7SUFDRCxxQkFDQztrQkFDRUEsUUFBUTtxQkFDUCxDQUNIO0NBQ0Q7QUFTRCwyRkFBMkY7QUFFM0YsaUVBQWVqQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL2NvbXBvbmVudHMvU3RhdGVtZW50LnRzeD9iY2QwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBCdXR0b24sIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgdHlwZSBTdGF0ZW1lbnRQcm9wcyA9IHtcbiBzdGF0ZW1lbnRJRDogbnVtYmVyO1xuIGNvbnRlbnQ6IHN0cmluZztcbiBjb2RlZDogYm9vbGVhbjtcbiBjb21tZW50OiBzdHJpbmcgfCBudWxsO1xuIHVwZGF0ZWRBdDogRGF0ZTtcbi8vIG5leHRJRDogbnVtYmVyIHwgbnVsbDtcbi8vIHByZXZJRDogbnVtYmVyIHwgbnVsbDtcbn1cblxuY29uc3QgU3RhdGVtZW50OiBSZWFjdC5GQzx7c3RhdGVtZW50OiBTdGF0ZW1lbnRQcm9wc30+ID0gKHsgc3RhdGVtZW50IH0pID0+IHtcbi8vICBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpO1xuIGxldCBjb250ZW50ID0gc3RhdGVtZW50LmNvbnRlbnQ7XG4gbGV0IElEc3RyaW5nID0gc3RhdGVtZW50LnN0YXRlbWVudElELnRvU3RyaW5nKClcbi8vcmVtb3ZlZDpcbi8vICBcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgbGV0IHRoZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElEc3RyaW5nKTtcbi8vICB0aGUuYWRkRXZlbnRMaXN0ZW5lcigvLydvbmNsaWNrJywgKCkgPT4ge1xuLy8gICBSb3V0ZXIucHVzaCgnL3MvW3N0YXRlbWVudElEXScsIGAvcy8ke3N0YXRlbWVudC5zdGF0ZW1lbnRJRH1gKVxuLy8gIH0pXG4vLyB9KVxuXG5cbiByZXR1cm4gKFxuIDxkaXYgaWQ9e0lEc3RyaW5nfSBjbGFzc05hbWU9J3N0YXRlbWVudEJveCcgPiBcbiA8Q2FyZCBib2R5PlxuICA8Q2FyZC5UZXh0PlxuICAgPGRpdiBjbGFzc05hbWU9J3N0YXRlbWVudCcgaWQ9e3N0YXRlbWVudC5zdGF0ZW1lbnRJRC50b1N0cmluZygpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudH19Lz5cbiAgPC9DYXJkLlRleHQ+XG4gIDxCdXR0b24gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9zL1tzdGF0ZW1lbnRJRF0nLCBgL3MvJHtzdGF0ZW1lbnQuc3RhdGVtZW50SUR9YCl9PnZpZXc8L0J1dHRvbj5cbiA8L0NhcmQ+XG4gPC9kaXY+XG4gKVxufVxuXG4vLyBQcmV2aW91c2x5IEknZCBoYWQgdGhpcyBpbjpcbi8vIDxkaXYgaWQ9J25vdGVzJz5cbi8vPFN0YXRlbWVudEFubm90YXRpb24gY29tbWVudD17c3RhdGVtZW50LmNvbW1lbnR9IC8+XG4vLyA8L2Rpdj5cbi8vIEhvd2V2ZXIsIHNpbmNlIGFubm90YXRpb25zIHdpbGwgbmVlZCB0byBiZSBkaXJlY3RseSBlZGl0YWJsZSwgYmVzdCB0byBsZWF2ZSBmb3IgbGF0ZXIuXG5cblxuZnVuY3Rpb24gU3RhdGVtZW50QW5ub3RhdGlvbihwcm9wczogeyBjb21tZW50OiBzdHJpbmcgfCBudWxsIH0pIHtcbiBjb25zdCBjb21tZW50cyA9IHByb3BzLmNvbW1lbnQ7XG4gaWYgKGNvbW1lbnRzID09PSBudWxsKSB7XG4gIHJldHVybiAoXG4gICA8PlxuICAgIEFkZCBhYmlsaXR5IHRvIGFkZCBjb21tZW50cy5cbiAgIDwvPlxuICApXG4gfVxuIHJldHVybiAoXG4gIDw+XG4gICB7Y29tbWVudHN9XG4gIDwvPlxuIClcbn1cblxuZXhwb3J0IHR5cGUgRW5jb2RpbmdQcm9wcyA9IHtcbiBwYXJlbnQ6IG51bWJlciB8IG51bGw7XG4gY29kZVVzZWQ6IHN0cmluZyB8IG51bGw7XG4gcGhyYXNlOiBzdHJpbmcgfCBudWxsO1xuIGNvbW1lbnRzOiBzdHJpbmcgfCBudWxsO1xufVxuXG4vLyBUTyBETzogQmVzdCB3YXkgdG8gYWxzbyBxdWVyeSBhbmQgbG9hZCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXhpc3RpbmcgZW5jb2RpbmdzLCBpZiBhbnkgXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudCJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsIkJ1dHRvbiIsIkNhcmQiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZW50IiwiSURzdHJpbmciLCJzdGF0ZW1lbnRJRCIsInRvU3RyaW5nIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJib2R5IiwiVGV4dCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwib25DbGljayIsInB1c2giLCJTdGF0ZW1lbnRBbm5vdGF0aW9uIiwicHJvcHMiLCJjb21tZW50cyIsImNvbW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Statement.tsx\n");

/***/ }),

/***/ "./pages/desk.tsx":
/*!************************!*\
  !*** ./pages/desk.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Statement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Statement */ \"./components/Statement.tsx\");\n\n\n\nconst Desk = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: props.pile.map((statement)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"statement\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Statement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    statement: statement\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/desk.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 8\n                }, undefined)\n            }, statement.statementID, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/desk.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/desk.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async ()=>{\n    const res = await fetch(\"http://localhost:3001/unseen\");\n    // console.log(await res.clone().text()) \n    const pile = await res.json();\n    // console.log(pile) \n    return {\n        props: {\n            pile\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desk);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFMEM7QUFRbkUsTUFBTUUsSUFBSSxHQUFvQkMsQ0FBQUEsS0FBSyxHQUFJO0lBQ3JDLHFCQUNFLDhEQUFDQyxNQUFJO2tCQUNIRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxTQUFTLGlCQUN4Qiw4REFBQ0MsS0FBRztnQkFBNkJDLFNBQVMsRUFBQyxXQUFXOzBCQUNyRCw0RUFBQ1IsNkRBQVM7b0JBQUNNLFNBQVMsRUFBRUEsU0FBUzs7Ozs7NkJBQUk7ZUFEMUJBLFNBQVMsQ0FBQ0csV0FBVzs7Ozt5QkFFMUI7UUFDTixDQUFDOzs7OztpQkFDRyxDQUNOO0NBQ0Y7QUFFTSxNQUFNQyxrQkFBa0IsR0FBdUIsVUFBWTtJQUNoRSxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDO0lBQ3hELHlDQUF5QztJQUN4QyxNQUFNUixJQUFJLEdBQUcsTUFBTU8sR0FBRyxDQUFDRSxJQUFJLEVBQUU7SUFDOUIscUJBQXFCO0lBQ3BCLE9BQU87UUFDTlgsS0FBSyxFQUNKO1lBQUVFLElBQUk7U0FBRTtLQUNUO0NBQ0Y7QUFFRCxpRUFBZUgsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9kZXNrLnRzeD84OGJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgU3RhdGVtZW50LCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdGF0ZW1lbnQnXG5pbXBvcnQgeyBSb3csIENvbCwgQ29udGFpbmVyLCBTdGFjayB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuXG50eXBlIFByb3BzID0ge1xuICBwaWxlOiBTdGF0ZW1lbnRQcm9wc1tdXG59XG5cbmNvbnN0IERlc2s6IFJlYWN0LkZDPFByb3BzPiA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAge3Byb3BzLnBpbGUubWFwKHN0YXRlbWVudCA9PiAoXG4gICAgICA8ZGl2IGtleT17c3RhdGVtZW50LnN0YXRlbWVudElEfSBjbGFzc05hbWU9XCJzdGF0ZW1lbnRcIj5cbiAgICAgICA8U3RhdGVtZW50IHN0YXRlbWVudD17c3RhdGVtZW50fSAvPlxuICAgICA8L2Rpdj5cbiAgICApKX1cbiAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91bnNlZW4nKSBcbiAvLyBjb25zb2xlLmxvZyhhd2FpdCByZXMuY2xvbmUoKS50ZXh0KCkpIFxuICBjb25zdCBwaWxlID0gYXdhaXQgcmVzLmpzb24oKVxuIC8vIGNvbnNvbGUubG9nKHBpbGUpIFxuICByZXR1cm4ge1xuICAgcHJvcHM6IFxuICAgIHsgcGlsZSB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVza1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3RhdGVtZW50IiwiRGVzayIsInByb3BzIiwibWFpbiIsInBpbGUiLCJtYXAiLCJzdGF0ZW1lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdGF0ZW1lbnRJRCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/desk.tsx\n");

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

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