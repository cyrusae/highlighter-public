"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/styles.css":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/styles.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Basic formatting */\\n\\n* {\\n font-size: 28px;\\n color: black;\\n line-height: 1.35;\\n font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n}\\n\\nbody {\\n background-color: #e0e0e0;\\n}\\n\\nbody > *::not(#nav) {\\n max-width: 80%;\\n margin: 0 auto;\\n}\\n\\n/* Increase of emphasis */\\n\\ndiv {\\n/* background: #efefef; */\\n padding: 0.5rem;\\n}\\n\\nmain .statement {\\n background-color: #fcfcfc;\\n}\\n\\n.statement, details {\\n background: #f0f0f0;\\n margin: 0.5rem;\\n}\\n\\n.statement .metadata, .statebox, summary {\\n background: white;\\n}\\n\\n.statebox {\\n padding: 0.5rem;\\n margin-top: 0.5rem;\\n}\\n\\n/* Highlights */\\n\\nmark, mark * {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\nmark {\\n/* font-weight: lighter; */\\n font-style: italic;\\n}\\n\\n/* REPLACE THIS SECTION WHEN YOU HAVE CODES */\\n.exampleCode, .exampleCode * { background-color: #eeffee !important; }\\n.exampleTwo, .exampleTwo * { background-color: #ffffee !important; }\\n.exampleThree, .exampleThree * { background-color: #eeffff !important; }\\n.test, .test * { background-color: #f6a4c4 !important; }\\n.test2, .test2 * { background-color: #e5a0c9 !important; }\\n.test3, .test3 * { background-color: #e6b7f3 !important; }\\n.test4, .test4 * { background-color: #f9b1d4 !important; }\\n.inputTest, .inputTest * { background-color: #efffc4 !important; }\\n.showingPeter, .showingPeter * { background-color: #f4fbc3 !important; }\\n.ChromeTest, .ChromeTest * { background-color: #cdb1fc !important; }\\n.blue, .blue * { background-color: #c7f9fc !important; }\\n\\n/* \\\"!important\\\" is generally considered bad practice, but was necessary to override every other source of background color.\\n\\n/* Glossary */\\n.glossary, .glossary * {\\n background: white;\\n}\\n\\n.glossary p {\\n margin-left: 0.5rem;\\n margin-right: 0.5rem;\\n}\\n\\n#codepage > div, #codepage form > div, #justcss div code {\\n display: flex;\\n flex-direction: column;\\n}\\n\\n#sassmap > div, #justcss > div {\\n background: black;\\n color: white;\\n padding: 1.5rem;\\n}\\n\\n#justcss div code, #sassmap div code {\\n color: white;\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* [statementID].tsx */\\n#reader .metadata {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n#reader #statebox {\\n padding: 1.3rem;\\n}\\n\\n#reader #nav {\\n position: fixed;\\n margin: 0 auto;\\n bottom: 0;\\n width: 95vw;\\n background: #e0e0e0;\\n display: flex;\\n justify-content: space-around;\\n}\\n\\n#reader .statement {\\n overflow-y: scroll;\\n max-height: 80vh;\\n}\\n\\n#reader #center {\\n position: absolute;\\n right: 26vw;\\n left: 1vw;\\n overflow-y: scroll;\\n height: 85vh;\\n bottom: 10vh;\\n}\\n\\n#coder {\\n position: absolute;\\n right: 0;\\n top: 0;\\n width: 25vw;\\n font-size: 23px;\\n}\\n\\n#codepick {\\n position: fixed;\\n background-color: #efefef;\\n top: 0;\\n}\\n\\n#codepick select {\\n margin-top: 1rem;\\n}\\n\\n#codepick + .flagtracker {\\n overflow-y: scroll;\\n margin-top: 20vh;\\n margin-bottom: 20vh;\\n right: 5px;\\n}\\n\\ndiv#definitions {\\n padding: 0.5rem;\\n}\\n\\ndiv#definitions p, div#definitions p * {\\n font-size: 0.8rem;\\n}\\n\\n#coder select {\\n font-size: 0.8rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/styles.css\"],\"names\":[],\"mappings\":\"AAAA,qBAAqB;;AAErB;CACC,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,qHAAqH;AACtH;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,cAAc;CACd,cAAc;AACf;;AAEA,yBAAyB;;AAEzB;AACA,yBAAyB;CACxB,eAAe;AAChB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,cAAc;AACf;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;AACnB;;AAEA,eAAe;;AAEf;CACC,sDAAsD;AACvD;;AAEA;AACA,0BAA0B;CACzB,kBAAkB;AACnB;;AAEA,6CAA6C;AAC7C,+BAA+B,oCAAoC,EAAE;AACrE,6BAA6B,oCAAoC,EAAE;AACnE,iCAAiC,oCAAoC,EAAE;AACvE,iBAAiB,oCAAoC,EAAE;AACvD,mBAAmB,oCAAoC,EAAE;AACzD,mBAAmB,oCAAoC,EAAE;AACzD,mBAAmB,oCAAoC,EAAE;AACzD,2BAA2B,oCAAoC,EAAE;AACjE,iCAAiC,oCAAoC,EAAE;AACvE,6BAA6B,oCAAoC,EAAE;AACnE,iBAAiB,oCAAoC,EAAE;;AAEvD;;aAEa;AACb;CACC,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,sDAAsD;AACvD;;AAEA,sBAAsB;AACtB;CACC,sDAAsD;AACvD;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,cAAc;CACd,SAAS;CACT,WAAW;CACX,mBAAmB;CACnB,aAAa;CACb,6BAA6B;AAC9B;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,SAAS;CACT,kBAAkB;CAClB,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,MAAM;CACN,WAAW;CACX,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,yBAAyB;CACzB,MAAM;AACP;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,mBAAmB;CACnB,UAAU;AACX;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB\",\"sourcesContent\":[\"/* Basic formatting */\\n\\n* {\\n font-size: 28px;\\n color: black;\\n line-height: 1.35;\\n font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n}\\n\\nbody {\\n background-color: #e0e0e0;\\n}\\n\\nbody > *::not(#nav) {\\n max-width: 80%;\\n margin: 0 auto;\\n}\\n\\n/* Increase of emphasis */\\n\\ndiv {\\n/* background: #efefef; */\\n padding: 0.5rem;\\n}\\n\\nmain .statement {\\n background-color: #fcfcfc;\\n}\\n\\n.statement, details {\\n background: #f0f0f0;\\n margin: 0.5rem;\\n}\\n\\n.statement .metadata, .statebox, summary {\\n background: white;\\n}\\n\\n.statebox {\\n padding: 0.5rem;\\n margin-top: 0.5rem;\\n}\\n\\n/* Highlights */\\n\\nmark, mark * {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\nmark {\\n/* font-weight: lighter; */\\n font-style: italic;\\n}\\n\\n/* REPLACE THIS SECTION WHEN YOU HAVE CODES */\\n.exampleCode, .exampleCode * { background-color: #eeffee !important; }\\n.exampleTwo, .exampleTwo * { background-color: #ffffee !important; }\\n.exampleThree, .exampleThree * { background-color: #eeffff !important; }\\n.test, .test * { background-color: #f6a4c4 !important; }\\n.test2, .test2 * { background-color: #e5a0c9 !important; }\\n.test3, .test3 * { background-color: #e6b7f3 !important; }\\n.test4, .test4 * { background-color: #f9b1d4 !important; }\\n.inputTest, .inputTest * { background-color: #efffc4 !important; }\\n.showingPeter, .showingPeter * { background-color: #f4fbc3 !important; }\\n.ChromeTest, .ChromeTest * { background-color: #cdb1fc !important; }\\n.blue, .blue * { background-color: #c7f9fc !important; }\\n\\n/* \\\"!important\\\" is generally considered bad practice, but was necessary to override every other source of background color.\\n\\n/* Glossary */\\n.glossary, .glossary * {\\n background: white;\\n}\\n\\n.glossary p {\\n margin-left: 0.5rem;\\n margin-right: 0.5rem;\\n}\\n\\n#codepage > div, #codepage form > div, #justcss div code {\\n display: flex;\\n flex-direction: column;\\n}\\n\\n#sassmap > div, #justcss > div {\\n background: black;\\n color: white;\\n padding: 1.5rem;\\n}\\n\\n#justcss div code, #sassmap div code {\\n color: white;\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* [statementID].tsx */\\n#reader .metadata {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n#reader #statebox {\\n padding: 1.3rem;\\n}\\n\\n#reader #nav {\\n position: fixed;\\n margin: 0 auto;\\n bottom: 0;\\n width: 95vw;\\n background: #e0e0e0;\\n display: flex;\\n justify-content: space-around;\\n}\\n\\n#reader .statement {\\n overflow-y: scroll;\\n max-height: 80vh;\\n}\\n\\n#reader #center {\\n position: absolute;\\n right: 26vw;\\n left: 1vw;\\n overflow-y: scroll;\\n height: 85vh;\\n bottom: 10vh;\\n}\\n\\n#coder {\\n position: absolute;\\n right: 0;\\n top: 0;\\n width: 25vw;\\n font-size: 23px;\\n}\\n\\n#codepick {\\n position: fixed;\\n background-color: #efefef;\\n top: 0;\\n}\\n\\n#codepick select {\\n margin-top: 1rem;\\n}\\n\\n#codepick + .flagtracker {\\n overflow-y: scroll;\\n margin-top: 20vh;\\n margin-bottom: 20vh;\\n right: 5px;\\n}\\n\\ndiv#definitions {\\n padding: 0.5rem;\\n}\\n\\ndiv#definitions p, div#definitions p * {\\n font-size: 0.8rem;\\n}\\n\\n#coder select {\\n font-size: 0.8rem;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL3N0eWxlcy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVFQUF1RSxtQkFBbUIsZ0JBQWdCLHFCQUFxQix5SEFBeUgsR0FBRyxVQUFVLDZCQUE2QixHQUFHLHlCQUF5QixrQkFBa0Isa0JBQWtCLEdBQUcsdUNBQXVDLDBCQUEwQixxQkFBcUIsR0FBRyxxQkFBcUIsNkJBQTZCLEdBQUcseUJBQXlCLHVCQUF1QixrQkFBa0IsR0FBRyw4Q0FBOEMscUJBQXFCLEdBQUcsZUFBZSxtQkFBbUIsc0JBQXNCLEdBQUcsc0NBQXNDLDBEQUEwRCxHQUFHLFVBQVUsMkJBQTJCLHdCQUF3QixHQUFHLG1GQUFtRix1Q0FBdUMsK0JBQStCLHVDQUF1QyxtQ0FBbUMsdUNBQXVDLG1CQUFtQix1Q0FBdUMscUJBQXFCLHVDQUF1QyxxQkFBcUIsdUNBQXVDLHFCQUFxQix1Q0FBdUMsNkJBQTZCLHVDQUF1QyxtQ0FBbUMsdUNBQXVDLCtCQUErQix1Q0FBdUMsbUJBQW1CLHVDQUF1Qyw2S0FBNksscUJBQXFCLEdBQUcsaUJBQWlCLHVCQUF1Qix3QkFBd0IsR0FBRyw4REFBOEQsaUJBQWlCLDBCQUEwQixHQUFHLG9DQUFvQyxxQkFBcUIsZ0JBQWdCLG1CQUFtQixHQUFHLDBDQUEwQyxnQkFBZ0IsMERBQTBELEdBQUcsZ0RBQWdELDBEQUEwRCxHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxrQkFBa0IsbUJBQW1CLGtCQUFrQixhQUFhLGVBQWUsdUJBQXVCLGlCQUFpQixpQ0FBaUMsR0FBRyx3QkFBd0Isc0JBQXNCLG9CQUFvQixHQUFHLHFCQUFxQixzQkFBc0IsZUFBZSxhQUFhLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLEdBQUcsWUFBWSxzQkFBc0IsWUFBWSxVQUFVLGVBQWUsbUJBQW1CLEdBQUcsZUFBZSxtQkFBbUIsNkJBQTZCLFVBQVUsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsOEJBQThCLHNCQUFzQixvQkFBb0IsdUJBQXVCLGNBQWMsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsNENBQTRDLHFCQUFxQixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxPQUFPLDBGQUEwRixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVkseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDBCQUEwQixPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLHVEQUF1RCxtQkFBbUIsZ0JBQWdCLHFCQUFxQix5SEFBeUgsR0FBRyxVQUFVLDZCQUE2QixHQUFHLHlCQUF5QixrQkFBa0Isa0JBQWtCLEdBQUcsdUNBQXVDLDBCQUEwQixxQkFBcUIsR0FBRyxxQkFBcUIsNkJBQTZCLEdBQUcseUJBQXlCLHVCQUF1QixrQkFBa0IsR0FBRyw4Q0FBOEMscUJBQXFCLEdBQUcsZUFBZSxtQkFBbUIsc0JBQXNCLEdBQUcsc0NBQXNDLDBEQUEwRCxHQUFHLFVBQVUsMkJBQTJCLHdCQUF3QixHQUFHLG1GQUFtRix1Q0FBdUMsK0JBQStCLHVDQUF1QyxtQ0FBbUMsdUNBQXVDLG1CQUFtQix1Q0FBdUMscUJBQXFCLHVDQUF1QyxxQkFBcUIsdUNBQXVDLHFCQUFxQix1Q0FBdUMsNkJBQTZCLHVDQUF1QyxtQ0FBbUMsdUNBQXVDLCtCQUErQix1Q0FBdUMsbUJBQW1CLHVDQUF1Qyw2S0FBNksscUJBQXFCLEdBQUcsaUJBQWlCLHVCQUF1Qix3QkFBd0IsR0FBRyw4REFBOEQsaUJBQWlCLDBCQUEwQixHQUFHLG9DQUFvQyxxQkFBcUIsZ0JBQWdCLG1CQUFtQixHQUFHLDBDQUEwQyxnQkFBZ0IsMERBQTBELEdBQUcsZ0RBQWdELDBEQUEwRCxHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxrQkFBa0IsbUJBQW1CLGtCQUFrQixhQUFhLGVBQWUsdUJBQXVCLGlCQUFpQixpQ0FBaUMsR0FBRyx3QkFBd0Isc0JBQXNCLG9CQUFvQixHQUFHLHFCQUFxQixzQkFBc0IsZUFBZSxhQUFhLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLEdBQUcsWUFBWSxzQkFBc0IsWUFBWSxVQUFVLGVBQWUsbUJBQW1CLEdBQUcsZUFBZSxtQkFBbUIsNkJBQTZCLFVBQVUsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsOEJBQThCLHNCQUFzQixvQkFBb0IsdUJBQXVCLGNBQWMsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsNENBQTRDLHFCQUFxQixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxtQkFBbUI7QUFDcHJQO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlcy5jc3M/NjY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQmFzaWMgZm9ybWF0dGluZyAqL1xcblxcbioge1xcbiBmb250LXNpemU6IDI4cHg7XFxuIGNvbG9yOiBibGFjaztcXG4gbGluZS1oZWlnaHQ6IDEuMzU7XFxuIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbmJvZHkgPiAqOjpub3QoI25hdikge1xcbiBtYXgtd2lkdGg6IDgwJTtcXG4gbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi8qIEluY3JlYXNlIG9mIGVtcGhhc2lzICovXFxuXFxuZGl2IHtcXG4vKiBiYWNrZ3JvdW5kOiAjZWZlZmVmOyAqL1xcbiBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbm1haW4gLnN0YXRlbWVudCB7XFxuIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxufVxcblxcbi5zdGF0ZW1lbnQsIGRldGFpbHMge1xcbiBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLnN0YXRlbWVudCAubWV0YWRhdGEsIC5zdGF0ZWJveCwgc3VtbWFyeSB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdGVib3gge1xcbiBwYWRkaW5nOiAwLjVyZW07XFxuIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLyogSGlnaGxpZ2h0cyAqL1xcblxcbm1hcmssIG1hcmsgKiB7XFxuIGZvbnQtZmFtaWx5OiAnVmljdG9yIE1vbm8nLCAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcXG59XFxuXFxubWFyayB7XFxuLyogZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7ICovXFxuIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogUkVQTEFDRSBUSElTIFNFQ1RJT04gV0hFTiBZT1UgSEFWRSBDT0RFUyAqL1xcbi5leGFtcGxlQ29kZSwgLmV4YW1wbGVDb2RlICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmZmVlICFpbXBvcnRhbnQ7IH1cXG4uZXhhbXBsZVR3bywgLmV4YW1wbGVUd28gKiB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZWUgIWltcG9ydGFudDsgfVxcbi5leGFtcGxlVGhyZWUsIC5leGFtcGxlVGhyZWUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlZWZmZmYgIWltcG9ydGFudDsgfVxcbi50ZXN0LCAudGVzdCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y2YTRjNCAhaW1wb3J0YW50OyB9XFxuLnRlc3QyLCAudGVzdDIgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlNWEwYzkgIWltcG9ydGFudDsgfVxcbi50ZXN0MywgLnRlc3QzICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZiN2YzICFpbXBvcnRhbnQ7IH1cXG4udGVzdDQsIC50ZXN0NCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjFkNCAhaW1wb3J0YW50OyB9XFxuLmlucHV0VGVzdCwgLmlucHV0VGVzdCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2VmZmZjNCAhaW1wb3J0YW50OyB9XFxuLnNob3dpbmdQZXRlciwgLnNob3dpbmdQZXRlciAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZmJjMyAhaW1wb3J0YW50OyB9XFxuLkNocm9tZVRlc3QsIC5DaHJvbWVUZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RiMWZjICFpbXBvcnRhbnQ7IH1cXG4uYmx1ZSwgLmJsdWUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNjN2Y5ZmMgIWltcG9ydGFudDsgfVxcblxcbi8qIFxcXCIhaW1wb3J0YW50XFxcIiBpcyBnZW5lcmFsbHkgY29uc2lkZXJlZCBiYWQgcHJhY3RpY2UsIGJ1dCB3YXMgbmVjZXNzYXJ5IHRvIG92ZXJyaWRlIGV2ZXJ5IG90aGVyIHNvdXJjZSBvZiBiYWNrZ3JvdW5kIGNvbG9yLlxcblxcbi8qIEdsb3NzYXJ5ICovXFxuLmdsb3NzYXJ5LCAuZ2xvc3NhcnkgKiB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uZ2xvc3NhcnkgcCB7XFxuIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jY29kZXBhZ2UgPiBkaXYsICNjb2RlcGFnZSBmb3JtID4gZGl2LCAjanVzdGNzcyBkaXYgY29kZSB7XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzYXNzbWFwID4gZGl2LCAjanVzdGNzcyA+IGRpdiB7XFxuIGJhY2tncm91bmQ6IGJsYWNrO1xcbiBjb2xvcjogd2hpdGU7XFxuIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuI2p1c3Rjc3MgZGl2IGNvZGUsICNzYXNzbWFwIGRpdiBjb2RlIHtcXG4gY29sb3I6IHdoaXRlO1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbi8qIFtzdGF0ZW1lbnRJRF0udHN4ICovXFxuI3JlYWRlciAubWV0YWRhdGEge1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbiNyZWFkZXIgI3N0YXRlYm94IHtcXG4gcGFkZGluZzogMS4zcmVtO1xcbn1cXG5cXG4jcmVhZGVyICNuYXYge1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxuIG1hcmdpbjogMCBhdXRvO1xcbiBib3R0b206IDA7XFxuIHdpZHRoOiA5NXZ3O1xcbiBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI3JlYWRlciAuc3RhdGVtZW50IHtcXG4gb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiBtYXgtaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4jcmVhZGVyICNjZW50ZXIge1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIHJpZ2h0OiAyNnZ3O1xcbiBsZWZ0OiAxdnc7XFxuIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gaGVpZ2h0OiA4NXZoO1xcbiBib3R0b206IDEwdmg7XFxufVxcblxcbiNjb2RlciB7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gcmlnaHQ6IDA7XFxuIHRvcDogMDtcXG4gd2lkdGg6IDI1dnc7XFxuIGZvbnQtc2l6ZTogMjNweDtcXG59XFxuXFxuI2NvZGVwaWNrIHtcXG4gcG9zaXRpb246IGZpeGVkO1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiB0b3A6IDA7XFxufVxcblxcbiNjb2RlcGljayBzZWxlY3Qge1xcbiBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4jY29kZXBpY2sgKyAuZmxhZ3RyYWNrZXIge1xcbiBvdmVyZmxvdy15OiBzY3JvbGw7XFxuIG1hcmdpbi10b3A6IDIwdmg7XFxuIG1hcmdpbi1ib3R0b206IDIwdmg7XFxuIHJpZ2h0OiA1cHg7XFxufVxcblxcbmRpdiNkZWZpbml0aW9ucyB7XFxuIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuZGl2I2RlZmluaXRpb25zIHAsIGRpdiNkZWZpbml0aW9ucyBwICoge1xcbiBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2NvZGVyIHNlbGVjdCB7XFxuIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCOztBQUVyQjtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHFIQUFxSDtBQUN0SDs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0FBQ2Y7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBLHlCQUF5QjtDQUN4QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUEsZUFBZTs7QUFFZjtDQUNDLHNEQUFzRDtBQUN2RDs7QUFFQTtBQUNBLDBCQUEwQjtDQUN6QixrQkFBa0I7QUFDbkI7O0FBRUEsNkNBQTZDO0FBQzdDLCtCQUErQixvQ0FBb0MsRUFBRTtBQUNyRSw2QkFBNkIsb0NBQW9DLEVBQUU7QUFDbkUsaUNBQWlDLG9DQUFvQyxFQUFFO0FBQ3ZFLGlCQUFpQixvQ0FBb0MsRUFBRTtBQUN2RCxtQkFBbUIsb0NBQW9DLEVBQUU7QUFDekQsbUJBQW1CLG9DQUFvQyxFQUFFO0FBQ3pELG1CQUFtQixvQ0FBb0MsRUFBRTtBQUN6RCwyQkFBMkIsb0NBQW9DLEVBQUU7QUFDakUsaUNBQWlDLG9DQUFvQyxFQUFFO0FBQ3ZFLDZCQUE2QixvQ0FBb0MsRUFBRTtBQUNuRSxpQkFBaUIsb0NBQW9DLEVBQUU7O0FBRXZEOzthQUVhO0FBQ2I7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixzREFBc0Q7QUFDdkQ7O0FBRUEsc0JBQXNCO0FBQ3RCO0NBQ0Msc0RBQXNEO0FBQ3ZEOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsU0FBUztDQUNULFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsTUFBTTtDQUNOLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixNQUFNO0FBQ1A7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJhc2ljIGZvcm1hdHRpbmcgKi9cXG5cXG4qIHtcXG4gZm9udC1zaXplOiAyOHB4O1xcbiBjb2xvcjogYmxhY2s7XFxuIGxpbmUtaGVpZ2h0OiAxLjM1O1xcbiBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG5ib2R5ID4gKjo6bm90KCNuYXYpIHtcXG4gbWF4LXdpZHRoOiA4MCU7XFxuIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBJbmNyZWFzZSBvZiBlbXBoYXNpcyAqL1xcblxcbmRpdiB7XFxuLyogYmFja2dyb3VuZDogI2VmZWZlZjsgKi9cXG4gcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5tYWluIC5zdGF0ZW1lbnQge1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xcbn1cXG5cXG4uc3RhdGVtZW50LCBkZXRhaWxzIHtcXG4gYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbi5zdGF0ZW1lbnQgLm1ldGFkYXRhLCAuc3RhdGVib3gsIHN1bW1hcnkge1xcbiBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLnN0YXRlYm94IHtcXG4gcGFkZGluZzogMC41cmVtO1xcbiBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi8qIEhpZ2hsaWdodHMgKi9cXG5cXG5tYXJrLCBtYXJrICoge1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbm1hcmsge1xcbi8qIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyAqL1xcbiBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIFJFUExBQ0UgVEhJUyBTRUNUSU9OIFdIRU4gWU9VIEhBVkUgQ09ERVMgKi9cXG4uZXhhbXBsZUNvZGUsIC5leGFtcGxlQ29kZSAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2VlZmZlZSAhaW1wb3J0YW50OyB9XFxuLmV4YW1wbGVUd28sIC5leGFtcGxlVHdvICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmVlICFpbXBvcnRhbnQ7IH1cXG4uZXhhbXBsZVRocmVlLCAuZXhhbXBsZVRocmVlICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmZmZmICFpbXBvcnRhbnQ7IH1cXG4udGVzdCwgLnRlc3QgKiB7IGJhY2tncm91bmQtY29sb3I6ICNmNmE0YzQgIWltcG9ydGFudDsgfVxcbi50ZXN0MiwgLnRlc3QyICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVhMGM5ICFpbXBvcnRhbnQ7IH1cXG4udGVzdDMsIC50ZXN0MyAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2U2YjdmMyAhaW1wb3J0YW50OyB9XFxuLnRlc3Q0LCAudGVzdDQgKiB7IGJhY2tncm91bmQtY29sb3I6ICNmOWIxZDQgIWltcG9ydGFudDsgfVxcbi5pbnB1dFRlc3QsIC5pbnB1dFRlc3QgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlZmZmYzQgIWltcG9ydGFudDsgfVxcbi5zaG93aW5nUGV0ZXIsIC5zaG93aW5nUGV0ZXIgKiB7IGJhY2tncm91bmQtY29sb3I6ICNmNGZiYzMgIWltcG9ydGFudDsgfVxcbi5DaHJvbWVUZXN0LCAuQ2hyb21lVGVzdCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2NkYjFmYyAhaW1wb3J0YW50OyB9XFxuLmJsdWUsIC5ibHVlICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdmOWZjICFpbXBvcnRhbnQ7IH1cXG5cXG4vKiBcXFwiIWltcG9ydGFudFxcXCIgaXMgZ2VuZXJhbGx5IGNvbnNpZGVyZWQgYmFkIHByYWN0aWNlLCBidXQgd2FzIG5lY2Vzc2FyeSB0byBvdmVycmlkZSBldmVyeSBvdGhlciBzb3VyY2Ugb2YgYmFja2dyb3VuZCBjb2xvci5cXG5cXG4vKiBHbG9zc2FyeSAqL1xcbi5nbG9zc2FyeSwgLmdsb3NzYXJ5ICoge1xcbiBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLmdsb3NzYXJ5IHAge1xcbiBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuI2NvZGVwYWdlID4gZGl2LCAjY29kZXBhZ2UgZm9ybSA+IGRpdiwgI2p1c3Rjc3MgZGl2IGNvZGUge1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2Fzc21hcCA+IGRpdiwgI2p1c3Rjc3MgPiBkaXYge1xcbiBiYWNrZ3JvdW5kOiBibGFjaztcXG4gY29sb3I6IHdoaXRlO1xcbiBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbiNqdXN0Y3NzIGRpdiBjb2RlLCAjc2Fzc21hcCBkaXYgY29kZSB7XFxuIGNvbG9yOiB3aGl0ZTtcXG4gZm9udC1mYW1pbHk6ICdWaWN0b3IgTW9ubycsICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4vKiBbc3RhdGVtZW50SURdLnRzeCAqL1xcbiNyZWFkZXIgLm1ldGFkYXRhIHtcXG4gZm9udC1mYW1pbHk6ICdWaWN0b3IgTW9ubycsICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4jcmVhZGVyICNzdGF0ZWJveCB7XFxuIHBhZGRpbmc6IDEuM3JlbTtcXG59XFxuXFxuI3JlYWRlciAjbmF2IHtcXG4gcG9zaXRpb246IGZpeGVkO1xcbiBtYXJnaW46IDAgYXV0bztcXG4gYm90dG9tOiAwO1xcbiB3aWR0aDogOTV2dztcXG4gYmFja2dyb3VuZDogI2UwZTBlMDtcXG4gZGlzcGxheTogZmxleDtcXG4ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNyZWFkZXIgLnN0YXRlbWVudCB7XFxuIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gbWF4LWhlaWdodDogODB2aDtcXG59XFxuXFxuI3JlYWRlciAjY2VudGVyIHtcXG4gcG9zaXRpb246IGFic29sdXRlO1xcbiByaWdodDogMjZ2dztcXG4gbGVmdDogMXZ3O1xcbiBvdmVyZmxvdy15OiBzY3JvbGw7XFxuIGhlaWdodDogODV2aDtcXG4gYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4jY29kZXIge1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIHJpZ2h0OiAwO1xcbiB0b3A6IDA7XFxuIHdpZHRoOiAyNXZ3O1xcbiBmb250LXNpemU6IDIzcHg7XFxufVxcblxcbiNjb2RlcGljayB7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gdG9wOiAwO1xcbn1cXG5cXG4jY29kZXBpY2sgc2VsZWN0IHtcXG4gbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuI2NvZGVwaWNrICsgLmZsYWd0cmFja2VyIHtcXG4gb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiBtYXJnaW4tdG9wOiAyMHZoO1xcbiBtYXJnaW4tYm90dG9tOiAyMHZoO1xcbiByaWdodDogNXB4O1xcbn1cXG5cXG5kaXYjZGVmaW5pdGlvbnMge1xcbiBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmRpdiNkZWZpbml0aW9ucyBwLCBkaXYjZGVmaW5pdGlvbnMgcCAqIHtcXG4gZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbiNjb2RlciBzZWxlY3Qge1xcbiBmb250LXNpemU6IDAuOHJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/styles.css\n");

/***/ })

});