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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n//import { GetServerSideProps } from 'next'\n\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    console.log(\"received statementID as 'current' is:\");\n    console.log(from.statement[\"statementID\"]);\n    console.log(\"next value is:\");\n    console.log(from.next);\n    console.log(\"previous value is:\");\n    console.log(from.prev);\n    console.log(\"received act value is:\");\n    console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"/leave\", {\n                    currentID: from.statement[\"statementID\"]\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(from.next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 21,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: from.statement[\"statementID\"]\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(from.prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 28,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        var newFlag = from.statement[\"statementID\"] + \" \" + \"&#013; &#010;\"; //last part should produce line breaks\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                if (document.getElementById(\"flags\").innerText.includes(from.statement[\"statementID\"].toString()) === false) {\n                    axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                        currentID: from.statement[\"statementID\"]\n                    });\n                    document.getElementById(\"flags\").innerHTML += newFlag;\n                }\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: from.statement[\"statementID\"]\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 46,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    console.log(\"Nav attempts to log current statementID here:\");\n    console.log(current.statement[\"statementID\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Nav;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQUNDLElBQUksRUFBQyxRQUFRO1lBQUNDLFNBQVMsRUFBQyxRQUFRO1lBQ3hDQyxPQUFPLEVBQUUsV0FBTTtnQkFDZFosZ0RBQVMsQ0FBQyxRQUFRLEVBQUU7b0JBQUVjLFNBQVMsRUFBRVosSUFBSSxDQUFDSSxTQUFTLENBQUMsYUFBYSxDQUFDO2lCQUFFLENBQUMsQ0FBQzthQUFDO3NCQUNqRUgsR0FBRzs7Ozs7aUJBQ0csQ0FDWDtLQUNBO0NBQ0Y7QUF4Q0tGLEtBQUFBLFNBQVM7QUEwQ1IsSUFBTXVCLEdBQUcsR0FBcUMsZ0JBQWU7UUFBYkMsT0FBTyxTQUFQQSxPQUFPO0lBQzdEckIsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztJQUFDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ29CLE9BQU8sQ0FBQ25CLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzVHLHFCQUNDLDhEQUFDb0IsS0FBRztRQUFDQyxFQUFFLEVBQUMsS0FBSzs7MEJBQ1osOERBQUMxQixTQUFTO2dCQUFDQyxJQUFJLEVBQUV1QixPQUFPO2dCQUFFdEIsR0FBRyxFQUFFLE1BQU07Ozs7O3FCQUFJOzBCQUN6Qyw4REFBQ0YsU0FBUztnQkFBQ0MsSUFBSSxFQUFFdUIsT0FBTztnQkFBRXRCLEdBQUcsRUFBRSxPQUFPOzs7OztxQkFBSTswQkFDMUMsOERBQUNGLFNBQVM7Z0JBQUNDLElBQUksRUFBRXVCLE9BQU87Z0JBQUV0QixHQUFHLEVBQUUsTUFBTTs7Ozs7cUJBQUk7MEJBQ3pDLDhEQUFDRixTQUFTO2dCQUFDQyxJQUFJLEVBQUV1QixPQUFPO2dCQUFFdEIsR0FBRyxFQUFFLE1BQU07Ozs7O3FCQUFJOzs7Ozs7YUFDcEMsQ0FDTjtDQUNEO0FBVllxQixNQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/ODNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuLy9pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgU3RhdGVtZW50UHJvcHMgfSBmcm9tICcuL1N0YXRlbWVudCdcbmltcG9ydCB7IFJlYWRlclByb3BzIH0gZnJvbSAnLi4vcGFnZXMvcy9bc3RhdGVtZW50SURdJ1xuXG5leHBvcnQgdHlwZSBOYXZCdXR0b25Qcm9wcyA9IHtcbiBhY3Rpb246ICduZXh0JyB8ICdwcmV2JyB8ICdmbGFnJyB8ICdwYXVzZSc7XG5cdHJlYWQ6IFJlYWRlclByb3BzW107XG59XG5cbmNvbnN0IE5hdkJ1dHRvbjogUmVhY3QuRkM8e2Zyb206IFJlYWRlclByb3BzOyBhY3Q6IE5hdkJ1dHRvblByb3BzW1wiYWN0aW9uXCJdfT4gPSAoe2Zyb20sIGFjdH0pID0+IHtcblx0Y29uc29sZS5sb2coXCJyZWNlaXZlZCBzdGF0ZW1lbnRJRCBhcyAnY3VycmVudCcgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdKTsgXG5cdGNvbnNvbGUubG9nKFwibmV4dCB2YWx1ZSBpczpcIik7IGNvbnNvbGUubG9nKGZyb20ubmV4dCk7XG5cdGNvbnNvbGUubG9nKFwicHJldmlvdXMgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLnByZXYpO1xuXHRjb25zb2xlLmxvZyhcInJlY2VpdmVkIGFjdCB2YWx1ZSBpczpcIik7IGNvbnNvbGUubG9nKGFjdCk7XG5cbiBpZiAoYWN0ID09PSAnbmV4dCcpIHtcbiAgcmV0dXJuIChcbiAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgIFx0YXhpb3MucG9zdCgnL2xlYXZlJywgeyBjdXJyZW50SUQ6IGZyb20uc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl0gfSk7XG4gICAgIFJvdXRlci5wdXNoKCcvcycsIGAvcy8ke2Zyb20ubmV4dH1gKX19PlxuICAgICAge2FjdH1cbiAgIDwvYnV0dG9uPlxuICApfSBlbHNlIGlmIChhY3QgPT09ICdwcmV2Jykge1xuICAgIHJldHVybiAoXG4gICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgICAgYXhpb3MucHV0KCcvbGVhdmUnLCB7IGN1cnJlbnRJRDogZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSB9KTtcbiAgICAgIFJvdXRlci5wdXNoKCcvcycsIGAvcy8ke2Zyb20ucHJldn1gKX19PlxuICAgICAgIHthY3R9XG4gXHRcdDwvYnV0dG9uPlxuIFx0KX0gZWxzZSBpZiAoYWN0ID09PSAnZmxhZycpIHtcbiAgIFx0Y29uc3QgbmV3RmxhZyA9IGZyb20uc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl0gKyAnICcgKyBgJiMwMTM7ICYjMDEwO2A7IC8vbGFzdCBwYXJ0IHNob3VsZCBwcm9kdWNlIGxpbmUgYnJlYWtzXG4gICBcdHJldHVybiAoXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdzJykuaW5uZXJUZXh0LmluY2x1ZGVzKChmcm9tLnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdKS50b1N0cmluZygpKSA9PT0gZmFsc2UpXG4gICAgICBcdFx0eyBcbiAgICAgICAgIGF4aW9zLnB1dCgnL2xlYXZlJywgeyBjdXJyZW50SUQ6IGZyb20uc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl0gfSk7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZ3MnKS5pbm5lckhUTUwgKz0gbmV3RmxhZyBcbiAgICAgICAgfX19PlxuXHRcdFx0XHRcdFx0XHR7YWN0fVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG4gXHQpfSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcbiAgIFx0IDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0YXhpb3MucHV0KCcvbGVhdmUnLCB7IGN1cnJlbnRJRDogZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSB9KTt9fT5cbiAgIFx0ICAge2FjdH1cbiAgXHQgIDwvYnV0dG9uPlxuICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5hdjogUmVhY3QuRkM8e2N1cnJlbnQ6IFJlYWRlclByb3BzfT4gPSAoe2N1cnJlbnR9KSA9PiB7XG5cdGNvbnNvbGUubG9nKCdOYXYgYXR0ZW1wdHMgdG8gbG9nIGN1cnJlbnQgc3RhdGVtZW50SUQgaGVyZTonKTsgY29uc29sZS5sb2coY3VycmVudC5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSk7XG4gcmV0dXJuIChcbiAgPGRpdiBpZD0nbmF2Jz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsncHJldid9IC8+XG4gICA8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J3BhdXNlJ30gLz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsnZmxhZyd9IC8+XG4gICA8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J25leHQnfSAvPlxuICA8L2Rpdj5cbiApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiYXhpb3MiLCJOYXZCdXR0b24iLCJmcm9tIiwiYWN0IiwiY29uc29sZSIsImxvZyIsInN0YXRlbWVudCIsIm5leHQiLCJwcmV2IiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwb3N0IiwiY3VycmVudElEIiwicHVzaCIsInB1dCIsIm5ld0ZsYWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImlubmVySFRNTCIsIk5hdiIsImN1cnJlbnQiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});