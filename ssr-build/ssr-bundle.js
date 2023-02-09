module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+3YS":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+IV6":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+LEj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gdic");


var Report = function Report() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].report
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reportGrid
  }, h("p", null, "ELIGIBLE IMMIGRATION PROGRAMS"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reportBox
  }, h(ReportCard, null), h(ReportCard, null), h(ReportCard, null), h(ReportCard, null))));
};
/* harmony default export */ __webpack_exports__["a"] = (Report);
var ReportCard = function ReportCard() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reportCard
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reportCardTitle
  }, h("h4", null, "Express Entry"), h("span", null, "Excellent chances of being accepted!"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reportLoader
  }), h("p", null, "PNP programs offer a pathway to permanent residence for skilled workers who are interested in immigrating to one of 13 Canadian provinces or territories.")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reportCardFooter
  }, h("p", null, "A deeper profile research is required. Please contact an immigration professional fom more information."), h(preact_router_match__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/"
  }, "Learn More")));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "+Sw5":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+bRE":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "/ETS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"results":"results__pJXMl","container":"container__7gxER","resultGrid":"resultGrid__hDGn4","callToForm":"callToForm__dQ4t4","pageTitle":"pageTitle__p5w1h"});

/***/ }),

/***/ "0qAl":
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "3br2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _components_home_callToAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qTIA");
/* harmony import */ var _components_home_howItWork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6off");
/* harmony import */ var _components_home_testimonial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TP/7");
/* harmony import */ var _components_home_topBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fEz+");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("okHz");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FA6U");






var Home = function Home() {
  return h(_components_layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].home
  }, h(_components_home_topBanner__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), h(_components_home_howItWork__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), h(_components_home_testimonial__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), h(_components_home_callToAction__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null)));
};
/* harmony default export */ __webpack_exports__["a"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "4cRK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "07d3ea3e7a28ea216ff3e7220b24dab4.webp");

/***/ }),

/***/ "5WRv":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("iNmH");
var iterableToArray = __webpack_require__("Qatm");
var unsupportedIterableToArray = __webpack_require__("Zhxd");
var nonIterableSpread = __webpack_require__("kluZ");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "5hT1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4cRK");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gdic");



var Sidebar = function Sidebar(_ref) {
  var result = _ref.result;
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].sidebar
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].sidebarGrid
  }, h("p", null, "Profile Summary"), h("ul", null, h("li", null, h("span", null, "Age ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, (result === null || result === void 0 ? void 0 : result.age) || 18, " ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Education ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, (result === null || result === void 0 ? void 0 : result.education) || 'High school diploma', " ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Work experience (Canada) ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, (result === null || result === void 0 ? void 0 : result.workExperience) || '2 years', " ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Work experience (World) ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, "I have relatives in Canada with Canadian citizenship or permanent residency ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Job offer ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, "I have a valid job offer from a registered Canadian employer ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "English language skills ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, "CLB 6 - 7 (High) ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "French language skills ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, "NCLC 0 - 3 (Low) ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  }))), h("li", null, h("span", null, "Canadian relatives ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })), h("b", null, "I have relatives in Canada with Canadian citizenship or permanent residency ", h("img", {
    src: _assets_results_check_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "check"
  })))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].resubmit
  }, h(preact_router_match__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/"
  }, "Resubmit"))));
};
/* harmony default export */ __webpack_exports__["a"] = (Sidebar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "6OLs":
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
module.exports = function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
  }
  return r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
      return e[t];
    }.bind(null, a));
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 9);
}([function (e, t) {
  e.exports = __webpack_require__("l8WD");
}, function (e, t, r) {
  var n;
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  !function () {
    "use strict";

    var r = {}.hasOwnProperty;
    function a() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        if (n) {
          var o = _typeof(n);
          if ("string" === o || "number" === o) e.push(n);else if (Array.isArray(n) && n.length) {
            var i = a.apply(null, n);
            i && e.push(i);
          } else if ("object" === o) for (var u in n) r.call(n, u) && n[u] && e.push(u);
        }
      }
      return e.join(" ");
    }
    e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function () {
      return a;
    }.apply(t, [])) || (e.exports = n);
  }();
}, function (e, t, r) {
  (function (t) {
    var r = /^\s+|\s+$/g,
      n = /^[-+]0x[0-9a-f]+$/i,
      a = /^0b[01]+$/i,
      o = /^0o[0-7]+$/i,
      i = parseInt,
      u = "object" == _typeof(t) && t && t.Object === Object && t,
      c = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      s = u || c || Function("return this")(),
      l = Object.prototype.toString,
      f = s.Symbol,
      d = f ? f.prototype : void 0,
      p = d ? d.toString : void 0;
    function h(e) {
      if ("string" == typeof e) return e;
      if (y(e)) return p ? p.call(e) : "";
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    function m(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    function y(e) {
      return "symbol" == _typeof(e) || function (e) {
        return !!e && "object" == _typeof(e);
      }(e) && "[object Symbol]" == l.call(e);
    }
    function b(e) {
      return e ? (e = function (e) {
        if ("number" == typeof e) return e;
        if (y(e)) return NaN;
        if (m(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = m(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(r, "");
        var u = a.test(e);
        return u || o.test(e) ? i(e.slice(2), u ? 2 : 8) : n.test(e) ? NaN : +e;
      }(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0;
    }
    e.exports = function (e, t, r) {
      var n, a, o, i;
      return e = null == (n = e) ? "" : h(n), a = function (e) {
        var t = b(e),
          r = t % 1;
        return t == t ? r ? t - r : t : 0;
      }(r), o = 0, i = e.length, a == a && (void 0 !== i && (a = a <= i ? a : i), void 0 !== o && (a = a >= o ? a : o)), r = a, t = h(t), e.slice(r, r + t.length) == t;
    };
  }).call(this, r(3));
}, function (e, t) {
  var r;
  r = function () {
    return this;
  }();
  try {
    r = r || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
  }
  e.exports = r;
}, function (e, t, r) {
  (function (t) {
    var r = /^\[object .+?Constructor\]$/,
      n = "object" == _typeof(t) && t && t.Object === Object && t,
      a = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      o = n || a || Function("return this")();
    var i,
      u = Array.prototype,
      c = Function.prototype,
      s = Object.prototype,
      l = o["__core-js_shared__"],
      f = (i = /[^.]+$/.exec(l && l.keys && l.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
      d = c.toString,
      p = s.hasOwnProperty,
      h = s.toString,
      m = RegExp("^" + d.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      y = u.splice,
      b = x(o, "Map"),
      g = x(Object, "create");
    function v(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function C(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function _(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function w(e, t) {
      for (var r, n, a = e.length; a--;) if ((r = e[a][0]) === (n = t) || r != r && n != n) return a;
      return -1;
    }
    function S(e) {
      return !(!O(e) || (t = e, f && f in t)) && (function (e) {
        var t = O(e) ? h.call(e) : "";
        return "[object Function]" == t || "[object GeneratorFunction]" == t;
      }(e) || function (e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try {
          t = !!(e + "");
        } catch (e) {}
        return t;
      }(e) ? m : r).test(function (e) {
        if (null != e) {
          try {
            return d.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }(e));
      var t;
    }
    function j(e, t) {
      var r,
        n,
        a = e.__data__;
      return ("string" == (n = _typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? a["string" == typeof t ? "string" : "hash"] : a.map;
    }
    function x(e, t) {
      var r = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return S(r) ? r : void 0;
    }
    function N(e, t) {
      if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
      var r = function r() {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return r.cache = o.set(a, i), i;
      };
      return r.cache = new (N.Cache || _)(), r;
    }
    function O(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    v.prototype.clear = function () {
      this.__data__ = g ? g(null) : {};
    }, v.prototype.delete = function (e) {
      return this.has(e) && delete this.__data__[e];
    }, v.prototype.get = function (e) {
      var t = this.__data__;
      if (g) {
        var r = t[e];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return p.call(t, e) ? t[e] : void 0;
    }, v.prototype.has = function (e) {
      var t = this.__data__;
      return g ? void 0 !== t[e] : p.call(t, e);
    }, v.prototype.set = function (e, t) {
      return this.__data__[e] = g && void 0 === t ? "__lodash_hash_undefined__" : t, this;
    }, C.prototype.clear = function () {
      this.__data__ = [];
    }, C.prototype.delete = function (e) {
      var t = this.__data__,
        r = w(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : y.call(t, r, 1), !0);
    }, C.prototype.get = function (e) {
      var t = this.__data__,
        r = w(t, e);
      return r < 0 ? void 0 : t[r][1];
    }, C.prototype.has = function (e) {
      return w(this.__data__, e) > -1;
    }, C.prototype.set = function (e, t) {
      var r = this.__data__,
        n = w(r, e);
      return n < 0 ? r.push([e, t]) : r[n][1] = t, this;
    }, _.prototype.clear = function () {
      this.__data__ = {
        hash: new v(),
        map: new (b || C)(),
        string: new v()
      };
    }, _.prototype.delete = function (e) {
      return j(this, e).delete(e);
    }, _.prototype.get = function (e) {
      return j(this, e).get(e);
    }, _.prototype.has = function (e) {
      return j(this, e).has(e);
    }, _.prototype.set = function (e, t) {
      return j(this, e).set(e, t), this;
    }, N.Cache = _, e.exports = N;
  }).call(this, r(3));
}, function (e, t, r) {
  (function (t) {
    var r = /^\s+|\s+$/g,
      n = /^[-+]0x[0-9a-f]+$/i,
      a = /^0b[01]+$/i,
      o = /^0o[0-7]+$/i,
      i = parseInt,
      u = "object" == _typeof(t) && t && t.Object === Object && t,
      c = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      s = u || c || Function("return this")(),
      l = Object.prototype.toString,
      f = Math.max,
      d = Math.min,
      p = function p() {
        return s.Date.now();
      };
    function h(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    function m(e) {
      if ("number" == typeof e) return e;
      if (function (e) {
        return "symbol" == _typeof(e) || function (e) {
          return !!e && "object" == _typeof(e);
        }(e) && "[object Symbol]" == l.call(e);
      }(e)) return NaN;
      if (h(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = h(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(r, "");
      var u = a.test(e);
      return u || o.test(e) ? i(e.slice(2), u ? 2 : 8) : n.test(e) ? NaN : +e;
    }
    e.exports = function (e, t, r) {
      var n,
        a,
        o,
        i,
        u,
        c,
        s = 0,
        l = !1,
        y = !1,
        b = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function g(t) {
        var r = n,
          o = a;
        return n = a = void 0, s = t, i = e.apply(o, r);
      }
      function v(e) {
        return s = e, u = setTimeout(_, t), l ? g(e) : i;
      }
      function C(e) {
        var r = e - c;
        return void 0 === c || r >= t || r < 0 || y && e - s >= o;
      }
      function _() {
        var e = p();
        if (C(e)) return w(e);
        u = setTimeout(_, function (e) {
          var r = t - (e - c);
          return y ? d(r, o - (e - s)) : r;
        }(e));
      }
      function w(e) {
        return u = void 0, b && n ? g(e) : (n = a = void 0, i);
      }
      function S() {
        var e = p(),
          r = C(e);
        if (n = arguments, a = this, c = e, r) {
          if (void 0 === u) return v(c);
          if (y) return u = setTimeout(_, t), g(c);
        }
        return void 0 === u && (u = setTimeout(_, t)), i;
      }
      return t = m(t) || 0, h(r) && (l = !!r.leading, o = (y = "maxWait" in r) ? f(m(r.maxWait) || 0, t) : o, b = "trailing" in r ? !!r.trailing : b), S.cancel = function () {
        void 0 !== u && clearTimeout(u), s = 0, n = c = a = u = void 0;
      }, S.flush = function () {
        return void 0 === u ? i : w(p());
      }, S;
    };
  }).call(this, r(3));
}, function (e, t, r) {
  (function (e, r) {
    var n = "[object Arguments]",
      a = "[object Map]",
      o = "[object Object]",
      i = "[object Set]",
      u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      c = /^\w*$/,
      s = /^\./,
      l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      f = /\\(\\)?/g,
      d = /^\[object .+?Constructor\]$/,
      p = /^(?:0|[1-9]\d*)$/,
      h = {};
    h["[object Float32Array]"] = h["[object Float64Array]"] = h["[object Int8Array]"] = h["[object Int16Array]"] = h["[object Int32Array]"] = h["[object Uint8Array]"] = h["[object Uint8ClampedArray]"] = h["[object Uint16Array]"] = h["[object Uint32Array]"] = !0, h[n] = h["[object Array]"] = h["[object ArrayBuffer]"] = h["[object Boolean]"] = h["[object DataView]"] = h["[object Date]"] = h["[object Error]"] = h["[object Function]"] = h[a] = h["[object Number]"] = h[o] = h["[object RegExp]"] = h[i] = h["[object String]"] = h["[object WeakMap]"] = !1;
    var m = "object" == _typeof(e) && e && e.Object === Object && e,
      y = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      b = m || y || Function("return this")(),
      g = t && !t.nodeType && t,
      v = g && "object" == _typeof(r) && r && !r.nodeType && r,
      C = v && v.exports === g && m.process,
      _ = function () {
        try {
          return C && C.binding("util");
        } catch (e) {}
      }(),
      w = _ && _.isTypedArray;
    function S(e, t, r, n) {
      var a = -1,
        o = e ? e.length : 0;
      for (n && o && (r = e[++a]); ++a < o;) r = t(r, e[a], a, e);
      return r;
    }
    function j(e, t) {
      for (var r = -1, n = e ? e.length : 0; ++r < n;) if (t(e[r], r, e)) return !0;
      return !1;
    }
    function x(e, t, r, n, a) {
      return a(e, function (e, a, o) {
        r = n ? (n = !1, e) : t(r, e, a, o);
      }), r;
    }
    function N(e) {
      var t = !1;
      if (null != e && "function" != typeof e.toString) try {
        t = !!(e + "");
      } catch (e) {}
      return t;
    }
    function O(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (e, n) {
        r[++t] = [n, e];
      }), r;
    }
    function k(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (e) {
        r[++t] = e;
      }), r;
    }
    var E,
      T,
      I,
      A = Array.prototype,
      D = Function.prototype,
      P = Object.prototype,
      F = b["__core-js_shared__"],
      M = (E = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + E : "",
      R = D.toString,
      L = P.hasOwnProperty,
      z = P.toString,
      B = RegExp("^" + R.call(L).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      G = b.Symbol,
      $ = b.Uint8Array,
      V = P.propertyIsEnumerable,
      K = A.splice,
      U = (T = Object.keys, I = Object, function (e) {
        return T(I(e));
      }),
      q = Ne(b, "DataView"),
      H = Ne(b, "Map"),
      W = Ne(b, "Promise"),
      J = Ne(b, "Set"),
      Z = Ne(b, "WeakMap"),
      Q = Ne(Object, "create"),
      Y = Pe(q),
      X = Pe(H),
      ee = Pe(W),
      te = Pe(J),
      re = Pe(Z),
      ne = G ? G.prototype : void 0,
      ae = ne ? ne.valueOf : void 0,
      oe = ne ? ne.toString : void 0;
    function ie(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function ue(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function ce(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function se(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.__data__ = new ce(); ++t < r;) this.add(e[t]);
    }
    function le(e) {
      this.__data__ = new ue(e);
    }
    function fe(e, t) {
      var r = Le(e) || Re(e) ? function (e, t) {
          for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
          return n;
        }(e.length, String) : [],
        n = r.length,
        a = !!n;
      for (var o in e) !t && !L.call(e, o) || a && ("length" == o || ke(o, n)) || r.push(o);
      return r;
    }
    function de(e, t) {
      for (var r = e.length; r--;) if (Me(e[r][0], t)) return r;
      return -1;
    }
    ie.prototype.clear = function () {
      this.__data__ = Q ? Q(null) : {};
    }, ie.prototype.delete = function (e) {
      return this.has(e) && delete this.__data__[e];
    }, ie.prototype.get = function (e) {
      var t = this.__data__;
      if (Q) {
        var r = t[e];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return L.call(t, e) ? t[e] : void 0;
    }, ie.prototype.has = function (e) {
      var t = this.__data__;
      return Q ? void 0 !== t[e] : L.call(t, e);
    }, ie.prototype.set = function (e, t) {
      return this.__data__[e] = Q && void 0 === t ? "__lodash_hash_undefined__" : t, this;
    }, ue.prototype.clear = function () {
      this.__data__ = [];
    }, ue.prototype.delete = function (e) {
      var t = this.__data__,
        r = de(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : K.call(t, r, 1), !0);
    }, ue.prototype.get = function (e) {
      var t = this.__data__,
        r = de(t, e);
      return r < 0 ? void 0 : t[r][1];
    }, ue.prototype.has = function (e) {
      return de(this.__data__, e) > -1;
    }, ue.prototype.set = function (e, t) {
      var r = this.__data__,
        n = de(r, e);
      return n < 0 ? r.push([e, t]) : r[n][1] = t, this;
    }, ce.prototype.clear = function () {
      this.__data__ = {
        hash: new ie(),
        map: new (H || ue)(),
        string: new ie()
      };
    }, ce.prototype.delete = function (e) {
      return xe(this, e).delete(e);
    }, ce.prototype.get = function (e) {
      return xe(this, e).get(e);
    }, ce.prototype.has = function (e) {
      return xe(this, e).has(e);
    }, ce.prototype.set = function (e, t) {
      return xe(this, e).set(e, t), this;
    }, se.prototype.add = se.prototype.push = function (e) {
      return this.__data__.set(e, "__lodash_hash_undefined__"), this;
    }, se.prototype.has = function (e) {
      return this.__data__.has(e);
    }, le.prototype.clear = function () {
      this.__data__ = new ue();
    }, le.prototype.delete = function (e) {
      return this.__data__.delete(e);
    }, le.prototype.get = function (e) {
      return this.__data__.get(e);
    }, le.prototype.has = function (e) {
      return this.__data__.has(e);
    }, le.prototype.set = function (e, t) {
      var r = this.__data__;
      if (r instanceof ue) {
        var n = r.__data__;
        if (!H || n.length < 199) return n.push([e, t]), this;
        r = this.__data__ = new ce(n);
      }
      return r.set(e, t), this;
    };
    var pe,
      he,
      me = (pe = function pe(e, t) {
        return e && ye(e, t, qe);
      }, function (e, t) {
        if (null == e) return e;
        if (!ze(e)) return pe(e, t);
        for (var r = e.length, n = he ? r : -1, a = Object(e); (he ? n-- : ++n < r) && !1 !== t(a[n], n, a););
        return e;
      }),
      ye = function (e) {
        return function (t, r, n) {
          for (var a = -1, o = Object(t), i = n(t), u = i.length; u--;) {
            var c = i[e ? u : ++a];
            if (!1 === r(o[c], c, o)) break;
          }
          return t;
        };
      }();
    function be(e, t) {
      for (var r = 0, n = (t = Ee(t, e) ? [t] : Se(t)).length; null != e && r < n;) e = e[De(t[r++])];
      return r && r == n ? e : void 0;
    }
    function ge(e, t) {
      return null != e && t in Object(e);
    }
    function ve(e, t, r, u, c) {
      return e === t || (null == e || null == t || !$e(e) && !Ve(t) ? e != e && t != t : function (e, t, r, u, c, s) {
        var l = Le(e),
          f = Le(t),
          d = "[object Array]",
          p = "[object Array]";
        l || (d = (d = Oe(e)) == n ? o : d);
        f || (p = (p = Oe(t)) == n ? o : p);
        var h = d == o && !N(e),
          m = p == o && !N(t),
          y = d == p;
        if (y && !h) return s || (s = new le()), l || Ue(e) ? je(e, t, r, u, c, s) : function (e, t, r, n, o, u, c) {
          switch (r) {
            case "[object DataView]":
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              e = e.buffer, t = t.buffer;
            case "[object ArrayBuffer]":
              return !(e.byteLength != t.byteLength || !n(new $(e), new $(t)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return Me(+e, +t);
            case "[object Error]":
              return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
              return e == t + "";
            case a:
              var s = O;
            case i:
              var l = 2 & u;
              if (s || (s = k), e.size != t.size && !l) return !1;
              var f = c.get(e);
              if (f) return f == t;
              u |= 1, c.set(e, t);
              var d = je(s(e), s(t), n, o, u, c);
              return c.delete(e), d;
            case "[object Symbol]":
              if (ae) return ae.call(e) == ae.call(t);
          }
          return !1;
        }(e, t, d, r, u, c, s);
        if (!(2 & c)) {
          var b = h && L.call(e, "__wrapped__"),
            g = m && L.call(t, "__wrapped__");
          if (b || g) {
            var v = b ? e.value() : e,
              C = g ? t.value() : t;
            return s || (s = new le()), r(v, C, u, c, s);
          }
        }
        if (!y) return !1;
        return s || (s = new le()), function (e, t, r, n, a, o) {
          var i = 2 & a,
            u = qe(e),
            c = u.length,
            s = qe(t).length;
          if (c != s && !i) return !1;
          var l = c;
          for (; l--;) {
            var f = u[l];
            if (!(i ? f in t : L.call(t, f))) return !1;
          }
          var d = o.get(e);
          if (d && o.get(t)) return d == t;
          var p = !0;
          o.set(e, t), o.set(t, e);
          var h = i;
          for (; ++l < c;) {
            f = u[l];
            var m = e[f],
              y = t[f];
            if (n) var b = i ? n(y, m, f, t, e, o) : n(m, y, f, e, t, o);
            if (!(void 0 === b ? m === y || r(m, y, n, a, o) : b)) {
              p = !1;
              break;
            }
            h || (h = "constructor" == f);
          }
          if (p && !h) {
            var g = e.constructor,
              v = t.constructor;
            g == v || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof v && v instanceof v || (p = !1);
          }
          return o.delete(e), o.delete(t), p;
        }(e, t, r, u, c, s);
      }(e, t, ve, r, u, c));
    }
    function Ce(e) {
      return !(!$e(e) || function (e) {
        return !!M && M in e;
      }(e)) && (Be(e) || N(e) ? B : d).test(Pe(e));
    }
    function _e(e) {
      return "function" == typeof e ? e : null == e ? He : "object" == _typeof(e) ? Le(e) ? function (e, t) {
        if (Ee(e) && Te(t)) return Ie(De(e), t);
        return function (r) {
          var n = function (e, t, r) {
            var n = null == e ? void 0 : be(e, t);
            return void 0 === n ? r : n;
          }(r, e);
          return void 0 === n && n === t ? function (e, t) {
            return null != e && function (e, t, r) {
              t = Ee(t, e) ? [t] : Se(t);
              var n,
                a = -1,
                o = t.length;
              for (; ++a < o;) {
                var i = De(t[a]);
                if (!(n = null != e && r(e, i))) break;
                e = e[i];
              }
              if (n) return n;
              return !!(o = e ? e.length : 0) && Ge(o) && ke(i, o) && (Le(e) || Re(e));
            }(e, t, ge);
          }(r, e) : ve(t, n, void 0, 3);
        };
      }(e[0], e[1]) : function (e) {
        var t = function (e) {
          var t = qe(e),
            r = t.length;
          for (; r--;) {
            var n = t[r],
              a = e[n];
            t[r] = [n, a, Te(a)];
          }
          return t;
        }(e);
        if (1 == t.length && t[0][2]) return Ie(t[0][0], t[0][1]);
        return function (r) {
          return r === e || function (e, t, r, n) {
            var a = r.length,
              o = a,
              i = !n;
            if (null == e) return !o;
            for (e = Object(e); a--;) {
              var u = r[a];
              if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
            }
            for (; ++a < o;) {
              var c = (u = r[a])[0],
                s = e[c],
                l = u[1];
              if (i && u[2]) {
                if (void 0 === s && !(c in e)) return !1;
              } else {
                var f = new le();
                if (n) var d = n(s, l, c, e, t, f);
                if (!(void 0 === d ? ve(l, s, n, 3, f) : d)) return !1;
              }
            }
            return !0;
          }(r, e, t);
        };
      }(e) : Ee(t = e) ? (r = De(t), function (e) {
        return null == e ? void 0 : e[r];
      }) : function (e) {
        return function (t) {
          return be(t, e);
        };
      }(t);
      var t, r;
    }
    function we(e) {
      if (r = (t = e) && t.constructor, n = "function" == typeof r && r.prototype || P, t !== n) return U(e);
      var t,
        r,
        n,
        a = [];
      for (var o in Object(e)) L.call(e, o) && "constructor" != o && a.push(o);
      return a;
    }
    function Se(e) {
      return Le(e) ? e : Ae(e);
    }
    function je(e, t, r, n, a, o) {
      var i = 2 & a,
        u = e.length,
        c = t.length;
      if (u != c && !(i && c > u)) return !1;
      var s = o.get(e);
      if (s && o.get(t)) return s == t;
      var l = -1,
        f = !0,
        d = 1 & a ? new se() : void 0;
      for (o.set(e, t), o.set(t, e); ++l < u;) {
        var p = e[l],
          h = t[l];
        if (n) var m = i ? n(h, p, l, t, e, o) : n(p, h, l, e, t, o);
        if (void 0 !== m) {
          if (m) continue;
          f = !1;
          break;
        }
        if (d) {
          if (!j(t, function (e, t) {
            if (!d.has(t) && (p === e || r(p, e, n, a, o))) return d.add(t);
          })) {
            f = !1;
            break;
          }
        } else if (p !== h && !r(p, h, n, a, o)) {
          f = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), f;
    }
    function xe(e, t) {
      var r,
        n,
        a = e.__data__;
      return ("string" == (n = _typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? a["string" == typeof t ? "string" : "hash"] : a.map;
    }
    function Ne(e, t) {
      var r = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return Ce(r) ? r : void 0;
    }
    var Oe = function Oe(e) {
      return z.call(e);
    };
    function ke(e, t) {
      return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || p.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function Ee(e, t) {
      if (Le(e)) return !1;
      var r = _typeof(e);
      return !("number" != r && "symbol" != r && "boolean" != r && null != e && !Ke(e)) || c.test(e) || !u.test(e) || null != t && e in Object(t);
    }
    function Te(e) {
      return e == e && !$e(e);
    }
    function Ie(e, t) {
      return function (r) {
        return null != r && r[e] === t && (void 0 !== t || e in Object(r));
      };
    }
    (q && "[object DataView]" != Oe(new q(new ArrayBuffer(1))) || H && Oe(new H()) != a || W && "[object Promise]" != Oe(W.resolve()) || J && Oe(new J()) != i || Z && "[object WeakMap]" != Oe(new Z())) && (Oe = function Oe(e) {
      var t = z.call(e),
        r = t == o ? e.constructor : void 0,
        n = r ? Pe(r) : void 0;
      if (n) switch (n) {
        case Y:
          return "[object DataView]";
        case X:
          return a;
        case ee:
          return "[object Promise]";
        case te:
          return i;
        case re:
          return "[object WeakMap]";
      }
      return t;
    });
    var Ae = Fe(function (e) {
      var t;
      e = null == (t = e) ? "" : function (e) {
        if ("string" == typeof e) return e;
        if (Ke(e)) return oe ? oe.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }(t);
      var r = [];
      return s.test(e) && r.push(""), e.replace(l, function (e, t, n, a) {
        r.push(n ? a.replace(f, "$1") : t || e);
      }), r;
    });
    function De(e) {
      if ("string" == typeof e || Ke(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    function Pe(e) {
      if (null != e) {
        try {
          return R.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }
    function Fe(e, t) {
      if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
      var r = function r() {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return r.cache = o.set(a, i), i;
      };
      return r.cache = new (Fe.Cache || ce)(), r;
    }
    function Me(e, t) {
      return e === t || e != e && t != t;
    }
    function Re(e) {
      return function (e) {
        return Ve(e) && ze(e);
      }(e) && L.call(e, "callee") && (!V.call(e, "callee") || z.call(e) == n);
    }
    Fe.Cache = ce;
    var Le = Array.isArray;
    function ze(e) {
      return null != e && Ge(e.length) && !Be(e);
    }
    function Be(e) {
      var t = $e(e) ? z.call(e) : "";
      return "[object Function]" == t || "[object GeneratorFunction]" == t;
    }
    function Ge(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    }
    function $e(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    function Ve(e) {
      return !!e && "object" == _typeof(e);
    }
    function Ke(e) {
      return "symbol" == _typeof(e) || Ve(e) && "[object Symbol]" == z.call(e);
    }
    var Ue = w ? function (e) {
      return function (t) {
        return e(t);
      };
    }(w) : function (e) {
      return Ve(e) && Ge(e.length) && !!h[z.call(e)];
    };
    function qe(e) {
      return ze(e) ? fe(e) : we(e);
    }
    function He(e) {
      return e;
    }
    r.exports = function (e, t, r) {
      var n = Le(e) ? S : x,
        a = arguments.length < 3;
      return n(e, _e(t), r, a, me);
    };
  }).call(this, r(3), r(7)(e));
}, function (e, t) {
  e.exports = function (e) {
    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function get() {
        return e.l;
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function get() {
        return e.i;
      }
    }), e.webpackPolyfill = 1), e;
  };
}, function (e, t) {
  String.prototype.padEnd || (String.prototype.padEnd = function (e, t) {
    return e >>= 0, t = String(void 0 !== t ? t : " "), this.length > e ? String(this) : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)), String(this) + t.slice(0, e));
  });
}, function (e, t, r) {
  "use strict";

  function n(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  function a(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
  }
  function o(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
      }
    }(e) || a(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }
  function i(e) {
    if (Array.isArray(e)) return e;
  }
  function u() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function c(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function s(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function l(e) {
    return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }
  function f(e) {
    return (f = "function" == typeof Symbol && "symbol" === l(Symbol.iterator) ? function (e) {
      return l(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : l(e);
    })(e);
  }
  function d(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function p(e) {
    return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function h(e, t) {
    return (h = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }
  r.r(t);
  var m = r(0),
    y = r.n(m),
    b = r(5),
    g = r.n(b),
    v = r(4),
    C = r.n(v),
    _ = r(6),
    w = r.n(_),
    S = r(2),
    j = r.n(S),
    x = r(1),
    N = r.n(x);
  r(8);
  function O(e, t) {
    return i(e) || function (e, t) {
      var r = [],
        n = !0,
        a = !1,
        o = void 0;
      try {
        for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
      } catch (e) {
        a = !0, o = e;
      } finally {
        try {
          n || null == u.return || u.return();
        } finally {
          if (a) throw o;
        }
      }
      return r;
    }(e, t) || u();
  }
  var k = [["Afghanistan", ["asia"], "af", "93"], ["Albania", ["europe"], "al", "355"], ["Algeria", ["africa", "north-africa"], "dz", "213"], ["Andorra", ["europe"], "ad", "376"], ["Angola", ["africa"], "ao", "244"], ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"], ["Argentina", ["america", "south-america"], "ar", "54", "(..) ........", 0, ["11", "221", "223", "261", "264", "2652", "280", "2905", "291", "2920", "2966", "299", "341", "342", "343", "351", "376", "379", "381", "3833", "385", "387", "388"]], ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"], ["Aruba", ["america", "carribean"], "aw", "297"], ["Australia", ["oceania"], "au", "61", "(..) .... ....", 0, ["2", "3", "4", "7", "8", "02", "03", "04", "07", "08"]], ["Austria", ["europe", "eu-union"], "at", "43"], ["Azerbaijan", ["asia", "ex-ussr"], "az", "994", "(..) ... .. .."], ["Bahamas", ["america", "carribean"], "bs", "1242"], ["Bahrain", ["middle-east"], "bh", "973"], ["Bangladesh", ["asia"], "bd", "880"], ["Barbados", ["america", "carribean"], "bb", "1246"], ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."], ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."], ["Belize", ["america", "central-america"], "bz", "501"], ["Benin", ["africa"], "bj", "229"], ["Bhutan", ["asia"], "bt", "975"], ["Bolivia", ["america", "south-america"], "bo", "591"], ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"], ["Botswana", ["africa"], "bw", "267"], ["Brazil", ["america", "south-america"], "br", "55", "(..) ........."], ["British Indian Ocean Territory", ["asia"], "io", "246"], ["Brunei", ["asia"], "bn", "673"], ["Bulgaria", ["europe", "eu-union"], "bg", "359"], ["Burkina Faso", ["africa"], "bf", "226"], ["Burundi", ["africa"], "bi", "257"], ["Cambodia", ["asia"], "kh", "855"], ["Cameroon", ["africa"], "cm", "237"], ["Canada", ["america", "north-america"], "ca", "1", "(...) ...-....", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", ["africa"], "cv", "238"], ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1], ["Central African Republic", ["africa"], "cf", "236"], ["Chad", ["africa"], "td", "235"], ["Chile", ["america", "south-america"], "cl", "56"], ["China", ["asia"], "cn", "86", "..-........."], ["Colombia", ["america", "south-america"], "co", "57", "... ... ...."], ["Comoros", ["africa"], "km", "269"], ["Congo", ["africa"], "cd", "243"], ["Congo", ["africa"], "cg", "242"], ["Costa Rica", ["america", "central-america"], "cr", "506", "....-...."], ["Côte d’Ivoire", ["africa"], "ci", "225", ".. .. .. .."], ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"], ["Cuba", ["america", "carribean"], "cu", "53"], ["Curaçao", ["america", "carribean"], "cw", "599", "", 0], ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"], ["Czech Republic", ["europe", "eu-union"], "cz", "420", "... ... ..."], ["Denmark", ["europe", "eu-union", "baltic"], "dk", "45", ".. .. .. .."], ["Djibouti", ["africa"], "dj", "253"], ["Dominica", ["america", "carribean"], "dm", "1767"], ["Dominican Republic", ["america", "carribean"], "do", "1", "", 2, ["809", "829", "849"]], ["Ecuador", ["america", "south-america"], "ec", "593"], ["Egypt", ["africa", "north-africa"], "eg", "20"], ["El Salvador", ["america", "central-america"], "sv", "503", "....-...."], ["Equatorial Guinea", ["africa"], "gq", "240"], ["Eritrea", ["africa"], "er", "291"], ["Estonia", ["europe", "eu-union", "ex-ussr", "baltic"], "ee", "372", ".... ......"], ["Ethiopia", ["africa"], "et", "251"], ["Fiji", ["oceania"], "fj", "679"], ["Finland", ["europe", "eu-union", "baltic"], "fi", "358", ".. ... .. .."], ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."], ["French Guiana", ["america", "south-america"], "gf", "594"], ["French Polynesia", ["oceania"], "pf", "689"], ["Gabon", ["africa"], "ga", "241"], ["Gambia", ["africa"], "gm", "220"], ["Georgia", ["asia", "ex-ussr"], "ge", "995"], ["Germany", ["europe", "eu-union", "baltic"], "de", "49", ".... ........"], ["Ghana", ["africa"], "gh", "233"], ["Greece", ["europe", "eu-union"], "gr", "30"], ["Grenada", ["america", "carribean"], "gd", "1473"], ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0], ["Guam", ["oceania"], "gu", "1671"], ["Guatemala", ["america", "central-america"], "gt", "502", "....-...."], ["Guinea", ["africa"], "gn", "224"], ["Guinea-Bissau", ["africa"], "gw", "245"], ["Guyana", ["america", "south-america"], "gy", "592"], ["Haiti", ["america", "carribean"], "ht", "509", "....-...."], ["Honduras", ["america", "central-america"], "hn", "504"], ["Hong Kong", ["asia"], "hk", "852", ".... ...."], ["Hungary", ["europe", "eu-union"], "hu", "36"], ["Iceland", ["europe"], "is", "354", "... ...."], ["India", ["asia"], "in", "91", ".....-....."], ["Indonesia", ["asia"], "id", "62"], ["Iran", ["middle-east"], "ir", "98", "... ... ...."], ["Iraq", ["middle-east"], "iq", "964"], ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."], ["Israel", ["middle-east"], "il", "972", "... ... ...."], ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0], ["Jamaica", ["america", "carribean"], "jm", "1876"], ["Japan", ["asia"], "jp", "81", ".. .... ...."], ["Jordan", ["middle-east"], "jo", "962"], ["Kazakhstan", ["asia", "ex-ussr"], "kz", "7", "... ...-..-..", 1, ["310", "311", "312", "313", "315", "318", "321", "324", "325", "326", "327", "336", "7172", "73622"]], ["Kenya", ["africa"], "ke", "254"], ["Kiribati", ["oceania"], "ki", "686"], ["Kosovo", ["europe", "ex-yugos"], "xk", "383"], ["Kuwait", ["middle-east"], "kw", "965"], ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."], ["Laos", ["asia"], "la", "856"], ["Latvia", ["europe", "eu-union", "ex-ussr", "baltic"], "lv", "371", ".. ... ..."], ["Lebanon", ["middle-east"], "lb", "961"], ["Lesotho", ["africa"], "ls", "266"], ["Liberia", ["africa"], "lr", "231"], ["Libya", ["africa", "north-africa"], "ly", "218"], ["Liechtenstein", ["europe"], "li", "423"], ["Lithuania", ["europe", "eu-union", "ex-ussr", "baltic"], "lt", "370"], ["Luxembourg", ["europe", "eu-union"], "lu", "352"], ["Macau", ["asia"], "mo", "853"], ["Macedonia", ["europe", "ex-yugos"], "mk", "389"], ["Madagascar", ["africa"], "mg", "261"], ["Malawi", ["africa"], "mw", "265"], ["Malaysia", ["asia"], "my", "60", "..-....-...."], ["Maldives", ["asia"], "mv", "960"], ["Mali", ["africa"], "ml", "223"], ["Malta", ["europe", "eu-union"], "mt", "356"], ["Marshall Islands", ["oceania"], "mh", "692"], ["Martinique", ["america", "carribean"], "mq", "596"], ["Mauritania", ["africa"], "mr", "222"], ["Mauritius", ["africa"], "mu", "230"], ["Mexico", ["america", "central-america"], "mx", "52", "... ... ....", 0, ["55", "81", "33", "656", "664", "998", "774", "229"]], ["Micronesia", ["oceania"], "fm", "691"], ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."], ["Monaco", ["europe"], "mc", "377"], ["Mongolia", ["asia"], "mn", "976"], ["Montenegro", ["europe", "ex-yugos"], "me", "382"], ["Morocco", ["africa", "north-africa"], "ma", "212"], ["Mozambique", ["africa"], "mz", "258"], ["Myanmar", ["asia"], "mm", "95"], ["Namibia", ["africa"], "na", "264"], ["Nauru", ["africa"], "nr", "674"], ["Nepal", ["asia"], "np", "977"], ["Netherlands", ["europe", "eu-union"], "nl", "31", ".. ........"], ["New Caledonia", ["oceania"], "nc", "687"], ["New Zealand", ["oceania"], "nz", "64", "...-...-...."], ["Nicaragua", ["america", "central-america"], "ni", "505"], ["Niger", ["africa"], "ne", "227"], ["Nigeria", ["africa"], "ng", "234"], ["North Korea", ["asia"], "kp", "850"], ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."], ["Oman", ["middle-east"], "om", "968"], ["Pakistan", ["asia"], "pk", "92", "...-......."], ["Palau", ["oceania"], "pw", "680"], ["Palestine", ["middle-east"], "ps", "970"], ["Panama", ["america", "central-america"], "pa", "507"], ["Papua New Guinea", ["oceania"], "pg", "675"], ["Paraguay", ["america", "south-america"], "py", "595"], ["Peru", ["america", "south-america"], "pe", "51"], ["Philippines", ["asia"], "ph", "63", ".... ......."], ["Poland", ["europe", "eu-union", "baltic"], "pl", "48", "...-...-..."], ["Portugal", ["europe", "eu-union"], "pt", "351"], ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]], ["Qatar", ["middle-east"], "qa", "974"], ["Réunion", ["africa"], "re", "262"], ["Romania", ["europe", "eu-union"], "ro", "40"], ["Russia", ["europe", "asia", "ex-ussr", "baltic"], "ru", "7", "(...) ...-..-..", 0], ["Rwanda", ["africa"], "rw", "250"], ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"], ["Saint Lucia", ["america", "carribean"], "lc", "1758"], ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"], ["Samoa", ["oceania"], "ws", "685"], ["San Marino", ["europe"], "sm", "378"], ["São Tomé and Príncipe", ["africa"], "st", "239"], ["Saudi Arabia", ["middle-east"], "sa", "966"], ["Senegal", ["africa"], "sn", "221"], ["Serbia", ["europe", "ex-yugos"], "rs", "381"], ["Seychelles", ["africa"], "sc", "248"], ["Sierra Leone", ["africa"], "sl", "232"], ["Singapore", ["asia"], "sg", "65", "....-...."], ["Slovakia", ["europe", "eu-union"], "sk", "421"], ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"], ["Solomon Islands", ["oceania"], "sb", "677"], ["Somalia", ["africa"], "so", "252"], ["South Africa", ["africa"], "za", "27"], ["South Korea", ["asia"], "kr", "82", "... .... ...."], ["South Sudan", ["africa", "north-africa"], "ss", "211"], ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."], ["Sri Lanka", ["asia"], "lk", "94"], ["Sudan", ["africa"], "sd", "249"], ["Suriname", ["america", "south-america"], "sr", "597"], ["Swaziland", ["africa"], "sz", "268"], ["Sweden", ["europe", "eu-union", "baltic"], "se", "46", "(...) ...-..."], ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."], ["Syria", ["middle-east"], "sy", "963"], ["Taiwan", ["asia"], "tw", "886"], ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"], ["Tanzania", ["africa"], "tz", "255"], ["Thailand", ["asia"], "th", "66"], ["Timor-Leste", ["asia"], "tl", "670"], ["Togo", ["africa"], "tg", "228"], ["Tonga", ["oceania"], "to", "676"], ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"], ["Tunisia", ["africa", "north-africa"], "tn", "216"], ["Turkey", ["europe"], "tr", "90", "... ... .. .."], ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"], ["Tuvalu", ["asia"], "tv", "688"], ["Uganda", ["africa"], "ug", "256"], ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."], ["United Arab Emirates", ["middle-east"], "ae", "971"], ["United Kingdom", ["europe", "eu-union"], "gb", "44", ".... ......"], ["United States", ["america", "north-america"], "us", "1", "(...) ...-....", 0, ["907", "205", "251", "256", "334", "479", "501", "870", "480", "520", "602", "623", "928", "209", "213", "310", "323", "408", "415", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "303", "719", "970", "203", "860", "202", "302", "239", "305", "321", "352", "386", "407", "561", "727", "772", "813", "850", "863", "904", "941", "954", "229", "404", "478", "706", "770", "912", "808", "319", "515", "563", "641", "712", "208", "217", "309", "312", "618", "630", "708", "773", "815", "847", "219", "260", "317", "574", "765", "812", "316", "620", "785", "913", "270", "502", "606", "859", "225", "318", "337", "504", "985", "413", "508", "617", "781", "978", "301", "410", "207", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "989", "218", "320", "507", "612", "651", "763", "952", "314", "417", "573", "636", "660", "816", "228", "601", "662", "406", "252", "336", "704", "828", "910", "919", "701", "308", "402", "603", "201", "609", "732", "856", "908", "973", "505", "575", "702", "775", "212", "315", "516", "518", "585", "607", "631", "716", "718", "845", "914", "216", "330", "419", "440", "513", "614", "740", "937", "405", "580", "918", "503", "541", "215", "412", "570", "610", "717", "724", "814", "401", "803", "843", "864", "605", "423", "615", "731", "865", "901", "931", "210", "214", "254", "281", "325", "361", "409", "432", "512", "713", "806", "817", "830", "903", "915", "936", "940", "956", "972", "979", "435", "801", "276", "434", "540", "703", "757", "804", "802", "206", "253", "360", "425", "509", "262", "414", "608", "715", "920", "304", "307"]], ["Uruguay", ["america", "south-america"], "uy", "598"], ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."], ["Vanuatu", ["oceania"], "vu", "678"], ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1], ["Venezuela", ["america", "south-america"], "ve", "58"], ["Vietnam", ["asia"], "vn", "84"], ["Yemen", ["middle-east"], "ye", "967"], ["Zambia", ["africa"], "zm", "260"], ["Zimbabwe", ["africa"], "zw", "263"]],
    E = [["American Samoa", ["oceania"], "as", "1684"], ["Anguilla", ["america", "carribean"], "ai", "1264"], ["Bermuda", ["america", "north-america"], "bm", "1441"], ["British Virgin Islands", ["america", "carribean"], "vg", "1284"], ["Cayman Islands", ["america", "carribean"], "ky", "1345"], ["Cook Islands", ["oceania"], "ck", "682"], ["Falkland Islands", ["america", "south-america"], "fk", "500"], ["Faroe Islands", ["europe"], "fo", "298"], ["Gibraltar", ["europe"], "gi", "350"], ["Greenland", ["america"], "gl", "299"], ["Jersey", ["europe", "eu-union"], "je", "44", ".... ......"], ["Montserrat", ["america", "carribean"], "ms", "1664"], ["Niue", ["asia"], "nu", "683"], ["Norfolk Island", ["oceania"], "nf", "672"], ["Northern Mariana Islands", ["oceania"], "mp", "1670"], ["Saint Barthélemy", ["america", "carribean"], "bl", "590", "", 1], ["Saint Helena", ["africa"], "sh", "290"], ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2], ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"], ["Sint Maarten", ["america", "carribean"], "sx", "1721"], ["Tokelau", ["oceania"], "tk", "690"], ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"], ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"], ["Wallis and Futuna", ["oceania"], "wf", "681"]];
  function T(e, t, r, n, a) {
    return !r || a ? e + "".padEnd(t.length, ".") + " " + n : e + "".padEnd(t.length, ".") + " " + r;
  }
  function I(e, t, r, a, i) {
    var u,
      c,
      s = [];
    return c = !0 === t, [(u = []).concat.apply(u, o(e.map(function (e) {
      var o = {
          name: e[0],
          regions: e[1],
          iso2: e[2],
          countryCode: e[3],
          dialCode: e[3],
          format: T(r, e[3], e[4], a, i),
          priority: e[5] || 0
        },
        u = [];
      return e[6] && e[6].map(function (t) {
        var r = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            }))), a.forEach(function (t) {
              n(e, t, r[t]);
            });
          }
          return e;
        }({}, o);
        r.dialCode = e[3] + t, r.isAreaCode = !0, r.areaCodeLength = t.length, u.push(r);
      }), u.length > 0 ? (o.mainCode = !0, c || "Array" === t.constructor.name && t.includes(e[2]) ? (o.hasAreaCodes = !0, [o].concat(u)) : (s = s.concat(u), [o])) : [o];
    }))), s];
  }
  function A(e, t, r, n) {
    if (null !== r) {
      var a = Object.keys(r),
        o = Object.values(r);
      a.forEach(function (r, a) {
        if (n) return e.push([r, o[a]]);
        var i = e.findIndex(function (e) {
          return e[0] === r;
        });
        if (-1 === i) {
          var u = [r];
          u[t] = o[a], e.push(u);
        } else e[i][t] = o[a];
      });
    }
  }
  function D(e, t) {
    return 0 === t.length ? e : e.map(function (e) {
      var r = t.findIndex(function (t) {
        return t[0] === e[2];
      });
      if (-1 === r) return e;
      var n = t[r];
      return n[1] && (e[4] = n[1]), n[3] && (e[5] = n[3]), n[2] && (e[6] = n[2]), e;
    });
  }
  var P = function e(t, r, n, a, i, u, s, l, f, d, p, h, m, y) {
      c(this, e), this.filterRegions = function (e, t) {
        if ("string" == typeof e) {
          var r = e;
          return t.filter(function (e) {
            return e.regions.some(function (e) {
              return e === r;
            });
          });
        }
        return t.filter(function (t) {
          return e.map(function (e) {
            return t.regions.some(function (t) {
              return t === e;
            });
          }).some(function (e) {
            return e;
          });
        });
      }, this.sortTerritories = function (e, t) {
        var r = [].concat(o(e), o(t));
        return r.sort(function (e, t) {
          return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
        }), r;
      }, this.getFilteredCountryList = function (e, t, r) {
        return 0 === e.length ? t : r ? e.map(function (e) {
          var r = t.find(function (t) {
            return t.iso2 === e;
          });
          if (r) return r;
        }).filter(function (e) {
          return e;
        }) : t.filter(function (t) {
          return e.some(function (e) {
            return e === t.iso2;
          });
        });
      }, this.localizeCountries = function (e, t, r) {
        for (var n = 0; n < e.length; n++) void 0 !== t[e[n].iso2] ? e[n].localName = t[e[n].iso2] : void 0 !== t[e[n].name] && (e[n].localName = t[e[n].name]);
        return r || e.sort(function (e, t) {
          return e.localName < t.localName ? -1 : e.localName > t.localName ? 1 : 0;
        }), e;
      }, this.getCustomAreas = function (e, t) {
        for (var r = [], n = 0; n < t.length; n++) {
          var a = JSON.parse(JSON.stringify(e));
          a.dialCode += t[n], r.push(a);
        }
        return r;
      }, this.excludeCountries = function (e, t) {
        return 0 === t.length ? e : e.filter(function (e) {
          return !t.includes(e.iso2);
        });
      };
      var b = function (e, t, r) {
          var n = [];
          return A(n, 1, e, !0), A(n, 3, t), A(n, 2, r), n;
        }(l, f, d),
        g = D(JSON.parse(JSON.stringify(k)), b),
        v = D(JSON.parse(JSON.stringify(E)), b),
        C = O(I(g, t, h, m, y), 2),
        _ = C[0],
        w = C[1];
      if (r) {
        var S = O(I(v, t, h, m, y), 2),
          j = S[0];
        S[1];
        _ = this.sortTerritories(j, _);
      }
      n && (_ = this.filterRegions(n, _)), this.onlyCountries = this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(a, _, s.includes("onlyCountries")), u), p, s.includes("onlyCountries")), this.preferredCountries = 0 === i.length ? [] : this.localizeCountries(this.getFilteredCountryList(i, _, s.includes("preferredCountries")), p, s.includes("preferredCountries")), this.hiddenAreaCodes = this.excludeCountries(this.getFilteredCountryList(a, w), u);
    },
    F = function (e) {
      function t(e) {
        var r;
        c(this, t), (r = function (e, t) {
          return !t || "object" !== f(t) && "function" != typeof t ? d(e) : t;
        }(this, p(t).call(this, e))).getProbableCandidate = C()(function (e) {
          return e && 0 !== e.length ? r.state.onlyCountries.filter(function (t) {
            return j()(t.name.toLowerCase(), e.toLowerCase());
          }, d(d(r)))[0] : null;
        }), r.guessSelectedCountry = C()(function (e, t, n, a) {
          var o;
          if (!1 === r.props.enableAreaCodes && (a.some(function (t) {
            if (j()(e, t.dialCode)) return n.some(function (e) {
              if (t.iso2 === e.iso2 && e.mainCode) return o = e, !0;
            }), !0;
          }), o)) return o;
          var i = n.find(function (e) {
            return e.iso2 == t;
          });
          if ("" === e.trim()) return i;
          var u = n.reduce(function (t, r) {
            if (j()(e, r.dialCode)) {
              if (r.dialCode.length > t.dialCode.length) return r;
              if (r.dialCode.length === t.dialCode.length && r.priority < t.priority) return r;
            }
            return t;
          }, {
            dialCode: "",
            priority: 10001
          }, d(d(r)));
          return u.name ? u : i;
        }), r.updateCountry = function (e) {
          var t,
            n = r.state.onlyCountries;
          (t = e.indexOf(0) >= "0" && e.indexOf(0) <= "9" ? n.find(function (t) {
            return t.dialCode == +e;
          }) : n.find(function (t) {
            return t.iso2 == e;
          })) && t.dialCode && r.setState({
            selectedCountry: t,
            formattedNumber: r.props.disableCountryCode ? "" : r.formatNumber(t.dialCode, t)
          });
        }, r.scrollTo = function (e, t) {
          if (e) {
            var n = r.dropdownRef;
            if (n && document.body) {
              var a = n.offsetHeight,
                o = n.getBoundingClientRect().top + document.body.scrollTop,
                i = o + a,
                u = e,
                c = u.getBoundingClientRect(),
                s = u.offsetHeight,
                l = c.top + document.body.scrollTop,
                f = l + s,
                d = l - o + n.scrollTop,
                p = a / 2 - s / 2;
              if (r.props.enableSearch ? l < o + 32 : l < o) t && (d -= p), n.scrollTop = d;else if (f > i) {
                t && (d += p);
                var h = a - s;
                n.scrollTop = d - h;
              }
            }
          }
        }, r.scrollToTop = function () {
          var e = r.dropdownRef;
          e && document.body && (e.scrollTop = 0);
        }, r.formatNumber = function (e, t) {
          if (!t) return e;
          var n,
            o = t.format,
            c = r.props,
            s = c.disableCountryCode,
            l = c.enableAreaCodeStretch,
            f = c.enableLongNumbers,
            d = c.autoFormat;
          if (s ? ((n = o.split(" ")).shift(), n = n.join(" ")) : l && t.isAreaCode ? ((n = o.split(" "))[1] = n[1].replace(/\.+/, "".padEnd(t.areaCodeLength, ".")), n = n.join(" ")) : n = o, !e || 0 === e.length) return s ? "" : r.props.prefix;
          if (e && e.length < 2 || !n || !d) return s ? e : r.props.prefix + e;
          var p,
            h = w()(n, function (e, t) {
              if (0 === e.remainingText.length) return e;
              if ("." !== t) return {
                formattedText: e.formattedText + t,
                remainingText: e.remainingText
              };
              var r,
                n = i(r = e.remainingText) || a(r) || u(),
                o = n[0],
                c = n.slice(1);
              return {
                formattedText: e.formattedText + o,
                remainingText: c
              };
            }, {
              formattedText: "",
              remainingText: e.split("")
            });
          return (p = f ? h.formattedText + h.remainingText.join("") : h.formattedText).includes("(") && !p.includes(")") && (p += ")"), p;
        }, r.cursorToEnd = function () {
          var e = r.numberInputRef;
          if (document.activeElement === e) {
            e.focus();
            var t = e.value.length;
            ")" === e.value.charAt(t - 1) && (t -= 1), e.setSelectionRange(t, t);
          }
        }, r.getElement = function (e) {
          return r["flag_no_".concat(e)];
        }, r.getCountryData = function () {
          return r.state.selectedCountry ? {
            name: r.state.selectedCountry.name || "",
            dialCode: r.state.selectedCountry.dialCode || "",
            countryCode: r.state.selectedCountry.iso2 || "",
            format: r.state.selectedCountry.format || ""
          } : {};
        }, r.handleFlagDropdownClick = function (e) {
          if (e.preventDefault(), r.state.showDropdown || !r.props.disabled) {
            var t = r.state,
              n = t.preferredCountries,
              a = t.onlyCountries,
              o = t.selectedCountry,
              i = r.concatPreferredCountries(n, a).findIndex(function (e) {
                return e.dialCode === o.dialCode && e.iso2 === o.iso2;
              });
            r.setState({
              showDropdown: !r.state.showDropdown,
              highlightCountryIndex: i
            }, function () {
              r.state.showDropdown && r.scrollTo(r.getElement(r.state.highlightCountryIndex));
            });
          }
        }, r.handleInput = function (e) {
          var t = e.target.value,
            n = r.props,
            a = n.prefix,
            o = n.onChange,
            i = r.props.disableCountryCode ? "" : a,
            u = r.state.selectedCountry,
            c = r.state.freezeSelection;
          if (!r.props.countryCodeEditable) {
            var s = a + (u.hasAreaCodes ? r.state.onlyCountries.find(function (e) {
              return e.iso2 === u.iso2 && e.mainCode;
            }).dialCode : u.dialCode);
            if (t.slice(0, s.length) !== s) return;
          }
          if (t === a) return o && o("", r.getCountryData(), e, ""), r.setState({
            formattedNumber: ""
          });
          if (t.replace(/\D/g, "").length > 15) {
            if (!1 === r.props.enableLongNumbers) return;
            if ("number" == typeof r.props.enableLongNumbers && t.replace(/\D/g, "").length > r.props.enableLongNumbers) return;
          }
          if (t !== r.state.formattedNumber) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var l = r.props.country,
              f = r.state,
              d = f.onlyCountries,
              p = f.selectedCountry,
              h = f.hiddenAreaCodes;
            if (o && e.persist(), t.length > 0) {
              var m = t.replace(/\D/g, "");
              (!r.state.freezeSelection || p && p.dialCode.length > m.length) && (u = r.props.disableCountryGuess ? p : r.guessSelectedCountry(m.substring(0, 6), l, d, h) || p, c = !1), i = r.formatNumber(m, u), u = u.dialCode ? u : p;
            }
            var y = e.target.selectionStart,
              b = e.target.selectionStart,
              g = r.state.formattedNumber,
              v = i.length - g.length;
            r.setState({
              formattedNumber: i,
              freezeSelection: c,
              selectedCountry: u
            }, function () {
              v > 0 && (b -= v), ")" == i.charAt(i.length - 1) ? r.numberInputRef.setSelectionRange(i.length - 1, i.length - 1) : b > 0 && g.length >= i.length ? r.numberInputRef.setSelectionRange(b, b) : y < g.length && r.numberInputRef.setSelectionRange(y, y), o && o(i.replace(/[^0-9]+/g, ""), r.getCountryData(), e, i);
            });
          }
        }, r.handleInputClick = function (e) {
          r.setState({
            showDropdown: !1
          }), r.props.onClick && r.props.onClick(e, r.getCountryData());
        }, r.handleDoubleClick = function (e) {
          var t = e.target.value.length;
          e.target.setSelectionRange(0, t);
        }, r.handleFlagItemClick = function (e, t) {
          var n = r.state.selectedCountry,
            a = r.state.onlyCountries.find(function (t) {
              return t == e;
            });
          if (a) {
            var o = r.state.formattedNumber.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""),
              i = o.length > 1 ? o.replace(n.dialCode, a.dialCode) : a.dialCode,
              u = r.formatNumber(i.replace(/\D/g, ""), a);
            r.setState({
              showDropdown: !1,
              selectedCountry: a,
              freezeSelection: !0,
              formattedNumber: u,
              searchValue: ""
            }, function () {
              r.cursorToEnd(), r.props.onChange && r.props.onChange(u.replace(/[^0-9]+/g, ""), r.getCountryData(), t, u);
            });
          }
        }, r.handleInputFocus = function (e) {
          r.numberInputRef && r.numberInputRef.value === r.props.prefix && r.state.selectedCountry && !r.props.disableCountryCode && r.setState({
            formattedNumber: r.props.prefix + r.state.selectedCountry.dialCode
          }, function () {
            r.props.jumpCursorToEnd && setTimeout(r.cursorToEnd, 0);
          }), r.setState({
            placeholder: ""
          }), r.props.onFocus && r.props.onFocus(e, r.getCountryData()), r.props.jumpCursorToEnd && setTimeout(r.cursorToEnd, 0);
        }, r.handleInputBlur = function (e) {
          e.target.value || r.setState({
            placeholder: r.props.placeholder
          }), r.props.onBlur && r.props.onBlur(e, r.getCountryData());
        }, r.handleInputCopy = function (e) {
          if (r.props.copyNumbersOnly) {
            var t = window.getSelection().toString().replace(/[^0-9]+/g, "");
            e.clipboardData.setData("text/plain", t), e.preventDefault();
          }
        }, r.getHighlightCountryIndex = function (e) {
          var t = r.state.highlightCountryIndex + e;
          return t < 0 || t >= r.state.onlyCountries.length + r.state.preferredCountries.length ? t - e : r.props.enableSearch && t > r.getSearchFilteredCountries().length ? 0 : t;
        }, r.searchCountry = function () {
          var e = r.getProbableCandidate(r.state.queryString) || r.state.onlyCountries[0],
            t = r.state.onlyCountries.findIndex(function (t) {
              return t == e;
            }) + r.state.preferredCountries.length;
          r.scrollTo(r.getElement(t), !0), r.setState({
            queryString: "",
            highlightCountryIndex: t
          });
        }, r.handleKeydown = function (e) {
          var t = r.props.keys,
            n = e.target.className;
          if (n.includes("selected-flag") && e.which === t.ENTER && !r.state.showDropdown) return r.handleFlagDropdownClick(e);
          if (n.includes("form-control") && (e.which === t.ENTER || e.which === t.ESC)) return e.target.blur();
          if (r.state.showDropdown && !r.props.disabled && (!n.includes("search-box") || e.which === t.UP || e.which === t.DOWN || e.which === t.ENTER || e.which === t.ESC && "" === e.target.value)) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var a = function a(e) {
              r.setState({
                highlightCountryIndex: r.getHighlightCountryIndex(e)
              }, function () {
                r.scrollTo(r.getElement(r.state.highlightCountryIndex), !0);
              });
            };
            switch (e.which) {
              case t.DOWN:
                a(1);
                break;
              case t.UP:
                a(-1);
                break;
              case t.ENTER:
                r.props.enableSearch ? r.handleFlagItemClick(r.getSearchFilteredCountries()[r.state.highlightCountryIndex] || r.getSearchFilteredCountries()[0], e) : r.handleFlagItemClick([].concat(o(r.state.preferredCountries), o(r.state.onlyCountries))[r.state.highlightCountryIndex], e);
                break;
              case t.ESC:
              case t.TAB:
                r.setState({
                  showDropdown: !1
                }, r.cursorToEnd);
                break;
              default:
                (e.which >= t.A && e.which <= t.Z || e.which === t.SPACE) && r.setState({
                  queryString: r.state.queryString + String.fromCharCode(e.which)
                }, r.state.debouncedQueryStingSearcher);
            }
          }
        }, r.handleInputKeyDown = function (e) {
          var t = r.props,
            n = t.keys,
            a = t.onEnterKeyPress,
            o = t.onKeyDown;
          e.which === n.ENTER && a && a(e), o && o(e);
        }, r.handleClickOutside = function (e) {
          r.dropdownRef && !r.dropdownContainerRef.contains(e.target) && r.state.showDropdown && r.setState({
            showDropdown: !1
          });
        }, r.handleSearchChange = function (e) {
          var t = e.currentTarget.value,
            n = r.state,
            a = n.preferredCountries,
            o = n.selectedCountry,
            i = 0;
          if ("" === t && o) {
            var u = r.state.onlyCountries;
            i = r.concatPreferredCountries(a, u).findIndex(function (e) {
              return e == o;
            }), setTimeout(function () {
              return r.scrollTo(r.getElement(i));
            }, 100);
          }
          r.setState({
            searchValue: t,
            highlightCountryIndex: i
          });
        }, r.concatPreferredCountries = function (e, t) {
          return e.length > 0 ? o(new Set(e.concat(t))) : t;
        }, r.getDropdownCountryName = function (e) {
          return e.localName || e.name;
        }, r.getSearchFilteredCountries = function () {
          var e = r.state,
            t = e.preferredCountries,
            n = e.onlyCountries,
            a = e.searchValue,
            i = r.props.enableSearch,
            u = r.concatPreferredCountries(t, n),
            c = a.trim().toLowerCase().replace("+", "");
          if (i && c) {
            if (/^\d+$/.test(c)) return u.filter(function (e) {
              var t = e.dialCode;
              return ["".concat(t)].some(function (e) {
                return e.toLowerCase().includes(c);
              });
            });
            var s = u.filter(function (e) {
                var t = e.iso2;
                return ["".concat(t)].some(function (e) {
                  return e.toLowerCase().includes(c);
                });
              }),
              l = u.filter(function (e) {
                var t = e.name,
                  r = e.localName;
                e.iso2;
                return ["".concat(t), "".concat(r || "")].some(function (e) {
                  return e.toLowerCase().includes(c);
                });
              });
            return r.scrollToTop(), o(new Set([].concat(s, l)));
          }
          return u;
        }, r.getCountryDropdownList = function () {
          var e = r.state,
            t = e.preferredCountries,
            a = e.highlightCountryIndex,
            o = e.showDropdown,
            i = e.searchValue,
            u = r.props,
            c = u.disableDropdown,
            s = u.prefix,
            l = r.props,
            f = l.enableSearch,
            d = l.searchNotFound,
            p = l.disableSearchIcon,
            h = l.searchClass,
            m = l.searchStyle,
            b = l.searchPlaceholder,
            g = l.autocompleteSearch,
            v = r.getSearchFilteredCountries().map(function (e, t) {
              var n = a === t,
                o = N()({
                  country: !0,
                  preferred: "us" === e.iso2 || "gb" === e.iso2,
                  active: "us" === e.iso2,
                  highlight: n
                }),
                i = "flag ".concat(e.iso2);
              return y.a.createElement("li", _extends({
                ref: function ref(e) {
                  return r["flag_no_".concat(t)] = e;
                },
                key: "flag_no_".concat(t),
                "data-flag-key": "flag_no_".concat(t),
                className: o,
                "data-dial-code": "1",
                tabIndex: c ? "-1" : "0",
                "data-country-code": e.iso2,
                onClick: function onClick(t) {
                  return r.handleFlagItemClick(e, t);
                },
                role: "option"
              }, n ? {
                "aria-selected": !0
              } : {}), y.a.createElement("div", {
                className: i
              }), y.a.createElement("span", {
                className: "country-name"
              }, r.getDropdownCountryName(e)), y.a.createElement("span", {
                className: "dial-code"
              }, e.format ? r.formatNumber(e.dialCode, e) : s + e.dialCode));
            }),
            C = y.a.createElement("li", {
              key: "dashes",
              className: "divider"
            });
          t.length > 0 && (!f || f && !i.trim()) && v.splice(t.length, 0, C);
          var _ = N()(n({
            "country-list": !0,
            hide: !o
          }, r.props.dropdownClass, !0));
          return y.a.createElement("ul", {
            ref: function ref(e) {
              return !f && e && e.focus(), r.dropdownRef = e;
            },
            className: _,
            style: r.props.dropdownStyle,
            role: "listbox",
            tabIndex: "0"
          }, f && y.a.createElement("li", {
            className: N()(n({
              search: !0
            }, h, h))
          }, !p && y.a.createElement("span", {
            className: N()(n({
              "search-emoji": !0
            }, "".concat(h, "-emoji"), h)),
            role: "img",
            "aria-label": "Magnifying glass"
          }, "🔎"), y.a.createElement("input", {
            className: N()(n({
              "search-box": !0
            }, "".concat(h, "-box"), h)),
            style: m,
            type: "search",
            placeholder: b,
            autoFocus: !0,
            autoComplete: g ? "on" : "off",
            value: i,
            onChange: r.handleSearchChange
          })), v.length > 0 ? v : y.a.createElement("li", {
            className: "no-entries-message"
          }, y.a.createElement("span", null, d)));
        };
        var s,
          l = new P(e.enableAreaCodes, e.enableTerritories, e.regions, e.onlyCountries, e.preferredCountries, e.excludeCountries, e.preserveOrder, e.masks, e.priority, e.areaCodes, e.localization, e.prefix, e.defaultMask, e.alwaysDefaultMask),
          h = l.onlyCountries,
          m = l.preferredCountries,
          b = l.hiddenAreaCodes,
          v = e.value ? e.value.replace(/\D/g, "") : "";
        s = e.disableInitialCountryGuess ? 0 : v.length > 1 ? r.guessSelectedCountry(v.substring(0, 6), e.country, h, b) || 0 : e.country && h.find(function (t) {
          return t.iso2 == e.country;
        }) || 0;
        var _,
          S = v.length < 2 && s && !j()(v, s.dialCode) ? s.dialCode : "";
        _ = "" === v && 0 === s ? "" : r.formatNumber((e.disableCountryCode ? "" : S) + v, s.name ? s : void 0);
        var x = h.findIndex(function (e) {
          return e == s;
        });
        return r.state = {
          showDropdown: e.showDropdown,
          formattedNumber: _,
          onlyCountries: h,
          preferredCountries: m,
          hiddenAreaCodes: b,
          selectedCountry: s,
          highlightCountryIndex: x,
          queryString: "",
          freezeSelection: !1,
          debouncedQueryStingSearcher: g()(r.searchCountry, 250),
          searchValue: ""
        }, r;
      }
      var r, l, m;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && h(e, t);
      }(t, e), r = t, (l = [{
        key: "componentDidMount",
        value: function value() {
          document.addEventListener && this.props.enableClickOutside && document.addEventListener("mousedown", this.handleClickOutside), this.props.onMount && this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g, ""), this.getCountryData(), this.state.formattedNumber);
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          document.removeEventListener && this.props.enableClickOutside && document.removeEventListener("mousedown", this.handleClickOutside);
        }
      }, {
        key: "componentDidUpdate",
        value: function value(e, t, r) {
          e.country !== this.props.country ? this.updateCountry(this.props.country) : e.value !== this.props.value && this.updateFormattedNumber(this.props.value);
        }
      }, {
        key: "updateFormattedNumber",
        value: function value(e) {
          if (null === e) return this.setState({
            selectedCountry: 0,
            formattedNumber: ""
          });
          var t = this.state,
            r = t.onlyCountries,
            n = t.selectedCountry,
            a = t.hiddenAreaCodes,
            o = this.props,
            i = o.country,
            u = o.prefix;
          if ("" === e) return this.setState({
            selectedCountry: n,
            formattedNumber: ""
          });
          var c,
            s,
            l = e.replace(/\D/g, "");
          if (n && j()(e, u + n.dialCode)) s = this.formatNumber(l, n), this.setState({
            formattedNumber: s
          });else {
            var f = (c = this.props.disableCountryGuess ? n : this.guessSelectedCountry(l.substring(0, 6), i, r, a) || n) && j()(l, u + c.dialCode) ? c.dialCode : "";
            s = this.formatNumber((this.props.disableCountryCode ? "" : f) + l, c || void 0), this.setState({
              selectedCountry: c,
              formattedNumber: s
            });
          }
        }
      }, {
        key: "render",
        value: function value() {
          var e,
            t,
            r,
            a = this,
            o = this.state,
            i = o.onlyCountries,
            u = o.selectedCountry,
            c = o.showDropdown,
            s = o.formattedNumber,
            l = o.hiddenAreaCodes,
            f = this.props,
            d = f.disableDropdown,
            p = f.renderStringAsFlag,
            h = f.isValid,
            m = f.defaultErrorMessage,
            b = f.specialLabel;
          if ("boolean" == typeof h) t = h;else {
            var g = h(s.replace(/\D/g, ""), u, i, l);
            "boolean" == typeof g ? !1 === (t = g) && (r = m) : (t = !1, r = g);
          }
          var v = N()((n(e = {}, this.props.containerClass, !0), n(e, "react-tel-input", !0), e)),
            C = N()({
              arrow: !0,
              up: c
            }),
            _ = N()(n({
              "form-control": !0,
              "invalid-number": !t,
              open: c
            }, this.props.inputClass, !0)),
            w = N()({
              "selected-flag": !0,
              open: c
            }),
            S = N()(n({
              "flag-dropdown": !0,
              "invalid-number": !t,
              open: c
            }, this.props.buttonClass, !0)),
            j = "flag ".concat(u && u.iso2);
          return y.a.createElement("div", {
            className: "".concat(v, " ").concat(this.props.className),
            style: this.props.style || this.props.containerStyle,
            onKeyDown: this.handleKeydown
          }, b && y.a.createElement("div", {
            className: "special-label"
          }, b), r && y.a.createElement("div", {
            className: "invalid-number-message"
          }, r), y.a.createElement("input", _extends({
            className: _,
            style: this.props.inputStyle,
            onChange: this.handleInput,
            onClick: this.handleInputClick,
            onDoubleClick: this.handleDoubleClick,
            onFocus: this.handleInputFocus,
            onBlur: this.handleInputBlur,
            onCopy: this.handleInputCopy,
            value: s,
            onKeyDown: this.handleInputKeyDown,
            placeholder: this.props.placeholder,
            disabled: this.props.disabled,
            type: "tel"
          }, this.props.inputProps, {
            ref: function ref(e) {
              a.numberInputRef = e, "function" == typeof a.props.inputProps.ref ? a.props.inputProps.ref(e) : "object" == _typeof(a.props.inputProps.ref) && (a.props.inputProps.ref.current = e);
            }
          })), y.a.createElement("div", {
            className: S,
            style: this.props.buttonStyle,
            ref: function ref(e) {
              return a.dropdownContainerRef = e;
            }
          }, p ? y.a.createElement("div", {
            className: w
          }, p) : y.a.createElement("div", {
            onClick: d ? void 0 : this.handleFlagDropdownClick,
            className: w,
            title: u ? "".concat(u.localName || u.name, ": + ").concat(u.dialCode) : "",
            tabIndex: d ? "-1" : "0",
            role: "button",
            "aria-haspopup": "listbox",
            "aria-expanded": !!c || void 0
          }, y.a.createElement("div", {
            className: j
          }, !d && y.a.createElement("div", {
            className: C
          }))), c && this.getCountryDropdownList()));
        }
      }]) && s(r.prototype, l), m && s(r, m), t;
    }(y.a.Component);
  F.defaultProps = {
    country: "",
    value: "",
    onlyCountries: [],
    preferredCountries: [],
    excludeCountries: [],
    placeholder: "1 (702) 123-4567",
    searchPlaceholder: "search",
    searchNotFound: "No entries to show",
    flagsImagePath: "./flags.png",
    disabled: !1,
    containerStyle: {},
    inputStyle: {},
    buttonStyle: {},
    dropdownStyle: {},
    searchStyle: {},
    containerClass: "",
    inputClass: "",
    buttonClass: "",
    dropdownClass: "",
    searchClass: "",
    className: "",
    autoFormat: !0,
    enableAreaCodes: !1,
    enableTerritories: !1,
    disableCountryCode: !1,
    disableDropdown: !1,
    enableLongNumbers: !1,
    countryCodeEditable: !0,
    enableSearch: !1,
    disableSearchIcon: !1,
    disableInitialCountryGuess: !1,
    disableCountryGuess: !1,
    regions: "",
    inputProps: {},
    localization: {},
    masks: null,
    priority: null,
    areaCodes: null,
    preserveOrder: [],
    defaultMask: "... ... ... ... ..",
    alwaysDefaultMask: !1,
    prefix: "+",
    copyNumbersOnly: !0,
    renderStringAsFlag: "",
    autocompleteSearch: !1,
    jumpCursorToEnd: !0,
    enableAreaCodeStretch: !1,
    enableClickOutside: !0,
    showDropdown: !1,
    isValid: !0,
    defaultErrorMessage: "",
    specialLabel: "Phone",
    onEnterKeyPress: null,
    keys: {
      UP: 38,
      DOWN: 40,
      RIGHT: 39,
      LEFT: 37,
      ENTER: 13,
      ESC: 27,
      PLUS: 43,
      A: 65,
      Z: 90,
      SPACE: 32,
      TAB: 9
    }
  };
  t.default = F;
}]);

/***/ }),

/***/ "6off":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EbY7");
/* harmony import */ var _assets_home_how1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnBx");
/* harmony import */ var _assets_home_how2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a+yp");
/* harmony import */ var _assets_home_how3_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YPJM");
/* harmony import */ var _assets_home_how4_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("httU");





var HowItWorks = function HowItWorks() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].howItWork
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].howItWorkContainer
  }, h("h3", null, "How this Works"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].howItWorkGrid
  }, h(HowItWorkCard, null))));
};
/* harmony default export */ __webpack_exports__["a"] = (HowItWorks);
var HowItWorkCard = function HowItWorkCard() {
  var data = [{
    value: '1',
    label: 'Complete the form to check available immigration programs.',
    image: _assets_home_how1_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    width: "59",
    height: "84"
  }, {
    value: '2',
    label: 'Receive instant results - a detailed list of programs you likely qualify for.',
    image: _assets_home_how2_webp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    width: "81",
    height: "80"
  }, {
    value: '3',
    label: 'Select the program you are interested in.',
    image: _assets_home_how3_webp__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    width: "81",
    height: "80"
  }, {
    value: '4',
    label: 'Get a free consultation about the next steps.',
    image: _assets_home_how4_webp__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    width: "83",
    height: "80"
  }];
  return h(Fragment, null, data.map(function (e, i) {
    return h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].howItWorkCard,
      key: i
    }, h("img", {
      src: e.image,
      alt: "img",
      width: e.width,
      height: e.height
    }), h("h4", null, e.value, "."), h("p", null, e.label));
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "79EO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y3FI");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony import */ var _assets_results_lock_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bI+Y");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gdic");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6OLs");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ResultForm = function ResultForm() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"])({
      firstName: '',
      lastName: '',
      email: "",
      phone: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    if (name === 'check') {
      return setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, e.target.checked)));
    }
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
    setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "")));
  };
  var checkEmail = /^[A-Za-z0-9.]{2,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,10}$/;
  var handleOnblur = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value,
        placeholder = _e$target2.placeholder;
      if (value === "") {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "".concat(placeholder, " is required"))));
      } else if (name === "email" && !checkEmail.test(value)) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "Email not valid")));
      } else if (value === '+[object FocusEvent]') {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "".concat(name, " is required"))));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "")));
      }
    });
    return function handleOnblur(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      try {
        if (Object.values(values).every(function (val) {
          return val !== '';
        })) {
          console.log("values--->", values);
        }
      } catch (err) {
        console.log("Something went wrong");
      }
    });
    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formTitle
  }, h("h3", null, h("img", {
    src: _assets_results_lock_webp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    alt: "lock"
  }), " Unlock 60+ available programs"), h("p", null, "Choosing the right immigration program, depending on your own profile, can be challenging to begin with. We are happy to answer any questions about the immigration process to Canada if you are interested in finding out more!")), console.log("values--->", values), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formGrid
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formBox
  }, h("form", null, h("input", {
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    value: values === null || values === void 0 ? void 0 : values.firstName,
    onChange: handleChange,
    onBlur: handleOnblur
  }), h("input", {
    type: "text",
    name: "lastName",
    value: values === null || values === void 0 ? void 0 : values.lastName,
    placeholder: "Last Name",
    onChange: handleChange,
    onBlur: handleOnblur
  }), h("input", {
    type: "text",
    name: "email",
    value: values === null || values === void 0 ? void 0 : values.email,
    placeholder: "Email Address",
    onChange: handleChange,
    onBlur: handleOnblur
  }), h(react_phone_input_2__WEBPACK_IMPORTED_MODULE_4___default.a, {
    country: 'de',
    value: values === null || values === void 0 ? void 0 : values.phone,
    inputProps: {
      name: 'phone',
      required: true,
      autoFocus: true
    },
    onChange: function onChange(e) {
      return handleChange({
        target: {
          name: 'phone',
          value: "+".concat(e)
        }
      });
    },
    onBlur: function onBlur(e) {
      return handleOnblur({
        target: {
          name: 'phone',
          value: "+".concat(e)
        }
      });
    }
  }), h("button", {
    type: "submit",
    onClick: handleSubmit,
    disabled: !(values !== null && values !== void 0 && values.check)
  }, "Book A Meeting"), h("label", null, h("input", {
    type: "checkbox",
    name: "check",
    defaultChecked: true,
    value: values === null || values === void 0 ? void 0 : values.check,
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), h("span", null, "By clicking on 'book a meeting\u2019, you are agreeing to our", ' ', h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/"
  }, "T&C"), " and", ' ', h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/"
  }, "Privacy Policy"), ".")))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formContent
  }, h("ul", null, h("li", null, "Speak with an immigration professional."), h("li", null, "Get an in-depth immigration plan."), h("li", null, "Save time and money on planning and preparation. "), h("li", null, "Make a fresh start in Canada.")))));
};
/* harmony default export */ __webpack_exports__["a"] = (ResultForm);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "8VmE":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "AY/J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"thankyou":"thankyou__7BGPk","container":"container__BbCh5"});

/***/ }),

/***/ "AZDn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("okHz");
/* harmony import */ var _assets_thankyou_thankyou_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aqZz");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AY/J");



var ThankYou = function ThankYou() {
  return h(_components_layout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].thankyou
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].container
  }, h("img", {
    src: _assets_thankyou_thankyou_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "thankyou"
  }), h("h2", null, "Thank You!"), h("p", null, "An immigration professional will contact you shortly to complete your profile evaluation and discuss the next steps."))));
};
/* harmony default export */ __webpack_exports__["a"] = (ThankYou);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "Brh3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"layout":"layout__gpm4a","wrapper":"wrapper__b8TZG"});

/***/ }),

/***/ "CpeD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "1872fbadb2de9751eb2ac5c97b51e60a.webp");

/***/ }),

/***/ "EbY7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"topBanner":"topBanner__ZoZ3Q","topBannerContainer":"topBannerContainer__j2kx2","topBannerTitle":"topBannerTitle__eklzG","formGrid":"formGrid__lu6vo","active":"active__du3Zy","formGroup":"formGroup__MywCE","formScroll":"formScroll__Hg34P","buttonGrid":"buttonGrid__saoE+","backBtn":"backBtn__xHrho","submitBtn":"submitBtn__S26p6","howItWork":"howItWork__ns-PQ","howItWorkContainer":"howItWorkContainer__Y+RiZ","howItWorkGrid":"howItWorkGrid__EPcfb","howItWorkCard":"howItWorkCard__B3QBZ","testimonial":"testimonial__aBeSi","testimonialContainer":"testimonialContainer__YXRgq","testimonialGrid":"testimonialGrid__Uca9I","testimonialCard":"testimonialCard__GINIb","rating":"rating__fsW+n","callToAction":"callToAction__1Z-ma","callToActionContainer":"callToActionContainer__ByZwV","callToActionGrid":"callToActionGrid__0uvyu","callToActionCover":"callToActionCover__5m2Yu","callToActionContent":"callToActionContent__sxMal","typoAnimate":"typoAnimate__mzUXD"});

/***/ }),

/***/ "FA6U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"home":"home__uRcqa"});

/***/ }),

/***/ "GFNa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "GKGO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("L0At");
} else {}

/***/ }),

/***/ "GeWT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__("GKGO");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
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
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

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
  }
  return targetComponent;
}
module.exports = hoistNonReactStatics;

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "K4DB":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP")["default"];
var assertThisInitialized = __webpack_require__("T1e2");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "L0At":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var b = "function" === typeof Symbol && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  n = b ? Symbol.for("react.forward_ref") : 60112,
  p = b ? Symbol.for("react.suspense") : 60113,
  q = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;
exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
exports.isConcurrentMode = A;
exports.isContextConsumer = function (a) {
  return z(a) === k;
};
exports.isContextProvider = function (a) {
  return z(a) === h;
};
exports.isElement = function (a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};
exports.isForwardRef = function (a) {
  return z(a) === n;
};
exports.isFragment = function (a) {
  return z(a) === e;
};
exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};
exports.isPortal = function (a) {
  return z(a) === d;
};
exports.isProfiler = function (a) {
  return z(a) === g;
};
exports.isStrictMode = function (a) {
  return z(a) === f;
};
exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
exports.typeOf = z;

/***/ }),

/***/ "MSiu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "7827e4a12b087335f60758087467afe7.webp");

/***/ }),

/***/ "NToG":
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__("nOXW");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "OvAC":
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__("nOXW");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "PE9J":
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
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "Pe5x":
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__("+IV6");
var isNativeReflectConstruct = __webpack_require__("0qAl");
var possibleConstructorReturn = __webpack_require__("K4DB");
function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return possibleConstructorReturn(this, result);
  };
}
module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return p; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function p(n) {
  return o = 1, y(B, n);
}
function y(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    r.u = !0;
    var f = r.shouldComponentUpdate;
    r.shouldComponentUpdate = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !f || f.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
    };
  }
  return o.__N || o.__;
}
function h(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, s(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "Qatm":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y3FI");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3br2");
/* harmony import */ var _routes_results_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YOMV");
/* harmony import */ var _routes_thankyou__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AZDn");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("GFNa");
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zM3l");






var App = function App() {
  return h("div", {
    id: "app"
  }, h("main", null, h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Router"], null, h(_routes_home__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    path: "/"
  }), h(_routes_thankyou__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: "/thankyou/"
  }), h(_routes_results_results__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    path: "/results/"
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "QyV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_header_logo_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fsdc");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ySiU");



var Header = function Header() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].header
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].container
  }, h(preact_router_match__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/"
  }, h("img", {
    src: _assets_header_logo_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "logo",
    width: 80,
    height: 32
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "RiSW":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("PE9J");
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
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "S411":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "SDJZ":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "T1e2":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "TP/7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EbY7");
/* harmony import */ var _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Vz2e");
/* harmony import */ var _assets_home_authorstar_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pSyp");



var Testimonial = function Testimonial() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].testimonial
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].testimonialContainer
  }, h("h3", null, "Our Clients"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].testimonialGrid
  }, h(TestimonialCard, null))));
};
/* harmony default export */ __webpack_exports__["a"] = (Testimonial);
var TestimonialCard = function TestimonialCard() {
  var data = [{
    author: 'Philip Wrigley',
    content: 'Would like to thank Ken and team for processing my visa for Canada would recommend UIS for all visa applications been hassle free.'
  }, {
    author: 'Dani Jimenez Cremers',
    content: 'Mr. Kent has been incredibly helpful and always available when I needed him. Really attentive team and I would recommend them services. '
  }, {
    author: 'Ogunniyi T.',
    content: 'UIS Canada goes in depth and explains step by step procedure. They respond when you contact them and tell you everything you need to know if there are some doubts.'
  }];
  return h(Fragment, null, data.map(function (e, i) {
    return h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].testimonialCard,
      key: i
    }, h("div", {
      class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].rating
    }, h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    }), h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    }), h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    }), h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    }), h("img", {
      src: _assets_home_star_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      alt: "img",
      width: 17,
      height: 16
    })), h("p", null, e.content), h("h4", null, h("img", {
      src: _assets_home_authorstar_webp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
      alt: "img",
      width: 26,
      height: 25
    }), " ", e.author));
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "UpPA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: useStateManager, createFilter, defaultTheme, mergeStyles, components, NonceProvider

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function objectSpread2_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
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
// EXTERNAL MODULE: ../node_modules/preact/compat/dist/compat.module.js
var compat_module = __webpack_require__("l8WD");

// CONCATENATED MODULE: ../node_modules/react-select/dist/useStateManager-7e1e8489.esm.js




var _excluded = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref) {
  var _ref$defaultInputValu = _ref.defaultInputValue,
    defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
    _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
    defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
    propsInputValue = _ref.inputValue,
    propsMenuIsOpen = _ref.menuIsOpen,
    propsOnChange = _ref.onChange,
    propsOnInputChange = _ref.onInputChange,
    propsOnMenuClose = _ref.onMenuClose,
    propsOnMenuOpen = _ref.onMenuOpen,
    propsValue = _ref.value,
    restSelectProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = Object(compat_module["useState"])(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
    _useState2 = _slicedToArray(_useState, 2),
    stateInputValue = _useState2[0],
    setStateInputValue = _useState2[1];
  var _useState3 = Object(compat_module["useState"])(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
    _useState4 = _slicedToArray(_useState3, 2),
    stateMenuIsOpen = _useState4[0],
    setStateMenuIsOpen = _useState4[1];
  var _useState5 = Object(compat_module["useState"])(propsValue !== undefined ? propsValue : defaultValue),
    _useState6 = _slicedToArray(_useState5, 2),
    stateValue = _useState6[0],
    setStateValue = _useState6[1];
  var onChange = Object(compat_module["useCallback"])(function (value, actionMeta) {
    if (typeof propsOnChange === 'function') {
      propsOnChange(value, actionMeta);
    }
    setStateValue(value);
  }, [propsOnChange]);
  var onInputChange = Object(compat_module["useCallback"])(function (value, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === 'function') {
      newValue = propsOnInputChange(value, actionMeta);
    }
    setStateInputValue(newValue !== undefined ? newValue : value);
  }, [propsOnInputChange]);
  var onMenuOpen = Object(compat_module["useCallback"])(function () {
    if (typeof propsOnMenuOpen === 'function') {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = Object(compat_module["useCallback"])(function () {
    if (typeof propsOnMenuClose === 'function') {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== undefined ? propsValue : stateValue;
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restSelectProps), {}, {
    inputValue: inputValue,
    menuIsOpen: menuIsOpen,
    onChange: onChange,
    onInputChange: onInputChange,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen,
    value: value
  });
}

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/inherits.js

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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ../node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */

  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}
var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;
    this._insertTag = function (tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (false) { var isImportRule; }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (false) {}
  };
  return StyleSheet;
}();

// CONCATENATED MODULE: ../node_modules/stylis/dist/stylis.mjs
var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var stylis_n = "comm";
var c = "rule";
var s = "decl";
var t = "@page";
var u = "@media";
var stylis_i = "@import";
var f = "@charset";
var stylis_o = "@viewport";
var l = "@supports";
var v = "@document";
var p = "@namespace";
var h = "@keyframes";
var b = "@font-face";
var w = "@counter-style";
var d = "@font-feature-values";
var $ = Math.abs;
var k = String.fromCharCode;
var g = Object.assign;
function m(e, r) {
  return C(e, 0) ^ 45 ? (((r << 2 ^ C(e, 0)) << 2 ^ C(e, 1)) << 2 ^ C(e, 2)) << 2 ^ C(e, 3) : 0;
}
function x(e) {
  return e.trim();
}
function y(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function j(e, r, a) {
  return e.replace(r, a);
}
function z(e, r) {
  return e.indexOf(r);
}
function C(e, r) {
  return e.charCodeAt(r) | 0;
}
function O(e, r, a) {
  return e.slice(r, a);
}
function A(e) {
  return e.length;
}
function M(e) {
  return e.length;
}
function S(e, r) {
  return r.push(e), e;
}
function q(e, r) {
  return e.map(r).join("");
}
var B = 1;
var D = 1;
var E = 0;
var F = 0;
var G = 0;
var H = "";
function I(e, r, a, n, c, s, t) {
  return {
    value: e,
    root: r,
    parent: a,
    type: n,
    props: c,
    children: s,
    line: B,
    column: D,
    length: t,
    return: ""
  };
}
function J(e, r) {
  return g(I("", null, null, "", null, null, 0), e, {
    length: -e.length
  }, r);
}
function K() {
  return G;
}
function L() {
  G = F > 0 ? C(H, --F) : 0;
  if (D--, G === 10) D = 1, B--;
  return G;
}
function N() {
  G = F < E ? C(H, F++) : 0;
  if (D++, G === 10) D = 1, B++;
  return G;
}
function P() {
  return C(H, F);
}
function Q() {
  return F;
}
function R(e, r) {
  return O(H, e, r);
}
function T(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function U(e) {
  return B = D = 1, E = A(H = e), F = 0, [];
}
function V(e) {
  return H = "", e;
}
function W(e) {
  return x(R(F - 1, ee(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function X(e) {
  return V(Z(U(e)));
}
function Y(e) {
  while (G = P()) if (G < 33) N();else break;
  return T(e) > 2 || T(G) > 3 ? "" : " ";
}
function Z(e) {
  while (N()) switch (T(G)) {
    case 0:
      S(ae(F - 1), e);
      break;
    case 2:
      S(W(G), e);
      break;
    default:
      S(k(G), e);
  }
  return e;
}
function _(e, r) {
  while (--r && N()) if (G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97) break;
  return R(e, Q() + (r < 6 && P() == 32 && N() == 32));
}
function ee(e) {
  while (N()) switch (G) {
    case e:
      return F;
    case 34:
    case 39:
      if (e !== 34 && e !== 39) ee(G);
      break;
    case 40:
      if (e === 41) ee(e);
      break;
    case 92:
      N();
      break;
  }
  return F;
}
function re(e, r) {
  while (N()) if (e + G === 47 + 10) break;else if (e + G === 42 + 42 && P() === 47) break;
  return "/*" + R(r, F - 1) + "*" + k(e === 47 ? e : N());
}
function ae(e) {
  while (!T(P())) N();
  return R(e, F);
}
function ne(e) {
  return V(ce("", null, null, null, [""], e = U(e), 0, [0], e));
}
function ce(e, r, a, n, c, s, t, u, i) {
  var f = 0;
  var o = 0;
  var l = t;
  var v = 0;
  var p = 0;
  var h = 0;
  var b = 1;
  var w = 1;
  var d = 1;
  var $ = 0;
  var g = "";
  var m = c;
  var x = s;
  var y = n;
  var O = g;
  while (w) switch (h = $, $ = N()) {
    case 40:
      if (h != 108 && C(O, l - 1) == 58) {
        if (z(O += j(W($), "&", "&\f"), "&\f") != -1) d = -1;
        break;
      }
    case 34:
    case 39:
    case 91:
      O += W($);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      O += Y(h);
      break;
    case 92:
      O += _(Q() - 1, 7);
      continue;
    case 47:
      switch (P()) {
        case 42:
        case 47:
          S(te(re(N(), Q()), r, a), i);
          break;
        default:
          O += "/";
      }
      break;
    case 123 * b:
      u[f++] = A(O) * d;
    case 125 * b:
    case 59:
    case 0:
      switch ($) {
        case 0:
        case 125:
          w = 0;
        case 59 + o:
          if (p > 0 && A(O) - l) S(p > 32 ? ue(O + ";", n, a, l - 1) : ue(j(O, " ", "") + ";", n, a, l - 2), i);
          break;
        case 59:
          O += ";";
        default:
          S(y = se(O, r, a, f, o, c, u, g, m = [], x = [], l), s);
          if ($ === 123) if (o === 0) ce(O, r, y, y, m, s, l, u, x);else switch (v === 99 && C(O, 3) === 110 ? 100 : v) {
            case 100:
            case 109:
            case 115:
              ce(e, y, y, n && S(se(e, y, y, 0, 0, c, u, g, c, m = [], l), x), c, x, l, u, n ? m : x);
              break;
            default:
              ce(O, y, y, y, [""], x, 0, u, x);
          }
      }
      f = o = p = 0, b = d = 1, g = O = "", l = t;
      break;
    case 58:
      l = 1 + A(O), p = h;
    default:
      if (b < 1) if ($ == 123) --b;else if ($ == 125 && b++ == 0 && L() == 125) continue;
      switch (O += k($), $ * b) {
        case 38:
          d = o > 0 ? 1 : (O += "\f", -1);
          break;
        case 44:
          u[f++] = (A(O) - 1) * d, d = 1;
          break;
        case 64:
          if (P() === 45) O += W(N());
          v = P(), o = l = A(g = O += ae(Q())), $++;
          break;
        case 45:
          if (h === 45 && A(O) == 2) b = 0;
      }
  }
  return s;
}
function se(e, r, a, n, s, t, u, i, f, o, l) {
  var v = s - 1;
  var p = s === 0 ? t : [""];
  var h = M(p);
  for (var b = 0, w = 0, d = 0; b < n; ++b) for (var k = 0, g = O(e, v + 1, v = $(w = u[b])), m = e; k < h; ++k) if (m = x(w > 0 ? p[k] + " " + g : j(g, /&\f/g, p[k]))) f[d++] = m;
  return I(e, r, a, s === 0 ? c : i, f, o, l);
}
function te(e, r, a) {
  return I(e, r, a, stylis_n, k(K()), O(e, 2, -2), 0);
}
function ue(e, r, a, n) {
  return I(e, r, a, s, O(e, 0, n), O(e, n + 1, -1), n);
}
function ie(n, c, s) {
  switch (m(n, c)) {
    case 5103:
      return a + "print-" + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + n + n;
    case 4789:
      return r + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + n + r + n + e + n + n;
    case 5936:
      switch (C(n, c + 11)) {
        case 114:
          return a + n + e + j(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return a + n + e + j(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return a + n + e + j(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    case 6828:
    case 4268:
    case 2903:
      return a + n + e + n + n;
    case 6165:
      return a + n + e + "flex-" + n + n;
    case 5187:
      return a + n + j(n, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + n;
    case 5443:
      return a + n + e + "flex-item-" + j(n, /flex-|-self/g, "") + (!y(n, /flex-|baseline/) ? e + "grid-row-" + j(n, /flex-|-self/g, "") : "") + n;
    case 4675:
      return a + n + e + "flex-line-pack" + j(n, /align-content|flex-|-self/g, "") + n;
    case 5548:
      return a + n + e + j(n, "shrink", "negative") + n;
    case 5292:
      return a + n + e + j(n, "basis", "preferred-size") + n;
    case 6060:
      return a + "box-" + j(n, "-grow", "") + a + n + e + j(n, "grow", "positive") + n;
    case 4554:
      return a + j(n, /([^-])(transform)/g, "$1" + a + "$2") + n;
    case 6187:
      return j(j(j(n, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), n, "") + n;
    case 5495:
    case 3959:
      return j(n, /(image-set\([^]*)/, a + "$1" + "$`$1");
    case 4968:
      return j(j(n, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + n + n;
    case 4200:
      if (!y(n, /flex-|baseline/)) return e + "grid-column-align" + O(n, c) + n;
      break;
    case 2592:
    case 3360:
      return e + j(n, "template-", "") + n;
    case 4384:
    case 3616:
      if (s && s.some(function (e, r) {
        return c = r, y(e.props, /grid-\w+-end/);
      })) {
        return ~z(n + (s = s[c].value), "span") ? n : e + j(n, "-start", "") + n + e + "grid-row-span:" + (~z(s, "span") ? y(s, /\d+/) : +y(s, /\d+/) - +y(n, /\d+/)) + ";";
      }
      return e + j(n, "-start", "") + n;
    case 4896:
    case 4128:
      return s && s.some(function (e) {
        return y(e.props, /grid-\w+-start/);
      }) ? n : e + j(j(n, "-end", "-span"), "span ", "") + n;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(n, /(.+)-inline(.+)/, a + "$1$2") + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A(n) - 1 - c > 6) switch (C(n, c + 1)) {
        case 109:
          if (C(n, c + 4) !== 45) break;
        case 102:
          return j(n, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (C(n, c + 3) == 108 ? "$3" : "$2-$3")) + n;
        case 115:
          return ~z(n, "stretch") ? ie(j(n, "stretch", "fill-available"), c, s) + n : n;
      }
      break;
    case 5152:
    case 5920:
      return j(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (r, a, c, s, t, u, i) {
        return e + a + ":" + c + i + (s ? e + a + "-span:" + (t ? u : +u - +c) + i : "") + n;
      });
    case 4949:
      if (C(n, c + 6) === 121) return j(n, ":", ":" + a) + n;
      break;
    case 6444:
      switch (C(n, C(n, 14) === 45 ? 18 : 11)) {
        case 120:
          return j(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + a + (C(n, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + n;
        case 100:
          return j(n, ":", ":" + e) + n;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return j(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function fe(e, r) {
  var a = "";
  var n = M(e);
  for (var c = 0; c < n; c++) a += r(e[c], c, e, r) || "";
  return a;
}
function oe(e, r, a, t) {
  switch (e.type) {
    case stylis_i:
    case s:
      return e.return = e.return || e.value;
    case stylis_n:
      return "";
    case h:
      return e.return = e.value + "{" + fe(e.children, t) + "}";
    case c:
      e.value = e.props.join(",");
  }
  return A(a = fe(e.children, t)) ? e.return = e.value + "{" + a + "}" : "";
}
function le(e) {
  var r = M(e);
  return function (a, n, c, s) {
    var t = "";
    for (var u = 0; u < r; u++) t += e[u](a, n, c, s) || "";
    return t;
  };
}
function ve(e) {
  return function (r) {
    if (!r.root) if (r = r.return) e(r);
  };
}
function pe(n, t, u, i) {
  if (n.length > -1) if (!n.return) switch (n.type) {
    case s:
      n.return = ie(n.value, n.length, u);
      return;
    case h:
      return fe([J(n, {
        value: j(n.value, "@", "@" + a)
      })], i);
    case c:
      if (n.length) return q(n.props, function (c) {
        switch (y(c, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return fe([J(n, {
              props: [j(c, /:(read-\w+)/, ":" + r + "$1")]
            })], i);
          case "::placeholder":
            return fe([J(n, {
              props: [j(c, /:(plac\w+)/, ":" + a + "input-$1")]
            }), J(n, {
              props: [j(c, /:(plac\w+)/, ":" + r + "$1")]
            }), J(n, {
              props: [j(c, /:(plac\w+)/, e + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}
function he(e) {
  switch (e.type) {
    case c:
      e.props = e.props.map(function (r) {
        return q(X(r), function (r, a, n) {
          switch (C(r, 0)) {
            case 12:
              return O(r, 1, A(r));
            case 0:
            case 40:
            case 43:
            case 62:
            case 126:
              return r;
            case 58:
              if (n[++a] === "global") n[a] = "", n[++a] = "\f" + O(n[a], a = 1, -1);
            case 32:
              return a === 1 ? "" : r;
            default:
              switch (a) {
                case 0:
                  e = r;
                  return M(n) > 1 ? "" : r;
                case a = M(n) - 1:
                case 2:
                  return a === 2 ? r + e + e : r + e;
                default:
                  return r;
              }
          }
        });
      });
  }
}

// CONCATENATED MODULE: ../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
/* harmony default export */ var emotion_weak_memoize_esm = (weakMemoize);
// CONCATENATED MODULE: ../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}
/* harmony default export */ var emotion_memoize_esm = (memoize);
// CONCATENATED MODULE: ../node_modules/@emotion/cache/dist/emotion-cache.esm.js




var emotion_cache_esm_identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = P(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (T(character)) {
      break;
    }
    N();
  }
  return R(begin, F);
};
var emotion_cache_esm_toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;
  do {
    switch (T(character)) {
      case 0:
        // &\f
        if (character === 38 && P() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }
        parsed[index] += emotion_cache_esm_identifierWithPointTracking(F - 1, points, index);
        break;
      case 2:
        parsed[index] += W(character);
        break;
      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = P() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += k(character);
    }
  } while (character = N());
  return parsed;
};
var emotion_cache_esm_getRules = function getRules(value, points) {
  return V(emotion_cache_esm_toRules(U(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent ||
  // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value,
    parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case

  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */ && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = emotion_cache_esm_getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;
    if (
    // charcode for l
    value.charCodeAt(0) === 108 &&
    // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = element.parent === children[0]; // in nested rules comments become children of the "auto-inserted" rule
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? children[0].children :
      // global rule at the root level
      children;
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];
        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version

        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};
var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user

var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (m(value, length)) {
    // color-adjust
    case 5103:
      return a + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + value + r + value + e + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return a + value + e + value + value;
    // order

    case 6165:
      return a + value + e + 'flex-' + value + value;
    // align-items

    case 5187:
      return a + value + j(value, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return a + value + e + 'flex-item-' + j(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return a + value + e + 'flex-line-pack' + j(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return a + value + e + j(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return a + value + e + j(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return a + 'box-' + j(value, '-grow', '') + a + value + e + j(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return a + j(value, /([^-])(transform)/g, '$1' + a + '$2') + value;
    // cursor

    case 6187:
      return j(j(j(value, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return j(value, /(image-set\([^]*)/, a + '$1' + '$`$1');
    // justify-content

    case 4968:
      return j(j(value, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + a + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(value, /(.+)-inline(.+)/, a + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (A(value) - 1 - length > 6) switch (C(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (C(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return j(value, /(.+:)(.+)-([^]+)/, '$1' + a + '$2-$3' + '$1' + r + (C(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~z(value, 'stretch') ? prefix(j(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (C(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (C(value, A(value) - 3 - (~z(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return j(value, ':', ':' + a) + value;
        // (inline-)?fl(e)x

        case 101:
          return j(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + a + (C(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + a + '$2$3' + '$1' + e + '$2box$3') + value;
      }
      break;
    // writing-mode

    case 5936:
      switch (C(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }
      return a + value + e + value + value;
  }
  return value;
}
var emotion_cache_esm_prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case s:
      element["return"] = prefix(element.value, element.length);
      break;
    case h:
      return fe([J(element, {
        value: j(element.value, '@', '@' + a)
      })], callback);
    case c:
      if (element.length) return q(element.props, function (value) {
        switch (y(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return fe([J(element, {
              props: [j(value, /:(read-\w+)/, ':' + r + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return fe([J(element, {
              props: [j(value, /:(plac\w+)/, ':' + a + 'input-$1')]
            }), J(element, {
              props: [j(value, /:(plac\w+)/, ':' + r + '$1')]
            }), J(element, {
              props: [j(value, /:(plac\w+)/, e + 'input-$1')]
            })], callback);
        }
        return '';
      });
  }
};
var isBrowser = typeof document !== 'undefined';
var getServerStylisCache = isBrowser ? undefined : emotion_weak_memoize_esm(function () {
  return emotion_memoize_esm(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [emotion_cache_esm_prefixer];
var emotion_cache_esm_createCache = function createCache(options) {
  var key = options.key;
  if (false) {}
  if (isBrowser && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');
      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (false) {}
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (false) {}
  if (isBrowser) {
    var currentSheet;
    var finalizingPlugins = [oe,  false ? undefined : ve(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = le(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
      return fe(ne(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (false) {}
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [oe];
    var _serializer = le(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis(styles) {
      return fe(ne(styles), _serializer);
    }; // $FlowFixMe

    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);
      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        if (
        // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        false) {}
        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
/* harmony default export */ var emotion_cache_esm = (emotion_cache_esm_createCache);
// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__("GeWT");
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ../node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var emotion_react_isolated_hnrs_esm_hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent) {
  return hoist_non_react_statics_cjs_default()(targetComponent, sourceComponent);
};
/* harmony default export */ var emotion_react_isolated_hnrs_esm = (emotion_react_isolated_hnrs_esm_hoistNonReactStatics);
// CONCATENATED MODULE: ../node_modules/@emotion/utils/dist/emotion-utils.esm.js
var emotion_utils_esm_isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false ||
  // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  emotion_utils_esm_isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
      if (!emotion_utils_esm_isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== undefined);
    if (!emotion_utils_esm_isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

// CONCATENATED MODULE: ../node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
/* harmony default export */ var emotion_hash_esm = (murmur2);
// CONCATENATED MODULE: ../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ var emotion_unitless_esm = (unitlessKeys);
// CONCATENATED MODULE: ../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
function emotion_serialize_esm_typeof(obj) { "@babel/helpers - typeof"; return emotion_serialize_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, emotion_serialize_esm_typeof(obj); }



var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */emotion_memoize_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var emotion_serialize_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }
  if (emotion_unitless_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }
var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}
    return interpolation;
  }
  switch (emotion_serialize_esm_typeof(interpolation)) {
    case 'boolean':
      {
        return '';
      }
    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== undefined) {
          var next = interpolation.next;
          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (false) {}
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (false) {}
        break;
      }
    case 'string':
      if (false) { var replaced, matched; }
      break;
  } // finalize string values (regular strings and functions interpolated into css calls)

  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (emotion_serialize_esm_typeof(value) !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + emotion_serialize_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + emotion_serialize_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
            default:
              {
                if (false) {}
                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
var emotion_serialize_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && emotion_serialize_esm_typeof(args[0]) === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];
  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (false) {}
    styles += strings[0];
  } // we start at 1 since we've already handled the first arg

  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      if (false) {}
      styles += strings[i];
    }
  }
  var sourceMap;
  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time

  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' +
    // $FlowFixMe we know it's not null
    match[1];
  }
  var name = emotion_hash_esm(styles) + identifierName;
  if (false) {}
  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

// CONCATENATED MODULE: ../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js


var emotion_use_insertion_effect_with_fallbacks_esm_isBrowser = typeof document !== 'undefined';
var syncFallback = function syncFallback(create) {
  return create();
};
var useInsertionEffect = compat_module['useInsertion' + 'Effect'] ? compat_module['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = !emotion_use_insertion_effect_with_fallbacks_esm_isBrowser ? syncFallback : useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || compat_module["useLayoutEffect"];

// CONCATENATED MODULE: ../node_modules/@emotion/react/dist/emotion-element-3838ba9e.esm.js
function emotion_element_3838ba9e_esm_typeof(obj) { "@babel/helpers - typeof"; return emotion_element_3838ba9e_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, emotion_element_3838ba9e_esm_typeof(obj); }








var emotion_element_3838ba9e_esm_isBrowser = typeof document !== 'undefined';
var emotion_element_3838ba9e_esm_hasOwnProperty = {}.hasOwnProperty;
var EmotionCacheContext = /* #__PURE__ */Object(compat_module["createContext"])(
// we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */emotion_cache_esm({
  key: 'css'
}) : null);
if (false) {}
var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return Object(compat_module["useContext"])(EmotionCacheContext);
};
var emotion_element_3838ba9e_esm_withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/Object(compat_module["forwardRef"])(function (props, ref) {
    // the cache will never be null in the browser
    var cache = Object(compat_module["useContext"])(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
if (!emotion_element_3838ba9e_esm_isBrowser) {
  emotion_element_3838ba9e_esm_withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = Object(compat_module["useContext"])(EmotionCacheContext);
      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = emotion_cache_esm({
          key: 'css'
        });
        return /*#__PURE__*/Object(compat_module["createElement"])(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}
var ThemeContext = /* #__PURE__ */Object(compat_module["createContext"])({});
if (false) {}
var emotion_element_3838ba9e_esm_useTheme = function useTheme() {
  return Object(compat_module["useContext"])(ThemeContext);
};
var emotion_element_3838ba9e_esm_getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);
    if (false) {}
    return mergedTheme;
  }
  if (false) {}
  return _extends({}, outerTheme, theme);
};
var createCacheWithTheme = /* #__PURE__ */emotion_weak_memoize_esm(function (outerTheme) {
  return emotion_weak_memoize_esm(function (theme) {
    return emotion_element_3838ba9e_esm_getTheme(outerTheme, theme);
  });
});
var emotion_element_3838ba9e_esm_ThemeProvider = function ThemeProvider(props) {
  var theme = Object(compat_module["useContext"])(ThemeContext);
  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }
  return /*#__PURE__*/Object(compat_module["createElement"])(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';
  var render = function render(props, ref) {
    var theme = Object(compat_module["useContext"])(ThemeContext);
    return /*#__PURE__*/Object(compat_module["createElement"])(Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe

  var WithTheme = /*#__PURE__*/Object(compat_module["forwardRef"])(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return emotion_react_isolated_hnrs_esm(WithTheme, Component);
}
var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};
var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};
var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }
  return undefined;
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}
  var newProps = {};
  for (var key in props) {
    if (emotion_element_3838ba9e_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (false) { var label; }
  return newProps;
};
var emotion_element_3838ba9e_esm_Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
    serialized = _ref.serialized,
    isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!emotion_element_3838ba9e_esm_isBrowser && rules !== undefined) {
    var _ref2;
    var serializedNames = serialized.name;
    var next = serialized.next;
    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }
    return /*#__PURE__*/Object(compat_module["createElement"])("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var Emotion = /* #__PURE__ */emotion_element_3838ba9e_esm_withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';
  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = emotion_serialize_esm_serializeStyles(registeredStyles, undefined, Object(compat_module["useContext"])(ThemeContext));
  if (false) { var labelFromStack; }
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (emotion_element_3838ba9e_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || false)) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/Object(compat_module["createElement"])(compat_module["Fragment"], null, /*#__PURE__*/Object(compat_module["createElement"])(emotion_element_3838ba9e_esm_Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/Object(compat_module["createElement"])(WrappedComponent, newProps));
});
if (false) {}

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");

// CONCATENATED MODULE: ../node_modules/@emotion/react/dist/emotion-react.esm.js
function emotion_react_esm_typeof(obj) { "@babel/helpers - typeof"; return emotion_react_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, emotion_react_esm_typeof(obj); }











var pkg = {
  name: "@emotion/react",
  version: "11.10.5",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        "default": "./dist/emotion-react.esm.js"
      },
      "default": "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": "./macro.js"
  },
  types: "types/index.d.ts",
  files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.js", "macro.d.ts", "macro.js.flow"],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.10.5",
    "@emotion/cache": "^11.10.5",
    "@emotion/serialize": "^1.1.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
    "@emotion/utils": "^1.2.0",
    "@emotion/weak-memoize": "^0.3.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: true
    },
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@babel/core": "^7.18.5",
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.10.5",
    "@emotion/css-prettifier": "1.1.1",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.5",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"],
    umdName: "emotionReact",
    exports: {
      envConditions: ["browser", "worker"],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      }
    }
  }
};
var emotion_react_esm_jsx = function jsx(type, props) {
  var args = arguments;
  if (props == null || !emotion_element_3838ba9e_esm_hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return compat_module["createElement"].apply(undefined, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe

  return compat_module["createElement"].apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */emotion_element_3838ba9e_esm_withEmotionCache(function (props, cache) {
  if (false) {}
  var styles = props.styles;
  var serialized = emotion_serialize_esm_serializeStyles([styles], undefined, Object(compat_module["useContext"])(ThemeContext));
  if (!emotion_element_3838ba9e_esm_isBrowser) {
    var _ref;
    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;
    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }
    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);
    if (shouldCache) {
      return null;
    }
    return /*#__PURE__*/Object(compat_module["createElement"])("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything

  var sheetRef = Object(compat_module["useRef"])();
  useInsertionEffectWithLayoutFallback(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
      rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
if (false) {}
function emotion_react_esm_css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return emotion_serialize_esm_serializeStyles(args);
}
var keyframes = function keyframes() {
  var insertable = emotion_react_esm_css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (emotion_react_esm_typeof(arg)) {
      case 'boolean':
        break;
      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (false) {}
            toAdd = '';
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }
          break;
        }
      default:
        {
          toAdd = arg;
        }
    }
    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}
var emotion_react_esm_Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
    serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    var rules = '';
    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles(cache, serializedArr[i], false);
      if (!emotion_element_3838ba9e_esm_isBrowser && res !== undefined) {
        rules += res;
      }
    }
    if (!emotion_element_3838ba9e_esm_isBrowser) {
      return rules;
    }
  });
  if (!emotion_element_3838ba9e_esm_isBrowser && rules.length !== 0) {
    var _ref2;
    return /*#__PURE__*/Object(compat_module["createElement"])("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function (serialized) {
      return serialized.name;
    }).join(' '), _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var ClassNames = /* #__PURE__ */emotion_element_3838ba9e_esm_withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css = function css() {
    if (hasRendered && "production" !== 'production') {
      throw new Error('css can only be used during render');
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = emotion_serialize_esm_serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {
      throw new Error('cx can only be used during render');
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css, classnames(args));
  };
  var content = {
    css: css,
    cx: cx,
    theme: Object(compat_module["useContext"])(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/Object(compat_module["createElement"])(compat_module["Fragment"], null, /*#__PURE__*/Object(compat_module["createElement"])(emotion_react_esm_Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});
if (false) {}
if (false) { var globalKey, globalContext, isTestEnv, emotion_react_esm_isBrowser; }

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
// CONCATENATED MODULE: ../node_modules/@floating-ui/core/dist/floating-ui.core.esm.js
var floating_ui_core_esm_excluded = ["crossAxis", "alignment", "allowedPlacements", "autoAlignment"],
  _excluded2 = ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"],
  _excluded3 = ["strategy"],
  _excluded4 = ["mainAxis", "crossAxis", "limiter"],
  _excluded5 = ["apply"];
function floating_ui_core_esm_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = floating_ui_core_esm_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function floating_ui_core_esm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function floating_ui_core_esm_toConsumableArray(arr) { return floating_ui_core_esm_arrayWithoutHoles(arr) || floating_ui_core_esm_iterableToArray(arr) || floating_ui_core_esm_unsupportedIterableToArray(arr) || floating_ui_core_esm_nonIterableSpread(); }
function floating_ui_core_esm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function floating_ui_core_esm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return floating_ui_core_esm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return floating_ui_core_esm_arrayLikeToArray(o, minLen); }
function floating_ui_core_esm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function floating_ui_core_esm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return floating_ui_core_esm_arrayLikeToArray(arr); }
function floating_ui_core_esm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function floating_ui_core_esm_typeof(obj) { "@babel/helpers - typeof"; return floating_ui_core_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, floating_ui_core_esm_typeof(obj); }
function floating_ui_core_esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? floating_ui_core_esm_ownKeys(Object(source), !0).forEach(function (key) { floating_ui_core_esm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : floating_ui_core_esm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function floating_ui_core_esm_defineProperty(obj, key, value) { key = floating_ui_core_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function floating_ui_core_esm_toPropertyKey(arg) { var key = floating_ui_core_esm_toPrimitive(arg, "string"); return floating_ui_core_esm_typeof(key) === "symbol" ? key : String(key); }
function floating_ui_core_esm_toPrimitive(input, hint) { if (floating_ui_core_esm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (floating_ui_core_esm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  var reference = _ref.reference,
    floating = _ref.floating;
  var commonX = reference.x + reference.width / 2 - floating.width / 2;
  var commonY = reference.y + reference.height / 2 - floating.height / 2;
  var mainAxis = getMainAxisFromPlacement(placement);
  var length = getLengthFromAxis(mainAxis);
  var commonAlign = reference[length] / 2 - floating[length] / 2;
  var side = getSide(placement);
  var isVertical = mainAxis === 'x';
  var coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
var floating_ui_core_esm_computePosition = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (reference, floating, config) {
    var _config$placement = config.placement,
      placement = _config$placement === void 0 ? 'bottom' : _config$placement,
      _config$strategy = config.strategy,
      strategy = _config$strategy === void 0 ? 'absolute' : _config$strategy,
      _config$middleware = config.middleware,
      middleware = _config$middleware === void 0 ? [] : _config$middleware,
      platform = config.platform;
    var validMiddleware = middleware.filter(Boolean);
    var rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(floating);
    if (false) {}
    var rects = yield platform.getElementRects({
      reference: reference,
      floating: floating,
      strategy: strategy
    });
    var _computeCoordsFromPla = computeCoordsFromPlacement(rects, placement, rtl),
      x = _computeCoordsFromPla.x,
      y = _computeCoordsFromPla.y;
    var statefulPlacement = placement;
    var middlewareData = {};
    var resetCount = 0;
    for (var i = 0; i < validMiddleware.length; i++) {
      var _validMiddleware$i = validMiddleware[i],
        name = _validMiddleware$i.name,
        fn = _validMiddleware$i.fn;
      var _yield$fn = yield fn({
          x: x,
          y: y,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy: strategy,
          middlewareData: middlewareData,
          rects: rects,
          platform: platform,
          elements: {
            reference: reference,
            floating: floating
          }
        }),
        nextX = _yield$fn.x,
        nextY = _yield$fn.y,
        data = _yield$fn.data,
        reset = _yield$fn.reset;
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = _objectSpread(_objectSpread({}, middlewareData), {}, floating_ui_core_esm_defineProperty({}, name, _objectSpread(_objectSpread({}, middlewareData[name]), data)));
      if (false) {}
      if (reset && resetCount <= 50) {
        resetCount++;
        if (floating_ui_core_esm_typeof(reset) === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? yield platform.getElementRects({
              reference: reference,
              floating: floating,
              strategy: strategy
            }) : reset.rects;
          }
          var _computeCoordsFromPla2 = computeCoordsFromPlacement(rects, statefulPlacement, rtl);
          x = _computeCoordsFromPla2.x;
          y = _computeCoordsFromPla2.y;
        }
        i = -1;
        continue;
      }
    }
    return {
      x: x,
      y: y,
      placement: statefulPlacement,
      strategy: strategy,
      middlewareData: middlewareData
    };
  });
  return function computePosition(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
function expandPaddingObject(padding) {
  return _objectSpread({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return _objectSpread(_objectSpread({}, rect), {}, {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
function detectOverflow(_x4, _x5) {
  return _detectOverflow.apply(this, arguments);
}
function _detectOverflow() {
  _detectOverflow = _asyncToGenerator(function* (middlewareArguments, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    var x = middlewareArguments.x,
      y = middlewareArguments.y,
      platform = middlewareArguments.platform,
      rects = middlewareArguments.rects,
      elements = middlewareArguments.elements,
      strategy = middlewareArguments.strategy;
    var _options8 = options,
      _options8$boundary = _options8.boundary,
      boundary = _options8$boundary === void 0 ? 'clippingAncestors' : _options8$boundary,
      _options8$rootBoundar = _options8.rootBoundary,
      rootBoundary = _options8$rootBoundar === void 0 ? 'viewport' : _options8$rootBoundar,
      _options8$elementCont = _options8.elementContext,
      elementContext = _options8$elementCont === void 0 ? 'floating' : _options8$elementCont,
      _options8$altBoundary = _options8.altBoundary,
      altBoundary = _options8$altBoundary === void 0 ? false : _options8$altBoundary,
      _options8$padding = _options8.padding,
      padding = _options8$padding === void 0 ? 0 : _options8$padding;
    var paddingObject = getSideObjectFromPadding(padding);
    var altContext = elementContext === 'floating' ? 'reference' : 'floating';
    var element = elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = rectToClientRect(yield platform.getClippingRect({
      element: ((_await$platform$isEle = yield platform.isElement == null ? void 0 : platform.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
      boundary: boundary,
      rootBoundary: rootBoundary,
      strategy: strategy
    }));
    var rect = elementContext === 'floating' ? _objectSpread(_objectSpread({}, rects.floating), {}, {
      x: x,
      y: y
    }) : rects.reference;
    var offsetParent = yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating);
    var offsetScale = (yield platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? (yield platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    var elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: rect,
      offsetParent: offsetParent,
      strategy: strategy
    }) : rect);
    if (false) {}
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
  return _detectOverflow.apply(this, arguments);
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

/**
 * A data provider that provides data to position an inner element of the
 * floating element (usually a triangle or caret) so that it is centered to the
 * reference element.
 * @see https://floating-ui.com/docs/arrow
 */
var arrow = function arrow(options) {
  return {
    name: 'arrow',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _data, _ref4;
        // Since `element` is required, we don't Partial<> the type.
        var _ref3 = options || {},
          element = _ref3.element,
          _ref3$padding = _ref3.padding,
          padding = _ref3$padding === void 0 ? 0 : _ref3$padding;
        var x = middlewareArguments.x,
          y = middlewareArguments.y,
          placement = middlewareArguments.placement,
          rects = middlewareArguments.rects,
          platform = middlewareArguments.platform;
        if (element == null) {
          if (false) {}
          return {};
        }
        var paddingObject = getSideObjectFromPadding(padding);
        var coords = {
          x: x,
          y: y
        };
        var axis = getMainAxisFromPlacement(placement);
        var length = getLengthFromAxis(axis);
        var arrowDimensions = yield platform.getDimensions(element);
        var minProp = axis === 'y' ? 'top' : 'left';
        var maxProp = axis === 'y' ? 'bottom' : 'right';
        var endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        var startDiff = coords[axis] - rects.reference[axis];
        var arrowOffsetParent = yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element);
        var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        if (clientSize === 0) {
          clientSize = rects.floating[length];
        }
        var centerToReference = endDiff / 2 - startDiff / 2;

        // Make sure the arrow doesn't overflow the floating element if the center
        // point is outside the floating element's bounds.
        var min = paddingObject[minProp];
        var max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        var offset = within(min, center, max);

        // If the reference is small enough that the arrow's padding causes it to
        // to point to nothing for an aligned placement, adjust the offset of the
        // floating element itself. This stops `shift()` from taking action, but can
        // be worked around by calling it again after the `arrow()` if desired.
        var shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
        var alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
        return _ref4 = {}, floating_ui_core_esm_defineProperty(_ref4, axis, coords[axis] - alignmentOffset), floating_ui_core_esm_defineProperty(_ref4, "data", (_data = {}, floating_ui_core_esm_defineProperty(_data, axis, offset), floating_ui_core_esm_defineProperty(_data, "centerOffset", center - offset), _data)), _ref4;
      })();
    }
  };
};
var sides = ['top', 'right', 'bottom', 'left'];
var allPlacements = /*#__PURE__*/sides.reduce(function (acc, side) {
  return acc.concat(side, side + "-start", side + "-end");
}, []);
var oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (side) {
    return oppositeSideMap[side];
  });
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  var alignment = getAlignment(placement);
  var mainAxis = getMainAxisFromPlacement(placement);
  var length = getLengthFromAxis(mainAxis);
  var mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, function (alignment) {
    return oppositeAlignmentMap[alignment];
  });
}
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  var allowedPlacementsSortedByAlignment = alignment ? [].concat(floating_ui_core_esm_toConsumableArray(allowedPlacements.filter(function (placement) {
    return getAlignment(placement) === alignment;
  })), floating_ui_core_esm_toConsumableArray(allowedPlacements.filter(function (placement) {
    return getAlignment(placement) !== alignment;
  }))) : allowedPlacements.filter(function (placement) {
    return getSide(placement) === placement;
  });
  return allowedPlacementsSortedByAlignment.filter(function (placement) {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Automatically chooses the `placement` which has the most space available.
 * @see https://floating-ui.com/docs/autoPlacement
 */
var autoPlacement = function autoPlacement(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
        var rects = middlewareArguments.rects,
          middlewareData = middlewareArguments.middlewareData,
          placement = middlewareArguments.placement,
          platform = middlewareArguments.platform,
          elements = middlewareArguments.elements;
        var _options = options,
          _options$crossAxis = _options.crossAxis,
          crossAxis = _options$crossAxis === void 0 ? false : _options$crossAxis,
          alignment = _options.alignment,
          _options$allowedPlace = _options.allowedPlacements,
          allowedPlacements = _options$allowedPlace === void 0 ? allPlacements : _options$allowedPlace,
          _options$autoAlignmen = _options.autoAlignment,
          autoAlignment = _options$autoAlignmen === void 0 ? true : _options$autoAlignmen,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options, floating_ui_core_esm_excluded);
        var placements = alignment !== undefined || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
        var overflow = yield detectOverflow(middlewareArguments, detectOverflowOptions);
        var currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
        var currentPlacement = placements[currentIndex];
        if (currentPlacement == null) {
          return {};
        }
        var _getAlignmentSides = getAlignmentSides(currentPlacement, rects, yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)),
          main = _getAlignmentSides.main,
          cross = _getAlignmentSides.cross;

        // Make `computeCoords` start from the right place.
        if (placement !== currentPlacement) {
          return {
            reset: {
              placement: placements[0]
            }
          };
        }
        var currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
        var allOverflows = [].concat(floating_ui_core_esm_toConsumableArray(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), [{
          placement: currentPlacement,
          overflows: currentOverflows
        }]);
        var nextPlacement = placements[currentIndex + 1];

        // There are more placements to check.
        if (nextPlacement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        var placementsSortedByMostSpace = allOverflows.map(function (d) {
          var alignment = getAlignment(d.placement);
          return [d.placement, alignment && crossAxis ?
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce(function (acc, v) {
            return acc + v;
          }, 0) :
          // Check only the mainAxis.
          d.overflows[0], d.overflows];
        }).sort(function (a, b) {
          return a[1] - b[1];
        });
        var placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(function (d) {
          return d[2].slice(0,
          // Aligned placements should not check their opposite crossAxis
          // side.
          getAlignment(d[0]) ? 2 : 3).every(function (v) {
            return v <= 0;
          });
        });
        var resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
        if (resetPlacement !== placement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: resetPlacement
            }
          };
        }
        return {};
      })();
    }
  };
};
function getExpandedPlacements(placement) {
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  var lr = ['left', 'right'];
  var rl = ['right', 'left'];
  var tb = ['top', 'bottom'];
  var bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  var alignment = getAlignment(placement);
  var list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(function (side) {
      return side + "-" + alignment;
    });
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * A visibility optimizer that changes the placement of the floating element in
 * order to keep it in view. By default, only the opposite placement is tried.
 *
 * It has the ability to flip to any placement, not just the opposite one. You
 * can use a series of “fallback” placements, where each placement is
 * progressively tried until the one that fits can be used.
 * @see https://floating-ui.com/docs/flip
 */
var flip = function flip(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _middlewareData$flip;
        var placement = middlewareArguments.placement,
          middlewareData = middlewareArguments.middlewareData,
          rects = middlewareArguments.rects,
          initialPlacement = middlewareArguments.initialPlacement,
          platform = middlewareArguments.platform,
          elements = middlewareArguments.elements;
        var _options2 = options,
          _options2$mainAxis = _options2.mainAxis,
          checkMainAxis = _options2$mainAxis === void 0 ? true : _options2$mainAxis,
          _options2$crossAxis = _options2.crossAxis,
          checkCrossAxis = _options2$crossAxis === void 0 ? true : _options2$crossAxis,
          specifiedFallbackPlacements = _options2.fallbackPlacements,
          _options2$fallbackStr = _options2.fallbackStrategy,
          fallbackStrategy = _options2$fallbackStr === void 0 ? 'bestFit' : _options2$fallbackStr,
          _options2$fallbackAxi = _options2.fallbackAxisSideDirection,
          fallbackAxisSideDirection = _options2$fallbackAxi === void 0 ? 'none' : _options2$fallbackAxi,
          _options2$flipAlignme = _options2.flipAlignment,
          flipAlignment = _options2$flipAlignme === void 0 ? true : _options2$flipAlignme,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options2, _excluded2);
        var side = getSide(placement);
        var isBasePlacement = getSide(initialPlacement) === initialPlacement;
        var rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push.apply(fallbackPlacements, floating_ui_core_esm_toConsumableArray(getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl)));
        }
        var placements = [initialPlacement].concat(floating_ui_core_esm_toConsumableArray(fallbackPlacements));
        var overflow = yield detectOverflow(middlewareArguments, detectOverflowOptions);
        var overflows = [];
        var overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          var _getAlignmentSides2 = getAlignmentSides(placement, rects, rtl),
            main = _getAlignmentSides2.main,
            cross = _getAlignmentSides2.cross;
          overflows.push(overflow[main], overflow[cross]);
        }
        overflowsData = [].concat(floating_ui_core_esm_toConsumableArray(overflowsData), [{
          placement: placement,
          overflows: overflows
        }]);

        // One or more sides is overflowing.
        if (!overflows.every(function (side) {
          return side <= 0;
        })) {
          var _middlewareData$flip2, _overflowsData$filter;
          var nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          var nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          var resetPlacement = (_overflowsData$filter = overflowsData.filter(function (d) {
            return d.overflows[0] <= 0;
          }).sort(function (a, b) {
            return a.overflows[1] - b.overflows[1];
          })[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
                {
                  var _overflowsData$map$so;
                  var _placement = (_overflowsData$map$so = overflowsData.map(function (d) {
                    return [d.placement, d.overflows.filter(function (overflow) {
                      return overflow > 0;
                    }).reduce(function (acc, overflow) {
                      return acc + overflow;
                    }, 0)];
                  }).sort(function (a, b) {
                    return a[1] - b[1];
                  })[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (_placement) {
                    resetPlacement = _placement;
                  }
                  break;
                }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      })();
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(function (side) {
    return overflow[side] >= 0;
  });
}
/**
 * A data provider that allows you to hide the floating element in applicable
 * situations, usually when it’s not within the same clipping context as the
 * reference element.
 * @see https://floating-ui.com/docs/hide
 */
var hide = function hide(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _options3 = options,
          _options3$strategy = _options3.strategy,
          strategy = _options3$strategy === void 0 ? 'referenceHidden' : _options3$strategy,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options3, _excluded3);
        var rects = middlewareArguments.rects;
        switch (strategy) {
          case 'referenceHidden':
            {
              var overflow = yield detectOverflow(middlewareArguments, _objectSpread(_objectSpread({}, detectOverflowOptions), {}, {
                elementContext: 'reference'
              }));
              var offsets = getSideOffsets(overflow, rects.reference);
              return {
                data: {
                  referenceHiddenOffsets: offsets,
                  referenceHidden: isAnySideFullyClipped(offsets)
                }
              };
            }
          case 'escaped':
            {
              var _overflow = yield detectOverflow(middlewareArguments, _objectSpread(_objectSpread({}, detectOverflowOptions), {}, {
                altBoundary: true
              }));
              var _offsets = getSideOffsets(_overflow, rects.floating);
              return {
                data: {
                  escapedOffsets: _offsets,
                  escaped: isAnySideFullyClipped(_offsets)
                }
              };
            }
          default:
            {
              return {};
            }
        }
      })();
    }
  };
};

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
var inline = function inline(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var placement = middlewareArguments.placement,
          elements = middlewareArguments.elements,
          rects = middlewareArguments.rects,
          platform = middlewareArguments.platform,
          strategy = middlewareArguments.strategy;
        // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
        // ClientRect's bounds, despite the event listener being triggered. A
        // padding of 2 seems to handle this issue.
        var _options4 = options,
          _options4$padding = _options4.padding,
          padding = _options4$padding === void 0 ? 2 : _options4$padding,
          x = _options4.x,
          y = _options4.y;
        var fallback = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: rects.reference,
          offsetParent: yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating),
          strategy: strategy
        }) : rects.reference);
        var clientRects = (yield platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || [];
        var paddingObject = getSideObjectFromPadding(padding);
        function getBoundingClientRect() {
          // There are two rects and they are disjoined.
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            // Find the first rect in which the point is fully inside.
            return clientRects.find(function (rect) {
              return x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom;
            }) || fallback;
          }

          // There are 2 or more connected rects.
          if (clientRects.length >= 2) {
            if (getMainAxisFromPlacement(placement) === 'x') {
              var firstRect = clientRects[0];
              var lastRect = clientRects[clientRects.length - 1];
              var isTop = getSide(placement) === 'top';
              var _top = firstRect.top;
              var _bottom = lastRect.bottom;
              var _left = isTop ? firstRect.left : lastRect.left;
              var _right = isTop ? firstRect.right : lastRect.right;
              var _width = _right - _left;
              var _height = _bottom - _top;
              return {
                top: _top,
                bottom: _bottom,
                left: _left,
                right: _right,
                width: _width,
                height: _height,
                x: _left,
                y: _top
              };
            }
            var isLeftSide = getSide(placement) === 'left';
            var maxRight = max.apply(void 0, floating_ui_core_esm_toConsumableArray(clientRects.map(function (rect) {
              return rect.right;
            })));
            var minLeft = min.apply(void 0, floating_ui_core_esm_toConsumableArray(clientRects.map(function (rect) {
              return rect.left;
            })));
            var measureRects = clientRects.filter(function (rect) {
              return isLeftSide ? rect.left === minLeft : rect.right === maxRight;
            });
            var top = measureRects[0].top;
            var bottom = measureRects[measureRects.length - 1].bottom;
            var left = minLeft;
            var right = maxRight;
            var width = right - left;
            var height = bottom - top;
            return {
              top: top,
              bottom: bottom,
              left: left,
              right: right,
              width: width,
              height: height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        var resetRects = yield platform.getElementRects({
          reference: {
            getBoundingClientRect: getBoundingClientRect
          },
          floating: elements.floating,
          strategy: strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      })();
    }
  };
};
function convertValueToCoords(_x6, _x7) {
  return _convertValueToCoords.apply(this, arguments);
}
/**
 * A placement modifier that translates the floating element along the specified
 * axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
function _convertValueToCoords() {
  _convertValueToCoords = _asyncToGenerator(function* (middlewareArguments, value) {
    var placement = middlewareArguments.placement,
      platform = middlewareArguments.platform,
      elements = middlewareArguments.elements;
    var rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
    var side = getSide(placement);
    var alignment = getAlignment(placement);
    var isVertical = getMainAxisFromPlacement(placement) === 'x';
    var mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    var crossAxisMulti = rtl && isVertical ? -1 : 1;
    var rawValue = typeof value === 'function' ? value(middlewareArguments) : value;

    // eslint-disable-next-line prefer-const
    var _ref6 = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
      } : _objectSpread({
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null
      }, rawValue),
      mainAxis = _ref6.mainAxis,
      crossAxis = _ref6.crossAxis,
      alignmentAxis = _ref6.alignmentAxis;
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
  return _convertValueToCoords.apply(this, arguments);
}
var floating_ui_core_esm_offset = function offset(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: 'offset',
    options: value,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var x = middlewareArguments.x,
          y = middlewareArguments.y;
        var diffCoords = yield convertValueToCoords(middlewareArguments, value);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      })();
    }
  };
};
function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * A visibility optimizer that shifts the floating element along the specified
 * axes in order to keep it in view.
 * @see https://floating-ui.com/docs/shift
 */
var shift = function shift(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var _objectSpread3;
        var x = middlewareArguments.x,
          y = middlewareArguments.y,
          placement = middlewareArguments.placement;
        var _options5 = options,
          _options5$mainAxis = _options5.mainAxis,
          checkMainAxis = _options5$mainAxis === void 0 ? true : _options5$mainAxis,
          _options5$crossAxis = _options5.crossAxis,
          checkCrossAxis = _options5$crossAxis === void 0 ? false : _options5$crossAxis,
          _options5$limiter = _options5.limiter,
          limiter = _options5$limiter === void 0 ? {
            fn: function fn(_ref) {
              var x = _ref.x,
                y = _ref.y;
              return {
                x: x,
                y: y
              };
            }
          } : _options5$limiter,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options5, _excluded4);
        var coords = {
          x: x,
          y: y
        };
        var overflow = yield detectOverflow(middlewareArguments, detectOverflowOptions);
        var mainAxis = getMainAxisFromPlacement(getSide(placement));
        var crossAxis = getCrossAxis(mainAxis);
        var mainAxisCoord = coords[mainAxis];
        var crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          var minSide = mainAxis === 'y' ? 'top' : 'left';
          var maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          var _min = mainAxisCoord + overflow[minSide];
          var _max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = within(_min, mainAxisCoord, _max);
        }
        if (checkCrossAxis) {
          var _minSide = crossAxis === 'y' ? 'top' : 'left';
          var _maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          var _min2 = crossAxisCoord + overflow[_minSide];
          var _max2 = crossAxisCoord - overflow[_maxSide];
          crossAxisCoord = within(_min2, crossAxisCoord, _max2);
        }
        var limitedCoords = limiter.fn(_objectSpread(_objectSpread({}, middlewareArguments), {}, (_objectSpread3 = {}, floating_ui_core_esm_defineProperty(_objectSpread3, mainAxis, mainAxisCoord), floating_ui_core_esm_defineProperty(_objectSpread3, crossAxis, crossAxisCoord), _objectSpread3)));
        return _objectSpread(_objectSpread({}, limitedCoords), {}, {
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        });
      })();
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
var limitShift = function limitShift(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options: options,
    fn: function fn(middlewareArguments) {
      var _ref5;
      var x = middlewareArguments.x,
        y = middlewareArguments.y,
        placement = middlewareArguments.placement,
        rects = middlewareArguments.rects,
        middlewareData = middlewareArguments.middlewareData;
      var _options6 = options,
        _options6$offset = _options6.offset,
        offset = _options6$offset === void 0 ? 0 : _options6$offset,
        _options6$mainAxis = _options6.mainAxis,
        checkMainAxis = _options6$mainAxis === void 0 ? true : _options6$mainAxis,
        _options6$crossAxis = _options6.crossAxis,
        checkCrossAxis = _options6$crossAxis === void 0 ? true : _options6$crossAxis;
      var coords = {
        x: x,
        y: y
      };
      var mainAxis = getMainAxisFromPlacement(placement);
      var crossAxis = getCrossAxis(mainAxis);
      var mainAxisCoord = coords[mainAxis];
      var crossAxisCoord = coords[crossAxis];
      var rawOffset = typeof offset === 'function' ? offset(middlewareArguments) : offset;
      var computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : _objectSpread({
        mainAxis: 0,
        crossAxis: 0
      }, rawOffset);
      if (checkMainAxis) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        var limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        var limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        var _len = mainAxis === 'y' ? 'width' : 'height';
        var isOriginSide = ['top', 'left'].includes(getSide(placement));
        var _limitMin = rects.reference[crossAxis] - rects.floating[_len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        var _limitMax = rects.reference[crossAxis] + rects.reference[_len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < _limitMin) {
          crossAxisCoord = _limitMin;
        } else if (crossAxisCoord > _limitMax) {
          crossAxisCoord = _limitMax;
        }
      }
      return _ref5 = {}, floating_ui_core_esm_defineProperty(_ref5, mainAxis, mainAxisCoord), floating_ui_core_esm_defineProperty(_ref5, crossAxis, crossAxisCoord), _ref5;
    }
  };
};

/**
 * Provides data to change the size of the floating element. For instance,
 * prevent it from overflowing its clipping boundary or match the width of the
 * reference element.
 * @see https://floating-ui.com/docs/size
 */
var floating_ui_core_esm_size = function size(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options: options,
    fn: function fn(middlewareArguments) {
      return _asyncToGenerator(function* () {
        var placement = middlewareArguments.placement,
          rects = middlewareArguments.rects,
          platform = middlewareArguments.platform,
          elements = middlewareArguments.elements;
        var _options7 = options,
          _options7$apply = _options7.apply,
          apply = _options7$apply === void 0 ? function () {} : _options7$apply,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_options7, _excluded5);
        var overflow = yield detectOverflow(middlewareArguments, detectOverflowOptions);
        var side = getSide(placement);
        var alignment = getAlignment(placement);
        var axis = getMainAxisFromPlacement(placement);
        var isXAxis = axis === 'x';
        var _rects$floating = rects.floating,
          width = _rects$floating.width,
          height = _rects$floating.height;
        var heightSide;
        var widthSide;
        if (side === 'top' || side === 'bottom') {
          heightSide = side;
          widthSide = alignment === ((yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
        } else {
          widthSide = side;
          heightSide = alignment === 'end' ? 'top' : 'bottom';
        }
        var overflowAvailableHeight = height - overflow[heightSide];
        var overflowAvailableWidth = width - overflow[widthSide];
        var availableHeight = overflowAvailableHeight;
        var availableWidth = overflowAvailableWidth;
        if (isXAxis) {
          availableWidth = min(
          // Maximum clipping viewport width
          width - overflow.right - overflow.left, overflowAvailableWidth);
        } else {
          availableHeight = min(
          // Maximum clipping viewport height
          height - overflow.bottom - overflow.top, overflowAvailableHeight);
        }
        if (!middlewareArguments.middlewareData.shift && !alignment) {
          var xMin = max(overflow.left, 0);
          var xMax = max(overflow.right, 0);
          var yMin = max(overflow.top, 0);
          var yMax = max(overflow.bottom, 0);
          if (isXAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        yield apply(_objectSpread(_objectSpread({}, middlewareArguments), {}, {
          availableWidth: availableWidth,
          availableHeight: availableHeight
        }));
        var nextDimensions = yield platform.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      })();
    }
  };
};

// CONCATENATED MODULE: ../node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.js
function floating_ui_dom_esm_typeof(obj) { "@babel/helpers - typeof"; return floating_ui_dom_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, floating_ui_dom_esm_typeof(obj); }
function floating_ui_dom_esm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function floating_ui_dom_esm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { floating_ui_dom_esm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { floating_ui_dom_esm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function floating_ui_dom_esm_toConsumableArray(arr) { return floating_ui_dom_esm_arrayWithoutHoles(arr) || floating_ui_dom_esm_iterableToArray(arr) || floating_ui_dom_esm_unsupportedIterableToArray(arr) || floating_ui_dom_esm_nonIterableSpread(); }
function floating_ui_dom_esm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function floating_ui_dom_esm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return floating_ui_dom_esm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return floating_ui_dom_esm_arrayLikeToArray(o, minLen); }
function floating_ui_dom_esm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function floating_ui_dom_esm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return floating_ui_dom_esm_arrayLikeToArray(arr); }
function floating_ui_dom_esm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function floating_ui_dom_esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function floating_ui_dom_esm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? floating_ui_dom_esm_ownKeys(Object(source), !0).forEach(function (key) { floating_ui_dom_esm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : floating_ui_dom_esm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function floating_ui_dom_esm_defineProperty(obj, key, value) { key = floating_ui_dom_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function floating_ui_dom_esm_toPropertyKey(arg) { var key = floating_ui_dom_esm_toPrimitive(arg, "string"); return floating_ui_dom_esm_typeof(key) === "symbol" ? key : String(key); }
function floating_ui_dom_esm_toPrimitive(input, hint) { if (floating_ui_dom_esm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (floating_ui_dom_esm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
var floating_ui_dom_esm_min = Math.min;
var floating_ui_dom_esm_max = Math.max;
var round = Math.round;
function getCssDimensions(element) {
  var css = getComputedStyle$1(element);
  var width = parseFloat(css.width);
  var height = parseFloat(css.height);
  var offsetWidth = element.offsetWidth;
  var offsetHeight = element.offsetHeight;
  var shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width: width,
    height: height,
    fallback: shouldFallback
  };
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || '').toLowerCase() : '';
}
var uaString;
function getUAString() {
  if (uaString) {
    return uaString;
  }
  var uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
    return uaString;
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  var _getComputedStyle$ = getComputedStyle$1(element),
    overflow = _getComputedStyle$.overflow,
    overflowX = _getComputedStyle$.overflowX,
    overflowY = _getComputedStyle$.overflowY,
    display = _getComputedStyle$.display;
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try to use feature detection here instead.
  var isFirefox = /firefox/i.test(getUAString());
  var css = getComputedStyle$1(element);
  var backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;

  // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (backdropFilter ? backdropFilter !== 'none' : false) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective'].some(function (value) {
    return css.willChange.includes(value);
  }) || ['paint', 'layout', 'strict', 'content'].some(function (value) {
    // Add type check for old browsers.
    var contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}

/**
 * Determines whether or not `.getBoundingClientRect()` is affected by visual
 * viewport offsets. In Safari, the `x`/`y` offsets are values relative to the
 * visual viewport, while in other engines, they are values relative to the
 * layout viewport.
 */
function isClientRectVisualViewportBased() {
  // TODO: Try to use feature detection here instead. Feature detection for
  // this can fail in various ways, making the userAgent check the most
  // reliable:
  // • Always-visible scrollbar or not
  // • Width of <html>

  // Is Safari.
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
var FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  var domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  var rect = domElement.getBoundingClientRect();
  var _getCssDimensions = getCssDimensions(domElement),
    width = _getCssDimensions.width,
    height = _getCssDimensions.height,
    fallback = _getCssDimensions.fallback;
  var x = (fallback ? round(rect.width) : rect.width) / width;
  var y = (fallback ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x: x,
    y: y
  };
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var domElement = unwrapElement(element);
  var scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  var win = domElement ? getWindow(domElement) : window;
  var addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  var y = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
  var width = clientRect.width / scale.x;
  var height = clientRect.height / scale.y;
  if (domElement) {
    var _win = getWindow(domElement);
    var offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    var currentIFrame = _win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== _win) {
      var iframeScale = getScale(currentIFrame);
      var iframeRect = currentIFrame.getBoundingClientRect();
      var css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  var rect = _ref.rect,
    offsetParent = _ref.offsetParent,
    strategy = _ref.strategy;
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var scale = {
    x: 1,
    y: 1
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      var offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var scroll = getNodeScroll(element);
  var body = element.ownerDocument.body;
  var width = floating_ui_dom_esm_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  var height = floating_ui_dom_esm_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  var x = -scroll.scrollLeft + getWindowScrollBarX(element);
  var y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += floating_ui_dom_esm_max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  var result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  var parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    // `getParentNode` will never return a `Document` due to the fallback
    // check, so it's either the <html> or <body> element.
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  var scrollableAncestor = getNearestOverflowAncestor(node);
  var isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  var win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  var clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  var top = clientRect.top + element.clientTop;
  var left = clientRect.left + element.clientLeft;
  var scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  var width = element.clientWidth * scale.x;
  var height = element.clientHeight * scale.y;
  var x = left * scale.x;
  var y = top * scale.y;
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  var rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    var mutableRect = floating_ui_dom_esm_objectSpread({}, clippingAncestor);
    if (isClientRectVisualViewportBased()) {
      var _win$visualViewport, _win$visualViewport2;
      var win = getWindow(element);
      mutableRect.x -= ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0;
      mutableRect.y -= ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0;
    }
    rect = mutableRect;
  }
  return rectToClientRect(rect);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  var cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  var result = getOverflowAncestors(element).filter(function (el) {
    return isElement(el) && getNodeName(el) !== 'body';
  });
  var currentContainingBlockComputedStyle = null;
  var elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  var currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    var computedStyle = getComputedStyle$1(currentNode);
    var containingBlock = isContainingBlock(currentNode);
    var shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(function (ancestor) {
        return ancestor !== currentNode;
      });
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  var element = _ref.element,
    boundary = _ref.boundary,
    rootBoundary = _ref.rootBoundary,
    strategy = _ref.strategy;
  var elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  var clippingAncestors = [].concat(floating_ui_dom_esm_toConsumableArray(elementClippingAncestors), [rootBoundary]);
  var firstClippingAncestor = clippingAncestors[0];
  var clippingRect = clippingAncestors.reduce(function (accRect, clippingAncestor) {
    var rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_dom_esm_max(rect.top, accRect.top);
    accRect.right = floating_ui_dom_esm_min(rect.right, accRect.right);
    accRect.bottom = floating_ui_dom_esm_min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_dom_esm_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return getCssDimensions(element);
  }
  return element.getBoundingClientRect();
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(element, true, strategy === 'fixed', offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      var offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
var platform = {
  getClippingRect: getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement: isElement,
  getDimensions: getDimensions,
  getOffsetParent: getOffsetParent,
  getDocumentElement: getDocumentElement,
  getScale: getScale,
  getElementRects: function getElementRects(_ref) {
    var _this = this;
    return floating_ui_dom_esm_asyncToGenerator(function* () {
      var reference = _ref.reference,
        floating = _ref.floating,
        strategy = _ref.strategy;
      var getOffsetParentFn = _this.getOffsetParent || getOffsetParent;
      var getDimensionsFn = _this.getDimensions;
      return {
        reference: getRectRelativeToOffsetParent(reference, yield getOffsetParentFn(floating), strategy),
        floating: floating_ui_dom_esm_objectSpread({
          x: 0,
          y: 0
        }, yield getDimensionsFn(floating))
      };
    })();
  },
  getClientRects: function getClientRects(element) {
    return Array.from(element.getClientRects());
  },
  isRTL: function isRTL(element) {
    return getComputedStyle$1(element).direction === 'rtl';
  }
};

/**
 * Automatically updates the position of the floating element when necessary.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$ancestorScro = _options.ancestorScroll,
    _ancestorScroll = _options$ancestorScro === void 0 ? true : _options$ancestorScro,
    _options$ancestorResi = _options.ancestorResize,
    ancestorResize = _options$ancestorResi === void 0 ? true : _options$ancestorResi,
    _options$elementResiz = _options.elementResize,
    elementResize = _options$elementResiz === void 0 ? true : _options$elementResiz,
    _options$animationFra = _options.animationFrame,
    animationFrame = _options$animationFra === void 0 ? false : _options$animationFra;
  var ancestorScroll = _ancestorScroll && !animationFrame;
  var ancestors = ancestorScroll || ancestorResize ? [].concat(floating_ui_dom_esm_toConsumableArray(isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : []), floating_ui_dom_esm_toConsumableArray(getOverflowAncestors(floating))) : [];
  ancestors.forEach(function (ancestor) {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  var observer = null;
  if (elementResize) {
    var initialUpdate = true;
    observer = new ResizeObserver(function () {
      if (!initialUpdate) {
        update();
      }
      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  var frameId;
  var prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    var nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return function () {
    var _observer;
    ancestors.forEach(function (ancestor) {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
var floating_ui_dom_esm_computePosition = function computePosition(reference, floating, options) {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  var cache = new Map();
  var mergedOptions = floating_ui_dom_esm_objectSpread({
    platform: platform
  }, options);
  var platformWithCache = floating_ui_dom_esm_objectSpread(floating_ui_dom_esm_objectSpread({}, mergedOptions.platform), {}, {
    _c: cache
  });
  return floating_ui_core_esm_computePosition(reference, floating, floating_ui_dom_esm_objectSpread(floating_ui_dom_esm_objectSpread({}, mergedOptions), {}, {
    platform: platformWithCache
  }));
};

// CONCATENATED MODULE: ../node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.esm.js

var use_isomorphic_layout_effect_esm_index = typeof document !== 'undefined' ? compat_module["useLayoutEffect"] : compat_module["useEffect"];
/* harmony default export */ var use_isomorphic_layout_effect_esm = (use_isomorphic_layout_effect_esm_index);
// CONCATENATED MODULE: ../node_modules/react-select/dist/index-a86253bb.esm.js












var _excluded$3 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
// ==============================
// NO OP
// ==============================

var noop = function noop() {};

// ==============================
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/
function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}
function classNames(prefix, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }
  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
}
// ==============================
// Clean Value
// ==============================

var index_a86253bb_esm_cleanValue = function cleanValue(value) {
  if (isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === 'object' && value !== null) return [value];
  return [];
};

// ==============================
// Clean Common Props
// ==============================

var index_a86253bb_esm_cleanCommonProps = function cleanCommonProps(props) {
  //className
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getClassNames;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$3);
  return objectSpread2_objectSpread2({}, innerProps);
};

// ==============================
// Get Style Props
// ==============================

var getStyleProps = function getStyleProps(props, name, classNamesState) {
  var cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    className = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
  };
};

// ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var _newValue = onInputChange(inputValue, actionMeta);
    if (typeof _newValue === 'string') return _newValue;
  }
  return inputValue;
}

// ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}

// Normalized Scroll Top
// ------------------------------

function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}

// Normalized scrollTo & scrollTop
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}

// Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  if (style.position === 'fixed') return document.documentElement;
  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === 'static') {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}

// Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}

// Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

// ==============================
// Get bounding client object
// ==============================

// cannot get keys using array notation with DOMRect
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

// ==============================
// Passive Event Detector
// ==============================

// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
var passiveOptionAccessed = false;
var index_a86253bb_esm_options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
// check for SSR
var index_a86253bb_esm_w = typeof window !== 'undefined' ? window : {};
if (index_a86253bb_esm_w.addEventListener && index_a86253bb_esm_w.removeEventListener) {
  index_a86253bb_esm_w.addEventListener('p', noop, index_a86253bb_esm_options);
  index_a86253bb_esm_w.removeEventListener('p', noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var index_a86253bb_esm_removeProps = function removeProps(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      key = _ref2[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function (newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
function getMenuPlacement(_ref) {
  var preferredMaxHeight = _ref.maxHeight,
    menuEl = _ref.menuEl,
    minHeight = _ref.minHeight,
    preferredPlacement = _ref.placement,
    shouldScroll = _ref.shouldScroll,
    isFixedPosition = _ref.isFixedPosition,
    controlHeight = _ref.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: preferredMaxHeight
  };

  // something went wrong, return default state
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
    scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
    menuBottom = _menuEl$getBoundingCl.bottom,
    menuHeight = _menuEl$getBoundingCl.height,
    menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
    containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      }

      // 4. Forked beviour when there isn't enough space below

      // AUTO: flip the menu, render above
      if (preferredPlacement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      }

      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
      if (preferredPlacement === 'bottom') {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      }

      // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below
      return {
        placement: 'bottom',
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
  }
  return defaultState;
}

// Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}
var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};
var index_a86253bb_esm_menuCSS = function menuCSS(_ref2, unstyled) {
  var _objectSpread2;
  var placement = _ref2.placement,
    _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    spacing = _ref2$theme.spacing,
    colors = _ref2$theme.colors;
  return objectSpread2_objectSpread2((_objectSpread2 = {
    label: 'menu'
  }, _defineProperty(_objectSpread2, alignToControl(placement), '100%'), _defineProperty(_objectSpread2, "position", 'absolute'), _defineProperty(_objectSpread2, "width", '100%'), _defineProperty(_objectSpread2, "zIndex", 1), _objectSpread2), unstyled ? {} : {
    backgroundColor: colors.neutral0,
    borderRadius: borderRadius,
    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
    marginBottom: spacing.menuGutter,
    marginTop: spacing.menuGutter
  });
};
var PortalPlacementContext = /*#__PURE__*/Object(compat_module["createContext"])(null);

// NOTE: internal only
var index_a86253bb_esm_MenuPlacer = function MenuPlacer(props) {
  var children = props.children,
    minMenuHeight = props.minMenuHeight,
    maxMenuHeight = props.maxMenuHeight,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition,
    menuShouldScrollIntoView = props.menuShouldScrollIntoView,
    theme = props.theme;
  var _ref3 = Object(compat_module["useContext"])(PortalPlacementContext) || {},
    setPortalPlacement = _ref3.setPortalPlacement;
  var ref = Object(compat_module["useRef"])(null);
  var _useState = Object(compat_module["useState"])(maxMenuHeight),
    _useState2 = _slicedToArray(_useState, 2),
    maxHeight = _useState2[0],
    setMaxHeight = _useState2[1];
  var _useState3 = Object(compat_module["useState"])(null),
    _useState4 = _slicedToArray(_useState3, 2),
    placement = _useState4[0],
    setPlacement = _useState4[1];
  var controlHeight = theme.spacing.controlHeight;
  use_isomorphic_layout_effect_esm(function () {
    var menuEl = ref.current;
    if (!menuEl) return;

    // DO NOT scroll if position is fixed
    var isFixedPosition = menuPosition === 'fixed';
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl: menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll: shouldScroll,
      isFixedPosition: isFixedPosition,
      controlHeight: controlHeight
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
  return children({
    ref: ref,
    placerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight: maxHeight
    })
  });
};
var index_a86253bb_esm_Menu = function Menu(props) {
  var children = props.children,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'menu', {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};

// ==============================
// Menu List
// ==============================

var index_a86253bb_esm_menuListCSS = function menuListCSS(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight,
    baseUnit = _ref4.theme.spacing.baseUnit;
  return objectSpread2_objectSpread2({
    maxHeight: maxHeight,
    overflowY: 'auto',
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  }, unstyled ? {} : {
    paddingBottom: baseUnit,
    paddingTop: baseUnit
  });
};
var index_a86253bb_esm_MenuList = function MenuList(props) {
  var children = props.children,
    innerProps = props.innerProps,
    innerRef = props.innerRef,
    isMulti = props.isMulti;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'menuList', {
    'menu-list': true,
    'menu-list--is-multi': isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};

// ==============================
// Menu Notices
// ==============================

var index_a86253bb_esm_noticeCSS = function noticeCSS(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme,
    baseUnit = _ref5$theme.spacing.baseUnit,
    colors = _ref5$theme.colors;
  return objectSpread2_objectSpread2({
    textAlign: 'center'
  }, unstyled ? {} : {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
  });
};
var noOptionsMessageCSS = index_a86253bb_esm_noticeCSS;
var loadingMessageCSS = index_a86253bb_esm_noticeCSS;
var index_a86253bb_esm_NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'noOptionsMessage', {
    'menu-notice': true,
    'menu-notice--no-options': true
  }), innerProps), children);
};
index_a86253bb_esm_NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var index_a86253bb_esm_LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'loadingMessage', {
    'menu-notice': true,
    'menu-notice--loading': true
  }), innerProps), children);
};
index_a86253bb_esm_LoadingMessage.defaultProps = {
  children: 'Loading...'
};

// ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
    offset = _ref6.offset,
    position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var index_a86253bb_esm_MenuPortal = function MenuPortal(props) {
  var appendTo = props.appendTo,
    children = props.children,
    controlElement = props.controlElement,
    innerProps = props.innerProps,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition;
  var menuPortalRef = Object(compat_module["useRef"])(null);
  var cleanupRef = Object(compat_module["useRef"])(null);
  var _useState5 = Object(compat_module["useState"])(coercePlacement(menuPlacement)),
    _useState6 = _slicedToArray(_useState5, 2),
    placement = _useState6[0],
    setPortalPlacement = _useState6[1];
  var portalPlacementContext = Object(compat_module["useMemo"])(function () {
    return {
      setPortalPlacement: setPortalPlacement
    };
  }, []);
  var _useState7 = Object(compat_module["useState"])(null),
    _useState8 = _slicedToArray(_useState7, 2),
    computedPosition = _useState8[0],
    setComputedPosition = _useState8[1];
  var updateComputedPosition = Object(compat_module["useCallback"])(function () {
    if (!controlElement) return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset: offset,
        rect: rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  use_isomorphic_layout_effect_esm(function () {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = Object(compat_module["useCallback"])(function () {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: 'ResizeObserver' in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  use_isomorphic_layout_effect_esm(function () {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = Object(compat_module["useCallback"])(function (menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);

  // bail early if required elements aren't present
  if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

  // same wrapper element whether fixed or portalled
  var menuWrapper = emotion_react_esm_jsx("div", _extends({
    ref: setMenuPortalElement
  }, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), 'menuPortal', {
    'menu-portal': true
  }), innerProps), children);
  return emotion_react_esm_jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /*#__PURE__*/Object(compat_module["createPortal"])(menuWrapper, appendTo) : menuWrapper);
};

// ==============================
// Root Container
// ==============================

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
    isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : undefined,
    pointerEvents: isDisabled ? 'none' : undefined,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var index_a86253bb_esm_SelectContainer = function SelectContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    isRtl = props.isRtl;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'container', {
    '--is-disabled': isDisabled,
    '--is-rtl': isRtl
  }), innerProps), children);
};

// ==============================
// Value Container
// ==============================

var index_a86253bb_esm_valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
  var spacing = _ref2.theme.spacing,
    isMulti = _ref2.isMulti,
    hasValue = _ref2.hasValue,
    controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
  return objectSpread2_objectSpread2({
    alignItems: 'center',
    display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
    flex: 1,
    flexWrap: 'wrap',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  }, unstyled ? {} : {
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
  });
};
var index_a86253bb_esm_ValueContainer = function ValueContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isMulti = props.isMulti,
    hasValue = props.hasValue;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
    'value-container': true,
    'value-container--is-multi': isMulti,
    'value-container--has-value': hasValue
  }), innerProps), children);
};

// ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var index_a86253bb_esm_IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
    indicators: true
  }), innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

// ==============================
// Dropdown & Clear Icons
// ==============================
var index_a86253bb_esm_ref2 =  true ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : undefined;
var index_a86253bb_esm_Svg = function Svg(_ref) {
  var size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded$2);
  return emotion_react_esm_jsx("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: index_a86253bb_esm_ref2
  }, props));
};
var index_a86253bb_esm_CrossIcon = function CrossIcon(props) {
  return emotion_react_esm_jsx(index_a86253bb_esm_Svg, _extends({
    size: 20
  }, props), emotion_react_esm_jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var index_a86253bb_esm_DownChevron = function DownChevron(props) {
  return emotion_react_esm_jsx(index_a86253bb_esm_Svg, _extends({
    size: 20
  }, props), emotion_react_esm_jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};

// ==============================
// Dropdown & Clear Buttons
// ==============================

var index_a86253bb_esm_baseCSS = function baseCSS(_ref3, unstyled) {
  var isFocused = _ref3.isFocused,
    _ref3$theme = _ref3.theme,
    baseUnit = _ref3$theme.spacing.baseUnit,
    colors = _ref3$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'indicatorContainer',
    display: 'flex',
    transition: 'color 150ms'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2,
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  });
};
var dropdownIndicatorCSS = index_a86253bb_esm_baseCSS;
var index_a86253bb_esm_DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
    indicator: true,
    'dropdown-indicator': true
  }), innerProps), children || emotion_react_esm_jsx(index_a86253bb_esm_DownChevron, null));
};
var clearIndicatorCSS = index_a86253bb_esm_baseCSS;
var index_a86253bb_esm_ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
    indicator: true,
    'clear-indicator': true
  }), innerProps), children || emotion_react_esm_jsx(index_a86253bb_esm_CrossIcon, null));
};

// ==============================
// Separator
// ==============================

var index_a86253bb_esm_indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled,
    _ref4$theme = _ref4.theme,
    baseUnit = _ref4$theme.spacing.baseUnit,
    colors = _ref4$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2
  });
};
var index_a86253bb_esm_IndicatorSeparator = function IndicatorSeparator(props) {
  var innerProps = props.innerProps;
  return emotion_react_esm_jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
    'indicator-separator': true
  })));
};

// ==============================
// Loading
// ==============================

var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var index_a86253bb_esm_loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
  var isFocused = _ref5.isFocused,
    size = _ref5.size,
    _ref5$theme = _ref5.theme,
    colors = _ref5$theme.colors,
    baseUnit = _ref5$theme.spacing.baseUnit;
  return objectSpread2_objectSpread2({
    label: 'loadingIndicator',
    display: 'flex',
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2
  });
};
var index_a86253bb_esm_LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
    offset = _ref6.offset;
  return emotion_react_esm_jsx("span", {
    css: /*#__PURE__*/emotion_react_esm_css({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : undefined,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  true ? "" : undefined,  true ? "" : undefined)
  });
};
var index_a86253bb_esm_LoadingIndicator = function LoadingIndicator(props) {
  var innerProps = props.innerProps,
    isRtl = props.isRtl;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'loadingIndicator', {
    indicator: true,
    'loading-indicator': true
  }), innerProps), emotion_react_esm_jsx(index_a86253bb_esm_LoadingDot, {
    delay: 0,
    offset: isRtl
  }), emotion_react_esm_jsx(index_a86253bb_esm_LoadingDot, {
    delay: 160,
    offset: true
  }), emotion_react_esm_jsx(index_a86253bb_esm_LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
index_a86253bb_esm_LoadingIndicator.defaultProps = {
  size: 4
};
var css$1 = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    _ref$theme = _ref.theme,
    colors = _ref$theme.colors,
    borderRadius = _ref$theme.borderRadius,
    spacing = _ref$theme.spacing;
  return objectSpread2_objectSpread2({
    label: 'control',
    alignItems: 'center',
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms'
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  });
};
var index_a86253bb_esm_Control = function Control(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    innerRef = props.innerRef,
    innerProps = props.innerProps,
    menuIsOpen = props.menuIsOpen;
  return emotion_react_esm_jsx("div", _extends({
    ref: innerRef
  }, getStyleProps(props, 'control', {
    control: true,
    'control--is-disabled': isDisabled,
    'control--is-focused': isFocused,
    'control--menu-is-open': menuIsOpen
  }), innerProps), children);
};
var _excluded$1 = ["data"];
var groupCSS = function groupCSS(_ref, unstyled) {
  var spacing = _ref.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};
var index_a86253bb_esm_Group = function Group(props) {
  var children = props.children,
    cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    Heading = props.Heading,
    headingProps = props.headingProps,
    innerProps = props.innerProps,
    label = props.label,
    theme = props.theme,
    selectProps = props.selectProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'group', {
    group: true
  }), innerProps), emotion_react_esm_jsx(Heading, _extends({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    getClassNames: getClassNames,
    cx: cx
  }), label), emotion_react_esm_jsx("div", null, children));
};
var index_a86253bb_esm_groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    colors = _ref2$theme.colors,
    spacing = _ref2$theme.spacing;
  return objectSpread2_objectSpread2({
    label: 'group',
    cursor: 'default',
    display: 'block'
  }, unstyled ? {} : {
    color: colors.neutral40,
    fontSize: '75%',
    fontWeight: 500,
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  });
};
var index_a86253bb_esm_GroupHeading = function GroupHeading(props) {
  var _cleanCommonProps = index_a86253bb_esm_cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
    'group-heading': true
  }), innerProps));
};
var index_a86253bb_esm_excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var index_a86253bb_esm_inputCSS = function inputCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    value = _ref.value,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({
    visibility: isDisabled ? 'hidden' : 'visible',
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? 'translateZ(0)' : ''
  }, containerStyle), unstyled ? {} : {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    color: colors.neutral80
  });
};
var spacingStyle = {
  gridArea: '1 / 2',
  font: 'inherit',
  minWidth: '2px',
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: '1 1 auto',
  display: 'inline-grid',
  gridArea: '1 / 1 / 2 / 3',
  gridTemplateColumns: '0 min-content',
  '&:after': objectSpread2_objectSpread2({
    content: 'attr(data-value) " "',
    visibility: 'hidden',
    whiteSpace: 'pre'
  }, spacingStyle)
};
var index_a86253bb_esm_inputStyle = function inputStyle(isHidden) {
  return objectSpread2_objectSpread2({
    label: 'input',
    color: 'inherit',
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: '100%'
  }, spacingStyle);
};
var index_a86253bb_esm_Input = function Input(props) {
  var cx = props.cx,
    value = props.value;
  var _cleanCommonProps = index_a86253bb_esm_cleanCommonProps(props),
    innerRef = _cleanCommonProps.innerRef,
    isDisabled = _cleanCommonProps.isDisabled,
    isHidden = _cleanCommonProps.isHidden,
    inputClassName = _cleanCommonProps.inputClassName,
    innerProps = _objectWithoutProperties(_cleanCommonProps, index_a86253bb_esm_excluded);
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'input', {
    'input-container': true
  }), {
    "data-value": value || ''
  }), emotion_react_esm_jsx("input", _extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: index_a86253bb_esm_inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var index_a86253bb_esm_multiValueCSS = function multiValueCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    borderRadius = _ref$theme.borderRadius,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'multiValue',
    display: 'flex',
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    margin: spacing.baseUnit / 2
  });
};
var index_a86253bb_esm_multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    colors = _ref2$theme.colors,
    cropWithEllipsis = _ref2.cropWithEllipsis;
  return objectSpread2_objectSpread2({
    overflow: 'hidden',
    textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    padding: 3,
    paddingLeft: 6
  });
};
var index_a86253bb_esm_multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme,
    spacing = _ref3$theme.spacing,
    borderRadius = _ref3$theme.borderRadius,
    colors = _ref3$theme.colors,
    isFocused = _ref3.isFocused;
  return objectSpread2_objectSpread2({
    alignItems: 'center',
    display: 'flex'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused ? colors.dangerLight : undefined,
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  });
};
var index_a86253bb_esm_MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
    innerProps = _ref4.innerProps;
  return emotion_react_esm_jsx("div", innerProps, children);
};
var index_a86253bb_esm_MultiValueContainer = index_a86253bb_esm_MultiValueGeneric;
var index_a86253bb_esm_MultiValueLabel = index_a86253bb_esm_MultiValueGeneric;
function index_a86253bb_esm_MultiValueRemove(_ref5) {
  var children = _ref5.children,
    innerProps = _ref5.innerProps;
  return emotion_react_esm_jsx("div", _extends({
    role: "button"
  }, innerProps), children || emotion_react_esm_jsx(index_a86253bb_esm_CrossIcon, {
    size: 14
  }));
}
var index_a86253bb_esm_MultiValue = function MultiValue(props) {
  var children = props.children,
    components = props.components,
    data = props.data,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    removeProps = props.removeProps,
    selectProps = props.selectProps;
  var Container = components.Container,
    Label = components.Label,
    Remove = components.Remove;
  return emotion_react_esm_jsx(Container, {
    data: data,
    innerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, getStyleProps(props, 'multiValue', {
      'multi-value': true,
      'multi-value--is-disabled': isDisabled
    })), innerProps),
    selectProps: selectProps
  }, emotion_react_esm_jsx(Label, {
    data: data,
    innerProps: objectSpread2_objectSpread2({}, getStyleProps(props, 'multiValueLabel', {
      'multi-value__label': true
    })),
    selectProps: selectProps
  }, children), emotion_react_esm_jsx(Remove, {
    data: data,
    innerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, getStyleProps(props, 'multiValueRemove', {
      'multi-value__remove': true
    })), {}, {
      'aria-label': "Remove ".concat(children || 'option')
    }, removeProps),
    selectProps: selectProps
  }));
};
var index_a86253bb_esm_optionCSS = function optionCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    isSelected = _ref.isSelected,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'option',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
    }
  });
};
var index_a86253bb_esm_Option = function Option(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    isSelected = props.isSelected,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'option', {
    option: true,
    'option--is-disabled': isDisabled,
    'option--is-focused': isFocused,
    'option--is-selected': isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var index_a86253bb_esm_placeholderCSS = function placeholderCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'placeholder',
    gridArea: '1 / 1 / 2 / 3'
  }, unstyled ? {} : {
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var index_a86253bb_esm_Placeholder = function Placeholder(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
    placeholder: true
  }), innerProps), children);
};
var index_a86253bb_esm_css = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'singleValue',
    gridArea: '1 / 1 / 2 / 3',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var index_a86253bb_esm_SingleValue = function SingleValue(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
    'single-value': true,
    'single-value--is-disabled': isDisabled
  }), innerProps), children);
};
var index_a86253bb_esm_components = {
  ClearIndicator: index_a86253bb_esm_ClearIndicator,
  Control: index_a86253bb_esm_Control,
  DropdownIndicator: index_a86253bb_esm_DropdownIndicator,
  DownChevron: index_a86253bb_esm_DownChevron,
  CrossIcon: index_a86253bb_esm_CrossIcon,
  Group: index_a86253bb_esm_Group,
  GroupHeading: index_a86253bb_esm_GroupHeading,
  IndicatorsContainer: index_a86253bb_esm_IndicatorsContainer,
  IndicatorSeparator: index_a86253bb_esm_IndicatorSeparator,
  Input: index_a86253bb_esm_Input,
  LoadingIndicator: index_a86253bb_esm_LoadingIndicator,
  Menu: index_a86253bb_esm_Menu,
  MenuList: index_a86253bb_esm_MenuList,
  MenuPortal: index_a86253bb_esm_MenuPortal,
  LoadingMessage: index_a86253bb_esm_LoadingMessage,
  NoOptionsMessage: index_a86253bb_esm_NoOptionsMessage,
  MultiValue: index_a86253bb_esm_MultiValue,
  MultiValueContainer: index_a86253bb_esm_MultiValueContainer,
  MultiValueLabel: index_a86253bb_esm_MultiValueLabel,
  MultiValueRemove: index_a86253bb_esm_MultiValueRemove,
  Option: index_a86253bb_esm_Option,
  Placeholder: index_a86253bb_esm_Placeholder,
  SelectContainer: index_a86253bb_esm_SelectContainer,
  SingleValue: index_a86253bb_esm_SingleValue,
  ValueContainer: index_a86253bb_esm_ValueContainer
};
var index_a86253bb_esm_defaultComponents = function defaultComponents(props) {
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, index_a86253bb_esm_components), props.components);
};

// CONCATENATED MODULE: ../node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult: lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// CONCATENATED MODULE: ../node_modules/react-select/dist/Select-40119e12.esm.js













function _EMOTION_STRINGIFIED_CSS_ERROR__$2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

// Assistive text to describe visual elements. Hidden for sighted users.
var Select_40119e12_esm_ref =  true ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : undefined;
var Select_40119e12_esm_A11yText = function A11yText(props) {
  return emotion_react_esm_jsx("span", _extends({
    css: Select_40119e12_esm_ref
  }, props));
};
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
      isMulti = props.isMulti,
      isDisabled = props.isDisabled,
      tabSelectsValue = props.tabSelectsValue,
      context = props.context;
    switch (context) {
      case 'menu':
        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
      case 'input':
        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');
      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
      default:
        return '';
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      labels = props.labels,
      isDisabled = props.isDisabled;
    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option ".concat(label, ", deselected.");
      case 'clear':
        return 'All selected options have been cleared.';
      case 'initial-input-focus':
        return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
      case 'select-option':
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return '';
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
      focused = props.focused,
      options = props.options,
      _props$label2 = props.label,
      label = _props$label2 === void 0 ? '' : _props$label2,
      selectValue = props.selectValue,
      isDisabled = props.isDisabled,
      isSelected = props.isSelected;
    var getArrayIndex = function getArrayIndex(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
    };
    if (context === 'value' && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === 'menu') {
      var disabled = isDisabled ? ' disabled' : '';
      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }
    return '';
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
      resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
  }
};
var Select_40119e12_esm_LiveRegion = function LiveRegion(props) {
  var ariaSelection = props.ariaSelection,
    focusedOption = props.focusedOption,
    focusedValue = props.focusedValue,
    focusableOptions = props.focusableOptions,
    isFocused = props.isFocused,
    selectValue = props.selectValue,
    selectProps = props.selectProps,
    id = props.id;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
    getOptionLabel = selectProps.getOptionLabel,
    inputValue = selectProps.inputValue,
    isMulti = selectProps.isMulti,
    isOptionDisabled = selectProps.isOptionDisabled,
    isSearchable = selectProps.isSearchable,
    menuIsOpen = selectProps.menuIsOpen,
    options = selectProps.options,
    screenReaderStatus = selectProps.screenReaderStatus,
    tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps['aria-label'];
  var ariaLive = selectProps['aria-live'];

  // Update aria live message configuration when prop changes
  var messages = Object(compat_module["useMemo"])(function () {
    return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);

  // Update aria live selected option when prop changes
  var ariaSelected = Object(compat_module["useMemo"])(function () {
    var message = '';
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
        selectedOptions = ariaSelection.options,
        removedValue = ariaSelection.removedValue,
        removedValues = ariaSelection.removedValues,
        value = ariaSelection.value;
      // select-option when !isMulti does not return option so we assume selected option is value
      var asOption = function asOption(val) {
        return !Array.isArray(val) ? val : null;
      };

      // If there is just one item from the action then get its label
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel(selected) : '';

      // If there are multiple items from the action then return an array of labels
      var multiSelected = selectedOptions || removedValues || undefined;
      var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
      var onChangeProps = objectSpread2_objectSpread2({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled(selected, selectValue),
        label: label,
        labels: labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
  var ariaFocused = Object(compat_module["useMemo"])(function () {
    var focusMsg = '';
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused: focused,
        label: getOptionLabel(focused),
        isDisabled: isOptionDisabled(focused, selectValue),
        isSelected: isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? 'menu' : 'value',
        selectValue: selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue]);
  var ariaResults = Object(compat_module["useMemo"])(function () {
    var resultsMsg = '';
    if (menuIsOpen && options.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue: inputValue,
        resultsMessage: resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
  var ariaGuidance = Object(compat_module["useMemo"])(function () {
    var guidanceMsg = '';
    if (messages.guidance) {
      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
      guidanceMsg = messages.guidance({
        'aria-label': ariaLabel,
        context: context,
        isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
        isMulti: isMulti,
        isSearchable: isSearchable,
        tabSelectsValue: tabSelectsValue
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  var ScreenReaderText = emotion_react_esm_jsx(compat_module["Fragment"], null, emotion_react_esm_jsx("span", {
    id: "aria-selection"
  }, ariaSelected), emotion_react_esm_jsx("span", {
    id: "aria-context"
  }, ariaContext));
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
  return emotion_react_esm_jsx(compat_module["Fragment"], null, emotion_react_esm_jsx(Select_40119e12_esm_A11yText, {
    id: id
  }, isInitialFocus && ScreenReaderText), emotion_react_esm_jsx(Select_40119e12_esm_A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};
for (var Select_40119e12_esm_i = 0; Select_40119e12_esm_i < diacritics.length; Select_40119e12_esm_i++) {
  var diacritic = diacritics[Select_40119e12_esm_i];
  for (var Select_40119e12_esm_j = 0; Select_40119e12_esm_j < diacritic.letters.length; Select_40119e12_esm_j++) {
    diacriticToBase[diacritic.letters[Select_40119e12_esm_j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};
var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var Select_40119e12_esm_createFilter = function createFilter(config) {
  return function (option, rawInput) {
    // eslint-disable-next-line no-underscore-dangle
    if (option.data.__isNew__) return true;
    var _ignoreCase$ignoreAcc = objectSpread2_objectSpread2({
        ignoreCase: true,
        ignoreAccents: true,
        stringify: defaultStringify,
        trim: true,
        matchFrom: 'any'
      }, config),
      ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
      ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
      stringify = _ignoreCase$ignoreAcc.stringify,
      trim = _ignoreCase$ignoreAcc.trim,
      matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var Select_40119e12_esm_excluded = ["innerRef"];
function DummyInput(_ref) {
  var innerRef = _ref.innerRef,
    props = _objectWithoutProperties(_ref, Select_40119e12_esm_excluded);
  // Remove animation props not meant for HTML elements
  var filteredProps = index_a86253bb_esm_removeProps(props, 'onExited', 'in', 'enter', 'exit', 'appear');
  return emotion_react_esm_jsx("input", _extends({
    ref: innerRef
  }, filteredProps, {
    css: /*#__PURE__*/emotion_react_esm_css({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: 'transparent',
      fontSize: 'inherit',
      gridArea: '1 / 1 / 2 / 3',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(.01)'
    },  true ? "" : undefined,  true ? "" : undefined)
  }));
}
var cancelScroll = function cancelScroll(event) {
  event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var isBottom = Object(compat_module["useRef"])(false);
  var isTop = Object(compat_module["useRef"])(false);
  var touchStart = Object(compat_module["useRef"])(0);
  var scrollTarget = Object(compat_module["useRef"])(null);
  var handleEventDelta = Object(compat_module["useCallback"])(function (event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
      scrollTop = _scrollTarget$current.scrollTop,
      scrollHeight = _scrollTarget$current.scrollHeight,
      clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;

    // reset bottom/top flags
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    }

    // bottom limit
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;

      // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }

    // cancel scroll
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = Object(compat_module["useCallback"])(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = Object(compat_module["useCallback"])(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = Object(compat_module["useCallback"])(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = Object(compat_module["useCallback"])(function (el) {
    // bail early if no element is available to attach to
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener('wheel', onWheel, notPassive);
    el.addEventListener('touchstart', onTouchStart, notPassive);
    el.addEventListener('touchmove', onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = Object(compat_module["useCallback"])(function (el) {
    // bail early if no element is available to detach from
    if (!el) return;
    el.removeEventListener('wheel', onWheel, false);
    el.removeEventListener('touchstart', onTouchStart, false);
    el.removeEventListener('touchmove', onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  Object(compat_module["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};
function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
    _ref$accountForScroll = _ref.accountForScrollbars,
    accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = Object(compat_module["useRef"])({});
  var scrollTarget = Object(compat_module["useRef"])(null);
  var addScrollLock = Object(compat_module["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }

    // apply the lock styles and padding if this is the first scroll lock
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }

    // account for touch devices
    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions);

      // Allow scroll on provided target
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }

    // increment active scroll locks
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = Object(compat_module["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    // safely decrement active scroll locks
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

    // reapply original body styles, if any
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }

    // remove touch listeners
    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  Object(compat_module["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var blurSelectInput = function blurSelectInput() {
  return document.activeElement && document.activeElement.blur();
};
var _ref2$1 =  true ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : undefined;
function ScrollManager(_ref) {
  var children = _ref.children,
    lockEnabled = _ref.lockEnabled,
    _ref$captureEnabled = _ref.captureEnabled,
    captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return emotion_react_esm_jsx(compat_module["Fragment"], null, lockEnabled && emotion_react_esm_jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
function Select_40119e12_esm_EMOTION_STRINGIFIED_CSS_ERROR_() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Select_40119e12_esm_ref2 =  true ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : undefined;
var Select_40119e12_esm_RequiredInput = function RequiredInput(_ref) {
  var name = _ref.name,
    onFocus = _ref.onFocus;
  return emotion_react_esm_jsx("input", {
    required: true,
    name: name,
    tabIndex: -1,
    onFocus: onFocus,
    css: Select_40119e12_esm_ref2
    // Prevent `Switching from uncontrolled to controlled` error
    ,

    value: "",
    onChange: function onChange() {}
  });
};
var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var Select_40119e12_esm_isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: index_a86253bb_esm_groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: index_a86253bb_esm_indicatorSeparatorCSS,
  input: index_a86253bb_esm_inputCSS,
  loadingIndicator: index_a86253bb_esm_loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: index_a86253bb_esm_menuCSS,
  menuList: index_a86253bb_esm_menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: index_a86253bb_esm_multiValueCSS,
  multiValueLabel: index_a86253bb_esm_multiValueLabelCSS,
  multiValueRemove: index_a86253bb_esm_multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: index_a86253bb_esm_optionCSS,
  placeholder: index_a86253bb_esm_placeholderCSS,
  singleValue: index_a86253bb_esm_css,
  valueContainer: index_a86253bb_esm_valueContainerCSS
};
// Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // initialize with source styles
  var styles = objectSpread2_objectSpread2({}, source);

  // massage in target styles
  Object.keys(target).forEach(function (keyAsString) {
    var key = keyAsString;
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}
var Select_40119e12_esm_colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var Select_40119e12_esm_borderRadius = 4;
// Used to calculate consistent margin/padding on elements
var Select_40119e12_esm_baseUnit = 4;
// The minimum height of the control
var Select_40119e12_esm_controlHeight = 38;
// The amount of space between the control and menu */
var menuGutter = Select_40119e12_esm_baseUnit * 2;
var Select_40119e12_esm_spacing = {
  baseUnit: Select_40119e12_esm_baseUnit,
  controlHeight: Select_40119e12_esm_controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: Select_40119e12_esm_borderRadius,
  colors: Select_40119e12_esm_colors,
  spacing: Select_40119e12_esm_spacing
};
var defaultProps = {
  'aria-live': 'polite',
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: Select_40119e12_esm_createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: Select_40119e12_esm_isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = Select_40119e12_esm_getOptionLabel(props, option);
  var value = getOptionValue(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if ('options' in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
    inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
    isSelected = categorizedOption.isSelected,
    label = categorizedOption.label,
    value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
    lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}
var Select_40119e12_esm_getOptionLabel = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;
  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue(props, option);
  return selectValue.some(function (i) {
    return getOptionValue(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
    isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select_40119e12_esm_Select = /*#__PURE__*/function (_Component) {
  _inherits(Select, _Component);
  var _super = _createSuper(Select);
  // Misc. Instance Properties
  // ------------------------------

  // TODO

  // Refs
  // ------------------------------

  // Lifecycle
  // ------------------------------

  function Select(_props) {
    var _this;
    _classCallCheck(this, Select);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;
    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange(newValue, actionMeta);
    };
    _this.setValue = function (newValue, action, option) {
      var _this$props2 = _this.props,
        closeMenuOnSelect = _this$props2.closeMenuOnSelect,
        isMulti = _this$props2.isMulti,
        inputValue = _this$props2.inputValue;
      _this.onInputChange('', {
        action: 'set-value',
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      // when the select value should change, we should reset focusedValue
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };
    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
        blurInputOnSelect = _this$props3.blurInputOnSelect,
        isMulti = _this$props3.isMulti,
        name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        })), 'deselect-option', newValue);
      } else if (!isDisabled) {
        // Select option if option is not disabled
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), 'select-option', newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), 'select-option');
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: 'select-option',
          option: newValue,
          name: name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: 'clear',
        removedValues: selectValue
      });
    };
    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };
    _this.getValue = function () {
      return _this.state.selectValue;
    };
    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function (data) {
      return Select_40119e12_esm_getOptionLabel(_this.props, data);
    };
    _this.getOptionValue = function (data) {
      return getOptionValue(_this.props, data);
    };
    _this.getStyles = function (key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function (key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function () {
      return index_a86253bb_esm_defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: objectSpread2_objectSpread2({
          value: value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function (event) {
      // Event captured by dropdown indicator
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
        isMulti = _this$props4.isMulti,
        menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };
    _this.onTouchStart = function (_ref2) {
      var touches = _ref2.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }

      // reset move vars
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function (event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: 'input-change',
        prevInputValue: prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function (event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange('', {
        action: 'input-blur',
        prevInputValue: prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      _this.setState({
        focusedOption: focusedOption
      });
    };
    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
        isMulti = _this$props5.isMulti,
        backspaceRemovesValue = _this$props5.backspaceRemovesValue,
        escapeClearsValue = _this$props5.escapeClearsValue,
        inputValue = _this$props5.inputValue,
        isClearable = _this$props5.isClearable,
        isDisabled = _this$props5.isDisabled,
        menuIsOpen = _this$props5.menuIsOpen,
        onKeyDown = _this$props5.onKeyDown,
        tabSelectsValue = _this$props5.tabSelectsValue,
        openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
        focusedOption = _this$state.focusedOption,
        focusedValue = _this$state.focusedValue,
        selectValue = _this$state.selectValue;
      if (isDisabled) return;
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }

      // Block option hover events when the user has just pressed a key
      _this.blockOptionHover = true;
      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;
          _this.focusValue('previous');
          break;
        case 'ArrowRight':
          if (!isMulti || inputValue) return;
          _this.focusValue('next');
          break;
        case 'Delete':
        case 'Backspace':
          if (inputValue) return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case 'Tab':
          if (_this.isComposing) return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
          // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange('', {
              action: 'menu-close',
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case ' ':
          // space
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu('first');
            break;
          }
          if (!focusedOption) return;
          _this.selectOption(focusedOption);
          break;
        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }
          break;
        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }
          break;
        case 'PageUp':
          if (!menuIsOpen) return;
          _this.focusOption('pageup');
          break;
        case 'PageDown':
          if (!menuIsOpen) return;
          _this.focusOption('pagedown');
          break;
        case 'Home':
          if (!menuIsOpen) return;
          _this.focusOption('first');
          break;
        case 'End':
          if (!menuIsOpen) return;
          _this.focusOption('last');
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = index_a86253bb_esm_cleanValue(_props.value);

    // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusedOption = focusableOptions[optionIndex];
    }
    return _this;
  }
  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }

      // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
        isDisabled = _this$props6.isDisabled,
        menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
      // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled ||
      // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programmatically disabled while focused
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: true
        });
      }

      // scroll the focused option into view if necessary
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }

    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange('', {
        action: 'menu-close',
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }

    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }

    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state,
        selectValue = _this$state2.selectValue,
        isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }

      // only scroll if the menu isn't already open
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        focusedValue = _this$state3.focusedValue;

      // Only multiselects support value focusing
      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;
      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'
      var focusedIndex = options.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value:
    // ==============================
    // Getters
    // ==============================

    function getTheme() {
      // Use the default theme if there are no customisations.
      if (!this.props.theme) {
        return defaultTheme;
      }
      // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.
      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      }
      // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.
      return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
        cx = this.cx,
        getStyles = this.getStyles,
        getClassNames = this.getClassNames,
        getValue = this.getValue,
        selectOption = this.selectOption,
        setValue = this.setValue,
        props = this.props;
      var isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue: clearValue,
        cx: cx,
        getStyles: getStyles,
        getClassNames: getClassNames,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        selectProps: props,
        setValue: setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
        isClearable = _this$props7.isClearable,
        isMulti = _this$props7.isMulti;

      // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable
      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    }

    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value:
    // ==============================
    // Composition Handlers
    // ==============================

    function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value:
    // ==============================
    // Touch Handlers
    // ==============================

    function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value:
    // ==============================
    // Renderers
    // ==============================
    function renderInput() {
      var _this$props8 = this.props,
        isDisabled = _this$props8.isDisabled,
        isSearchable = _this$props8.isSearchable,
        inputId = _this$props8.inputId,
        inputValue = _this$props8.inputValue,
        tabIndex = _this$props8.tabIndex,
        form = _this$props8.form,
        menuIsOpen = _this$props8.menuIsOpen,
        required = _this$props8.required;
      var _this$getComponents = this.getComponents(),
        Input = _this$getComponents.Input;
      var _this$state4 = this.state,
        inputIsHidden = _this$state4.inputIsHidden,
        ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId('input');

      // aria attributes makes the JSX "noisy", separated for clarity
      var ariaAttributes = objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2({
        'aria-autocomplete': 'list',
        'aria-expanded': menuIsOpen,
        'aria-haspopup': true,
        'aria-errormessage': this.props['aria-errormessage'],
        'aria-invalid': this.props['aria-invalid'],
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby'],
        'aria-required': required,
        role: 'combobox'
      }, menuIsOpen && {
        'aria-controls': this.getElementId('listbox'),
        'aria-owns': this.getElementId('listbox')
      }), !isSearchable && {
        'aria-readonly': true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
        'aria-describedby': this.getElementId('live-region')
      } : {
        'aria-describedby': this.getElementId('placeholder')
      });
      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/compat_module["createElement"](DummyInput, _extends({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex: tabIndex,
          inputMode: "none",
          form: form,
          value: ""
        }, ariaAttributes));
      }
      return /*#__PURE__*/compat_module["createElement"](Input, _extends({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(),
        MultiValue = _this$getComponents2.MultiValue,
        MultiValueContainer = _this$getComponents2.MultiValueContainer,
        MultiValueLabel = _this$getComponents2.MultiValueLabel,
        MultiValueRemove = _this$getComponents2.MultiValueRemove,
        SingleValue = _this$getComponents2.SingleValue,
        Placeholder = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props,
        controlShouldRenderValue = _this$props9.controlShouldRenderValue,
        isDisabled = _this$props9.isDisabled,
        isMulti = _this$props9.isMulti,
        inputValue = _this$props9.inputValue,
        placeholder = _this$props9.placeholder;
      var _this$state5 = this.state,
        selectValue = _this$state5.selectValue,
        focusedValue = _this$state5.focusedValue,
        isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/compat_module["createElement"](Placeholder, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused,
          innerProps: {
            id: this.getElementId('placeholder')
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /*#__PURE__*/compat_module["createElement"](MultiValue, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: key,
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /*#__PURE__*/compat_module["createElement"](SingleValue, _extends({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
        ClearIndicator = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props,
        isDisabled = _this$props10.isDisabled,
        isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/compat_module["createElement"](ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
        LoadingIndicator = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props,
        isDisabled = _this$props11.isDisabled,
        isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/compat_module["createElement"](LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
        DropdownIndicator = _this$getComponents5.DropdownIndicator,
        IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

      // separator doesn't make sense without the dropdown indicator
      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/compat_module["createElement"](IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
        DropdownIndicator = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/compat_module["createElement"](DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(),
        Group = _this$getComponents7.Group,
        GroupHeading = _this$getComponents7.GroupHeading,
        Menu = _this$getComponents7.Menu,
        MenuList = _this$getComponents7.MenuList,
        MenuPortal = _this$getComponents7.MenuPortal,
        LoadingMessage = _this$getComponents7.LoadingMessage,
        NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
        Option = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
        captureMenuScroll = _this$props12.captureMenuScroll,
        inputValue = _this$props12.inputValue,
        isLoading = _this$props12.isLoading,
        loadingMessage = _this$props12.loadingMessage,
        minMenuHeight = _this$props12.minMenuHeight,
        maxMenuHeight = _this$props12.maxMenuHeight,
        menuIsOpen = _this$props12.menuIsOpen,
        menuPlacement = _this$props12.menuPlacement,
        menuPosition = _this$props12.menuPosition,
        menuPortalTarget = _this$props12.menuPortalTarget,
        menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
        noOptionsMessage = _this$props12.noOptionsMessage,
        onMenuScrollToTop = _this$props12.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null;

      // TODO: Internal Option Type here
      var render = function render(props, id) {
        var type = props.type,
          data = props.data,
          isDisabled = props.isDisabled,
          isSelected = props.isSelected,
          label = props.label,
          value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /*#__PURE__*/compat_module["createElement"](Option, _extends({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var _data = item.data,
              options = item.options,
              groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/compat_module["createElement"](Group, _extends({}, commonProps, {
              key: groupId,
              data: _data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/compat_module["createElement"](LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });
        if (_message === null) return null;
        menuUI = /*#__PURE__*/compat_module["createElement"](NoOptionsMessage, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/compat_module["createElement"](index_a86253bb_esm_MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
          _ref4$placerProps = _ref4.placerProps,
          placement = _ref4$placerProps.placement,
          maxHeight = _ref4$placerProps.maxHeight;
        return /*#__PURE__*/compat_module["createElement"](Menu, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove,
            id: _this4.getElementId('listbox')
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/compat_module["createElement"](ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/compat_module["createElement"](MenuList, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            isLoading: isLoading,
            maxHeight: maxHeight,
            focusedOption: focusedOption
          }), menuUI);
        }));
      });

      // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`
      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/compat_module["createElement"](MenuPortal, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props,
        delimiter = _this$props13.delimiter,
        isDisabled = _this$props13.isDisabled,
        isMulti = _this$props13.isMulti,
        name = _this$props13.name,
        required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;
      if (required && !this.hasValue()) {
        return /*#__PURE__*/compat_module["createElement"](Select_40119e12_esm_RequiredInput, {
          name: name,
          onFocus: this.onValueInputFocus
        });
      }
      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/compat_module["createElement"]("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/compat_module["createElement"]("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/compat_module["createElement"]("input", {
            name: name,
            type: "hidden",
            value: ""
          });
          return /*#__PURE__*/compat_module["createElement"]("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
        return /*#__PURE__*/compat_module["createElement"]("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state,
        ariaSelection = _this$state6.ariaSelection,
        focusedOption = _this$state6.focusedOption,
        focusedValue = _this$state6.focusedValue,
        isFocused = _this$state6.isFocused,
        selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /*#__PURE__*/compat_module["createElement"](Select_40119e12_esm_LiveRegion, _extends({}, commonProps, {
        id: this.getElementId('live-region'),
        ariaSelection: ariaSelection,
        focusedOption: focusedOption,
        focusedValue: focusedValue,
        isFocused: isFocused,
        selectValue: selectValue,
        focusableOptions: focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
        Control = _this$getComponents8.Control,
        IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
        SelectContainer = _this$getComponents8.SelectContainer,
        ValueContainer = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props,
        className = _this$props14.className,
        id = _this$props14.id,
        isDisabled = _this$props14.isDisabled,
        menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/compat_module["createElement"](SelectContainer, _extends({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/compat_module["createElement"](Control, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/compat_module["createElement"](ValueContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/compat_module["createElement"](IndicatorsContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
        clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
        inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
        ariaSelection = state.ariaSelection,
        isFocused = state.isFocused,
        prevWasFocused = state.prevWasFocused;
      var options = props.options,
        value = props.value,
        menuIsOpen = props.menuIsOpen,
        inputValue = props.inputValue,
        isMulti = props.isMulti;
      var selectValue = index_a86253bb_esm_cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      // some updates should toggle the state of the input visibility
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        // If `value` or `defaultValue` props are not empty then announce them
        // when the Select is initially focused
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: 'initial-input-focus'
        };
        hasKeptFocus = !prevWasFocused;
      }

      // If the 'initial-input-focus' action has been set already
      // then reset the ariaSelection to null
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
        newAriaSelection = null;
      }
      return objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select;
}(compat_module["Component"]);
Select_40119e12_esm_Select.defaultProps = defaultProps;

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("yO+l");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("nxTg");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("RiSW");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__("Pe5x");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("5WRv");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("e+GP");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("hc4W");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");

// CONCATENATED MODULE: ../node_modules/react-select/dist/react-select.esm.js

























var StateManagedSelect = /*#__PURE__*/Object(compat_module["forwardRef"])(function (props, ref) {
  var baseSelectProps = useStateManager(props);
  return /*#__PURE__*/compat_module["createElement"](Select_40119e12_esm_Select, _extends({
    ref: ref
  }, baseSelectProps));
});
var react_select_esm_NonceProvider = function NonceProvider(_ref) {
  var nonce = _ref.nonce,
    children = _ref.children,
    cacheKey = _ref.cacheKey;
  var emotionCache = Object(compat_module["useMemo"])(function () {
    return emotion_cache_esm({
      key: cacheKey,
      nonce: nonce
    });
  }, [cacheKey, nonce]);
  return /*#__PURE__*/compat_module["createElement"](CacheProvider, {
    value: emotionCache
  }, children);
};
/* harmony default export */ var react_select_esm = __webpack_exports__["a"] = (StateManagedSelect);


/***/ }),

/***/ "Vz2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "007383c9222d1d10f99e78cbca777fa2.webp");

/***/ }),

/***/ "WI9V":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "Y3FI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exec", function() { return exec; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var EMPTY$1 = {};
function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var Link = function Link(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', assign({
    onClick: handleLinkClick
  }, props));
};
var Route = function Route(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(props.component, props);
};
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "YOMV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("okHz");
/* harmony import */ var _assets_results_bell_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CpeD");
/* harmony import */ var _components_results_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5hT1");
/* harmony import */ var _components_results_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+LEj");
/* harmony import */ var _components_results_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("79EO");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/ETS");






var Results = function Results() {
  return h(_components_layout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].results
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].container
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].pageTitle
  }, h("h2", null, "Your results ", h("img", {
    src: _assets_results_bell_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "bell"
  })), h("p", null, "Your profile analysis is complete! Please find your results below.")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].resultGrid
  }, h(_components_results_sidebar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    result: JSON.parse(localStorage.getItem('result'))
  }), h(_components_results_report__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null)), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].callToForm
  }, h(_components_results_form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)))));
};
/* harmony default export */ __webpack_exports__["a"] = (Results);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "YPJM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "c574758bcd8d2de374cfe7a4bda92fcd.webp");

/***/ }),

/***/ "Zhxd":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("+Sw5");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "a+yp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "75a6c6b506599ac54c0bcf3022a07e4f.webp");

/***/ }),

/***/ "aqZz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "21c5fabbada394b262606237a2264383.webp");

/***/ }),

/***/ "bI+Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "fcb1c95e0d38c8d074abb9e0e8801bf6.webp");

/***/ }),

/***/ "e+GP":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "eef+":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("WI9V");
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "fEz+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UpPA");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EbY7");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Y3FI");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable no-prototype-builtins */




var TopBanner = function TopBanner() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])({
      age: '',
      education: '',
      workExperience: '',
      language: 'French',
      haveRelative: 'Yes'
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var age = [{
    value: '18-25',
    label: '18-25'
  }, {
    value: '31-45',
    label: '31-45'
  }, {
    value: '46-64',
    label: '46-64'
  }, {
    value: '65+',
    label: '65+'
  }];
  var education = [{
    value: 'High School Diploma',
    label: 'High School Diploma'
  }, {
    value: '1-year Program Diploma or Certificate',
    label: '1-year Program Diploma or Certificate'
  }, {
    value: '2-year Program Diploma or Certificate',
    label: '2-year Program Diploma or Certificate'
  }, {
    value: '3-year Program Diploma or Certificate',
    label: '3-year Program Diploma or Certificate'
  }, {
    value: 'Bachelor’s Degree',
    label: 'Bachelor’s Degree'
  }];
  var experience = [{
    value: '1 year',
    label: '1 year'
  }, {
    value: '2 year',
    label: '2 year'
  }, {
    value: '4 year',
    label: '4 year'
  }, {
    value: '8 year',
    label: '8 year'
  }, {
    value: '9+ years',
    label: '9+ years'
  }];
  var relatives = [{
    value: 'Yes',
    label: 'Yes'
  }, {
    value: 'No',
    label: 'No'
  }];
  var handleInputChange = function handleInputChange(val, name) {
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, val.value)));
    setErrors(_defineProperty({}, name, ''));
  };
  var handleOnBlur = function handleOnBlur(val, name) {
    if (values[name] === '') {
      setErrors(_defineProperty({}, name, "".concat(name, " is required")));
    }
  };
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (Object.values(values).every(function (val) {
      return val !== '';
    })) {
      localStorage.setItem('result', JSON.stringify(values));
    }
  }, [values]);
  var handleCheckOption = function handleCheckOption() {
    if (Object.values(values).every(function (val) {
      return val !== '';
    })) {
      Object(preact_router__WEBPACK_IMPORTED_MODULE_3__["route"])('/results/');
    }
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].topBanner
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].topBannerContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].topBannerTitle
  }, h("h3", null, "Check if You Can Immigrate to ", h("span", null, "Canada")), h("p", null, "Get a full list of eligible immigration programs based on your profile.")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].formGrid
  }, h("h4", null, "Complete the Form for ", h("span", null, "Instant Results")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].formBox
  }, h("ul", null, h("li", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].active
  }, h(AgeIcon, null)), h("li", null, h(EducationIcon, null)), h("li", null, h(ExperienceIcon, null)), h("li", null, h(LanguageIcon, null)), h("li", null, h(RelativesIcon, null))), h("form", null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].formScroll
  }, h(SelectInput, {
    label: "What is your age?",
    options: age,
    name: "age",
    errors: errors,
    onChange: handleInputChange,
    onBlur: handleOnBlur,
    counter: "2"
  }), h(SelectInput, {
    label: "What is your level of education?",
    options: education,
    name: "education",
    errors: errors,
    onChange: handleInputChange,
    onBlur: handleOnBlur,
    counter: "3"
  }), h(SelectInput, {
    label: "Do you have work experience inside Canada?",
    options: experience,
    name: "workExperience",
    errors: errors,
    onChange: handleInputChange,
    onBlur: handleOnBlur,
    counter: "4"
  }), h(SelectInput, {
    label: "Do you have Canadian relatives?",
    options: relatives,
    name: "language",
    errors: errors,
    onChange: handleInputChange,
    onBlur: handleOnBlur,
    counter: "5"
  }), h(SelectInput, {
    label: "Do you have Canadian relatives?",
    options: relatives,
    name: "haveRelative",
    errors: errors,
    onChange: handleInputChange,
    onBlur: handleOnBlur,
    counter: "6"
  })), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].buttonGrid
  }, h("button", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].backBtn
  }, "Back"), h("button", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].submitBtn,
    onClick: handleCheckOption
  }, "Check My Options")))))));
};
/* harmony default export */ __webpack_exports__["a"] = (TopBanner);
var SelectInput = function SelectInput(_ref) {
  var label = _ref.label,
    options = _ref.options,
    name = _ref.name,
    errors = _ref.errors,
    _onChange = _ref.onChange,
    _onBlur = _ref.onBlur,
    counter = _ref.counter;
  console.log("errrroooo->", errors !== null && errors !== void 0 && errors[name] ? errors === null || errors === void 0 ? void 0 : errors[name] : 'helo');
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].formGroup
  }, h("label", {
    htmlFor: "react-select-".concat(counter, "-input")
  }, label), h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    inputProps: {
      id: name
    },
    options: options,
    onChange: function onChange(e) {
      return _onChange(e, name);
    },
    onBlur: function onBlur(e) {
      return _onBlur(e, name);
    }
  }));
};
var AgeIcon = function AgeIcon() {
  return h("svg", {
    width: "37",
    height: "36",
    viewBox: "0 0 37 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M27.1822 26.9123H10.5694C10.37 26.9123 10.1788 26.8331 10.0378 26.6921C9.89684 26.5512 9.81766 26.36 9.81766 26.1606C9.81766 21.8112 12.4576 18.9998 16.5432 18.9998H21.2083C25.2946 18.9998 27.9346 21.8112 27.9346 26.1606C27.9346 26.2594 27.9151 26.3572 27.8773 26.4484C27.8395 26.5397 27.7841 26.6226 27.7142 26.6924C27.6443 26.7622 27.5613 26.8176 27.47 26.8553C27.3788 26.893 27.2809 26.9124 27.1822 26.9123V26.9123ZM11.3511 25.4089H26.3996C26.1388 22.3209 24.24 20.5032 21.2076 20.5032H16.5425C13.5108 20.5032 11.6142 22.3231 11.3511 25.4089Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M18.8923 16.9998C16.4192 16.9998 14.7579 15.0634 14.7579 12.1813C14.7579 9.29928 16.4192 7.36363 18.8923 7.36363C21.3654 7.36363 23.0267 9.29928 23.0267 12.1813C23.0267 15.0634 21.3654 16.9998 18.8923 16.9998ZM18.8923 8.86705C16.9529 8.86705 16.2613 10.5794 16.2613 12.1813C16.2613 13.7832 16.9529 15.4964 18.8923 15.4964C20.8317 15.4964 21.5233 13.784 21.5233 12.1813C21.5233 10.5787 20.8317 8.86705 18.8923 8.86705V8.86705Z",
    fill: "#CED0D0"
  }));
};
var EducationIcon = function EducationIcon() {
  return h("svg", {
    width: "38",
    height: "36",
    viewBox: "0 0 38 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("g", {
    "clip-path": "url(#clip0_1_9)"
  }, h("path", {
    d: "M20.5679 27.2023C20.5397 27.2023 20.5117 27.1996 20.484 27.1944C20.3834 27.1749 20.2927 27.121 20.2275 27.042C20.1623 26.963 20.1266 26.8638 20.1265 26.7614V9.94126C20.1264 9.88471 20.1372 9.82867 20.1583 9.77619C20.4368 9.08194 23.0659 3.04594 29.9564 3.3827C30.0697 3.38814 30.1767 3.43704 30.2549 3.51922C30.3331 3.60141 30.3767 3.71058 30.3766 3.82405V20.5378C30.3766 20.5976 30.3646 20.6568 30.341 20.7119C30.3175 20.7669 30.2831 20.8165 30.2398 20.8578C30.1965 20.8991 30.1452 20.9311 30.0892 20.952C30.0331 20.9728 29.9734 20.9821 29.9136 20.9792C23.5978 20.6654 21.0794 26.6727 20.9761 26.9291C20.9428 27.01 20.8862 27.0791 20.8135 27.1277C20.7408 27.1764 20.6553 27.2023 20.5679 27.2023V27.2023ZM21.0092 10.0282V25.0396C22.2547 23.1127 24.9329 20.0841 29.455 20.0841H29.4952V4.25173C23.7196 4.19259 21.3747 9.15741 21.0092 10.0282Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M20.5679 27.2022C20.4832 27.2022 20.4003 27.1779 20.329 27.132C20.2578 27.0862 20.2012 27.0208 20.1662 26.9437C20.1311 26.8665 20.1189 26.781 20.1311 26.6971C20.1434 26.6133 20.1795 26.5348 20.2351 26.4709C20.2793 26.4184 24.7926 21.3613 31.8371 22.771V6.85213C31.2042 6.71514 30.5612 6.62939 29.9145 6.5957C29.8566 6.59282 29.7999 6.57855 29.7475 6.55372C29.6951 6.52889 29.6481 6.49398 29.6092 6.45099C29.5703 6.40799 29.5402 6.35775 29.5208 6.30314C29.5013 6.24853 29.4928 6.19062 29.4957 6.13272C29.5043 6.01691 29.5571 5.90884 29.6432 5.83094C29.7293 5.75303 29.8421 5.71127 29.9582 5.71431C30.7768 5.75693 31.5896 5.87663 32.3857 6.07181C32.4817 6.09533 32.567 6.1504 32.628 6.22818C32.689 6.30597 32.7221 6.40197 32.722 6.50081V23.3209C32.722 23.3878 32.7069 23.4538 32.6777 23.514C32.6484 23.5741 32.6059 23.6269 32.5534 23.6682C32.5008 23.7095 32.4395 23.7383 32.3741 23.7525C32.3088 23.7667 32.241 23.7658 32.176 23.7499C25.3535 22.0856 20.9457 27.0018 20.9025 27.0517C20.8608 27.0993 20.8093 27.1374 20.7516 27.1634C20.6939 27.1893 20.6312 27.2026 20.5679 27.2022V27.2022Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M20.5677 27.2025C20.4643 27.2026 20.3642 27.1663 20.2848 27.1001C20.2746 27.0917 18.9744 26.0612 15.4383 25.4049C15.3231 25.3835 15.2212 25.3173 15.1549 25.2208C15.0886 25.1243 15.0634 25.0054 15.0847 24.8903C15.1061 24.7751 15.1723 24.6732 15.2688 24.6069C15.3653 24.5406 15.4842 24.5154 15.5994 24.5367C17.9341 24.9701 19.3606 25.5647 20.1264 25.9694V10.2059C19.4427 9.7676 16.4574 8.16194 9.299 8.07897V18.9492C9.299 19.0662 9.25248 19.1785 9.16971 19.2612C9.08694 19.344 8.97469 19.3905 8.85764 19.3905C8.74058 19.3905 8.62831 19.344 8.54554 19.2612C8.46277 19.1785 8.41628 19.0662 8.41628 18.9492V7.63452C8.41628 7.51747 8.46277 7.40521 8.54554 7.32244C8.62831 7.23967 8.74058 7.19317 8.85764 7.19317C17.8423 7.21788 20.7301 9.53854 20.8493 9.6374C20.899 9.67889 20.9389 9.73081 20.9663 9.78946C20.9937 9.84811 21.0078 9.91207 21.0077 9.9768V26.7612C21.0077 26.8782 20.9612 26.9905 20.8785 27.0733C20.7957 27.156 20.6834 27.2025 20.5664 27.2025H20.5677Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M34.6211 27.2024H14.6321C14.515 27.2024 14.4027 27.1559 14.32 27.0732C14.2372 26.9904 14.1907 26.8781 14.1907 26.7611C14.1907 26.644 14.2372 26.5318 14.32 26.449C14.4027 26.3662 14.515 26.3197 14.6321 26.3197H34.1798V10.4181H32.5675C32.4504 10.4181 32.3382 10.3716 32.2554 10.2888C32.1726 10.206 32.1261 10.0938 32.1261 9.97671C32.1261 9.85965 32.1726 9.74739 32.2554 9.66462C32.3382 9.58185 32.4504 9.53535 32.5675 9.53535H34.6211C34.7382 9.53535 34.8504 9.58185 34.9332 9.66462C35.016 9.74739 35.0625 9.85965 35.0625 9.97671V26.7611C35.0625 26.8781 35.016 26.9904 34.9332 27.0732C34.8504 27.1559 34.7382 27.2024 34.6211 27.2024V27.2024Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M6.51575 20.1345C6.3987 20.1345 6.28645 20.088 6.20368 20.0053C6.12091 19.9225 6.07439 19.8102 6.07439 19.6932V9.97671C6.07439 9.85965 6.12091 9.74739 6.20368 9.66462C6.28645 9.58185 6.3987 9.53535 6.51575 9.53535H8.56983C8.68688 9.53535 8.79915 9.58185 8.88192 9.66462C8.9647 9.74739 9.01119 9.85965 9.01119 9.97671C9.01119 10.0938 8.9647 10.206 8.88192 10.2888C8.79915 10.3716 8.68688 10.4181 8.56983 10.4181H6.95711V19.6932C6.95711 19.8102 6.91062 19.9225 6.82785 20.0053C6.74508 20.088 6.63281 20.1345 6.51575 20.1345Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M10.1934 32.3454C10.1294 32.3455 10.0661 32.3316 10.0079 32.3048C9.94976 32.2779 9.89814 32.2387 9.85665 32.1899C9.81516 32.1411 9.78477 32.0839 9.76763 32.0222C9.75048 31.9605 9.74699 31.8958 9.75737 31.8326L9.86859 31.1533C9.88168 31.0734 9.91647 30.9987 9.96917 30.9373C10.0219 30.8759 10.0904 30.8301 10.1674 30.8051C11.0333 30.5222 11.5528 29.9965 12.2656 29.0635L14.678 25.6518C14.9384 25.2338 15.2174 24.6128 14.987 24.1472C14.8427 23.8528 14.5249 23.6617 14.2239 23.5545L13.9856 25.0304C13.9665 25.1454 13.9027 25.2482 13.8081 25.3163C13.7135 25.3844 13.5958 25.4124 13.4806 25.394C13.3655 25.3757 13.2623 25.3125 13.1936 25.2183C13.1249 25.1241 13.0962 25.0066 13.1139 24.8913L13.4202 22.9494C13.424 22.9224 13.4307 22.8959 13.44 22.8704L14.4808 16.4226C14.4917 16.3766 14.4929 16.3289 14.4843 16.2825C14.4758 16.236 14.4575 16.1919 14.4309 16.1529C14.3404 16.0249 14.1449 15.9322 13.8814 15.8881C13.5654 15.8378 13.2326 16.013 13.1907 16.25L12.0264 22.8915C12.0164 22.9487 11.9952 23.0033 11.9641 23.0522C11.933 23.1011 11.8926 23.1435 11.8451 23.1768C11.7977 23.2101 11.7441 23.2338 11.6875 23.2464C11.6309 23.259 11.5724 23.2604 11.5153 23.2504C11.4582 23.2404 11.4036 23.2192 11.3546 23.1881C11.3057 23.157 11.2633 23.1166 11.23 23.0691C11.1967 23.0217 11.1731 22.9681 11.1604 22.9115C11.1478 22.8549 11.1465 22.7964 11.1565 22.7393L11.6419 19.9517C11.6537 19.8972 11.6544 19.841 11.6441 19.7863C11.6338 19.7316 11.6127 19.6794 11.5819 19.633C11.5065 19.528 11.371 19.4565 11.1896 19.4295C10.6467 19.3444 10.5717 19.5266 10.5275 19.7914L10.0795 22.5389C10.059 22.6524 9.99482 22.7533 9.90079 22.8201C9.80675 22.8869 9.69031 22.9142 9.57639 22.8962C9.46247 22.8782 9.36012 22.8163 9.29125 22.7238C9.22237 22.6313 9.19244 22.5155 9.20787 22.4012L9.54199 20.2107C9.58083 19.9901 9.28776 19.6899 8.8389 19.6109C8.40019 19.5324 8.00517 19.8678 7.96015 20.1211L7.89041 20.6327C7.88732 20.6675 7.88249 20.7028 7.87587 20.7382L7.68564 22.1289C7.67779 22.1863 7.65869 22.2416 7.62946 22.2917C7.60022 22.3418 7.56141 22.3856 7.51524 22.4206C7.46907 22.4557 7.41645 22.4813 7.36038 22.496C7.30431 22.5108 7.24588 22.5143 7.18845 22.5065C7.13101 22.4986 7.07567 22.4795 7.02561 22.4503C6.97555 22.421 6.93173 22.3822 6.89667 22.3361C6.86161 22.2899 6.83599 22.2373 6.82127 22.1812C6.80654 22.1251 6.803 22.0667 6.81086 22.0093L7.01035 20.5528C7.01947 20.4896 7.00364 20.4253 6.96622 20.3736C6.92907 20.331 6.88385 20.2963 6.83316 20.2714C6.78247 20.2464 6.72733 20.2318 6.67095 20.2284C6.43438 20.2041 6.16648 20.2787 6.12852 20.5638L5.0706 26.9375C4.92848 27.8078 5.54284 28.736 6.03671 29.4814C6.09805 29.5743 6.12231 29.6867 6.10469 29.7966L5.87519 31.1966C5.85629 31.3121 5.79222 31.4155 5.69712 31.4839C5.60202 31.5522 5.48366 31.58 5.36806 31.5611C5.25247 31.5422 5.14912 31.4782 5.08075 31.3831C5.01238 31.288 4.98461 31.1696 5.00351 31.054L5.20521 29.8244C4.66984 29.0114 4.01354 27.9376 4.19935 26.7936L5.25419 20.4314C5.34864 19.7283 5.98376 19.2667 6.76099 19.3492C6.94112 19.3676 7.11593 19.421 7.27562 19.5063C7.45488 19.2246 7.71306 19.0018 8.01804 18.8657C8.32301 18.7296 8.66129 18.6862 8.99073 18.741C9.30144 18.7929 9.59563 18.917 9.8496 19.1034C10.1255 18.6457 10.6396 18.451 11.3255 18.5565C11.5125 18.5842 11.6933 18.6439 11.86 18.7331L12.3217 16.0973C12.4492 15.3823 13.2269 14.8875 14.024 15.0177C14.663 15.1223 14.9897 15.415 15.1512 15.6427C15.2454 15.7756 15.3118 15.9263 15.3462 16.0856C15.3807 16.2449 15.3825 16.4095 15.3516 16.5695L14.366 22.6731C14.8692 22.8209 15.4809 23.1462 15.7784 23.7566C16.1058 24.4222 15.9814 25.2241 15.4103 26.1399L12.974 29.5856C12.3371 30.4207 11.7254 31.1405 10.6957 31.551L10.6264 31.9751C10.6096 32.078 10.5569 32.1717 10.4777 32.2395C10.3984 32.3073 10.2977 32.3448 10.1934 32.3454V32.3454Z",
    fill: "#CED0D0"
  })), h("defs", null, h("clipPath", {
    id: "clip0_1_9"
  }, h("rect", {
    width: "36.8182",
    height: "36",
    fill: "white",
    transform: "translate(0.795456)"
  }))));
};
var ExperienceIcon = function ExperienceIcon() {
  return h("svg", {
    width: "38",
    height: "36",
    viewBox: "0 0 38 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M29.417 29.6084H8.71024C8.22798 29.6078 7.76566 29.416 7.42465 29.0749C7.08364 28.7339 6.89179 28.2716 6.89116 27.7893V16.5069C6.89116 16.3501 6.95345 16.1996 7.06436 16.0887C7.17527 15.9778 7.3257 15.9155 7.48254 15.9155C7.63939 15.9155 7.78979 15.9778 7.9007 16.0887C8.01161 16.1996 8.07393 16.3501 8.07393 16.5069V27.7876C8.07409 27.9563 8.14117 28.118 8.26047 28.2373C8.37977 28.3566 8.54153 28.4237 8.71024 28.4239H29.417C29.5856 28.4236 29.7473 28.3564 29.8666 28.2372C29.9858 28.1179 30.053 27.9562 30.0533 27.7876V16.5069C30.0533 16.3501 30.1156 16.1996 30.2265 16.0887C30.3374 15.9778 30.4878 15.9155 30.6447 15.9155C30.8015 15.9155 30.9519 15.9778 31.0629 16.0887C31.1738 16.1996 31.2361 16.3501 31.2361 16.5069V27.7876C31.2359 28.2701 31.0443 28.7329 30.7032 29.0743C30.3621 29.4157 29.8995 29.6078 29.417 29.6084V29.6084Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M17.2071 18.6205C17.172 18.6206 17.137 18.6174 17.1024 18.6111L5.98741 16.6264C5.85072 16.602 5.72698 16.5302 5.63789 16.4237C5.54879 16.3172 5.50001 16.1827 5.50009 16.0439V9.56055C5.50009 9.40371 5.56241 9.25329 5.67332 9.14238C5.78423 9.03147 5.93463 8.96917 6.09148 8.96917H32.0331C32.1108 8.96917 32.1877 8.98446 32.2594 9.01418C32.3312 9.0439 32.3964 9.08746 32.4513 9.14238C32.5062 9.19729 32.5498 9.26248 32.5795 9.33423C32.6092 9.40598 32.6245 9.48289 32.6245 9.56055V16.0463C32.6246 16.1851 32.5758 16.3196 32.4867 16.4261C32.3976 16.5326 32.2739 16.6043 32.1372 16.6288L21.0482 18.6087C20.9707 18.625 20.8907 18.6256 20.813 18.6104C20.7353 18.5952 20.6614 18.5645 20.5957 18.5202C20.5301 18.4759 20.474 18.4189 20.4308 18.3525C20.3876 18.2862 20.3582 18.2118 20.3443 18.1338C20.3304 18.0559 20.3323 17.9759 20.3499 17.8987C20.3675 17.8215 20.4004 17.7486 20.4467 17.6843C20.4929 17.6201 20.5517 17.5658 20.6193 17.5246C20.687 17.4835 20.7623 17.4564 20.8406 17.4449L31.4447 15.5525V10.1519H6.68286V15.5513L17.3106 17.449C17.4565 17.4746 17.5875 17.5539 17.6777 17.6714C17.7679 17.7889 17.8107 17.9359 17.7977 18.0835C17.7847 18.231 17.7168 18.3683 17.6074 18.4682C17.4981 18.5681 17.3552 18.6233 17.2071 18.6229V18.6205Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M22.4341 10.1518H15.6923C15.5355 10.1518 15.385 10.0895 15.2741 9.97863C15.1632 9.86772 15.1009 9.7173 15.1009 9.56046V6.90987C15.1009 6.59618 15.2256 6.29534 15.4474 6.07353C15.6692 5.85172 15.97 5.7271 16.2837 5.7271H21.8427C22.1564 5.7271 22.4572 5.85172 22.6791 6.07353C22.9009 6.29534 23.0255 6.59618 23.0255 6.90987V9.56046C23.0255 9.7173 22.9632 9.86772 22.8523 9.97863C22.7414 10.0895 22.5909 10.1518 22.4341 10.1518V10.1518ZM16.2837 8.96907H21.8427V6.90987H16.2837V8.96907Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M19.0628 20.8045C18.5793 20.8046 18.1065 20.6614 17.7044 20.3928C17.3022 20.1242 16.9888 19.7424 16.8037 19.2956C16.6185 18.8489 16.5701 18.3572 16.6644 17.883C16.7587 17.4087 16.9916 16.973 17.3335 16.631C17.6754 16.2891 18.1111 16.0562 18.5854 15.9619C19.0597 15.8676 19.5513 15.9161 19.9981 16.1012C20.4448 16.2863 20.8267 16.5997 21.0953 17.0019C21.3638 17.404 21.5071 17.8768 21.507 18.3603C21.5064 19.0084 21.2487 19.6297 20.7904 20.088C20.3322 20.5462 19.7109 20.8039 19.0628 20.8045V20.8045ZM19.0628 17.0983C18.8132 17.0982 18.5691 17.1721 18.3615 17.3107C18.1539 17.4493 17.9921 17.6464 17.8965 17.877C17.8009 18.1076 17.7758 18.3613 17.8244 18.6062C17.873 18.851 17.9932 19.076 18.1696 19.2525C18.3461 19.4291 18.571 19.5493 18.8158 19.5981C19.0606 19.6468 19.3144 19.6219 19.545 19.5264C19.7757 19.4309 19.9728 19.2691 20.1115 19.0615C20.2502 18.854 20.3242 18.61 20.3242 18.3603C20.3238 18.0259 20.1907 17.7052 19.9543 17.4687C19.7179 17.2321 19.3973 17.099 19.0628 17.0983V17.0983Z",
    fill: "#CED0D0"
  }));
};
var LanguageIcon = function LanguageIcon() {
  return h("svg", {
    width: "38",
    height: "36",
    viewBox: "0 0 38 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M26.4083 6.54859C26.6895 6.51734 26.9427 6.71995 26.974 7.00112C27.0343 7.54421 27.0712 8.18523 27.0711 8.89428H29.9887C30.2716 8.89428 30.5009 9.12361 30.5009 9.40651C30.5009 9.68941 30.2716 9.91874 29.9887 9.91874H27.0458C26.9755 11.3625 26.7512 12.9989 26.2818 14.6276C25.8599 16.0917 25.2351 17.5646 24.3354 18.8871C25.1029 19.4179 26.033 19.8371 27.1525 20.061C27.4299 20.1165 27.6098 20.3864 27.5544 20.6638C27.4989 20.9412 27.229 21.1211 26.9516 21.0656C25.6636 20.808 24.5975 20.3242 23.7208 19.7122C22.9433 20.6653 21.9974 21.5114 20.851 22.1802C20.6066 22.3227 20.293 22.2402 20.1504 21.9958C20.0079 21.7515 20.0904 21.4378 20.3348 21.2953C21.3591 20.6978 22.2123 19.9381 22.9195 19.0733C20.9841 17.3191 20.22 14.9357 20.0832 13.5679C20.055 13.2864 20.2604 13.0354 20.5419 13.0072C20.8234 12.9791 21.0744 13.1844 21.1026 13.4659C21.2217 14.6578 21.8852 16.7089 23.5344 18.2427C24.3348 17.0482 24.9044 15.7075 25.2974 14.3439C25.7378 12.8157 25.9506 11.2769 26.0201 9.91874H18.8319C18.549 9.91874 18.3196 9.68941 18.3196 9.40651C18.3196 9.12361 18.549 8.89428 18.8319 8.89428H26.0467C26.0468 8.22512 26.0122 7.62201 25.9558 7.11425C25.9245 6.83308 26.1272 6.57983 26.4083 6.54859Z",
    fill: "#CED0D0"
  }), h("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M15.1839 15.6456C15.1004 15.4704 14.9252 15.3574 14.7311 15.3537C14.5371 15.35 14.3577 15.4562 14.2676 15.6281L7.80841 27.9594C7.67714 28.21 7.77388 28.5195 8.02448 28.6508C8.27508 28.7821 8.58464 28.6853 8.71591 28.4347L10.2109 25.5806C10.3048 25.6981 10.4492 25.7733 10.6112 25.7733H18.8321C18.8452 25.7733 18.8583 25.7728 18.8712 25.7718L20.1309 28.4173C20.2526 28.6727 20.5582 28.7811 20.8136 28.6595C21.069 28.5379 21.1775 28.2322 21.0559 27.9768L15.1839 15.6456ZM18.3841 24.7488L14.6996 17.0114L10.6466 24.7488L18.3841 24.7488Z",
    fill: "#CED0D0"
  }));
};
var RelativesIcon = function RelativesIcon() {
  return h("svg", {
    width: "37",
    height: "36",
    viewBox: "0 0 37 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M29.8409 31.9634C29.7322 31.9634 29.6279 31.9202 29.5511 31.8433C29.4742 31.7664 29.431 31.6622 29.431 31.5535V26.6351C29.431 26.5264 29.4742 26.4221 29.5511 26.3453C29.6279 26.2684 29.7322 26.2252 29.8409 26.2252C29.9496 26.2252 30.0538 26.2684 30.1307 26.3453C30.2076 26.4221 30.2507 26.5264 30.2507 26.6351V31.5535C30.2507 31.6622 30.2076 31.7664 30.1307 31.8433C30.0538 31.9202 29.9496 31.9634 29.8409 31.9634V31.9634Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M31.0709 27.0452H22.8735C22.8163 27.0452 22.7596 27.0331 22.7073 27.0099C22.6549 26.9867 22.608 26.9527 22.5696 26.9102C22.5312 26.8678 22.5021 26.8177 22.4842 26.7633C22.4663 26.7088 22.46 26.6513 22.4657 26.5943L23.2424 18.4338C23.1378 18.4233 23.0412 18.373 22.9726 18.2933C22.9041 18.2136 22.8687 18.1105 22.874 18.0055C22.8793 17.9005 22.9247 17.8015 23.0009 17.729C23.0771 17.6565 23.1783 17.6161 23.2834 17.6162H23.6933C23.7505 17.6159 23.8072 17.6276 23.8597 17.6506C23.9121 17.6736 23.9592 17.7073 23.9978 17.7496C24.0364 17.7919 24.0657 17.8418 24.0839 17.8961C24.102 17.9504 24.1086 18.008 24.1031 18.065L23.3244 26.2234H30.62L29.8433 18.065C29.8379 18.0081 29.8444 17.9508 29.8625 17.8966C29.8805 17.8424 29.9096 17.7926 29.948 17.7504C29.9864 17.7081 30.0332 17.6744 30.0854 17.6512C30.1376 17.6281 30.1941 17.6162 30.2512 17.6162H30.661C30.7662 17.6161 30.8673 17.6565 30.9435 17.729C31.0197 17.8015 31.0652 17.9005 31.0704 18.0055C31.0757 18.1105 31.0404 18.2136 30.9718 18.2933C30.9033 18.373 30.8066 18.4233 30.702 18.4338L31.4808 26.5943C31.4865 26.6515 31.4802 26.7092 31.4622 26.7638C31.4442 26.8183 31.4149 26.8685 31.3762 26.911C31.3376 26.9535 31.2904 26.9874 31.2378 27.0105C31.1852 27.0336 31.1283 27.0454 31.0709 27.0452V27.0452Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M26.9717 31.9634C26.863 31.9634 26.7587 31.9202 26.6819 31.8433C26.605 31.7664 26.5618 31.6622 26.5618 31.5535V26.6351C26.5618 26.5264 26.605 26.4221 26.6819 26.3453C26.7587 26.2684 26.863 26.2252 26.9717 26.2252C27.0804 26.2252 27.1846 26.2684 27.2615 26.3453C27.3384 26.4221 27.3815 26.5264 27.3815 26.6351V31.5535C27.3815 31.6622 27.3384 31.7664 27.2615 31.8433C27.1846 31.9202 27.0804 31.9634 26.9717 31.9634V31.9634Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M24.1032 31.9634C23.9945 31.9634 23.8903 31.9202 23.8134 31.8433C23.7366 31.7664 23.6934 31.6622 23.6934 31.5535V26.6351C23.6934 26.5264 23.7366 26.4221 23.8134 26.3453C23.8903 26.2684 23.9945 26.2252 24.1032 26.2252C24.2119 26.2252 24.3162 26.2684 24.3931 26.3453C24.4699 26.4221 24.5131 26.5264 24.5131 26.6351V31.5535C24.5131 31.6622 24.4699 31.7664 24.3931 31.8433C24.3162 31.9202 24.2119 31.9634 24.1032 31.9634V31.9634Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M22.0536 24.1763H21.2339C21.177 24.1765 21.1207 24.1649 21.0686 24.1422C21.0165 24.1195 20.9697 24.0862 20.9312 24.0444C20.8926 24.0026 20.8632 23.9532 20.8447 23.8995C20.8263 23.8457 20.8192 23.7887 20.824 23.732L21.4138 16.7553C21.9257 13.8214 23.7041 12.2902 26.5605 12.2902H27.3802C28.5975 12.2902 29.6271 12.5681 30.4407 13.1165C30.4871 13.1458 30.527 13.1841 30.5583 13.2291C30.5896 13.2741 30.6115 13.325 30.6228 13.3786C30.634 13.4323 30.6344 13.4876 30.6239 13.5415C30.6134 13.5953 30.5922 13.6464 30.5616 13.6919C30.5309 13.7373 30.4915 13.7762 30.4456 13.8062C30.3996 13.8361 30.3482 13.8565 30.2942 13.8663C30.2403 13.876 30.1849 13.8748 30.1314 13.8627C30.078 13.8506 30.0274 13.828 29.9829 13.796C29.307 13.3407 28.4315 13.1099 27.3802 13.1099H26.5605C24.0857 13.1099 22.6668 14.3366 22.2257 16.8602L21.6782 23.3566H22.0519C22.1607 23.3566 22.2649 23.3998 22.3418 23.4766C22.4186 23.5535 22.4618 23.6578 22.4618 23.7665C22.4618 23.8752 22.4186 23.9794 22.3418 24.0563C22.2649 24.1331 22.1607 24.1763 22.0519 24.1763H22.0536Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M32.7102 24.1764H31.8905C31.7818 24.1764 31.6775 24.1332 31.6006 24.0563C31.5238 23.9795 31.4806 23.8752 31.4806 23.7665C31.4806 23.6578 31.5238 23.5536 31.6006 23.4767C31.6775 23.3998 31.7818 23.3566 31.8905 23.3566H32.2643L31.7134 16.8242C31.6475 16.452 31.5499 16.0862 31.4216 15.7306C31.4031 15.6801 31.3947 15.6264 31.3969 15.5726C31.3992 15.5187 31.412 15.4659 31.4347 15.4171C31.4573 15.3682 31.4894 15.3243 31.529 15.2878C31.5687 15.2514 31.6151 15.2231 31.6656 15.2046C31.7162 15.1861 31.7699 15.1777 31.8238 15.1799C31.8776 15.1822 31.9304 15.195 31.9792 15.2177C32.0281 15.2403 32.072 15.2724 32.1084 15.312C32.1449 15.3517 32.1732 15.3981 32.1917 15.4487C32.3403 15.8615 32.452 16.2867 32.5257 16.7192L33.1201 23.7321C33.1248 23.7887 33.1178 23.8457 33.0993 23.8995C33.0809 23.9533 33.0515 24.0026 33.0129 24.0444C32.9744 24.0862 32.9275 24.1195 32.8754 24.1422C32.8233 24.1649 32.767 24.1766 32.7102 24.1764V24.1764Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M14.0549 31.9635C13.9462 31.9635 13.842 31.9203 13.7651 31.8434C13.6882 31.7666 13.6451 31.6623 13.6451 31.5536V27.455C13.6451 27.3463 13.6882 27.242 13.7651 27.1651C13.842 27.0883 13.9462 27.0451 14.0549 27.0451C14.1636 27.0451 14.2679 27.0883 14.3447 27.1651C14.4216 27.242 14.4648 27.3463 14.4648 27.455V31.5536C14.4648 31.6623 14.4216 31.7666 14.3447 31.8434C14.2679 31.9203 14.1636 31.9635 14.0549 31.9635V31.9635Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M21.4321 31.9635C21.3234 31.9635 21.2192 31.9203 21.1423 31.8435C21.0655 31.7666 21.0223 31.6624 21.0223 31.5537V25.8155C21.0223 25.7068 21.0655 25.6026 21.1423 25.5257C21.2192 25.4488 21.3234 25.4057 21.4321 25.4057C21.5408 25.4057 21.6451 25.4488 21.722 25.5257C21.7988 25.6026 21.842 25.7068 21.842 25.8155V31.5537C21.842 31.6624 21.7988 31.7666 21.722 31.8435C21.6451 31.9203 21.5408 31.9635 21.4321 31.9635V31.9635Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M17.7431 31.9634C17.6344 31.9634 17.5302 31.9202 17.4533 31.8434C17.3765 31.7665 17.3333 31.6623 17.3333 31.5536V23.3562C17.3333 23.2475 17.3765 23.1433 17.4533 23.0664C17.5302 22.9895 17.6344 22.9463 17.7431 22.9463C17.8519 22.9463 17.9561 22.9895 18.033 23.0664C18.1098 23.1433 18.153 23.2475 18.153 23.3562V31.5536C18.153 31.6623 18.1098 31.7665 18.033 31.8434C17.9561 31.9202 17.8519 31.9634 17.7431 31.9634V31.9634Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M22.6701 12.9361C22.6116 12.9361 22.5539 12.9236 22.5006 12.8994C22.4474 12.8753 22.3999 12.84 22.3615 12.796C21.6036 11.9287 20.5736 11.4705 19.383 11.4705H15.2843C13.6129 11.4705 13.1325 11.7061 12.5382 12.0939C12.4473 12.1536 12.3363 12.1749 12.2297 12.1528C12.1232 12.1308 12.0297 12.0674 11.9699 11.9764C11.9101 11.8855 11.8889 11.7745 11.9109 11.668C11.9329 11.5614 11.9964 11.4679 12.0873 11.4082C12.8874 10.8843 13.5387 10.6507 15.281 10.6507H19.3797C20.7933 10.6507 22.0701 11.2212 22.975 12.2566C23.0268 12.3158 23.0604 12.3887 23.0719 12.4666C23.0834 12.5444 23.0722 12.6239 23.0397 12.6956C23.0072 12.7672 22.9547 12.828 22.8886 12.8707C22.8225 12.9133 22.7455 12.9361 22.6668 12.9361H22.6701Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M17.743 9.83062C16.0269 9.83062 14.8739 8.5129 14.8739 6.55169C14.8739 4.59047 16.0269 3.27275 17.743 3.27275C19.4591 3.27275 20.6121 4.59047 20.6121 6.55169C20.6121 8.5129 19.4579 9.83062 17.743 9.83062ZM17.743 4.09248C16.2306 4.09248 15.6937 5.41717 15.6937 6.55169C15.6937 7.6862 16.2306 9.01089 17.743 9.01089C19.2554 9.01089 19.7923 7.6862 19.7923 6.55169C19.7923 5.41717 19.2554 4.09248 17.743 4.09248Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M14.0006 26.4806H13.6579C13.5553 26.4803 13.4564 26.4415 13.381 26.3718C13.3056 26.3022 13.259 26.2068 13.2506 26.1045C13.2421 26.0021 13.2724 25.9004 13.3354 25.8193C13.3983 25.7382 13.4895 25.6837 13.5907 25.6666V19.4559C13.5907 17.8496 12.257 16.543 10.6179 16.543H8.47351C8.32813 16.546 8.18306 16.5577 8.03905 16.5778L7.93084 16.5905C7.82222 16.6024 7.68002 16.6278 7.62017 16.679C7.55818 16.7302 7.48612 16.7677 7.40868 16.7893C7.31449 16.8093 7.21624 16.7956 7.13118 16.7504C7.04611 16.7053 6.97966 16.6317 6.94347 16.5424C6.90729 16.4532 6.90368 16.354 6.93329 16.2624C6.96289 16.1708 7.02382 16.0925 7.10538 16.0413C7.23285 15.9372 7.4308 15.8216 7.83944 15.7757L7.94272 15.7638C8.11868 15.7396 8.29593 15.7259 8.47351 15.7228H10.6179C12.7083 15.7228 14.4104 17.3975 14.4104 19.4555V26.0703C14.4105 26.1242 14.3999 26.1775 14.3794 26.2273C14.3588 26.2771 14.3286 26.3223 14.2905 26.3604C14.2525 26.3985 14.2073 26.4287 14.1575 26.4493C14.1078 26.47 14.0544 26.4806 14.0006 26.4806V26.4806Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M5.43353 26.4809H5.09088C4.98218 26.4809 4.87792 26.4378 4.80105 26.3609C4.72419 26.284 4.68102 26.1798 4.68102 26.0711V19.8288C4.68066 19.3029 4.78356 18.7821 4.98389 18.2959C5.02531 18.1953 5.10497 18.1154 5.20536 18.0735C5.30574 18.0317 5.41863 18.0315 5.51918 18.0729C5.61973 18.1143 5.69971 18.194 5.74153 18.2944C5.78334 18.3948 5.78356 18.5077 5.74215 18.6082C5.5823 18.9953 5.50028 19.41 5.50075 19.8288V25.6669C5.60199 25.6841 5.69309 25.7385 5.75608 25.8196C5.81906 25.9007 5.84934 26.0025 5.84089 26.1048C5.83244 26.2071 5.78588 26.3026 5.71045 26.3722C5.63501 26.4419 5.5362 26.4807 5.43353 26.4809V26.4809Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M6.80511 31.9638C6.69641 31.9638 6.59217 31.9206 6.5153 31.8437C6.43844 31.7669 6.39524 31.6626 6.39524 31.5539V20.9924C6.29401 20.9753 6.2029 20.9208 6.13992 20.8398C6.07693 20.7587 6.04665 20.6569 6.0551 20.5546C6.06355 20.4523 6.11011 20.3568 6.18555 20.2872C6.26098 20.2175 6.3598 20.1787 6.46247 20.1785H6.80511C6.91381 20.1785 7.01807 20.2216 7.09494 20.2985C7.1718 20.3754 7.21498 20.4796 7.21498 20.5883V31.5539C7.21498 31.6077 7.20437 31.661 7.18378 31.7108C7.16318 31.7605 7.133 31.8057 7.09494 31.8437C7.05688 31.8818 7.0117 31.912 6.96197 31.9326C6.91225 31.9532 6.85893 31.9638 6.80511 31.9638V31.9638Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M9.54614 31.9635C9.43744 31.9635 9.33318 31.9203 9.25631 31.8434C9.17945 31.7665 9.13628 31.6623 9.13628 31.5536V25.3851C9.13628 25.2764 9.17945 25.1721 9.25631 25.0953C9.33318 25.0184 9.43744 24.9752 9.54614 24.9752C9.65485 24.9752 9.75909 25.0184 9.83595 25.0953C9.91282 25.1721 9.95601 25.2764 9.95601 25.3851V31.5536C9.95601 31.6623 9.91282 31.7665 9.83595 31.8434C9.75909 31.9203 9.65485 31.9635 9.54614 31.9635V31.9635Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M9.54593 15.1721C8.27535 15.1721 7.42241 14.1811 7.42241 12.7064C7.42241 11.2317 8.27575 10.2406 9.54593 10.2406C10.8161 10.2406 11.6707 11.2309 11.6707 12.7064C11.6707 14.1819 10.8161 15.1721 9.54593 15.1721ZM9.54593 11.0604C8.33642 11.0604 8.24214 12.3199 8.24214 12.7064C8.24214 13.5019 8.58479 14.3524 9.54593 14.3524C10.5071 14.3524 10.8509 13.5019 10.8509 12.7064C10.8509 12.3199 10.7555 11.0604 9.54593 11.0604V11.0604Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M12.2859 31.9638C12.1772 31.9638 12.073 31.9207 11.9961 31.8438C11.9192 31.7669 11.8761 31.6627 11.8761 31.554V20.588C11.8761 20.4793 11.9192 20.375 11.9961 20.2982C12.073 20.2213 12.1772 20.1781 12.2859 20.1781H12.6286C12.7313 20.1784 12.8301 20.2172 12.9055 20.2868C12.981 20.3565 13.0275 20.4519 13.0359 20.5542C13.0444 20.6566 13.0141 20.7583 12.9511 20.8394C12.8882 20.9205 12.797 20.975 12.6958 20.9921V31.554C12.6958 31.6627 12.6526 31.7669 12.5758 31.8438C12.4989 31.9207 12.3946 31.9638 12.2859 31.9638V31.9638Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M5.79575 18.818C5.63063 18.8184 5.4674 18.7828 5.31742 18.7137C5.16744 18.6446 5.0343 18.5437 4.92725 18.418L4.54566 17.9708C4.34984 17.7405 4.25327 17.442 4.27708 17.1406C4.3009 16.8393 4.44314 16.5596 4.6727 16.3629L5.4322 15.7149C5.66256 15.5191 5.96111 15.4226 6.26248 15.4465C6.56384 15.4704 6.84346 15.6128 7.0401 15.8424L7.42127 16.2904C7.61719 16.5206 7.71384 16.8192 7.69003 17.1206C7.66621 17.422 7.52388 17.7016 7.29423 17.8983L6.53473 18.5459C6.32871 18.7217 6.06664 18.8183 5.79575 18.818V18.818ZM5.9646 16.3387L5.20513 16.9863C5.141 17.0416 5.10125 17.1199 5.0945 17.2043C5.08774 17.2887 5.11455 17.3724 5.16906 17.4372L5.55105 17.8843C5.60622 17.9487 5.68459 17.9885 5.76906 17.9953C5.85352 18.002 5.93722 17.9751 6.00191 17.9204L6.76098 17.2728C6.82511 17.2175 6.86486 17.1392 6.87161 17.0548C6.87837 16.9704 6.85156 16.8867 6.79705 16.822L6.41546 16.3744C6.36005 16.3104 6.28172 16.2708 6.19735 16.2641C6.11299 16.2575 6.02937 16.2843 5.9646 16.3387V16.3387Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M31.386 16.0062C31.1153 16.0064 30.8536 15.9095 30.6482 15.7332L29.8891 15.0856C29.6594 14.8892 29.5169 14.6096 29.4929 14.3083C29.469 14.007 29.5655 13.7084 29.7613 13.4781L30.1433 13.0305C30.3395 12.8005 30.6191 12.6578 30.9205 12.6338C31.222 12.6099 31.5206 12.7066 31.7508 12.9027V12.9027L32.5098 13.5507C32.7399 13.747 32.8826 14.0267 32.9065 14.3282C32.9304 14.6298 32.8336 14.9284 32.6373 15.1586L32.2557 15.6057C32.1587 15.7202 32.0399 15.8143 31.9062 15.8825C31.7725 15.9507 31.6266 15.9916 31.477 16.0029C31.4467 16.005 31.4155 16.0062 31.386 16.0062ZM31.0105 13.4498C30.9639 13.4496 30.9177 13.4596 30.8752 13.479C30.8328 13.4983 30.795 13.5267 30.7646 13.5621L30.3826 14.0101C30.328 14.0749 30.3011 14.1585 30.3079 14.243C30.3147 14.3274 30.3545 14.4058 30.4187 14.461L31.1782 15.1086C31.21 15.1362 31.2472 15.1572 31.2873 15.1701C31.3274 15.1831 31.3698 15.1878 31.4118 15.184C31.4537 15.1808 31.4946 15.1693 31.5321 15.1503C31.5696 15.1312 31.603 15.1049 31.6303 15.0729L32.0119 14.6253C32.0664 14.5606 32.0933 14.477 32.0866 14.3926C32.0799 14.3082 32.0403 14.2298 31.9762 14.1745L31.2175 13.5261C31.1595 13.4768 31.0858 13.4498 31.0097 13.4498H31.0105Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M27.1773 11.47C25.6083 11.47 24.5131 10.2059 24.5131 8.39595C24.5131 6.58598 25.6083 5.32195 27.1773 5.32195C27.286 5.32195 27.3902 5.36513 27.4671 5.442C27.544 5.51886 27.5871 5.62311 27.5871 5.73182C27.5871 5.84052 27.544 5.94477 27.4671 6.02164C27.3902 6.0985 27.286 6.14168 27.1773 6.14168C25.8157 6.14168 25.3329 7.35612 25.3329 8.39595C25.3329 9.43579 25.8157 10.6502 27.1773 10.6502C28.5389 10.6502 29.0217 9.43579 29.0217 8.39595C29.0265 8.02019 28.9606 7.64687 28.8274 7.29546C28.7895 7.1947 28.7927 7.08305 28.8364 6.98465C28.8801 6.88626 28.9608 6.80901 29.061 6.7696C29.1612 6.73019 29.2728 6.73179 29.3718 6.77405C29.4709 6.8163 29.5493 6.89582 29.5902 6.99543C29.7613 7.44231 29.8465 7.91747 29.8414 8.39595C29.8414 10.2059 28.7458 11.47 27.1773 11.47Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M29.206 7.55046C28.1325 7.55046 27.1415 6.85819 26.7955 5.86672C26.7778 5.81588 26.7703 5.76206 26.7734 5.70832C26.7765 5.65457 26.7902 5.60197 26.8136 5.5535C26.837 5.50503 26.8698 5.46165 26.9099 5.42583C26.9501 5.39002 26.997 5.36247 27.0478 5.34476C27.0987 5.32705 27.1525 5.31953 27.2062 5.32263C27.26 5.32572 27.3126 5.33937 27.3611 5.36279C27.4095 5.38622 27.4529 5.41896 27.4887 5.45916C27.5245 5.49935 27.5521 5.5462 27.5698 5.59704C27.7989 6.25282 28.4871 6.73072 29.206 6.73072C29.3147 6.73072 29.4189 6.77391 29.4958 6.85077C29.5727 6.92764 29.6158 7.03189 29.6158 7.14059C29.6158 7.2493 29.5727 7.35355 29.4958 7.43041C29.4189 7.50728 29.3147 7.55046 29.206 7.55046Z",
    fill: "#CED0D0"
  }), h("path", {
    d: "M30.1362 11.2625C30.0313 11.2626 29.9304 11.2226 29.8541 11.1506C29.7779 11.0786 29.7321 10.9801 29.7263 10.8754C29.7205 10.7707 29.755 10.6677 29.8228 10.5877C29.8906 10.5077 29.9865 10.4567 30.0907 10.4452C30.1855 10.4351 30.2787 10.4279 30.3703 10.4235C30.435 10.4216 30.4985 10.4056 30.5565 10.3765C30.6144 10.3475 30.6652 10.3062 30.7055 10.2554C30.7399 10.2126 30.7645 10.1627 30.7774 10.1093C30.7904 10.0559 30.7915 10.0003 30.7805 9.94639C30.6465 9.28609 30.6428 8.51432 30.6399 7.95075C30.6399 7.80074 30.6399 7.66385 30.6354 7.54416C30.5899 5.72149 29.7071 4.74805 28.0123 4.65091L26.9056 4.63902H26.8774C25.7006 4.63902 23.8349 5.42228 23.7624 7.54908L23.7542 7.84541C23.741 8.40857 23.7226 9.17953 23.5865 9.8677C23.5735 9.92977 23.5745 9.99396 23.5893 10.0556C23.6041 10.1173 23.6324 10.1749 23.6722 10.2243C23.7066 10.2673 23.7503 10.3022 23.7999 10.3261C23.8496 10.3501 23.904 10.3626 23.9591 10.3628C24.1041 10.363 24.2491 10.3713 24.3932 10.3878C24.5012 10.4003 24.5998 10.4551 24.6673 10.5403C24.7349 10.6254 24.7659 10.734 24.7534 10.842C24.741 10.95 24.6861 11.0486 24.601 11.1161C24.5158 11.1837 24.4073 11.2147 24.2993 11.2022C24.1852 11.1895 24.0706 11.1829 23.9558 11.1826C23.7796 11.182 23.6057 11.1424 23.4467 11.0664C23.2877 10.9904 23.1476 10.88 23.0365 10.7432C22.9199 10.6004 22.8365 10.4334 22.7924 10.2545C22.7482 10.0755 22.7444 9.88891 22.7811 9.70826C22.9041 9.08937 22.9209 8.35898 22.9336 7.82574L22.9422 7.5208C23.0345 4.81773 25.3916 3.82052 26.877 3.82052H26.9089L28.0369 3.83323C29.2915 3.90454 31.3756 4.47795 31.4519 7.52449C31.4552 7.64745 31.4556 7.79172 31.4564 7.94788C31.4593 8.50735 31.4625 9.20289 31.5794 9.7849C31.6136 9.95513 31.6104 10.1308 31.57 10.2997C31.5296 10.4685 31.4529 10.6266 31.3453 10.7629C31.232 10.9068 31.0888 11.0244 30.9255 11.1074C30.7622 11.1904 30.5828 11.2369 30.3998 11.2436C30.328 11.2469 30.253 11.2526 30.178 11.2612C30.1641 11.2623 30.1501 11.2627 30.1362 11.2625V11.2625Z",
    fill: "#CED0D0"
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "fsdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "cdd678acce64e0943c9828db719221d4.webp");

/***/ }),

/***/ "gdic":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"sidebar":"sidebar__+lnjO","report":"report__0e2nB","sidebarGrid":"sidebarGrid__v6Xt1","resubmit":"resubmit__oSkc7","reportBox":"reportBox__JTBFn","reportGrid":"reportGrid__cY21S","reportCard":"reportCard__Xq2pJ","blurred":"blurred__bxCIp","reportCardTitle":"reportCardTitle__Y1VJi","reportLoader":"reportLoader__kd3ig","reportCardFooter":"reportCardFooter__4vIvz","formContainer":"formContainer__-h5rO","formTitle":"formTitle__rKtBp","formGrid":"formGrid__AfLtb","formBox":"formBox__3jqhN","formContent":"formContent__RccAs","results":"results__VABbx","pageTitle":"pageTitle__ewL8F"});

/***/ }),

/***/ "hc4W":
/***/ (function(module, exports) {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "httU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "1b4d714492a4669f03734ef6a13f984f.webp");

/***/ }),

/***/ "iNmH":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("+Sw5");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "kluZ":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "l8WD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flushSync", function() { return hn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTransition", function() { return dn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeferredValue", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInsertionEffect", function() { return yn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSyncExternalStore", function() { return _n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return mn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return un; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["createRef"]; });

/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_1__["l"]; });

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




function g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n, t) {
  return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
}
function w(n) {
  this.props = n;
}
function R(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(w.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__["Component"]()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var x = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), x && x(n);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k(n) {
  function t(t) {
    var e = g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var A = function A(n, t) {
    return null == n ? null : Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(n).map(t));
  },
  O = {
    map: A,
    forEach: A,
    count: function count(n) {
      return n ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(n).length : 0;
    },
    only: function only(n) {
      var t = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"]
  },
  T = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  T(n, t, e, r);
};
var I = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function L(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return L(n, t, e);
  })), n;
}
function U(n, t, e) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return U(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function M(n) {
  var e, r, u;
  function o(o) {
    if (e || (e = n()).then(function (n) {
      r = n.default || n;
    }, function (n) {
      u = n;
    }), u) throw u;
    if (!r) throw e;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(r, o);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function V() {
  this.u = null, this.o = null;
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
}, (D.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__["Component"]()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = F(r.__v),
    o = !1,
    i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function l() {
      if (! --r.__u) {
        if (r.state.__a) {
          var n = r.state.__a;
          r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
        }
        var t;
        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) t.forceUpdate();
      }
    },
    c = !0 === t.__h;
  r.__u++ || c || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, D.prototype.componentWillUnmount = function () {
  this.t = [];
}, D.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, n.fallback);
  return i && (i.__h = null), [Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, e.__a ? null : n.children), i];
};
var W = function W(n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
function P(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function $(n) {
  var e = this,
    r = n.i;
  e.componentWillUnmount = function () {
    Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
    nodeType: 1,
    parentNode: r,
    childNodes: [],
    appendChild: function appendChild(n) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    insertBefore: function insertBefore(n, t) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    removeChild: function removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
    }
  }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(P, {
    context: e.context
  }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}
function j(n, e) {
  var r = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])($, {
    __v: n,
    i: e
  });
  return r.containerInfo = e, r;
}
(V.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__["Component"]()).__a = function (n) {
  var t = this,
    e = F(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function o() {
      t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, V.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    W(n, e, t);
  });
};
var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  H = "undefined" != typeof document,
  Z = function Z(n) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(n);
  };
function Y(n, t, e) {
  return null == t.__k && (t.textContent = ""), Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function q(n, t, e) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
preact__WEBPACK_IMPORTED_MODULE_0__["Component"].prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__["Component"].prototype, t, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + t];
    },
    set: function set(n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var G = preact__WEBPACK_IMPORTED_MODULE_0__["options"].event;
function J() {}
function K() {
  return this.cancelBubble;
}
function Q() {
  return this.defaultPrevented;
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].event = function (n) {
  return G && (n = G(n)), n.persist = J, n.isPropagationStopped = K, n.isDefaultPrevented = Q, n.nativeEvent = n;
};
var X,
  nn = {
    configurable: !0,
    get: function get() {
      return this.class;
    }
  },
  tn = preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode = function (n) {
  var t = n.type,
    e = n.props,
    u = e;
  if ("string" == typeof t) {
    var o = -1 === t.indexOf("-");
    for (var i in u = {}, e) {
      var l = e[i];
      H && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Z(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && B.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
    }
    "select" == t && u.multiple && Array.isArray(u.value) && (u.value = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(e.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == t && null != u.defaultValue && (u.value = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(e.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), n.props = u, e.class != e.className && (nn.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", nn));
  }
  n.$$typeof = z, tn && tn(n);
};
var en = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  en && en(n), X = n.__c;
};
var rn = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n) {
          return X.__n[n.__c].props.value;
        }
      }
    }
  },
  un = "17.0.2";
function on(n) {
  return preact__WEBPACK_IMPORTED_MODULE_0__["createElement"].bind(null, n);
}
function ln(n) {
  return !!n && n.$$typeof === z;
}
function cn(n) {
  return ln(n) ? preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"].apply(null, arguments) : n;
}
function fn(n) {
  return !!n.__k && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(null, n), !0);
}
function an(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var sn = function sn(n, t) {
    return n(t);
  },
  hn = function hn(n, t) {
    return n(t);
  },
  vn = preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
function dn(n) {
  n();
}
function pn(n) {
  return n;
}
function mn() {
  return [!1, dn];
}
var yn = preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useLayoutEffect */ "h"];
function _n(n, t) {
  var e = t(),
    r = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"])({
      h: {
        __: e,
        v: t
      }
    }),
    u = r[0].h,
    o = r[1];
  return Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useLayoutEffect */ "h"])(function () {
    u.__ = e, u.v = t, E(u.__, t()) || o({
      h: u
    });
  }, [n, e, t]), Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "d"])(function () {
    return E(u.__, u.v()) || o({
      h: u
    }), n(function () {
      E(u.__, u.v()) || o({
        h: u
      });
    });
  }, [n]), e;
}
var bn = {
  useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "l"],
  useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useId */ "f"],
  useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useReducer */ "j"],
  useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "d"],
  useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useLayoutEffect */ "h"],
  useInsertionEffect: yn,
  useTransition: mn,
  useDeferredValue: pn,
  useSyncExternalStore: _n,
  startTransition: dn,
  useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useRef */ "k"],
  useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useImperativeHandle */ "g"],
  useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "i"],
  useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useCallback */ "a"],
  useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useContext */ "b"],
  useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useDebugValue */ "c"],
  version: "17.0.2",
  Children: O,
  render: Y,
  hydrate: q,
  unmountComponentAtNode: fn,
  createPortal: j,
  createElement: preact__WEBPACK_IMPORTED_MODULE_0__["createElement"],
  createContext: preact__WEBPACK_IMPORTED_MODULE_0__["createContext"],
  createFactory: on,
  cloneElement: cn,
  createRef: preact__WEBPACK_IMPORTED_MODULE_0__["createRef"],
  Fragment: preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
  isValidElement: ln,
  findDOMNode: an,
  Component: preact__WEBPACK_IMPORTED_MODULE_0__["Component"],
  PureComponent: w,
  memo: R,
  forwardRef: k,
  flushSync: hn,
  unstable_batchedUpdates: sn,
  StrictMode: vn,
  Suspense: D,
  SuspenseList: V,
  lazy: M,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rn
};


/***/ }),

/***/ "nOXW":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP")["default"];
var toPrimitive = __webpack_require__("s9iv");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "nxTg":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("+3YS");
var iterableToArrayLimit = __webpack_require__("S411");
var unsupportedIterableToArray = __webpack_require__("Zhxd");
var nonIterableRest = __webpack_require__("+bRE");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "okHz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qinx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QyV/");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Brh3");



var Layout = function Layout(_ref) {
  var children = _ref.children;
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].layout
  }, h(_header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].wrapper
  }, children), h(_footer__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null));
};
/* harmony default export */ __webpack_exports__["a"] = (Layout);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "ox/y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Match = undefined;
var _extends = Object.assign || function (target) {
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
var _preact = __webpack_require__("HteQ");
var _preactRouter = __webpack_require__("Y3FI");
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Match = exports.Match = function (_Component) {
  _inherits(Match, _Component);
  function Match() {
    var _temp, _this, _ret;
    _classCallCheck(this, Match);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
      _this.nextUrl = url;
      _this.setState({});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Match.prototype.componentDidMount = function componentDidMount() {
    _preactRouter.subscribers.push(this.update);
  };
  Match.prototype.componentWillUnmount = function componentWillUnmount() {
    _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
  };
  Match.prototype.render = function render(props) {
    var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
      path = url.replace(/\?.+$/, '');
    this.nextUrl = null;
    return props.children({
      url: url,
      path: path,
      matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
    });
  };
  return Match;
}(_preact.Component);
var Link = function Link(_ref) {
  var activeClassName = _ref.activeClassName,
    path = _ref.path,
    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);
  return (0, _preact.h)(Match, {
    path: path || props.href
  }, function (_ref2) {
    var matches = _ref2.matches;
    return (0, _preact.h)(_preactRouter.Link, _extends({}, props, {
      'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ')
    }));
  });
};
exports.Link = Link;
exports.default = Match;
Match.Link = Link;

/***/ }),

/***/ "pSyp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "d10cbe7920ac7bd5a135ef87dd01c7f2.webp");

/***/ }),

/***/ "qTIA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EbY7");
/* harmony import */ var _assets_home_calltoaction_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MSiu");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_2__);



var CallToAction = function CallToAction() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToAction
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToActionContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToActionGrid
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToActionCover
  }, h("img", {
    src: _assets_home_calltoaction_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "img",
    width: 393,
    height: 296
  }), h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].typoAnimate
  }, h("div", {
    class: "typewrite",
    "data-period": "2000",
    "data-type": "[ \"Express Entry\", \"Provincial Nominee\", \"Atlantic Immigration\", \"Temporary Foreign Worker\", \"Federal Skilled Worker\", \"Student\", \"Working Holiday\" ]"
  }, h("span", {
    class: "wrap"
  })))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].callToActionContent
  }, h("h2", null, "Discover Your Options within ", h("span", null, "2 minutes!")), h(preact_router_match__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/"
  }, "Go to Form")))));
};
/* harmony default export */ __webpack_exports__["a"] = (CallToAction);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "qinx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rS5q");

var Footer = function Footer() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].footer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].container
  }, h("p", null, "UIS Canada is a private immigration company that specializes in helping people make a fresh start in Canada. We provide a range of services to support immigrants as they navigate their new lives in Canada. We will help you improve your language skills, search for jobs, fill out paperwork and guide you until you successfully complete your process."), h("p", null, "[Phone Number] [Email Address]")));
};
/* harmony default export */ __webpack_exports__["a"] = (Footer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "rS5q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"footer":"footer__DGBa9","container":"container__eare5"});

/***/ }),

/***/ "s9iv":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "xnBx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "e148ac447be66c2a350e261b19f1da28.webp");

/***/ }),

/***/ "yO+l":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("OvAC");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "ySiU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"header":"header__OVZyn","container":"container__J9tNr"});

/***/ }),

/***/ "zM3l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map