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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: roboto-black;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Form */\n\n/* .is-blurred {\n  filter: blur(5px);\n} */\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.649);\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px;\n  width: 420px;\n  height: 300px;\n  z-index: 5;\n  border-radius: 20px;\n  background-color: #f0eef1;\n  backdrop-filter: blur(15px);\n}\n\n.remove-options {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n}\n\n#delete,\n#close {\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.form-column-1 {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\ntextarea {\n  resize: none;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n}\n\n.task-title {\n  display: flex;\n  flex-direction: column;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-column-2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.column-2-option {\n  display: flex;\n  flex-direction: column;\n}\n\n#submit {\n  border-radius: 50px;\n  padding: 10px;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n  background-color: white;\n  color: #171717;\n  border: 0;\n}\n#submit:hover {\n  background-color: rgb(195, 195, 195);\n  color: white;\n}\n\n#submit:active {\n  background-color: white;\n  color: rgb(195, 195, 195);\n}\n\n/* Hover animations */\n.grow {\n  transition: all 0.2s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.5);\n}\n\n.grow-2 {\n  transition: all 0.1s ease-in-out;\n}\n\n.grow-2:hover {\n  transform: scale(1.1);\n}\n/* End of hover animations */\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  font-family: \"roboto-black\";\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 84px 1fr;\n  grid-template-columns: 290px 1fr;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Top bar */\n#top-bar {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: fit-content;\n  z-index: 3;\n  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.16);\n  background-color: white;\n}\n\n.top-bar-left {\n  display: flex;\n  gap: 20px;\n}\n\n.side-bar-icon,\n.dark-light-mode,\n.info-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.info {\n  width: 40px;\n  height: 40px;\n}\n\n.info .info-container {\n  visibility: hidden;\n  position: absolute;\n  top: 105px;\n  right: 20px;\n  background-color: black;\n  color: white;\n  width: 400px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: justify;\n  line-height: 25px;\n  font-size: 1.25rem;\n  /* z-index: 100; */\n}\n\n.info:hover .info-container {\n  visibility: visible;\n}\n\n/* Side bar */\n#side-bar {\n  position: relative;\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  font-size: 1.25rem;\n  z-index: 2;\n  width: 250px;\n  transition: padding-left 0.2s ease-in-out;\n  background-color: white;\n}\n\n.today-late {\n  white-space: nowrap;\n  width: 250px;\n  overflow: hidden;\n}\n\n.today,\n.late,\n.task-categories-header {\n  display: flex;\n  align-items: center;\n}\n\n.today,\n.late {\n  cursor: pointer;\n  gap: 5px;\n  padding-left: 10px;\n}\n\n.today-icon,\n.late-icon,\n.plus-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n\n.task-categories-header {\n  justify-content: space-between;\n}\n\nbutton.add-task-category {\n  border: 0;\n  padding: 0;\n  background-color: white;\n  cursor: pointer;\n}\n\n.task-category-icon-color {\n  width: 1rem;\n  height: 1.3rem;\n  border: 0;\n  padding: 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.task-category-icon-color:hover {\n  transform: scale(1.2);\n}\n\n.task-category .remove-task-category {\n  visibility: hidden;\n  margin-left: auto;\n  width: 1.5rem;\n}\n\n.task-category:hover .remove-task-category {\n  visibility: visible;\n}\n\n.remove-task-category:hover {\n  transform: scale(1.2);\n}\n\n.task-category-name:hover {\n  transform: scale(1.2);\n}\n\n.new-task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-left: 5px;\n}\n\n/* Task categories, added by the user */\n.task-category {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  padding: 5px;\n}\n\n/* Main content, populated by other modules */\n#main-content {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #f0eef1;\n}\n\n.task-category-content {\n  /* height: 70%; */\n  background-color: #f0eef1;\n  overflow: auto;\n  /* overflow-y: scroll;\n  overflow-x: scroll; */\n}\n\n.add-task-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n\nbutton.add-task-button {\n  border-radius: 50px;\n  padding: 10px;\n  font-size: 1.5rem;\n  background-color: white;\n  color: black;\n  border: 0;\n}\n\nbutton.add-task-button:hover {\n  color: white;\n  background-color: black;\n}\n\nbutton.add-task-button:active {\n  color: black;\n  background-color: white;\n}\n\n.task-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  justify-content: center;\n  row-gap: 50px;\n  column-gap: 100px;\n  padding: 20px 50px 20px 50px;\n}\n\n/* No side bar if page loads while window size is small*/\n@media only screen and (max-width: 799px) {\n  #main-content {\n    grid-column: 1 / 3;\n  }\n  #side-bar {\n    width: 0;\n    padding: 0;\n  }\n\n  .today-late {\n    width: 0;\n  }\n\n  .task-categories {\n    width: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: roboto-black;\n  src: url(./fonts/Roboto-Medium.ttf);\n}\n\n/* Form */\n\n/* .is-blurred {\n  filter: blur(5px);\n} */\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.649);\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px;\n  width: 420px;\n  height: 300px;\n  z-index: 5;\n  border-radius: 20px;\n  background-color: #f0eef1;\n  backdrop-filter: blur(15px);\n}\n\n.remove-options {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n}\n\n#delete,\n#close {\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.form-column-1 {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\ntextarea {\n  resize: none;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n}\n\n.task-title {\n  display: flex;\n  flex-direction: column;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-column-2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.column-2-option {\n  display: flex;\n  flex-direction: column;\n}\n\n#submit {\n  border-radius: 50px;\n  padding: 10px;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n  background-color: white;\n  color: #171717;\n  border: 0;\n}\n#submit:hover {\n  background-color: rgb(195, 195, 195);\n  color: white;\n}\n\n#submit:active {\n  background-color: white;\n  color: rgb(195, 195, 195);\n}\n\n/* Hover animations */\n.grow {\n  transition: all 0.2s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.5);\n}\n\n.grow-2 {\n  transition: all 0.1s ease-in-out;\n}\n\n.grow-2:hover {\n  transform: scale(1.1);\n}\n/* End of hover animations */\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  font-family: \"roboto-black\";\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 84px 1fr;\n  grid-template-columns: 290px 1fr;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Top bar */\n#top-bar {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: fit-content;\n  z-index: 3;\n  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.16);\n  background-color: white;\n}\n\n.top-bar-left {\n  display: flex;\n  gap: 20px;\n}\n\n.side-bar-icon,\n.dark-light-mode,\n.info-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.info {\n  width: 40px;\n  height: 40px;\n}\n\n.info .info-container {\n  visibility: hidden;\n  position: absolute;\n  top: 105px;\n  right: 20px;\n  background-color: black;\n  color: white;\n  width: 400px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: justify;\n  line-height: 25px;\n  font-size: 1.25rem;\n  /* z-index: 100; */\n}\n\n.info:hover .info-container {\n  visibility: visible;\n}\n\n/* Side bar */\n#side-bar {\n  position: relative;\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  font-size: 1.25rem;\n  z-index: 2;\n  width: 250px;\n  transition: padding-left 0.2s ease-in-out;\n  background-color: white;\n}\n\n.today-late {\n  white-space: nowrap;\n  width: 250px;\n  overflow: hidden;\n}\n\n.today,\n.late,\n.task-categories-header {\n  display: flex;\n  align-items: center;\n}\n\n.today,\n.late {\n  cursor: pointer;\n  gap: 5px;\n  padding-left: 10px;\n}\n\n.today-icon,\n.late-icon,\n.plus-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n\n.task-categories-header {\n  justify-content: space-between;\n}\n\nbutton.add-task-category {\n  border: 0;\n  padding: 0;\n  background-color: white;\n  cursor: pointer;\n}\n\n.task-category-icon-color {\n  width: 1rem;\n  height: 1.3rem;\n  border: 0;\n  padding: 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.task-category-icon-color:hover {\n  transform: scale(1.2);\n}\n\n.task-category .remove-task-category {\n  visibility: hidden;\n  margin-left: auto;\n  width: 1.5rem;\n}\n\n.task-category:hover .remove-task-category {\n  visibility: visible;\n}\n\n.remove-task-category:hover {\n  transform: scale(1.2);\n}\n\n.task-category-name:hover {\n  transform: scale(1.2);\n}\n\n.new-task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-left: 5px;\n}\n\n/* Task categories, added by the user */\n.task-category {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  padding: 5px;\n}\n\n/* Main content, populated by other modules */\n#main-content {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #f0eef1;\n}\n\n.task-category-content {\n  /* height: 70%; */\n  background-color: #f0eef1;\n  overflow: auto;\n  /* overflow-y: scroll;\n  overflow-x: scroll; */\n}\n\n.add-task-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n\nbutton.add-task-button {\n  border-radius: 50px;\n  padding: 10px;\n  font-size: 1.5rem;\n  background-color: white;\n  color: black;\n  border: 0;\n}\n\nbutton.add-task-button:hover {\n  color: white;\n  background-color: black;\n}\n\nbutton.add-task-button:active {\n  color: black;\n  background-color: white;\n}\n\n.task-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  justify-content: center;\n  row-gap: 50px;\n  column-gap: 100px;\n  padding: 20px 50px 20px 50px;\n}\n\n/* No side bar if page loads while window size is small*/\n@media only screen and (max-width: 799px) {\n  #main-content {\n    grid-column: 1 / 3;\n  }\n  #side-bar {\n    width: 0;\n    padding: 0;\n  }\n\n  .today-late {\n    width: 0;\n  }\n\n  .task-categories {\n    width: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "buildTaskForm": () => (/* binding */ buildTaskForm),
/* harmony export */   "buttonSideBar": () => (/* binding */ buttonSideBar),
/* harmony export */   "clearTaskCategories": () => (/* binding */ clearTaskCategories),
/* harmony export */   "clearTaskCategoryContent": () => (/* binding */ clearTaskCategoryContent),
/* harmony export */   "dashboard": () => (/* binding */ dashboard),
/* harmony export */   "displayTaskCategories": () => (/* binding */ displayTaskCategories),
/* harmony export */   "highlightSelectedTaskCategory": () => (/* binding */ highlightSelectedTaskCategory),
/* harmony export */   "removeHighlightTaskCategories": () => (/* binding */ removeHighlightTaskCategories),
/* harmony export */   "removeTaskForm": () => (/* binding */ removeTaskForm),
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
/* harmony import */ var _images_close_dark_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/close-dark.svg */ "./src/images/close-dark.svg");
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
  const mainContent = document.createElement("div");

  // add attributes
  container.setAttribute("id", "container");
  topBar.setAttribute("id", "top-bar");
  topBar.setAttribute("class", "is-blurred");
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
  sideBar.setAttribute("class", "is-blurred");
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
  mainContent.setAttribute("id", "main-content");
  mainContent.setAttribute("class", "is-blurred");

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
  addTaskButton.setAttribute("class", `add-task-button ${taskCategoryIndex}`);
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
  const selectedTaskCategory = document.getElementsByClassName(
    `task-category ${selectedElementClassIndex}`
  );
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
function buildTaskForm() {
  // declare elements
  const body = document.querySelector("body");
  const overlay = document.createElement("div");
  const formContainer = document.createElement("div");
  const removeOptions = document.createElement("div");
  const deleteTask = document.createElement("div");
  const deleteTaskImg = document.createElement("img");
  const close = document.createElement("div");
  const closeImg = document.createElement("img");
  const form = document.createElement("form");
  const formColumn1 = document.createElement("div");
  const taskTitle = document.createElement("div");
  const taskTitleLabel = document.createElement("label");
  const taskTitleLabelTxt = document.createTextNode("TASK TITLE");
  const taskTitleInput = document.createElement("input");
  const description = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const descriptionLabelTxt = document.createTextNode("DESCRIPTION");
  const descriptionTextArea = document.createElement("textarea");
  const formColumn2 = document.createElement("div");
  const column2Option1 = document.createElement("div");
  const taskCategoriesSelectionLabel = document.createElement("label");
  const taskCategoriesSelectionLabelTxt =
    document.createTextNode("TASK CATEGORY:");
  const taskCategoriesSelectionSelect = document.createElement("select");
  const column2Option2 = document.createElement("div");
  const dueDateSelectionLabel = document.createElement("label");
  const dueDateSelectionLabelTxt = document.createTextNode("DUE DATE:");
  const dueDateSelectionInput = document.createElement("input");
  const column2Option3 = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityLabelTxt = document.createTextNode("PRIORITY:");
  const prioritySelect = document.createElement("select");
  const priority1Option = document.createElement("option");
  const priority1OptionTxt = document.createTextNode("Priority 1");
  const priority2Option = document.createElement("option");
  const priority2OptionTxt = document.createTextNode("Priority 2");
  const priority3Option = document.createElement("option");
  const priority3OptionTxt = document.createTextNode("Priority 3");
  const priority4Option = document.createElement("option");
  const priority4OptionTxt = document.createTextNode("Priority 4");
  const submitButton = document.createElement("button");
  const submitButtonTxt = document.createTextNode("SUBMIT");

  // add attributes
  overlay.setAttribute("id", "overlay");
  formContainer.setAttribute("id", "form-container");
  removeOptions.setAttribute("class", "remove-options");
  deleteTask.setAttribute("class", "delete-task");
  deleteTaskImg.setAttribute("id", "delete");
  deleteTaskImg.setAttribute("src", _images_trash_can_dark_svg__WEBPACK_IMPORTED_MODULE_7__);
  deleteTaskImg.setAttribute("alt", "delete icon");
  close.setAttribute("class", "close");
  closeImg.setAttribute("id", "close");
  closeImg.setAttribute("src", _images_close_dark_svg__WEBPACK_IMPORTED_MODULE_8__);
  closeImg.setAttribute("alt", "close form window icon");
  form.setAttribute("action", "javascript:function();"); // TO BE SENT TO A LOGIC.JS FUNCTION
  form.setAttribute("method", "post");
  form.setAttribute("id", "form");
  formColumn1.setAttribute("class", "form-column-1");
  taskTitle.setAttribute("class", "task-title");
  taskTitleLabel.setAttribute("for", "task-title");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("id", "task-title");
  taskTitleInput.setAttribute("required", "");
  taskTitleInput.setAttribute("maxlength", "30");
  description.setAttribute("class", "description");
  descriptionLabel.setAttribute("for", "description");
  descriptionTextArea.setAttribute("name", "description");
  descriptionTextArea.setAttribute("id", "description");
  descriptionTextArea.setAttribute("cols", "28");
  descriptionTextArea.setAttribute("rows", "6");
  descriptionTextArea.setAttribute("form", "form");
  formColumn2.setAttribute("class", "form-column-2");
  column2Option1.setAttribute("class", "column-2-option");
  taskCategoriesSelectionLabel.setAttribute("for", "task-categories-selection");
  taskCategoriesSelectionSelect.setAttribute("id", "task-categories-selection");
  taskCategoriesSelectionSelect.setAttribute("name", "task-categories");
  column2Option2.setAttribute("class", "column-2-option");
  dueDateSelectionLabel.setAttribute("for", "due-date-selection");
  dueDateSelectionInput.setAttribute("type", "date");
  dueDateSelectionInput.setAttribute("id", "due-date-selection");
  dueDateSelectionInput.setAttribute("name", "due-date-selection");
  column2Option3.setAttribute("class", "column-2-option");
  priorityLabel.setAttribute("for", "priority");
  prioritySelect.setAttribute("id", "priority");
  prioritySelect.setAttribute("name", "priority");
  priority1Option.setAttribute("value", "priority-1");
  priority2Option.setAttribute("value", "priority-2");
  priority3Option.setAttribute("value", "priority-3");
  priority4Option.setAttribute("value", "priority-4");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit");
  submitButton.setAttribute("form", "form");

  // append elements to dom (sibling of container)
  body.appendChild(overlay);
  overlay.appendChild(formContainer);
  formContainer.appendChild(removeOptions);
  removeOptions.appendChild(deleteTask);
  deleteTask.appendChild(deleteTaskImg);
  removeOptions.appendChild(close);
  close.appendChild(closeImg);
  formContainer.appendChild(form);
  form.appendChild(formColumn1);
  formColumn1.appendChild(taskTitle);
  taskTitle.appendChild(taskTitleLabel);
  taskTitleLabel.appendChild(taskTitleLabelTxt);
  taskTitle.appendChild(taskTitleInput);
  formColumn1.appendChild(description);
  description.appendChild(descriptionLabel);
  descriptionLabel.appendChild(descriptionLabelTxt);
  description.appendChild(descriptionTextArea);
  form.appendChild(formColumn2);
  formColumn2.appendChild(column2Option1);
  column2Option1.appendChild(taskCategoriesSelectionLabel);
  taskCategoriesSelectionLabel.appendChild(taskCategoriesSelectionLabelTxt);
  column2Option1.appendChild(taskCategoriesSelectionSelect);
  formColumn2.appendChild(column2Option2);
  column2Option2.appendChild(dueDateSelectionLabel);
  dueDateSelectionLabel.appendChild(dueDateSelectionLabelTxt);
  column2Option2.appendChild(dueDateSelectionInput);
  formColumn2.appendChild(column2Option3);
  column2Option3.appendChild(priorityLabel);
  priorityLabel.appendChild(priorityLabelTxt);
  column2Option3.appendChild(prioritySelect);
  prioritySelect.appendChild(priority1Option);
  priority1Option.appendChild(priority1OptionTxt);
  prioritySelect.appendChild(priority2Option);
  priority2Option.appendChild(priority2OptionTxt);
  prioritySelect.appendChild(priority3Option);
  priority3Option.appendChild(priority3OptionTxt);
  prioritySelect.appendChild(priority4Option);
  priority4Option.appendChild(priority4OptionTxt);
  formContainer.appendChild(submitButton);
  submitButton.appendChild(submitButtonTxt);

  // Add blur styling
  const isBlurredElements = document.querySelectorAll(".is-blurred");
  isBlurredElements.forEach((isBlurredElement) => {
    isBlurredElement.style.filter = "blur(5px)";
  });
}

// Remove task form function
function removeTaskForm() {
  const body = document.querySelector("body");
  const overlay = document.querySelector("#overlay");
  while (overlay.firstChild) {
    overlay.removeChild(overlay.lastChild);
  }
  body.removeChild(overlay);

  // Remove blur styling
  const isBlurredElements = document.querySelectorAll(".is-blurred");
  isBlurredElements.forEach((isBlurredElement) => {
    isBlurredElement.style.filter = "none";
  });
}

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

/***/ "./src/images/close-dark.svg":
/*!***********************************!*\
  !*** ./src/images/close-dark.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

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
    if ((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.findTaskCategoryIndexIsSelected)() !== undefined) {
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

// Click add task button event listener
window.addEventListener("click", (event) => {
  if (event.target.matches(".add-task-button")) {
    (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.buildTaskForm)();
  }
});

// Remove add task form event listener
window.addEventListener("click", (event) => {
  if (event.target.matches("#close") || event.target.matches("#overlay")) {
    (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.removeTaskForm)();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVks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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdURBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1EQUFTO0FBQ3hDO0FBQ0EscURBQXFELElBQUk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM2RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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LENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1GQUE2QjtBQUNuQyxNQUFNLHNFQUEyQjtBQUNqQyxNQUFNLDZEQUFrQjtBQUN4QixNQUFNLG1GQUE2QixDQUFDLDBFQUErQjtBQUNuRSxNQUFNLDhFQUF3QjtBQUM5QixNQUFNLHlFQUFtQixDQUFDLDBFQUErQjtBQUN6RDtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQWE7QUFDakI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWM7QUFDbEI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLWJsYWNrO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuXFxuLyogLmlzLWJsdXJyZWQge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxufSAqL1xcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY0OSk7XFxuICB6LWluZGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB6LWluZGV4OiA1O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGVlZjE7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxufVxcblxcbi5yZW1vdmUtb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNkZWxldGUsXFxuI2Nsb3NlIHtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1jb2x1bW4tMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG8tYmxhY2tcXFwiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1jb2x1bW4tMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbHVtbi0yLW9wdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvLWJsYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICMxNzE3MTc7XFxuICBib3JkZXI6IDA7XFxufVxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTk1LCAxOTUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc3VibWl0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiByZ2IoMTk1LCAxOTUsIDE5NSk7XFxufVxcblxcbi8qIEhvdmVyIGFuaW1hdGlvbnMgKi9cXG4uZ3JvdyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdyb3c6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uZ3Jvdy0yIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ3Jvdy0yOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLyogRW5kIG9mIGhvdmVyIGFuaW1hdGlvbnMgKi9cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvLWJsYWNrXFxcIjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkwcHggMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb3AgYmFyICovXFxuI3RvcC1iYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgei1pbmRleDogMztcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b3AtYmFyLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGUtYmFyLWljb24sXFxuLmRhcmstbGlnaHQtbW9kZSxcXG4uaW5mby1pY29uIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbmZvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uaW5mbyAuaW5mby1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDVweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIC8qIHotaW5kZXg6IDEwMDsgKi9cXG59XFxuXFxuLmluZm86aG92ZXIgLmluZm8tY29udGFpbmVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi8qIFNpZGUgYmFyICovXFxuI3NpZGUtYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogMjUwcHg7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kYXktbGF0ZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZGF5LFxcbi5sYXRlLFxcbi50YXNrLWNhdGVnb3JpZXMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kYXksXFxuLmxhdGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50b2RheS1pY29uLFxcbi5sYXRlLWljb24sXFxuLnBsdXMtaWNvbiB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcmllcy1oZWFkZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5idXR0b24uYWRkLXRhc2stY2F0ZWdvcnkge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uLWNvbG9yIHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uLWNvbG9yOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnkgLnJlbW92ZS10YXNrLWNhdGVnb3J5IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnk6aG92ZXIgLnJlbW92ZS10YXNrLWNhdGVnb3J5IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5yZW1vdmUtdGFzay1jYXRlZ29yeTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LW5hbWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubmV3LXRhc2stY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi8qIFRhc2sgY2F0ZWdvcmllcywgYWRkZWQgYnkgdGhlIHVzZXIgKi9cXG4udGFzay1jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50LCBwb3B1bGF0ZWQgYnkgb3RoZXIgbW9kdWxlcyAqL1xcbiNtYWluLWNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWVmMTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktY29udGVudCB7XFxuICAvKiBoZWlnaHQ6IDcwJTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGVlZjE7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDsgKi9cXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5idXR0b24uYWRkLXRhc2stYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuYnV0dG9uLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYnV0dG9uLmFkZC10YXNrLWJ1dHRvbjphY3RpdmUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICByb3ctZ2FwOiA1MHB4O1xcbiAgY29sdW1uLWdhcDogMTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHggMjBweCA1MHB4O1xcbn1cXG5cXG4vKiBObyBzaWRlIGJhciBpZiBwYWdlIGxvYWRzIHdoaWxlIHdpbmRvdyBzaXplIGlzIHNtYWxsKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XFxuICAjbWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgfVxcbiAgI3NpZGUtYmFyIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAudG9kYXktbGF0ZSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcblxcbiAgLnRhc2stY2F0ZWdvcmllcyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1h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LFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOENBQThDO0VBQzlDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQSx3REFBd0Q7QUFDeEQ7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsUUFBUTtJQUNSLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFFBQVE7RUFDVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90by1ibGFjaztcXG4gIHNyYzogdXJsKC4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGYpO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuXFxuLyogLmlzLWJsdXJyZWQge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxufSAqL1xcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY0OSk7XFxuICB6LWluZGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB6LWluZGV4OiA1O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGVlZjE7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxufVxcblxcbi5yZW1vdmUtb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNkZWxldGUsXFxuI2Nsb3NlIHtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1jb2x1bW4tMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG8tYmxhY2tcXFwiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1jb2x1bW4tMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbHVtbi0yLW9wdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvLWJsYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICMxNzE3MTc7XFxuICBib3JkZXI6IDA7XFxufVxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTk1LCAxOTUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc3VibWl0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiByZ2IoMTk1LCAxOTUsIDE5NSk7XFxufVxcblxcbi8qIEhvdmVyIGFuaW1hdGlvbnMgKi9cXG4uZ3JvdyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdyb3c6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uZ3Jvdy0yIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ3Jvdy0yOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLyogRW5kIG9mIGhvdmVyIGFuaW1hdGlvbnMgKi9cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvLWJsYWNrXFxcIjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkwcHggMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb3AgYmFyICovXFxuI3RvcC1iYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgei1pbmRleDogMztcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b3AtYmFyLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGUtYmFyLWljb24sXFxuLmRhcmstbGlnaHQtbW9kZSxcXG4uaW5mby1pY29uIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbmZvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uaW5mbyAuaW5mby1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDVweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIC8qIHotaW5kZXg6IDEwMDsgKi9cXG59XFxuXFxuLmluZm86aG92ZXIgLmluZm8tY29udGFpbmVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi8qIFNpZGUgYmFyICovXFxuI3NpZGUtYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogMjUwcHg7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kYXktbGF0ZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZGF5LFxcbi5sYXRlLFxcbi50YXNrLWNhdGVnb3JpZXMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kYXksXFxuLmxhdGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50b2RheS1pY29uLFxcbi5sYXRlLWljb24sXFxuLnBsdXMtaWNvbiB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcmllcy1oZWFkZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5idXR0b24uYWRkLXRhc2stY2F0ZWdvcnkge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uLWNvbG9yIHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uLWNvbG9yOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnkgLnJlbW92ZS10YXNrLWNhdGVnb3J5IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnk6aG92ZXIgLnJlbW92ZS10YXNrLWNhdGVnb3J5IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5yZW1vdmUtdGFzay1jYXRlZ29yeTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LW5hbWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubmV3LXRhc2stY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi8qIFRhc2sgY2F0ZWdvcmllcywgYWRkZWQgYnkgdGhlIHVzZXIgKi9cXG4udGFzay1jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50LCBwb3B1bGF0ZWQgYnkgb3RoZXIgbW9kdWxlcyAqL1xcbiNtYWluLWNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWVmMTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktY29udGVudCB7XFxuICAvKiBoZWlnaHQ6IDcwJTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGVlZjE7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDsgKi9cXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5idXR0b24uYWRkLXRhc2stYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuYnV0dG9uLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYnV0dG9uLmFkZC10YXNrLWJ1dHRvbjphY3RpdmUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICByb3ctZ2FwOiA1MHB4O1xcbiAgY29sdW1uLWdhcDogMTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHggMjBweCA1MHB4O1xcbn1cXG5cXG4vKiBObyBzaWRlIGJhciBpZiBwYWdlIGxvYWRzIHdoaWxlIHdpbmRvdyBzaXplIGlzIHNtYWxsKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XFxuICAjbWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgfVxcbiAgI3NpZGUtYmFyIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAudG9kYXktbGF0ZSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcblxcbiAgLnRhc2stY2F0ZWdvcmllcyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IHsgdGFza0NhdGVnb3J5TGlicmFyeSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgdGFsbHlNYXJrMyBmcm9tIFwiLi9pbWFnZXMvdGFsbHktbWFyay0zLnBuZ1wiO1xuaW1wb3J0IHN1bkhvbGxvdyBmcm9tIFwiLi9pbWFnZXMvc3VuLWhvbGxvdy5zdmdcIjtcbmltcG9ydCBpbmZvRGFyayBmcm9tIFwiLi9pbWFnZXMvaW5mby1kYXJrLnBuZ1wiO1xuaW1wb3J0IHRvZGF5UE5HIGZyb20gXCIuL2ltYWdlcy90b2RheS5wbmdcIjtcbmltcG9ydCBsYXRlUE5HIGZyb20gXCIuL2ltYWdlcy9sYXRlLnBuZ1wiO1xuaW1wb3J0IHBsdXMgZnJvbSBcIi4vaW1hZ2VzL3BsdXMucG5nXCI7XG5pbXBvcnQgdHJhc2hDYW5EYXJrIGZyb20gXCIuL2ltYWdlcy90cmFzaC1jYW4tZGFyay5zdmdcIjtcbmltcG9ydCBjbG9zZURhcmsgZnJvbSBcIi4vaW1hZ2VzL2Nsb3NlLWRhcmsuc3ZnXCI7XG5cbi8vIGRhc2hib2FyZCBmdW5jdGlvbiAoZm9yIGxvYWRpbmcgdGhlIHNpZGUgYW5kIHRvcCBiYXJzKVxuZnVuY3Rpb24gZGFzaGJvYXJkKCkge1xuICAvLyBOT1RFOiBBIGdyaWQgc3lzdGVtIGlzIHRvIGJlIGNyZWF0ZWQgd2l0aCB0aGlzIGZ1bmN0aW9uLiBUaGUgc2lkZSBhbmQgdG9wIGJhcnMgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBlbGVtZW50cyxcbiAgLy8gICAgICAgYW5kIHRoZSBtYWluIHNlY3Rpb24gKGNvbHVtbiAyIGFuZCByb3cgMikgd2lsbCBiZSBsZWZ0IGFzIGFuIGh0bWwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIGFuIGltYWdlLCB3aGljaCBpc1xuICAvLyAgICAgICB0byBiZSByZXBsYWNlZCBhbmQgZmlsbGVkIGJ5IHRoZSBvdGhlciBmdW5jdGlvbnNcbiAgLy8gICAgICAgaWU6IHRvZGF5IGZ1bmN0aW9uLCBsYXRlIGZ1bmN0aW9uLCBhbmQgdGFza0NhdGVnb3J5IGZ1bmN0aW9uXG4gIC8vIE5PVEU6IFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWdhaW4gd2hlbiBhIHRhc2tDYXRlZ29yeSBpcyBlaXRoZXIgYWRkZWQgb3IgcmVtb3ZlZCwgYmVjYXVzZSB0aGlzIG5lZWRzIHRvIGJlXG4gIC8vICAgICAgIGRpc3BsYXllZCBpbiB0aGUgc2lkZSBiYXJcblxuICAvLyBkZWNsYXJlIGVsZW1lbnRzXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcEJhckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaWRlQmFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGRhcmtMaWdodE1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCB0b3BCYXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvQ29udGFpbmVyVHh0MSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiVGhpcyBpcyBhIHRvZG8gbGlzdCBhcHBsaWNhdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gcmVjb3JkIHRhc2tzLCBrZWVwIHRyYWNrIG9mIHRoZW0sIGFuZCBjb21wbGV0ZSB0aGVtLiBDcmVhdGUgYSB0YXNrIGNhdGVnb3J5LCBmaWxsIGl0IHdpdGggdGFza3MsIGFuZCBrZWVwIHRyYWNrIG9mIHRoZW0gdGhyb3VnaCB0aGUgdGFzayBjYXRlZ29yeSB0YWIsIG9yIHRocm91Z2ggdGhlIHRvZGF5IGFuZCBsYXRlIHRhYnMuXCJcbiAgKTtcbiAgY29uc3QgbmV3TGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIGNvbnN0IG5ld0xpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICBjb25zdCBpbmZvQ29udGFpbmVyVHh0MiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiVGhpcyB3ZWJzaXRlIHdhcyBjcmVhdGVkIGJ5IERhbmllbCBCYWxsZXJpbmksIHdpdGggaGVscCBmcm9tIHRoZSBPZGluIFByb2plY3QuXCJcbiAgKTtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5TGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgdG9kYXlUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RheVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVG9kYXlcIik7XG4gIGNvbnN0IGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGxhdGVUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYXRlVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMYXRlXCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXNIZWFkZXJUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcmllc0hlYWRlclR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGFzayBDYXRlZ29yaWVzXCIpO1xuICBjb25zdCBhZGRUYXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IG5ld1Rhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIGFkZCBhdHRyaWJ1dGVzXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcbiAgdG9wQmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wLWJhclwiKTtcbiAgdG9wQmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXMtYmx1cnJlZFwiKTtcbiAgdG9wQmFyTGVmdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcC1iYXItbGVmdFwiKTtcbiAgc2lkZUJhckljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlLWJhci1pY29uIGdyb3dcIik7XG4gIHNpZGVCYXJJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0YWxseU1hcmszKTtcbiAgc2lkZUJhckljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwic2lkZSBiYXIgaWNvblwiKTtcbiAgZGFya0xpZ2h0TW9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRhcmstbGlnaHQtbW9kZSBncm93XCIpO1xuICBkYXJrTGlnaHRNb2RlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzdW5Ib2xsb3cpO1xuICBkYXJrTGlnaHRNb2RlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImxpZ2h0IG1vZGUgZGFyayBtb2RlIGljb25cIik7XG4gIHRvcEJhclJpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wLWJhci1yaWdodFwiKTtcbiAgaW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm9cIik7XG4gIGluZm9JY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5mby1pY29uXCIpO1xuICBpbmZvSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW5mb0RhcmspO1xuICBpbmZvSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJpbmZvIGljb25cIik7XG4gIGluZm9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmZvLWNvbnRhaW5lclwiKTtcbiAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGUtYmFyXCIpO1xuICBzaWRlQmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXMtYmx1cnJlZFwiKTtcbiAgdG9kYXlMYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kYXktbGF0ZVwiKTtcbiAgdG9kYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RheSBncm93LTJcIik7XG4gIHRvZGF5SWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZGF5LWljb25cIik7XG4gIHRvZGF5SWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdG9kYXlQTkcpO1xuICB0b2RheUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwidG9kYXkgb3B0aW9uIGljb25cIik7XG4gIGxhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYXRlIGdyb3ctMlwiKTtcbiAgbGF0ZUljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYXRlLWljb25cIik7XG4gIGxhdGVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsYXRlUE5HKTtcbiAgbGF0ZUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwibGF0ZSBvcHRpb24gaWNvblwiKTtcbiAgdGFza0NhdGVnb3JpZXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWNhdGVnb3JpZXNcIik7XG4gIHRhc2tDYXRlZ29yaWVzSGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1jYXRlZ29yaWVzLWhlYWRlclwiKTtcbiAgYWRkVGFza0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWRkLXRhc2stY2F0ZWdvcnlcIik7XG4gIHBsdXNJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGx1cy1pY29uIGdyb3dcIik7XG4gIHBsdXNJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwbHVzKTtcbiAgcGx1c0ljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiYWRkIHRhc2sgY2F0ZWdvcnkgaWNvblwiKTtcbiAgbmV3VGFza0NhdGVnb3JpZXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXctdGFzay1jYXRlZ29yaWVzXCIpO1xuICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGVudFwiKTtcbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpcy1ibHVycmVkXCIpO1xuXG4gIC8vIGFwcGVuZCBlbGVtZW50cyB0byBkb21cbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9wQmFyKTtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhckxlZnQpO1xuICB0b3BCYXJMZWZ0LmFwcGVuZENoaWxkKHNpZGVCYXJJY29uKTtcbiAgdG9wQmFyTGVmdC5hcHBlbmRDaGlsZChkYXJrTGlnaHRNb2RlKTtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhclJpZ2h0KTtcbiAgdG9wQmFyUmlnaHQuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb0ljb24pO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXJUeHQxKTtcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMaW5lMSk7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3TGluZTIpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXJUeHQyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHRvZGF5TGF0ZSk7XG4gIHRvZGF5TGF0ZS5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5SWNvbik7XG4gIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5VHh0Q29udGFpbmVyKTtcbiAgdG9kYXlUeHRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlUeHQpO1xuICB0b2RheUxhdGUuYXBwZW5kQ2hpbGQobGF0ZSk7XG4gIGxhdGUuYXBwZW5kQ2hpbGQobGF0ZUljb24pO1xuICBsYXRlLmFwcGVuZENoaWxkKGxhdGVUeHRDb250YWluZXIpO1xuICBsYXRlVHh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhdGVUeHQpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzKTtcbiAgdGFza0NhdGVnb3JpZXMuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3JpZXNIZWFkZXIpO1xuICB0YXNrQ2F0ZWdvcmllc0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcmllc0hlYWRlclR4dENvbnRhaW5lcik7XG4gIHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0KTtcbiAgdGFza0NhdGVnb3JpZXNIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NhdGVnb3J5KTtcbiAgYWRkVGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgdGFza0NhdGVnb3JpZXMuYXBwZW5kQ2hpbGQobmV3VGFza0NhdGVnb3JpZXMpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbnRhaW5lciA+ICNtYWluLWNvbnRlbnRcIlxuICApOyAvLyBUaGlzIHZhcmlhYmxlIGV4aXN0cyB0byBvdmVycmlkZSB0aGUgc3R5bGluZyBvZiB0aGUgbWFpbkNvbnRlbnRcbn1cblxuLy8gV2luZG93IHJlc2l6ZSBzaWRlYmFyIGZ1bmN0aW9uIHRoYXQgcmV0cmFjdHMgYW5kIGV4cGFuZHMgdGhlIHNpZGUgYmFyIGRlcGVuZGluZyBvbiB3aW5kb3cgc2l6ZVxuZnVuY3Rpb24gd2luZG93UmVzaXplU2lkZUJhcih3aW5kb3dSZXNpemVEaXJlY3Rpb24pIHtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZS1iYXJcIik7XG4gIGNvbnN0IG1haW5Db250ZW50UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbnRhaW5lciA+ICNtYWluLWNvbnRlbnRcIlxuICApO1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuICBjb25zdCB0b2RheUxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWxhdGVcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNhdGVnb3JpZXNcIik7XG5cbiAgaWYgKFxuICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPCA4MDAgJiZcbiAgICB3aW5kb3dSZXNpemVEaXJlY3Rpb24gPCAwICYmXG4gICAgc2lkZUJhci5vZmZzZXRXaWR0aCA9PT0gMjkwXG4gICkge1xuICAgIG1haW5Db250ZW50LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEgLyAzXCI7XG4gICAgc2lkZUJhci5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIHNpZGVCYXIuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgIHRvZGF5TGF0ZS5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIHRhc2tDYXRlZ29yaWVzLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPiA4MDAgJiYgd2luZG93UmVzaXplRGlyZWN0aW9uID4gMCkge1xuICAgIG1haW5Db250ZW50UHJpb3JpdHkuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMiAvIDNcIjtcbiAgICBzaWRlQmFyLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgIHNpZGVCYXIuc3R5bGUucGFkZGluZyA9IFwiMjBweFwiO1xuICAgIHRvZGF5TGF0ZS5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgICB0YXNrQ2F0ZWdvcmllcy5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgfVxufVxuXG4vLyBCdXR0b24gc2lkZWJhciBmdW5jdGlvbiB0aGF0IHJldHJhY3RzIGFuZCBleHBhbmRzIHRoZSBzaWRlIGJhciB3aGVuIHRoZSBidXR0b24gaXMgcHJlc3NlZFxuZnVuY3Rpb24gYnV0dG9uU2lkZUJhcihldmVudCkge1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlLWJhclwiKTtcbiAgY29uc3QgbWFpbkNvbnRlbnRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjY29udGFpbmVyID4gI21haW4tY29udGVudFwiXG4gICk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG4gIGNvbnN0IHRvZGF5TGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktbGF0ZVwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2F0ZWdvcmllc1wiKTtcblxuICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIuc2lkZS1iYXItaWNvblwiKSkge1xuICAgIGlmIChzaWRlQmFyLm9mZnNldFdpZHRoID09PSAwKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA+IDgwMCkge1xuICAgICAgICBtYWluQ29udGVudFByaW9yaXR5LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIgLyAzXCI7XG4gICAgICB9XG4gICAgICBzaWRlQmFyLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgICAgc2lkZUJhci5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCI7XG4gICAgICB0b2RheUxhdGUuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgICB0YXNrQ2F0ZWdvcmllcy5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgICB9XG4gICAgaWYgKHNpZGVCYXIub2Zmc2V0V2lkdGggPT09IDI5MCkge1xuICAgICAgbWFpbkNvbnRlbnQuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMSAvIDNcIjtcbiAgICAgIHNpZGVCYXIuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgIHNpZGVCYXIuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgICAgdG9kYXlMYXRlLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgICB0YXNrQ2F0ZWdvcmllcy5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIH1cbiAgfVxufVxuXG4vLyBEaXNwbGF5IHRhc2sgY2F0ZWdvcmllcyBpbiBzaWRlIGJhciBmdW5jdGlvblxuZnVuY3Rpb24gZGlzcGxheVRhc2tDYXRlZ29yaWVzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tDYXRlZ29yeUxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBkZWNsYXJlIGVsZW1lbnRzXG4gICAgY29uc3QgbmV3VGFza0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWNhdGVnb3JpZXNcIik7XG4gICAgY29uc3QgdGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrQ2F0ZWdvcnlJY29uQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgdGFza0NhdGVnb3J5VHh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBUYXNrQ2F0ZWdvcnlUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgIHRhc2tDYXRlZ29yeUxpYnJhcnlbaV0uZ2V0VGl0bGUoKVxuICAgICk7XG4gICAgLy8gY29uc3QgcmVtb3ZlVGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZW1vdmVUYXNrQ2F0ZWdvcnlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgLy8gYWRkIGF0dHJpYnV0ZXNcbiAgICB0YXNrQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcInRhc2stY2F0ZWdvcnlcIiwgaSwgXCJncm93LTJcIik7XG4gICAgdGFza0NhdGVnb3J5SWNvbkNvbG9yLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNhdGVnb3J5LWljb24tY29sb3JcIiwgaSk7XG4gICAgdGFza0NhdGVnb3J5SWNvbkNvbG9yLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcbiAgICB0YXNrQ2F0ZWdvcnlJY29uQ29sb3Iuc2V0QXR0cmlidXRlKFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgdGFza0NhdGVnb3J5TGlicmFyeVtpXS5nZXRDb2xvcigpXG4gICAgKTtcbiAgICB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY2F0ZWdvcnktbmFtZVwiLCBpKTtcbiAgICB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgXCJvbmNsaWNrXCIsXG4gICAgICBcInRoaXMuY29udGVudEVkaXRhYmxlPXRydWVcIlxuICAgICk7XG4gICAgdGFza0NhdGVnb3J5VHh0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIFwib25ibHVyXCIsXG4gICAgICBcInRoaXMuY29udGVudEVkaXRhYmxlPWZhbHNlXCJcbiAgICApO1xuICAgIHJlbW92ZVRhc2tDYXRlZ29yeUltZy5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXRhc2stY2F0ZWdvcnlcIiwgaSk7XG4gICAgcmVtb3ZlVGFza0NhdGVnb3J5SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0cmFzaENhbkRhcmspO1xuXG4gICAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGRvbVxuICAgIG5ld1Rhc2tDYXRlZ29yaWVzLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeSk7XG4gICAgdGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeUljb25Db2xvcik7XG4gICAgdGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeVR4dENvbnRhaW5lcik7XG4gICAgdGFza0NhdGVnb3J5VHh0Q29udGFpbmVyLmFwcGVuZENoaWxkKFRhc2tDYXRlZ29yeVR4dCk7XG4gICAgdGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHJlbW92ZVRhc2tDYXRlZ29yeUltZyk7XG4gIH1cbn1cblxuLy8gQ2xlYXIgdGFzayBjYXRlZ29yaWVzIGZ1bmN0aW9uXG5mdW5jdGlvbiBjbGVhclRhc2tDYXRlZ29yaWVzKCkge1xuICBjb25zdCBuZXdUYXNrQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stY2F0ZWdvcmllc1wiKTtcbiAgbmV3VGFza0NhdGVnb3JpZXMucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaCgobikgPT4gbi5yZW1vdmUoKSk7XG59XG5cbi8vIHRhc2tDYXRlZ29yeUNvbnRlbnQgZnVuY3Rpb24gKGZvciBsb2FkaW5nIHRoZSBjb250ZW50IG9mIGEgdGFza0NhdGVnb3J5IHRoYXQgaGFzIGJlZW4gc2VsZWN0ZWQpXG5mdW5jdGlvbiB0YXNrQ2F0ZWdvcnlDb250ZW50KHRhc2tDYXRlZ29yeUluZGV4KSB7XG4gIC8vIGRlY2xhcmUgZWxlbWVudHNcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b25UeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIisgQWRkIFRhc2tcIik7XG4gIGNvbnN0IHRhc2tDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gYWRkIGF0dHJpYnV0ZXNcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXRlZ29yeS1jb250ZW50XCIsIHRhc2tDYXRlZ29yeUluZGV4KTtcbiAgYWRkVGFza0J1dHRvbldyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhZGQtdGFzay1idXR0b24td3JhcHBlclwiKTtcbiAgYWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgYWRkLXRhc2stYnV0dG9uICR7dGFza0NhdGVnb3J5SW5kZXh9YCk7XG4gIHRhc2tDYXJkcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2FyZHNcIik7XG5cbiAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGRvbVxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uV3JhcHBlcik7XG4gIGFkZFRhc2tCdXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICBhZGRUYXNrQnV0dG9uLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b25UeHQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tDYXJkcyk7XG59XG5cbi8vIEhpZ2hsaWdodCBzZWxlY3RlZCB0YXNrIGNhdGVnb3J5IGZ1bmN0aW9uXG5mdW5jdGlvbiBoaWdobGlnaHRTZWxlY3RlZFRhc2tDYXRlZ29yeShzZWxlY3RlZEVsZW1lbnRDbGFzc0luZGV4KSB7XG4gIGNvbnN0IHNlbGVjdGVkVGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBgdGFzay1jYXRlZ29yeSAke3NlbGVjdGVkRWxlbWVudENsYXNzSW5kZXh9YFxuICApO1xuICBzZWxlY3RlZFRhc2tDYXRlZ29yeVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmMGVlZjFcIjtcbn1cblxuLy8gUmVtb3ZlIGhpZ2hsaWdodCBmcm9tIHRhc2sgY2F0ZWdvcmllcyBmdW5jdGlvblxuZnVuY3Rpb24gcmVtb3ZlSGlnaGxpZ2h0VGFza0NhdGVnb3JpZXMoKSB7XG4gIGNvbnN0IG5ld1Rhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1jYXRlZ29yaWVzXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Rhc2tDYXRlZ29yaWVzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5ld1Rhc2tDYXRlZ29yaWVzLmNoaWxkcmVuW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJcIikge1xuICAgICAgbmV3VGFza0NhdGVnb3JpZXMuY2hpbGRyZW5baV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH1cbiAgfVxufVxuXG4vLyBDbGVhciB0YXNrIGNhdGVnb3J5IGNvbnRlbnQgZnVuY3Rpb25cbmZ1bmN0aW9uIGNsZWFyVGFza0NhdGVnb3J5Q29udGVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcbiAgbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaCgobikgPT4gbi5yZW1vdmUoKSk7XG59XG5cbi8vIE1vZGFsIHdpbmRvdyBmdW5jdGlvblxuZnVuY3Rpb24gYnVpbGRUYXNrRm9ybSgpIHtcbiAgLy8gZGVjbGFyZSBlbGVtZW50c1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcmVtb3ZlT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZWxldGVUYXNrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgZm9ybUNvbHVtbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGFza1RpdGxlTGFiZWxUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRBU0sgVElUTEVcIik7XG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWxUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkRFU0NSSVBUSU9OXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBmb3JtQ29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbjJPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXNTZWxlY3Rpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXNTZWxlY3Rpb25MYWJlbFR4dCA9XG4gICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUQVNLIENBVEVHT1JZOlwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXNTZWxlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBjb2x1bW4yT3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGR1ZURhdGVTZWxlY3Rpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZHVlRGF0ZVNlbGVjdGlvbkxhYmVsVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJEVUUgREFURTpcIik7XG4gIGNvbnN0IGR1ZURhdGVTZWxlY3Rpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY29sdW1uMk9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQUklPUklUWTpcIik7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJpb3JpdHkxT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHkxT3B0aW9uVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQcmlvcml0eSAxXCIpO1xuICBjb25zdCBwcmlvcml0eTJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBwcmlvcml0eTJPcHRpb25UeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlByaW9yaXR5IDJcIik7XG4gIGNvbnN0IHByaW9yaXR5M09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5M09wdGlvblR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUHJpb3JpdHkgM1wiKTtcbiAgY29uc3QgcHJpb3JpdHk0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHk0T3B0aW9uVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQcmlvcml0eSA0XCIpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBzdWJtaXRCdXR0b25UeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNVQk1JVFwiKTtcblxuICAvLyBhZGQgYXR0cmlidXRlc1xuICBvdmVybGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwib3ZlcmxheVwiKTtcbiAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tY29udGFpbmVyXCIpO1xuICByZW1vdmVPcHRpb25zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmVtb3ZlLW9wdGlvbnNcIik7XG4gIGRlbGV0ZVRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGUtdGFza1wiKTtcbiAgZGVsZXRlVGFza0ltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZVwiKTtcbiAgZGVsZXRlVGFza0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdHJhc2hDYW5EYXJrKTtcbiAgZGVsZXRlVGFza0ltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJkZWxldGUgaWNvblwiKTtcbiAgY2xvc2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZVwiKTtcbiAgY2xvc2VJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZVwiKTtcbiAgY2xvc2VJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNsb3NlRGFyayk7XG4gIGNsb3NlSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImNsb3NlIGZvcm0gd2luZG93IGljb25cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiamF2YXNjcmlwdDpmdW5jdGlvbigpO1wiKTsgLy8gVE8gQkUgU0VOVCBUTyBBIExPR0lDLkpTIEZVTkNUSU9OXG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1cIik7XG4gIGZvcm1Db2x1bW4xLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jb2x1bW4tMVwiKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIyOFwiKTtcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNlwiKTtcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJmb3JtXCIsIFwiZm9ybVwiKTtcbiAgZm9ybUNvbHVtbjIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNvbHVtbi0yXCIpO1xuICBjb2x1bW4yT3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbHVtbi0yLW9wdGlvblwiKTtcbiAgdGFza0NhdGVnb3JpZXNTZWxlY3Rpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWNhdGVnb3JpZXMtc2VsZWN0aW9uXCIpO1xuICB0YXNrQ2F0ZWdvcmllc1NlbGVjdGlvblNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stY2F0ZWdvcmllcy1zZWxlY3Rpb25cIik7XG4gIHRhc2tDYXRlZ29yaWVzU2VsZWN0aW9uU2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWNhdGVnb3JpZXNcIik7XG4gIGNvbHVtbjJPcHRpb24yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sdW1uLTItb3B0aW9uXCIpO1xuICBkdWVEYXRlU2VsZWN0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlLWRhdGUtc2VsZWN0aW9uXCIpO1xuICBkdWVEYXRlU2VsZWN0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGR1ZURhdGVTZWxlY3Rpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS1kYXRlLXNlbGVjdGlvblwiKTtcbiAgZHVlRGF0ZVNlbGVjdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWUtZGF0ZS1zZWxlY3Rpb25cIik7XG4gIGNvbHVtbjJPcHRpb24zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sdW1uLTItb3B0aW9uXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5MU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInByaW9yaXR5LTFcIik7XG4gIHByaW9yaXR5Mk9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInByaW9yaXR5LTJcIik7XG4gIHByaW9yaXR5M09wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInByaW9yaXR5LTNcIik7XG4gIHByaW9yaXR5NE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInByaW9yaXR5LTRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JtXCIsIFwiZm9ybVwiKTtcblxuICAvLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tIChzaWJsaW5nIG9mIGNvbnRhaW5lcilcbiAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVPcHRpb25zKTtcbiAgcmVtb3ZlT3B0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcbiAgZGVsZXRlVGFzay5hcHBlbmRDaGlsZChkZWxldGVUYXNrSW1nKTtcbiAgcmVtb3ZlT3B0aW9ucy5hcHBlbmRDaGlsZChjbG9zZSk7XG4gIGNsb3NlLmFwcGVuZENoaWxkKGNsb3NlSW1nKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQ29sdW1uMSk7XG4gIGZvcm1Db2x1bW4xLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIHRhc2tUaXRsZS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVMYWJlbCk7XG4gIHRhc2tUaXRsZUxhYmVsLmFwcGVuZENoaWxkKHRhc2tUaXRsZUxhYmVsVHh0KTtcbiAgdGFza1RpdGxlLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcbiAgZm9ybUNvbHVtbjEuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgZGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsVHh0KTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUNvbHVtbjIpO1xuICBmb3JtQ29sdW1uMi5hcHBlbmRDaGlsZChjb2x1bW4yT3B0aW9uMSk7XG4gIGNvbHVtbjJPcHRpb24xLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzU2VsZWN0aW9uTGFiZWwpO1xuICB0YXNrQ2F0ZWdvcmllc1NlbGVjdGlvbkxhYmVsLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzU2VsZWN0aW9uTGFiZWxUeHQpO1xuICBjb2x1bW4yT3B0aW9uMS5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcmllc1NlbGVjdGlvblNlbGVjdCk7XG4gIGZvcm1Db2x1bW4yLmFwcGVuZENoaWxkKGNvbHVtbjJPcHRpb24yKTtcbiAgY29sdW1uMk9wdGlvbjIuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNlbGVjdGlvbkxhYmVsKTtcbiAgZHVlRGF0ZVNlbGVjdGlvbkxhYmVsLmFwcGVuZENoaWxkKGR1ZURhdGVTZWxlY3Rpb25MYWJlbFR4dCk7XG4gIGNvbHVtbjJPcHRpb24yLmFwcGVuZENoaWxkKGR1ZURhdGVTZWxlY3Rpb25JbnB1dCk7XG4gIGZvcm1Db2x1bW4yLmFwcGVuZENoaWxkKGNvbHVtbjJPcHRpb24zKTtcbiAgY29sdW1uMk9wdGlvbjMuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbFR4dCk7XG4gIGNvbHVtbjJPcHRpb24zLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHkxT3B0aW9uKTtcbiAgcHJpb3JpdHkxT3B0aW9uLmFwcGVuZENoaWxkKHByaW9yaXR5MU9wdGlvblR4dCk7XG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5Mk9wdGlvbik7XG4gIHByaW9yaXR5Mk9wdGlvbi5hcHBlbmRDaGlsZChwcmlvcml0eTJPcHRpb25UeHQpO1xuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eTNPcHRpb24pO1xuICBwcmlvcml0eTNPcHRpb24uYXBwZW5kQ2hpbGQocHJpb3JpdHkzT3B0aW9uVHh0KTtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHk0T3B0aW9uKTtcbiAgcHJpb3JpdHk0T3B0aW9uLmFwcGVuZENoaWxkKHByaW9yaXR5NE9wdGlvblR4dCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgc3VibWl0QnV0dG9uLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvblR4dCk7XG5cbiAgLy8gQWRkIGJsdXIgc3R5bGluZ1xuICBjb25zdCBpc0JsdXJyZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXMtYmx1cnJlZFwiKTtcbiAgaXNCbHVycmVkRWxlbWVudHMuZm9yRWFjaCgoaXNCbHVycmVkRWxlbWVudCkgPT4ge1xuICAgIGlzQmx1cnJlZEVsZW1lbnQuc3R5bGUuZmlsdGVyID0gXCJibHVyKDVweClcIjtcbiAgfSk7XG59XG5cbi8vIFJlbW92ZSB0YXNrIGZvcm0gZnVuY3Rpb25cbmZ1bmN0aW9uIHJlbW92ZVRhc2tGb3JtKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG4gIHdoaWxlIChvdmVybGF5LmZpcnN0Q2hpbGQpIHtcbiAgICBvdmVybGF5LnJlbW92ZUNoaWxkKG92ZXJsYXkubGFzdENoaWxkKTtcbiAgfVxuICBib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xuXG4gIC8vIFJlbW92ZSBibHVyIHN0eWxpbmdcbiAgY29uc3QgaXNCbHVycmVkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlzLWJsdXJyZWRcIik7XG4gIGlzQmx1cnJlZEVsZW1lbnRzLmZvckVhY2goKGlzQmx1cnJlZEVsZW1lbnQpID0+IHtcbiAgICBpc0JsdXJyZWRFbGVtZW50LnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICB9KTtcbn1cblxuLy8gdG9kYXkgZnVuY3Rpb24gKGZvciBsb2FkaW5nIHRoZSB0b2RheSB0YWIgd2hpY2ggY29udGFpbnMgYWxsIHRhc2tzIHRoYXQgYXJlIGR1ZSB0b2RheSlcbi8vIGRlY2xhcmUgZWxlbWVudHNcbi8vIGFkZCBhdHRyaWJ1dGVzXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tXG5cbi8vIGxhdGUgZnVuY3Rpb24gKGZvciBsb2FkaW5nIHRoZSBsYXRlIHRhYiB3aGljaCBjb250YWlucyBhbGwgdGFza3MgdGhhdCB3ZXJlIGR1ZSBiZWZvcmUgdGhlIHByZXNlbnQgZGF0ZSBhbmQgaGF2ZSBub3QgYmVlbiBjb21wbGV0ZWQgeWV0KVxuLy8gZGVjbGFyZSBlbGVtZW50c1xuLy8gYWRkIGF0dHJpYnV0ZXNcbi8vIGFwcGVuZCBlbGVtZW50cyB0byBkb21cblxuZXhwb3J0IHtcbiAgZGFzaGJvYXJkLFxuICB3aW5kb3dSZXNpemVTaWRlQmFyLFxuICBidXR0b25TaWRlQmFyLFxuICBkaXNwbGF5VGFza0NhdGVnb3JpZXMsXG4gIGNsZWFyVGFza0NhdGVnb3JpZXMsXG4gIHRhc2tDYXRlZ29yeUNvbnRlbnQsXG4gIGhpZ2hsaWdodFNlbGVjdGVkVGFza0NhdGVnb3J5LFxuICByZW1vdmVIaWdobGlnaHRUYXNrQ2F0ZWdvcmllcyxcbiAgY2xlYXJUYXNrQ2F0ZWdvcnlDb250ZW50LFxuICBidWlsZFRhc2tGb3JtLFxuICByZW1vdmVUYXNrRm9ybSxcbn07XG4iLCIvLyB0YXNrQ2F0ZWdvcnkgZmFjdG9yeSBmdW5jdGlvbiAoY3JlYXRlcyB0YXNrIGNhdGVnb3J5IG9iamVjdHMsIHdoaWNoIHdpbGwgY29udGFpbiB0YXNrcylcbi8vIHByb3BlcnRpZXM6IHRpdGxlIChyZWNlaXZlZCBmcm9tIHVzZXIgZm9ybSksIGNvbG9yIChyZWNlaXZlZCBmcm9tIHVzZXIgZm9ybSksIGFycmF5IG9mIHRhc2tzXG4vLyBtZXRob2RzOiBnZXRUaXRsZSwgZ2V0Q29sb3IsIGdldFRhc2tzIChnZXQgdGFza3MgZnJvbSB0YXNrcyBhcnJheSksIHNldFRpdGxlLCBzZXRDb2xvciwgc2V0VGFzayAoYWRkIHRhc2sgdG8gdGFza3MgYXJyYXkpLFxuZnVuY3Rpb24gdGFza0NhdGVnb3J5RmFjdG9yeSh0aXRsZSwgY29sb3IpIHtcbiAgY29uc3QgdGFza3NBcnJheSA9IFtdO1xuICBsZXQgaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldENvbG9yID0gKCkgPT4gY29sb3I7XG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3NBcnJheTtcbiAgY29uc3QgZ2V0SXNTZWxlY3RlZCA9ICgpID0+IGlzU2VsZWN0ZWQ7XG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiAodGl0bGUgPSBuZXdUaXRsZSk7XG4gIGNvbnN0IHNldENvbG9yID0gKG5ld0NvbG9yKSA9PiAoY29sb3IgPSBuZXdDb2xvcik7XG4gIGNvbnN0IHNldFRhc2sgPSAobmV3VGFzaykgPT4gdGFza3NBcnJheS5wdXNoKG5ld1Rhc2spO1xuICBjb25zdCBzZXRJc1NlbGVjdGVkID0gKGJvb2xlYW5WYWx1ZSkgPT4gKGlzU2VsZWN0ZWQgPSBib29sZWFuVmFsdWUpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0Q29sb3IsXG4gICAgZ2V0VGFza3MsXG4gICAgZ2V0SXNTZWxlY3RlZCxcbiAgICBzZXRUaXRsZSxcbiAgICBzZXRDb2xvcixcbiAgICBzZXRUYXNrLFxuICAgIHNldElzU2VsZWN0ZWQsXG4gIH07XG59XG5cbi8vIHRhc2sgZmFjdG9yeSBmdW5jdGlvbiAoY3JlYXRlcyB0YXNrcyB0aGF0IHRoZSB1c2VyIGNyZWF0ZXMsIHdoaWNoIHdpbGwgYmUgcGxhY2VkIGluIGEgdGFza0NhdGVnb3J5KVxuLy8gcHJvcGVydGllczogdGl0bGUgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSwgZGVzY3JpcHRpb24gKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSxcbi8vICAgICAgICAgICAgIGNhdGVnb3J5IChyZWNlaXZlZCBmcm9tIHVzZXIgZm9ybSksIGR1ZURhdGUgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSxcbi8vICAgICAgICAgICAgIHByaW9yaXR5IChyZWNlaXZlZCBmcm9tIHVzZXIgZm9ybSlcbi8vIG1ldGhvZHM6IGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0Q2F0ZWdvcnksIGdldER1ZURhdGUsIGdldFByaW9yaXR5XG4vLyAgICAgICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldENhdGVnb3J5LCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eVxuXG4vLyBBcnJheSB0aGF0IGhvbGRzIGFsbCB0YXNrIGNhdGVnb3J5IG9iamVjdHNcbmNvbnN0IHRhc2tDYXRlZ29yeUxpYnJhcnkgPSBbXTtcblxuLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlcmUgYXJlIGZpdmUgdGFzayBjYXRlZ29yeSBvYmplY3RzIGluIGFycmF5XG5mdW5jdGlvbiBjaGVja1Rhc2tDYXRlZ29yeUxpYnJhcnlGdWxsKCkge1xuICBpZiAodGFza0NhdGVnb3J5TGlicmFyeS5sZW5ndGggPT09IDUpIHJldHVybiB0cnVlO1xuICBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuLy8gRWRpdCB0YXNrIGNhdGVnb3J5IG5hbWUgZnVuY3Rpb25cbmZ1bmN0aW9uIGVkaXRUYXNrQ2F0ZWdvcnlOYW1lKGV2ZW50KSB7XG4gIHRhc2tDYXRlZ29yeUxpYnJhcnlbZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsxXV0uc2V0VGl0bGUoXG4gICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50XG4gICk7XG59XG5cbi8vIEVkaXQgdGFzayBjYXRlZ29yeSBpY29uIGNvbG9yIGZ1bmN0aW9uXG5mdW5jdGlvbiBlZGl0VGFza0NhdGVnb3J5SWNvbkNvbG9yKGV2ZW50KSB7XG4gIHRhc2tDYXRlZ29yeUxpYnJhcnlbZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsxXV0uc2V0Q29sb3IoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbn1cblxuLy8gUmVtb3ZlIHRhc2sgY2F0ZWdvcnkgZnVuY3Rpb25cbmZ1bmN0aW9uIHJlbW92ZVRhc2tDYXRlZ29yeShldmVudCkge1xuICB0YXNrQ2F0ZWdvcnlMaWJyYXJ5LnNwbGljZShldmVudC50YXJnZXQuY2xhc3NMaXN0WzFdLCAxKTtcbn1cblxuLy8gQWRkIG5ldyB0YXNrIGNhdGVnb3J5IGZ1bmN0aW9uXG5mdW5jdGlvbiBhZGROZXdUYXNrQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGR1bW15VGFza0NhdGVnb3J5ID0gdGFza0NhdGVnb3J5RmFjdG9yeShcIkNhdGVnb3J5XCIsIFwiIzAwMDAwMFwiKTtcbiAgdGFza0NhdGVnb3J5TGlicmFyeS5wdXNoKGR1bW15VGFza0NhdGVnb3J5KTtcbn1cblxuLy8gU2VsZWN0IHRhc2sgY2F0ZWdvcnkgZnVuY3Rpb25cbmZ1bmN0aW9uIFNlbGVjdFRhc2tDYXRlZ29yeShpbmRleFZhbHVlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0NhdGVnb3J5TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgIHRhc2tDYXRlZ29yeUxpYnJhcnlbaW5kZXhWYWx1ZV0uc2V0SXNTZWxlY3RlZCh0cnVlKTtcbiAgfVxufVxuXG4vLyBTZXQgdGhlIHRhc2sgY2F0ZWdvcnkgaW4gdGhlIGFycmF5IHRoYXQgaXMgZm91bmQgdG8gYmUgdHJ1ZSB0byBmYWxzZVxuZnVuY3Rpb24gcmVtb3ZlVGFza0NhdGVnb3J5U2VsZWN0aW9uKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tDYXRlZ29yeUxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFza0NhdGVnb3J5TGlicmFyeVtpXS5nZXRJc1NlbGVjdGVkKCkpIHtcbiAgICAgIHRhc2tDYXRlZ29yeUxpYnJhcnlbaV0uc2V0SXNTZWxlY3RlZChmYWxzZSk7XG4gICAgfVxuICB9XG59XG5cbi8vIEZpbmQgYW5kIHJldHVybiBpbmRleCBvZiB0YXNrIGNhdGVnb3J5IHRoYXQgaXMgc2VsZWN0ZWRcbmZ1bmN0aW9uIGZpbmRUYXNrQ2F0ZWdvcnlJbmRleElzU2VsZWN0ZWQoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0NhdGVnb3J5TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrQ2F0ZWdvcnlMaWJyYXJ5W2ldLmdldElzU2VsZWN0ZWQoKSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG5cbi8vIHRvZGF5IGFycmF5IChjb250YWlucyBhbGwgdGFzayBvYmplY3RzIHRoYXQgaGF2ZSBkdWVEYXRlIG9mIHRvZGF5cyBkYXRlKVxuXG4vLyBsYXRlIGFycmF5IChjb250YWlucyBhbGwgdGFzayBvYmplY3RzIHRoYXQgaGF2ZSBhIGR1ZURhdGUgZWFybGllciB0aGF0IHRvZGF5cyBkYXRlKVxuXG4vLyBzZXRDb21wbGV0ZSBmdW5jdGlvbiAoc2V0cyB0YXNrIGFzIGNvbXBsZXRlIGFuZCBkZWxldGVzIGl0IGZyb20gYWxsIGFycmF5cyB0aGF0IGNvbnRhaW4gaXQpXG4vLyBUaGlzIGZ1bmN0aW9uIHBlcmZvcm1zIGFuIGFuaW1hdGlvbiBiZWZvcmUgZGVsZXRpbmcgaXQgdW5saWtlIHRoZSBuZXh0IGZ1bmN0aW9uLi4uXG5cbi8vIGRlbGV0ZVRhc2sgZnVuY3Rpb24gKGRlbGV0ZXMgdGFzayBmcm9tIGFsbCBhcnJheXMgdGhhdCBjb250YWlucyBpdClcblxuLy8gYWRkVGFzayBmdW5jdGlvbiAocmVjZWl2ZXMgZGF0YSBmcm9tIHRoZSB1c2VyIGZvcm0gYW5kIGNhbGxzIHRoZSB0YXNrIGZhY3RvcnkgZnVuY3Rpb24sIGZlZWRpbmcgaXQgdGhlIHVzZXIgcGFyYW1ldGVycylcbi8vICoqKlRoaXMgbWF5IG5vdCBiZSBuZWVkZWQqKipcblxuLy8gb3JnYW5pemVUYXNrIGZ1bmN0aW9uIChzZW5kcyB0YXNrIG9iamVjdCB0byBhcHByb3ByaWF0ZSBhcnJheXMpXG4vLyBOT1RFOiBTb21ldGhpbmcgdG8gY29uc2lkZXIgaXMgdGhhdCB3aGVuIGEgbmV3IGRheSBjb21lcyBhbG9uZywgY2VydGFpbiB0YXNrIG9iamVjdHMgd2lsbCBuZWVkIHRvIGJlIGF1dG9tYXRpY2FsbHlcbi8vICAgICAgIHBsYWNlZCBpbnRvIGVpdGhlciB0aGUgdG9kYXkgYXJyYXksIG9yIHRoZSBsYXRlIGFycmF5LlxuXG4vLyBlZGl0VGFzayBmdW5jdGlvbiAocmVjZWl2ZXMgZGF0YSBmcm9tIHVzZXIgZm9ybSwgdGhlbiBjYWxscyB0YXNrIHNldCBtZXRob2RzIHRvIGNoYW5nZSB0aGUgYXBwcm9wcmlhdGUgcHJvcGVydGllcylcblxuLy8gY2hhbmdlVGhlbWUgZnVuY3Rpb24gKGNoYW5nZXMgVUkgdG8gZGFyayBtb2RlIG9yIGxpZ2h0IG1vZGUgKVxuXG4vLyBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZSBtb2R1bGUgKHNjb3BlIG9mIHRoaXMgbW9kdWxlIGlzIHRvIGRldGVybWluZSB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBvZiB3aW5kb3cgZnJvbSB3aGVuIHRoZSB1c2VyIGJlZ2lucyBjaGFuZ2luZyBpdHMgc2l6ZSwgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXQgaXMgc2hyaW5raW5nIG9yIGdyb3dpbmcpXG5jb25zdCBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZSA9ICgoKSA9PiB7XG4gIGxldCBwb3NpdGlvbldpZHRoTGFzdDtcbiAgbGV0IG5ld1Bvc2l0aW9uO1xuICBsZXQgcG9zaXRpb25XaWR0aERpZmZlcmVuY2U7XG5cbiAgY29uc3Qgc2V0UG9zaXRpb25XaWR0aExhc3QgPSAoc2NyZWVuV2lkdGgpID0+XG4gICAgKHBvc2l0aW9uV2lkdGhMYXN0ID0gc2NyZWVuV2lkdGgpO1xuICBjb25zdCBzZXROZXdQb3NpdGlvbiA9IChzY3JlZW5XaWR0aCkgPT4gKG5ld1Bvc2l0aW9uID0gc2NyZWVuV2lkdGgpO1xuICBjb25zdCBzZXRQb3NpdGlvbldpZHRoRGlmZmVyZW5jZSA9ICgpID0+XG4gICAgKHBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlID0gbmV3UG9zaXRpb24gLSBwb3NpdGlvbldpZHRoTGFzdCk7XG4gIGNvbnN0IGdldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlID0gKCkgPT4gcG9zaXRpb25XaWR0aERpZmZlcmVuY2U7XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRQb3NpdGlvbldpZHRoTGFzdCxcbiAgICBzZXROZXdQb3NpdGlvbixcbiAgICBzZXRQb3NpdGlvbldpZHRoRGlmZmVyZW5jZSxcbiAgICBnZXRQb3NpdGlvbldpZHRoRGlmZmVyZW5jZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7XG4gIHRhc2tDYXRlZ29yeUZhY3RvcnksXG4gIHRhc2tDYXRlZ29yeUxpYnJhcnksXG4gIGNoZWNrVGFza0NhdGVnb3J5TGlicmFyeUZ1bGwsXG4gIGVkaXRUYXNrQ2F0ZWdvcnlOYW1lLFxuICBlZGl0VGFza0NhdGVnb3J5SWNvbkNvbG9yLFxuICByZW1vdmVUYXNrQ2F0ZWdvcnksXG4gIGFkZE5ld1Rhc2tDYXRlZ29yeSxcbiAgU2VsZWN0VGFza0NhdGVnb3J5LFxuICByZW1vdmVUYXNrQ2F0ZWdvcnlTZWxlY3Rpb24sXG4gIGZpbmRUYXNrQ2F0ZWdvcnlJbmRleElzU2VsZWN0ZWQsXG4gIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBJbXBvcnRzXG5pbXBvcnQge1xuICBkYXNoYm9hcmQsXG4gIHdpbmRvd1Jlc2l6ZVNpZGVCYXIsXG4gIGJ1dHRvblNpZGVCYXIsXG4gIGRpc3BsYXlUYXNrQ2F0ZWdvcmllcyxcbiAgY2xlYXJUYXNrQ2F0ZWdvcmllcyxcbiAgdGFza0NhdGVnb3J5Q29udGVudCxcbiAgaGlnaGxpZ2h0U2VsZWN0ZWRUYXNrQ2F0ZWdvcnksXG4gIHJlbW92ZUhpZ2hsaWdodFRhc2tDYXRlZ29yaWVzLFxuICBjbGVhclRhc2tDYXRlZ29yeUNvbnRlbnQsXG4gIGJ1aWxkVGFza0Zvcm0sXG4gIHJlbW92ZVRhc2tGb3JtLFxufSBmcm9tIFwiLi9kb20tbWFuaXB1bGF0aW9uLmpzXCI7XG5pbXBvcnQge1xuICB0YXNrQ2F0ZWdvcnlMaWJyYXJ5LFxuICB0YXNrQ2F0ZWdvcnlGYWN0b3J5LFxuICBjaGVja1Rhc2tDYXRlZ29yeUxpYnJhcnlGdWxsLFxuICBlZGl0VGFza0NhdGVnb3J5TmFtZSxcbiAgZWRpdFRhc2tDYXRlZ29yeUljb25Db2xvcixcbiAgcmVtb3ZlVGFza0NhdGVnb3J5LFxuICBhZGROZXdUYXNrQ2F0ZWdvcnksXG4gIFNlbGVjdFRhc2tDYXRlZ29yeSxcbiAgcmVtb3ZlVGFza0NhdGVnb3J5U2VsZWN0aW9uLFxuICBmaW5kVGFza0NhdGVnb3J5SW5kZXhJc1NlbGVjdGVkLFxuICBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZSxcbn0gZnJvbSBcIi4vbG9naWMuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmRhc2hib2FyZCgpO1xuXG4vLyBDcmVhdGUgb2JqZWN0IGZvciBkdW1teSB0YXNrIGNhdGVnb3J5IHRoZW4gcGxhY2UgaW4gYXJyYXlcbmNvbnN0IGR1bW15VGFza0NhdGVnb3J5ID0gdGFza0NhdGVnb3J5RmFjdG9yeShcIkdlbmVyYWxcIiwgXCIjMDAwMDAwXCIpO1xudGFza0NhdGVnb3J5TGlicmFyeS5wdXNoKGR1bW15VGFza0NhdGVnb3J5KTtcblxuLy8gRGlzcGxheSB0YXNrIGNhdGVnb3JpZXNcbmRpc3BsYXlUYXNrQ2F0ZWdvcmllcygpO1xuXG4vLyBFdmVudCBsaXN0ZW5lcnMgdG8gY29udHJvbCB0aGUgZmxvdyBvZiB0aGUgcmV0cmFjdGluZyBhbmQgZXhwYW5kaW5nIGRhc2hib2FyZCBzaWRlYmFyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5nZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZS5zZXRQb3NpdGlvbldpZHRoTGFzdChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZS5zZXROZXdQb3NpdGlvbihkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoKTtcbiAgZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUuc2V0UG9zaXRpb25XaWR0aERpZmZlcmVuY2UoKTtcbiAgbGV0IHdpbmRvd1Jlc2l6ZURpcmVjdGlvbiA9XG4gICAgZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUuZ2V0UG9zaXRpb25XaWR0aERpZmZlcmVuY2UoKTtcbiAgZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUuc2V0UG9zaXRpb25XaWR0aExhc3QoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCk7XG5cbiAgd2luZG93UmVzaXplU2lkZUJhcih3aW5kb3dSZXNpemVEaXJlY3Rpb24pO1xufSk7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBidXR0b25TaWRlQmFyKGV2ZW50KTtcbn0pO1xuXG4vLyBBZGQgdGFzayBjYXRlZ29yeSBldmVudCBsaXN0ZW5lclxuY29uc3QgcGx1c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsdXMtaWNvblwiKTtcbnBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmICghY2hlY2tUYXNrQ2F0ZWdvcnlMaWJyYXJ5RnVsbCgpKSB7XG4gICAgYWRkTmV3VGFza0NhdGVnb3J5KCk7XG4gICAgY2xlYXJUYXNrQ2F0ZWdvcmllcygpO1xuICAgIGRpc3BsYXlUYXNrQ2F0ZWdvcmllcygpO1xuICAgIGlmIChmaW5kVGFza0NhdGVnb3J5SW5kZXhJc1NlbGVjdGVkKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWRUYXNrQ2F0ZWdvcnkoZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCgpKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBFZGl0IHRhc2sgY2F0ZWdvcnkgZXZlbnQgbGlzdGVuZXJcbmNvbnN0IGFsbFRhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uZXctdGFzay1jYXRlZ29yaWVzXCIpO1xuYWxsVGFza0NhdGVnb3JpZXMuZm9yRWFjaCgodGFza0NhdGVnb3J5KSA9PiB7XG4gIHRhc2tDYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwidGFzay1jYXRlZ29yeS1uYW1lXCIpIHtcbiAgICAgIGVkaXRUYXNrQ2F0ZWdvcnlOYW1lKGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwidGFzay1jYXRlZ29yeS1pY29uLWNvbG9yXCIpIHtcbiAgICAgIGVkaXRUYXNrQ2F0ZWdvcnlJY29uQ29sb3IoZXZlbnQpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy8gUmVtb3ZlIHRhc2sgY2F0ZWdvcnkgZXZlbnQgbGlzdGVuZXJcbmFsbFRhc2tDYXRlZ29yaWVzLmZvckVhY2goKHRhc2tDYXRlZ29yeSkgPT4ge1xuICB0YXNrQ2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcInJlbW92ZS10YXNrLWNhdGVnb3J5XCIpIHtcbiAgICAgIGNsZWFyVGFza0NhdGVnb3J5Q29udGVudCgpO1xuICAgICAgcmVtb3ZlVGFza0NhdGVnb3J5KGV2ZW50KTtcbiAgICAgIGNsZWFyVGFza0NhdGVnb3JpZXMoKTtcbiAgICAgIGRpc3BsYXlUYXNrQ2F0ZWdvcmllcygpO1xuICAgICAgLy8gSWYgdGhlIHRhc2sgY2F0ZWdvcnkgdGhhdCB3YXMgcmVtb3ZlZCB3YXMgdGhlIG9uZSB0aGF0IHdhcyBzZWxlY3RlZFxuICAgICAgaWYgKGZpbmRUYXNrQ2F0ZWdvcnlJbmRleElzU2VsZWN0ZWQoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhc2tDYXRlZ29yeUNvbnRlbnQoZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCgpKTtcbiAgICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWRUYXNrQ2F0ZWdvcnkoZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIFNlbGVjdCB0YXNrIGNhdGVnb3J5IGV2ZW50IGxpc3RlbmVyXG5hbGxUYXNrQ2F0ZWdvcmllcy5mb3JFYWNoKCh0YXNrQ2F0ZWdvcnkpID0+IHtcbiAgdGFza0NhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcInRhc2stY2F0ZWdvcnlcIiB8fFxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJ0YXNrLWNhdGVnb3J5LW5hbWVcIlxuICAgICkge1xuICAgICAgcmVtb3ZlSGlnaGxpZ2h0VGFza0NhdGVnb3JpZXMoKTtcbiAgICAgIHJlbW92ZVRhc2tDYXRlZ29yeVNlbGVjdGlvbigpO1xuICAgICAgU2VsZWN0VGFza0NhdGVnb3J5KGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMV0pO1xuICAgICAgaGlnaGxpZ2h0U2VsZWN0ZWRUYXNrQ2F0ZWdvcnkoZmluZFRhc2tDYXRlZ29yeUluZGV4SXNTZWxlY3RlZCgpKTtcbiAgICAgIGNsZWFyVGFza0NhdGVnb3J5Q29udGVudCgpO1xuICAgICAgdGFza0NhdGVnb3J5Q29udGVudChmaW5kVGFza0NhdGVnb3J5SW5kZXhJc1NlbGVjdGVkKCkpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy8gQ2xpY2sgYWRkIHRhc2sgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIuYWRkLXRhc2stYnV0dG9uXCIpKSB7XG4gICAgYnVpbGRUYXNrRm9ybSgpO1xuICB9XG59KTtcblxuLy8gUmVtb3ZlIGFkZCB0YXNrIGZvcm0gZXZlbnQgbGlzdGVuZXJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIiNjbG9zZVwiKSB8fCBldmVudC50YXJnZXQubWF0Y2hlcyhcIiNvdmVybGF5XCIpKSB7XG4gICAgcmVtb3ZlVGFza0Zvcm0oKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=