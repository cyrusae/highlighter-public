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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Basic formatting */\\n\\nbody, html {\\n font-size: 25px;\\n color: black;\\n font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n}\\n\\n#__next {\\n min-height: 100vh;\\n/* width: 100%;\\n overflow: hidden; */\\n background-color: #e0e0e0;\\n}\\n/*\\n* > .container-fluid {\\n overflow: hidden;\\n} */\\n\\n.container-fluid {\\n margin: 0;\\n}\\n\\n/* things in the \\\".sideshow\\\" */\\n.sideshow {\\n background-color: black;\\n color: white;\\n z-index: 2;\\n}\\n\\n/* Button for flagbar:*/\\n#flagS {\\n top: 0;\\n}\\n\\n#flagS, #codeS {\\n left: 0;\\n position: absolute;\\n font-size: 50px;\\n width: 50px;\\n}\\n\\n/*Button for codebook:*/\\n#codeS {\\n bottom: 0;\\n}\\n\\n/*body > *:not(#nav), body:not(#nav), body:not(Table), body :not(Table) {\\n max-width: 80%;\\n margin: 0 auto;\\n}*/\\n\\n/* Bottom bar codebook */ \\n\\n.feet {\\n width: 70vw;\\n z-index: 2;\\n bottom: 0;\\n right: 0;\\n left: 0;\\n position: fixed;\\n background: white;\\n}\\n\\n#codebook {\\n z-index: 3;\\n position: fixed;\\n}\\n\\n#glable, #glable td, #glable td *, #glable th, #glable th * {\\n font-size: 0.8rem;\\n}\\n\\n#glable {\\n background-color: white;\\n position: relative;\\n}\\n\\n/* Sidebar flags */\\n\\n#flagbar {\\n left: 0;\\n top: 10vh;\\n bottom: 0;\\n width: 3vw;\\n position: absolute;\\n}\\n\\n/* Increase of emphasis */\\n\\n\\n.statement, .multiview .statement {\\n background-color: #fcfcfc;\\n}\\n\\n.statement, details {\\n background: #f0f0f0;\\n margin: 0.5rem;\\n}\\n\\n.multiview {\\n font-size: 25px;\\n overflow-y: scroll;\\n margin: 0 auto;\\n}\\n\\n.multiview > .col {\\n overflow-y: scroll;\\n}\\n\\n.statement .metadata, .statebox, summary {\\n background: white;\\n}\\n\\n.statebox, .multiview .statement {\\n padding: 0.5rem;\\n margin-top: 0.5rem;\\n line-height: 1.75;\\n}\\n\\n#envelope {\\n height: 90vh;\\n padding-left: 1rem;\\n padding-top: 1rem;\\n}\\n\\n\\n.coder {\\n top: 1rem;\\n}\\n.navvy {\\n bottom: 0;\\n}\\n\\n/* Highlights */\\n\\n* > mark {\\n position: relative;\\n}\\n\\nmark, mark * {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\nmark {\\n/* font-weight: lighter; */\\n font-style: italic;\\n}\\n\\nmark > b {\\n font-style: normal;\\n}\\n\\n/* REPLACE THIS SECTION WHEN YOU HAVE CODES */\\n.exampleCode, .exampleCode * { background-color: #eeffee !important; }\\n.exampleTwo, .exampleTwo * { background-color: #ffffee !important; }\\n.exampleThree, .exampleThree * { background-color: #eeffff !important; }\\n.test, .test * { background-color: #f6a4c4 !important; }\\n.test2, .test2 * { background-color: #e5a0c9 !important; }\\n.test3, .test3 * { background-color: #e6b7f3 !important; }\\n.test4, .test4 * { background-color: #f9b1d4 !important; }\\n.inputTest, .inputTest * { background-color: #efffc4 !important; }\\n.showingPeter, .showingPeter * { background-color: #f4fbc3 !important; }\\n.ChromeTest, .ChromeTest * { background-color: #cdb1fc !important; }\\n.blue, .blue * { background-color: #c7f9fc !important; }\\n\\n/* \\\"!important\\\" is generally considered bad practice, but was necessary to override every other source of background color. */\\n\\n/* add a tooltip: */ \\nmark .toltip, mark + .toltip {\\n visibility: hidden;\\n font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n font-size: 0.7rem;\\n width: 200px;\\n background: rgba(0, 0, 0, 0.5) !important;\\n/* background-color: black !important; */\\n color: #f0f0f0;\\n text-align: center;\\n border-radius: 6px;\\n padding: 5px 0;\\n position: absolute;\\n z-index: 1;\\n top: 150%;\\n right: 50%;\\n margin-right: -100px;\\n}\\n\\nmark .toltip::after {\\n content: \\\"\\\";\\n position: absolute;\\n bottom: 100%;\\n right: 50%;\\n margin-right: -5px;\\n border-width: 5px;\\n border-style: solid;\\n border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;\\n}\\n\\nmark:hover .toltip, .toltip:hover {\\n visibility: visible;\\n display: inline-block;\\n z-index: 10;\\n}\\n\\n/* Glossary in a details pane */\\n/* Note: the 'details' glossary is .glossary, the footer glossary is #glossary */\\n.glossary, .glossary * {\\n background: white;\\n}\\n\\n.glossary p {\\n margin-left: 0.5rem;\\n margin-right: 0.5rem;\\n}\\n\\n#codepage > div, #codepage form > div, #justcss div code {\\n display: flex;\\n flex-direction: column;\\n}\\n\\n#sassmap > div, #justcss > div {\\n background: black;\\n color: white;\\n padding: 1.5rem;\\n}\\n\\n#justcss div code, #sassmap div code {\\n color: white;\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* [statementID].tsx */\\n .metadata {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* #coder {\\n position: absolute;\\n right: 0;\\n top: 0;\\n width: 25vw;\\n font-size: 23px;\\n}\\n\\n#codepick {\\n position: fixed;\\n background-color: #efefef;\\n top: 0;\\n}\\n\\n#codepick select {\\n margin-top: 1rem;\\n} */\\n\\n.flagtracker {\\n position: fixed;\\n overflow-y: scroll;\\n margin-top: 35vh;\\n width: 25vw;\\n margin-bottom: 20vh;\\n right: 5px;\\n}\\n\\ndiv#definitions {\\n padding: 0.5rem;\\n}\\n\\ndiv#definitions p, div#definitions p * {\\n font-size: 0.8rem;\\n}\\n\\n#coder select {\\n font-size: 0.8rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/styles.css\"],\"names\":[],\"mappings\":\"AAAA,qBAAqB;;AAErB;CACC,eAAe;CACf,YAAY;CACZ,qHAAqH;AACtH;;AAEA;CACC,iBAAiB;AAClB;oBACoB;CACnB,yBAAyB;AAC1B;AACA;;;GAGG;;AAEH;CACC,SAAS;AACV;;AAEA,8BAA8B;AAC9B;CACC,uBAAuB;CACvB,YAAY;CACZ,UAAU;AACX;;AAEA,uBAAuB;AACvB;CACC,MAAM;AACP;;AAEA;CACC,OAAO;CACP,kBAAkB;CAClB,eAAe;CACf,WAAW;AACZ;;AAEA,uBAAuB;AACvB;CACC,SAAS;AACV;;AAEA;;;EAGE;;AAEF,wBAAwB;;AAExB;CACC,WAAW;CACX,UAAU;CACV,SAAS;CACT,QAAQ;CACR,OAAO;CACP,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA,kBAAkB;;AAElB;CACC,OAAO;CACP,SAAS;CACT,SAAS;CACT,UAAU;CACV,kBAAkB;AACnB;;AAEA,yBAAyB;;;AAGzB;CACC,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,cAAc;AACf;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,cAAc;AACf;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,iBAAiB;AAClB;;;AAGA;CACC,SAAS;AACV;AACA;CACC,SAAS;AACV;;AAEA,eAAe;;AAEf;CACC,kBAAkB;AACnB;;AAEA;CACC,sDAAsD;AACvD;;AAEA;AACA,0BAA0B;CACzB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA,6CAA6C;AAC7C,+BAA+B,oCAAoC,EAAE;AACrE,6BAA6B,oCAAoC,EAAE;AACnE,iCAAiC,oCAAoC,EAAE;AACvE,iBAAiB,oCAAoC,EAAE;AACvD,mBAAmB,oCAAoC,EAAE;AACzD,mBAAmB,oCAAoC,EAAE;AACzD,mBAAmB,oCAAoC,EAAE;AACzD,2BAA2B,oCAAoC,EAAE;AACjE,iCAAiC,oCAAoC,EAAE;AACvE,6BAA6B,oCAAoC,EAAE;AACnE,iBAAiB,oCAAoC,EAAE;;AAEvD,6HAA6H;;AAE7H,mBAAmB;AACnB;CACC,kBAAkB;CAClB,sEAAsE;CACtE,iBAAiB;CACjB,YAAY;CACZ,yCAAyC;AAC1C,wCAAwC;CACvC,cAAc;CACd,kBAAkB;CAClB,kBAAkB;CAClB,cAAc;CACd,kBAAkB;CAClB,UAAU;CACV,SAAS;CACT,UAAU;CACV,oBAAoB;AACrB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,YAAY;CACZ,UAAU;CACV,kBAAkB;CAClB,iBAAiB;CACjB,mBAAmB;CACnB,oEAAoE;AACrE;;AAEA;CACC,mBAAmB;CACnB,qBAAqB;CACrB,WAAW;AACZ;;AAEA,+BAA+B;AAC/B,gFAAgF;AAChF;CACC,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,sDAAsD;AACvD;;AAEA,sBAAsB;CACrB;CACA,sDAAsD;AACvD;;AAEA;;;;;;;;;;;;;;;;GAgBG;;AAEH;CACC,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,WAAW;CACX,mBAAmB;CACnB,UAAU;AACX;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB\",\"sourcesContent\":[\"/* Basic formatting */\\n\\nbody, html {\\n font-size: 25px;\\n color: black;\\n font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n}\\n\\n#__next {\\n min-height: 100vh;\\n/* width: 100%;\\n overflow: hidden; */\\n background-color: #e0e0e0;\\n}\\n/*\\n* > .container-fluid {\\n overflow: hidden;\\n} */\\n\\n.container-fluid {\\n margin: 0;\\n}\\n\\n/* things in the \\\".sideshow\\\" */\\n.sideshow {\\n background-color: black;\\n color: white;\\n z-index: 2;\\n}\\n\\n/* Button for flagbar:*/\\n#flagS {\\n top: 0;\\n}\\n\\n#flagS, #codeS {\\n left: 0;\\n position: absolute;\\n font-size: 50px;\\n width: 50px;\\n}\\n\\n/*Button for codebook:*/\\n#codeS {\\n bottom: 0;\\n}\\n\\n/*body > *:not(#nav), body:not(#nav), body:not(Table), body :not(Table) {\\n max-width: 80%;\\n margin: 0 auto;\\n}*/\\n\\n/* Bottom bar codebook */ \\n\\n.feet {\\n width: 70vw;\\n z-index: 2;\\n bottom: 0;\\n right: 0;\\n left: 0;\\n position: fixed;\\n background: white;\\n}\\n\\n#codebook {\\n z-index: 3;\\n position: fixed;\\n}\\n\\n#glable, #glable td, #glable td *, #glable th, #glable th * {\\n font-size: 0.8rem;\\n}\\n\\n#glable {\\n background-color: white;\\n position: relative;\\n}\\n\\n/* Sidebar flags */\\n\\n#flagbar {\\n left: 0;\\n top: 10vh;\\n bottom: 0;\\n width: 3vw;\\n position: absolute;\\n}\\n\\n/* Increase of emphasis */\\n\\n\\n.statement, .multiview .statement {\\n background-color: #fcfcfc;\\n}\\n\\n.statement, details {\\n background: #f0f0f0;\\n margin: 0.5rem;\\n}\\n\\n.multiview {\\n font-size: 25px;\\n overflow-y: scroll;\\n margin: 0 auto;\\n}\\n\\n.multiview > .col {\\n overflow-y: scroll;\\n}\\n\\n.statement .metadata, .statebox, summary {\\n background: white;\\n}\\n\\n.statebox, .multiview .statement {\\n padding: 0.5rem;\\n margin-top: 0.5rem;\\n line-height: 1.75;\\n}\\n\\n#envelope {\\n height: 90vh;\\n padding-left: 1rem;\\n padding-top: 1rem;\\n}\\n\\n\\n.coder {\\n top: 1rem;\\n}\\n.navvy {\\n bottom: 0;\\n}\\n\\n/* Highlights */\\n\\n* > mark {\\n position: relative;\\n}\\n\\nmark, mark * {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\nmark {\\n/* font-weight: lighter; */\\n font-style: italic;\\n}\\n\\nmark > b {\\n font-style: normal;\\n}\\n\\n/* REPLACE THIS SECTION WHEN YOU HAVE CODES */\\n.exampleCode, .exampleCode * { background-color: #eeffee !important; }\\n.exampleTwo, .exampleTwo * { background-color: #ffffee !important; }\\n.exampleThree, .exampleThree * { background-color: #eeffff !important; }\\n.test, .test * { background-color: #f6a4c4 !important; }\\n.test2, .test2 * { background-color: #e5a0c9 !important; }\\n.test3, .test3 * { background-color: #e6b7f3 !important; }\\n.test4, .test4 * { background-color: #f9b1d4 !important; }\\n.inputTest, .inputTest * { background-color: #efffc4 !important; }\\n.showingPeter, .showingPeter * { background-color: #f4fbc3 !important; }\\n.ChromeTest, .ChromeTest * { background-color: #cdb1fc !important; }\\n.blue, .blue * { background-color: #c7f9fc !important; }\\n\\n/* \\\"!important\\\" is generally considered bad practice, but was necessary to override every other source of background color. */\\n\\n/* add a tooltip: */ \\nmark .toltip, mark + .toltip {\\n visibility: hidden;\\n font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n font-size: 0.7rem;\\n width: 200px;\\n background: rgba(0, 0, 0, 0.5) !important;\\n/* background-color: black !important; */\\n color: #f0f0f0;\\n text-align: center;\\n border-radius: 6px;\\n padding: 5px 0;\\n position: absolute;\\n z-index: 1;\\n top: 150%;\\n right: 50%;\\n margin-right: -100px;\\n}\\n\\nmark .toltip::after {\\n content: \\\"\\\";\\n position: absolute;\\n bottom: 100%;\\n right: 50%;\\n margin-right: -5px;\\n border-width: 5px;\\n border-style: solid;\\n border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;\\n}\\n\\nmark:hover .toltip, .toltip:hover {\\n visibility: visible;\\n display: inline-block;\\n z-index: 10;\\n}\\n\\n/* Glossary in a details pane */\\n/* Note: the 'details' glossary is .glossary, the footer glossary is #glossary */\\n.glossary, .glossary * {\\n background: white;\\n}\\n\\n.glossary p {\\n margin-left: 0.5rem;\\n margin-right: 0.5rem;\\n}\\n\\n#codepage > div, #codepage form > div, #justcss div code {\\n display: flex;\\n flex-direction: column;\\n}\\n\\n#sassmap > div, #justcss > div {\\n background: black;\\n color: white;\\n padding: 1.5rem;\\n}\\n\\n#justcss div code, #sassmap div code {\\n color: white;\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* [statementID].tsx */\\n .metadata {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* #coder {\\n position: absolute;\\n right: 0;\\n top: 0;\\n width: 25vw;\\n font-size: 23px;\\n}\\n\\n#codepick {\\n position: fixed;\\n background-color: #efefef;\\n top: 0;\\n}\\n\\n#codepick select {\\n margin-top: 1rem;\\n} */\\n\\n.flagtracker {\\n position: fixed;\\n overflow-y: scroll;\\n margin-top: 35vh;\\n width: 25vw;\\n margin-bottom: 20vh;\\n right: 5px;\\n}\\n\\ndiv#definitions {\\n padding: 0.5rem;\\n}\\n\\ndiv#definitions p, div#definitions p * {\\n font-size: 0.8rem;\\n}\\n\\n#coder select {\\n font-size: 0.8rem;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL3N0eWxlcy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGdGQUFnRixtQkFBbUIsZ0JBQWdCLHlIQUF5SCxHQUFHLGFBQWEscUJBQXFCLGlCQUFpQixxQkFBcUIsK0JBQStCLEdBQUcsNEJBQTRCLG9CQUFvQixJQUFJLHdCQUF3QixhQUFhLEdBQUcsa0RBQWtELDJCQUEyQixnQkFBZ0IsY0FBYyxHQUFHLHNDQUFzQyxVQUFVLEdBQUcsb0JBQW9CLFdBQVcsc0JBQXNCLG1CQUFtQixlQUFlLEdBQUcsc0NBQXNDLGFBQWEsR0FBRyw2RUFBNkUsa0JBQWtCLGtCQUFrQixHQUFHLDJDQUEyQyxlQUFlLGNBQWMsYUFBYSxZQUFZLFdBQVcsbUJBQW1CLHFCQUFxQixHQUFHLGVBQWUsY0FBYyxtQkFBbUIsR0FBRyxpRUFBaUUscUJBQXFCLEdBQUcsYUFBYSwyQkFBMkIsc0JBQXNCLEdBQUcscUNBQXFDLFdBQVcsYUFBYSxhQUFhLGNBQWMsc0JBQXNCLEdBQUcsdUVBQXVFLDZCQUE2QixHQUFHLHlCQUF5Qix1QkFBdUIsa0JBQWtCLEdBQUcsZ0JBQWdCLG1CQUFtQixzQkFBc0Isa0JBQWtCLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLDhDQUE4QyxxQkFBcUIsR0FBRyxzQ0FBc0MsbUJBQW1CLHNCQUFzQixxQkFBcUIsR0FBRyxlQUFlLGdCQUFnQixzQkFBc0IscUJBQXFCLEdBQUcsY0FBYyxhQUFh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dUMsNkxBQTZMLHNCQUFzQiwwRUFBMEUscUJBQXFCLGdCQUFnQiw2Q0FBNkMseUNBQXlDLG9CQUFvQixzQkFBc0Isc0JBQXNCLGtCQUFrQixzQkFBc0IsY0FBYyxhQUFhLGNBQWMsd0JBQXdCLEdBQUcseUJBQXlCLGlCQUFpQixzQkFBc0IsZ0JBQWdCLGNBQWMsc0JBQXNCLHFCQUFxQix1QkFBdUIsd0VBQXdFLEdBQUcsdUNBQXVDLHVCQUF1Qix5QkFBeUIsZUFBZSxHQUFHLGlKQUFpSixxQkFBcUIsR0FBRyxpQkFBaUIsdUJBQXVCLHdCQUF3QixHQUFHLDhEQUE4RCxpQkFBaUIsMEJBQTBCLEdBQUcsb0NBQW9DLHFCQUFxQixnQkFBZ0IsbUJBQW1CLEdBQUcsMENBQTBDLGdCQUFnQiwwREFBMEQsR0FBRyx5Q0FBeUMsMERBQTBELEdBQUcsZUFBZSxzQkFBc0IsWUFBWSxVQUFVLGVBQWUsbUJBQW1CLEdBQUcsZUFBZSxtQkFBbUIsNkJBQTZCLFVBQVUsR0FBRyxzQkFBc0Isb0JBQW9CLElBQUksb0JBQW9CLG1CQUFtQixzQkFBc0Isb0JBQW9CLGVBQWUsdUJBQXVCLGNBQWMsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsNENBQTRDLHFCQUFxQixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxtQkFBbUI7QUFDbDlYO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlcy5jc3M/NjY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQmFzaWMgZm9ybWF0dGluZyAqL1xcblxcbmJvZHksIGh0bWwge1xcbiBmb250LXNpemU6IDI1cHg7XFxuIGNvbG9yOiBibGFjaztcXG4gZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jX19uZXh0IHtcXG4gbWluLWhlaWdodDogMTAwdmg7XFxuLyogd2lkdGg6IDEwMCU7XFxuIG92ZXJmbG93OiBoaWRkZW47ICovXFxuIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi8qXFxuKiA+IC5jb250YWluZXItZmx1aWQge1xcbiBvdmVyZmxvdzogaGlkZGVuO1xcbn0gKi9cXG5cXG4uY29udGFpbmVyLWZsdWlkIHtcXG4gbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiB0aGluZ3MgaW4gdGhlIFxcXCIuc2lkZXNob3dcXFwiICovXFxuLnNpZGVzaG93IHtcXG4gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuIGNvbG9yOiB3aGl0ZTtcXG4gei1pbmRleDogMjtcXG59XFxuXFxuLyogQnV0dG9uIGZvciBmbGFnYmFyOiovXFxuI2ZsYWdTIHtcXG4gdG9wOiAwO1xcbn1cXG5cXG4jZmxhZ1MsICNjb2RlUyB7XFxuIGxlZnQ6IDA7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gZm9udC1zaXplOiA1MHB4O1xcbiB3aWR0aDogNTBweDtcXG59XFxuXFxuLypCdXR0b24gZm9yIGNvZGVib29rOiovXFxuI2NvZGVTIHtcXG4gYm90dG9tOiAwO1xcbn1cXG5cXG4vKmJvZHkgPiAqOm5vdCgjbmF2KSwgYm9keTpub3QoI25hdiksIGJvZHk6bm90KFRhYmxlKSwgYm9keSA6bm90KFRhYmxlKSB7XFxuIG1heC13aWR0aDogODAlO1xcbiBtYXJnaW46IDAgYXV0bztcXG59Ki9cXG5cXG4vKiBCb3R0b20gYmFyIGNvZGVib29rICovIFxcblxcbi5mZWV0IHtcXG4gd2lkdGg6IDcwdnc7XFxuIHotaW5kZXg6IDI7XFxuIGJvdHRvbTogMDtcXG4gcmlnaHQ6IDA7XFxuIGxlZnQ6IDA7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbiNjb2RlYm9vayB7XFxuIHotaW5kZXg6IDM7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuI2dsYWJsZSwgI2dsYWJsZSB0ZCwgI2dsYWJsZSB0ZCAqLCAjZ2xhYmxlIHRoLCAjZ2xhYmxlIHRoICoge1xcbiBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2dsYWJsZSB7XFxuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIFNpZGViYXIgZmxhZ3MgKi9cXG5cXG4jZmxhZ2JhciB7XFxuIGxlZnQ6IDA7XFxuIHRvcDogMTB2aDtcXG4gYm90dG9tOiAwO1xcbiB3aWR0aDogM3Z3O1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qIEluY3JlYXNlIG9mIGVtcGhhc2lzICovXFxuXFxuXFxuLnN0YXRlbWVudCwgLm11bHRpdmlldyAuc3RhdGVtZW50IHtcXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG59XFxuXFxuLnN0YXRlbWVudCwgZGV0YWlscyB7XFxuIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4ubXVsdGl2aWV3IHtcXG4gZm9udC1zaXplOiAyNXB4O1xcbiBvdmVyZmxvdy15OiBzY3JvbGw7XFxuIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubXVsdGl2aWV3ID4gLmNvbCB7XFxuIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnN0YXRlbWVudCAubWV0YWRhdGEsIC5zdGF0ZWJveCwgc3VtbWFyeSB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdGVib3gsIC5tdWx0aXZpZXcgLnN0YXRlbWVudCB7XFxuIHBhZGRpbmc6IDAuNXJlbTtcXG4gbWFyZ2luLXRvcDogMC41cmVtO1xcbiBsaW5lLWhlaWdodDogMS43NTtcXG59XFxuXFxuI2VudmVsb3BlIHtcXG4gaGVpZ2h0OiA5MHZoO1xcbiBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG5cXG4uY29kZXIge1xcbiB0b3A6IDFyZW07XFxufVxcbi5uYXZ2eSB7XFxuIGJvdHRvbTogMDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0cyAqL1xcblxcbiogPiBtYXJrIHtcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5tYXJrLCBtYXJrICoge1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbm1hcmsge1xcbi8qIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyAqL1xcbiBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbm1hcmsgPiBiIHtcXG4gZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBSRVBMQUNFIFRISVMgU0VDVElPTiBXSEVOIFlPVSBIQVZFIENPREVTICovXFxuLmV4YW1wbGVDb2RlLCAuZXhhbXBsZUNvZGUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlZWZmZWUgIWltcG9ydGFudDsgfVxcbi5leGFtcGxlVHdvLCAuZXhhbXBsZVR3byAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZlZSAhaW1wb3J0YW50OyB9XFxuLmV4YW1wbGVUaHJlZSwgLmV4YW1wbGVUaHJlZSAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2VlZmZmZiAhaW1wb3J0YW50OyB9XFxuLnRlc3QsIC50ZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZhNGM0ICFpbXBvcnRhbnQ7IH1cXG4udGVzdDIsIC50ZXN0MiAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2U1YTBjOSAhaW1wb3J0YW50OyB9XFxuLnRlc3QzLCAudGVzdDMgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlNmI3ZjMgIWltcG9ydGFudDsgfVxcbi50ZXN0NCwgLnRlc3Q0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliMWQ0ICFpbXBvcnRhbnQ7IH1cXG4uaW5wdXRUZXN0LCAuaW5wdXRUZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZmM0ICFpbXBvcnRhbnQ7IH1cXG4uc2hvd2luZ1BldGVyLCAuc2hvd2luZ1BldGVyICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmYmMzICFpbXBvcnRhbnQ7IH1cXG4uQ2hyb21lVGVzdCwgLkNocm9tZVRlc3QgKiB7IGJhY2tncm91bmQtY29sb3I6ICNjZGIxZmMgIWltcG9ydGFudDsgfVxcbi5ibHVlLCAuYmx1ZSAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2M3ZjlmYyAhaW1wb3J0YW50OyB9XFxuXFxuLyogXFxcIiFpbXBvcnRhbnRcXFwiIGlzIGdlbmVyYWxseSBjb25zaWRlcmVkIGJhZCBwcmFjdGljZSwgYnV0IHdhcyBuZWNlc3NhcnkgdG8gb3ZlcnJpZGUgZXZlcnkgb3RoZXIgc291cmNlIG9mIGJhY2tncm91bmQgY29sb3IuICovXFxuXFxuLyogYWRkIGEgdG9vbHRpcDogKi8gXFxubWFyayAudG9sdGlwLCBtYXJrICsgLnRvbHRpcCB7XFxuIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG4gZm9udC1zaXplOiAwLjdyZW07XFxuIHdpZHRoOiAyMDBweDtcXG4gYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XFxuLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgKi9cXG4gY29sb3I6ICNmMGYwZjA7XFxuIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gYm9yZGVyLXJhZGl1czogNnB4O1xcbiBwYWRkaW5nOiA1cHggMDtcXG4gcG9zaXRpb246IGFic29sdXRlO1xcbiB6LWluZGV4OiAxO1xcbiB0b3A6IDE1MCU7XFxuIHJpZ2h0OiA1MCU7XFxuIG1hcmdpbi1yaWdodDogLTEwMHB4O1xcbn1cXG5cXG5tYXJrIC50b2x0aXA6OmFmdGVyIHtcXG4gY29udGVudDogXFxcIlxcXCI7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gYm90dG9tOiAxMDAlO1xcbiByaWdodDogNTAlO1xcbiBtYXJnaW4tcmlnaHQ6IC01cHg7XFxuIGJvcmRlci13aWR0aDogNXB4O1xcbiBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwgMCwgMCwgMC41KSB0cmFuc3BhcmVudDtcXG59XFxuXFxubWFyazpob3ZlciAudG9sdGlwLCAudG9sdGlwOmhvdmVyIHtcXG4gdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyogR2xvc3NhcnkgaW4gYSBkZXRhaWxzIHBhbmUgKi9cXG4vKiBOb3RlOiB0aGUgJ2RldGFpbHMnIGdsb3NzYXJ5IGlzIC5nbG9zc2FyeSwgdGhlIGZvb3RlciBnbG9zc2FyeSBpcyAjZ2xvc3NhcnkgKi9cXG4uZ2xvc3NhcnksIC5nbG9zc2FyeSAqIHtcXG4gYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5nbG9zc2FyeSBwIHtcXG4gbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiNjb2RlcGFnZSA+IGRpdiwgI2NvZGVwYWdlIGZvcm0gPiBkaXYsICNqdXN0Y3NzIGRpdiBjb2RlIHtcXG4gZGlzcGxheTogZmxleDtcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Nhc3NtYXAgPiBkaXYsICNqdXN0Y3NzID4gZGl2IHtcXG4gYmFja2dyb3VuZDogYmxhY2s7XFxuIGNvbG9yOiB3aGl0ZTtcXG4gcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4janVzdGNzcyBkaXYgY29kZSwgI3Nhc3NtYXAgZGl2IGNvZGUge1xcbiBjb2xvcjogd2hpdGU7XFxuIGZvbnQtZmFtaWx5OiAnVmljdG9yIE1vbm8nLCAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyogW3N0YXRlbWVudElEXS50c3ggKi9cXG4gLm1ldGFkYXRhIHtcXG4gZm9udC1mYW1pbHk6ICdWaWN0b3IgTW9ubycsICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4vKiAjY29kZXIge1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIHJpZ2h0OiAwO1xcbiB0b3A6IDA7XFxuIHdpZHRoOiAyNXZ3O1xcbiBmb250LXNpemU6IDIzcHg7XFxufVxcblxcbiNjb2RlcGljayB7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gdG9wOiAwO1xcbn1cXG5cXG4jY29kZXBpY2sgc2VsZWN0IHtcXG4gbWFyZ2luLXRvcDogMXJlbTtcXG59ICovXFxuXFxuLmZsYWd0cmFja2VyIHtcXG4gcG9zaXRpb246IGZpeGVkO1xcbiBvdmVyZmxvdy15OiBzY3JvbGw7XFxuIG1hcmdpbi10b3A6IDM1dmg7XFxuIHdpZHRoOiAyNXZ3O1xcbiBtYXJnaW4tYm90dG9tOiAyMHZoO1xcbiByaWdodDogNXB4O1xcbn1cXG5cXG5kaXYjZGVmaW5pdGlvbnMge1xcbiBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmRpdiNkZWZpbml0aW9ucyBwLCBkaXYjZGVmaW5pdGlvbnMgcCAqIHtcXG4gZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbiNjb2RlciBzZWxlY3Qge1xcbiBmb250LXNpemU6IDAuOHJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFB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QTtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixzREFBc0Q7QUFDdkQ7O0FBRUEsc0JBQXNCO0NBQ3JCO0NBQ0Esc0RBQXNEO0FBQ3ZEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHOztBQUVIO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJhc2ljIGZvcm1hdHRpbmcgKi9cXG5cXG5ib2R5LCBodG1sIHtcXG4gZm9udC1zaXplOiAyNXB4O1xcbiBjb2xvcjogYmxhY2s7XFxuIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI19fbmV4dCB7XFxuIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbi8qIHdpZHRoOiAxMDAlO1xcbiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG4vKlxcbiogPiAuY29udGFpbmVyLWZsdWlkIHtcXG4gb3ZlcmZsb3c6IGhpZGRlbjtcXG59ICovXFxuXFxuLmNvbnRhaW5lci1mbHVpZCB7XFxuIG1hcmdpbjogMDtcXG59XFxuXFxuLyogdGhpbmdzIGluIHRoZSBcXFwiLnNpZGVzaG93XFxcIiAqL1xcbi5zaWRlc2hvdyB7XFxuIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiBjb2xvcjogd2hpdGU7XFxuIHotaW5kZXg6IDI7XFxufVxcblxcbi8qIEJ1dHRvbiBmb3IgZmxhZ2JhcjoqL1xcbiNmbGFnUyB7XFxuIHRvcDogMDtcXG59XFxuXFxuI2ZsYWdTLCAjY29kZVMge1xcbiBsZWZ0OiAwO1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIGZvbnQtc2l6ZTogNTBweDtcXG4gd2lkdGg6IDUwcHg7XFxufVxcblxcbi8qQnV0dG9uIGZvciBjb2RlYm9vazoqL1xcbiNjb2RlUyB7XFxuIGJvdHRvbTogMDtcXG59XFxuXFxuLypib2R5ID4gKjpub3QoI25hdiksIGJvZHk6bm90KCNuYXYpLCBib2R5Om5vdChUYWJsZSksIGJvZHkgOm5vdChUYWJsZSkge1xcbiBtYXgtd2lkdGg6IDgwJTtcXG4gbWFyZ2luOiAwIGF1dG87XFxufSovXFxuXFxuLyogQm90dG9tIGJhciBjb2RlYm9vayAqLyBcXG5cXG4uZmVldCB7XFxuIHdpZHRoOiA3MHZ3O1xcbiB6LWluZGV4OiAyO1xcbiBib3R0b206IDA7XFxuIHJpZ2h0OiAwO1xcbiBsZWZ0OiAwO1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4jY29kZWJvb2sge1xcbiB6LWluZGV4OiAzO1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbiNnbGFibGUsICNnbGFibGUgdGQsICNnbGFibGUgdGQgKiwgI2dsYWJsZSB0aCwgI2dsYWJsZSB0aCAqIHtcXG4gZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbiNnbGFibGUge1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBTaWRlYmFyIGZsYWdzICovXFxuXFxuI2ZsYWdiYXIge1xcbiBsZWZ0OiAwO1xcbiB0b3A6IDEwdmg7XFxuIGJvdHRvbTogMDtcXG4gd2lkdGg6IDN2dztcXG4gcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4vKiBJbmNyZWFzZSBvZiBlbXBoYXNpcyAqL1xcblxcblxcbi5zdGF0ZW1lbnQsIC5tdWx0aXZpZXcgLnN0YXRlbWVudCB7XFxuIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxufVxcblxcbi5zdGF0ZW1lbnQsIGRldGFpbHMge1xcbiBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLm11bHRpdmlldyB7XFxuIGZvbnQtc2l6ZTogMjVweDtcXG4gb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm11bHRpdmlldyA+IC5jb2wge1xcbiBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5zdGF0ZW1lbnQgLm1ldGFkYXRhLCAuc3RhdGVib3gsIHN1bW1hcnkge1xcbiBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLnN0YXRlYm94LCAubXVsdGl2aWV3IC5zdGF0ZW1lbnQge1xcbiBwYWRkaW5nOiAwLjVyZW07XFxuIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbiNlbnZlbG9wZSB7XFxuIGhlaWdodDogOTB2aDtcXG4gcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuXFxuLmNvZGVyIHtcXG4gdG9wOiAxcmVtO1xcbn1cXG4ubmF2dnkge1xcbiBib3R0b206IDA7XFxufVxcblxcbi8qIEhpZ2hsaWdodHMgKi9cXG5cXG4qID4gbWFyayB7XFxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubWFyaywgbWFyayAqIHtcXG4gZm9udC1mYW1pbHk6ICdWaWN0b3IgTW9ubycsICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5tYXJrIHtcXG4vKiBmb250LXdlaWdodDogbGlnaHRlcjsgKi9cXG4gZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5tYXJrID4gYiB7XFxuIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogUkVQTEFDRSBUSElTIFNFQ1RJT04gV0hFTiBZT1UgSEFWRSBDT0RFUyAqL1xcbi5leGFtcGxlQ29kZSwgLmV4YW1wbGVDb2RlICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmZmVlICFpbXBvcnRhbnQ7IH1cXG4uZXhhbXBsZVR3bywgLmV4YW1wbGVUd28gKiB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZWUgIWltcG9ydGFudDsgfVxcbi5leGFtcGxlVGhyZWUsIC5leGFtcGxlVGhyZWUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlZWZmZmYgIWltcG9ydGFudDsgfVxcbi50ZXN0LCAudGVzdCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y2YTRjNCAhaW1wb3J0YW50OyB9XFxuLnRlc3QyLCAudGVzdDIgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlNWEwYzkgIWltcG9ydGFudDsgfVxcbi50ZXN0MywgLnRlc3QzICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZiN2YzICFpbXBvcnRhbnQ7IH1cXG4udGVzdDQsIC50ZXN0NCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjFkNCAhaW1wb3J0YW50OyB9XFxuLmlucHV0VGVzdCwgLmlucHV0VGVzdCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2VmZmZjNCAhaW1wb3J0YW50OyB9XFxuLnNob3dpbmdQZXRlciwgLnNob3dpbmdQZXRlciAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZmJjMyAhaW1wb3J0YW50OyB9XFxuLkNocm9tZVRlc3QsIC5DaHJvbWVUZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RiMWZjICFpbXBvcnRhbnQ7IH1cXG4uYmx1ZSwgLmJsdWUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNjN2Y5ZmMgIWltcG9ydGFudDsgfVxcblxcbi8qIFxcXCIhaW1wb3J0YW50XFxcIiBpcyBnZW5lcmFsbHkgY29uc2lkZXJlZCBiYWQgcHJhY3RpY2UsIGJ1dCB3YXMgbmVjZXNzYXJ5IHRvIG92ZXJyaWRlIGV2ZXJ5IG90aGVyIHNvdXJjZSBvZiBiYWNrZ3JvdW5kIGNvbG9yLiAqL1xcblxcbi8qIGFkZCBhIHRvb2x0aXA6ICovIFxcbm1hcmsgLnRvbHRpcCwgbWFyayArIC50b2x0aXAge1xcbiB2aXNpYmlsaXR5OiBoaWRkZW47XFxuIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuIGZvbnQtc2l6ZTogMC43cmVtO1xcbiB3aWR0aDogMjAwcHg7XFxuIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xcbi8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7ICovXFxuIGNvbG9yOiAjZjBmMGYwO1xcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gcGFkZGluZzogNXB4IDA7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gei1pbmRleDogMTtcXG4gdG9wOiAxNTAlO1xcbiByaWdodDogNTAlO1xcbiBtYXJnaW4tcmlnaHQ6IC0xMDBweDtcXG59XFxuXFxubWFyayAudG9sdGlwOjphZnRlciB7XFxuIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIGJvdHRvbTogMTAwJTtcXG4gcmlnaHQ6IDUwJTtcXG4gbWFyZ2luLXJpZ2h0OiAtNXB4O1xcbiBib3JkZXItd2lkdGg6IDVweDtcXG4gYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDAsIDAsIDAuNSkgdHJhbnNwYXJlbnQ7XFxufVxcblxcbm1hcms6aG92ZXIgLnRvbHRpcCwgLnRvbHRpcDpob3ZlciB7XFxuIHZpc2liaWxpdHk6IHZpc2libGU7XFxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gei1pbmRleDogMTA7XFxufVxcblxcbi8qIEdsb3NzYXJ5IGluIGEgZGV0YWlscyBwYW5lICovXFxuLyogTm90ZTogdGhlICdkZXRhaWxzJyBnbG9zc2FyeSBpcyAuZ2xvc3NhcnksIHRoZSBmb290ZXIgZ2xvc3NhcnkgaXMgI2dsb3NzYXJ5ICovXFxuLmdsb3NzYXJ5LCAuZ2xvc3NhcnkgKiB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uZ2xvc3NhcnkgcCB7XFxuIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jY29kZXBhZ2UgPiBkaXYsICNjb2RlcGFnZSBmb3JtID4gZGl2LCAjanVzdGNzcyBkaXYgY29kZSB7XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzYXNzbWFwID4gZGl2LCAjanVzdGNzcyA+IGRpdiB7XFxuIGJhY2tncm91bmQ6IGJsYWNrO1xcbiBjb2xvcjogd2hpdGU7XFxuIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuI2p1c3Rjc3MgZGl2IGNvZGUsICNzYXNzbWFwIGRpdiBjb2RlIHtcXG4gY29sb3I6IHdoaXRlO1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbi8qIFtzdGF0ZW1lbnRJRF0udHN4ICovXFxuIC5tZXRhZGF0YSB7XFxuIGZvbnQtZmFtaWx5OiAnVmljdG9yIE1vbm8nLCAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyogI2NvZGVyIHtcXG4gcG9zaXRpb246IGFic29sdXRlO1xcbiByaWdodDogMDtcXG4gdG9wOiAwO1xcbiB3aWR0aDogMjV2dztcXG4gZm9udC1zaXplOiAyM3B4O1xcbn1cXG5cXG4jY29kZXBpY2sge1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxuIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuIHRvcDogMDtcXG59XFxuXFxuI2NvZGVwaWNrIHNlbGVjdCB7XFxuIG1hcmdpbi10b3A6IDFyZW07XFxufSAqL1xcblxcbi5mbGFndHJhY2tlciB7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiBtYXJnaW4tdG9wOiAzNXZoO1xcbiB3aWR0aDogMjV2dztcXG4gbWFyZ2luLWJvdHRvbTogMjB2aDtcXG4gcmlnaHQ6IDVweDtcXG59XFxuXFxuZGl2I2RlZmluaXRpb25zIHtcXG4gcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5kaXYjZGVmaW5pdGlvbnMgcCwgZGl2I2RlZmluaXRpb25zIHAgKiB7XFxuIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jY29kZXIgc2VsZWN0IHtcXG4gZm9udC1zaXplOiAwLjhyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/styles.css\n");

/***/ })

});