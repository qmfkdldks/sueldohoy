webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
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

/***/ })

})
//# sourceMappingURL=index.js.a23feea880144eecd0c5.hot-update.js.map