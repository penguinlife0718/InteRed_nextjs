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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    min-width: calc(100vw - 180px); /*\u76F4\u89BA\u9019\u500B\u8981\u8DDF\u8457 Sidebar \u7684\u503C\u8DD1 240 -> 180*/\n    padding: 72px 0 0 180px;\n    overflow-x: hidden;\n    background: #fafafa;\n    @media (max-width: 1170px){\n        padding-left: 0;\n    }\n    filter: ", ";\n    transition: all .2s ease-in-out;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





function MyLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Background, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (MyLayout);
var Background = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), function (props) {
  return props.isUserActive ? 'blur(5px)' : '';
});

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _dev_StyleLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dev/StyleLink */ "./components/dev/StyleLink.js");
/* harmony import */ var _icon_InteRedIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icon/InteRedIcon */ "./components/icon/InteRedIcon.js");
/* harmony import */ var _icon_HamburgerIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icon/HamburgerIcon */ "./components/icon/HamburgerIcon.js");









function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 17px;\n    background: #fff;\n    border-bottom: 1px solid #e6e6e6;\n    color: ", ";\n    font-size: 14px;\n    font-weight: 300;\n    transition: color .2s;\n    cursor: pointer;\n    :hover {\n        color: ", ";\n        font-weight: 500;\n        background-color: hsl(0, 0%, 92%);\n    }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    overflow: hidden;\n    position: fixed;\n    display: none;\n    flex-direction: column;\n    width: 240px;\n    top: 72px;\n    left: auto;\n    right: 0;\n    z-index: 10000;\n    padding-top: 0;\n    background-color: #fafafa;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);\n    transition: transform .4s;\n    transform: ", ";\n    transform-origin: top center;\n    @media (max-width: 1170px){\n        display: flex;\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: none;\n    @media (max-width: 1170px){\n      display: flex;\n      align-items: center;\n    }\n    cursor: pointer;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border-top: .5px solid #e6e6e6;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 17px;\n    background: #fff;\n    border-bottom: 1px solid #e6e6e6;\n    color: ", ";\n    font-size: 14px;\n    font-weight: 300;\n    transition: color .2s;\n    cursor: pointer;\n    :hover {\n        color: ", ";\n        font-weight: 500;\n        background-color: hsl(0, 0%, 92%);\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    overflow: hidden;\n    position: fixed;\n    flex-direction: column;\n    width: 240px;\n    top: 72px;\n    left: auto;\n    right: 0;\n    z-index: 10000;\n    padding-top: 0;\n    background-color: #fafafa;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);\n    transition: transform .4s;\n    transform: ", ";\n    transform-origin: top center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-right: ", ";\n    padding: ", ";\n    font-size: 14px;\n    font-weight: 500;\n    color: ", ";\n    box-shadow: 1px 2px 2px 1px rgba(226, 226, 226, 0.5);\n    border: solid 0.5px #999999;\n\tcursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-right: 32px;\n    font-size: 14px;\n    font-weight: 300;\n    color: ", ";\n    @media (max-width: 1170px){\n      display: none;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 72px;\n    top: 0;\n    left: 0;\n    padding: 0 40px;\n    background-color: #fff;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);\n    z-index: 10000;\n    @media (max-width: 900px){\n      padding: 0 20px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tdisplay: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    display: ", ";\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var _process$env$REACT_AP = process.env.REACT_APP_URI,
    REACT_APP_URI = _process$env$REACT_AP === void 0 ? '/' : _process$env$REACT_AP;

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Nav, _Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      hamburgerIsActive: false,
      userListIsActive: false,
      languageListIsActive: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "hamburgerToggle", function () {
      return _this.setState({
        hamburgerIsActive: !_this.state.hamburgerIsActive
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "userListToggle", function () {
      return _this.setState({
        userListIsActive: !_this.state.userListIsActive
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "languageListToggle", function () {
      return _this.setState({
        languageListIsActive: !_this.state.languageListIsActive
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "signOut", function () {
      var token = _this.props.user.token;
      fetch("".concat(REACT_APP_URI, "/accounts/logout/"), {
        method: 'post',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          "X-CSRFToken": token
        },
        body: {}
      }).then(function () {
        var auth2 = window.gapi.auth2.getAuthInstance();

        if (auth2 != null) {
          auth2.signOut().then(auth2.disconnect());
        }

        _this.props.history.push("/");

        window.location.reload();
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderSignInField", function () {
      var messages = _this.props.messages;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NavButton, {
        id: 'ga_start',
        isStart: "true",
        onClick: function onClick() {
          window.innerWidth > 1080 && _this.props.dispatch({
            type: 'toggleUserField',
            condition: 'signIn'
          });
          window.innerWidth <= 1080 && _this.props.history.push('/UserMobile');
        }
      }, messages.nav_login);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderUserField", function () {
      var _this$props = _this.props,
          messages = _this$props.messages,
          pathname = _this$props.router.pathname;

      var _assertThisInitialize = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this),
          userListIsActive = _assertThisInitialize.state.userListIsActive,
          userListToggle = _assertThisInitialize.userListToggle,
          signOut = _assertThisInitialize.signOut;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Mask, {
        isActive: userListIsActive,
        onClick: userListToggle
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NavButton, {
        onClick: userListToggle,
        mobile: window.innerWidth < 480
      }, messages.member_account), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListWrap, {
        isActive: userListIsActive
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_dev_StyleLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
        to: "/UserInfo"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListContent, {
        onClick: userListToggle,
        isFocused: pathname === "/UserInfo",
        isActive: userListIsActive
      }, messages.member_user)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SignOut, {
        onClick: function onClick() {
          return signOut();
        }
      }, messages.member_signout)));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderLanguageField", function () {
      var messages = _this.props.messages;

      var _assertThisInitialize2 = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this),
          languageListIsActive = _assertThisInitialize2.state.languageListIsActive,
          languageListToggle = _assertThisInitialize2.languageListToggle;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Mask, {
        isActive: languageListIsActive,
        onClick: languageListToggle
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NavButton, {
        onClick: languageListToggle,
        mobile: window.innerWidth < 480
      }, messages.language), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListWrap, {
        isActive: languageListIsActive
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListContent, {
        onClick: function onClick() {
          _this.props.dispatch({
            type: 'onChangeLanguage',
            language: 'zh'
          });

          languageListToggle();
        },
        isActive: languageListIsActive
      }, messages.language_zh), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListContent, {
        onClick: function onClick() {
          _this.props.dispatch({
            type: 'onChangeLanguage',
            language: 'en'
          });

          languageListToggle();
        },
        isActive: languageListIsActive
      }, messages.language_en), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ListContent, {
        onClick: function onClick() {
          _this.props.dispatch({
            type: 'onChangeLanguage',
            language: 'es'
          });

          languageListToggle();
        },
        isActive: languageListIsActive
      }, messages.language_es)));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderHamburgerList", function (_ref, pathname) {
      var name = _ref.name,
          url = _ref.url;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_dev_StyleLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
        to: url
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(HamburgerContent, {
        onClick: _this.hamburgerToggle,
        isFocused: pathname === url,
        isActive: _this.hamburgerIsActive
      }, name));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderHamburger", function () {
      var _this$props2 = _this.props,
          messages = _this$props2.messages,
          pathname = _this$props2.location.pathname;

      var _assertThisInitialize3 = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this),
          hamburgerIsActive = _assertThisInitialize3.state.hamburgerIsActive,
          hamburgerToggle = _assertThisInitialize3.hamburgerToggle,
          renderHamburgerList = _assertThisInitialize3.renderHamburgerList;

      var HamburgerList = [{
        name: messages.slide_ranking,
        url: '/'
      }, {
        name: messages.slide_search,
        url: '/InfoList'
      }, {
        name: messages.slide_project_management,
        url: '/Proposal'
      }, {
        name: messages.slide_lottery,
        url: '/Lottery'
      }, {
        name: messages.nav_service,
        url: '/Pricing'
      }, {
        name: messages.nav_contact,
        url: '/Contact'
      }];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Mask, {
        isActive: hamburgerIsActive,
        onClick: hamburgerToggle
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(HamburgerIconWrap, {
        onClick: hamburgerToggle
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_icon_HamburgerIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
        size: "20",
        color: "#de0606"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(HamburgerWrap, {
        isActive: hamburgerIsActive
      }, HamburgerList.map(function (list) {
        return renderHamburgerList(list, pathname);
      })));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Nav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var renderSignInField = this.renderSignInField,
          renderUserField = this.renderUserField,
          renderLanguageField = this.renderLanguageField,
          renderHamburger = this.renderHamburger;
      var _this$props3 = this.props,
          auth = _this$props3.user.auth,
          messages = _this$props3.messages,
          pathname = _this$props3.router.pathname;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NavWrap, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(InteRedIconWrap, {
        onClick: function onClick() {
          return _this2.props.history.push('/');
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_icon_InteRedIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
        mobile: window.innerWidth < 480
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NavContentWrap, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_dev_StyleLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
        to: "/Pricing"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NavContent, {
        isFocused: pathname === "/Pricing"
      }, messages.nav_service)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_dev_StyleLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
        to: "/Contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NavContent, {
        isFocused: pathname === "/Contact"
      }, messages.nav_contact)), renderLanguageField(), auth === 'notSignIn' && renderSignInField(), auth === 'isSignIn' && renderUserField(), renderHamburger()));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.User,
    messages: state.Messages
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps)(Nav)));
var Mask = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject(), function (props) {
  return props.isActive ? '' : 'none';
});
var InteRedIconWrap = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject2());
var NavWrap = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject3());
var NavContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject4());
var NavContent = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject5(), function (props) {
  return props.isFocused ? '#de0606' : '#999999';
});
var NavButton = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject6(), function (_ref2) {
  var mobile = _ref2.mobile;
  return mobile ? '16px' : '32px';
}, function (_ref3) {
  var mobile = _ref3.mobile;
  return mobile ? '2px 8px' : '2px 15px';
}, function (props) {
  return props.isStart ? "#de0606 " : "#999999";
});
var ListWrap = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject7(), function (props) {
  return props.isActive ? "scaleY(1)" : "scaleY(0)";
});
var ListContent = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject8(), function (props) {
  return props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999';
}, function (props) {
  return props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999';
});
var SignOut = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(ListContent)(_templateObject9());
var HamburgerIconWrap = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject10());
var HamburgerWrap = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject11(), function (props) {
  return props.isActive ? "scaleY(1)" : "scaleY(0)";
});
var HamburgerContent = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject12(), function (props) {
  return props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999';
}, function (props) {
  return props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999';
});

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dev_StyleLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dev/StyleLink */ "./components/dev/StyleLink.js");
/* harmony import */ var _icon_StarIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon/StarIcon */ "./components/icon/StarIcon.js");
/* harmony import */ var _icon_SearchIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon/SearchIcon */ "./components/icon/SearchIcon.js");
/* harmony import */ var _icon_UserIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon/UserIcon */ "./components/icon/UserIcon.js");
/* harmony import */ var _icon_LotteyIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon/LotteyIcon */ "./components/icon/LotteyIcon.js");
/* harmony import */ var _icon_LotteyIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_icon_LotteyIcon__WEBPACK_IMPORTED_MODULE_9__);


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-left: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n    padding: 17px 0 17px 48px;\n    color: ", ";\n    font-size: 14px;\n    font-weight: 300;\n    transition: color .2s;\n    svg, img {\n        path, polygon, g { fill: ", "; }\n    }\n    cursor: pointer;\n    :hover {\n        color: ", ";\n        font-weight: 500;\n        background-color: hsl(0, 0%, 92%);\n    }\n    &:hover > svg {\n        path,\n        polygon,\n            g {\n                fill: ", ";\n            }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    width: 180px;\n    top: 72px ;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    background-color: #fafafa;\n    @media (max-width: 1170px){\n        display: none;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var renderSideBarList = function renderSideBarList(_ref, pathname) {
  var name = _ref.name,
      url = _ref.url,
      icon = _ref.icon;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_dev_StyleLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    to: url
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SidebarContentWrap, {
    isFocused: pathname === url
  }, renderIcon(icon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SidebarContent, null, name)));
};

var renderIcon = function renderIcon(icon) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon === _icon_StarIcon__WEBPACK_IMPORTED_MODULE_6__["default"] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icon_StarIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), icon === _icon_SearchIcon__WEBPACK_IMPORTED_MODULE_7__["default"] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icon_SearchIcon__WEBPACK_IMPORTED_MODULE_7__["default"], null), icon === _icon_UserIcon__WEBPACK_IMPORTED_MODULE_8__["default"] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icon_UserIcon__WEBPACK_IMPORTED_MODULE_8__["default"], null), icon === _icon_LotteyIcon__WEBPACK_IMPORTED_MODULE_9___default.a && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icon_LotteyIcon__WEBPACK_IMPORTED_MODULE_9___default.a, null));
};

var Sidebar = function Sidebar(props) {
  var pathname = props.router.pathname;
  var messages = props.messages;
  var SideBarList = [{
    name: messages.slide_ranking,
    url: '/',
    icon: _icon_StarIcon__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, {
    name: messages.slide_search,
    url: '/InfoList',
    icon: _icon_SearchIcon__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, {
    name: messages.slide_project_management,
    url: '/Proposal',
    icon: _icon_UserIcon__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, {
    name: messages.slide_lottery,
    url: '/Lottery',
    icon: _icon_LotteyIcon__WEBPACK_IMPORTED_MODULE_9___default.a
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SidebarWrap, null, SideBarList.map(function (list) {
    return renderSideBarList(list, pathname);
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.Messages
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Sidebar)));
var SidebarWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var SidebarContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), function (props) {
  return props.isFocused ? '#de0606' : '#999999';
}, function (props) {
  return props.isFocused ? '#de0606' : '#999999';
}, function (props) {
  return props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999';
}, function (props) {
  return props.isFocused ? '#de0606' : '#787878';
});
var SidebarContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());

/***/ }),

/***/ "./components/dev/StyleLink.js":
/*!*************************************!*\
  !*** ./components/dev/StyleLink.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-decoration: none;\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(next_link__WEBPACK_IMPORTED_MODULE_2___default.a)(_templateObject()); // export default (props) => <StyledLink {...props } onClick={() => window.scrollTo(0,0)}/>;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, props);
});

/***/ }),

/***/ "./components/icon/HamburgerIcon.js":
/*!******************************************!*\
  !*** ./components/icon/HamburgerIcon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var HamburgerIcon = function HamburgerIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "Capa_1",
    viewBox: "0 0 53 53",
    width: props.size || '10',
    height: props.size || '10'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: props.color || '#666'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2,13.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,13.5,2,13.5z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2,28.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,28.5,2,28.5z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2,43.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,43.5,2,43.5z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HamburgerIcon);

/***/ }),

/***/ "./components/icon/InteRedIcon.js":
/*!****************************************!*\
  !*** ./components/icon/InteRedIcon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var InteRedIcon = function InteRedIcon(_ref) {
  var mobile = _ref.mobile;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Svg, {
    height: '38px',
    width: mobile ? '90px' : '140px',
    version: "1.1",
    viewBox: "0 0 140 38"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "info",
    fill: "none",
    stroke: "none",
    strokeWidth: "1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Info",
    transform: "translate(-32.000000, -17.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "\u9802\u90E8\u9078\u55AE_header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Logo",
    transform: "translate(32.000000, 17.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    height: "38",
    id: "Rectangle",
    width: "140",
    fill: "#DE0606",
    x: "0",
    y: "0"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    id: "InteRed.",
    fill: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: "32"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", {
    x: "9.12",
    y: "31"
  }, "InteRed.")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (InteRedIcon);
var Svg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.svg(_templateObject());

/***/ }),

/***/ "./components/icon/LotteyIcon.js":
/*!***************************************!*\
  !*** ./components/icon/LotteyIcon.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React from "react";
// import styled from 'styled-components'
// import lottery from '../../static/assets/img/lottery.svg'
// const Lottery = props => {
//     return (
//         <Icon src={lottery} alt='lotteryIcon'/>
//     )
// };
// export default Lottery;
// const Icon = styled.img`
//     width: 20px;
//     height: 20px;
// `

/***/ }),

/***/ "./components/icon/SearchIcon.js":
/*!***************************************!*\
  !*** ./components/icon/SearchIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Search = function Search(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "Capa_1",
    width: props.width || 20,
    height: props.width || 20,
    viewBox: "0 0 30.239 30.239"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735 c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0 c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0 C21.517,9.026,21.517,14.63,18.073,18.074z",
    fill: "#999"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/icon/StarIcon.js":
/*!*************************************!*\
  !*** ./components/icon/StarIcon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Star = function Star(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "Capa_1",
    width: props.width || 20,
    height: props.width || 20,
    viewBox: "0 0 475.075 475.075"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704 c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706 l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136 c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386 c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136 c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z",
    fill: "#999"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Star);

/***/ }),

/***/ "./components/icon/UserIcon.js":
/*!*************************************!*\
  !*** ./components/icon/UserIcon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "Capa_1",
    viewBox: "0 0 55 55",
    width: props.width || 20,
    height: props.width || 20
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752 c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348 c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98 c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033 c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55 c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287 c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104 c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1 c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764 l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5 c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957 c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545 c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.52,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8 s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545 c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313 c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z",
    fill: "#999"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");












var _process$env$REACT_AP = process.env.REACT_APP_URI,
    REACT_APP_URI = _process$env$REACT_AP === void 0 ? '/' : _process$env$REACT_AP;

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_11__["default"], null, t('channelType'), t('subscriberCount'));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store, isServer;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, isServer = _ref.isServer;
                return _context.abrupt("return", {
                  isServer: isServer,
                  namespacesRequired: ['common']
                });

              case 2:
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

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.Messages
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withNamespaces"])('common')(Index)));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mr.72/InteRed-Nextjs/pages/index.js */"./pages/index.js");


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

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

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

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=index.js.map