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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"NavMini\": function() { return /* binding */ NavMini; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Stack */ \"./node_modules/react-bootstrap/esm/Stack.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    //\tconsole.log(\"received statementID as 'current' is:\"); console.log(from.statement[\"statementID\"]); \n    var current = from.statement[\"statementID\"];\n    //\tconsole.log(\"next value is:\"); console.log(from.nextID);\n    var next = from.nextID;\n    //\tconsole.log(\"previous value is:\"); console.log(from.prevID);\n    var prev = from.prevID;\n    //\tconsole.log(\"received act value is:\"); console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"nextButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 27,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"prevButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 38,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            variant: \"danger\",\n            id: \"flagButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"pauseButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 56,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        gap: 1,\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 75,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 72,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Nav;\nvar NavMini = function(param) {\n    var current = param.current;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"multinav\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            variant: \"outline-danger\",\n            id: \"flagButton\",\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n            },\n            children: \"flag\"\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 84,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 83,\n        columnNumber: 3\n    }, _this);\n};\n_c2 = NavMini;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n$RefreshReg$(_c2, \"NavMini\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLEVBQUUsQ0FBQztRQUFFWCxFQUFFLEVBQUMsS0FBSzs7MEJBQ3RCLDhEQUFDVCxTQUFTO2dCQUFDQyxJQUFJLEVBQUVFLE9BQU87Z0JBQUVELEdBQUcsRUFBRSxNQUFNOzs7OztxQkFBSTswQkFDekMsOERBQUNGLFNBQVM7Z0JBQUNDLElBQUksRUFBRUUsT0FBTztnQkFBRUQsR0FBRyxFQUFFLE9BQU87Ozs7O3FCQUFJOzBCQUMxQyw4REFBQ0YsU0FBUztnQkFBQ0MsSUFBSSxFQUFFRSxPQUFPO2dCQUFFRCxHQUFHLEVBQUUsTUFBTTs7Ozs7cUJBQUk7MEJBQ3pDLDhEQUFDRixTQUFTO2dCQUFDQyxJQUFJLEVBQUVFLE9BQU87Z0JBQUVELEdBQUcsRUFBRSxNQUFNOzs7OztxQkFBSTs7Ozs7O2FBQ2xDLENBQ1I7Q0FDRDtBQVRZaUIsTUFBQUEsR0FBRztBQVdULElBQU1FLE9BQU8sR0FBZ0MsZ0JBQWU7UUFBYmxCLE9BQU8sU0FBUEEsT0FBTztJQUM1RCxxQkFDQyw4REFBQ21CLEtBQUc7UUFBQ1gsU0FBUyxFQUFDLFVBQVU7a0JBQ3hCLDRFQUFDYiw4REFBTTtZQUFDb0IsT0FBTyxFQUFDLGdCQUFnQjtZQUFDVCxFQUFFLEVBQUMsWUFBWTtZQUFDQyxJQUFJLEVBQUMsUUFBUTtZQUFDQyxTQUFTLEVBQUMsUUFBUTtZQUFDQyxPQUFPLEVBQUUsV0FBTTtnQkFDL0ZmLGdEQUFTLENBQUMsOEJBQThCLEVBQUU7b0JBQzFDbUIsU0FBUyxFQUFFYixPQUFPO2lCQUNsQixDQUFDLENBQUM7YUFDSDtzQkFBRSxNQUVIOzs7OztpQkFBUzs7Ozs7YUFDSixDQUNOO0NBQ0Q7QUFaWWtCLE1BQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD84M2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgUmVhZGVyUHJvcHMgfSBmcm9tICcuLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0nXG5pbXBvcnQgeyBTdGF0ZW1lbnRQcm9wcyB9IGZyb20gJy4vU3RhdGVtZW50J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJ1xuaW1wb3J0IFN0YWNrIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9TdGFjaydcblxuXG5leHBvcnQgdHlwZSBOYXZCdXR0b25Qcm9wcyA9IHtcbiBhY3Rpb246ICduZXh0JyB8ICdwcmV2JyB8ICdmbGFnJyB8ICdwYXVzZSc7XG5cdHJlYWQ6IFJlYWRlclByb3BzW107XG59XG5cbmNvbnN0IE5hdkJ1dHRvbjogUmVhY3QuRkM8e2Zyb206IFJlYWRlclByb3BzOyBhY3Q6IE5hdkJ1dHRvblByb3BzW1wiYWN0aW9uXCJdfT4gPSAoe2Zyb20sIGFjdH0pID0+IHtcbi8vXHRjb25zb2xlLmxvZyhcInJlY2VpdmVkIHN0YXRlbWVudElEIGFzICdjdXJyZW50JyBpczpcIik7IGNvbnNvbGUubG9nKGZyb20uc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl0pOyBcblx0Y29uc3QgY3VycmVudCA9IGZyb20uc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl07XG4vL1x0Y29uc29sZS5sb2coXCJuZXh0IHZhbHVlIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5uZXh0SUQpO1xuXHRjb25zdCBuZXh0ID0gZnJvbS5uZXh0SUQ7XG4vL1x0Y29uc29sZS5sb2coXCJwcmV2aW91cyB2YWx1ZSBpczpcIik7IGNvbnNvbGUubG9nKGZyb20ucHJldklEKTtcblx0Y29uc3QgcHJldiA9IGZyb20ucHJldklEO1xuLy9cdGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgYWN0IHZhbHVlIGlzOlwiKTsgY29uc29sZS5sb2coYWN0KTtcblxuIGlmIChhY3QgPT09ICduZXh0Jykge1xuICByZXR1cm4gKFxuICAgPEJ1dHRvbiBpZD0nbmV4dEJ1dHRvbicgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgXHRheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IFxuXHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0bm93OiBub3csXG5cdFx0XHRcdFx0fSk7XG4gICAgIFJvdXRlci5wdXNoKCcvcy8nLCBgL3MvJHtuZXh0fWApfX0+XG4gICAgICB7YWN0fVxuICAgPC9CdXR0b24+XG4gICl9IGVsc2UgaWYgKGFjdCA9PT0gJ3ByZXYnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPEJ1dHRvbiBpZD0ncHJldkJ1dHRvbicgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgICAgYXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBjdXJyZW50SUQ6IGN1cnJlbnQgfSk7XG4gICAgICBSb3V0ZXIucHVzaCgnL3MvJywgYC9zLyR7cHJldn1gKX19PlxuICAgICAgIHthY3R9XG4gXHRcdDwvQnV0dG9uPlxuIFx0KX0gZWxzZSBpZiAoYWN0ID09PSAnZmxhZycpIHtcbiAgIFx0cmV0dXJuIChcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIGlkPSdmbGFnQnV0dG9uJyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgXHRcdFx0XHQgYXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50SUQ6IGN1cnJlbnQsXG5cdFx0XHRcdFx0XHRcdFx0bm93OiBub3csXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0e2FjdH1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuIFx0KX0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG4gICBcdCA8QnV0dG9uIFxuICAgICBpZD0ncGF1c2VCdXR0b24nIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIFxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgXHRcdGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xlYXZlLycsIHsgXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRJRDogY3VycmVudCxcblx0XHRcdFx0XHRcdFx0bm93OiBub3csXG5cdFx0XHRcdFx0XHR9KTt9fT5cbiAgIFx0ICAge2FjdH1cbiAgXHQgIDwvQnV0dG9uPlxuICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5hdjogUmVhY3QuRkM8e2N1cnJlbnQ6IFJlYWRlclByb3BzfT4gPSAoe2N1cnJlbnR9KSA9PiB7XG4gcmV0dXJuIChcbiAgPFN0YWNrIGdhcD17MX0gaWQ9J25hdic+XG4gICA8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J3ByZXYnfSAvPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydwYXVzZSd9IC8+XG4gICA8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J2ZsYWcnfSAvPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eyduZXh0J30gLz5cbiAgPC9TdGFjaz5cbiApXG59XG5cbmV4cG9ydCBjb25zdCBOYXZNaW5pOiBSZWFjdC5GQzx7Y3VycmVudDogbnVtYmVyfT4gPSAoe2N1cnJlbnR9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J211bHRpbmF2Jz5cblx0XHRcdDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgaWQ9J2ZsYWdCdXR0b24nIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgXHRcdCBheGlvcy5wdXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWF2ZS8nLCB7IFxuXHRcdFx0XHRcdGN1cnJlbnRJRDogY3VycmVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9fT5cblx0XHRcdFx0ZmxhZ1xuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9kaXY+XG5cdClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJheGlvcyIsIkJ1dHRvbiIsIlN0YWNrIiwiTmF2QnV0dG9uIiwiZnJvbSIsImFjdCIsImN1cnJlbnQiLCJzdGF0ZW1lbnQiLCJuZXh0IiwibmV4dElEIiwicHJldiIsInByZXZJRCIsImlkIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJub3ciLCJEYXRlIiwicHV0IiwiY3VycmVudElEIiwicHVzaCIsInZhcmlhbnQiLCJOYXYiLCJnYXAiLCJOYXZNaW5pIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});