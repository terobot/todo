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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --componentListCols: 0;\\n    --componentListRows: 0;\\n}\\n\\nbody {\\n    display: grid;\\n    grid-template-columns: repeat(5, 19.2%);\\n    grid-template-rows: 10% 89%;\\n    background-color: #1F1B24;\\n    color: #ffffff;\\n    height: 96vh;\\n    gap: 1% 1%;\\n    margin: 2vh;\\n    padding: 0;\\n    justify-content: stretch;\\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\\n}\\n\\n.header {\\n    grid-column: 1 / 6;\\n    grid-row: 1;\\n    display: flex;\\n    justify-content: flex-start;\\n    align-items: center;\\n    column-gap: 0.5em;\\n    padding: 0.5em;\\n}\\n\\n.logo {\\n    height: 8vh;\\n}\\n\\n.title#title {\\n    opacity: 1;\\n    font-size: 6vh;\\n}\\n\\n.title#productList {\\n    font-size: 1.5em;\\n}\\n\\n.sidePanel {\\n    grid-column: 1 / 2;\\n    grid-row: 2;\\n    background-color: #3c3446;\\n    border-radius: 10px;\\n    padding: 0.5em;\\n}\\n\\n.mainPanel {\\n    grid-column: 2 / 6;\\n    grid-row: 2;\\n    display: flex;\\n    background-color: #3c3446;\\n    border-radius: 10px;\\n    overflow: auto;\\n    padding: 0.5em;\\n}\\n\\n.mainPanel::-webkit-scrollbar {\\n    display: none;\\n}\\n\\n.componentsView {\\n    display: grid;\\n    grid-template-columns: repeat(var(--componentListCols), 5em);\\n    grid-template-rows: 2em repeat(var(--componentListRows), 5em) 2em;\\n    gap: 1% 1%;\\n}\\n\\n.containerTypeItem {\\n    width: 5em;\\n    overflow: auto;\\n    text-overflow: ellipsis;\\n}\\n\\n.containerTypeItem:hover {\\n    text-overflow: clip;\\n}\\n\\n.containerTypeItem::-webkit-scrollbar {\\n    display: none;\\n}\\n\\n.componentTitle {\\n    width: 5em;\\n    overflow: auto;\\n    text-overflow: ellipsis;\\n}\\n\\n.componentTitle:hover {\\n    text-overflow: clip;\\n}\\n\\n.componentTitle::-webkit-scrollbar {\\n    display: none;\\n}\\n\\n.containerCard {\\n    background: #494055;\\n    height: 4em;\\n    line-height: 1em;\\n    border-radius: 0.5em;\\n    cursor:pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_sidePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidePanel */ \"./src/components/sidePanel.js\");\n/* harmony import */ var _components_mainPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mainPanel */ \"./src/components/mainPanel.js\");\n\n\n\n\n//import Product from './components/productPanel'\n\nconst App = () => {\n    document.body.append((0,_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_components_sidePanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (0,_components_mainPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://todo/./src/app.js?");

/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Button = (value, id, type, display) => {\n    const button = document.createElement('button')\n    button.classList.add('button')\n    button.style.display = display\n    button.setAttribute('type', type)\n    button.setAttribute('id', id)\n    button.setAttribute('value', value)\n    button.innerHTML = value\n\n    return button\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://todo/./src/components/button.js?");

/***/ }),

/***/ "./src/components/componentTitleItem.js":
/*!**********************************************!*\
  !*** ./src/components/componentTitleItem.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ComponentTitleItem = (item) => {\n    const itemEl = document.createElement('div')\n    itemEl.innerHTML = `${item}`\n    itemEl.classList.add('componentTitle')\n    itemEl.setAttribute('id', item)\n\n    return itemEl\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentTitleItem);\n\n//# sourceURL=webpack://todo/./src/components/componentTitleItem.js?");

/***/ }),

/***/ "./src/components/componentsView.js":
/*!******************************************!*\
  !*** ./src/components/componentsView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/components/form.js\");\n/* harmony import */ var _containerTypeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containerTypeItem */ \"./src/components/containerTypeItem.js\");\n/* harmony import */ var _componentTitleItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentTitleItem */ \"./src/components/componentTitleItem.js\");\n/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/services */ \"./src/utils/services.js\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n\n\n\n\n\n\n\nconst ComponentsView = (productTitle) => {\n    const componentsView = document.createElement('div')\n    const componentQty = _utils_services__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getProductByTitle(productTitle).componentQty\n    const containerTypeQty = _utils_services__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getProductByTitle(productTitle).containerTypeQty\n    const root = document.documentElement;\n    const containerTypes = _utils_services__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getProductByTitle(productTitle).containerTypes\n    const components = _utils_services__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getProductByTitle(productTitle).components  \n    const addContainerTypeButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('+', 'addContainerType', 'button', 'initial')\n    const newContainerTypeForm = (0,_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('newContainerType', 'none', 'Container type name')\n    const submitContainerTypeButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Submit', 'submitContainerType', 'submit', 'initial')\n    const cancelContainerTypeButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Cancel', 'cancelContainerType', 'button', 'initial')\n    const addComponentButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('+', 'addComponent', 'button', 'initial')\n    const newComponentForm = (0,_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('newComponent', 'none', 'Component name')\n    const submitComponentButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Submit', 'submitComponent', 'submit', 'initial')\n    const cancelComponentButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Cancel', 'cancelComponent', 'button', 'initial')\n    componentsView.classList.add('componentsView')\n    componentsView.setAttribute('id', 'componentsView')\n    root.style.setProperty('--componentListRows', componentQty);\n    root.style.setProperty('--componentListCols', containerTypeQty+2);\n    if (containerTypes) {\n        let count = 1\n        containerTypes.map(x => {\n            const el = (0,_containerTypeItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x)\n            el.style.setProperty('grid-column', count+1)\n            el.style.setProperty('grid-row', 1)\n            componentsView.append(el)\n            count++\n        })\n    }\n    addContainerTypeButton.style.setProperty('grid-column', containerTypeQty+2)\n    addContainerTypeButton.style.setProperty('grid-row', 1)\n    newContainerTypeForm.style.setProperty('grid-column', containerTypeQty+2)\n    newContainerTypeForm.style.setProperty('grid-row', 1)\n    cancelContainerTypeButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].cancelFormInPlace(addContainerTypeButton, newContainerTypeForm))\n    newContainerTypeForm.append(submitContainerTypeButton, cancelContainerTypeButton)\n    newContainerTypeForm.addEventListener('submit', (e) => _utils_handlers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].submitNewContainerTypeForm(e, productTitle))\n    addContainerTypeButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].openFormInPlace(addContainerTypeButton, newContainerTypeForm))\n    componentsView.append(addContainerTypeButton, newContainerTypeForm)\n    if (components) {\n        let count = 1\n        components.map(x => {\n            const el = (0,_componentTitleItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(x)\n            el.style.setProperty('grid-column', 1)\n            el.style.setProperty('grid-row', count+1)\n            componentsView.append(el)\n            count++\n        })\n    }\n    addComponentButton.style.setProperty('grid-column', 1)\n    addComponentButton.style.setProperty('grid-row', componentQty+2)\n    newComponentForm.style.setProperty('grid-column', 1)\n    newComponentForm.style.setProperty('grid-row', componentQty+2)\n    cancelComponentButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].cancelFormInPlace(addComponentButton, newComponentForm))\n    newComponentForm.append(submitComponentButton, cancelComponentButton)\n    newComponentForm.addEventListener('submit', (e) => _utils_handlers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].submitNewComponentForm(e, productTitle))\n    addComponentButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].openFormInPlace(addComponentButton, newComponentForm))\n    componentsView.append(addComponentButton, newComponentForm)\n\n    return componentsView\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsView);\n\n//# sourceURL=webpack://todo/./src/components/componentsView.js?");

/***/ }),

/***/ "./src/components/containerTypeItem.js":
/*!*********************************************!*\
  !*** ./src/components/containerTypeItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ContainerTypeItem = (item) => {\n    const itemEl = document.createElement('div')\n    itemEl.innerHTML = `${item}`\n    itemEl.classList.add('containerTypeItem')\n    itemEl.setAttribute('id', item)\n    itemEl.addEventListener('dblclick', () => {\n        const currentValue = itemEl.innerHTML\n        itemEl.contentEditable = 'true'\n        itemEl.focus()\n        itemEl.addEventListener('blur', () => {\n            itemEl.contentEditable = 'false'\n            if (itemEl.innerHTML !== currentValue) {\n                console.log('todo: updateContainerTypeTitle')\n            }\n        })\n    })\n\n    return itemEl\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerTypeItem);\n\n//# sourceURL=webpack://todo/./src/components/containerTypeItem.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n/* harmony import */ var _homeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeView */ \"./src/components/homeView.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ \"./src/components/title.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo */ \"./src/components/logo.js\");\n\n\n\n\n\n\nconst Header = () => {\n    const header = document.createElement('header')\n    const logo = (0,_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__, 'todo app', 'logo', 'logo')\n    const title = (0,_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('todo', 'title', 'title')\n    title.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openView((0,_homeView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()))\n    logo.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openView((0,_homeView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()))\n    header.classList.add('header')\n    header.append(logo, title)\n    header.setAttribute('id', 'header')\n    \n    return header\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://todo/./src/components/header.js?");

/***/ }),

/***/ "./src/components/homeView.js":
/*!************************************!*\
  !*** ./src/components/homeView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst HomeView = () => {\n    const homeView = document.createElement('div')\n    const welcomeMessage = document.createElement('div')\n    homeView.classList.add('homeView')\n    welcomeMessage.classList.add('welcomeMessage')\n    homeView.setAttribute('id', 'homeView')\n    welcomeMessage.setAttribute('id', 'welcomeMessage')\n    welcomeMessage.innerHTML = 'Welcome! Select or create a product to continue.'\n    homeView.append(welcomeMessage)\n\n    return homeView\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeView);\n\n//# sourceURL=webpack://todo/./src/components/homeView.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Logo = (src, alt, id, elClass) => {\n    const logo = document.createElement('img')\n    logo.setAttribute('src', src)\n    logo.setAttribute('alt', alt)\n    logo.setAttribute('id', id)\n    logo.classList.add(elClass)\n\n    return logo\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);\n\n//# sourceURL=webpack://todo/./src/components/logo.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n\n\nconst ProductItem = (productTitle) => {\n    const productItem = document.createElement('div')\n    productItem.classList.add('productItem')\n    productItem.setAttribute('id', productTitle)\n    productItem.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openProduct(productTitle))\n    productItem.innerHTML = productTitle\n\n    return productItem\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);\n\n//# sourceURL=webpack://todo/./src/components/productItem.js?");

/***/ }),

/***/ "./src/components/sidePanel.js":
/*!*************************************!*\
  !*** ./src/components/sidePanel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _productItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productItem */ \"./src/components/productItem.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/components/list.js\");\n/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/services */ \"./src/utils/services.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/components/form.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title */ \"./src/components/title.js\");\n/* harmony import */ var _homeView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeView */ \"./src/components/homeView.js\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n// import Service from '../utils/services'\n// import Product from './productPanel'\n// import Button from './button'\n// import Form from './form'\n// import Handler from '../utils/handlers'\n\n// const ProductEl = (product) => {\n//     const productEl = document.createElement('div')\n//     productEl.innerHTML = `${product}`\n//     productEl.addEventListener('click', () => {\n//         const productPanel = document.getElementById('productPanel')\n//         productPanel.innerHTML = ''\n//         productPanel.append(Product.ComponentList(product))\n//     })\n//     productEl.classList.add('productEl')\n//     productEl.setAttribute('id', 'productEl'+product)\n\n//     return productEl\n// }\n\n// const ProductsMenu = () => {\n//     const formId = 'newProductForm'\n//     const buttonId = 'addProductButton'\n//     const products = Service.getProducts()\n//     const productsEl = document.createElement('div')\n//     const productsMenu = document.createElement('div')\n//     const productsMenuTitle = document.createElement('div')\n//     const newProductForm = Form(\n//         formId,\n//         'cancelProductButton',\n//         'Cancel',\n//         'createProductButton',\n//         'Create',\n//         'none',\n//         'Product name'\n//     )\n//     const addProductButton = Button(\n//         '+',\n//         buttonId,\n//         'button',\n//         'initial'\n//     )\n//     newProductForm.children.item(2).addEventListener('click', () => {\n//         Handler.cancelFormInPlace(buttonId, formId)\n//     })\n//     newProductForm.addEventListener('submit', (e) => {\n//         Handler.submitNewProductForm(\n//             e,\n//             ProductEl,\n//             Product.ComponentList,\n//             formId,\n//             buttonId\n//         )\n//     })\n//     addProductButton.addEventListener('click', () => Handler.openFormInPlace(buttonId, formId))\n//     productsEl.classList.add('products')\n//     productsMenu.classList.add('productsMenu')\n//     productsMenuTitle.classList.add('productsMenuTitle')\n//     productsEl.setAttribute('id', 'products')\n//     productsMenu.setAttribute('id', 'productsMenu')\n//     productsMenuTitle.setAttribute('id', 'productsMenuTitle')\n//     productsMenuTitle.innerHTML = 'Products'\n//     if (products) products.map(x => productsEl.appendChild(ProductEl(x.title)))\n//     productsMenuTitle.addEventListener('click', () => {\n//         const productPanel = document.getElementById('productPanel')\n//         productPanel.innerHTML = ''\n//         productPanel.append(Product.HomeView())\n//     })\n//     productsMenu.append(productsMenuTitle, productsEl, addProductButton, newProductForm)\n\n//     return productsMenu\n// }\n\n\n\n\n\n\n\n\n\n\nconst SidePanel = () => { \n    const sidePanel = document.createElement('div')\n    const productItems = _utils_services__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProducts().map(x => (0,_productItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x.title))\n    const addProductButton = (0,_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('+', 'addProduct', 'button', 'initial')\n    const newProductForm = (0,_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('newProduct', 'none', 'Product name')\n    const submitButton = (0,_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Submit', 'submitProduct', 'submit', 'initial')\n    const cancelButton = (0,_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Cancel', 'cancelProduct', 'button', 'initial')\n    const productListId = 'productList'\n    const productList = (0,_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productItems, productListId)\n    const productListTitle = (0,_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('Products', 'productList', 'title')\n    productListTitle.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].openView((0,_homeView__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()))\n    cancelButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].cancelFormInPlace(addProductButton, newProductForm))\n    newProductForm.append(submitButton, cancelButton)\n    newProductForm.addEventListener('submit', (e) => _utils_handlers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].submitNewProductForm(e, newProductForm, addProductButton, productListId))\n    addProductButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].openFormInPlace(addProductButton, newProductForm))\n    sidePanel.classList.add('sidePanel')\n    sidePanel.setAttribute('id', 'sidePanel')\n    sidePanel.append(\n        productListTitle,\n        productList,\n        addProductButton,\n        newProductForm\n    )\n\n    return sidePanel\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidePanel);\n\n//# sourceURL=webpack://todo/./src/components/sidePanel.js?");

/***/ }),

/***/ "./src/components/title.js":
/*!*********************************!*\
  !*** ./src/components/title.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Title = (text, id, elClass) => {\n    const title = document.createElement('div')\n    title.classList.add(elClass)\n    title.innerText = text\n    title.setAttribute('id', id)\n    \n    return title\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n//# sourceURL=webpack://todo/./src/components/title.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/utils/services.js\");\n/* harmony import */ var _components_productItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/productItem */ \"./src/components/productItem.js\");\n/* harmony import */ var _components_componentsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/componentsView */ \"./src/components/componentsView.js\");\n\n\n\n\nconst openFormInPlace = (button, form) => {\n    button.style.display = 'none'\n    form.style.display = 'initial'\n    form.children.item(0).focus()\n}\n\nconst cancelFormInPlace = (button, form) => {\n    button.style.display = 'initial'\n    form.style.display = 'none'\n    Array.from(form.children).map(x => x.value = '')\n} \n\nconst submitNewProductForm = (e, form, button, listId) => {\n    e.preventDefault()\n    const list = document.getElementsByClassName('list')[listId]\n    const newProduct = {\n        title: e.target.elements[0].value,\n        id: `${_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProducts().length+1}`,\n        components: [],\n        containerTypes: [],\n        componentQty: 0,\n        containerTypeQty: 0\n    }\n    _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProduct(newProduct)\n    cancelFormInPlace(button, form)\n    list.append((0,_components_productItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newProduct.title))\n    openProduct(newProduct.title)\n}\n\nconst submitNewComponentForm = (e, productTitle) => {\n    e.preventDefault()\n    const newComponent = {\n        title: e.target.elements[0].value,\n        id: `${_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProducts().componentQty+1}`\n    }\n    _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addComponentToProduct(productTitle, newComponent)\n    openProduct(productTitle)\n}\n\nconst submitNewContainerTypeForm = (e, productTitle) => {\n    e.preventDefault()\n    const newContainerType = {\n        title: e.target.elements[0].value,\n        id: `${_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProducts().containerTypeQty+1}`\n    }\n    _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addContainerTypeToProduct(productTitle, newContainerType)\n    openProduct(productTitle)\n}\n\nconst openProduct = (productTitle) => {\n    const mainPanel = document.getElementById('mainPanel')\n    mainPanel.innerHTML = ''\n    mainPanel.append((0,_components_componentsView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(productTitle))\n}\n\nconst openView = (view) => {\n    const mainPanel = document.getElementById('mainPanel')\n    mainPanel.innerHTML = ''\n    mainPanel.append(view)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    openFormInPlace,\n    cancelFormInPlace,\n    submitNewProductForm,\n    submitNewComponentForm,\n    submitNewContainerTypeForm,\n    openProduct,\n    openView\n});\n\n//# sourceURL=webpack://todo/./src/utils/handlers.js?");

/***/ }),

/***/ "./src/utils/schema.js":
/*!*****************************!*\
  !*** ./src/utils/schema.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Product = (props) => {\n    const title = props.title\n    const id = props.id\n    const components = props.components\n    const componentQty = props.components.length\n    const containerTypes = props.containerTypes\n    const containerTypeQty = props.containerTypes.length\n\n    return {title, id, components, containerTypes, componentQty, containerTypeQty}\n}\n\nconst Component = (props) => {\n    const title = props.title\n    const id = props.id\n    const containers = props.containers\n    const data = props.data\n\n    return {title, id, containers, data}\n}\n\nconst Container = (props) => {\n    const title = props.title\n    const id = props.id\n    const type = props.type\n    const work = props.work\n    const state = props.state\n    const output = props.output\n\n    return {title, id, type, work, state, output}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({Product, Component, Container});\n\n//# sourceURL=webpack://todo/./src/utils/schema.js?");

/***/ }),

/***/ "./src/utils/services.js":
/*!*******************************!*\
  !*** ./src/utils/services.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ \"./src/utils/schema.js\");\n\n\n//init product for dev purposes\nconst products = []\nconst gameComponents = [\n    'Level1',\n    'Level2',\n    'Level3',\n    'Level4',\n    'Level5'\n]\nconst gameContainerTypes = [\n    'Character',\n    'Environment',\n    'Enemy',\n    'Object'\n]\nconst webAppComponents = [\n    'LandingPage',\n    'Login',\n    'Sing-up',\n    'Profile',\n    'App'\n]\nconst webAppContainerTypes = [\n    'Frontend',\n    'Backend',\n    'Documentation',\n    'Tests'\n]\n\nproducts.push(_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title:'Game', id:'1', components: gameComponents, containerTypes: gameContainerTypes}))\nproducts.push(_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title:'Webapp', id:'2', components: webAppComponents, containerTypes: webAppContainerTypes}))\nproducts.push(_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title: 'Empty', id:'3', components: [], containerTypes: []}))\nlocalStorage.setItem('products', JSON.stringify(products))\nconsole.log(products)\n\nconst getProducts = () => {\n    return JSON.parse(localStorage.getItem('products'))\n}\n\nconst getProductByTitle = (title) => {\n    return getProducts().find(x => x.title === title)\n}\n\nconst createProduct = (product) => {\n    const products = JSON.parse(localStorage.getItem('products')) || []\n    products.push(product)\n    localStorage.setItem('products', JSON.stringify(products))\n}\n\nconst addComponentToProduct = (productTitle, component) => {\n    const products = getProducts()\n    const product = products.find(x => x.title === productTitle)\n    product.components.push(component.title)\n    product.componentQty++\n    localStorage.setItem('products', JSON.stringify(products))\n}\n\nconst updateComponentTitle = (productTitle, component) => {\n\n}\n\nconst addContainerTypeToProduct = (productTitle, containerType) => {\n    const products = getProducts()\n    const product = products.find(x => x.title === productTitle)\n    product.containerTypes.push(containerType.title)\n    product.containerTypeQty++\n    localStorage.setItem('products', JSON.stringify(products))\n    console.log(localStorage.products)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({createProduct, getProducts, getProductByTitle, addComponentToProduct, updateComponentTitle, addContainerTypeToProduct});\n\n//# sourceURL=webpack://todo/./src/utils/services.js?");

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