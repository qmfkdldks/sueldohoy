webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_8__);










var Row = function Row(props) {
  var icon = props.icon,
      index = props.index,
      could = props.could,
      need = props.need;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_8__["Fade"], {
    bottom: true
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    direction: "row",
    gap: "small"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Box"], null, icon), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    level: "2"
  }, index), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    level: "2"
  }, could), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    level: "2"
  }, need))));
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        align: "center"
      }, rows));
    }
  }]);

  return SalaryResult;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SalaryResult);

/***/ })

})
//# sourceMappingURL=index.js.9ce255ed3deab6e28d27.hot-update.js.map