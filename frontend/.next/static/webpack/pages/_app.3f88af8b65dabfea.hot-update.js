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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Basic formatting */\\n\\n* {\\n font-size: 28px;\\n color: black;\\n font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n}\\n\\n\\n/*body > *:not(#nav), body:not(#nav), body:not(Table), body :not(Table) {\\n max-width: 80%;\\n margin: 0 auto;\\n}*/\\n\\n.feet {\\n width: 100%;\\n height: 5vh;\\n z-index: 2;\\n bottom: 0;\\n right: 0;\\n left: 0;\\n overflow-x: hidden;\\n overflow-y: hidden;\\n position: fixed;\\n}\\n\\n#codebook {\\n position: absolute;\\n margin-bottom: 5vh;\\n z-index: 3;\\n}\\n\\n#glable {\\n position: relative;\\n}\\n\\n/* Increase of emphasis */\\n\\ndiv {\\n/* background: #efefef; */\\n padding: 0.5rem;\\n}\\n\\n.statement, main .statement {\\n background-color: #fcfcfc;\\n}\\n\\n.statement, details {\\n background: #f0f0f0;\\n margin: 0.5rem;\\n}\\n\\n.statement {\\n left: 10vw;\\n width: 60%;\\n}\\n\\n.statement .metadata, .statebox, summary {\\n background: white;\\n}\\n\\n.statebox {\\n padding: 0.5rem;\\n margin-top: 0.5rem;\\n line-height: 1.75;\\n}\\n\\n/* Highlights */\\n\\n* > mark {\\n position: relative;\\n}\\n\\nmark, mark * {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\nmark {\\n/* font-weight: lighter; */\\n font-style: italic;\\n}\\n\\nmark > b {\\n font-style: normal;\\n}\\n\\n/* REPLACE THIS SECTION WHEN YOU HAVE CODES */\\n.exampleCode, .exampleCode * { background-color: #eeffee !important; }\\n.exampleTwo, .exampleTwo * { background-color: #ffffee !important; }\\n.exampleThree, .exampleThree * { background-color: #eeffff !important; }\\n.test, .test * { background-color: #f6a4c4 !important; }\\n.test2, .test2 * { background-color: #e5a0c9 !important; }\\n.test3, .test3 * { background-color: #e6b7f3 !important; }\\n.test4, .test4 * { background-color: #f9b1d4 !important; }\\n.inputTest, .inputTest * { background-color: #efffc4 !important; }\\n.showingPeter, .showingPeter * { background-color: #f4fbc3 !important; }\\n.ChromeTest, .ChromeTest * { background-color: #cdb1fc !important; }\\n.blue, .blue * { background-color: #c7f9fc !important; }\\n\\n/* \\\"!important\\\" is generally considered bad practice, but was necessary to override every other source of background color. */\\n\\n/* add a tooltip: */ \\nmark .toltip, mark + .toltip {\\n visibility: hidden;\\n font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n font-size: 0.7rem;\\n width: 200px;\\n background: rgba(0, 0, 0, 0.5) !important;\\n/* background-color: black !important; */\\n color: #f0f0f0;\\n text-align: center;\\n border-radius: 6px;\\n padding: 5px 0;\\n position: absolute;\\n z-index: 1;\\n top: 150%;\\n right: 50%;\\n margin-right: -100px;\\n}\\n\\nmark .toltip::after {\\n content: \\\"\\\";\\n position: absolute;\\n bottom: 100%;\\n right: 50%;\\n margin-right: -5px;\\n border-width: 5px;\\n border-style: solid;\\n border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;\\n}\\n\\nmark:hover .toltip, .toltip:hover {\\n visibility: visible;\\n display: inline-block;\\n z-index: 10;\\n}\\n\\n/* Glossary in a details pane */\\n/* Note: the 'details' glossary is .glossary, the footer glossary is #glossary */\\n.glossary, .glossary * {\\n background: white;\\n}\\n\\n.glossary p {\\n margin-left: 0.5rem;\\n margin-right: 0.5rem;\\n}\\n\\n#codepage > div, #codepage form > div, #justcss div code {\\n display: flex;\\n flex-direction: column;\\n}\\n\\n#sassmap > div, #justcss > div {\\n background: black;\\n color: white;\\n padding: 1.5rem;\\n}\\n\\n#justcss div code, #sassmap div code {\\n color: white;\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* [statementID].tsx */\\n#reader .metadata {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n#reader {\\n overflow-y: hidden;\\n}\\n\\n#reader #statebox {\\n padding: 1.3rem;\\n}\\n\\n#reader #nav {\\n position: fixed;\\n bottom: 5vh;\\n right: 0;\\n}\\n\\n#reader .statement {\\n overflow-y: scroll;\\n height: 80vh;\\n width: 70vw;\\n left: 5vw;\\n}\\n\\n#coder {\\n position: absolute;\\n right: 0;\\n top: 0;\\n width: 25vw;\\n font-size: 23px;\\n}\\n\\n#codepick {\\n position: fixed;\\n background-color: #efefef;\\n top: 0;\\n}\\n\\n#codepick select {\\n margin-top: 1rem;\\n}\\n\\n.flagtracker {\\n position: fixed;\\n overflow-y: scroll;\\n margin-top: 30vh;\\n width: 25vw;\\n margin-bottom: 20vh;\\n right: 5px;\\n}\\n\\ndiv#definitions {\\n padding: 0.5rem;\\n}\\n\\ndiv#definitions p, div#definitions p * {\\n font-size: 0.8rem;\\n}\\n\\n#coder select {\\n font-size: 0.8rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/styles.css\"],\"names\":[],\"mappings\":\"AAAA,qBAAqB;;AAErB;CACC,eAAe;CACf,YAAY;CACZ,qHAAqH;AACtH;;;AAGA;;;EAGE;;AAEF;CACC,WAAW;CACX,WAAW;CACX,UAAU;CACV,SAAS;CACT,QAAQ;CACR,OAAO;CACP,kBAAkB;CAClB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,UAAU;AACX;;AAEA;CACC,kBAAkB;AACnB;;AAEA,yBAAyB;;AAEzB;AACA,yBAAyB;CACxB,eAAe;AAChB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,cAAc;AACf;;AAEA;CACC,UAAU;CACV,UAAU;AACX;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA,eAAe;;AAEf;CACC,kBAAkB;AACnB;;AAEA;CACC,sDAAsD;AACvD;;AAEA;AACA,0BAA0B;CACzB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA,6CAA6C;AAC7C,+BAA+B,oCAAoC,EAAE;AACrE,6BAA6B,oCAAoC,EAAE;AACnE,iCAAiC,oCAAoC,EAAE;AACvE,iBAAiB,oCAAoC,EAAE;AACvD,mBAAmB,oCAAoC,EAAE;AACzD,mBAAmB,oCAAoC,EAAE;AACzD,mBAAmB,oCAAoC,EAAE;AACzD,2BAA2B,oCAAoC,EAAE;AACjE,iCAAiC,oCAAoC,EAAE;AACvE,6BAA6B,oCAAoC,EAAE;AACnE,iBAAiB,oCAAoC,EAAE;;AAEvD,6HAA6H;;AAE7H,mBAAmB;AACnB;CACC,kBAAkB;CAClB,sEAAsE;CACtE,iBAAiB;CACjB,YAAY;CACZ,yCAAyC;AAC1C,wCAAwC;CACvC,cAAc;CACd,kBAAkB;CAClB,kBAAkB;CAClB,cAAc;CACd,kBAAkB;CAClB,UAAU;CACV,SAAS;CACT,UAAU;CACV,oBAAoB;AACrB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,YAAY;CACZ,UAAU;CACV,kBAAkB;CAClB,iBAAiB;CACjB,mBAAmB;CACnB,oEAAoE;AACrE;;AAEA;CACC,mBAAmB;CACnB,qBAAqB;CACrB,WAAW;AACZ;;AAEA,+BAA+B;AAC/B,gFAAgF;AAChF;CACC,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,sDAAsD;AACvD;;AAEA,sBAAsB;AACtB;CACC,sDAAsD;AACvD;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,WAAW;CACX,QAAQ;AACT;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,SAAS;AACV;;AAEA;CACC,kBAAkB;CAClB,QAAQ;CACR,MAAM;CACN,WAAW;CACX,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,yBAAyB;CACzB,MAAM;AACP;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,WAAW;CACX,mBAAmB;CACnB,UAAU;AACX;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB\",\"sourcesContent\":[\"/* Basic formatting */\\n\\n* {\\n font-size: 28px;\\n color: black;\\n font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n}\\n\\n\\n/*body > *:not(#nav), body:not(#nav), body:not(Table), body :not(Table) {\\n max-width: 80%;\\n margin: 0 auto;\\n}*/\\n\\n.feet {\\n width: 100%;\\n height: 5vh;\\n z-index: 2;\\n bottom: 0;\\n right: 0;\\n left: 0;\\n overflow-x: hidden;\\n overflow-y: hidden;\\n position: fixed;\\n}\\n\\n#codebook {\\n position: absolute;\\n margin-bottom: 5vh;\\n z-index: 3;\\n}\\n\\n#glable {\\n position: relative;\\n}\\n\\n/* Increase of emphasis */\\n\\ndiv {\\n/* background: #efefef; */\\n padding: 0.5rem;\\n}\\n\\n.statement, main .statement {\\n background-color: #fcfcfc;\\n}\\n\\n.statement, details {\\n background: #f0f0f0;\\n margin: 0.5rem;\\n}\\n\\n.statement {\\n left: 10vw;\\n width: 60%;\\n}\\n\\n.statement .metadata, .statebox, summary {\\n background: white;\\n}\\n\\n.statebox {\\n padding: 0.5rem;\\n margin-top: 0.5rem;\\n line-height: 1.75;\\n}\\n\\n/* Highlights */\\n\\n* > mark {\\n position: relative;\\n}\\n\\nmark, mark * {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\nmark {\\n/* font-weight: lighter; */\\n font-style: italic;\\n}\\n\\nmark > b {\\n font-style: normal;\\n}\\n\\n/* REPLACE THIS SECTION WHEN YOU HAVE CODES */\\n.exampleCode, .exampleCode * { background-color: #eeffee !important; }\\n.exampleTwo, .exampleTwo * { background-color: #ffffee !important; }\\n.exampleThree, .exampleThree * { background-color: #eeffff !important; }\\n.test, .test * { background-color: #f6a4c4 !important; }\\n.test2, .test2 * { background-color: #e5a0c9 !important; }\\n.test3, .test3 * { background-color: #e6b7f3 !important; }\\n.test4, .test4 * { background-color: #f9b1d4 !important; }\\n.inputTest, .inputTest * { background-color: #efffc4 !important; }\\n.showingPeter, .showingPeter * { background-color: #f4fbc3 !important; }\\n.ChromeTest, .ChromeTest * { background-color: #cdb1fc !important; }\\n.blue, .blue * { background-color: #c7f9fc !important; }\\n\\n/* \\\"!important\\\" is generally considered bad practice, but was necessary to override every other source of background color. */\\n\\n/* add a tooltip: */ \\nmark .toltip, mark + .toltip {\\n visibility: hidden;\\n font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n font-size: 0.7rem;\\n width: 200px;\\n background: rgba(0, 0, 0, 0.5) !important;\\n/* background-color: black !important; */\\n color: #f0f0f0;\\n text-align: center;\\n border-radius: 6px;\\n padding: 5px 0;\\n position: absolute;\\n z-index: 1;\\n top: 150%;\\n right: 50%;\\n margin-right: -100px;\\n}\\n\\nmark .toltip::after {\\n content: \\\"\\\";\\n position: absolute;\\n bottom: 100%;\\n right: 50%;\\n margin-right: -5px;\\n border-width: 5px;\\n border-style: solid;\\n border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;\\n}\\n\\nmark:hover .toltip, .toltip:hover {\\n visibility: visible;\\n display: inline-block;\\n z-index: 10;\\n}\\n\\n/* Glossary in a details pane */\\n/* Note: the 'details' glossary is .glossary, the footer glossary is #glossary */\\n.glossary, .glossary * {\\n background: white;\\n}\\n\\n.glossary p {\\n margin-left: 0.5rem;\\n margin-right: 0.5rem;\\n}\\n\\n#codepage > div, #codepage form > div, #justcss div code {\\n display: flex;\\n flex-direction: column;\\n}\\n\\n#sassmap > div, #justcss > div {\\n background: black;\\n color: white;\\n padding: 1.5rem;\\n}\\n\\n#justcss div code, #sassmap div code {\\n color: white;\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n/* [statementID].tsx */\\n#reader .metadata {\\n font-family: 'Victor Mono', 'Courier Prime', monospace;\\n}\\n\\n#reader {\\n overflow-y: hidden;\\n}\\n\\n#reader #statebox {\\n padding: 1.3rem;\\n}\\n\\n#reader #nav {\\n position: fixed;\\n bottom: 5vh;\\n right: 0;\\n}\\n\\n#reader .statement {\\n overflow-y: scroll;\\n height: 80vh;\\n width: 70vw;\\n left: 5vw;\\n}\\n\\n#coder {\\n position: absolute;\\n right: 0;\\n top: 0;\\n width: 25vw;\\n font-size: 23px;\\n}\\n\\n#codepick {\\n position: fixed;\\n background-color: #efefef;\\n top: 0;\\n}\\n\\n#codepick select {\\n margin-top: 1rem;\\n}\\n\\n.flagtracker {\\n position: fixed;\\n overflow-y: scroll;\\n margin-top: 30vh;\\n width: 25vw;\\n margin-bottom: 20vh;\\n right: 5px;\\n}\\n\\ndiv#definitions {\\n padding: 0.5rem;\\n}\\n\\ndiv#definitions p, div#definitions p * {\\n font-size: 0.8rem;\\n}\\n\\n#coder select {\\n font-size: 0.8rem;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL3N0eWxlcy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVFQUF1RSxtQkFBbUIsZ0JBQWdCLHlIQUF5SCxHQUFHLCtFQUErRSxrQkFBa0Isa0JBQWtCLEdBQUcsYUFBYSxlQUFlLGVBQWUsY0FBYyxhQUFhLFlBQVksV0FBVyxzQkFBc0Isc0JBQXNCLG1CQUFtQixHQUFHLGVBQWUsc0JBQXNCLHNCQUFzQixjQUFjLEdBQUcsYUFBYSxzQkFBc0IsR0FBRyx1Q0FBdUMsMEJBQTBCLHFCQUFxQixHQUFHLGlDQUFpQyw2QkFBNkIsR0FBRyx5QkFBeUIsdUJBQXVCLGtCQUFrQixHQUFHLGdCQUFnQixjQUFjLGNBQWMsR0FBRyw4Q0FBOEMscUJBQXFCLEdBQUcsZUFBZSxtQkFBbUIsc0JBQXNCLHFCQUFxQixHQUFHLGtDQUFrQyxzQkFBc0IsR0FBRyxrQkFBa0IsMERBQTBELEdBQUcsVUFBVSwyQkFBMkIsd0JBQXdCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxtRkFBbUYsdUNBQXVDLCtCQUErQix1Q0FBdUMsbUNBQW1DLHVDQUF1QyxtQkFBbUIsdUNBQXVDLHFCQUFxQix1Q0FBdUMscUJBQXFCLHVDQUF1QyxxQkFBcUIsdUNBQXVDLDZCQUE2Qix1Q0FBdUMsbUNBQW1DLHVDQUF1QywrQkFBK0IsdUNBQXVDLG1CQUFtQix1Q0FBdUMsNkxBQTZMLHNCQUFzQiwwRUFBMEUscUJBQXFCLGdCQUFnQiw2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YyxHQUFHLHFCQUFxQixtQkFBbUIsR0FBRyw0Q0FBNEMscUJBQXFCLEdBQUcsbUJBQW1CLHFCQUFxQixHQUFHLG1CQUFtQjtBQUNsZ1Y7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvc3R5bGVzLmNzcz82NjgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBCYXNpYyBmb3JtYXR0aW5nICovXFxuXFxuKiB7XFxuIGZvbnQtc2l6ZTogMjhweDtcXG4gY29sb3I6IGJsYWNrO1xcbiBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi8qYm9keSA+ICo6bm90KCNuYXYpLCBib2R5Om5vdCgjbmF2KSwgYm9keTpub3QoVGFibGUpLCBib2R5IDpub3QoVGFibGUpIHtcXG4gbWF4LXdpZHRoOiA4MCU7XFxuIG1hcmdpbjogMCBhdXRvO1xcbn0qL1xcblxcbi5mZWV0IHtcXG4gd2lkdGg6IDEwMCU7XFxuIGhlaWdodDogNXZoO1xcbiB6LWluZGV4OiAyO1xcbiBib3R0b206IDA7XFxuIHJpZ2h0OiAwO1xcbiBsZWZ0OiAwO1xcbiBvdmVyZmxvdy14OiBoaWRkZW47XFxuIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4jY29kZWJvb2sge1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gei1pbmRleDogMztcXG59XFxuXFxuI2dsYWJsZSB7XFxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogSW5jcmVhc2Ugb2YgZW1waGFzaXMgKi9cXG5cXG5kaXYge1xcbi8qIGJhY2tncm91bmQ6ICNlZmVmZWY7ICovXFxuIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnN0YXRlbWVudCwgbWFpbiAuc3RhdGVtZW50IHtcXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG59XFxuXFxuLnN0YXRlbWVudCwgZGV0YWlscyB7XFxuIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4uc3RhdGVtZW50IHtcXG4gbGVmdDogMTB2dztcXG4gd2lkdGg6IDYwJTtcXG59XFxuXFxuLnN0YXRlbWVudCAubWV0YWRhdGEsIC5zdGF0ZWJveCwgc3VtbWFyeSB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdGVib3gge1xcbiBwYWRkaW5nOiAwLjVyZW07XFxuIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi8qIEhpZ2hsaWdodHMgKi9cXG5cXG4qID4gbWFyayB7XFxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubWFyaywgbWFyayAqIHtcXG4gZm9udC1mYW1pbHk6ICdWaWN0b3IgTW9ubycsICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5tYXJrIHtcXG4vKiBmb250LXdlaWdodDogbGlnaHRlcjsgKi9cXG4gZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5tYXJrID4gYiB7XFxuIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogUkVQTEFDRSBUSElTIFNFQ1RJT04gV0hFTiBZT1UgSEFWRSBDT0RFUyAqL1xcbi5leGFtcGxlQ29kZSwgLmV4YW1wbGVDb2RlICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmZmVlICFpbXBvcnRhbnQ7IH1cXG4uZXhhbXBsZVR3bywgLmV4YW1wbGVUd28gKiB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZWUgIWltcG9ydGFudDsgfVxcbi5leGFtcGxlVGhyZWUsIC5leGFtcGxlVGhyZWUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlZWZmZmYgIWltcG9ydGFudDsgfVxcbi50ZXN0LCAudGVzdCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y2YTRjNCAhaW1wb3J0YW50OyB9XFxuLnRlc3QyLCAudGVzdDIgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlNWEwYzkgIWltcG9ydGFudDsgfVxcbi50ZXN0MywgLnRlc3QzICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZiN2YzICFpbXBvcnRhbnQ7IH1cXG4udGVzdDQsIC50ZXN0NCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjFkNCAhaW1wb3J0YW50OyB9XFxuLmlucHV0VGVzdCwgLmlucHV0VGVzdCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2VmZmZjNCAhaW1wb3J0YW50OyB9XFxuLnNob3dpbmdQZXRlciwgLnNob3dpbmdQZXRlciAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZmJjMyAhaW1wb3J0YW50OyB9XFxuLkNocm9tZVRlc3QsIC5DaHJvbWVUZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RiMWZjICFpbXBvcnRhbnQ7IH1cXG4uYmx1ZSwgLmJsdWUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNjN2Y5ZmMgIWltcG9ydGFudDsgfVxcblxcbi8qIFxcXCIhaW1wb3J0YW50XFxcIiBpcyBnZW5lcmFsbHkgY29uc2lkZXJlZCBiYWQgcHJhY3RpY2UsIGJ1dCB3YXMgbmVjZXNzYXJ5IHRvIG92ZXJyaWRlIGV2ZXJ5IG90aGVyIHNvdXJjZSBvZiBiYWNrZ3JvdW5kIGNvbG9yLiAqL1xcblxcbi8qIGFkZCBhIHRvb2x0aXA6ICovIFxcbm1hcmsgLnRvbHRpcCwgbWFyayArIC50b2x0aXAge1xcbiB2aXNpYmlsaXR5OiBoaWRkZW47XFxuIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuIGZvbnQtc2l6ZTogMC43cmVtO1xcbiB3aWR0aDogMjAwcHg7XFxuIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xcbi8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7ICovXFxuIGNvbG9yOiAjZjBmMGYwO1xcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gcGFkZGluZzogNXB4IDA7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gei1pbmRleDogMTtcXG4gdG9wOiAxNTAlO1xcbiByaWdodDogNTAlO1xcbiBtYXJnaW4tcmlnaHQ6IC0xMDBweDtcXG59XFxuXFxubWFyayAudG9sdGlwOjphZnRlciB7XFxuIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIGJvdHRvbTogMTAwJTtcXG4gcmlnaHQ6IDUwJTtcXG4gbWFyZ2luLXJpZ2h0OiAtNXB4O1xcbiBib3JkZXItd2lkdGg6IDVweDtcXG4gYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDAsIDAsIDAuNSkgdHJhbnNwYXJlbnQ7XFxufVxcblxcbm1hcms6aG92ZXIgLnRvbHRpcCwgLnRvbHRpcDpob3ZlciB7XFxuIHZpc2liaWxpdHk6IHZpc2libGU7XFxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gei1pbmRleDogMTA7XFxufVxcblxcbi8qIEdsb3NzYXJ5IGluIGEgZGV0YWlscyBwYW5lICovXFxuLyogTm90ZTogdGhlICdkZXRhaWxzJyBnbG9zc2FyeSBpcyAuZ2xvc3NhcnksIHRoZSBmb290ZXIgZ2xvc3NhcnkgaXMgI2dsb3NzYXJ5ICovXFxuLmdsb3NzYXJ5LCAuZ2xvc3NhcnkgKiB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uZ2xvc3NhcnkgcCB7XFxuIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jY29kZXBhZ2UgPiBkaXYsICNjb2RlcGFnZSBmb3JtID4gZGl2LCAjanVzdGNzcyBkaXYgY29kZSB7XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzYXNzbWFwID4gZGl2LCAjanVzdGNzcyA+IGRpdiB7XFxuIGJhY2tncm91bmQ6IGJsYWNrO1xcbiBjb2xvcjogd2hpdGU7XFxuIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuI2p1c3Rjc3MgZGl2IGNvZGUsICNzYXNzbWFwIGRpdiBjb2RlIHtcXG4gY29sb3I6IHdoaXRlO1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbi8qIFtzdGF0ZW1lbnRJRF0udHN4ICovXFxuI3JlYWRlciAubWV0YWRhdGEge1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbiNyZWFkZXIge1xcbiBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbiNyZWFkZXIgI3N0YXRlYm94IHtcXG4gcGFkZGluZzogMS4zcmVtO1xcbn1cXG5cXG4jcmVhZGVyICNuYXYge1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxuIGJvdHRvbTogNXZoO1xcbiByaWdodDogMDtcXG59XFxuXFxuI3JlYWRlciAuc3RhdGVtZW50IHtcXG4gb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiBoZWlnaHQ6IDgwdmg7XFxuIHdpZHRoOiA3MHZ3O1xcbiBsZWZ0OiA1dnc7XFxufVxcblxcbiNjb2RlciB7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gcmlnaHQ6IDA7XFxuIHRvcDogMDtcXG4gd2lkdGg6IDI1dnc7XFxuIGZvbnQtc2l6ZTogMjNweDtcXG59XFxuXFxuI2NvZGVwaWNrIHtcXG4gcG9zaXRpb246IGZpeGVkO1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiB0b3A6IDA7XFxufVxcblxcbiNjb2RlcGljayBzZWxlY3Qge1xcbiBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uZmxhZ3RyYWNrZXIge1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxuIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gbWFyZ2luLXRvcDogMzB2aDtcXG4gd2lkdGg6IDI1dnc7XFxuIG1hcmdpbi1ib3R0b206IDIwdmg7XFxuIHJpZ2h0OiA1cHg7XFxufVxcblxcbmRpdiNkZWZpbml0aW9ucyB7XFxuIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuZGl2I2RlZmluaXRpb25zIHAsIGRpdiNkZWZpbml0aW9ucyBwICoge1xcbiBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2NvZGVyIHNlbGVjdCB7XFxuIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCOztBQUVyQjtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1oscUhBQXFIO0FBQ3RIOzs7QUFHQTs7O0VBR0U7O0FBRUY7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDVixTQUFTO0NBQ1QsUUFBUTtDQUNSLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0FBQ0EseUJBQXlCO0NBQ3hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztBQUNmOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBLGVBQWU7O0FBRWY7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxzREFBc0Q7QUFDdkQ7O0FBRUE7QUFDQSwwQkFBMEI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBLDZDQUE2QztBQUM3QywrQkFBK0Isb0NBQW9DLEVBQUU7QUFDckUsNkJBQTZCLG9DQUFvQyxFQUFFO0FBQ25FLGlDQUFpQyxvQ0FBb0MsRUFBRTtBQUN2RSxpQkFBaUIsb0NBQW9DLEVBQUU7QUFDdkQsbUJBQW1CLG9DQUFvQyxFQUFFO0FBQ3pELG1CQUFtQixvQ0FBb0MsRUFBRTtBQUN6RCxtQkFBbUIsb0NBQW9DLEVBQUU7QUFDekQsMkJBQTJCLG9DQUFvQyxFQUFFO0FBQ2pFLGlDQUFpQyxvQ0FBb0MsRUFBRTtBQUN2RSw2QkFBNkIsb0NBQW9DLEVBQUU7QUFDbkUsaUJBQWlCLG9DQUFvQyxFQUFFOztBQUV2RCw2SEFBNkg7O0FBRTdILG1CQUFtQjtBQUNuQjtDQUNDLGtCQUFrQjtDQUNsQixzRUFBc0U7Q0FDdEUsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWix5Q0FBeUM7QUFDMUMsd0NBQXdDO0NBQ3ZDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLG9FQUFvRTtBQUNyRTs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsV0FBVztBQUNaOztBQUVBLCtCQUErQjtBQUMvQixnRkFBZ0Y7QUFDaEY7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixzREFBc0Q7QUFDdkQ7O0FBRUEsc0JBQXNCO0FBQ3RCO0NBQ0Msc0RBQXNEO0FBQ3ZEOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0NBQ1gsUUFBUTtBQUNUOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsU0FBUztBQUNWOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixNQUFNO0NBQ04sV0FBVztDQUNYLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLE1BQU07QUFDUDs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCYXNpYyBmb3JtYXR0aW5nICovXFxuXFxuKiB7XFxuIGZvbnQtc2l6ZTogMjhweDtcXG4gY29sb3I6IGJsYWNrO1xcbiBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi8qYm9keSA+ICo6bm90KCNuYXYpLCBib2R5Om5vdCgjbmF2KSwgYm9keTpub3QoVGFibGUpLCBib2R5IDpub3QoVGFibGUpIHtcXG4gbWF4LXdpZHRoOiA4MCU7XFxuIG1hcmdpbjogMCBhdXRvO1xcbn0qL1xcblxcbi5mZWV0IHtcXG4gd2lkdGg6IDEwMCU7XFxuIGhlaWdodDogNXZoO1xcbiB6LWluZGV4OiAyO1xcbiBib3R0b206IDA7XFxuIHJpZ2h0OiAwO1xcbiBsZWZ0OiAwO1xcbiBvdmVyZmxvdy14OiBoaWRkZW47XFxuIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4jY29kZWJvb2sge1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gei1pbmRleDogMztcXG59XFxuXFxuI2dsYWJsZSB7XFxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogSW5jcmVhc2Ugb2YgZW1waGFzaXMgKi9cXG5cXG5kaXYge1xcbi8qIGJhY2tncm91bmQ6ICNlZmVmZWY7ICovXFxuIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnN0YXRlbWVudCwgbWFpbiAuc3RhdGVtZW50IHtcXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG59XFxuXFxuLnN0YXRlbWVudCwgZGV0YWlscyB7XFxuIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4uc3RhdGVtZW50IHtcXG4gbGVmdDogMTB2dztcXG4gd2lkdGg6IDYwJTtcXG59XFxuXFxuLnN0YXRlbWVudCAubWV0YWRhdGEsIC5zdGF0ZWJveCwgc3VtbWFyeSB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdGVib3gge1xcbiBwYWRkaW5nOiAwLjVyZW07XFxuIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi8qIEhpZ2hsaWdodHMgKi9cXG5cXG4qID4gbWFyayB7XFxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubWFyaywgbWFyayAqIHtcXG4gZm9udC1mYW1pbHk6ICdWaWN0b3IgTW9ubycsICdDb3VyaWVyIFByaW1lJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5tYXJrIHtcXG4vKiBmb250LXdlaWdodDogbGlnaHRlcjsgKi9cXG4gZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5tYXJrID4gYiB7XFxuIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogUkVQTEFDRSBUSElTIFNFQ1RJT04gV0hFTiBZT1UgSEFWRSBDT0RFUyAqL1xcbi5leGFtcGxlQ29kZSwgLmV4YW1wbGVDb2RlICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmZmVlICFpbXBvcnRhbnQ7IH1cXG4uZXhhbXBsZVR3bywgLmV4YW1wbGVUd28gKiB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZWUgIWltcG9ydGFudDsgfVxcbi5leGFtcGxlVGhyZWUsIC5leGFtcGxlVGhyZWUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlZWZmZmYgIWltcG9ydGFudDsgfVxcbi50ZXN0LCAudGVzdCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y2YTRjNCAhaW1wb3J0YW50OyB9XFxuLnRlc3QyLCAudGVzdDIgKiB7IGJhY2tncm91bmQtY29sb3I6ICNlNWEwYzkgIWltcG9ydGFudDsgfVxcbi50ZXN0MywgLnRlc3QzICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZiN2YzICFpbXBvcnRhbnQ7IH1cXG4udGVzdDQsIC50ZXN0NCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjFkNCAhaW1wb3J0YW50OyB9XFxuLmlucHV0VGVzdCwgLmlucHV0VGVzdCAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2VmZmZjNCAhaW1wb3J0YW50OyB9XFxuLnNob3dpbmdQZXRlciwgLnNob3dpbmdQZXRlciAqIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZmJjMyAhaW1wb3J0YW50OyB9XFxuLkNocm9tZVRlc3QsIC5DaHJvbWVUZXN0ICogeyBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RiMWZjICFpbXBvcnRhbnQ7IH1cXG4uYmx1ZSwgLmJsdWUgKiB7IGJhY2tncm91bmQtY29sb3I6ICNjN2Y5ZmMgIWltcG9ydGFudDsgfVxcblxcbi8qIFxcXCIhaW1wb3J0YW50XFxcIiBpcyBnZW5lcmFsbHkgY29uc2lkZXJlZCBiYWQgcHJhY3RpY2UsIGJ1dCB3YXMgbmVjZXNzYXJ5IHRvIG92ZXJyaWRlIGV2ZXJ5IG90aGVyIHNvdXJjZSBvZiBiYWNrZ3JvdW5kIGNvbG9yLiAqL1xcblxcbi8qIGFkZCBhIHRvb2x0aXA6ICovIFxcbm1hcmsgLnRvbHRpcCwgbWFyayArIC50b2x0aXAge1xcbiB2aXNpYmlsaXR5OiBoaWRkZW47XFxuIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuIGZvbnQtc2l6ZTogMC43cmVtO1xcbiB3aWR0aDogMjAwcHg7XFxuIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xcbi8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7ICovXFxuIGNvbG9yOiAjZjBmMGYwO1xcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gcGFkZGluZzogNXB4IDA7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gei1pbmRleDogMTtcXG4gdG9wOiAxNTAlO1xcbiByaWdodDogNTAlO1xcbiBtYXJnaW4tcmlnaHQ6IC0xMDBweDtcXG59XFxuXFxubWFyayAudG9sdGlwOjphZnRlciB7XFxuIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuIGJvdHRvbTogMTAwJTtcXG4gcmlnaHQ6IDUwJTtcXG4gbWFyZ2luLXJpZ2h0OiAtNXB4O1xcbiBib3JkZXItd2lkdGg6IDVweDtcXG4gYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDAsIDAsIDAuNSkgdHJhbnNwYXJlbnQ7XFxufVxcblxcbm1hcms6aG92ZXIgLnRvbHRpcCwgLnRvbHRpcDpob3ZlciB7XFxuIHZpc2liaWxpdHk6IHZpc2libGU7XFxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gei1pbmRleDogMTA7XFxufVxcblxcbi8qIEdsb3NzYXJ5IGluIGEgZGV0YWlscyBwYW5lICovXFxuLyogTm90ZTogdGhlICdkZXRhaWxzJyBnbG9zc2FyeSBpcyAuZ2xvc3NhcnksIHRoZSBmb290ZXIgZ2xvc3NhcnkgaXMgI2dsb3NzYXJ5ICovXFxuLmdsb3NzYXJ5LCAuZ2xvc3NhcnkgKiB7XFxuIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uZ2xvc3NhcnkgcCB7XFxuIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jY29kZXBhZ2UgPiBkaXYsICNjb2RlcGFnZSBmb3JtID4gZGl2LCAjanVzdGNzcyBkaXYgY29kZSB7XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzYXNzbWFwID4gZGl2LCAjanVzdGNzcyA+IGRpdiB7XFxuIGJhY2tncm91bmQ6IGJsYWNrO1xcbiBjb2xvcjogd2hpdGU7XFxuIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuI2p1c3Rjc3MgZGl2IGNvZGUsICNzYXNzbWFwIGRpdiBjb2RlIHtcXG4gY29sb3I6IHdoaXRlO1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbi8qIFtzdGF0ZW1lbnRJRF0udHN4ICovXFxuI3JlYWRlciAubWV0YWRhdGEge1xcbiBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgJ0NvdXJpZXIgUHJpbWUnLCBtb25vc3BhY2U7XFxufVxcblxcbiNyZWFkZXIge1xcbiBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbiNyZWFkZXIgI3N0YXRlYm94IHtcXG4gcGFkZGluZzogMS4zcmVtO1xcbn1cXG5cXG4jcmVhZGVyICNuYXYge1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxuIGJvdHRvbTogNXZoO1xcbiByaWdodDogMDtcXG59XFxuXFxuI3JlYWRlciAuc3RhdGVtZW50IHtcXG4gb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiBoZWlnaHQ6IDgwdmg7XFxuIHdpZHRoOiA3MHZ3O1xcbiBsZWZ0OiA1dnc7XFxufVxcblxcbiNjb2RlciB7XFxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gcmlnaHQ6IDA7XFxuIHRvcDogMDtcXG4gd2lkdGg6IDI1dnc7XFxuIGZvbnQtc2l6ZTogMjNweDtcXG59XFxuXFxuI2NvZGVwaWNrIHtcXG4gcG9zaXRpb246IGZpeGVkO1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiB0b3A6IDA7XFxufVxcblxcbiNjb2RlcGljayBzZWxlY3Qge1xcbiBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uZmxhZ3RyYWNrZXIge1xcbiBwb3NpdGlvbjogZml4ZWQ7XFxuIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gbWFyZ2luLXRvcDogMzB2aDtcXG4gd2lkdGg6IDI1dnc7XFxuIG1hcmdpbi1ib3R0b206IDIwdmg7XFxuIHJpZ2h0OiA1cHg7XFxufVxcblxcbmRpdiNkZWZpbml0aW9ucyB7XFxuIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuZGl2I2RlZmluaXRpb25zIHAsIGRpdiNkZWZpbml0aW9ucyBwICoge1xcbiBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI2NvZGVyIHNlbGVjdCB7XFxuIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/styles.css\n");

/***/ })

});