(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_3__);





var Layout =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Layout, _React$Component);

  function Layout() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      midIsActive: false,
      bstripeTop: '#3f77b0',
      bstripeBot: '#014b96',
      fIsActive: false,
      fstripeTop: '#b2b2b2',
      fstripeBot: '#979797',
      fdate: new Date(+new Date() + 2.16e7)
    };
    return _this;
  }

  var _proto = Layout.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "parent"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "header"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "upper"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "ustripe-top-bg"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "ustripe-top"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "ustripe-bot-bg"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "ustripe-bot"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "tick-top"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "tick-bot"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "notch-top"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "notch-bot"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "cap-text"
    }, "CAPITAL METRO")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "break"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "middle"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "bstripe-top",
      style: {
        background: this.state.bstripeTop
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "cap-logo"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.19444in",
      height: "2in",
      viewBox: "0 0 86 144"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      id: "hat",
      fill: "gray",
      stroke: "black",
      strokeWidth: "0",
      d: "M 47.19,36.98 C 47.38,22.61 59.28,19.80 59.28,19.80 59.28,19.80 59.47,10.98 59.47,10.98 59.47,10.98 65.10,11.07 65.10,11.07 65.10,11.07 65.38,19.70 65.38,19.70 65.38,19.70 77.56,24.43 77.10,36.89 77.10,36.89 47.19,36.98 47.19,36.98 Z M 77.80,39.14 C 77.80,39.14 46.07,39.05 46.07,39.05 46.07,39.05 45.98,46.23 45.98,46.23 45.98,46.23 77.89,46.14 77.89,46.14 77.89,46.14 77.80,39.14 77.80,39.14 Z M 51.57,41.07 C 51.57,41.07 51.58,44.40 51.58,44.40 51.58,44.40 48.18,44.41 48.18,44.41 48.18,44.41 48.20,41.05 48.20,41.05 48.20,41.05 51.57,41.07 51.57,41.07 Z M 57.94,41.09 C 57.94,41.09 57.95,44.42 57.95,44.42 57.95,44.42 54.55,44.43 54.55,44.43 54.55,44.43 54.56,41.08 54.56,41.08 54.56,41.08 57.94,41.09 57.94,41.09 Z M 63.81,41.08 C 63.81,41.08 63.82,44.41 63.82,44.41 63.82,44.41 60.42,44.42 60.42,44.42 60.42,44.42 60.43,41.07 60.43,41.07 60.43,41.07 63.81,41.08 63.81,41.08 Z M 69.73,41.09 C 69.73,41.09 69.73,44.42 69.73,44.42 69.73,44.42 66.34,44.43 66.34,44.43 66.34,44.43 66.35,41.08 66.35,41.08 66.35,41.08 69.73,41.09 69.73,41.09 Z M 75.32,41.20 C 75.32,41.20 75.33,44.53 75.33,44.53 75.33,44.53 71.93,44.54 71.93,44.54 71.93,44.54 71.95,41.19 71.95,41.19 71.95,41.19 75.32,41.20 75.32,41.20 Z M 42.50,64.22 C 42.47,64.22 58.62,64.25 58.62,64.25 58.62,64.25 58.62,66.91 58.62,66.91 53.56,67.03 46.84,70.09 46.75,73.59 46.75,73.59 42.34,73.62 42.34,73.62 42.34,73.62 42.53,64.22 42.50,64.22 Z M 64.09,64.09 C 64.09,64.09 81.56,64.12 81.56,64.12 81.56,64.12 81.62,73.03 81.62,73.03 81.62,73.03 75.09,73.00 75.09,73.00 74.97,69.94 69.28,66.69 64.09,66.69 64.09,66.69 64.09,64.09 64.09,64.09 Z M 79.25,49.31 C 79.25,49.31 44.62,49.44 44.62,49.44 44.62,49.44 44.50,62.25 44.50,62.25 44.50,62.25 79.19,61.94 79.19,61.94 79.19,61.94 79.25,49.31 79.25,49.31 Z M 75.92,51.25 C 75.92,51.25 75.94,60.14 75.94,60.14 75.94,60.14 72.10,60.18 72.10,60.18 72.10,60.18 72.14,51.25 72.14,51.25 72.14,51.25 75.92,51.25 75.92,51.25 Z M 70.05,51.17 C 70.05,51.17 70.07,60.06 70.07,60.06 70.07,60.06 66.23,60.10 66.23,60.10 66.23,60.10 66.27,51.17 66.27,51.17 66.27,51.17 70.05,51.17 70.05,51.17 Z M 63.83,51.07 C 63.83,51.07 63.85,59.96 63.85,59.96 63.85,59.96 60.00,60.00 60.00,60.00 60.00,60.00 60.05,51.07 60.05,51.07 60.05,51.07 63.83,51.07 63.83,51.07 Z M 51.79,51.36 C 51.79,51.36 51.81,60.25 51.81,60.25 51.81,60.25 47.96,60.29 47.96,60.29 47.96,60.29 48.01,51.36 48.01,51.36 48.01,51.36 51.79,51.36 51.79,51.36 Z M 57.91,51.36 C 57.91,51.36 57.93,60.25 57.93,60.25 57.93,60.25 54.09,60.29 54.09,60.29 54.09,60.29 54.13,51.36 54.13,51.36 54.13,51.36 57.91,51.36 57.91,51.36 Z M 8.82,100.73 C 9.00,86.36 20.91,83.55 20.91,83.55 20.91,83.55 21.09,74.73 21.09,74.73 21.09,74.73 26.73,74.82 26.73,74.82 26.73,74.82 27.00,83.45 27.00,83.45 27.00,83.45 39.18,88.18 38.73,100.64 38.73,100.64 8.82,100.73 8.82,100.73 Z M 39.55,103.64 C 39.55,103.64 7.82,103.55 7.82,103.55 7.82,103.55 7.73,110.73 7.73,110.73 7.73,110.73 39.64,110.64 39.64,110.64 39.64,110.64 39.55,103.64 39.55,103.64 Z M 14.20,105.82 C 14.20,105.82 14.20,109.15 14.20,109.15 14.20,109.15 10.80,109.16 10.80,109.16 10.80,109.16 10.82,105.80 10.82,105.80 10.82,105.80 14.20,105.82 14.20,105.82 Z M 20.19,105.84 C 20.19,105.84 20.20,109.17 20.20,109.17 20.20,109.17 16.80,109.18 16.80,109.18 16.80,109.18 16.81,105.83 16.81,105.83 16.81,105.83 20.19,105.84 20.19,105.84 Z M 25.68,105.83 C 25.68,105.83 25.69,109.16 25.69,109.16 25.69,109.16 22.29,109.17 22.29,109.17 22.29,109.17 22.31,105.82 22.31,105.82 22.31,105.82 25.68,105.83 25.68,105.83 Z M 31.23,105.84 C 31.23,105.84 31.23,109.17 31.23,109.17 31.23,109.17 27.84,109.18 27.84,109.18 27.84,109.18 27.85,105.83 27.85,105.83 27.85,105.83 31.23,105.84 31.23,105.84 Z M 36.20,105.83 C 36.20,105.83 36.20,109.16 36.20,109.16 36.20,109.16 32.80,109.16 32.80,109.16 32.80,109.16 32.82,105.81 32.82,105.81 32.82,105.81 36.20,105.83 36.20,105.83 Z M 4.12,128.09 C 4.09,128.09 20.25,128.12 20.25,128.12 20.25,128.12 20.25,130.78 20.25,130.78 15.19,130.91 8.47,133.97 8.38,137.47 8.38,137.47 3.97,137.50 3.97,137.50 3.97,137.50 4.16,128.09 4.12,128.09 Z M 25.84,127.97 C 25.84,127.97 43.31,128.00 43.31,128.00 43.31,128.00 43.38,136.91 43.38,136.91 43.38,136.91 36.84,136.88 36.84,136.88 36.72,133.81 31.03,130.56 25.84,130.56 25.84,130.56 25.84,127.97 25.84,127.97 Z M 41.00,113.31 C 41.00,113.31 6.38,113.44 6.38,113.44 6.38,113.44 6.25,126.25 6.25,126.25 6.25,126.25 40.94,125.94 40.94,125.94 40.94,125.94 41.00,113.31 41.00,113.31 Z M 38.67,115.13 C 38.67,115.13 38.69,124.01 38.69,124.01 38.69,124.01 34.85,124.06 34.85,124.06 34.85,124.06 34.89,115.13 34.89,115.13 34.89,115.13 38.67,115.13 38.67,115.13 Z M 32.17,115.04 C 32.17,115.04 32.20,123.93 32.20,123.93 32.20,123.93 28.35,123.98 28.35,123.98 28.35,123.98 28.40,115.04 28.40,115.04 28.40,115.04 32.17,115.04 32.17,115.04 Z M 25.33,115.07 C 25.33,115.07 25.35,123.96 25.35,123.96 25.35,123.96 21.50,124.00 21.50,124.00 21.50,124.00 21.55,115.07 21.55,115.07 21.55,115.07 25.33,115.07 25.33,115.07 Z M 12.91,115.24 C 12.91,115.24 12.93,124.13 12.93,124.13 12.93,124.13 9.09,124.17 9.09,124.17 9.09,124.17 9.13,115.24 9.13,115.24 9.13,115.24 12.91,115.24 12.91,115.24 Z M 19.04,115.11 C 19.04,115.11 19.06,124.00 19.06,124.00 19.06,124.00 15.21,124.04 15.21,124.04 15.21,124.04 15.26,115.11 15.26,115.11 15.26,115.11 19.04,115.11 19.04,115.11 Z"
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "qr"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      width: "80",
      height: "80",
      viewBox: "0 0 290 290"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("rect", {
      style: {
        fill: "rgb(255, 255, 255)",
        fillOpacity: "1"
      },
      x: "0",
      y: "0",
      width: "290",
      height: "290"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
      id: "elements"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      style: {
        fill: "rgb(0, 0, 0)"
      },
      d: "M 20,20 l 10,0 0,10 -10,0 z M 30,20 l 10,0 0,10 -10,0 z M 40,20 l 10,0 0,10 -10,0 z M 50,20 l 10,0 0,10 -10,0 z M 60,20 l 10,0 0,10 -10,0 z M 70,20 l 10,0 0,10 -10,0 z M 80,20 l 10,0 0,10 -10,0 z M 120,20 l 10,0 0,10 -10,0 z M 140,20 l 10,0 0,10 -10,0 z M 150,20 l 10,0 0,10 -10,0 z M 180,20 l 10,0 0,10 -10,0 z M 200,20 l 10,0 0,10 -10,0 z M 210,20 l 10,0 0,10 -10,0 z M 220,20 l 10,0 0,10 -10,0 z M 230,20 l 10,0 0,10 -10,0 z M 240,20 l 10,0 0,10 -10,0 z M 250,20 l 10,0 0,10 -10,0 z M 260,20 l 10,0 0,10 -10,0 z M 20,30 l 10,0 0,10 -10,0 z M 80,30 l 10,0 0,10 -10,0 z M 100,30 l 10,0 0,10 -10,0 z M 120,30 l 10,0 0,10 -10,0 z M 160,30 l 10,0 0,10 -10,0 z M 170,30 l 10,0 0,10 -10,0 z M 180,30 l 10,0 0,10 -10,0 z M 200,30 l 10,0 0,10 -10,0 z M 260,30 l 10,0 0,10 -10,0 z M 20,40 l 10,0 0,10 -10,0 z M 40,40 l 10,0 0,10 -10,0 z M 50,40 l 10,0 0,10 -10,0 z M 60,40 l 10,0 0,10 -10,0 z M 80,40 l 10,0 0,10 -10,0 z M 140,40 l 10,0 0,10 -10,0 z M 160,40 l 10,0 0,10 -10,0 z M 180,40 l 10,0 0,10 -10,0 z M 200,40 l 10,0 0,10 -10,0 z M 220,40 l 10,0 0,10 -10,0 z M 230,40 l 10,0 0,10 -10,0 z M 240,40 l 10,0 0,10 -10,0 z M 260,40 l 10,0 0,10 -10,0 z M 20,50 l 10,0 0,10 -10,0 z M 40,50 l 10,0 0,10 -10,0 z M 50,50 l 10,0 0,10 -10,0 z M 60,50 l 10,0 0,10 -10,0 z M 80,50 l 10,0 0,10 -10,0 z M 100,50 l 10,0 0,10 -10,0 z M 110,50 l 10,0 0,10 -10,0 z M 120,50 l 10,0 0,10 -10,0 z M 140,50 l 10,0 0,10 -10,0 z M 150,50 l 10,0 0,10 -10,0 z M 200,50 l 10,0 0,10 -10,0 z M 220,50 l 10,0 0,10 -10,0 z M 230,50 l 10,0 0,10 -10,0 z M 240,50 l 10,0 0,10 -10,0 z M 260,50 l 10,0 0,10 -10,0 z M 20,60 l 10,0 0,10 -10,0 z M 40,60 l 10,0 0,10 -10,0 z M 50,60 l 10,0 0,10 -10,0 z M 60,60 l 10,0 0,10 -10,0 z M 80,60 l 10,0 0,10 -10,0 z M 110,60 l 10,0 0,10 -10,0 z M 150,60 l 10,0 0,10 -10,0 z M 180,60 l 10,0 0,10 -10,0 z M 200,60 l 10,0 0,10 -10,0 z M 220,60 l 10,0 0,10 -10,0 z M 230,60 l 10,0 0,10 -10,0 z M 240,60 l 10,0 0,10 -10,0 z M 260,60 l 10,0 0,10 -10,0 z M 20,70 l 10,0 0,10 -10,0 z M 80,70 l 10,0 0,10 -10,0 z M 100,70 l 10,0 0,10 -10,0 z M 110,70 l 10,0 0,10 -10,0 z M 130,70 l 10,0 0,10 -10,0 z M 140,70 l 10,0 0,10 -10,0 z M 150,70 l 10,0 0,10 -10,0 z M 160,70 l 10,0 0,10 -10,0 z M 170,70 l 10,0 0,10 -10,0 z M 180,70 l 10,0 0,10 -10,0 z M 200,70 l 10,0 0,10 -10,0 z M 260,70 l 10,0 0,10 -10,0 z M 20,80 l 10,0 0,10 -10,0 z M 30,80 l 10,0 0,10 -10,0 z M 40,80 l 10,0 0,10 -10,0 z M 50,80 l 10,0 0,10 -10,0 z M 60,80 l 10,0 0,10 -10,0 z M 70,80 l 10,0 0,10 -10,0 z M 80,80 l 10,0 0,10 -10,0 z M 100,80 l 10,0 0,10 -10,0 z M 120,80 l 10,0 0,10 -10,0 z M 140,80 l 10,0 0,10 -10,0 z M 160,80 l 10,0 0,10 -10,0 z M 180,80 l 10,0 0,10 -10,0 z M 200,80 l 10,0 0,10 -10,0 z M 210,80 l 10,0 0,10 -10,0 z M 220,80 l 10,0 0,10 -10,0 z M 230,80 l 10,0 0,10 -10,0 z M 240,80 l 10,0 0,10 -10,0 z M 250,80 l 10,0 0,10 -10,0 z M 260,80 l 10,0 0,10 -10,0 z M 110,90 l 10,0 0,10 -10,0 z M 120,90 l 10,0 0,10 -10,0 z M 130,90 l 10,0 0,10 -10,0 z M 160,90 l 10,0 0,10 -10,0 z M 20,100 l 10,0 0,10 -10,0 z M 30,100 l 10,0 0,10 -10,0 z M 40,100 l 10,0 0,10 -10,0 z M 50,100 l 10,0 0,10 -10,0 z M 60,100 l 10,0 0,10 -10,0 z M 80,100 l 10,0 0,10 -10,0 z M 90,100 l 10,0 0,10 -10,0 z M 100,100 l 10,0 0,10 -10,0 z M 110,100 l 10,0 0,10 -10,0 z M 130,100 l 10,0 0,10 -10,0 z M 140,100 l 10,0 0,10 -10,0 z M 150,100 l 10,0 0,10 -10,0 z M 160,100 l 10,0 0,10 -10,0 z M 170,100 l 10,0 0,10 -10,0 z M 190,100 l 10,0 0,10 -10,0 z M 210,100 l 10,0 0,10 -10,0 z M 230,100 l 10,0 0,10 -10,0 z M 250,100 l 10,0 0,10 -10,0 z M 20,110 l 10,0 0,10 -10,0 z M 60,110 l 10,0 0,10 -10,0 z M 70,110 l 10,0 0,10 -10,0 z M 90,110 l 10,0 0,10 -10,0 z M 100,110 l 10,0 0,10 -10,0 z M 120,110 l 10,0 0,10 -10,0 z M 140,110 l 10,0 0,10 -10,0 z M 180,110 l 10,0 0,10 -10,0 z M 210,110 l 10,0 0,10 -10,0 z M 250,110 l 10,0 0,10 -10,0 z M 20,120 l 10,0 0,10 -10,0 z M 40,120 l 10,0 0,10 -10,0 z M 60,120 l 10,0 0,10 -10,0 z M 70,120 l 10,0 0,10 -10,0 z M 80,120 l 10,0 0,10 -10,0 z M 90,120 l 10,0 0,10 -10,0 z M 120,120 l 10,0 0,10 -10,0 z M 150,120 l 10,0 0,10 -10,0 z M 160,120 l 10,0 0,10 -10,0 z M 170,120 l 10,0 0,10 -10,0 z M 210,120 l 10,0 0,10 -10,0 z M 220,120 l 10,0 0,10 -10,0 z M 230,120 l 10,0 0,10 -10,0 z M 250,120 l 10,0 0,10 -10,0 z M 260,120 l 10,0 0,10 -10,0 z M 40,130 l 10,0 0,10 -10,0 z M 50,130 l 10,0 0,10 -10,0 z M 160,130 l 10,0 0,10 -10,0 z M 180,130 l 10,0 0,10 -10,0 z M 190,130 l 10,0 0,10 -10,0 z M 200,130 l 10,0 0,10 -10,0 z M 210,130 l 10,0 0,10 -10,0 z M 260,130 l 10,0 0,10 -10,0 z M 20,140 l 10,0 0,10 -10,0 z M 30,140 l 10,0 0,10 -10,0 z M 40,140 l 10,0 0,10 -10,0 z M 60,140 l 10,0 0,10 -10,0 z M 80,140 l 10,0 0,10 -10,0 z M 100,140 l 10,0 0,10 -10,0 z M 110,140 l 10,0 0,10 -10,0 z M 120,140 l 10,0 0,10 -10,0 z M 150,140 l 10,0 0,10 -10,0 z M 160,140 l 10,0 0,10 -10,0 z M 190,140 l 10,0 0,10 -10,0 z M 200,140 l 10,0 0,10 -10,0 z M 220,140 l 10,0 0,10 -10,0 z M 240,140 l 10,0 0,10 -10,0 z M 250,140 l 10,0 0,10 -10,0 z M 260,140 l 10,0 0,10 -10,0 z M 20,150 l 10,0 0,10 -10,0 z M 40,150 l 10,0 0,10 -10,0 z M 60,150 l 10,0 0,10 -10,0 z M 70,150 l 10,0 0,10 -10,0 z M 110,150 l 10,0 0,10 -10,0 z M 130,150 l 10,0 0,10 -10,0 z M 190,150 l 10,0 0,10 -10,0 z M 210,150 l 10,0 0,10 -10,0 z M 230,150 l 10,0 0,10 -10,0 z M 250,150 l 10,0 0,10 -10,0 z M 20,160 l 10,0 0,10 -10,0 z M 60,160 l 10,0 0,10 -10,0 z M 70,160 l 10,0 0,10 -10,0 z M 80,160 l 10,0 0,10 -10,0 z M 90,160 l 10,0 0,10 -10,0 z M 120,160 l 10,0 0,10 -10,0 z M 150,160 l 10,0 0,10 -10,0 z M 160,160 l 10,0 0,10 -10,0 z M 170,160 l 10,0 0,10 -10,0 z M 190,160 l 10,0 0,10 -10,0 z M 200,160 l 10,0 0,10 -10,0 z M 210,160 l 10,0 0,10 -10,0 z M 220,160 l 10,0 0,10 -10,0 z M 230,160 l 10,0 0,10 -10,0 z M 250,160 l 10,0 0,10 -10,0 z M 260,160 l 10,0 0,10 -10,0 z M 20,170 l 10,0 0,10 -10,0 z M 40,170 l 10,0 0,10 -10,0 z M 50,170 l 10,0 0,10 -10,0 z M 60,170 l 10,0 0,10 -10,0 z M 90,170 l 10,0 0,10 -10,0 z M 120,170 l 10,0 0,10 -10,0 z M 140,170 l 10,0 0,10 -10,0 z M 160,170 l 10,0 0,10 -10,0 z M 200,170 l 10,0 0,10 -10,0 z M 210,170 l 10,0 0,10 -10,0 z M 220,170 l 10,0 0,10 -10,0 z M 260,170 l 10,0 0,10 -10,0 z M 20,180 l 10,0 0,10 -10,0 z M 60,180 l 10,0 0,10 -10,0 z M 70,180 l 10,0 0,10 -10,0 z M 80,180 l 10,0 0,10 -10,0 z M 90,180 l 10,0 0,10 -10,0 z M 100,180 l 10,0 0,10 -10,0 z M 110,180 l 10,0 0,10 -10,0 z M 120,180 l 10,0 0,10 -10,0 z M 140,180 l 10,0 0,10 -10,0 z M 150,180 l 10,0 0,10 -10,0 z M 160,180 l 10,0 0,10 -10,0 z M 170,180 l 10,0 0,10 -10,0 z M 180,180 l 10,0 0,10 -10,0 z M 190,180 l 10,0 0,10 -10,0 z M 200,180 l 10,0 0,10 -10,0 z M 210,180 l 10,0 0,10 -10,0 z M 220,180 l 10,0 0,10 -10,0 z M 240,180 l 10,0 0,10 -10,0 z M 100,190 l 10,0 0,10 -10,0 z M 130,190 l 10,0 0,10 -10,0 z M 150,190 l 10,0 0,10 -10,0 z M 170,190 l 10,0 0,10 -10,0 z M 180,190 l 10,0 0,10 -10,0 z M 220,190 l 10,0 0,10 -10,0 z M 230,190 l 10,0 0,10 -10,0 z M 20,200 l 10,0 0,10 -10,0 z M 30,200 l 10,0 0,10 -10,0 z M 40,200 l 10,0 0,10 -10,0 z M 50,200 l 10,0 0,10 -10,0 z M 60,200 l 10,0 0,10 -10,0 z M 70,200 l 10,0 0,10 -10,0 z M 80,200 l 10,0 0,10 -10,0 z M 100,200 l 10,0 0,10 -10,0 z M 110,200 l 10,0 0,10 -10,0 z M 150,200 l 10,0 0,10 -10,0 z M 160,200 l 10,0 0,10 -10,0 z M 180,200 l 10,0 0,10 -10,0 z M 200,200 l 10,0 0,10 -10,0 z M 220,200 l 10,0 0,10 -10,0 z M 240,200 l 10,0 0,10 -10,0 z M 250,200 l 10,0 0,10 -10,0 z M 260,200 l 10,0 0,10 -10,0 z M 20,210 l 10,0 0,10 -10,0 z M 80,210 l 10,0 0,10 -10,0 z M 120,210 l 10,0 0,10 -10,0 z M 160,210 l 10,0 0,10 -10,0 z M 180,210 l 10,0 0,10 -10,0 z M 220,210 l 10,0 0,10 -10,0 z M 230,210 l 10,0 0,10 -10,0 z M 250,210 l 10,0 0,10 -10,0 z M 20,220 l 10,0 0,10 -10,0 z M 40,220 l 10,0 0,10 -10,0 z M 50,220 l 10,0 0,10 -10,0 z M 60,220 l 10,0 0,10 -10,0 z M 80,220 l 10,0 0,10 -10,0 z M 100,220 l 10,0 0,10 -10,0 z M 110,220 l 10,0 0,10 -10,0 z M 140,220 l 10,0 0,10 -10,0 z M 150,220 l 10,0 0,10 -10,0 z M 160,220 l 10,0 0,10 -10,0 z M 170,220 l 10,0 0,10 -10,0 z M 180,220 l 10,0 0,10 -10,0 z M 190,220 l 10,0 0,10 -10,0 z M 200,220 l 10,0 0,10 -10,0 z M 210,220 l 10,0 0,10 -10,0 z M 220,220 l 10,0 0,10 -10,0 z M 240,220 l 10,0 0,10 -10,0 z M 20,230 l 10,0 0,10 -10,0 z M 40,230 l 10,0 0,10 -10,0 z M 50,230 l 10,0 0,10 -10,0 z M 60,230 l 10,0 0,10 -10,0 z M 80,230 l 10,0 0,10 -10,0 z M 100,230 l 10,0 0,10 -10,0 z M 110,230 l 10,0 0,10 -10,0 z M 130,230 l 10,0 0,10 -10,0 z M 190,230 l 10,0 0,10 -10,0 z M 200,230 l 10,0 0,10 -10,0 z M 220,230 l 10,0 0,10 -10,0 z M 230,230 l 10,0 0,10 -10,0 z M 240,230 l 10,0 0,10 -10,0 z M 250,230 l 10,0 0,10 -10,0 z M 260,230 l 10,0 0,10 -10,0 z M 20,240 l 10,0 0,10 -10,0 z M 40,240 l 10,0 0,10 -10,0 z M 50,240 l 10,0 0,10 -10,0 z M 60,240 l 10,0 0,10 -10,0 z M 80,240 l 10,0 0,10 -10,0 z M 100,240 l 10,0 0,10 -10,0 z M 110,240 l 10,0 0,10 -10,0 z M 140,240 l 10,0 0,10 -10,0 z M 160,240 l 10,0 0,10 -10,0 z M 230,240 l 10,0 0,10 -10,0 z M 240,240 l 10,0 0,10 -10,0 z M 260,240 l 10,0 0,10 -10,0 z M 20,250 l 10,0 0,10 -10,0 z M 80,250 l 10,0 0,10 -10,0 z M 100,250 l 10,0 0,10 -10,0 z M 110,250 l 10,0 0,10 -10,0 z M 120,250 l 10,0 0,10 -10,0 z M 130,250 l 10,0 0,10 -10,0 z M 140,250 l 10,0 0,10 -10,0 z M 180,250 l 10,0 0,10 -10,0 z M 210,250 l 10,0 0,10 -10,0 z M 220,250 l 10,0 0,10 -10,0 z M 230,250 l 10,0 0,10 -10,0 z M 260,250 l 10,0 0,10 -10,0 z M 20,260 l 10,0 0,10 -10,0 z M 30,260 l 10,0 0,10 -10,0 z M 40,260 l 10,0 0,10 -10,0 z M 50,260 l 10,0 0,10 -10,0 z M 60,260 l 10,0 0,10 -10,0 z M 70,260 l 10,0 0,10 -10,0 z M 80,260 l 10,0 0,10 -10,0 z M 100,260 l 10,0 0,10 -10,0 z M 120,260 l 10,0 0,10 -10,0 z M 150,260 l 10,0 0,10 -10,0 z M 160,260 l 10,0 0,10 -10,0 z M 200,260 l 10,0 0,10 -10,0 z M 210,260 l 10,0 0,10 -10,0 z M 220,260 l 10,0 0,10 -10,0 z M 230,260 l 10,0 0,10 -10,0 z M 240,260 l 10,0 0,10 -10,0 z M 250,260 l 10,0 0,10 -10,0 z M 260,260 l 10,0 0,10 -10,0 z "
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "show-code"
    }, "SHOW CODE"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        background: this.state.bstripeBot
      },
      className: "bstripe-bot"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "mid-text"
    }, "1 LOCAL"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "touch-mid",
      onClick: function onClick(e) {
        if (_this2.state.midIsActive) {
          _this2.setState({
            bstripeTop: '#3f77b0',
            bstripeBot: '#014b96',
            midIsActive: false
          });
        } else {
          _this2.setState({
            bstripeTop: '#e95a52',
            bstripeBot: '#e22319',
            midIsActive: true
          });
        }
      }
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "break"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "bottom"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "fstripe-top",
      style: {
        background: this.state.fstripeTop
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "fstripe-bot",
      style: {
        background: this.state.fstripeBot
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "bot-text shim1"
    }, this.state.fdate.toLocaleDateString(), " at", ' ', this.state.fdate.toLocaleTimeString().split('').reverse().splice(6).reverse().join(''), ' ', this.state.fdate.toLocaleTimeString().split('').reverse().splice(0, 2).reverse().join('')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "bot-text shim2"
    }, "Ticket Expiration Date"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "touch-bot",
      onClick: function onClick(e) {
        if (_this2.state.fIsActive) {
          _this2.setState({
            fstripeTop: '#b2b2b2',
            fstripeBot: '#979797',
            fIsActive: false
          });
        } else {
          _this2.setState({
            fstripeTop: '#feca52',
            fstripeBot: '#feb81a',
            fIsActive: true
          });
        }
      }
    })));
  };

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["a"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
var _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(148, 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(149);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);






function SEO(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta,
      keywords = _ref.keywords,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["StaticQuery"], {
    query: detailsQuery,
    render: function render(data) {
      var metaDescription = description || data.site.siteMetadata.description;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
        htmlAttributes: {
          lang: lang
        },
        title: title,
        titleTemplate: "%s | " + data.site.siteMetadata.title,
        meta: [{
          name: "description",
          content: metaDescription
        }, {
          property: "og:title",
          content: title
        }, {
          property: "og:description",
          content: metaDescription
        }, {
          property: "og:type",
          content: "website"
        }, {
          name: "twitter:card",
          content: "summary"
        }, {
          name: "twitter:creator",
          content: data.site.siteMetadata.author
        }, {
          name: "twitter:title",
          content: title
        }, {
          name: "twitter:description",
          content: metaDescription
        }].concat(keywords.length > 0 ? {
          name: "keywords",
          content: keywords.join(", ")
        } : []).concat(meta)
      });
    },
    data: _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0__
  });
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};
SEO.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (SEO);
var detailsQuery = "1025518380";

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(159));
} else {}

/***/ }),

/***/ 148:
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"foo header","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}};

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);






var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object.assign({
    location: location,
    pageResources: pageResources
  }, pageResources.json));
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ })

}]);
//# sourceMappingURL=1-08ee8a10e6115fc8fa54.js.map