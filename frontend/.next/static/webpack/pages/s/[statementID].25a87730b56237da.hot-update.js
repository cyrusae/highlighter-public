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

/***/ "./components/FlagTracker.tsx":
/*!************************************!*\
  !*** ./components/FlagTracker.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FlagBar\": function() { return /* binding */ FlagBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar FlagBar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), show = ref[0], setShow = ref[1];\n    var handleClose = function() {\n        return setShow(false);\n    };\n    var handleOpen = function() {\n        return setShow(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleOpen,\n                children: \"\\u2691\"\n            }, void 0, false, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Offcanvas, {\n                show: show,\n                onHide: handleClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Offcanvas.Header, {\n                        closeButton: true,\n                        children: \"This session\"\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Offcanvas.Body, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Put flagtracker here.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(FlagBar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = FlagBar;\nvar FlagTracker = function(param) {\n    var current = param.current;\n    _s1();\n    console.log(current);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), flagged = ref[0], setFlagged = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var flags = localStorage.getItem(\"flag\");\n        if (flags !== null) setFlagged(localStorage.getItem(\"flag\"));\n        if (flags === null) flags = \"\";\n        document.getElementById(\"flagButton\").addEventListener(\"click\", function flag() {\n            if (flags.includes(current.toString()) === false) {\n                var commentary = prompt(\"Why flag this?\", \"\");\n                flags += \"<li>\" + current + \": \" + commentary + \"</li>\";\n            }\n            localStorage.setItem(\"flag\", flags);\n            setFlagged(localStorage.getItem(\"flag\"));\n        });\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var bar = document.getElementById(\"flagbar\");\n        if (localStorage.getItem(\"flag\") === null) {\n            bar.style.backgroundColor = \"#53565A\";\n        } else {\n            bar.style.backgroundColor = \"#610C04\";\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flagtracker\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                    children: \"Statements flagged this session:\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"flags\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        dangerouslySetInnerHTML: {\n                            __html: flagged\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    size: \"sm\",\n                    type: \"button\",\n                    onClick: function() {\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:3001/saveflags\", {\n                            content: flagged,\n                            type: \"flags\"\n                        });\n                    },\n                    children: \"Save flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    size: \"sm\",\n                    type: \"button\",\n                    onClick: function() {\n                        return navigator.clipboard.writeText(flagged);\n                    },\n                    children: \"Copy flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    size: \"sm\",\n                    type: \"button\",\n                    onClick: function() {\n                        localStorage.clear();\n                        setFlagged(\"\");\n                    },\n                    children: \"Clear flags\"\n                }, void 0, false, {\n                    fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n            lineNumber: 53,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/watcher/GitHere/highlighter-public/frontend/components/FlagTracker.tsx\",\n        lineNumber: 52,\n        columnNumber: 3\n    }, _this);\n};\n_s1(FlagTracker, \"DnDRc95DuJngCDdEyM2Q+/qD68w=\");\n_c1 = FlagTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlagTracker);\nvar _c, _c1;\n$RefreshReg$(_c, \"FlagBar\");\n$RefreshReg$(_c1, \"FlagTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsYUFBYTtrQkFDM0IsNEVBQUNDLFNBQU87OzhCQUNQLDhEQUFDQyxTQUFPOzhCQUFDLGtDQUFnQzs7Ozs7eUJBQVU7OEJBQ25ELDhEQUFDOUIsS0FBRztvQkFBQytCLEVBQUUsRUFBQyxPQUFPOzhCQUNkLDRFQUFDQyxJQUFFO3dCQUFDQyx1QkFBdUIsRUFBRTs0QkFBQ0MsTUFBTSxFQUFFdkIsT0FBTzt5QkFBQzs7Ozs7NkJBQU87Ozs7O3lCQUNoRDs4QkFDTiw4REFBQ2pCLG1EQUFNO29CQUFDeUMsSUFBSSxFQUFDLElBQUk7b0JBQUNDLElBQUksRUFBQyxRQUFRO29CQUFDbkMsT0FBTyxFQUFFOytCQUFNWixpREFBVSxDQUFDLGlDQUFpQyxFQUFFOzRCQUM1RmlELE9BQU8sRUFBRTNCLE9BQU87NEJBQ2hCeUIsSUFBSSxFQUFFLE9BQU87eUJBQ2IsQ0FBQztxQkFBQTs4QkFBRSxZQUVKOzs7Ozt5QkFBUzs4QkFDVCw4REFBQzFDLG1EQUFNO29CQUFDeUMsSUFBSSxFQUFDLElBQUk7b0JBQUNDLElBQUksRUFBQyxRQUFRO29CQUFDbkMsT0FBTyxFQUFFOytCQUFNc0MsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQzlCLE9BQU8sQ0FBQztxQkFBQTs4QkFBRSxZQUV2Rjs7Ozs7eUJBQVM7OEJBQ1QsOERBQUNqQixtREFBTTtvQkFBQ3lDLElBQUksRUFBQyxJQUFJO29CQUFDQyxJQUFJLEVBQUMsUUFBUTtvQkFBQ25DLE9BQU8sRUFBRSxXQUFNO3dCQUFDYSxZQUFZLENBQUM0QixLQUFLLEVBQUUsQ0FBQzt3QkFBQzlCLFVBQVUsQ0FBQyxFQUFFLENBQUM7cUJBQUM7OEJBQUUsYUFFdkY7Ozs7O3lCQUFTOzs7Ozs7aUJBQ0E7Ozs7O2FBQ0wsQ0FDTjtDQUNEO0lBakRLTCxXQUFXO0FBQVhBLE1BQUFBLFdBQVc7QUFtRGpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmxhZ1RyYWNrZXIudHN4PzViMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb2wsIE9mZmNhbnZhcywgQnV0dG9uLCBTdGFjayB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGNvbnN0IEZsYWdCYXI6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcbiBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcbiByZXR1cm4gKFxuICA8PlxuICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVPcGVufT7impE8L2Rpdj5cbiAgIDxPZmZjYW52YXMgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0+XG4gICAgPE9mZmNhbnZhcy5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgIFRoaXMgc2Vzc2lvblxuICAgIDwvT2ZmY2FudmFzLkhlYWRlcj5cbiAgICA8T2ZmY2FudmFzLkJvZHk+XG4gICAgIDxwPlB1dCBmbGFndHJhY2tlciBoZXJlLjwvcD5cbiAgICA8L09mZmNhbnZhcy5Cb2R5PlxuICAgPC9PZmZjYW52YXM+XG4gIDwvPlxuIClcbn1cblxuY29uc3QgRmxhZ1RyYWNrZXI6IFJlYWN0LkZDPHtjdXJyZW50OiBudW1iZXJ9PiA9ICh7Y3VycmVudH0pID0+IHtcbiBjb25zb2xlLmxvZyhjdXJyZW50KTtcbiBjb25zdCBbIGZsYWdnZWQsIHNldEZsYWdnZWQgXSA9IHVzZVN0YXRlKCcnKVxuXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgbGV0IGZsYWdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKTtcbiAgaWYgKGZsYWdzICE9PSBudWxsKSBzZXRGbGFnZ2VkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbGFnJykpOyBcbiAgaWYgKGZsYWdzID09PSBudWxsKSBmbGFncyA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZ0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gZmxhZygpIHtcbiAgIGlmIChmbGFncy5pbmNsdWRlcyhjdXJyZW50LnRvU3RyaW5nKCkpID09PSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbW1lbnRhcnkgPSBwcm9tcHQoJ1doeSBmbGFnIHRoaXM/JywgJycpO1xuICAgIGZsYWdzICs9ICgnPGxpPicgKyBjdXJyZW50ICsgJzogJyArIGNvbW1lbnRhcnkgKyAnPC9saT4nKTtcbiAgIH07XG4gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxhZycsIGZsYWdzKTtcbiAgIHNldEZsYWdnZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZsYWcnKSk7XG4gIH0pO1xuIH0pXG5cbiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZ2JhcicpXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxhZycpID09PSBudWxsKSB7XG4gICBiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNTM1NjVBXCI7XG4gIH0gZWxzZSB7XG4gICBiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNjEwQzA0XCJcbiAgfVxuIH0pXG5cbiByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nZmxhZ3RyYWNrZXInPlxuICAgPGRldGFpbHM+XG4gICAgPHN1bW1hcnk+U3RhdGVtZW50cyBmbGFnZ2VkIHRoaXMgc2Vzc2lvbjo8L3N1bW1hcnk+XG4gICAgPGRpdiBpZD0nZmxhZ3MnPlxuICAgICA8dWwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGZsYWdnZWR9fT48L3VsPlxuICAgIDwvZGl2PlxuICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvc2F2ZWZsYWdzJywge1xuICAgICBjb250ZW50OiBmbGFnZ2VkLFxuICAgICB0eXBlOiAnZmxhZ3MnXG4gICAgfSl9PlxuICAgICBTYXZlIGZsYWdzXG4gICAgPC9CdXR0b24+XG4gICAgPEJ1dHRvbiBzaXplPVwic21cIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGZsYWdnZWQpfT5cbiAgICAgQ29weSBmbGFnc1xuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7bG9jYWxTdG9yYWdlLmNsZWFyKCk7IHNldEZsYWdnZWQoJycpfX0+XG4gICAgIENsZWFyIGZsYWdzXG4gICAgPC9CdXR0b24+XG4gICA8L2RldGFpbHM+XG4gIDwvZGl2PlxuIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxhZ1RyYWNrZXIgIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk9mZmNhbnZhcyIsIkJ1dHRvbiIsIkZsYWdCYXIiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsImRpdiIsIm9uQ2xpY2siLCJvbkhpZGUiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIkJvZHkiLCJwIiwiRmxhZ1RyYWNrZXIiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImZsYWdnZWQiLCJzZXRGbGFnZ2VkIiwiZmxhZ3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmbGFnIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImNvbW1lbnRhcnkiLCJwcm9tcHQiLCJzZXRJdGVtIiwiYmFyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJkZXRhaWxzIiwic3VtbWFyeSIsImlkIiwidWwiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInNpemUiLCJ0eXBlIiwicG9zdCIsImNvbnRlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FlagTracker.tsx\n");

/***/ })

});