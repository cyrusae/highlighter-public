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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\n/* harmony import */ var _components_Workspace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Workspace */ \"./components/Workspace.tsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Statement = function(param) {\n    var statement1 = param.statement, glossary = param.glossary;\n    _s();\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var sample = statement1.statement;\n    var statementID = sample[\"statementID\"];\n    // console.log('statementID attempts to log the current ID:'); console.log(statementID);\n    // let content = sample[\"content\"];\n    // console.log(\"statementID attempts to log the statement content:\"); console.log(content);\n    // let next = statement.nextID;\n    // console.log(\"statementID attempts to log next ID\"); console.log(next);\n    // let prev = statement.prevID;\n    // console.log(\"statementID attempts to log the previous ID\"); console.log(prev);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop1 = function(i) {\n            var _loop = function(i1) {\n                var phrase = coded[i1];\n                var words = phrase.innerHTML;\n                var tooltip = '<span class=\"toltip\">' + name + \"\\u202F\" + \"</span>\";\n                phrase.addEventListener(\"pointerenter\", function() {\n                    phrase.innerHTML += tooltip;\n                });\n                phrase.addEventListener(\"pointerleave\", function() {\n                    phrase.innerHTML = words;\n                });\n            };\n            var coded = statement.getElementsByClassName(glossary[i].shortCode);\n            var name = glossary[i].codeName;\n            for(var i1 = 0; i1 < coded.length; i1++)_loop(i1);\n        };\n        var statement = document.getElementById(\"statement\");\n        //  const phrases = statement.getElementsByTagName('mark');\n        for(var i = 0; i < glossary.length; i++)_loop1(i);\n    });\n    //TO DO: add FlagTracker back in as a layout component once rewritten\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            sample: sample,\n                            glossary: glossary\n                        }, void 0, false, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                            lineNumber: 56,\n                            columnNumber: 4\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 4\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    current: statementID,\n                                    glossary: glossary\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 5\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                                    current: statement1\n                                }, void 0, false, {\n                                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 4\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                            lineNumber: 59,\n                            columnNumber: 4\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 4\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 54,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__.FootBook, {\n                glossary: glossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 65,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 53,\n        columnNumber: 3\n    }, _this);\n};\n_s(Statement, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBSVM7QUFDdUI7QUFDbEI7QUFDRDtBQUVPO0FBQ2hCOztBQVE1QyxJQUFNVSxTQUFTLEdBQTZELGdCQUEyQjtRQUF6QkMsVUFBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDaEcsZ0ZBQWdGO0lBQ2hGLElBQUlDLE1BQU0sR0FBR0YsVUFBUyxDQUFDQSxTQUFTO0lBQ2hDLElBQUlHLFdBQVcsR0FBV0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNoRCx3RkFBd0Y7SUFDeEYsbUNBQW1DO0lBQ25DLDJGQUEyRjtJQUMzRiwrQkFBK0I7SUFDL0IseUVBQXlFO0lBQ3pFLCtCQUErQjtJQUMvQixpRkFBaUY7SUFFaEZaLGdEQUFTLENBQUMsV0FBTTtpQ0FHMkI7cUNBR0Y7Z0JBQ3RDLElBQUljLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxFQUFDLENBQUM7Z0JBQ3JCLElBQUlDLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxTQUFTO2dCQUM1QixJQUFJQyxPQUFPLEdBQUcsdUJBQXVCLEdBQUdDLElBQUksR0FBSSxRQUFRLEdBQUksU0FBUztnQkFDckVOLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFdBQU07b0JBQzdDUCxNQUFNLENBQUNJLFNBQVMsSUFBSUMsT0FBTyxDQUFDO2lCQUM1QixDQUFDLENBQUM7Z0JBQ0hMLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFdBQU07b0JBQzdDUCxNQUFNLENBQUNJLFNBQVMsR0FBR0QsS0FBSyxDQUFDO2lCQUN6QixDQUFDLENBQUM7YUFDSDtZQVpELElBQU1GLEtBQUssR0FBR0wsU0FBUyxDQUFDWSxzQkFBc0IsQ0FBQ1gsUUFBUSxDQUFDSyxDQUFDLENBQUMsQ0FBQ08sU0FBUyxDQUFDO1lBQ3JFLElBQU1ILElBQUksR0FBR1QsUUFBUSxDQUFDSyxDQUFDLENBQUMsQ0FBQ1EsUUFBUTtZQUNqQyxJQUFLLElBQUlSLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBR0QsS0FBSyxDQUFDVSxNQUFNLEVBQUVULEVBQUMsRUFBRTtTQVdyQztRQWhCRCxJQUFNTixTQUFTLEdBQUdnQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFDeEQsMkRBQTJEO1FBQ3pELElBQUssSUFBSVgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTCxRQUFRLENBQUNjLE1BQU0sRUFBRVQsQ0FBQyxFQUFFO0tBZXhDLENBQUM7SUFFRixxRUFBcUU7SUFDckUscUJBQ0MsOERBQUNSLDBEQUFNOzswQkFDUCw4REFBQ0gsZ0RBQUc7O2tDQUNILDhEQUFDQyxnREFBRztrQ0FDSiw0RUFBQ0YsNkRBQVk7NEJBQUNRLE1BQU0sRUFBRUEsTUFBTTs0QkFBRUQsUUFBUSxFQUFFQSxRQUFROzs7OztpQ0FBSTs7Ozs7NkJBQzlDO2tDQUNOLDhEQUFDTCxnREFBRztrQ0FDSiw0RUFBQ0Msa0RBQUs7OzhDQUNMLDhEQUFDSiw4REFBWTtvQ0FBQ3lCLE9BQU8sRUFBRWYsV0FBVztvQ0FBRUYsUUFBUSxFQUFFQSxRQUFROzs7Ozt5Q0FBSTs4Q0FDM0QsOERBQUNWLHVEQUFHO29DQUFDMkIsT0FBTyxFQUFFbEIsVUFBUzs7Ozs7eUNBQUk7Ozs7OztpQ0FDbkI7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Q7MEJBQ0wsOERBQUNSLDBEQUFRO2dCQUFDUyxRQUFRLEVBQUVBLFFBQVE7Ozs7O3FCQUFJOzs7Ozs7YUFDeEIsQ0FDVDtDQUNEO0dBakRLRixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7O0FBbURmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3MvW3N0YXRlbWVudElEXS50c3g/ODA1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0ZW1lbnQnXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24nXG5pbXBvcnQgR2xvc3NhcnksIHsgRm9vdEJvb2ssIENvZGVMaXN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HbG9zc2FyeSdcbmltcG9ydCBDb2RlRHJvcGRvd24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2RlUGlja2VyJ1xuaW1wb3J0IFN0YXRlbWVudEJveCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dvcmtzcGFjZSdcbmltcG9ydCBGbGFnVHJhY2tlciwgeyBGbGFnQmFyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GbGFnVHJhY2tlcidcbmltcG9ydCB7IFJvdywgQ29sLCBDb250YWluZXIsIFN0YWNrIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IHR5cGUgUmVhZGVyUHJvcHMgPSB7XG4gIHN0YXRlbWVudDogU3RhdGVtZW50UHJvcHNbXTtcbiAgbmV4dElEOiBudW1iZXIgfCBudWxsO1xuICBwcmV2SUQ6IG51bWJlciB8IG51bGw7XG59XG5cbmNvbnN0IFN0YXRlbWVudDogUmVhY3QuRkM8e3N0YXRlbWVudDogUmVhZGVyUHJvcHMsIGdsb3NzYXJ5OiBDb2RlTGlzdFtdfT4gPSAoe3N0YXRlbWVudCwgZ2xvc3Nhcnl9KSA9PiB7XG4gLy8gY29uc29sZS5sb2coXCJDb250ZW50cyBvZiAncmVzdCc6XCIpOyBjb25zb2xlLmxvZyhyZXN0KTsgLy90cm91Ymxlc2hvb3RpbmcgdG9vbFxuIGxldCBzYW1wbGUgPSBzdGF0ZW1lbnQuc3RhdGVtZW50O1xuIGxldCBzdGF0ZW1lbnRJRDogbnVtYmVyID0gc2FtcGxlW1wic3RhdGVtZW50SURcIl07XG4vLyBjb25zb2xlLmxvZygnc3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBjdXJyZW50IElEOicpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnRJRCk7XG4vLyBsZXQgY29udGVudCA9IHNhbXBsZVtcImNvbnRlbnRcIl07XG4vLyBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgc3RhdGVtZW50IGNvbnRlbnQ6XCIpOyBjb25zb2xlLmxvZyhjb250ZW50KTtcbi8vIGxldCBuZXh0ID0gc3RhdGVtZW50Lm5leHRJRDtcbi8vIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIG5leHQgSURcIik7IGNvbnNvbGUubG9nKG5leHQpO1xuLy8gbGV0IHByZXYgPSBzdGF0ZW1lbnQucHJldklEO1xuLy8gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIHByZXZpb3VzIElEXCIpOyBjb25zb2xlLmxvZyhwcmV2KTtcblxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gIGNvbnN0IHN0YXRlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZW1lbnQnKTtcbi8vICBjb25zdCBwaHJhc2VzID0gc3RhdGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYXJrJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2xvc3NhcnkubGVuZ3RoOyBpKyspIHtcbiAgIGNvbnN0IGNvZGVkID0gc3RhdGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZ2xvc3NhcnlbaV0uc2hvcnRDb2RlKTtcbiAgIGNvbnN0IG5hbWUgPSBnbG9zc2FyeVtpXS5jb2RlTmFtZTtcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcGhyYXNlID0gY29kZWRbaV07XG4gICAgbGV0IHdvcmRzID0gcGhyYXNlLmlubmVySFRNTDtcbiAgICBsZXQgdG9vbHRpcCA9ICc8c3BhbiBjbGFzcz1cInRvbHRpcFwiPicgKyBuYW1lICsgYFxcdXsyMDJGfWAgKyAnPC9zcGFuPic7XG4gICAgcGhyYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsICgpID0+IHtcbiAgICAgcGhyYXNlLmlubmVySFRNTCArPSB0b29sdGlwO1xuICAgIH0pO1xuICAgIHBocmFzZS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCAoKSA9PiB7XG4gICAgIHBocmFzZS5pbm5lckhUTUwgPSB3b3JkcztcbiAgICB9KTtcbiAgIH1cbiAgfVxuIH0pXG5cbiAvL1RPIERPOiBhZGQgRmxhZ1RyYWNrZXIgYmFjayBpbiBhcyBhIGxheW91dCBjb21wb25lbnQgb25jZSByZXdyaXR0ZW5cbiByZXR1cm4gKFxuICA8TGF5b3V0PlxuICA8Um93PlxuICAgPENvbD5cbiAgIDxTdGF0ZW1lbnRCb3ggc2FtcGxlPXtzYW1wbGV9IGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz5cbiAgIDwvQ29sPlxuICAgPENvbD5cbiAgIDxTdGFjaz5cbiAgICA8Q29kZURyb3Bkb3duIGN1cnJlbnQ9e3N0YXRlbWVudElEfSBnbG9zc2FyeT17Z2xvc3Nhcnl9IC8+XG4gICA8TmF2IGN1cnJlbnQ9e3N0YXRlbWVudH0gLz5cbiAgIDwvU3RhY2s+XG4gICA8L0NvbD4gICBcbiAgPC9Sb3c+XG4gICA8Rm9vdEJvb2sgZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuICA8L0xheW91dD5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4gIHtcbi8vICB0cnkge1xuXHRjb25zdCBbc3RhdGVSZXMsIGdsb3NzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YXRlbWVudC8ke2NvbnRleHQucGFyYW1zLnN0YXRlbWVudElEfWApLFxuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2xvc3NgKV0pIFxuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0IGZvciBzdGF0ZVJlczpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHN0YXRlUmVzLmNsb25lKCkudGV4dCgpKSBcbi8vXHRjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQgZm9yIGdsb3NzUmVzOlwiKTsgY29uc29sZS5sb2coYXdhaXQgc3RhdGVSZXMuY2xvbmUoKS50ZXh0KCkpIFxuIGNvbnN0IFtzdGF0ZW1lbnQsIGdsb3NzYXJ5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtzdGF0ZVJlcy5qc29uKCksIGdsb3NzUmVzLmpzb24oKV0pXG4vL1x0Y29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBzdGF0ZW1lbnQ6XCIpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpOyBcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgZ2xvc3Nhcnk6XCIpOyBjb25zb2xlLmxvZyhnbG9zc2FyeSlcbiAgcmV0dXJuIHtcbiAgcHJvcHM6IFxuICAgeyBzdGF0ZW1lbnQsIGdsb3NzYXJ5IH1cbiB9O1xufSAgXG4vL30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJOYXYiLCJGb290Qm9vayIsIkNvZGVEcm9wZG93biIsIlN0YXRlbWVudEJveCIsIlJvdyIsIkNvbCIsIlN0YWNrIiwiTGF5b3V0IiwiU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZ2xvc3NhcnkiLCJzYW1wbGUiLCJzdGF0ZW1lbnRJRCIsInBocmFzZSIsImNvZGVkIiwiaSIsIndvcmRzIiwiaW5uZXJIVE1MIiwidG9vbHRpcCIsIm5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNob3J0Q29kZSIsImNvZGVOYW1lIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});