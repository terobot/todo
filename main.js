/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    display: grid;\\n    grid-template-columns: repeat(6, 16%);\\n    grid-template-rows: 10% 89%;\\n    background-color: #1F1B24;\\n    color: #ffffff;\\n    height: 96vh;\\n    gap: 1% 0.8%;\\n    margin: 2vh;\\n    padding: 0;\\n    justify-content: stretch;\\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\\n}\\n\\n.header {\\n    grid-column: 1 / 7;\\n    grid-row: 1;\\n    display: flex;\\n    justify-content: flex-start;\\n    align-items: center;\\n    column-gap: 0.5em;\\n    padding: 0.5em;\\n}\\n\\n.logo {\\n    height: 8vh;\\n}\\n\\n.title#title {\\n    opacity: 1;\\n    font-size: 6vh;\\n}\\n\\n.title#productList {\\n    font-size: 1.5em;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    white-space: nowrap;\\n}\\n\\n.sidePanel {\\n    grid-column: 1 / 2;\\n    grid-row: 2;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: #3c3446;\\n    border-radius: 10px;\\n    padding: 0.5em;\\n    z-index: 11;\\n}\\n\\n.list#productList {\\n    max-height: 50vh;\\n    overflow: auto;\\n    scrollbar-width: thin;\\n}\\n\\n.list#productList::-webkit-scrollbar {\\n    display: block;\\n    width: 4px;\\n    background: #2b2531;\\n}\\n\\n.list#productList::-webkit-scrollbar-thumb {\\n    background: #757575;\\n    border-radius: 1px;\\n    opacity: .8;\\n}\\n\\n.productItem {\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    white-space: nowrap;\\n}\\n\\n.button#addProduct {\\n    width: 2em;\\n}\\n\\nform#newProduct {\\n    overflow: visible;\\n    white-space: nowrap;\\n}\\n\\n.mainPanel {\\n    grid-column: 2 / 7;\\n    grid-row: 2;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: #3c3446;\\n    border-radius: 10px;\\n    overflow: auto;\\n    border: 0.5em solid #3c3446;\\n    scrollbar-width: thin;\\n}\\n\\n.mainPanel::-webkit-scrollbar {\\n    display: block;\\n    width: 4px;\\n    height: 4px;\\n    background:#2b2531;\\n    border-radius: 1px;\\n}\\n\\n.mainPanel::-webkit-scrollbar-thumb {\\n    background: #757575;\\n    border-radius: 1px;\\n    opacity: .8;\\n}\\n\\n.mainPanel::-webkit-scrollbar-corner {\\n    background:#2b2531;\\n}\\n\\n.componentsView {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.componentItem {\\n    display: flex;\\n    flex-direction: row;\\n}\\n\\n.button#addComponent, form#newComponent {\\n    position: sticky;\\n    left: 0;\\n    bottom: 0;\\n    z-index: 10;\\n}\\n\\n.button#addComponent {\\n    width: 2em;\\n}\\n\\n#titleAndButton {\\n    position: sticky;\\n    left: 0;\\n    width: 10em;\\n    display: flex;\\n    align-items: center;\\n    z-index: 9;\\n}\\n\\n.componentTitle {\\n    width: 8em;\\n    height: 8em;\\n    border: 2px solid #3c3446;\\n    display: flex;\\n    align-items: center;\\n    background-color: #3c3446;\\n    opacity: 0.95;\\n}\\n\\n.componentTitle p {\\n    width: 8em;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    white-space: nowrap;\\n}\\n\\n.containerCard {\\n    display: flex;\\n    flex-direction: column;\\n    min-width: 6em;\\n    width: 6em;\\n    height: 8em;\\n    background-color: #1F1B24;\\n    border-radius: 0.5em;\\n    border: 2px solid #3c3446;\\n    cursor: pointer;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.containerCard div {\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    white-space: nowrap;\\n    width: inherit;\\n    text-align: center;\\n}\\n\\n.button#addContainer, form#newContainer {\\n    z-index: 8;\\n    overflow: visible;\\n    white-space: nowrap;\\n}\\n\\n.button#addContainer {\\n    width: 2em;\\n}\\n\\n.containerView {\\n    display: flex;\\n    position: sticky;\\n    left: 0;\\n    top: 0;\\n    z-index: 11;\\n    width: 99%;\\n    min-height: 60%;\\n    max-height: 60%;\\n    border-radius: 0.5em;\\n    border: 2px solid #3c3446;\\n    background-color: #000000;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_sidePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidePanel */ \"./src/components/sidePanel.js\");\n/* harmony import */ var _components_mainPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mainPanel */ \"./src/components/mainPanel.js\");\n\n\n\n\n\nconst App = () => {\n    document.body.append((0,_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_components_sidePanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (0,_components_mainPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://todo/./src/app.js?");

/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Button = (value, id, type, display) => {\n    const button = document.createElement('button')\n    button.classList.add('button')\n    button.style.display = display\n    button.setAttribute('type', type)\n    button.setAttribute('id', id)\n    button.setAttribute('title', id)\n    button.setAttribute('value', value)\n    button.innerHTML = value\n\n    return button\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://todo/./src/components/button.js?");

/***/ }),

/***/ "./src/components/componentItem.js":
/*!*****************************************!*\
  !*** ./src/components/componentItem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _componentTitleItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentTitleItem */ \"./src/components/componentTitleItem.js\");\n/* harmony import */ var _containerCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containerCard */ \"./src/components/containerCard.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ \"./src/components/form.js\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n\n\n\n\n\n\nconst ComponentItem = (component) => {\n    const componentEl = document.createElement('div')\n    const containers = component.containers\n    const addContainerButton = (0,_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('+', 'addContainer', 'button', 'initial')\n    const newContainerForm = (0,_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('newContainer', 'none', 'Container name')\n    const submitContainerButton = (0,_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Submit', 'submitContainer', 'submit', 'initial')\n    const cancelContainerButton = (0,_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Cancel', 'cancelContainer', 'button', 'initial')\n    const titleAndButtonEl = document.createElement('div')\n    componentEl.classList.add('componentItem')\n    componentEl.setAttribute('id', component.title)\n    titleAndButtonEl.setAttribute('id', 'titleAndButton')\n    titleAndButtonEl.append((0,_componentTitleItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(component.title))\n    cancelContainerButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].cancelFormInPlace(addContainerButton, newContainerForm))\n    newContainerForm.append(submitContainerButton, cancelContainerButton)\n    newContainerForm.addEventListener('submit', (e) => _utils_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].submitNewContainerForm(e, component.id, componentEl))\n    addContainerButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].openFormInPlace(addContainerButton, newContainerForm))\n    titleAndButtonEl.append(addContainerButton, newContainerForm)\n    componentEl.append(titleAndButtonEl)\n    if (containers) {\n        containers.map(container => {\n            componentEl.append((0,_containerCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(container))\n        })\n    }\n\n    return componentEl\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentItem);\n\n//# sourceURL=webpack://todo/./src/components/componentItem.js?");

/***/ }),

/***/ "./src/components/componentTitleItem.js":
/*!**********************************************!*\
  !*** ./src/components/componentTitleItem.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ComponentTitleItem = (item) => {\n    const itemEl = document.createElement('div')\n    itemEl.innerHTML = `<p>${item}</p>`\n    itemEl.classList.add('componentTitle')\n    itemEl.setAttribute('id', item)\n    itemEl.setAttribute('title', item)\n    itemEl.addEventListener('dblclick', () => {\n        const currentValue = itemEl.innerHTML\n        itemEl.contentEditable = 'true'\n        itemEl.focus()\n        itemEl.addEventListener('blur', () => {\n            itemEl.contentEditable = 'false'\n            if (itemEl.innerHTML !== currentValue) {\n                console.log('todo: updateComponentTitle')\n            }\n        })\n    })\n\n    return itemEl\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentTitleItem);\n\n//# sourceURL=webpack://todo/./src/components/componentTitleItem.js?");

/***/ }),

/***/ "./src/components/componentsView.js":
/*!******************************************!*\
  !*** ./src/components/componentsView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/components/form.js\");\n/* harmony import */ var _componentItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentItem */ \"./src/components/componentItem.js\");\n/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/services */ \"./src/utils/services.js\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n\n\n\n\n\n\nconst ComponentsView = (productId) => {\n    const componentsView = document.createElement('div')\n    const product = _utils_services__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getProductById(productId)\n    const components = product.components\n    const addComponentButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('+', 'addComponent', 'button', 'initial')\n    const newComponentForm = (0,_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('newComponent', 'none', 'Component name')\n    const submitComponentButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Submit', 'submitComponent', 'submit', 'initial')\n    const cancelComponentButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Cancel', 'cancelComponent', 'button', 'initial')\n    componentsView.classList.add('componentsView')\n    componentsView.setAttribute('id', 'componentsView')\n    components.map(x => {\n        const el = (0,_componentItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x)\n        componentsView.append(el)\n    })\n    cancelComponentButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].cancelFormInPlace(addComponentButton, newComponentForm))\n    newComponentForm.append(submitComponentButton, cancelComponentButton)\n    newComponentForm.addEventListener('submit', (e) => _utils_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].submitNewComponentForm(e, productId))\n    addComponentButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].openFormInPlace(addComponentButton, newComponentForm))\n    componentsView.append(addComponentButton, newComponentForm)\n    \n    return componentsView\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsView);\n\n//# sourceURL=webpack://todo/./src/components/componentsView.js?");

/***/ }),

/***/ "./src/components/containerCard.js":
/*!*****************************************!*\
  !*** ./src/components/containerCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n/* harmony import */ var _assets_image_add_line_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/image-add-line.png */ \"./src/assets/image-add-line.png\");\n\n\n\nconst ContainerCard = (container) => {\n    const card = document.createElement('div')\n    const title = document.createElement('div')\n    const heroImage = document.createElement('img')\n    card.classList.add('containerCard')\n    card.setAttribute('id', container.title)\n    card.setAttribute('title', container.title)\n    title.innerHTML = `${container.title}`\n    heroImage.setAttribute('src', container.hero || _assets_image_add_line_png__WEBPACK_IMPORTED_MODULE_1__)\n    heroImage.setAttribute('alt', 'heroImage' + container.title)\n    heroImage.setAttribute('id', 'heroImage' + container.title)\n    heroImage.setAttribute('title', 'heroImage' + container.title)\n    heroImage.classList.add('heroImage')\n    card.append(heroImage, title)\n    card.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openContainer(container))\n\n    return card\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerCard);\n\n//# sourceURL=webpack://todo/./src/components/containerCard.js?");

/***/ }),

/***/ "./src/components/containerView.js":
/*!*****************************************!*\
  !*** ./src/components/containerView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/components/input.js\");\n\n\nconst ContainerView = (container) => {\n    const containerView = document.createElement('div')\n    const title = document.createElement('div')\n    const uploadHeroImage = (0,_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('chooseHeroImage', 'file', 'initial')\n    containerView.classList.add('containerView')\n    containerView.setAttribute('id', container.title + 'View')\n    containerView.setAttribute('title', container.title + 'View')\n    title.innerHTML = `${container.title} view`\n    console.log(container.hero)\n    containerView.append(title, uploadHeroImage)\n\n    return containerView\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerView);\n\n//# sourceURL=webpack://todo/./src/components/containerView.js?");

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Form = (formId, display, ...inputs) => {\n    const form = document.createElement('form')\n    inputs.map(x => {\n        const textInputEl = document.createElement('input')\n        textInputEl.setAttribute('type', 'text')\n        textInputEl.setAttribute('placeholder', x)\n        form.append(textInputEl)\n    })\n    form.style.display = display\n    form.setAttribute('id', formId)\n\n    return form\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://todo/./src/components/form.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n/* harmony import */ var _homeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeView */ \"./src/components/homeView.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ \"./src/components/title.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo */ \"./src/components/logo.js\");\n\n\n\n\n\n\nconst Header = () => {\n    const header = document.createElement('header')\n    const logo = (0,_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__, 'todo', 'logo', 'logo')\n    const title = (0,_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('todo', 'title', 'title')\n    title.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openView((0,_homeView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()))\n    logo.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openView((0,_homeView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()))\n    header.classList.add('header')\n    header.append(logo, title)\n    header.setAttribute('id', 'header')\n    \n    return header\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://todo/./src/components/header.js?");

/***/ }),

/***/ "./src/components/homeView.js":
/*!************************************!*\
  !*** ./src/components/homeView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst HomeView = () => {\n    const homeView = document.createElement('div')\n    const welcomeMessage = document.createElement('div')\n    homeView.classList.add('homeView')\n    welcomeMessage.classList.add('welcomeMessage')\n    homeView.setAttribute('id', 'homeView')\n    welcomeMessage.setAttribute('id', 'welcomeMessage')\n    welcomeMessage.innerHTML = 'Welcome! Select or create a product to continue.'\n    homeView.append(welcomeMessage)\n\n    return homeView\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeView);\n\n//# sourceURL=webpack://todo/./src/components/homeView.js?");

/***/ }),

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Input = (id, type, display) => {\n    const input = document.createElement('input')\n    input.classList.add('input')\n    input.style.display = display\n    input.setAttribute('type', type)\n    input.setAttribute('id', id)\n    input.setAttribute('title', id)\n\n    return input\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://todo/./src/components/input.js?");

/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst List = (items, id) => {\n    const list = document.createElement('div')\n    list.classList.add('list')\n    list.setAttribute('id', id)\n    items.map(x => list.append(x))\n    \n    return list\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://todo/./src/components/list.js?");

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Logo = (src, alt, id, elClass) => {\n    const logo = document.createElement('img')\n    logo.setAttribute('src', src)\n    logo.setAttribute('alt', alt)\n    logo.setAttribute('id', id)\n    logo.setAttribute('title', alt)\n    logo.classList.add(elClass)\n\n    return logo\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);\n\n//# sourceURL=webpack://todo/./src/components/logo.js?");

/***/ }),

/***/ "./src/components/mainPanel.js":
/*!*************************************!*\
  !*** ./src/components/mainPanel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeView */ \"./src/components/homeView.js\");\n\n\nconst MainPanel = () => {\n    const mainPanel = document.createElement('div')\n    mainPanel.classList.add('mainPanel')\n    mainPanel.setAttribute('id', 'mainPanel')\n    mainPanel.append((0,_homeView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n\n    return mainPanel\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPanel);\n\n//# sourceURL=webpack://todo/./src/components/mainPanel.js?");

/***/ }),

/***/ "./src/components/productItem.js":
/*!***************************************!*\
  !*** ./src/components/productItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n\n\nconst ProductItem = (productId, productTitle) => {\n    const productItem = document.createElement('div')\n    productItem.classList.add('productItem')\n    productItem.setAttribute('id', productTitle)\n    productItem.setAttribute('title', productTitle)\n    productItem.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openProduct(productId))\n    productItem.innerHTML = productTitle\n\n    return productItem\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);\n\n//# sourceURL=webpack://todo/./src/components/productItem.js?");

/***/ }),

/***/ "./src/components/sidePanel.js":
/*!*************************************!*\
  !*** ./src/components/sidePanel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _productItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productItem */ \"./src/components/productItem.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/components/list.js\");\n/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/services */ \"./src/utils/services.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/components/form.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title */ \"./src/components/title.js\");\n/* harmony import */ var _homeView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeView */ \"./src/components/homeView.js\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n\n\n\n\n\n\n\n\n\nconst SidePanel = () => { \n    const sidePanel = document.createElement('div')\n    const productItems = _utils_services__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProducts().map(x => (0,_productItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x.id, x.title))\n    const addProductButton = (0,_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('+', 'addProduct', 'button', 'initial')\n    const newProductForm = (0,_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('newProduct', 'none', 'Product name')\n    const submitButton = (0,_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Submit', 'submitProduct', 'submit', 'initial')\n    const cancelButton = (0,_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Cancel', 'cancelProduct', 'button', 'initial')\n    const productListId = 'productList'\n    const productList = (0,_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productItems, productListId)\n    const productListTitle = (0,_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('Products', 'productList', 'title')\n    productListTitle.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].openView((0,_homeView__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()))\n    cancelButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].cancelFormInPlace(addProductButton, newProductForm))\n    newProductForm.append(submitButton, cancelButton)\n    newProductForm.addEventListener('submit', (e) => _utils_handlers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].submitNewProductForm(e, newProductForm, addProductButton, productListId))\n    addProductButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].openFormInPlace(addProductButton, newProductForm))\n    sidePanel.classList.add('sidePanel')\n    sidePanel.setAttribute('id', 'sidePanel')\n    sidePanel.append(\n        productListTitle,\n        productList,\n        addProductButton,\n        newProductForm\n    )\n\n    return sidePanel\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidePanel);\n\n//# sourceURL=webpack://todo/./src/components/sidePanel.js?");

/***/ }),

/***/ "./src/components/title.js":
/*!*********************************!*\
  !*** ./src/components/title.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Title = (text, id, elClass) => {\n    const title = document.createElement('div')\n    title.classList.add(elClass)\n    title.innerText = text\n    title.setAttribute('id', id)\n    title.setAttribute('title', text)\n    \n    return title\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n//# sourceURL=webpack://todo/./src/components/title.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n(0,_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/utils/handlers.js":
/*!*******************************!*\
  !*** ./src/utils/handlers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/utils/services.js\");\n/* harmony import */ var _components_productItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/productItem */ \"./src/components/productItem.js\");\n/* harmony import */ var _components_componentsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/componentsView */ \"./src/components/componentsView.js\");\n/* harmony import */ var _components_componentItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/componentItem */ \"./src/components/componentItem.js\");\n/* harmony import */ var _components_containerView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/containerView */ \"./src/components/containerView.js\");\n\n\n\n\n\n\nconst openFormInPlace = (button, form) => {\n    button.style.display = 'none'\n    form.style.display = 'initial'\n    form.children.item(0).focus()\n}\n\nconst cancelFormInPlace = (button, form) => {\n    button.style.display = 'initial'\n    form.style.display = 'none'\n    Array.from(form.children).map(x => x.value = '')\n}\n\nconst submitNewProductForm = (e, form, button, listId) => {\n    e.preventDefault()\n    const list = document.getElementsByClassName('list')[listId]\n    const productTitle = e.target.elements[0].value\n    const product = _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProduct(productTitle)\n    cancelFormInPlace(button, form)\n    list.append((0,_components_productItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(product.id, product.title))\n    openProduct(product.id)\n}\n\nconst submitNewComponentForm = (e, productId) => {\n    e.preventDefault()\n    const product = _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProductById(productId)\n    const newComponent = _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createComponent(e.target.elements[0].value)\n    product.components.push(newComponent)\n    product.componentQty++\n    _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateProduct(productId, product)\n    openProduct(productId)\n}\n\nconst submitNewContainerForm = (e, componentId, componentEl) => {\n    e.preventDefault()\n    const component = _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComponentById(componentId)\n    const newContainer = _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createContainer(e.target.elements[0].value)\n    component.containers.unshift(newContainer)\n    _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateComponent(componentId, component)\n    componentEl.parentNode.replaceChild((0,_components_componentItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component), componentEl)\n}\n\nconst openView = (view) => {\n    const mainPanel = document.getElementById('mainPanel')\n    mainPanel.innerHTML = ''\n    mainPanel.append(view)\n}\n\nconst openProduct = (productId) => {\n    openView((0,_components_componentsView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(productId))\n}\n\nconst openContainer = (container) => {\n    const containerView = document.getElementsByClassName('containerView')[0]\n    //const componentsView = document.getElementById('componentsView')\n    const mainPanel = document.getElementById('mainPanel')\n    if (containerView) containerView.remove()\n    mainPanel.prepend((0,_components_containerView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(container))\n    //componentsView.prepend(ContainerView(container))\n    //openView(ContainerView(container))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    openFormInPlace,\n    cancelFormInPlace,\n    submitNewProductForm,\n    submitNewComponentForm,\n    submitNewContainerForm,\n    openView,\n    openProduct,\n    openContainer\n});\n\n//# sourceURL=webpack://todo/./src/utils/handlers.js?");

/***/ }),

/***/ "./src/utils/schema.js":
/*!*****************************!*\
  !*** ./src/utils/schema.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Product = (props) => {\n    const title = props.title || ''\n    const id = props.id || ''\n    const components = props.components || []\n\n    return {title, id, components}\n}\n\nconst Component = (props) => {\n    const title = props.title || ''\n    const id = props.id || ''\n    const containers = props.containers || []\n\n    return {title, id, containers}\n}\n\nconst Container = (props) => {\n    const title = props.title\n    const id = props.id\n    const hero = props.hero\n    const work = props.work\n    const state = props.state\n    const output = props.output\n\n    return {title, id, hero, work, state, output}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({Product, Component, Container});\n\n//# sourceURL=webpack://todo/./src/utils/schema.js?");

/***/ }),

/***/ "./src/utils/services.js":
/*!*******************************!*\
  !*** ./src/utils/services.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ \"./src/utils/schema.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _assets_botAvatar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/botAvatar.svg */ \"./src/assets/botAvatar.svg\");\n\n\n\n\n//init product for dev purposes\nconst products = []\nconst components = []\nconst containers = []\nconst l1containers = [\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Container({title:'Story', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Container({title:'Characters', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), hero: _assets_botAvatar_svg__WEBPACK_IMPORTED_MODULE_1__}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Container({title:'Enemies', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Container({title:'Objects', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Container({title:'Environment', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Container({title:'Mechanics', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()})\n]\nconst gameComponents = [\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'Level1', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), containers: l1containers}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'Level2', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'Level3', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'Level4', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'Level5', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()})\n]\nconst webAppComponents = [\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'LandingPage', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'Login', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'Sing-up', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'Profile', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}),\n    _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title:'App', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()})\n]\n\ngameComponents.map(x => components.push(x))\nwebAppComponents.map(x => components.push(x))\nl1containers.map(x => containers.push(x))\nproducts.push(_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title: 'Game', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), components: gameComponents}))\nproducts.push(_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title: 'Webapp', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), components: webAppComponents}))\nproducts.push(_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title: 'Empty', id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), components: []}))\nlocalStorage.setItem('products', JSON.stringify(products))\nlocalStorage.setItem('components', JSON.stringify(components))\nlocalStorage.setItem('containers', JSON.stringify(containers))\nconsole.log(products)\nconsole.log(components)\nconsole.log(containers)\n\nconst getProducts = () => {\n    return JSON.parse(localStorage.getItem('products')) || []\n}\n\nconst getProductById = (id) => {\n    return getProducts().find(x => x.id === id)\n}\n\nconst createProduct = (productTitle) => {\n    const products = getProducts()\n    const productId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    const newProduct = _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title: productTitle, id: productId})\n    products.push(newProduct)\n    localStorage.setItem('products', JSON.stringify(products))\n\n    return newProduct\n}\n\nconst updateProduct = (productId, updatedProduct) => {\n    const products = getProducts()\n    const updatedProducts = products.map(x => x.id === productId ? x = updatedProduct : x)\n    localStorage.setItem('products', JSON.stringify(updatedProducts))\n}\n\nconst getComponents = () => {\n    return JSON.parse(localStorage.getItem('components')) || []\n}\n\nconst getComponentById = (id) => {\n    return getComponents().find(x => x.id === id)\n}\n\nconst createComponent = (componentTitle) => {\n    const components = getComponents()\n    const componentId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    const newComponent = _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component({title: componentTitle, id: componentId})\n    components.push(newComponent)\n    localStorage.setItem('components', JSON.stringify(components))\n\n    return newComponent\n}\n\nconst updateComponent = (componentId, updatedComponent) => {\n    const components = getComponents()\n    const products = getProducts()\n    const updatedComponents = components.map(x => x.id === componentId ? x = updatedComponent : x)\n    products.map(product => {\n        const index = product.components.findIndex(component => component.id === componentId)\n        if (index !== -1) product.components[index] = updatedComponent\n    })\n    localStorage.setItem('products', JSON.stringify(products))\n    localStorage.setItem('components', JSON.stringify(updatedComponents))\n}\n\nconst getContainers = () => {\n    return JSON.parse(localStorage.getItem('containers')) || []\n}\n\nconst createContainer = (containerTitle) => {\n    const containers = getContainers()\n    const containerId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    const newContainer = _schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Container({title: containerTitle, id: containerId})\n    containers.push(newContainer)\n    localStorage.setItem('containers', JSON.stringify(containers))\n\n    return newContainer\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    getProducts,\n    getProductById,\n    createProduct,\n    updateProduct,\n    getComponents,\n    getComponentById,\n    createComponent,\n    updateComponent,\n    getContainers,\n    createContainer\n});\n\n//# sourceURL=webpack://todo/./src/utils/services.js?");

/***/ }),

/***/ "./src/assets/botAvatar.svg":
/*!**********************************!*\
  !*** ./src/assets/botAvatar.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c18c48f108b174dbd31c.svg\";\n\n//# sourceURL=webpack://todo/./src/assets/botAvatar.svg?");

/***/ }),

/***/ "./src/assets/image-add-line.png":
/*!***************************************!*\
  !*** ./src/assets/image-add-line.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ad2eea9ad2e3f4f02de.png\";\n\n//# sourceURL=webpack://todo/./src/assets/image-add-line.png?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db6bc836b8313a76b5ec.png\";\n\n//# sourceURL=webpack://todo/./src/assets/logo.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;