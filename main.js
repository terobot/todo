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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --componentListCols: 0;\\n    --componentListRows: 0;\\n}\\n\\nbody {\\n    display: grid;\\n    grid-template-columns: repeat(5, 19.2%);\\n    grid-template-rows: 10% 89%;\\n    background-color: #1F1B24;\\n    color: #ffffff;\\n    height: 96vh;\\n    gap: 1% 1%;\\n    margin: 2vh;\\n    padding: 0;\\n    justify-content: stretch;\\n}\\n\\n.header {\\n    grid-column: 1 / 6;\\n    grid-row: 1;\\n    display: flex;\\n    justify-content: flex-start;\\n    align-items: center;\\n    column-gap: 0.5em;\\n}\\n\\n.logo {\\n    height: 8vh;\\n}\\n\\n.title {\\n    opacity: 1;\\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\\n    font-size: 6vh;\\n}\\n\\n.sidePanel {\\n    grid-column: 1 / 2;\\n    grid-row: 2;\\n    background-color: #3c3446;\\n    border-radius: 10px;\\n    padding: 0.5em;\\n}\\n\\n.productPanel {\\n    grid-column: 2 / 6;\\n    grid-row: 2;\\n    display: flex;\\n    background-color: #3c3446;\\n    border-radius: 10px;\\n    overflow: auto;\\n    padding: 0.5em;\\n}\\n\\n.productPanel::-webkit-scrollbar {\\n    display: none;\\n}\\n\\n.componentList {\\n    display: grid;\\n    grid-template-columns: repeat(var(--componentListCols), 5em);\\n    grid-template-rows: 2em repeat(var(--componentListRows), 5em);\\n    gap: 1% 1%;\\n}\\n\\n.componentListHeaderItem {\\n    width: 5em;\\n    overflow: auto;\\n    text-overflow: ellipsis;\\n}\\n\\n.componentListHeaderItem:hover {\\n    text-overflow: clip;\\n}\\n\\n.componentListHeaderItem::-webkit-scrollbar {\\n    display: none;\\n}\\n\\n.component {\\n    display: flex;\\n    flex-direction: row;\\n    column-gap: 1vw;\\n}\\n\\n.componentTitle {\\n    width: 5em;\\n    overflow: auto;\\n    text-overflow: ellipsis;\\n}\\n\\n.componentTitle:hover {\\n    text-overflow: clip;\\n}\\n\\n.componentTitle::-webkit-scrollbar {\\n    display: none;\\n}\\n\\n.containerType {\\n    width: 5em;\\n}\\n\\n.containerCard {\\n    background: #494055;\\n    height: 4em;\\n    line-height: 1em;\\n    border-radius: 0.5em;\\n    cursor:pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_sidePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidePanel */ \"./src/components/sidePanel.js\");\n/* harmony import */ var _components_productPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/productPanel */ \"./src/components/productPanel.js\");\n\n\n\n\n\nconst App = () => {\n    document.body.append((0,_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_components_sidePanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), _components_productPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ProductPanel())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://todo/./src/app.js?");

/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Button = (value, id, type, display) => {\n    const button = document.createElement('button')\n    button.classList.add('button')\n    button.style.display = display\n    button.setAttribute('type', type)\n    button.setAttribute('id', id)\n    button.setAttribute('value', value)\n    button.innerHTML = value\n\n    return button\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://todo/./src/components/button.js?");

/***/ }),

/***/ "./src/components/containerCard.js":
/*!*****************************************!*\
  !*** ./src/components/containerCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ContainerCard = (id) => {\n    const card = document.createElement('div')\n    card.classList.add('containerCard')\n    card.setAttribute('id', id)\n\n    return card\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerCard);\n\n//# sourceURL=webpack://todo/./src/components/containerCard.js?");

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n\n\nconst Form = (formId, cancelFormButtonId, cancelButtonName, submitButtonId, submitButtonName, display, ...inputs) => {\n    const form = document.createElement('form')\n    const submitButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n        submitButtonName,\n        submitButtonId,\n        'submit',\n        'initial'\n    )\n    const cancelButton = (0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n        cancelButtonName,\n        cancelFormButtonId,\n        'button',\n        'initial'\n    )\n    inputs.map(x => {\n        const textInputEl = document.createElement('input')\n        textInputEl.setAttribute('type', 'text')\n        textInputEl.setAttribute('placeholder', x)\n        form.append(textInputEl)\n    })\n    form.style.display = display\n    form.setAttribute('id', formId)\n    form.append(submitButton, cancelButton)\n\n    return form\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://todo/./src/components/form.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ \"./src/assets/logo.png\");\n\n\nconst Logo = (src, alt, id, elClass) => {\n    const logo = document.createElement('img')\n    logo.setAttribute('src', src)\n    logo.setAttribute('alt', alt)\n    logo.setAttribute('id', id)\n    logo.classList.add(elClass)\n\n    return logo\n}\n\nconst Title = (text, id, elClass) => {\n    const title = document.createElement('div')\n    title.classList.add(elClass)\n    title.innerText = text\n    title.setAttribute('id', id)\n    \n    return title\n}\n\nconst Header = () => {\n    const header = document.createElement('header')\n    const logo = Logo(_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__, 'todo app', 'logo', 'logo')\n    const title = Title('todo', 'title', 'title')\n    header.classList.add('header')\n    header.append(logo, title)\n    header.setAttribute('id', 'header')\n    \n    return header\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://todo/./src/components/header.js?");

/***/ }),

/***/ "./src/components/productPanel.js":
/*!****************************************!*\
  !*** ./src/components/productPanel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/services */ \"./src/utils/services.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/components/form.js\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n/* harmony import */ var _containerCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containerCard */ \"./src/components/containerCard.js\");\n\n\n\n\n\n\n// const ContainerTypeEl = (component, containerType) => {\n//     const containerTypeEl = document.createElement('div')\n//     containerTypeEl.classList.add('containerType')\n//     containerTypeEl.setAttribute('id', component+containerType)\n//     containerTypeEl.append(ContainerCard(component+containerType+'card'))\n\n//     return containerTypeEl\n// }\n\n// const ComponentListItemEl = (productTitle, component, type) => {\n//     const componentListItemEl = document.createElement('div')\n//     const containerTypes = Service.getProductByTitle(productTitle).containerTypes\n//     const componentTitle = document.createElement('div')\n//     const formId = 'newContainerTypeForm'\n//     const buttonId = 'addContainerTypeButton'\n//     const newContainerTypeForm = Form(\n//         formId,\n//         'cancelContainerTypeButton',\n//         'Cancel',\n//         'createContainerTypeButton',\n//         'Create',\n//         'none',\n//         'Container type name'\n//     )\n//     const addContainerTypeButton = Button(\n//         '+',\n//         buttonId,\n//         'button',\n//         'initial'\n//     )\n//     newContainerTypeForm.children.item(2).addEventListener('click', () => {\n//         Handler.cancelFormInPlace(buttonId, formId)\n//     })\n//     newContainerTypeForm.addEventListener('submit', (e) => {\n//         Handler.submitNewContainerTypeForm(\n//             e,\n//             ComponentListHeaderItem,\n//             'componentListHeader',\n//             'productPanel',\n//             ComponentList,\n//             productTitle,\n//             formId,\n//             buttonId\n//         )\n//     })\n//     addContainerTypeButton.addEventListener('click', () => Handler.openFormInPlace(buttonId, formId))\n//     if (type === 'component') {\n//         componentTitle.innerHTML = `${component}`\n//         componentTitle.classList.add('componentTitle')\n//         componentListItemEl.append(componentTitle)\n//     }\n//     if (containerTypes) {\n//         containerTypes.map(x => componentListItemEl.appendChild(\n//             (type === 'component') ? ContainerTypeEl(component, x) : ComponentListHeaderItem(x)\n//         ))\n//     }\n//     if (type === 'header') componentListItemEl.append(addContainerTypeButton, newContainerTypeForm)\n//     componentListItemEl.classList.add((type === 'component') ? type : 'componentListHeader')\n//     componentListItemEl.setAttribute('id', (type === 'component') ? type+component : 'componentListHeader')\n\n//     return componentListItemEl\n// }\n\n// const ComponentListHeaderItem = (item) => {\n//     const itemEl = document.createElement('div')\n//     itemEl.innerHTML = `${item}`\n//     itemEl.classList.add('componentListHeaderItem')\n//     itemEl.setAttribute('id', 'componentListHeaderItem'+item)\n\n//     return itemEl\n// }\n\n\n// const ComponentList = (productTitle) => {\n//     const components = Service.getProductByTitle(productTitle).components\n//     const componentQty = Service.getProductByTitle(productTitle).componentQty\n//     const containerTypeQty = Service.getProductByTitle(productTitle).containerTypeQty\n//     const componentList = document.createElement('div')\n//     const root = document.documentElement;\n//     const formId = 'newComponentForm'\n//     const buttonId = 'addComponentButton'\n//     const newComponentForm = Form(\n//         formId,\n//         'cancelProductButton',\n//         'Cancel',\n//         'createProductButton',\n//         'Create',\n//         'none',\n//         'Component name'\n//     )\n//     const addComponentButton = Button(\n//         '+',\n//         buttonId,\n//         'button',\n//         'initial'\n//     )\n//     newComponentForm.children.item(2).addEventListener('click', () => {\n//         Handler.cancelFormInPlace(buttonId, formId)\n//     })\n//     newComponentForm.addEventListener('submit', (e) => {\n//         Handler.submitNewComponentForm(\n//             e,\n//             ComponentListItemEl,\n//             productTitle,\n//             componentList,\n//             formId,\n//             buttonId\n//         )\n//     })\n//     addComponentButton.addEventListener('click', () => Handler.openFormInPlace(buttonId, formId))\n//     componentList.append(ComponentListItemEl(productTitle, 'header', 'header'))\n//     componentList.classList.add('componentList')\n//     if (components) {\n//         components.map(x => componentList.appendChild(ComponentListItemEl(productTitle, x, 'component')))\n//     }\n//     componentList.setAttribute('id', 'componentList')\n//     componentList.append(addComponentButton, newComponentForm)\n//     root.style.setProperty('--componentQty', componentQty);\n//     root.style.setProperty('--containerTypeQty', containerTypeQty);\n\n//     return componentList\n// }\n\nconst ComponentListHeaderItem = (item) => {\n    const itemEl = document.createElement('div')\n    itemEl.innerHTML = `${item}`\n    itemEl.classList.add('componentListHeaderItem')\n    itemEl.setAttribute('id', 'componentListHeaderItem'+item)\n\n    return itemEl\n}\n\nconst ComponentTitleItem = (item) => {\n    const itemEl = document.createElement('div')\n    itemEl.innerHTML = `${item}`\n    itemEl.classList.add('componentTitle')\n    itemEl.setAttribute('id', 'componentTitle'+item)\n\n    return itemEl\n}\n\nconst ComponentList = (productTitle) => {\n    const componentQty = _utils_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProductByTitle(productTitle).componentQty\n    const containerTypeQty = _utils_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProductByTitle(productTitle).containerTypeQty\n    const componentList = document.createElement('div')\n    const root = document.documentElement;\n    const containerTypes = _utils_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProductByTitle(productTitle).containerTypes\n    const components = _utils_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProductByTitle(productTitle).components\n    componentList.classList.add('componentList')\n    componentList.setAttribute('id', 'componentList')\n    root.style.setProperty('--componentListRows', componentQty+1);\n    root.style.setProperty('--componentListCols', containerTypeQty+2);\n    if (containerTypes) {\n        let count = 1\n        containerTypes.map(x => {\n            const el = ComponentListHeaderItem(x)\n            el.style.setProperty('grid-column', count+1)\n            el.style.setProperty('grid-row', 1)\n            componentList.append(el)\n            count++\n        })\n    }\n    if (components) {\n        let count = 1\n        components.map(x => {\n            const el = ComponentTitleItem(x)\n            el.style.setProperty('grid-column', 1)\n            el.style.setProperty('grid-row', count+1)\n            componentList.append(el)\n            count++\n        })\n    }\n\n    return componentList\n}\n\nconst HomeView = () => {\n    const homeView = document.createElement('div')\n    const welcomeMessage = document.createElement('div')\n    homeView.classList.add('homeView')\n    welcomeMessage.classList.add('welcomeMessage')\n    homeView.setAttribute('id', 'homeView')\n    welcomeMessage.setAttribute('id', 'welcomeMessage')\n    welcomeMessage.innerHTML = 'Welcome! Select or create a product to continue.'\n    homeView.append(welcomeMessage)\n\n    return homeView\n}\n\nconst ProductPanel = () => {\n    const productPanel = document.createElement('div')\n    productPanel.classList.add('productPanel')\n    productPanel.setAttribute('id', 'productPanel')\n    productPanel.append(HomeView())\n\n    return productPanel\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ProductPanel, HomeView, ComponentList});\n\n//# sourceURL=webpack://todo/./src/components/productPanel.js?");

/***/ }),

/***/ "./src/components/sidePanel.js":
/*!*************************************!*\
  !*** ./src/components/sidePanel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/services */ \"./src/utils/services.js\");\n/* harmony import */ var _productPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productPanel */ \"./src/components/productPanel.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ \"./src/components/form.js\");\n/* harmony import */ var _utils_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/handlers */ \"./src/utils/handlers.js\");\n\n\n\n\n\n\nconst ProductEl = (product) => {\n    const productEl = document.createElement('div')\n    productEl.innerHTML = `${product}`\n    productEl.addEventListener('click', () => {\n        const productPanel = document.getElementById('productPanel')\n        productPanel.innerHTML = ''\n        productPanel.append(_productPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ComponentList(product))\n    })\n    productEl.classList.add('productEl')\n    productEl.setAttribute('id', 'productEl'+product)\n\n    return productEl\n}\n\nconst ProductsMenu = () => {\n    const formId = 'newProductForm'\n    const buttonId = 'addProductButton'\n    const products = _utils_services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProducts()\n    const productsEl = document.createElement('div')\n    const productsMenu = document.createElement('div')\n    const productsMenuTitle = document.createElement('div')\n    const newProductForm = (0,_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n        formId,\n        'cancelProductButton',\n        'Cancel',\n        'createProductButton',\n        'Create',\n        'none',\n        'Product name'\n    )\n    const addProductButton = (0,_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n        '+',\n        buttonId,\n        'button',\n        'initial'\n    )\n    newProductForm.children.item(2).addEventListener('click', () => {\n        _utils_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].cancelFormInPlace(buttonId, formId)\n    })\n    newProductForm.addEventListener('submit', (e) => {\n        _utils_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].submitNewProductForm(\n            e,\n            ProductEl,\n            _productPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ComponentList,\n            formId,\n            buttonId\n        )\n    })\n    addProductButton.addEventListener('click', () => _utils_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].openFormInPlace(buttonId, formId))\n    productsEl.classList.add('products')\n    productsMenu.classList.add('productsMenu')\n    productsMenuTitle.classList.add('productsMenuTitle')\n    productsEl.setAttribute('id', 'products')\n    productsMenu.setAttribute('id', 'productsMenu')\n    productsMenuTitle.setAttribute('id', 'productsMenuTitle')\n    productsMenuTitle.innerHTML = 'Products'\n    if (products) products.map(x => productsEl.appendChild(ProductEl(x.title)))\n    productsMenuTitle.addEventListener('click', () => {\n        const productPanel = document.getElementById('productPanel')\n        productPanel.innerHTML = ''\n        productPanel.append(_productPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].HomeView())\n    })\n    productsMenu.append(productsMenuTitle, productsEl, addProductButton, newProductForm)\n\n    return productsMenu\n}\n\nconst SidePanel = () => { \n    const sidePanel = document.createElement('div')\n    sidePanel.classList.add('sidePanel')\n    sidePanel.setAttribute('id', 'sidePanel')\n    sidePanel.append(ProductsMenu())\n\n    return sidePanel\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidePanel);\n\n//# sourceURL=webpack://todo/./src/components/sidePanel.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/utils/services.js\");\n\n\nconst openFormInPlace = (openFormButtonId, formId) => {\n    const buttonEl = document.getElementById(openFormButtonId)\n    const formEl = document.getElementById(formId)\n    buttonEl.style.display = 'none'\n    formEl.style.display = 'initial'\n    formEl.children.item(0).focus()\n}\n\nconst cancelFormInPlace = (openFormButtonId, formId) => {\n    const buttonEl = document.getElementById(openFormButtonId)\n    const formEl = document.getElementById(formId)\n    buttonEl.style.display = 'initial'\n    formEl.style.display = 'none'\n    Array.from(formEl.children).map(x => x.value = '')\n} \n\nconst submitNewProductForm = (e, ProductEl, ComponentList, formId, buttonId) => {\n    e.preventDefault()\n    const products = document.getElementById('products')\n    const productPanel = document.getElementById('productPanel')\n    const form = document.getElementById(formId)\n    const button = document.getElementById(buttonId)\n    const newProduct = {\n        title: e.target.elements[0].value,\n        id: Math.random(),\n        components: [],\n        containerTypes: []\n    }\n    _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProduct(newProduct)\n    products.append(ProductEl(e.target.elements[0].value))\n    productPanel.innerHTML = ''\n    productPanel.append(ComponentList(e.target.elements[0].value))\n    form.style.display = 'none'\n    Array.from(form.children).map(x => x.value = '')\n    button.style.display = 'initial'\n}\n\nconst submitNewComponentForm = (e, ComponentListItemEl, productTitle, componentList, formId, buttonId) => {\n    e.preventDefault()\n    const form = document.getElementById(formId)\n    const button = document.getElementById(buttonId)\n    const newComponent = {\n        title: e.target.elements[0].value,\n        id: Math.random()\n    }\n    _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addComponentToProduct(productTitle, newComponent)\n    form.remove()\n    button.remove()\n    componentList.append(\n        ComponentListItemEl(productTitle, e.target.elements[0].value, 'component'),\n        button,\n        form\n    )\n    form.style.display = 'none'\n    Array.from(form.children).map(x => x.value = '')\n    button.style.display = 'initial'\n}\n\nconst submitNewContainerTypeForm = (e, ComponentListHeaderItem, header, productPanelId, ComponentList, productTitle, formId, buttonId) => {\n    e.preventDefault()\n    const form = document.getElementById(formId)\n    const button = document.getElementById(buttonId)\n    const headerEl = document.getElementById(header)\n    const productPanel = document.getElementById(productPanelId)\n    const newContainerType = {\n        title: e.target.elements[0].value,\n        id: Math.random()\n    }\n    _services__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addContainerTypeToProduct(productTitle, newContainerType)\n    form.remove()\n    button.remove()\n    headerEl.append(\n        ComponentListHeaderItem(e.target.elements[0].value),\n        button,\n        form\n    )\n    form.style.display = 'none'\n    Array.from(form.children).map(x => x.value = '')\n    button.style.display = 'initial'\n    productPanel.innerHTML = ''\n    productPanel.append(ComponentList(productTitle))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    openFormInPlace,\n    submitNewProductForm,\n    cancelFormInPlace,\n    submitNewComponentForm,\n    submitNewContainerTypeForm\n});\n\n//# sourceURL=webpack://todo/./src/utils/handlers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ \"./src/utils/schema.js\");\n\n\n//init product for dev purposes\nconst products = []\nconst gameComponents = [\n    'Level1',\n    'Level2',\n    'Level3',\n    'Level4',\n    'Level5'\n]\nconst gameContainerTypes = [\n    'Character',\n    'Environment',\n    'Enemy',\n    'Object'\n]\nconst webAppComponents = [\n    'LandingPage',\n    'Login',\n    'Sing-up',\n    'Profile',\n    'App'\n]\nconst webAppContainerTypes = [\n    'Frontend',\n    'Backend',\n    'Documentation',\n    'Tests'\n]\n\nproducts.push(_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title:'Game', id:'1', components: gameComponents, containerTypes: gameContainerTypes}))\nproducts.push(_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title:'Webapp', id:'2', components: webAppComponents, containerTypes: webAppContainerTypes}))\nproducts.push(_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Product({title: 'Empty', id:'3', components: [], containerTypes: []}))\nlocalStorage.setItem('products', JSON.stringify(products))\nconsole.log(products)\n\nconst getProducts = () => {\n    return JSON.parse(localStorage.getItem('products'))\n}\n\nconst getProductByTitle = (title) => {\n    return getProducts().find(x => x.title === title)\n}\n\nconst createProduct = (product) => {\n    const products = JSON.parse(localStorage.getItem('products')) || []\n    products.push(product)\n    localStorage.setItem('products', JSON.stringify(products))\n}\n\nconst addComponentToProduct = (productTitle, component) => {\n    const products = getProducts()\n    const product = products.find(x => x.title === productTitle)\n    product.components.push(component.title)\n    localStorage.setItem('products', JSON.stringify(products))\n}\n\nconst addContainerTypeToProduct = (productTitle, containerType) => {\n    const products = getProducts()\n    const product = products.find(x => x.title === productTitle)\n    product.containerTypes.push(containerType.title)\n    localStorage.setItem('products', JSON.stringify(products))\n    console.log(localStorage.products)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({createProduct, getProducts, getProductByTitle, addComponentToProduct, addContainerTypeToProduct});\n\n//# sourceURL=webpack://todo/./src/utils/services.js?");

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