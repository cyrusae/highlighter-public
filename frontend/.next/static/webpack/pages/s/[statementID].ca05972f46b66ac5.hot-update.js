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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n//import { GetServerSideProps } from 'next'\n\nvar NavButton = function(param) {\n    var from = param.from, act = param.act;\n    console.log(\"received statementID as 'current' is:\");\n    console.log(from.statement[\"statementID\"]);\n    console.log(\"next value is:\");\n    console.log(from.next);\n    console.log(\"previous value is:\");\n    console.log(from.prev);\n    console.log(\"received act value is:\");\n    console.log(act);\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"/leave\", {\n                    currentID: from.statement[\"statementID\"]\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(from.next));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 21,\n            columnNumber: 4\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: from.statement[\"statementID\"]\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(from.prev));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 28,\n            columnNumber: 6\n        }, _this);\n    } else if (act === \"flag\") {\n        var newFlag = from.statement[\"statementID\"] + \" \" + \"&#013; &#010;\"; //last part should produce line breaks\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                if (document.getElementById(\"flags\").innerText.includes(from.statement[\"statementID\"].toString()) === false) {\n                    axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                        currentID: from.statement[\"statementID\"]\n                    });\n                    document.getElementById(\"flags\").innerHTML += newFlag;\n                }\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: from.statement[\"statementID\"]\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 46,\n            columnNumber: 6\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    var now = parseInt(current.statement[\"statementID\"].toString(), 10);\n    console.log(\"Nav attempts to log current statementID here:\");\n    console.log(current.statement[\"statementID\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                from: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 63,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 59,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Nav;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD84M2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG4vL2ltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBTdGF0ZW1lbnRQcm9wcyB9IGZyb20gJy4vU3RhdGVtZW50J1xuaW1wb3J0IHsgUmVhZGVyUHJvcHMgfSBmcm9tICcuLi9wYWdlcy9zL1tzdGF0ZW1lbnRJRF0nXG5cbmV4cG9ydCB0eXBlIE5hdkJ1dHRvblByb3BzID0ge1xuIGFjdGlvbjogJ25leHQnIHwgJ3ByZXYnIHwgJ2ZsYWcnIHwgJ3BhdXNlJztcblx0cmVhZDogUmVhZGVyUHJvcHNbXTtcbn1cblxuY29uc3QgTmF2QnV0dG9uOiBSZWFjdC5GQzx7ZnJvbTogUmVhZGVyUHJvcHM7IGFjdDogTmF2QnV0dG9uUHJvcHNbXCJhY3Rpb25cIl19PiA9ICh7ZnJvbSwgYWN0fSkgPT4ge1xuXHRjb25zb2xlLmxvZyhcInJlY2VpdmVkIHN0YXRlbWVudElEIGFzICdjdXJyZW50JyBpczpcIik7IGNvbnNvbGUubG9nKGZyb20uc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl0pOyBcblx0Y29uc29sZS5sb2coXCJuZXh0IHZhbHVlIGlzOlwiKTsgY29uc29sZS5sb2coZnJvbS5uZXh0KTtcblx0Y29uc29sZS5sb2coXCJwcmV2aW91cyB2YWx1ZSBpczpcIik7IGNvbnNvbGUubG9nKGZyb20ucHJldik7XG5cdGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgYWN0IHZhbHVlIGlzOlwiKTsgY29uc29sZS5sb2coYWN0KTtcblxuIGlmIChhY3QgPT09ICduZXh0Jykge1xuICByZXR1cm4gKFxuICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgXHRheGlvcy5wb3N0KCcvbGVhdmUnLCB7IGN1cnJlbnRJRDogZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSB9KTtcbiAgICAgUm91dGVyLnB1c2goJy9zJywgYC9zLyR7ZnJvbS5uZXh0fWApfX0+XG4gICAgICB7YWN0fVxuICAgPC9idXR0b24+XG4gICl9IGVsc2UgaWYgKGFjdCA9PT0gJ3ByZXYnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICBheGlvcy5wdXQoJy9sZWF2ZScsIHsgY3VycmVudElEOiBmcm9tLnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdIH0pO1xuICAgICAgUm91dGVyLnB1c2goJy9zJywgYC9zLyR7ZnJvbS5wcmV2fWApfX0+XG4gICAgICAge2FjdH1cbiBcdFx0PC9idXR0b24+XG4gXHQpfSBlbHNlIGlmIChhY3QgPT09ICdmbGFnJykge1xuICAgXHRjb25zdCBuZXdGbGFnID0gZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSArICcgJyArIGAmIzAxMzsgJiMwMTA7YDsgLy9sYXN0IHBhcnQgc2hvdWxkIHByb2R1Y2UgbGluZSBicmVha3NcbiAgIFx0cmV0dXJuIChcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZ3MnKS5pbm5lclRleHQuaW5jbHVkZXMoKGZyb20uc3RhdGVtZW50W1wic3RhdGVtZW50SURcIl0pLnRvU3RyaW5nKCkpID09PSBmYWxzZSlcbiAgICAgIFx0XHR7IFxuICAgICAgICAgYXhpb3MucHV0KCcvbGVhdmUnLCB7IGN1cnJlbnRJRDogZnJvbS5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXSB9KTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGFncycpLmlubmVySFRNTCArPSBuZXdGbGFnIFxuICAgICAgICB9fX0+XG5cdFx0XHRcdFx0XHRcdHthY3R9XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cbiBcdCl9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuICAgXHQgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyBcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRheGlvcy5wdXQoJy9sZWF2ZScsIHsgY3VycmVudElEOiBmcm9tLnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdIH0pO319PlxuICAgXHQgICB7YWN0fVxuICBcdCAgPC9idXR0b24+XG4gIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTmF2OiBSZWFjdC5GQzx7Y3VycmVudDogUmVhZGVyUHJvcHN9PiA9ICh7Y3VycmVudH0pID0+IHtcblx0Y29uc3Qgbm93ID0gcGFyc2VJbnQoY3VycmVudC5zdGF0ZW1lbnRbXCJzdGF0ZW1lbnRJRFwiXS50b1N0cmluZygpLCAxMClcblx0Y29uc29sZS5sb2coJ05hdiBhdHRlbXB0cyB0byBsb2cgY3VycmVudCBzdGF0ZW1lbnRJRCBoZXJlOicpOyBjb25zb2xlLmxvZyhjdXJyZW50LnN0YXRlbWVudFtcInN0YXRlbWVudElEXCJdKTtcbiByZXR1cm4gKFxuICA8ZGl2IGlkPSduYXYnPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydwcmV2J30gLz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsncGF1c2UnfSAvPlxuICAgPE5hdkJ1dHRvbiBmcm9tPXtjdXJyZW50fSBhY3Q9eydmbGFnJ30gLz5cbiAgIDxOYXZCdXR0b24gZnJvbT17Y3VycmVudH0gYWN0PXsnbmV4dCd9IC8+XG4gIDwvZGl2PlxuIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJheGlvcyIsIk5hdkJ1dHRvbiIsImZyb20iLCJhY3QiLCJjb25zb2xlIiwibG9nIiwic3RhdGVtZW50IiwibmV4dCIsInByZXYiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwib25DbGljayIsInBvc3QiLCJjdXJyZW50SUQiLCJwdXNoIiwicHV0IiwibmV3RmxhZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiaW5uZXJIVE1MIiwiTmF2IiwiY3VycmVudCIsIm5vdyIsInBhcnNlSW50IiwiZGl2IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});