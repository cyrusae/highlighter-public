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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ \"./components/Navigation.tsx\");\n/* harmony import */ var _components_Glossary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Glossary */ \"./components/Glossary.tsx\");\n/* harmony import */ var _components_CodePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CodePicker */ \"./components/CodePicker.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar Statement = function(param) {\n    var statement = param.statement, glossary = param.glossary;\n    // console.log(\"Contents of 'rest':\"); console.log(rest); //troubleshooting tool\n    var statementID = statement.statement[\"statementID\"];\n    console.log(\"statementID attempts to log the current ID:\");\n    console.log(statementID);\n    var content = statement.statement[\"content\"];\n    console.log(\"statementID attempts to log the statement content:\");\n    console.log(content);\n    var next = statement.nextID;\n    console.log(\"statementID attempts to log next ID\");\n    console.log(next);\n    var prev = statement.prevID;\n    console.log(\"statementID attempts to log the previous ID\");\n    console.log(prev);\n    //generate the CSS:\n    var arcss = [];\n    for(var i = 0; i < glossary.length; i++){\n        var str = \"mark.\" + glossary[i].shortCode + \" { background-color: \" + glossary[i].colorCode + \"; } \";\n        arcss.push(str);\n    }\n    var css = arcss.join(\"\");\n    return(//TODO: make a layout for display (also, controls)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metadata\",\n                children: [\n                    \"ID: \",\n                    statementID\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"statement\",\n                id: \"statebox\",\n                dangerouslySetInnerHTML: {\n                    __html: content\n                }\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                current: statementID,\n                glossary: glossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 39,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Glossary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                css: css,\n                glossary: glossary\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 40,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                current: statement\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/pages/s/[statementID].tsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, _this));\n};\n_c = Statement;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c;\n$RefreshReg$(_c, \"Statement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBSXdCO0FBQ2E7QUFDUjtBQVF0RCxJQUFNSSxTQUFTLEdBQTZELGdCQUEyQjtRQUF6QkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUNoRyxnRkFBZ0Y7SUFDaEYsSUFBSUMsV0FBVyxHQUFXRixTQUFTLENBQUNBLFNBQVMsQ0FBQyxhQUFhLENBQUM7SUFDNURHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7SUFBQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFdBQVcsQ0FBQyxDQUFDO0lBQ3JGLElBQUlHLE9BQU8sR0FBR0wsU0FBUyxDQUFDQSxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQzVDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0lBQUNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUMsQ0FBQztJQUN4RixJQUFJQyxJQUFJLEdBQUdOLFNBQVMsQ0FBQ08sTUFBTTtJQUMzQkosT0FBTyxDQUFDQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUFDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFDdEUsSUFBSUUsSUFBSSxHQUFHUixTQUFTLENBQUNTLE1BQU07SUFDM0JOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7SUFBQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBRTlFLG1CQUFtQjtJQUNuQixJQUFJRSxLQUFLLEdBQWEsRUFBRTtJQUN4QixJQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1YsUUFBUSxDQUFDVyxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO1FBQ3hDLElBQU1FLEdBQUcsR0FBRyxPQUFPLEdBQUdaLFFBQVEsQ0FBQ1UsQ0FBQyxDQUFDLENBQUNHLFNBQVMsR0FBRyx1QkFBdUIsR0FBR2IsUUFBUSxDQUFDVSxDQUFDLENBQUMsQ0FBQ0ksU0FBUyxHQUFHLE1BQU07UUFDdEdMLEtBQUssQ0FBQ00sSUFBSSxDQUFDSCxHQUFHLENBQUMsQ0FBQztLQUNqQjtJQUNELElBQU1JLEdBQUcsR0FBR1AsS0FBSyxDQUFDUSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBRTFCLE9BQ0Msa0RBQWtEO2tCQUNsRCw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNBLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOztvQkFBQyxNQUFJO29CQUFDbEIsV0FBVzs7Ozs7O3FCQUFPOzBCQUNqRCw4REFBQ2lCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXO2dCQUFDQyxFQUFFLEVBQUMsVUFBVTtnQkFBQ0MsdUJBQXVCLEVBQUU7b0JBQUNDLE1BQU0sRUFBRWxCLE9BQU87aUJBQUM7Ozs7O3FCQUFHOzBCQUN4Riw4REFBQ1AsOERBQVk7Z0JBQUMwQixPQUFPLEVBQUV0QixXQUFXO2dCQUFFRCxRQUFRLEVBQUVBLFFBQVE7Ozs7O3FCQUFJOzBCQUMxRCw4REFBQ0osNERBQVE7Z0JBQUNvQixHQUFHLEVBQUVBLEdBQUc7Z0JBQUVoQixRQUFRLEVBQUVBLFFBQVE7Ozs7O3FCQUFJOzBCQUN4Qyw4REFBQ0wsdURBQUc7Z0JBQUM0QixPQUFPLEVBQUV4QixTQUFTOzs7OztxQkFBSTs7Ozs7O2FBRXZCLEVBQ047Q0FDRDtBQTlCS0QsS0FBQUEsU0FBUzs7QUFnQ2YsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcy9bc3RhdGVtZW50SURdLnRzeD84MDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YXRlbWVudCdcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCBHbG9zc2FyeSwgeyBDb2RlTGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2xvc3NhcnknXG5pbXBvcnQgQ29kZURyb3Bkb3duIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVBpY2tlcidcblxuZXhwb3J0IHR5cGUgUmVhZGVyUHJvcHMgPSB7XG4gIHN0YXRlbWVudDogU3RhdGVtZW50UHJvcHNbXTtcbiAgbmV4dElEOiBudW1iZXIgfCBudWxsO1xuICBwcmV2SUQ6IG51bWJlciB8IG51bGw7XG59XG5cbmNvbnN0IFN0YXRlbWVudDogUmVhY3QuRkM8e3N0YXRlbWVudDogUmVhZGVyUHJvcHMsIGdsb3NzYXJ5OiBDb2RlTGlzdFtdfT4gPSAoe3N0YXRlbWVudCwgZ2xvc3Nhcnl9KSA9PiB7XG4gLy8gY29uc29sZS5sb2coXCJDb250ZW50cyBvZiAncmVzdCc6XCIpOyBjb25zb2xlLmxvZyhyZXN0KTsgLy90cm91Ymxlc2hvb3RpbmcgdG9vbFxuIGxldCBzdGF0ZW1lbnRJRDogbnVtYmVyID0gc3RhdGVtZW50LnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdO1xuIGNvbnNvbGUubG9nKCdzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIGN1cnJlbnQgSUQ6Jyk7IGNvbnNvbGUubG9nKHN0YXRlbWVudElEKTtcbiBsZXQgY29udGVudCA9IHN0YXRlbWVudC5zdGF0ZW1lbnRbXCJjb250ZW50XCJdO1xuIGNvbnNvbGUubG9nKFwic3RhdGVtZW50SUQgYXR0ZW1wdHMgdG8gbG9nIHRoZSBzdGF0ZW1lbnQgY29udGVudDpcIik7IGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuIGxldCBuZXh0ID0gc3RhdGVtZW50Lm5leHRJRDtcbiBjb25zb2xlLmxvZyhcInN0YXRlbWVudElEIGF0dGVtcHRzIHRvIGxvZyBuZXh0IElEXCIpOyBjb25zb2xlLmxvZyhuZXh0KTtcbiBsZXQgcHJldiA9IHN0YXRlbWVudC5wcmV2SUQ7XG4gY29uc29sZS5sb2coXCJzdGF0ZW1lbnRJRCBhdHRlbXB0cyB0byBsb2cgdGhlIHByZXZpb3VzIElEXCIpOyBjb25zb2xlLmxvZyhwcmV2KTtcblxuIC8vZ2VuZXJhdGUgdGhlIENTUzpcbiBsZXQgYXJjc3M6IHN0cmluZ1tdID0gW107XG4gZm9yIChsZXQgaSA9IDA7IGkgPCBnbG9zc2FyeS5sZW5ndGg7IGkrKykge1xuICAgY29uc3Qgc3RyID0gJ21hcmsuJyArIGdsb3NzYXJ5W2ldLnNob3J0Q29kZSArICcgeyBiYWNrZ3JvdW5kLWNvbG9yOiAnICsgZ2xvc3NhcnlbaV0uY29sb3JDb2RlICsgJzsgfSAnO1xuICAgYXJjc3MucHVzaChzdHIpO1xuIH1cbiBjb25zdCBjc3MgPSBhcmNzcy5qb2luKCcnKTtcblxuIHJldHVybiAoXG4gIC8vVE9ETzogbWFrZSBhIGxheW91dCBmb3IgZGlzcGxheSAoYWxzbywgY29udHJvbHMpXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J21ldGFkYXRhJz5JRDoge3N0YXRlbWVudElEfTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdzdGF0ZW1lbnQnIGlkPSdzdGF0ZWJveCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnR9fS8+XG5cdFx0PENvZGVEcm9wZG93biBjdXJyZW50PXtzdGF0ZW1lbnRJRH0gZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuXHRcdDxHbG9zc2FyeSBjc3M9e2Nzc30gZ2xvc3Nhcnk9e2dsb3NzYXJ5fSAvPlxuICAgIDxOYXYgY3VycmVudD17c3RhdGVtZW50fSAvPiAgICBcbiAgICAgIFxuICA8L2Rpdj5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4gIHtcbi8vICB0cnkge1xuXHRjb25zdCBbc3RhdGVSZXMsIGdsb3NzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YXRlbWVudC8ke2NvbnRleHQucGFyYW1zLnN0YXRlbWVudElEfWApLFxuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZ2xvc3NgKV0pIFxuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgcmVzIGNsb25lIHRleHQgb3V0cHV0IGZvciBzdGF0ZVJlczpcIik7IGNvbnNvbGUubG9nKGF3YWl0IHN0YXRlUmVzLmNsb25lKCkudGV4dCgpKSBcbi8vXHRjb25zb2xlLmxvZyhcImhlcmUncyBhd2FpdCByZXMgY2xvbmUgdGV4dCBvdXRwdXQgZm9yIGdsb3NzUmVzOlwiKTsgY29uc29sZS5sb2coYXdhaXQgc3RhdGVSZXMuY2xvbmUoKS50ZXh0KCkpIFxuIGNvbnN0IFtzdGF0ZW1lbnQsIGdsb3NzYXJ5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtzdGF0ZVJlcy5qc29uKCksIGdsb3NzUmVzLmpzb24oKV0pXG4vL1x0Y29uc29sZS5sb2coXCJoZXJlIGlzIHRoZSBzdGF0ZW1lbnQ6XCIpOyBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpOyBcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgZ2xvc3Nhcnk6XCIpOyBjb25zb2xlLmxvZyhnbG9zc2FyeSlcbiAgcmV0dXJuIHtcbiAgcHJvcHM6IFxuICAgeyBzdGF0ZW1lbnQsIGdsb3NzYXJ5IH1cbiB9O1xufSAgXG4vL30iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXYiLCJHbG9zc2FyeSIsIkNvZGVEcm9wZG93biIsIlN0YXRlbWVudCIsInN0YXRlbWVudCIsImdsb3NzYXJ5Iiwic3RhdGVtZW50SUQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm5leHQiLCJuZXh0SUQiLCJwcmV2IiwicHJldklEIiwiYXJjc3MiLCJpIiwibGVuZ3RoIiwic3RyIiwic2hvcnRDb2RlIiwiY29sb3JDb2RlIiwicHVzaCIsImNzcyIsImpvaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/s/[statementID].tsx\n");

/***/ })

});