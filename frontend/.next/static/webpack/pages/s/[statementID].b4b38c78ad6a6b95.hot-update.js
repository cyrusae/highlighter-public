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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar NavButton = function(param) {\n    var current = param.current, button = param.button;\n    var currentID = current.statementID;\n    var act = button;\n    //add:\n    //&now=${lastUpdated}\n    //to the url once date handling for Prisma in SQLite is fixed or I find a worthwhile workaround.\n    // const url = \"'/\" + act;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function() {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/go\", \"/go?act=\".concat(act, \"&current=\").concat(currentID));\n        },\n        children: act\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, _this);\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    var next = \"next\";\n    var prev = \"prev\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                current: current,\n                button: prev\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                current: current,\n                button: next\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, _this);\n} //const Next: React.FC<{current: NavButtonProps}> = ({current}) => {\n // return (\n //  <NavButton buttonText={'Next'} current={current}/>\n // )\n //}\n //export const getServerSideProps: GetServerSideProps = async (context) => {\n // const res = await fetch(`http://localhost:3001/next?current=${context.query.act}&now=${context.query.now}`);\n // console.log(\"here's await fetch the next url output:\");\n // console.log(await res.clone().text());\n // const result = await res.json();\n // console.log(\"here is the result:\"); console.log(result);\n // return {\n //  props: result\n // }\n //}\n;\n_c1 = Nav;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDRDtBQVloQyxJQUFNRSxTQUFTLEdBQXNELGdCQUF1QjtRQUFyQkMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTtJQUNyRixJQUFNQyxTQUFTLEdBQUdGLE9BQU8sQ0FBQ0csV0FBVztJQUNyQyxJQUFNQyxHQUFHLEdBQUdILE1BQU07SUFDbEIsTUFBTTtJQUNOLHFCQUFxQjtJQUNyQixnR0FBZ0c7SUFDakcsMEJBQTBCO0lBRXpCLHFCQUNDLDhEQUFDQSxRQUFNO1FBQUNJLE9BQU8sRUFBRSxXQUFNO1lBQ3RCUCx1REFBVyxDQUFDLEtBQUssRUFBRSxVQUFTLENBQWlCSSxNQUFTLENBQXhCRSxHQUFHLEVBQUMsV0FBUyxDQUFZLFFBQVZGLFNBQVMsQ0FBRSxDQUFDO1NBQUM7a0JBQUdFLEdBQUc7Ozs7O2FBQVUsQ0FDMUU7Q0FDRjtBQVpLTCxLQUFBQSxTQUFTO0FBY1IsSUFBTVEsR0FBRyxHQUFzQyxnQkFBZTtRQUFiUCxPQUFPLFNBQVBBLE9BQU87SUFDOUQsSUFBTVEsSUFBSSxHQUFHLE1BQU07SUFDbkIsSUFBTUMsSUFBSSxHQUFHLE1BQU07SUFFbkIscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLEtBQUs7OzBCQUNaLDhEQUFDWixTQUFTO2dCQUFDQyxPQUFPLEVBQUVBLE9BQU87Z0JBQUVDLE1BQU0sRUFBRVEsSUFBSTs7Ozs7cUJBQUk7MEJBQzdDLDhEQUFDVixTQUFTO2dCQUFDQyxPQUFPLEVBQUVBLE9BQU87Z0JBQUVDLE1BQU0sRUFBRU8sSUFBSTs7Ozs7cUJBQUk7Ozs7OzthQUN4QyxDQUNOO0NBQ0QsQ0FFRCxvRUFBb0U7Q0FDcEUsV0FBVztDQUNYLHNEQUFzRDtDQUN0RCxJQUFJO0NBQ0osR0FBRztDQUVILDRFQUE0RTtDQUM1RSwrR0FBK0c7Q0FDL0csMERBQTBEO0NBQzFELHlDQUF5QztDQUN6QyxtQ0FBbUM7Q0FDbkMsMkRBQTJEO0NBQzNELFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsSUFBSTtDQUNKLEdBQUc7QUFqQkY7QUFWWUQsTUFBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4PzgzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBOb3dCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Ob3dXcmFwJ1xuXG5leHBvcnQgdHlwZSBOYXZJbmZvUHJvcHMgPSB7XG4gc3RhdGVtZW50SUQ6IG51bWJlcjtcbiB1cGRhdGVkQXQ6IERhdGU7XG59XG5leHBvcnQgdHlwZSBOYXZCdXR0b25Qcm9wcyA9IHtcbiBhY3Rpb246ICduZXh0JyB8ICdwcmV2JyB8ICdmbGFnJyB8ICdwYXVzZSc7XG59XG5cbmNvbnN0IE5hdkJ1dHRvbjogUmVhY3QuRkM8e2N1cnJlbnQ6IE5hdkluZm9Qcm9wcywgYnV0dG9uOiBzdHJpbmd9PiA9ICh7Y3VycmVudCwgYnV0dG9ufSkgPT4ge1xuIGNvbnN0IGN1cnJlbnRJRCA9IGN1cnJlbnQuc3RhdGVtZW50SUQ7XG4gY29uc3QgYWN0ID0gYnV0dG9uO1xuIC8vYWRkOlxuIC8vJm5vdz0ke2xhc3RVcGRhdGVkfVxuIC8vdG8gdGhlIHVybCBvbmNlIGRhdGUgaGFuZGxpbmcgZm9yIFByaXNtYSBpbiBTUUxpdGUgaXMgZml4ZWQgb3IgSSBmaW5kIGEgd29ydGh3aGlsZSB3b3JrYXJvdW5kLlxuLy8gY29uc3QgdXJsID0gXCInL1wiICsgYWN0O1xuXG4gcmV0dXJuIChcbiAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICBSb3V0ZXIucHVzaCgnL2dvJywgYC9nbz9hY3Q9JHthY3R9JmN1cnJlbnQ9JHtjdXJyZW50SUR9YCl9fT57YWN0fTwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBOYXY6IFJlYWN0LkZDPHtjdXJyZW50OiBOYXZJbmZvUHJvcHN9PiA9ICh7Y3VycmVudH0pID0+IHtcbiBjb25zdCBuZXh0ID0gJ25leHQnO1xuIGNvbnN0IHByZXYgPSAncHJldic7XG5cbiByZXR1cm4gKFxuICA8ZGl2IGlkPSduYXYnPlxuICAgPE5hdkJ1dHRvbiBjdXJyZW50PXtjdXJyZW50fSBidXR0b249e3ByZXZ9IC8+XG4gICA8TmF2QnV0dG9uIGN1cnJlbnQ9e2N1cnJlbnR9IGJ1dHRvbj17bmV4dH0gLz5cbiAgPC9kaXY+XG4gKVxufVxuXG4vL2NvbnN0IE5leHQ6IFJlYWN0LkZDPHtjdXJyZW50OiBOYXZCdXR0b25Qcm9wc30+ID0gKHtjdXJyZW50fSkgPT4ge1xuLy8gcmV0dXJuIChcbi8vICA8TmF2QnV0dG9uIGJ1dHRvblRleHQ9eydOZXh0J30gY3VycmVudD17Y3VycmVudH0vPlxuLy8gKVxuLy99XG5cbi8vZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbi8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvbmV4dD9jdXJyZW50PSR7Y29udGV4dC5xdWVyeS5hY3R9Jm5vdz0ke2NvbnRleHQucXVlcnkubm93fWApO1xuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgZmV0Y2ggdGhlIG5leHQgdXJsIG91dHB1dDpcIik7XG4vLyBjb25zb2xlLmxvZyhhd2FpdCByZXMuY2xvbmUoKS50ZXh0KCkpO1xuLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgcmVzdWx0OlwiKTsgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vIHJldHVybiB7XG4vLyAgcHJvcHM6IHJlc3VsdFxuLy8gfVxuLy99Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiTmF2QnV0dG9uIiwiY3VycmVudCIsImJ1dHRvbiIsImN1cnJlbnRJRCIsInN0YXRlbWVudElEIiwiYWN0Iiwib25DbGljayIsInB1c2giLCJOYXYiLCJuZXh0IiwicHJldiIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});