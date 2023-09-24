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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* global styles */

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #eeeeee;
    --secondary-color: #222831;
    --primary-color-shade: #f5f5f5;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;

    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: min-content 1fr min-content;
}

input[type="text"] {
    width: 100%;
    font-size: 1.6rem;
    padding: 0.2em 0.4em;
}

input[type="date"] {
    padding: 0;
    margin: 0;
    width: 100%;
}

/* header */
header {
    color: var(--primary-color);
    background-color: var(--secondary-color);
    padding: 2rem 4rem;
    grid-area: 1 / 1 / 2 / 3;

    display: flex;
    align-items: center;
    gap: 1rem;
}

header img {
    filter: invert(100%) sepia(4%) saturate(18%) hue-rotate(54deg)
        brightness(104%) contrast(104%);
    width: 4%;
    aspect-ratio: 1/1;
}

/* aside */
aside {
    padding: 2rem;
    grid-area: 2 / 1 / 3 / 2;
    background-color: var(--primary-color);
    display: grid;
    grid-template-rows: 1fr 2fr;
}

aside nav {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

button {
    padding: 0.6em 1em;
    font-size: 1.6rem;
    font-size: 1.6rem;
    border: none;

    display: flex;
    align-items: center;
    gap: 0.5em;
}

nav button:focus,
button:hover {
    filter: brightness(90%);
}

nav button:focus {
    font-weight: bold;
}

button img {
    width: 1.5em;
    aspect-ratio: 1/1;
}

.project-nav {
    display: flex;
    flex-direction: column;
}

.project-nav h2 {
    margin-bottom: 1rem;
}

.prj-btn .delete-project-btn {
    margin-left: auto;
}

/* main  */
main {
    background-color: var(--primary-color-shade);
    padding: 2rem 10rem 2rem 10rem;

    grid-area: 2 / 2 / 3 / 3;

    display: flex;
    flex-direction: column;
    gap: 3rem;
}

main h2 {
    padding-left: 2rem;
}
h2:hover {
    filter: brightness(90%);
}

main button {
    background-color: var(--primary-color-shade);
}

.todo-input-div {
    display: flex;
    flex-direction: column;
}

.todo-input-div .utility-div {
    display: flex;
    align-items: center;
}

.utility-div .save {
    margin-left: auto;
}

.todo-div {
    background-color: var(--primary-color);
    width: 100%;
    display: flex;
    align-items: center;    
}

.todo-div:hover {
    filter: brightness(90%);
}

.todo-div .todo-finished-btn:hover {
    filter: none;
}

.todo-div .todo-title {
    flex-grow: 1;
}

/* .todo-div .todo-important {
    margin: 0 1rem;
    width: 1.5em;
    aspect-ratio: 1/1;
} */

/* footer */
footer {
    background-color: var(--secondary-color);
    text-align: center;
    color: var(--primary-color);
    font-size: 1.6rem;
    padding: 0.5rem 0;
    grid-area: 3 / 1 / 4 / 3;
}

/* date picker styling */
.datepicker-div {    
    padding: 0.6em 1em;
    font-size: 1.6rem;    

    background-color: var(--primary-color-shade);
    display: flex;
    align-items: center;    
}
.datepicker-div:hover {
    filter: brightness(90%) !important;
}

.datepicker-toggle {
    display: inline-block;
    position: relative;
    width: 1.5em;
    aspect-ratio: 1/1;
}
.datepicker-toggle-button {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.datepicker-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* cursor: pointer; */
    box-sizing: border-box;
}
.datepicker-input::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    /* cursor: pointer; */
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kBAAkB;;AAElB;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,4DAA4D;IAC5D,iBAAiB;;IAEjB,aAAa;IACb,8BAA8B;IAC9B,+CAA+C;AACnD;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,WAAW;AACf;;AAEA,WAAW;AACX;IACI,2BAA2B;IAC3B,wCAAwC;IACxC,kBAAkB;IAClB,wBAAwB;;IAExB,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI;uCACmC;IACnC,SAAS;IACT,iBAAiB;AACrB;;AAEA,UAAU;AACV;IACI,aAAa;IACb,wBAAwB;IACxB,sCAAsC;IACtC,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,UAAU;AACV;IACI,4CAA4C;IAC5C,8BAA8B;;IAE9B,wBAAwB;;IAExB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,sCAAsC;IACtC,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;;;;GAIG;;AAEH,WAAW;AACX;IACI,wCAAwC;IACxC,kBAAkB;IAClB,2BAA2B;IAC3B,iBAAiB;IACjB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA,wBAAwB;AACxB;IACI,kBAAkB;IAClB,iBAAiB;;IAEjB,4CAA4C;IAC5C,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,UAAU;IACV,qBAAqB;IACrB,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB","sourcesContent":["/* global styles */\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary-color: #eeeeee;\n    --secondary-color: #222831;\n    --primary-color-shade: #f5f5f5;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-size: 1.6rem;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    min-height: 100vh;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: min-content 1fr min-content;\n}\n\ninput[type=\"text\"] {\n    width: 100%;\n    font-size: 1.6rem;\n    padding: 0.2em 0.4em;\n}\n\ninput[type=\"date\"] {\n    padding: 0;\n    margin: 0;\n    width: 100%;\n}\n\n/* header */\nheader {\n    color: var(--primary-color);\n    background-color: var(--secondary-color);\n    padding: 2rem 4rem;\n    grid-area: 1 / 1 / 2 / 3;\n\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nheader img {\n    filter: invert(100%) sepia(4%) saturate(18%) hue-rotate(54deg)\n        brightness(104%) contrast(104%);\n    width: 4%;\n    aspect-ratio: 1/1;\n}\n\n/* aside */\naside {\n    padding: 2rem;\n    grid-area: 2 / 1 / 3 / 2;\n    background-color: var(--primary-color);\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n}\n\naside nav {\n    display: flex;\n    flex-direction: column;\n    gap: 0.2rem;\n}\n\nbutton {\n    padding: 0.6em 1em;\n    font-size: 1.6rem;\n    font-size: 1.6rem;\n    border: none;\n\n    display: flex;\n    align-items: center;\n    gap: 0.5em;\n}\n\nnav button:focus,\nbutton:hover {\n    filter: brightness(90%);\n}\n\nnav button:focus {\n    font-weight: bold;\n}\n\nbutton img {\n    width: 1.5em;\n    aspect-ratio: 1/1;\n}\n\n.project-nav {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-nav h2 {\n    margin-bottom: 1rem;\n}\n\n.prj-btn .delete-project-btn {\n    margin-left: auto;\n}\n\n/* main  */\nmain {\n    background-color: var(--primary-color-shade);\n    padding: 2rem 10rem 2rem 10rem;\n\n    grid-area: 2 / 2 / 3 / 3;\n\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n}\n\nmain h2 {\n    padding-left: 2rem;\n}\nh2:hover {\n    filter: brightness(90%);\n}\n\nmain button {\n    background-color: var(--primary-color-shade);\n}\n\n.todo-input-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-input-div .utility-div {\n    display: flex;\n    align-items: center;\n}\n\n.utility-div .save {\n    margin-left: auto;\n}\n\n.todo-div {\n    background-color: var(--primary-color);\n    width: 100%;\n    display: flex;\n    align-items: center;    \n}\n\n.todo-div:hover {\n    filter: brightness(90%);\n}\n\n.todo-div .todo-finished-btn:hover {\n    filter: none;\n}\n\n.todo-div .todo-title {\n    flex-grow: 1;\n}\n\n/* .todo-div .todo-important {\n    margin: 0 1rem;\n    width: 1.5em;\n    aspect-ratio: 1/1;\n} */\n\n/* footer */\nfooter {\n    background-color: var(--secondary-color);\n    text-align: center;\n    color: var(--primary-color);\n    font-size: 1.6rem;\n    padding: 0.5rem 0;\n    grid-area: 3 / 1 / 4 / 3;\n}\n\n/* date picker styling */\n.datepicker-div {    \n    padding: 0.6em 1em;\n    font-size: 1.6rem;    \n\n    background-color: var(--primary-color-shade);\n    display: flex;\n    align-items: center;    \n}\n.datepicker-div:hover {\n    filter: brightness(90%) !important;\n}\n\n.datepicker-toggle {\n    display: inline-block;\n    position: relative;\n    width: 1.5em;\n    aspect-ratio: 1/1;\n}\n.datepicker-toggle-button {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.datepicker-input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    /* cursor: pointer; */\n    box-sizing: border-box;\n}\n.datepicker-input::-webkit-calendar-picker-indicator {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    /* cursor: pointer; */\n}\n\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/create_html_element.js":
/*!************************************!*\
  !*** ./src/create_html_element.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)
/* harmony export */ });
const createHtmlElement = (type, id, classArray, textContent) => {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (classArray) classArray.map(_class => element.classList.add(_class));
    if (textContent) element.textContent = textContent;

    return element;
};



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* binding */ Main),
/* harmony export */   clearMain: () => (/* binding */ clearMain)
/* harmony export */ });
const Main = document.querySelector("main");

const clearMain = () => {    
    while(Main.lastChild) {
        Main.removeChild(Main.lastChild);
    }
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   createProjectBtn: () => (/* binding */ createProjectBtn),
/* harmony export */   removeProject: () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _assets_format_list_bulleted_square_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/format-list-bulleted-square.svg */ "./src/assets/format-list-bulleted-square.svg");
/* harmony import */ var _assets_star_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/star-outline.svg */ "./src/assets/star-outline.svg");
/* harmony import */ var _assets_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/star.svg */ "./src/assets/star.svg");
/* harmony import */ var _assets_circle_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/circle-outline.svg */ "./src/assets/circle-outline.svg");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _create_html_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create_html_element */ "./src/create_html_element.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _render_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render_project */ "./src/render_project.js");









const Project = (id, title) => {
    const todoList = [];
    let todoId = 0;

    const createTodoBtn = (_todo) => {
        const todoDiv = document.createElement('div');
        const todoTitle = document.createElement('span');
        const todoDate = document.createElement('span');
        const todoImportantBtn = document.createElement('button');
        const todoImportant = document.createElement('img');
        const todoFinishedBtn = document.createElement('button');

        const circleIcon = document.createElement('img');
        circleIcon.src = _assets_circle_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
        todoFinishedBtn.appendChild(circleIcon);
 
        todoFinishedBtn.classList.add('todo-finished-btn');
        todoDiv.classList.add('todo-div');
        todoTitle.classList.add('todo-title');
        todoDate.classList.add('todo-date');
        todoImportant.classList.add('todo-important');

        todoTitle.textContent = _todo.title;
        todoDate.textContent = _todo.dueDate;
        todoImportant.src = _todo.important ? _assets_star_svg__WEBPACK_IMPORTED_MODULE_2__ : _assets_star_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        todoImportantBtn.appendChild(todoImportant);

        todoImportantBtn.addEventListener('click', e => {
            if (_todo.important) {
                console.log('stared');
                todoImportant.src = _assets_star_outline_svg__WEBPACK_IMPORTED_MODULE_1__;               
            } else {
                console.log('not stared');
                todoImportant.src = _assets_star_svg__WEBPACK_IMPORTED_MODULE_2__;               
            }
            _todo.toggleImportant();
        })

        todoFinishedBtn.addEventListener('click', e => {
            _main__WEBPACK_IMPORTED_MODULE_6__.Main.removeChild(todoDiv);
            removeTodo(_todo.id);
        })

        todoDiv.appendChild(todoFinishedBtn);
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDate);
        todoDiv.appendChild(todoImportantBtn);

        return todoDiv;
    }

    const todoDivs = () => {
        return todoList.map(_todo => createTodoBtn(_todo));
    }

    const addTodo = (title, duedate, imp) => {    
        const _todo = (0,_todo__WEBPACK_IMPORTED_MODULE_4__.Todo)(todoId++, title, duedate, imp);    
        todoList.push(_todo);

        return createTodoBtn(_todo);
    }

    const removeTodo = (todoId) => {
        todoList.splice(todoList.findIndex(_todo => _todo.id === todoId), 1);
    }

    const printTodo = () => console.log(todoList.map(_todo => _todo.title));

    return {id, title, addTodo, removeTodo, printTodo, todoDivs};
}
let idCounter = 1;
const projectList = [];

const addProject = (title) => {    
    const project = Project(idCounter++, title);
    projectList.push(project);    
    return project;
}

const removeProject = (id) => {
    const _project = projectList.findIndex(_prj => _prj.id === id);
    projectList.splice(_project, 1);
}

const createProjectBtn = (prj) => {
    const addBtn = document.createElement('button');    
    addBtn.classList.add('prj-btn');
    const listIcon = document.createElement('img');
    listIcon.src = _assets_format_list_bulleted_square_svg__WEBPACK_IMPORTED_MODULE_0__;
    
    const cancelDiv = (0,_create_html_element__WEBPACK_IMPORTED_MODULE_5__.createHtmlElement)('div', null, ['delete-project-btn'], 'x');

    addBtn.appendChild(listIcon);
    addBtn.appendChild(document.createTextNode(prj.title));
    addBtn.appendChild(cancelDiv);
    
    addBtn.onclick = e => {
        (0,_render_project__WEBPACK_IMPORTED_MODULE_7__.renderProject)(prj);
        if (e.target.classList.contains('delete-project-btn')) {
            removeProject(prj.id);
            addBtn.remove();         
            (0,_main__WEBPACK_IMPORTED_MODULE_6__.clearMain)();   
        }
    };

    return addBtn;
}



/***/ }),

/***/ "./src/render_project.js":
/*!*******************************!*\
  !*** ./src/render_project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProject: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _create_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_html_element */ "./src/create_html_element.js");
/* harmony import */ var _assets_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/plus-circle-outline.svg */ "./src/assets/plus-circle-outline.svg");
/* harmony import */ var _assets_text_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/text.svg */ "./src/assets/text.svg");
/* harmony import */ var _assets_clock_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/clock-outline.svg */ "./src/assets/clock-outline.svg");
/* harmony import */ var _assets_star_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/star-outline.svg */ "./src/assets/star-outline.svg");
/* harmony import */ var _assets_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/star.svg */ "./src/assets/star.svg");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo */ "./src/todo.js");








//Project page
const content = document.querySelector('main');

const render = (project) => {
    (0,_main__WEBPACK_IMPORTED_MODULE_6__.clearMain)();
    const title = (0,_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h2', null, null, `${project.title}`);
    const addTodoBtn = (0,_create_html_element__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', null, ['addBtn'], null);
    const icon = new Image();
    icon.src = _assets_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    addTodoBtn.appendChild(icon);
    addTodoBtn.appendChild(document.createTextNode('Add Task'));
    addTodoBtn.dataset.project = project.id;

    const handleAddTodo = (e) => {
        addTodoBtn.style.display = 'none';

        // todo input div
        const todoInputDiv = document.createElement('div');
        todoInputDiv.classList.add('todo-input-div');

        const todoInput = document.createElement('input');
        todoInput.type = 'text';
        todoInput.placeHolder = 'New Task';

        const utilityDiv = document.createElement('div');
        utilityDiv.classList.add('utility-div');

        
        
        const importantButton = document.createElement('button');
        importantButton.classList.add('star');
        const dateButton = document.createElement('span');
        dateButton.classList.add('datepicker-toggle-button');
        const saveButton = document.createElement('button');        
        saveButton.classList.add('save');

        const starI = document.createElement('img');
        starI.src = _assets_star_outline_svg__WEBPACK_IMPORTED_MODULE_4__;
        const starFilledI = document.createElement('img');
        starFilledI.src = _assets_star_svg__WEBPACK_IMPORTED_MODULE_5__;
        const clockI = document.createElement('img');
        clockI.src = _assets_clock_outline_svg__WEBPACK_IMPORTED_MODULE_3__;        

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('datepicker-toggle');
        const dateInput = document.createElement('input');
        dateInput.classList.add('datepicker-input')
        dateInput.type = 'date';
        dateSpan.appendChild(dateButton);
        dateSpan.appendChild(dateInput);

        
        importantButton.appendChild(starI);
        dateButton.appendChild(clockI);
        saveButton.textContent = 'Save';

        const importantButtonHandler = e => {
            if (!importantButton.classList.contains('stared')) {
                importantButton.removeChild(starI);
                importantButton.appendChild(starFilledI);
                importantButton.classList.add('stared');
            } else {
                importantButton.classList.remove('stared');
                importantButton.removeChild(starFilledI);
                importantButton.appendChild(starI);
            }
        }

        importantButton.addEventListener('click', importantButtonHandler);

        // handling of save of task input 
        const saveButtonHandler = e => {
            const taskValue = todoInput.value;
            const imp = importantButton.classList.contains('stared');
            const d = dateInput.value;
            
            const _todoDiv = project.addTodo(taskValue, d, imp);            
            content.appendChild(_todoDiv);
            content.removeChild(todoInputDiv);        
            addTodoBtn.style.display = 'flex';   
            content.appendChild(addTodoBtn); 
        };
        saveButton.addEventListener('click', saveButtonHandler);


        //creating a div to encompass the datepicker elements to make it easier for styling
        const dateSpanDiv = document.createElement('div');
        dateSpanDiv.classList.add('datepicker-div');
        dateSpanDiv.appendChild(dateSpan);

        utilityDiv.appendChild(dateSpanDiv);
        utilityDiv.appendChild(importantButton);
        utilityDiv.appendChild(saveButton);

        todoInputDiv.appendChild(todoInput);
        todoInputDiv.appendChild(utilityDiv);

        content.appendChild(todoInputDiv);
    }


    addTodoBtn.addEventListener('click', handleAddTodo);

    content.appendChild(title);
    project.todoDivs().map(_todoDiv => content.appendChild(_todoDiv));
    content.appendChild(addTodoBtn);
}



/***/ }),

/***/ "./src/screen_controller.js":
/*!**********************************!*\
  !*** ./src/screen_controller.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenController: () => (/* binding */ screenController)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _render_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_project */ "./src/render_project.js");
/* harmony import */ var _this_week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./this_week */ "./src/this_week.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today */ "./src/today.js");





const inbox = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(0, "inbox");

const screenController = () => {
    const nav = document.querySelector(".main-nav");

    nav.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("btn")) {            
            if (target.id === "inboxBtn") {                
                (0,_render_project__WEBPACK_IMPORTED_MODULE_1__.renderProject)(inbox);
            } else if (target.id === "todayBtn") {
                (0,_today__WEBPACK_IMPORTED_MODULE_3__.renderToday)();
            } else if (target.id === "thisWeekBtn") {
                (0,_this_week__WEBPACK_IMPORTED_MODULE_2__.renderThisWeek)();
            }
        }
    });

    const addProjectBtn = document.querySelector("#addProjectBtn");

    addProjectBtn.addEventListener("click", (e) => {
        addProjectBtn.style.display = "none";
        const projectNameInput = document.createElement("input");
        const projectNav = document.querySelector(".project-nav");
        projectNameInput.type = "text";
        projectNameInput.placeholder = "Project Name";

        const projectNameInputHandle = () => {
            const prj = (0,_project__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectNameInput.value);
            const projectBtn = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProjectBtn)(prj);
            projectNav.appendChild(projectBtn);
            projectNav.appendChild(addProjectBtn);
            addProjectBtn.style.display = "flex";

            projectNameInput.removeEventListener("blur", eventHandle2);
            projectNameInput.removeEventListener("keyup", eventHandle1);
            projectNameInput.remove();
        };

        const eventHandle1 = (e) => {
            if (e.key === "Enter") {
                projectNameInputHandle();
            } else if (e.key === "Escape") {
                addProjectBtn.style.display = "flex";
                projectNameInput.removeEventListener("blur", eventHandle2);
                projectNameInput.removeEventListener("keyup", eventHandle1);
                projectNameInput.remove();
            }
        };

        const eventHandle2 = (e) => {
            if (!projectNameInput.value) {
                addProjectBtn.style.display = "flex";
                projectNameInput.removeEventListener("blur", eventHandle2);
                projectNameInput.removeEventListener("keyup", eventHandle1);
                projectNameInput.remove();
            } else {
                projectNameInputHandle();
            }
        };

        projectNameInput.addEventListener("keyup", eventHandle1);
        projectNameInput.addEventListener("blur", eventHandle2);
        projectNav.appendChild(projectNameInput);
        projectNameInput.focus();
    });
};




/***/ }),

/***/ "./src/this_week.js":
/*!**************************!*\
  !*** ./src/this_week.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderThisWeek: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");


//this week page
const render = () => {
    (0,_main__WEBPACK_IMPORTED_MODULE_0__.clearMain)();
}   



/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderToday: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");


//today page
const render = () => {
    (0,_main__WEBPACK_IMPORTED_MODULE_0__.clearMain)();
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
const Todo = (i, t, dd = null, imp) => {
    const id = i;
    const title = t;
    const dueDate = dd;
    const important = imp;

    const toggleImportant = () => {
        important != important;
    }

    const pTodo = () => {
        console.log(id, title, dueDate, important);
    }

    return {id, title, dueDate, important, toggleImportant};
}



/***/ }),

/***/ "./src/assets/circle-outline.svg":
/*!***************************************!*\
  !*** ./src/assets/circle-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3b6ef0fc8b1ecd5d1a9.svg";

/***/ }),

/***/ "./src/assets/clock-outline.svg":
/*!**************************************!*\
  !*** ./src/assets/clock-outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "877425b5315293980f25.svg";

/***/ }),

/***/ "./src/assets/format-list-bulleted-square.svg":
/*!****************************************************!*\
  !*** ./src/assets/format-list-bulleted-square.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "753515eaa321610ab642.svg";

/***/ }),

/***/ "./src/assets/plus-circle-outline.svg":
/*!********************************************!*\
  !*** ./src/assets/plus-circle-outline.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b254db15a65e85097053.svg";

/***/ }),

/***/ "./src/assets/star-outline.svg":
/*!*************************************!*\
  !*** ./src/assets/star-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2e6e6dd118d33c26922.svg";

/***/ }),

/***/ "./src/assets/star.svg":
/*!*****************************!*\
  !*** ./src/assets/star.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de7ced177d66bb006694.svg";

/***/ }),

/***/ "./src/assets/text.svg":
/*!*****************************!*\
  !*** ./src/assets/text.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "279a4fea9d647fdbb199.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _screen_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen_controller.js */ "./src/screen_controller.js");







(0,_screen_controller_js__WEBPACK_IMPORTED_MODULE_3__.screenController)();

if (false) {}


})();

/******/ })()
;
//# sourceMappingURL=index.js.map