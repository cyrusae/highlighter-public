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

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar NavButton = function(param) {\n    var current = param.current, button = param.button;\n    var currentID = current.statementID;\n    var act = button;\n    //add:\n    //&now=${lastUpdated}\n    //to the url once date handling for Prisma in SQLite is fixed or I find a worthwhile workaround.\n    var url = \"'/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function() {\n            var now = Date.now();\n            console.log(\"now:\");\n            console.log(now);\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/:act\", \"/\".concat(act, \"?current=\").concat(currentID, \"&now=\").concat(now));\n        },\n        children: act\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, _this);\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    var next = \"next\";\n    var prev = \"prev\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                current: current,\n                button: prev\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                current: current,\n                button: next\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, _this);\n} //const Next: React.FC<{current: NavButtonProps}> = ({current}) => {\n // return (\n //  <NavButton buttonText={'Next'} current={current}/>\n // )\n //}\n //export const getServerSideProps: GetServerSideProps = async (context) => {\n // const res = await fetch(`http://localhost:3001/next?current=${context.query.act}&now=${context.query.now}`);\n // console.log(\"here's await fetch the next url output:\");\n // console.log(await res.clone().text());\n // const result = await res.json();\n // console.log(\"here is the result:\"); console.log(result);\n // return {\n //  props: result\n // }\n //}\n;\n_c1 = Nav;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDRDtBQVloQyxJQUFNRSxTQUFTLEdBQXNELGdCQUF1QjtRQUFyQkMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTtJQUNyRixJQUFNQyxTQUFTLEdBQUdGLE9BQU8sQ0FBQ0csV0FBVztJQUNyQyxJQUFNQyxHQUFHLEdBQUdILE1BQU07SUFDbEIsTUFBTTtJQUNOLHFCQUFxQjtJQUNyQixnR0FBZ0c7SUFDaEcsSUFBTUksR0FBRyxHQUFHLElBQUk7SUFFaEIscUJBQ0MsOERBQUNKLFFBQU07UUFBQ0ssT0FBTyxFQUFFLFdBQU07WUFDdEIsSUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUcsRUFBRTtZQUN0QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFBQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQyxDQUFDO1lBQ3RDVCx1REFBVyxDQUFDLE9BQU8sRUFBRSxHQUFFLENBQWlCSSxNQUFTLENBQXhCRSxHQUFHLEVBQUMsV0FBUyxDQUFZLENBQU9HLE1BQUcsQ0FBcEJMLFNBQVMsRUFBQyxPQUFLLENBQU0sUUFBSkssR0FBRyxDQUFFLENBQUM7U0FBQztrQkFBR0gsR0FBRzs7Ozs7YUFBVSxDQUNoRjtDQUNGO0FBZEtMLEtBQUFBLFNBQVM7QUFnQlIsSUFBTWEsR0FBRyxHQUFzQyxnQkFBZTtRQUFiWixPQUFPLFNBQVBBLE9BQU87SUFDOUQsSUFBTWEsSUFBSSxHQUFHLE1BQU07SUFDbkIsSUFBTUMsSUFBSSxHQUFHLE1BQU07SUFFbkIscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLEtBQUs7OzBCQUNaLDhEQUFDakIsU0FBUztnQkFBQ0MsT0FBTyxFQUFFQSxPQUFPO2dCQUFFQyxNQUFNLEVBQUVhLElBQUk7Ozs7O3FCQUFJOzBCQUM3Qyw4REFBQ2YsU0FBUztnQkFBQ0MsT0FBTyxFQUFFQSxPQUFPO2dCQUFFQyxNQUFNLEVBQUVZLElBQUk7Ozs7O3FCQUFJOzs7Ozs7YUFDeEMsQ0FDTjtDQUNELENBRUQsb0VBQW9FO0NBQ3BFLFdBQVc7Q0FDWCxzREFBc0Q7Q0FDdEQsSUFBSTtDQUNKLEdBQUc7Q0FFSCw0RUFBNEU7Q0FDNUUsK0dBQStHO0NBQy9HLDBEQUEwRDtDQUMxRCx5Q0FBeUM7Q0FDekMsbUNBQW1DO0NBQ25DLDJEQUEyRDtDQUMzRCxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLElBQUk7Q0FDSixHQUFHO0FBakJGO0FBVllELE1BQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD84M2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgTm93Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvTm93V3JhcCdcblxuZXhwb3J0IHR5cGUgTmF2SW5mb1Byb3BzID0ge1xuIHN0YXRlbWVudElEOiBudW1iZXI7XG4gdXBkYXRlZEF0OiBEYXRlO1xufVxuZXhwb3J0IHR5cGUgTmF2QnV0dG9uUHJvcHMgPSB7XG4gYWN0aW9uOiAnbmV4dCcgfCAncHJldicgfCAnZmxhZycgfCAncGF1c2UnO1xufVxuXG5jb25zdCBOYXZCdXR0b246IFJlYWN0LkZDPHtjdXJyZW50OiBOYXZJbmZvUHJvcHMsIGJ1dHRvbjogc3RyaW5nfT4gPSAoe2N1cnJlbnQsIGJ1dHRvbn0pID0+IHtcbiBjb25zdCBjdXJyZW50SUQgPSBjdXJyZW50LnN0YXRlbWVudElEO1xuIGNvbnN0IGFjdCA9IGJ1dHRvbjtcbiAvL2FkZDpcbiAvLyZub3c9JHtsYXN0VXBkYXRlZH1cbiAvL3RvIHRoZSB1cmwgb25jZSBkYXRlIGhhbmRsaW5nIGZvciBQcmlzbWEgaW4gU1FMaXRlIGlzIGZpeGVkIG9yIEkgZmluZCBhIHdvcnRod2hpbGUgd29ya2Fyb3VuZC5cbiBjb25zdCB1cmwgPSBcIicvXCJcblxuIHJldHVybiAoXG4gIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgIGNvbnNvbGUubG9nKCdub3c6Jyk7IGNvbnNvbGUubG9nKG5vdyk7IFxuICAgUm91dGVyLnB1c2goJy86YWN0JywgYC8ke2FjdH0/Y3VycmVudD0ke2N1cnJlbnRJRH0mbm93PSR7bm93fWApfX0+e2FjdH08L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgTmF2OiBSZWFjdC5GQzx7Y3VycmVudDogTmF2SW5mb1Byb3BzfT4gPSAoe2N1cnJlbnR9KSA9PiB7XG4gY29uc3QgbmV4dCA9ICduZXh0JztcbiBjb25zdCBwcmV2ID0gJ3ByZXYnO1xuXG4gcmV0dXJuIChcbiAgPGRpdiBpZD0nbmF2Jz5cbiAgIDxOYXZCdXR0b24gY3VycmVudD17Y3VycmVudH0gYnV0dG9uPXtwcmV2fSAvPlxuICAgPE5hdkJ1dHRvbiBjdXJyZW50PXtjdXJyZW50fSBidXR0b249e25leHR9IC8+XG4gIDwvZGl2PlxuIClcbn1cblxuLy9jb25zdCBOZXh0OiBSZWFjdC5GQzx7Y3VycmVudDogTmF2QnV0dG9uUHJvcHN9PiA9ICh7Y3VycmVudH0pID0+IHtcbi8vIHJldHVybiAoXG4vLyAgPE5hdkJ1dHRvbiBidXR0b25UZXh0PXsnTmV4dCd9IGN1cnJlbnQ9e2N1cnJlbnR9Lz5cbi8vIClcbi8vfVxuXG4vL2V4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL25leHQ/Y3VycmVudD0ke2NvbnRleHQucXVlcnkuYWN0fSZub3c9JHtjb250ZXh0LnF1ZXJ5Lm5vd31gKTtcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSdzIGF3YWl0IGZldGNoIHRoZSBuZXh0IHVybCBvdXRwdXQ6XCIpO1xuLy8gY29uc29sZS5sb2coYXdhaXQgcmVzLmNsb25lKCkudGV4dCgpKTtcbi8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XG4vLyBjb25zb2xlLmxvZyhcImhlcmUgaXMgdGhlIHJlc3VsdDpcIik7IGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyByZXR1cm4ge1xuLy8gIHByb3BzOiByZXN1bHRcbi8vIH1cbi8vfSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsIk5hdkJ1dHRvbiIsImN1cnJlbnQiLCJidXR0b24iLCJjdXJyZW50SUQiLCJzdGF0ZW1lbnRJRCIsImFjdCIsInVybCIsIm9uQ2xpY2siLCJub3ciLCJEYXRlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJOYXYiLCJuZXh0IiwicHJldiIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});