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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\n/* harmony import */ var _components_Workspace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Workspace */ \"./components/Workspace.tsx\");\n/* harmony import */ var _components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FlagTracker */ \"./components/FlagTracker.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Statement = function(param) {\n    var statement = param.statement, glossary = param.glossary;\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var sample = statement.statement;\n    var statementID = sample[\"statementID\"];\n    // console.log('statementID attempts to log the current ID:'); console.log(statementID);\n    // let content = sample[\"content\"];\n    // console.log(\"statementID attempts to log the statement content:\"); console.log(content);\n    // let next = statement.nextID;\n    // console.log(\"statementID attempts to log next ID\"); console.log(next);\n    // let prev = statement.prevID;\n    // console.log(\"statementID attempts to log the previous ID\"); console.log(prev);\n    var tooltip = function() {\n        var statement = document.getElementById(\"statement\");\n        for(var i = 0; i < glossary.length; i++){\n            var short = glossary[i].shortCode;\n            var name = glossary[i].codeName;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"reader\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sample: sample,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 41,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, _this),\n                    \"    \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"coder\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        current: statementID,\n                        glossary: glossary\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FlagTracker__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        current: statementID\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                        lineNumber: 45,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 43,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                current: statement\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, _this);\n};\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFJUztBQUNhO0FBQ1I7QUFDRDtBQUNDO0FBUXRELElBQU1NLFNBQVMsR0FBNkQsZ0JBQTJCO1FBQXpCQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBQ2hHLGdGQUFnRjtJQUNoRixJQUFJQyxNQUFNLEdBQUdGLFNBQVMsQ0FBQ0EsU0FBUztJQUNoQyxJQUFJRyxXQUFXLEdBQVdELE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDaEQsd0ZBQXdGO0lBQ3hGLG1DQUFtQztJQUNuQywyRkFBMkY7SUFDM0YsK0JBQStCO0lBQy9CLHlFQUF5RTtJQUN6RSwrQkFBK0I7SUFDL0IsaUZBQWlGO0lBRS9FLElBQU1FLE9BQU8sR0FBRyxXQUFNO1FBQ3BCLElBQU1KLFNBQVMsR0FBR0ssUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBRXRELElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTixRQUFRLENBQUNPLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUU7WUFDdkMsSUFBTUUsS0FBSyxHQUFHUixRQUFRLENBQUNNLENBQUMsQ0FBQyxDQUFDRyxTQUFTO1lBQ3ZDLElBQU1DLElBQUksR0FBR1YsUUFBUSxDQUFDTSxDQUFDLENBQUMsQ0FBQ0ssUUFBUTtTQUNqQztLQUNEO0lBRUQscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLFFBQVE7OzBCQUNkLDhEQUFDRCxLQUFHO2dCQUFDQyxFQUFFLEVBQUMsUUFBUTs7a0NBQ2YsOERBQUNqQiw2REFBWTt3QkFBQ0ssTUFBTSxFQUFFQSxNQUFNO3dCQUFFRCxRQUFRLEVBQUVBLFFBQVE7Ozs7OzZCQUFJO2tDQUNyRCw4REFBQ04sNERBQVE7d0JBQUNNLFFBQVEsRUFBRUEsUUFBUTs7Ozs7NkJBQUk7b0JBQUEsTUFBSTs7Ozs7O3FCQUFNOzBCQUM1Qyw4REFBQ1ksS0FBRztnQkFBQ0MsRUFBRSxFQUFDLE9BQU87O2tDQUNYLDhEQUFDbEIsOERBQVk7d0JBQUNtQixPQUFPLEVBQUVaLFdBQVc7d0JBQUVGLFFBQVEsRUFBRUEsUUFBUTs7Ozs7NkJBQUk7a0NBQzNELDhEQUFDSCwrREFBVzt3QkFBQ2lCLE9BQU8sRUFBRVosV0FBVzs7Ozs7NkJBQUc7Ozs7OztxQkFFL0I7MEJBQ04sOERBQUNULHVEQUFHO2dCQUFDcUIsT0FBTyxFQUFFZixTQUFTOzs7OztxQkFBSTs7Ozs7O2FBQ3ZCLENBQ047Q0FDRDtBQWxDS0QsS0FBQUEsU0FBUzs7QUFvQ2YsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcy9bc3RhdGVtZW50SURdLnRzeD84MDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YXRlbWVudCdcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCBHbG9zc2FyeSwgeyBDb2RlTGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2xvc3NhcnknXG5pbXBvcnQgQ29kZURyb3Bkb3duIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVBpY2tlcidcbmltcG9ydCBTdGF0ZW1lbnRCb3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Xb3Jrc3BhY2UnXG5pbXBvcnQgRmxhZ1RyYWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GbGFnVHJhY2tlcidcblxuZXhwb3J0IHR5cGUgUmVhZGVyUHJvcHMgPSB7XG4gIHN0YXRlbWVudDogU3RhdGVtZW50UHJvcHNbXTtcbiAgbmV4dElEOiBudW1iZXIgfCBudWxsO1xuICBwcmV2SUQ6IG51bWJlciB8IG51bGw7XG59XG5cbmNvbnN0IFN0YXRlbWVudDogUmVhY3QuRkM8e3N0YXRlbWVudDogUmVhZGVyUHJvcHMsIGdsb3NzYXJ5OiBDb2RlTGlzdFtdfT4gPSAoe3N0YXRlbWVudCwgZ2xvc3Nhcnl9KSA9PiB7XG4gLy8gY29uc29sZS5sb2coXCJDb250ZW50cyBvZiAncmVzdCc6XCIpOyBjb25zb2xlLmxvZyhyZXN0KTsgLy90cm91Ymxlc2hvb3RpbmcgdG9vbFxuIGxldCBzYW1wbGUgPSBzdGF0ZW1lbnQuc3RhdGVtZW50O1xuIGxldCBzdGF0ZW1lbnRJRDogbnVtYmVyID0gc2FtcGxlW1wic3RhdGVtZW50SURcIl07XG4vLyBjb25zb2xlLmxvZygnc3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBjdXJyZW50IElEOicpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnRJRCk7XG4vLyBsZXQgY29udGVudCA9IHNhbXBsZVtcImNvbnRlbnRcIl07XG4vLyBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgc3RhdGVtZW50IGNvbnRlbnQ6XCIpOyBjb25zb2xlLmxvZyhjb250ZW50KTtcbi8vIGxldCBuZXh0ID0gc3RhdGVtZW50Lm5leHRJRDtcbi8vIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIG5leHQgSURcIik7IGNvbnNvbGUubG9nKG5leHQpO1xuLy8gbGV0IHByZXYgPSBzdGF0ZW1lbnQucHJldklEO1xuLy8gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIHByZXZpb3VzIElEXCIpOyBjb25zb2xlLmxvZyhwcmV2KTtcblxuICBjb25zdCB0b29sdGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZW1lbnQnKTtcbiAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9zc2FyeS5sZW5ndGg7IGkrKykge1xuICAgICAgIGNvbnN0IHNob3J0ID0gZ2xvc3NhcnlbaV0uc2hvcnRDb2RlO1xuICAgY29uc3QgbmFtZSA9IGdsb3NzYXJ5W2ldLmNvZGVOYW1lO1xuICB9XG4gfVxuXG4gcmV0dXJuIChcbiAgPGRpdiBpZD0ncmVhZGVyJz5cbiAgICA8ZGl2IGlkPSdjZW50ZXInPlxuICAgICA8U3RhdGVtZW50Qm94IHNhbXBsZT17c2FtcGxlfSBnbG9zc2FyeT17Z2xvc3Nhcnl9IC8+XG5cdCAgXHQ8R2xvc3NhcnkgZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPiAgICA8L2Rpdj5cblx0XHQ8ZGl2IGlkPSdjb2Rlcic+XG4gICAgICA8Q29kZURyb3Bkb3duIGN1cnJlbnQ9e3N0YXRlbWVudElEfSBnbG9zc2FyeT17Z2xvc3Nhcnl9IC8+XG4gICAgIDxGbGFnVHJhY2tlciBjdXJyZW50PXtzdGF0ZW1lbnRJRH0vPlxuXG4gICAgPC9kaXY+XG4gICAgPE5hdiBjdXJyZW50PXtzdGF0ZW1lbnR9IC8+XG4gIDwvZGl2PlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiAge1xuLy8gIHRyeSB7XG5cdGNvbnN0IFtzdGF0ZVJlcywgZ2xvc3NSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvc3RhdGVtZW50LyR7Y29udGV4dC5wYXJhbXMuc3RhdGVtZW50SUR9YCksXG5cdFx0ZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9nbG9zc2ApXSkgXG4vLyBjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQgZm9yIHN0YXRlUmVzOlwiKTsgY29uc29sZS5sb2coYXdhaXQgc3RhdGVSZXMuY2xvbmUoKS50ZXh0KCkpIFxuLy9cdGNvbnNvbGUubG9nKFwiaGVyZSdzIGF3YWl0IHJlcyBjbG9uZSB0ZXh0IG91dHB1dCBmb3IgZ2xvc3NSZXM6XCIpOyBjb25zb2xlLmxvZyhhd2FpdCBzdGF0ZVJlcy5jbG9uZSgpLnRleHQoKSkgXG4gY29uc3QgW3N0YXRlbWVudCwgZ2xvc3NhcnldID0gYXdhaXQgUHJvbWlzZS5hbGwoW3N0YXRlUmVzLmpzb24oKSwgZ2xvc3NSZXMuanNvbigpXSlcbi8vXHRjb25zb2xlLmxvZyhcImhlcmUgaXMgdGhlIHN0YXRlbWVudDpcIik7IGNvbnNvbGUubG9nKHN0YXRlbWVudCk7IFxuLy8gY29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBnbG9zc2FyeTpcIik7IGNvbnNvbGUubG9nKGdsb3NzYXJ5KVxuICByZXR1cm4ge1xuICBwcm9wczogXG4gICB7IHN0YXRlbWVudCwgZ2xvc3NhcnkgfVxuIH07XG59ICBcbi8vfSJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdiIsIkdsb3NzYXJ5IiwiQ29kZURyb3Bkb3duIiwiU3RhdGVtZW50Qm94IiwiRmxhZ1RyYWNrZXIiLCJTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJnbG9zc2FyeSIsInNhbXBsZSIsInN0YXRlbWVudElEIiwidG9vbHRpcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic2hvcnQiLCJzaG9ydENvZGUiLCJuYW1lIiwiY29kZU5hbWUiLCJkaXYiLCJpZCIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});