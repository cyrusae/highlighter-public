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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    //\tconsole.log(\"received statementID as 'current' is:\"); console.log(from.statement[\"statementID\"]); \n    var current = from.statement[\"statementID\"];\n    //\tconsole.log(\"next value is:\"); console.log(from.nextID);\n    var next = from.nextID;\n    //\tconsole.log(\"previous value is:\"); console.log(from.prevID);\n    var prev = from.prevID;\n    //\tconsole.log(\"received act value is:\"); console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s/\", \"/s/\".concat(prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 33,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        var newFlag = current + \" \" + \"&#013; &#010;\"; //last part should produce line breaks\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                if (document.getElementById(\"flags\").innerText.includes(current) === false) {\n                    var now = Date.now();\n                    axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                        currentID: current,\n                        now: now\n                    });\n                    document.getElementById(\"flags\").innerHTML += newFlag;\n                }\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"http://localhost:3001/leave/\", {\n                    currentID: current,\n                    now: now\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 55,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    var here = parseInt(current.statement[\"statementID\"].toString(), 10);\n    console.log(\"Nav attempts to log current statementID here:\");\n    console.log(here);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 75,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 72,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Nav;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkRLRixLQUFBQSxTQUFTO0FBeURSLElBQU13QixHQUFHLEdBQXFDLGdCQUFlO1FBQWJyQixPQUFPLFNBQVBBLE9BQU87SUFDN0QsSUFBTXNCLElBQUksR0FBR0MsUUFBUSxDQUFDdkIsT0FBTyxDQUFDQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUN1QixRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDdEVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7SUFBQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQyxDQUFDO0lBQ2hGLHFCQUNDLDhEQUFDSyxLQUFHO1FBQUNDLEVBQUUsRUFBQyxLQUFLOzswQkFDWiw4REFBQy9CLFNBQVM7Z0JBQUNDLElBQUksRUFBRUUsT0FBTztnQkFBRUQsR0FBRyxFQUFFLE1BQU07Ozs7O3FCQUFJOzBCQUN6Qyw4REFBQ0YsU0FBUztnQkFBQ0MsSUFBSSxFQUFFRSxPQUFPO2dCQUFFRCxHQUFHLEVBQUUsT0FBTzs7Ozs7cUJBQUk7MEJBQzFDLDhEQUFDRixTQUFTO2dCQUFDQyxJQUFJLEVBQUVFLE9BQU87Z0JBQUVELEdBQUcsRUFBRSxNQUFNOzs7OztxQkFBSTswQkFDekMsOERBQUNGLFNBQVM7Z0JBQUNDLElBQUksRUFBRUUsT0FBTztnQkFBRUQsR0FBRyxFQUFFLE1BQU07Ozs7O3FCQUFJOzs7Ozs7YUFDcEMsQ0FDTjtDQUNEO0FBWFlzQixNQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/ODNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgUmVhZGVyUHJvcHMgfSBmcm9tICcuLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0nXG5cbmV4cG9ydCB0eXBlIE5hdkJ1dHRvblByb3BzID0ge1xuIGFjdGlvbjogJ25leHQnIHwgJ3ByZXYnIHwgJ2ZsYWcnIHwgJ3BhdXNlJztcblx0cmVhZDogUmVhZGVyUHJvcHNbXTtcbn1cblxuY29uc3QgTmF2QnV0dG9uOiBSZWFjdC5GQzx7ZnJvbTogUmVhZGVyUHJvcHM7IGFjdDogTmF2QnV0dG9uUHJvcHNbXCJhY3Rpb25cIl19PiA9ICh7ZnJvbSwgYWN0fSkgPT4ge1xuLy9cdGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgc3RhdGVtZW50SUQgYXMgJ2N1cnJlbnQnIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSk7IFxuXHRjb25zdCBjdXJyZW50ID0gZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXTtcbi8vXHRjb25zb2xlLmxvZyhcIm5leHQgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLm5leHRJRCk7XG5cdGNvbnN0IG5leHQgPSBmcm9tLm5leHRJRDtcbi8vXHRjb25zb2xlLmxvZyhcInByZXZpb3VzIHZhbHVlIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5wcmV2SUQpO1xuXHRjb25zdCBwcmV2ID0gZnJvbS5wcmV2SUQ7XG4vL1x0Y29uc29sZS5sb2coXCJyZWNlaXZlZCBhY3QgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhhY3QpO1xuXG4gaWYgKGFjdCA9PT0gJ25leHQnKSB7XG4gIHJldHVybiAoXG4gICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIFx0YXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBcblx0XHRcdFx0XHRcdGN1cnJlbnRJRDogY3VycmVudCxcblx0XHRcdFx0XHRcdG5vdzogbm93LFxuXHRcdFx0XHRcdH0pO1xuICAgICBSb3V0ZXIucHVzaCgnL3MvJywgYC9zLyR7bmV4dH1gKX19PlxuICAgICAge2FjdH1cbiAgIDwvYnV0dG9uPlxuICApfSBlbHNlIGlmIChhY3QgPT09ICdwcmV2Jykge1xuICAgIHJldHVybiAoXG4gICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgICAgYXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBjdXJyZW50SUQ6IGN1cnJlbnQgfSk7XG4gICAgICBSb3V0ZXIucHVzaCgnL3MvJywgYC9zLyR7cHJldn1gKX19PlxuICAgICAgIHthY3R9XG4gXHRcdDwvYnV0dG9uPlxuIFx0KX0gZWxzZSBpZiAoYWN0ID09PSAnZmxhZycpIHtcbiAgIFx0Y29uc3QgbmV3RmxhZyA9IGN1cnJlbnQgKyAnICcgKyBgJiMwMTM7ICYjMDEwO2A7IC8vbGFzdCBwYXJ0IHNob3VsZCBwcm9kdWNlIGxpbmUgYnJlYWtzXG4gICBcdHJldHVybiAoXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdzJykuaW5uZXJUZXh0LmluY2x1ZGVzKGN1cnJlbnQpID09PSBmYWxzZSlcbiAgICAgIFx0XHR7IFxuICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgXHRcdFx0XHQgIFx0YXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUvJywgeyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub3c6IG5vdyxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdzJykuaW5uZXJIVE1MICs9IG5ld0ZsYWcgXG4gICAgICAgIH19fT5cblx0XHRcdFx0XHRcdFx0e2FjdH1cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuIFx0KX0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG4gICBcdCA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIFxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgXHRcdGF4aW9zLnB1dCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2xlYXZlLycsIHsgXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRJRDogY3VycmVudCxcblx0XHRcdFx0XHRcdFx0bm93OiBub3csXG5cdFx0XHRcdFx0XHR9KTt9fT5cbiAgIFx0ICAge2FjdH1cbiAgXHQgIDwvYnV0dG9uPlxuICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5hdjogUmVhY3QuRkM8e2N1cnJlbnQ6IFJlYWRlclByb3BzfT4gPSAoe2N1cnJlbnR9KSA9PiB7XG5cdGNvbnN0IGhlcmUgPSBwYXJzZUludChjdXJyZW50LnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdLnRvU3RyaW5nKCksIDEwKVxuXHRjb25zb2xlLmxvZygnTmF2IGF0dGVtcHRzIHRvIGxvZyBjdXJyZW50IHN0YXRlbWVudElEIGhlcmU6Jyk7IGNvbnNvbGUubG9nKGhlcmUpO1xuIHJldHVybiAoXG4gIDxkaXYgaWQ9J25hdic+XG4gICA8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J3ByZXYnfSAvPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydwYXVzZSd9IC8+XG4gICA8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J2ZsYWcnfSAvPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eyduZXh0J30gLz5cbiAgPC9kaXY+XG4gKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsImF4aW9zIiwiTmF2QnV0dG9uIiwiZnJvbSIsImFjdCIsImN1cnJlbnQiLCJzdGF0ZW1lbnQiLCJuZXh0IiwibmV4dElEIiwicHJldiIsInByZXZJRCIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibm93IiwiRGF0ZSIsInB1dCIsImN1cnJlbnRJRCIsInB1c2giLCJuZXdGbGFnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsImluY2x1ZGVzIiwiaW5uZXJIVE1MIiwiTmF2IiwiaGVyZSIsInBhcnNlSW50IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});