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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\n/* harmony import */ var _components_Workspace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Workspace */ \"./components/Workspace.tsx\");\n/* harmony import */ var _components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FlagTracker */ \"./components/FlagTracker.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Statement = function(param) {\n    var statement1 = param.statement, glossary = param.glossary;\n    _s();\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var sample = statement1.statement;\n    var statementID = sample[\"statementID\"];\n    // console.log('statementID attempts to log the current ID:'); console.log(statementID);\n    // let content = sample[\"content\"];\n    // console.log(\"statementID attempts to log the statement content:\"); console.log(content);\n    // let next = statement.nextID;\n    // console.log(\"statementID attempts to log next ID\"); console.log(next);\n    // let prev = statement.prevID;\n    // console.log(\"statementID attempts to log the previous ID\"); console.log(prev);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var statement = document.getElementById(\"statement\");\n        var phrases = statement.getElementsByTagName(\"mark\");\n        for(var i = 0; i < glossary.length; i++){\n            var coded = statement.getElementsByTagName(glossary[i].shortCode);\n            for(var i1 = 0; i1 < coded.length; i1++){\n                var phrase = coded[i1];\n            }\n        }\n    });\n    var tooltip = function() {\n        for(var i = 0; i < glossary.length; i++){\n            var short = glossary[i].shortCode;\n            var name = glossary[i].codeName;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"reader\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sample: sample,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 52,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, _this),\n                    \"    \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"coder\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        current: statementID,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        current: statementID\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 56,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 54,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                current: statement1\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, _this);\n};\n_s(Statement, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFJUztBQUNhO0FBQ1I7QUFDRDtBQUNDOztBQVF0RCxJQUFNTyxTQUFTLEdBQTZELGdCQUEyQjtRQUF6QkMsVUFBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDaEcsZ0ZBQWdGO0lBQ2hGLElBQUlDLE1BQU0sR0FBR0YsVUFBUyxDQUFDQSxTQUFTO0lBQ2hDLElBQUlHLFdBQVcsR0FBV0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNoRCx3RkFBd0Y7SUFDeEYsbUNBQW1DO0lBQ25DLDJGQUEyRjtJQUMzRiwrQkFBK0I7SUFDL0IseUVBQXlFO0lBQ3pFLCtCQUErQjtJQUMvQixpRkFBaUY7SUFFaEZULGdEQUFTLENBQUMsV0FBTTtRQUNmLElBQU1PLFNBQVMsR0FBR0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ3RELElBQU1DLE9BQU8sR0FBR04sU0FBUyxDQUFDTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFDdEQsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLFFBQVEsQ0FBQ1EsTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN6QyxJQUFNRSxLQUFLLEdBQUdWLFNBQVMsQ0FBQ08sb0JBQW9CLENBQUNOLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLENBQUNHLFNBQVMsQ0FBQztZQUNuRSxJQUFLLElBQUlILEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBR0UsS0FBSyxDQUFDRCxNQUFNLEVBQUVELEVBQUMsRUFBRSxDQUFFO2dCQUN0QyxJQUFJSSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0YsRUFBQyxDQUFDO2FBRXJCO1NBQ0Q7S0FDRCxDQUFDO0lBRUYsSUFBTUssT0FBTyxHQUFHLFdBQU07UUFFckIsSUFBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLFFBQVEsQ0FBQ1EsTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtZQUN6QyxJQUFNTSxLQUFLLEdBQUdiLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLENBQUNHLFNBQVM7WUFDbkMsSUFBTUksSUFBSSxHQUFHZCxRQUFRLENBQUNPLENBQUMsQ0FBQyxDQUFDUSxRQUFRO1NBQ2pDO0tBQ0Q7SUFFRCxxQkFDQyw4REFBQ0MsS0FBRztRQUFDQyxFQUFFLEVBQUMsUUFBUTs7MEJBQ2QsOERBQUNELEtBQUc7Z0JBQUNDLEVBQUUsRUFBQyxRQUFROztrQ0FDZiw4REFBQ3JCLDZEQUFZO3dCQUFDSyxNQUFNLEVBQUVBLE1BQU07d0JBQUVELFFBQVEsRUFBRUEsUUFBUTs7Ozs7NkJBQUk7a0NBQ3JELDhEQUFDTiw0REFBUTt3QkFBQ00sUUFBUSxFQUFFQSxRQUFROzs7Ozs2QkFBSTtvQkFBQSxNQUFJOzs7Ozs7cUJBQU07MEJBQzVDLDhEQUFDZ0IsS0FBRztnQkFBQ0MsRUFBRSxFQUFDLE9BQU87O2tDQUNYLDhEQUFDdEIsOERBQVk7d0JBQUN1QixPQUFPLEVBQUVoQixXQUFXO3dCQUFFRixRQUFRLEVBQUVBLFFBQVE7Ozs7OzZCQUFJO2tDQUMzRCw4REFBQ0gsK0RBQVc7d0JBQUNxQixPQUFPLEVBQUVoQixXQUFXOzs7Ozs2QkFBRzs7Ozs7O3FCQUUvQjswQkFDTiw4REFBQ1QsdURBQUc7Z0JBQUN5QixPQUFPLEVBQUVuQixVQUFTOzs7OztxQkFBSTs7Ozs7O2FBQ3ZCLENBQ047Q0FDRDtHQTdDS0QsU0FBUztBQUFUQSxLQUFBQSxTQUFTOztBQStDZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4PzgwNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBTdGF0ZW1lbnRQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdGVtZW50J1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuaW1wb3J0IEdsb3NzYXJ5LCB7IENvZGVMaXN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HbG9zc2FyeSdcbmltcG9ydCBDb2RlRHJvcGRvd24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2RlUGlja2VyJ1xuaW1wb3J0IFN0YXRlbWVudEJveCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dvcmtzcGFjZSdcbmltcG9ydCBGbGFnVHJhY2tlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZsYWdUcmFja2VyJ1xuXG5leHBvcnQgdHlwZSBSZWFkZXJQcm9wcyA9IHtcbiAgc3RhdGVtZW50OiBTdGF0ZW1lbnRQcm9wc1tdO1xuICBuZXh0SUQ6IG51bWJlciB8IG51bGw7XG4gIHByZXZJRDogbnVtYmVyIHwgbnVsbDtcbn1cblxuY29uc3QgU3RhdGVtZW50OiBSZWFjdC5GQzx7c3RhdGVtZW50OiBSZWFkZXJQcm9wcywgZ2xvc3Nhcnk6IENvZGVMaXN0W119PiA9ICh7c3RhdGVtZW50LCBnbG9zc2FyeX0pID0+IHtcbiAvLyBjb25zb2xlLmxvZyhcIkNvbnRlbnRzIG9mICdyZXN0JzpcIik7IGNvbnNvbGUubG9nKHJlc3QpOyAvL3Ryb3VibGVzaG9vdGluZyB0b29sXG4gbGV0IHNhbXBsZSA9IHN0YXRlbWVudC5zdGF0ZW1lbnQ7XG4gbGV0IHN0YXRlbWVudElEOiBudW1iZXIgPSBzYW1wbGVbXCJzdGF0ZW1lbnRJRFwiXTtcbi8vIGNvbnNvbGUubG9nKCdzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIGN1cnJlbnQgSUQ6Jyk7IGNvbnNvbGUubG9nKHN0YXRlbWVudElEKTtcbi8vIGxldCBjb250ZW50ID0gc2FtcGxlW1wiY29udGVudFwiXTtcbi8vIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBzdGF0ZW1lbnQgY29udGVudDpcIik7IGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuLy8gbGV0IG5leHQgPSBzdGF0ZW1lbnQubmV4dElEO1xuLy8gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgbmV4dCBJRFwiKTsgY29uc29sZS5sb2cobmV4dCk7XG4vLyBsZXQgcHJldiA9IHN0YXRlbWVudC5wcmV2SUQ7XG4vLyBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgcHJldmlvdXMgSURcIik7IGNvbnNvbGUubG9nKHByZXYpO1xuXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3Qgc3RhdGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlbWVudCcpO1xuICBjb25zdCBwaHJhc2VzID0gc3RhdGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXJrJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2xvc3NhcnkubGVuZ3RoOyBpKyspIHtcbiAgIGNvbnN0IGNvZGVkID0gc3RhdGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGdsb3NzYXJ5W2ldLnNob3J0Q29kZSk7XG4gICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHBocmFzZSA9IGNvZGVkW2ldO1xuICAgIFxuICAgfVxuICB9XG4gfSlcblxuIGNvbnN0IHRvb2x0aXAgPSAoKSA9PiB7XG4gXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2xvc3NhcnkubGVuZ3RoOyBpKyspIHtcbiAgIGNvbnN0IHNob3J0ID0gZ2xvc3NhcnlbaV0uc2hvcnRDb2RlO1xuICAgY29uc3QgbmFtZSA9IGdsb3NzYXJ5W2ldLmNvZGVOYW1lO1xuICB9XG4gfVxuXG4gcmV0dXJuIChcbiAgPGRpdiBpZD0ncmVhZGVyJz5cbiAgICA8ZGl2IGlkPSdjZW50ZXInPlxuICAgICA8U3RhdGVtZW50Qm94IHNhbXBsZT17c2FtcGxlfSBnbG9zc2FyeT17Z2xvc3Nhcnl9IC8+XG5cdCAgXHQ8R2xvc3NhcnkgZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPiAgICA8L2Rpdj5cblx0XHQ8ZGl2IGlkPSdjb2Rlcic+XG4gICAgICA8Q29kZURyb3Bkb3duIGN1cnJlbnQ9e3N0YXRlbWVudElEfSBnbG9zc2FyeT17Z2xvc3Nhcnl9IC8+XG4gICAgIDxGbGFnVHJhY2tlciBjdXJyZW50PXtzdGF0ZW1lbnRJRH0vPlxuXG4gICAgPC9kaXY+XG4gICAgPE5hdiBjdXJyZW50PXtzdGF0ZW1lbnR9IC8+XG4gIDwvZGl2PlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiAge1xuLy8gIHRyeSB7XG5cdGNvbnN0IFtzdGF0ZVJlcywgZ2xvc3NSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvc3RhdGVtZW50LyR7Y29udGV4dC5wYXJhbXMuc3RhdGVtZW50SUR9YCksXG5cdFx0ZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9nbG9zc2ApXSkgXG4vLyBjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQgZm9yIHN0YXRlUmVzOlwiKTsgY29uc29sZS5sb2coYXdhaXQgc3RhdGVSZXMuY2xvbmUoKS50ZXh0KCkpIFxuLy9cdGNvbnNvbGUubG9nKFwiaGVyZSdzIGF3YWl0IHJlcyBjbG9uZSB0ZXh0IG91dHB1dCBmb3IgZ2xvc3NSZXM6XCIpOyBjb25zb2xlLmxvZyhhd2FpdCBzdGF0ZVJlcy5jbG9uZSgpLnRleHQoKSkgXG4gY29uc3QgW3N0YXRlbWVudCwgZ2xvc3NhcnldID0gYXdhaXQgUHJvbWlzZS5hbGwoW3N0YXRlUmVzLmpzb24oKSwgZ2xvc3NSZXMuanNvbigpXSlcbi8vXHRjb25zb2xlLmxvZyhcImhlcmUgaXMgdGhlIHN0YXRlbWVudDpcIik7IGNvbnNvbGUubG9nKHN0YXRlbWVudCk7IFxuLy8gY29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBnbG9zc2FyeTpcIik7IGNvbnNvbGUubG9nKGdsb3NzYXJ5KVxuICByZXR1cm4ge1xuICBwcm9wczogXG4gICB7IHN0YXRlbWVudCwgZ2xvc3NhcnkgfVxuIH07XG59ICBcbi8vfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIk5hdiIsIkdsb3NzYXJ5IiwiQ29kZURyb3Bkb3duIiwiU3RhdGVtZW50Qm94IiwiRmxhZ1RyYWNrZXIiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJnbG9zc2FyeSIsInNhbXBsZSIsInN0YXRlbWVudElEIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBocmFzZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImkiLCJsZW5ndGgiLCJjb2RlZCIsInNob3J0Q29kZSIsInBocmFzZSIsInRvb2x0aXAiLCJzaG9ydCIsIm5hbWUiLCJjb2RlTmFtZSIsImRpdiIsImlkIiwiY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});