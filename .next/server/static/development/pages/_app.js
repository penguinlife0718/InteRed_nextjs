module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var localeSubpaths = __webpack_require__(/*! next/config */ "next/config").default().publicRuntimeConfig.localeSubpaths;

var NextI18Next = __webpack_require__(/*! next-i18next/dist/commonjs */ "./node_modules/next-i18next/dist/commonjs/index.js");

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh', 'en', 'es'],
  localeSubpaths: 'all'
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/Link.js":
/*!********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/Link.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

/*
  This `Link` component is a wrap of the standard
  NextJs `Link` component, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  This component automatically provides this functionality:
  <Link href="/product?slug=something" as="/products/something">

  Wherein `slug` is actually our i18n lang, and it gets
  pulled automatically.

  Very important: if you import `Link` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/
var removeWithNamespacesProps = function removeWithNamespacesProps(props) {
  var strippedProps = Object.assign({}, props);
  delete strippedProps.defaultNS;
  delete strippedProps.i18n;
  delete strippedProps.i18nOptions;
  delete strippedProps.lng;
  delete strippedProps.reportNS;
  delete strippedProps.t;
  delete strippedProps.tReady;
  return strippedProps;
};

var Link =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Link, _React$Component);

  function Link() {
    (0, _classCallCheck2.default)(this, Link);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments));
  }

  (0, _createClass2.default)(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          as = _this$props.as,
          children = _this$props.children,
          href = _this$props.href,
          lng = _this$props.lng,
          nextI18NextInternals = _this$props.nextI18NextInternals,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["as", "children", "href", "lng", "nextI18NextInternals"]);

      if ((0, _utils.localeSubpathRequired)(nextI18NextInternals, lng)) {
        var config = nextI18NextInternals.config;

        var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
          as: as,
          href: href
        }, lng),
            correctedAs = _lngPathCorrector.as,
            correctedHref = _lngPathCorrector.href;

        return _react.default.createElement(_link.default, (0, _extends2.default)({
          href: correctedHref,
          as: correctedAs
        }, removeWithNamespacesProps(props)), children);
      }

      return _react.default.createElement(_link.default, (0, _extends2.default)({
        href: href,
        as: as
      }, removeWithNamespacesProps(props)), children);
    }
  }]);
  return Link;
}(_react.default.Component);

Link.propTypes = {
  as: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
  nextI18NextInternals: _propTypes.default.shape({
    config: _propTypes.default.shape({
      defaultLanguage: _propTypes.default.string.isRequired,
      localeSubpaths: _propTypes.default.string.isRequired
    }).isRequired
  }).isRequired
};
Link.defaultProps = {
  as: undefined
  /*
    Usage of `withNamespaces` here is just to
    force `Link` to rerender on language change
  */

};

var _default = (0, _reactI18next.withNamespaces)()(Link);

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/NextStaticProvider.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/NextStaticProvider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var NextStaticProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NextStaticProvider, _React$Component);

  function NextStaticProvider() {
    (0, _classCallCheck2.default)(this, NextStaticProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NextStaticProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(NextStaticProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tReady = _this$props.tReady;
      return tReady ? children : null;
    }
  }]);
  return NextStaticProvider;
}(_react.default.Component);

NextStaticProvider.propTypes = {
  children: _propTypes.default.node.isRequired,
  tReady: _propTypes.default.bool.isRequired
};

var _default = (0, _reactI18next.withNamespaces)()(NextStaticProvider);

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/Trans.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/Trans.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var WrappedTrans =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(WrappedTrans, _React$Component);

  function WrappedTrans() {
    (0, _classCallCheck2.default)(this, WrappedTrans);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WrappedTrans).apply(this, arguments));
  }

  (0, _createClass2.default)(WrappedTrans, [{
    key: "render",
    value: function render() {
      var nextI18NextInternals = this.props.nextI18NextInternals;
      var i18n = nextI18NextInternals.i18n;
      return _react.default.createElement(_reactI18next.Trans, (0, _extends2.default)({}, this.props, {
        i18n: i18n
      }));
    }
  }]);
  return WrappedTrans;
}(_react.default.Component);

exports.default = WrappedTrans;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link.default;
  }
});
Object.defineProperty(exports, "NextStaticProvider", {
  enumerable: true,
  get: function get() {
    return _NextStaticProvider.default;
  }
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _Trans.default;
  }
});

var _Link = _interopRequireDefault(__webpack_require__(/*! ./Link */ "./node_modules/next-i18next/dist/commonjs/components/Link.js"));

var _NextStaticProvider = _interopRequireDefault(__webpack_require__(/*! ./NextStaticProvider */ "./node_modules/next-i18next/dist/commonjs/components/NextStaticProvider.js"));

var _Trans = _interopRequireDefault(__webpack_require__(/*! ./Trans */ "./node_modules/next-i18next/dist/commonjs/components/Trans.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/config/create-config.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/config/create-config.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _detectNode = _interopRequireDefault(__webpack_require__(/*! detect-node */ "detect-node"));

var _defaultConfig = _interopRequireDefault(__webpack_require__(/*! ./default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js"));

var deepMergeObjects = ['detection'];

var _default = function _default(userConfig) {
  if (typeof userConfig.localeSubpaths === 'boolean') {
    throw new Error('The localeSubpaths option has been changed to a string: "none", "foreign", or "all"');
  }

  var combinedConfig = (0, _objectSpread2.default)({}, _defaultConfig.default, userConfig);
  deepMergeObjects.forEach(function (obj) {
    combinedConfig[obj] = (0, _objectSpread2.default)({}, _defaultConfig.default[obj], userConfig[obj]);
  });

  if (!userConfig.fallbackLng) {
    combinedConfig.fallbackLng =  false ? undefined : false;
  }

  combinedConfig.allLanguages = combinedConfig.otherLanguages.concat([combinedConfig.defaultLanguage]);
  combinedConfig.ns = [combinedConfig.defaultNS];
  combinedConfig.whitelist = combinedConfig.allLanguages;

  if (_detectNode.default && !false) {
    var fs = eval("require('fs')");

    var path = __webpack_require__(/*! path */ "path");

    var getAllNamespaces = function getAllNamespaces(p) {
      return fs.readdirSync(p).map(function (file) {
        return file.replace('.json', '');
      });
    };

    var _combinedConfig = combinedConfig,
        allLanguages = _combinedConfig.allLanguages,
        defaultLanguage = _combinedConfig.defaultLanguage,
        localePath = _combinedConfig.localePath,
        localeStructure = _combinedConfig.localeStructure;
    combinedConfig = (0, _objectSpread2.default)({}, combinedConfig, {
      preload: allLanguages,
      ns: getAllNamespaces(path.join(process.cwd(), "".concat(localePath, "/").concat(defaultLanguage))),
      backend: {
        loadPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".json")),
        addPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".missing.json"))
      }
    });
  }

  return combinedConfig;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/config/default-config.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/config/default-config.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.localeSubpathOptions = void 0;
var localeSubpathOptions = {
  ALL: 'all',
  FOREIGN: 'foreign',
  NONE: 'none'
};
exports.localeSubpathOptions = localeSubpathOptions;
var DEFAULT_LANGUAGE = 'en';
var OTHER_LANGUAGES = [];
var DEFAULT_NAMESPACE = 'common';
var LOCALE_PATH = 'static/locales';
var LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
var LOCALE_SUBPATHS = localeSubpathOptions.NONE;
var _default = {
  defaultLanguage: DEFAULT_LANGUAGE,
  otherLanguages: OTHER_LANGUAGES,
  load: 'currentOnly',
  localePath: LOCALE_PATH,
  localeStructure: LOCALE_STRUCTURE,
  localeSubpaths: LOCALE_SUBPATHS,
  ns: [DEFAULT_NAMESPACE],
  use: [],
  defaultNS: DEFAULT_NAMESPACE,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: function format(value, _format) {
      return _format === 'uppercase' ? value.toUpperCase() : value;
    }
  },
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  ignoreRoutes: ['/_next', '/static'],
  customDetectors: [],
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'header', 'querystring'],
    caches: ['cookie']
  },
  backend: {
    loadPath: "/".concat(LOCALE_PATH, "/").concat(LOCALE_STRUCTURE, ".json"),
    addPath: "/".concat(LOCALE_PATH, "/").concat(LOCALE_STRUCTURE, ".missing.json")
  },
  react: {
    wait: true
  },
  strictMode: true,
  errorStackTraceLimit: 0
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/create-i18next-client.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/create-i18next-client.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectNode = _interopRequireDefault(__webpack_require__(/*! detect-node */ "detect-node"));

var _i18next = _interopRequireDefault(__webpack_require__(/*! i18next */ "i18next"));

var _i18nextXhrBackend = _interopRequireDefault(__webpack_require__(/*! i18next-xhr-backend */ "i18next-xhr-backend"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(__webpack_require__(/*! i18next-browser-languagedetector */ "i18next-browser-languagedetector"));

var i18n = _i18next.default.default ? _i18next.default.default : _i18next.default;
i18n.nsFromReactTree = [];

var _default = function _default(config) {
  if (!i18n.isInitialized) {
    if (_detectNode.default) {
      var i18nextNodeBackend = eval("require('i18next-node-fs-backend')");
      var i18nextMiddleware = eval("require('i18next-express-middleware')");
      i18n.use(i18nextNodeBackend);

      if (config.serverLanguageDetection) {
        var serverDetectors = new i18nextMiddleware.LanguageDetector();
        config.customDetectors.forEach(function (detector) {
          return serverDetectors.addDetector(detector);
        });
        i18n.use(serverDetectors);
      }
    } else {
      i18n.use(_i18nextXhrBackend.default);

      if (config.browserLanguageDetection) {
        var browserDetectors = new _i18nextBrowserLanguagedetector.default();
        config.customDetectors.forEach(function (detector) {
          return browserDetectors.addDetector(detector);
        });
        i18n.use(browserDetectors);
      }
    }

    config.use.forEach(function (x) {
      return i18n.use(x);
    });
    i18n.init(config);
  }

  return i18n;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/hocs/app-with-translation.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/hocs/app-with-translation.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

var _defaultConfig = __webpack_require__(/*! ../config/default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js");

var _components = __webpack_require__(/*! ../components */ "./node_modules/next-i18next/dist/commonjs/components/index.js");

function _default(WrappedComponent) {
  var config = this.config,
      consoleMessage = this.consoleMessage,
      i18n = this.i18n;

  var AppWithTranslation =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(AppWithTranslation, _React$Component);

    function AppWithTranslation(props) {
      var _this;

      (0, _classCallCheck2.default)(this, AppWithTranslation);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AppWithTranslation).call(this, props));

      if (false) {}

      return _this;
    }

    (0, _createClass2.default)(AppWithTranslation, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            initialLanguage = _this$props.initialLanguage,
            initialI18nStore = _this$props.initialI18nStore,
            i18nServerInstance = _this$props.i18nServerInstance;
        return _react.default.createElement(_reactI18next.I18nextProvider, {
          i18n: i18nServerInstance || i18n,
          initialLanguage: initialLanguage,
          initialI18nStore: initialI18nStore
        }, _react.default.createElement(_components.NextStaticProvider, null, _react.default.createElement(WrappedComponent, this.props)));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(ctx) {
          var wrappedComponentProps, req, initialI18nStore, initialLanguage, i18nServerInstance, namespacesRequired, fallbackLng;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  wrappedComponentProps = {
                    pageProps: {}
                  };

                  if (!WrappedComponent.getInitialProps) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return WrappedComponent.getInitialProps(ctx);

                case 4:
                  wrappedComponentProps = _context.sent;

                case 5:
                  if (typeof wrappedComponentProps.pageProps === 'undefined') {
                    consoleMessage('error', 'If you have a getInitialProps method in your custom _app.js file, you must explicitly return pageProps. For more information, see: https://github.com/zeit/next.js#custom-app');
                  } // Initiate vars to return


                  req = ctx.ctx.req;
                  initialI18nStore = {};
                  initialLanguage = null;
                  i18nServerInstance = null; // Step 1: Determine initial language

                  if (!(req && req.i18n)) {
                    _context.next = 16;
                    break;
                  }

                  initialLanguage = (0, _utils.lngFromReq)(req); // Perform a lang change in case we're not on the right lang

                  _context.next = 14;
                  return req.i18n.changeLanguage(initialLanguage);

                case 14:
                  _context.next = 17;
                  break;

                case 16:
                  if (Array.isArray(i18n.languages) && i18n.languages.length > 0) {
                    initialLanguage = i18n.language;
                  }

                case 17:
                  // Step 2: Determine namespace dependencies
                  namespacesRequired = config.ns;

                  if (Array.isArray(wrappedComponentProps.pageProps.namespacesRequired)) {
                    namespacesRequired = wrappedComponentProps.pageProps.namespacesRequired;
                  } else {
                    consoleMessage('warn', "You have not declared a namespacesRequired array on your page-level component: ".concat(ctx.Component.displayName || ctx.Component.name || 'Component', ". This will cause all namespaces to be sent down to the client, possibly negatively impacting the performance of your app. For more info, see: https://github.com/isaachinman/next-i18next#4-declaring-namespace-dependencies"));
                  } // We must always send down the defaultNS, otherwise
                  // the client will trigger a request for it and issue
                  // the "Did not expect server HTML to contain a <h1> in <div>"
                  // error


                  if (!namespacesRequired.includes(config.defaultNS)) {
                    namespacesRequired.push(config.defaultNS);
                  } // Step 3: Perform data fetching, depending on environment


                  if (!(req && req.i18n)) {
                    _context.next = 27;
                    break;
                  }

                  // Initialise the store with only the initialLanguage and
                  // necessary namespaces needed to render this specific tree
                  fallbackLng = config.fallbackLng;
                  initialI18nStore[initialLanguage] = {};

                  if (fallbackLng) {
                    initialI18nStore[fallbackLng] = {};
                  }

                  namespacesRequired.forEach(function (ns) {
                    initialI18nStore[initialLanguage][ns] = (req.i18n.services.resourceStore.data[initialLanguage] || {})[ns] || {};

                    if (fallbackLng) {
                      initialI18nStore[fallbackLng][ns] = (req.i18n.services.resourceStore.data[fallbackLng] || {})[ns] || {};
                    }
                  });
                  _context.next = 31;
                  break;

                case 27:
                  if (!(Array.isArray(i18n.languages) && i18n.languages.length > 0)) {
                    _context.next = 31;
                    break;
                  }

                  _context.next = 30;
                  return Promise.all(namespacesRequired.filter(function (ns) {
                    return !i18n.hasResourceBundle(i18n.languages[0], ns);
                  }).map(function (ns) {
                    return new Promise(function (resolve) {
                      return i18n.loadNamespaces(ns, function () {
                        return resolve();
                      });
                    });
                  }));

                case 30:
                  initialI18nStore = i18n.store.data;

                case 31:
                  // Step 4: Overwrite i18n.toJSON method to be able to serialize the instance
                  if (req && req.i18n) {
                    req.i18n.toJSON = function () {
                      return null;
                    };

                    i18nServerInstance = req.i18n;
                  } // `pageProps` will get serialized automatically by NextJs


                  return _context.abrupt("return", (0, _objectSpread2.default)({
                    initialI18nStore: initialI18nStore,
                    initialLanguage: initialLanguage,
                    i18nServerInstance: i18nServerInstance
                  }, wrappedComponentProps));

                case 33:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);
    return AppWithTranslation;
  }(_react.default.Component);

  return (0, _hoistNonReactStatics.default)((0, _router.withRouter)(AppWithTranslation), WrappedComponent, {
    getInitialProps: true
  });
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/hocs/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/hocs/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "appWithTranslation", {
  enumerable: true,
  get: function get() {
    return _appWithTranslation.default;
  }
});
Object.defineProperty(exports, "withInternals", {
  enumerable: true,
  get: function get() {
    return _withInternals.default;
  }
});

var _appWithTranslation = _interopRequireDefault(__webpack_require__(/*! ./app-with-translation */ "./node_modules/next-i18next/dist/commonjs/hocs/app-with-translation.js"));

var _withInternals = _interopRequireDefault(__webpack_require__(/*! ./with-internals */ "./node_modules/next-i18next/dist/commonjs/hocs/with-internals.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/hocs/with-internals.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/hocs/with-internals.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _default = function _default(WrappedComponent, config) {
  var withInternals =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(withInternals, _React$Component);

    function withInternals() {
      (0, _classCallCheck2.default)(this, withInternals);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(withInternals).apply(this, arguments));
    }

    (0, _createClass2.default)(withInternals, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, this.props, {
          nextI18NextInternals: config
        }));
      }
    }]);
    return withInternals;
  }(_react.default.Component);

  withInternals.displayName = "withnextI18NextInternals(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
  return withInternals;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var _createConfig = _interopRequireDefault(__webpack_require__(/*! ./config/create-config */ "./node_modules/next-i18next/dist/commonjs/config/create-config.js"));

var _createI18nextClient = _interopRequireDefault(__webpack_require__(/*! ./create-i18next-client */ "./node_modules/next-i18next/dist/commonjs/create-i18next-client.js"));

var _hocs = __webpack_require__(/*! ./hocs */ "./node_modules/next-i18next/dist/commonjs/hocs/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

var _components = __webpack_require__(/*! ./components */ "./node_modules/next-i18next/dist/commonjs/components/index.js");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next-i18next/dist/commonjs/router/index.js");

var NextI18Next = function NextI18Next(userConfig) {
  (0, _classCallCheck2.default)(this, NextI18Next);
  this.config = (0, _createConfig.default)(userConfig);
  this.consoleMessage = _utils.consoleMessage.bind(this);
  /* Validation */

  if (this.config.otherLanguages.length <= 0) {
    throw new Error('To properly initialise a next-i18next instance you must provide one or more locale codes in config.otherLanguages.');
  }

  this.i18n = (0, _createI18nextClient.default)(this.config);
  this.appWithTranslation = _hocs.appWithTranslation.bind(this);
  this.withNamespaces = _reactI18next.withNamespaces;
  var nextI18NextInternals = {
    config: this.config,
    i18n: this.i18n
  };
  this.Trans = (0, _hocs.withInternals)(_components.Trans, nextI18NextInternals);
  this.Link = (0, _hocs.withInternals)(_components.Link, nextI18NextInternals);
  this.Router = (0, _router.wrapRouter)(nextI18NextInternals);
};

exports.default = NextI18Next;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/router/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/router/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "wrapRouter", {
  enumerable: true,
  get: function get() {
    return _wrapRouter.default;
  }
});

var _wrapRouter = _interopRequireDefault(__webpack_require__(/*! ./wrap-router */ "./node_modules/next-i18next/dist/commonjs/router/wrap-router.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/router/wrap-router.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/router/wrap-router.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

/*
  This `Router` is a wrap of the standard
  NextJs `Router`, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  Very important: if you import `Router` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/
var propertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'events'];
var coreMethods = ['reload', 'back', 'beforePopState', 'ready', 'prefetch'];
var wrappedMethods = ['push', 'replace'];

function _default(nextI18NextInternals) {
  var Router = {};
  propertyFields.forEach(function (field) {
    Object.defineProperty(Router, field, {
      get: function get() {
        return _router.default[field];
      }
    });
  });
  coreMethods.forEach(function (method) {
    Router[method] = function () {
      return _router.default[method].apply(_router.default, arguments);
    };
  });
  wrappedMethods.forEach(function (method) {
    Router[method] = function (path, as, options) {
      var config = nextI18NextInternals.config,
          i18n = nextI18NextInternals.i18n;

      if ((0, _utils.localeSubpathRequired)(nextI18NextInternals, i18n.languages[0])) {
        var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
          as: as,
          href: path
        }, i18n.languages[0]),
            correctedAs = _lngPathCorrector.as,
            correctedHref = _lngPathCorrector.href;

        return _router.default[method](correctedHref, correctedAs, options);
      }

      return _router.default[method](path, as, options);
    };
  });
  return Router;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/console-message.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/console-message.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createConsoleLog;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

/* eslint-disable no-console */

/**
  * @readonly
  * @enum {String} A console.log type
  */
var messageTypes = {
  error: 'error',
  info: 'info',
  warn: 'warn'
};
Object.freeze(messageTypes);
/**
 *  Logs a custom message to console
 * @param {PrettyError} PrettyError
 * @param {messageTypes} messageType One of: error, warn or info
 * @param {String} message
 */

function logMessage(PrettyError, messageType, message) {
  var capitalize = function capitalize(str) {
    return str.replace(str[0], str[0].toUpperCase());
  };

  var pe = new PrettyError(); // Create a new empty error

  var newLog = new Error(); // Set the new error message

  newLog.message = message;

  if (Object.values(messageTypes).includes(messageType)) {
    newLog.name = capitalize(messageTypes[messageType]);
    console[messageType](pe.render(newLog));
  } else {
    newLog.name = capitalize(messageTypes.info);
    console.info(pe.render(newLog));
  }
}
/**
 * Create a console log with specified log type, a message and options
 * @param {messageTypes} messageType One of: error, warn or info
 * @param {String} message
 * @param {Object} options
 */


function createConsoleLog(messageType, message) {
  var _this$config = this.config,
      errorStackTraceLimit = _this$config.errorStackTraceLimit,
      strictMode = _this$config.strictMode;
  var prevStackLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = errorStackTraceLimit;
  var util;
  var PrettyError;
  var pe;

  if (!strictMode) {
    return;
  }

  if (true) {
    util = __webpack_require__(/*! util */ "util");
    PrettyError = __webpack_require__(/*! pretty-error */ "pretty-error");
    pe = new PrettyError();
  } else {}
  /* Temporarily set the stacktrace to 0 or errorStackTraceLimit,
     in order to only display a message */


  Error.errorStackTraceLimit = errorStackTraceLimit; // Make room for new message

  console.log(); // Make sure the message is a string

  if (typeof message !== 'string') {
    var metaError = new Error();
    metaError.name = 'Meta';
    metaError.message = "Param message needs to be of type: string. Instead, '".concat((0, _typeof2.default)(message), "' was provided.\n\n------------------------------------------------\n\n\u200B\n        The provided ").concat((0, _typeof2.default)(message), ":\n\n\u200B\n          ").concat(util.inspect(message, true, 8, true), "\n\u200B\n------------------------------------------------\n\n    ");
    console.error(pe.render(metaError));
    return;
  } // Log the message to console


  logMessage(PrettyError, messageType, message); // Reset stack limit

  Error.stackTraceLimit = prevStackLimit;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/force-trailing-slash.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/force-trailing-slash.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _redirectWithoutCache = _interopRequireDefault(__webpack_require__(/*! ./redirect-without-cache */ "./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js"));

var _default = function _default(req, res, lng) {
  var _parse = (0, _url.parse)(req.url),
      pathname = _parse.pathname,
      search = _parse.search;

  (0, _redirectWithoutCache.default)(res, pathname.replace("/".concat(lng), "/".concat(lng, "/")) + (search || ''));
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "consoleMessage", {
  enumerable: true,
  get: function get() {
    return _consoleMessage.default;
  }
});
Object.defineProperty(exports, "forceTrailingSlash", {
  enumerable: true,
  get: function get() {
    return _forceTrailingSlash.default;
  }
});
Object.defineProperty(exports, "lngFromReq", {
  enumerable: true,
  get: function get() {
    return _lngFromReq.default;
  }
});
Object.defineProperty(exports, "lngPathCorrector", {
  enumerable: true,
  get: function get() {
    return _lngPathCorrector.default;
  }
});
Object.defineProperty(exports, "lngPathDetector", {
  enumerable: true,
  get: function get() {
    return _lngPathDetector.default;
  }
});
Object.defineProperty(exports, "localeSubpathRequired", {
  enumerable: true,
  get: function get() {
    return _localeSubpathRequired.default;
  }
});
Object.defineProperty(exports, "redirectWithoutCache", {
  enumerable: true,
  get: function get() {
    return _redirectWithoutCache.default;
  }
});

var _consoleMessage = _interopRequireDefault(__webpack_require__(/*! ./console-message.js */ "./node_modules/next-i18next/dist/commonjs/utils/console-message.js"));

var _forceTrailingSlash = _interopRequireDefault(__webpack_require__(/*! ./force-trailing-slash */ "./node_modules/next-i18next/dist/commonjs/utils/force-trailing-slash.js"));

var _lngFromReq = _interopRequireDefault(__webpack_require__(/*! ./lng-from-req */ "./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js"));

var _lngPathCorrector = _interopRequireDefault(__webpack_require__(/*! ./lng-path-corrector */ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-corrector.js"));

var _lngPathDetector = _interopRequireDefault(__webpack_require__(/*! ./lng-path-detector */ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-detector.js"));

var _localeSubpathRequired = _interopRequireDefault(__webpack_require__(/*! ./locale-subpath-required */ "./node_modules/next-i18next/dist/commonjs/utils/locale-subpath-required.js"));

var _redirectWithoutCache = _interopRequireDefault(__webpack_require__(/*! ./redirect-without-cache */ "./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(req) {
  if (!req.i18n) {
    return null;
  }

  var _req$i18n$options = req.i18n.options,
      allLanguages = _req$i18n$options.allLanguages,
      defaultLanguage = _req$i18n$options.defaultLanguage,
      fallbackLng = _req$i18n$options.fallbackLng;
  var fallback = fallbackLng || defaultLanguage;

  if (!req.i18n.languages) {
    return fallback;
  }

  var language = req.i18n.languages.find(function (l) {
    return allLanguages.includes(l);
  }) || fallback;
  return language;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-corrector.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lng-path-corrector.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _url = __webpack_require__(/*! url */ "url");

var _defaultConfig = __webpack_require__(/*! ../config/default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js");

var parseAs = function parseAs(originalAs, href) {
  var asType = (0, _typeof2.default)(originalAs);
  var as;

  if (asType === 'undefined') {
    as = (0, _url.format)(href, {
      unicode: true
    });
  } else if (asType === 'string') {
    as = originalAs;
  } else {
    throw new Error("'as' type must be 'string', but it is ".concat(asType));
  }

  return as;
};

var parseHref = function parseHref(originalHref) {
  var hrefType = (0, _typeof2.default)(originalHref);
  var href;

  if (hrefType === 'string') {
    href = (0, _url.parse)(originalHref, true
    /* parseQueryString */
    );
  } else if (hrefType === 'object') {
    href = (0, _objectSpread2.default)({}, originalHref);
    href.query = originalHref.query ? (0, _objectSpread2.default)({}, originalHref.query) : {};
  } else {
    throw new Error("'href' type must be either 'string' or 'object', but it is ".concat(hrefType));
  }

  return href;
};

var _default = function _default(config, currentRoute, currentLanguage) {
  var defaultLanguage = config.defaultLanguage,
      allLanguages = config.allLanguages,
      localeSubpaths = config.localeSubpaths;
  var originalAs = currentRoute.as,
      originalHref = currentRoute.href;

  if (!allLanguages.includes(currentLanguage)) {
    throw new Error('Invalid configuration: Current language is not included in all languages array');
  }

  var href = parseHref(originalHref);
  var as = parseAs(originalAs, href); // url.format prefers the 'url.search' string over the 'url.query' object,
  // so remove the search string to ensure the query object is used

  delete href.search;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = allLanguages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var lng = _step.value;

      if (as.startsWith("/".concat(lng, "/"))) {
        as = as.replace("/".concat(lng, "/"), '/');
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (currentLanguage !== defaultLanguage || localeSubpaths === _defaultConfig.localeSubpathOptions.ALL) {
    var basePath = "".concat(href.protocol, "//").concat(href.host);
    var currentAs = as.replace(basePath, '');
    as = "/".concat(currentLanguage).concat(currentAs);
    href.query.lng = currentLanguage;
  }

  return {
    as: as,
    href: href
  };
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-detector.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lng-path-detector.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lngFromReq = _interopRequireDefault(__webpack_require__(/*! ./lng-from-req */ "./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js"));

var _redirectWithoutCache = _interopRequireDefault(__webpack_require__(/*! ./redirect-without-cache */ "./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js"));

var _defaultConfig = __webpack_require__(/*! ../config/default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js");

var _default = function _default(req, res) {
  if (req.i18n) {
    var language = (0, _lngFromReq.default)(req);
    var _req$i18n$options = req.i18n.options,
        allLanguages = _req$i18n$options.allLanguages,
        defaultLanguage = _req$i18n$options.defaultLanguage,
        localeSubpaths = _req$i18n$options.localeSubpaths;
    var languageChanged = false;
    /*
      If a user has hit a subpath which does not
      match their language, give preference to
      the path, and change user language.
    */

    allLanguages.forEach(function (lng) {
      if (req.url.startsWith("/".concat(lng, "/")) && language !== lng) {
        req.i18n.changeLanguage(lng);
        languageChanged = true;
      }
    });
    /*
      If a user has hit the root path and their
      language is not set to default, give
      preference to the language and redirect
      their path.
    */

    var languageNeedsSubpath = localeSubpaths === _defaultConfig.localeSubpathOptions.FOREIGN && language !== defaultLanguage || localeSubpaths === _defaultConfig.localeSubpathOptions.ALL;

    if (!languageChanged && languageNeedsSubpath && !req.url.startsWith("/".concat(language, "/"))) {
      allLanguages.forEach(function (lng) {
        if (req.url.startsWith("/".concat(lng, "/"))) {
          req.url = req.url.replace("/".concat(lng, "/"), '/');
        }
      });
      (0, _redirectWithoutCache.default)(res, req.url.replace('/', "/".concat(language, "/")));
    }
    /*
      If a user has a default language prefix
      in their URL, strip it.
    */


    if (language === defaultLanguage && req.url.startsWith("/".concat(defaultLanguage, "/")) && localeSubpaths !== _defaultConfig.localeSubpathOptions.ALL) {
      (0, _redirectWithoutCache.default)(res, req.url.replace("/".concat(defaultLanguage, "/"), '/'));
    }
  }
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/locale-subpath-required.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/locale-subpath-required.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultConfig = __webpack_require__(/*! ../config/default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js");

var _default = function _default(nextI18NextInternals, lng) {
  var _nextI18NextInternals = nextI18NextInternals.config,
      defaultLanguage = _nextI18NextInternals.defaultLanguage,
      localeSubpaths = _nextI18NextInternals.localeSubpaths;

  if (lng) {
    if (localeSubpaths === _defaultConfig.localeSubpathOptions.NONE) {
      return false;
    }

    if (localeSubpaths === _defaultConfig.localeSubpathOptions.FOREIGN && lng !== defaultLanguage) {
      return true;
    }

    if (localeSubpaths === _defaultConfig.localeSubpathOptions.ALL) {
      return true;
    }
  }

  return false;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(res, redirectLocation) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  res.redirect(302, redirectLocation);
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return utils_1.loadGetInitialProps(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/I18nextProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/I18nextProvider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nextProvider = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

var I18nextProvider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(I18nextProvider, _Component);

  function I18nextProvider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, I18nextProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(I18nextProvider).call(this, props)); // nextjs / SSR: getting data from next.js or other ssr stack

    (0, _utils.initSSR)(props, true);
    return _this;
  }

  (0, _createClass2.default)(I18nextProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          i18n = _this$props.i18n,
          defaultNS = _this$props.defaultNS,
          reportNS = _this$props.reportNS;
      return _react.default.createElement(_context.I18nContext.Provider, {
        value: {
          i18n: i18n,
          defaultNS: defaultNS,
          reportNS: reportNS,
          lng: i18n && i18n.language,
          t: i18n && i18n.t.bind(i18n)
        }
      }, children);
    }
  }]);
  return I18nextProvider;
}(_react.Component);

exports.I18nextProvider = I18nextProvider;

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/Interpolate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/Interpolate.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interpolate = exports.InterpolateComponent = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

var InterpolateComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(InterpolateComponent, _Component);

  function InterpolateComponent(props) {
    var _this;

    (0, _classCallCheck2.default)(this, InterpolateComponent);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InterpolateComponent).call(this, props));
    (0, _utils.deprecated)('Interpolate is deprecated and will be removed in the next major version (v9.0.0). Usage can be replaced by the "Trans" component');
    return _this;
  }

  (0, _createClass2.default)(InterpolateComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          i18n = _this$props.i18n,
          t = _this$props.t,
          i18nKey = _this$props.i18nKey,
          options = _this$props.options,
          className = _this$props.className,
          style = _this$props.style;
      var parent = this.props.parent || 'span';
      var REGEXP = this.props.regexp || i18n.services.interpolator.regexp; // Set to true if you want to use raw HTML in translation values
      // See https://github.com/i18next/react-i18next/issues/189

      var useDangerouslySetInnerHTML = this.props.useDangerouslySetInnerHTML || false;
      var dangerouslySetInnerHTMLPartElement = this.props.dangerouslySetInnerHTMLPartElement || 'span';
      var tOpts = (0, _objectSpread2.default)({}, {}, options, {
        interpolation: {
          prefix: '#$?',
          suffix: '?$#'
        }
      });
      var format = t(i18nKey, tOpts);
      if (!format || typeof format !== 'string') return _react.default.createElement('noscript', null);
      var children = [];

      var handleFormat = function handleFormat(key, props) {
        if (key.indexOf(i18n.options.interpolation.formatSeparator) < 0) {
          if (props[key] === undefined) i18n.services.logger.warn("interpolator: missed to pass in variable ".concat(key, " for interpolating ").concat(format));
          return props[key];
        }

        var p = key.split(i18n.options.interpolation.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(i18n.options.interpolation.formatSeparator).trim();
        if (props[k] === undefined) i18n.services.logger.warn("interpolator: missed to pass in variable ".concat(k, " for interpolating ").concat(format));
        return i18n.options.interpolation.format(props[k], f, i18n.language);
      };

      format.split(REGEXP).reduce(function (memo, match, index) {
        var child;

        if (index % 2 === 0) {
          if (match.length === 0) return memo;

          if (useDangerouslySetInnerHTML) {
            child = _react.default.createElement(dangerouslySetInnerHTMLPartElement, {
              dangerouslySetInnerHTML: {
                __html: match
              }
            });
          } else {
            child = match;
          }
        } else {
          child = handleFormat(match, _this2.props);
        }

        memo.push(child);
        return memo;
      }, children);
      var additionalProps = {};

      if (i18n.options.react && i18n.options.react.exposeNamespace) {
        var ns = typeof t.ns === 'string' ? t.ns : t.ns[0];

        if (i18nKey && i18n.options.nsSeparator && i18nKey.indexOf(i18n.options.nsSeparator) > -1) {
          var parts = i18nKey.split(i18n.options.nsSeparator);
          ns = parts[0];
        }

        if (t.ns) additionalProps['data-i18next-options'] = JSON.stringify({
          ns: ns
        });
      }

      if (className) additionalProps.className = className;
      if (style) additionalProps.style = style;
      return _react.default.createElement.apply(this, [parent, additionalProps].concat(children));
    }
  }]);
  return InterpolateComponent;
}(_react.Component);

exports.InterpolateComponent = InterpolateComponent;
var Interpolate = (0, _context.withI18n)()(InterpolateComponent);
exports.Interpolate = Interpolate;

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/NamespacesConsumer.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/NamespacesConsumer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18n = exports.NamespacesConsumer = exports.NamespacesConsumerComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

var removedIsInitialSSR = false;

var NamespacesConsumerComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(NamespacesConsumerComponent, _Component);

  function NamespacesConsumerComponent(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NamespacesConsumerComponent);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NamespacesConsumerComponent).call(this, props));

    if (!props.i18n) {
      _this.state = {
        i18nLoadedAt: null,
        ready: false
      };
      return (0, _possibleConstructorReturn2.default)(_this, (0, _utils.warnOnce)('You will need pass in an i18next instance either by props, using I18nextProvider or by using i18nextReactModule. Learn more https://react.i18next.com/components/overview#getting-the-i-18-n-function-into-the-flow'));
    }

    if (typeof props.i18n.then === 'function') {
      _this.state = {
        i18nLoadedAt: null,
        ready: false
      };
      return (0, _possibleConstructorReturn2.default)(_this, (0, _utils.warnOnce)('Detected a promise instead of an i18next instance. Probably you passed the return value of the i18next.init() function, this is not possible anymore with v13 of i18next. Just pass in the i18next instance directly.'));
    } // nextjs / SSR: getting data from next.js or other ssr stack


    (0, _utils.initSSR)(props); // provider SSR: data was set in provider and ssr flag was set

    if (props.i18n.options && props.i18n.options.isInitialSSR) {
      props.i18nOptions.wait = false;
    } // reportNS if needed for SSR


    var namespaces = _this.getNamespaces();

    if (props.reportNS) {
      namespaces.forEach(props.reportNS);
    } // check if we could flag this ready already as all is loaded


    var language = props.i18n.languages && props.i18n.languages[0];
    var ready = !!language && namespaces.every(function (ns) {
      return props.i18n.hasResourceBundle(language, ns);
    });
    _this.state = {
      i18nLoadedAt: null,
      ready: ready
    };
    _this.t = _this.getI18nTranslate();
    _this.onI18nChanged = _this.onI18nChanged.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.getI18nTranslate = _this.getI18nTranslate.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.namespaces = _this.getNamespaces.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(NamespacesConsumerComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadNamespaces();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Note that dynamically loading additional namespaces after the initial mount will not block rendering – even if the `wait` option is true.
      if (this.props.ns && prevProps.ns !== this.props.ns) this.loadNamespaces();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      var _this$props = this.props,
          i18n = _this$props.i18n,
          i18nOptions = _this$props.i18nOptions;
      this.mounted = false;

      if (this.onI18nChanged) {
        if (i18nOptions.bindI18n) {
          var p = i18nOptions.bindI18n.split(' ');
          p.forEach(function (f) {
            return i18n.off(f, _this2.onI18nChanged);
          });
        }

        if (i18nOptions.bindStore) {
          var _p = i18nOptions.bindStore.split(' ');

          _p.forEach(function (f) {
            return i18n.store && i18n.store.off(f, _this2.onI18nChanged);
          });
        }
      }
    }
  }, {
    key: "onI18nChanged",
    value: function onI18nChanged() {
      var i18nOptions = this.props.i18nOptions;
      var ready = this.state.ready;
      if (!this.mounted) return;
      if (!ready && i18nOptions.omitBoundRerender) return;
      this.t = this.getI18nTranslate();
      this.setState({
        i18nLoadedAt: new Date()
      }); // rerender
    }
  }, {
    key: "getI18nTranslate",
    value: function getI18nTranslate() {
      var _this$props2 = this.props,
          i18n = _this$props2.i18n,
          i18nOptions = _this$props2.i18nOptions;
      var namespaces = this.getNamespaces();
      return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces && namespaces.length ? namespaces[0] : 'translation');
    }
  }, {
    key: "getNamespaces",
    value: function getNamespaces() {
      var _this$props3 = this.props,
          i18n = _this$props3.i18n,
          ns = _this$props3.ns,
          defaultNS = _this$props3.defaultNS;
      var namespaces = typeof ns === 'function' ? ns(this.props) : ns || defaultNS || i18n.options && i18n.options.defaultNS;
      return typeof namespaces === 'string' ? [namespaces] : namespaces || [];
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces() {
      var _this3 = this;

      var _this$props4 = this.props,
          i18n = _this$props4.i18n,
          i18nOptions = _this$props4.i18nOptions;
      var ready = this.state.ready;

      var bind = function bind() {
        if (i18nOptions.bindI18n && i18n) i18n.on(i18nOptions.bindI18n, _this3.onI18nChanged);
        if (i18nOptions.bindStore && i18n.store) i18n.store.on(i18nOptions.bindStore, _this3.onI18nChanged);
      };

      this.mounted = true;
      i18n.loadNamespaces(this.getNamespaces(), function () {
        var handleReady = function handleReady() {
          if (_this3.mounted && !ready) {
            _this3.setState({
              ready: true
            }, function () {
              if (!i18nOptions.wait) _this3.onI18nChanged();
            });
          }

          if (i18nOptions.wait && _this3.mounted) bind();
        };

        if (i18n.isInitialized) {
          handleReady();
        } else {
          var initialized = function initialized() {
            // due to emitter removing issue in i18next we need to delay remove
            setTimeout(function () {
              i18n.off('initialized', initialized);
            }, 1000);
            handleReady();
          };

          i18n.on('initialized', initialized);
        }
      });
      if (!i18nOptions.wait) bind();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          i18n = _this$props5.i18n,
          defaultNS = _this$props5.defaultNS,
          reportNS = _this$props5.reportNS,
          i18nOptions = _this$props5.i18nOptions;

      var _ref = this.state || {
        ready: false
      },
          ready = _ref.ready; // fallback if state is null...unknown edge case https://github.com/i18next/react-i18next/issues/615


      var t = this.t;
      if (!ready && i18nOptions.wait) return null; // remove ssr flag set by provider - first render was done from now on wait if set to wait

      if (i18n.options && i18n.options.isInitialSSR && !removedIsInitialSSR) {
        removedIsInitialSSR = true;
        setTimeout(function () {
          delete i18n.options.isInitialSSR;
        }, 100);
      }

      return _react.default.createElement(_context.I18nContext.Provider, {
        value: {
          i18n: i18n,
          t: t,
          defaultNS: defaultNS,
          reportNS: reportNS,
          lng: i18n && i18n.language
        }
      }, children(this.t, {
        i18n: i18n,
        t: t,
        lng: i18n.language,
        ready: ready
      }));
    }
  }]);
  return NamespacesConsumerComponent;
}(_react.Component);

exports.NamespacesConsumerComponent = NamespacesConsumerComponent;
var NamespacesConsumer = (0, _context.withI18n)()(NamespacesConsumerComponent);
exports.NamespacesConsumer = NamespacesConsumer;
var I18n = NamespacesConsumer;
exports.I18n = I18n;

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/Trans.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/Trans.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trans = exports.TransComponent = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _htmlParseStringify = _interopRequireDefault(__webpack_require__(/*! html-parse-stringify2 */ "html-parse-stringify2"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function hasChildren(node) {
  return node && (node.children || node.props && node.props.children);
}

function getChildren(node) {
  return node && node.children ? node.children : node.props && node.props.children;
}

function nodesToString(mem, children, index) {
  if (!children) return '';
  if (Object.prototype.toString.call(children) !== '[object Array]') children = [children];
  children.forEach(function (child, i) {
    // const isElement = React.isValidElement(child);
    // const elementKey = `${index !== 0 ? index + '-' : ''}${i}:${typeof child.type === 'function' ? child.type.name : child.type || 'var'}`;
    var elementKey = "".concat(i);

    if (typeof child === 'string') {
      mem = "".concat(mem).concat(child);
    } else if (hasChildren(child)) {
      mem = "".concat(mem, "<").concat(elementKey, ">").concat(nodesToString('', getChildren(child), i + 1), "</").concat(elementKey, ">");
    } else if (_react.default.isValidElement(child)) {
      mem = "".concat(mem, "<").concat(elementKey, "></").concat(elementKey, ">");
    } else if ((0, _typeof2.default)(child) === 'object') {
      var clone = (0, _objectSpread2.default)({}, child);
      var format = clone.format;
      delete clone.format;
      var keys = Object.keys(clone);

      if (format && keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], ", ").concat(format, "}}");
      } else if (keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], "}}");
      } else {
        // not a valid interpolation object (can only contain one value plus format)
        (0, _utils.warn)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      (0, _utils.warn)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return mem;
}

function renderNodes(children, targetString, i18n) {
  if (targetString === '') return [];
  if (!children) return [targetString]; // v2 -> interpolates upfront no need for "some <0>{{var}}</0>"" -> will be just "some {{var}}" in translation file

  var data = {};

  function getData(childs) {
    if (Object.prototype.toString.call(childs) !== '[object Array]') childs = [childs];
    childs.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0, _typeof2.default)(child) === 'object' && !_react.default.isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  targetString = i18n.services.interpolator.interpolate(targetString, data, i18n.language); // parse ast from string with additional wrapper tag
  // -> avoids issues in parser removing prepending text nodes

  var ast = _htmlParseStringify.default.parse("<0>".concat(targetString, "</0>"));

  function mapAST(reactNodes, astNodes) {
    if (Object.prototype.toString.call(reactNodes) !== '[object Array]') reactNodes = [reactNodes];
    if (Object.prototype.toString.call(astNodes) !== '[object Array]') astNodes = [astNodes];
    return astNodes.reduce(function (mem, node, i) {
      if (node.type === 'tag') {
        var child = reactNodes[parseInt(node.name, 10)] || {};

        var isElement = _react.default.isValidElement(child);

        if (typeof child === 'string') {
          mem.push(child);
        } else if (hasChildren(child)) {
          var inner = mapAST(getChildren(child), node.children);
          if (child.dummy) child.children = inner; // needed on preact!

          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          }), inner));
        } else if ((0, _typeof2.default)(child) === 'object' && !isElement) {
          var content = node.children[0] ? node.children[0].content : null; // v1
          // as interpolation was done already we just have a regular content node
          // in the translation AST while having an object in reactNodes
          // -> push the content no need to interpolate again

          if (content) mem.push(content);
        } else {
          mem.push(child);
        }
      } else if (node.type === 'text') {
        mem.push(node.content);
      }

      return mem;
    }, []);
  } // call mapAST with having react nodes nested into additional node like
  // we did for the string ast from translation
  // return the children of that extra node to get expected result


  var result = mapAST([{
    dummy: true,
    children: children
  }], ast);
  return getChildren(result[0]);
}

var TransComponent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TransComponent, _React$Component);

  function TransComponent() {
    (0, _classCallCheck2.default)(this, TransComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TransComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(TransComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          count = _this$props.count,
          parent = _this$props.parent,
          i18nKey = _this$props.i18nKey,
          tOptions = _this$props.tOptions,
          values = _this$props.values,
          defaults = _this$props.defaults,
          components = _this$props.components,
          namespace = _this$props.ns,
          i18n = _this$props.i18n,
          tFromContextAndProps = _this$props.t,
          defaultNS = _this$props.defaultNS,
          reportNS = _this$props.reportNS,
          lng = _this$props.lng,
          i18nOptions = _this$props.i18nOptions,
          additionalProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "defaultNS", "reportNS", "lng", "i18nOptions"]);
      var t = tFromContextAndProps || i18n.t.bind(i18n);
      var reactI18nextOptions = i18n.options && i18n.options.react || {};
      var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
      var defaultValue = defaults || nodesToString('', children, 0) || reactI18nextOptions.transEmptyNodeValue;
      var hashTransKey = reactI18nextOptions.hashTransKey;
      var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
      var interpolationOverride = values ? {} : {
        interpolation: {
          prefix: '#$?',
          suffix: '?$#'
        }
      };
      var translation = key ? t(key, (0, _objectSpread2.default)({}, tOptions, values, interpolationOverride, {
        defaultValue: defaultValue,
        count: count,
        ns: namespace
      })) : defaultValue;

      if (reactI18nextOptions.exposeNamespace) {
        var ns = typeof t.ns === 'string' ? t.ns : t.ns[0];

        if (i18nKey && i18n.options && i18n.options.nsSeparator && i18nKey.indexOf(i18n.options.nsSeparator) > -1) {
          var parts = i18nKey.split(i18n.options.nsSeparator);
          ns = parts[0];
        }

        if (t.ns) additionalProps['data-i18next-options'] = JSON.stringify({
          ns: ns
        });
      }

      if (!useAsParent) return renderNodes(components || children, translation, i18n);
      return _react.default.createElement(useAsParent, additionalProps, renderNodes(components || children, translation, i18n));
    }
  }]);
  return TransComponent;
}(_react.default.Component);

exports.TransComponent = TransComponent;
var Trans = (0, _context.withI18n)()(TransComponent);
exports.Trans = Trans;

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/context.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaults = setDefaults;
exports.getDefaults = getDefaults;
exports.setI18n = setI18n;
exports.getI18n = getI18n;
exports.withContext = withContext;
exports.withI18n = withI18n;
exports.I18nContext = exports.reactI18nextModule = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-i18next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var defaultOptions = {
  wait: false,
  withRef: false,
  bindI18n: 'languageChanged loaded',
  bindStore: 'added removed',
  translateFuncName: 't',
  nsMode: 'default',
  usePureComponent: false,
  omitBoundRerender: true,
  transEmptyNodeValue: ''
};
var i18nInstance;

function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = (0, _objectSpread2.default)({}, defaultOptions, options);
}

function getDefaults() {
  return defaultOptions;
}

function setI18n(instance) {
  i18nInstance = instance;
}

function getI18n() {
  return i18nInstance;
}

var reactI18nextModule = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
exports.reactI18nextModule = reactI18nextModule;

var I18nContext = _react.default.createContext(); // hoc for context


exports.I18nContext = I18nContext;

function withContext() {
  return function Wrapper(WrappedComponent) {
    var WithContext =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(WithContext, _Component);

      function WithContext() {
        (0, _classCallCheck2.default)(this, WithContext);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithContext).apply(this, arguments));
      }

      (0, _createClass2.default)(WithContext, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              innerRef = _this$props.innerRef,
              rest = (0, _objectWithoutProperties2.default)(_this$props, ["innerRef"]);
          if (innerRef) rest.ref = innerRef;
          return _react.default.createElement(I18nContext.Consumer, null, function (ctx) {
            return _react.default.createElement(WrappedComponent, (0, _objectSpread2.default)({}, ctx, rest));
          });
        }
      }]);
      return WithContext;
    }(_react.Component);

    return WithContext;
  };
}

function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}
/* eslint-disable react/no-multi-comp */


function withI18n() {
  return function Wrapper(WrappedComponent) {
    var WithMergedOptions =
    /*#__PURE__*/
    function (_Component2) {
      (0, _inherits2.default)(WithMergedOptions, _Component2);

      function WithMergedOptions() {
        (0, _classCallCheck2.default)(this, WithMergedOptions);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithMergedOptions).apply(this, arguments));
      }

      (0, _createClass2.default)(WithMergedOptions, [{
        key: "render",
        value: function render() {
          var _this = this;

          var _this$props2 = this.props,
              innerRef = _this$props2.innerRef,
              rest = (0, _objectWithoutProperties2.default)(_this$props2, ["innerRef"]);
          if (innerRef) rest.ref = innerRef; // merged extra props

          var extraProps = {};
          var i18nOptions = this.props.i18nOptions || this.i18nOptions; // as default we add i18n, basic t function and i18nOptions from setI18n
          // those get overridden by values passed by I18nContext.Provider <- eg. set in I18nextProvider

          var i18n = this.props.i18n || getI18n();

          if (!i18nOptions) {
            var possibleI18nOptionsFromProps = Object.keys(defaultOptions).reduce(function (mem, k) {
              if (_this.props[k]) mem[k] = _this.props[k];
              return mem;
            }, {});
            i18nOptions = (0, _objectSpread2.default)({}, getDefaults(), i18n && i18n.options && i18n.options.react, possibleI18nOptionsFromProps);
            this.i18nOptions = i18nOptions;
          }

          if (i18n) {
            extraProps.i18n = i18n;
            extraProps.t = i18n.t.bind(i18n);
            extraProps.lng = i18n.language;
            extraProps.i18nOptions = i18nOptions;
          }

          return _react.default.createElement(WrappedComponent, (0, _objectSpread2.default)({}, extraProps, rest));
        }
      }]);
      return WithMergedOptions;
    }(_react.Component);

    var WithMergedOptionsWithContext = withContext()(WithMergedOptions);
    WithMergedOptionsWithContext.WrappedComponent = WrappedComponent;
    WithMergedOptionsWithContext.displayName = "WithMergedOptions(".concat(getDisplayName(WrappedComponent), ")");
    return (0, _hoistNonReactStatics.default)(WithMergedOptionsWithContext, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "loadNamespaces", {
  enumerable: true,
  get: function get() {
    return _utils.loadNamespaces;
  }
});
Object.defineProperty(exports, "withNamespaces", {
  enumerable: true,
  get: function get() {
    return _withNamespaces.withNamespaces;
  }
});
Object.defineProperty(exports, "translate", {
  enumerable: true,
  get: function get() {
    return _withNamespaces.translate;
  }
});
Object.defineProperty(exports, "NamespacesConsumer", {
  enumerable: true,
  get: function get() {
    return _NamespacesConsumer.NamespacesConsumer;
  }
});
Object.defineProperty(exports, "I18n", {
  enumerable: true,
  get: function get() {
    return _NamespacesConsumer.I18n;
  }
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _Trans.Trans;
  }
});
Object.defineProperty(exports, "I18nextProvider", {
  enumerable: true,
  get: function get() {
    return _I18nextProvider.I18nextProvider;
  }
});
Object.defineProperty(exports, "withI18n", {
  enumerable: true,
  get: function get() {
    return _context.withI18n;
  }
});
Object.defineProperty(exports, "I18nContext", {
  enumerable: true,
  get: function get() {
    return _context.I18nContext;
  }
});
Object.defineProperty(exports, "reactI18nextModule", {
  enumerable: true,
  get: function get() {
    return _context.reactI18nextModule;
  }
});
Object.defineProperty(exports, "setDefaults", {
  enumerable: true,
  get: function get() {
    return _context.setDefaults;
  }
});
Object.defineProperty(exports, "getDefaults", {
  enumerable: true,
  get: function get() {
    return _context.getDefaults;
  }
});
Object.defineProperty(exports, "setI18n", {
  enumerable: true,
  get: function get() {
    return _context.setI18n;
  }
});
Object.defineProperty(exports, "getI18n", {
  enumerable: true,
  get: function get() {
    return _context.getI18n;
  }
});
Object.defineProperty(exports, "Interpolate", {
  enumerable: true,
  get: function get() {
    return _Interpolate.Interpolate;
  }
});

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

var _withNamespaces = __webpack_require__(/*! ./withNamespaces */ "./node_modules/react-i18next/dist/commonjs/withNamespaces.js");

var _NamespacesConsumer = __webpack_require__(/*! ./NamespacesConsumer */ "./node_modules/react-i18next/dist/commonjs/NamespacesConsumer.js");

var _Trans = __webpack_require__(/*! ./Trans */ "./node_modules/react-i18next/dist/commonjs/Trans.js");

var _I18nextProvider = __webpack_require__(/*! ./I18nextProvider */ "./node_modules/react-i18next/dist/commonjs/I18nextProvider.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _Interpolate = __webpack_require__(/*! ./Interpolate */ "./node_modules/react-i18next/dist/commonjs/Interpolate.js");

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.warnOnce = warnOnce;
exports.deprecated = deprecated;
exports.initSSR = initSSR;
exports.loadNamespaces = loadNamespaces;
exports.shallowEqual = shallowEqual;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

function warn() {
  if (console && console.warn) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);
    console.warn.apply(null, args);
  }
}

var alreadyWarned = {};

function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
}

function deprecated() {
  if (process && process.env && ( false || "development" === 'development')) {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if (typeof args[0] === 'string') args[0] = "deprecation warning -> ".concat(args[0]);
    warnOnce.apply(void 0, args);
  }
}

var initializedLanguageOnce = false;
var initializedStoreOnce = false;

function initSSR(props, setIsInitialSSR) {
  // nextjs / SSR: getting data from next.js or other ssr stack
  if (!initializedStoreOnce && props.initialI18nStore) {
    props.i18n.services.resourceStore.data = props.initialI18nStore;
    if (setIsInitialSSR) props.i18n.options.isInitialSSR = true;
    if (props.i18nOptions) props.i18nOptions.wait = false; // we got all passed down already

    initializedStoreOnce = true;
  }

  if (!initializedLanguageOnce && props.initialLanguage) {
    props.i18n.changeLanguage(props.initialLanguage);
    initializedLanguageOnce = true;
  }
} // --------------
// loadNamespaces


var objectEntries = Object.entries || function (obj) {
  var ownProps = Object.keys(obj);
  var i = ownProps.length;
  var resArray = new Array(i); // preallocate the Array

  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }

  return resArray;
}; // Borrowed from https://github.com/Rezonans/redux-async-connect/blob/master/modules/ReduxAsyncConnect.js#L16


function eachComponents(components, iterator) {
  for (var i = 0, l = components.length; i < l; i++) {
    // eslint-disable-line id-length
    if ((0, _typeof2.default)(components[i]) === 'object') {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = objectEntries(components[i])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          iterator(value, i, key);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      iterator(components[i], i);
    }
  }
}

function filterAndFlattenComponents(components) {
  var flattened = [];
  eachComponents(components, function (Component) {
    if (Component && Component.namespaces) {
      Component.namespaces.forEach(function (namespace) {
        if (flattened.indexOf(namespace) === -1) {
          flattened.push(namespace);
        }
      });
    }
  });
  return flattened;
}

function loadNamespaces(_ref) {
  var components = _ref.components,
      i18n = _ref.i18n;
  var allNamespaces = filterAndFlattenComponents(components);
  return new Promise(function (resolve) {
    i18n.loadNamespaces(allNamespaces, resolve);
  });
} // -------------
// shallowEqual

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * @flow
 */

/* eslint-disable no-self-compare */


var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } // Step 6.a: NaN == NaN


  return x !== x && y !== y;
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */


function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((0, _typeof2.default)(objA) !== 'object' || objA === null || (0, _typeof2.default)(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/withNamespaces.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/withNamespaces.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withNamespaces = withNamespaces;
exports.translate = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-i18next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _NamespacesConsumer = __webpack_require__(/*! ./NamespacesConsumer */ "./node_modules/react-i18next/dist/commonjs/NamespacesConsumer.js");

function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

function withNamespaces(namespaceArg) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Wrapper(WrappedComponent) {
    var LoadNamespace =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(LoadNamespace, _Component);

      function LoadNamespace() {
        (0, _classCallCheck2.default)(this, LoadNamespace);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LoadNamespace).apply(this, arguments));
      }

      (0, _createClass2.default)(LoadNamespace, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var i18nOptions = this.props.i18nOptions;

          if (!i18nOptions.usePureComponent && !options.usePureComponent) {
            return true;
          }

          return !(0, _utils.shallowEqual)(this.props, nextProps);
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;

          var _this$props = this.props,
              namespaces = _this$props.namespaces,
              i18nOptions = _this$props.i18nOptions;
          var mergedI18nOptions = (0, _objectSpread2.default)({}, i18nOptions, options);
          var extraProps = {};

          if (mergedI18nOptions.innerRef) {
            extraProps.ref = mergedI18nOptions.innerRef;
          }

          return _react.default.createElement(_NamespacesConsumer.NamespacesConsumer, (0, _objectSpread2.default)({
            ns: namespaces || namespaceArg
          }, this.props, {
            i18nOptions: Object.keys(mergedI18nOptions).length > 0 ? mergedI18nOptions : null
          }), function (t, _ref) {
            var ready = _ref.ready,
                rest = (0, _objectWithoutProperties2.default)(_ref, ["ready"]);
            return _react.default.createElement(WrappedComponent, (0, _objectSpread2.default)({
              tReady: ready
            }, _this.props, extraProps, rest));
          });
        }
      }]);
      return LoadNamespace;
    }(_react.Component);

    var LoadNamespaceWithContext = (0, _context.withI18n)()(LoadNamespace);
    LoadNamespaceWithContext.WrappedComponent = WrappedComponent;
    LoadNamespaceWithContext.displayName = "LoadNamespace(".concat(getDisplayName(WrappedComponent), ")");
    LoadNamespaceWithContext.namespaces = namespaceArg;
    return (0, _hoistNonReactStatics.default)(LoadNamespaceWithContext, WrappedComponent);
  };
}

withNamespaces.setDefaults = _context.setDefaults;
withNamespaces.setI18n = _context.setI18n;
var translate = withNamespaces;
exports.translate = translate;

/***/ }),

/***/ "./node_modules/react-i18next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/react-i18next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _static_languages_languages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/languages/languages */ "./static/languages/languages.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_13__);















var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_7__["Container"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                _context.t1 = _context.t0;
                return _context.abrupt("return", {
                  pageProps: _context.t1
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default()(_store__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_i18n__WEBPACK_IMPORTED_MODULE_13__["appWithTranslation"])(MyApp)));

/***/ }),

/***/ "./reducer/Info.js":
/*!*************************!*\
  !*** ./reducer/Info.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Info = function Info() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_INFO_DATA':
      {
        return action.InfoData;
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./reducer/InfoList.js":
/*!*****************************!*\
  !*** ./reducer/InfoList.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var _process$env$REACT_AP = process.env.REACT_APP_URI,
    REACT_APP_URI = _process$env$REACT_AP === void 0 ? '/' : _process$env$REACT_AP;
var initialState = {
  channelUrl: "".concat(REACT_APP_URI, "/Info/?keyword=&country=&category=&page=0&subscriberCountFrom=1000&subscriberCountTo=2000000&recentAvgViewCountFrom=0&recentAvgViewCountTo=2000000&recentAvgEngageRateFrom=0&recentAvgEngageRateTo=7&monthSubscriberCountFrom=0&monthSubscriberCountTo=30000&monthSubscriberRateFrom=0&monthSubscriberRateTo=30&monthViewCountFrom=0&monthViewCountTo=35000000&monthViewRateFrom=0&monthViewRateTo=15"),
  videoUrl: "".concat(REACT_APP_URI, "/Video/?keyword=&country=&category=&subscriberCountFrom=1000&subscriberCountTo=2000000&viewCountFrom=5000&viewCountTo=2000000&engageRateFrom=0&engageRateTo=7"),
  channelSortCategory: '',
  channelSortRule: '',
  videoSortCategory: '',
  videoSortRule: '',
  page: '',
  channelKeyword: '',
  videoKeyword: ''
};

var InfoList = function InfoList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'CHANGE_CHANNELURL':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          channelUrl: action.channelUrl,
          page: 0
        });
      }

    case 'CHANGE_VIDEOLURL':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          videoUrl: action.videoUrl
        });
      }

    case 'CHANGE_PAGE':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          page: "page=".concat(action.page)
        });
      }

    case 'CHANGE_SORT':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          channelSortCategory: action.channelSortCategory,
          channelSortRule: action.channelSortRule,
          videoSortCategory: action.videoSortCategory,
          videoSortRule: action.videoSortRule,
          page: 0
        });
      }

    case 'CHANGE_CHANNELKEYWORD':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          channelKeyword: action.channelKeyword
        });
      }

    case 'CHANGE_VIDEOLKEYWORD':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          videoKeyword: action.videoKeyword
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (InfoList);

/***/ }),

/***/ "./reducer/Messages.js":
/*!*****************************!*\
  !*** ./reducer/Messages.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _static_languages_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/languages/languages */ "./static/languages/languages.js");



var initialState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _static_languages_languages__WEBPACK_IMPORTED_MODULE_1__["default"].en, {
  localeLanguage: 'en'
});

var Messages = function Messages() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'onChangeLanguage':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _static_languages_languages__WEBPACK_IMPORTED_MODULE_1__["default"][action.language], {
          localeLanguage: action.language
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ }),

/***/ "./reducer/Payment.js":
/*!****************************!*\
  !*** ./reducer/Payment.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var initialState = {
  buyPlan: '',
  buyAmount: '',
  seatNumber: -1,
  paymentIsActive: false
};

var Payment = function Payment() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'togglePaymentField':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          buyPlan: action.buyPlan || '',
          buyAmount: action.buyAmount || '',
          seatNumber: action.seatNumber || -1,

          /*PM弄的 Agency Payment*/
          paymentIsActive: !state.paymentIsActive
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Payment);

/***/ }),

/***/ "./reducer/RankList.js":
/*!*****************************!*\
  !*** ./reducer/RankList.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _process$env$REACT_AP = process.env.REACT_APP_URI,
    REACT_APP_URI = _process$env$REACT_AP === void 0 ? '/' : _process$env$REACT_AP;

var RankList = function RankList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "".concat(REACT_APP_URI, "/Rank/");
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'CHANGE_URL':
      {
        return action.url;
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (RankList);

/***/ }),

/***/ "./reducer/User.js":
/*!*************************!*\
  !*** ./reducer/User.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var initialState = {
  auth: '',
  plan: '',
  isActive: false,
  token: '',
  condition: 'signIn',
  email: '',
  password: '' // isEmailExsit: '',
  // isPasswordMatch: '',

};

var User = function User() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'setAuth':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          auth: action.auth
        });
      }

    case 'setPlan':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          plan: action.plan
        });
      }

    case 'toggleUserField':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isActive: !state.isActive,
          condition: action.condition || ''
        });
      }

    case 'changeUserCondition':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          condition: action.condition
        });
      }

    case 'setToken':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          token: action.token
        });
      }

    case 'emailInput':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          email: action.email
        });
      }

    case 'passwordInput':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          password: action.password
        });
      }
    // case 'checkEmailExsit': {
    //     return {
    //         ...state,
    //         isEmailExsit: action.isEmailExsit,
    //     }
    // }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./static/languages/en.json":
/*!**********************************!*\
  !*** ./static/languages/en.json ***!
  \**********************************/
/*! exports provided: channelType, subscriberCount, totalViewCount, totalEngegementCount, avgEngageRate, videoCount, recentAvgViewCount, recentAvgEngageRate, twoMonthAvgViewCount, twoMonthAvgEngageRate, todaySubscriberCount, todaySubscriberRate, todayViewCount, todayViewRate, monthSubscriberCount, monthSubscriberRate, monthViewCount, monthViewRate, nav_service, nav_pricing, nav_contact, nav_start, nav_user_login, nav_googlelogin, nav_email, nav_password, nav_login, user_givememoneyfirst, user_check_pricing, user_not_now, user_unlock_data, user_forget_password, user_your_email, user_send_email, user_fast_signup, user_googlesignup, user_email_signup, user_password_signup, user_confirm_password, user_signup, user_already_signup, user_has_been_taken, user_has_not_been_taken, user_signup_success, user_email_verify, user_terms_agree, user_invalid_account_or_password, user_account_not_verifiied, user_correct_email_format, user_account_not_exist, user_active_verifying, slide_ranking, slide_search, slide_project_management, slide_lottery, 404_coming_soon_01, 404_coming_soon_02, 404_comingsoon_01, 404_comingsoon_02, 404_comingsoon_03, 404_learn_more, lottery_title_01, lottery_title_02, lottery_intro, lottery_url, lottery_url_example, lottery_paste_url, lottery_keyword, lottery_nokeyword, lottery_winners, lottery_number, lottery_start, lottery_result, lottery_name, lottery_content, lottery_time, lottery_redraw, lottery_url_error, lottery_keyword_error, lottery_amount_error, lottery_unknown_error, pricing, pricing_rank_01, pricing_rank_02, pricing_rank_03, pricing_info_01, pricing_info_02, pricing_info_03, pricing_data_01, pricing_data_02, pricing_data_03, pricing_propoasal_01, pricing_propoasal_02, pricing_propoasal_03, pricing_propoasal_04, pricing_month, pricing_agency_1to5_1, pricing_agency_per_user, pricing_agency_1to5_3, pricing_agency_6to10_1, pricing_agency_6to10_3, pricing_agency_11up_1, pricing_agency_11up_3, pricing_login, pricing_not_yet, pricing_purchase, pricing_purchased, pricing_major, pricing_outreach, pricing_big_data, pricing_project_management, pricing_we_know_you, pricing_data_tool, pricing_professional_analysis, pricing_control, pricing_search_tool_01, pricing_search_tool_02, prcing_easy_plan, prcing_convenient, prcing_export, prcing_proposal_success, pricing_trend_01, pricing_trend_02, pricing_youtube_marketing_01, pricing_youtube_marketing_02, pricing_difficulties, princing_saving_time, princing_key_data, princing_free_consultation, princing_give_me_email, princing_we_will_contact_soon, rank_now, rank_input, rank_big_data, rank_sort_rank, default, country, category, subscribers, daily_subscribers, monthly_subscribers, monthly_subscriptions_growth, monthly_views, monthly_views_growth, 20_avg_views, 20_avg_engage, monthly, the_avg_of_recent_videos, infoList_monthly_subscribers, infoList_monthly_subscriptions_growth, infoList_monthly_views, infoList_monthly_views_growth, infoList_20_avg_views, infoList_20_avg_engage, rank_search_name, rank_name, rank_1000, rank_updated_daily, rank_condition_1, rank_condition_2, rank_condition_3, rank, channel, channel_name, channel_subscriber, channel_daily_subscribers, channel_monthly_subscribers_gorwth, channel_monthly_subscriptions_growth, channel_monthly_views, channel_monthly_views_growth, channel_20_avg_views, channel_20_avg_engage, channel_url, rank_want_more, rank_more_data, rank_more, send, or, rank_no_result_01, rank_no_result_02, rank_no_result_03, rank_no_result_04, rank_no_result_05, rank_want_more_01, rank_want_more_02, rank_want_more_03, rank_retry, info_list_channel_search_tip, info_list_video_search_tip, info_list_channel_search, info_list_video_search, info_list_sort, info_list_sort_relevance, info_list_sort_default_relevance, info_list_sort_default, info_list_sort_high, info_list_sort_low, info_list_type_autos, info_list_type_comedy, info_list_type_education, info_list_type_entertainment, info_list_type_film, info_list_type_gaming, info_list_type_howto, info_list_type_music, info_list_type_news, info_list_type_nonprofits, info_list_type_people, info_list_type_pets, info_list_type_science, info_list_type_shows, info_list_type_sports, info_list_type_travel, info_list_channel_input, info_list_video_input, info_list_video_category, info_list_video_views, info_list_video_engage, info_list_video_channel, info_list_monthly, info_list_monthly_subscriptions_growth, info_list_monthly_views, info_list_monthly_views_growth, info_clean_list, info_list_import, info_list_already_improted, info_about, info_total_views, info_avg_engage, info_topic, info_total_videos, info_subscribers, info_info, info_theme, info_category, info_interval, info_recent, info_20, info_2month, info_20_high_views, info_20_low_views, info_20_high_engage, info_20_low_engage, info_20_avg_views, info_20_avg_engage, info_video_count, info_2month_most_video, info_data_collecting, info_last_day, info_last_day_subscribers, info_last_day_subscriber_growth, info_last_day_views, info_last_day_views_growth, info_last_month, info_last_info_last_month_subscribers, info_last_info_last_month_subscriber_growth, info_last_info_last_month_views, info_last_info_last_month_views_growth, info_graphics, info_graphics_view_minus, info_add_proposal, info_new_proposal_name, info_no_proposal, info_unnamed_proposal, delete, info_confirm_delete, ok, cancel, edit, member_account, member_user, member_signout, user_info, user_mail, user_plan, plan, user_upgrade, user_reset_password, user_old_password, user_new_password, user_new_password_again, user_password_not_match, user_reset_successfully, user_name, user_tell, user_nicknme, user_country, user_company, user_title, user_agency_team_name, user_agency_type, user_agency_remove, user_agency_confirm_remove, user_agency_invite, user_agency_invite_email, user_agency_no_result, user_agency_user_is_invited, user_agency_add_seat, user_agency_seat, user_agency_not_admin, user_agency_exit, user_agency_last_admin, user_agency_out, user_agency_exit_success, user_seat_current, user_seat_purchased, user_seat_used, user_seat_cost, user_seat_updated, user_seat_see_you_next_invoice, user_chancel, user_chancel_confirm, user_chancel_deny, user_chancel_date, user_chancel_stop_pay, user_chancel_success, user_pay_stop_pay, user_pay_history, user_pay_card, user_pay_date, user_pay_method, user_pay_amunt, user_pay_result, user_pay_success, user_pay_fail, user_pay_change_card, user_pay_next_pay, user_pay_contact, user_pay_change_card_success, payment_debiting_every_month, payment_success_and_check, payment_unknown_error, payment_upgrade_tips_01, payment_upgrade_tips_02, footer_youTube, footer_privacy_policy, footer_term_of_service, contact_us, contact_name, contact_email, contact_company, contact_website, contact_type, contact_product, contact_plan, contact_cor, contact_social, contact_youtube, contact_other, contact_content, contact_confirm, contact_back, contact_submit, contact_success, contact_wait, contact_OK, contact_blank, contact_again, language, language_zh, language_en, language_es, proposal_list_create, proposal_list_my, proposal_list_create_name, proposal_list_name, proposal_list_last_edit, proposal_list_creators, proposal_list_view, proposal_list_manage, proposal_list_confirm_delete, proposal_list_other, people, proposal_list_team, proposal_id_info, proposal_id_perform, proposal_id_growth, proposal_id_download, proposal_id_add, proposal_id_find_nothing, proposal_id_find_added, proposal_id_scroll, proposal_id_time_sort, proposal_id_daily_sub_growth, proposal_id_daily_view, proposal_id_daily_view_growth, proposal_id_not_owner, userInfo_email, userInfo_identity, dataDesc_channelType, dataDesc_subscriberCount, dataDesc_totalViewCount, dataDesc_totalEngegementCount, dataDesc_avgEngageRate, dataDesc_videoCount, dataDesc_videoTheme, dataDesc_videoCategory, dataDesc_recentAvgViewCount, dataDesc_recentAvgEngageRate, dataDesc_recentTwoMonthAvgViewCount, dataDesc_recentTwoMonthAvgEngageRate, dataDesc_todaySubscriberCount, dataDesc_todaySubscriberRate, dataDesc_todayViewCount, dataDesc_todayViewRate, dataDesc_monthSubscriberCount, dataDesc_monthSubscriberRate, dataDesc_monthViewCount, dataDesc_monthViewRate, dataDesc_videoViews, dataDesc_videoEngage, agency_payment_title, agency_payment_user, agency_payment_users, agency_payment_averge_price_1, agency_payment_averge_price_2, agency_payment_invite, agency_payment_placeholder, agency_payment_more, agency_payment_input_error, agency_payment_save, agency_payment_wtf, agency_payment_success, agency_payment_error, proposal_id_share, proposal_id_share_me, proposal_id_share_team, proposal_id_share_all, proposal_id_share_copy, proposal_id_share_back, proposal_id_share_no_access_1, proposal_id_share_no_access_2, info_list_panel_title, info_list_panel_save, info_list_panel_unsave, info_list_panel_all_saved, info_list_panel_chose, info_list_panel_deny, info_list_panel_deny_2, info_list_panel_alert, info_list_panel_alert_2, info_list_panel_discard, info_list_panel_no_proposal, payment_ridiculous, user_cancel_intro_1, user_cancel_intro_2, user_cancel_question_satisfy, user_cancel_answer_very_satisfied, user_cancel_answer_somewhat_satisfied, user_cancel_answer_neutral, user_cancel_answer_unsatisfied, user_cancel_answer_very_unsatisfied, user_cancel_question_reason, user_cancel_answer_back, user_cancel_answer_didnt_meet_need, user_cancel_answer_quality, user_cancel_answer_alternative, user_cancel_answer_customer_service, user_cancel_question_purpose, user_cancel_answer_find, user_cancel_answer_analyze, user_cancel_answer_ranking, user_cancel_answer_project, user_cancel_answer_channel, user_cancel_question_resubsribe, user_cancel_answer_definitely, user_cancel_answer_probably, user_cancel_answer_notsure, user_cancel_answer_probablynot, user_cancel_answer_definitelynot, user_cancel_question_feedback, user_cancel_not_finish, user_cancel_stop, info_list_no_result, info_list_no_result_adjust_filter, info_list_no_channel_id, info_list_search_for, payment_upgrade_success */
/***/ (function(module) {

module.exports = {"channelType":"Channel Category","subscriberCount":"Subscribers","totalViewCount":"Total Views","totalEngegementCount":"Total Engagements","avgEngageRate":"Avg Engagement","videoCount":"Total videos","recentAvgViewCount":"Avg views of 20 videos","recentAvgEngageRate":"Avg eng of 20 videos","twoMonthAvgViewCount":"Avg views in last 2 month","twoMonthAvgEngageRate":"Avg eng in last 2 month","todaySubscriberCount":"Daily Subscribers","todaySubscriberRate":"Daily Subscriptions Growth","todayViewCount":"Daily Views","todayViewRate":"Daily Views Growth","monthSubscriberCount":"Monthly Subscribers","monthSubscriberRate":"Monthly Subscriptions Growth","monthViewCount":"Monthly Views","monthViewRate":"Monthly Views Growth","nav_service":"Pricing","nav_pricing":"Pricing","nav_contact":"Contact","nav_start":"Start","nav_user_login":"Login","nav_googlelogin":"Login with Google","nav_email":"Email","nav_password":"Password","nav_login":"Login","user_givememoneyfirst":"Please upgrade account plan to use","user_check_pricing":"Check Pricing","user_not_now":"Not Now","user_unlock_data":"Unlock Data","user_forget_password":"Forgot password","user_your_email":"your email","user_send_email":"Send verify mail","user_fast_signup":"Sign up","user_googlesignup":"Sign up with Google","user_email_signup":"Email (Your account and receiving a verification email)","user_password_signup":"Password (8-24 characters)","user_confirm_password":"Confirm password","user_signup":"Sign up","user_already_signup":"Already Sign up?","user_has_been_taken":"Email has been taken","user_has_not_been_taken":"Email has not  been taken","user_signup_success":"Sign up success. Please check your email to verify.","user_email_verify":"The mail has been sent! Please check to verify.","user_terms_agree":"I agree","user_invalid_account_or_password":"Invalid password, recheck or click Forget password","user_account_not_verifiied":"The account has not been verified. Please check your email to verify.","user_correct_email_format":"Please enter the correct email format.","user_account_not_exist":"This account doesn’t exist.","user_active_verifying":"Verifying ... Please wait","slide_ranking":"Ranking","slide_search":"Search","slide_project_management":"Proposals","slide_lottery":"Comment Picker","404_coming_soon_01":"Oops! 404 Error.","404_coming_soon_02":"Page not found.","404_comingsoon_01":"For service brands, agencies and YouTubers, ","404_comingsoon_02":"InteRed provides tools like influencers searching, data graphics and project management","404_comingsoon_03":"to optimize your YouTube marketing or business.","404_learn_more":"Learn more","lottery_title_01":"Lucky draw  for YouTube Comments","lottery_title_02":"","lottery_intro":"We provide services for brands, agencies and YouTubers' marketing projects on YouTube more convenient, InteRed provides the handiest lottery tools. Just paste the video URL, fill in the keyword and winners, and click draw.","lottery_url":"URL","lottery_url_example":"https://www.youtube.com/watch?v=XXXXXXXXXX","lottery_paste_url":"Paste full URL here","lottery_keyword":"Keyword","lottery_nokeyword":"If no need for keyword, left the column blank","lottery_winners":"Winners","lottery_number":"Please fill in the number","lottery_start":"Start","lottery_result":"Result","lottery_name":"Name","lottery_content":"Content","lottery_time":"Time (last edited)","lottery_redraw":"Redraw","lottery_url_error":"Paste the video URL!","lottery_keyword_error":"No comment match the keyword!","lottery_amount_error":"The number of winners more than the number of comments!","lottery_unknown_error":"Error. Please confirm your video is valid.","pricing":"Pricing","pricing_rank_01":"Full Ranking List","pricing_rank_02":"8 Key Data Metrics","pricing_rank_03":"Global Channels Ranking","pricing_info_01":"Find YouTube Influencers","pricing_info_02":"All Channels & Videos Search","pricing_info_03":"Fliters and Sorts ","pricing_data_01":"Data Analysis","pricing_data_02":"Analyze Channel Style, Performance and Videos","pricing_data_03":"Detailed Trend Graphics","pricing_propoasal_01":"Proposal Management","pricing_propoasal_02":"Manage Influencers Proposals & Cutomized Your Own Ranking Chart","pricing_propoasal_03":"Team Cooperation","pricing_propoasal_04":"One-Click Export or Share Proposals","pricing_month":" / month","pricing_agency_1to5_1":"For the first 1 to 5","pricing_agency_per_user":"per user","pricing_agency_1to5_3":"$199 / month","pricing_agency_6to10_1":"For the next 6 to 10","pricing_agency_6to10_3":"$99 / month","pricing_agency_11up_1":"For the rest","pricing_agency_11up_3":"$29 / month","pricing_login":"Login","pricing_not_yet":"coming soon","pricing_purchase":"purchase","pricing_purchased":"purchased","pricing_major":"Optimize your YouTube marketing business","pricing_outreach":"Find YouTube Influencers","pricing_big_data":"Big Data Analysis","pricing_project_management":"Proposal Management","pricing_we_know_you":"InteRed understand what exactly you need.","pricing_data_tool":"Regardless of service brands, agencies and YouTubers, InteRed is a data analysis tool tailored for YouTube's business activities.","pricing_professional_analysis":"InteRed shows all of the data of YouTube channel and professional analysis. It supports you to achieve success in marketing strategies.","pricing_control":"Stay at the cutting edge of market trends and understand clearly the performance of the influencer.","pricing_search_tool_01":"By using the channel searching tool, with multiple sorting options,","pricing_search_tool_02":"InteRed helps agencies, brands and YouTubers to search for the most suitable channel for marketing projects.","prcing_easy_plan":"Make business plans more easily.","prcing_convenient":"By using the convenient project management tool, agencies and brands can easily create YouTuber proposal list based on data.","prcing_export":"It's very simple to complete your proposal, which is based on accurate data.","prcing_proposal_success":"InteRed makes your proposal successful and much easier.","pricing_trend_01":"YouTube marketing trend is coming.","pricing_trend_02":"Do you stay at the cutting edge of market trends?","pricing_youtube_marketing_01":"Nowadays, more and more brands grow their business by influencer marketing ","pricing_youtube_marketing_02":"on YouTube as their marketing strategies.","pricing_difficulties":"InteRed totally understands the difficulties that may happened in YouTube business.","princing_saving_time":"We hope to provide you with a practical and good experience, saving your valuable and critical time.","princing_key_data":"It's easy for you to get key data, so that the communication and  growth are more smoothly and increase the chance of success.","princing_free_consultation":"Book a free consultation","princing_give_me_email":"Enter your email","princing_we_will_contact_soon":"We've recieved your request, and will contact you ASAP.","rank_now":"Find rank of YouTube Channel now","rank_input":"Enter Channel Name or URL","rank_big_data":"InteRed uses Big Data analysis to update the data of each channel timely.","rank_sort_rank":"We uses the data to sort and rank for different YouTubers.","default":"default","country":"Location","category":"Category","subscribers":"Subscribers","daily_subscribers":"Daily Subscribers","monthly_subscribers":"Monthly Subscribers","monthly_subscriptions_growth":"Monthly Subscriptions Growth","monthly_views":"Monthly Views","monthly_views_growth":"Monthly Views Growth","20_avg_views":"The avg views of last 20 videos","20_avg_engage":"The avg engagement rate of last 20 videos","monthly":"Monthly","the_avg_of_recent_videos":"Last 20 videos","infoList_monthly_subscribers":"Subscribers","infoList_monthly_subscriptions_growth":"Subscriptions Growth","infoList_monthly_views":"Views","infoList_monthly_views_growth":"Views Growth","infoList_20_avg_views":"Avg views","infoList_20_avg_engage":"Avg engagement","rank_search_name":"Or search by the channel name directly (by these conditions)","rank_name":"Enter Channel Name","rank_1000":"Include channels that have more than 1,000 subscribers","rank_updated_daily":"Updated daily","rank_condition_1":",","rank_condition_2":",","rank_condition_3":"","rank":"Ranking","channel":"Channel","channel_name":"Channel Name","channel_subscriber":"Subscribers","channel_daily_subscribers":"Daily Subscribers","channel_monthly_subscribers_gorwth":"Monthly Subscribers Growth","channel_monthly_subscriptions_growth":"Monthly Subscriptions Growth","channel_monthly_views":"Monthly Views","channel_monthly_views_growth":"Monthly Views Growth","channel_20_avg_views":"The avg views of last 20 videos","channel_20_avg_engage":"The avg engagement rate of last 20 videos","channel_url":"Channel URL","rank_want_more":"Want more detailed channel data?","rank_more_data":"MORE DATA","rank_more":"More","send":"send","or":" or ","rank_no_result_01":"No result?","rank_no_result_02":"","rank_no_result_03":"Try different keywords ","rank_no_result_04":"change the location to All","rank_no_result_05":"Type the channel ID to reach the ranking","rank_want_more_01":"Want to see more?","rank_want_more_02":"Upgrade now!","rank_want_more_03":"Search channel by using its name as keyword","rank_retry":"retry","info_list_channel_search_tip":"Any channel name","info_list_video_search_tip":"Any video topic","info_list_channel_search":"Channel searching","info_list_video_search":"Video searching","info_list_sort":"Sort by","info_list_sort_relevance":"Relevance","info_list_sort_default_relevance":"Relevance (default)","info_list_sort_default":"Subscribers (default)","info_list_sort_high":"Highest first","info_list_sort_low":"Lowest first","info_list_type_autos":"Autos & Vehicles","info_list_type_comedy":"Comedy","info_list_type_education":"Education","info_list_type_entertainment":"Entertainment","info_list_type_film":"Film & Animation","info_list_type_gaming":"Gaming","info_list_type_howto":"Howto & Style","info_list_type_music":"Music","info_list_type_news":"News & Politics","info_list_type_nonprofits":"Nonprofits & Activism","info_list_type_people":"People & Blogs","info_list_type_pets":"Pets & Animals","info_list_type_science":"Science & Technology","info_list_type_shows":"Shows","info_list_type_sports":"Sports","info_list_type_travel":"Travel & Events","info_list_channel_input":"Search for a channel name","info_list_video_input":"Search for a topic, like makeup","info_list_video_category":"Video Category","info_list_video_views":"Views","info_list_video_engage":"Engagement Rate","info_list_video_channel":"Channel Information","info_list_monthly":"Last month","info_list_monthly_subscriptions_growth":"Sub. Growth","info_list_monthly_views":"Views","info_list_monthly_views_growth":"Avg engagement rate","info_clean_list":"Clear","info_list_import":"Import","info_list_already_improted":"Already Imported","info_about":"About","info_total_views":"Total Views","info_avg_engage":"Average engagement rate","info_topic":"Category","info_total_videos":"Total videos","info_subscribers":"Subscribers","info_info":"Information","info_theme":"Theme","info_category":"Category","info_interval":"People per interval","info_recent":"The performance of recent videos","info_20":"Last 20 videos","info_2month":"Last 2 month","info_20_high_views":"Highest views","info_20_low_views":"Lowest views","info_20_high_engage":"Highest engagements","info_20_low_engage":"Lowest engagements","info_20_avg_views":"Average views","info_20_avg_engage":"Average engagement rate","info_video_count":"videos","info_2month_most_video":"(240 videos at most)","info_data_collecting":"*Data collecting ...","info_last_day":"Last day","info_last_day_subscribers":"Subscribers","info_last_day_subscriber_growth":"Growth","info_last_day_views":"Views","info_last_day_views_growth":"Growth","info_last_month":"Last month","info_last_info_last_month_subscribers":"Subscribers","info_last_info_last_month_subscriber_growth":"Growth","info_last_info_last_month_views":"Views","info_last_info_last_month_views_growth":"Growth","info_graphics":"Trend Graphics","info_graphics_view_minus":"* Views would be negative when videos has been deleted","info_add_proposal":"Add proposal","info_new_proposal_name":"Create a new proposal","info_no_proposal":"You haven't added any proposal","info_unnamed_proposal":"Unnamed proposal","delete":"Delete","info_confirm_delete":"Are you sure to delete the proposal?","ok":"OK","cancel":"Cancel","edit":"edit","member_account":"Account","member_user":"User","member_signout":"Signout","user_info":"User","user_mail":"Email","user_plan":"Plan","plan":"Plan","user_upgrade":"Upgrade","user_reset_password":"Reset Password","user_old_password":"Your old password","user_new_password":"Your new password","user_new_password_again":"Confirm your new password","user_password_not_match":"Password not match","user_reset_successfully":"Password reset successfully","user_name":"Name","user_tell":"Tell","user_nicknme":"Nickname","user_country":"Location","user_company":"Company","user_title":"Title","user_agency_team_name":"Your team","user_agency_type":"Account Type","user_agency_remove":"Remove","user_agency_confirm_remove":"Are you sure to remove this member?","user_agency_invite":"Invite Collaborators","user_agency_invite_email":"Enter the full email address","user_agency_no_result":"No such account or not InteRed user. Please confirm the email complete and correct.","user_agency_user_is_invited":"Invite failed, the user has been joined other team","user_agency_add_seat":"Manage Seats","user_agency_seat":"Seats left : ","user_agency_not_admin":"Update failed, please refresh and confirm you authority","user_agency_exit":"Leave","user_agency_last_admin":"You are the last admin member, please assign another admin before quit","user_agency_out":"Confirm to Leave","user_agency_exit_success":"Your account has left the team.","user_seat_current":"Now","user_seat_purchased":"Purchased seats : ","user_seat_used":"Used seats : ","user_seat_cost":"Bill : ","user_seat_updated":"Edit","user_seat_see_you_next_invoice":"Pricing would be updated next invoice.","user_chancel":"Confirm to cancel your subscription","user_chancel_confirm":"Cancel my subscription","user_chancel_deny":"No, thanks","user_chancel_date":"The subscription will expire at","user_chancel_stop_pay":"and no longer to charge.","user_chancel_success":"Your subscription has been canceled.","user_pay_stop_pay":"Subscription canceled, expiration date","user_pay_history":"Payment History","user_pay_card":"Current Credit Card","user_pay_date":"Date","user_pay_method":"Method","user_pay_amunt":"Amount","user_pay_result":"Result","user_pay_success":"Payment Success","user_pay_fail":"Payment Failure","user_pay_change_card":"Change card","user_pay_next_pay":"Next payment due","user_pay_contact":"If you have any payment problems, feel free to contact us.","user_pay_change_card_success":"Card Change Success !","payment_debiting_every_month":"*auto-debiting your credit card every month.","payment_success_and_check":"Payment success! You can check your payment result at User page.","payment_unknown_error":"Unknown error. Please contact us.\n","payment_upgrade_tips_01":"*If you're upgrading, the bill is according to the use","payment_upgrade_tips_02":"and the billing date is based on the day you subscribed.","footer_youTube":"InteRed.co - YouTube Influencer Analysis Expert 排名與分析專家","footer_privacy_policy":"Privacy Policy","footer_term_of_service":"Term of Service","contact_us":"Contact Us","contact_name":"Name","contact_email":"Email","contact_company":"Company Name","contact_website":"Company Website URL","contact_type":"Type of Your Inquiry","contact_product":"Product","contact_plan":"Brand & Agency plan","contact_cor":"Collabration","contact_social":"Social Video Marketing Consulting","contact_youtube":"Channel Data","contact_other":"Other","contact_content":"Content","contact_confirm":"Confirm","contact_back":"Back","contact_submit":"Submit","contact_success":"Submit successfully","contact_wait":"We'll send a verification mail first and reply you soon.","contact_OK":"OK","contact_blank":"Required fields can not be blank.","contact_again":"Contact again","language":"Language","language_zh":"Chinese","language_en":"English","language_es":"Spainsh","proposal_list_create":"Create","proposal_list_my":"My Proposals","proposal_list_create_name":"Title of proposal ","proposal_list_name":"Proposal","proposal_list_last_edit":"Last edited","proposal_list_creators":"Added creators","proposal_list_view":"View","proposal_list_manage":"Edit / Delete","proposal_list_confirm_delete":"Are you sure to delete ","proposal_list_other":"and","people":"people","proposal_list_team":"Team Proposals","proposal_id_info":"Channel Infomation","proposal_id_perform":"Recent Performance","proposal_id_growth":"Growth","proposal_id_download":"Download","proposal_id_add":"Add to proposal by channel URL. Eg https://www.youtube.com/channel/xxxxxx","proposal_id_find_nothing":"channel not found, check the url.","proposal_id_find_added":"This channel has already in the list","proposal_id_scroll":"*Scrolling the list","proposal_id_time_sort":"Default (Added time)","proposal_id_daily_sub_growth":"Daily Subscriptions Growth","proposal_id_daily_view":"Daily Views","proposal_id_daily_view_growth":"Daily Views Growth","proposal_id_not_owner":"Only owner can edit. ","userInfo_email":"E-mail","userInfo_identity":"Identity","dataDesc_channelType":"","dataDesc_subscriberCount":"Subscribers : Total Subscriptions of a channel.","dataDesc_totalViewCount":"Total Views : Views of all videos.","dataDesc_totalEngegementCount":"Total Engagements : The counts of all likes, dislikes and comments of last 50 videos.","dataDesc_avgEngageRate":"Avg Engagements : Total Engagements divide by views of last 50 videos.","dataDesc_videoCount":"Total videos : The number of all uploaded videos.","dataDesc_videoTheme":"Theme : The most commonly used tags of last 50 videos.","dataDesc_videoCategory":"Category : The most commonly used categories of last 50 videos.","dataDesc_recentAvgViewCount":"Avg views : The avg views of last 20 videos.","dataDesc_recentAvgEngageRate":"Avg engagement : The avg engagement rate of last 20 videos (Total Engagements divide by views).","dataDesc_recentTwoMonthAvgViewCount":"Avg views : The avg views of videos that uploaded in the last 2 month (Total views divide by video quantity).","dataDesc_recentTwoMonthAvgEngageRate":"Avg engagement : The avg engagement rate of videos that uploaded in the last 2 month. (Total Engagements divide by views).","dataDesc_todaySubscriberCount":"Daily Subscribers : The subscribers growth of last day.","dataDesc_todaySubscriberRate":"Daily Subscribers Growth : The subscribers growth of last day divide by total subscriptions.","dataDesc_todayViewCount":"Daily Views : The views growth of last day.","dataDesc_todayViewRate":"Daily Views Growth : The views growth of last day divide by total views.","dataDesc_monthSubscriberCount":"Monthly Subscribers : The subscribers growth of last 30 days.","dataDesc_monthSubscriberRate":"Monthly Subscriptions Growth : The subscribers growth of last 30 days divide by total subscriptions.","dataDesc_monthViewCount":"Monthly Views : The views growth of last 30 days.","dataDesc_monthViewRate":"Monthly Views Growth : The views growth of last 30 days divide by total views.","dataDesc_videoViews":"Views : Current views of a video.","dataDesc_videoEngage":"Engagement Rate :  Total video Engagements divide by views.","agency_payment_title":"Agency Plan","agency_payment_user":"user","agency_payment_users":"users","agency_payment_averge_price_1":"Average","agency_payment_averge_price_2":"USD per user, save","agency_payment_invite":"Get seats after payment, all invited users will have all features","agency_payment_placeholder":"How many","agency_payment_more":"when users > 15, change the number directly","agency_payment_input_error":"Numbers ≥ 1 only","agency_payment_save":"save","agency_payment_wtf":"Purchased cannot be lower than used","agency_payment_success":"Updated successfully","agency_payment_error":"Unexpected error. Retry or contact us please.","proposal_id_share":"Share","proposal_id_share_me":"Only me can access & edit","proposal_id_share_team":"My team can access","proposal_id_share_all":"Anyone can access(7 days)","proposal_id_share_copy":"Copy","proposal_id_share_back":"automatically switch to","proposal_id_share_no_access_1":"Oops! Proposal not found","proposal_id_share_no_access_2":"or you do not have the authority to access.","info_list_panel_title":"Selected Channels","info_list_panel_save":"Save","info_list_panel_unsave":"If there are any changes, click Save!","info_list_panel_all_saved":"The changes have been saved!","info_list_panel_chose":"Select a proposal","info_list_panel_deny":"That's a feature of Agency plan, ","info_list_panel_deny_2":"click to unlock.","info_list_panel_alert":"Save the changes of","info_list_panel_alert_2":"?","info_list_panel_discard":"Discard","info_list_panel_no_proposal":"No proposal has been selected!","payment_ridiculous":"*For creators who has shared this website only","user_cancel_intro_1":"We're sorry to see you go!","user_cancel_intro_2":"Please help us learn more about why you decided to cancel. Your responses will be kept confidential and will not be shared with any other party.","user_cancel_question_satisfy":"Overall, how satisfied were you with your subscription?","user_cancel_answer_very_satisfied":"Very Satisfied","user_cancel_answer_somewhat_satisfied":"Somewhat Satisfied","user_cancel_answer_neutral":"Neutral","user_cancel_answer_unsatisfied":"Unsatisfied","user_cancel_answer_very_unsatisfied":"Very Unsatisfied","user_cancel_question_reason":"What was the primary reason for canceling your subscription?","user_cancel_answer_back":"This is only temporary. I'll be back!","user_cancel_answer_didnt_meet_need":"It didn't meet my needs.","user_cancel_answer_quality":"Quality was less than expected.","user_cancel_answer_alternative":"I found an alternative.","user_cancel_answer_customer_service":"Customer service was less than expected.","user_cancel_question_purpose":"What was your goal of using this service? (Multiple selections accepted )","user_cancel_answer_find":"Find YouTube influencers","user_cancel_answer_analyze":"Analyze influencers, channel and videos","user_cancel_answer_ranking":"Check and follow the ranking list","user_cancel_answer_project":"Optimize project management of influencer marketing","user_cancel_answer_channel":"Optimize my own YouTube channels or videos","user_cancel_question_resubsribe":"Would you use our product in the future?","user_cancel_answer_definitely":"Definitely","user_cancel_answer_probably":"Probably","user_cancel_answer_notsure":"Not Sure","user_cancel_answer_probablynot":"Probably Not","user_cancel_answer_definitelynot":"Definitely Not","user_cancel_question_feedback":"What could we do to improve?","user_cancel_not_finish":"There are still some questions to be answered.","user_cancel_stop":"Cancel my subscription","info_list_no_result":"No Results Found.","info_list_no_result_adjust_filter":"Try adjusting the filters","info_list_no_channel_id":"Try searching by channel ID","info_list_search_for":"Search for","payment_upgrade_success":"Upgrade successfully! You can check your plan on User page."};

/***/ }),

/***/ "./static/languages/es.json":
/*!**********************************!*\
  !*** ./static/languages/es.json ***!
  \**********************************/
/*! exports provided: channelType, subscriberCount, totalViewCount, totalEngegementCount, avgEngageRate, videoCount, recentAvgViewCount, recentAvgEngageRate, twoMonthAvgViewCount, twoMonthAvgEngageRate, todaySubscriberCount, todaySubscriberRate, todayViewCount, todayViewRate, monthSubscriberCount, monthSubscriberRate, monthViewCount, monthViewRate, nav_service, nav_pricing, nav_contact, nav_start, nav_user_login, nav_googlelogin, nav_email, nav_password, nav_login, user_givememoneyfirst, user_check_pricing, user_not_now, user_unlock_data, user_forget_password, user_your_email, user_send_email, user_fast_signup, user_googlesignup, user_email_signup, user_password_signup, user_confirm_password, user_signup, user_already_signup, user_has_been_taken, user_has_not_been_taken, user_signup_success, user_email_verify, user_terms_agree, user_invalid_account_or_password, user_account_not_verifiied, user_correct_email_format, user_account_not_exist, user_active_verifying, slide_ranking, slide_search, slide_project_management, slide_lottery, 404_coming_soon_01, 404_coming_soon_02, 404_comingsoon_01, 404_comingsoon_02, 404_comingsoon_03, 404_learn_more, lottery_title_01, lottery_title_02, lottery_intro, lottery_url, lottery_url_example, lottery_paste_url, lottery_keyword, lottery_nokeyword, lottery_winners, lottery_number, lottery_start, lottery_result, lottery_name, lottery_content, lottery_time, lottery_redraw, lottery_url_error, lottery_keyword_error, lottery_amount_error, lottery_unknown_error, pricing, pricing_rank_01, pricing_rank_02, pricing_rank_03, pricing_info_01, pricing_info_02, pricing_info_03, pricing_data_01, pricing_data_02, pricing_data_03, pricing_propoasal_01, pricing_propoasal_02, pricing_propoasal_03, pricing_propoasal_04, pricing_month, pricing_agency_1to5_1, pricing_agency_per_user, pricing_agency_1to5_3, pricing_agency_6to10_1, pricing_agency_6to10_3, pricing_agency_11up_1, pricing_agency_11up_3, pricing_login, pricing_not_yet, pricing_purchase, pricing_purchased, pricing_major, pricing_outreach, pricing_big_data, pricing_project_management, pricing_we_know_you, pricing_data_tool, pricing_professional_analysis, pricing_control, pricing_search_tool_01, pricing_search_tool_02, prcing_easy_plan, prcing_convenient, prcing_export, prcing_proposal_success, pricing_trend_01, pricing_trend_02, pricing_youtube_marketing_01, pricing_youtube_marketing_02, pricing_difficulties, princing_saving_time, princing_key_data, princing_free_consultation, princing_give_me_email, princing_we_will_contact_soon, rank_now, rank_input, rank_big_data, rank_sort_rank, default, country, category, subscribers, daily_subscribers, monthly_subscribers, monthly_subscriptions_growth, monthly_views, monthly_views_growth, 20_avg_views, 20_avg_engage, monthly, the_avg_of_recent_videos, infoList_monthly_subscribers, infoList_monthly_subscriptions_growth, infoList_monthly_views, infoList_monthly_views_growth, infoList_20_avg_views, infoList_20_avg_engage, rank_search_name, rank_name, rank_1000, rank_updated_daily, rank_condition_1, rank_condition_2, rank_condition_3, rank, channel, channel_name, channel_subscriber, channel_daily_subscribers, channel_monthly_subscribers_gorwth, channel_monthly_subscriptions_growth, channel_monthly_views, channel_monthly_views_growth, channel_20_avg_views, channel_20_avg_engage, channel_url, rank_want_more, rank_more_data, rank_more, send, or, rank_no_result_01, rank_no_result_02, rank_no_result_03, rank_no_result_04, rank_no_result_05, rank_want_more_01, rank_want_more_02, rank_want_more_03, rank_retry, info_list_channel_search_tip, info_list_video_search_tip, info_list_channel_search, info_list_video_search, info_list_sort, info_list_sort_relevance, info_list_sort_default_relevance, info_list_sort_default, info_list_sort_high, info_list_sort_low, info_list_type_autos, info_list_type_comedy, info_list_type_education, info_list_type_entertainment, info_list_type_film, info_list_type_gaming, info_list_type_howto, info_list_type_music, info_list_type_news, info_list_type_nonprofits, info_list_type_people, info_list_type_pets, info_list_type_science, info_list_type_shows, info_list_type_sports, info_list_type_travel, info_list_channel_input, info_list_video_input, info_list_video_category, info_list_video_views, info_list_video_engage, info_list_video_channel, info_list_monthly, info_list_monthly_subscriptions_growth, info_list_monthly_views, info_list_monthly_views_growth, info_clean_list, info_list_import, info_list_already_improted, info_about, info_total_views, info_avg_engage, info_topic, info_total_videos, info_subscribers, info_info, info_theme, info_category, info_interval, info_recent, info_20, info_2month, info_20_high_views, info_20_low_views, info_20_high_engage, info_20_low_engage, info_20_avg_views, info_20_avg_engage, info_video_count, info_2month_most_video, info_data_collecting, info_last_day, info_last_day_subscribers, info_last_day_subscriber_growth, info_last_day_views, info_last_day_views_growth, info_last_month, info_last_info_last_month_subscribers, info_last_info_last_month_subscriber_growth, info_last_info_last_month_views, info_last_info_last_month_views_growth, info_graphics, info_graphics_view_minus, info_add_proposal, info_new_proposal_name, info_no_proposal, info_unnamed_proposal, delete, info_confirm_delete, ok, cancel, edit, member_account, member_user, member_signout, user_info, user_mail, user_plan, plan, user_upgrade, user_reset_password, user_old_password, user_new_password, user_new_password_again, user_password_not_match, user_reset_successfully, user_name, user_tell, user_nicknme, user_country, user_company, user_title, user_agency_team_name, user_agency_type, user_agency_remove, user_agency_confirm_remove, user_agency_invite, user_agency_invite_email, user_agency_no_result, user_agency_user_is_invited, user_agency_add_seat, user_agency_seat, user_agency_not_admin, user_agency_exit, user_agency_last_admin, user_agency_out, user_agency_exit_success, user_seat_current, user_seat_purchased, user_seat_used, user_seat_cost, user_seat_updated, user_seat_see_you_next_invoice, user_chancel, user_chancel_confirm, user_chancel_deny, user_chancel_date, user_chancel_stop_pay, user_chancel_success, user_pay_stop_pay, user_pay_history, user_pay_card, user_pay_date, user_pay_method, user_pay_amunt, user_pay_result, user_pay_success, user_pay_fail, user_pay_change_card, user_pay_next_pay, user_pay_contact, user_pay_change_card_success, payment_debiting_every_month, payment_success_and_check, payment_unknown_error, payment_upgrade_tips_01, payment_upgrade_tips_02, footer_youTube, footer_privacy_policy, footer_term_of_service, contact_us, contact_name, contact_email, contact_company, contact_website, contact_type, contact_product, contact_plan, contact_cor, contact_social, contact_youtube, contact_other, contact_content, contact_confirm, contact_back, contact_submit, contact_success, contact_wait, contact_OK, contact_blank, contact_again, language, language_zh, language_en, language_es, proposal_list_create, proposal_list_my, proposal_list_create_name, proposal_list_name, proposal_list_last_edit, proposal_list_creators, proposal_list_view, proposal_list_manage, proposal_list_confirm_delete, proposal_list_other, people, proposal_list_team, proposal_id_info, proposal_id_perform, proposal_id_growth, proposal_id_download, proposal_id_add, proposal_id_find_nothing, proposal_id_find_added, proposal_id_scroll, proposal_id_time_sort, proposal_id_daily_sub_growth, proposal_id_daily_view, proposal_id_daily_view_growth, proposal_id_not_owner, userInfo_email, userInfo_identity, dataDesc_channelType, dataDesc_subscriberCount, dataDesc_totalViewCount, dataDesc_totalEngegementCount, dataDesc_avgEngageRate, dataDesc_videoCount, dataDesc_videoTheme, dataDesc_videoCategory, dataDesc_recentAvgViewCount, dataDesc_recentAvgEngageRate, dataDesc_recentTwoMonthAvgViewCount, dataDesc_recentTwoMonthAvgEngageRate, dataDesc_todaySubscriberCount, dataDesc_todaySubscriberRate, dataDesc_todayViewCount, dataDesc_todayViewRate, dataDesc_monthSubscriberCount, dataDesc_monthSubscriberRate, dataDesc_monthViewCount, dataDesc_monthViewRate, dataDesc_videoViews, dataDesc_videoEngage, agency_payment_title, agency_payment_user, agency_payment_users, agency_payment_averge_price_1, agency_payment_averge_price_2, agency_payment_invite, agency_payment_placeholder, agency_payment_more, agency_payment_input_error, agency_payment_save, agency_payment_wtf, agency_payment_success, agency_payment_error, proposal_id_share, proposal_id_share_me, proposal_id_share_team, proposal_id_share_all, proposal_id_share_copy, proposal_id_share_back, proposal_id_share_no_access_1, proposal_id_share_no_access_2, info_list_panel_title, info_list_panel_save, info_list_panel_unsave, info_list_panel_all_saved, info_list_panel_chose, info_list_panel_deny, info_list_panel_deny_2, info_list_panel_alert, info_list_panel_alert_2, info_list_panel_discard, info_list_panel_no_proposal, payment_ridiculous, user_cancel_intro_1, user_cancel_intro_2, user_cancel_question_satisfy, user_cancel_answer_very_satisfied, user_cancel_answer_somewhat_satisfied, user_cancel_answer_neutral, user_cancel_answer_unsatisfied, user_cancel_answer_very_unsatisfied, user_cancel_question_reason, user_cancel_answer_back, user_cancel_answer_didnt_meet_need, user_cancel_answer_quality, user_cancel_answer_alternative, user_cancel_answer_customer_service, user_cancel_question_purpose, user_cancel_answer_find, user_cancel_answer_analyze, user_cancel_answer_ranking, user_cancel_answer_project, user_cancel_answer_channel, user_cancel_question_resubsribe, user_cancel_answer_definitely, user_cancel_answer_probably, user_cancel_answer_notsure, user_cancel_answer_probablynot, user_cancel_answer_definitelynot, user_cancel_question_feedback, user_cancel_not_finish, user_cancel_stop, info_list_no_result, info_list_no_result_adjust_filter, info_list_no_channel_id, info_list_search_for, payment_upgrade_success */
/***/ (function(module) {

module.exports = {"channelType":"Categoría","subscriberCount":"Suscriptores","totalViewCount":"Vistas Totales","totalEngegementCount":"La tasa de interacción","avgEngageRate":"La tasa de interacción media","videoCount":"Número de videos","recentAvgViewCount":"Vistas prom. de los últimos 20 vídeos","recentAvgEngageRate":"Interacción media de los último 20 vídeos","twoMonthAvgViewCount":"Vistas prom. en los últimos 2 meses","twoMonthAvgEngageRate":"Interacción media de los último 20 vídeos","todaySubscriberCount":"Suscriptores Diarios","todaySubscriberRate":"Crecimiento de suscriptores diarios","todayViewCount":"Vistas Diarias","todayViewRate":"Crecimineto de vistas diarias","monthSubscriberCount":"Suscriptores Mensuales","monthSubscriberRate":"Crecimiento mensual de suscriptores ","monthViewCount":"Visualizaciones de mes","monthViewRate":"Crecimiento de visualizaciones de mes","nav_service":"Precio","nav_pricing":"Precio","nav_contact":"Contáctenos","nav_start":"Empice Ya","nav_user_login":"Inciar Seción","nav_googlelogin":"Inciar seción con Google","nav_email":"Email","nav_password":"Contraseña","nav_login":"Inciar Sesión","user_givememoneyfirst":"Actualizar ahora","user_check_pricing":"Precio","user_not_now":"Ahora no","user_unlock_data":"Actualizar ahora","user_forget_password":"Olvidé mi contraseña","user_your_email":"Correo electrónico","user_send_email":"Envía el correo de verificación","user_fast_signup":"Registrarse","user_googlesignup":"Regístrase con Google","user_email_signup":"La dirección de email (para ser su cuenta y recibir el correo de verificación)","user_password_signup":"Contraseña (8-24 caracteres de longitud)","user_confirm_password":"Confirmar la contraseña","user_signup":"Registrarse","user_already_signup":"¿Ya te registaste?","user_has_been_taken":"El email ya esta en uso","user_has_not_been_taken":"Correo electrónico válido","user_signup_success":"¡Registro exitoso! Compruebe si recibiste el correo de verificación.","user_email_verify":"Compruebe si recibiste el correo electrónicode veriificación.","user_terms_agree":"Acepeto","user_invalid_account_or_password":"La contraseña no es válida. ¿Olvidaste la contraseña?","user_account_not_verifiied":"La cuenta no esta verificada.Compruebe si recibiste el correo electrónicode veriificación.","user_correct_email_format":"Compruebe si el e-mail que has introducido es correcto","user_account_not_exist":"El usuario no existe.","user_active_verifying":"Espere, por favor.","slide_ranking":"Ranking","slide_search":"Buscar","slide_project_management":"Propuesta","slide_lottery":"Sorteo de comentarios","404_coming_soon_01":"Uy, Error 404.","404_coming_soon_02":"PÁGINA NO ENCONTRADA","404_comingsoon_01":"Ofrecemos servicios de analíticas de redes sociales para las marcas, agencias y los influencers.","404_comingsoon_02":"Ofrecemos una herramienta para buscar el youtuber, reportar los datos, gestionar las propuestas.","404_comingsoon_03":"Con InteRed, usted puede aquirir las informaciones sobre los influencers.","404_learn_more":"Más Informacíon","lottery_title_01":"Sorteo de Comentarios de YouTube","lottery_title_02":"","lottery_intro":"Ofrecemos una herramienta de sorteo con uso fácil para las marca, las agencias y youtubers. Al introducir el URL del video, palabra clave y números sorteados ya sale la lista!","lottery_url":"URL","lottery_url_example":"https://www.youtube.com/watch?v=XXXXXXXXXX","lottery_paste_url":"Pegar URL ","lottery_keyword":"La palabra clave","lottery_nokeyword":"Si no tiene la palabra clave, déjelo en blanco","lottery_winners":"El número de ganadores","lottery_number":"introduzca números","lottery_start":"¡Empieza!","lottery_result":"Resultado","lottery_name":"Nombre","lottery_content":"Comentario","lottery_time":"última modificaión","lottery_redraw":"¡Hazlo otra vez!","lottery_url_error":"Por favor, introduce el URL del vídeo","lottery_keyword_error":"Los comentario no coinciden la palabra clave!","lottery_amount_error":"El número de ganadores es más que el número de comentarios!","lottery_unknown_error":"Por favor, introduce un vídeo válido","pricing":"Precio","pricing_rank_01":"Lista de ranking","pricing_rank_02":"8 datos claves sobre el canal","pricing_rank_03":"Ranking de YouTube en el mundo","pricing_info_01":"Buscar sobre el influencer","pricing_info_02":"Buscar sobre el influencer o el vídeo","pricing_info_03":"clasificar y filtrar","pricing_data_01":"Análisis de datos","pricing_data_02":"Datos y análisis de efectos de videos","pricing_data_03":"Monstrar la tasa de crecimientos y intracciones de YouTubers intuitivamente.","pricing_propoasal_01":"Gestión de los propuestas.","pricing_propoasal_02":"Gestión de la lista de artistas y el ranking personalizado ","pricing_propoasal_03":"La cooperación en equipo","pricing_propoasal_04":"Descarga y compartir archivos con un solo clic","pricing_month":"/ mes","pricing_agency_1to5_1":"para el 1º al 5°","pricing_agency_per_user":"por usuario","pricing_agency_1to5_3":"$199 / mes","pricing_agency_6to10_1":"para los próximos 6° al 10°","pricing_agency_6to10_3":"$99 / mes","pricing_agency_11up_1":"para los demás","pricing_agency_11up_3":"$29 / mes","pricing_login":"Inciae Seción","pricing_not_yet":"proximamente ","pricing_purchase":"Comprar Ahora","pricing_purchased":"Ya Comprado","pricing_major":"Optimiza tu marketing en YouTube","pricing_outreach":"Buscar sobre los Influencers","pricing_big_data":"Análisis de macrodatos","pricing_project_management":"Gestión de propuestass","pricing_we_know_you":"InteRed sabe lo que necesite.","pricing_data_tool":"InteRed es una herraminta para analizar todos los KPI de YouTube que importan a su negocio.","pricing_professional_analysis":"No importa que sea agencia, la marca o influencers, presentamos todos los KPIs de YouTube y los análisis de efectos de videos que impota su negocio.Con Intered, tiene éxito en el marketing y las estrategias de creación.","pricing_control":"A la vanguardia de las tendencias y conoce el rendimiento del influencer.","pricing_search_tool_01":"Agencia, marca o artista pueden encontrar canales de YouTube precisamente con IneRed.","pricing_search_tool_02":"dominar los índices cruciales, para ultilizar la estrategia marketing más adecudo y buscar con cierta condición","prcing_easy_plan":"Facilita la propuesta comercial","prcing_convenient":"con el sistema getión de propuestas incorporado en InteRed, no le hace falta gastar tiempo buscando, copianado y pegando","prcing_export":"La agencia o la marca puede exportar sus lista de propuesta sobreYoutube con el base de datos","prcing_proposal_success":"InteRed le ayudamos a lograr con éxito su objetivo de la propuesta comercial.","pricing_trend_01":"Marketing de Youtube han alcanzado la mayoría de edad","pricing_trend_02":"¿Está en la vanguardia de las tendencias?","pricing_youtube_marketing_01":"hoy en dia, las actividades comerciales cada vez más activas en YouTube","pricing_youtube_marketing_02":"y cada vez más marcas deciden elegir video como el tipo de medio para promocionar","pricing_difficulties":"Penamos para el éxito de su negocio en YouTube.","princing_saving_time":"Con InteRed puede obtener los datos valiosos rápido y eficientemente.","princing_key_data":"Le queremos ofrecer un servicio que puede ayudar a generar acciones de marketing en YouTube completamente exitosas.","princing_free_consultation":"Solicite una consulta","princing_give_me_email":"Introduzca aquí su dirección de email","princing_we_will_contact_soon":"Hemos recibido su petición de información, le contestaremos lo antes posible.","rank_now":"Buscar sobre el ranking del YouTuber","rank_input":"Ingresar la URL o nombre del canal","rank_big_data":"","rank_sort_rank":"","default":"Por defecto","country":"Ubicación","category":"Categoría","subscribers":"Suscriptores","daily_subscribers":"Suscriptores Diarios","monthly_subscribers":"Suscriptores al mes","monthly_subscriptions_growth":"Crecimiento mensual de suscriptores","monthly_views":"Vistas mensuales","monthly_views_growth":"Crecimiento mensual de vistas ","20_avg_views":"Promedio de vistas de los últimos 20 vídeos","20_avg_engage":"Interacción media de los último 20 vídeos","monthly":"Mensuales","the_avg_of_recent_videos":"Los ult. 20 vídeos","infoList_monthly_subscribers":"Suscriptores","infoList_monthly_subscriptions_growth":"Crecimiento de suscriptores","infoList_monthly_views":"Vistas","infoList_monthly_views_growth":"Crecimientol de vistas","infoList_20_avg_views":"Tasa de vista prom.","infoList_20_avg_engage":"La tasa media de interacción","rank_search_name":"O buscar el nombre directamente en estas condiciones","rank_name":"Introduzca el nombre del cannal","rank_1000":"Incluye los canales con más de un mil de suscriptores","rank_updated_daily":"La información se actualiza diariamente","rank_condition_1":"en","rank_condition_2":",","rank_condition_3":"","rank":"Ranking","channel":"Canal","channel_name":"El nombre del canal","channel_subscriber":"Suscriptores","channel_daily_subscribers":"Suscriptores diarios","channel_monthly_subscribers_gorwth":"Suscriptores por mes","channel_monthly_subscriptions_growth":"Crecimiento de suscriptores al mes","channel_monthly_views":"Vistas totales por mes","channel_monthly_views_growth":"Crecimiento de vistas totales por mes","channel_20_avg_views":"Promedio de visualizaciones de los últimos 20 vídeos","channel_20_avg_engage":"La tasa media de interacción de los últimos 20 vídeos","channel_url":"URL del canal","rank_want_more":"¿Más informaciones de los canales?","rank_more_data":"Más datos","rank_more":"Más","send":"Enviar","or":" o","rank_no_result_01":"¿No hay resultado?","rank_no_result_02":"Podría intentar","rank_no_result_03":"ingresar otras palabras","rank_no_result_04":"Cambiar la ubicación a All","rank_no_result_05":"Introduzca el nombre del cannal","rank_want_more_01":"¿Quiere ver más?","rank_want_more_02":"¡Actualizar su plan ahora!","rank_want_more_03":"Ingrese el nombre del canal","rank_retry":"Inténtelo de nuevo","info_list_channel_search_tip":"Nombre del canal","info_list_video_search_tip":"Tema del vídeo","info_list_channel_search":"Buscar sobre los canales","info_list_video_search":"Buscar sobre los vídeos","info_list_sort":"Ordenar por","info_list_sort_relevance":"Pertinencia ","info_list_sort_default_relevance":"Pertinencia (por defecto)","info_list_sort_default":"Suscrito (por defecto)","info_list_sort_high":"de más alto a más bajo","info_list_sort_low":"de más bajo a más alto","info_list_type_autos":"Vehículos","info_list_type_comedy":"Comedia","info_list_type_education":"Educación","info_list_type_entertainment":"Entretenimiento\n\n","info_list_type_film":"Cine y animación","info_list_type_gaming":"Videojuegos","info_list_type_howto":"Consejos y estilo","info_list_type_music":"Música","info_list_type_news":"Noticias y política","info_list_type_nonprofits":"ONG y activismo","info_list_type_people":"Gente y blogs","info_list_type_pets":"Mascotas y animales","info_list_type_science":"Ciencia y tecnología","info_list_type_shows":"Programas","info_list_type_sports":"Deportes","info_list_type_travel":"Viajes y eventos","info_list_channel_input":"Buscar sobre el nombre del canal","info_list_video_input":"Buscar sobre el tema, como maquillaje","info_list_video_category":"Categorías de YouTube","info_list_video_views":"Vistas","info_list_video_engage":"Tasa de Interacción","info_list_video_channel":"Información del canal","info_list_monthly":"El último mes","info_list_monthly_subscriptions_growth":"El crecimiento de suscriptores por mes","info_list_monthly_views":"Vistas","info_list_monthly_views_growth":"Interacción media de los últimos 20 videos","info_clean_list":"Eliminar","info_list_import":"Impotar","info_list_already_improted":"Ya se ha importado","info_about":"Informacioón del canal","info_total_views":"Vistas totales","info_avg_engage":"La tasa media de interacción","info_topic":"Categoría","info_total_videos":"Números de videos","info_subscribers":"Suscriptores","info_info":"Información","info_theme":"Tema","info_category":"Categoría","info_interval":"","info_recent":"El rendimiento de los últimos videos","info_20":"Los último 20 videos","info_2month":"último 2 meses","info_20_high_views":"Las vistas más alta","info_20_low_views":"Las vistas más baja","info_20_high_engage":"Interacción más alta","info_20_low_engage":"Interacción más baja","info_20_avg_views":"Promedio de vistas","info_20_avg_engage":"La tasa media de interacción","info_video_count":"videos","info_2month_most_video":"(240 videos como máximo)","info_data_collecting":"Recogiendo datos...","info_last_day":"El último día","info_last_day_subscribers":"Suscriptores","info_last_day_subscriber_growth":"Crecimiento ","info_last_day_views":"Vistas","info_last_day_views_growth":"Crecimiento ","info_last_month":"El último mes","info_last_info_last_month_subscribers":"Suscriptores","info_last_info_last_month_subscriber_growth":"Crecimiento ","info_last_info_last_month_views":"Vistas","info_last_info_last_month_views_growth":"Crecimiento ","info_graphics":"Gráfico de ejecución","info_graphics_view_minus":"El número de vistas será negativo si se elimina el vídeo ","info_add_proposal":"Añadir una propuesta","info_new_proposal_name":"Crear una propuesta","info_no_proposal":"No ha añadido ninguna propuesta","info_unnamed_proposal":"Propuesta sin nombre","delete":"Eliminar","info_confirm_delete":"¿Está seguro que desea eliminar?","ok":"Sí","cancel":"Cancelar","edit":"Editar","member_account":"Cuenta","member_user":"Usuario","member_signout":"Cerrar sesíon","user_info":"Usuario","user_mail":"Email","user_plan":"Plan","plan":"Plan","user_upgrade":"Actualizar","user_reset_password":"Cambiar la contraseña","user_old_password":"La contraseña actual","user_new_password":"Ingrese la nueva contraseña","user_new_password_again":"Confirmar nueva contraseña","user_password_not_match":"Las contraseña no coinciden","user_reset_successfully":"Las contraseña coinciden","user_name":"Nombre","user_tell":"Número de teléfono","user_nicknme":"Apodo","user_country":"Ubiación","user_company":"Empresa","user_title":"Cargo","user_agency_team_name":"Nombre de su eqipo","user_agency_type":"","user_agency_remove":"Eliminar","user_agency_confirm_remove":"¿Está seguro que desea eliminar?","user_agency_invite":"invitar a colaboradores","user_agency_invite_email":"Introduzca la dirección de email","user_agency_no_result":"el correo electrónico que ha ingresado no coincide con ninguna cuenta","user_agency_user_is_invited":"Error de invitación, este usuario ya ha unido al otro grupo.","user_agency_add_seat":"Administar las plazas","user_agency_seat":"Queda__plazas","user_agency_not_admin":"Error de actualización, confirme su derechos de acceso, por favor.","user_agency_exit":"Salir","user_agency_last_admin":"Asigne otra administrador antes de salir, por favor.","user_agency_out":"¿Está seguro que desea salir?","user_agency_exit_success":"Ha salido del grupo.","user_seat_current":"Actual","user_seat_purchased":"disponiblea:","user_seat_used":"Ultilizado:","user_seat_cost":"Precio:","user_seat_updated":"Cambiar a","user_seat_see_you_next_invoice":"El precio se cambia en la próxima factura","user_chancel":"confirmar cancelacion","user_chancel_confirm":"Cancelar la suscripción","user_chancel_deny":"No, gracias.","user_chancel_date":"La suscripcioón caduca en ","user_chancel_stop_pay":" y no le vamos a cobra.","user_chancel_success":"Ha cancelado la suscripción","user_pay_stop_pay":"Ha cancelado la suscripción y caduca en","user_pay_history":"historial de pagos","user_pay_card":"la tarjeta que está utilizando","user_pay_date":"Fecha","user_pay_method":"Forma de pago","user_pay_amunt":"monto del pago","user_pay_result":"pago resultante","user_pay_success":"Pago realizado con éxito","user_pay_fail":"Error en el pago","user_pay_change_card":"Pagar con otra tarjeta","user_pay_next_pay":"Su próxima fecha de pago","user_pay_contact":"si tiene alguna pregunta no dude en contactarnos","user_pay_change_card_success":"¡Ha cambiado la tarjeta!","payment_debiting_every_month":"*Pagos mensuales debitados automáticamente","payment_success_and_check":"¡El pago ha sido realizado con éxito! Puede ver la información de su pago en la página de ¨Usuario¨","payment_unknown_error":"Se ha producido un error desconocido, contáctenos, por favor. ","payment_upgrade_tips_01":"*Si actualiza, le cobramos según el uso y su fecha ","payment_upgrade_tips_02":"de facturación se basa en el día que se suscribió","footer_youTube":"InteRed.co - El Experto en Analítica de YouTube","footer_privacy_policy":"Privacidad","footer_term_of_service":"Condiciónes","contact_us":"Contáctenos","contact_name":"Nombre","contact_email":"Email","contact_company":"Nomre de empresa","contact_website":"URL del web de su empresa","contact_type":"El tipo de consulta","contact_product":"Producto","contact_plan":"Planes para marcas y agencias","contact_cor":"colaboración","contact_social":"Consultoría de Marketing ","contact_youtube":"Datos de los canales","contact_other":"Otros","contact_content":"Contenido","contact_confirm":"Confirmar","contact_back":"Volver","contact_submit":"Enviar","contact_success":"Se envió con éxito","contact_wait":"Le enviaremos  un correo electrónico de verificación y  le contestaremos lo antes posible. ","contact_OK":"OK","contact_blank":"Por favor no deje espacios requeridos sin llenar.","contact_again":"Póngase nuevamente en contacto","language":"Idioma","language_zh":"Chino","language_en":"Inglés","language_es":"Español","proposal_list_create":"Crear","proposal_list_my":"Mis propuestas","proposal_list_create_name":"Título de la propuesta","proposal_list_name":"Nombre del propuesta","proposal_list_last_edit":"La última modificación","proposal_list_creators":"Añadir creatores","proposal_list_view":"Ver","proposal_list_manage":"Editar/Elimiar","proposal_list_confirm_delete":"Está seguro de que desea eliminar","proposal_list_other":"y ","people":"personas","proposal_list_team":"Propuesta del equipo","proposal_id_info":"Información del canal","proposal_id_perform":"Resultados recientes ","proposal_id_growth":"Crecimiento","proposal_id_download":"Descargar","proposal_id_add":"Añadir a la propuesta con el URL del canal. P.ej, https://www.youtube.com/channel/xxxxxx","proposal_id_find_nothing":"No coinciden con ningún canal, por favor compruebe el URL.","proposal_id_find_added":"El canal ya esta en la lista","proposal_id_scroll":"*Desplazarse por la lista d","proposal_id_time_sort":"Ninguno(Tiempo añadido)","proposal_id_daily_sub_growth":"Crecimiento de suscriptores diario","proposal_id_daily_view":"Vistas diarias","proposal_id_daily_view_growth":"Crecimiento de vistas al día","proposal_id_not_owner":"Solo la persona que posee la propuesta puede editar","userInfo_email":"Email","userInfo_identity":"Identidad","dataDesc_channelType":"Categoría del canal: El tipo de vídeo más subido ","dataDesc_subscriberCount":"Suscriptores: Suscriptores del canal","dataDesc_totalViewCount":"Vistas totales: Vistas de todo los videos","dataDesc_totalEngegementCount":"La Tasa de Interacción : likes, dislikes, cometarios y shares de los último 50 videos","dataDesc_avgEngageRate":"La Tasa Media de Interacción: likes, cometarios y shares dividido por los último 50 videos","dataDesc_videoCount":"Números de videos: El número del videos que ha subido","dataDesc_videoTheme":"Tema: La etiqueta más usado en los último 50 videos","dataDesc_videoCategory":"La categoría más clasificado: La categoría mas clasficado de los últimos 50 videos","dataDesc_recentAvgViewCount":"Vistas Promedio: El promedio de vistas de los últimos 20 videos","dataDesc_recentAvgEngageRate":"La Tasa Media de Interacción: La tasa media de Interacciónde los último 20 videos","dataDesc_recentTwoMonthAvgViewCount":"La tasa media de vistas: Vistas de los videos que subiero en los dos últimos meses","dataDesc_recentTwoMonthAvgEngageRate":"La Tasa Media de Interacción: La tasa media de Interacción de  los videos que han subido en los dos últimos meses","dataDesc_todaySubscriberCount":"Suscriptores al día: El crecimiento de suscriptores en el último día","dataDesc_todaySubscriberRate":"El crecimiento suscriptores al día: La tasa del crecimiento de suscriptores de hoy compara con el de ayer","dataDesc_todayViewCount":"Vistas diaria: El crecimiento de la visualizción del último día","dataDesc_todayViewRate":"El crecimiento de vista diaria: El crecimiento de la vistas de hoy compara con total","dataDesc_monthSubscriberCount":"Suscriptores mensuales: El crecimiento de suscriptores en el último mes","dataDesc_monthSubscriberRate":"El crecimiento de suscriptores mensuales: El crecimiento de suscriptores de este mes divde por el crecimiento de suscriptores total ","dataDesc_monthViewCount":"Vistas mensuales: El crecimiento de las vistas de los último 30 días","dataDesc_monthViewRate":"El Crecimiento de Vistas Mensuales: El crecimiento de las visualizaciónes de los último 30 días","dataDesc_videoViews":"Vistas:Vistas de los videos","dataDesc_videoEngage":"La Tasa de Interacción : likes, dislikes, cometarios y shares de los último 50 videos","agency_payment_title":"Plan para agencias","agency_payment_user":"Usuario","agency_payment_users":"Usuarios","agency_payment_averge_price_1":"Promedio","agency_payment_averge_price_2":"dólares por cada usuario, ahorra","agency_payment_invite":"Consiga plazas despúes de pagar y todo los invitados pueden usar todo los funciones ","agency_payment_placeholder":"Cuántos","agency_payment_more":"Cuando hay más de 15 usuarios, se pueden cambiar el número directamente. ","agency_payment_input_error":"Introduzca número más de uno","agency_payment_save":"ahorra","agency_payment_wtf":"El número de las plazas hay que ser más que el de usuarios","agency_payment_success":"Actualización finalizada","agency_payment_error":"Error inesperado. Intentelo otra vez o  póngase en contacto con nosotros ","proposal_id_share":"Compartir","proposal_id_share_me":"Solo yo puedo acceder y editar","proposal_id_share_team":"Mi equipo puede acceder","proposal_id_share_all":"cualquiera puede acceder (7 días)","proposal_id_share_copy":"Copiar","proposal_id_share_back":"Cambiar automáticamente a ","proposal_id_share_no_access_1":"Uyyy, no se encuentra la propuesta.","proposal_id_share_no_access_2":"quizas no tiene la autorizacion de acceso ","info_list_panel_title":"Canales elegidos","info_list_panel_save":"Guardar","info_list_panel_unsave":"Si hay algunos cambios, haga click en el ¨Guardar¨","info_list_panel_all_saved":"se han guardado los cambios","info_list_panel_chose":"Selecionar","info_list_panel_deny":"Eso es una función del plan de agencia","info_list_panel_deny_2":"Haz un click para desbloquearlo","info_list_panel_alert":"¿Guardar los cambios de","info_list_panel_alert_2":"?","info_list_panel_discard":"Descartar ","info_list_panel_no_proposal":"No ha selecionado ninguna propuesta","payment_ridiculous":"*Solo para los que han compartido esta página","user_cancel_intro_1":"Lamentamos que quiera irse.","user_cancel_intro_2":"Por favor, ayudenos a saber porque se decide a darse baja. Todas las respuestas de este cuestionario serán analizadas de forma totalmente confidencial y no será compartida con ningún tercero.","user_cancel_question_satisfy":"¿Cuál es su nivel de satisfacción general con su subscripción?","user_cancel_answer_very_satisfied":"muy satisfecho","user_cancel_answer_somewhat_satisfied":"Satisfechos","user_cancel_answer_neutral":"Ni satisfechos, ni insatisfechos","user_cancel_answer_unsatisfied":"Insatisfechos","user_cancel_answer_very_unsatisfied":"Muy insatisfechos","user_cancel_question_reason":"¿Cuál es el motivo principal de cancelar?","user_cancel_answer_back":"Ahora no lo necesito, volvere cuando necesite","user_cancel_answer_didnt_meet_need":"No cubre todas mis necesidades.","user_cancel_answer_quality":"La calidad es un poco peor que lo que yo esperaba","user_cancel_answer_alternative":"Encontré un producto alternativo","user_cancel_answer_customer_service":"El servicio al cliente es peor a lo que se esperaba.","user_cancel_question_purpose":"Cuál era su motivo para utilizar este servicio? (selecciones múltiples)","user_cancel_answer_find":"Buscar influencers de YouTube","user_cancel_answer_analyze":"Analizar influencers, canales y videos","user_cancel_answer_ranking":"Visualizar la lista del ranking","user_cancel_answer_project":"Optimizar la gestión de ","user_cancel_answer_channel":"Optimizar mi canal y los videos.","user_cancel_question_resubsribe":"¿Volverá a InteRed en el futuro?","user_cancel_answer_definitely":"por supuesto","user_cancel_answer_probably":"Probablemente","user_cancel_answer_notsure":"no estoy seguro ","user_cancel_answer_probablynot":"Probablemente no","user_cancel_answer_definitelynot":"Definitivamente no","user_cancel_question_feedback":"Qué podemos hacer para mejorar","user_cancel_not_finish":"todavia quedan preguntas sin contestar","user_cancel_stop":"Cancelar la suscripción","info_list_no_result":"No se han encontrado resultados ","info_list_no_result_adjust_filter":"Intentar cambiar los condiciones","info_list_no_channel_id":"Intentar introducir el ID del canal","info_list_search_for":"Buscar sobre","payment_upgrade_success":"¡Actualizción completa! Puede mirar a su cuenta."};

/***/ }),

/***/ "./static/languages/languages.js":
/*!***************************************!*\
  !*** ./static/languages/languages.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _languages_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../languages/en.json */ "./static/languages/en.json");
var _languages_en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../languages/en.json */ "./static/languages/en.json", 1);
/* harmony import */ var _languages_zh_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../languages/zh.json */ "./static/languages/zh.json");
var _languages_zh_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../languages/zh.json */ "./static/languages/zh.json", 1);
/* harmony import */ var _languages_es_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../languages/es.json */ "./static/languages/es.json");
var _languages_es_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../languages/es.json */ "./static/languages/es.json", 1);



var locale = {
  en: _languages_en_json__WEBPACK_IMPORTED_MODULE_0__,
  zh: _languages_zh_json__WEBPACK_IMPORTED_MODULE_1__,
  es: _languages_es_json__WEBPACK_IMPORTED_MODULE_2__
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./static/languages/zh.json":
/*!**********************************!*\
  !*** ./static/languages/zh.json ***!
  \**********************************/
/*! exports provided: channelType, subscriberCount, totalViewCount, totalEngegementCount, avgEngageRate, videoCount, recentAvgViewCount, recentAvgEngageRate, twoMonthAvgViewCount, twoMonthAvgEngageRate, todaySubscriberCount, todaySubscriberRate, todayViewCount, todayViewRate, monthSubscriberCount, monthSubscriberRate, monthViewCount, monthViewRate, nav_service, nav_pricing, nav_contact, nav_start, nav_user_login, nav_googlelogin, nav_email, nav_password, nav_login, user_givememoneyfirst, user_check_pricing, user_not_now, user_unlock_data, user_forget_password, user_your_email, user_send_email, user_fast_signup, user_googlesignup, user_email_signup, user_password_signup, user_confirm_password, user_signup, user_already_signup, user_has_been_taken, user_has_not_been_taken, user_signup_success, user_email_verify, user_terms_agree, user_invalid_account_or_password, user_account_not_verifiied, user_correct_email_format, user_account_not_exist, user_active_verifying, slide_ranking, slide_search, slide_project_management, slide_lottery, 404_coming_soon_01, 404_coming_soon_02, 404_comingsoon_01, 404_comingsoon_02, 404_comingsoon_03, 404_learn_more, lottery_title_01, lottery_title_02, lottery_intro, lottery_url, lottery_url_example, lottery_paste_url, lottery_keyword, lottery_nokeyword, lottery_winners, lottery_number, lottery_start, lottery_result, lottery_name, lottery_content, lottery_time, lottery_redraw, lottery_url_error, lottery_keyword_error, lottery_amount_error, lottery_unknown_error, pricing, pricing_rank_01, pricing_rank_02, pricing_rank_03, pricing_info_01, pricing_info_02, pricing_info_03, pricing_data_01, pricing_data_02, pricing_data_03, pricing_propoasal_01, pricing_propoasal_02, pricing_propoasal_03, pricing_propoasal_04, pricing_month, pricing_agency_1to5_1, pricing_agency_per_user, pricing_agency_1to5_3, pricing_agency_6to10_1, pricing_agency_6to10_3, pricing_agency_11up_1, pricing_agency_11up_3, pricing_login, pricing_not_yet, pricing_purchase, pricing_purchased, pricing_major, pricing_outreach, pricing_big_data, pricing_project_management, pricing_we_know_you, pricing_data_tool, pricing_professional_analysis, pricing_control, pricing_search_tool_01, pricing_search_tool_02, prcing_easy_plan, prcing_convenient, prcing_export, prcing_proposal_success, pricing_trend_01, pricing_trend_02, pricing_youtube_marketing_01, pricing_youtube_marketing_02, pricing_difficulties, princing_saving_time, princing_key_data, princing_free_consultation, princing_give_me_email, princing_we_will_contact_soon, rank_now, rank_input, rank_big_data, rank_sort_rank, default, country, category, subscribers, daily_subscribers, monthly_subscribers, monthly_subscriptions_growth, monthly_views, monthly_views_growth, 20_avg_views, 20_avg_engage, monthly, the_avg_of_recent_videos, infoList_monthly_subscribers, infoList_monthly_subscriptions_growth, infoList_monthly_views, infoList_monthly_views_growth, infoList_20_avg_views, infoList_20_avg_engage, rank_search_name, rank_name, rank_1000, rank_updated_daily, rank_condition_1, rank_condition_2, rank_condition_3, rank, channel, channel_name, channel_subscriber, channel_daily_subscribers, channel_monthly_subscribers_gorwth, channel_monthly_subscriptions_growth, channel_monthly_views, channel_monthly_views_growth, channel_20_avg_views, channel_20_avg_engage, channel_url, rank_want_more, rank_more_data, rank_more, send, or, rank_no_result_01, rank_no_result_02, rank_no_result_03, rank_no_result_04, rank_no_result_05, rank_want_more_01, rank_want_more_02, rank_want_more_03, rank_retry, info_list_channel_search_tip, info_list_video_search_tip, info_list_channel_search, info_list_video_search, info_list_sort, info_list_sort_relevance, info_list_sort_default_relevance, info_list_sort_default, info_list_sort_high, info_list_sort_low, info_list_type_autos, info_list_type_comedy, info_list_type_education, info_list_type_entertainment, info_list_type_film, info_list_type_gaming, info_list_type_howto, info_list_type_music, info_list_type_news, info_list_type_nonprofits, info_list_type_people, info_list_type_pets, info_list_type_science, info_list_type_shows, info_list_type_sports, info_list_type_travel, info_list_channel_input, info_list_video_input, info_list_video_category, info_list_video_views, info_list_video_engage, info_list_video_channel, info_list_monthly, info_list_monthly_subscriptions_growth, info_list_monthly_views, info_list_monthly_views_growth, info_clean_list, info_list_import, info_list_already_improted, info_about, info_total_views, info_avg_engage, info_topic, info_total_videos, info_subscribers, info_info, info_theme, info_category, info_interval, info_recent, info_20, info_2month, info_20_high_views, info_20_low_views, info_20_high_engage, info_20_low_engage, info_20_avg_views, info_20_avg_engage, info_video_count, info_2month_most_video, info_data_collecting, info_last_day, info_last_day_subscribers, info_last_day_subscriber_growth, info_last_day_views, info_last_day_views_growth, info_last_month, info_last_info_last_month_subscribers, info_last_info_last_month_subscriber_growth, info_last_info_last_month_views, info_last_info_last_month_views_growth, info_graphics, info_graphics_view_minus, info_add_proposal, info_new_proposal_name, info_no_proposal, info_unnamed_proposal, delete, info_confirm_delete, ok, cancel, edit, member_account, member_user, member_signout, user_info, user_mail, user_plan, plan, user_upgrade, user_reset_password, user_old_password, user_new_password, user_new_password_again, user_password_not_match, user_reset_successfully, user_name, user_tell, user_nicknme, user_country, user_company, user_title, user_agency_team_name, user_agency_type, user_agency_remove, user_agency_confirm_remove, user_agency_invite, user_agency_invite_email, user_agency_no_result, user_agency_user_is_invited, user_agency_add_seat, user_agency_seat, user_agency_not_admin, user_agency_exit, user_agency_last_admin, user_agency_out, user_agency_exit_success, user_seat_current, user_seat_purchased, user_seat_used, user_seat_cost, user_seat_updated, user_seat_see_you_next_invoice, user_chancel, user_chancel_confirm, user_chancel_deny, user_chancel_date, user_chancel_stop_pay, user_chancel_success, user_pay_stop_pay, user_pay_history, user_pay_card, user_pay_date, user_pay_method, user_pay_amunt, user_pay_result, user_pay_success, user_pay_fail, user_pay_change_card, user_pay_next_pay, user_pay_contact, user_pay_change_card_success, payment_debiting_every_month, payment_success_and_check, payment_unknown_error, payment_upgrade_tips_01, payment_upgrade_tips_02, footer_youTube, footer_privacy_policy, footer_term_of_service, contact_us, contact_name, contact_email, contact_company, contact_website, contact_type, contact_product, contact_plan, contact_cor, contact_social, contact_youtube, contact_other, contact_content, contact_confirm, contact_back, contact_submit, contact_success, contact_wait, contact_OK, contact_blank, contact_again, language, language_zh, language_en, language_es, proposal_list_create, proposal_list_my, proposal_list_create_name, proposal_list_name, proposal_list_last_edit, proposal_list_creators, proposal_list_view, proposal_list_manage, proposal_list_confirm_delete, proposal_list_other, people, proposal_list_team, proposal_id_info, proposal_id_perform, proposal_id_growth, proposal_id_download, proposal_id_add, proposal_id_find_nothing, proposal_id_find_added, proposal_id_scroll, proposal_id_time_sort, proposal_id_daily_sub_growth, proposal_id_daily_view, proposal_id_daily_view_growth, proposal_id_not_owner, userInfo_email, userInfo_identity, dataDesc_channelType, dataDesc_subscriberCount, dataDesc_totalViewCount, dataDesc_totalEngegementCount, dataDesc_avgEngageRate, dataDesc_videoCount, dataDesc_videoTheme, dataDesc_videoCategory, dataDesc_recentAvgViewCount, dataDesc_recentAvgEngageRate, dataDesc_recentTwoMonthAvgViewCount, dataDesc_recentTwoMonthAvgEngageRate, dataDesc_todaySubscriberCount, dataDesc_todaySubscriberRate, dataDesc_todayViewCount, dataDesc_todayViewRate, dataDesc_monthSubscriberCount, dataDesc_monthSubscriberRate, dataDesc_monthViewCount, dataDesc_monthViewRate, dataDesc_videoViews, dataDesc_videoEngage, agency_payment_title, agency_payment_user, agency_payment_users, agency_payment_averge_price_1, agency_payment_averge_price_2, agency_payment_invite, agency_payment_placeholder, agency_payment_more, agency_payment_input_error, agency_payment_save, agency_payment_wtf, agency_payment_success, agency_payment_error, proposal_id_share, proposal_id_share_me, proposal_id_share_team, proposal_id_share_all, proposal_id_share_copy, proposal_id_share_back, proposal_id_share_no_access_1, proposal_id_share_no_access_2, info_list_panel_title, info_list_panel_save, info_list_panel_unsave, info_list_panel_all_saved, info_list_panel_chose, info_list_panel_deny, info_list_panel_deny_2, info_list_panel_alert, info_list_panel_alert_2, info_list_panel_discard, info_list_panel_no_proposal, payment_ridiculous, user_cancel_intro_1, user_cancel_intro_2, user_cancel_question_satisfy, user_cancel_answer_very_satisfied, user_cancel_answer_somewhat_satisfied, user_cancel_answer_neutral, user_cancel_answer_unsatisfied, user_cancel_answer_very_unsatisfied, user_cancel_question_reason, user_cancel_answer_back, user_cancel_answer_didnt_meet_need, user_cancel_answer_quality, user_cancel_answer_alternative, user_cancel_answer_customer_service, user_cancel_question_purpose, user_cancel_answer_find, user_cancel_answer_analyze, user_cancel_answer_ranking, user_cancel_answer_project, user_cancel_answer_channel, user_cancel_question_resubsribe, user_cancel_answer_definitely, user_cancel_answer_probably, user_cancel_answer_notsure, user_cancel_answer_probablynot, user_cancel_answer_definitelynot, user_cancel_question_feedback, user_cancel_not_finish, user_cancel_stop, info_list_no_result, info_list_no_result_adjust_filter, info_list_no_channel_id, info_list_search_for, payment_upgrade_success */
/***/ (function(module) {

module.exports = {"channelType":"頻道類型","subscriberCount":"訂閱數","totalViewCount":"總觀看數","totalEngegementCount":"總互動數","avgEngageRate":"平均互動率","videoCount":"影片總數","recentAvgViewCount":"近20支平均觀看數","recentAvgEngageRate":"近20支平均互動率","twoMonthAvgViewCount":"近2個月平均觀看數","twoMonthAvgEngageRate":"近2個月平均互動率","todaySubscriberCount":"日訂閱數","todaySubscriberRate":"日訂閱成長率","todayViewCount":"日觀看數","todayViewRate":"日觀看成長率","monthSubscriberCount":"月訂閱數","monthSubscriberRate":"月訂閱成長率","monthViewCount":"月觀看數","monthViewRate":"月觀看成長率","nav_service":"服務與方案","nav_pricing":"付費方案","nav_contact":"聯絡我們","nav_start":"開始使用","nav_user_login":"帳號登入","nav_googlelogin":"使用 Google 帳號登入","nav_email":"Email 帳號","nav_password":"密碼","nav_login":"登入","user_givememoneyfirst":"請先升級方案以使用","user_check_pricing":"查看方案","user_not_now":"不是現在","user_unlock_data":"升級以獲得資料","user_forget_password":"忘記密碼","user_your_email":"輸入信箱以取得密碼","user_send_email":"發送信件","user_fast_signup":"快速註冊","user_googlesignup":"使用 Google 帳號註冊","user_email_signup":"Email （作為帳號與收取驗證信）","user_password_signup":"密碼（限制8 - 24位英文與數字）","user_confirm_password":"請再次輸入密碼","user_signup":"註冊","user_already_signup":"已經註冊過了?","user_has_been_taken":"email已被使用","user_has_not_been_taken":"此信箱尚未註冊","user_signup_success":"註冊成功，請至信箱收取驗證信","user_email_verify":"驗證信發送成功，請至信箱收件","user_terms_agree":"我同意","user_invalid_account_or_password":"密碼錯誤，檢查或點選下方忘記密碼","user_account_not_verifiied":"帳號未驗證，請至信箱收取驗證信","user_correct_email_format":"請輸入正確的email格式","user_account_not_exist":"此帳號不存在","user_active_verifying":"資料驗證中...請稍後","slide_ranking":"排行榜","slide_search":"網紅檢索","slide_project_management":"提案管理","slide_lottery":"抽獎助手","404_coming_soon_01":"Oops! 404 Error.","404_coming_soon_02":"頁面不存在","404_comingsoon_01":"為了服務品牌、代理商以及 YouTube 創作者（YouTuber），","404_comingsoon_02":"InteRed將提供創作者檢索、數據圖表、提案管理等功能，","404_comingsoon_03":"讓您在 YouTube 行銷活動上感受前所未有的便利。","404_learn_more":"了解更多","lottery_title_01":"YouTube 影片留言抽獎","lottery_title_02":"","lottery_intro":"為了讓品牌、代理商以及 YouTube 創作者（YouTuber）行銷活動執行更順利，InteRed 提供方便快速的抽獎小工具供使用，只要貼上影片網址、輸入篩選關鍵字及抽出人數就可以立即抽出名單！","lottery_url":"影片網址","lottery_url_example":"https://www.youtube.com/watch?v=XXXXXXXXXX","lottery_paste_url":"請完整貼上影片網址","lottery_keyword":"抽獎關鍵字","lottery_nokeyword":"若無需篩選抽獎關鍵字，請保持欄位空白","lottery_winners":"抽出人數","lottery_number":"請輸入數字","lottery_start":"開始抽獎！","lottery_result":"抽獎結果","lottery_name":"留言名稱","lottery_content":"留言內容","lottery_time":"留言時間(最後編輯)","lottery_redraw":"重新抽獎","lottery_url_error":"注意：請輸入 YouTube 影片網址","lottery_keyword_error":"注意：無留言符合抽獎關鍵字","lottery_amount_error":"注意：留言人數不足抽出人數","lottery_unknown_error":"錯誤：請確認輸入的是有效影片","pricing":"方案價格","pricing_rank_01":"完整排行榜","pricing_rank_02":"8個關鍵數據分類排行榜","pricing_rank_03":"全球20,000+頻道排行","pricing_info_01":"網紅檢索","pricing_info_02":"網紅頻道與作品完整檢索","pricing_info_03":"10+客製化篩選與排序","pricing_data_01":"數據分析","pricing_data_02":"頻道主題、表現與影片分析","pricing_data_03":"累積、成長、互動數據與統計圖表","pricing_propoasal_01":"提案清單管理","pricing_propoasal_02":"管理人選清單與自訂排行榜","pricing_propoasal_03":"團隊共同協作管理","pricing_propoasal_04":"一鍵下載與分享提案數據","pricing_month":"/月","pricing_agency_1to5_1":"第 1-5 名使用者：","pricing_agency_per_user":"每名","pricing_agency_1to5_3":"$199/月","pricing_agency_6to10_1":"第 6-10 名使用者：","pricing_agency_6to10_3":"$99/月","pricing_agency_11up_1":"第 11 名後使用者：","pricing_agency_11up_3":"$29/月","pricing_login":"請登入","pricing_not_yet":"即將開放","pricing_purchase":"購買","pricing_purchased":"已購買","pricing_major":"優化您的 YouTube 行銷與事業","pricing_outreach":"搜尋創作者","pricing_big_data":"數據分析呈現","pricing_project_management":"提案管理編輯","pricing_we_know_you":"你們要什麼，InteRed 清楚","pricing_data_tool":"InteRed 是為了 YouTube 商業活動所量身打造的數據分析工具。","pricing_professional_analysis":"無論是代理商、品牌、YouTube 創作者（YouTuber），InteRed 將頻道資料呈現一覽無遺。透過專業分析，幫助您在行銷以及創作策略上取得優勢。","pricing_control":"掌握當前趨勢、洞悉網紅表現。","pricing_search_tool_01":"透過 InteRed 能讓代理商、品牌、YouTube 創作者（YouTuber）精準搜尋頻道。","pricing_search_tool_02":"利用頻道關鍵指標，以最適合行銷策略的條件進行篩選、檢索。100%切合自身需求、為行銷活動快速找到適合人選，一次到位。","prcing_easy_plan":"讓商業提案不再成為困難。","prcing_convenient":"InteRed 內建方便的提案管理系統，不必再花時間不斷搜尋、複製、貼上，讓代理商、品牌都能以數據做為基礎製作 YouTuber 提案清單。","prcing_export":"介面簡潔、一鍵匯出操作簡單，以數據作為基礎所挑出的人選公信力大大增加，","prcing_proposal_success":"InteRed 讓你的提案無往不利。","pricing_trend_01":"YouTube 行銷的時代正在來臨，","pricing_trend_02":"你掌握趨勢了嗎？","pricing_youtube_marketing_01":"目前，社群行銷活動漸漸轉移至 YouTube 平台上推廣，","pricing_youtube_marketing_02":"越來越多的品牌決定以影音作為行銷媒介。","pricing_difficulties":"InteRed 團隊深刻理解在 YouTube 事業中可能會遭遇到的困難，","princing_saving_time":"希望提供您實用且良好的使用體驗，替您節省寶貴、關鍵的時間。","princing_key_data":"讓你輕鬆獲得關鍵數據，讓廠商溝通與頻道成長更順利、增加成功機會。","princing_free_consultation":"預約免費諮詢","princing_give_me_email":"請輸入您的Email","princing_we_will_contact_soon":"我們已收到您的諮詢請求，專人將盡快與您聯絡","rank_now":"查詢喜歡的 YouTuber 排名","rank_input":"輸入頻道名稱或網址","rank_big_data":"InteRed透過大數據（Big Data）分析技術，即時掌握各頻道數據。","rank_sort_rank":"並將不同YouTuber的關鍵數據進行分類與排名。","default":"預設","country":"地區","category":"類別","subscribers":"訂閱數","daily_subscribers":"日訂閱數","monthly_subscribers":"月訂閱數","monthly_subscriptions_growth":"月訂閱成長率","monthly_views":"月觀看數","monthly_views_growth":"月觀看成長率","20_avg_views":"近20支平均觀看數","20_avg_engage":"近20支平均互動率","monthly":"","the_avg_of_recent_videos":"","infoList_monthly_subscribers":"月訂閱數","infoList_monthly_subscriptions_growth":"月訂閱成長率","infoList_monthly_views":"月觀看數","infoList_monthly_views_growth":"月觀看成長率","infoList_20_avg_views":"近20支平均觀看數","infoList_20_avg_engage":"近20支平均互動率","rank_search_name":"或者，在此條件下直接搜尋頻道名稱：","rank_name":"輸入頻道名稱","rank_1000":"*列入訂閱數 1000 以上之頻道","rank_updated_daily":"*數據每日更新","rank_condition_1":"在","rank_condition_2":"的","rank_condition_3":"排名","rank":"排名","channel":"頻道","channel_name":"頻道名稱","channel_subscriber":"頻道訂閱數","channel_daily_subscribers":"頻道日訂閱數","channel_monthly_subscribers_gorwth":"頻道月訂閱數","channel_monthly_subscriptions_growth":"頻道月訂閱成長率","channel_monthly_views":"頻道月觀看數","channel_monthly_views_growth":"頻道月觀看成長率","channel_20_avg_views":"頻道近20支平均觀看數","channel_20_avg_engage":"頻道近20支平均互動率","channel_url":"頻道連結","rank_want_more":"想得到更詳細的頻道數據分析資料嗎?","rank_more_data":"取得更多資料","rank_more":"更多","send":"送出","or":"或","rank_no_result_01":"沒有出現您想要的結果嗎?","rank_no_result_02":"您可以試試","rank_no_result_03":"嘗試其他關鍵字","rank_no_result_04":"將地區調整為 All","rank_no_result_05":"直接輸入頻道 ID","rank_want_more_01":"想看到更多排行嗎? ","rank_want_more_02":"查看付費方案","rank_want_more_03":"輸入名稱搜尋頻道排名吧!","rank_retry":"重新查詢","info_list_channel_search_tip":"輸入任何頻道名稱","info_list_video_search_tip":"輸入任何影片主題","info_list_channel_search":"頻道檢索","info_list_video_search":"影片檢索","info_list_sort":"排序條件","info_list_sort_relevance":"關聯性","info_list_sort_default_relevance":"（預設為關聯性）","info_list_sort_default":"（預設為訂閱數）","info_list_sort_high":"由大到小","info_list_sort_low":"由小到大","info_list_type_autos":"汽車與交通工具","info_list_type_comedy":"喜劇","info_list_type_education":"教育","info_list_type_entertainment":"娛樂","info_list_type_film":"電影與動畫","info_list_type_gaming":"遊戲","info_list_type_howto":"DIY 教學","info_list_type_music":"音樂","info_list_type_news":"新聞與政治","info_list_type_nonprofits":"非營利組織與社運活動","info_list_type_people":"人物與網誌","info_list_type_pets":"寵物與動物","info_list_type_science":"科學與科技","info_list_type_shows":"節目","info_list_type_sports":"體育","info_list_type_travel":"旅行與活動","info_list_channel_input":"搜尋頻道名稱","info_list_video_input":"搜尋影片主題 像是美妝","info_list_video_category":"影片類型","info_list_video_views":"影片觀看數","info_list_video_engage":"影片互動率","info_list_video_channel":"頻道詳細資訊","info_list_monthly":"","info_list_monthly_subscriptions_growth":"月訂閱成長率","info_list_monthly_views":"月觀看數","info_list_monthly_views_growth":"頻道近20支平均互動率","info_clean_list":"清空","info_list_import":"匯入至提案","info_list_already_improted":"已匯入至提案中","info_about":"頻道資訊","info_total_views":"總觀看次數","info_avg_engage":"平均互動率","info_topic":"類型","info_total_videos":"影片總數","info_subscribers":"訂閱數","info_info":"基本資訊","info_theme":"影片主題","info_category":"影片分類","info_interval":"每區間人數","info_recent":"近期影片表現","info_20":"最近20支","info_2month":"最近2個月","info_20_high_views":"觀看次數最高","info_20_low_views":"觀看次數最低","info_20_high_engage":"互動率最高","info_20_low_engage":"互動率最低","info_20_avg_views":"平均觀看次數","info_20_avg_engage":"平均互動率","info_video_count":"支影片","info_2month_most_video":"（最多顯示 240 支）","info_data_collecting":"*資料蒐集中！","info_last_day":"過去一天","info_last_day_subscribers":"日訂閱數","info_last_day_subscriber_growth":"日訂閱成長率","info_last_day_views":"日觀看數","info_last_day_views_growth":"日觀看成長率","info_last_month":"過去一個月","info_last_info_last_month_subscribers":"月訂閱數","info_last_info_last_month_subscriber_growth":"月訂閱成長率","info_last_info_last_month_views":"月觀看數","info_last_info_last_month_views_growth":"月觀看成長率","info_graphics":"趨勢圖表","info_graphics_view_minus":"* 影片被刪除或下架將使觀看數為負值","info_add_proposal":"加入提案","info_new_proposal_name":"輸入新提案名稱","info_no_proposal":"您目前還沒有任何提案","info_unnamed_proposal":"未命名提案","delete":"刪除","info_confirm_delete":"確定刪除此提案？","ok":"確定","cancel":"取消","edit":"修改","member_account":"帳號","member_user":"使用者資訊","member_signout":"登出","user_info":"會員資料","user_mail":"信箱","user_plan":"所屬方案","plan":"方案","user_upgrade":"升級","user_reset_password":"重設密碼","user_old_password":"請輸入舊密碼","user_new_password":"請輸入新密碼","user_new_password_again":"請再次輸入新密碼","user_password_not_match":"密碼不相符，請重新輸入","user_reset_successfully":"密碼重設成功","user_name":"真實姓名","user_tell":"聯絡電話","user_nicknme":"暱稱","user_country":"所在地區","user_company":"任職公司","user_title":"職稱","user_agency_team_name":"請輸入團隊名稱","user_agency_type":"身分","user_agency_remove":"移除","user_agency_confirm_remove":"確定刪除？","user_agency_invite":"邀請新成員","user_agency_invite_email":"請輸入欲邀請人員的完整 email 帳號","user_agency_no_result":"查無此信箱 或 此信箱未註冊，請再次檢查","user_agency_user_is_invited":"邀請失敗，該信箱用戶已屬於其他團隊","user_agency_add_seat":"管理空間","user_agency_seat":"剩餘空間：","user_agency_not_admin":"更改失敗，請重整確認您的權限","user_agency_exit":"退出","user_agency_last_admin":"您已是最後的 Admin 成員，請指派新管理者後才可退出","user_agency_out":"確定退出？","user_agency_exit_success":"您已成功退出！","user_seat_current":"目前","user_seat_purchased":"購買空間：","user_seat_used":"已使用空間：","user_seat_cost":"每月訂閱金額：","user_seat_updated":"修改","user_seat_see_you_next_invoice":"*費用將於下次帳單更新","user_chancel":"確定停用？","user_chancel_confirm":"停用方案","user_chancel_deny":"返回","user_chancel_date":"此次訂閱至","user_chancel_stop_pay":"將不再繼續收費","user_chancel_success":"您已成功退訂！","user_pay_stop_pay":"已停用，使用期限至","user_pay_history":"付款記錄","user_pay_card":"目前使用的信用卡","user_pay_date":"日期","user_pay_method":"付款方式","user_pay_amunt":"金額","user_pay_result":"付款結果","user_pay_success":"付款成功","user_pay_fail":"付款失敗","user_pay_change_card":"更換卡片","user_pay_next_pay":"下次付款日期","user_pay_contact":"*若有付款相關問題，請聯絡我們","user_pay_change_card_success":"卡片修改成功！","payment_debiting_every_month":"＊每個月將自動扣款","payment_success_and_check":"付款成功！您可以在「帳號」頁面中查看您的付款記錄","payment_unknown_error":"發生不明錯誤，請聯繫我們，將有專人為您服務","payment_upgrade_tips_01":"＊升級用戶照時間比例計價並於下次收費，不超收費用","payment_upgrade_tips_02":"","footer_youTube":"YouTube 排名與分析專家","footer_privacy_policy":"隱私權政策","footer_term_of_service":"使用條款","contact_us":"聯絡我們","contact_name":"名稱","contact_email":"聯絡信箱","contact_company":"任職企業","contact_website":"企業官網","contact_type":"聯絡類型","contact_product":"產品功能與介面問題","contact_plan":"企業方案諮詢","contact_cor":"商業合作洽談","contact_social":"社群行銷活動顧問、諮詢","contact_youtube":"YouTube 各類數據","contact_other":"其他","contact_content":"聯絡內容","contact_confirm":"確認","contact_back":"返回","contact_submit":"送出","contact_success":"成功送出！","contact_wait":"我們將會先寄發一封確認信到您的信箱，並盡快由專人回覆您！","contact_OK":"OK","contact_blank":"此為必填欄位","contact_again":"再次聯絡","language":"語系","language_zh":"中文","language_en":"英文","language_es":"西班牙文","proposal_list_create":"新增提案","proposal_list_my":"我的提案","proposal_list_create_name":"輸入新提案名稱","proposal_list_name":"提案名稱","proposal_list_last_edit":"最後編輯時間:","proposal_list_creators":"已選擇創作者","proposal_list_view":"檢視","proposal_list_manage":"編輯/刪除","proposal_list_confirm_delete":"確定刪除","proposal_list_other":"及其他","people":"人","proposal_list_team":"團隊提案","proposal_id_info":"基本資訊：","proposal_id_perform":"近期表現：","proposal_id_growth":"成長狀況：","proposal_id_download":"下載","proposal_id_add":"貼上頻道網址以新增創作者","proposal_id_find_nothing":"您輸入的網址有誤，請檢查網址","proposal_id_find_added":"該頻道已在清單中","proposal_id_scroll":"*可左右滑動","proposal_id_time_sort":"預設：依加入時間","proposal_id_daily_sub_growth":"日訂閱成長率","proposal_id_daily_view":"日觀看數","proposal_id_daily_view_growth":"日觀看成長率","proposal_id_not_owner":"提案的擁有者才可編輯","userInfo_email":"電子郵件","userInfo_identity":"身份","dataDesc_channelType":"頻道類型：上傳最多的影片類型","dataDesc_subscriberCount":"訂閱數：累積的訂閱人數","dataDesc_totalViewCount":"總觀看數：所有影片累積的觀看總數","dataDesc_totalEngegementCount":"總互動數：近五十支影片的喜歡數、不喜歡數與評論數總和","dataDesc_avgEngageRate":"平均互動率：近五十支影片的互動率平均（互動總數除總觀看數）","dataDesc_videoCount":"影片總數：目前所有的影片總數","dataDesc_videoTheme":"影片主題：近五十支影片的常見關鍵字","dataDesc_videoCategory":"影片分類：近五十支影片的類型","dataDesc_recentAvgViewCount":"近二十支平均觀看數：最新上傳二十支影片的觀看數平均","dataDesc_recentAvgEngageRate":"近二十支平均互動率：最新上傳二十支影片的互動率平均（互動總數除以總觀看數）","dataDesc_recentTwoMonthAvgViewCount":"近兩個月平均觀看數：近兩個月上傳的所有影片的觀看數平均（總觀看數除以總支數）","dataDesc_recentTwoMonthAvgEngageRate":"近兩個月平均互動率：近兩個月上傳的所有影片的互動率平均（互動總數除以總觀看數）","dataDesc_todaySubscriberCount":"日訂閱數：今日較昨日新增加的訂閱數量","dataDesc_todaySubscriberRate":"日訂閱成長率：今日較昨日新增加的訂閱數與總訂閱數之比率","dataDesc_todayViewCount":"日觀看數：今日較昨日新增加的觀看數量","dataDesc_todayViewRate":"日觀看成長率：今日較昨日新增加的觀看數與總觀看數之比率","dataDesc_monthSubscriberCount":"月訂閱數：今日較一個月前新增加的訂閱數","dataDesc_monthSubscriberRate":"月訂閱成長率：今日較一個月前新增加的訂閱數與總訂閱數之比率","dataDesc_monthViewCount":"月觀看數：今日較一個月前新增加的觀看數","dataDesc_monthViewRate":"月觀看成長率：今日較一個月前新增加的觀看數與總觀看數之比率","dataDesc_videoViews":"影片觀看數：該影片目前累積的觀看次數","dataDesc_videoEngage":"影片互動率：該影片的互動總數除觀看數","agency_payment_title":"Agency 方案","agency_payment_user":"使用者","agency_payment_users":"使用者","agency_payment_averge_price_1":"平均每名使用者","agency_payment_averge_price_2":"USD，節省","agency_payment_invite":"購買後將獲得空間(數量可更改)，每個受邀使用者皆享所有功能","agency_payment_placeholder":"輸入幾名","agency_payment_more":"若有15位以上的使用者，可直接更改數字","agency_payment_input_error":"請輸入1以上數字","agency_payment_save":"節省","agency_payment_wtf":"空間不可低於使用者數量","agency_payment_success":"變更成功","agency_payment_error":"變更失敗，請重試或聯絡我們","proposal_id_share":"分享","proposal_id_share_me":"只有自己可以檢視與編輯","proposal_id_share_team":"團隊成員可以檢視","proposal_id_share_all":"全部人可以檢視（7天）","proposal_id_share_copy":"複製","proposal_id_share_back":"自動切換為","proposal_id_share_no_access_1":"Oops! 提案不存在或存取權限不足","proposal_id_share_no_access_2":"","info_list_panel_title":"已選擇頻道","info_list_panel_save":"儲存變更","info_list_panel_unsave":"若有任何變更，請點擊按鈕儲存！","info_list_panel_all_saved":"變更已儲存！","info_list_panel_chose":"選擇提案","info_list_panel_deny":"此為 Agency 方案功能，","info_list_panel_deny_2":"點此升級","info_list_panel_alert":"是否儲存提案","info_list_panel_alert_2":"的變更？","info_list_panel_discard":"捨棄變更","info_list_panel_no_proposal":"尚未選擇提案！","payment_ridiculous":"＊已分享此平台的網紅才可享有此優惠方案","user_cancel_intro_1":"雖然相當遺憾您決定停用，但仍非常感謝您這段時間的青睞。","user_cancel_intro_2":"停用前請協助我們完成一份調查，此調查用於改進產品且絕對保密，希望未來能有機會為您服務。","user_cancel_question_satisfy":"整體來說, 您是否滿意本服務？","user_cancel_answer_very_satisfied":"非常滿意","user_cancel_answer_somewhat_satisfied":"滿意","user_cancel_answer_neutral":"普通","user_cancel_answer_unsatisfied":"不滿意","user_cancel_answer_very_unsatisfied":"非常不滿意","user_cancel_question_reason":"您決定停用方案的主要因素為？","user_cancel_answer_back":"暫時無需求，未來我若有需求會再訂閱","user_cancel_answer_didnt_meet_need":"服務與我的需求不符","user_cancel_answer_quality":"我對此服務的品質不滿意","user_cancel_answer_alternative":"我找到了更好的替代品","user_cancel_answer_customer_service":"客戶服務不佳","user_cancel_question_purpose":"您使用本服務想達成的目的？（可複選）","user_cancel_answer_find":"尋找網紅、YouTuber，執行網紅行銷","user_cancel_answer_analyze":"數據分析特定網紅、YouTube 頻道","user_cancel_answer_ranking":"查看頻道排行、追蹤趨勢","user_cancel_answer_project":"優化網紅行銷專案管理","user_cancel_answer_channel":"優化頻道經營","user_cancel_question_resubsribe":"您未來是否會再訂閱本服務？","user_cancel_answer_definitely":"一定會","user_cancel_answer_probably":"可能會","user_cancel_answer_notsure":"不確定","user_cancel_answer_probablynot":"可能不會","user_cancel_answer_definitelynot":"一定不會","user_cancel_question_feedback":"您覺得本服務有哪裡需要改善？或希望提供什麼服務？","user_cancel_not_finish":"尚有問題或欄位未填寫！","user_cancel_stop":"停用","info_list_no_result":"找不到符合的結果，建議：","info_list_no_result_adjust_filter":"放寬篩選條件","info_list_no_channel_id":"直接輸入頻道 ID","info_list_search_for":"搜尋","payment_upgrade_success":"升級成功！您可以在「帳號」頁面中查看您的付款記錄"};

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer_Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/Info */ "./reducer/Info.js");
/* harmony import */ var _reducer_InfoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer/InfoList */ "./reducer/InfoList.js");
/* harmony import */ var _reducer_RankList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer/RankList */ "./reducer/RankList.js");
/* harmony import */ var _reducer_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer/User */ "./reducer/User.js");
/* harmony import */ var _reducer_Payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer/Payment */ "./reducer/Payment.js");
/* harmony import */ var _reducer_Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducer/Messages */ "./reducer/Messages.js");








var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  Info: _reducer_Info__WEBPACK_IMPORTED_MODULE_2__["default"],
  InfoList: _reducer_InfoList__WEBPACK_IMPORTED_MODULE_3__["default"],
  RankList: _reducer_RankList__WEBPACK_IMPORTED_MODULE_4__["default"],
  User: _reducer_User__WEBPACK_IMPORTED_MODULE_5__["default"],
  Payment: _reducer_Payment__WEBPACK_IMPORTED_MODULE_6__["default"],
  Messages: _reducer_Messages__WEBPACK_IMPORTED_MODULE_7__["default"]
});

var store = function store(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
};

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "detect-node":
/*!******************************!*\
  !*** external "detect-node" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("detect-node");

/***/ }),

/***/ "html-parse-stringify2":
/*!****************************************!*\
  !*** external "html-parse-stringify2" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-parse-stringify2");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "i18next-browser-languagedetector":
/*!***************************************************!*\
  !*** external "i18next-browser-languagedetector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "i18next-xhr-backend":
/*!**************************************!*\
  !*** external "i18next-xhr-backend" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pretty-error":
/*!*******************************!*\
  !*** external "pretty-error" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map