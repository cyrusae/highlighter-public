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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n//import { GetServerSideProps } from 'next'\n\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    console.log(\"received statementID as 'current' is:\");\n    console.log(from.statement[\"statementID\"]);\n    console.log(\"next value is:\");\n    console.log(from.next);\n    console.log(\"previous value is:\");\n    console.log(from.prev);\n    console.log(\"received act value is:\");\n    console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"/leave\", {\n                    currentID: from.statement[\"statementID\"]\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(from.next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 21,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: from.statement[\"statementID\"]\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(from.prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 28,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        var newFlag = current + \" \" + \"&#013; &#010;\"; //last part should produce line breaks\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                if (document.getElementById(\"flags\").innerText.includes(current.toString()) === false) {\n                    axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                        currentID: current\n                    });\n                    document.getElementById(\"flags\").innerHTML += newFlag;\n                }\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: current\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 46,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    console.log(\"Nav attempts to log current statementID here:\");\n    console.log(current.statement[\"statementID\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                current: current.statementID,\n                prev: current.prevID,\n                next: current.nextID,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                current: current.statementID,\n                prev: current.prevID,\n                next: current.nextID,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                current: current.statementID,\n                prev: current.prevID,\n                next: current.nextID,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                current: current.statementID,\n                prev: current.prevID,\n                next: current.nextID,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Nav;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVXLE9BQU8sQ0FBQ1ksTUFBTTtnQkFBRTNCLEdBQUcsRUFBRSxNQUFNOzs7OztxQkFBSTs7Ozs7O2FBQy9GLENBQ047Q0FDRDtBQVZZc0IsTUFBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4PzgzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbi8vaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IFN0YXRlbWVudFByb3BzIH0gZnJvbSAnLi9TdGF0ZW1lbnQnXG5pbXBvcnQgeyBSZWFkZXJQcm9wcyB9IGZyb20gJy4uL3BhZ2VzL3MvW3N0YXRlbWVudElEXSdcblxuZXhwb3J0IHR5cGUgTmF2QnV0dG9uUHJvcHMgPSB7XG4gYWN0aW9uOiAnbmV4dCcgfCAncHJldicgfCAnZmxhZycgfCAncGF1c2UnO1xuXHRyZWFkOiBSZWFkZXJQcm9wc1tdO1xufVxuXG5jb25zdCBOYXZCdXR0b246IFJlYWN0LkZDPHtmcm9tOiBSZWFkZXJQcm9wczsgYWN0OiBOYXZCdXR0b25Qcm9wc1tcImFjdGlvblwiXX0+ID0gKHtmcm9tLCBhY3R9KSA9PiB7XG5cdGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgc3RhdGVtZW50SUQgYXMgJ2N1cnJlbnQnIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSk7IFxuXHRjb25zb2xlLmxvZyhcIm5leHQgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhmcm9tLm5leHQpO1xuXHRjb25zb2xlLmxvZyhcInByZXZpb3VzIHZhbHVlIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5wcmV2KTtcblx0Y29uc29sZS5sb2coXCJyZWNlaXZlZCBhY3QgdmFsdWUgaXM6XCIpOyBjb25zb2xlLmxvZyhhY3QpO1xuXG4gaWYgKGFjdCA9PT0gJ25leHQnKSB7XG4gIHJldHVybiAoXG4gICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgICBcdGF4aW9zLnBvc3QoJy9sZWF2ZScsIHsgY3VycmVudElEOiBmcm9tLnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdIH0pO1xuICAgICBSb3V0ZXIucHVzaCgnL3MnLCBgL3MvJHtmcm9tLm5leHR9YCl9fT5cbiAgICAgIHthY3R9XG4gICA8L2J1dHRvbj5cbiAgKX0gZWxzZSBpZiAoYWN0ID09PSAncHJldicpIHtcbiAgICByZXR1cm4gKFxuICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgIGF4aW9zLnB1dCgnL2xlYXZlJywgeyBjdXJyZW50SUQ6IGZyb20uc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl0gfSk7XG4gICAgICBSb3V0ZXIucHVzaCgnL3MnLCBgL3MvJHtmcm9tLnByZXZ9YCl9fT5cbiAgICAgICB7YWN0fVxuIFx0XHQ8L2J1dHRvbj5cbiBcdCl9IGVsc2UgaWYgKGFjdCA9PT0gJ2ZsYWcnKSB7XG4gICBcdGNvbnN0IG5ld0ZsYWcgPSBjdXJyZW50ICsgJyAnICsgYCYjMDEzOyAmIzAxMDtgOyAvL2xhc3QgcGFydCBzaG91bGQgcHJvZHVjZSBsaW5lIGJyZWFrc1xuICAgXHRyZXR1cm4gKFxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFncycpLmlubmVyVGV4dC5pbmNsdWRlcyhjdXJyZW50LnRvU3RyaW5nKCkpID09PSBmYWxzZSlcbiAgICAgIFx0XHR7IFxuICAgICAgICAgYXhpb3MucHV0KCcvbGVhdmUnLCB7IGN1cnJlbnRJRDogY3VycmVudCB9KTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFncycpLmlubmVySFRNTCArPSBuZXdGbGFnIFxuICAgICAgICB9fX0+XG5cdFx0XHRcdFx0XHRcdHthY3R9XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cbiBcdCl9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuICAgXHQgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRheGlvcy5wdXQoJy9sZWF2ZScsIHsgY3VycmVudElEOiBjdXJyZW50IH0pO319PlxuICAgXHQgICB7YWN0fVxuICBcdCAgPC9idXR0b24+XG4gIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTmF2OiBSZWFjdC5GQzx7Y3VycmVudDogUmVhZGVyUHJvcHN9PiA9ICh7Y3VycmVudH0pID0+IHtcblx0Y29uc29sZS5sb2coJ05hdiBhdHRlbXB0cyB0byBsb2cgY3VycmVudCBzdGF0ZW1lbnRJRCBoZXJlOicpOyBjb25zb2xlLmxvZyhjdXJyZW50LnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdKTtcbiByZXR1cm4gKFxuICA8ZGl2IGlkPSduYXYnPlxuICAgPE5hdkJ1dHRvbiBjdXJyZW50PXtjdXJyZW50LnN0YXRlbWVudElEfSBwcmV2PXtjdXJyZW50LnByZXZJRH0gbmV4dD17Y3VycmVudC5uZXh0SUR9IGFjdD17J3ByZXYnfSAvPlxuICAgPE5hdkJ1dHRvbiBjdXJyZW50PXtjdXJyZW50LnN0YXRlbWVudElEfSBwcmV2PXtjdXJyZW50LnByZXZJRH0gbmV4dD17Y3VycmVudC5uZXh0SUR9IGFjdD17J3BhdXNlJ30gLz5cbiAgIDxOYXZCdXR0b24gY3VycmVudD17Y3VycmVudC5zdGF0ZW1lbnRJRH0gcHJldj17Y3VycmVudC5wcmV2SUR9IG5leHQ9e2N1cnJlbnQubmV4dElEfSBhY3Q9eydmbGFnJ30gLz5cbiAgIDxOYXZCdXR0b24gY3VycmVudD17Y3VycmVudC5zdGF0ZW1lbnRJRH0gcHJldj17Y3VycmVudC5wcmV2SUR9IG5leHQ9e2N1cnJlbnQubmV4dElEfSBhY3Q9eyduZXh0J30gLz5cbiAgPC9kaXY+XG4gKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsImF4aW9zIiwiTmF2QnV0dG9uIiwiZnJvbSIsImFjdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZW1lbnQiLCJuZXh0IiwicHJldiIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicG9zdCIsImN1cnJlbnRJRCIsInB1c2giLCJwdXQiLCJuZXdGbGFnIiwiY3VycmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiaW5uZXJIVE1MIiwiTmF2IiwiZGl2IiwiaWQiLCJzdGF0ZW1lbnRJRCIsInByZXZJRCIsIm5leHRJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});