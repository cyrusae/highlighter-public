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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    console.log(\"received statementID as 'current' is:\");\n    console.log(from.statement[\"statementID\"]);\n    var current = from.statement[\"statementID\"];\n    console.log(\"next value is:\");\n    console.log(from.nextID);\n    var next = from.nextID;\n    console.log(\"previous value is:\");\n    console.log(from.prevID);\n    var prev = from.prevID;\n    console.log(\"received act value is:\");\n    console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                var now = Date.now();\n                axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:3001/leave\", {\n                    currentID: current\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: current\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 32,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        var newFlag = current + \" \" + \"&#013; &#010;\"; //last part should produce line breaks\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                if (document.getElementById(\"flags\").innerText.includes(current) === false) {\n                    axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                        currentID: current\n                    });\n                    document.getElementById(\"flags\").innerHTML += newFlag;\n                }\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: current\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 50,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    var here = parseInt(current.statement[\"statementID\"].toString(), 10);\n    console.log(\"Nav attempts to log current statementID here:\");\n    console.log(here);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 64,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 65,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 67,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 63,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Nav;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQU07WUFBQ0MsSUFBSSxFQUFDLFFBQVE7WUFBQ0MsU0FBUyxFQUFDLFFBQVE7WUFDeENDLE9BQU8sRUFBRSxXQUFNO2dCQUNkZixnREFBUyxDQUFDLFFBQVEsRUFBRTtvQkFBRW1CLFNBQVMsRUFBRVosT0FBTztpQkFBRSxDQUFDLENBQUM7YUFBQztzQkFDM0NKLEdBQUc7Ozs7O2lCQUNHLENBQ1g7S0FDQTtDQUNGO0FBOUNLRixLQUFBQSxTQUFTO0FBZ0RSLElBQU0yQixHQUFHLEdBQXFDLGdCQUFlO1FBQWJyQixPQUFPLFNBQVBBLE9BQU87SUFDN0QsSUFBTXNCLElBQUksR0FBR0MsUUFBUSxDQUFDdkIsT0FBTyxDQUFDRCxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUN5QixRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDdEUzQixPQUFPLENBQUNDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0lBQUNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDd0IsSUFBSSxDQUFDLENBQUM7SUFDaEYscUJBQ0MsOERBQUNHLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLEtBQUs7OzBCQUNaLDhEQUFDaEMsU0FBUztnQkFBQ0MsSUFBSSxFQUFFSyxPQUFPO2dCQUFFSixHQUFHLEVBQUUsTUFBTTs7Ozs7cUJBQUk7MEJBQ3pDLDhEQUFDRixTQUFTO2dCQUFDQyxJQUFJLEVBQUVLLE9BQU87Z0JBQUVKLEdBQUcsRUFBRSxPQUFPOzs7OztxQkFBSTswQkFDMUMsOERBQUNGLFNBQVM7Z0JBQUNDLElBQUksRUFBRUssT0FBTztnQkFBRUosR0FBRyxFQUFFLE1BQU07Ozs7O3FCQUFJOzBCQUN6Qyw4REFBQ0YsU0FBUztnQkFBQ0MsSUFBSSxFQUFFSyxPQUFPO2dCQUFFSixHQUFHLEVBQUUsTUFBTTs7Ozs7cUJBQUk7Ozs7OzthQUNwQyxDQUNOO0NBQ0Q7QUFYWXlCLE1BQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD84M2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBSZWFkZXJQcm9wcyB9IGZyb20gJy4uL3BhZ2VzL3MvW3N0YXRlbWVudElEXSdcblxuZXhwb3J0IHR5cGUgTmF2QnV0dG9uUHJvcHMgPSB7XG4gYWN0aW9uOiAnbmV4dCcgfCAncHJldicgfCAnZmxhZycgfCAncGF1c2UnO1xuXHRyZWFkOiBSZWFkZXJQcm9wc1tdO1xufVxuXG5jb25zdCBOYXZCdXR0b246IFJlYWN0LkZDPHtmcm9tOiBSZWFkZXJQcm9wczsgYWN0OiBOYXZCdXR0b25Qcm9wc1tcImFjdGlvblwiXX0+ID0gKHtmcm9tLCBhY3R9KSA9PiB7XG5cdGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgc3RhdGVtZW50SUQgYXMgJ2N1cnJlbnQnIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSk7IFxuXHRjb25zdCBjdXJyZW50ID0gZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXTtcblx0Y29uc29sZS5sb2coXCJuZXh0IHZhbHVlIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5uZXh0SUQpO1xuXHRjb25zdCBuZXh0ID0gZnJvbS5uZXh0SUQ7XG5cdGNvbnNvbGUubG9nKFwicHJldmlvdXMgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLnByZXZJRCk7XG5cdGNvbnN0IHByZXYgPSBmcm9tLnByZXZJRDtcblx0Y29uc29sZS5sb2coXCJyZWNlaXZlZCBhY3QgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhhY3QpO1xuXG4gaWYgKGFjdCA9PT0gJ25leHQnKSB7XG4gIHJldHVybiAoXG4gICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgXHRheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbGVhdmUnLCB7IFxuXHRcdFx0XHRcdFx0Y3VycmVudElEOiBjdXJyZW50IFxuXHRcdFx0XHRcdH0pO1xuICAgICBSb3V0ZXIucHVzaCgnL3MnLCBgL3MvJHtuZXh0fWApfX0+XG4gICAgICB7YWN0fVxuICAgPC9idXR0b24+XG4gICl9IGVsc2UgaWYgKGFjdCA9PT0gJ3ByZXYnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICBheGlvcy5wdXQoJy9sZWF2ZScsIHsgY3VycmVudElEOiBjdXJyZW50IH0pO1xuICAgICAgUm91dGVyLnB1c2goJy9zJywgYC9zLyR7cHJldn1gKX19PlxuICAgICAgIHthY3R9XG4gXHRcdDwvYnV0dG9uPlxuIFx0KX0gZWxzZSBpZiAoYWN0ID09PSAnZmxhZycpIHtcbiAgIFx0Y29uc3QgbmV3RmxhZyA9IGN1cnJlbnQgKyAnICcgKyBgJiMwMTM7ICYjMDEwO2A7IC8vbGFzdCBwYXJ0IHNob3VsZCBwcm9kdWNlIGxpbmUgYnJlYWtzXG4gICBcdHJldHVybiAoXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdzJykuaW5uZXJUZXh0LmluY2x1ZGVzKGN1cnJlbnQpID09PSBmYWxzZSlcbiAgICAgIFx0XHR7IFxuICAgICAgICAgYXhpb3MucHV0KCcvbGVhdmUnLCB7IGN1cnJlbnRJRDogY3VycmVudCB9KTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFncycpLmlubmVySFRNTCArPSBuZXdGbGFnIFxuICAgICAgICB9fX0+XG5cdFx0XHRcdFx0XHRcdHthY3R9XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cbiBcdCl9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuICAgXHQgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRheGlvcy5wdXQoJy9sZWF2ZScsIHsgY3VycmVudElEOiBjdXJyZW50IH0pO319PlxuICAgXHQgICB7YWN0fVxuICBcdCAgPC9idXR0b24+XG4gIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTmF2OiBSZWFjdC5GQzx7Y3VycmVudDogUmVhZGVyUHJvcHN9PiA9ICh7Y3VycmVudH0pID0+IHtcblx0Y29uc3QgaGVyZSA9IHBhcnNlSW50KGN1cnJlbnQuc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl0udG9TdHJpbmcoKSwgMTApXG5cdGNvbnNvbGUubG9nKCdOYXYgYXR0ZW1wdHMgdG8gbG9nIGN1cnJlbnQgc3RhdGVtZW50SUQgaGVyZTonKTsgY29uc29sZS5sb2coaGVyZSk7XG4gcmV0dXJuIChcbiAgPGRpdiBpZD0nbmF2Jz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsncHJldid9IC8+XG4gICA8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J3BhdXNlJ30gLz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsnZmxhZyd9IC8+XG4gICA8TmF2QnV0dG9uIGZyb209e2N1cnJlbnR9IGFjdD17J25leHQnfSAvPlxuICA8L2Rpdj5cbiApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiYXhpb3MiLCJOYXZCdXR0b24iLCJmcm9tIiwiYWN0IiwiY29uc29sZSIsImxvZyIsInN0YXRlbWVudCIsImN1cnJlbnQiLCJuZXh0SUQiLCJuZXh0IiwicHJldklEIiwicHJldiIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibm93IiwiRGF0ZSIsInBvc3QiLCJjdXJyZW50SUQiLCJwdXNoIiwicHV0IiwibmV3RmxhZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJpbmNsdWRlcyIsImlubmVySFRNTCIsIk5hdiIsImhlcmUiLCJwYXJzZUludCIsInRvU3RyaW5nIiwiZGl2IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});