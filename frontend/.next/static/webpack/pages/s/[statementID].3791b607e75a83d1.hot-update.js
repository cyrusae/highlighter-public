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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\n/* harmony import */ var _components_Workspace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Workspace */ \"./components/Workspace.tsx\");\n/* harmony import */ var _components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FlagTracker */ \"./components/FlagTracker.tsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Statement = function(param) {\n    var statement1 = param.statement, glossary = param.glossary;\n    _s();\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var sample = statement1.statement;\n    var statementID = sample[\"statementID\"];\n    // console.log('statementID attempts to log the current ID:'); console.log(statementID);\n    // let content = sample[\"content\"];\n    // console.log(\"statementID attempts to log the statement content:\"); console.log(content);\n    // let next = statement.nextID;\n    // console.log(\"statementID attempts to log next ID\"); console.log(next);\n    // let prev = statement.prevID;\n    // console.log(\"statementID attempts to log the previous ID\"); console.log(prev);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop1 = function(i) {\n            var _loop = function(i1) {\n                var phrase = coded[i1];\n                var words = phrase.innerHTML;\n                var tooltip = '<span class=\"toltip\">' + name + \"\\u202F\" + \"</span>\";\n                phrase.addEventListener(\"pointerenter\", function() {\n                    phrase.innerHTML += tooltip;\n                });\n                phrase.addEventListener(\"pointerleave\", function() {\n                    phrase.innerHTML = words;\n                });\n            };\n            var coded = statement.getElementsByClassName(glossary[i].shortCode);\n            var name = glossary[i].codeName;\n            for(var i1 = 0; i1 < coded.length; i1++)_loop(i1);\n        };\n        var statement = document.getElementById(\"statement\");\n        //  const phrases = statement.getElementsByTagName('mark');\n        for(var i = 0; i < glossary.length; i++)_loop1(i);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__.FlagBar, {}, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 53,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    sample: sample,\n                    glossary: glossary\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"coder\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        current: statementID,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 4\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        current: statementID\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 59,\n                        columnNumber: 4\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                        current: statement1\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 60,\n                        columnNumber: 4\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 57,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__.FootBook, {\n                glossary: glossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 52,\n        columnNumber: 3\n    }, _this);\n};\n_s(Statement, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUlTO0FBQ3VCO0FBQ2xCO0FBQ0Q7QUFDYztBQUNQO0FBQ2hCOztBQVE1QyxJQUFNVSxTQUFTLEdBQTZELGdCQUEyQjtRQUF6QkMsVUFBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDaEcsZ0ZBQWdGO0lBQ2hGLElBQUlDLE1BQU0sR0FBR0YsVUFBUyxDQUFDQSxTQUFTO0lBQ2hDLElBQUlHLFdBQVcsR0FBV0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNoRCx3RkFBd0Y7SUFDeEYsbUNBQW1DO0lBQ25DLDJGQUEyRjtJQUMzRiwrQkFBK0I7SUFDL0IseUVBQXlFO0lBQ3pFLCtCQUErQjtJQUMvQixpRkFBaUY7SUFFaEZaLGdEQUFTLENBQUMsV0FBTTtpQ0FHMkI7cUNBR0Y7Z0JBQ3RDLElBQUljLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxFQUFDLENBQUM7Z0JBQ3JCLElBQUlDLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxTQUFTO2dCQUM1QixJQUFJQyxPQUFPLEdBQUcsdUJBQXVCLEdBQUdDLElBQUksR0FBSSxRQUFRLEdBQUksU0FBUztnQkFDckVOLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFdBQU07b0JBQzdDUCxNQUFNLENBQUNJLFNBQVMsSUFBSUMsT0FBTyxDQUFDO2lCQUM1QixDQUFDLENBQUM7Z0JBQ0hMLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFdBQU07b0JBQzdDUCxNQUFNLENBQUNJLFNBQVMsR0FBR0QsS0FBSyxDQUFDO2lCQUN6QixDQUFDLENBQUM7YUFDSDtZQVpELElBQU1GLEtBQUssR0FBR0wsU0FBUyxDQUFDWSxzQkFBc0IsQ0FBQ1gsUUFBUSxDQUFDSyxDQUFDLENBQUMsQ0FBQ08sU0FBUyxDQUFDO1lBQ3JFLElBQU1ILElBQUksR0FBR1QsUUFBUSxDQUFDSyxDQUFDLENBQUMsQ0FBQ1EsUUFBUTtZQUNqQyxJQUFLLElBQUlSLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBR0QsS0FBSyxDQUFDVSxNQUFNLEVBQUVULEVBQUMsRUFBRTtTQVdyQztRQWhCRCxJQUFNTixTQUFTLEdBQUdnQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFDeEQsMkRBQTJEO1FBQ3pELElBQUssSUFBSVgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTCxRQUFRLENBQUNjLE1BQU0sRUFBRVQsQ0FBQyxFQUFFO0tBZXhDLENBQUM7SUFFRixxQkFDQyw4REFBQ1IsMERBQU07OzBCQUNOLDhEQUFDRiw0REFBTzs7OztxQkFBRzswQkFDWCw4REFBQ0MsZ0RBQUc7MEJBQUMsNEVBQUNILDZEQUFZO29CQUFDUSxNQUFNLEVBQUVBLE1BQU07b0JBQUVELFFBQVEsRUFBRUEsUUFBUTs7Ozs7eUJBQUk7Ozs7O3FCQUNuRDswQkFFUCw4REFBQ2lCLEtBQUc7Z0JBQUNDLEVBQUUsRUFBQyxPQUFPOztrQ0FDZCw4REFBQzFCLDhEQUFZO3dCQUFDMkIsT0FBTyxFQUFFakIsV0FBVzt3QkFBRUYsUUFBUSxFQUFFQSxRQUFROzs7Ozs2QkFBSTtrQ0FDMUQsOERBQUNOLCtEQUFXO3dCQUFDeUIsT0FBTyxFQUFFakIsV0FBVzs7Ozs7NkJBQUc7a0NBQ3BDLDhEQUFDWix1REFBRzt3QkFBQzZCLE9BQU8sRUFBRXBCLFVBQVM7Ozs7OzZCQUFJOzs7Ozs7cUJBQ3RCOzBCQUNMLDhEQUFDUiwwREFBUTtnQkFBQ1MsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFBSTs7Ozs7O2FBQ3hCLENBQ1Q7Q0FDRDtHQTlDS0YsU0FBUztBQUFUQSxLQUFBQSxTQUFTOztBQWdEZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4PzgwNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBTdGF0ZW1lbnRQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdGVtZW50J1xuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuaW1wb3J0IEdsb3NzYXJ5LCB7IEZvb3RCb29rLCBDb2RlTGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2xvc3NhcnknXG5pbXBvcnQgQ29kZURyb3Bkb3duIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVBpY2tlcidcbmltcG9ydCBTdGF0ZW1lbnRCb3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Xb3Jrc3BhY2UnXG5pbXBvcnQgRmxhZ1RyYWNrZXIsIHsgRmxhZ0JhciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmxhZ1RyYWNrZXInXG5pbXBvcnQgeyBSb3csIENvbCwgQ29udGFpbmVyLCBTdGFjayB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCB0eXBlIFJlYWRlclByb3BzID0ge1xuICBzdGF0ZW1lbnQ6IFN0YXRlbWVudFByb3BzW107XG4gIG5leHRJRDogbnVtYmVyIHwgbnVsbDtcbiAgcHJldklEOiBudW1iZXIgfCBudWxsO1xufVxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPHtzdGF0ZW1lbnQ6IFJlYWRlclByb3BzLCBnbG9zc2FyeTogQ29kZUxpc3RbXX0+ID0gKHtzdGF0ZW1lbnQsIGdsb3NzYXJ5fSkgPT4ge1xuIC8vIGNvbnNvbGUubG9nKFwiQ29udGVudHMgb2YgJ3Jlc3QnOlwiKTsgY29uc29sZS5sb2cocmVzdCk7IC8vdHJvdWJsZXNob290aW5nIHRvb2xcbiBsZXQgc2FtcGxlID0gc3RhdGVtZW50LnN0YXRlbWVudDtcbiBsZXQgc3RhdGVtZW50SUQ6IG51bWJlciA9IHNhbXBsZVtcInN0YXRlbWVudElEXCJdO1xuLy8gY29uc29sZS5sb2coJ3N0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgY3VycmVudCBJRDonKTsgY29uc29sZS5sb2coc3RhdGVtZW50SUQpO1xuLy8gbGV0IGNvbnRlbnQgPSBzYW1wbGVbXCJjb250ZW50XCJdO1xuLy8gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIHN0YXRlbWVudCBjb250ZW50OlwiKTsgY29uc29sZS5sb2coY29udGVudCk7XG4vLyBsZXQgbmV4dCA9IHN0YXRlbWVudC5uZXh0SUQ7XG4vLyBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyBuZXh0IElEXCIpOyBjb25zb2xlLmxvZyhuZXh0KTtcbi8vIGxldCBwcmV2ID0gc3RhdGVtZW50LnByZXZJRDtcbi8vIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBwcmV2aW91cyBJRFwiKTsgY29uc29sZS5sb2cocHJldik7XG5cbiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBzdGF0ZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGVtZW50Jyk7XG4vLyAgY29uc3QgcGhyYXNlcyA9IHN0YXRlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFyaycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdsb3NzYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICBjb25zdCBjb2RlZCA9IHN0YXRlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGdsb3NzYXJ5W2ldLnNob3J0Q29kZSk7XG4gICBjb25zdCBuYW1lID0gZ2xvc3NhcnlbaV0uY29kZU5hbWU7XG4gICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHBocmFzZSA9IGNvZGVkW2ldO1xuICAgIGxldCB3b3JkcyA9IHBocmFzZS5pbm5lckhUTUw7XG4gICAgbGV0IHRvb2x0aXAgPSAnPHNwYW4gY2xhc3M9XCJ0b2x0aXBcIj4nICsgbmFtZSArIGBcXHV7MjAyRn1gICsgJzwvc3Bhbj4nO1xuICAgIHBocmFzZS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCAoKSA9PiB7XG4gICAgIHBocmFzZS5pbm5lckhUTUwgKz0gdG9vbHRpcDtcbiAgICB9KTtcbiAgICBwaHJhc2UuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgKCkgPT4ge1xuICAgICBwaHJhc2UuaW5uZXJIVE1MID0gd29yZHM7XG4gICAgfSk7XG4gICB9XG4gIH1cbiB9KVxuXG4gcmV0dXJuIChcbiAgPExheW91dD5cbiAgIDxGbGFnQmFyIC8+XG4gICA8Q29sPjxTdGF0ZW1lbnRCb3ggc2FtcGxlPXtzYW1wbGV9IGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz5cbiAgIDwvQ29sPlxuICAgXG5cdFx0PGRpdiBpZD0nY29kZXInPlxuICAgPENvZGVEcm9wZG93biBjdXJyZW50PXtzdGF0ZW1lbnRJRH0gZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuICAgPEZsYWdUcmFja2VyIGN1cnJlbnQ9e3N0YXRlbWVudElEfS8+XG4gICA8TmF2IGN1cnJlbnQ9e3N0YXRlbWVudH0gLz5cbiAgPC9kaXY+XG4gICA8Rm9vdEJvb2sgZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuICA8L0xheW91dD5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4gIHtcbi8vICB0cnkge1xuXHRjb25zdCBbc3RhdGVSZXMsIGdsb3NzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YXRlbWVudC8ke2NvbnRleHQucGFyYW1zLnN0YXRlbWVudElEfWApLFxuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2xvc3NgKV0pIFxuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0IGZvciBzdGF0ZVJlczpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHN0YXRlUmVzLmNsb25lKCkudGV4dCgpKSBcbi8vXHRjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQgZm9yIGdsb3NzUmVzOlwiKTsgY29uc29sZS5sb2coYXdhaXQgc3RhdGVSZXMuY2xvbmUoKS50ZXh0KCkpIFxuIGNvbnN0IFtzdGF0ZW1lbnQsIGdsb3NzYXJ5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtzdGF0ZVJlcy5qc29uKCksIGdsb3NzUmVzLmpzb24oKV0pXG4vL1x0Y29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBzdGF0ZW1lbnQ6XCIpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpOyBcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgZ2xvc3Nhcnk6XCIpOyBjb25zb2xlLmxvZyhnbG9zc2FyeSlcbiAgcmV0dXJuIHtcbiAgcHJvcHM6IFxuICAgeyBzdGF0ZW1lbnQsIGdsb3NzYXJ5IH1cbiB9O1xufSAgXG4vL30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJOYXYiLCJGb290Qm9vayIsIkNvZGVEcm9wZG93biIsIlN0YXRlbWVudEJveCIsIkZsYWdUcmFja2VyIiwiRmxhZ0JhciIsIkNvbCIsIkxheW91dCIsIlN0YXRlbWVudCIsInN0YXRlbWVudCIsImdsb3NzYXJ5Iiwic2FtcGxlIiwic3RhdGVtZW50SUQiLCJwaHJhc2UiLCJjb2RlZCIsImkiLCJ3b3JkcyIsImlubmVySFRNTCIsInRvb2x0aXAiLCJuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzaG9ydENvZGUiLCJjb2RlTmFtZSIsImxlbmd0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXYiLCJpZCIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});