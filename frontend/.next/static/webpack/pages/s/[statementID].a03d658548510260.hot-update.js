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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\n/* harmony import */ var _components_Workspace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Workspace */ \"./components/Workspace.tsx\");\n/* harmony import */ var _components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FlagTracker */ \"./components/FlagTracker.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Statement = function(param) {\n    var statement1 = param.statement, glossary = param.glossary;\n    _s();\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var sample = statement1.statement;\n    var statementID = sample[\"statementID\"];\n    // console.log('statementID attempts to log the current ID:'); console.log(statementID);\n    // let content = sample[\"content\"];\n    // console.log(\"statementID attempts to log the statement content:\"); console.log(content);\n    // let next = statement.nextID;\n    // console.log(\"statementID attempts to log next ID\"); console.log(next);\n    // let prev = statement.prevID;\n    // console.log(\"statementID attempts to log the previous ID\"); console.log(prev);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var statement = document.getElementById(\"statement\");\n        var phrases = statement.getElementsByTagName(\"mark\");\n        for(var i = 0; i < glossary.length; i++){\n            var coded = statement.getElementsByTagName(glossary[i].shortCode);\n            for(var i1 = 0; i1 < coded.length; i1++){\n                var phrase = coded[i1];\n                phrase.addEventListener(\"pointerenter\");\n            }\n        }\n    });\n    var tooltip = function() {\n        for(var i = 0; i < glossary.length; i++){\n            var short = glossary[i].shortCode;\n            var name = glossary[i].codeName;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"reader\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sample: sample,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 52,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, _this),\n                    \"    \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"coder\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        current: statementID,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        current: statementID\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 56,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 54,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                current: statement1\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, _this);\n};\n_s(Statement, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFJUztBQUNhO0FBQ1I7QUFDRDtBQUNDOztBQVF0RCxJQUFNTyxTQUFTLEdBQTZELGdCQUEyQjtRQUF6QkMsVUFBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDaEcsZ0ZBQWdGO0lBQ2hGLElBQUlDLE1BQU0sR0FBR0YsVUFBUyxDQUFDQSxTQUFTO0lBQ2hDLElBQUlHLFdBQVcsR0FBV0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNoRCx3RkFBd0Y7SUFDeEYsbUNBQW1DO0lBQ25DLDJGQUEyRjtJQUMzRiwrQkFBK0I7SUFDL0IseUVBQXlFO0lBQ3pFLCtCQUErQjtJQUMvQixpRkFBaUY7SUFFaEZULGdEQUFTLENBQUMsV0FBTTtRQUNmLElBQU1PLFNBQVMsR0FBR0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ3RELElBQU1DLE9BQU8sR0FBR04sU0FBUyxDQUFDTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFDdEQsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLFFBQVEsQ0FBQ1EsTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN6QyxJQUFNRSxLQUFLLEdBQUdWLFNBQVMsQ0FBQ08sb0JBQW9CLENBQUNOLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLENBQUNHLFNBQVMsQ0FBQztZQUNuRSxJQUFLLElBQUlILEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBR0UsS0FBSyxDQUFDRCxNQUFNLEVBQUVELEVBQUMsRUFBRSxDQUFFO2dCQUN0QyxJQUFJSSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0YsRUFBQyxDQUFDO2dCQUNyQkksTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUc7YUFDekM7U0FDRDtLQUNELENBQUM7SUFFRixJQUFNQyxPQUFPLEdBQUcsV0FBTTtRQUVyQixJQUFLLElBQUlOLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1AsUUFBUSxDQUFDUSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO1lBQ3pDLElBQU1PLEtBQUssR0FBR2QsUUFBUSxDQUFDTyxDQUFDLENBQUMsQ0FBQ0csU0FBUztZQUNuQyxJQUFNSyxJQUFJLEdBQUdmLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLENBQUNTLFFBQVE7U0FDakM7S0FDRDtJQUVELHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLEVBQUUsRUFBQyxRQUFROzswQkFDZCw4REFBQ0QsS0FBRztnQkFBQ0MsRUFBRSxFQUFDLFFBQVE7O2tDQUNmLDhEQUFDdEIsNkRBQVk7d0JBQUNLLE1BQU0sRUFBRUEsTUFBTTt3QkFBRUQsUUFBUSxFQUFFQSxRQUFROzs7Ozs2QkFBSTtrQ0FDckQsOERBQUNOLDREQUFRO3dCQUFDTSxRQUFRLEVBQUVBLFFBQVE7Ozs7OzZCQUFJO29CQUFBLE1BQUk7Ozs7OztxQkFBTTswQkFDNUMsOERBQUNpQixLQUFHO2dCQUFDQyxFQUFFLEVBQUMsT0FBTzs7a0NBQ1gsOERBQUN2Qiw4REFBWTt3QkFBQ3dCLE9BQU8sRUFBRWpCLFdBQVc7d0JBQUVGLFFBQVEsRUFBRUEsUUFBUTs7Ozs7NkJBQUk7a0NBQzNELDhEQUFDSCwrREFBVzt3QkFBQ3NCLE9BQU8sRUFBRWpCLFdBQVc7Ozs7OzZCQUFHOzs7Ozs7cUJBRS9COzBCQUNOLDhEQUFDVCx1REFBRztnQkFBQzBCLE9BQU8sRUFBRXBCLFVBQVM7Ozs7O3FCQUFJOzs7Ozs7YUFDdkIsQ0FDTjtDQUNEO0dBN0NLRCxTQUFTO0FBQVRBLEtBQUFBLFNBQVM7O0FBK0NmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3MvW3N0YXRlbWVudElEXS50c3g/ODA1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0ZW1lbnQnXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24nXG5pbXBvcnQgR2xvc3NhcnksIHsgQ29kZUxpc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dsb3NzYXJ5J1xuaW1wb3J0IENvZGVEcm9wZG93biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvZGVQaWNrZXInXG5pbXBvcnQgU3RhdGVtZW50Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV29ya3NwYWNlJ1xuaW1wb3J0IEZsYWdUcmFja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmxhZ1RyYWNrZXInXG5cbmV4cG9ydCB0eXBlIFJlYWRlclByb3BzID0ge1xuICBzdGF0ZW1lbnQ6IFN0YXRlbWVudFByb3BzW107XG4gIG5leHRJRDogbnVtYmVyIHwgbnVsbDtcbiAgcHJldklEOiBudW1iZXIgfCBudWxsO1xufVxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPHtzdGF0ZW1lbnQ6IFJlYWRlclByb3BzLCBnbG9zc2FyeTogQ29kZUxpc3RbXX0+ID0gKHtzdGF0ZW1lbnQsIGdsb3NzYXJ5fSkgPT4ge1xuIC8vIGNvbnNvbGUubG9nKFwiQ29udGVudHMgb2YgJ3Jlc3QnOlwiKTsgY29uc29sZS5sb2cocmVzdCk7IC8vdHJvdWJsZXNob290aW5nIHRvb2xcbiBsZXQgc2FtcGxlID0gc3RhdGVtZW50LnN0YXRlbWVudDtcbiBsZXQgc3RhdGVtZW50SUQ6IG51bWJlciA9IHNhbXBsZVtcInN0YXRlbWVudElEXCJdO1xuLy8gY29uc29sZS5sb2coJ3N0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgY3VycmVudCBJRDonKTsgY29uc29sZS5sb2coc3RhdGVtZW50SUQpO1xuLy8gbGV0IGNvbnRlbnQgPSBzYW1wbGVbXCJjb250ZW50XCJdO1xuLy8gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIHN0YXRlbWVudCBjb250ZW50OlwiKTsgY29uc29sZS5sb2coY29udGVudCk7XG4vLyBsZXQgbmV4dCA9IHN0YXRlbWVudC5uZXh0SUQ7XG4vLyBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyBuZXh0IElEXCIpOyBjb25zb2xlLmxvZyhuZXh0KTtcbi8vIGxldCBwcmV2ID0gc3RhdGVtZW50LnByZXZJRDtcbi8vIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBwcmV2aW91cyBJRFwiKTsgY29uc29sZS5sb2cocHJldik7XG5cbiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBzdGF0ZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGVtZW50Jyk7XG4gIGNvbnN0IHBocmFzZXMgPSBzdGF0ZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21hcmsnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9zc2FyeS5sZW5ndGg7IGkrKykge1xuICAgY29uc3QgY29kZWQgPSBzdGF0ZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZ2xvc3NhcnlbaV0uc2hvcnRDb2RlKTtcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcGhyYXNlID0gY29kZWRbaV07XG4gICAgcGhyYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsIClcbiAgIH1cbiAgfVxuIH0pXG5cbiBjb25zdCB0b29sdGlwID0gKCkgPT4ge1xuIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdsb3NzYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICBjb25zdCBzaG9ydCA9IGdsb3NzYXJ5W2ldLnNob3J0Q29kZTtcbiAgIGNvbnN0IG5hbWUgPSBnbG9zc2FyeVtpXS5jb2RlTmFtZTtcbiAgfVxuIH1cblxuIHJldHVybiAoXG4gIDxkaXYgaWQ9J3JlYWRlcic+XG4gICAgPGRpdiBpZD0nY2VudGVyJz5cbiAgICAgPFN0YXRlbWVudEJveCBzYW1wbGU9e3NhbXBsZX0gZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuXHQgIFx0PEdsb3NzYXJ5IGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz4gICAgPC9kaXY+XG5cdFx0PGRpdiBpZD0nY29kZXInPlxuICAgICAgPENvZGVEcm9wZG93biBjdXJyZW50PXtzdGF0ZW1lbnRJRH0gZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuICAgICA8RmxhZ1RyYWNrZXIgY3VycmVudD17c3RhdGVtZW50SUR9Lz5cblxuICAgIDwvZGl2PlxuICAgIDxOYXYgY3VycmVudD17c3RhdGVtZW50fSAvPlxuICA8L2Rpdj5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4gIHtcbi8vICB0cnkge1xuXHRjb25zdCBbc3RhdGVSZXMsIGdsb3NzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YXRlbWVudC8ke2NvbnRleHQucGFyYW1zLnN0YXRlbWVudElEfWApLFxuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2xvc3NgKV0pIFxuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0IGZvciBzdGF0ZVJlczpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHN0YXRlUmVzLmNsb25lKCkudGV4dCgpKSBcbi8vXHRjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQgZm9yIGdsb3NzUmVzOlwiKTsgY29uc29sZS5sb2coYXdhaXQgc3RhdGVSZXMuY2xvbmUoKS50ZXh0KCkpIFxuIGNvbnN0IFtzdGF0ZW1lbnQsIGdsb3NzYXJ5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtzdGF0ZVJlcy5qc29uKCksIGdsb3NzUmVzLmpzb24oKV0pXG4vL1x0Y29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBzdGF0ZW1lbnQ6XCIpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpOyBcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgZ2xvc3Nhcnk6XCIpOyBjb25zb2xlLmxvZyhnbG9zc2FyeSlcbiAgcmV0dXJuIHtcbiAgcHJvcHM6IFxuICAgeyBzdGF0ZW1lbnQsIGdsb3NzYXJ5IH1cbiB9O1xufSAgXG4vL30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJOYXYiLCJHbG9zc2FyeSIsIkNvZGVEcm9wZG93biIsIlN0YXRlbWVudEJveCIsIkZsYWdUcmFja2VyIiwiU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZ2xvc3NhcnkiLCJzYW1wbGUiLCJzdGF0ZW1lbnRJRCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwaHJhc2VzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwibGVuZ3RoIiwiY29kZWQiLCJzaG9ydENvZGUiLCJwaHJhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwidG9vbHRpcCIsInNob3J0IiwibmFtZSIsImNvZGVOYW1lIiwiZGl2IiwiaWQiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});