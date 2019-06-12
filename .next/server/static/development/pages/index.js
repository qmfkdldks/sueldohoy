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

/***/ "./components/DateMaskedInput.js":
/*!***************************************!*\
  !*** ./components/DateMaskedInput.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_8__);










var daysInMonth = function daysInMonth(month) {
  return new Date(2019, month, 0).getDate();
};

var DateMaskedInput =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DateMaskedInput, _Component);

  function DateMaskedInput() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DateMaskedInput);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(DateMaskedInput).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DateMaskedInput, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_8__["MaskedInput"], {
        mask: [{
          length: 4,
          options: _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()({
            length: 19
          }, function (v, k) {
            return 2019 - k + '';
          }),
          regexp: /^[1-2]$|^19$|^20$|^19[0-9]$|^20[0-9]$|^19[0-9][0-9]$|^20[0-9][0-9]$/,
          placeholder: "yyyy"
        }, {
          fixed: "-"
        }, {
          length: [2],
          options: _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()({
            length: 12
          }, function (v, k) {
            return k + 1 < 10 ? '0' + (k + 1) : k + 1 + '';
          }),
          regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
          placeholder: "mm"
        }, {
          fixed: "-"
        }, {
          length: [2],
          options: _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()({
            length: daysInMonth(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.value.split("/")[0], 10))
          }, function (v, k) {
            return k + 1 < 10 ? '0' + (k + 1) : k + 1 + '';
          }),
          regexp: /^[1-2][0-9]$|^3[0-1]$|^0?[1-9]$|^0$/,
          placeholder: "dd"
        }],
        required: true,
        value: this.props.value,
        onChange: this.props.onChange
      });
    }
  }]);

  return DateMaskedInput;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DateMaskedInput);

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_2__);


 // import { Logo, SocialMedia } from "../index";
// import { FooterContent } from "./FooterContent";

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContext"].Consumer, null, function (size) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      direction: "row",
      justify: "between" // border={{ side: "top", color: "light-4" }}
      ,
      pad: {
        top: "xlarge"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      gap: "large",
      align: "start"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      gap: "small",
      direction: "row-responsive",
      align: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      height: "40px",
      width: "40px"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      fit: "cover",
      src: "/static/logo2.png",
      alt: "SueldoHoy Logo"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      weight: "bold",
      size: "large"
    }, "SueldoHoy!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      align: "end"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Text"], null, " all rights reserved \xA9 2019 ")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/SalaryForm/index.js":
/*!****************************************!*\
  !*** ./components/SalaryForm/index.js ***!
  \****************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet-icons */ "grommet-icons");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _SalaryResult__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SalaryResult */ "./components/SalaryResult/index.js");
/* harmony import */ var _DateMaskedInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../DateMaskedInput */ "./components/DateMaskedInput.js");
/* harmony import */ var _tprice_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tprice.json */ "./components/SalaryForm/tprice.json");
var _tprice_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./tprice.json */ "./components/SalaryForm/tprice.json", 1);


















function getD(index, data, date, value) {
  var icon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_12__["Currency"], null);
  var past_obj = data.find(function (record) {
    return record.d == date;
  });

  if (past_obj) {
    var past_ratio = past_obj.v;
    var past_available = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_9___default()(value) / past_ratio;
    var current_ratio = data[data.length - 1].v;
    var current_necessary = past_available * current_ratio;
    var object = {
      index: index,
      icon: icon,
      could: past_available.toFixed(2),
      need: current_necessary.toFixed(2)
    };
    console.log(object);
    return object;
  }

  return {};
}

function calculatePrice(index, usd, date, value) {
  var icon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_12__["Gremlin"], null);
  var past_obj = usd.find(function (record) {
    return record.d == date;
  });

  if (past_obj) {
    var past_dollar_price = past_obj.v;
    var past_product_price = _tprice_json__WEBPACK_IMPORTED_MODULE_16__[new Date(date).getFullYear()][index];
    var past_available_dollar = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_9___default()(value) / past_dollar_price;
    var past_available_product = past_available_dollar / past_product_price;
    var current_product_price = _tprice_json__WEBPACK_IMPORTED_MODULE_16__[new Date().getFullYear()][index];
    var current_necesary_dollar = past_available_product * current_product_price;
    var current_ratio = usd[usd.length - 1].v;
    var current_necesary_pesos = current_necesary_dollar * current_ratio; // const current_available_product = past_available_dollar / current_product_price

    var object = {
      index: index,
      icon: icon,
      could: past_available_product.toFixed(2),
      need: current_necesary_pesos.toFixed(2)
    };
    console.log(object);
    return object;
  }

  return {};
}

var SalaryForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SalaryForm, _React$Component);

  function SalaryForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SalaryForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SalaryForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      data: [],
      date: "",
      value: "",
      usd: [],
      cer: [],
      uva: [],
      uvi: [],
      idle: true,
      fetching: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "fetchData",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response1, usd, response2, cer, response3, uva, response4, uvi;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                fetching: true
              });

              _context.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('/usd');

            case 3:
              response1 = _context.sent;
              _context.next = 6;
              return response1.json();

            case 6:
              usd = _context.sent;
              _context.next = 9;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('/cer');

            case 9:
              response2 = _context.sent;
              _context.next = 12;
              return response2.json();

            case 12:
              cer = _context.sent;
              _context.next = 15;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('/uva');

            case 15:
              response3 = _context.sent;
              _context.next = 18;
              return response3.json();

            case 18:
              uva = _context.sent;
              _context.next = 21;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('/uvi');

            case 21:
              response4 = _context.sent;
              _context.next = 24;
              return response4.json();

            case 24:
              uvi = _context.sent;

              _this.setState({
                usd: usd,
                cer: cer,
                uva: uva,
                uvi: uvi,
                fetching: false
              });

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCalculate", function () {
      var _this$state = _this.state,
          value = _this$state.value,
          date = _this$state.date,
          usd = _this$state.usd,
          cer = _this$state.cer,
          uva = _this$state.uva,
          uvi = _this$state.uvi;
      console.log(value, date);

      if (new Date(date) < new Date()) {
        _this.setState({
          idle: false
        });

        var data = [];
        console.log(usd);
        data.push(getD("USD", usd, date, value, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_12__["Currency"], null)));
        data.push(getD("UVI", uvi, date, value, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_12__["Home"], null)));
        data.push(getD("CER", cer, date, value));
        data.push(getD("UVA", uva, date, value));
        data.push(calculatePrice("Apples (1kg)", usd, date, value));
        data.push(calculatePrice("McMeal", usd, date, value));
        data.push(calculatePrice("Gasoline", usd, date, value));
        data.push(calculatePrice("Rent Apartment (1 bedroom) In City centre", usd, date, value));

        _this.setState({
          data: data
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangeDate", function (event) {
      return _this.setState({
        date: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onValueChange", function (event) {
      return _this.setState({
        value: event.target.value
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SalaryForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          value = _this$state2.value,
          idle = _this$state2.idle,
          fetching = _this$state2.fetching,
          data = _this$state2.data;
      var renderResult = idle ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        pad: "medium"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Heading"], null, "La inflaci\xF3n Argentina en 2018 fue del 47,6%, la cifra m\xE1s alta en los \xFAltimos 27 a\xF1os."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["WorldMap"], null)) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SalaryResult__WEBPACK_IMPORTED_MODULE_14__["default"], {
        data: data
      });
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        direction: "row-responsive",
        pad: "large"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        pad: "medium",
        gap: "small"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        onSubmit: this.onCalculate
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Heading"], null, "\xBFCu\xE1nto cobraba cuando tuvo su ultimo aumento?"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Paragraph"], null, "La inflaci\xF3n hace dificil saber cual es el porcentaje justo de actualizacion salarial que debe perseguir el empleado."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        gap: "small",
        pad: "medium"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        direction: "row",
        gap: "small",
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_12__["Currency"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["FormField"], {
        label: "\xBFCu\xE1nto cobraste?",
        min: 1,
        required: true,
        type: "number",
        placeholder: "$ Sueldo anterior",
        value: value,
        onChange: this.onValueChange
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["FormField"], {
        label: "\xBFC\xFAando cobraste?"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_DateMaskedInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
        value: this.state.date,
        onChange: this.onChangeDate
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        align: "end"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        type: "submit",
        disabled: fetching,
        icon: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_12__["Gremlin"], null),
        label: "Calcular"
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__["Box"], {
        width: "100%",
        round: true,
        background: "brand",
        align: "center",
        justify: "center"
      }, renderResult)));
    }
  }]);

  return SalaryForm;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SalaryForm);

/***/ }),

/***/ "./components/SalaryForm/tprice.json":
/*!*******************************************!*\
  !*** ./components/SalaryForm/tprice.json ***!
  \*******************************************/
/*! exports provided: 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, default */
/***/ (function(module) {

module.exports = {"2010":{"Domestic Beer (0.5 liter darught)":2,"Eggs (12)":1.56,"Imported Beer (0.33 liter bottle)":1.52,"Loaf of fresh white bread (500 gr)":1.24,"Milk (1 liter bottle)":0.98,"Water (1.5 liter bottle)":0.9,"Coke/Pepsi (0.33 liter bottle)":1.3,"McMeal":7,"Meal for 2 People":26,"Meal Inexpensive Restaurant":6.79,"Apples (1kg)":"-","Banana (1kg)":"-","Lettuce (1 head)":"-","Onion (1 kg)":"-","Oranges (1 kg)":"-","Potato (1 kg)":"-","Rice (white) (1 kg)":"-","Tomato (1 kg)":"-","Beef Round (1 kg)":"-","Bottle of Wine":5,"Chicken Breasts (1 kg)":9.33,"Cigarrettes 20 Pack (Malboro)":1.58,"Local Cheese (1 kg)":9.87,"Rent Apartment (1 bedroom) Outside of centre":300,"Rent Apartment (1 bedroom) In City centre":521.67,"Rent Apartment (3 bedrooms) Outside of centre":486.67,"Rent Apartment (3 bedrooms) In City centre":875,"Price per square meter to buy apartment outside of centre":1250,"Price per square meter to buy apartment in city centre":2200,"Average monthly net salary":819.1,"Gasoline":1.01,"One Way Ticket (Local transport)":0.45,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":65,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":34.59,"Cinema, International, Release, 1 seat":6.4,"Fitness Club, Monthly  Fee for Adult":32.5,"Tennis Court Rent (1 hour on weekend)":15,"1 pair of jeans (Levis 501 or similar)":88.17,"1 pair of men leather business shoes":93.33,"1 pair of Nike Running Shoes (Mid-range)":93.33,"1 Summer Dress in a chain store (Zara, H&M, ...)":80},"2011":{"Domestic Beer (0.5 liter darught)":1.27,"Eggs (12)":1.85,"Imported Beer (0.33 liter bottle)":2,"Loaf of fresh white bread (500 gr)":1.38,"Milk (1 liter bottle)":1.03,"Water (1.5 liter bottle)":1.4,"Coke/Pepsi (0.33 liter bottle)":1.36,"McMeal":8,"Meal for 2 People":50,"Meal Inexpensive Restaurant":10,"Apples (1kg)":1.8,"Banana (1kg)":"-","Lettuce (1 head)":0.5,"Onion (1 kg)":"-","Oranges (1 kg)":1.45,"Potato (1 kg)":0.87,"Rice (white) (1 kg)":"-","Tomato (1 kg)":"-","Beef Round (1 kg)":"-","Bottle of Wine":5,"Chicken Breasts (1 kg)":9.42,"Cigarrettes 20 Pack (Malboro)":1.74,"Local Cheese (1 kg)":10.36,"Rent Apartment (1 bedroom) Outside of centre":500,"Rent Apartment (1 bedroom) In City centre":602.34,"Rent Apartment (3 bedrooms) Outside of centre":837.5,"Rent Apartment (3 bedrooms) In City centre":940,"Price per square meter to buy apartment outside of centre":1925,"Price per square meter to buy apartment in city centre":2825,"Average monthly net salary":739.62,"Gasoline":1.11,"One Way Ticket (Local transport)":0.3,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":55,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":33.49,"Cinema, International, Release, 1 seat":5,"Fitness Club, Monthly  Fee for Adult":44.84,"Tennis Court Rent (1 hour on weekend)":5,"1 pair of jeans (Levis 501 or similar)":100,"1 pair of men leather business shoes":100,"1 pair of Nike Running Shoes (Mid-range)":125.11,"1 Summer Dress in a chain store (Zara, H&M, ...)":62.63},"2012":{"Domestic Beer (0.5 liter darught)":2.24,"Eggs (12)":2.38,"Imported Beer (0.33 liter bottle)":2.78,"Loaf of fresh white bread (500 gr)":1.75,"Milk (1 liter bottle)":1.24,"Water (1.5 liter bottle)":1.26,"Coke/Pepsi (0.33 liter bottle)":1.77,"McMeal":8.97,"Meal for 2 People":40.27,"Meal Inexpensive Restaurant":9.82,"Apples (1kg)":2.6,"Banana (1kg)":"-","Lettuce (1 head)":1.2,"Onion (1 kg)":"-","Oranges (1 kg)":1.48,"Potato (1 kg)":1.24,"Rice (white) (1 kg)":1.62,"Tomato (1 kg)":2.06,"Beef Round (1 kg)":"-","Bottle of Wine":6.71,"Chicken Breasts (1 kg)":9.62,"Cigarrettes 20 Pack (Malboro)":1.97,"Local Cheese (1 kg)":11.41,"Rent Apartment (1 bedroom) Outside of centre":374.77,"Rent Apartment (1 bedroom) In City centre":532.35,"Rent Apartment (3 bedrooms) Outside of centre":754.17,"Rent Apartment (3 bedrooms) In City centre":974.17,"Price per square meter to buy apartment outside of centre":1769.56,"Price per square meter to buy apartment in city centre":2509.9,"Average monthly net salary":1199.65,"Gasoline":1.4,"One Way Ticket (Local transport)":0.42,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":119.75,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":35.04,"Cinema, International, Release, 1 seat":8.82,"Fitness Club, Monthly  Fee for Adult":51.81,"Tennis Court Rent (1 hour on weekend)":20.32,"1 pair of jeans (Levis 501 or similar)":97.04,"1 pair of men leather business shoes":124.42,"1 pair of Nike Running Shoes (Mid-range)":124.83,"1 Summer Dress in a chain store (Zara, H&M, ...)":75.26},"2013":{"Domestic Beer (0.5 liter darught)":2.19,"Eggs (12)":2.62,"Imported Beer (0.33 liter bottle)":"-","Loaf of fresh white bread (500 gr)":1.81,"Milk (1 liter bottle)":1.31,"Water (1.5 liter bottle)":1.43,"Coke/Pepsi (0.33 liter bottle)":1.65,"McMeal":9.58,"Meal for 2 People":42.15,"Meal Inexpensive Restaurant":11.49,"Apples (1kg)":2.77,"Banana (1kg)":"-","Lettuce (1 head)":1.39,"Onion (1 kg)":"-","Oranges (1 kg)":1.31,"Potato (1 kg)":1.28,"Rice (white) (1 kg)":2.01,"Tomato (1 kg)":2.58,"Beef Round (1 kg)":"-","Bottle of Wine":5.75,"Chicken Breasts (1 kg)":9.17,"Cigarrettes 20 Pack (Malboro)":1.92,"Local Cheese (1 kg)":10.89,"Rent Apartment (1 bedroom) Outside of centre":396.62,"Rent Apartment (1 bedroom) In City centre":477.64,"Rent Apartment (3 bedrooms) Outside of centre":711.48,"Rent Apartment (3 bedrooms) In City centre":956.53,"Price per square meter to buy apartment outside of centre":2413.63,"Price per square meter to buy apartment in city centre":3341.95,"Average monthly net salary":1095.12,"Gasoline":1.31,"One Way Ticket (Local transport)":0.43,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":109.7,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":34.45,"Cinema, International, Release, 1 seat":8.81,"Fitness Club, Monthly  Fee for Adult":55.56,"Tennis Court Rent (1 hour on weekend)":14.12,"1 pair of jeans (Levis 501 or similar)":105.8,"1 pair of men leather business shoes":114.83,"1 pair of Nike Running Shoes (Mid-range)":119.63,"1 Summer Dress in a chain store (Zara, H&M, ...)":64.84},"2014":{"Domestic Beer (0.5 liter darught)":3,"Eggs (12)":2.55,"Imported Beer (0.33 liter bottle)":3.04,"Loaf of fresh white bread (500 gr)":1.81,"Milk (1 liter bottle)":1.37,"Water (1.5 liter bottle)":1.37,"Coke/Pepsi (0.33 liter bottle)":1.89,"McMeal":8.4,"Meal for 2 People":45,"Meal Inexpensive Restaurant":12,"Apples (1kg)":2.48,"Banana (1kg)":"-","Lettuce (1 head)":1.76,"Onion (1 kg)":"-","Oranges (1 kg)":1.74,"Potato (1 kg)":1.66,"Rice (white) (1 kg)":2.37,"Tomato (1 kg)":2.81,"Beef Round (1 kg)":"-","Bottle of Wine":8,"Chicken Breasts (1 kg)":9.27,"Cigarrettes 20 Pack (Malboro)":2,"Local Cheese (1 kg)":11.62,"Rent Apartment (1 bedroom) Outside of centre":419.04,"Rent Apartment (1 bedroom) In City centre":540.85,"Rent Apartment (3 bedrooms) Outside of centre":903.57,"Rent Apartment (3 bedrooms) In City centre":1110.42,"Price per square meter to buy apartment outside of centre":2563.64,"Price per square meter to buy apartment in city centre":3337.5,"Average monthly net salary":1230.08,"Gasoline":1.6,"One Way Ticket (Local transport)":0.5,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":147.48,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":36.88,"Cinema, International, Release, 1 seat":8.5,"Fitness Club, Monthly  Fee for Adult":51.12,"Tennis Court Rent (1 hour on weekend)":21.71,"1 pair of jeans (Levis 501 or similar)":99.4,"1 pair of men leather business shoes":122.27,"1 pair of Nike Running Shoes (Mid-range)":115.45,"1 Summer Dress in a chain store (Zara, H&M, ...)":70.79},"2015":{"Domestic Beer (0.5 liter darught)":3.5,"Eggs (12)":2.18,"Imported Beer (0.33 liter bottle)":3.28,"Loaf of fresh white bread (500 gr)":1.82,"Milk (1 liter bottle)":1.34,"Water (1.5 liter bottle)":1.46,"Coke/Pepsi (0.33 liter bottle)":1.77,"McMeal":9,"Meal for 2 People":47.5,"Meal Inexpensive Restaurant":12,"Apples (1kg)":2.56,"Banana (1kg)":1.81,"Lettuce (1 head)":1.96,"Onion (1 kg)":1.36,"Oranges (1 kg)":1.34,"Potato (1 kg)":1.25,"Rice (white) (1 kg)":2.21,"Tomato (1 kg)":2.36,"Beef Round (1 kg)":9.51,"Bottle of Wine":6,"Chicken Breasts (1 kg)":8.06,"Cigarrettes 20 Pack (Malboro)":2.25,"Local Cheese (1 kg)":10.62,"Rent Apartment (1 bedroom) Outside of centre":432.55,"Rent Apartment (1 bedroom) In City centre":553.33,"Rent Apartment (3 bedrooms) Outside of centre":917.54,"Rent Apartment (3 bedrooms) In City centre":1131.92,"Price per square meter to buy apartment outside of centre":2528.33,"Price per square meter to buy apartment in city centre":3385,"Average monthly net salary":1099.66,"Gasoline":1.44,"One Way Ticket (Local transport)":0.46,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":155.43,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":46.21,"Cinema, International, Release, 1 seat":9.5,"Fitness Club, Monthly  Fee for Adult":49.3,"Tennis Court Rent (1 hour on weekend)":23.95,"1 pair of jeans (Levis 501 or similar)":101.78,"1 pair of men leather business shoes":121.26,"1 pair of Nike Running Shoes (Mid-range)":119.37,"1 Summer Dress in a chain store (Zara, H&M, ...)":71.4},"2016":{"Domestic Beer (0.5 liter darught)":2.18,"Eggs (12)":2.19,"Imported Beer (0.33 liter bottle)":3.5,"Loaf of fresh white bread (500 gr)":2.12,"Milk (1 liter bottle)":1.25,"Water (1.5 liter bottle)":1.32,"Coke/Pepsi (0.33 liter bottle)":1.49,"McMeal":8.72,"Meal for 2 People":39.97,"Meal Inexpensive Restaurant":10.89,"Apples (1kg)":2.36,"Banana (1kg)":1.93,"Lettuce (1 head)":1.12,"Onion (1 kg)":1.44,"Oranges (1 kg)":1.55,"Potato (1 kg)":1.02,"Rice (white) (1 kg)":1.64,"Tomato (1 kg)":2.26,"Beef Round (1 kg)":9.23,"Bottle of Wine":5.45,"Chicken Breasts (1 kg)":5.98,"Cigarrettes 20 Pack (Malboro)":2.91,"Local Cheese (1 kg)":10,"Rent Apartment (1 bedroom) Outside of centre":352.91,"Rent Apartment (1 bedroom) In City centre":452.36,"Rent Apartment (3 bedrooms) Outside of centre":660.34,"Rent Apartment (3 bedrooms) In City centre":870.41,"Price per square meter to buy apartment outside of centre":2037.43,"Price per square meter to buy apartment in city centre":2839.01,"Average monthly net salary":915.12,"Gasoline":1.24,"One Way Ticket (Local transport)":0.45,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":107.63,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":37.29,"Cinema, International, Release, 1 seat":9.09,"Fitness Club, Monthly  Fee for Adult":44.39,"Tennis Court Rent (1 hour on weekend)":23.07,"1 pair of jeans (Levis 501 or similar)":101.94,"1 pair of men leather business shoes":146.07,"1 pair of Nike Running Shoes (Mid-range)":118.66,"1 Summer Dress in a chain store (Zara, H&M, ...)":62.52},"2017":{"Domestic Beer (0.5 liter darught)":3.14,"Eggs (12)":2.1,"Imported Beer (0.33 liter bottle)":3.57,"Loaf of fresh white bread (500 gr)":2.77,"Milk (1 liter bottle)":1.44,"Water (1.5 liter bottle)":1.35,"Coke/Pepsi (0.33 liter bottle)":1.8,"McMeal":8.8,"Meal for 2 People":40.85,"Meal Inexpensive Restaurant":11.31,"Apples (1kg)":2.53,"Banana (1kg)":1.79,"Lettuce (1 head)":1.21,"Onion (1 kg)":1.17,"Oranges (1 kg)":1.29,"Potato (1 kg)":1.09,"Rice (white) (1 kg)":1.63,"Tomato (1 kg)":2.09,"Beef Round (1 kg)":8.83,"Bottle of Wine":6.28,"Chicken Breasts (1 kg)":6.12,"Cigarrettes 20 Pack (Malboro)":3.46,"Local Cheese (1 kg)":10.3,"Rent Apartment (1 bedroom) Outside of centre":373.74,"Rent Apartment (1 bedroom) In City centre":499.1,"Rent Apartment (3 bedrooms) Outside of centre":725.95,"Rent Apartment (3 bedrooms) In City centre":938.69,"Price per square meter to buy apartment outside of centre":2343,"Price per square meter to buy apartment in city centre":2802.15,"Average monthly net salary":985.59,"Gasoline":1.27,"One Way Ticket (Local transport)":0.41,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":108.88,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":49.26,"Cinema, International, Release, 1 seat":9.43,"Fitness Club, Monthly  Fee for Adult":53.73,"Tennis Court Rent (1 hour on weekend)":21.17,"1 pair of jeans (Levis 501 or similar)":104.61,"1 pair of men leather business shoes":150.74,"1 pair of Nike Running Shoes (Mid-range)":123.84,"1 Summer Dress in a chain store (Zara, H&M, ...)":63.66},"2018":{"Domestic Beer (0.5 liter darught)":2.4,"Eggs (12)":2.13,"Imported Beer (0.33 liter bottle)":2.45,"Loaf of fresh white bread (500 gr)":2.05,"Milk (1 liter bottle)":1.16,"Water (1.5 liter bottle)":1.19,"Coke/Pepsi (0.33 liter bottle)":1.56,"McMeal":7.21,"Meal for 2 People":32.05,"Meal Inexpensive Restaurant":10.02,"Apples (1kg)":2.14,"Banana (1kg)":1.67,"Lettuce (1 head)":1.37,"Onion (1 kg)":1.14,"Oranges (1 kg)":1.32,"Potato (1 kg)":0.94,"Rice (white) (1 kg)":1.58,"Tomato (1 kg)":1.59,"Beef Round (1 kg)":7.48,"Bottle of Wine":6.01,"Chicken Breasts (1 kg)":5.54,"Cigarrettes 20 Pack (Malboro)":2.78,"Local Cheese (1 kg)":8.15,"Rent Apartment (1 bedroom) Outside of centre":343.18,"Rent Apartment (1 bedroom) In City centre":442.77,"Rent Apartment (3 bedrooms) Outside of centre":655,"Rent Apartment (3 bedrooms) In City centre":822.01,"Price per square meter to buy apartment outside of centre":2457.59,"Price per square meter to buy apartment in city centre":3253.43,"Average monthly net salary":800.86,"Gasoline":1.3,"One Way Ticket (Local transport)":0.42,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":121.97,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":47.91,"Cinema, International, Release, 1 seat":8.01,"Fitness Club, Monthly  Fee for Adult":47.35,"Tennis Court Rent (1 hour on weekend)":16.26,"1 pair of jeans (Levis 501 or similar)":76.53,"1 pair of men leather business shoes":117.74,"1 pair of Nike Running Shoes (Mid-range)":99.33,"1 Summer Dress in a chain store (Zara, H&M, ...)":54.98},"2019":{"Domestic Beer (0.5 liter darught)":2.13,"Eggs (12)":1.58,"Imported Beer (0.33 liter bottle)":2.24,"Loaf of fresh white bread (500 gr)":1.32,"Milk (1 liter bottle)":0.96,"Water (1.5 liter bottle)":0.97,"Coke/Pepsi (0.33 liter bottle)":1.571,"McMeal":5.6,"Meal for 2 People":22.38,"Meal Inexpensive Restaurant":6.71,"Apples (1kg)":1.37,"Banana (1kg)":1.23,"Lettuce (1 head)":0.82,"Onion (1 kg)":0.68,"Oranges (1 kg)":0.76,"Potato (1 kg)":0.6,"Rice (white) (1 kg)":1.08,"Tomato (1 kg)":1.08,"Beef Round (1 kg)":5.71,"Bottle of Wine":3.41,"Chicken Breasts (1 kg)":4.22,"Cigarrettes 20 Pack (Malboro)":1.9,"Local Cheese (1 kg)":6.54,"Rent Apartment (1 bedroom) Outside of centre":234.58,"Rent Apartment (1 bedroom) In City centre":310.43,"Rent Apartment (3 bedrooms) Outside of centre":440.97,"Rent Apartment (3 bedrooms) In City centre":534.33,"Price per square meter to buy apartment outside of centre":2202.7,"Price per square meter to buy apartment in city centre":2842.09,"Average monthly net salary":565.43,"Gasoline":0.93,"One Way Ticket (Local transport)":0.4,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":94.51,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":29.71,"Cinema, International, Release, 1 seat":5.82,"Fitness Club, Monthly  Fee for Adult":28.47,"Tennis Court Rent (1 hour on weekend)":11.6,"1 pair of jeans (Levis 501 or similar)":54.11,"1 pair of men leather business shoes":75.76,"1 pair of Nike Running Shoes (Mid-range)":66.99,"1 Summer Dress in a chain store (Zara, H&M, ...)":40.36}};

/***/ }),

/***/ "./components/SalaryResult/index.js":
/*!******************************************!*\
  !*** ./components/SalaryResult/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-reveal */ "react-reveal");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_8__);










var Row = function Row(props) {
  var icon = props.icon,
      index = props.index,
      could = props.could,
      need = props.need;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: "100%",
    direction: "row",
    gap: "small",
    justify: "evenly"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_8__["Fade"], {
    bottom: true,
    cascade: true
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    level: "3"
  }, icon, " ", index)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    level: "3"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_8__["Fade"], {
    bottom: true,
    cascade: true
  }, could)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    level: "3"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_8__["Fade"], {
    bottom: true,
    cascade: true
  }, need)));
};

var SalaryResult =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SalaryResult, _React$Component);

  function SalaryResult() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SalaryResult);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SalaryResult).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SalaryResult, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var rows = data.map(function (object, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Row, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: index
        }, object));
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, rows);
    }
  }]);

  return SalaryResult;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SalaryResult);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "grommet");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_SalaryForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SalaryForm */ "./components/SalaryForm/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);










var theme = {
  global: {
    font: {
      family: '"Varela Round", sans-serif'
    }
  }
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, "SueldoHoy Argentina 2019"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "description",
        content: "Conozca el sueldo que deber\xEDa cobrar en Argentina"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grommet"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SalaryForm__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/itwarp/Documents/sueldohoy/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "grommet":
/*!**************************!*\
  !*** external "grommet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),

/***/ "grommet-icons":
/*!********************************!*\
  !*** external "grommet-icons" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet-icons");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-reveal":
/*!*******************************!*\
  !*** external "react-reveal" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map