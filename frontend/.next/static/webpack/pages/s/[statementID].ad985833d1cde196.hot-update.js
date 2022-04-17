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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\n/* harmony import */ var _components_Workspace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Workspace */ \"./components/Workspace.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Statement = function(param) {\n    var statement = param.statement, glossary = param.glossary;\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var sample = statement.statement;\n    var statementID = sample[\"statementID\"];\n    console.log(\"statementID attempts to log the current ID:\");\n    console.log(statementID);\n    var content = sample[\"content\"];\n    console.log(\"statementID attempts to log the statement content:\");\n    console.log(content);\n    var next = statement.nextID;\n    console.log(\"statementID attempts to log next ID\");\n    console.log(next);\n    var prev = statement.prevID;\n    console.log(\"statementID attempts to log the previous ID\");\n    console.log(prev);\n    //generate the CSS:\n    var arcss = [];\n    for(var i = 0; i < glossary.length; i++){\n        var str = \"mark.\" + glossary[i].shortCode + \" { background-color: \" + glossary[i].colorCode + \"; } \";\n        arcss.push(str);\n    }\n    var css = arcss.join(\"\");\n    console.log(\"check that the css is happening as intended:\");\n    console.log(css);\n    return(//TODO: make a layout for display (also, controls)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n            [\n                \"6a2805f03c949f56\",\n                [\n                    css\n                ]\n            ]\n        ]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                css: css,\n                sample: sample\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                current: statementID,\n                glossary: glossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 41,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                css: css,\n                glossary: glossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 42,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                current: statement\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"6a2805f03c949f56\",\n                dynamic: [\n                    css\n                ],\n                /*#__PURE__*/ children: \"\".concat(css)\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, _this));\n};\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUF5QjtBQUl3QjtBQUNhO0FBQ1I7QUFDRDtBQVFyRCxJQUFNSyxTQUFTLEdBQTZELGdCQUEyQjtRQUF6QkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUNoRyxnRkFBZ0Y7SUFDaEYsSUFBSUMsTUFBTSxHQUFHRixTQUFTLENBQUNBLFNBQVM7SUFDaEMsSUFBSUcsV0FBVyxHQUFXRCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQy9DRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBQUNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXLENBQUMsQ0FBQztJQUNyRixJQUFJRyxPQUFPLEdBQUdKLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDL0JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7SUFBQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hGLElBQUlDLElBQUksR0FBR1AsU0FBUyxDQUFDUSxNQUFNO0lBQzNCSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQUNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxJQUFJRSxJQUFJLEdBQUdULFNBQVMsQ0FBQ1UsTUFBTTtJQUMzQk4sT0FBTyxDQUFDQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUFDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFFOUUsbUJBQW1CO0lBQ25CLElBQUlFLEtBQUssR0FBYSxFQUFFO0lBQ3hCLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHWCxRQUFRLENBQUNZLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUU7UUFDeEMsSUFBTUUsR0FBRyxHQUFHLE9BQU8sR0FBR2IsUUFBUSxDQUFDVyxDQUFDLENBQUMsQ0FBQ0csU0FBUyxHQUFHLHVCQUF1QixHQUFHZCxRQUFRLENBQUNXLENBQUMsQ0FBQyxDQUFDSSxTQUFTLEdBQUcsTUFBTTtRQUN0R0wsS0FBSyxDQUFDTSxJQUFJLENBQUNILEdBQUcsQ0FBQyxDQUFDO0tBQ2pCO0lBQ0QsSUFBTUksR0FBRyxHQUFHUCxLQUFLLENBQUNRLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDMUJmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFBQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNhLEdBQUcsQ0FBQyxDQUFDO0lBRTlFLE9BQ0Msa0RBQWtEO2tCQUNsRCw4REFBQ0UsS0FBRzs7Ozs7b0JBS2FGLEdBQUc7Ozs7OzBCQUpsQiw4REFBQ3BCLDZEQUFZO2dCQUFDb0IsR0FBRyxFQUFFQSxHQUFHO2dCQUFFaEIsTUFBTSxFQUFFQSxNQUFNOzs7OztxQkFBSTswQkFDNUMsOERBQUNMLDhEQUFZO2dCQUFDd0IsT0FBTyxFQUFFbEIsV0FBVztnQkFBRUYsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFBSTswQkFDMUQsOERBQUNMLDREQUFRO2dCQUFDc0IsR0FBRyxFQUFFQSxHQUFHO2dCQUFFakIsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFBSTswQkFDeEMsOERBQUNOLHVEQUFHO2dCQUFDMEIsT0FBTyxFQUFFckIsU0FBUzs7Ozs7cUJBQUk7Ozs7b0JBQ1prQixHQUFHOzt3Q0EzQ3RCLFVBMkNtQkEsR0FBRyxDQTNDckI7Ozs7Ozs7YUE0Q08sRUFDTjtDQUNEO0FBL0JLbkIsS0FBQUEsU0FBUzs7QUFpQ2YsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcy9bc3RhdGVtZW50SURdLnRzeD84MDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YXRlbWVudCdcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCBHbG9zc2FyeSwgeyBDb2RlTGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2xvc3NhcnknXG5pbXBvcnQgQ29kZURyb3Bkb3duIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVBpY2tlcidcbmltcG9ydCBTdGF0ZW1lbnRCb3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Xb3Jrc3BhY2UnXG5cbmV4cG9ydCB0eXBlIFJlYWRlclByb3BzID0ge1xuICBzdGF0ZW1lbnQ6IFN0YXRlbWVudFByb3BzW107XG4gIG5leHRJRDogbnVtYmVyIHwgbnVsbDtcbiAgcHJldklEOiBudW1iZXIgfCBudWxsO1xufVxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPHtzdGF0ZW1lbnQ6IFJlYWRlclByb3BzLCBnbG9zc2FyeTogQ29kZUxpc3RbXX0+ID0gKHtzdGF0ZW1lbnQsIGdsb3NzYXJ5fSkgPT4ge1xuIC8vIGNvbnNvbGUubG9nKFwiQ29udGVudHMgb2YgJ3Jlc3QnOlwiKTsgY29uc29sZS5sb2cocmVzdCk7IC8vdHJvdWJsZXNob290aW5nIHRvb2xcbiBsZXQgc2FtcGxlID0gc3RhdGVtZW50LnN0YXRlbWVudDtcbiBsZXQgc3RhdGVtZW50SUQ6IG51bWJlciA9IHNhbXBsZVtcInN0YXRlbWVudElEXCJdO1xuIGNvbnNvbGUubG9nKCdzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIGN1cnJlbnQgSUQ6Jyk7IGNvbnNvbGUubG9nKHN0YXRlbWVudElEKTtcbiBsZXQgY29udGVudCA9IHNhbXBsZVtcImNvbnRlbnRcIl07XG4gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIHN0YXRlbWVudCBjb250ZW50OlwiKTsgY29uc29sZS5sb2coY29udGVudCk7XG4gbGV0IG5leHQgPSBzdGF0ZW1lbnQubmV4dElEO1xuIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIG5leHQgSURcIik7IGNvbnNvbGUubG9nKG5leHQpO1xuIGxldCBwcmV2ID0gc3RhdGVtZW50LnByZXZJRDtcbiBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyB0aGUgcHJldmlvdXMgSURcIik7IGNvbnNvbGUubG9nKHByZXYpO1xuXG4gLy9nZW5lcmF0ZSB0aGUgQ1NTOlxuIGxldCBhcmNzczogc3RyaW5nW10gPSBbXTtcbiBmb3IgKGxldCBpID0gMDsgaSA8IGdsb3NzYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICBjb25zdCBzdHIgPSAnbWFyay4nICsgZ2xvc3NhcnlbaV0uc2hvcnRDb2RlICsgJyB7IGJhY2tncm91bmQtY29sb3I6ICcgKyBnbG9zc2FyeVtpXS5jb2xvckNvZGUgKyAnOyB9ICc7XG4gICBhcmNzcy5wdXNoKHN0cik7XG4gfVxuIGNvbnN0IGNzcyA9IGFyY3NzLmpvaW4oJycpO1xuIGNvbnNvbGUubG9nKFwiY2hlY2sgdGhhdCB0aGUgY3NzIGlzIGhhcHBlbmluZyBhcyBpbnRlbmRlZDpcIik7IGNvbnNvbGUubG9nKGNzcyk7XG5cbiByZXR1cm4gKFxuICAvL1RPRE86IG1ha2UgYSBsYXlvdXQgZm9yIGRpc3BsYXkgKGFsc28sIGNvbnRyb2xzKVxuICA8ZGl2PlxuICAgIDxTdGF0ZW1lbnRCb3ggY3NzPXtjc3N9IHNhbXBsZT17c2FtcGxlfSAvPlxuXHRcdDxDb2RlRHJvcGRvd24gY3VycmVudD17c3RhdGVtZW50SUR9IGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz5cblx0XHQ8R2xvc3NhcnkgY3NzPXtjc3N9IGdsb3NzYXJ5PXtnbG9zc2FyeX0gLz5cbiAgICA8TmF2IGN1cnJlbnQ9e3N0YXRlbWVudH0gLz5cbiAgICA8c3R5bGUganN4PntgJHtjc3N9YH08L3N0eWxlPlxuICA8L2Rpdj5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4gIHtcbi8vICB0cnkge1xuXHRjb25zdCBbc3RhdGVSZXMsIGdsb3NzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YXRlbWVudC8ke2NvbnRleHQucGFyYW1zLnN0YXRlbWVudElEfWApLFxuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2xvc3NgKV0pIFxuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0IGZvciBzdGF0ZVJlczpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHN0YXRlUmVzLmNsb25lKCkudGV4dCgpKSBcbi8vXHRjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQgZm9yIGdsb3NzUmVzOlwiKTsgY29uc29sZS5sb2coYXdhaXQgc3RhdGVSZXMuY2xvbmUoKS50ZXh0KCkpIFxuIGNvbnN0IFtzdGF0ZW1lbnQsIGdsb3NzYXJ5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtzdGF0ZVJlcy5qc29uKCksIGdsb3NzUmVzLmpzb24oKV0pXG4vL1x0Y29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBzdGF0ZW1lbnQ6XCIpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpOyBcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgZ2xvc3Nhcnk6XCIpOyBjb25zb2xlLmxvZyhnbG9zc2FyeSlcbiAgcmV0dXJuIHtcbiAgcHJvcHM6IFxuICAgeyBzdGF0ZW1lbnQsIGdsb3NzYXJ5IH1cbiB9O1xufSAgXG4vL30iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXYiLCJHbG9zc2FyeSIsIkNvZGVEcm9wZG93biIsIlN0YXRlbWVudEJveCIsIlN0YXRlbWVudCIsInN0YXRlbWVudCIsImdsb3NzYXJ5Iiwic2FtcGxlIiwic3RhdGVtZW50SUQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm5leHQiLCJuZXh0SUQiLCJwcmV2IiwicHJldklEIiwiYXJjc3MiLCJpIiwibGVuZ3RoIiwic3RyIiwic2hvcnRDb2RlIiwiY29sb3JDb2RlIiwicHVzaCIsImNzcyIsImpvaW4iLCJkaXYiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});