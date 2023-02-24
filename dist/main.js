/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Medium.ttf */ "./src/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: roboto-black;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Form */\n\n/* .is-blurred {\n    filter: blur(5px);\n  } */\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.649);\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px;\n  width: 420px;\n  height: 300px;\n  z-index: 5;\n  border-radius: 20px;\n  background-color: #f0eef1;\n  backdrop-filter: blur(15px);\n}\n\n.remove-options {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n}\n\n#delete,\n#close {\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.form-column-1 {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\ntextarea {\n  resize: none;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n}\n\n.task-title {\n  display: flex;\n  flex-direction: column;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-column-2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.column-2-option {\n  display: flex;\n  flex-direction: column;\n}\n\n#submit {\n  border-radius: 50px;\n  padding: 10px;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n  background-color: white;\n  color: #171717;\n  border: 0;\n}\n#submit:hover {\n  background-color: rgb(195, 195, 195);\n  color: white;\n}\n\n#submit:active {\n  background-color: white;\n  color: rgb(195, 195, 195);\n}\n\n/* Hover animations */\n.grow {\n  transition: all 0.2s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.5);\n}\n\n.grow-2 {\n  transition: all 0.1s ease-in-out;\n}\n\n.grow-2:hover {\n  transform: scale(1.1);\n}\n/* End of hover animations */\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  font-family: \"roboto-black\";\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 84px 1fr;\n  grid-template-columns: 290px 1fr;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Top bar */\n#top-bar {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: fit-content;\n  z-index: 3;\n  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.16);\n  background-color: white;\n}\n\n.top-bar-left {\n  display: flex;\n  gap: 20px;\n}\n\n.side-bar-icon,\n.dark-light-mode,\n.info-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.info {\n  width: 40px;\n  height: 40px;\n}\n\n.info .info-container {\n  visibility: hidden;\n  position: absolute;\n  top: 105px;\n  right: 20px;\n  background-color: black;\n  color: white;\n  width: 400px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: justify;\n  line-height: 25px;\n  font-size: 1.25rem;\n  /* z-index: 100; */\n}\n\n.info:hover .info-container {\n  visibility: visible;\n}\n\n/* Side bar */\n#side-bar {\n  position: relative;\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  font-size: 1.25rem;\n  z-index: 2;\n  width: 250px;\n  transition: padding-left 0.2s ease-in-out;\n  background-color: white;\n}\n\n.today-late {\n  white-space: nowrap;\n  width: 250px;\n  overflow: hidden;\n}\n\n.today,\n.late,\n.task-categories-header {\n  display: flex;\n  align-items: center;\n}\n\n.today,\n.late {\n  cursor: pointer;\n  gap: 5px;\n  padding-left: 10px;\n}\n\n.today-icon,\n.late-icon,\n.plus-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n\n.task-categories-header {\n  justify-content: space-between;\n}\n\nbutton.add-task-category {\n  border: 0;\n  padding: 0;\n  background-color: white;\n  cursor: pointer;\n}\n\n.task-category-icon-color {\n  width: 1rem;\n  height: 1.3rem;\n  border: 0;\n  padding: 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.task-category-icon-color:hover {\n  transform: scale(1.2);\n}\n\n.task-category .remove-task-category {\n  visibility: hidden;\n  margin-left: auto;\n  width: 1.5rem;\n}\n\n.task-category:hover .remove-task-category {\n  visibility: visible;\n}\n\n.remove-task-category:hover {\n  transform: scale(1.2);\n}\n\n.task-category-name:hover {\n  transform: scale(1.2);\n}\n\n.new-task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-left: 5px;\n}\n\n/* Task categories, added by the user */\n.task-category {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  padding: 5px;\n}\n\n/* Main content, populated by other modules */\n#main-content {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #f0eef1;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n\n/* No side bar if page loads while window size is small*/\n@media only screen and (max-width: 799px) {\n  #main-content {\n    grid-column: 1 / 3;\n  }\n  #side-bar {\n    width: 0;\n    padding: 0;\n  }\n\n  .today-late {\n    width: 0;\n  }\n\n  .task-categories {\n    width: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,4CAAmC;AACrC;;AAEA,SAAS;;AAET;;KAEK;;AAEL;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,YAAY;EACZ,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,SAAS;AACX;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,uBAAuB;EACvB,cAAc;EACd,SAAS;AACX;AACA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA,qBAAqB;AACrB;EACE,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;AACA,4BAA4B;;AAE5B;;EAEE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,gCAAgC;EAChC,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,yCAAyC;EACzC,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,aAAa;AACb;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,yCAAyC;EACzC,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,QAAQ;EACR,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA,uCAAuC;AACvC;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA,6CAA6C;AAC7C;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA,wDAAwD;AACxD;EACE;IACE,kBAAkB;EACpB;EACA;IACE,QAAQ;IACR,UAAU;EACZ;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,QAAQ;EACV;AACF","sourcesContent":["@font-face {\n  font-family: roboto-black;\n  src: url(./fonts/Roboto-Medium.ttf);\n}\n\n/* Form */\n\n/* .is-blurred {\n    filter: blur(5px);\n  } */\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.649);\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px;\n  width: 420px;\n  height: 300px;\n  z-index: 5;\n  border-radius: 20px;\n  background-color: #f0eef1;\n  backdrop-filter: blur(15px);\n}\n\n.remove-options {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n}\n\n#delete,\n#close {\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.form-column-1 {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\ntextarea {\n  resize: none;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n}\n\n.task-title {\n  display: flex;\n  flex-direction: column;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-column-2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.column-2-option {\n  display: flex;\n  flex-direction: column;\n}\n\n#submit {\n  border-radius: 50px;\n  padding: 10px;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n  background-color: white;\n  color: #171717;\n  border: 0;\n}\n#submit:hover {\n  background-color: rgb(195, 195, 195);\n  color: white;\n}\n\n#submit:active {\n  background-color: white;\n  color: rgb(195, 195, 195);\n}\n\n/* Hover animations */\n.grow {\n  transition: all 0.2s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.5);\n}\n\n.grow-2 {\n  transition: all 0.1s ease-in-out;\n}\n\n.grow-2:hover {\n  transform: scale(1.1);\n}\n/* End of hover animations */\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  font-family: \"roboto-black\";\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 84px 1fr;\n  grid-template-columns: 290px 1fr;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Top bar */\n#top-bar {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: fit-content;\n  z-index: 3;\n  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.16);\n  background-color: white;\n}\n\n.top-bar-left {\n  display: flex;\n  gap: 20px;\n}\n\n.side-bar-icon,\n.dark-light-mode,\n.info-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.info {\n  width: 40px;\n  height: 40px;\n}\n\n.info .info-container {\n  visibility: hidden;\n  position: absolute;\n  top: 105px;\n  right: 20px;\n  background-color: black;\n  color: white;\n  width: 400px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: justify;\n  line-height: 25px;\n  font-size: 1.25rem;\n  /* z-index: 100; */\n}\n\n.info:hover .info-container {\n  visibility: visible;\n}\n\n/* Side bar */\n#side-bar {\n  position: relative;\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  font-size: 1.25rem;\n  z-index: 2;\n  width: 250px;\n  transition: padding-left 0.2s ease-in-out;\n  background-color: white;\n}\n\n.today-late {\n  white-space: nowrap;\n  width: 250px;\n  overflow: hidden;\n}\n\n.today,\n.late,\n.task-categories-header {\n  display: flex;\n  align-items: center;\n}\n\n.today,\n.late {\n  cursor: pointer;\n  gap: 5px;\n  padding-left: 10px;\n}\n\n.today-icon,\n.late-icon,\n.plus-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n\n.task-categories-header {\n  justify-content: space-between;\n}\n\nbutton.add-task-category {\n  border: 0;\n  padding: 0;\n  background-color: white;\n  cursor: pointer;\n}\n\n.task-category-icon-color {\n  width: 1rem;\n  height: 1.3rem;\n  border: 0;\n  padding: 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.task-category-icon-color:hover {\n  transform: scale(1.2);\n}\n\n.task-category .remove-task-category {\n  visibility: hidden;\n  margin-left: auto;\n  width: 1.5rem;\n}\n\n.task-category:hover .remove-task-category {\n  visibility: visible;\n}\n\n.remove-task-category:hover {\n  transform: scale(1.2);\n}\n\n.task-category-name:hover {\n  transform: scale(1.2);\n}\n\n.new-task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-left: 5px;\n}\n\n/* Task categories, added by the user */\n.task-category {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  padding: 5px;\n}\n\n/* Main content, populated by other modules */\n#main-content {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #f0eef1;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n\n/* No side bar if page loads while window size is small*/\n@media only screen and (max-width: 799px) {\n  #main-content {\n    grid-column: 1 / 3;\n  }\n  #side-bar {\n    width: 0;\n    padding: 0;\n  }\n\n  .today-late {\n    width: 0;\n  }\n\n  .task-categories {\n    width: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonSideBar": () => (/* binding */ buttonSideBar),
/* harmony export */   "clearTaskCategories": () => (/* binding */ clearTaskCategories),
/* harmony export */   "clearTaskCategoryContent": () => (/* binding */ clearTaskCategoryContent),
/* harmony export */   "dashboard": () => (/* binding */ dashboard),
/* harmony export */   "displayTaskCategories": () => (/* binding */ displayTaskCategories),
/* harmony export */   "highlightSelectedTaskCategory": () => (/* binding */ highlightSelectedTaskCategory),
/* harmony export */   "removeHighlightTaskCategories": () => (/* binding */ removeHighlightTaskCategories),
/* harmony export */   "taskCategoryContent": () => (/* binding */ taskCategoryContent),
/* harmony export */   "windowResizeSideBar": () => (/* binding */ windowResizeSideBar)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _images_tally_mark_3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/tally-mark-3.png */ "./src/images/tally-mark-3.png");
/* harmony import */ var _images_sun_hollow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/sun-hollow.svg */ "./src/images/sun-hollow.svg");
/* harmony import */ var _images_info_dark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/info-dark.png */ "./src/images/info-dark.png");
/* harmony import */ var _images_today_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/today.png */ "./src/images/today.png");
/* harmony import */ var _images_late_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/late.png */ "./src/images/late.png");
/* harmony import */ var _images_plus_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/plus.png */ "./src/images/plus.png");
/* harmony import */ var _images_trash_can_dark_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/trash-can-dark.svg */ "./src/images/trash-can-dark.svg");
// Imports









// dashboard function (for loading the side and top bars)
function dashboard() {
  // NOTE: A grid system is to be created with this function. The side and top bars will be populated with elements,
  //       and the main section (column 2 and row 2) will be left as an html element that contains an image, which is
  //       to be replaced and filled by the other functions
  //       ie: today function, late function, and taskCategory function
  // NOTE: This function will be called again when a taskCategory is either added or removed, because this needs to be
  //       displayed in the side bar

  // declare elements
  const body = document.querySelector("body");
  const container = document.querySelector("#container");
  const topBar = document.createElement("div");
  const topBarLeft = document.createElement("div");
  const sideBarIcon = document.createElement("img");
  const darkLightMode = document.createElement("img");
  const topBarRight = document.createElement("div");
  const info = document.createElement("div");
  const infoIcon = document.createElement("img");
  const infoContainer = document.createElement("div");
  const infoContainerTxt1 = document.createTextNode(
    "This is a todo list application that allows you to record tasks, keep track of them, and complete them. Create a task category, fill it with tasks, and keep track of them through the task category tab, or through the today and late tabs."
  );
  const newLine1 = document.createElement("br");
  const newLine2 = document.createElement("br");
  const infoContainerTxt2 = document.createTextNode(
    "This website was created by Daniel Ballerini, with help from the Odin Project."
  );
  const sideBar = document.createElement("div");
  const todayLate = document.createElement("div");
  const today = document.createElement("div");
  const todayIcon = document.createElement("img");
  const todayTxtContainer = document.createElement("div");
  const todayTxt = document.createTextNode("Today");
  const late = document.createElement("div");
  const lateIcon = document.createElement("img");
  const lateTxtContainer = document.createElement("div");
  const lateTxt = document.createTextNode("Late");
  const taskCategories = document.createElement("div");
  const taskCategoriesHeader = document.createElement("div");
  const taskCategoriesHeaderTxtContainer = document.createElement("div");
  const taskCategoriesHeaderTxt = document.createTextNode("Task Categories");
  const addTaskCategory = document.createElement("button");
  const plusIcon = document.createElement("img");
  const newTaskCategories = document.createElement("div");

  //   const taskCategory = document.createElement("div");
  //   const taskCategoryIcon = document.createElement("img");
  //   const taskCategoryTxtContainer = document.createElement("div");
  //   const TaskCategoryTxt = document.createTextNode("General");

  const mainContent = document.createElement("div");

  // add attributes
  container.setAttribute("id", "container");
  topBar.setAttribute("id", "top-bar");
  topBarLeft.setAttribute("class", "top-bar-left");
  sideBarIcon.setAttribute("class", "side-bar-icon grow");
  sideBarIcon.setAttribute("src", _images_tally_mark_3_png__WEBPACK_IMPORTED_MODULE_1__);
  sideBarIcon.setAttribute("alt", "side bar icon");
  darkLightMode.setAttribute("class", "dark-light-mode grow");
  darkLightMode.setAttribute("src", _images_sun_hollow_svg__WEBPACK_IMPORTED_MODULE_2__);
  darkLightMode.setAttribute("alt", "light mode dark mode icon");
  topBarRight.setAttribute("class", "top-bar-right");
  info.setAttribute("class", "info");
  infoIcon.setAttribute("class", "info-icon");
  infoIcon.setAttribute("src", _images_info_dark_png__WEBPACK_IMPORTED_MODULE_3__);
  infoIcon.setAttribute("alt", "info icon");
  infoContainer.setAttribute("class", "info-container");
  sideBar.setAttribute("id", "side-bar");
  todayLate.setAttribute("class", "today-late");
  today.setAttribute("class", "today grow-2");
  todayIcon.setAttribute("class", "today-icon");
  todayIcon.setAttribute("src", _images_today_png__WEBPACK_IMPORTED_MODULE_4__);
  todayIcon.setAttribute("alt", "today option icon");
  late.setAttribute("class", "late grow-2");
  lateIcon.setAttribute("class", "late-icon");
  lateIcon.setAttribute("src", _images_late_png__WEBPACK_IMPORTED_MODULE_5__);
  lateIcon.setAttribute("alt", "late option icon");
  taskCategories.setAttribute("class", "task-categories");
  taskCategoriesHeader.setAttribute("class", "task-categories-header");
  addTaskCategory.setAttribute("class", "add-task-category");
  plusIcon.setAttribute("class", "plus-icon grow");
  plusIcon.setAttribute("src", _images_plus_png__WEBPACK_IMPORTED_MODULE_6__);
  plusIcon.setAttribute("alt", "add task category icon");
  newTaskCategories.setAttribute("class", "new-task-categories");

  //   taskCategory.setAttribute("class", "task-category grow-2");
  //   taskCategoryIcon.setAttribute("class", "task-category-icon");
  //   taskCategoryIcon.setAttribute("src", circleDark);
  //   taskCategoryIcon.setAttribute("alt", "task category icon");

  mainContent.setAttribute("id", "main-content");

  // append elements to dom
  body.appendChild(container);
  container.appendChild(topBar);
  topBar.appendChild(topBarLeft);
  topBarLeft.appendChild(sideBarIcon);
  topBarLeft.appendChild(darkLightMode);
  topBar.appendChild(topBarRight);
  topBarRight.appendChild(info);
  info.appendChild(infoIcon);
  info.appendChild(infoContainer);
  infoContainer.appendChild(infoContainerTxt1);
  infoContainer.appendChild(newLine1);
  infoContainer.appendChild(newLine2);
  infoContainer.appendChild(infoContainerTxt2);
  container.appendChild(sideBar);
  sideBar.appendChild(todayLate);
  todayLate.appendChild(today);
  today.appendChild(todayIcon);
  today.appendChild(todayTxtContainer);
  todayTxtContainer.appendChild(todayTxt);
  todayLate.appendChild(late);
  late.appendChild(lateIcon);
  late.appendChild(lateTxtContainer);
  lateTxtContainer.appendChild(lateTxt);
  sideBar.appendChild(taskCategories);
  taskCategories.appendChild(taskCategoriesHeader);
  taskCategoriesHeader.appendChild(taskCategoriesHeaderTxtContainer);
  taskCategoriesHeaderTxtContainer.appendChild(taskCategoriesHeaderTxt);
  taskCategoriesHeader.appendChild(addTaskCategory);
  addTaskCategory.appendChild(plusIcon);
  taskCategories.appendChild(newTaskCategories);
  //   newTaskCategories.appendChild(taskCategory);
  //   taskCategory.appendChild(taskCategoryIcon);
  //   taskCategory.appendChild(taskCategoryTxtContainer);
  //   taskCategoryTxtContainer.appendChild(TaskCategoryTxt);
  container.appendChild(mainContent);

  const mainContentPriority = document.querySelector(
    "#container > #main-content"
  ); // This variable exists to override the styling of the mainContent
}

// Window resize sidebar function that retracts and expands the side bar depending on window size
function windowResizeSideBar(windowResizeDirection) {
  const sideBar = document.querySelector("#side-bar");
  const mainContentPriority = document.querySelector(
    "#container > #main-content"
  );
  const mainContent = document.querySelector("#main-content");
  const todayLate = document.querySelector(".today-late");
  const taskCategories = document.querySelector(".task-categories");

  if (
    document.body.offsetWidth < 800 &&
    windowResizeDirection < 0 &&
    sideBar.offsetWidth === 290
  ) {
    mainContent.style.gridColumn = "1 / 3";
    sideBar.style.width = "0";
    sideBar.style.padding = "0";
    todayLate.style.width = "0";
    taskCategories.style.width = "0";
  }
  if (document.body.offsetWidth > 800 && windowResizeDirection > 0) {
    mainContentPriority.style.gridColumn = "2 / 3";
    sideBar.style.width = "250px";
    sideBar.style.padding = "20px";
    todayLate.style.width = "250px";
    taskCategories.style.width = "250px";
  }
}

// Button sidebar function that retracts and expands the side bar when the button is pressed
function buttonSideBar(event) {
  const sideBar = document.querySelector("#side-bar");
  const mainContentPriority = document.querySelector(
    "#container > #main-content"
  );
  const mainContent = document.querySelector("#main-content");
  const todayLate = document.querySelector(".today-late");
  const taskCategories = document.querySelector(".task-categories");

  if (event.target.matches(".side-bar-icon")) {
    if (sideBar.offsetWidth === 0) {
      if (document.body.offsetWidth > 800) {
        mainContentPriority.style.gridColumn = "2 / 3";
      }
      sideBar.style.width = "250px";
      sideBar.style.padding = "20px";
      todayLate.style.width = "250px";
      taskCategories.style.width = "250px";
    }
    if (sideBar.offsetWidth === 290) {
      mainContent.style.gridColumn = "1 / 3";
      sideBar.style.width = "0";
      sideBar.style.padding = "0";
      todayLate.style.width = "0";
      taskCategories.style.width = "0";
    }
  }
}

// Display task categories in side bar function
function displayTaskCategories() {
  for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_0__.taskCategoryLibrary.length; i++) {
    // declare elements
    const newTaskCategories = document.querySelector(".new-task-categories");
    const taskCategory = document.createElement("div");
    const taskCategoryIconColor = document.createElement("input");
    const taskCategoryTxtContainer = document.createElement("div");
    const TaskCategoryTxt = document.createTextNode(
      _logic__WEBPACK_IMPORTED_MODULE_0__.taskCategoryLibrary[i].getTitle()
    );
    // const removeTaskCategory = document.createElement("div");
    const removeTaskCategoryImg = document.createElement("img");

    // add attributes
    taskCategory.classList.add("task-category", i, "grow-2");
    taskCategoryIconColor.classList.add("task-category-icon-color", i);
    taskCategoryIconColor.setAttribute("type", "color");
    taskCategoryIconColor.setAttribute(
      "value",
      _logic__WEBPACK_IMPORTED_MODULE_0__.taskCategoryLibrary[i].getColor()
    );
    taskCategoryTxtContainer.classList.add("task-category-name", i);
    taskCategoryTxtContainer.setAttribute(
      "onclick",
      "this.contentEditable=true"
    );
    taskCategoryTxtContainer.setAttribute(
      "onblur",
      "this.contentEditable=false"
    );
    removeTaskCategoryImg.classList.add("remove-task-category", i);
    removeTaskCategoryImg.setAttribute("src", _images_trash_can_dark_svg__WEBPACK_IMPORTED_MODULE_7__);

    // append elements to dom
    newTaskCategories.appendChild(taskCategory);
    taskCategory.appendChild(taskCategoryIconColor);
    taskCategory.appendChild(taskCategoryTxtContainer);
    taskCategoryTxtContainer.appendChild(TaskCategoryTxt);
    taskCategory.appendChild(removeTaskCategoryImg);
  }
}

// Clear task categories function
function clearTaskCategories() {
  const newTaskCategories = document.querySelector(".new-task-categories");
  newTaskCategories.querySelectorAll("*").forEach((n) => n.remove());
}

// taskCategoryContent function (for loading the content of a taskCategory that has been selected)
function taskCategoryContent(taskCategoryIndex) {
  // declare elements
  const mainContent = document.querySelector("#main-content");
  const content = document.createElement("div");
  const addTaskButtonWrapper = document.createElement("div");
  const addTaskButton = document.createElement("button");
  const addTaskButtonTxt = document.createTextNode("+ Add Task");
  const taskCards = document.createElement("div");

  // add attributes
  content.classList.add("task-category-content", taskCategoryIndex);
  addTaskButtonWrapper.setAttribute("class", "add-task-button-wrapper");
  addTaskButton.setAttribute("class", "add-task-button");
  taskCards.setAttribute("class", "task-cards");

  // append elements to dom
  mainContent.appendChild(content);
  content.appendChild(addTaskButtonWrapper);
  addTaskButtonWrapper.appendChild(addTaskButton);
  addTaskButton.appendChild(addTaskButtonTxt);
  content.appendChild(taskCards);
}

// Highlight selected task category function
function highlightSelectedTaskCategory(selectedElementClassIndex) {
  //   const selectedElementClassIndex = event.target.classList[1];
  //   console.log(selectedElementClassIndex);
  //   console.log(`task-category ${selectedElementClassIndex}`);

  const selectedTaskCategory = document.getElementsByClassName(
    `task-category ${selectedElementClassIndex}`
  );
  console.log(selectedTaskCategory[0]);
  console.log(selectedTaskCategory[0].style.backgroundColor);
  selectedTaskCategory[0].style.backgroundColor = "#f0eef1";
}

// Remove highlight from task categories function
function removeHighlightTaskCategories() {
  const newTaskCategories = document.querySelector(".new-task-categories");
  for (let i = 0; i < newTaskCategories.children.length; i++) {
    if (newTaskCategories.children[i].style.backgroundColor !== "") {
      newTaskCategories.children[i].style.backgroundColor = "white";
    }
  }
}

// Clear task category content function
function clearTaskCategoryContent() {
  const mainContent = document.querySelector("#main-content");
  mainContent.querySelectorAll("*").forEach((n) => n.remove());
}

// Modal window function
// declare elements
// add attributes
// append elements to dom (sibling of #main-content element)

// today function (for loading the today tab which contains all tasks that are due today)
// declare elements
// add attributes
// append elements to dom

// late function (for loading the late tab which contains all tasks that were due before the present date and have not been completed yet)
// declare elements
// add attributes
// append elements to dom




/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectTaskCategory": () => (/* binding */ SelectTaskCategory),
/* harmony export */   "addNewTaskCategory": () => (/* binding */ addNewTaskCategory),
/* harmony export */   "checkTaskCategoryLibraryFull": () => (/* binding */ checkTaskCategoryLibraryFull),
/* harmony export */   "editTaskCategoryIconColor": () => (/* binding */ editTaskCategoryIconColor),
/* harmony export */   "editTaskCategoryName": () => (/* binding */ editTaskCategoryName),
/* harmony export */   "findTaskCategoryIndexIsSelected": () => (/* binding */ findTaskCategoryIndexIsSelected),
/* harmony export */   "getDirectionOfWindowResize": () => (/* binding */ getDirectionOfWindowResize),
/* harmony export */   "removeTaskCategory": () => (/* binding */ removeTaskCategory),
/* harmony export */   "removeTaskCategorySelection": () => (/* binding */ removeTaskCategorySelection),
/* harmony export */   "taskCategoryFactory": () => (/* binding */ taskCategoryFactory),
/* harmony export */   "taskCategoryLibrary": () => (/* binding */ taskCategoryLibrary)
/* harmony export */ });
// taskCategory factory function (creates task category objects, which will contain tasks)
// properties: title (received from user form), color (received from user form), array of tasks
// methods: getTitle, getColor, getTasks (get tasks from tasks array), setTitle, setColor, setTask (add task to tasks array),
function taskCategoryFactory(title, color) {
  const tasksArray = [];
  let isSelected = false;

  const getTitle = () => title;
  const getColor = () => color;
  const getTasks = () => tasksArray;
  const getIsSelected = () => isSelected;
  const setTitle = (newTitle) => (title = newTitle);
  const setColor = (newColor) => (color = newColor);
  const setTask = (newTask) => tasksArray.push(newTask);
  const setIsSelected = (booleanValue) => (isSelected = booleanValue);

  return {
    getTitle,
    getColor,
    getTasks,
    getIsSelected,
    setTitle,
    setColor,
    setTask,
    setIsSelected,
  };
}

// task factory function (creates tasks that the user creates, which will be placed in a taskCategory)
// properties: title (received from user form), description (received from user form),
//             category (received from user form), dueDate (received from user form),
//             priority (received from user form)
// methods: getTitle, getDescription, getCategory, getDueDate, getPriority
//          setTitle, setDescription, setCategory, setDueDate, setPriority

// Array that holds all task category objects
const taskCategoryLibrary = [];

// Function to check if there are five task category objects in array
function checkTaskCategoryLibraryFull() {
  if (taskCategoryLibrary.length === 5) return true;
  else return false;
}

// Edit task category name function
function editTaskCategoryName(event) {
  taskCategoryLibrary[event.target.classList[1]].setTitle(
    event.target.textContent
  );
}

// Edit task category icon color function
function editTaskCategoryIconColor(event) {
  taskCategoryLibrary[event.target.classList[1]].setColor(event.target.value);
}

// Remove task category function
function removeTaskCategory(event) {
  taskCategoryLibrary.splice(event.target.classList[1], 1);
}

// Add new task category function
function addNewTaskCategory() {
  const dummyTaskCategory = taskCategoryFactory("Category", "#000000");
  taskCategoryLibrary.push(dummyTaskCategory);
}

// Select task category function
function SelectTaskCategory(indexValue) {
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    taskCategoryLibrary[indexValue].setIsSelected(true);
  }
}

// Set the task category in the array that is found to be true to false
function removeTaskCategorySelection() {
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    if (taskCategoryLibrary[i].getIsSelected()) {
      taskCategoryLibrary[i].setIsSelected(false);
    }
  }
}

// Find and return index of task category that is selected
function findTaskCategoryIndexIsSelected() {
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    if (taskCategoryLibrary[i].getIsSelected()) {
      return i;
    }
  }
}

// today array (contains all task objects that have dueDate of todays date)

// late array (contains all task objects that have a dueDate earlier that todays date)

// setComplete function (sets task as complete and deletes it from all arrays that contain it)
// This function performs an animation before deleting it unlike the next function...

// deleteTask function (deletes task from all arrays that contains it)

// addTask function (receives data from the user form and calls the task factory function, feeding it the user parameters)
// ***This may not be needed***

// organizeTask function (sends task object to appropriate arrays)
// NOTE: Something to consider is that when a new day comes along, certain task objects will need to be automatically
//       placed into either the today array, or the late array.

// editTask function (receives data from user form, then calls task set methods to change the appropriate properties)

// changeTheme function (changes UI to dark mode or light mode )

// getDirectionOfWindowResize module (scope of this module is to determine the difference in width of window from when the user begins changing its size, in order to determine whether it is shrinking or growing)
const getDirectionOfWindowResize = (() => {
  let positionWidthLast;
  let newPosition;
  let positionWidthDifference;

  const setPositionWidthLast = (screenWidth) =>
    (positionWidthLast = screenWidth);
  const setNewPosition = (screenWidth) => (newPosition = screenWidth);
  const setPositionWidthDifference = () =>
    (positionWidthDifference = newPosition - positionWidthLast);
  const getPositionWidthDifference = () => positionWidthDifference;

  return {
    setPositionWidthLast,
    setNewPosition,
    setPositionWidthDifference,
    getPositionWidthDifference,
  };
})();




/***/ }),

/***/ "./src/fonts/Roboto-Medium.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Roboto-Medium.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

/***/ }),

/***/ "./src/images/info-dark.png":
/*!**********************************!*\
  !*** ./src/images/info-dark.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47da06c57199d9ff3a79.png";

/***/ }),

/***/ "./src/images/late.png":
/*!*****************************!*\
  !*** ./src/images/late.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "554f1e1f656a842cb291.png";

/***/ }),

/***/ "./src/images/plus.png":
/*!*****************************!*\
  !*** ./src/images/plus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da82e098c1247ee9149f.png";

/***/ }),

/***/ "./src/images/sun-hollow.svg":
/*!***********************************!*\
  !*** ./src/images/sun-hollow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3d8e77d0f79f95ade8c.svg";

/***/ }),

/***/ "./src/images/tally-mark-3.png":
/*!*************************************!*\
  !*** ./src/images/tally-mark-3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "873574653d805d51bf32.png";

/***/ }),

/***/ "./src/images/today.png":
/*!******************************!*\
  !*** ./src/images/today.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23c8827e2b841c1fe63b.png";

/***/ }),

/***/ "./src/images/trash-can-dark.svg":
/*!***************************************!*\
  !*** ./src/images/trash-can-dark.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a7b26be64c05d0f239.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation.js */ "./src/dom-manipulation.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Imports




(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.dashboard)();

// Create object for dummy task category then place in array
const dummyTaskCategory = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.taskCategoryFactory)("General", "#000000");
_logic_js__WEBPACK_IMPORTED_MODULE_1__.taskCategoryLibrary.push(dummyTaskCategory);

// Display task categories
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.displayTaskCategories)();

// Event listeners to control the flow of the retracting and expanding dashboard sidebar
const body = document.querySelector("body");
_logic_js__WEBPACK_IMPORTED_MODULE_1__.getDirectionOfWindowResize.setPositionWidthLast(document.body.offsetWidth);

window.addEventListener("resize", () => {
  _logic_js__WEBPACK_IMPORTED_MODULE_1__.getDirectionOfWindowResize.setNewPosition(document.body.offsetWidth);
  _logic_js__WEBPACK_IMPORTED_MODULE_1__.getDirectionOfWindowResize.setPositionWidthDifference();
  let windowResizeDirection =
    _logic_js__WEBPACK_IMPORTED_MODULE_1__.getDirectionOfWindowResize.getPositionWidthDifference();
  _logic_js__WEBPACK_IMPORTED_MODULE_1__.getDirectionOfWindowResize.setPositionWidthLast(document.body.offsetWidth);

  (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.windowResizeSideBar)(windowResizeDirection);
});

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.buttonSideBar)(event);
});

// Add task category event listener
const plusIcon = document.querySelector(".plus-icon");
plusIcon.addEventListener("click", () => {
  if (!(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.checkTaskCategoryLibraryFull)()) {
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.addNewTaskCategory)();
    (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.clearTaskCategories)();
    (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.displayTaskCategories)();
    if ((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.findTaskCategoryIndexIsSelected)()) {
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.highlightSelectedTaskCategory)((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.findTaskCategoryIndexIsSelected)());
    }
  }
});

// Edit task category event listener
const allTaskCategories = document.querySelectorAll(".new-task-categories");
allTaskCategories.forEach((taskCategory) => {
  taskCategory.addEventListener("input", (event) => {
    if (event.target.classList[0] === "task-category-name") {
      (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.editTaskCategoryName)(event);
    } else if (event.target.classList[0] === "task-category-icon-color") {
      (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.editTaskCategoryIconColor)(event);
    }
  });
});

// Remove task category event listener
allTaskCategories.forEach((taskCategory) => {
  taskCategory.addEventListener("click", (event) => {
    if (event.target.classList[0] === "remove-task-category") {
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.clearTaskCategoryContent)();
      (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.removeTaskCategory)(event);
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.clearTaskCategories)();
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.displayTaskCategories)();
      console.log((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.findTaskCategoryIndexIsSelected)());
      // If the task category that was removed was the one that was selected
      if ((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.findTaskCategoryIndexIsSelected)() !== undefined) {
        (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.taskCategoryContent)((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.findTaskCategoryIndexIsSelected)());
        (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.highlightSelectedTaskCategory)((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.findTaskCategoryIndexIsSelected)());
      }
    }
  });
});

// Select task category event listener
allTaskCategories.forEach((taskCategory) => {
  taskCategory.addEventListener("click", (event) => {
    if (
      event.target.classList[0] === "task-category" ||
      event.target.classList[0] === "task-category-name"
    ) {
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.removeHighlightTaskCategories)();
      (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.removeTaskCategorySelection)();
      (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.SelectTaskCategory)(event.target.classList[1]);
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.highlightSelectedTaskCategory)((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.findTaskCategoryIndexIsSelected)());
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.clearTaskCategoryContent)();
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.taskCategoryContent)((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.findTaskCategoryIndexIsSelected)());
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksOERBQTBCLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBbUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdURBQVk7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywwQkFBMEI7O0FBRTlEO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1Q0FBdUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdDQUFnQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQ0FBZ0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdDQUFnQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFjQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakpGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQVcrQjtBQWFYO0FBQ0M7O0FBRXJCLCtEQUFTOztBQUVUO0FBQ0EsMEJBQTBCLDhEQUFtQjtBQUM3QywrREFBd0I7O0FBRXhCO0FBQ0EsMkVBQXFCOztBQUVyQjtBQUNBO0FBQ0Esc0ZBQStDOztBQUUvQztBQUNBLEVBQUUsZ0ZBQXlDO0FBQzNDLEVBQUUsNEZBQXFEO0FBQ3ZEO0FBQ0EsSUFBSSw0RkFBcUQ7QUFDekQsRUFBRSxzRkFBK0M7O0FBRWpELEVBQUUseUVBQW1CO0FBQ3JCLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxFQUFFLG1FQUFhO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVFQUE0QjtBQUNuQyxJQUFJLDZEQUFrQjtBQUN0QixJQUFJLHlFQUFtQjtBQUN2QixJQUFJLDJFQUFxQjtBQUN6QixRQUFRLDBFQUErQjtBQUN2QyxNQUFNLG1GQUE2QixDQUFDLDBFQUErQjtBQUNuRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBb0I7QUFDMUIsTUFBTTtBQUNOLE1BQU0sb0VBQXlCO0FBQy9CO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhFQUF3QjtBQUM5QixNQUFNLDZEQUFrQjtBQUN4QixNQUFNLHlFQUFtQjtBQUN6QixNQUFNLDJFQUFxQjtBQUMzQixrQkFBa0IsMEVBQStCO0FBQ2pEO0FBQ0EsVUFBVSwwRUFBK0I7QUFDekMsUUFBUSx5RUFBbUIsQ0FBQywwRUFBK0I7QUFDM0QsUUFBUSxtRkFBNkIsQ0FBQywwRUFBK0I7QUFDckU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtRkFBNkI7QUFDbkMsTUFBTSxzRUFBMkI7QUFDakMsTUFBTSw2REFBa0I7QUFDeEIsTUFBTSxtRkFBNkIsQ0FBQywwRUFBK0I7QUFDbkUsTUFBTSw4RUFBd0I7QUFDOUIsTUFBTSx5RUFBbUIsQ0FBQywwRUFBK0I7QUFDekQ7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90by1ibGFjaztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLyogRm9ybSAqL1xcblxcbi8qIC5pcy1ibHVycmVkIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxuICB9ICovXFxuXFxuI292ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjQ5KTtcXG4gIHotaW5kZXg6IDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHotaW5kZXg6IDU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWVmMTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXG59XFxuXFxuLnJlbW92ZS1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2RlbGV0ZSxcXG4jY2xvc2Uge1xcbiAgd2lkdGg6IDI2cHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWNvbHVtbi0xIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90by1ibGFja1xcXCI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtLWNvbHVtbi0yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29sdW1uLTItb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc3VibWl0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG8tYmxhY2tcXFwiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogIzE3MTcxNztcXG4gIGJvcmRlcjogMDtcXG59XFxuI3N1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxOTUsIDE5NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNzdWJtaXQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYigxOTUsIDE5NSwgMTk1KTtcXG59XFxuXFxuLyogSG92ZXIgYW5pbWF0aW9ucyAqL1xcbi5ncm93IHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ3Jvdzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5ncm93LTIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ncm93LTI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4vKiBFbmQgb2YgaG92ZXIgYW5pbWF0aW9ucyAqL1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG8tYmxhY2tcXFwiO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg0cHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOTBweCAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFRvcCBiYXIgKi9cXG4jdG9wLWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB6LWluZGV4OiAzO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvcC1iYXItbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2lkZS1iYXItaWNvbixcXG4uZGFyay1saWdodC1tb2RlLFxcbi5pbmZvLWljb24ge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmluZm8ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5pbmZvIC5pbmZvLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwNXB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgLyogei1pbmRleDogMTAwOyAqL1xcbn1cXG5cXG4uaW5mbzpob3ZlciAuaW5mby1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogU2lkZSBiYXIgKi9cXG4jc2lkZS1iYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHRyYW5zaXRpb246IHBhZGRpbmctbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RheS1sYXRlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWR0aDogMjUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9kYXksXFxuLmxhdGUsXFxuLnRhc2stY2F0ZWdvcmllcy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RheSxcXG4ubGF0ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnRvZGF5LWljb24sXFxuLmxhdGUtaWNvbixcXG4ucGx1cy1pY29uIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yaWVzLWhlYWRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmJ1dHRvbi5hZGQtdGFzay1jYXRlZ29yeSB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LWljb24tY29sb3Ige1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LWljb24tY29sb3I6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeSAucmVtb3ZlLXRhc2stY2F0ZWdvcnkge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeTpob3ZlciAucmVtb3ZlLXRhc2stY2F0ZWdvcnkge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnJlbW92ZS10YXNrLWNhdGVnb3J5OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktbmFtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5uZXctdGFzay1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLyogVGFzayBjYXRlZ29yaWVzLCBhZGRlZCBieSB0aGUgdXNlciAqL1xcbi50YXNrLWNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LWljb24ge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQsIHBvcHVsYXRlZCBieSBvdGhlciBtb2R1bGVzICovXFxuI21haW4tY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZWYxO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG5cXG4vKiBObyBzaWRlIGJhciBpZiBwYWdlIGxvYWRzIHdoaWxlIHdpbmRvdyBzaXplIGlzIHNtYWxsKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XFxuICAjbWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgfVxcbiAgI3NpZGUtYmFyIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAudG9kYXktbGF0ZSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcblxcbiAgLnRhc2stY2F0ZWdvcmllcyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUFtQztBQUNyQzs7QUFFQSxTQUFTOztBQUVUOztLQUVLOztBQUVMO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7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QUVBLHVDQUF1QztBQUN2QztFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSw2Q0FBNkM7QUFDN0M7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLWJsYWNrO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0Zik7XFxufVxcblxcbi8qIEZvcm0gKi9cXG5cXG4vKiAuaXMtYmx1cnJlZCB7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbiAgfSAqL1xcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY0OSk7XFxuICB6LWluZGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB6LWluZGV4OiA1O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGVlZjE7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxufVxcblxcbi5yZW1vdmUtb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNkZWxldGUsXFxuI2Nsb3NlIHtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1jb2x1bW4tMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG8tYmxhY2tcXFwiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1jb2x1bW4tMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbHVtbi0yLW9wdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvLWJsYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICMxNzE3MTc7XFxuICBib3JkZXI6IDA7XFxufVxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTk1LCAxOTUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc3VibWl0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiByZ2IoMTk1LCAxOTUsIDE5NSk7XFxufVxcblxcbi8qIEhvdmVyIGFuaW1hdGlvbnMgKi9cXG4uZ3JvdyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdyb3c6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uZ3Jvdy0yIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ3Jvdy0yOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLyogRW5kIG9mIGhvdmVyIGFuaW1hdGlvbnMgKi9cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvLWJsYWNrXFxcIjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkwcHggMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb3AgYmFyICovXFxuI3RvcC1iYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgei1pbmRleDogMztcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b3AtYmFyLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGUtYmFyLWljb24sXFxuLmRhcmstbGlnaHQtbW9kZSxcXG4uaW5mby1pY29uIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbmZvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uaW5mbyAuaW5mby1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDVweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIC8qIHotaW5kZXg6IDEwMDsgKi9cXG59XFxuXFxuLmluZm86aG92ZXIgLmluZm8tY29udGFpbmVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi8qIFNpZGUgYmFyICovXFxuI3NpZGUtYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogMjUwcHg7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kYXktbGF0ZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZGF5LFxcbi5sYXRlLFxcbi50YXNrLWNhdGVnb3JpZXMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kYXksXFxuLmxhdGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50b2RheS1pY29uLFxcbi5sYXRlLWljb24sXFxuLnBsdXMtaWNvbiB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcmllcy1oZWFkZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5idXR0b24uYWRkLXRhc2stY2F0ZWdvcnkge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uLWNvbG9yIHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uLWNvbG9yOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnkgLnJlbW92ZS10YXNrLWNhdGVnb3J5IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnk6aG92ZXIgLnJlbW92ZS10YXNrLWNhdGVnb3J5IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5yZW1vdmUtdGFzay1jYXRlZ29yeTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LW5hbWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubmV3LXRhc2stY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi8qIFRhc2sgY2F0ZWdvcmllcywgYWRkZWQgYnkgdGhlIHVzZXIgKi9cXG4udGFzay1jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50LCBwb3B1bGF0ZWQgYnkgb3RoZXIgbW9kdWxlcyAqL1xcbiNtYWluLWNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWVmMTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLyogTm8gc2lkZSBiYXIgaWYgcGFnZSBsb2FkcyB3aGlsZSB3aW5kb3cgc2l6ZSBpcyBzbWFsbCovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTlweCkge1xcbiAgI21haW4tY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIH1cXG4gICNzaWRlLWJhciB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnRvZGF5LWxhdGUge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG5cXG4gIC50YXNrLWNhdGVnb3JpZXMge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCB7IHRhc2tDYXRlZ29yeUxpYnJhcnkgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHRhbGx5TWFyazMgZnJvbSBcIi4vaW1hZ2VzL3RhbGx5LW1hcmstMy5wbmdcIjtcbmltcG9ydCBzdW5Ib2xsb3cgZnJvbSBcIi4vaW1hZ2VzL3N1bi1ob2xsb3cuc3ZnXCI7XG5pbXBvcnQgaW5mb0RhcmsgZnJvbSBcIi4vaW1hZ2VzL2luZm8tZGFyay5wbmdcIjtcbmltcG9ydCB0b2RheVBORyBmcm9tIFwiLi9pbWFnZXMvdG9kYXkucG5nXCI7XG5pbXBvcnQgbGF0ZVBORyBmcm9tIFwiLi9pbWFnZXMvbGF0ZS5wbmdcIjtcbmltcG9ydCBwbHVzIGZyb20gXCIuL2ltYWdlcy9wbHVzLnBuZ1wiO1xuaW1wb3J0IHRyYXNoQ2FuRGFyayBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtY2FuLWRhcmsuc3ZnXCI7XG5cbi8vIGRhc2hib2FyZCBmdW5jdGlvbiAoZm9yIGxvYWRpbmcgdGhlIHNpZGUgYW5kIHRvcCBiYXJzKVxuZnVuY3Rpb24gZGFzaGJvYXJkKCkge1xuICAvLyBOT1RFOiBBIGdyaWQgc3lzdGVtIGlzIHRvIGJlIGNyZWF0ZWQgd2l0aCB0aGlzIGZ1bmN0aW9uLiBUaGUgc2lkZSBhbmQgdG9wIGJhcnMgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBlbGVtZW50cyxcbiAgLy8gICAgICAgYW5kIHRoZSBtYWluIHNlY3Rpb24gKGNvbHVtbiAyIGFuZCByb3cgMikgd2lsbCBiZSBsZWZ0IGFzIGFuIGh0bWwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIGFuIGltYWdlLCB3aGljaCBpc1xuICAvLyAgICAgICB0byBiZSByZXBsYWNlZCBhbmQgZmlsbGVkIGJ5IHRoZSBvdGhlciBmdW5jdGlvbnNcbiAgLy8gICAgICAgaWU6IHRvZGF5IGZ1bmN0aW9uLCBsYXRlIGZ1bmN0aW9uLCBhbmQgdGFza0NhdGVnb3J5IGZ1bmN0aW9uXG4gIC8vIE5PVEU6IFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWdhaW4gd2hlbiBhIHRhc2tDYXRlZ29yeSBpcyBlaXRoZXIgYWRkZWQgb3IgcmVtb3ZlZCwgYmVjYXVzZSB0aGlzIG5lZWRzIHRvIGJlXG4gIC8vICAgICAgIGRpc3BsYXllZCBpbiB0aGUgc2lkZSBiYXJcblxuICAvLyBkZWNsYXJlIGVsZW1lbnRzXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcEJhckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaWRlQmFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGRhcmtMaWdodE1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCB0b3BCYXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvQ29udGFpbmVyVHh0MSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiVGhpcyBpcyBhIHRvZG8gbGlzdCBhcHBsaWNhdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gcmVjb3JkIHRhc2tzLCBrZWVwIHRyYWNrIG9mIHRoZW0sIGFuZCBjb21wbGV0ZSB0aGVtLiBDcmVhdGUgYSB0YXNrIGNhdGVnb3J5LCBmaWxsIGl0IHdpdGggdGFza3MsIGFuZCBrZWVwIHRyYWNrIG9mIHRoZW0gdGhyb3VnaCB0aGUgdGFzayBjYXRlZ29yeSB0YWIsIG9yIHRocm91Z2ggdGhlIHRvZGF5IGFuZCBsYXRlIHRhYnMuXCJcbiAgKTtcbiAgY29uc3QgbmV3TGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIGNvbnN0IG5ld0xpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICBjb25zdCBpbmZvQ29udGFpbmVyVHh0MiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiVGhpcyB3ZWJzaXRlIHdhcyBjcmVhdGVkIGJ5IERhbmllbCBCYWxsZXJpbmksIHdpdGggaGVscCBmcm9tIHRoZSBPZGluIFByb2plY3QuXCJcbiAgKTtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5TGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgdG9kYXlUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RheVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVG9kYXlcIik7XG4gIGNvbnN0IGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGxhdGVUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYXRlVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMYXRlXCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXNIZWFkZXJUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcmllc0hlYWRlclR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGFzayBDYXRlZ29yaWVzXCIpO1xuICBjb25zdCBhZGRUYXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IG5ld1Rhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyAgIGNvbnN0IHRhc2tDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgY29uc3QgdGFza0NhdGVnb3J5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIC8vICAgY29uc3QgdGFza0NhdGVnb3J5VHh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICBjb25zdCBUYXNrQ2F0ZWdvcnlUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkdlbmVyYWxcIik7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIGFkZCBhdHRyaWJ1dGVzXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcbiAgdG9wQmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wLWJhclwiKTtcbiAgdG9wQmFyTGVmdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcC1iYXItbGVmdFwiKTtcbiAgc2lkZUJhckljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlLWJhci1pY29uIGdyb3dcIik7XG4gIHNpZGVCYXJJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0YWxseU1hcmszKTtcbiAgc2lkZUJhckljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwic2lkZSBiYXIgaWNvblwiKTtcbiAgZGFya0xpZ2h0TW9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRhcmstbGlnaHQtbW9kZSBncm93XCIpO1xuICBkYXJrTGlnaHRNb2RlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzdW5Ib2xsb3cpO1xuICBkYXJrTGlnaHRNb2RlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImxpZ2h0IG1vZGUgZGFyayBtb2RlIGljb25cIik7XG4gIHRvcEJhclJpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wLWJhci1yaWdodFwiKTtcbiAgaW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm9cIik7XG4gIGluZm9JY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5mby1pY29uXCIpO1xuICBpbmZvSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW5mb0RhcmspO1xuICBpbmZvSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJpbmZvIGljb25cIik7XG4gIGluZm9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmZvLWNvbnRhaW5lclwiKTtcbiAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGUtYmFyXCIpO1xuICB0b2RheUxhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RheS1sYXRlXCIpO1xuICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZGF5IGdyb3ctMlwiKTtcbiAgdG9kYXlJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kYXktaWNvblwiKTtcbiAgdG9kYXlJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0b2RheVBORyk7XG4gIHRvZGF5SWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJ0b2RheSBvcHRpb24gaWNvblwiKTtcbiAgbGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhdGUgZ3Jvdy0yXCIpO1xuICBsYXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhdGUtaWNvblwiKTtcbiAgbGF0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGxhdGVQTkcpO1xuICBsYXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJsYXRlIG9wdGlvbiBpY29uXCIpO1xuICB0YXNrQ2F0ZWdvcmllcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2F0ZWdvcmllc1wiKTtcbiAgdGFza0NhdGVnb3JpZXNIZWFkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWNhdGVnb3JpZXMtaGVhZGVyXCIpO1xuICBhZGRUYXNrQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhZGQtdGFzay1jYXRlZ29yeVwiKTtcbiAgcGx1c0ljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbHVzLWljb24gZ3Jvd1wiKTtcbiAgcGx1c0ljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIHBsdXMpO1xuICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJhZGQgdGFzayBjYXRlZ29yeSBpY29uXCIpO1xuICBuZXdUYXNrQ2F0ZWdvcmllcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ldy10YXNrLWNhdGVnb3JpZXNcIik7XG5cbiAgLy8gICB0YXNrQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWNhdGVnb3J5IGdyb3ctMlwiKTtcbiAgLy8gICB0YXNrQ2F0ZWdvcnlJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1jYXRlZ29yeS1pY29uXCIpO1xuICAvLyAgIHRhc2tDYXRlZ29yeUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGNpcmNsZURhcmspO1xuICAvLyAgIHRhc2tDYXRlZ29yeUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwidGFzayBjYXRlZ29yeSBpY29uXCIpO1xuXG4gIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250ZW50XCIpO1xuXG4gIC8vIGFwcGVuZCBlbGVtZW50cyB0byBkb21cbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9wQmFyKTtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhckxlZnQpO1xuICB0b3BCYXJMZWZ0LmFwcGVuZENoaWxkKHNpZGVCYXJJY29uKTtcbiAgdG9wQmFyTGVmdC5hcHBlbmRDaGlsZChkYXJrTGlnaHRNb2RlKTtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhclJpZ2h0KTtcbiAgdG9wQmFyUmlnaHQuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb0ljb24pO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXJUeHQxKTtcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMaW5lMSk7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3TGluZTIpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXJUeHQyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHRvZGF5TGF0ZSk7XG4gIHRvZGF5TGF0ZS5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5SWNvbik7XG4gIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5VHh0Q29udGFpbmVyKTtcbiAgdG9kYXlUeHRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlUeHQpO1xuICB0b2RheUxhdGUuYXBwZW5kQ2hpbGQobGF0ZSk7XG4gIGxhdGUuYXBwZW5kQ2hpbGQobGF0ZUljb24pO1xuICBsYXRlLmFwcGVuZENoaWxkKGxhdGVUeHRDb250YWluZXIpO1xuICBsYXRlVHh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhdGVUeHQpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzKTtcbiAgdGFza0NhdGVnb3JpZXMuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3JpZXNIZWFkZXIpO1xuICB0YXNrQ2F0ZWdvcmllc0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcmllc0hlYWRlclR4dENvbnRhaW5lcik7XG4gIHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0KTtcbiAgdGFza0NhdGVnb3JpZXNIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NhdGVnb3J5KTtcbiAgYWRkVGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgdGFza0NhdGVnb3JpZXMuYXBwZW5kQ2hpbGQobmV3VGFza0NhdGVnb3JpZXMpO1xuICAvLyAgIG5ld1Rhc2tDYXRlZ29yaWVzLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeSk7XG4gIC8vICAgdGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeUljb24pO1xuICAvLyAgIHRhc2tDYXRlZ29yeS5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIpO1xuICAvLyAgIHRhc2tDYXRlZ29yeVR4dENvbnRhaW5lci5hcHBlbmRDaGlsZChUYXNrQ2F0ZWdvcnlUeHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbnRhaW5lciA+ICNtYWluLWNvbnRlbnRcIlxuICApOyAvLyBUaGlzIHZhcmlhYmxlIGV4aXN0cyB0byBvdmVycmlkZSB0aGUgc3R5bGluZyBvZiB0aGUgbWFpbkNvbnRlbnRcbn1cblxuLy8gV2luZG93IHJlc2l6ZSBzaWRlYmFyIGZ1bmN0aW9uIHRoYXQgcmV0cmFjdHMgYW5kIGV4cGFuZHMgdGhlIHNpZGUgYmFyIGRlcGVuZGluZyBvbiB3aW5kb3cgc2l6ZVxuZnVuY3Rpb24gd2luZG93UmVzaXplU2lkZUJhcih3aW5kb3dSZXNpemVEaXJlY3Rpb24pIHtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZS1iYXJcIik7XG4gIGNvbnN0IG1haW5Db250ZW50UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbnRhaW5lciA+ICNtYWluLWNvbnRlbnRcIlxuICApO1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuICBjb25zdCB0b2RheUxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWxhdGVcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNhdGVnb3JpZXNcIik7XG5cbiAgaWYgKFxuICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPCA4MDAgJiZcbiAgICB3aW5kb3dSZXNpemVEaXJlY3Rpb24gPCAwICYmXG4gICAgc2lkZUJhci5vZmZzZXRXaWR0aCA9PT0gMjkwXG4gICkge1xuICAgIG1haW5Db250ZW50LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEgLyAzXCI7XG4gICAgc2lkZUJhci5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIHNpZGVCYXIuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgIHRvZGF5TGF0ZS5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIHRhc2tDYXRlZ29yaWVzLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPiA4MDAgJiYgd2luZG93UmVzaXplRGlyZWN0aW9uID4gMCkge1xuICAgIG1haW5Db250ZW50UHJpb3JpdHkuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMiAvIDNcIjtcbiAgICBzaWRlQmFyLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgIHNpZGVCYXIuc3R5bGUucGFkZGluZyA9IFwiMjBweFwiO1xuICAgIHRvZGF5TGF0ZS5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgICB0YXNrQ2F0ZWdvcmllcy5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgfVxufVxuXG4vLyBCdXR0b24gc2lkZWJhciBmdW5jdGlvbiB0aGF0IHJldHJhY3RzIGFuZCBleHBhbmRzIHRoZSBzaWRlIGJhciB3aGVuIHRoZSBidXR0b24gaXMgcHJlc3NlZFxuZnVuY3Rpb24gYnV0dG9uU2lkZUJhcihldmVudCkge1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlLWJhclwiKTtcbiAgY29uc3QgbWFpbkNvbnRlbnRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjY29udGFpbmVyID4gI21haW4tY29udGVudFwiXG4gICk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG4gIGNvbnN0IHRvZGF5TGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktbGF0ZVwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2F0ZWdvcmllc1wiKTtcblxuICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIuc2lkZS1iYXItaWNvblwiKSkge1xuICAgIGlmIChzaWRlQmFyLm9mZnNldFdpZHRoID09PSAwKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA+IDgwMCkge1xuICAgICAgICBtYWluQ29udGVudFByaW9yaXR5LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIgLyAzXCI7XG4gICAgICB9XG4gICAgICBzaWRlQmFyLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgICAgc2lkZUJhci5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCI7XG4gICAgICB0b2RheUxhdGUuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgICB0YXNrQ2F0ZWdvcmllcy5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgICB9XG4gICAgaWYgKHNpZGVCYXIub2Zmc2V0V2lkdGggPT09IDI5MCkge1xuICAgICAgbWFpbkNvbnRlbnQuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMSAvIDNcIjtcbiAgICAgIHNpZGVCYXIuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgIHNpZGVCYXIuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgICAgdG9kYXlMYXRlLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgICB0YXNrQ2F0ZWdvcmllcy5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIH1cbiAgfVxufVxuXG4vLyBEaXNwbGF5IHRhc2sgY2F0ZWdvcmllcyBpbiBzaWRlIGJhciBmdW5jdGlvblxuZnVuY3Rpb24gZGlzcGxheVRhc2tDYXRlZ29yaWVzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tDYXRlZ29yeUxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBkZWNsYXJlIGVsZW1lbnRzXG4gICAgY29uc3QgbmV3VGFza0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWNhdGVnb3JpZXNcIik7XG4gICAgY29uc3QgdGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrQ2F0ZWdvcnlJY29uQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgdGFza0NhdGVnb3J5VHh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBUYXNrQ2F0ZWdvcnlUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgIHRhc2tDYXRlZ29yeUxpYnJhcnlbaV0uZ2V0VGl0bGUoKVxuICAgICk7XG4gICAgLy8gY29uc3QgcmVtb3ZlVGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZW1vdmVUYXNrQ2F0ZWdvcnlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgLy8gYWRkIGF0dHJpYnV0ZXNcbiAgICB0YXNrQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInRhc2stY2F0ZWdvcnlcIiwgaSwgXCJncm93LTJcIik7XG4gICAgdGFza0NhdGVnb3J5SWNvbkNvbG9yLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNhdGVnb3J5LWljb24tY29sb3JcIiwgaSk7XG4gICAgdGFza0NhdGVnb3J5SWNvbkNvbG9yLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcbiAgICB0YXNrQ2F0ZWdvcnlJY29uQ29sb3Iuc2V0QXR0cmlidXRlKFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgdGFza0NhdGVnb3J5TGlicmFyeVtpXS5nZXRDb2xvcigpXG4gICAgKTtcbiAgICB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY2F0ZWdvcnktbmFtZVwiLCBpKTtcbiAgICB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgXCJvbmNsaWNrXCIsXG4gICAgICBcInRoaXMuY29udGVudEVkaXRhYmxlPXRydWVcIlxuICAgICk7XG4gICAgdGFza0NhdGVnb3J5VHh0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIFwib25ibHVyXCIsXG4gICAgICBcInRoaXMuY29udGVudEVkaXRhYmxlPWZhbHNlXCJcbiAgICApO1xuICAgIHJlbW92ZVRhc2tDYXRlZ29yeUltZy5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXRhc2stY2F0ZWdvcnlcIiwgaSk7XG4gICAgcmVtb3ZlVGFza0NhdGVnb3J5SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0cmFzaENhbkRhcmspO1xuXG4gICAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGRvbVxuICAgIG5ld1Rhc2tDYXRlZ29yaWVzLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeSk7XG4gICAgdGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeUljb25Db2xvcik7XG4gICAgdGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeVR4dENvbnRhaW5lcik7XG4gICAgdGFza0NhdGVnb3J5VHh0Q29udGFpbmVyLmFwcGVuZENoaWxkKFRhc2tDYXRlZ29yeVR4dCk7XG4gICAgdGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHJlbW92ZVRhc2tDYXRlZ29yeUltZyk7XG4gIH1cbn1cblxuLy8gQ2xlYXIgdGFzayBjYXRlZ29yaWVzIGZ1bmN0aW9uXG5mdW5jdGlvbiBjbGVhclRhc2tDYXRlZ29yaWVzKCkge1xuICBjb25zdCBuZXdUYXNrQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stY2F0ZWdvcmllc1wiKTtcbiAgbmV3VGFza0NhdGVnb3JpZXMucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaCgobikgPT4gbi5yZW1vdmUoKSk7XG59XG5cbi8vIHRhc2tDYXRlZ29yeUNvbnRlbnQgZnVuY3Rpb24gKGZvciBsb2FkaW5nIHRoZSBjb250ZW50IG9mIGEgdGFza0NhdGVnb3J5IHRoYXQgaGFzIGJlZW4gc2VsZWN0ZWQpXG5mdW5jdGlvbiB0YXNrQ2F0ZWdvcnlDb250ZW50KHRhc2tDYXRlZ29yeUluZGV4KSB7XG4gIC8vIGRlY2xhcmUgZWxlbWVudHNcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b25UeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIisgQWRkIFRhc2tcIik7XG4gIGNvbnN0IHRhc2tDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gYWRkIGF0dHJpYnV0ZXNcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXRlZ29yeS1jb250ZW50XCIsIHRhc2tDYXRlZ29yeUluZGV4KTtcbiAgYWRkVGFza0J1dHRvbldyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhZGQtdGFzay1idXR0b24td3JhcHBlclwiKTtcbiAgYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgdGFza0NhcmRzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1jYXJkc1wiKTtcblxuICAvLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b25XcmFwcGVyKTtcbiAgYWRkVGFza0J1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gIGFkZFRhc2tCdXR0b24uYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvblR4dCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRzKTtcbn1cblxuLy8gSGlnaGxpZ2h0IHNlbGVjdGVkIHRhc2sgY2F0ZWdvcnkgZnVuY3Rpb25cbmZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGVkVGFza0NhdGVnb3J5KHNlbGVjdGVkRWxlbWVudENsYXNzSW5kZXgpIHtcbiAgLy8gICBjb25zdCBzZWxlY3RlZEVsZW1lbnRDbGFzc0luZGV4ID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsxXTtcbiAgLy8gICBjb25zb2xlLmxvZyhzZWxlY3RlZEVsZW1lbnRDbGFzc0luZGV4KTtcbiAgLy8gICBjb25zb2xlLmxvZyhgdGFzay1jYXRlZ29yeSAke3NlbGVjdGVkRWxlbWVudENsYXNzSW5kZXh9YCk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRUYXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgIGB0YXNrLWNhdGVnb3J5ICR7c2VsZWN0ZWRFbGVtZW50Q2xhc3NJbmRleH1gXG4gICk7XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkVGFza0NhdGVnb3J5WzBdKTtcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRUYXNrQ2F0ZWdvcnlbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yKTtcbiAgc2VsZWN0ZWRUYXNrQ2F0ZWdvcnlbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZjBlZWYxXCI7XG59XG5cbi8vIFJlbW92ZSBoaWdobGlnaHQgZnJvbSB0YXNrIGNhdGVnb3JpZXMgZnVuY3Rpb25cbmZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodFRhc2tDYXRlZ29yaWVzKCkge1xuICBjb25zdCBuZXdUYXNrQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stY2F0ZWdvcmllc1wiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUYXNrQ2F0ZWdvcmllcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChuZXdUYXNrQ2F0ZWdvcmllcy5jaGlsZHJlbltpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgIT09IFwiXCIpIHtcbiAgICAgIG5ld1Rhc2tDYXRlZ29yaWVzLmNoaWxkcmVuW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2xlYXIgdGFzayBjYXRlZ29yeSBjb250ZW50IGZ1bmN0aW9uXG5mdW5jdGlvbiBjbGVhclRhc2tDYXRlZ29yeUNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG4gIG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goKG4pID0+IG4ucmVtb3ZlKCkpO1xufVxuXG4vLyBNb2RhbCB3aW5kb3cgZnVuY3Rpb25cbi8vIGRlY2xhcmUgZWxlbWVudHNcbi8vIGFkZCBhdHRyaWJ1dGVzXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tIChzaWJsaW5nIG9mICNtYWluLWNvbnRlbnQgZWxlbWVudClcblxuLy8gdG9kYXkgZnVuY3Rpb24gKGZvciBsb2FkaW5nIHRoZSB0b2RheSB0YWIgd2hpY2ggY29udGFpbnMgYWxsIHRhc2tzIHRoYXQgYXJlIGR1ZSB0b2RheSlcbi8vIGRlY2xhcmUgZWxlbWVudHNcbi8vIGFkZCBhdHRyaWJ1dGVzXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tXG5cbi8vIGxhdGUgZnVuY3Rpb24gKGZvciBsb2FkaW5nIHRoZSBsYXRlIHRhYiB3aGljaCBjb250YWlucyBhbGwgdGFza3MgdGhhdCB3ZXJlIGR1ZSBiZWZvcmUgdGhlIHByZXNlbnQgZGF0ZSBhbmQgaGF2ZSBub3QgYmVlbiBjb21wbGV0ZWQgeWV0KVxuLy8gZGVjbGFyZSBlbGVtZW50c1xuLy8gYWRkIGF0dHJpYnV0ZXNcbi8vIGFwcGVuZCBlbGVtZW50cyB0byBkb21cblxuZXhwb3J0IHtcbiAgZGFzaGJvYXJkLFxuICB3aW5kb3dSZXNpemVTaWRlQmFyLFxuICBidXR0b25TaWRlQmFyLFxuICBkaXNwbGF5VGFza0NhdGVnb3JpZXMsXG4gIGNsZWFyVGFza0NhdGVnb3JpZXMsXG4gIHRhc2tDYXRlZ29yeUNvbnRlbnQsXG4gIGhpZ2hsaWdodFNlbGVjdGVkVGFza0NhdGVnb3J5LFxuICByZW1vdmVIaWdobGlnaHRUYXNrQ2F0ZWdvcmllcyxcbiAgY2xlYXJUYXNrQ2F0ZWdvcnlDb250ZW50LFxufTtcbiIsIi8vIHRhc2tDYXRlZ29yeSBmYWN0b3J5IGZ1bmN0aW9uIChjcmVhdGVzIHRhc2sgY2F0ZWdvcnkgb2JqZWN0cywgd2hpY2ggd2lsbCBjb250YWluIHRhc2tzKVxuLy8gcHJvcGVydGllczogdGl0bGUgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSwgY29sb3IgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSwgYXJyYXkgb2YgdGFza3Ncbi8vIG1ldGhvZHM6IGdldFRpdGxlLCBnZXRDb2xvciwgZ2V0VGFza3MgKGdldCB0YXNrcyBmcm9tIHRhc2tzIGFycmF5KSwgc2V0VGl0bGUsIHNldENvbG9yLCBzZXRUYXNrIChhZGQgdGFzayB0byB0YXNrcyBhcnJheSksXG5mdW5jdGlvbiB0YXNrQ2F0ZWdvcnlGYWN0b3J5KHRpdGxlLCBjb2xvcikge1xuICBjb25zdCB0YXNrc0FycmF5ID0gW107XG4gIGxldCBpc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0Q29sb3IgPSAoKSA9PiBjb2xvcjtcbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrc0FycmF5O1xuICBjb25zdCBnZXRJc1NlbGVjdGVkID0gKCkgPT4gaXNTZWxlY3RlZDtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+ICh0aXRsZSA9IG5ld1RpdGxlKTtcbiAgY29uc3Qgc2V0Q29sb3IgPSAobmV3Q29sb3IpID0+IChjb2xvciA9IG5ld0NvbG9yKTtcbiAgY29uc3Qgc2V0VGFzayA9IChuZXdUYXNrKSA9PiB0YXNrc0FycmF5LnB1c2gobmV3VGFzayk7XG4gIGNvbnN0IHNldElzU2VsZWN0ZWQgPSAoYm9vbGVhblZhbHVlKSA9PiAoaXNTZWxlY3RlZCA9IGJvb2xlYW5WYWx1ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXRDb2xvcixcbiAgICBnZXRUYXNrcyxcbiAgICBnZXRJc1NlbGVjdGVkLFxuICAgIHNldFRpdGxlLFxuICAgIHNldENvbG9yLFxuICAgIHNldFRhc2ssXG4gICAgc2V0SXNTZWxlY3RlZCxcbiAgfTtcbn1cblxuLy8gdGFzayBmYWN0b3J5IGZ1bmN0aW9uIChjcmVhdGVzIHRhc2tzIHRoYXQgdGhlIHVzZXIgY3JlYXRlcywgd2hpY2ggd2lsbCBiZSBwbGFjZWQgaW4gYSB0YXNrQ2F0ZWdvcnkpXG4vLyBwcm9wZXJ0aWVzOiB0aXRsZSAocmVjZWl2ZWQgZnJvbSB1c2VyIGZvcm0pLCBkZXNjcmlwdGlvbiAocmVjZWl2ZWQgZnJvbSB1c2VyIGZvcm0pLFxuLy8gICAgICAgICAgICAgY2F0ZWdvcnkgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSwgZHVlRGF0ZSAocmVjZWl2ZWQgZnJvbSB1c2VyIGZvcm0pLFxuLy8gICAgICAgICAgICAgcHJpb3JpdHkgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKVxuLy8gbWV0aG9kczogZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRDYXRlZ29yeSwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHlcbi8vICAgICAgICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0Q2F0ZWdvcnksIHNldER1ZURhdGUsIHNldFByaW9yaXR5XG5cbi8vIEFycmF5IHRoYXQgaG9sZHMgYWxsIHRhc2sgY2F0ZWdvcnkgb2JqZWN0c1xuY29uc3QgdGFza0NhdGVnb3J5TGlicmFyeSA9IFtdO1xuXG4vLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGVyZSBhcmUgZml2ZSB0YXNrIGNhdGVnb3J5IG9iamVjdHMgaW4gYXJyYXlcbmZ1bmN0aW9uIGNoZWNrVGFza0NhdGVnb3J5TGlicmFyeUZ1bGwoKSB7XG4gIGlmICh0YXNrQ2F0ZWdvcnlMaWJyYXJ5Lmxlbmd0aCA9PT0gNSkgcmV0dXJuIHRydWU7XG4gIGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBFZGl0IHRhc2sgY2F0ZWdvcnkgbmFtZSBmdW5jdGlvblxuZnVuY3Rpb24gZWRpdFRhc2tDYXRlZ29yeU5hbWUoZXZlbnQpIHtcbiAgdGFza0NhdGVnb3J5TGlicmFyeVtldmVudC50YXJnZXQuY2xhc3NMaXN0WzFdXS5zZXRUaXRsZShcbiAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnRcbiAgKTtcbn1cblxuLy8gRWRpdCB0YXNrIGNhdGVnb3J5IGljb24gY29sb3IgZnVuY3Rpb25cbmZ1bmN0aW9uIGVkaXRUYXNrQ2F0ZWdvcnlJY29uQ29sb3IoZXZlbnQpIHtcbiAgdGFza0NhdGVnb3J5TGlicmFyeVtldmVudC50YXJnZXQuY2xhc3NMaXN0WzFdXS5zZXRDb2xvcihldmVudC50YXJnZXQudmFsdWUpO1xufVxuXG4vLyBSZW1vdmUgdGFzayBjYXRlZ29yeSBmdW5jdGlvblxuZnVuY3Rpb24gcmVtb3ZlVGFza0NhdGVnb3J5KGV2ZW50KSB7XG4gIHRhc2tDYXRlZ29yeUxpYnJhcnkuc3BsaWNlKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMV0sIDEpO1xufVxuXG4vLyBBZGQgbmV3IHRhc2sgY2F0ZWdvcnkgZnVuY3Rpb25cbmZ1bmN0aW9uIGFkZE5ld1Rhc2tDYXRlZ29yeSgpIHtcbiAgY29uc3QgZHVtbXlUYXNrQ2F0ZWdvcnkgPSB0YXNrQ2F0ZWdvcnlGYWN0b3J5KFwiQ2F0ZWdvcnlcIiwgXCIjMDAwMDAwXCIpO1xuICB0YXNrQ2F0ZWdvcnlMaWJyYXJ5LnB1c2goZHVtbXlUYXNrQ2F0ZWdvcnkpO1xufVxuXG4vLyBTZWxlY3QgdGFzayBjYXRlZ29yeSBmdW5jdGlvblxuZnVuY3Rpb24gU2VsZWN0VGFza0NhdGVnb3J5KGluZGV4VmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQ2F0ZWdvcnlMaWJyYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdGFza0NhdGVnb3J5TGlicmFyeVtpbmRleFZhbHVlXS5zZXRJc1NlbGVjdGVkKHRydWUpO1xuICB9XG59XG5cbi8vIFNldCB0aGUgdGFzayBjYXRlZ29yeSBpbiB0aGUgYXJyYXkgdGhhdCBpcyBmb3VuZCB0byBiZSB0cnVlIHRvIGZhbHNlXG5mdW5jdGlvbiByZW1vdmVUYXNrQ2F0ZWdvcnlTZWxlY3Rpb24oKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0NhdGVnb3J5TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrQ2F0ZWdvcnlMaWJyYXJ5W2ldLmdldElzU2VsZWN0ZWQoKSkge1xuICAgICAgdGFza0NhdGVnb3J5TGlicmFyeVtpXS5zZXRJc1NlbGVjdGVkKGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRmluZCBhbmQgcmV0dXJuIGluZGV4IG9mIHRhc2sgY2F0ZWdvcnkgdGhhdCBpcyBzZWxlY3RlZFxuZnVuY3Rpb24gZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQ2F0ZWdvcnlMaWJyYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhc2tDYXRlZ29yeUxpYnJhcnlbaV0uZ2V0SXNTZWxlY3RlZCgpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn1cblxuLy8gdG9kYXkgYXJyYXkgKGNvbnRhaW5zIGFsbCB0YXNrIG9iamVjdHMgdGhhdCBoYXZlIGR1ZURhdGUgb2YgdG9kYXlzIGRhdGUpXG5cbi8vIGxhdGUgYXJyYXkgKGNvbnRhaW5zIGFsbCB0YXNrIG9iamVjdHMgdGhhdCBoYXZlIGEgZHVlRGF0ZSBlYXJsaWVyIHRoYXQgdG9kYXlzIGRhdGUpXG5cbi8vIHNldENvbXBsZXRlIGZ1bmN0aW9uIChzZXRzIHRhc2sgYXMgY29tcGxldGUgYW5kIGRlbGV0ZXMgaXQgZnJvbSBhbGwgYXJyYXlzIHRoYXQgY29udGFpbiBpdClcbi8vIFRoaXMgZnVuY3Rpb24gcGVyZm9ybXMgYW4gYW5pbWF0aW9uIGJlZm9yZSBkZWxldGluZyBpdCB1bmxpa2UgdGhlIG5leHQgZnVuY3Rpb24uLi5cblxuLy8gZGVsZXRlVGFzayBmdW5jdGlvbiAoZGVsZXRlcyB0YXNrIGZyb20gYWxsIGFycmF5cyB0aGF0IGNvbnRhaW5zIGl0KVxuXG4vLyBhZGRUYXNrIGZ1bmN0aW9uIChyZWNlaXZlcyBkYXRhIGZyb20gdGhlIHVzZXIgZm9ybSBhbmQgY2FsbHMgdGhlIHRhc2sgZmFjdG9yeSBmdW5jdGlvbiwgZmVlZGluZyBpdCB0aGUgdXNlciBwYXJhbWV0ZXJzKVxuLy8gKioqVGhpcyBtYXkgbm90IGJlIG5lZWRlZCoqKlxuXG4vLyBvcmdhbml6ZVRhc2sgZnVuY3Rpb24gKHNlbmRzIHRhc2sgb2JqZWN0IHRvIGFwcHJvcHJpYXRlIGFycmF5cylcbi8vIE5PVEU6IFNvbWV0aGluZyB0byBjb25zaWRlciBpcyB0aGF0IHdoZW4gYSBuZXcgZGF5IGNvbWVzIGFsb25nLCBjZXJ0YWluIHRhc2sgb2JqZWN0cyB3aWxsIG5lZWQgdG8gYmUgYXV0b21hdGljYWxseVxuLy8gICAgICAgcGxhY2VkIGludG8gZWl0aGVyIHRoZSB0b2RheSBhcnJheSwgb3IgdGhlIGxhdGUgYXJyYXkuXG5cbi8vIGVkaXRUYXNrIGZ1bmN0aW9uIChyZWNlaXZlcyBkYXRhIGZyb20gdXNlciBmb3JtLCB0aGVuIGNhbGxzIHRhc2sgc2V0IG1ldGhvZHMgdG8gY2hhbmdlIHRoZSBhcHByb3ByaWF0ZSBwcm9wZXJ0aWVzKVxuXG4vLyBjaGFuZ2VUaGVtZSBmdW5jdGlvbiAoY2hhbmdlcyBVSSB0byBkYXJrIG1vZGUgb3IgbGlnaHQgbW9kZSApXG5cbi8vIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplIG1vZHVsZSAoc2NvcGUgb2YgdGhpcyBtb2R1bGUgaXMgdG8gZGV0ZXJtaW5lIHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIG9mIHdpbmRvdyBmcm9tIHdoZW4gdGhlIHVzZXIgYmVnaW5zIGNoYW5naW5nIGl0cyBzaXplLCBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciBpdCBpcyBzaHJpbmtpbmcgb3IgZ3Jvd2luZylcbmNvbnN0IGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplID0gKCgpID0+IHtcbiAgbGV0IHBvc2l0aW9uV2lkdGhMYXN0O1xuICBsZXQgbmV3UG9zaXRpb247XG4gIGxldCBwb3NpdGlvbldpZHRoRGlmZmVyZW5jZTtcblxuICBjb25zdCBzZXRQb3NpdGlvbldpZHRoTGFzdCA9IChzY3JlZW5XaWR0aCkgPT5cbiAgICAocG9zaXRpb25XaWR0aExhc3QgPSBzY3JlZW5XaWR0aCk7XG4gIGNvbnN0IHNldE5ld1Bvc2l0aW9uID0gKHNjcmVlbldpZHRoKSA9PiAobmV3UG9zaXRpb24gPSBzY3JlZW5XaWR0aCk7XG4gIGNvbnN0IHNldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlID0gKCkgPT5cbiAgICAocG9zaXRpb25XaWR0aERpZmZlcmVuY2UgPSBuZXdQb3NpdGlvbiAtIHBvc2l0aW9uV2lkdGhMYXN0KTtcbiAgY29uc3QgZ2V0UG9zaXRpb25XaWR0aERpZmZlcmVuY2UgPSAoKSA9PiBwb3NpdGlvbldpZHRoRGlmZmVyZW5jZTtcblxuICByZXR1cm4ge1xuICAgIHNldFBvc2l0aW9uV2lkdGhMYXN0LFxuICAgIHNldE5ld1Bvc2l0aW9uLFxuICAgIHNldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlLFxuICAgIGdldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHtcbiAgdGFza0NhdGVnb3J5RmFjdG9yeSxcbiAgdGFza0NhdGVnb3J5TGlicmFyeSxcbiAgY2hlY2tUYXNrQ2F0ZWdvcnlMaWJyYXJ5RnVsbCxcbiAgZWRpdFRhc2tDYXRlZ29yeU5hbWUsXG4gIGVkaXRUYXNrQ2F0ZWdvcnlJY29uQ29sb3IsXG4gIHJlbW92ZVRhc2tDYXRlZ29yeSxcbiAgYWRkTmV3VGFza0NhdGVnb3J5LFxuICBTZWxlY3RUYXNrQ2F0ZWdvcnksXG4gIHJlbW92ZVRhc2tDYXRlZ29yeVNlbGVjdGlvbixcbiAgZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCxcbiAgZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydHNcbmltcG9ydCB7XG4gIGRhc2hib2FyZCxcbiAgd2luZG93UmVzaXplU2lkZUJhcixcbiAgYnV0dG9uU2lkZUJhcixcbiAgZGlzcGxheVRhc2tDYXRlZ29yaWVzLFxuICBjbGVhclRhc2tDYXRlZ29yaWVzLFxuICB0YXNrQ2F0ZWdvcnlDb250ZW50LFxuICBoaWdobGlnaHRTZWxlY3RlZFRhc2tDYXRlZ29yeSxcbiAgcmVtb3ZlSGlnaGxpZ2h0VGFza0NhdGVnb3JpZXMsXG4gIGNsZWFyVGFza0NhdGVnb3J5Q29udGVudCxcbn0gZnJvbSBcIi4vZG9tLW1hbmlwdWxhdGlvbi5qc1wiO1xuaW1wb3J0IHtcbiAgdGFza0NhdGVnb3J5TGlicmFyeSxcbiAgdGFza0NhdGVnb3J5RmFjdG9yeSxcbiAgY2hlY2tUYXNrQ2F0ZWdvcnlMaWJyYXJ5RnVsbCxcbiAgZWRpdFRhc2tDYXRlZ29yeU5hbWUsXG4gIGVkaXRUYXNrQ2F0ZWdvcnlJY29uQ29sb3IsXG4gIHJlbW92ZVRhc2tDYXRlZ29yeSxcbiAgYWRkTmV3VGFza0NhdGVnb3J5LFxuICBTZWxlY3RUYXNrQ2F0ZWdvcnksXG4gIHJlbW92ZVRhc2tDYXRlZ29yeVNlbGVjdGlvbixcbiAgZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCxcbiAgZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUsXG59IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5kYXNoYm9hcmQoKTtcblxuLy8gQ3JlYXRlIG9iamVjdCBmb3IgZHVtbXkgdGFzayBjYXRlZ29yeSB0aGVuIHBsYWNlIGluIGFycmF5XG5jb25zdCBkdW1teVRhc2tDYXRlZ29yeSA9IHRhc2tDYXRlZ29yeUZhY3RvcnkoXCJHZW5lcmFsXCIsIFwiIzAwMDAwMFwiKTtcbnRhc2tDYXRlZ29yeUxpYnJhcnkucHVzaChkdW1teVRhc2tDYXRlZ29yeSk7XG5cbi8vIERpc3BsYXkgdGFzayBjYXRlZ29yaWVzXG5kaXNwbGF5VGFza0NhdGVnb3JpZXMoKTtcblxuLy8gRXZlbnQgbGlzdGVuZXJzIHRvIGNvbnRyb2wgdGhlIGZsb3cgb2YgdGhlIHJldHJhY3RpbmcgYW5kIGV4cGFuZGluZyBkYXNoYm9hcmQgc2lkZWJhclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUuc2V0UG9zaXRpb25XaWR0aExhc3QoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUuc2V0TmV3UG9zaXRpb24oZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCk7XG4gIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplLnNldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlKCk7XG4gIGxldCB3aW5kb3dSZXNpemVEaXJlY3Rpb24gPVxuICAgIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplLmdldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlKCk7XG4gIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplLnNldFBvc2l0aW9uV2lkdGhMYXN0KGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgpO1xuXG4gIHdpbmRvd1Jlc2l6ZVNpZGVCYXIod2luZG93UmVzaXplRGlyZWN0aW9uKTtcbn0pO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcblxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgYnV0dG9uU2lkZUJhcihldmVudCk7XG59KTtcblxuLy8gQWRkIHRhc2sgY2F0ZWdvcnkgZXZlbnQgbGlzdGVuZXJcbmNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzLWljb25cIik7XG5wbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoIWNoZWNrVGFza0NhdGVnb3J5TGlicmFyeUZ1bGwoKSkge1xuICAgIGFkZE5ld1Rhc2tDYXRlZ29yeSgpO1xuICAgIGNsZWFyVGFza0NhdGVnb3JpZXMoKTtcbiAgICBkaXNwbGF5VGFza0NhdGVnb3JpZXMoKTtcbiAgICBpZiAoZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCgpKSB7XG4gICAgICBoaWdobGlnaHRTZWxlY3RlZFRhc2tDYXRlZ29yeShmaW5kVGFza0NhdGVnb3J5SW5kZXhJc1NlbGVjdGVkKCkpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIEVkaXQgdGFzayBjYXRlZ29yeSBldmVudCBsaXN0ZW5lclxuY29uc3QgYWxsVGFza0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5ldy10YXNrLWNhdGVnb3JpZXNcIik7XG5hbGxUYXNrQ2F0ZWdvcmllcy5mb3JFYWNoKCh0YXNrQ2F0ZWdvcnkpID0+IHtcbiAgdGFza0NhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJ0YXNrLWNhdGVnb3J5LW5hbWVcIikge1xuICAgICAgZWRpdFRhc2tDYXRlZ29yeU5hbWUoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJ0YXNrLWNhdGVnb3J5LWljb24tY29sb3JcIikge1xuICAgICAgZWRpdFRhc2tDYXRlZ29yeUljb25Db2xvcihldmVudCk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vLyBSZW1vdmUgdGFzayBjYXRlZ29yeSBldmVudCBsaXN0ZW5lclxuYWxsVGFza0NhdGVnb3JpZXMuZm9yRWFjaCgodGFza0NhdGVnb3J5KSA9PiB7XG4gIHRhc2tDYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwicmVtb3ZlLXRhc2stY2F0ZWdvcnlcIikge1xuICAgICAgY2xlYXJUYXNrQ2F0ZWdvcnlDb250ZW50KCk7XG4gICAgICByZW1vdmVUYXNrQ2F0ZWdvcnkoZXZlbnQpO1xuICAgICAgY2xlYXJUYXNrQ2F0ZWdvcmllcygpO1xuICAgICAgZGlzcGxheVRhc2tDYXRlZ29yaWVzKCk7XG4gICAgICBjb25zb2xlLmxvZyhmaW5kVGFza0NhdGVnb3J5SW5kZXhJc1NlbGVjdGVkKCkpO1xuICAgICAgLy8gSWYgdGhlIHRhc2sgY2F0ZWdvcnkgdGhhdCB3YXMgcmVtb3ZlZCB3YXMgdGhlIG9uZSB0aGF0IHdhcyBzZWxlY3RlZFxuICAgICAgaWYgKGZpbmRUYXNrQ2F0ZWdvcnlJbmRleElzU2VsZWN0ZWQoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhc2tDYXRlZ29yeUNvbnRlbnQoZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCgpKTtcbiAgICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWRUYXNrQ2F0ZWdvcnkoZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIFNlbGVjdCB0YXNrIGNhdGVnb3J5IGV2ZW50IGxpc3RlbmVyXG5hbGxUYXNrQ2F0ZWdvcmllcy5mb3JFYWNoKCh0YXNrQ2F0ZWdvcnkpID0+IHtcbiAgdGFza0NhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcInRhc2stY2F0ZWdvcnlcIiB8fFxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJ0YXNrLWNhdGVnb3J5LW5hbWVcIlxuICAgICkge1xuICAgICAgcmVtb3ZlSGlnaGxpZ2h0VGFza0NhdGVnb3JpZXMoKTtcbiAgICAgIHJlbW92ZVRhc2tDYXRlZ29yeVNlbGVjdGlvbigpO1xuICAgICAgU2VsZWN0VGFza0NhdGVnb3J5KGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMV0pO1xuICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWRUYXNrQ2F0ZWdvcnkoZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCgpKTtcbiAgICAgIGNsZWFyVGFza0NhdGVnb3J5Q29udGVudCgpO1xuICAgICAgdGFza0NhdGVnb3J5Q29udGVudChmaW5kVGFza0NhdGVnb3J5SW5kZXhJc1NlbGVjdGVkKCkpO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==