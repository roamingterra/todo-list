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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: roboto-black;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Form */\n\n/* .is-blurred {\n    filter: blur(5px);\n  } */\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.649);\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px;\n  width: 420px;\n  height: 300px;\n  z-index: 5;\n  border-radius: 20px;\n  background-color: #f0eef1;\n  backdrop-filter: blur(15px);\n}\n\n.remove-options {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n}\n\n#delete,\n#close {\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.form-column-1 {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\ntextarea {\n  resize: none;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n}\n\n.task-title {\n  display: flex;\n  flex-direction: column;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-column-2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.column-2-option {\n  display: flex;\n  flex-direction: column;\n}\n\n#submit {\n  border-radius: 50px;\n  padding: 10px;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n  background-color: white;\n  color: #171717;\n  border: 0;\n}\n#submit:hover {\n  background-color: rgb(195, 195, 195);\n  color: white;\n}\n\n#submit:active {\n  background-color: white;\n  color: rgb(195, 195, 195);\n}\n\n/* Hover animations */\n.grow {\n  transition: all 0.2s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.5);\n}\n\n.grow-2 {\n  transition: all 0.1s ease-in-out;\n}\n\n.grow-2:hover {\n  transform: scale(1.1);\n}\n/* End of hover animations */\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  font-family: \"roboto-black\";\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 84px 1fr;\n  grid-template-columns: 290px 1fr;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Top bar */\n#top-bar {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: fit-content;\n  z-index: 3;\n  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.16);\n  background-color: white;\n}\n\n.top-bar-left {\n  display: flex;\n  gap: 20px;\n}\n\n.side-bar-icon,\n.dark-light-mode,\n.info-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.info {\n  width: 40px;\n  height: 40px;\n}\n\n.info .info-container {\n  visibility: hidden;\n  position: absolute;\n  top: 105px;\n  right: 20px;\n  background-color: black;\n  color: white;\n  width: 400px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: justify;\n  line-height: 25px;\n  font-size: 1.25rem;\n  /* z-index: 100; */\n}\n\n.info:hover .info-container {\n  visibility: visible;\n}\n\n/* Side bar */\n#side-bar {\n  position: relative;\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  font-size: 1.25rem;\n  z-index: 2;\n  width: 250px;\n  transition: padding-left 0.2s ease-in-out;\n  background-color: white;\n}\n\n.today-late {\n  white-space: nowrap;\n  width: 250px;\n  overflow: hidden;\n}\n\n.today,\n.late,\n.task-categories-header {\n  display: flex;\n  align-items: center;\n}\n\n.today,\n.late {\n  cursor: pointer;\n  gap: 5px;\n  padding-left: 10px;\n}\n\n.today-icon,\n.late-icon,\n.plus-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n\n.task-categories-header {\n  justify-content: space-between;\n}\n\nbutton.add-task-category {\n  border: 0;\n  padding: 0;\n  background-color: white;\n  cursor: pointer;\n}\n\n.task-category-icon-color {\n  width: 1rem;\n  height: 1.3rem;\n  border: 0;\n  padding: 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.task-category-icon-color:hover {\n  transform: scale(1.2);\n}\n\n.task-category .remove-task-category {\n  visibility: hidden;\n  margin-left: auto;\n  width: 1.5rem;\n}\n\n.task-category:hover .remove-task-category {\n  visibility: visible;\n}\n\n.remove-task-category:hover {\n  transform: scale(1.2);\n}\n\n.task-category-name:hover {\n  transform: scale(1.2);\n}\n\n.new-task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-left: 5px;\n}\n\n/* Task categories, added by the user */\n.task-category {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  padding: 5px;\n}\n\n/* Main content, populated by other modules */\n#main-content {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #f0eef1;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n\n/* No side bar if page loads while window size is small*/\n@media only screen and (max-width: 799px) {\n  #main-content {\n    grid-column: 1 / 3;\n  }\n  #side-bar {\n    width: 0;\n    padding: 0;\n  }\n\n  .today-late {\n    width: 0;\n  }\n\n  .task-categories {\n    width: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: roboto-black;\n  src: url(./fonts/Roboto-Medium.ttf);\n}\n\n/* Form */\n\n/* .is-blurred {\n    filter: blur(5px);\n  } */\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.649);\n  z-index: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px;\n  width: 420px;\n  height: 300px;\n  z-index: 5;\n  border-radius: 20px;\n  background-color: #f0eef1;\n  backdrop-filter: blur(15px);\n}\n\n.remove-options {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n}\n\n#delete,\n#close {\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.form-column-1 {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\ntextarea {\n  resize: none;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n}\n\n.task-title {\n  display: flex;\n  flex-direction: column;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-column-2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.column-2-option {\n  display: flex;\n  flex-direction: column;\n}\n\n#submit {\n  border-radius: 50px;\n  padding: 10px;\n  font-family: \"roboto-black\";\n  font-size: 1rem;\n  background-color: white;\n  color: #171717;\n  border: 0;\n}\n#submit:hover {\n  background-color: rgb(195, 195, 195);\n  color: white;\n}\n\n#submit:active {\n  background-color: white;\n  color: rgb(195, 195, 195);\n}\n\n/* Hover animations */\n.grow {\n  transition: all 0.2s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.5);\n}\n\n.grow-2 {\n  transition: all 0.1s ease-in-out;\n}\n\n.grow-2:hover {\n  transform: scale(1.1);\n}\n/* End of hover animations */\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  font-family: \"roboto-black\";\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 84px 1fr;\n  grid-template-columns: 290px 1fr;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Top bar */\n#top-bar {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: fit-content;\n  z-index: 3;\n  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.16);\n  background-color: white;\n}\n\n.top-bar-left {\n  display: flex;\n  gap: 20px;\n}\n\n.side-bar-icon,\n.dark-light-mode,\n.info-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.info {\n  width: 40px;\n  height: 40px;\n}\n\n.info .info-container {\n  visibility: hidden;\n  position: absolute;\n  top: 105px;\n  right: 20px;\n  background-color: black;\n  color: white;\n  width: 400px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: justify;\n  line-height: 25px;\n  font-size: 1.25rem;\n  /* z-index: 100; */\n}\n\n.info:hover .info-container {\n  visibility: visible;\n}\n\n/* Side bar */\n#side-bar {\n  position: relative;\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  font-size: 1.25rem;\n  z-index: 2;\n  width: 250px;\n  transition: padding-left 0.2s ease-in-out;\n  background-color: white;\n}\n\n.today-late {\n  white-space: nowrap;\n  width: 250px;\n  overflow: hidden;\n}\n\n.today,\n.late,\n.task-categories-header {\n  display: flex;\n  align-items: center;\n}\n\n.today,\n.late {\n  cursor: pointer;\n  gap: 5px;\n  padding-left: 10px;\n}\n\n.today-icon,\n.late-icon,\n.plus-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n\n.task-categories-header {\n  justify-content: space-between;\n}\n\nbutton.add-task-category {\n  border: 0;\n  padding: 0;\n  background-color: white;\n  cursor: pointer;\n}\n\n.task-category-icon-color {\n  width: 1rem;\n  height: 1.3rem;\n  border: 0;\n  padding: 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.task-category-icon-color:hover {\n  transform: scale(1.2);\n}\n\n.task-category .remove-task-category {\n  visibility: hidden;\n  margin-left: auto;\n  width: 1.5rem;\n}\n\n.task-category:hover .remove-task-category {\n  visibility: visible;\n}\n\n.remove-task-category:hover {\n  transform: scale(1.2);\n}\n\n.task-category-name:hover {\n  transform: scale(1.2);\n}\n\n.new-task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-left: 5px;\n}\n\n/* Task categories, added by the user */\n.task-category {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  padding: 5px;\n}\n\n/* Main content, populated by other modules */\n#main-content {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #f0eef1;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n\n/* No side bar if page loads while window size is small*/\n@media only screen and (max-width: 799px) {\n  #main-content {\n    grid-column: 1 / 3;\n  }\n  #side-bar {\n    width: 0;\n    padding: 0;\n  }\n\n  .today-late {\n    width: 0;\n  }\n\n  .task-categories {\n    width: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "dashboard": () => (/* binding */ dashboard),
/* harmony export */   "displayTaskCategories": () => (/* binding */ displayTaskCategories),
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
    taskCategory.classList.add("task-category", "grow-2");
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

// taskCategory function (for loading the content of a taskCategory that has been selected)
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
/* harmony export */   "addNewTaskCategory": () => (/* binding */ addNewTaskCategory),
/* harmony export */   "checkTaskCategoryLibraryFull": () => (/* binding */ checkTaskCategoryLibraryFull),
/* harmony export */   "editTaskCategoryIconColor": () => (/* binding */ editTaskCategoryIconColor),
/* harmony export */   "editTaskCategoryName": () => (/* binding */ editTaskCategoryName),
/* harmony export */   "getDirectionOfWindowResize": () => (/* binding */ getDirectionOfWindowResize),
/* harmony export */   "removeTaskCategory": () => (/* binding */ removeTaskCategory),
/* harmony export */   "taskCategoryFactory": () => (/* binding */ taskCategoryFactory),
/* harmony export */   "taskCategoryLibrary": () => (/* binding */ taskCategoryLibrary)
/* harmony export */ });
// taskCategory factory function (creates task category objects, which will contain tasks)
// properties: title (received from user form), color (received from user form), array of tasks
// methods: getTitle, getColor, getTasks (get tasks from tasks array), setTitle, setColor, setTask (add task to tasks array),
function taskCategoryFactory(title, color) {
  const tasksArray = [];

  const getTitle = () => title;
  const getColor = () => color;
  const getTasks = () => tasksArray;
  const setTitle = (newTitle) => (title = newTitle);
  const setColor = (newColor) => (color = newColor);
  const setTask = (newTask) => tasksArray.push(newTask);

  return {
    getTitle,
    getColor,
    getTasks,
    setTitle,
    setColor,
    setTask,
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




// Array that holds all task category objects
// const taskCategoryLibrary = [];

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
      (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.removeTaskCategory)(event);
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.clearTaskCategories)();
      (0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.displayTaskCategories)();
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSw4REFBMEIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1REFBWTs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFXQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEhGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQU8rQjtBQVVYO0FBQ0M7O0FBRXJCO0FBQ0E7O0FBRUEsK0RBQVM7O0FBRVQ7QUFDQSwwQkFBMEIsOERBQW1CO0FBQzdDLCtEQUF3Qjs7QUFFeEI7QUFDQSwyRUFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxzRkFBK0M7O0FBRS9DO0FBQ0EsRUFBRSxnRkFBeUM7QUFDM0MsRUFBRSw0RkFBcUQ7QUFDdkQ7QUFDQSxJQUFJLDRGQUFxRDtBQUN6RCxFQUFFLHNGQUErQzs7QUFFakQsRUFBRSx5RUFBbUI7QUFDckIsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLEVBQUUsbUVBQWE7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUVBQTRCO0FBQ25DLElBQUksNkRBQWtCO0FBQ3RCLElBQUkseUVBQW1CO0FBQ3ZCLElBQUksMkVBQXFCO0FBQ3pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBb0I7QUFDMUIsTUFBTTtBQUNOLE1BQU0sb0VBQXlCO0FBQy9CO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZEQUFrQjtBQUN4QixNQUFNLHlFQUFtQjtBQUN6QixNQUFNLDJFQUFxQjtBQUMzQjtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLWJsYWNrO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuXFxuLyogLmlzLWJsdXJyZWQge1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gIH0gKi9cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NDkpO1xcbiAgei1pbmRleDogNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgei1pbmRleDogNTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZWYxO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcbn1cXG5cXG4ucmVtb3ZlLW9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jZGVsZXRlLFxcbiNjbG9zZSB7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMjZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvcm0tY29sdW1uLTEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvLWJsYWNrXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0tY29sdW1uLTIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb2x1bW4tMi1vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzdWJtaXQge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90by1ibGFja1xcXCI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMTcxNzE3O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4jc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE5NSwgMTk1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3N1Ym1pdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogcmdiKDE5NSwgMTk1LCAxOTUpO1xcbn1cXG5cXG4vKiBIb3ZlciBhbmltYXRpb25zICovXFxuLmdyb3cge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ncm93OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuLmdyb3ctMiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdyb3ctMjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi8qIEVuZCBvZiBob3ZlciBhbmltYXRpb25zICovXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90by1ibGFja1xcXCI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODRweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5MHB4IDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVG9wIGJhciAqL1xcbiN0b3AtYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHotaW5kZXg6IDM7XFxuICBib3gtc2hhZG93OiAwIDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9wLWJhci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaWRlLWJhci1pY29uLFxcbi5kYXJrLWxpZ2h0LW1vZGUsXFxuLmluZm8taWNvbiB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5mbyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmluZm8gLmluZm8tY29udGFpbmVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTA1cHg7XFxuICByaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICAvKiB6LWluZGV4OiAxMDA7ICovXFxufVxcblxcbi5pbmZvOmhvdmVyIC5pbmZvLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiBTaWRlIGJhciAqL1xcbiNzaWRlLWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgdHJhbnNpdGlvbjogcGFkZGluZy1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZGF5LWxhdGUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50b2RheSxcXG4ubGF0ZSxcXG4udGFzay1jYXRlZ29yaWVzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZGF5LFxcbi5sYXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udG9kYXktaWNvbixcXG4ubGF0ZS1pY29uLFxcbi5wbHVzLWljb24ge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWNhdGVnb3JpZXMtaGVhZGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uLmFkZC10YXNrLWNhdGVnb3J5IHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktaWNvbi1jb2xvciB7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMS4zcmVtO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktaWNvbi1jb2xvcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5IC5yZW1vdmUtdGFzay1jYXRlZ29yeSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi50YXNrLWNhdGVnb3J5OmhvdmVyIC5yZW1vdmUtdGFzay1jYXRlZ29yeSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ucmVtb3ZlLXRhc2stY2F0ZWdvcnk6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1uYW1lOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLm5ldy10YXNrLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4vKiBUYXNrIGNhdGVnb3JpZXMsIGFkZGVkIGJ5IHRoZSB1c2VyICovXFxuLnRhc2stY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktaWNvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi8qIE1haW4gY29udGVudCwgcG9wdWxhdGVkIGJ5IG90aGVyIG1vZHVsZXMgKi9cXG4jbWFpbi1jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGVlZjE7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi8qIE5vIHNpZGUgYmFyIGlmIHBhZ2UgbG9hZHMgd2hpbGUgd2luZG93IHNpemUgaXMgc21hbGwqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk5cHgpIHtcXG4gICNtYWluLWNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICB9XFxuICAjc2lkZS1iYXIge1xcbiAgICB3aWR0aDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC50b2RheS1sYXRlIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuXFxuICAudGFzay1jYXRlZ29yaWVzIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQW1DO0FBQ3JDOztBQUVBLFNBQVM7O0FBRVQ7O0tBRUs7O0FBRUw7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFF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O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLDZDQUE2QztBQUM3QztFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFFBQVE7SUFDUixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tYmxhY2s7XFxuICBzcmM6IHVybCguL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmKTtcXG59XFxuXFxuLyogRm9ybSAqL1xcblxcbi8qIC5pcy1ibHVycmVkIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxuICB9ICovXFxuXFxuI292ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjQ5KTtcXG4gIHotaW5kZXg6IDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHotaW5kZXg6IDU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWVmMTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXG59XFxuXFxuLnJlbW92ZS1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2RlbGV0ZSxcXG4jY2xvc2Uge1xcbiAgd2lkdGg6IDI2cHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWNvbHVtbi0xIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90by1ibGFja1xcXCI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtLWNvbHVtbi0yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29sdW1uLTItb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc3VibWl0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG8tYmxhY2tcXFwiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogIzE3MTcxNztcXG4gIGJvcmRlcjogMDtcXG59XFxuI3N1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxOTUsIDE5NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNzdWJtaXQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYigxOTUsIDE5NSwgMTk1KTtcXG59XFxuXFxuLyogSG92ZXIgYW5pbWF0aW9ucyAqL1xcbi5ncm93IHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ3Jvdzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5ncm93LTIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ncm93LTI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4vKiBFbmQgb2YgaG92ZXIgYW5pbWF0aW9ucyAqL1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG8tYmxhY2tcXFwiO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg0cHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOTBweCAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFRvcCBiYXIgKi9cXG4jdG9wLWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB6LWluZGV4OiAzO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvcC1iYXItbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2lkZS1iYXItaWNvbixcXG4uZGFyay1saWdodC1tb2RlLFxcbi5pbmZvLWljb24ge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmluZm8ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5pbmZvIC5pbmZvLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwNXB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgLyogei1pbmRleDogMTAwOyAqL1xcbn1cXG5cXG4uaW5mbzpob3ZlciAuaW5mby1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogU2lkZSBiYXIgKi9cXG4jc2lkZS1iYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHRyYW5zaXRpb246IHBhZGRpbmctbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RheS1sYXRlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWR0aDogMjUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9kYXksXFxuLmxhdGUsXFxuLnRhc2stY2F0ZWdvcmllcy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RheSxcXG4ubGF0ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnRvZGF5LWljb24sXFxuLmxhdGUtaWNvbixcXG4ucGx1cy1pY29uIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yaWVzLWhlYWRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmJ1dHRvbi5hZGQtdGFzay1jYXRlZ29yeSB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LWljb24tY29sb3Ige1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LWljb24tY29sb3I6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeSAucmVtb3ZlLXRhc2stY2F0ZWdvcnkge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeTpob3ZlciAucmVtb3ZlLXRhc2stY2F0ZWdvcnkge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnJlbW92ZS10YXNrLWNhdGVnb3J5OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktbmFtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5uZXctdGFzay1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLyogVGFzayBjYXRlZ29yaWVzLCBhZGRlZCBieSB0aGUgdXNlciAqL1xcbi50YXNrLWNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LWljb24ge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQsIHBvcHVsYXRlZCBieSBvdGhlciBtb2R1bGVzICovXFxuI21haW4tY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZWYxO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG5cXG4vKiBObyBzaWRlIGJhciBpZiBwYWdlIGxvYWRzIHdoaWxlIHdpbmRvdyBzaXplIGlzIHNtYWxsKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XFxuICAjbWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgfVxcbiAgI3NpZGUtYmFyIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAudG9kYXktbGF0ZSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcblxcbiAgLnRhc2stY2F0ZWdvcmllcyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IHsgdGFza0NhdGVnb3J5TGlicmFyeSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgdGFsbHlNYXJrMyBmcm9tIFwiLi9pbWFnZXMvdGFsbHktbWFyay0zLnBuZ1wiO1xuaW1wb3J0IHN1bkhvbGxvdyBmcm9tIFwiLi9pbWFnZXMvc3VuLWhvbGxvdy5zdmdcIjtcbmltcG9ydCBpbmZvRGFyayBmcm9tIFwiLi9pbWFnZXMvaW5mby1kYXJrLnBuZ1wiO1xuaW1wb3J0IHRvZGF5UE5HIGZyb20gXCIuL2ltYWdlcy90b2RheS5wbmdcIjtcbmltcG9ydCBsYXRlUE5HIGZyb20gXCIuL2ltYWdlcy9sYXRlLnBuZ1wiO1xuaW1wb3J0IHBsdXMgZnJvbSBcIi4vaW1hZ2VzL3BsdXMucG5nXCI7XG5pbXBvcnQgdHJhc2hDYW5EYXJrIGZyb20gXCIuL2ltYWdlcy90cmFzaC1jYW4tZGFyay5zdmdcIjtcblxuLy8gZGFzaGJvYXJkIGZ1bmN0aW9uIChmb3IgbG9hZGluZyB0aGUgc2lkZSBhbmQgdG9wIGJhcnMpXG5mdW5jdGlvbiBkYXNoYm9hcmQoKSB7XG4gIC8vIE5PVEU6IEEgZ3JpZCBzeXN0ZW0gaXMgdG8gYmUgY3JlYXRlZCB3aXRoIHRoaXMgZnVuY3Rpb24uIFRoZSBzaWRlIGFuZCB0b3AgYmFycyB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGVsZW1lbnRzLFxuICAvLyAgICAgICBhbmQgdGhlIG1haW4gc2VjdGlvbiAoY29sdW1uIDIgYW5kIHJvdyAyKSB3aWxsIGJlIGxlZnQgYXMgYW4gaHRtbCBlbGVtZW50IHRoYXQgY29udGFpbnMgYW4gaW1hZ2UsIHdoaWNoIGlzXG4gIC8vICAgICAgIHRvIGJlIHJlcGxhY2VkIGFuZCBmaWxsZWQgYnkgdGhlIG90aGVyIGZ1bmN0aW9uc1xuICAvLyAgICAgICBpZTogdG9kYXkgZnVuY3Rpb24sIGxhdGUgZnVuY3Rpb24sIGFuZCB0YXNrQ2F0ZWdvcnkgZnVuY3Rpb25cbiAgLy8gTk9URTogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIGEgdGFza0NhdGVnb3J5IGlzIGVpdGhlciBhZGRlZCBvciByZW1vdmVkLCBiZWNhdXNlIHRoaXMgbmVlZHMgdG8gYmVcbiAgLy8gICAgICAgZGlzcGxheWVkIGluIHRoZSBzaWRlIGJhclxuXG4gIC8vIGRlY2xhcmUgZWxlbWVudHNcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbiAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9wQmFyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNpZGVCYXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgZGFya0xpZ2h0TW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IHRvcEJhclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm9Db250YWluZXJUeHQxID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgXCJUaGlzIGlzIGEgdG9kbyBsaXN0IGFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHlvdSB0byByZWNvcmQgdGFza3MsIGtlZXAgdHJhY2sgb2YgdGhlbSwgYW5kIGNvbXBsZXRlIHRoZW0uIENyZWF0ZSBhIHRhc2sgY2F0ZWdvcnksIGZpbGwgaXQgd2l0aCB0YXNrcywgYW5kIGtlZXAgdHJhY2sgb2YgdGhlbSB0aHJvdWdoIHRoZSB0YXNrIGNhdGVnb3J5IHRhYiwgb3IgdGhyb3VnaCB0aGUgdG9kYXkgYW5kIGxhdGUgdGFicy5cIlxuICApO1xuICBjb25zdCBuZXdMaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgY29uc3QgbmV3TGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIGNvbnN0IGluZm9Db250YWluZXJUeHQyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgXCJUaGlzIHdlYnNpdGUgd2FzIGNyZWF0ZWQgYnkgRGFuaWVsIEJhbGxlcmluaSwgd2l0aCBoZWxwIGZyb20gdGhlIE9kaW4gUHJvamVjdC5cIlxuICApO1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXlMYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCB0b2RheVR4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5VHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUb2RheVwiKTtcbiAgY29uc3QgbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbGF0ZVR4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhdGVUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkxhdGVcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcmllc0hlYWRlclR4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUYXNrIENhdGVnb3JpZXNcIik7XG4gIGNvbnN0IGFkZFRhc2tDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbmV3VGFza0NhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vICAgY29uc3QgdGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICBjb25zdCB0YXNrQ2F0ZWdvcnlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgLy8gICBjb25zdCB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyAgIGNvbnN0IFRhc2tDYXRlZ29yeVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR2VuZXJhbFwiKTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gYWRkIGF0dHJpYnV0ZXNcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xuICB0b3BCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b3AtYmFyXCIpO1xuICB0b3BCYXJMZWZ0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wLWJhci1sZWZ0XCIpO1xuICBzaWRlQmFySWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGUtYmFyLWljb24gZ3Jvd1wiKTtcbiAgc2lkZUJhckljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIHRhbGx5TWFyazMpO1xuICBzaWRlQmFySWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJzaWRlIGJhciBpY29uXCIpO1xuICBkYXJrTGlnaHRNb2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGFyay1saWdodC1tb2RlIGdyb3dcIik7XG4gIGRhcmtMaWdodE1vZGUuc2V0QXR0cmlidXRlKFwic3JjXCIsIHN1bkhvbGxvdyk7XG4gIGRhcmtMaWdodE1vZGUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwibGlnaHQgbW9kZSBkYXJrIG1vZGUgaWNvblwiKTtcbiAgdG9wQmFyUmlnaHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b3AtYmFyLXJpZ2h0XCIpO1xuICBpbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5mb1wiKTtcbiAgaW5mb0ljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmZvLWljb25cIik7XG4gIGluZm9JY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbmZvRGFyayk7XG4gIGluZm9JY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImluZm8gaWNvblwiKTtcbiAgaW5mb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm8tY29udGFpbmVyXCIpO1xuICBzaWRlQmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZS1iYXJcIik7XG4gIHRvZGF5TGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZGF5LWxhdGVcIik7XG4gIHRvZGF5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kYXkgZ3Jvdy0yXCIpO1xuICB0b2RheUljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RheS1pY29uXCIpO1xuICB0b2RheUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIHRvZGF5UE5HKTtcbiAgdG9kYXlJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInRvZGF5IG9wdGlvbiBpY29uXCIpO1xuICBsYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGF0ZSBncm93LTJcIik7XG4gIGxhdGVJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGF0ZS1pY29uXCIpO1xuICBsYXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbGF0ZVBORyk7XG4gIGxhdGVJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImxhdGUgb3B0aW9uIGljb25cIik7XG4gIHRhc2tDYXRlZ29yaWVzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1jYXRlZ29yaWVzXCIpO1xuICB0YXNrQ2F0ZWdvcmllc0hlYWRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2F0ZWdvcmllcy1oZWFkZXJcIik7XG4gIGFkZFRhc2tDYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZC10YXNrLWNhdGVnb3J5XCIpO1xuICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBsdXMtaWNvbiBncm93XCIpO1xuICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGx1cyk7XG4gIHBsdXNJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImFkZCB0YXNrIGNhdGVnb3J5IGljb25cIik7XG4gIG5ld1Rhc2tDYXRlZ29yaWVzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3LXRhc2stY2F0ZWdvcmllc1wiKTtcblxuICAvLyAgIHRhc2tDYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2F0ZWdvcnkgZ3Jvdy0yXCIpO1xuICAvLyAgIHRhc2tDYXRlZ29yeUljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWNhdGVnb3J5LWljb25cIik7XG4gIC8vICAgdGFza0NhdGVnb3J5SWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY2lyY2xlRGFyayk7XG4gIC8vICAgdGFza0NhdGVnb3J5SWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJ0YXNrIGNhdGVnb3J5IGljb25cIik7XG5cbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGRvbVxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BCYXIpO1xuICB0b3BCYXIuYXBwZW5kQ2hpbGQodG9wQmFyTGVmdCk7XG4gIHRvcEJhckxlZnQuYXBwZW5kQ2hpbGQoc2lkZUJhckljb24pO1xuICB0b3BCYXJMZWZ0LmFwcGVuZENoaWxkKGRhcmtMaWdodE1vZGUpO1xuICB0b3BCYXIuYXBwZW5kQ2hpbGQodG9wQmFyUmlnaHQpO1xuICB0b3BCYXJSaWdodC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvSWNvbik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lclR4dDEpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0xpbmUxKTtcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMaW5lMik7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lclR4dDIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQodG9kYXlMYXRlKTtcbiAgdG9kYXlMYXRlLmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlJY29uKTtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlUeHRDb250YWluZXIpO1xuICB0b2RheVR4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheVR4dCk7XG4gIHRvZGF5TGF0ZS5hcHBlbmRDaGlsZChsYXRlKTtcbiAgbGF0ZS5hcHBlbmRDaGlsZChsYXRlSWNvbik7XG4gIGxhdGUuYXBwZW5kQ2hpbGQobGF0ZVR4dENvbnRhaW5lcik7XG4gIGxhdGVUeHRDb250YWluZXIuYXBwZW5kQ2hpbGQobGF0ZVR4dCk7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3JpZXMpO1xuICB0YXNrQ2F0ZWdvcmllcy5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcmllc0hlYWRlcik7XG4gIHRhc2tDYXRlZ29yaWVzSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0Q29udGFpbmVyKTtcbiAgdGFza0NhdGVnb3JpZXNIZWFkZXJUeHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3JpZXNIZWFkZXJUeHQpO1xuICB0YXNrQ2F0ZWdvcmllc0hlYWRlci5hcHBlbmRDaGlsZChhZGRUYXNrQ2F0ZWdvcnkpO1xuICBhZGRUYXNrQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuICB0YXNrQ2F0ZWdvcmllcy5hcHBlbmRDaGlsZChuZXdUYXNrQ2F0ZWdvcmllcyk7XG4gIC8vICAgbmV3VGFza0NhdGVnb3JpZXMuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3J5KTtcbiAgLy8gICB0YXNrQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3J5SWNvbik7XG4gIC8vICAgdGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeVR4dENvbnRhaW5lcik7XG4gIC8vICAgdGFza0NhdGVnb3J5VHh0Q29udGFpbmVyLmFwcGVuZENoaWxkKFRhc2tDYXRlZ29yeVR4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjY29udGFpbmVyID4gI21haW4tY29udGVudFwiXG4gICk7IC8vIFRoaXMgdmFyaWFibGUgZXhpc3RzIHRvIG92ZXJyaWRlIHRoZSBzdHlsaW5nIG9mIHRoZSBtYWluQ29udGVudFxufVxuXG4vLyBXaW5kb3cgcmVzaXplIHNpZGViYXIgZnVuY3Rpb24gdGhhdCByZXRyYWN0cyBhbmQgZXhwYW5kcyB0aGUgc2lkZSBiYXIgZGVwZW5kaW5nIG9uIHdpbmRvdyBzaXplXG5mdW5jdGlvbiB3aW5kb3dSZXNpemVTaWRlQmFyKHdpbmRvd1Jlc2l6ZURpcmVjdGlvbikge1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlLWJhclwiKTtcbiAgY29uc3QgbWFpbkNvbnRlbnRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjY29udGFpbmVyID4gI21haW4tY29udGVudFwiXG4gICk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG4gIGNvbnN0IHRvZGF5TGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktbGF0ZVwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2F0ZWdvcmllc1wiKTtcblxuICBpZiAoXG4gICAgZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA8IDgwMCAmJlxuICAgIHdpbmRvd1Jlc2l6ZURpcmVjdGlvbiA8IDAgJiZcbiAgICBzaWRlQmFyLm9mZnNldFdpZHRoID09PSAyOTBcbiAgKSB7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMSAvIDNcIjtcbiAgICBzaWRlQmFyLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgc2lkZUJhci5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG4gICAgdG9kYXlMYXRlLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgdGFza0NhdGVnb3JpZXMuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgfVxuICBpZiAoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA+IDgwMCAmJiB3aW5kb3dSZXNpemVEaXJlY3Rpb24gPiAwKSB7XG4gICAgbWFpbkNvbnRlbnRQcmlvcml0eS5zdHlsZS5ncmlkQ29sdW1uID0gXCIyIC8gM1wiO1xuICAgIHNpZGVCYXIuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgc2lkZUJhci5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCI7XG4gICAgdG9kYXlMYXRlLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgIHRhc2tDYXRlZ29yaWVzLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICB9XG59XG5cbi8vIEJ1dHRvbiBzaWRlYmFyIGZ1bmN0aW9uIHRoYXQgcmV0cmFjdHMgYW5kIGV4cGFuZHMgdGhlIHNpZGUgYmFyIHdoZW4gdGhlIGJ1dHRvbiBpcyBwcmVzc2VkXG5mdW5jdGlvbiBidXR0b25TaWRlQmFyKGV2ZW50KSB7XG4gIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGUtYmFyXCIpO1xuICBjb25zdCBtYWluQ29udGVudFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNjb250YWluZXIgPiAjbWFpbi1jb250ZW50XCJcbiAgKTtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcbiAgY29uc3QgdG9kYXlMYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS1sYXRlXCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jYXRlZ29yaWVzXCIpO1xuXG4gIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIi5zaWRlLWJhci1pY29uXCIpKSB7XG4gICAgaWYgKHNpZGVCYXIub2Zmc2V0V2lkdGggPT09IDApIHtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoID4gODAwKSB7XG4gICAgICAgIG1haW5Db250ZW50UHJpb3JpdHkuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMiAvIDNcIjtcbiAgICAgIH1cbiAgICAgIHNpZGVCYXIuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgICBzaWRlQmFyLnN0eWxlLnBhZGRpbmcgPSBcIjIwcHhcIjtcbiAgICAgIHRvZGF5TGF0ZS5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgICAgIHRhc2tDYXRlZ29yaWVzLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgIH1cbiAgICBpZiAoc2lkZUJhci5vZmZzZXRXaWR0aCA9PT0gMjkwKSB7XG4gICAgICBtYWluQ29udGVudC5zdHlsZS5ncmlkQ29sdW1uID0gXCIxIC8gM1wiO1xuICAgICAgc2lkZUJhci5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgICAgc2lkZUJhci5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG4gICAgICB0b2RheUxhdGUuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgIHRhc2tDYXRlZ29yaWVzLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgfVxuICB9XG59XG5cbi8vIERpc3BsYXkgdGFzayBjYXRlZ29yaWVzIGluIHNpZGUgYmFyIGZ1bmN0aW9uXG5mdW5jdGlvbiBkaXNwbGF5VGFza0NhdGVnb3JpZXMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0NhdGVnb3J5TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgIC8vIGRlY2xhcmUgZWxlbWVudHNcbiAgICBjb25zdCBuZXdUYXNrQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stY2F0ZWdvcmllc1wiKTtcbiAgICBjb25zdCB0YXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tDYXRlZ29yeUljb25Db2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IFRhc2tDYXRlZ29yeVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgdGFza0NhdGVnb3J5TGlicmFyeVtpXS5nZXRUaXRsZSgpXG4gICAgKTtcbiAgICAvLyBjb25zdCByZW1vdmVUYXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJlbW92ZVRhc2tDYXRlZ29yeUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAvLyBhZGQgYXR0cmlidXRlc1xuICAgIHRhc2tDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXRlZ29yeVwiLCBcImdyb3ctMlwiKTtcbiAgICB0YXNrQ2F0ZWdvcnlJY29uQ29sb3IuY2xhc3NMaXN0LmFkZChcInRhc2stY2F0ZWdvcnktaWNvbi1jb2xvclwiLCBpKTtcbiAgICB0YXNrQ2F0ZWdvcnlJY29uQ29sb3Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNvbG9yXCIpO1xuICAgIHRhc2tDYXRlZ29yeUljb25Db2xvci5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInZhbHVlXCIsXG4gICAgICB0YXNrQ2F0ZWdvcnlMaWJyYXJ5W2ldLmdldENvbG9yKClcbiAgICApO1xuICAgIHRhc2tDYXRlZ29yeVR4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXRlZ29yeS1uYW1lXCIsIGkpO1xuICAgIHRhc2tDYXRlZ29yeVR4dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgICBcIm9uY2xpY2tcIixcbiAgICAgIFwidGhpcy5jb250ZW50RWRpdGFibGU9dHJ1ZVwiXG4gICAgKTtcbiAgICB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgXCJvbmJsdXJcIixcbiAgICAgIFwidGhpcy5jb250ZW50RWRpdGFibGU9ZmFsc2VcIlxuICAgICk7XG4gICAgcmVtb3ZlVGFza0NhdGVnb3J5SW1nLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtdGFzay1jYXRlZ29yeVwiLCBpKTtcbiAgICByZW1vdmVUYXNrQ2F0ZWdvcnlJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRyYXNoQ2FuRGFyayk7XG5cbiAgICAvLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tXG4gICAgbmV3VGFza0NhdGVnb3JpZXMuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3J5KTtcbiAgICB0YXNrQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3J5SWNvbkNvbG9yKTtcbiAgICB0YXNrQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3J5VHh0Q29udGFpbmVyKTtcbiAgICB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIuYXBwZW5kQ2hpbGQoVGFza0NhdGVnb3J5VHh0KTtcbiAgICB0YXNrQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQocmVtb3ZlVGFza0NhdGVnb3J5SW1nKTtcbiAgfVxufVxuXG4vLyBDbGVhciB0YXNrIGNhdGVnb3JpZXMgZnVuY3Rpb25cbmZ1bmN0aW9uIGNsZWFyVGFza0NhdGVnb3JpZXMoKSB7XG4gIGNvbnN0IG5ld1Rhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1jYXRlZ29yaWVzXCIpO1xuICBuZXdUYXNrQ2F0ZWdvcmllcy5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKChuKSA9PiBuLnJlbW92ZSgpKTtcbn1cblxuLy8gTW9kYWwgd2luZG93IGZ1bmN0aW9uXG4vLyBkZWNsYXJlIGVsZW1lbnRzXG4vLyBhZGQgYXR0cmlidXRlc1xuLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGRvbSAoc2libGluZyBvZiAjbWFpbi1jb250ZW50IGVsZW1lbnQpXG5cbi8vIHRvZGF5IGZ1bmN0aW9uIChmb3IgbG9hZGluZyB0aGUgdG9kYXkgdGFiIHdoaWNoIGNvbnRhaW5zIGFsbCB0YXNrcyB0aGF0IGFyZSBkdWUgdG9kYXkpXG4vLyBkZWNsYXJlIGVsZW1lbnRzXG4vLyBhZGQgYXR0cmlidXRlc1xuLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGRvbVxuXG4vLyBsYXRlIGZ1bmN0aW9uIChmb3IgbG9hZGluZyB0aGUgbGF0ZSB0YWIgd2hpY2ggY29udGFpbnMgYWxsIHRhc2tzIHRoYXQgd2VyZSBkdWUgYmVmb3JlIHRoZSBwcmVzZW50IGRhdGUgYW5kIGhhdmUgbm90IGJlZW4gY29tcGxldGVkIHlldClcbi8vIGRlY2xhcmUgZWxlbWVudHNcbi8vIGFkZCBhdHRyaWJ1dGVzXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tXG5cbi8vIHRhc2tDYXRlZ29yeSBmdW5jdGlvbiAoZm9yIGxvYWRpbmcgdGhlIGNvbnRlbnQgb2YgYSB0YXNrQ2F0ZWdvcnkgdGhhdCBoYXMgYmVlbiBzZWxlY3RlZClcbi8vIGRlY2xhcmUgZWxlbWVudHNcbi8vIGFkZCBhdHRyaWJ1dGVzXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tXG5cbmV4cG9ydCB7XG4gIGRhc2hib2FyZCxcbiAgd2luZG93UmVzaXplU2lkZUJhcixcbiAgYnV0dG9uU2lkZUJhcixcbiAgZGlzcGxheVRhc2tDYXRlZ29yaWVzLFxuICBjbGVhclRhc2tDYXRlZ29yaWVzLFxufTtcbiIsIi8vIHRhc2tDYXRlZ29yeSBmYWN0b3J5IGZ1bmN0aW9uIChjcmVhdGVzIHRhc2sgY2F0ZWdvcnkgb2JqZWN0cywgd2hpY2ggd2lsbCBjb250YWluIHRhc2tzKVxuLy8gcHJvcGVydGllczogdGl0bGUgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSwgY29sb3IgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSwgYXJyYXkgb2YgdGFza3Ncbi8vIG1ldGhvZHM6IGdldFRpdGxlLCBnZXRDb2xvciwgZ2V0VGFza3MgKGdldCB0YXNrcyBmcm9tIHRhc2tzIGFycmF5KSwgc2V0VGl0bGUsIHNldENvbG9yLCBzZXRUYXNrIChhZGQgdGFzayB0byB0YXNrcyBhcnJheSksXG5mdW5jdGlvbiB0YXNrQ2F0ZWdvcnlGYWN0b3J5KHRpdGxlLCBjb2xvcikge1xuICBjb25zdCB0YXNrc0FycmF5ID0gW107XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0Q29sb3IgPSAoKSA9PiBjb2xvcjtcbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrc0FycmF5O1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gKHRpdGxlID0gbmV3VGl0bGUpO1xuICBjb25zdCBzZXRDb2xvciA9IChuZXdDb2xvcikgPT4gKGNvbG9yID0gbmV3Q29sb3IpO1xuICBjb25zdCBzZXRUYXNrID0gKG5ld1Rhc2spID0+IHRhc2tzQXJyYXkucHVzaChuZXdUYXNrKTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldENvbG9yLFxuICAgIGdldFRhc2tzLFxuICAgIHNldFRpdGxlLFxuICAgIHNldENvbG9yLFxuICAgIHNldFRhc2ssXG4gIH07XG59XG5cbi8vIHRhc2sgZmFjdG9yeSBmdW5jdGlvbiAoY3JlYXRlcyB0YXNrcyB0aGF0IHRoZSB1c2VyIGNyZWF0ZXMsIHdoaWNoIHdpbGwgYmUgcGxhY2VkIGluIGEgdGFza0NhdGVnb3J5KVxuLy8gcHJvcGVydGllczogdGl0bGUgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSwgZGVzY3JpcHRpb24gKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSxcbi8vICAgICAgICAgICAgIGNhdGVnb3J5IChyZWNlaXZlZCBmcm9tIHVzZXIgZm9ybSksIGR1ZURhdGUgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSxcbi8vICAgICAgICAgICAgIHByaW9yaXR5IChyZWNlaXZlZCBmcm9tIHVzZXIgZm9ybSlcbi8vIG1ldGhvZHM6IGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0Q2F0ZWdvcnksIGdldER1ZURhdGUsIGdldFByaW9yaXR5XG4vLyAgICAgICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldENhdGVnb3J5LCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eVxuXG4vLyBBcnJheSB0aGF0IGhvbGRzIGFsbCB0YXNrIGNhdGVnb3J5IG9iamVjdHNcbmNvbnN0IHRhc2tDYXRlZ29yeUxpYnJhcnkgPSBbXTtcblxuLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlcmUgYXJlIGZpdmUgdGFzayBjYXRlZ29yeSBvYmplY3RzIGluIGFycmF5XG5mdW5jdGlvbiBjaGVja1Rhc2tDYXRlZ29yeUxpYnJhcnlGdWxsKCkge1xuICBpZiAodGFza0NhdGVnb3J5TGlicmFyeS5sZW5ndGggPT09IDUpIHJldHVybiB0cnVlO1xuICBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuLy8gRWRpdCB0YXNrIGNhdGVnb3J5IG5hbWUgZnVuY3Rpb25cbmZ1bmN0aW9uIGVkaXRUYXNrQ2F0ZWdvcnlOYW1lKGV2ZW50KSB7XG4gIHRhc2tDYXRlZ29yeUxpYnJhcnlbZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsxXV0uc2V0VGl0bGUoXG4gICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50XG4gICk7XG59XG5cbi8vIEVkaXQgdGFzayBjYXRlZ29yeSBpY29uIGNvbG9yIGZ1bmN0aW9uXG5mdW5jdGlvbiBlZGl0VGFza0NhdGVnb3J5SWNvbkNvbG9yKGV2ZW50KSB7XG4gIHRhc2tDYXRlZ29yeUxpYnJhcnlbZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsxXV0uc2V0Q29sb3IoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbn1cblxuLy8gUmVtb3ZlIHRhc2sgY2F0ZWdvcnkgZnVuY3Rpb25cbmZ1bmN0aW9uIHJlbW92ZVRhc2tDYXRlZ29yeShldmVudCkge1xuICB0YXNrQ2F0ZWdvcnlMaWJyYXJ5LnNwbGljZShldmVudC50YXJnZXQuY2xhc3NMaXN0WzFdLCAxKTtcbn1cblxuLy8gQWRkIG5ldyB0YXNrIGNhdGVnb3J5IGZ1bmN0aW9uXG5mdW5jdGlvbiBhZGROZXdUYXNrQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGR1bW15VGFza0NhdGVnb3J5ID0gdGFza0NhdGVnb3J5RmFjdG9yeShcIkNhdGVnb3J5XCIsIFwiIzAwMDAwMFwiKTtcbiAgdGFza0NhdGVnb3J5TGlicmFyeS5wdXNoKGR1bW15VGFza0NhdGVnb3J5KTtcbn1cblxuLy8gdG9kYXkgYXJyYXkgKGNvbnRhaW5zIGFsbCB0YXNrIG9iamVjdHMgdGhhdCBoYXZlIGR1ZURhdGUgb2YgdG9kYXlzIGRhdGUpXG5cbi8vIGxhdGUgYXJyYXkgKGNvbnRhaW5zIGFsbCB0YXNrIG9iamVjdHMgdGhhdCBoYXZlIGEgZHVlRGF0ZSBlYXJsaWVyIHRoYXQgdG9kYXlzIGRhdGUpXG5cbi8vIHNldENvbXBsZXRlIGZ1bmN0aW9uIChzZXRzIHRhc2sgYXMgY29tcGxldGUgYW5kIGRlbGV0ZXMgaXQgZnJvbSBhbGwgYXJyYXlzIHRoYXQgY29udGFpbiBpdClcbi8vIFRoaXMgZnVuY3Rpb24gcGVyZm9ybXMgYW4gYW5pbWF0aW9uIGJlZm9yZSBkZWxldGluZyBpdCB1bmxpa2UgdGhlIG5leHQgZnVuY3Rpb24uLi5cblxuLy8gZGVsZXRlVGFzayBmdW5jdGlvbiAoZGVsZXRlcyB0YXNrIGZyb20gYWxsIGFycmF5cyB0aGF0IGNvbnRhaW5zIGl0KVxuXG4vLyBhZGRUYXNrIGZ1bmN0aW9uIChyZWNlaXZlcyBkYXRhIGZyb20gdGhlIHVzZXIgZm9ybSBhbmQgY2FsbHMgdGhlIHRhc2sgZmFjdG9yeSBmdW5jdGlvbiwgZmVlZGluZyBpdCB0aGUgdXNlciBwYXJhbWV0ZXJzKVxuLy8gKioqVGhpcyBtYXkgbm90IGJlIG5lZWRlZCoqKlxuXG4vLyBvcmdhbml6ZVRhc2sgZnVuY3Rpb24gKHNlbmRzIHRhc2sgb2JqZWN0IHRvIGFwcHJvcHJpYXRlIGFycmF5cylcbi8vIE5PVEU6IFNvbWV0aGluZyB0byBjb25zaWRlciBpcyB0aGF0IHdoZW4gYSBuZXcgZGF5IGNvbWVzIGFsb25nLCBjZXJ0YWluIHRhc2sgb2JqZWN0cyB3aWxsIG5lZWQgdG8gYmUgYXV0b21hdGljYWxseVxuLy8gICAgICAgcGxhY2VkIGludG8gZWl0aGVyIHRoZSB0b2RheSBhcnJheSwgb3IgdGhlIGxhdGUgYXJyYXkuXG5cbi8vIGVkaXRUYXNrIGZ1bmN0aW9uIChyZWNlaXZlcyBkYXRhIGZyb20gdXNlciBmb3JtLCB0aGVuIGNhbGxzIHRhc2sgc2V0IG1ldGhvZHMgdG8gY2hhbmdlIHRoZSBhcHByb3ByaWF0ZSBwcm9wZXJ0aWVzKVxuXG4vLyBjaGFuZ2VUaGVtZSBmdW5jdGlvbiAoY2hhbmdlcyBVSSB0byBkYXJrIG1vZGUgb3IgbGlnaHQgbW9kZSApXG5cbi8vIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplIG1vZHVsZSAoc2NvcGUgb2YgdGhpcyBtb2R1bGUgaXMgdG8gZGV0ZXJtaW5lIHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIG9mIHdpbmRvdyBmcm9tIHdoZW4gdGhlIHVzZXIgYmVnaW5zIGNoYW5naW5nIGl0cyBzaXplLCBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciBpdCBpcyBzaHJpbmtpbmcgb3IgZ3Jvd2luZylcbmNvbnN0IGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplID0gKCgpID0+IHtcbiAgbGV0IHBvc2l0aW9uV2lkdGhMYXN0O1xuICBsZXQgbmV3UG9zaXRpb247XG4gIGxldCBwb3NpdGlvbldpZHRoRGlmZmVyZW5jZTtcblxuICBjb25zdCBzZXRQb3NpdGlvbldpZHRoTGFzdCA9IChzY3JlZW5XaWR0aCkgPT5cbiAgICAocG9zaXRpb25XaWR0aExhc3QgPSBzY3JlZW5XaWR0aCk7XG4gIGNvbnN0IHNldE5ld1Bvc2l0aW9uID0gKHNjcmVlbldpZHRoKSA9PiAobmV3UG9zaXRpb24gPSBzY3JlZW5XaWR0aCk7XG4gIGNvbnN0IHNldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlID0gKCkgPT5cbiAgICAocG9zaXRpb25XaWR0aERpZmZlcmVuY2UgPSBuZXdQb3NpdGlvbiAtIHBvc2l0aW9uV2lkdGhMYXN0KTtcbiAgY29uc3QgZ2V0UG9zaXRpb25XaWR0aERpZmZlcmVuY2UgPSAoKSA9PiBwb3NpdGlvbldpZHRoRGlmZmVyZW5jZTtcblxuICByZXR1cm4ge1xuICAgIHNldFBvc2l0aW9uV2lkdGhMYXN0LFxuICAgIHNldE5ld1Bvc2l0aW9uLFxuICAgIHNldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlLFxuICAgIGdldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHtcbiAgdGFza0NhdGVnb3J5RmFjdG9yeSxcbiAgdGFza0NhdGVnb3J5TGlicmFyeSxcbiAgY2hlY2tUYXNrQ2F0ZWdvcnlMaWJyYXJ5RnVsbCxcbiAgZWRpdFRhc2tDYXRlZ29yeU5hbWUsXG4gIGVkaXRUYXNrQ2F0ZWdvcnlJY29uQ29sb3IsXG4gIHJlbW92ZVRhc2tDYXRlZ29yeSxcbiAgYWRkTmV3VGFza0NhdGVnb3J5LFxuICBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IHtcbiAgZGFzaGJvYXJkLFxuICB3aW5kb3dSZXNpemVTaWRlQmFyLFxuICBidXR0b25TaWRlQmFyLFxuICBkaXNwbGF5VGFza0NhdGVnb3JpZXMsXG4gIGNsZWFyVGFza0NhdGVnb3JpZXMsXG59IGZyb20gXCIuL2RvbS1tYW5pcHVsYXRpb24uanNcIjtcbmltcG9ydCB7XG4gIHRhc2tDYXRlZ29yeUxpYnJhcnksXG4gIHRhc2tDYXRlZ29yeUZhY3RvcnksXG4gIGNoZWNrVGFza0NhdGVnb3J5TGlicmFyeUZ1bGwsXG4gIGVkaXRUYXNrQ2F0ZWdvcnlOYW1lLFxuICBlZGl0VGFza0NhdGVnb3J5SWNvbkNvbG9yLFxuICByZW1vdmVUYXNrQ2F0ZWdvcnksXG4gIGFkZE5ld1Rhc2tDYXRlZ29yeSxcbiAgZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUsXG59IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBBcnJheSB0aGF0IGhvbGRzIGFsbCB0YXNrIGNhdGVnb3J5IG9iamVjdHNcbi8vIGNvbnN0IHRhc2tDYXRlZ29yeUxpYnJhcnkgPSBbXTtcblxuZGFzaGJvYXJkKCk7XG5cbi8vIENyZWF0ZSBvYmplY3QgZm9yIGR1bW15IHRhc2sgY2F0ZWdvcnkgdGhlbiBwbGFjZSBpbiBhcnJheVxuY29uc3QgZHVtbXlUYXNrQ2F0ZWdvcnkgPSB0YXNrQ2F0ZWdvcnlGYWN0b3J5KFwiR2VuZXJhbFwiLCBcIiMwMDAwMDBcIik7XG50YXNrQ2F0ZWdvcnlMaWJyYXJ5LnB1c2goZHVtbXlUYXNrQ2F0ZWdvcnkpO1xuXG4vLyBEaXNwbGF5IHRhc2sgY2F0ZWdvcmllc1xuZGlzcGxheVRhc2tDYXRlZ29yaWVzKCk7XG5cbi8vIEV2ZW50IGxpc3RlbmVycyB0byBjb250cm9sIHRoZSBmbG93IG9mIHRoZSByZXRyYWN0aW5nIGFuZCBleHBhbmRpbmcgZGFzaGJvYXJkIHNpZGViYXJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmdldERpcmVjdGlvbk9mV2luZG93UmVzaXplLnNldFBvc2l0aW9uV2lkdGhMYXN0KGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplLnNldE5ld1Bvc2l0aW9uKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgpO1xuICBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZS5zZXRQb3NpdGlvbldpZHRoRGlmZmVyZW5jZSgpO1xuICBsZXQgd2luZG93UmVzaXplRGlyZWN0aW9uID1cbiAgICBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZS5nZXRQb3NpdGlvbldpZHRoRGlmZmVyZW5jZSgpO1xuICBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZS5zZXRQb3NpdGlvbldpZHRoTGFzdChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoKTtcblxuICB3aW5kb3dSZXNpemVTaWRlQmFyKHdpbmRvd1Jlc2l6ZURpcmVjdGlvbik7XG59KTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGJ1dHRvblNpZGVCYXIoZXZlbnQpO1xufSk7XG5cbi8vIEFkZCB0YXNrIGNhdGVnb3J5IGV2ZW50IGxpc3RlbmVyXG5jb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1cy1pY29uXCIpO1xucGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKCFjaGVja1Rhc2tDYXRlZ29yeUxpYnJhcnlGdWxsKCkpIHtcbiAgICBhZGROZXdUYXNrQ2F0ZWdvcnkoKTtcbiAgICBjbGVhclRhc2tDYXRlZ29yaWVzKCk7XG4gICAgZGlzcGxheVRhc2tDYXRlZ29yaWVzKCk7XG4gIH1cbn0pO1xuXG4vLyBFZGl0IHRhc2sgY2F0ZWdvcnkgZXZlbnQgbGlzdGVuZXJcbmNvbnN0IGFsbFRhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uZXctdGFzay1jYXRlZ29yaWVzXCIpO1xuYWxsVGFza0NhdGVnb3JpZXMuZm9yRWFjaCgodGFza0NhdGVnb3J5KSA9PiB7XG4gIHRhc2tDYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwidGFzay1jYXRlZ29yeS1uYW1lXCIpIHtcbiAgICAgIGVkaXRUYXNrQ2F0ZWdvcnlOYW1lKGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwidGFzay1jYXRlZ29yeS1pY29uLWNvbG9yXCIpIHtcbiAgICAgIGVkaXRUYXNrQ2F0ZWdvcnlJY29uQ29sb3IoZXZlbnQpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy8gUmVtb3ZlIHRhc2sgY2F0ZWdvcnkgZXZlbnQgbGlzdGVuZXJcbmFsbFRhc2tDYXRlZ29yaWVzLmZvckVhY2goKHRhc2tDYXRlZ29yeSkgPT4ge1xuICB0YXNrQ2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcInJlbW92ZS10YXNrLWNhdGVnb3J5XCIpIHtcbiAgICAgIHJlbW92ZVRhc2tDYXRlZ29yeShldmVudCk7XG4gICAgICBjbGVhclRhc2tDYXRlZ29yaWVzKCk7XG4gICAgICBkaXNwbGF5VGFza0NhdGVnb3JpZXMoKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=