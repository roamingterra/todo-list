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
/* harmony export */   "buttonSideBar": () => (/* binding */ buttonSideBar),
/* harmony export */   "dashboard": () => (/* binding */ dashboard),
/* harmony export */   "windowResizeSideBar": () => (/* binding */ windowResizeSideBar)
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
    console.log("works negative");
    mainContent.style.gridColumn = "1 / 3";
    sideBar.style.width = "0";
    sideBar.style.padding = "0";
    todayLate.style.width = "0";
    taskCategories.style.width = "0";
  }
  if (document.body.offsetWidth > 800 && windowResizeDirection > 0) {
    console.log("works positive");
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
/* harmony export */   "getDirectionOfWindowResize": () => (/* binding */ getDirectionOfWindowResize)
/* harmony export */ });
// taskCategory factory function (creates task category objects, which will contain tasks)
// properties: title (received from user form), color (received from user form), array of tasks
// methods: getTitle, getColor, setTitle, setColor

// task factory function (creates tasks that the user creates, which will be placed in a taskCategory)
// properties: title (received from user form), description (received from user form),
//             category (received from user form), dueDate (received from user form),
//             priority (received from user form)
// methods: getTitle, getDescription, getCategory, getDueDate, getPriority
//          setTitle, setDescription, setCategory, setDueDate, setPriority

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
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Imports




(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.dashboard)();

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUQ7Ozs7Ozs7Ozs7Ozs7OztBQzdOekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRHRDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUsrQjtBQUN5QjtBQUNuQzs7QUFFckIsK0RBQVM7O0FBRVQ7QUFDQTtBQUNBLHNGQUErQzs7QUFFL0M7QUFDQSxFQUFFLGdGQUF5QztBQUMzQyxFQUFFLDRGQUFxRDtBQUN2RDtBQUNBLElBQUksNEZBQXFEO0FBQ3pELEVBQUUsc0ZBQStDOztBQUVqRCxFQUFFLHlFQUFtQjtBQUNyQixDQUFDOztBQUVEOztBQUVBO0FBQ0EsRUFBRSxtRUFBYTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tYmxhY2s7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIEhvdmVyIGFuaW1hdGlvbnMgKi9cXG4uZ3JvdyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdyb3c6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uZ3Jvdy0yIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ3Jvdy0yOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLyogRW5kIG9mIGhvdmVyIGFuaW1hdGlvbnMgKi9cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvLWJsYWNrXFxcIjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkwcHggMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBUb3AgYmFyICovXFxuI3RvcC1iYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgei1pbmRleDogMjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbn1cXG5cXG4udG9wLWJhci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaWRlLWJhci1pY29uLFxcbi5kYXJrLWxpZ2h0LW1vZGUsXFxuLmluZm8taWNvbiB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5mbyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmluZm8gLmluZm8tY29udGFpbmVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTA1cHg7XFxuICByaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5pbmZvOmhvdmVyIC5pbmZvLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiBTaWRlIGJhciAqL1xcbiNzaWRlLWJhciB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgdHJhbnNpdGlvbjogcGFkZGluZy1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZGF5LWxhdGUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50b2RheSxcXG4ubGF0ZSxcXG4udGFzay1jYXRlZ29yaWVzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZGF5LFxcbi5sYXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udG9kYXktaWNvbixcXG4ubGF0ZS1pY29uLFxcbi5wbHVzLWljb24ge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWNhdGVnb3JpZXMtaGVhZGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uLmFkZC10YXNrLWNhdGVnb3J5IHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcnktaWNvbiB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4vKiBUYXNrIGNhdGVnb3JpZXMgd2lsbCBiZSBhZGRlZCBieSB0aGUgdXNlciAqL1xcbi50YXNrLWNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLyogTWFpbiBjb250ZW50IHdpbGwgYmUgcG9wdWxhdGVkIGJ5IG90aGVyIG1vZHVsZXMgKi9cXG4jbWFpbi1jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGVlZjE7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi8qIE5vIHNpZGUgYmFyIGlmIHBhZ2UgbG9hZHMgd2hpbGUgd2luZG93IHNpemUgaXMgc21hbGwqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk5cHgpIHtcXG4gICNtYWluLWNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICB9XFxuICAjc2lkZS1iYXIge1xcbiAgICB3aWR0aDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC50b2RheS1sYXRlIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuXFxuICAudGFzay1jYXRlZ29yaWVzIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQW1DO0FBQ3JDOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBLDRCQUE0Qjs7QUFFNUI7O0VBRUUsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGFBQWE7QUFDYjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLHlDQUF5QztFQUN6Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBLDhDQUE4QztBQUM5QztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLG9EQUFvRDtBQUNwRDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFFBQVE7SUFDUixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tYmxhY2s7XFxuICBzcmM6IHVybCguL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmKTtcXG59XFxuXFxuLyogSG92ZXIgYW5pbWF0aW9ucyAqL1xcbi5ncm93IHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ3Jvdzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5ncm93LTIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ncm93LTI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4vKiBFbmQgb2YgaG92ZXIgYW5pbWF0aW9ucyAqL1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb2JvdG8tYmxhY2tcXFwiO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg0cHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOTBweCAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFRvcCBiYXIgKi9cXG4jdG9wLWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB6LWluZGV4OiAyO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxufVxcblxcbi50b3AtYmFyLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGUtYmFyLWljb24sXFxuLmRhcmstbGlnaHQtbW9kZSxcXG4uaW5mby1pY29uIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbmZvIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uaW5mbyAuaW5mby1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDVweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmluZm86aG92ZXIgLmluZm8tY29udGFpbmVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi8qIFNpZGUgYmFyICovXFxuI3NpZGUtYmFyIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogMjUwcHg7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kYXktbGF0ZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZGF5LFxcbi5sYXRlLFxcbi50YXNrLWNhdGVnb3JpZXMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kYXksXFxuLmxhdGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50b2RheS1pY29uLFxcbi5sYXRlLWljb24sXFxuLnBsdXMtaWNvbiB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stY2F0ZWdvcmllcy1oZWFkZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5idXR0b24uYWRkLXRhc2stY2F0ZWdvcnkge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jYXRlZ29yeS1pY29uIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4ubmV3LXRhc2stY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi8qIFRhc2sgY2F0ZWdvcmllcyB3aWxsIGJlIGFkZGVkIGJ5IHRoZSB1c2VyICovXFxuLnRhc2stY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNhdGVnb3J5LWljb24ge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgd2lsbCBiZSBwb3B1bGF0ZWQgYnkgb3RoZXIgbW9kdWxlcyAqL1xcbiNtYWluLWNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWVmMTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLyogTm8gc2lkZSBiYXIgaWYgcGFnZSBsb2FkcyB3aGlsZSB3aW5kb3cgc2l6ZSBpcyBzbWFsbCovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTlweCkge1xcbiAgI21haW4tY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIH1cXG4gICNzaWRlLWJhciB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLnRvZGF5LWxhdGUge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG5cXG4gIC50YXNrLWNhdGVnb3JpZXMge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCB0YWxseU1hcmszIGZyb20gXCIuL2ltYWdlcy90YWxseS1tYXJrLTMucG5nXCI7XG5pbXBvcnQgc3VuSG9sbG93IGZyb20gXCIuL2ltYWdlcy9zdW4taG9sbG93LnN2Z1wiO1xuaW1wb3J0IGluZm9EYXJrIGZyb20gXCIuL2ltYWdlcy9pbmZvLWRhcmsucG5nXCI7XG5pbXBvcnQgdG9kYXlQTkcgZnJvbSBcIi4vaW1hZ2VzL3RvZGF5LnBuZ1wiO1xuaW1wb3J0IGxhdGVQTkcgZnJvbSBcIi4vaW1hZ2VzL2xhdGUucG5nXCI7XG5pbXBvcnQgcGx1cyBmcm9tIFwiLi9pbWFnZXMvcGx1cy5wbmdcIjtcbmltcG9ydCBjaXJjbGVEYXJrIGZyb20gXCIuL2ltYWdlcy9jaXJjbGUtZGFyay5wbmdcIjtcblxuLy8gZGFzaGJvYXJkIGZ1bmN0aW9uIChmb3IgbG9hZGluZyB0aGUgc2lkZSBhbmQgdG9wIGJhcnMpXG5mdW5jdGlvbiBkYXNoYm9hcmQoKSB7XG4gIC8vIE5PVEU6IEEgZ3JpZCBzeXN0ZW0gaXMgdG8gYmUgY3JlYXRlZCB3aXRoIHRoaXMgZnVuY3Rpb24uIFRoZSBzaWRlIGFuZCB0b3AgYmFycyB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGVsZW1lbnRzLFxuICAvLyAgICAgICBhbmQgdGhlIG1haW4gc2VjdGlvbiAoY29sdW1uIDIgYW5kIHJvdyAyKSB3aWxsIGJlIGxlZnQgYXMgYW4gaHRtbCBlbGVtZW50IHRoYXQgY29udGFpbnMgYW4gaW1hZ2UsIHdoaWNoIGlzXG4gIC8vICAgICAgIHRvIGJlIHJlcGxhY2VkIGFuZCBmaWxsZWQgYnkgdGhlIG90aGVyIGZ1bmN0aW9uc1xuICAvLyAgICAgICBpZTogdG9kYXkgZnVuY3Rpb24sIGxhdGUgZnVuY3Rpb24sIGFuZCB0YXNrQ2F0ZWdvcnkgZnVuY3Rpb25cbiAgLy8gTk9URTogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIGEgdGFza0NhdGVnb3J5IGlzIGVpdGhlciBhZGRlZCBvciByZW1vdmVkLCBiZWNhdXNlIHRoaXMgbmVlZHMgdG8gYmVcbiAgLy8gICAgICAgZGlzcGxheWVkIGluIHRoZSBzaWRlIGJhclxuXG4gIC8vIGRlY2xhcmUgZWxlbWVudHNcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbiAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9wQmFyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNpZGVCYXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgZGFya0xpZ2h0TW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IHRvcEJhclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm9Db250YWluZXJUeHQxID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgXCJUaGlzIGlzIGEgdG9kbyBsaXN0IGFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHlvdSB0byByZWNvcmQgdGFza3MsIGtlZXAgdHJhY2sgb2YgdGhlbSwgYW5kIGNvbXBsZXRlIHRoZW0uIENyZWF0ZSBhIHRhc2sgY2F0ZWdvcnksIGZpbGwgaXQgd2l0aCB0YXNrcywgYW5kIGtlZXAgdHJhY2sgb2YgdGhlbSB0aHJvdWdoIHRoZSB0YXNrIGNhdGVnb3J5IHRhYiwgb3IgdGhyb3VnaCB0aGUgdG9kYXkgYW5kIGxhdGUgdGFicy5cIlxuICApO1xuICBjb25zdCBuZXdMaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgY29uc3QgbmV3TGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIGNvbnN0IGluZm9Db250YWluZXJUeHQyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgXCJUaGlzIHdlYnNpdGUgd2FzIGNyZWF0ZWQgYnkgRGFuaWVsIEJhbGxlcmluaSwgd2l0aCBoZWxwIGZyb20gdGhlIE9kaW4gUHJvamVjdC5cIlxuICApO1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXlMYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCB0b2RheVR4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5VHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUb2RheVwiKTtcbiAgY29uc3QgbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbGF0ZVR4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhdGVUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkxhdGVcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NhdGVnb3JpZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ2F0ZWdvcmllc0hlYWRlclR4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUYXNrIENhdGVnb3JpZXNcIik7XG4gIGNvbnN0IGFkZFRhc2tDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbmV3VGFza0NhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHRhc2tDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIEJ1aWx0IGluIHRhc2sgY2F0ZWdvcnkgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgY29uc3QgdGFza0NhdGVnb3J5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yeVR4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IFRhc2tDYXRlZ29yeVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR2VuZXJhbFwiKTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gYWRkIGF0dHJpYnV0ZXNcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xuICB0b3BCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b3AtYmFyXCIpO1xuICB0b3BCYXJMZWZ0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9wLWJhci1sZWZ0XCIpO1xuICBzaWRlQmFySWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGUtYmFyLWljb24gZ3Jvd1wiKTtcbiAgc2lkZUJhckljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIHRhbGx5TWFyazMpO1xuICBzaWRlQmFySWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJzaWRlIGJhciBpY29uXCIpO1xuICBkYXJrTGlnaHRNb2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGFyay1saWdodC1tb2RlIGdyb3dcIik7XG4gIGRhcmtMaWdodE1vZGUuc2V0QXR0cmlidXRlKFwic3JjXCIsIHN1bkhvbGxvdyk7XG4gIGRhcmtMaWdodE1vZGUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwibGlnaHQgbW9kZSBkYXJrIG1vZGUgaWNvblwiKTtcbiAgdG9wQmFyUmlnaHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b3AtYmFyLXJpZ2h0XCIpO1xuICBpbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5mb1wiKTtcbiAgaW5mb0ljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmZvLWljb25cIik7XG4gIGluZm9JY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbmZvRGFyayk7XG4gIGluZm9JY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImluZm8gaWNvblwiKTtcbiAgaW5mb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm8tY29udGFpbmVyXCIpO1xuICBzaWRlQmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZS1iYXJcIik7XG4gIHRvZGF5TGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZGF5LWxhdGVcIik7XG4gIHRvZGF5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kYXkgZ3Jvdy0yXCIpO1xuICB0b2RheUljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RheS1pY29uXCIpO1xuICB0b2RheUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIHRvZGF5UE5HKTtcbiAgdG9kYXlJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInRvZGF5IG9wdGlvbiBpY29uXCIpO1xuICBsYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGF0ZSBncm93LTJcIik7XG4gIGxhdGVJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGF0ZS1pY29uXCIpO1xuICBsYXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbGF0ZVBORyk7XG4gIGxhdGVJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImxhdGUgb3B0aW9uIGljb25cIik7XG4gIHRhc2tDYXRlZ29yaWVzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1jYXRlZ29yaWVzXCIpO1xuICB0YXNrQ2F0ZWdvcmllc0hlYWRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY2F0ZWdvcmllcy1oZWFkZXJcIik7XG4gIGFkZFRhc2tDYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZC10YXNrLWNhdGVnb3J5XCIpO1xuICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBsdXMtaWNvbiBncm93XCIpO1xuICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGx1cyk7XG4gIHBsdXNJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImFkZCB0YXNrIGNhdGVnb3J5IGljb25cIik7XG4gIG5ld1Rhc2tDYXRlZ29yaWVzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3LXRhc2stY2F0ZWdvcmllc1wiKTtcblxuICB0YXNrQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWNhdGVnb3J5IGdyb3ctMlwiKTsgLy8gQnVpbHQgaW4gdGFzayBjYXRlZ29yeSBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICB0YXNrQ2F0ZWdvcnlJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1jYXRlZ29yeS1pY29uXCIpO1xuICB0YXNrQ2F0ZWdvcnlJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjaXJjbGVEYXJrKTtcbiAgdGFza0NhdGVnb3J5SWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJ0YXNrIGNhdGVnb3J5IGljb25cIik7XG5cbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGRvbVxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BCYXIpO1xuICB0b3BCYXIuYXBwZW5kQ2hpbGQodG9wQmFyTGVmdCk7XG4gIHRvcEJhckxlZnQuYXBwZW5kQ2hpbGQoc2lkZUJhckljb24pO1xuICB0b3BCYXJMZWZ0LmFwcGVuZENoaWxkKGRhcmtMaWdodE1vZGUpO1xuICB0b3BCYXIuYXBwZW5kQ2hpbGQodG9wQmFyUmlnaHQpO1xuICB0b3BCYXJSaWdodC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvSWNvbik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lclR4dDEpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0xpbmUxKTtcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMaW5lMik7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lclR4dDIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQodG9kYXlMYXRlKTtcbiAgdG9kYXlMYXRlLmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlJY29uKTtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlUeHRDb250YWluZXIpO1xuICB0b2RheVR4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheVR4dCk7XG4gIHRvZGF5TGF0ZS5hcHBlbmRDaGlsZChsYXRlKTtcbiAgbGF0ZS5hcHBlbmRDaGlsZChsYXRlSWNvbik7XG4gIGxhdGUuYXBwZW5kQ2hpbGQobGF0ZVR4dENvbnRhaW5lcik7XG4gIGxhdGVUeHRDb250YWluZXIuYXBwZW5kQ2hpbGQobGF0ZVR4dCk7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3JpZXMpO1xuICB0YXNrQ2F0ZWdvcmllcy5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcmllc0hlYWRlcik7XG4gIHRhc2tDYXRlZ29yaWVzSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yaWVzSGVhZGVyVHh0Q29udGFpbmVyKTtcbiAgdGFza0NhdGVnb3JpZXNIZWFkZXJUeHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3JpZXNIZWFkZXJUeHQpO1xuICB0YXNrQ2F0ZWdvcmllc0hlYWRlci5hcHBlbmRDaGlsZChhZGRUYXNrQ2F0ZWdvcnkpO1xuICBhZGRUYXNrQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuICB0YXNrQ2F0ZWdvcmllcy5hcHBlbmRDaGlsZChuZXdUYXNrQ2F0ZWdvcmllcyk7XG4gIG5ld1Rhc2tDYXRlZ29yaWVzLmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeSk7XG4gIHRhc2tDYXRlZ29yeS5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcnlJY29uKTtcbiAgdGFza0NhdGVnb3J5LmFwcGVuZENoaWxkKHRhc2tDYXRlZ29yeVR4dENvbnRhaW5lcik7XG4gIHRhc2tDYXRlZ29yeVR4dENvbnRhaW5lci5hcHBlbmRDaGlsZChUYXNrQ2F0ZWdvcnlUeHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbnRhaW5lciA+ICNtYWluLWNvbnRlbnRcIlxuICApOyAvLyBUaGlzIHZhcmlhYmxlIGV4aXN0cyB0byBvdmVycmlkZSB0aGUgc3R5bGluZyBvZiB0aGUgbWFpbkNvbnRlbnRcbn1cblxuLy8gV2luZG93IHJlc2l6ZSBzaWRlYmFyIGZ1bmN0aW9uIHRoYXQgcmV0cmFjdHMgYW5kIGV4cGFuZHMgdGhlIHNpZGUgYmFyIGRlcGVuZGluZyBvbiB3aW5kb3cgc2l6ZVxuZnVuY3Rpb24gd2luZG93UmVzaXplU2lkZUJhcih3aW5kb3dSZXNpemVEaXJlY3Rpb24pIHtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZS1iYXJcIik7XG4gIGNvbnN0IG1haW5Db250ZW50UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbnRhaW5lciA+ICNtYWluLWNvbnRlbnRcIlxuICApO1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuICBjb25zdCB0b2RheUxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWxhdGVcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNhdGVnb3JpZXNcIik7XG5cbiAgaWYgKFxuICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPCA4MDAgJiZcbiAgICB3aW5kb3dSZXNpemVEaXJlY3Rpb24gPCAwICYmXG4gICAgc2lkZUJhci5vZmZzZXRXaWR0aCA9PT0gMjkwXG4gICkge1xuICAgIGNvbnNvbGUubG9nKFwid29ya3MgbmVnYXRpdmVcIik7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMSAvIDNcIjtcbiAgICBzaWRlQmFyLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgc2lkZUJhci5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG4gICAgdG9kYXlMYXRlLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgdGFza0NhdGVnb3JpZXMuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgfVxuICBpZiAoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA+IDgwMCAmJiB3aW5kb3dSZXNpemVEaXJlY3Rpb24gPiAwKSB7XG4gICAgY29uc29sZS5sb2coXCJ3b3JrcyBwb3NpdGl2ZVwiKTtcbiAgICBtYWluQ29udGVudFByaW9yaXR5LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIgLyAzXCI7XG4gICAgc2lkZUJhci5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgICBzaWRlQmFyLnN0eWxlLnBhZGRpbmcgPSBcIjIwcHhcIjtcbiAgICB0b2RheUxhdGUuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgdGFza0NhdGVnb3JpZXMuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gIH1cbn1cblxuLy8gQnV0dG9uIHNpZGViYXIgZnVuY3Rpb24gdGhhdCByZXRyYWN0cyBhbmQgZXhwYW5kcyB0aGUgc2lkZSBiYXIgd2hlbiB0aGUgYnV0dG9uIGlzIHByZXNzZWRcbmZ1bmN0aW9uIGJ1dHRvblNpZGVCYXIoZXZlbnQpIHtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZS1iYXJcIik7XG4gIGNvbnN0IG1haW5Db250ZW50UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbnRhaW5lciA+ICNtYWluLWNvbnRlbnRcIlxuICApO1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuICBjb25zdCB0b2RheUxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWxhdGVcIik7XG4gIGNvbnN0IHRhc2tDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNhdGVnb3JpZXNcIik7XG5cbiAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLnNpZGUtYmFyLWljb25cIikpIHtcbiAgICBpZiAoc2lkZUJhci5vZmZzZXRXaWR0aCA9PT0gMCkge1xuICAgICAgaWYgKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPiA4MDApIHtcbiAgICAgICAgbWFpbkNvbnRlbnRQcmlvcml0eS5zdHlsZS5ncmlkQ29sdW1uID0gXCIyIC8gM1wiO1xuICAgICAgfVxuICAgICAgc2lkZUJhci5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbiAgICAgIHNpZGVCYXIuc3R5bGUucGFkZGluZyA9IFwiMjBweFwiO1xuICAgICAgdG9kYXlMYXRlLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgICAgdGFza0NhdGVnb3JpZXMuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgfVxuICAgIGlmIChzaWRlQmFyLm9mZnNldFdpZHRoID09PSAyOTApIHtcbiAgICAgIG1haW5Db250ZW50LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEgLyAzXCI7XG4gICAgICBzaWRlQmFyLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgICBzaWRlQmFyLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcbiAgICAgIHRvZGF5TGF0ZS5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgICAgdGFza0NhdGVnb3JpZXMuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICB9XG4gIH1cbn1cbi8vIHRvZGF5IGZ1bmN0aW9uIChmb3IgbG9hZGluZyB0aGUgdG9kYXkgdGFiIHdoaWNoIGNvbnRhaW5zIGFsbCB0YXNrcyB0aGF0IGFyZSBkdWUgdG9kYXkpXG4vLyBkZWNsYXJlIGVsZW1lbnRzXG4vLyBhZGQgYXR0cmlidXRlc1xuLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGRvbVxuXG4vLyBsYXRlIGZ1bmN0aW9uIChmb3IgbG9hZGluZyB0aGUgbGF0ZSB0YWIgd2hpY2ggY29udGFpbnMgYWxsIHRhc2tzIHRoYXQgd2VyZSBkdWUgYmVmb3JlIHRoZSBwcmVzZW50IGRhdGUgYW5kIGhhdmUgbm90IGJlZW4gY29tcGxldGVkIHlldClcbi8vIGRlY2xhcmUgZWxlbWVudHNcbi8vIGFkZCBhdHRyaWJ1dGVzXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tXG5cbi8vIHRhc2tDYXRlZ29yeSBmdW5jdGlvbiAoZm9yIGxvYWRpbmcgdGhlIGNvbnRlbnQgb2YgYSB0YXNrQ2F0ZWdvcnkgdGhhdCBoYXMgYmVlbiBzZWxlY3RlZClcbi8vIGRlY2xhcmUgZWxlbWVudHNcbi8vIGFkZCBhdHRyaWJ1dGVzXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gZG9tXG5cbmV4cG9ydCB7IGRhc2hib2FyZCwgd2luZG93UmVzaXplU2lkZUJhciwgYnV0dG9uU2lkZUJhciB9O1xuIiwiLy8gdGFza0NhdGVnb3J5IGZhY3RvcnkgZnVuY3Rpb24gKGNyZWF0ZXMgdGFzayBjYXRlZ29yeSBvYmplY3RzLCB3aGljaCB3aWxsIGNvbnRhaW4gdGFza3MpXG4vLyBwcm9wZXJ0aWVzOiB0aXRsZSAocmVjZWl2ZWQgZnJvbSB1c2VyIGZvcm0pLCBjb2xvciAocmVjZWl2ZWQgZnJvbSB1c2VyIGZvcm0pLCBhcnJheSBvZiB0YXNrc1xuLy8gbWV0aG9kczogZ2V0VGl0bGUsIGdldENvbG9yLCBzZXRUaXRsZSwgc2V0Q29sb3JcblxuLy8gdGFzayBmYWN0b3J5IGZ1bmN0aW9uIChjcmVhdGVzIHRhc2tzIHRoYXQgdGhlIHVzZXIgY3JlYXRlcywgd2hpY2ggd2lsbCBiZSBwbGFjZWQgaW4gYSB0YXNrQ2F0ZWdvcnkpXG4vLyBwcm9wZXJ0aWVzOiB0aXRsZSAocmVjZWl2ZWQgZnJvbSB1c2VyIGZvcm0pLCBkZXNjcmlwdGlvbiAocmVjZWl2ZWQgZnJvbSB1c2VyIGZvcm0pLFxuLy8gICAgICAgICAgICAgY2F0ZWdvcnkgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKSwgZHVlRGF0ZSAocmVjZWl2ZWQgZnJvbSB1c2VyIGZvcm0pLFxuLy8gICAgICAgICAgICAgcHJpb3JpdHkgKHJlY2VpdmVkIGZyb20gdXNlciBmb3JtKVxuLy8gbWV0aG9kczogZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRDYXRlZ29yeSwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHlcbi8vICAgICAgICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0Q2F0ZWdvcnksIHNldER1ZURhdGUsIHNldFByaW9yaXR5XG5cbi8vIHRvZGF5IGFycmF5IChjb250YWlucyBhbGwgdGFzayBvYmplY3RzIHRoYXQgaGF2ZSBkdWVEYXRlIG9mIHRvZGF5cyBkYXRlKVxuXG4vLyBsYXRlIGFycmF5IChjb250YWlucyBhbGwgdGFzayBvYmplY3RzIHRoYXQgaGF2ZSBhIGR1ZURhdGUgZWFybGllciB0aGF0IHRvZGF5cyBkYXRlKVxuXG4vLyBzZXRDb21wbGV0ZSBmdW5jdGlvbiAoc2V0cyB0YXNrIGFzIGNvbXBsZXRlIGFuZCBkZWxldGVzIGl0IGZyb20gYWxsIGFycmF5cyB0aGF0IGNvbnRhaW4gaXQpXG4vLyBUaGlzIGZ1bmN0aW9uIHBlcmZvcm1zIGFuIGFuaW1hdGlvbiBiZWZvcmUgZGVsZXRpbmcgaXQgdW5saWtlIHRoZSBuZXh0IGZ1bmN0aW9uLi4uXG5cbi8vIGRlbGV0ZVRhc2sgZnVuY3Rpb24gKGRlbGV0ZXMgdGFzayBmcm9tIGFsbCBhcnJheXMgdGhhdCBjb250YWlucyBpdClcblxuLy8gYWRkVGFzayBmdW5jdGlvbiAocmVjZWl2ZXMgZGF0YSBmcm9tIHRoZSB1c2VyIGZvcm0gYW5kIGNhbGxzIHRoZSB0YXNrIGZhY3RvcnkgZnVuY3Rpb24sIGZlZWRpbmcgaXQgdGhlIHVzZXIgcGFyYW1ldGVycylcbi8vICoqKlRoaXMgbWF5IG5vdCBiZSBuZWVkZWQqKipcblxuLy8gb3JnYW5pemVUYXNrIGZ1bmN0aW9uIChzZW5kcyB0YXNrIG9iamVjdCB0byBhcHByb3ByaWF0ZSBhcnJheXMpXG4vLyBOT1RFOiBTb21ldGhpbmcgdG8gY29uc2lkZXIgaXMgdGhhdCB3aGVuIGEgbmV3IGRheSBjb21lcyBhbG9uZywgY2VydGFpbiB0YXNrIG9iamVjdHMgd2lsbCBuZWVkIHRvIGJlIGF1dG9tYXRpY2FsbHlcbi8vICAgICAgIHBsYWNlZCBpbnRvIGVpdGhlciB0aGUgdG9kYXkgYXJyYXksIG9yIHRoZSBsYXRlIGFycmF5LlxuXG4vLyBlZGl0VGFzayBmdW5jdGlvbiAocmVjZWl2ZXMgZGF0YSBmcm9tIHVzZXIgZm9ybSwgdGhlbiBjYWxscyB0YXNrIHNldCBtZXRob2RzIHRvIGNoYW5nZSB0aGUgYXBwcm9wcmlhdGUgcHJvcGVydGllcylcblxuLy8gY2hhbmdlVGhlbWUgZnVuY3Rpb24gKGNoYW5nZXMgVUkgdG8gZGFyayBtb2RlIG9yIGxpZ2h0IG1vZGUgKVxuXG4vLyBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZSBtb2R1bGUgKHNjb3BlIG9mIHRoaXMgbW9kdWxlIGlzIHRvIGRldGVybWluZSB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBvZiB3aW5kb3cgZnJvbSB3aGVuIHRoZSB1c2VyIGJlZ2lucyBjaGFuZ2luZyBpdHMgc2l6ZSwgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXQgaXMgc2hyaW5raW5nIG9yIGdyb3dpbmcpXG5jb25zdCBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZSA9ICgoKSA9PiB7XG4gIGxldCBwb3NpdGlvbldpZHRoTGFzdDtcbiAgbGV0IG5ld1Bvc2l0aW9uO1xuICBsZXQgcG9zaXRpb25XaWR0aERpZmZlcmVuY2U7XG5cbiAgY29uc3Qgc2V0UG9zaXRpb25XaWR0aExhc3QgPSAoc2NyZWVuV2lkdGgpID0+XG4gICAgKHBvc2l0aW9uV2lkdGhMYXN0ID0gc2NyZWVuV2lkdGgpO1xuICBjb25zdCBzZXROZXdQb3NpdGlvbiA9IChzY3JlZW5XaWR0aCkgPT4gKG5ld1Bvc2l0aW9uID0gc2NyZWVuV2lkdGgpO1xuICBjb25zdCBzZXRQb3NpdGlvbldpZHRoRGlmZmVyZW5jZSA9ICgpID0+XG4gICAgKHBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlID0gbmV3UG9zaXRpb24gLSBwb3NpdGlvbldpZHRoTGFzdCk7XG4gIGNvbnN0IGdldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlID0gKCkgPT4gcG9zaXRpb25XaWR0aERpZmZlcmVuY2U7XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRQb3NpdGlvbldpZHRoTGFzdCxcbiAgICBzZXROZXdQb3NpdGlvbixcbiAgICBzZXRQb3NpdGlvbldpZHRoRGlmZmVyZW5jZSxcbiAgICBnZXRQb3NpdGlvbldpZHRoRGlmZmVyZW5jZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IHtcbiAgZGFzaGJvYXJkLFxuICB3aW5kb3dSZXNpemVTaWRlQmFyLFxuICBidXR0b25TaWRlQmFyLFxufSBmcm9tIFwiLi9kb20tbWFuaXB1bGF0aW9uLmpzXCI7XG5pbXBvcnQgeyBnZXREaXJlY3Rpb25PZldpbmRvd1Jlc2l6ZSB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5kYXNoYm9hcmQoKTtcblxuLy8gRXZlbnQgbGlzdGVuZXJzIHRvIGNvbnRyb2wgdGhlIGZsb3cgb2YgdGhlIHJldHJhY3RpbmcgYW5kIGV4cGFuZGluZyBkYXNoYm9hcmQgc2lkZWJhclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUuc2V0UG9zaXRpb25XaWR0aExhc3QoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgZ2V0RGlyZWN0aW9uT2ZXaW5kb3dSZXNpemUuc2V0TmV3UG9zaXRpb24oZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCk7XG4gIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplLnNldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlKCk7XG4gIGxldCB3aW5kb3dSZXNpemVEaXJlY3Rpb24gPVxuICAgIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplLmdldFBvc2l0aW9uV2lkdGhEaWZmZXJlbmNlKCk7XG4gIGdldERpcmVjdGlvbk9mV2luZG93UmVzaXplLnNldFBvc2l0aW9uV2lkdGhMYXN0KGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgpO1xuXG4gIHdpbmRvd1Jlc2l6ZVNpZGVCYXIod2luZG93UmVzaXplRGlyZWN0aW9uKTtcbn0pO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcblxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgYnV0dG9uU2lkZUJhcihldmVudCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==