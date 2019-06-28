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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "HfBV":
/***/ (function(module, exports) {

module.exports = require("react-reveal");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
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

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "grommet"
var external_grommet_ = __webpack_require__("mRkd");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js
var parse_float = __webpack_require__("Wa2I");
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);

// EXTERNAL MODULE: external "grommet-icons"
var external_grommet_icons_ = __webpack_require__("iHqg");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__("HfBV");

// CONCATENATED MODULE: ./components/SalaryResult/index.js










var SalaryResult_Row = function Row(props) {
  var icon = props.icon,
      index = props.index,
      could = props.could,
      need = props.need;
  return external_react_default.a.createElement(external_grommet_["Box"], {
    width: "100%",
    direction: "row",
    gap: "small",
    justify: "evenly"
  }, external_react_default.a.createElement(external_react_reveal_["Fade"], {
    bottom: true,
    cascade: true
  }, external_react_default.a.createElement(external_grommet_["Heading"], {
    level: "3"
  }, icon, " ", index)), external_react_default.a.createElement(external_grommet_["Heading"], {
    level: "3"
  }, external_react_default.a.createElement(external_react_reveal_["Fade"], {
    bottom: true,
    cascade: true
  }, could)), external_react_default.a.createElement(external_grommet_["Heading"], {
    level: "3"
  }, external_react_default.a.createElement(external_react_reveal_["Fade"], {
    bottom: true,
    cascade: true
  }, need)));
};

var SalaryResult_SalaryResult =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(SalaryResult, _React$Component);

  function SalaryResult() {
    Object(classCallCheck["a" /* default */])(this, SalaryResult);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SalaryResult).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(SalaryResult, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var rows = data.map(function (object, index) {
        return external_react_default.a.createElement(SalaryResult_Row, _extends({
          key: index
        }, object));
      });
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, rows);
    }
  }]);

  return SalaryResult;
}(external_react_default.a.Component);

/* harmony default export */ var components_SalaryResult = (SalaryResult_SalaryResult);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// CONCATENATED MODULE: ./components/DateMaskedInput.js










var daysInMonth = function daysInMonth(month) {
  return new Date(2019, month, 0).getDate();
};

var DateMaskedInput_DateMaskedInput =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(DateMaskedInput, _Component);

  function DateMaskedInput() {
    Object(classCallCheck["a" /* default */])(this, DateMaskedInput);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DateMaskedInput).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(DateMaskedInput, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_grommet_["MaskedInput"], {
        mask: [{
          length: 4,
          options: from_default()({
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
          options: from_default()({
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
          options: from_default()({
            length: daysInMonth(parse_int_default()(this.props.value.split("/")[0], 10))
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
}(external_react_["Component"]);

/* harmony default export */ var components_DateMaskedInput = (DateMaskedInput_DateMaskedInput);
// EXTERNAL MODULE: ./components/SalaryForm/tprice.json
var tprice = __webpack_require__("p1AT");

// CONCATENATED MODULE: ./components/SalaryForm/index.js


















function getD(index, data, date, value) {
  var icon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : external_react_default.a.createElement(external_grommet_icons_["Currency"], null);
  var past_obj = data.find(function (record) {
    return record.d == date;
  });

  if (past_obj) {
    var past_ratio = past_obj.v;
    var past_available = parse_float_default()(value) / past_ratio;
    var current_ratio = data[data.length - 1].v;
    var current_necessary = past_available * current_ratio;
    var object = {
      index: index,
      icon: icon,
      could: past_available.toFixed(2),
      need: "$ " + current_necessary.toFixed(2)
    };
    console.log(object);
    return object;
  }

  return {};
}

function calculatePrice(index, usd, date, value) {
  var icon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : external_react_default.a.createElement(external_grommet_icons_["Gremlin"], null);
  var past_obj = usd.find(function (record) {
    return record.d == date;
  });
  var past_product_price = tprice[new Date(date).getFullYear()];
  var current_product_price = tprice[new Date().getFullYear()];

  if (past_obj && past_product_price && current_product_price) {
    var past_dollar_price = past_obj.v;
    var past_available_dollar = parse_float_default()(value) / past_dollar_price;
    var past_available_product = past_available_dollar / past_product_price[index];
    var current_necesary_dollar = past_available_product * current_product_price[index];
    var current_ratio = usd[usd.length - 1].v;
    var current_necesary_pesos = current_necesary_dollar * current_ratio; // const current_available_product = past_available_dollar / current_product_price

    var object = {
      index: index,
      could: past_available_product.toFixed(0),
      need: "$ " + current_necesary_pesos.toFixed(2)
    };
    console.log(object);
    return object;
  }

  return {};
}

var SalaryForm_SalaryForm =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(SalaryForm, _React$Component);

  function SalaryForm() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, SalaryForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(SalaryForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fetchData",
    /*#__PURE__*/
    Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var response1, usd, response2, cer, response3, uva, response4, uvi;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                fetching: true
              });

              _context.next = 3;
              return external_isomorphic_unfetch_default()('/usd');

            case 3:
              response1 = _context.sent;
              _context.next = 6;
              return response1.json();

            case 6:
              usd = _context.sent;
              _context.next = 9;
              return external_isomorphic_unfetch_default()('/cer');

            case 9:
              response2 = _context.sent;
              _context.next = 12;
              return response2.json();

            case 12:
              cer = _context.sent;
              _context.next = 15;
              return external_isomorphic_unfetch_default()('/uva');

            case 15:
              response3 = _context.sent;
              _context.next = 18;
              return response3.json();

            case 18:
              uva = _context.sent;
              _context.next = 21;
              return external_isomorphic_unfetch_default()('/uvi');

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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onCalculate", function () {
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
        data.push({
          index: "",
          could: "Podías comprar",
          need: "Hoy Necsitas"
        });
        data.push(getD("USD", usd, date, value, external_react_default.a.createElement(external_grommet_icons_["Currency"], null)));
        data.push(getD("UVI", uvi, date, value, external_react_default.a.createElement(external_grommet_icons_["Home"], null)));
        data.push(getD("CER", cer, date, value));
        data.push(getD("UVA", uva, date, value));
        data.push(calculatePrice("Manzana (1kg)", usd, date, value));
        data.push(calculatePrice("McMeal", usd, date, value));
        data.push(calculatePrice("Gasolina (1 litro)", usd, date, value)); // data.push(calculatePrice("One Way Ticket (Local transport)", usd, date, value))

        _this.setState({
          data: data
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChangeDate", function (event) {
      return _this.setState({
        date: event.target.value
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onValueChange", function (event) {
      return _this.setState({
        value: event.target.value
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(SalaryForm, [{
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
      var renderResult = idle ? external_react_default.a.createElement(external_grommet_["Box"], {
        pad: "medium"
      }, external_react_default.a.createElement(external_grommet_["Heading"], null, "La inflaci\xF3n Argentina en 2018 fue del 47,6%, la cifra m\xE1s alta en los \xFAltimos 27 a\xF1os."), external_react_default.a.createElement(external_grommet_["WorldMap"], null)) : external_react_default.a.createElement(components_SalaryResult, {
        data: data
      });
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_grommet_["Box"], {
        direction: "row-responsive",
        pad: "large"
      }, external_react_default.a.createElement(external_grommet_["Box"], {
        pad: "medium",
        gap: "small"
      }, external_react_default.a.createElement(external_grommet_["Form"], {
        onSubmit: this.onCalculate
      }, external_react_default.a.createElement(external_grommet_["Heading"], null, "\xBFCu\xE1nto cobraba cuando tuvo su ultimo aumento?"), external_react_default.a.createElement(external_grommet_["Paragraph"], null, "La inflaci\xF3n hace dificil saber cual es el porcentaje justo de actualizacion salarial que debe perseguir el empleado."), external_react_default.a.createElement(external_grommet_["Box"], {
        gap: "small",
        pad: "medium"
      }, external_react_default.a.createElement(external_grommet_["Box"], {
        direction: "row",
        gap: "small",
        align: "center"
      }, external_react_default.a.createElement(external_grommet_icons_["Currency"], null), external_react_default.a.createElement("label", null, external_react_default.a.createElement(external_grommet_["FormField"], {
        label: "\xBFCu\xE1nto cobraste?",
        min: 1,
        required: true,
        type: "number",
        placeholder: "$ Sueldo anterior",
        value: value,
        onChange: this.onValueChange
      }))), external_react_default.a.createElement("label", null, external_react_default.a.createElement(external_grommet_["FormField"], {
        label: "\xBFC\xFAando cobraste?"
      }, external_react_default.a.createElement(components_DateMaskedInput, {
        value: this.state.date,
        onChange: this.onChangeDate
      })))), external_react_default.a.createElement(external_grommet_["Box"], {
        align: "end"
      }, external_react_default.a.createElement(external_grommet_["Button"], {
        type: "submit",
        disabled: fetching,
        icon: external_react_default.a.createElement(external_grommet_icons_["Gremlin"], null),
        label: "Calcular"
      })))), external_react_default.a.createElement(external_grommet_["Box"], {
        width: "100%",
        round: true,
        background: "brand",
        align: "center",
        justify: "center"
      }, renderResult)));
    }
  }]);

  return SalaryForm;
}(external_react_default.a.Component);

/* harmony default export */ var components_SalaryForm = (SalaryForm_SalaryForm);
// CONCATENATED MODULE: ./components/Footer/index.js


 // import { Logo, SocialMedia } from "../index";
// import { FooterContent } from "./FooterContent";

var Footer_Footer = function Footer() {
  return external_react_default.a.createElement(external_grommet_["ResponsiveContext"].Consumer, null, function (size) {
    return external_react_default.a.createElement(external_grommet_["Box"], {
      direction: "row",
      justify: "between" // border={{ side: "top", color: "light-4" }}
      ,
      pad: {
        top: "xlarge"
      }
    }, external_react_default.a.createElement(external_grommet_["Box"], {
      gap: "large",
      align: "start"
    }, external_react_default.a.createElement(external_grommet_["Box"], {
      gap: "small",
      direction: "row-responsive",
      align: "center"
    }, external_react_default.a.createElement(external_grommet_["Box"], {
      height: "40px",
      width: "40px"
    }, external_react_default.a.createElement(external_grommet_["Image"], {
      fit: "cover",
      src: "/static/logo2.png",
      alt: "SueldoHoy Logo"
    })), external_react_default.a.createElement(external_grommet_["Text"], {
      weight: "bold",
      size: "large"
    }, "SueldoHoy!"))), external_react_default.a.createElement(external_grommet_["Box"], {
      align: "end"
    }, external_react_default.a.createElement(external_grommet_["Text"], null, " all rights reserved \xA9 2019 ")));
  });
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/index.js










var theme = {
  global: {
    font: {
      family: '"Varela Round", sans-serif'
    }
  }
};

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Index, _React$Component);

  function Index() {
    Object(classCallCheck["a" /* default */])(this, Index);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Index).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "SueldoHoy Argentina 2019"), external_react_default.a.createElement("meta", {
        name: "description",
        content: "Conozca el sueldo que deber\xEDa cobrar en Argentina"
      })), external_react_default.a.createElement(external_grommet_["Grommet"], {
        theme: theme
      }, external_react_default.a.createElement(components_SalaryForm, null), external_react_default.a.createElement(components_Footer, null)));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iHqg":
/***/ (function(module, exports) {

module.exports = require("grommet-icons");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mRkd":
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p1AT":
/***/ (function(module) {

module.exports = {"2010":{"Domestic Beer (0.5 liter darught)":2,"Eggs (12)":1.56,"Imported Beer (0.33 liter bottle)":1.52,"Loaf of fresh white bread (500 gr)":1.24,"Milk (1 liter bottle)":0.98,"Water (1.5 liter bottle)":0.9,"Coke/Pepsi (0.33 liter bottle)":1.3,"McMeal":7,"Meal for 2 People":26,"Meal Inexpensive Restaurant":6.79,"Manzana (1kg)":"-","Banana (1kg)":"-","Lettuce (1 head)":"-","Onion (1 kg)":"-","Oranges (1 kg)":"-","Potato (1 kg)":"-","Rice (white) (1 kg)":"-","Tomato (1 kg)":"-","Beef Round (1 kg)":"-","Bottle of Wine":5,"Chicken Breasts (1 kg)":9.33,"Cigarrettes 20 Pack (Malboro)":1.58,"Local Cheese (1 kg)":9.87,"Rent Apartment (1 bedroom) Outside of centre":300,"Rent Apartment (1 bedroom) In City centre":521.67,"Rent Apartment (3 bedrooms) Outside of centre":486.67,"Rent Apartment (3 bedrooms) In City centre":875,"Price per square meter to buy apartment outside of centre":1250,"Price per square meter to buy apartment in city centre":2200,"Average monthly net salary":819.1,"Gasolina (1 litro)":1.01,"One Way Ticket (Local transport)":0.45,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":65,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":34.59,"Cinema, International, Release, 1 seat":6.4,"Fitness Club, Monthly  Fee for Adult":32.5,"Tennis Court Rent (1 hour on weekend)":15,"1 pair of jeans (Levis 501 or similar)":88.17,"1 pair of men leather business shoes":93.33,"1 pair of Nike Running Shoes (Mid-range)":93.33,"1 Summer Dress in a chain store (Zara, H&M, ...)":80},"2011":{"Domestic Beer (0.5 liter darught)":1.27,"Eggs (12)":1.85,"Imported Beer (0.33 liter bottle)":2,"Loaf of fresh white bread (500 gr)":1.38,"Milk (1 liter bottle)":1.03,"Water (1.5 liter bottle)":1.4,"Coke/Pepsi (0.33 liter bottle)":1.36,"McMeal":8,"Meal for 2 People":50,"Meal Inexpensive Restaurant":10,"Manzana (1kg)":1.8,"Banana (1kg)":"-","Lettuce (1 head)":0.5,"Onion (1 kg)":"-","Oranges (1 kg)":1.45,"Potato (1 kg)":0.87,"Rice (white) (1 kg)":"-","Tomato (1 kg)":"-","Beef Round (1 kg)":"-","Bottle of Wine":5,"Chicken Breasts (1 kg)":9.42,"Cigarrettes 20 Pack (Malboro)":1.74,"Local Cheese (1 kg)":10.36,"Rent Apartment (1 bedroom) Outside of centre":500,"Rent Apartment (1 bedroom) In City centre":602.34,"Rent Apartment (3 bedrooms) Outside of centre":837.5,"Rent Apartment (3 bedrooms) In City centre":940,"Price per square meter to buy apartment outside of centre":1925,"Price per square meter to buy apartment in city centre":2825,"Average monthly net salary":739.62,"Gasolina (1 litro)":1.11,"One Way Ticket (Local transport)":0.3,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":55,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":33.49,"Cinema, International, Release, 1 seat":5,"Fitness Club, Monthly  Fee for Adult":44.84,"Tennis Court Rent (1 hour on weekend)":5,"1 pair of jeans (Levis 501 or similar)":100,"1 pair of men leather business shoes":100,"1 pair of Nike Running Shoes (Mid-range)":125.11,"1 Summer Dress in a chain store (Zara, H&M, ...)":62.63},"2012":{"Domestic Beer (0.5 liter darught)":2.24,"Eggs (12)":2.38,"Imported Beer (0.33 liter bottle)":2.78,"Loaf of fresh white bread (500 gr)":1.75,"Milk (1 liter bottle)":1.24,"Water (1.5 liter bottle)":1.26,"Coke/Pepsi (0.33 liter bottle)":1.77,"McMeal":8.97,"Meal for 2 People":40.27,"Meal Inexpensive Restaurant":9.82,"Manzana (1kg)":2.6,"Banana (1kg)":"-","Lettuce (1 head)":1.2,"Onion (1 kg)":"-","Oranges (1 kg)":1.48,"Potato (1 kg)":1.24,"Rice (white) (1 kg)":1.62,"Tomato (1 kg)":2.06,"Beef Round (1 kg)":"-","Bottle of Wine":6.71,"Chicken Breasts (1 kg)":9.62,"Cigarrettes 20 Pack (Malboro)":1.97,"Local Cheese (1 kg)":11.41,"Rent Apartment (1 bedroom) Outside of centre":374.77,"Rent Apartment (1 bedroom) In City centre":532.35,"Rent Apartment (3 bedrooms) Outside of centre":754.17,"Rent Apartment (3 bedrooms) In City centre":974.17,"Price per square meter to buy apartment outside of centre":1769.56,"Price per square meter to buy apartment in city centre":2509.9,"Average monthly net salary":1199.65,"Gasolina (1 litro)":1.4,"One Way Ticket (Local transport)":0.42,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":119.75,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":35.04,"Cinema, International, Release, 1 seat":8.82,"Fitness Club, Monthly  Fee for Adult":51.81,"Tennis Court Rent (1 hour on weekend)":20.32,"1 pair of jeans (Levis 501 or similar)":97.04,"1 pair of men leather business shoes":124.42,"1 pair of Nike Running Shoes (Mid-range)":124.83,"1 Summer Dress in a chain store (Zara, H&M, ...)":75.26},"2013":{"Domestic Beer (0.5 liter darught)":2.19,"Eggs (12)":2.62,"Imported Beer (0.33 liter bottle)":"-","Loaf of fresh white bread (500 gr)":1.81,"Milk (1 liter bottle)":1.31,"Water (1.5 liter bottle)":1.43,"Coke/Pepsi (0.33 liter bottle)":1.65,"McMeal":9.58,"Meal for 2 People":42.15,"Meal Inexpensive Restaurant":11.49,"Manzana (1kg)":2.77,"Banana (1kg)":"-","Lettuce (1 head)":1.39,"Onion (1 kg)":"-","Oranges (1 kg)":1.31,"Potato (1 kg)":1.28,"Rice (white) (1 kg)":2.01,"Tomato (1 kg)":2.58,"Beef Round (1 kg)":"-","Bottle of Wine":5.75,"Chicken Breasts (1 kg)":9.17,"Cigarrettes 20 Pack (Malboro)":1.92,"Local Cheese (1 kg)":10.89,"Rent Apartment (1 bedroom) Outside of centre":396.62,"Rent Apartment (1 bedroom) In City centre":477.64,"Rent Apartment (3 bedrooms) Outside of centre":711.48,"Rent Apartment (3 bedrooms) In City centre":956.53,"Price per square meter to buy apartment outside of centre":2413.63,"Price per square meter to buy apartment in city centre":3341.95,"Average monthly net salary":1095.12,"Gasolina (1 litro)":1.31,"One Way Ticket (Local transport)":0.43,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":109.7,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":34.45,"Cinema, International, Release, 1 seat":8.81,"Fitness Club, Monthly  Fee for Adult":55.56,"Tennis Court Rent (1 hour on weekend)":14.12,"1 pair of jeans (Levis 501 or similar)":105.8,"1 pair of men leather business shoes":114.83,"1 pair of Nike Running Shoes (Mid-range)":119.63,"1 Summer Dress in a chain store (Zara, H&M, ...)":64.84},"2014":{"Domestic Beer (0.5 liter darught)":3,"Eggs (12)":2.55,"Imported Beer (0.33 liter bottle)":3.04,"Loaf of fresh white bread (500 gr)":1.81,"Milk (1 liter bottle)":1.37,"Water (1.5 liter bottle)":1.37,"Coke/Pepsi (0.33 liter bottle)":1.89,"McMeal":8.4,"Meal for 2 People":45,"Meal Inexpensive Restaurant":12,"Manzana (1kg)":2.48,"Banana (1kg)":"-","Lettuce (1 head)":1.76,"Onion (1 kg)":"-","Oranges (1 kg)":1.74,"Potato (1 kg)":1.66,"Rice (white) (1 kg)":2.37,"Tomato (1 kg)":2.81,"Beef Round (1 kg)":"-","Bottle of Wine":8,"Chicken Breasts (1 kg)":9.27,"Cigarrettes 20 Pack (Malboro)":2,"Local Cheese (1 kg)":11.62,"Rent Apartment (1 bedroom) Outside of centre":419.04,"Rent Apartment (1 bedroom) In City centre":540.85,"Rent Apartment (3 bedrooms) Outside of centre":903.57,"Rent Apartment (3 bedrooms) In City centre":1110.42,"Price per square meter to buy apartment outside of centre":2563.64,"Price per square meter to buy apartment in city centre":3337.5,"Average monthly net salary":1230.08,"Gasolina (1 litro)":1.6,"One Way Ticket (Local transport)":0.5,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":147.48,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":36.88,"Cinema, International, Release, 1 seat":8.5,"Fitness Club, Monthly  Fee for Adult":51.12,"Tennis Court Rent (1 hour on weekend)":21.71,"1 pair of jeans (Levis 501 or similar)":99.4,"1 pair of men leather business shoes":122.27,"1 pair of Nike Running Shoes (Mid-range)":115.45,"1 Summer Dress in a chain store (Zara, H&M, ...)":70.79},"2015":{"Domestic Beer (0.5 liter darught)":3.5,"Eggs (12)":2.18,"Imported Beer (0.33 liter bottle)":3.28,"Loaf of fresh white bread (500 gr)":1.82,"Milk (1 liter bottle)":1.34,"Water (1.5 liter bottle)":1.46,"Coke/Pepsi (0.33 liter bottle)":1.77,"McMeal":9,"Meal for 2 People":47.5,"Meal Inexpensive Restaurant":12,"Manzana (1kg)":2.56,"Banana (1kg)":1.81,"Lettuce (1 head)":1.96,"Onion (1 kg)":1.36,"Oranges (1 kg)":1.34,"Potato (1 kg)":1.25,"Rice (white) (1 kg)":2.21,"Tomato (1 kg)":2.36,"Beef Round (1 kg)":9.51,"Bottle of Wine":6,"Chicken Breasts (1 kg)":8.06,"Cigarrettes 20 Pack (Malboro)":2.25,"Local Cheese (1 kg)":10.62,"Rent Apartment (1 bedroom) Outside of centre":432.55,"Rent Apartment (1 bedroom) In City centre":553.33,"Rent Apartment (3 bedrooms) Outside of centre":917.54,"Rent Apartment (3 bedrooms) In City centre":1131.92,"Price per square meter to buy apartment outside of centre":2528.33,"Price per square meter to buy apartment in city centre":3385,"Average monthly net salary":1099.66,"Gasolina (1 litro)":1.44,"One Way Ticket (Local transport)":0.46,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":155.43,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":46.21,"Cinema, International, Release, 1 seat":9.5,"Fitness Club, Monthly  Fee for Adult":49.3,"Tennis Court Rent (1 hour on weekend)":23.95,"1 pair of jeans (Levis 501 or similar)":101.78,"1 pair of men leather business shoes":121.26,"1 pair of Nike Running Shoes (Mid-range)":119.37,"1 Summer Dress in a chain store (Zara, H&M, ...)":71.4},"2016":{"Domestic Beer (0.5 liter darught)":2.18,"Eggs (12)":2.19,"Imported Beer (0.33 liter bottle)":3.5,"Loaf of fresh white bread (500 gr)":2.12,"Milk (1 liter bottle)":1.25,"Water (1.5 liter bottle)":1.32,"Coke/Pepsi (0.33 liter bottle)":1.49,"McMeal":8.72,"Meal for 2 People":39.97,"Meal Inexpensive Restaurant":10.89,"Manzana (1kg)":2.36,"Banana (1kg)":1.93,"Lettuce (1 head)":1.12,"Onion (1 kg)":1.44,"Oranges (1 kg)":1.55,"Potato (1 kg)":1.02,"Rice (white) (1 kg)":1.64,"Tomato (1 kg)":2.26,"Beef Round (1 kg)":9.23,"Bottle of Wine":5.45,"Chicken Breasts (1 kg)":5.98,"Cigarrettes 20 Pack (Malboro)":2.91,"Local Cheese (1 kg)":10,"Rent Apartment (1 bedroom) Outside of centre":352.91,"Rent Apartment (1 bedroom) In City centre":452.36,"Rent Apartment (3 bedrooms) Outside of centre":660.34,"Rent Apartment (3 bedrooms) In City centre":870.41,"Price per square meter to buy apartment outside of centre":2037.43,"Price per square meter to buy apartment in city centre":2839.01,"Average monthly net salary":915.12,"Gasolina (1 litro)":1.24,"One Way Ticket (Local transport)":0.45,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":107.63,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":37.29,"Cinema, International, Release, 1 seat":9.09,"Fitness Club, Monthly  Fee for Adult":44.39,"Tennis Court Rent (1 hour on weekend)":23.07,"1 pair of jeans (Levis 501 or similar)":101.94,"1 pair of men leather business shoes":146.07,"1 pair of Nike Running Shoes (Mid-range)":118.66,"1 Summer Dress in a chain store (Zara, H&M, ...)":62.52},"2017":{"Domestic Beer (0.5 liter darught)":3.14,"Eggs (12)":2.1,"Imported Beer (0.33 liter bottle)":3.57,"Loaf of fresh white bread (500 gr)":2.77,"Milk (1 liter bottle)":1.44,"Water (1.5 liter bottle)":1.35,"Coke/Pepsi (0.33 liter bottle)":1.8,"McMeal":8.8,"Meal for 2 People":40.85,"Meal Inexpensive Restaurant":11.31,"Manzana (1kg)":2.53,"Banana (1kg)":1.79,"Lettuce (1 head)":1.21,"Onion (1 kg)":1.17,"Oranges (1 kg)":1.29,"Potato (1 kg)":1.09,"Rice (white) (1 kg)":1.63,"Tomato (1 kg)":2.09,"Beef Round (1 kg)":8.83,"Bottle of Wine":6.28,"Chicken Breasts (1 kg)":6.12,"Cigarrettes 20 Pack (Malboro)":3.46,"Local Cheese (1 kg)":10.3,"Rent Apartment (1 bedroom) Outside of centre":373.74,"Rent Apartment (1 bedroom) In City centre":499.1,"Rent Apartment (3 bedrooms) Outside of centre":725.95,"Rent Apartment (3 bedrooms) In City centre":938.69,"Price per square meter to buy apartment outside of centre":2343,"Price per square meter to buy apartment in city centre":2802.15,"Average monthly net salary":985.59,"Gasolina (1 litro)":1.27,"One Way Ticket (Local transport)":0.41,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":108.88,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":49.26,"Cinema, International, Release, 1 seat":9.43,"Fitness Club, Monthly  Fee for Adult":53.73,"Tennis Court Rent (1 hour on weekend)":21.17,"1 pair of jeans (Levis 501 or similar)":104.61,"1 pair of men leather business shoes":150.74,"1 pair of Nike Running Shoes (Mid-range)":123.84,"1 Summer Dress in a chain store (Zara, H&M, ...)":63.66},"2018":{"Domestic Beer (0.5 liter darught)":2.4,"Eggs (12)":2.13,"Imported Beer (0.33 liter bottle)":2.45,"Loaf of fresh white bread (500 gr)":2.05,"Milk (1 liter bottle)":1.16,"Water (1.5 liter bottle)":1.19,"Coke/Pepsi (0.33 liter bottle)":1.56,"McMeal":7.21,"Meal for 2 People":32.05,"Meal Inexpensive Restaurant":10.02,"Manzana (1kg)":2.14,"Banana (1kg)":1.67,"Lettuce (1 head)":1.37,"Onion (1 kg)":1.14,"Oranges (1 kg)":1.32,"Potato (1 kg)":0.94,"Rice (white) (1 kg)":1.58,"Tomato (1 kg)":1.59,"Beef Round (1 kg)":7.48,"Bottle of Wine":6.01,"Chicken Breasts (1 kg)":5.54,"Cigarrettes 20 Pack (Malboro)":2.78,"Local Cheese (1 kg)":8.15,"Rent Apartment (1 bedroom) Outside of centre":343.18,"Rent Apartment (1 bedroom) In City centre":442.77,"Rent Apartment (3 bedrooms) Outside of centre":655,"Rent Apartment (3 bedrooms) In City centre":822.01,"Price per square meter to buy apartment outside of centre":2457.59,"Price per square meter to buy apartment in city centre":3253.43,"Average monthly net salary":800.86,"Gasolina (1 litro)":1.3,"One Way Ticket (Local transport)":0.42,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":121.97,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":47.91,"Cinema, International, Release, 1 seat":8.01,"Fitness Club, Monthly  Fee for Adult":47.35,"Tennis Court Rent (1 hour on weekend)":16.26,"1 pair of jeans (Levis 501 or similar)":76.53,"1 pair of men leather business shoes":117.74,"1 pair of Nike Running Shoes (Mid-range)":99.33,"1 Summer Dress in a chain store (Zara, H&M, ...)":54.98},"2019":{"Domestic Beer (0.5 liter darught)":2.13,"Eggs (12)":1.58,"Imported Beer (0.33 liter bottle)":2.24,"Loaf of fresh white bread (500 gr)":1.32,"Milk (1 liter bottle)":0.96,"Water (1.5 liter bottle)":0.97,"Coke/Pepsi (0.33 liter bottle)":1.571,"McMeal":5.6,"Meal for 2 People":22.38,"Meal Inexpensive Restaurant":6.71,"Manzana (1kg)":1.37,"Banana (1kg)":1.23,"Lettuce (1 head)":0.82,"Onion (1 kg)":0.68,"Oranges (1 kg)":0.76,"Potato (1 kg)":0.6,"Rice (white) (1 kg)":1.08,"Tomato (1 kg)":1.08,"Beef Round (1 kg)":5.71,"Bottle of Wine":3.41,"Chicken Breasts (1 kg)":4.22,"Cigarrettes 20 Pack (Malboro)":1.9,"Local Cheese (1 kg)":6.54,"Rent Apartment (1 bedroom) Outside of centre":234.58,"Rent Apartment (1 bedroom) In City centre":310.43,"Rent Apartment (3 bedrooms) Outside of centre":440.97,"Rent Apartment (3 bedrooms) In City centre":534.33,"Price per square meter to buy apartment outside of centre":2202.7,"Price per square meter to buy apartment in city centre":2842.09,"Average monthly net salary":565.43,"Gasolina (1 litro)":0.93,"One Way Ticket (Local transport)":0.4,"Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment":94.51,"Internet (60 mbps or more, Unlimited Data, Cabble/ADSL)":29.71,"Cinema, International, Release, 1 seat":5.82,"Fitness Club, Monthly  Fee for Adult":28.47,"Tennis Court Rent (1 hour on weekend)":11.6,"1 pair of jeans (Levis 501 or similar)":54.11,"1 pair of men leather business shoes":75.76,"1 pair of Nike Running Shoes (Mid-range)":66.99,"1 Summer Dress in a chain store (Zara, H&M, ...)":40.36}};

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });