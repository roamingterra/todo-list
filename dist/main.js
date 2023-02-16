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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: roboto-black;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Hover animations */\n.grow {\n  transition: all 0.2s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.5);\n}\n\n.grow-2 {\n  transition: all 0.1s ease-in-out;\n}\n\n.grow-2:hover {\n  transform: scale(1.1);\n}\n/* End of hover animations */\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  font-family: \"roboto-black\";\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 84px 1fr;\n  grid-template-columns: 290px 1fr;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Top bar */\n#top-bar {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: fit-content;\n  z-index: 2;\n  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.16);\n}\n\n.top-bar-left {\n  display: flex;\n  gap: 20px;\n}\n\n.side-bar-icon,\n.dark-light-mode,\n.info-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.info {\n  width: 40px;\n  height: 40px;\n}\n\n.info .info-container {\n  visibility: hidden;\n  position: absolute;\n  top: 105px;\n  right: 20px;\n  background-color: black;\n  color: white;\n  width: 400px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: justify;\n  line-height: 25px;\n  font-size: 1.25rem;\n}\n\n.info:hover .info-container {\n  visibility: visible;\n}\n\n/* Side bar */\n#side-bar {\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  font-size: 1.25rem;\n  z-index: 2;\n  width: 250px;\n  transition: padding-left 0.2s ease-in-out;\n  background-color: white;\n}\n\n.today-late {\n  white-space: nowrap;\n  width: 250px;\n  overflow: hidden;\n}\n\n.today,\n.late,\n.task-categories-header {\n  display: flex;\n  align-items: center;\n}\n\n.today,\n.late {\n  cursor: pointer;\n  gap: 5px;\n  padding-left: 10px;\n}\n\n.today-icon,\n.late-icon,\n.plus-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n\n.task-categories-header {\n  justify-content: space-between;\n}\n\nbutton.add-task-category {\n  border: 0;\n  padding: 0;\n  background-color: white;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  width: 1rem;\n}\n\n.new-task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-left: 5px;\n}\n\n/* Task categories will be added by the user */\n.task-category {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  padding: 5px;\n}\n\n/* Main content will be populated by other modules */\n#main-content {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #f0eef1;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n\n/* No side bar if page loads while window size is small*/\n@media only screen and (max-width: 799px) {\n  #main-content {\n    grid-column: 1 / 3;\n  }\n  #side-bar {\n    width: 0;\n    padding: 0;\n  }\n\n  .today-late {\n    width: 0;\n  }\n\n  .task-categories {\n    width: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,4CAAmC;AACrC;;AAEA,qBAAqB;AACrB;EACE,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;AACA,4BAA4B;;AAE5B;;EAEE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,gCAAgC;EAChC,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,aAAa;AACb;EACE,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,yCAAyC;EACzC,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,QAAQ;EACR,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA,8CAA8C;AAC9C;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA,oDAAoD;AACpD;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA,wDAAwD;AACxD;EACE;IACE,kBAAkB;EACpB;EACA;IACE,QAAQ;IACR,UAAU;EACZ;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,QAAQ;EACV;AACF","sourcesContent":["@font-face {\n  font-family: roboto-black;\n  src: url(./fonts/Roboto-Medium.ttf);\n}\n\n/* Hover animations */\n.grow {\n  transition: all 0.2s ease-in-out;\n}\n\n.grow:hover {\n  transform: scale(1.5);\n}\n\n.grow-2 {\n  transition: all 0.1s ease-in-out;\n}\n\n.grow-2:hover {\n  transform: scale(1.1);\n}\n/* End of hover animations */\n\nhtml,\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  font-family: \"roboto-black\";\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 84px 1fr;\n  grid-template-columns: 290px 1fr;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Top bar */\n#top-bar {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: fit-content;\n  z-index: 2;\n  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.16);\n}\n\n.top-bar-left {\n  display: flex;\n  gap: 20px;\n}\n\n.side-bar-icon,\n.dark-light-mode,\n.info-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.info {\n  width: 40px;\n  height: 40px;\n}\n\n.info .info-container {\n  visibility: hidden;\n  position: absolute;\n  top: 105px;\n  right: 20px;\n  background-color: black;\n  color: white;\n  width: 400px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: justify;\n  line-height: 25px;\n  font-size: 1.25rem;\n}\n\n.info:hover .info-container {\n  visibility: visible;\n}\n\n/* Side bar */\n#side-bar {\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  font-size: 1.25rem;\n  z-index: 2;\n  width: 250px;\n  transition: padding-left 0.2s ease-in-out;\n  background-color: white;\n}\n\n.today-late {\n  white-space: nowrap;\n  width: 250px;\n  overflow: hidden;\n}\n\n.today,\n.late,\n.task-categories-header {\n  display: flex;\n  align-items: center;\n}\n\n.today,\n.late {\n  cursor: pointer;\n  gap: 5px;\n  padding-left: 10px;\n}\n\n.today-icon,\n.late-icon,\n.plus-icon {\n  width: 2.5rem;\n  cursor: pointer;\n}\n\n.task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n\n.task-categories-header {\n  justify-content: space-between;\n}\n\nbutton.add-task-category {\n  border: 0;\n  padding: 0;\n  background-color: white;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  width: 1rem;\n}\n\n.new-task-categories {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-left: 5px;\n}\n\n/* Task categories will be added by the user */\n.task-category {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  cursor: pointer;\n}\n\n.task-category-icon {\n  padding: 5px;\n}\n\n/* Main content will be populated by other modules */\n#main-content {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #f0eef1;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n\n/* No side bar if page loads while window size is small*/\n@media only screen and (max-width: 799px) {\n  #main-content {\n    grid-column: 1 / 3;\n  }\n  #side-bar {\n    width: 0;\n    padding: 0;\n  }\n\n  .today-late {\n    width: 0;\n  }\n\n  .task-categories {\n    width: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "dashboard": () => (/* binding */ dashboard)
/* harmony export */ });
/* harmony import */ var _images_tally_mark_3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tally-mark-3.png */ "./src/images/tally-mark-3.png");
/* harmony import */ var _images_sun_hollow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sun-hollow.svg */ "./src/images/sun-hollow.svg");
/* harmony import */ var _images_info_dark_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/info-dark.png */ "./src/images/info-dark.png");
/* harmony import */ var _images_today_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/today.png */ "./src/images/today.png");
/* harmony import */ var _images_late_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/late.png */ "./src/images/late.png");
/* harmony import */ var _images_plus_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/plus.png */ "./src/images/plus.png");
/* harmony import */ var _images_circle_dark_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/circle-dark.png */ "./src/images/circle-dark.png");
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

  const taskCategory = document.createElement("div"); // Built in task category for testing purposes
  const taskCategoryIcon = document.createElement("img");
  const taskCategoryTxtContainer = document.createElement("div");
  const TaskCategoryTxt = document.createTextNode("General");

  const mainContent = document.createElement("div");

  // add attributes
  container.setAttribute("id", "container");
  topBar.setAttribute("id", "top-bar");
  topBarLeft.setAttribute("class", "top-bar-left");
  sideBarIcon.setAttribute("class", "side-bar-icon grow");
  sideBarIcon.setAttribute("src", _images_tally_mark_3_png__WEBPACK_IMPORTED_MODULE_0__);
  sideBarIcon.setAttribute("alt", "side bar icon");
  darkLightMode.setAttribute("class", "dark-light-mode grow");
  darkLightMode.setAttribute("src", _images_sun_hollow_svg__WEBPACK_IMPORTED_MODULE_1__);
  darkLightMode.setAttribute("alt", "light mode dark mode icon");
  topBarRight.setAttribute("class", "top-bar-right");
  info.setAttribute("class", "info");
  infoIcon.setAttribute("class", "info-icon");
  infoIcon.setAttribute("src", _images_info_dark_png__WEBPACK_IMPORTED_MODULE_2__);
  infoIcon.setAttribute("alt", "info icon");
  infoContainer.setAttribute("class", "info-container");
  sideBar.setAttribute("id", "side-bar");
  todayLate.setAttribute("class", "today-late");
  today.setAttribute("class", "today grow-2");
  todayIcon.setAttribute("class", "today-icon");
  todayIcon.setAttribute("src", _images_today_png__WEBPACK_IMPORTED_MODULE_3__);
  todayIcon.setAttribute("alt", "today option icon");
  late.setAttribute("class", "late grow-2");
  lateIcon.setAttribute("class", "late-icon");
  lateIcon.setAttribute("src", _images_late_png__WEBPACK_IMPORTED_MODULE_4__);
  lateIcon.setAttribute("alt", "late option icon");
  taskCategories.setAttribute("class", "task-categories");
  taskCategoriesHeader.setAttribute("class", "task-categories-header");
  addTaskCategory.setAttribute("class", "add-task-category");
  plusIcon.setAttribute("class", "plus-icon grow");
  plusIcon.setAttribute("src", _images_plus_png__WEBPACK_IMPORTED_MODULE_5__);
  plusIcon.setAttribute("alt", "add task category icon");
  newTaskCategories.setAttribute("class", "new-task-categories");

  taskCategory.setAttribute("class", "task-category grow-2"); // Built in task category for testing purposes
  taskCategoryIcon.setAttribute("class", "task-category-icon");
  taskCategoryIcon.setAttribute("src", _images_circle_dark_png__WEBPACK_IMPORTED_MODULE_6__);
  taskCategoryIcon.setAttribute("alt", "task category icon");

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
  newTaskCategories.appendChild(taskCategory);
  taskCategory.appendChild(taskCategoryIcon);
  taskCategory.appendChild(taskCategoryTxtContainer);
  taskCategoryTxtContainer.appendChild(TaskCategoryTxt);
  container.appendChild(mainContent);

  // Page event listeners

  const mainContentPriority = document.querySelector(
    "#container > #main-content"
  ); // This variable exists to override the styling of the mainContent

  let positionWidthLast = document.body.offsetWidth; // This variable is used to keep track of the window increasing or decreasing for the resize event listener

  window.addEventListener("resize", () => {
    let positionWidthDifference = document.body.offsetWidth - positionWidthLast;
    positionWidthLast = document.body.offsetWidth;
    if (
      document.body.offsetWidth < 800 &&
      positionWidthDifference < 0 &&
      sideBar.offsetWidth === 290
    ) {
      console.log("works negative");
      mainContent.style.gridColumn = "1 / 3";
      sideBar.style.width = "0";
      sideBar.style.padding = "0";
      todayLate.style.width = "0";
      taskCategories.style.width = "0";
    }
    if (document.body.offsetWidth > 800 && positionWidthDifference > 0) {
      console.log("works positive");
      mainContentPriority.style.gridColumn = "2 / 3";
      sideBar.style.width = "250px";
      sideBar.style.padding = "20px";
      todayLate.style.width = "250px";
      taskCategories.style.width = "250px";
    }
  });

  sideBarIcon.addEventListener("click", () => {
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

// taskCategory function (for loading the content of a taskCategory that has been selected)
// declare elements
// add attributes
// append elements to dom




/***/ }),

/***/ "./src/fonts/Roboto-Medium.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Roboto-Medium.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

/***/ }),

/***/ "./src/images/circle-dark.png":
/*!************************************!*\
  !*** ./src/images/circle-dark.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ed53fd6e75a00221d37.png";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Imports



(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.dashboard)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLWJsYWNrO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4vKiBIb3ZlciBhbmltYXRpb25zICovXFxuLmdyb3cge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ncm93OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuLmdyb3ctMiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdyb3ctMjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi8qIEVuZCBvZiBob3ZlciBhbmltYXRpb25zICovXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcInJvYm90by1ibGFja1xcXCI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODRweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5MHB4IDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVG9wIGJhciAqL1xcbiN0b3AtYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHotaW5kZXg6IDI7XFxuICBib3gtc2hhZG93OiAwIDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXG59XFxuXFxuLnRvcC1iYXItbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2lkZS1iYXItaWNvbixcXG4uZGFyay1saWdodC1tb2RlLFxcbi5pbmZvLWljb24ge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmluZm8ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5pbmZvIC5pbmZvLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwNXB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uaW5mbzpob3ZlciAuaW5mby1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogU2lkZSBiYXIgKi9cXG4jc2lkZS1iYXIge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHRyYW5zaXRpb246IHBhZGRpbmctbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RheS1sYXRlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWR0aDogMjUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9kYXksXFxuLmxhdGUsXFxuLnRhc2stY2F0ZWdvcmllcy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RheSxcXG4ubGF0ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnRvZGF5LWljb24sXFxuLmxhdGUtaWNvbixcXG4ucGx1cy1pY29uIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yaWVzLWhlYWRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmJ1dHRvbi5hZGQtdGFzay1jYXRlZ29yeSB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LWljb24ge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbi5uZXctdGFzay1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLyogVGFzayBjYXRlZ29yaWVzIHdpbGwgYmUgYWRkZWQgYnkgdGhlIHVzZXIgKi9cXG4udGFzay1jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktaWNvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi8qIE1haW4gY29udGVudCB3aWxsIGJlIHBvcHVsYXRlZCBieSBvdGhlciBtb2R1bGVzICovXFxuI21haW4tY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZWYxO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG5cXG4vKiBObyBzaWRlIGJhciBpZiBwYWdlIGxvYWRzIHdoaWxlIHdpbmRvdyBzaXplIGlzIHNtYWxsKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XFxuICAjbWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgfVxcbiAgI3NpZGUtYmFyIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAudG9kYXktbGF0ZSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcblxcbiAgLnRhc2stY2F0ZWdvcmllcyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUFtQztBQUNyQzs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQSw0QkFBNEI7O0FBRTVCOztFQUVFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQSw4Q0FBOEM7QUFDOUM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxvREFBb0Q7QUFDcEQ7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvLWJsYWNrO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0Zik7XFxufVxcblxcbi8qIEhvdmVyIGFuaW1hdGlvbnMgKi9cXG4uZ3JvdyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdyb3c6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uZ3Jvdy0yIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ3Jvdy0yOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLyogRW5kIG9mIGhvdmVyIGFuaW1hdGlvbnMgKi9cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvLWJsYWNrXFxcIjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkwcHggMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb3AgYmFyICovXFxuI3RvcC1iYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgei1pbmRleDogMjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbn1cXG5cXG4udG9wLWJhci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaWRlLWJhci1pY29uLFxcbi5kYXJrLWxpZ2h0LW1vZGUsXFxuLmluZm8taWNvbiB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5mbyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmluZm8gLmluZm8tY29udGFpbmVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTA1cHg7XFxuICByaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5pbmZvOmhvdmVyIC5pbmZvLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiBTaWRlIGJhciAqL1xcbiNzaWRlLWJhciB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgdHJhbnNpdGlvbjogcGFkZGluZy1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZGF5LWxhdGUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50b2RheSxcXG4ubGF0ZSxcXG4udGFzay1jYXRlZ29yaWVzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZGF5LFxcbi5sYXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udG9kYXktaWNvbixcXG4ubGF0ZS1pY29uLFxcbi5wbHVzLWljb24ge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWNhdGVnb3JpZXMtaGVhZGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uLmFkZC10YXNrLWNhdGVnb3J5IHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktaWNvbiB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4vKiBUYXNrIGNhdGVnb3JpZXMgd2lsbCBiZSBhZGRlZCBieSB0aGUgdXNlciAqL1xcbi50YXNrLWNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50IHdpbGwgYmUgcG9wdWxhdGVkIGJ5IG90aGVyIG1vZHVsZXMgKi9cXG4jbWFpbi1jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGVlZjE7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi8qIE5vIHNpZGUgYmFyIGlmIHBhZ2UgbG9hZHMgd2hpbGUgd2luZG93IHNpemUgaXMgc21hbGwqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk5cHgpIHtcXG4gICNtYWluLWNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICB9XFxuICAjc2lkZS1iYXIge1xcbiAgICB3aWR0aDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC50b2RheS1sYXRlIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuXFxuICAudGFzay1jYXRlZ29yaWVzIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgdGFsbHlNYXJrMyBmcm9tIFwiLi9pbWFnZXMvdGFsbHktbWFyay0zLnBuZ1wiO1xuaW1wb3J0IHN1bkhvbGxvdyBmcm9tIFwiLi9pbWFnZXMvc3VuLWhvbGxvdy5zdmdcIjtcbmltcG9ydCBpbmZvRGFyayBmcm9tIFwiLi9pbWFnZXMvaW5mby1kYXJrLnBuZ1wiO1xuaW1wb3J0IHRvZGF5UE5HIGZyb20gXCIuL2ltYWdlcy90b2RheS5wbmdcIjtcbmltcG9ydCBsYXRlUE5HIGZyb20gXCIuL2ltYWdlcy9sYXRlLnBuZ1wiO1xuaW1wb3J0IHBsdXMgZnJvbSBcIi4vaW1hZ2VzL3BsdXMucG5nXCI7XG5pbXBvcnQgY2lyY2xlRGFyayBmcm9tIFwiLi9pbWFnZXMvY2lyY2xlLWRhcmsucG5nXCI7XG5cbi8vIGRhc2hib2FyZCBmdW5jdGlvbiAoZm9yIGxvYWRpbmcgdGhlIHNpZGUgYW5kIHRvcCBiYXJzKVxuZnVuY3Rpb24gZGFzaGJvYXJkKCkge1xuICAvLyBOT1RFOiBBIGdyaWQgc3lzdGVtIGlzIHRvIGJlIGNyZWF0ZWQgd2l0aCB0aGlzIGZ1bmN0aW9uLiBUaGUgc2lkZSBhbmQgdG9wIGJhcnMgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBlbGVtZW50cyxcbiAgLy8gICAgICAgYW5kIHRoZSBtYWluIHNlY3Rpb24gKGNvbHVtbiAyIGFuZCByb3cgMikgd2lsbCBiZSBsZWZ0IGFzIGFuIGh0bWwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIGFuIGltYWdlLCB3aGljaCBpc1xuICAvLyAgICAgICB0byBiZSByZXBsYWNlZCBhbmQgZmlsbGVkIGJ5IHRoZSBvdGhlciBmdW5jdGlvbnNcbiAgLy8gICAgICAgaWU6IHRvZGF5IGZ1bmN0aW9uLCBsYXRlIGZ1bmN0aW9uLCBhbmQgdGFza0NhdGVnb3J5IGZ1bmN0aW9uXG4gIC8vIE5PVEU6IFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWdhaW4gd2hlbiBhIHRhc2tDYXRlZ29yeSBpcyBlaXRoZXIgYWRkZWQgb3IgcmVtb3ZlZCwgYmVjYXVzZSB0aGlzIG5lZWRzIHRvIGJlXG4gIC8vICAgICAgIGRpc3BsYXllZCBpbiB0aGUgc2lkZSBiYXJcblxuICAvLyBkZWNsYXJlIGVsZW1lbnRzXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcEJhckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaWRlQmFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGRhcmtMaWdodE1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCB0b3BCYXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvQ29udGFpbmVyVHh0MSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiVGhpcyBpcyBhIHRvZG8gbGlzdCBhcHBsaWNhdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gcmVjb3JkIHRhc2tzLCBrZWVwIHRyYWNrIG9mIHRoZW0sIGFuZCBjb21wbGV0ZSB0aGVtLiBDcmVhdGUgYSB0YXNrIGNhdGVnb3J5LCBmaWxsIGl0IHdpdGggdGFza3MsIGFuZCBrZWVwIHRyYWNrIG9mIHRoZW0gdGhyb3VnaCB0aGUgdGFzayBjYXRlZ29yeSB0YWIsIG9yIHRocm91Z2ggdGhlIHRvZGF5IGFuZCBsYXRlIHRhYnMuXCJcbiAgKTtcbiAgY29uc3QgbmV3TGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIGNvbnN0IG5ld0xpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICBjb25zdCBpbmZvQ29udGFpbmVyVHh0MiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiVGhpcyB3ZWJzaXRlIHdhcyBjcmVhdGVkIGJ5IERhbmllbCBCYWxsZXJpbmksIHdpdGggaGVscCBmcm9tIHRoZSBPZGluIFByb2plY3QuXCJcbiAgKTtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5TGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgdG9kYXlUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RheVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVG9kYXlcIik7XG4gIGNvbnN0IGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGxhdGVUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYXRlVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMYXRlXCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXNIZWFkZXJUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcmllc0hlYWRlclR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGFzayBDYXRlZ29yaWVzXCIpO1xuICBjb25zdCBhZGRUYXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IG5ld1Rhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCB0YXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBCdWlsdCBpbiB0YXNrIGNhdGVnb3J5IGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gIGNvbnN0IHRhc2tDYXRlZ29yeUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBUYXNrQ2F0ZWdvcnlUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkdlbmVyYWxcIik7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIGFkZCBhdHRyaWJ1dGVzXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcbiAgdG9wQmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wLWJhclwiKTtcbiAgdG9wQmFyTGVmdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcC1iYXItbGVmdFwiKTtcbiAgc2lkZUJhckljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlLWJhci1pY29uIGdyb3dcIik7XG4gIHNpZGVCYXJJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0YWxseU1hcmszKTtcbiAgc2lkZUJhckljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwic2lkZSBiYXIgaWNvblwiKTtcbiAgZGFya0xpZ2h0TW9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRhcmstbGlnaHQtbW9kZSBncm93XCIpO1xuICBkYXJrTGlnaHRNb2RlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzdW5Ib2xsb3cpO1xuICBkYXJrTGlnaHRNb2RlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImxpZ2h0IG1vZGUgZGFyayBtb2RlIGljb25cIik7XG4gIHRvcEJhclJpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wLWJhci1yaWdodFwiKTtcbiAgaW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm9cIik7XG4gIGluZm9JY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5mby1pY29uXCIpO1xuICBpbmZvSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW5mb0RhcmspO1xuICBpbmZvSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJpbmZvIGljb25cIik7XG4gIGluZm9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmZvLWNvbnRhaW5lclwiKTtcbiAgc2lkZUJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGUtYmFyXCIpO1xuICB0b2RheUxhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RheS1sYXRlXCIpO1xuICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZGF5IGdyb3ctMlwiKTtcbiAgdG9kYXlJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kYXktaWNvblwiKTtcbiAgdG9kYXlJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0b2RheVBORyk7XG4gIHRvZGF5SWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJ0b2RheSBvcHRpb24gaWNvblwiKTtcbiAgbGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhdGUgZ3Jvdy0yXCIpO1xuICBsYXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhdGUtaWNvblwiKTtcbiAgbGF0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGxhdGVQTkcpO1xuICBsYXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJsYXRlIG9wdGlvbiBpY29uXCIpO1xuICB0YXNrQ2F0ZWdvcmllcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2F0ZWdvcmllc1wiKTtcbiAgdGFza0NhdGVnb3JpZXNIZWFkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWNhdGVnb3JpZXMtaGVhZGVyXCIpO1xuICBhZGRUYXNrQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhZGQtdGFzay1jYXRlZ29yeVwiKTtcbiAgcGx1c0ljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbHVzLWljb24gZ3Jvd1wiKTtcbiAgcGx1c0ljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIHBsdXMpO1xuICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJhZGQgdGFzayBjYXRlZ29yeSBpY29uXCIpO1xuICBuZXdUYXNrQ2F0ZWdvcmllcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ldy10YXNrLWNhdGVnb3JpZXNcIik7XG5cbiAgdGFza0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1jYXRlZ29yeSBncm93LTJcIik7IC8vIEJ1aWx0IGluIHRhc2sgY2F0ZWdvcnkgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgdGFza0NhdGVnb3J5SWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2F0ZWdvcnktaWNvblwiKTtcbiAgdGFza0NhdGVnb3J5SWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY2lyY2xlRGFyayk7XG4gIHRhc2tDYXRlZ29yeUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwidGFzayBjYXRlZ29yeSBpY29uXCIpO1xuXG4gIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250ZW50XCIpO1xuXG4gIC8vIGFwcGVuZCBlbGVtZW50cyB0byBkb21cbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9wQmFyKTtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhckxlZnQpO1xuICB0b3BCYXJMZWZ0LmFwcGVuZENoaWxkKHNpZGVCYXJJY29uKTtcbiAgdG9wQmFyTGVmdC5hcHBlbmRDaGlsZChkYXJrTGlnaHRNb2RlKTtcbiAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcEJhclJpZ2h0KTtcbiAgdG9wQmFyUmlnaHQuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb0ljb24pO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXJUeHQxKTtcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMaW5lMSk7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3TGluZTIpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXJUeHQyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHRvZGF5TGF0ZSk7XG4gIHRvZGF5TGF0ZS5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5SWNvbik7XG4gIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5VHh0Q29udGFpbmVyKTtcbiAgdG9kYXlUeHRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlUeHQpO1xuICB0b2RheUxhdGUuYXBwZW5kQ2hpbGQobGF0ZSk7XG4gIGxhdGUuYXBwZW5kQ2hpbGQobGF0ZUljb24pO1xuICBsYXRlLmFwcGVuZENoaWxkKGxhdGVUeHRDb250YWluZXIpO1xuICBsYXRlVHh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhdGVUeHQpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzKTtcbiAgdGFza0NhdGVnb3JpZXMuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3JpZXNIZWFkZXIpO1xuICB0YXNrQ2F0ZWdvcmllc0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcmllc0hlYWRlclR4dENvbnRhaW5lcik7XG4gIHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0KTtcbiAgdGFza0NhdGVnb3JpZXNIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NhdGVnb3J5KTtcbiAgYWRkVGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgdGFza0NhdGVnb3JpZXMuYXBwZW5kQ2hpbGQobmV3VGFza0NhdGVnb3JpZXMpO1xuICBuZXdUYXNrQ2F0ZWdvcmllcy5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcnkpO1xuICB0YXNrQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3J5SWNvbik7XG4gIHRhc2tDYXRlZ29yeS5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIpO1xuICB0YXNrQ2F0ZWdvcnlUeHRDb250YWluZXIuYXBwZW5kQ2hpbGQoVGFza0NhdGVnb3J5VHh0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxuICAvLyBQYWdlIGV2ZW50IGxpc3RlbmVyc1xuXG4gIGNvbnN0IG1haW5Db250ZW50UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbnRhaW5lciA+ICNtYWluLWNvbnRlbnRcIlxuICApOyAvLyBUaGlzIHZhcmlhYmxlIGV4aXN0cyB0byBvdmVycmlkZSB0aGUgc3R5bGluZyBvZiB0aGUgbWFpbkNvbnRlbnRcblxuICBsZXQgcG9zaXRpb25XaWR0aExhc3QgPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoOyAvLyBUaGlzIHZhcmlhYmxlIGlzIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgd2luZG93IGluY3JlYXNpbmcgb3IgZGVjcmVhc2luZyBmb3IgdGhlIHJlc2l6ZSBldmVudCBsaXN0ZW5lclxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBsZXQgcG9zaXRpb25XaWR0aERpZmZlcmVuY2UgPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC0gcG9zaXRpb25XaWR0aExhc3Q7XG4gICAgcG9zaXRpb25XaWR0aExhc3QgPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPCA4MDAgJiZcbiAgICAgIHBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlIDwgMCAmJlxuICAgICAgc2lkZUJhci5vZmZzZXRXaWR0aCA9PT0gMjkwXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIndvcmtzIG5lZ2F0aXZlXCIpO1xuICAgICAgbWFpbkNvbnRlbnQuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMSAvIDNcIjtcbiAgICAgIHNpZGVCYXIuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgIHNpZGVCYXIuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgICAgdG9kYXlMYXRlLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgICB0YXNrQ2F0ZWdvcmllcy5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA+IDgwMCAmJiBwb3NpdGlvbldpZHRoRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid29ya3MgcG9zaXRpdmVcIik7XG4gICAgICBtYWluQ29udGVudFByaW9yaXR5LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIgLyAzXCI7XG4gICAgICBzaWRlQmFyLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgICAgc2lkZUJhci5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCI7XG4gICAgICB0b2RheUxhdGUuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgICB0YXNrQ2F0ZWdvcmllcy5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgICB9XG4gIH0pO1xuXG4gIHNpZGVCYXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHNpZGVCYXIub2Zmc2V0V2lkdGggPT09IDApIHtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoID4gODAwKSB7XG4gICAgICAgIG1haW5Db250ZW50UHJpb3JpdHkuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMiAvIDNcIjtcbiAgICAgIH1cbiAgICAgIHNpZGVCYXIuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgICBzaWRlQmFyLnN0eWxlLnBhZGRpbmcgPSBcIjIwcHhcIjtcbiAgICAgIHRvZGF5TGF0ZS5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgICAgIHRhc2tDYXRlZ29yaWVzLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgIH1cbiAgICBpZiAoc2lkZUJhci5vZmZzZXRXaWR0aCA9PT0gMjkwKSB7XG4gICAgICBtYWluQ29udGVudC5zdHlsZS5ncmlkQ29sdW1uID0gXCIxIC8gM1wiO1xuICAgICAgc2lkZUJhci5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgICAgc2lkZUJhci5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG4gICAgICB0b2RheUxhdGUuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgIHRhc2tDYXRlZ29yaWVzLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gdG9kYXkgZnVuY3Rpb24gKGZvciBsb2FkaW5nIHRoZSB0b2RheSB0YWIgd2hpY2ggY29udGFpbnMgYWxsIHRhc2tzIHRoYXQgYXJlIGR1ZSB0b2RheSlcbi8vIGRlY2xhcmUgZWxlbWVudHNcbi8vIGFkZCBhdHRyaWJ1dGVzXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tXG5cbi8vIGxhdGUgZnVuY3Rpb24gKGZvciBsb2FkaW5nIHRoZSBsYXRlIHRhYiB3aGljaCBjb250YWlucyBhbGwgdGFza3MgdGhhdCB3ZXJlIGR1ZSBiZWZvcmUgdGhlIHByZXNlbnQgZGF0ZSBhbmQgaGF2ZSBub3QgYmVlbiBjb21wbGV0ZWQgeWV0KVxuLy8gZGVjbGFyZSBlbGVtZW50c1xuLy8gYWRkIGF0dHJpYnV0ZXNcbi8vIGFwcGVuZCBlbGVtZW50cyB0byBkb21cblxuLy8gdGFza0NhdGVnb3J5IGZ1bmN0aW9uIChmb3IgbG9hZGluZyB0aGUgY29udGVudCBvZiBhIHRhc2tDYXRlZ29yeSB0aGF0IGhhcyBiZWVuIHNlbGVjdGVkKVxuLy8gZGVjbGFyZSBlbGVtZW50c1xuLy8gYWRkIGF0dHJpYnV0ZXNcbi8vIGFwcGVuZCBlbGVtZW50cyB0byBkb21cblxuZXhwb3J0IHsgZGFzaGJvYXJkIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IHsgZGFzaGJvYXJkIH0gZnJvbSBcIi4vZG9tLW1hbmlwdWxhdGlvbi5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZGFzaGJvYXJkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=