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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Basic formatting */\\n\\n* {\\n font-size: 25px;\\n color: black;\\n font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n}\\n\\n.container-fluid {\\n overflow-y: hidden;\\n}\\n\\n.container-fluid .card-body {\\n\\n}\\n\\n\\n/*body > *:not(#nav), body:not(#nav), body:not(Table), body :not(Table) {\\n max-width: 80%;\\n margin: 0 auto;\\n}*/\\n\\n/* Bottom bar codebook */ \\n\\n.feet {\\n width: 70vw;\\n z-index: 2;\\n bottom: 0;\\n right: 0;\\n left: 0;\\n position: fixed;\\n background: white;\\n}\\n\\n#codebook {\\n z-index: 3;\\n position: fixed;\\n}\\n\\n#glable, #glable td, #glable td *, #glable th, #glable th * {\\n font-size: 0.8rem;\\n}\\n\\n#glable {\\n background-color: white;\\n position: relative;\\n}\\n\\n/* Sidebar flags */\\n\\n#flagbar {\\n left: 0;\\n top: 10vh;\\n bottom: 0;\\n width: 3vw;\\n position: absolute;\\n}\\n\\n/* Increase of emphasis */\\n\\ndiv {\\n/* background: #efefef; */\\n padding: 0.5rem;\\n}\\n\\n.statement, main .statement {\\n background-color: #fcfcfc;\\n}\\n\\n.statement, details {\\n background: #f0f0f0;\\n margin: 0.5rem;\\n}\\n\\nmain > .statement {\\n width: 80%;\\n margin: 0 auto;\\n}\\n\\n.statement .metadata, .statebox, summary {\\n background: white;\\n}\\n\\n.statebox, main .statement {\\n padding: 0.5rem;\\n margin-top: 0.5rem;\\n line-height: 1.75;\\n}\\n\\n/* Highlights */\\n\\n* > mark {\\n position: relative;\\n}\\n\\nmark, mark * {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\nmark {\\n/* font-weight: lighter; */\\n font-style: italic;\\n}\\n\\nmark > b {\\n font-style: normal;\\n}\\n\\n/* REPLACE THIS SECTION WHEN YOU HAVE CODES */\\n.exampleCode, .exampleCode * { background-color: #eeffee !important; }\\n.exampleTwo, .exampleTwo * { background-color: #ffffee !important; }\\n.exampleThree, .exampleThree * { background-color: #eeffff !important; }\\n.test, .test * { background-color: #f6a4c4 !important; }\\n.test2, .test2 * { background-color: #e5a0c9 !important; }\\n.test3, .test3 * { background-color: #e6b7f3 !important; }\\n.test4, .test4 * { background-color: #f9b1d4 !important; }\\n.inputTest, .inputTest * { background-color: #efffc4 !important; }\\n.showingPeter, .showingPeter * { background-color: #f4fbc3 !important; }\\n.ChromeTest, .ChromeTest * { background-color: #cdb1fc !important; }\\n.blue, .blue * { background-color: #c7f9fc !important; }\\n\\n/* \\\"!important\\\" is generally considered bad practice, but was necessary to override every other source of background color. */\\n\\n/* add a tooltip: */ \\nmark .toltip, mark + .toltip {\\n visibility: hidden;\\n font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n font-size: 0.7rem;\\n width: 200px;\\n background: rgba(0, 0, 0, 0.5) !important;\\n/* background-color: black !important; */\\n color: #f0f0f0;\\n text-align: center;\\n border-radius: 6px;\\n padding: 5px 0;\\n position: absolute;\\n z-index: 1;\\n top: 150%;\\n right: 50%;\\n margin-right: -100px;\\n}\\n\\nmark .toltip::after {\\n content: \\\"\\\";\\n position: absolute;\\n bottom: 100%;\\n right: 50%;\\n margin-right: -5px;\\n border-width: 5px;\\n border-style: solid;\\n border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;\\n}\\n\\nmark:hover .toltip, .toltip:hover {\\n visibility: visible;\\n display: inline-block;\\n z-index: 10;\\n}\\n\\n/* Glossary in a details pane */\\n/* Note: the 'details' glossary is .glossary, the footer glossary is #glossary */\\n.glossary, .glossary * {\\n background: white;\\n}\\n\\n.glossary p {\\n margin-left: 0.5rem;\\n margin-right: 0.5rem;\\n}\\n\\n#codepage > div, #codepage form > div, #justcss div code {\\n display: flex;\\n flex-direction: column;\\n}\\n\\n#sassmap > div, #justcss > div {\\n background: black;\\n color: white;\\n padding: 1.5rem;\\n}\\n\\n#justcss div code, #sassmap div code {\\n color: white;\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* [statementID].tsx */\\n#reader .metadata {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n#reader {\\n overflow-y: hidden;\\n}\\n\\n#reader #statebox {\\n padding: 1.3rem;\\n}\\n\\n#reader #nav {\\n position: fixed;\\n bottom: 5vh;\\n right: 0;\\n}\\n\\n#reader .statement {\\n overflow-y: scroll;\\n height: 80vh;\\n width: 70vw;\\n left: 5vw;\\n}\\n\\n/* #coder {\\n position: absolute;\\n right: 0;\\n top: 0;\\n width: 25vw;\\n font-size: 23px;\\n}\\n\\n#codepick {\\n position: fixed;\\n background-color: #efefef;\\n top: 0;\\n}\\n\\n#codepick select {\\n margin-top: 1rem;\\n} */\\n\\n.flagtracker {\\n position: fixed;\\n overflow-y: scroll;\\n margin-top: 35vh;\\n width: 25vw;\\n margin-bottom: 20vh;\\n right: 5px;\\n}\\n\\ndiv#definitions {\\n padding: 0.5rem;\\n}\\n\\ndiv#definitions p, div#definitions p * {\\n font-size: 0.8rem;\\n}\\n\\n#coder select {\\n font-size: 0.8rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/styles.css\"],\"names\":[],\"mappings\":\"AAAA,qBAAqB;;AAErB;CACC,eAAe;CACf,YAAY;CACZ,qHAAqH;AACtH;;AAEA;CACC,kBAAkB;AACnB;;AAEA;;AAEA;;;AAGA;;;EAGE;;AAEF,wBAAwB;;AAExB;CACC,WAAW;CACX,UAAU;CACV,SAAS;CACT,QAAQ;CACR,OAAO;CACP,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA,kBAAkB;;AAElB;CACC,OAAO;CACP,SAAS;CACT,SAAS;CACT,UAAU;CACV,kBAAkB;AACnB;;AAEA,yBAAyB;;AAEzB;AACA,yBAAyB;CACxB,eAAe;AAChB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,cAAc;AACf;;AAEA;CACC,UAAU;CACV,cAAc;AACf;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA,eAAe;;AAEf;CACC,kBAAkB;AACnB;;AAEA;CACC,sDAAsD;AACvD;;AAEA;AACA,0BAA0B;CACzB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA,6CAA6C;AAC7C,+BAA+B,oCAAoC,EAAE;AACrE,6BAA6B,oCAAoC,EAAE;AACnE,iCAAiC,oCAAoC,EAAE;AACvE,iBAAiB,oCAAoC,EAAE;AACvD,mBAAmB,oCAAoC,EAAE;AACzD,mBAAmB,oCAAoC,EAAE;AACzD,mBAAmB,oCAAoC,EAAE;AACzD,2BAA2B,oCAAoC,EAAE;AACjE,iCAAiC,oCAAoC,EAAE;AACvE,6BAA6B,oCAAoC,EAAE;AACnE,iBAAiB,oCAAoC,EAAE;;AAEvD,6HAA6H;;AAE7H,mBAAmB;AACnB;CACC,kBAAkB;CAClB,sEAAsE;CACtE,iBAAiB;CACjB,YAAY;CACZ,yCAAyC;AAC1C,wCAAwC;CACvC,cAAc;CACd,kBAAkB;CAClB,kBAAkB;CAClB,cAAc;CACd,kBAAkB;CAClB,UAAU;CACV,SAAS;CACT,UAAU;CACV,oBAAoB;AACrB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,YAAY;CACZ,UAAU;CACV,kBAAkB;CAClB,iBAAiB;CACjB,mBAAmB;CACnB,oEAAoE;AACrE;;AAEA;CACC,mBAAmB;CACnB,qBAAqB;CACrB,WAAW;AACZ;;AAEA,+BAA+B;AAC/B,gFAAgF;AAChF;CACC,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,sDAAsD;AACvD;;AAEA,sBAAsB;AACtB;CACC,sDAAsD;AACvD;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,WAAW;CACX,QAAQ;AACT;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,SAAS;AACV;;AAEA;;;;;;;;;;;;;;;;GAgBG;;AAEH;CACC,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,WAAW;CACX,mBAAmB;CACnB,UAAU;AACX;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB\",\"sourcesContent\":[\"/* Basic formatting */\\n\\n* {\\n font-size: 25px;\\n color: black;\\n font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n}\\n\\n.container-fluid {\\n overflow-y: hidden;\\n}\\n\\n.container-fluid .card-body {\\n\\n}\\n\\n\\n/*body > *:not(#nav), body:not(#nav), body:not(Table), body :not(Table) {\\n max-width: 80%;\\n margin: 0 auto;\\n}*/\\n\\n/* Bottom bar codebook */ \\n\\n.feet {\\n width: 70vw;\\n z-index: 2;\\n bottom: 0;\\n right: 0;\\n left: 0;\\n position: fixed;\\n background: white;\\n}\\n\\n#codebook {\\n z-index: 3;\\n position: fixed;\\n}\\n\\n#glable, #glable td, #glable td *, #glable th, #glable th * {\\n font-size: 0.8rem;\\n}\\n\\n#glable {\\n background-color: white;\\n position: relative;\\n}\\n\\n/* Sidebar flags */\\n\\n#flagbar {\\n left: 0;\\n top: 10vh;\\n bottom: 0;\\n width: 3vw;\\n position: absolute;\\n}\\n\\n/* Increase of emphasis */\\n\\ndiv {\\n/* background: #efefef; */\\n padding: 0.5rem;\\n}\\n\\n.statement, main .statement {\\n background-color: #fcfcfc;\\n}\\n\\n.statement, details {\\n background: #f0f0f0;\\n margin: 0.5rem;\\n}\\n\\nmain > .statement {\\n width: 80%;\\n margin: 0 auto;\\n}\\n\\n.statement .metadata, .statebox, summary {\\n background: white;\\n}\\n\\n.statebox, main .statement {\\n padding: 0.5rem;\\n margin-top: 0.5rem;\\n line-height: 1.75;\\n}\\n\\n/* Highlights */\\n\\n* > mark {\\n position: relative;\\n}\\n\\nmark, mark * {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\nmark {\\n/* font-weight: lighter; */\\n font-style: italic;\\n}\\n\\nmark > b {\\n font-style: normal;\\n}\\n\\n/* REPLACE THIS SECTION WHEN YOU HAVE CODES */\\n.exampleCode, .exampleCode * { background-color: #eeffee !important; }\\n.exampleTwo, .exampleTwo * { background-color: #ffffee !important; }\\n.exampleThree, .exampleThree * { background-color: #eeffff !important; }\\n.test, .test * { background-color: #f6a4c4 !important; }\\n.test2, .test2 * { background-color: #e5a0c9 !important; }\\n.test3, .test3 * { background-color: #e6b7f3 !important; }\\n.test4, .test4 * { background-color: #f9b1d4 !important; }\\n.inputTest, .inputTest * { background-color: #efffc4 !important; }\\n.showingPeter, .showingPeter * { background-color: #f4fbc3 !important; }\\n.ChromeTest, .ChromeTest * { background-color: #cdb1fc !important; }\\n.blue, .blue * { background-color: #c7f9fc !important; }\\n\\n/* \\\"!important\\\" is generally considered bad practice, but was necessary to override every other source of background color. */\\n\\n/* add a tooltip: */ \\nmark .toltip, mark + .toltip {\\n visibility: hidden;\\n font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n font-size: 0.7rem;\\n width: 200px;\\n background: rgba(0, 0, 0, 0.5) !important;\\n/* background-color: black !important; */\\n color: #f0f0f0;\\n text-align: center;\\n border-radius: 6px;\\n padding: 5px 0;\\n position: absolute;\\n z-index: 1;\\n top: 150%;\\n right: 50%;\\n margin-right: -100px;\\n}\\n\\nmark .toltip::after {\\n content: \\\"\\\";\\n position: absolute;\\n bottom: 100%;\\n right: 50%;\\n margin-right: -5px;\\n border-width: 5px;\\n border-style: solid;\\n border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;\\n}\\n\\nmark:hover .toltip, .toltip:hover {\\n visibility: visible;\\n display: inline-block;\\n z-index: 10;\\n}\\n\\n/* Glossary in a details pane */\\n/* Note: the 'details' glossary is .glossary, the footer glossary is #glossary */\\n.glossary, .glossary * {\\n background: white;\\n}\\n\\n.glossary p {\\n margin-left: 0.5rem;\\n margin-right: 0.5rem;\\n}\\n\\n#codepage > div, #codepage form > div, #justcss div code {\\n display: flex;\\n flex-direction: column;\\n}\\n\\n#sassmap > div, #justcss > div {\\n background: black;\\n color: white;\\n padding: 1.5rem;\\n}\\n\\n#justcss div code, #sassmap div code {\\n color: white;\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* [statementID].tsx */\\n#reader .metadata {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n#reader {\\n overflow-y: hidden;\\n}\\n\\n#reader #statebox {\\n padding: 1.3rem;\\n}\\n\\n#reader #nav {\\n position: fixed;\\n bottom: 5vh;\\n right: 0;\\n}\\n\\n#reader .statement {\\n overflow-y: scroll;\\n height: 80vh;\\n width: 70vw;\\n left: 5vw;\\n}\\n\\n/* #coder {\\n position: absolute;\\n right: 0;\\n top: 0;\\n width: 25vw;\\n font-size: 23px;\\n}\\n\\n#codepick {\\n position: fixed;\\n background-color: #efefef;\\n top: 0;\\n}\\n\\n#codepick select {\\n margin-top: 1rem;\\n} */\\n\\n.flagtracker {\\n position: fixed;\\n overflow-y: scroll;\\n margin-top: 35vh;\\n width: 25vw;\\n margin-bottom: 20vh;\\n right: 5px;\\n}\\n\\ndiv#definitions {\\n padding: 0.5rem;\\n}\\n\\ndiv#definitions p, div#definitions p * {\\n font-size: 0.8rem;\\n}\\n\\n#coder select {\\n font-size: 0.8rem;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL3N0eWxlcy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVFQUF1RSxtQkFBbUIsZ0JBQWdCLHlIQUF5SCxHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyxpQ0FBaUMsS0FBSywrRUFBK0Usa0JBQWtCLGtCQUFrQixHQUFHLDJDQUEyQyxlQUFlLGNBQWMsYUFBYSxZQUFZLFdBQVcsbUJBQW1CLHFCQUFxQixHQUFHLGVBQWUsY0FBYyxtQkFBbUIsR0FBRyxpRUFBaUUscUJBQXFCLEdBQUcsYUFBYSwyQkFBMkIsc0JBQXNCLEdBQUcscUNBQXFDLFdBQVcsYUFBYSxhQUFhLGNBQWMsc0JBQXNCLEdBQUcsdUNBQXVDLDBCQUEwQixxQkFBcUIsR0FBRyxpQ0FBaUMsNkJBQTZCLEdBQUcseUJBQXlCLHVCQUF1QixrQkFBa0IsR0FBRyx1QkFBdUIsY0FBYyxrQkFBa0IsR0FBRyw4Q0FBOEMscUJBQXFCLEdBQUcsZ0NBQWdDLG1CQUFtQixzQkFBc0IscUJBQXFCLEdBQUcsa0NBQWtDLHNCQUFzQixHQUFHLGtCQUFrQiwwREFBMEQsR0FBRyxVQUFVLDJCQUEyQix3QkFBd0IsR0FBRyxjQUFjLHNCQUFzQixHQUFHLG1GQUFtRix1Q0FBdUMsK0JBQStCLHVDQUF1QyxtQ0FBbUMsdUNBQXVDLG1CQUFtQix1Q0FBdUMscUJBQXFCLHVDQUF1QyxxQkFBcUIsdUNBQXVDLHFCQUFxQix1Q0FBdUMsNkJBQTZCLHVD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ZSxZQUFZLEdBQUcsd0JBQXdCLHNCQUFzQixnQkFBZ0IsZUFBZSxhQUFhLEdBQUcsZUFBZSxzQkFBc0IsWUFBWSxVQUFVLGVBQWUsbUJBQW1CLEdBQUcsZUFBZSxtQkFBbUIsNkJBQTZCLFVBQVUsR0FBRyxzQkFBc0Isb0JBQW9CLElBQUksb0JBQW9CLG1CQUFtQixzQkFBc0Isb0JBQW9CLGVBQWUsdUJBQXVCLGNBQWMsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsNENBQTRDLHFCQUFxQixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxtQkFBbUI7QUFDNW9XO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlcy5jc3M/NjY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQmFzaWMgZm9ybWF0dGluZyAqL1xcblxcbioge1xcbiBmb250LXNpemU6IDI1cHg7XFxuIGNvbG9yOiBibGFjaztcXG4gZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyLWZsdWlkIHtcXG4gb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uY29udGFpbmVyLWZsdWlkIC5jYXJkLWJvZHkge1xcblxcbn1cXG5cXG5cXG4vKmJvZHkgPiAqOm5vdCgjbmF2KSwgYm9keTpub3QoI25hdiksIGJvZHk6bm90KFRhYmxlKSwgYm9keSA6bm90KFRhYmxlKSB7XFxuIG1heC13aWR0aDogODAlO1xcbiBtYXJnaW46IDAgYXV0bztcXG59Ki9cXG5cXG4vKiBCb3R0b20gYmFyIGNvZGVib29rICovIFxcblxcbi5mZWV0IHtcXG4gd2lkdGg6IDcwdnc7XFxuIHotaW5kZXg6IDI7XFxuIGJvdHRvbTogMDtcXG4gcmlnaHQ6IDA7XFxuIGxlZnQ6IDA7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbiNjb2RlYm9vayB7XFxuIHotaW5kZXg6IDM7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuI2dsYWJsZSwgI2dsYWJsZSB0ZCwgI2dsYWJsZSB0ZCAqLCAjZ2xhYmxlIHRoLCAjZ2xhYmxlIHRoICoge1xcbiBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2dsYWJsZSB7XFxuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIFNpZGViYXIgZmxhZ3MgKi9cXG5cXG4jZmxhZ2JhciB7XFxuIGxlZnQ6IDA7XFxuIHRvcDogMTB2aDtcXG4gYm90dG9tOiAwO1xcbiB3aWR0aDogM3Z3O1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qIEluY3JlYXNlIG9mIGVtcGhhc2lzICovXFxuXFxuZGl2IHtcXG4vKiBiYWNrZ3JvdW5kOiAjZWZlZmVmOyAqL1xcbiBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5zdGF0ZW1lbnQsIG1haW4gLnN0YXRlbWVudCB7XFxuIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxufVxcblxcbi5zdGF0ZW1lbnQsIGRldGFpbHMge1xcbiBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxubWFpbiA+IC5zdGF0ZW1lbnQge1xcbiB3aWR0aDogODAlO1xcbiBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnN0YXRlbWVudCAubWV0YWRhdGEsIC5zdGF0ZWJveCwgc3VtbWFyeSB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdGVib3gsIG1haW4gLnN0YXRlbWVudCB7XFxuIHBhZGRpbmc6IDAuNXJlbTtcXG4gbWFyZ2luLXRvcDogMC41cmVtO1xcbiBsaW5lLWhlaWdodDogMS43NTtcXG59XFxuXFxuLyogSGlnaGxpZ2h0cyAqL1xcblxcbiogPiBtYXJrIHtcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5tYXJrLCBtYXJrICoge1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbm1hcmsge1xcbi8qIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyAqL1xcbiBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbm1hcmsgPiBiIHtcXG4gZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBSRVBMQUNFIFRISVMgU0VDVElPTiBXSEVOIFlPVSBIQVZFIENPREVTICovXFxuLmV4YW1wbGVDb2RlLCAuZXhhbXBsZUNvZGUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlZWZmZWUgIWltcG9ydGFudDsgfVxcbi5leGFtcGxlVHdvLCAuZXhhbXBsZVR3byAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZlZSAhaW1wb3J0YW50OyB9XFxuLmV4YW1wbGVUaHJlZSwgLmV4YW1wbGVUaHJlZSAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2VlZmZmZiAhaW1wb3J0YW50OyB9XFxuLnRlc3QsIC50ZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZhNGM0ICFpbXBvcnRhbnQ7IH1cXG4udGVzdDIsIC50ZXN0MiAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2U1YTBjOSAhaW1wb3J0YW50OyB9XFxuLnRlc3QzLCAudGVzdDMgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlNmI3ZjMgIWltcG9ydGFudDsgfVxcbi50ZXN0NCwgLnRlc3Q0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliMWQ0ICFpbXBvcnRhbnQ7IH1cXG4uaW5wdXRUZXN0LCAuaW5wdXRUZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZmM0ICFpbXBvcnRhbnQ7IH1cXG4uc2hvd2luZ1BldGVyLCAuc2hvd2luZ1BldGVyICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmYmMzICFpbXBvcnRhbnQ7IH1cXG4uQ2hyb21lVGVzdCwgLkNocm9tZVRlc3QgKiB7IGJhY2tncm91bmQtY29sb3I6ICNjZGIxZmMgIWltcG9ydGFudDsgfVxcbi5ibHVlLCAuYmx1ZSAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2M3ZjlmYyAhaW1wb3J0YW50OyB9XFxuXFxuLyogXFxcIiFpbXBvcnRhbnRcXFwiIGlzIGdlbmVyYWxseSBjb25zaWRlcmVkIGJhZCBwcmFjdGljZSwgYnV0IHdhcyBuZWNlc3NhcnkgdG8gb3ZlcnJpZGUgZXZlcnkgb3RoZXIgc291cmNlIG9mIGJhY2tncm91bmQgY29sb3IuICovXFxuXFxuLyogYWRkIGEgdG9vbHRpcDogKi8gXFxubWFyayAudG9sdGlwLCBtYXJrICsgLnRvbHRpcCB7XFxuIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG4gZm9udC1zaXplOiAwLjdyZW07XFxuIHdpZHRoOiAyMDBweDtcXG4gYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XFxuLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgKi9cXG4gY29sb3I6ICNmMGYwZjA7XFxuIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gYm9yZGVyLXJhZGl1czogNnB4O1xcbiBwYWRkaW5nOiA1cHggMDtcXG4gcG9zaXRpb246IGFic29sdXRlO1xcbiB6LWluZGV4OiAxO1xcbiB0b3A6IDE1MCU7XFxuIHJpZ2h0OiA1MCU7XFxuIG1hcmdpbi1yaWdodDogLTEwMHB4O1xcbn1cXG5cXG5tYXJrIC50b2x0aXA6OmFmdGVyIHtcXG4gY29udGVudDogXFxcIlxcXCI7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gYm90dG9tOiAxMDAlO1xcbiByaWdodDogNTAlO1xcbiBtYXJnaW4tcmlnaHQ6IC01cHg7XFxuIGJvcmRlci13aWR0aDogNXB4O1xcbiBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwgMCwgMCwgMC41KSB0cmFuc3BhcmVudDtcXG59XFxuXFxubWFyazpob3ZlciAudG9sdGlwLCAudG9sdGlwOmhvdmVyIHtcXG4gdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyogR2xvc3NhcnkgaW4gYSBkZXRhaWxzIHBhbmUgKi9cXG4vKiBOb3RlOiB0aGUgJ2RldGFpbHMnIGdsb3NzYXJ5IGlzIC5nbG9zc2FyeSwgdGhlIGZvb3RlciBnbG9zc2FyeSBpcyAjZ2xvc3NhcnkgKi9cXG4uZ2xvc3NhcnksIC5nbG9zc2FyeSAqIHtcXG4gYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5nbG9zc2FyeSBwIHtcXG4gbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiNjb2RlcGFnZSA+IGRpdiwgI2NvZGVwYWdlIGZvcm0gPiBkaXYsICNqdXN0Y3NzIGRpdiBjb2RlIHtcXG4gZGlzcGxheTogZmxleDtcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Nhc3NtYXAgPiBkaXYsICNqdXN0Y3NzID4gZGl2IHtcXG4gYmFja2dyb3VuZDogYmxhY2s7XFxuIGNvbG9yOiB3aGl0ZTtcXG4gcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4janVzdGNzcyBkaXYgY29kZSwgI3Nhc3NtYXAgZGl2IGNvZGUge1xcbiBjb2xvcjogd2hpdGU7XFxuIGZvbnQtZmFtaWx5OiAnVmljdG9yIE1vbm8nLCAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyogW3N0YXRlbWVudElEXS50c3ggKi9cXG4jcmVhZGVyIC5tZXRhZGF0YSB7XFxuIGZvbnQtZmFtaWx5OiAnVmljdG9yIE1vbm8nLCAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcXG59XFxuXFxuI3JlYWRlciB7XFxuIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuI3JlYWRlciAjc3RhdGVib3gge1xcbiBwYWRkaW5nOiAxLjNyZW07XFxufVxcblxcbiNyZWFkZXIgI25hdiB7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gYm90dG9tOiA1dmg7XFxuIHJpZ2h0OiAwO1xcbn1cXG5cXG4jcmVhZGVyIC5zdGF0ZW1lbnQge1xcbiBvdmVyZmxvdy15OiBzY3JvbGw7XFxuIGhlaWdodDogODB2aDtcXG4gd2lkdGg6IDcwdnc7XFxuIGxlZnQ6IDV2dztcXG59XFxuXFxuLyogI2NvZGVyIHtcXG4gcG9zaXRpb246IGFic29sdXRlO1xcbiByaWdodDogMDtcXG4gdG9wOiAwO1xcbiB3aWR0aDogMjV2dztcXG4gZm9udC1zaXplOiAyM3B4O1xcbn1cXG5cXG4jY29kZXBpY2sge1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxuIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuIHRvcDogMDtcXG59XFxuXFxuI2NvZGVwaWNrIHNlbGVjdCB7XFxuIG1hcmdpbi10b3A6IDFyZW07XFxufSAqL1xcblxcbi5mbGFndHJhY2tlciB7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiBtYXJnaW4tdG9wOiAzNXZoO1xcbiB3aWR0aDogMjV2dztcXG4gbWFyZ2luLWJvdHRvbTogMjB2aDtcXG4gcmlnaHQ6IDVweDtcXG59XFxuXFxuZGl2I2RlZmluaXRpb25zIHtcXG4gcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5kaXYjZGVmaW5pdGlvbnMgcCwgZGl2I2RlZmluaXRpb25zIHAgKiB7XFxuIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jY29kZXIgc2VsZWN0IHtcXG4gZm9udC1zaXplOiAwLjhyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixxSEFBcUg7QUFDdEg7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7O0FBRUE7OztBQUdBOzs7RUFHRTs7QUFFRix3QkFBd0I7O0FBRXhCO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixTQUFTO0NBQ1QsUUFBUTtDQUNSLE9BQU87Q0FDUCxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0FBQ25COztBQUVBLGtCQUFrQjs7QUFFbEI7Q0FDQyxPQUFPO0NBQ1AsU0FBUztDQUNULFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0FBQ25COztBQUVBLHlCQUF5Qjs7QUFFekI7QUFDQSx5QkFBeUI7Q0FDeEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsY0FBYztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUEsZUFBZTs7QUFFZjtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHNEQUFzRDtBQUN2RDs7QUFFQTtBQUNBLDBCQUEwQjtDQUN6QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUEsNkNBQTZDO0FBQzdDLCtCQUErQixvQ0FBb0MsRUFBRTtBQUNyRSw2QkFBNkIsb0NBQW9DLEVBQUU7QUFDbkUsaUNBQWlDLG9DQUFvQyxFQUFFO0FBQ3ZFLGlCQUFpQixvQ0FBb0MsRUFBRTtBQUN2RCxtQkFBbUIsb0NBQW9DLEVBQUU7QUFDekQsbUJBQW1CLG9DQUFvQyxFQUFFO0FBQ3pELG1CQUFtQixvQ0FBb0MsRUFBRTtBQUN6RCwyQkFBMkIsb0NBQW9DLEVBQUU7QUFDakUsaUNBQWlDLG9DQUFvQyxFQUFFO0FBQ3ZFLDZCQUE2QixvQ0FBb0MsRUFBRTtBQUNuRSxpQkFBaUIsb0NBQW9DLEVBQUU7O0FBRXZELDZIQUE2SDs7QUFFN0gsbUJBQW1CO0FBQ25CO0NBQ0Msa0JBQWtCO0NBQ2xCLHNFQUFzRTtDQUN0RSxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLHlDQUF5QztBQUMxQyx3Q0FBd0M7Q0FDdkMsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsU0FBUztDQUNULFVBQVU7Q0FDVixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsb0VBQW9FO0FBQ3JFOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixXQUFXO0FBQ1o7O0FBRUEsK0JBQStCO0FBQy9CLGdGQUFnRjtBQUNoRjtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHNEQUFzRDtBQUN2RDs7QUFFQSxzQkFBc0I7QUFDdEI7Q0FDQyxzREFBc0Q7QUFDdkQ7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxTQUFTO0FBQ1Y7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7O0FBRUg7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQmFzaWMgZm9ybWF0dGluZyAqL1xcblxcbioge1xcbiBmb250LXNpemU6IDI1cHg7XFxuIGNvbG9yOiBibGFjaztcXG4gZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyLWZsdWlkIHtcXG4gb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uY29udGFpbmVyLWZsdWlkIC5jYXJkLWJvZHkge1xcblxcbn1cXG5cXG5cXG4vKmJvZHkgPiAqOm5vdCgjbmF2KSwgYm9keTpub3QoI25hdiksIGJvZHk6bm90KFRhYmxlKSwgYm9keSA6bm90KFRhYmxlKSB7XFxuIG1heC13aWR0aDogODAlO1xcbiBtYXJnaW46IDAgYXV0bztcXG59Ki9cXG5cXG4vKiBCb3R0b20gYmFyIGNvZGVib29rICovIFxcblxcbi5mZWV0IHtcXG4gd2lkdGg6IDcwdnc7XFxuIHotaW5kZXg6IDI7XFxuIGJvdHRvbTogMDtcXG4gcmlnaHQ6IDA7XFxuIGxlZnQ6IDA7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbiNjb2RlYm9vayB7XFxuIHotaW5kZXg6IDM7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuI2dsYWJsZSwgI2dsYWJsZSB0ZCwgI2dsYWJsZSB0ZCAqLCAjZ2xhYmxlIHRoLCAjZ2xhYmxlIHRoICoge1xcbiBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2dsYWJsZSB7XFxuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIFNpZGViYXIgZmxhZ3MgKi9cXG5cXG4jZmxhZ2JhciB7XFxuIGxlZnQ6IDA7XFxuIHRvcDogMTB2aDtcXG4gYm90dG9tOiAwO1xcbiB3aWR0aDogM3Z3O1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qIEluY3JlYXNlIG9mIGVtcGhhc2lzICovXFxuXFxuZGl2IHtcXG4vKiBiYWNrZ3JvdW5kOiAjZWZlZmVmOyAqL1xcbiBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5zdGF0ZW1lbnQsIG1haW4gLnN0YXRlbWVudCB7XFxuIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XFxufVxcblxcbi5zdGF0ZW1lbnQsIGRldGFpbHMge1xcbiBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxubWFpbiA+IC5zdGF0ZW1lbnQge1xcbiB3aWR0aDogODAlO1xcbiBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnN0YXRlbWVudCAubWV0YWRhdGEsIC5zdGF0ZWJveCwgc3VtbWFyeSB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdGVib3gsIG1haW4gLnN0YXRlbWVudCB7XFxuIHBhZGRpbmc6IDAuNXJlbTtcXG4gbWFyZ2luLXRvcDogMC41cmVtO1xcbiBsaW5lLWhlaWdodDogMS43NTtcXG59XFxuXFxuLyogSGlnaGxpZ2h0cyAqL1xcblxcbiogPiBtYXJrIHtcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5tYXJrLCBtYXJrICoge1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbm1hcmsge1xcbi8qIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyAqL1xcbiBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbm1hcmsgPiBiIHtcXG4gZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBSRVBMQUNFIFRISVMgU0VDVElPTiBXSEVOIFlPVSBIQVZFIENPREVTICovXFxuLmV4YW1wbGVDb2RlLCAuZXhhbXBsZUNvZGUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlZWZmZWUgIWltcG9ydGFudDsgfVxcbi5leGFtcGxlVHdvLCAuZXhhbXBsZVR3byAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZlZSAhaW1wb3J0YW50OyB9XFxuLmV4YW1wbGVUaHJlZSwgLmV4YW1wbGVUaHJlZSAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2VlZmZmZiAhaW1wb3J0YW50OyB9XFxuLnRlc3QsIC50ZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZhNGM0ICFpbXBvcnRhbnQ7IH1cXG4udGVzdDIsIC50ZXN0MiAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2U1YTBjOSAhaW1wb3J0YW50OyB9XFxuLnRlc3QzLCAudGVzdDMgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlNmI3ZjMgIWltcG9ydGFudDsgfVxcbi50ZXN0NCwgLnRlc3Q0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliMWQ0ICFpbXBvcnRhbnQ7IH1cXG4uaW5wdXRUZXN0LCAuaW5wdXRUZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZmM0ICFpbXBvcnRhbnQ7IH1cXG4uc2hvd2luZ1BldGVyLCAuc2hvd2luZ1BldGVyICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmYmMzICFpbXBvcnRhbnQ7IH1cXG4uQ2hyb21lVGVzdCwgLkNocm9tZVRlc3QgKiB7IGJhY2tncm91bmQtY29sb3I6ICNjZGIxZmMgIWltcG9ydGFudDsgfVxcbi5ibHVlLCAuYmx1ZSAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2M3ZjlmYyAhaW1wb3J0YW50OyB9XFxuXFxuLyogXFxcIiFpbXBvcnRhbnRcXFwiIGlzIGdlbmVyYWxseSBjb25zaWRlcmVkIGJhZCBwcmFjdGljZSwgYnV0IHdhcyBuZWNlc3NhcnkgdG8gb3ZlcnJpZGUgZXZlcnkgb3RoZXIgc291cmNlIG9mIGJhY2tncm91bmQgY29sb3IuICovXFxuXFxuLyogYWRkIGEgdG9vbHRpcDogKi8gXFxubWFyayAudG9sdGlwLCBtYXJrICsgLnRvbHRpcCB7XFxuIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG4gZm9udC1zaXplOiAwLjdyZW07XFxuIHdpZHRoOiAyMDBweDtcXG4gYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XFxuLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgKi9cXG4gY29sb3I6ICNmMGYwZjA7XFxuIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gYm9yZGVyLXJhZGl1czogNnB4O1xcbiBwYWRkaW5nOiA1cHggMDtcXG4gcG9zaXRpb246IGFic29sdXRlO1xcbiB6LWluZGV4OiAxO1xcbiB0b3A6IDE1MCU7XFxuIHJpZ2h0OiA1MCU7XFxuIG1hcmdpbi1yaWdodDogLTEwMHB4O1xcbn1cXG5cXG5tYXJrIC50b2x0aXA6OmFmdGVyIHtcXG4gY29udGVudDogXFxcIlxcXCI7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gYm90dG9tOiAxMDAlO1xcbiByaWdodDogNTAlO1xcbiBtYXJnaW4tcmlnaHQ6IC01cHg7XFxuIGJvcmRlci13aWR0aDogNXB4O1xcbiBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwgMCwgMCwgMC41KSB0cmFuc3BhcmVudDtcXG59XFxuXFxubWFyazpob3ZlciAudG9sdGlwLCAudG9sdGlwOmhvdmVyIHtcXG4gdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyogR2xvc3NhcnkgaW4gYSBkZXRhaWxzIHBhbmUgKi9cXG4vKiBOb3RlOiB0aGUgJ2RldGFpbHMnIGdsb3NzYXJ5IGlzIC5nbG9zc2FyeSwgdGhlIGZvb3RlciBnbG9zc2FyeSBpcyAjZ2xvc3NhcnkgKi9cXG4uZ2xvc3NhcnksIC5nbG9zc2FyeSAqIHtcXG4gYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5nbG9zc2FyeSBwIHtcXG4gbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiNjb2RlcGFnZSA+IGRpdiwgI2NvZGVwYWdlIGZvcm0gPiBkaXYsICNqdXN0Y3NzIGRpdiBjb2RlIHtcXG4gZGlzcGxheTogZmxleDtcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Nhc3NtYXAgPiBkaXYsICNqdXN0Y3NzID4gZGl2IHtcXG4gYmFja2dyb3VuZDogYmxhY2s7XFxuIGNvbG9yOiB3aGl0ZTtcXG4gcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4janVzdGNzcyBkaXYgY29kZSwgI3Nhc3NtYXAgZGl2IGNvZGUge1xcbiBjb2xvcjogd2hpdGU7XFxuIGZvbnQtZmFtaWx5OiAnVmljdG9yIE1vbm8nLCAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyogW3N0YXRlbWVudElEXS50c3ggKi9cXG4jcmVhZGVyIC5tZXRhZGF0YSB7XFxuIGZvbnQtZmFtaWx5OiAnVmljdG9yIE1vbm8nLCAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcXG59XFxuXFxuI3JlYWRlciB7XFxuIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuI3JlYWRlciAjc3RhdGVib3gge1xcbiBwYWRkaW5nOiAxLjNyZW07XFxufVxcblxcbiNyZWFkZXIgI25hdiB7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gYm90dG9tOiA1dmg7XFxuIHJpZ2h0OiAwO1xcbn1cXG5cXG4jcmVhZGVyIC5zdGF0ZW1lbnQge1xcbiBvdmVyZmxvdy15OiBzY3JvbGw7XFxuIGhlaWdodDogODB2aDtcXG4gd2lkdGg6IDcwdnc7XFxuIGxlZnQ6IDV2dztcXG59XFxuXFxuLyogI2NvZGVyIHtcXG4gcG9zaXRpb246IGFic29sdXRlO1xcbiByaWdodDogMDtcXG4gdG9wOiAwO1xcbiB3aWR0aDogMjV2dztcXG4gZm9udC1zaXplOiAyM3B4O1xcbn1cXG5cXG4jY29kZXBpY2sge1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxuIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuIHRvcDogMDtcXG59XFxuXFxuI2NvZGVwaWNrIHNlbGVjdCB7XFxuIG1hcmdpbi10b3A6IDFyZW07XFxufSAqL1xcblxcbi5mbGFndHJhY2tlciB7XFxuIHBvc2l0aW9uOiBmaXhlZDtcXG4gb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiBtYXJnaW4tdG9wOiAzNXZoO1xcbiB3aWR0aDogMjV2dztcXG4gbWFyZ2luLWJvdHRvbTogMjB2aDtcXG4gcmlnaHQ6IDVweDtcXG59XFxuXFxuZGl2I2RlZmluaXRpb25zIHtcXG4gcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5kaXYjZGVmaW5pdGlvbnMgcCwgZGl2I2RlZmluaXRpb25zIHAgKiB7XFxuIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jY29kZXIgc2VsZWN0IHtcXG4gZm9udC1zaXplOiAwLjhyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/styles.css\n");

/***/ })

});