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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\n/* harmony import */ var _components_Workspace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Workspace */ \"./components/Workspace.tsx\");\n/* harmony import */ var _components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FlagTracker */ \"./components/FlagTracker.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Statement = function(param) {\n    var statement1 = param.statement, glossary = param.glossary;\n    _s();\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var sample = statement1.statement;\n    var statementID = sample[\"statementID\"];\n    // console.log('statementID attempts to log the current ID:'); console.log(statementID);\n    // let content = sample[\"content\"];\n    // console.log(\"statementID attempts to log the statement content:\"); console.log(content);\n    // let next = statement.nextID;\n    // console.log(\"statementID attempts to log next ID\"); console.log(next);\n    // let prev = statement.prevID;\n    // console.log(\"statementID attempts to log the previous ID\"); console.log(prev);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop1 = function(i) {\n            var _loop = function(i1) {\n                var phrase = coded[i1];\n                var words = phrase.innerHTML;\n                var tooltip = '<span class=\"tooltip\">' + name + \"</span>\" + \"\\u202F\";\n                phrase.addEventListener(\"pointerenter\", function() {\n                    phrase.innerHTML += tooltip;\n                });\n                phrase.addEventListener(\"pointerleave\", function() {\n                    phrase.innerHTML = words;\n                });\n            };\n            var coded = statement.getElementsByClassName(glossary[i].shortCode);\n            var name = glossary[i].codeName;\n            for(var i1 = 0; i1 < coded.length; i1++)_loop(i1);\n        };\n        var statement = document.getElementById(\"statement\");\n        //  const phrases = statement.getElementsByTagName('mark');\n        for(var i = 0; i < glossary.length; i++)_loop1(i);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"reader\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sample: sample,\n                glossary: glossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"coder\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        current: statementID,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 4\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        current: statementID\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 54,\n                        columnNumber: 4\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                        current: statement1\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 4\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 52,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__.FootBook, {\n                glossary: glossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 57,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, _this);\n};\n_s(Statement, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFJUztBQUN1QjtBQUNsQjtBQUNEO0FBQ0M7O0FBUXRELElBQU1PLFNBQVMsR0FBNkQsZ0JBQTJCO1FBQXpCQyxVQUFTLFNBQVRBLFNBQVMsRUFBRUMsUUFBUSxTQUFSQSxRQUFROztJQUNoRyxnRkFBZ0Y7SUFDaEYsSUFBSUMsTUFBTSxHQUFHRixVQUFTLENBQUNBLFNBQVM7SUFDaEMsSUFBSUcsV0FBVyxHQUFXRCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ2hELHdGQUF3RjtJQUN4RixtQ0FBbUM7SUFDbkMsMkZBQTJGO0lBQzNGLCtCQUErQjtJQUMvQix5RUFBeUU7SUFDekUsK0JBQStCO0lBQy9CLGlGQUFpRjtJQUVoRlQsZ0RBQVMsQ0FBQyxXQUFNO2lDQUcyQjtxQ0FHRjtnQkFDdEMsSUFBSVcsTUFBTSxHQUFHQyxLQUFLLENBQUNDLEVBQUMsQ0FBQztnQkFDckIsSUFBSUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLFNBQVM7Z0JBQzVCLElBQUlDLE9BQU8sR0FBRyx3QkFBd0IsR0FBR0MsSUFBSSxHQUFHLFNBQVMsR0FBSSxRQUFRO2dCQUNyRU4sTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsV0FBTTtvQkFDN0NQLE1BQU0sQ0FBQ0ksU0FBUyxJQUFJQyxPQUFPLENBQUM7aUJBQzVCLENBQUMsQ0FBQztnQkFDSEwsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsV0FBTTtvQkFDN0NQLE1BQU0sQ0FBQ0ksU0FBUyxHQUFHRCxLQUFLLENBQUM7aUJBQ3pCLENBQUMsQ0FBQzthQUNIO1lBWkQsSUFBTUYsS0FBSyxHQUFHTCxTQUFTLENBQUNZLHNCQUFzQixDQUFDWCxRQUFRLENBQUNLLENBQUMsQ0FBQyxDQUFDTyxTQUFTLENBQUM7WUFDckUsSUFBTUgsSUFBSSxHQUFHVCxRQUFRLENBQUNLLENBQUMsQ0FBQyxDQUFDUSxRQUFRO1lBQ2pDLElBQUssSUFBSVIsRUFBQyxHQUFHLENBQUMsRUFBRUEsRUFBQyxHQUFHRCxLQUFLLENBQUNVLE1BQU0sRUFBRVQsRUFBQyxFQUFFO1NBV3JDO1FBaEJELElBQU1OLFNBQVMsR0FBR2dCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUN4RCwyREFBMkQ7UUFDekQsSUFBSyxJQUFJWCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdMLFFBQVEsQ0FBQ2MsTUFBTSxFQUFFVCxDQUFDLEVBQUU7S0FleEMsQ0FBQztJQUVGLHFCQUNDLDhEQUFDWSxLQUFHO1FBQUNDLEVBQUUsRUFBQyxRQUFROzswQkFDZiw4REFBQ3RCLDZEQUFZO2dCQUFDSyxNQUFNLEVBQUVBLE1BQU07Z0JBQUVELFFBQVEsRUFBRUEsUUFBUTs7Ozs7cUJBQUk7MEJBQ3JELDhEQUFDaUIsS0FBRztnQkFBQ0MsRUFBRSxFQUFDLE9BQU87O2tDQUNkLDhEQUFDdkIsOERBQVk7d0JBQUN3QixPQUFPLEVBQUVqQixXQUFXO3dCQUFFRixRQUFRLEVBQUVBLFFBQVE7Ozs7OzZCQUFJO2tDQUMxRCw4REFBQ0gsK0RBQVc7d0JBQUNzQixPQUFPLEVBQUVqQixXQUFXOzs7Ozs2QkFBRztrQ0FDcEMsOERBQUNULHVEQUFHO3dCQUFDMEIsT0FBTyxFQUFFcEIsVUFBUzs7Ozs7NkJBQUk7Ozs7OztxQkFDdEI7MEJBQ0wsOERBQUNMLDBEQUFRO2dCQUFDTSxRQUFRLEVBQUVBLFFBQVE7Ozs7O3FCQUFJOzs7Ozs7YUFDM0IsQ0FDTjtDQUNEO0dBM0NLRixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7O0FBNkNmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3MvW3N0YXRlbWVudElEXS50c3g/ODA1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0ZW1lbnQnXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24nXG5pbXBvcnQgR2xvc3NhcnksIHsgRm9vdEJvb2ssIENvZGVMaXN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HbG9zc2FyeSdcbmltcG9ydCBDb2RlRHJvcGRvd24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2RlUGlja2VyJ1xuaW1wb3J0IFN0YXRlbWVudEJveCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dvcmtzcGFjZSdcbmltcG9ydCBGbGFnVHJhY2tlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZsYWdUcmFja2VyJ1xuXG5leHBvcnQgdHlwZSBSZWFkZXJQcm9wcyA9IHtcbiAgc3RhdGVtZW50OiBTdGF0ZW1lbnRQcm9wc1tdO1xuICBuZXh0SUQ6IG51bWJlciB8IG51bGw7XG4gIHByZXZJRDogbnVtYmVyIHwgbnVsbDtcbn1cblxuY29uc3QgU3RhdGVtZW50OiBSZWFjdC5GQzx7c3RhdGVtZW50OiBSZWFkZXJQcm9wcywgZ2xvc3Nhcnk6IENvZGVMaXN0W119PiA9ICh7c3RhdGVtZW50LCBnbG9zc2FyeX0pID0+IHtcbiAvLyBjb25zb2xlLmxvZyhcIkNvbnRlbnRzIG9mICdyZXN0JzpcIik7IGNvbnNvbGUubG9nKHJlc3QpOyAvL3Ryb3VibGVzaG9vdGluZyB0b29sXG4gbGV0IHNhbXBsZSA9IHN0YXRlbWVudC5zdGF0ZW1lbnQ7XG4gbGV0IHN0YXRlbWVudElEOiBudW1iZXIgPSBzYW1wbGVbXCJzdGF0ZW1lbnRJRFwiXTtcbi8vIGNvbnNvbGUubG9nKCdzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIGN1cnJlbnQgSUQ6Jyk7IGNvbnNvbGUubG9nKHN0YXRlbWVudElEKTtcbi8vIGxldCBjb250ZW50ID0gc2FtcGxlW1wiY29udGVudFwiXTtcbi8vIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBzdGF0ZW1lbnQgY29udGVudDpcIik7IGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuLy8gbGV0IG5leHQgPSBzdGF0ZW1lbnQubmV4dElEO1xuLy8gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgbmV4dCBJRFwiKTsgY29uc29sZS5sb2cobmV4dCk7XG4vLyBsZXQgcHJldiA9IHN0YXRlbWVudC5wcmV2SUQ7XG4vLyBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgcHJldmlvdXMgSURcIik7IGNvbnNvbGUubG9nKHByZXYpO1xuXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3Qgc3RhdGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlbWVudCcpO1xuLy8gIGNvbnN0IHBocmFzZXMgPSBzdGF0ZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21hcmsnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9zc2FyeS5sZW5ndGg7IGkrKykge1xuICAgY29uc3QgY29kZWQgPSBzdGF0ZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShnbG9zc2FyeVtpXS5zaG9ydENvZGUpO1xuICAgY29uc3QgbmFtZSA9IGdsb3NzYXJ5W2ldLmNvZGVOYW1lO1xuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwaHJhc2UgPSBjb2RlZFtpXTtcbiAgICBsZXQgd29yZHMgPSBwaHJhc2UuaW5uZXJIVE1MO1xuICAgIGxldCB0b29sdGlwID0gJzxzcGFuIGNsYXNzPVwidG9vbHRpcFwiPicgKyBuYW1lICsgJzwvc3Bhbj4nICsgYFxcdXsyMDJGfWA7XG4gICAgcGhyYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsICgpID0+IHtcbiAgICAgcGhyYXNlLmlubmVySFRNTCArPSB0b29sdGlwO1xuICAgIH0pO1xuICAgIHBocmFzZS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCAoKSA9PiB7XG4gICAgIHBocmFzZS5pbm5lckhUTUwgPSB3b3JkcztcbiAgICB9KTtcbiAgIH1cbiAgfVxuIH0pXG5cbiByZXR1cm4gKFxuICA8ZGl2IGlkPSdyZWFkZXInPlxuICAgPFN0YXRlbWVudEJveCBzYW1wbGU9e3NhbXBsZX0gZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuXHRcdDxkaXYgaWQ9J2NvZGVyJz5cbiAgIDxDb2RlRHJvcGRvd24gY3VycmVudD17c3RhdGVtZW50SUR9IGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz5cbiAgIDxGbGFnVHJhY2tlciBjdXJyZW50PXtzdGF0ZW1lbnRJRH0vPlxuICAgPE5hdiBjdXJyZW50PXtzdGF0ZW1lbnR9IC8+XG4gIDwvZGl2PlxuICAgPEZvb3RCb29rIGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz5cbiAgPC9kaXY+XG4gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+ICB7XG4vLyAgdHJ5IHtcblx0Y29uc3QgW3N0YXRlUmVzLCBnbG9zc1Jlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0ZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdGF0ZW1lbnQvJHtjb250ZXh0LnBhcmFtcy5zdGF0ZW1lbnRJRH1gKSxcblx0XHRmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2dsb3NzYCldKSBcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSdzIGF3YWl0IHJlcyBjbG9uZSB0ZXh0IG91dHB1dCBmb3Igc3RhdGVSZXM6XCIpOyBjb25zb2xlLmxvZyhhd2FpdCBzdGF0ZVJlcy5jbG9uZSgpLnRleHQoKSkgXG4vL1x0Y29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0IGZvciBnbG9zc1JlczpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHN0YXRlUmVzLmNsb25lKCkudGV4dCgpKSBcbiBjb25zdCBbc3RhdGVtZW50LCBnbG9zc2FyeV0gPSBhd2FpdCBQcm9taXNlLmFsbChbc3RhdGVSZXMuanNvbigpLCBnbG9zc1Jlcy5qc29uKCldKVxuLy9cdGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgc3RhdGVtZW50OlwiKTsgY29uc29sZS5sb2coc3RhdGVtZW50KTsgXG4vLyBjb25zb2xlLmxvZyhcImhlcmUgaXMgdGhlIGdsb3NzYXJ5OlwiKTsgY29uc29sZS5sb2coZ2xvc3NhcnkpXG4gIHJldHVybiB7XG4gIHByb3BzOiBcbiAgIHsgc3RhdGVtZW50LCBnbG9zc2FyeSB9XG4gfTtcbn0gIFxuLy99Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTmF2IiwiRm9vdEJvb2siLCJDb2RlRHJvcGRvd24iLCJTdGF0ZW1lbnRCb3giLCJGbGFnVHJhY2tlciIsIlN0YXRlbWVudCIsInN0YXRlbWVudCIsImdsb3NzYXJ5Iiwic2FtcGxlIiwic3RhdGVtZW50SUQiLCJwaHJhc2UiLCJjb2RlZCIsImkiLCJ3b3JkcyIsImlubmVySFRNTCIsInRvb2x0aXAiLCJuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzaG9ydENvZGUiLCJjb2RlTmFtZSIsImxlbmd0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXYiLCJpZCIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});