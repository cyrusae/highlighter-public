"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/all",{

/***/ "./components/Statement.tsx":
/*!**********************************!*\
  !*** ./components/Statement.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined;\n\n\n\n\nvar Statement = function(param) {\n    var statement = param.statement;\n    //  console.log(statement);\n    var content = statement.content;\n    var IDstring = statement.statementID.toString();\n    //removed:\n    //  \n    // useEffect(() => {\n    //  let the = document.getElementById(IDstring);\n    //  the.addEventListener(//'onclick', () => {\n    //   Router.push('/s/[statementID]', `/s/${statement.statementID}`)\n    //  })\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: IDstring,\n        className: \"statementBox\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            body: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Text, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"statement\",\n                        id: statement.statementID.toString(),\n                        dangerouslySetInnerHTML: {\n                            __html: content\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 4\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Stack, {\n                    direction: \"horizontal\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    variant: \"info\",\n                    size: \"sm\",\n                    onClick: function() {\n                        return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/[statementID]\", \"/s/\".concat(statement.statementID));\n                    },\n                    children: \"view\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    variant: \"warning\",\n                    size: \"sm\",\n                    className: \"ms-auto\",\n                    disabled: true,\n                    children: \"flag\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 3\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n            lineNumber: 31,\n            columnNumber: 2\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Statement.tsx\",\n        lineNumber: 30,\n        columnNumber: 2\n    }, _this);\n};\n_c = Statement;\n// Previously I'd had this in:\n// <div id='notes'>\n//<StatementAnnotation comment={statement.comment} />\n// </div>\n// However, since annotations will need to be directly editable, best to leave for later.\nfunction StatementAnnotation(props) {\n    var comments = props.comment;\n    if (comments === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Add ability to add comments.\"\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: comments\n    }, void 0, false);\n}\n_c1 = StatementAnnotation;\n// TO DO: Best way to also query and load information about the existing encodings, if any \n/* harmony default export */ __webpack_exports__[\"default\"] = (Statement);\nvar _c, _c1;\n$RefreshReg$(_c, \"Statement\");\n$RefreshReg$(_c1, \"StatementAnnotation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRlbWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUjtBQUNlO0FBWS9DLElBQU1JLFNBQVMsR0FBMEMsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7SUFDckUsMkJBQTJCO0lBQzFCLElBQUlDLE9BQU8sR0FBR0QsU0FBUyxDQUFDQyxPQUFPO0lBQy9CLElBQUlDLFFBQVEsR0FBR0YsU0FBUyxDQUFDRyxXQUFXLENBQUNDLFFBQVEsRUFBRTtJQUNoRCxVQUFVO0lBQ1YsSUFBSTtJQUNKLG9CQUFvQjtJQUNwQixnREFBZ0Q7SUFDaEQsNkNBQTZDO0lBQzdDLG1FQUFtRTtJQUNuRSxNQUFNO0lBQ04sS0FBSztJQUdKLHFCQUNBLDhEQUFDQyxLQUFHO1FBQUNDLEVBQUUsRUFBRUosUUFBUTtRQUFFSyxTQUFTLEVBQUMsY0FBYztrQkFDM0MsNEVBQUNULGlEQUFJO1lBQUNVLElBQUk7OzhCQUNULDhEQUFDVixzREFBUzs4QkFDVCw0RUFBQ08sS0FBRzt3QkFBQ0UsU0FBUyxFQUFDLFdBQVc7d0JBQUNELEVBQUUsRUFBRU4sU0FBUyxDQUFDRyxXQUFXLENBQUNDLFFBQVEsRUFBRTt3QkFBRU0sdUJBQXVCLEVBQUU7NEJBQUNDLE1BQU0sRUFBRVYsT0FBTzt5QkFBQzs7Ozs7NkJBQUc7Ozs7O3lCQUNuRzs4QkFDWiw4REFBQ1csS0FBSztvQkFBQ0MsU0FBUyxFQUFDLFlBQVk7Ozs7O3lCQUVyQjs4QkFDUiw4REFBQ2hCLG1EQUFNO29CQUFDaUIsT0FBTyxFQUFDLE1BQU07b0JBQUNDLElBQUksRUFBQyxJQUFJO29CQUFDQyxPQUFPLEVBQUU7K0JBQU1wQix1REFBVyxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBd0IsT0FBdEJJLFNBQVMsQ0FBQ0csV0FBVyxDQUFFLENBQUM7cUJBQUE7OEJBQUUsTUFBSTs7Ozs7eUJBQVM7OEJBQzdILDhEQUFDTixtREFBTTtvQkFBQ2lCLE9BQU8sRUFBQyxTQUFTO29CQUFDQyxJQUFJLEVBQUMsSUFBSTtvQkFBQ1IsU0FBUyxFQUFDLFNBQVM7b0JBQUNXLFFBQVE7OEJBQUMsTUFBSTs7Ozs7eUJBQVM7Ozs7OztpQkFDeEU7Ozs7O2FBQ0QsQ0FDTDtDQUNEO0FBNUJLbkIsS0FBQUEsU0FBUztBQThCZiw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1QseUZBQXlGO0FBR3pGLFNBQVNvQixtQkFBbUIsQ0FBQ0MsS0FBaUMsRUFBRTtJQUMvRCxJQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsT0FBTztJQUM5QixJQUFJRCxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3RCLHFCQUNDO3NCQUFFLDhCQUVGO3lCQUFHLENBQ0g7S0FDRDtJQUNELHFCQUNDO2tCQUNFQSxRQUFRO3FCQUNQLENBQ0g7Q0FDRDtBQWRRRixNQUFBQSxtQkFBbUI7QUF1QjVCLDJGQUEyRjtBQUUzRiwrREFBZXBCLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0ZW1lbnQudHN4P2JjZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCB0eXBlIFN0YXRlbWVudFByb3BzID0ge1xuIHN0YXRlbWVudElEOiBudW1iZXI7XG4gY29udGVudDogc3RyaW5nO1xuIGNvZGVkOiBib29sZWFuO1xuIGNvbW1lbnQ6IHN0cmluZyB8IG51bGw7XG4gdXBkYXRlZEF0OiBEYXRlO1xuLy8gbmV4dElEOiBudW1iZXIgfCBudWxsO1xuLy8gcHJldklEOiBudW1iZXIgfCBudWxsO1xufVxuXG5jb25zdCBTdGF0ZW1lbnQ6IFJlYWN0LkZDPHtzdGF0ZW1lbnQ6IFN0YXRlbWVudFByb3BzfT4gPSAoeyBzdGF0ZW1lbnQgfSkgPT4ge1xuLy8gIGNvbnNvbGUubG9nKHN0YXRlbWVudCk7XG4gbGV0IGNvbnRlbnQgPSBzdGF0ZW1lbnQuY29udGVudDtcbiBsZXQgSURzdHJpbmcgPSBzdGF0ZW1lbnQuc3RhdGVtZW50SUQudG9TdHJpbmcoKVxuLy9yZW1vdmVkOlxuLy8gIFxuLy8gdXNlRWZmZWN0KCgpID0+IHtcbi8vICBsZXQgdGhlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSURzdHJpbmcpO1xuLy8gIHRoZS5hZGRFdmVudExpc3RlbmVyKC8vJ29uY2xpY2snLCAoKSA9PiB7XG4vLyAgIFJvdXRlci5wdXNoKCcvcy9bc3RhdGVtZW50SURdJywgYC9zLyR7c3RhdGVtZW50LnN0YXRlbWVudElEfWApXG4vLyAgfSlcbi8vIH0pXG5cblxuIHJldHVybiAoXG4gPGRpdiBpZD17SURzdHJpbmd9IGNsYXNzTmFtZT0nc3RhdGVtZW50Qm94JyA+IFxuIDxDYXJkIGJvZHk+XG4gIDxDYXJkLlRleHQ+XG4gICA8ZGl2IGNsYXNzTmFtZT0nc3RhdGVtZW50JyBpZD17c3RhdGVtZW50LnN0YXRlbWVudElELnRvU3RyaW5nKCl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50fX0vPlxuICA8L0NhcmQuVGV4dD5cbiAgPFN0YWNrIGRpcmVjdGlvbj0naG9yaXpvbnRhbCc+XG4gICBcbiAgPC9TdGFjaz5cbiAgPEJ1dHRvbiB2YXJpYW50PSdpbmZvJyBzaXplPSdzbScgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9zL1tzdGF0ZW1lbnRJRF0nLCBgL3MvJHtzdGF0ZW1lbnQuc3RhdGVtZW50SUR9YCl9PnZpZXc8L0J1dHRvbj5cbiAgPEJ1dHRvbiB2YXJpYW50PSd3YXJuaW5nJyBzaXplPSdzbScgY2xhc3NOYW1lPSdtcy1hdXRvJyBkaXNhYmxlZD5mbGFnPC9CdXR0b24+XG4gPC9DYXJkPlxuIDwvZGl2PlxuIClcbn1cblxuLy8gUHJldmlvdXNseSBJJ2QgaGFkIHRoaXMgaW46XG4vLyA8ZGl2IGlkPSdub3Rlcyc+XG4vLzxTdGF0ZW1lbnRBbm5vdGF0aW9uIGNvbW1lbnQ9e3N0YXRlbWVudC5jb21tZW50fSAvPlxuLy8gPC9kaXY+XG4vLyBIb3dldmVyLCBzaW5jZSBhbm5vdGF0aW9ucyB3aWxsIG5lZWQgdG8gYmUgZGlyZWN0bHkgZWRpdGFibGUsIGJlc3QgdG8gbGVhdmUgZm9yIGxhdGVyLlxuXG5cbmZ1bmN0aW9uIFN0YXRlbWVudEFubm90YXRpb24ocHJvcHM6IHsgY29tbWVudDogc3RyaW5nIHwgbnVsbCB9KSB7XG4gY29uc3QgY29tbWVudHMgPSBwcm9wcy5jb21tZW50O1xuIGlmIChjb21tZW50cyA9PT0gbnVsbCkge1xuICByZXR1cm4gKFxuICAgPD5cbiAgICBBZGQgYWJpbGl0eSB0byBhZGQgY29tbWVudHMuXG4gICA8Lz5cbiAgKVxuIH1cbiByZXR1cm4gKFxuICA8PlxuICAge2NvbW1lbnRzfVxuICA8Lz5cbiApXG59XG5cbmV4cG9ydCB0eXBlIEVuY29kaW5nUHJvcHMgPSB7XG4gcGFyZW50OiBudW1iZXIgfCBudWxsO1xuIGNvZGVVc2VkOiBzdHJpbmcgfCBudWxsO1xuIHBocmFzZTogc3RyaW5nIHwgbnVsbDtcbiBjb21tZW50czogc3RyaW5nIHwgbnVsbDtcbn1cblxuLy8gVE8gRE86IEJlc3Qgd2F5IHRvIGFsc28gcXVlcnkgYW5kIGxvYWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV4aXN0aW5nIGVuY29kaW5ncywgaWYgYW55IFxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnQiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJCdXR0b24iLCJDYXJkIiwiU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiY29udGVudCIsIklEc3RyaW5nIiwic3RhdGVtZW50SUQiLCJ0b1N0cmluZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiYm9keSIsIlRleHQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlN0YWNrIiwiZGlyZWN0aW9uIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIiwicHVzaCIsImRpc2FibGVkIiwiU3RhdGVtZW50QW5ub3RhdGlvbiIsInByb3BzIiwiY29tbWVudHMiLCJjb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Statement.tsx\n");

/***/ })

});