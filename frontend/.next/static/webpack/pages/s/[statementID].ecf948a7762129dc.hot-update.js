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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\n/* harmony import */ var _components_Workspace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Workspace */ \"./components/Workspace.tsx\");\n/* harmony import */ var _components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FlagTracker */ \"./components/FlagTracker.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Statement = function(param) {\n    var statement1 = param.statement, glossary = param.glossary;\n    _s();\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var sample = statement1.statement;\n    var statementID = sample[\"statementID\"];\n    // console.log('statementID attempts to log the current ID:'); console.log(statementID);\n    // let content = sample[\"content\"];\n    // console.log(\"statementID attempts to log the statement content:\"); console.log(content);\n    // let next = statement.nextID;\n    // console.log(\"statementID attempts to log next ID\"); console.log(next);\n    // let prev = statement.prevID;\n    // console.log(\"statementID attempts to log the previous ID\"); console.log(prev);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var statement = document.getElementById(\"statement\");\n        var phrases = statement.getElementsByTagName(\"mark\");\n        for(var i = 0; i < glossary.length; i++){\n            var coded = statement.getElementsByTagName(glossary[i].shortCode);\n            for(var i1 = 0; i1 < coded.length; i1++){\n                var phrase = coded[i1];\n                var words = phrase.addEventListener(\"pointerenter\", function(e) {});\n            }\n        }\n    });\n    var tooltip = function() {\n        for(var i = 0; i < glossary.length; i++){\n            var short = glossary[i].shortCode;\n            var name = glossary[i].codeName;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"reader\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sample: sample,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 56,\n                        columnNumber: 5\n                    }, _this),\n                    \"    \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 54,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"coder\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        current: statementID,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        current: statementID\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 59,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 57,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                current: statement1\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 53,\n        columnNumber: 3\n    }, _this);\n};\n_s(Statement, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFJUztBQUNhO0FBQ1I7QUFDRDtBQUNDOztBQVF0RCxJQUFNTyxTQUFTLEdBQTZELGdCQUEyQjtRQUF6QkMsVUFBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDaEcsZ0ZBQWdGO0lBQ2hGLElBQUlDLE1BQU0sR0FBR0YsVUFBUyxDQUFDQSxTQUFTO0lBQ2hDLElBQUlHLFdBQVcsR0FBV0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNoRCx3RkFBd0Y7SUFDeEYsbUNBQW1DO0lBQ25DLDJGQUEyRjtJQUMzRiwrQkFBK0I7SUFDL0IseUVBQXlFO0lBQ3pFLCtCQUErQjtJQUMvQixpRkFBaUY7SUFFaEZULGdEQUFTLENBQUMsV0FBTTtRQUNmLElBQU1PLFNBQVMsR0FBR0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ3RELElBQU1DLE9BQU8sR0FBR04sU0FBUyxDQUFDTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFDdEQsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLFFBQVEsQ0FBQ1EsTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN6QyxJQUFNRSxLQUFLLEdBQUdWLFNBQVMsQ0FBQ08sb0JBQW9CLENBQUNOLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLENBQUNHLFNBQVMsQ0FBQztZQUNuRSxJQUFLLElBQUlILEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBR0UsS0FBSyxDQUFDRCxNQUFNLEVBQUVELEVBQUMsRUFBRSxDQUFFO2dCQUN0QyxJQUFJSSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0YsRUFBQyxDQUFDO2dCQUNyQixJQUFJSyxLQUFLLEdBQ1RELE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFNBQUNDLENBQUMsRUFBSyxFQUU5QyxDQUFDO2FBQ0Y7U0FDRDtLQUNELENBQUM7SUFFRixJQUFNQyxPQUFPLEdBQUcsV0FBTTtRQUVyQixJQUFLLElBQUlSLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1AsUUFBUSxDQUFDUSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO1lBQ3pDLElBQU1TLEtBQUssR0FBR2hCLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLENBQUNHLFNBQVM7WUFDbkMsSUFBTU8sSUFBSSxHQUFHakIsUUFBUSxDQUFDTyxDQUFDLENBQUMsQ0FBQ1csUUFBUTtTQUNqQztLQUNEO0lBRUQscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLFFBQVE7OzBCQUNkLDhEQUFDRCxLQUFHO2dCQUFDQyxFQUFFLEVBQUMsUUFBUTs7a0NBQ2YsOERBQUN4Qiw2REFBWTt3QkFBQ0ssTUFBTSxFQUFFQSxNQUFNO3dCQUFFRCxRQUFRLEVBQUVBLFFBQVE7Ozs7OzZCQUFJO2tDQUNyRCw4REFBQ04sNERBQVE7d0JBQUNNLFFBQVEsRUFBRUEsUUFBUTs7Ozs7NkJBQUk7b0JBQUEsTUFBSTs7Ozs7O3FCQUFNOzBCQUM1Qyw4REFBQ21CLEtBQUc7Z0JBQUNDLEVBQUUsRUFBQyxPQUFPOztrQ0FDWCw4REFBQ3pCLDhEQUFZO3dCQUFDMEIsT0FBTyxFQUFFbkIsV0FBVzt3QkFBRUYsUUFBUSxFQUFFQSxRQUFROzs7Ozs2QkFBSTtrQ0FDM0QsOERBQUNILCtEQUFXO3dCQUFDd0IsT0FBTyxFQUFFbkIsV0FBVzs7Ozs7NkJBQUc7Ozs7OztxQkFFL0I7MEJBQ04sOERBQUNULHVEQUFHO2dCQUFDNEIsT0FBTyxFQUFFdEIsVUFBUzs7Ozs7cUJBQUk7Ozs7OzthQUN2QixDQUNOO0NBQ0Q7R0FoREtELFNBQVM7QUFBVEEsS0FBQUEsU0FBUzs7QUFrRGYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcy9bc3RhdGVtZW50SURdLnRzeD84MDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YXRlbWVudCdcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCBHbG9zc2FyeSwgeyBDb2RlTGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2xvc3NhcnknXG5pbXBvcnQgQ29kZURyb3Bkb3duIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVBpY2tlcidcbmltcG9ydCBTdGF0ZW1lbnRCb3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Xb3Jrc3BhY2UnXG5pbXBvcnQgRmxhZ1RyYWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GbGFnVHJhY2tlcidcblxuZXhwb3J0IHR5cGUgUmVhZGVyUHJvcHMgPSB7XG4gIHN0YXRlbWVudDogU3RhdGVtZW50UHJvcHNbXTtcbiAgbmV4dElEOiBudW1iZXIgfCBudWxsO1xuICBwcmV2SUQ6IG51bWJlciB8IG51bGw7XG59XG5cbmNvbnN0IFN0YXRlbWVudDogUmVhY3QuRkM8e3N0YXRlbWVudDogUmVhZGVyUHJvcHMsIGdsb3NzYXJ5OiBDb2RlTGlzdFtdfT4gPSAoe3N0YXRlbWVudCwgZ2xvc3Nhcnl9KSA9PiB7XG4gLy8gY29uc29sZS5sb2coXCJDb250ZW50cyBvZiAncmVzdCc6XCIpOyBjb25zb2xlLmxvZyhyZXN0KTsgLy90cm91Ymxlc2hvb3RpbmcgdG9vbFxuIGxldCBzYW1wbGUgPSBzdGF0ZW1lbnQuc3RhdGVtZW50O1xuIGxldCBzdGF0ZW1lbnRJRDogbnVtYmVyID0gc2FtcGxlW1wic3RhdGVtZW50SURcIl07XG4vLyBjb25zb2xlLmxvZygnc3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBjdXJyZW50IElEOicpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnRJRCk7XG4vLyBsZXQgY29udGVudCA9IHNhbXBsZVtcImNvbnRlbnRcIl07XG4vLyBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgc3RhdGVtZW50IGNvbnRlbnQ6XCIpOyBjb25zb2xlLmxvZyhjb250ZW50KTtcbi8vIGxldCBuZXh0ID0gc3RhdGVtZW50Lm5leHRJRDtcbi8vIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIG5leHQgSURcIik7IGNvbnNvbGUubG9nKG5leHQpO1xuLy8gbGV0IHByZXYgPSBzdGF0ZW1lbnQucHJldklEO1xuLy8gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIHByZXZpb3VzIElEXCIpOyBjb25zb2xlLmxvZyhwcmV2KTtcblxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gIGNvbnN0IHN0YXRlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZW1lbnQnKTtcbiAgY29uc3QgcGhyYXNlcyA9IHN0YXRlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFyaycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdsb3NzYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICBjb25zdCBjb2RlZCA9IHN0YXRlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShnbG9zc2FyeVtpXS5zaG9ydENvZGUpO1xuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwaHJhc2UgPSBjb2RlZFtpXTtcbiAgICBsZXQgd29yZHMgPSBcbiAgICBwaHJhc2UuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmVudGVyJywgKGUpID0+IHtcblxuICAgIH0pXG4gICB9XG4gIH1cbiB9KVxuXG4gY29uc3QgdG9vbHRpcCA9ICgpID0+IHtcbiBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9zc2FyeS5sZW5ndGg7IGkrKykge1xuICAgY29uc3Qgc2hvcnQgPSBnbG9zc2FyeVtpXS5zaG9ydENvZGU7XG4gICBjb25zdCBuYW1lID0gZ2xvc3NhcnlbaV0uY29kZU5hbWU7XG4gIH1cbiB9XG5cbiByZXR1cm4gKFxuICA8ZGl2IGlkPSdyZWFkZXInPlxuICAgIDxkaXYgaWQ9J2NlbnRlcic+XG4gICAgIDxTdGF0ZW1lbnRCb3ggc2FtcGxlPXtzYW1wbGV9IGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz5cblx0ICBcdDxHbG9zc2FyeSBnbG9zc2FyeT17Z2xvc3Nhcnl9IC8+ICAgIDwvZGl2PlxuXHRcdDxkaXYgaWQ9J2NvZGVyJz5cbiAgICAgIDxDb2RlRHJvcGRvd24gY3VycmVudD17c3RhdGVtZW50SUR9IGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz5cbiAgICAgPEZsYWdUcmFja2VyIGN1cnJlbnQ9e3N0YXRlbWVudElEfS8+XG5cbiAgICA8L2Rpdj5cbiAgICA8TmF2IGN1cnJlbnQ9e3N0YXRlbWVudH0gLz5cbiAgPC9kaXY+XG4gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+ICB7XG4vLyAgdHJ5IHtcblx0Y29uc3QgW3N0YXRlUmVzLCBnbG9zc1Jlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0ZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdGF0ZW1lbnQvJHtjb250ZXh0LnBhcmFtcy5zdGF0ZW1lbnRJRH1gKSxcblx0XHRmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2dsb3NzYCldKSBcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSdzIGF3YWl0IHJlcyBjbG9uZSB0ZXh0IG91dHB1dCBmb3Igc3RhdGVSZXM6XCIpOyBjb25zb2xlLmxvZyhhd2FpdCBzdGF0ZVJlcy5jbG9uZSgpLnRleHQoKSkgXG4vL1x0Y29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0IGZvciBnbG9zc1JlczpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHN0YXRlUmVzLmNsb25lKCkudGV4dCgpKSBcbiBjb25zdCBbc3RhdGVtZW50LCBnbG9zc2FyeV0gPSBhd2FpdCBQcm9taXNlLmFsbChbc3RhdGVSZXMuanNvbigpLCBnbG9zc1Jlcy5qc29uKCldKVxuLy9cdGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgc3RhdGVtZW50OlwiKTsgY29uc29sZS5sb2coc3RhdGVtZW50KTsgXG4vLyBjb25zb2xlLmxvZyhcImhlcmUgaXMgdGhlIGdsb3NzYXJ5OlwiKTsgY29uc29sZS5sb2coZ2xvc3NhcnkpXG4gIHJldHVybiB7XG4gIHByb3BzOiBcbiAgIHsgc3RhdGVtZW50LCBnbG9zc2FyeSB9XG4gfTtcbn0gIFxuLy99Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTmF2IiwiR2xvc3NhcnkiLCJDb2RlRHJvcGRvd24iLCJTdGF0ZW1lbnRCb3giLCJGbGFnVHJhY2tlciIsIlN0YXRlbWVudCIsInN0YXRlbWVudCIsImdsb3NzYXJ5Iiwic2FtcGxlIiwic3RhdGVtZW50SUQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGhyYXNlcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaSIsImxlbmd0aCIsImNvZGVkIiwic2hvcnRDb2RlIiwicGhyYXNlIiwid29yZHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRvb2x0aXAiLCJzaG9ydCIsIm5hbWUiLCJjb2RlTmFtZSIsImRpdiIsImlkIiwiY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});