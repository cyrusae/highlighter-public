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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar NavButton = function(param) {\n    var info = param.info, act = param.act;\n    var currentID = info.statementID;\n    if (act === \"next\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: currentID\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(info.nextID));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this);\n    } else if (act === \"prev\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: currentID\n                });\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/s\", \"/s/\".concat(info.prevID));\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this);\n    } else if (act === \"flag\") {\n        var newFlag = currentID + \" \" + \"&#013; &#010;\"; //last part should produce line breaks\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"button\",\n            onClick: function() {\n                if (document.getElementById(\"flags\").innerText.includes(currentID.toString()) === false) {\n                    axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                        currentID: currentID\n                    });\n                    document.getElementById(\"flags\").innerHTML += newFlag;\n                }\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"button\",\n            onClick: function() {\n                axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/leave\", {\n                    currentID: currentID\n                });\n            },\n            children: act\n        }, void 0, false, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, _this);\n    }\n};\n_c = NavButton;\nvar Nav = function(param) {\n    var current = param.current;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                info: current,\n                act: \"prev\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                info: current,\n                act: \"pause\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                info: current,\n                act: \"flag\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 63,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavButton, {\n                info: current,\n                act: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n                lineNumber: 64,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/Navigation.tsx\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, _this);\n} //const Next: React.FC<{current: NavButtonProps}> = ({current}) => {\n // return (\n //  <NavButton buttonText={'Next'} current={current}/>\n // )\n //}\n //export const getServerSideProps: GetServerSideProps = async (context) => {\n // const res = await fetch(`http://localhost:3001/next?current=${context.query.act}&now=${context.query.now}`);\n // console.log(\"here's await fetch the next url output:\");\n // console.log(await res.clone().text());\n // const result = await res.json();\n // console.log(\"here is the result:\"); console.log(result);\n // return {\n //  props: result\n // }\n //}\n;\n_c1 = Nav;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavButton\");\n$RefreshReg$(_c1, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3FCQUFJOzs7Ozs7YUFDcEMsQ0FDTjtDQUNELENBRUQsb0VBQW9FO0NBQ3BFLFdBQVc7Q0FDWCxzREFBc0Q7Q0FDdEQsSUFBSTtDQUNKLEdBQUc7Q0FFSCw0RUFBNEU7Q0FDNUUsK0dBQStHO0NBQy9HLDBEQUEwRDtDQUMxRCx5Q0FBeUM7Q0FDekMsbUNBQW1DO0NBQ25DLDJEQUEyRDtDQUMzRCxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLElBQUk7Q0FDSixHQUFHO0FBakJGO0FBVFlpQixNQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/ODNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgdHlwZSBOYXZJbmZvUHJvcHMgPSB7XG4gc3RhdGVtZW50SUQ6IG51bWJlcjtcbiBuZXh0SUQ6IG51bWJlcjtcbiBwcmV2SUQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgTmF2QnV0dG9uUHJvcHMgPSB7XG4gYWN0aW9uOiAnbmV4dCcgfCAncHJldicgfCAnZmxhZycgfCAncGF1c2UnO1xufVxuXG5jb25zdCBOYXZCdXR0b246IFJlYWN0LkZDPHtpbmZvOiBOYXZJbmZvUHJvcHMsIGFjdDogTmF2QnV0dG9uUHJvcHNbXCJhY3Rpb25cIl19PiA9ICh7aW5mbywgYWN0fSkgPT4ge1xuIGNvbnN0IGN1cnJlbnRJRCA9IGluZm8uICBzdGF0ZW1lbnRJRDtcblxuICBpZiAoYWN0ID09PSAnbmV4dCcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBheGlvcy5wdXQoJy9sZWF2ZScsIHsgY3VycmVudElEOiBjdXJyZW50SUQgfSk7XG4gICAgICAgUm91dGVyLnB1c2goJy9zJywgYC9zLyR7aW5mby5uZXh0SUR9YCl9fT5cbiAgICAgICAgIHthY3R9XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfSBlbHNlIGlmIChhY3QgPT09ICdwcmV2Jykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGF4aW9zLnB1dCgnL2xlYXZlJywgeyBjdXJyZW50SUQ6IGN1cnJlbnRJRCB9KTtcbiAgICAgICBSb3V0ZXIucHVzaCgnL3MnLCBgL3MvJHtpbmZvLnByZXZJRH1gKX19PlxuICAgICAgICAge2FjdH1cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9IGVsc2UgaWYgKGFjdCA9PT0gJ2ZsYWcnKSB7XG4gICAgY29uc3QgbmV3RmxhZyA9IGN1cnJlbnRJRCArICcgJyArIGAmIzAxMzsgJiMwMTA7YDsgLy9sYXN0IHBhcnQgc2hvdWxkIHByb2R1Y2UgbGluZSBicmVha3NcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdzJykuaW5uZXJUZXh0LmluY2x1ZGVzKGN1cnJlbnRJRC50b1N0cmluZygpKSA9PT0gZmFsc2UpXG4gICAgICAgIFx0eyBcbiAgICAgICAgICBheGlvcy5wdXQoJy9sZWF2ZScsIHsgY3VycmVudElEOiBjdXJyZW50SUQgfSk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsYWdzJykuaW5uZXJIVE1MICs9IG5ld0ZsYWcgXG4gICAgICAgIH1cbiAgICAgIH19PnthY3R9PC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJyBcblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGF4aW9zLnB1dCgnL2xlYXZlJywgeyBjdXJyZW50SUQ6IGN1cnJlbnRJRCB9KTtcblx0XHRcdFx0fX0+XG4gICAgICB7YWN0fVxuICAgIDwvZGl2PlxuICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5hdjogUmVhY3QuRkM8e2N1cnJlbnQ6IE5hdkluZm9Qcm9wc30+ID0gKHtjdXJyZW50fSkgPT4ge1xuIHJldHVybiAoXG4gIDxkaXYgaWQ9J25hdic+XG4gICA8TmF2QnV0dG9uIGluZm89e2N1cnJlbnR9IGFjdD17J3ByZXYnfSAvPlxuICAgPE5hdkJ1dHRvbiBpbmZvPXtjdXJyZW50fSBhY3Q9eydwYXVzZSd9IC8+XG4gICA8TmF2QnV0dG9uIGluZm89e2N1cnJlbnR9IGFjdD17J2ZsYWcnfSAvPlxuICAgPE5hdkJ1dHRvbiBpbmZvPXtjdXJyZW50fSBhY3Q9eyduZXh0J30gLz5cbiAgPC9kaXY+XG4gKVxufVxuXG4vL2NvbnN0IE5leHQ6IFJlYWN0LkZDPHtjdXJyZW50OiBOYXZCdXR0b25Qcm9wc30+ID0gKHtjdXJyZW50fSkgPT4ge1xuLy8gcmV0dXJuIChcbi8vICA8TmF2QnV0dG9uIGJ1dHRvblRleHQ9eydOZXh0J30gY3VycmVudD17Y3VycmVudH0vPlxuLy8gKVxuLy99XG5cbi8vZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbi8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvbmV4dD9jdXJyZW50PSR7Y29udGV4dC5xdWVyeS5hY3R9Jm5vdz0ke2NvbnRleHQucXVlcnkubm93fWApO1xuLy8gY29uc29sZS5sb2coXCJoZXJlJ3MgYXdhaXQgZmV0Y2ggdGhlIG5leHQgdXJsIG91dHB1dDpcIik7XG4vLyBjb25zb2xlLmxvZyhhd2FpdCByZXMuY2xvbmUoKS50ZXh0KCkpO1xuLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgcmVzdWx0OlwiKTsgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vIHJldHVybiB7XG4vLyAgcHJvcHM6IHJlc3VsdFxuLy8gfVxuLy99Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiYXhpb3MiLCJOYXZCdXR0b24iLCJpbmZvIiwiYWN0IiwiY3VycmVudElEIiwic3RhdGVtZW50SUQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHV0IiwicHVzaCIsIm5leHRJRCIsInByZXZJRCIsIm5ld0ZsYWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImlubmVySFRNTCIsIk5hdiIsImN1cnJlbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});