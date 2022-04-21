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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\n/* harmony import */ var _components_Workspace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Workspace */ \"./components/Workspace.tsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Statement = function(param) {\n    var statement1 = param.statement, glossary = param.glossary;\n    _s();\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var sample = statement1.statement;\n    var statementID = sample[\"statementID\"];\n    // console.log('statementID attempts to log the current ID:'); console.log(statementID);\n    // let content = sample[\"content\"];\n    // console.log(\"statementID attempts to log the statement content:\"); console.log(content);\n    // let next = statement.nextID;\n    // console.log(\"statementID attempts to log next ID\"); console.log(next);\n    // let prev = statement.prevID;\n    // console.log(\"statementID attempts to log the previous ID\"); console.log(prev);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop1 = function(i) {\n            var _loop = function(i1) {\n                var phrase = coded[i1];\n                var words = phrase.innerHTML;\n                var tooltip = '<span class=\"toltip\">' + name + \"\\u202F\" + \"</span>\";\n                phrase.addEventListener(\"pointerenter\", function() {\n                    phrase.innerHTML += tooltip;\n                });\n                phrase.addEventListener(\"pointerleave\", function() {\n                    phrase.innerHTML = words;\n                });\n            };\n            var coded = statement.getElementsByClassName(glossary[i].shortCode);\n            var name = glossary[i].codeName;\n            for(var i1 = 0; i1 < coded.length; i1++)_loop(i1);\n        };\n        var statement = document.getElementById(\"statement\");\n        //  const phrases = statement.getElementsByTagName('mark');\n        for(var i = 0; i < glossary.length; i++)_loop1(i);\n    });\n    //TO DO: add FlagTracker back in as a layout component once rewritten\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                md: 7,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    sample: sample,\n                    glossary: glossary\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                    lineNumber: 55,\n                    columnNumber: 4\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                md: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            current: statementID,\n                            glossary: glossary\n                        }, void 0, false, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                            lineNumber: 59,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                            current: statement1\n                        }, void 0, false, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__.FootBook, {\n                glossary: glossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 65,\n                columnNumber: 3\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 53,\n        columnNumber: 3\n    }, _this);\n};\n_s(Statement, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBSVM7QUFDdUI7QUFDbEI7QUFDRDtBQUVPO0FBQ2hCOztBQVE1QyxJQUFNUyxTQUFTLEdBQTZELGdCQUEyQjtRQUF6QkMsVUFBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDaEcsZ0ZBQWdGO0lBQ2hGLElBQUlDLE1BQU0sR0FBR0YsVUFBUyxDQUFDQSxTQUFTO0lBQ2hDLElBQUlHLFdBQVcsR0FBV0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNoRCx3RkFBd0Y7SUFDeEYsbUNBQW1DO0lBQ25DLDJGQUEyRjtJQUMzRiwrQkFBK0I7SUFDL0IseUVBQXlFO0lBQ3pFLCtCQUErQjtJQUMvQixpRkFBaUY7SUFFaEZYLGdEQUFTLENBQUMsV0FBTTtpQ0FHMkI7cUNBR0Y7Z0JBQ3RDLElBQUlhLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxFQUFDLENBQUM7Z0JBQ3JCLElBQUlDLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxTQUFTO2dCQUM1QixJQUFJQyxPQUFPLEdBQUcsdUJBQXVCLEdBQUdDLElBQUksR0FBSSxRQUFRLEdBQUksU0FBUztnQkFDckVOLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFdBQU07b0JBQzdDUCxNQUFNLENBQUNJLFNBQVMsSUFBSUMsT0FBTyxDQUFDO2lCQUM1QixDQUFDLENBQUM7Z0JBQ0hMLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFdBQU07b0JBQzdDUCxNQUFNLENBQUNJLFNBQVMsR0FBR0QsS0FBSyxDQUFDO2lCQUN6QixDQUFDLENBQUM7YUFDSDtZQVpELElBQU1GLEtBQUssR0FBR0wsU0FBUyxDQUFDWSxzQkFBc0IsQ0FBQ1gsUUFBUSxDQUFDSyxDQUFDLENBQUMsQ0FBQ08sU0FBUyxDQUFDO1lBQ3JFLElBQU1ILElBQUksR0FBR1QsUUFBUSxDQUFDSyxDQUFDLENBQUMsQ0FBQ1EsUUFBUTtZQUNqQyxJQUFLLElBQUlSLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBR0QsS0FBSyxDQUFDVSxNQUFNLEVBQUVULEVBQUMsRUFBRTtTQVdyQztRQWhCRCxJQUFNTixTQUFTLEdBQUdnQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFDeEQsMkRBQTJEO1FBQ3pELElBQUssSUFBSVgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTCxRQUFRLENBQUNjLE1BQU0sRUFBRVQsQ0FBQyxFQUFFO0tBZXhDLENBQUM7SUFFRixxRUFBcUU7SUFDckUscUJBQ0MsOERBQUNSLDBEQUFNOzswQkFDTiw4REFBQ0QsZ0RBQUc7Z0JBQUNxQixFQUFFLEVBQUUsQ0FBQzswQkFDViw0RUFBQ3ZCLDZEQUFZO29CQUFDTyxNQUFNLEVBQUVBLE1BQU07b0JBQUVELFFBQVEsRUFBRUEsUUFBUTs7Ozs7eUJBQUk7Ozs7O3FCQUM5QzswQkFDTiw4REFBQ0osZ0RBQUc7Z0JBQUNxQixFQUFFLEVBQUUsQ0FBQzs7a0NBQ1QsOERBQUN0QixnREFBRztrQ0FDSCw0RUFBQ0YsOERBQVk7NEJBQUN5QixPQUFPLEVBQUVoQixXQUFXOzRCQUFFRixRQUFRLEVBQUVBLFFBQVE7Ozs7O2lDQUFJOzs7Ozs2QkFDckQ7a0NBQ04sOERBQUNMLGdEQUFHO2tDQUNILDRFQUFDSix1REFBRzs0QkFBQzJCLE9BQU8sRUFBRW5CLFVBQVM7Ozs7O2lDQUFJOzs7Ozs2QkFDdEI7Ozs7OztxQkFDRDswQkFDUCw4REFBQ1AsMERBQVE7Z0JBQUNRLFFBQVEsRUFBRUEsUUFBUTs7Ozs7cUJBQUk7Ozs7OzthQUN2QixDQUNUO0NBQ0Q7R0FqREtGLFNBQVM7QUFBVEEsS0FBQUEsU0FBUzs7QUFtRGYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcy9bc3RhdGVtZW50SURdLnRzeD84MDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YXRlbWVudCdcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCBHbG9zc2FyeSwgeyBGb290Qm9vaywgQ29kZUxpc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dsb3NzYXJ5J1xuaW1wb3J0IENvZGVEcm9wZG93biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvZGVQaWNrZXInXG5pbXBvcnQgU3RhdGVtZW50Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV29ya3NwYWNlJ1xuaW1wb3J0IEZsYWdUcmFja2VyLCB7IEZsYWdCYXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZsYWdUcmFja2VyJ1xuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciwgU3RhY2sgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgdHlwZSBSZWFkZXJQcm9wcyA9IHtcbiAgc3RhdGVtZW50OiBTdGF0ZW1lbnRQcm9wc1tdO1xuICBuZXh0SUQ6IG51bWJlciB8IG51bGw7XG4gIHByZXZJRDogbnVtYmVyIHwgbnVsbDtcbn1cblxuY29uc3QgU3RhdGVtZW50OiBSZWFjdC5GQzx7c3RhdGVtZW50OiBSZWFkZXJQcm9wcywgZ2xvc3Nhcnk6IENvZGVMaXN0W119PiA9ICh7c3RhdGVtZW50LCBnbG9zc2FyeX0pID0+IHtcbiAvLyBjb25zb2xlLmxvZyhcIkNvbnRlbnRzIG9mICdyZXN0JzpcIik7IGNvbnNvbGUubG9nKHJlc3QpOyAvL3Ryb3VibGVzaG9vdGluZyB0b29sXG4gbGV0IHNhbXBsZSA9IHN0YXRlbWVudC5zdGF0ZW1lbnQ7XG4gbGV0IHN0YXRlbWVudElEOiBudW1iZXIgPSBzYW1wbGVbXCJzdGF0ZW1lbnRJRFwiXTtcbi8vIGNvbnNvbGUubG9nKCdzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIGN1cnJlbnQgSUQ6Jyk7IGNvbnNvbGUubG9nKHN0YXRlbWVudElEKTtcbi8vIGxldCBjb250ZW50ID0gc2FtcGxlW1wiY29udGVudFwiXTtcbi8vIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBzdGF0ZW1lbnQgY29udGVudDpcIik7IGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuLy8gbGV0IG5leHQgPSBzdGF0ZW1lbnQubmV4dElEO1xuLy8gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgbmV4dCBJRFwiKTsgY29uc29sZS5sb2cobmV4dCk7XG4vLyBsZXQgcHJldiA9IHN0YXRlbWVudC5wcmV2SUQ7XG4vLyBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgcHJldmlvdXMgSURcIik7IGNvbnNvbGUubG9nKHByZXYpO1xuXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3Qgc3RhdGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlbWVudCcpO1xuLy8gIGNvbnN0IHBocmFzZXMgPSBzdGF0ZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21hcmsnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9zc2FyeS5sZW5ndGg7IGkrKykge1xuICAgY29uc3QgY29kZWQgPSBzdGF0ZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShnbG9zc2FyeVtpXS5zaG9ydENvZGUpO1xuICAgY29uc3QgbmFtZSA9IGdsb3NzYXJ5W2ldLmNvZGVOYW1lO1xuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwaHJhc2UgPSBjb2RlZFtpXTtcbiAgICBsZXQgd29yZHMgPSBwaHJhc2UuaW5uZXJIVE1MO1xuICAgIGxldCB0b29sdGlwID0gJzxzcGFuIGNsYXNzPVwidG9sdGlwXCI+JyArIG5hbWUgKyBgXFx1ezIwMkZ9YCArICc8L3NwYW4+JztcbiAgICBwaHJhc2UuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmVudGVyJywgKCkgPT4ge1xuICAgICBwaHJhc2UuaW5uZXJIVE1MICs9IHRvb2x0aXA7XG4gICAgfSk7XG4gICAgcGhyYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsICgpID0+IHtcbiAgICAgcGhyYXNlLmlubmVySFRNTCA9IHdvcmRzO1xuICAgIH0pO1xuICAgfVxuICB9XG4gfSlcblxuIC8vVE8gRE86IGFkZCBGbGFnVHJhY2tlciBiYWNrIGluIGFzIGEgbGF5b3V0IGNvbXBvbmVudCBvbmNlIHJld3JpdHRlblxuIHJldHVybiAoXG4gIDxMYXlvdXQ+XG4gICA8Q29sIG1kPXs3fT5cbiAgIDxTdGF0ZW1lbnRCb3ggc2FtcGxlPXtzYW1wbGV9IGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz5cbiAgIDwvQ29sPlxuICAgPENvbCBtZD17NH0+XG4gICAgPFJvdz5cbiAgICAgPENvZGVEcm9wZG93biBjdXJyZW50PXtzdGF0ZW1lbnRJRH0gZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuICAgIDwvUm93PlxuICAgIDxSb3c+XG4gICAgIDxOYXYgY3VycmVudD17c3RhdGVtZW50fSAvPlxuICAgIDwvUm93PlxuICAgPC9Db2w+IFxuICA8Rm9vdEJvb2sgZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuICA8L0xheW91dD5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4gIHtcbi8vICB0cnkge1xuXHRjb25zdCBbc3RhdGVSZXMsIGdsb3NzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YXRlbWVudC8ke2NvbnRleHQucGFyYW1zLnN0YXRlbWVudElEfWApLFxuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2xvc3NgKV0pIFxuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0IGZvciBzdGF0ZVJlczpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHN0YXRlUmVzLmNsb25lKCkudGV4dCgpKSBcbi8vXHRjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQgZm9yIGdsb3NzUmVzOlwiKTsgY29uc29sZS5sb2coYXdhaXQgc3RhdGVSZXMuY2xvbmUoKS50ZXh0KCkpIFxuIGNvbnN0IFtzdGF0ZW1lbnQsIGdsb3NzYXJ5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtzdGF0ZVJlcy5qc29uKCksIGdsb3NzUmVzLmpzb24oKV0pXG4vL1x0Y29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBzdGF0ZW1lbnQ6XCIpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpOyBcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgZ2xvc3Nhcnk6XCIpOyBjb25zb2xlLmxvZyhnbG9zc2FyeSlcbiAgcmV0dXJuIHtcbiAgcHJvcHM6IFxuICAgeyBzdGF0ZW1lbnQsIGdsb3NzYXJ5IH1cbiB9O1xufSAgXG4vL30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJOYXYiLCJGb290Qm9vayIsIkNvZGVEcm9wZG93biIsIlN0YXRlbWVudEJveCIsIlJvdyIsIkNvbCIsIkxheW91dCIsIlN0YXRlbWVudCIsInN0YXRlbWVudCIsImdsb3NzYXJ5Iiwic2FtcGxlIiwic3RhdGVtZW50SUQiLCJwaHJhc2UiLCJjb2RlZCIsImkiLCJ3b3JkcyIsImlubmVySFRNTCIsInRvb2x0aXAiLCJuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzaG9ydENvZGUiLCJjb2RlTmFtZSIsImxlbmd0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZCIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});