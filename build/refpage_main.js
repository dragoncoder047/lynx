var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};

// node_modules/.pnpm/vanilla@https+++codeload.github.com+dragoncoder047+vanilla+tar.gz+400e4ce789aebdcb53c7250a2d4ad6c94f1b193c/node_modules/vanilla/vanilla.ts
function make(nameAndClasses, properties, ...children) {
  const [name, ...classes] = nameAndClasses.split(".");
  const el = document.createElement(name);
  if (classes.length > 0)
    el.classList.add(...classes);
  for (var [k, v] of Object.entries(properties ?? {})) {
    el.setAttribute(k, v);
  }
  el.append(...children);
  return el;
}
function html(string) {
  const el = make("span");
  el.innerHTML = string;
  return el;
}
function get(id) {
  return document.querySelector(id);
}
var init_vanilla = __esm({
  "node_modules/.pnpm/vanilla@https+++codeload.github.com+dragoncoder047+vanilla+tar.gz+400e4ce789aebdcb53c7250a2d4ad6c94f1b193c/node_modules/vanilla/vanilla.ts"() {
  }
});

// node_modules/.pnpm/@jcubic+lips@https+++codeload.github.com+jcubic+lips+tar.gz+876af5394f85e7b720f9a62545c19864bc1fe409/node_modules/@jcubic/lips/dist/lips.esm.min.js
function _isNativeReflectConstruct$1() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct$1 = function e75() {
    return !!t2;
  })();
}
function _setPrototypeOf(e75, t2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e76, t3) {
    return e76.__proto__ = t3, e76;
  }, _setPrototypeOf(e75, t2);
}
function _construct(e75, t2, r) {
  if (_isNativeReflectConstruct$1()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t2);
  var i = new (e75.bind.apply(e75, n))();
  return r && _setPrototypeOf(i, r.prototype), i;
}
function _arrayWithHoles(e75) {
  if (Array.isArray(e75)) return e75;
}
function _iterableToArray(e75) {
  if ("undefined" != typeof Symbol && null != e75[Symbol.iterator] || null != e75["@@iterator"]) return Array.from(e75);
}
function _arrayLikeToArray$1(e75, t2) {
  (null == t2 || t2 > e75.length) && (t2 = e75.length);
  for (var r = 0, n = Array(t2); r < t2; r++) n[r] = e75[r];
  return n;
}
function _unsupportedIterableToArray$1(e75, t2) {
  if (e75) {
    if ("string" == typeof e75) return _arrayLikeToArray$1(e75, t2);
    var r = {}.toString.call(e75).slice(8, -1);
    return "Object" === r && e75.constructor && (r = e75.constructor.name), "Map" === r || "Set" === r ? Array.from(e75) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray$1(e75, t2) : void 0;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toArray(e75) {
  return _arrayWithHoles(e75) || _iterableToArray(e75) || _unsupportedIterableToArray$1(e75) || _nonIterableRest();
}
function _typeof$1(e75) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e76) {
    return typeof e76;
  } : function(e76) {
    return e76 && "function" == typeof Symbol && e76.constructor === Symbol && e76 !== Symbol.prototype ? "symbol" : typeof e76;
  }, _typeof$1(e75);
}
function _assertThisInitialized(e75) {
  if (void 0 === e75) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e75;
}
function _possibleConstructorReturn(e75, t2) {
  if (t2 && ("object" == _typeof$1(t2) || "function" == typeof t2)) return t2;
  if (void 0 !== t2) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(e75);
}
function _getPrototypeOf(e75) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e76) {
    return e76.__proto__ || Object.getPrototypeOf(e76);
  }, _getPrototypeOf(e75);
}
function _inherits(e75, t2) {
  if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
  e75.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e75, writable: true, configurable: true } }), Object.defineProperty(e75, "prototype", { writable: false }), t2 && _setPrototypeOf(e75, t2);
}
function _isNativeFunction(t2) {
  try {
    return -1 !== Function.toString.call(t2).indexOf("[native code]");
  } catch (e75) {
    return "function" == typeof t2;
  }
}
function _wrapNativeSuper(e75) {
  var n = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function e76(t2) {
    if (null === t2 || !_isNativeFunction(t2)) return t2;
    if ("function" != typeof t2) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== n) {
      if (n.has(t2)) return n.get(t2);
      n.set(t2, r);
    }
    function r() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return r.prototype = Object.create(t2.prototype, { constructor: { value: r, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(r, t2);
  }, _wrapNativeSuper(e75);
}
function asyncGeneratorStep(e75, t2, r, n, i, a, o) {
  try {
    var u = e75[a](o), s = u.value;
  } catch (e76) {
    return void r(e76);
  }
  u.done ? t2(s) : Promise.resolve(s).then(n, i);
}
function _asyncToGenerator(u) {
  return function() {
    var e75 = this, o = arguments;
    return new Promise(function(t2, r) {
      var n = u.apply(e75, o);
      function i(e76) {
        asyncGeneratorStep(n, t2, r, i, a, "next", e76);
      }
      function a(e76) {
        asyncGeneratorStep(n, t2, r, i, a, "throw", e76);
      }
      i(void 0);
    });
  };
}
function _classCallCheck(e75, t2) {
  if (!(e75 instanceof t2)) throw new TypeError("Cannot call a class as a function");
}
function toPrimitive(e75, t2) {
  if ("object" != _typeof$1(e75) || !e75) return e75;
  var r = e75[Symbol.toPrimitive];
  if (void 0 !== r) {
    var n = r.call(e75, t2 || "default");
    if ("object" != _typeof$1(n)) return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === t2 ? String : Number)(e75);
}
function toPropertyKey(e75) {
  var t2 = toPrimitive(e75, "string");
  return "symbol" == _typeof$1(t2) ? t2 : t2 + "";
}
function _defineProperties(e75, t2) {
  for (var r = 0; r < t2.length; r++) {
    var n = t2[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e75, toPropertyKey(n.key), n);
  }
}
function _createClass(e75, t2, r) {
  return t2 && _defineProperties(e75.prototype, t2), Object.defineProperty(e75, "prototype", { writable: false }), e75;
}
function _defineProperty(e75, t2, r) {
  return (t2 = toPropertyKey(t2)) in e75 ? Object.defineProperty(e75, t2, { value: r, enumerable: true, configurable: true, writable: true }) : e75[t2] = r, e75;
}
function _objectWithoutPropertiesLoose(e75, t2) {
  if (null == e75) return {};
  var r = {};
  for (var n in e75) if ({}.hasOwnProperty.call(e75, n)) {
    if (t2.includes(n)) continue;
    r[n] = e75[n];
  }
  return r;
}
function _objectWithoutProperties(e75, t2) {
  if (null == e75) return {};
  var r, n, i = _objectWithoutPropertiesLoose(e75, t2);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e75);
    for (n = 0; n < a.length; n++) r = a[n], t2.includes(r) || {}.propertyIsEnumerable.call(e75, r) && (i[r] = e75[r]);
  }
  return i;
}
function _iterableToArrayLimit(e75, t2) {
  var r = null == e75 ? null : "undefined" != typeof Symbol && e75[Symbol.iterator] || e75["@@iterator"];
  if (null != r) {
    var n, i, a, o, u = [], s = true, c = false;
    try {
      if (a = (r = r.call(e75)).next, 0 === t2) {
        if (Object(r) !== r) return;
        s = false;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t2); s = true) ;
    } catch (e76) {
      c = true, i = e76;
    } finally {
      try {
        if (!s && null != r["return"] && (o = r["return"](), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function _slicedToArray(e75, t2) {
  return _arrayWithHoles(e75) || _iterableToArrayLimit(e75, t2) || _unsupportedIterableToArray$1(e75, t2) || _nonIterableRest();
}
function _arrayWithoutHoles(e75) {
  if (Array.isArray(e75)) return _arrayLikeToArray$1(e75);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(e75) {
  return _arrayWithoutHoles(e75) || _iterableToArray(e75) || _unsupportedIterableToArray$1(e75) || _nonIterableSpread();
}
function _OverloadYield(e75, t2) {
  this.v = e75, this.k = t2;
}
function _awaitAsyncGenerator(e75) {
  return new _OverloadYield(e75, 0);
}
function _wrapAsyncGenerator(e75) {
  return function() {
    return new AsyncGenerator(e75.apply(this, arguments));
  };
}
function AsyncGenerator(o) {
  var a, u;
  function s(r, e75) {
    try {
      var n = o[r](e75), i = n.value, a2 = i instanceof _OverloadYield;
      Promise.resolve(a2 ? i.v : i).then(function(e76) {
        if (a2) {
          var t2 = "return" === r ? "return" : "next";
          if (!i.k || e76.done) return s(t2, e76);
          e76 = o[t2](e76).value;
        }
        c(n.done ? "return" : "normal", e76);
      }, function(e76) {
        s("throw", e76);
      });
    } catch (e76) {
      c("throw", e76);
    }
  }
  function c(e75, t2) {
    switch (e75) {
      case "return":
        a.resolve({ value: t2, done: true });
        break;
      case "throw":
        a.reject(t2);
        break;
      default:
        a.resolve({ value: t2, done: false });
    }
    (a = a.next) ? s(a.key, a.arg) : u = null;
  }
  this._invoke = function(n, i) {
    return new Promise(function(e75, t2) {
      var r = { key: n, arg: i, resolve: e75, reject: t2, next: null };
      u ? u = u.next = r : (a = u = r, s(n, i));
    });
  }, "function" != typeof o["return"] && (this["return"] = void 0);
}
function getDefaultExportFromCjs(e75) {
  return e75 && e75.__esModule && Object.prototype.hasOwnProperty.call(e75, "default") ? e75["default"] : e75;
}
function require_typeof() {
  if (hasRequired_typeof) return _typeof.exports;
  hasRequired_typeof = 1;
  (function(t2) {
    function r(e75) {
      "@babel/helpers - typeof";
      return t2.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e76) {
        return typeof e76;
      } : function(e76) {
        return e76 && "function" == typeof Symbol && e76.constructor === Symbol && e76 !== Symbol.prototype ? "symbol" : typeof e76;
      }, t2.exports.__esModule = true, t2.exports["default"] = t2.exports, r(e75);
    }
    t2.exports = r, t2.exports.__esModule = true, t2.exports["default"] = t2.exports;
  })(_typeof);
  return _typeof.exports;
}
function requireRegeneratorRuntime() {
  if (hasRequiredRegeneratorRuntime) return regeneratorRuntime$1.exports;
  hasRequiredRegeneratorRuntime = 1;
  (function(O) {
    var N = require_typeof()["default"];
    function B() {
      O.exports = B = function e76() {
        return o;
      }, O.exports.__esModule = true, O.exports["default"] = O.exports;
      var c, o = {}, e75 = Object.prototype, l = e75.hasOwnProperty, f = Object.defineProperty || function(e76, t3, r2) {
        e76[t3] = r2.value;
      }, t2 = "function" == typeof Symbol ? Symbol : {}, i = t2.iterator || "@@iterator", r = t2.asyncIterator || "@@asyncIterator", n = t2.toStringTag || "@@toStringTag";
      function a(e76, t3, r2) {
        return Object.defineProperty(e76, t3, { value: r2, enumerable: true, configurable: true, writable: true }), e76[t3];
      }
      try {
        a({}, "");
      } catch (c2) {
        a = function e76(t3, r2, n2) {
          return t3[r2] = n2;
        };
      }
      function u(e76, t3, r2, n2) {
        var i2 = t3 && t3.prototype instanceof s ? t3 : s, a2 = Object.create(i2.prototype), o2 = new C(n2 || []);
        return f(a2, "_invoke", { value: S(e76, r2, o2) }), a2;
      }
      function _(e76, t3, r2) {
        try {
          return { type: "normal", arg: e76.call(t3, r2) };
        } catch (e77) {
          return { type: "throw", arg: e77 };
        }
      }
      o.wrap = u;
      var p = "suspendedStart", d = "suspendedYield", h = "executing", m = "completed", y = {};
      function s() {
      }
      function v() {
      }
      function b() {
      }
      var g = {};
      a(g, i, function() {
        return this;
      });
      var w = Object.getPrototypeOf, D = w && w(w(P([])));
      D && D !== e75 && l.call(D, i) && (g = D);
      var x = b.prototype = s.prototype = Object.create(g);
      function L(e76) {
        ["next", "throw", "return"].forEach(function(t3) {
          a(e76, t3, function(e77) {
            return this._invoke(t3, e77);
          });
        });
      }
      function E(u2, s2) {
        function c2(e76, t3, r2, n2) {
          var i3 = _(u2[e76], u2, t3);
          if ("throw" !== i3.type) {
            var a2 = i3.arg, o2 = a2.value;
            return o2 && "object" == N(o2) && l.call(o2, "__await") ? s2.resolve(o2.__await).then(function(e77) {
              c2("next", e77, r2, n2);
            }, function(e77) {
              c2("throw", e77, r2, n2);
            }) : s2.resolve(o2).then(function(e77) {
              a2.value = e77, r2(a2);
            }, function(e77) {
              return c2("throw", e77, r2, n2);
            });
          }
          n2(i3.arg);
        }
        var i2;
        f(this, "_invoke", { value: function e76(r2, n2) {
          function t3() {
            return new s2(function(e77, t4) {
              c2(r2, n2, e77, t4);
            });
          }
          return i2 = i2 ? i2.then(t3, t3) : t3();
        } });
      }
      function S(a2, o2, u2) {
        var s2 = p;
        return function(e76, t3) {
          if (s2 === h) throw Error("Generator is already running");
          if (s2 === m) {
            if ("throw" === e76) throw t3;
            return { value: c, done: true };
          }
          for (u2.method = e76, u2.arg = t3; ; ) {
            var r2 = u2.delegate;
            if (r2) {
              var n2 = A(r2, u2);
              if (n2) {
                if (n2 === y) continue;
                return n2;
              }
            }
            if ("next" === u2.method) u2.sent = u2._sent = u2.arg;
            else if ("throw" === u2.method) {
              if (s2 === p) throw s2 = m, u2.arg;
              u2.dispatchException(u2.arg);
            } else "return" === u2.method && u2.abrupt("return", u2.arg);
            s2 = h;
            var i2 = _(a2, o2, u2);
            if ("normal" === i2.type) {
              if (s2 = u2.done ? m : d, i2.arg === y) continue;
              return { value: i2.arg, done: u2.done };
            }
            "throw" === i2.type && (s2 = m, u2.method = "throw", u2.arg = i2.arg);
          }
        };
      }
      function A(e76, t3) {
        var r2 = t3.method, n2 = e76.iterator[r2];
        if (n2 === c) return t3.delegate = null, "throw" === r2 && e76.iterator["return"] && (t3.method = "return", t3.arg = c, A(e76, t3), "throw" === t3.method) || "return" !== r2 && (t3.method = "throw", t3.arg = new TypeError("The iterator does not provide a '" + r2 + "' method")), y;
        var i2 = _(n2, e76.iterator, t3.arg);
        if ("throw" === i2.type) return t3.method = "throw", t3.arg = i2.arg, t3.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (t3[e76.resultName] = a2.value, t3.next = e76.nextLoc, "return" !== t3.method && (t3.method = "next", t3.arg = c), t3.delegate = null, y) : a2 : (t3.method = "throw", t3.arg = new TypeError("iterator result is not an object"), t3.delegate = null, y);
      }
      function F(e76) {
        var t3 = { tryLoc: e76[0] };
        1 in e76 && (t3.catchLoc = e76[1]), 2 in e76 && (t3.finallyLoc = e76[2], t3.afterLoc = e76[3]), this.tryEntries.push(t3);
      }
      function k(e76) {
        var t3 = e76.completion || {};
        t3.type = "normal", delete t3.arg, e76.completion = t3;
      }
      function C(e76) {
        this.tryEntries = [{ tryLoc: "root" }], e76.forEach(F, this), this.reset(true);
      }
      function P(t3) {
        if (t3 || "" === t3) {
          var e76 = t3[i];
          if (e76) return e76.call(t3);
          if ("function" == typeof t3.next) return t3;
          if (!isNaN(t3.length)) {
            var r2 = -1, n2 = function e77() {
              for (; ++r2 < t3.length; ) if (l.call(t3, r2)) return e77.value = t3[r2], e77.done = false, e77;
              return e77.value = c, e77.done = true, e77;
            };
            return n2.next = n2;
          }
        }
        throw new TypeError(N(t3) + " is not iterable");
      }
      return v.prototype = b, f(x, "constructor", { value: b, configurable: true }), f(b, "constructor", { value: v, configurable: true }), v.displayName = a(b, n, "GeneratorFunction"), o.isGeneratorFunction = function(e76) {
        var t3 = "function" == typeof e76 && e76.constructor;
        return !!t3 && (t3 === v || "GeneratorFunction" === (t3.displayName || t3.name));
      }, o.mark = function(e76) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e76, b) : (e76.__proto__ = b, a(e76, n, "GeneratorFunction")), e76.prototype = Object.create(x), e76;
      }, o.awrap = function(e76) {
        return { __await: e76 };
      }, L(E.prototype), a(E.prototype, r, function() {
        return this;
      }), o.AsyncIterator = E, o.async = function(e76, t3, r2, n2, i2) {
        void 0 === i2 && (i2 = Promise);
        var a2 = new E(u(e76, t3, r2, n2), i2);
        return o.isGeneratorFunction(t3) ? a2 : a2.next().then(function(e77) {
          return e77.done ? e77.value : a2.next();
        });
      }, L(x), a(x, n, "Generator"), a(x, i, function() {
        return this;
      }), a(x, "toString", function() {
        return "[object Generator]";
      }), o.keys = function(e76) {
        var r2 = Object(e76), n2 = [];
        for (var t3 in r2) n2.push(t3);
        return n2.reverse(), function e77() {
          for (; n2.length; ) {
            var t4 = n2.pop();
            if (t4 in r2) return e77.value = t4, e77.done = false, e77;
          }
          return e77.done = true, e77;
        };
      }, o.values = P, C.prototype = { constructor: C, reset: function e76(t3) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = false, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(k), !t3) for (var r2 in this) "t" === r2.charAt(0) && l.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = c);
      }, stop: function e76() {
        this.done = true;
        var t3 = this.tryEntries[0].completion;
        if ("throw" === t3.type) throw t3.arg;
        return this.rval;
      }, dispatchException: function e76(r2) {
        if (this.done) throw r2;
        var n2 = this;
        function t3(e77, t4) {
          return o2.type = "throw", o2.arg = r2, n2.next = e77, t4 && (n2.method = "next", n2.arg = c), !!t4;
        }
        for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
          var a2 = this.tryEntries[i2], o2 = a2.completion;
          if ("root" === a2.tryLoc) return t3("end");
          if (a2.tryLoc <= this.prev) {
            var u2 = l.call(a2, "catchLoc"), s2 = l.call(a2, "finallyLoc");
            if (u2 && s2) {
              if (this.prev < a2.catchLoc) return t3(a2.catchLoc, true);
              if (this.prev < a2.finallyLoc) return t3(a2.finallyLoc);
            } else if (u2) {
              if (this.prev < a2.catchLoc) return t3(a2.catchLoc, true);
            } else {
              if (!s2) throw Error("try statement without catch or finally");
              if (this.prev < a2.finallyLoc) return t3(a2.finallyLoc);
            }
          }
        }
      }, abrupt: function e76(t3, r2) {
        for (var n2 = this.tryEntries.length - 1; n2 >= 0; --n2) {
          var i2 = this.tryEntries[n2];
          if (i2.tryLoc <= this.prev && l.call(i2, "finallyLoc") && this.prev < i2.finallyLoc) {
            var a2 = i2;
            break;
          }
        }
        a2 && ("break" === t3 || "continue" === t3) && a2.tryLoc <= r2 && r2 <= a2.finallyLoc && (a2 = null);
        var o2 = a2 ? a2.completion : {};
        return o2.type = t3, o2.arg = r2, a2 ? (this.method = "next", this.next = a2.finallyLoc, y) : this.complete(o2);
      }, complete: function e76(t3, r2) {
        if ("throw" === t3.type) throw t3.arg;
        return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && r2 && (this.next = r2), y;
      }, finish: function e76(t3) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var n2 = this.tryEntries[r2];
          if (n2.finallyLoc === t3) return this.complete(n2.completion, n2.afterLoc), k(n2), y;
        }
      }, catch: function e76(t3) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var n2 = this.tryEntries[r2];
          if (n2.tryLoc === t3) {
            var i2 = n2.completion;
            if ("throw" === i2.type) {
              var a2 = i2.arg;
              k(n2);
            }
            return a2;
          }
        }
        throw Error("illegal catch attempt");
      }, delegateYield: function e76(t3, r2, n2) {
        return this.delegate = { iterator: P(t3), resultName: r2, nextLoc: n2 }, "next" === this.method && (this.arg = c), y;
      } }, o;
    }
    O.exports = B, O.exports.__esModule = true, O.exports["default"] = O.exports;
  })(regeneratorRuntime$1);
  return regeneratorRuntime$1.exports;
}
function requireRegenerator() {
  if (hasRequiredRegenerator) return regenerator;
  hasRequiredRegenerator = 1;
  var t2 = requireRegeneratorRuntime()();
  regenerator = t2;
  try {
    regeneratorRuntime = t2;
  } catch (e75) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = t2;
    } else {
      Function("r", "regeneratorRuntime = r")(t2);
    }
  }
  return regenerator;
}
function checkedRead() {
  try {
    let e75 = read();
    if (bundledStrings$1) {
      if (position$1 >= bundledStrings$1.postBundlePosition) {
        let e76 = new Error("Unexpected bundle position");
        e76.incomplete = true;
        throw e76;
      }
      position$1 = bundledStrings$1.postBundlePosition;
      bundledStrings$1 = null;
    }
    if (position$1 == srcEnd) {
      currentStructures = null;
      src = null;
      if (referenceMap) referenceMap = null;
    } else if (position$1 > srcEnd) {
      let e76 = new Error("Unexpected end of CBOR data");
      e76.incomplete = true;
      throw e76;
    } else if (!sequentialMode) {
      throw new Error("Data read, but end of buffer not reached");
    }
    return e75;
  } catch (e75) {
    clearSource();
    if (e75 instanceof RangeError || e75.message.startsWith("Unexpected end of buffer")) {
      e75.incomplete = true;
    }
    throw e75;
  }
}
function read() {
  let n = src[position$1++];
  let i = n >> 5;
  n = n & 31;
  if (n > 23) {
    switch (n) {
      case 24:
        n = src[position$1++];
        break;
      case 25:
        if (i == 7) {
          return getFloat16();
        }
        n = dataView.getUint16(position$1);
        position$1 += 2;
        break;
      case 26:
        if (i == 7) {
          let t2 = dataView.getFloat32(position$1);
          if (currentDecoder.useFloat32 > 2) {
            let e75 = mult10[(src[position$1] & 127) << 1 | src[position$1 + 1] >> 7];
            position$1 += 4;
            return (e75 * t2 + (t2 > 0 ? 0.5 : -0.5) >> 0) / e75;
          }
          position$1 += 4;
          return t2;
        }
        n = dataView.getUint32(position$1);
        position$1 += 4;
        break;
      case 27:
        if (i == 7) {
          let e75 = dataView.getFloat64(position$1);
          position$1 += 8;
          return e75;
        }
        if (i > 1) {
          if (dataView.getUint32(position$1) > 0) throw new Error("JavaScript does not support arrays, maps, or strings with length over 4294967295");
          n = dataView.getUint32(position$1 + 4);
        } else if (currentDecoder.int64AsNumber) {
          n = dataView.getUint32(position$1) * 4294967296;
          n += dataView.getUint32(position$1 + 4);
        } else n = dataView.getBigUint64(position$1);
        position$1 += 8;
        break;
      case 31:
        switch (i) {
          case 2:
          case 3:
            throw new Error("Indefinite length not supported for byte or text strings");
          case 4:
            let e75 = [];
            let t2, r = 0;
            while ((t2 = read()) != STOP_CODE) {
              if (r >= maxArraySize) throw new Error(`Array length exceeds ${maxArraySize}`);
              e75[r++] = t2;
            }
            return i == 4 ? e75 : i == 3 ? e75.join("") : Buffer.concat(e75);
          case 5:
            let n2;
            if (currentDecoder.mapsAsObjects) {
              let e76 = {};
              let t3 = 0;
              if (currentDecoder.keyMap) {
                while ((n2 = read()) != STOP_CODE) {
                  if (t3++ >= maxMapSize) throw new Error(`Property count exceeds ${maxMapSize}`);
                  e76[safeKey(currentDecoder.decodeKey(n2))] = read();
                }
              } else {
                while ((n2 = read()) != STOP_CODE) {
                  if (t3++ >= maxMapSize) throw new Error(`Property count exceeds ${maxMapSize}`);
                  e76[safeKey(n2)] = read();
                }
              }
              return e76;
            } else {
              if (restoreMapsAsObject) {
                currentDecoder.mapsAsObjects = true;
                restoreMapsAsObject = false;
              }
              let t3 = /* @__PURE__ */ new Map();
              if (currentDecoder.keyMap) {
                let e76 = 0;
                while ((n2 = read()) != STOP_CODE) {
                  if (e76++ >= maxMapSize) {
                    throw new Error(`Map size exceeds ${maxMapSize}`);
                  }
                  t3.set(currentDecoder.decodeKey(n2), read());
                }
              } else {
                let e76 = 0;
                while ((n2 = read()) != STOP_CODE) {
                  if (e76++ >= maxMapSize) {
                    throw new Error(`Map size exceeds ${maxMapSize}`);
                  }
                  t3.set(n2, read());
                }
              }
              return t3;
            }
          case 7:
            return STOP_CODE;
          default:
            throw new Error("Invalid major type for indefinite length " + i);
        }
      default:
        throw new Error("Unknown token " + n);
    }
  }
  switch (i) {
    case 0:
      return n;
    case 1:
      return ~n;
    case 2:
      return readBin(n);
    case 3:
      if (srcStringEnd >= position$1) {
        return srcString.slice(position$1 - srcStringStart, (position$1 += n) - srcStringStart);
      }
      if (srcStringEnd == 0 && srcEnd < 140 && n < 32) {
        let e76 = n < 16 ? shortStringInJS(n) : longStringInJS(n);
        if (e76 != null) return e76;
      }
      return readFixedString(n);
    case 4:
      if (n >= maxArraySize) throw new Error(`Array length exceeds ${maxArraySize}`);
      let t2 = new Array(n);
      for (let e76 = 0; e76 < n; e76++) t2[e76] = read();
      return t2;
    case 5:
      if (n >= maxMapSize) throw new Error(`Map size exceeds ${maxArraySize}`);
      if (currentDecoder.mapsAsObjects) {
        let t3 = {};
        if (currentDecoder.keyMap) for (let e76 = 0; e76 < n; e76++) t3[safeKey(currentDecoder.decodeKey(read()))] = read();
        else for (let e76 = 0; e76 < n; e76++) t3[safeKey(read())] = read();
        return t3;
      } else {
        if (restoreMapsAsObject) {
          currentDecoder.mapsAsObjects = true;
          restoreMapsAsObject = false;
        }
        let t3 = /* @__PURE__ */ new Map();
        if (currentDecoder.keyMap) for (let e76 = 0; e76 < n; e76++) t3.set(currentDecoder.decodeKey(read()), read());
        else for (let e76 = 0; e76 < n; e76++) t3.set(read(), read());
        return t3;
      }
    case 6:
      if (n >= BUNDLED_STRINGS_ID) {
        let e76 = currentStructures[n & 8191];
        if (e76) {
          if (!e76.read) e76.read = createStructureReader(e76);
          return e76.read();
        }
        if (n < 65536) {
          if (n == RECORD_INLINE_ID) {
            let e77 = readJustLength();
            let t3 = read();
            let r = read();
            recordDefinition(t3, r);
            let n2 = {};
            if (currentDecoder.keyMap) for (let t4 = 2; t4 < e77; t4++) {
              let e78 = currentDecoder.decodeKey(r[t4 - 2]);
              n2[safeKey(e78)] = read();
            }
            else for (let t4 = 2; t4 < e77; t4++) {
              let e78 = r[t4 - 2];
              n2[safeKey(e78)] = read();
            }
            return n2;
          } else if (n == RECORD_DEFINITIONS_ID) {
            let t3 = readJustLength();
            let r = read();
            for (let e77 = 2; e77 < t3; e77++) {
              recordDefinition(r++, read());
            }
            return read();
          } else if (n == BUNDLED_STRINGS_ID) {
            return readBundleExt();
          }
          if (currentDecoder.getShared) {
            loadShared();
            e76 = currentStructures[n & 8191];
            if (e76) {
              if (!e76.read) e76.read = createStructureReader(e76);
              return e76.read();
            }
          }
        }
      }
      let e75 = currentExtensions[n];
      if (e75) {
        if (e75.handlesRead) return e75(read);
        else return e75(read());
      } else {
        let r = read();
        for (let t3 = 0; t3 < currentExtensionRanges.length; t3++) {
          let e76 = currentExtensionRanges[t3](n, r);
          if (e76 !== void 0) return e76;
        }
        return new Tag(r, n);
      }
    case 7:
      switch (n) {
        case 20:
          return false;
        case 21:
          return true;
        case 22:
          return null;
        case 23:
          return;
        case 31:
        default:
          let e76 = (packedValues || getPackedValues())[n];
          if (e76 !== void 0) return e76;
          throw new Error("Unknown token " + n);
      }
    default:
      if (isNaN(n)) {
        let e76 = new Error("Unexpected end of CBOR data");
        e76.incomplete = true;
        throw e76;
      }
      throw new Error("Unknown CBOR token " + n);
  }
}
function createStructureReader(e75) {
  if (!e75) throw new Error("Structure is required in record definition");
  function t2() {
    let t3 = src[position$1++];
    t3 = t3 & 31;
    if (t3 > 23) {
      switch (t3) {
        case 24:
          t3 = src[position$1++];
          break;
        case 25:
          t3 = dataView.getUint16(position$1);
          position$1 += 2;
          break;
        case 26:
          t3 = dataView.getUint32(position$1);
          position$1 += 4;
          break;
        default:
          throw new Error("Expected array header, but got " + src[position$1 - 1]);
      }
    }
    let r = this.compiledReader;
    while (r) {
      if (r.propertyCount === t3) return r(read);
      r = r.next;
    }
    if (this.slowReads++ >= inlineObjectReadThreshold) {
      let e76 = this.length == t3 ? this : this.slice(0, t3);
      r = currentDecoder.keyMap ? new Function("r", "return {" + e76.map((e77) => currentDecoder.decodeKey(e77)).map((e77) => validName.test(e77) ? safeKey(e77) + ":r()" : "[" + JSON.stringify(e77) + "]:r()").join(",") + "}") : new Function("r", "return {" + e76.map((e77) => validName.test(e77) ? safeKey(e77) + ":r()" : "[" + JSON.stringify(e77) + "]:r()").join(",") + "}");
      if (this.compiledReader) r.next = this.compiledReader;
      r.propertyCount = t3;
      this.compiledReader = r;
      return r(read);
    }
    let n = {};
    if (currentDecoder.keyMap) for (let e76 = 0; e76 < t3; e76++) n[safeKey(currentDecoder.decodeKey(this[e76]))] = read();
    else for (let e76 = 0; e76 < t3; e76++) {
      n[safeKey(this[e76])] = read();
    }
    return n;
  }
  e75.slowReads = 0;
  return t2;
}
function safeKey(e75) {
  if (typeof e75 === "string") return e75 === "__proto__" ? "__proto_" : e75;
  if (typeof e75 === "number" || typeof e75 === "boolean" || typeof e75 === "bigint") return e75.toString();
  if (e75 == null) return e75 + "";
  throw new Error("Invalid property name type " + typeof e75);
}
function readStringJS(e75) {
  let t2;
  if (e75 < 16) {
    if (t2 = shortStringInJS(e75)) return t2;
  }
  if (e75 > 64 && decoder) return decoder.decode(src.subarray(position$1, position$1 += e75));
  const r = position$1 + e75;
  const n = [];
  t2 = "";
  while (position$1 < r) {
    const i = src[position$1++];
    if ((i & 128) === 0) {
      n.push(i);
    } else if ((i & 224) === 192) {
      const a = src[position$1++] & 63;
      n.push((i & 31) << 6 | a);
    } else if ((i & 240) === 224) {
      const a = src[position$1++] & 63;
      const o = src[position$1++] & 63;
      n.push((i & 31) << 12 | a << 6 | o);
    } else if ((i & 248) === 240) {
      const a = src[position$1++] & 63;
      const o = src[position$1++] & 63;
      const u = src[position$1++] & 63;
      let e76 = (i & 7) << 18 | a << 12 | o << 6 | u;
      if (e76 > 65535) {
        e76 -= 65536;
        n.push(e76 >>> 10 & 1023 | 55296);
        e76 = 56320 | e76 & 1023;
      }
      n.push(e76);
    } else {
      n.push(i);
    }
    if (n.length >= 4096) {
      t2 += fromCharCode.apply(String, n);
      n.length = 0;
    }
  }
  if (n.length > 0) {
    t2 += fromCharCode.apply(String, n);
  }
  return t2;
}
function longStringInJS(t2) {
  let r = position$1;
  let n = new Array(t2);
  for (let e75 = 0; e75 < t2; e75++) {
    const i = src[position$1++];
    if ((i & 128) > 0) {
      position$1 = r;
      return;
    }
    n[e75] = i;
  }
  return fromCharCode.apply(String, n);
}
function shortStringInJS(h) {
  if (h < 4) {
    if (h < 2) {
      if (h === 0) return "";
      else {
        let e75 = src[position$1++];
        if ((e75 & 128) > 1) {
          position$1 -= 1;
          return;
        }
        return fromCharCode(e75);
      }
    } else {
      let e75 = src[position$1++];
      let t2 = src[position$1++];
      if ((e75 & 128) > 0 || (t2 & 128) > 0) {
        position$1 -= 2;
        return;
      }
      if (h < 3) return fromCharCode(e75, t2);
      let r = src[position$1++];
      if ((r & 128) > 0) {
        position$1 -= 3;
        return;
      }
      return fromCharCode(e75, t2, r);
    }
  } else {
    let f = src[position$1++];
    let _ = src[position$1++];
    let p = src[position$1++];
    let d = src[position$1++];
    if ((f & 128) > 0 || (_ & 128) > 0 || (p & 128) > 0 || (d & 128) > 0) {
      position$1 -= 4;
      return;
    }
    if (h < 6) {
      if (h === 4) return fromCharCode(f, _, p, d);
      else {
        let e75 = src[position$1++];
        if ((e75 & 128) > 0) {
          position$1 -= 5;
          return;
        }
        return fromCharCode(f, _, p, d, e75);
      }
    } else if (h < 8) {
      let e75 = src[position$1++];
      let t2 = src[position$1++];
      if ((e75 & 128) > 0 || (t2 & 128) > 0) {
        position$1 -= 6;
        return;
      }
      if (h < 7) return fromCharCode(f, _, p, d, e75, t2);
      let r = src[position$1++];
      if ((r & 128) > 0) {
        position$1 -= 7;
        return;
      }
      return fromCharCode(f, _, p, d, e75, t2, r);
    } else {
      let u = src[position$1++];
      let s = src[position$1++];
      let c = src[position$1++];
      let l = src[position$1++];
      if ((u & 128) > 0 || (s & 128) > 0 || (c & 128) > 0 || (l & 128) > 0) {
        position$1 -= 8;
        return;
      }
      if (h < 10) {
        if (h === 8) return fromCharCode(f, _, p, d, u, s, c, l);
        else {
          let e75 = src[position$1++];
          if ((e75 & 128) > 0) {
            position$1 -= 9;
            return;
          }
          return fromCharCode(f, _, p, d, u, s, c, l, e75);
        }
      } else if (h < 12) {
        let e75 = src[position$1++];
        let t2 = src[position$1++];
        if ((e75 & 128) > 0 || (t2 & 128) > 0) {
          position$1 -= 10;
          return;
        }
        if (h < 11) return fromCharCode(f, _, p, d, u, s, c, l, e75, t2);
        let r = src[position$1++];
        if ((r & 128) > 0) {
          position$1 -= 11;
          return;
        }
        return fromCharCode(f, _, p, d, u, s, c, l, e75, t2, r);
      } else {
        let n = src[position$1++];
        let i = src[position$1++];
        let a = src[position$1++];
        let o = src[position$1++];
        if ((n & 128) > 0 || (i & 128) > 0 || (a & 128) > 0 || (o & 128) > 0) {
          position$1 -= 12;
          return;
        }
        if (h < 14) {
          if (h === 12) return fromCharCode(f, _, p, d, u, s, c, l, n, i, a, o);
          else {
            let e75 = src[position$1++];
            if ((e75 & 128) > 0) {
              position$1 -= 13;
              return;
            }
            return fromCharCode(f, _, p, d, u, s, c, l, n, i, a, o, e75);
          }
        } else {
          let e75 = src[position$1++];
          let t2 = src[position$1++];
          if ((e75 & 128) > 0 || (t2 & 128) > 0) {
            position$1 -= 14;
            return;
          }
          if (h < 15) return fromCharCode(f, _, p, d, u, s, c, l, n, i, a, o, e75, t2);
          let r = src[position$1++];
          if ((r & 128) > 0) {
            position$1 -= 15;
            return;
          }
          return fromCharCode(f, _, p, d, u, s, c, l, n, i, a, o, e75, t2, r);
        }
      }
    }
  }
}
function readBin(e75) {
  return currentDecoder.copyBuffers ? Uint8Array.prototype.slice.call(src, position$1, position$1 += e75) : src.subarray(position$1, position$1 += e75);
}
function getFloat16() {
  let t2 = src[position$1++];
  let r = src[position$1++];
  let e75 = (t2 & 127) >> 2;
  if (e75 === 31) {
    if (r || t2 & 3) return NaN;
    return t2 & 128 ? -Infinity : Infinity;
  }
  if (e75 === 0) {
    let e76 = ((t2 & 3) << 8 | r) / (1 << 24);
    return t2 & 128 ? -e76 : e76;
  }
  u8Array[3] = t2 & 128 | (e75 >> 1) + 56;
  u8Array[2] = (t2 & 7) << 5 | r >> 3;
  u8Array[1] = r << 5;
  u8Array[0] = 0;
  return f32Array[0];
}
function combine(e75, t2) {
  if (typeof e75 === "string") return e75 + t2;
  if (e75 instanceof Array) return e75.concat(t2);
  return Object.assign({}, e75, t2);
}
function getPackedValues() {
  if (!packedValues) {
    if (currentDecoder.getShared) loadShared();
    else throw new Error("No packed values available");
  }
  return packedValues;
}
function registerTypedArray(u, s) {
  let c = "get" + u.name.slice(0, -5);
  let t2;
  if (typeof u === "function") t2 = u.BYTES_PER_ELEMENT;
  else u = null;
  for (let o = 0; o < 2; o++) {
    if (!o && t2 == 1) continue;
    let a = t2 == 2 ? 1 : t2 == 4 ? 2 : t2 == 8 ? 3 : 0;
    currentExtensions[o ? s : s - 4] = t2 == 1 || o == isLittleEndianMachine$1 ? (e75) => {
      if (!u) throw new Error("Could not find typed array for code " + s);
      if (!currentDecoder.copyBuffers) {
        if (t2 === 1 || t2 === 2 && !(e75.byteOffset & 1) || t2 === 4 && !(e75.byteOffset & 3) || t2 === 8 && !(e75.byteOffset & 7)) return new u(e75.buffer, e75.byteOffset, e75.byteLength >> a);
      }
      return new u(Uint8Array.prototype.slice.call(e75, 0).buffer);
    } : (e75) => {
      if (!u) throw new Error("Could not find typed array for code " + s);
      let t3 = new DataView(e75.buffer, e75.byteOffset, e75.byteLength);
      let r = e75.length >> a;
      let n = new u(r);
      let i = t3[c];
      for (let e76 = 0; e76 < r; e76++) {
        n[e76] = i.call(t3, e76 << a, o);
      }
      return n;
    };
  }
}
function readBundleExt() {
  let t2 = readJustLength();
  let e75 = position$1 + read();
  for (let e76 = 2; e76 < t2; e76++) {
    let e77 = readJustLength();
    position$1 += e77;
  }
  let r = position$1;
  position$1 = e75;
  bundledStrings$1 = [readStringJS(readJustLength()), readStringJS(readJustLength())];
  bundledStrings$1.position0 = 0;
  bundledStrings$1.position1 = 0;
  bundledStrings$1.postBundlePosition = position$1;
  position$1 = r;
  return read();
}
function readJustLength() {
  let e75 = src[position$1++] & 31;
  if (e75 > 23) {
    switch (e75) {
      case 24:
        e75 = src[position$1++];
        break;
      case 25:
        e75 = dataView.getUint16(position$1);
        position$1 += 2;
        break;
      case 26:
        e75 = dataView.getUint32(position$1);
        position$1 += 4;
        break;
    }
  }
  return e75;
}
function loadShared() {
  if (currentDecoder.getShared) {
    let e75 = saveState(() => {
      src = null;
      return currentDecoder.getShared();
    }) || {};
    let t2 = e75.structures || [];
    currentDecoder.sharedVersion = e75.version;
    packedValues = currentDecoder.sharedValues = e75.packedValues;
    if (currentStructures === true) currentDecoder.structures = currentStructures = t2;
    else currentStructures.splice.apply(currentStructures, [0, t2.length].concat(t2));
  }
}
function saveState(e75) {
  let t2 = srcEnd;
  let r = position$1;
  let n = srcStringStart;
  let i = srcStringEnd;
  let a = srcString;
  let o = referenceMap;
  let u = bundledStrings$1;
  let s = new Uint8Array(src.slice(0, srcEnd));
  let c = currentStructures;
  let l = currentDecoder;
  let f = sequentialMode;
  let _ = e75();
  srcEnd = t2;
  position$1 = r;
  srcStringStart = n;
  srcStringEnd = i;
  srcString = a;
  referenceMap = o;
  bundledStrings$1 = u;
  src = s;
  sequentialMode = f;
  currentStructures = c;
  currentDecoder = l;
  dataView = new DataView(src.buffer, src.byteOffset, src.byteLength);
  return _;
}
function clearSource() {
  src = null;
  referenceMap = null;
  currentStructures = null;
}
function addExtension$1(e75) {
  currentExtensions[e75.tag] = e75.decode;
}
function writeEntityLength(e75, t2) {
  if (e75 < 24) target[position++] = t2 | e75;
  else if (e75 < 256) {
    target[position++] = t2 | 24;
    target[position++] = e75;
  } else if (e75 < 65536) {
    target[position++] = t2 | 25;
    target[position++] = e75 >> 8;
    target[position++] = e75 & 255;
  } else {
    target[position++] = t2 | 26;
    targetView.setUint32(position, e75);
    position += 4;
  }
}
function writeArrayHeader(e75) {
  if (e75 < 24) target[position++] = 128 | e75;
  else if (e75 < 256) {
    target[position++] = 152;
    target[position++] = e75;
  } else if (e75 < 65536) {
    target[position++] = 153;
    target[position++] = e75 >> 8;
    target[position++] = e75 & 255;
  } else {
    target[position++] = 154;
    targetView.setUint32(position, e75);
    position += 4;
  }
}
function isBlob(e75) {
  if (e75 instanceof BlobConstructor) return true;
  let t2 = e75[Symbol.toStringTag];
  return t2 === "Blob" || t2 === "File";
}
function findRepetitiveStrings(r, n) {
  switch (typeof r) {
    case "string":
      if (r.length > 3) {
        if (n.objectMap[r] > -1 || n.values.length >= n.maxValues) return;
        let e75 = n.get(r);
        if (e75) {
          if (++e75.count == 2) {
            n.values.push(r);
          }
        } else {
          n.set(r, { count: 1 });
          if (n.samplingPackedValues) {
            let e76 = n.samplingPackedValues.get(r);
            if (e76) e76.count++;
            else n.samplingPackedValues.set(r, { count: 1 });
          }
        }
      }
      break;
    case "object":
      if (r) {
        if (r instanceof Array) {
          for (let e75 = 0, t3 = r.length; e75 < t3; e75++) {
            findRepetitiveStrings(r[e75], n);
          }
        } else {
          let e75 = !n.encoder.useRecords;
          for (var t2 in r) {
            if (r.hasOwnProperty(t2)) {
              if (e75) findRepetitiveStrings(t2, n);
              findRepetitiveStrings(r[t2], n);
            }
          }
        }
      }
      break;
    case "function":
      console.log(r);
  }
}
function typedArrayEncoder(e75, t2) {
  if (!isLittleEndianMachine && t2 > 1) e75 -= 4;
  return { tag: e75, encode: function e76(t3, r) {
    let n = t3.byteLength;
    let i = t3.byteOffset || 0;
    let a = t3.buffer || t3;
    r(hasNodeBuffer ? Buffer$1.from(a, i, n) : new Uint8Array(a, i, n));
  } };
}
function writeBuffer(e75, t2) {
  let r = e75.byteLength;
  if (r < 24) {
    target[position++] = 64 + r;
  } else if (r < 256) {
    target[position++] = 88;
    target[position++] = r;
  } else if (r < 65536) {
    target[position++] = 89;
    target[position++] = r >> 8;
    target[position++] = r & 255;
  } else {
    target[position++] = 90;
    targetView.setUint32(position, r);
    position += 4;
  }
  if (position + r >= target.length) {
    t2(position + r);
  }
  target.set(e75.buffer ? e75 : new Uint8Array(e75), position);
  position += r;
}
function insertIds(n, e75) {
  let r;
  let i = e75.length * 2;
  let a = n.length - i;
  e75.sort((e76, t2) => e76.offset > t2.offset ? 1 : -1);
  for (let r2 = 0; r2 < e75.length; r2++) {
    let t2 = e75[r2];
    t2.id = r2;
    for (let e76 of t2.references) {
      n[e76++] = r2 >> 8;
      n[e76] = r2 & 255;
    }
  }
  while (r = e75.pop()) {
    let e76 = r.offset;
    n.copyWithin(e76 + i, e76, a);
    i -= 2;
    let t2 = e76 + i;
    n[t2++] = 216;
    n[t2++] = 28;
    a = e76;
  }
  return n;
}
function writeBundles(e75, t2) {
  targetView.setUint32(bundledStrings.position + e75, position - bundledStrings.position - e75 + 1);
  let r = bundledStrings;
  bundledStrings = null;
  t2(r[0]);
  t2(r[1]);
}
function addExtension(e75) {
  if (e75.Class) {
    if (!e75.encode) throw new Error("Extension has no encode function");
    extensionClasses.unshift(e75.Class);
    extensions.unshift(e75);
  }
  addExtension$1(e75);
}
function requireLzjbPack() {
  if (hasRequiredLzjbPack) return lzjbPack;
  hasRequiredLzjbPack = 1;
  Object.defineProperty(lzjbPack, "__esModule", { value: true });
  const p = 8, d = 6, h = 3, m = (1 << d) + (h - 1), y = (1 << 16 - d) - 1, v = 256;
  function o(e76, t3) {
    var r2 = 0, n = 0, i = 0, a = 0, o2 = 0, u2 = 1 << p - 1, s2 = 0, c2 = 0, l2 = 0, f2 = new Int32Array(v), _2 = 0;
    for (_2 = 0; _2 < v; _2++) {
      f2[_2] = -858993460;
    }
    r2 = e76.length;
    while (n < r2) {
      if ((u2 <<= 1) == 1 << p) {
        u2 = 1;
        o2 = i;
        t3[i++] = 0;
      }
      if (n > r2 - m) {
        t3[i++] = e76[n++];
        continue;
      }
      l2 = (e76[n] + 13 ^ e76[n + 1] - 13 ^ e76[n + 2]) & v - 1;
      c2 = n - f2[l2] & y;
      f2[l2] = n;
      a = n - c2;
      if (a >= 0 && a != n && e76[n] == e76[a] && e76[n + 1] == e76[a + 1] && e76[n + 2] == e76[a + 2]) {
        t3[o2] |= u2;
        for (s2 = h; s2 < m; s2++) if (e76[n + s2] != e76[a + s2]) break;
        t3[i++] = s2 - h << p - d | c2 >> p;
        t3[i++] = c2;
        n += s2;
      } else {
        t3[i++] = e76[n++];
      }
    }
    console.assert(e76.length >= n);
    return i;
  }
  function c(e76, t3, r2) {
    t3 = t3 | 0;
    var n = 0, i = 0, a = 0, o2 = 0, u2 = 1 << (p - 1 | 0), s2 = 0, c2 = 0;
    while (n < t3) {
      if ((u2 <<= 1) === 1 << p) {
        u2 = 1;
        o2 = e76[n];
        n = n + 1 | 0;
      }
      if (o2 & u2) {
        s2 = (e76[n] >> (p - d | 0)) + h | 0;
        c2 = (e76[n] << p | e76[n + 1 | 0]) & y;
        n = n + 2 | 0;
        a = i - c2 | 0;
        {
          while (s2 > 4) {
            r2[i] = r2[a];
            i = i + 1 | 0;
            a = a + 1 | 0;
            r2[i] = r2[a];
            i = i + 1 | 0;
            a = a + 1 | 0;
            r2[i] = r2[a];
            i = i + 1 | 0;
            a = a + 1 | 0;
            r2[i] = r2[a];
            i = i + 1 | 0;
            a = a + 1 | 0;
            s2 = s2 - 4 | 0;
          }
          while (s2 > 0) {
            r2[i] = r2[a];
            i = i + 1 | 0;
            a = a + 1 | 0;
            s2 = s2 - 1 | 0;
          }
        }
      } else {
        r2[i] = e76[n];
        i = i + 1 | 0;
        n = n + 1 | 0;
      }
    }
    return i;
  }
  function e75() {
    const e76 = new TextEncoder("utf-8");
    return e76.encode(l);
  }
  const l = "@lzjb";
  const f = e75();
  function u(...e76) {
    if (e76.length > 1) {
      const r2 = e76.reduce((e77, t4) => e77 + t4.length, 0);
      const n = new Uint8Array(r2);
      let t3 = 0;
      e76.forEach((e77) => {
        n.set(e77, t3);
        t3 += e77.length;
      });
      return n;
    } else if (e76.length) {
      return e76[0];
    }
  }
  function s(t3) {
    const e76 = Math.ceil(Math.log2(t3) / 8);
    const r2 = new Uint8Array(e76);
    for (let e77 = 0; e77 < r2.length; e77++) {
      const n = t3 & 255;
      r2[e77] = n;
      t3 = (t3 - n) / 256;
    }
    return r2;
  }
  function _(t3) {
    let r2 = 0;
    for (let e76 = t3.length - 1; e76 >= 0; e76--) {
      r2 = r2 * 256 + t3[e76];
    }
    return r2;
  }
  function t2(e76, { magic: t3 = true } = {}) {
    const r2 = new Uint8Array(Math.max(e76.length * 1.5 | 0, 16 * 1024));
    const n = o(e76, r2);
    const i = s(e76.length);
    const a = [Uint8Array.of(i.length), i, r2.slice(0, n)];
    if (t3) {
      a.unshift(f);
    }
    return u(...a);
  }
  function r(t3, { magic: e76 = true } = {}) {
    if (e76) {
      const e77 = new TextDecoder("utf-8");
      const s2 = e77.decode(t3.slice(0, f.length));
      if (s2 !== l) {
        throw new Error("Invalid magic value");
      }
    }
    const r2 = e76 ? f.length : 0;
    const n = t3[r2];
    const i = r2 + 1;
    const a = r2 + n + 1;
    const o2 = _(t3.slice(i, a));
    t3 = t3.slice(a);
    const u2 = new Uint8Array(o2);
    c(t3, t3.length, u2);
    return u2;
  }
  lzjbPack.pack = t2;
  lzjbPack.unpack = r;
  return lzjbPack;
}
function e(u, s) {
  return s = s || {}, new Promise(function(e75, t2) {
    var r = new XMLHttpRequest(), n = [], i = {}, a = function e76() {
      return { ok: 2 == (r.status / 100 | 0), statusText: r.statusText, status: r.status, url: r.responseURL, text: function() {
        return Promise.resolve(r.responseText);
      }, json: function() {
        return Promise.resolve(r.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([r.response]));
      }, clone: e76, headers: { keys: function() {
        return n;
      }, entries: function() {
        return n.map(function(e77) {
          return [e77, r.getResponseHeader(e77)];
        });
      }, get: function(e77) {
        return r.getResponseHeader(e77);
      }, has: function(e77) {
        return null != r.getResponseHeader(e77);
      } } };
    };
    for (var o in r.open(s.method || "get", u, true), r.onload = function() {
      r.getAllResponseHeaders().toLowerCase().replace(/^(.+?):/gm, function(e76, t3) {
        i[t3] || n.push(i[t3] = t3);
      }), e75(a());
    }, r.onerror = t2, r.withCredentials = "include" == s.credentials, s.headers) r.setRequestHeader(o, s.headers[o]);
    r.send(s.body || null);
  });
}
function _classPrivateFieldInitSpec(e75, t2, r) {
  _checkPrivateRedeclaration(e75, t2), t2.set(e75, r);
}
function _checkPrivateRedeclaration(e75, t2) {
  if (t2.has(e75)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet(e75, t2) {
  return e75.get(_assertClassBrand(e75, t2));
}
function _classPrivateFieldSet(e75, t2, r) {
  return e75.set(_assertClassBrand(e75, t2), r), r;
}
function _assertClassBrand(e75, t2, r) {
  if ("function" == typeof e75 ? e75 === t2 : e75.has(t2)) return arguments.length < 3 ? t2 : r;
  throw new TypeError("Private element is not present on this object");
}
function _callSuper(e75, t2, r) {
  return t2 = _getPrototypeOf(t2), _possibleConstructorReturn(e75, _isNativeReflectConstruct() ? Reflect.construct(t2, r || [], _getPrototypeOf(e75).constructor) : t2.apply(e75, r));
}
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct = function e75() {
    return !!t2;
  })();
}
function _createForOfIteratorHelper(t2, e75) {
  var r = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
  if (!r) {
    if (Array.isArray(t2) || (r = _unsupportedIterableToArray(t2)) || e75) {
      r && (t2 = r);
      var n = 0, i = function e76() {
      };
      return { s: i, n: function e76() {
        return n >= t2.length ? { done: true } : { done: false, value: t2[n++] };
      }, e: function e76(t3) {
        throw t3;
      }, f: i };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var a, o = true, u = false;
  return { s: function e76() {
    r = r.call(t2);
  }, n: function e76() {
    var t3 = r.next();
    return o = t3.done, t3;
  }, e: function e76(t3) {
    u = true, a = t3;
  }, f: function e76() {
    try {
      o || null == r["return"] || r["return"]();
    } finally {
      if (u) throw a;
    }
  } };
}
function _unsupportedIterableToArray(e75, t2) {
  if (e75) {
    if ("string" == typeof e75) return _arrayLikeToArray(e75, t2);
    var r = {}.toString.call(e75).slice(8, -1);
    return "Object" === r && e75.constructor && (r = e75.constructor.name), "Map" === r || "Set" === r ? Array.from(e75) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e75, t2) : void 0;
  }
}
function _arrayLikeToArray(e75, t2) {
  (null == t2 || t2 > e75.length) && (t2 = e75.length);
  for (var r = 0, n = Array(t2); r < t2; r++) n[r] = e75[r];
  return n;
}
function ownKeys(t2, e75) {
  var r = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t2);
    e75 && (n = n.filter(function(e76) {
      return Object.getOwnPropertyDescriptor(t2, e76).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _objectSpread(t2) {
  for (var e75 = 1; e75 < arguments.length; e75++) {
    var r = null != arguments[e75] ? arguments[e75] : {};
    e75 % 2 ? ownKeys(Object(r), true).forEach(function(e76) {
      _defineProperty(t2, e76, r[e76]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(e76) {
      Object.defineProperty(t2, e76, Object.getOwnPropertyDescriptor(r, e76));
    });
  }
  return t2;
}
function _asyncIterator(e75) {
  var t2, r, n, i = 2;
  for ("undefined" != typeof Symbol && (r = Symbol.asyncIterator, n = Symbol.iterator); i--; ) {
    if (r && null != (t2 = e75[r])) return t2.call(e75);
    if (n && null != (t2 = e75[n])) return new AsyncFromSyncIterator(t2.call(e75));
    r = "@@asyncIterator", n = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(e75) {
  function n(e76) {
    if (Object(e76) !== e76) return Promise.reject(new TypeError(e76 + " is not an object."));
    var t2 = e76.done;
    return Promise.resolve(e76.value).then(function(e77) {
      return { value: e77, done: t2 };
    });
  }
  return AsyncFromSyncIterator = function e76(t2) {
    this.s = t2, this.n = t2.next;
  }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function e76() {
    return n(this.n.apply(this.s, arguments));
  }, return: function e76(t2) {
    var r = this.s["return"];
    return void 0 === r ? Promise.resolve({ value: t2, done: true }) : n(r.apply(this.s, arguments));
  }, throw: function e76(t2) {
    var r = this.s["return"];
    return void 0 === r ? Promise.reject(t2) : n(r.apply(this.s, arguments));
  } }, new AsyncFromSyncIterator(e75);
}
function contentLoaded(r, n) {
  var i = false, e75 = true, a = r.document, t2 = a.documentElement, o = a.addEventListener, u = o ? "addEventListener" : "attachEvent", s = o ? "removeEventListener" : "detachEvent", c = o ? "" : "on", l = function e76(t3) {
    if (t3.type == "readystatechange" && a.readyState != "complete") return;
    (t3.type == "load" ? r : a)[s](c + t3.type, l, false);
    if (!i && (i = true)) n.call(r, t3.type || t3);
  }, f = function e76() {
    try {
      t2.doScroll("left");
    } catch (e77) {
      setTimeout(f, 50);
      return;
    }
    l("poll");
  };
  if (a.readyState == "complete") n.call(r, "lazy");
  else {
    if (!o && t2.doScroll) {
      try {
        e75 = !r.frameElement;
      } catch (e76) {
      }
      if (e75) f();
    }
    a[u](c + "DOMContentLoaded", l, false);
    a[u](c + "readystatechange", l, false);
    r[u](c + "load", l, false);
  }
}
function log(e75) {
  for (var t2 = arguments.length, r = new Array(t2 > 1 ? t2 - 1 : 0), n = 1; n < t2; n++) {
    r[n - 1] = arguments[n];
  }
  if (is_plain_object(e75) && is_debug(r[0])) {
    console.log(map_object(e75, function(e76) {
      return to_string(e76, true);
    }));
  } else if (is_debug()) {
    var i;
    (i = console).log.apply(i, [to_string(e75, true)].concat(_toConsumableArray(r.map(function(e76) {
      return to_string(e76, true);
    }))));
  }
}
function is_debug() {
  var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
  var t2 = user_env && user_env.get("DEBUG", { throwError: false });
  if (e75 === null) {
    return t2 === true;
  }
  return (t2 === null || t2 === void 0 ? void 0 : t2.valueOf()) === e75.valueOf();
}
function num_mnemicic_re(e75) {
  return e75 ? "(?:#".concat(e75, "(?:#[ie])?|#[ie]#").concat(e75, ")") : "(?:#[ie])?";
}
function gen_rational_re(e75, t2) {
  return "".concat(num_mnemicic_re(e75), "[+-]?").concat(t2, "+/").concat(t2, "+");
}
function gen_complex_re(e75, t2) {
  return "".concat(num_mnemicic_re(e75), "(?:[+-]?(?:").concat(t2, "+/").concat(t2, "+|nan.0|inf.0|").concat(t2, "+))?(?:[+-]i|[+-]?(?:").concat(t2, "+/").concat(t2, "+|").concat(t2, "+|nan.0|inf.0)i)(?=[()[\\]\\s]|$)");
}
function gen_integer_re(e75, t2) {
  return "".concat(num_mnemicic_re(e75), "[+-]?").concat(t2, "+");
}
function make_complex_match_re(e75, t2) {
  var r = e75 === "x" ? "(?!\\+|".concat(t2, ")") : "(?!\\.|".concat(t2, ")");
  var n = "";
  if (e75 === "") {
    n = "(?:[-+]?(?:[0-9]+(?:[eE][-+]?[0-9]+)|(?:\\.[0-9]+|[0-9]+\\.[0-9]+(?![0-9]))(?:[eE][-+]?[0-9]+)?))";
  }
  return new RegExp("^((?:(?:".concat(n, "|[-+]?inf.0|[-+]?nan.0|[+-]?").concat(t2, "+/").concat(t2, "+(?!").concat(t2, ")|[+-]?").concat(t2, "+)").concat(r, ")?)(").concat(n, "|[-+]?inf.0|[-+]?nan.0|[+-]?").concat(t2, "+/").concat(t2, "+|[+-]?").concat(t2, "+|[+-])i$"), "i");
}
function ucs2decode(e75) {
  var t2 = [];
  var r = 0;
  var n = e75.length;
  while (r < n) {
    var i = e75.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      var a = e75.charCodeAt(r++);
      if ((a & 64512) === 56320) {
        t2.push(((i & 1023) << 10) + (a & 1023) + 65536);
      } else {
        t2.push(i);
        r--;
      }
    } else {
      t2.push(i);
    }
  }
  return t2;
}
function make_num_stre(i) {
  var e75 = [["o", "[0-7]"], ["x", "[0-9a-fA-F]"], ["b", "[01]"], ["d", "[0-9]"], ["", "[0-9]"]];
  var t2 = e75.map(function(e76) {
    var t3 = _slicedToArray(e76, 2), r = t3[0], n = t3[1];
    return i(r, n);
  }).join("|");
  if (i === gen_complex_re) {
    t2 = complex_float_stre + "|" + t2;
  }
  return t2;
}
function make_type_re(e75) {
  return new RegExp("^(?:" + make_num_stre(e75) + ")$", "i");
}
function num_pre_parse(e75) {
  var t2 = e75.match(pre_num_parse_re);
  var r = {};
  if (t2[1]) {
    var n = t2[1].replace(/#/g, "").toLowerCase().split("");
    if (n.includes("x")) {
      r.radix = 16;
    } else if (n.includes("o")) {
      r.radix = 8;
    } else if (n.includes("b")) {
      r.radix = 2;
    } else if (n.includes("d")) {
      r.radix = 10;
    }
    if (n.includes("i")) {
      r.inexact = true;
    }
    if (n.includes("e")) {
      r.exact = true;
    }
  }
  r.number = t2[2];
  return r;
}
function parse_rational(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
  var r = num_pre_parse(e75);
  var n = r.number.split("/");
  var i = LRational({ num: LNumber([n[0], r.radix || t2]), denom: LNumber([n[1], r.radix || t2]) });
  if (r.inexact) {
    return i.valueOf();
  } else {
    return i;
  }
}
function parse_integer(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
  var r = num_pre_parse(e75);
  if (r.inexact) {
    return LFloat(parseInt(r.number, r.radix || t2));
  }
  return LNumber([r.number, r.radix || t2]);
}
function parse_character(e75) {
  var t2 = e75.match(/#\\x([0-9a-f]+)$/i);
  var r;
  if (t2) {
    var n = parseInt(t2[1], 16);
    r = String.fromCodePoint(n);
  } else {
    t2 = e75.match(/#\\([\s\S]+)$/);
    if (t2) {
      r = t2[1];
    }
  }
  if (r) {
    return LCharacter(r);
  }
  throw new Error("Parse: invalid character");
}
function parse_complex(e75) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
  function t2(e76) {
    var t3;
    if (e76 === "+") {
      t3 = LNumber(1);
    } else if (e76 === "-") {
      t3 = LNumber(-1);
    } else if (e76.match(int_bare_re)) {
      t3 = LNumber([e76, i]);
    } else if (e76.match(rational_bare_re)) {
      var r2 = e76.split("/");
      t3 = LRational({ num: LNumber([r2[0], i]), denom: LNumber([r2[1], i]) });
    } else if (e76.match(float_re)) {
      var n2 = parse_float(e76);
      if (a.exact) {
        return n2.toRational();
      }
      return n2;
    } else if (e76.match(/nan.0$/)) {
      return LNumber(NaN);
    } else if (e76.match(/inf.0$/)) {
      if (e76[0] === "-") {
        return LNumber(Number.NEGATIVE_INFINITY);
      }
      return LNumber(Number.POSITIVE_INFINITY);
    } else {
      throw new Error("Internal Parser Error");
    }
    if (a.inexact) {
      return LFloat(t3.valueOf());
    }
    return t3;
  }
  var a = num_pre_parse(e75);
  i = a.radix || i;
  var r;
  var n = a.number.match(complex_bare_match_re);
  if (i !== 10 && n) {
    r = n;
  } else {
    r = a.number.match(complex_list_re[i]);
  }
  var o, u;
  u = t2(r[2]);
  if (r[1]) {
    o = t2(r[1]);
  } else if (u instanceof LFloat) {
    o = LFloat(0);
  } else {
    o = LNumber(0);
  }
  if (u.cmp(0) === 0 && u.__type__ === "bigint") {
    return o;
  }
  return LComplex({ im: u, re: o });
}
function is_int(e75) {
  return parseInt(e75.toString(), 10) === e75;
}
function parse_big_int(e75) {
  var t2 = e75.match(/^(([-+]?[0-9]*)(?:\.([0-9]+))?)e([-+]?[0-9]+)/i);
  if (t2) {
    var r = parseInt(t2[4], 10);
    var n;
    var i = t2[1].replace(/[-+]?([0-9]*)\..+$/, "$1").length;
    var a = t2[3] && t2[3].length;
    if (i < Math.abs(r)) {
      n = LNumber([t2[1].replace(/\./, ""), 10]);
      if (a) {
        r -= a;
      }
    }
  }
  return { exponent: r, mantisa: n };
}
function string_to_float(e75) {
  if (e75.match(/e/i)) {
    var t2 = e75.split("e"), r = _slicedToArray(t2, 2), n = r[0], i = r[1];
    var a = Math.abs(parseInt(i));
    if (a < 7 && i < 0) {
      var o = "0".repeat(a - 1);
      var u = n[0] === "-" ? "-" : "+";
      var s = n.replace(/(^[-+])|\./g, "");
      var c = "".concat(u, "0.").concat(o).concat(s);
      return parseFloat(c);
    }
  }
  return parseFloat(e75);
}
function parse_float(e75) {
  var t2 = num_pre_parse(e75);
  var r = string_to_float(t2.number);
  var n = (t2.number.match(/\.0$/) || !t2.number.match(/\./)) && !t2.number.match(/e/i);
  if (!t2.inexact) {
    if (t2.exact && n) {
      return LNumber(r);
    }
    if (is_int(r) && Number.isSafeInteger(r) && t2.number.match(/e\+?[0-9]/i)) {
      return LNumber(r);
    }
    var i = parse_big_int(t2.number), a = i.mantisa, o = i.exponent;
    if (a !== void 0 && o !== void 0) {
      var u = LNumber(10).pow(LNumber(Math.abs(o)));
      if (t2.exact && o < 0) {
        return LRational({ num: a, denom: u });
      } else if (o > 0 && (t2.exact || !t2.number.match(/\./))) {
        return LNumber(a).mul(u);
      }
    }
  }
  r = LFloat(r);
  if (t2.exact) {
    return r.toRational();
  }
  return r;
}
function parse_string(e75) {
  e75 = e75.replace(/\\x([0-9a-f]+);/gi, function(e76, t3) {
    return "\\u" + t3.padStart(4, "0");
  }).replace(/\n/g, "\\n");
  var t2 = e75.match(/(\\*)(\\x[0-9A-F])/i);
  if (t2 && t2[1].length % 2 === 0) {
    throw new Error("Invalid string literal, unclosed ".concat(t2[2]));
  }
  try {
    var r = LString(JSON.parse(e75));
    r.freeze();
    return r;
  } catch (e76) {
    var n = e76.message.replace(/in JSON /, "").replace(/.*Error: /, "");
    throw new Error("Invalid string literal: ".concat(n));
  }
}
function parse_symbol(e75) {
  e75.match(/^name/);
  var t2 = /(^|.)\|/g;
  if (e75.match(t2)) {
    e75 = e75.split("|").filter(Boolean).reduce(function(e76, t3) {
      var r2 = "";
      if (t3.match(/^\\+$/)) {
        if (t3.length > 1) {
          var n = Math.floor(t3.length / 2);
          r2 = "\\".repeat(n);
        }
        if (t3.length % 2 !== 0) {
          r2 += "|";
        }
      } else {
        r2 = t3;
      }
      return e76 + r2;
    });
    var r = { t: "	", r: "\r", n: "\n" };
    e75 = e75.replace(/\\(x[^;]+);/g, function(e76, t3) {
      return String.fromCharCode(parseInt("0" + t3, 16));
    }).replace(/\\([trn])/g, function(e76, t3) {
      return r[t3];
    });
  }
  return new LSymbol(e75);
}
function parse_argument(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var r = e75.token;
  if (constants.hasOwnProperty(r)) {
    return constants[r];
  }
  var n;
  if (r.match(/^"[\s\S]*"$/)) {
    n = parse_string(r);
  } else if (r[0] === "#") {
    var i = r.match(re_re);
    if (i) {
      n = new RegExp(i[1], i[2]);
    } else if (r.match(char_re)) {
      n = parse_character(r);
    }
    var a = r.match(/#\\(.+)/);
    if (a && ucs2decode(a[1]).length === 1) {
      n = parse_character(r);
    }
  }
  if (r.match(/[0-9a-f]|[+-]i/i)) {
    if (r.match(int_re)) {
      n = parse_integer(r);
    } else if (r.match(float_re)) {
      n = parse_float(r);
    } else if (r.match(rational_re)) {
      n = parse_rational(r);
    } else if (r.match(complex_re)) {
      n = parse_complex(r);
    }
  }
  if (!n && r.match(/^#[iexobd]/)) {
    throw new Error("Invalid numeric constant: " + e75);
  }
  if (!n) {
    n = parse_symbol(r);
  }
  if (t2) {
    var o = e75.col, u = e75.offset, s = e75.line;
    read_only(n, "__col__", o);
    read_only(n, "__offset__", u);
    read_only(n, "__line__", s);
  }
  return n;
}
function is_atom_string(e75) {
  return !(["(", ")", "[", "]"].includes(e75) || specials.names().includes(e75));
}
function is_symbol_string(e75) {
  return is_atom_string(e75) && !(e75.match(re_re) || e75.match(/^"[\s\S]*"$/) || e75.match(int_re) || e75.match(float_re) || e75.match(complex_re) || e75.match(rational_re) || e75.match(char_re) || ["#t", "#f", "nil"].includes(e75));
}
function escape_regex(e75) {
  if (typeof e75 === "string") {
    var t2 = /([-\\^$[\]()+{}?*.|])/g;
    return e75.replace(t2, "\\$1");
  }
  return e75;
}
function Stack() {
  this.data = [];
}
function tokens(e75) {
  if (e75 instanceof LString) {
    e75 = e75.valueOf();
  }
  var t2 = new Lexer(e75, { whitespace: true });
  var r = [];
  while (true) {
    var n = t2.peek(true);
    if (n === eof) {
      break;
    }
    r.push(n);
    t2.skip();
  }
  return r;
}
function multiline_formatter(e75) {
  var t2 = e75.token, r = _objectWithoutProperties(e75, _excluded);
  if (t2.match(/^"[\s\S]*"$/) && t2.match(/\n/)) {
    var n = new RegExp("^ {1," + (e75.col + 1) + "}", "mg");
    t2 = t2.replace(n, "");
  }
  return _objectSpread({ token: t2 }, r);
}
function Thunk(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  };
  this.fn = e75;
  this.cont = t2;
}
function trampoline(n) {
  return function() {
    for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
      t2[r] = arguments[r];
    }
    return unwind(n.apply(this, t2));
  };
}
function unwind(e75) {
  while (e75 instanceof Thunk) {
    var t2 = e75;
    e75 = e75.fn();
    if (!(e75 instanceof Thunk)) {
      t2.cont();
    }
  }
  return e75;
}
function tokenize(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (e75 instanceof LString) {
    e75 = e75.toString();
  }
  if (t2) {
    return tokens(e75);
  } else {
    var r = tokens(e75).map(function(e76) {
      if (e76.token === "#\\ " || e76.token == "#\\\n") {
        return e76.token;
      }
      return e76.token.trim();
    }).filter(function(e76) {
      return e76 && !e76.match(/^;/) && !e76.match(/^#\|[\s\S]*\|#$/);
    });
    return strip_s_comments(r);
  }
}
function strip_s_comments(e75) {
  var t2 = 0;
  var r = null;
  var n = [];
  for (var i = 0; i < e75.length; ++i) {
    var a = e75[i];
    if (a === "#;") {
      if (["(", "["].includes(e75[i + 1])) {
        t2 = 1;
        r = i;
      } else {
        n.push([i, i + 2]);
      }
      i += 1;
      continue;
    }
    if (r !== null) {
      if ([")", "]"].includes(a)) {
        t2--;
      } else if (["(", "["].includes(a)) {
        t2++;
      }
      if (t2 === 0) {
        n.push([r, i + 1]);
        r = null;
      }
    }
  }
  e75 = e75.slice();
  n.reverse();
  for (var o = 0, u = n; o < u.length; o++) {
    var s = _slicedToArray(u[o], 2), c = s[0], l = s[1];
    e75.splice(c, l - c);
  }
  return e75;
}
function is_symbol(e75) {
  return _typeof$1(e75) === "symbol" || _typeof$1(e75) === "object" && Object.prototype.toString.call(e75) === "[object Symbol]";
}
function LSymbol(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (e75 instanceof LString) {
    e75 = e75.valueOf();
  }
  if (t2 && LSymbol.list[e75] instanceof LSymbol) {
    return LSymbol.list[e75];
  }
  if (typeof this !== "undefined" && this.constructor !== LSymbol || typeof this === "undefined") {
    return new LSymbol(e75, t2);
  }
  this.__name__ = e75;
  if (t2 && typeof e75 === "string") {
    LSymbol.list[e75] = this;
  }
}
function symbol_to_string(e75) {
  return e75.toString().replace(/^Symbol\(([^)]+)\)/, "$1");
}
function is_gensym(e75) {
  if (_typeof$1(e75) === "symbol") {
    return !!e75.toString().match(/^Symbol\(#:/);
  }
  return false;
}
function hygienic_begin(e75, t2) {
  var r = global_env.get("begin");
  var n = gensym("begin");
  e75.forEach(function(e76) {
    e76.set(n, r);
  });
  return new Pair(n, t2);
}
function QuotedPromise(e75) {
  var r = this;
  var n = { pending: true, rejected: false, fulfilled: false, reason: void 0, type: void 0 };
  e75 = e75.then(function(e76) {
    n.type = type(e76);
    n.fulfilled = true;
    n.pending = false;
    return e76;
  });
  read_only(this, "_promise", e75, { hidden: true });
  if (is_function(e75["catch"])) {
    e75 = e75["catch"](function(e76) {
      n.rejected = true;
      n.pending = false;
      n.reason = e76;
    });
  }
  Object.keys(n).forEach(function(t2) {
    Object.defineProperty(r, "__".concat(t2, "__"), { enumerable: true, get: function e76() {
      return n[t2];
    } });
  });
  read_only(this, "__promise__", e75);
  this.then = false;
}
function promise_all(e75) {
  if (Array.isArray(e75)) {
    return Promise.all(escape_quoted_promises(e75)).then(unescape_quoted_promises);
  }
  return e75;
}
function escape_quoted_promises(e75) {
  var t2 = new Array(e75.length), r = e75.length;
  while (r--) {
    var n = e75[r];
    if (n instanceof QuotedPromise) {
      t2[r] = new Value(n);
    } else {
      t2[r] = n;
    }
  }
  return t2;
}
function unescape_quoted_promises(e75) {
  var t2 = new Array(e75.length), r = e75.length;
  while (r--) {
    var n = e75[r];
    if (n instanceof Value) {
      t2[r] = n.valueOf();
    } else {
      t2[r] = n;
    }
  }
  return t2;
}
function is_special(e75) {
  return specials.names().includes(e75);
}
function is_builtin(e75) {
  return specials.__builtins__.includes(e75);
}
function is_literal(e75) {
  return specials.type(e75) === specials.LITERAL;
}
function is_symbol_extension(e75) {
  return specials.type(e75) === specials.SYMBOL;
}
function match_or_null(e75, t2) {
  if (is_string(e75)) {
    return e75 === t2;
  }
  return e75 === null || t2.match(e75);
}
function _parse(e75, t2) {
  return _parse2.apply(this, arguments);
}
function _parse2() {
  _parse2 = _wrapAsyncGenerator(_regeneratorRuntime.mark(function e75(r, n) {
    var i, a, o;
    return _regeneratorRuntime.wrap(function e76(t2) {
      while (1) switch (t2.prev = t2.next) {
        case 0:
          if (!n) {
            if (global_env) {
              n = global_env.get("**interaction-environment**", { throwError: false });
            } else {
              n = user_env;
            }
          }
          if (r instanceof Parser) {
            i = r;
          } else {
            i = new Parser({ env: n });
            i.prepare(r);
          }
        case 2:
          t2.next = 5;
          return _awaitAsyncGenerator(i.read_object());
        case 5:
          o = t2.sent;
          if (!i.balanced()) {
            i._ballancing_error(o, a);
          }
          if (!(o === eof)) {
            t2.next = 9;
            break;
          }
          return t2.abrupt("break", 14);
        case 9:
          a = o;
          t2.next = 12;
          return o;
        case 12:
          t2.next = 2;
          break;
        case 14:
        case "end":
          return t2.stop();
      }
    }, e75);
  }));
  return _parse2.apply(this, arguments);
}
function unpromise(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(e76) {
    return e76;
  };
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  if (is_promise(e75)) {
    var n = e75.then(t2);
    if (r === null) {
      return n;
    } else {
      return n["catch"](r);
    }
  }
  if (e75 instanceof Array) {
    return unpromise_array(e75, t2, r);
  }
  if (is_plain_object(e75)) {
    return unpromise_object(e75, t2, r);
  }
  return t2(e75);
}
function unpromise_array(t2, r, e75) {
  if (t2.find(is_promise)) {
    return unpromise(promise_all(t2), function(e76) {
      if (Object.isFrozen(t2)) {
        Object.freeze(e76);
      }
      return r(e76);
    }, e75);
  }
  return r(t2);
}
function unpromise_object(t2, e75, r) {
  var i = Object.keys(t2);
  var n = [], a = [];
  var o = i.length;
  while (o--) {
    var u = i[o];
    var s = t2[u];
    n[o] = s;
    if (is_promise(s)) {
      a.push(s);
    }
  }
  if (a.length) {
    return unpromise(promise_all(n), function(e76) {
      var n2 = {};
      e76.forEach(function(e77, t3) {
        var r2 = i[t3];
        n2[r2] = e77;
      });
      if (Object.isFrozen(t2)) {
        Object.freeze(n2);
      }
      return n2;
    }, r);
  }
  return e75(t2);
}
function read_only(e75, t2, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = n.hidden, a = i === void 0 ? false : i;
  Object.defineProperty(e75, t2, { value: r, writable: false, configurable: true, enumerable: !a });
}
function uniterate_async(e75) {
  return _uniterate_async.apply(this, arguments);
}
function _uniterate_async() {
  _uniterate_async = _asyncToGenerator(_regeneratorRuntime.mark(function e75(r) {
    var n, i, a, o, u, s, c;
    return _regeneratorRuntime.wrap(function e76(t2) {
      while (1) switch (t2.prev = t2.next) {
        case 0:
          n = [];
          i = false;
          a = false;
          t2.prev = 3;
          u = _asyncIterator(r);
        case 5:
          t2.next = 7;
          return u.next();
        case 7:
          if (!(i = !(s = t2.sent).done)) {
            t2.next = 13;
            break;
          }
          c = s.value;
          n.push(c);
        case 10:
          i = false;
          t2.next = 5;
          break;
        case 13:
          t2.next = 19;
          break;
        case 15:
          t2.prev = 15;
          t2.t0 = t2["catch"](3);
          a = true;
          o = t2.t0;
        case 19:
          t2.prev = 19;
          t2.prev = 20;
          if (!(i && u["return"] != null)) {
            t2.next = 24;
            break;
          }
          t2.next = 24;
          return u["return"]();
        case 24:
          t2.prev = 24;
          if (!a) {
            t2.next = 27;
            break;
          }
          throw o;
        case 27:
          return t2.finish(24);
        case 28:
          return t2.finish(19);
        case 29:
          return t2.abrupt("return", n);
        case 30:
        case "end":
          return t2.stop();
      }
    }, e75, null, [[3, 15, 19, 29], [20, , 24, 28]]);
  }));
  return _uniterate_async.apply(this, arguments);
}
function matcher(e75, t2) {
  if (t2 instanceof RegExp) {
    return function(e76) {
      return String(e76).match(t2);
    };
  } else if (is_function(t2)) {
    return t2;
  } else if (t2 instanceof LNumber) {
    return function(e76) {
      return LNumber(e76).cmp(t2) === 0;
    };
  } else if (t2 instanceof LString) {
    var r = t2.__string__;
    return function(e76) {
      return LString.is(e76, r);
    };
  } else if (t2 instanceof LSymbol) {
    var n = t2.__name__;
    return function(e76) {
      return LSymbol.is(e76, n);
    };
  } else if (t2 instanceof LCharacter) {
    var i = t2.__char__;
    return function(e76) {
      return LCharacter.is(e76, i);
    };
  }
  return function(e76) {
    return t2 === e76;
  };
}
function doc(e75, t2, r, n) {
  if (typeof e75 !== "string") {
    t2 = arguments[0];
    r = arguments[1];
    n = arguments[2];
    e75 = null;
  }
  if (r) {
    if (n) {
      t2.__doc__ = r;
    } else {
      t2.__doc__ = trim_lines(r);
    }
  }
  if (e75) {
    t2.__name__ = e75;
  } else if (t2.name && !is_lambda(t2)) {
    t2.__name__ = t2.name;
  }
  return t2;
}
function trim_lines(e75) {
  return e75.split("\n").map(function(e76) {
    return e76.trim();
  }).join("\n");
}
function previousSexp(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  var r = e75.length;
  if (t2 <= 0) {
    throw Error("previousSexp: Invalid argument sexp = ".concat(t2));
  }
  e: while (t2-- && r >= 0) {
    var n = 1;
    while (n > 0) {
      var i = e75[--r];
      if (!i) {
        break e;
      }
      if (i === "(" || i.token === "(") {
        n--;
      } else if (i === ")" || i.token === ")") {
        n++;
      }
    }
    r--;
  }
  return e75.slice(r + 1);
}
function lineIndent(e75) {
  if (!e75 || !e75.length) {
    return 0;
  }
  var t2 = e75.length;
  if (e75[t2 - 1].token === "\n") {
    return 0;
  }
  while (--t2) {
    if (e75[t2].token === "\n") {
      var r = (e75[t2 + 1] || {}).token;
      if (r) {
        return r.length;
      }
    }
  }
  return 0;
}
function match(e75, t2) {
  return l(e75, t2) === t2.length;
  function l(r, n) {
    function e76(e77, t4) {
      var r2 = _createForOfIteratorHelper(e77), n2;
      try {
        for (r2.s(); !(n2 = r2.n()).done; ) {
          var i2 = n2.value;
          var a2 = l(i2, t4);
          if (a2 !== -1) {
            return a2;
          }
        }
      } catch (e78) {
        r2.e(e78);
      } finally {
        r2.f();
      }
      return -1;
    }
    function t3() {
      return r[a] === Symbol["for"]("symbol") && !is_symbol_string(n[u]);
    }
    function i() {
      var e77 = r[a + 1];
      var t4 = n[u + 1];
      if (e77 !== void 0 && t4 !== void 0) {
        return l([e77], [t4]);
      }
    }
    var a = 0;
    var o = {};
    for (var u = 0; u < n.length; ++u) {
      if (typeof r[a] === "undefined") {
        return u;
      }
      if (r[a] instanceof Pattern) {
        var s;
        if (["+", "*"].includes(r[a].flag)) {
          while (u < n.length) {
            s = e76(r[a].patterns, n.slice(u));
            if (s === -1) {
              break;
            }
            u += s;
          }
          u -= 1;
          a++;
          continue;
        } else if (r[a].flag === "?") {
          s = e76(r[a].patterns, n.slice(u));
          if (s === -1) {
            u -= 2;
          } else {
            a++;
          }
          continue;
        }
      } else if (r[a] instanceof RegExp) {
        if (!n[u].match(r[a])) {
          return -1;
        }
      } else if (lips.LString.isString(r[a])) {
        if (r[a].valueOf() !== n[u]) {
          return -1;
        }
      } else if (_typeof$1(r[a]) === "symbol") {
        if (r[a] === Symbol["for"]("*")) {
          o[a] = o[a] || 0;
          if (["(", "["].includes(n[u])) {
            o[a]++;
          } else if ([")", "]"].includes(n[u])) {
            o[a]--;
          }
          if (typeof r[a + 1] !== "undefined" && o[a] === 0 && i() === -1 || o[a] > 0) {
            continue;
          }
        } else if (t3()) {
          return -1;
        }
      } else if (r[a] instanceof Array) {
        var c = l(r[a], n.slice(u));
        if (c === -1 || c + u > n.length) {
          return -1;
        }
        u += c - 1;
        a++;
        continue;
      } else {
        return -1;
      }
      a++;
    }
    if (r.length !== a) {
      return -1;
    }
    return n.length;
  }
}
function Formatter(e75) {
  this.__code__ = e75.replace(/\r/g, "");
}
function Ahead(e75) {
  this.pattern = e75;
}
function Pattern() {
  for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
    t2[r] = arguments[r];
  }
  var n = t2.pop();
  this.patterns = t2;
  this.flag = n;
}
function keywords_re() {
  for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
    t2[r] = arguments[r];
  }
  return new RegExp("^(?:#:)?(?:".concat(t2.join("|"), ")$"));
}
function foldcase_string(e75) {
  e75 = e75.valueOf();
  return Array.from(e75).map(function(e76) {
    var t2 = e76.codePointAt(0);
    var r = fold_case_mapping[t2];
    if (r) {
      return String.fromCodePoint(r);
    }
    return e76;
  }).join("");
}
function flatten(e75, t2) {
  var r = Object.prototype.toString;
  var n = "[object Array]";
  var i = [];
  var a = e75.slice();
  var o;
  if (!e75.length) {
    return i;
  }
  o = a.pop();
  do {
    if (r.call(o) === n) {
      a.push.apply(a, o);
    } else {
      i.push(o);
    }
  } while (a.length && (o = a.pop()) !== void 0);
  i.reverse();
  return i;
}
function shuffle(e75, t2) {
  var r = e75.length, n;
  while (r > 0) {
    n = Math.floor(t2() * r);
    r--;
    var i = [e75[n], e75[r]];
    e75[r] = i[0];
    e75[n] = i[1];
  }
  return e75;
}
function Nil() {
}
function Pair(e75, t2) {
  if (typeof this !== "undefined" && this.constructor !== Pair || typeof this === "undefined") {
    return new Pair(e75, t2);
  }
  this.car = e75;
  this.cdr = t2;
}
function to_array(a, o) {
  return function e75(t2) {
    typecheck(a, t2, ["pair", "nil"]);
    if (is_nil(t2)) {
      return [];
    }
    var r = [];
    var n = t2;
    while (true) {
      if (is_pair(n)) {
        if (n.have_cycles("cdr")) {
          break;
        }
        var i = n.car;
        if (o && is_pair(i)) {
          i = this.get(a).call(this, i);
        }
        r.push(i);
        n = n.cdr;
      } else if (is_nil(n)) {
        break;
      } else {
        throw new Error("".concat(a, ": can't convert improper list"));
      }
    }
    return r;
  };
}
function is_plain_object(e75) {
  return e75 && _typeof$1(e75) === "object" && e75.constructor === Object;
}
function is_array_method(e75) {
  e75 = unbind(e75);
  return array_methods.includes(e75);
}
function is_lips_function(e75) {
  return is_function(e75) && (is_lambda(e75) || e75.__doc__);
}
function user_repr(e75) {
  var r = e75.constructor || Object;
  var n = is_plain_object(e75);
  var i = is_function(e75[Symbol.asyncIterator]) || is_function(e75[Symbol.iterator]);
  var a;
  if (repr.has(r)) {
    a = repr.get(r);
  } else {
    repr.forEach(function(e76, t2) {
      t2 = unbind(t2);
      if (r === t2 && (t2 === Object && n && !i || t2 !== Object)) {
        a = e76;
      }
    });
  }
  return a;
}
function symbolize(r) {
  if (r && _typeof$1(r) === "object") {
    var n = {};
    var e75 = Object.getOwnPropertySymbols(r);
    e75.forEach(function(e76) {
      var t3 = e76.toString().replace(/Symbol\(([^)]+)\)/, "$1");
      n[t3] = to_string(r[e76]);
    });
    var t2 = Object.getOwnPropertyNames(r);
    t2.forEach(function(e76) {
      var t3 = r[e76];
      if (t3 && _typeof$1(t3) === "object" && t3.constructor === Object) {
        n[e76] = symbolize(t3);
      } else {
        n[e76] = to_string(t3);
      }
    });
    return n;
  }
  return r;
}
function get_props(e75) {
  return Object.keys(e75).concat(Object.getOwnPropertySymbols(e75));
}
function has_own_function(e75, t2) {
  return e75.hasOwnProperty(t2) && is_function(e75.toString);
}
function function_to_string(e75) {
  if (is_native_function(e75)) {
    return "#<procedure(native)>";
  }
  var t2 = e75.prototype && e75.prototype.constructor;
  if (is_function(t2) && is_lambda(t2)) {
    if (e75[__class__] && t2.hasOwnProperty("__name__")) {
      var r = t2.__name__;
      if (LString.isString(r)) {
        r = r.toString();
        return "#<class:".concat(r, ">");
      }
      return "#<class>";
    }
  }
  if (e75.hasOwnProperty("__name__")) {
    var n = e75.__name__;
    if (_typeof$1(n) === "symbol") {
      n = symbol_to_string(n);
    }
    if (typeof n === "string") {
      return "#<procedure:".concat(n, ">");
    }
  }
  if (has_own_function(e75, "toString")) {
    return e75.toString();
  } else if (e75.name && !is_lambda(e75)) {
    return "#<procedure:".concat(e75.name.trim(), ">");
  } else {
    return "#<procedure>";
  }
}
function to_string(e75, t2, r) {
  if (typeof jQuery !== "undefined" && e75 instanceof jQuery.fn.init) {
    return "#<jQuery(" + e75.length + ")>";
  }
  if (str_mapping.has(e75)) {
    return str_mapping.get(e75);
  }
  if (is_prototype(e75)) {
    return "#<prototype>";
  }
  if (e75) {
    var n = e75.constructor;
    if (instances.has(n)) {
      for (var i = arguments.length, a = new Array(i > 3 ? i - 3 : 0), o = 3; o < i; o++) {
        a[o - 3] = arguments[o];
      }
      return instances.get(n)(e75, { quote: t2, skip_cycles: r, pair_args: a });
    }
  }
  var u = _createForOfIteratorHelper(native_types), s;
  try {
    for (u.s(); !(s = u.n()).done; ) {
      var c = s.value;
      if (e75 instanceof c) {
        return e75.toString(t2);
      }
    }
  } catch (e76) {
    u.e(e76);
  } finally {
    u.f();
  }
  if (e75 instanceof LNumber) {
    return e75.toString();
  }
  if ([_nil, eof].includes(e75)) {
    return e75.toString();
  }
  if (e75 === root) {
    return "#<js:global>";
  }
  if (e75 === null) {
    return "null";
  }
  if (is_function(e75)) {
    if (is_function(e75.toString) && e75.hasOwnProperty("toString")) {
      return e75.toString().valueOf();
    }
    return function_to_string(e75);
  }
  if (_typeof$1(e75) === "object") {
    var l = e75.constructor;
    if (!l) {
      l = Object;
    }
    var f;
    if (typeof l.__class__ === "string") {
      f = l.__class__;
    } else {
      var _ = user_repr(e75);
      if (_) {
        if (is_function(_)) {
          return _(e75, t2);
        } else {
          throw new Error("toString: Invalid repr value");
        }
      }
      f = l.name;
    }
    if (is_function(e75.toString) && e75.hasOwnProperty("toString")) {
      return e75.toString().valueOf();
    }
    if (type(e75) === "instance") {
      if (is_lambda(l) && l.__name__) {
        f = l.__name__.valueOf();
        if (_typeof$1(f) === "symbol") {
          f = f.toString().replace(/^Symbol\((?:#:)?([^\)]+)\)$/, "$1");
        }
      } else if (!is_native_function(l)) {
        f = "instance";
      }
    }
    if (is_iterator(e75, Symbol.iterator)) {
      if (f) {
        return "#<iterator(".concat(f, ")>");
      }
      return "#<iterator>";
    }
    if (is_iterator(e75, Symbol.asyncIterator)) {
      if (f) {
        return "#<asyncIterator(".concat(f, ")>");
      }
      return "#<asyncIterator>";
    }
    if (f !== "") {
      return "#<" + f + ">";
    }
    return "#<Object>";
  }
  if (typeof e75 !== "string") {
    return e75.toString();
  }
  return e75;
}
function is_cycle(e75) {
  if (!is_pair(e75)) {
    return false;
  }
  if (e75.have_cycles()) {
    return true;
  }
  return is_cycle(e75.car, fn) || is_cycle(e75.cdr, fn);
}
function mark_cycles(e75) {
  var t2 = [];
  var i = [];
  var a = [];
  function o(e76) {
    if (!t2.includes(e76)) {
      t2.push(e76);
    }
  }
  function u(e76, t3, r2, n2) {
    if (is_pair(r2)) {
      if (n2.includes(r2)) {
        if (!a.includes(r2)) {
          a.push(r2);
        }
        if (!e76[__cycles__]) {
          e76[__cycles__] = {};
        }
        e76[__cycles__][t3] = r2;
        if (!i.includes(e76)) {
          i.push(e76);
        }
        return true;
      }
    }
  }
  var s = trampoline(function e76(t3, r2) {
    if (is_pair(t3)) {
      delete t3[__ref__];
      delete t3[__cycles__];
      o(t3);
      r2.push(t3);
      var n2 = u(t3, "car", t3.car, r2);
      var i2 = u(t3, "cdr", t3.cdr, r2);
      if (!n2) {
        s(t3.car, r2.slice());
      }
      if (!i2) {
        return new Thunk(function() {
          return e76(t3.cdr, r2.slice());
        });
      }
    }
  });
  function r(e76, t3) {
    if (is_pair(e76[__cycles__][t3])) {
      var r2 = n.indexOf(e76[__cycles__][t3]);
      e76[__cycles__][t3] = "#".concat(r2, "#");
    }
  }
  s(e75, []);
  var n = t2.filter(function(e76) {
    return a.includes(e76);
  });
  n.forEach(function(e76, t3) {
    e76[__ref__] = "#".concat(t3, "=");
  });
  i.forEach(function(e76) {
    r(e76, "car");
    r(e76, "cdr");
  });
}
function abs(e75) {
  return e75 < 0 ? -e75 : e75;
}
function seq_compare(e75, t2) {
  var r = _toArray(t2), n = r[0], i = r.slice(1);
  while (i.length > 0) {
    var a = i, o = _slicedToArray(a, 1), u = o[0];
    if (!e75(n, u)) {
      return false;
    }
    var s = i;
    var c = _toArray(s);
    n = c[0];
    i = c.slice(1);
  }
  return true;
}
function equal(e75, t2) {
  if (is_function(e75)) {
    return is_function(t2) && unbind(e75) === unbind(t2);
  } else if (e75 instanceof LNumber) {
    if (!(t2 instanceof LNumber)) {
      return false;
    }
    var r;
    if (e75.__type__ === t2.__type__) {
      if (e75.__type__ === "complex") {
        r = e75.__im__.__type__ === t2.__im__.__type__ && e75.__re__.__type__ === t2.__re__.__type__;
      } else {
        r = true;
      }
      if (r && e75.cmp(t2) === 0) {
        if (e75.valueOf() === 0) {
          return Object.is(e75.valueOf(), t2.valueOf());
        }
        return true;
      }
    }
    return false;
  } else if (typeof e75 === "number") {
    if (typeof t2 !== "number") {
      return false;
    }
    if (Number.isNaN(e75)) {
      return Number.isNaN(t2);
    }
    if (e75 === Number.NEGATIVE_INFINITY) {
      return t2 === Number.NEGATIVE_INFINITY;
    }
    if (e75 === Number.POSITIVE_INFINITY) {
      return t2 === Number.POSITIVE_INFINITY;
    }
    return equal(LNumber(e75), LNumber(t2));
  } else if (e75 instanceof LCharacter) {
    if (!(t2 instanceof LCharacter)) {
      return false;
    }
    return e75.__char__ === t2.__char__;
  } else {
    return e75 === t2;
  }
}
function same_atom(e75, t2) {
  if (type(e75) !== type(t2)) {
    return false;
  }
  if (!is_atom(e75)) {
    return false;
  }
  if (e75 instanceof RegExp) {
    return e75.source === t2.source;
  }
  if (e75 instanceof LString) {
    return e75.valueOf() === t2.valueOf();
  }
  return equal(e75, t2);
}
function is_atom(e75) {
  return e75 instanceof LSymbol || LString.isString(e75) || is_nil(e75) || e75 === null || e75 instanceof LCharacter || e75 instanceof LNumber || e75 === true || e75 === false;
}
function Macro(e75, t2, r, n) {
  if (typeof this !== "undefined" && this.constructor !== Macro || typeof this === "undefined") {
    return new Macro(e75, t2);
  }
  typecheck("Macro", e75, "string", 1);
  typecheck("Macro", t2, "function", 2);
  if (r) {
    if (n) {
      this.__doc__ = r;
    } else {
      this.__doc__ = trim_lines(r);
    }
  }
  this.__name__ = e75;
  this.__fn__ = t2;
}
function is_lambda_macro(e75) {
  return e75.car instanceof LSymbol && is_pair(e75.cdr) && is_pair(e75.cdr.car) && LSymbol.is(e75.cdr.car.car, "lambda");
}
function is_named_macro(e75) {
  return is_pair(e75.car) && e75.car.car instanceof LSymbol;
}
function define_macro(e75, i, a, t2, r) {
  var o = r.use_dynamic, u = r.error;
  var n = Macro.defmacro(e75, function(e76) {
    var t3 = macro_args_env(i, e76, this);
    var r2 = { env: t3, dynamic_env: t3, use_dynamic: o, error: u };
    if (is_pair(a)) {
      var n2 = a.reduce(function(e77, t4) {
        return _evaluate(t4, r2);
      });
      return unpromise(n2, function(e77) {
        if (_typeof$1(e77) === "object") {
          delete e77[__data__];
        }
        return e77;
      });
    }
  }, t2, true);
  n.__code__ = new Pair(new LSymbol("define-macro"), macro);
  return n;
}
function macro_args_env(e75, t2, r) {
  var n = new Environment({}, r, "defmacro");
  var i = t2;
  while (true) {
    if (is_nil(e75)) {
      break;
    }
    if (e75 instanceof LSymbol) {
      n.__env__[e75.__name__] = i;
      break;
    } else if (!is_nil(e75.car)) {
      if (is_nil(i)) {
        n.__env__[e75.car.__name__] = _nil;
      } else {
        if (is_pair(i.car)) {
          i.car[__data__] = true;
        }
        n.__env__[e75.car.__name__] = i.car;
      }
    }
    if (is_nil(e75.cdr)) {
      break;
    }
    if (!is_nil(i)) {
      i = i.cdr;
    }
    e75 = e75.cdr;
  }
  return n;
}
function macro_expand(l) {
  return function() {
    var r = _asyncToGenerator(_regeneratorRuntime.mark(function e75(r2, v) {
      var a, b, n, i, o, u, g, w, D, x, L, E, S, A, s, F, c;
      return _regeneratorRuntime.wrap(function e76(t2) {
        while (1) switch (t2.prev = t2.next) {
          case 0:
            c = function e77() {
              c = _asyncToGenerator(_regeneratorRuntime.mark(function e78(r3, n2, i2) {
                var a2, o2, u2, s2, c2, l2, f, _, p, d, h, m, y;
                return _regeneratorRuntime.wrap(function e79(t3) {
                  while (1) switch (t3.prev = t3.next) {
                    case 0:
                      if (!(is_pair(r3) && r3.car instanceof LSymbol)) {
                        t3.next = 50;
                        break;
                      }
                      if (!r3[__data__]) {
                        t3.next = 3;
                        break;
                      }
                      return t3.abrupt("return", r3);
                    case 3:
                      a2 = r3.car.valueOf();
                      o2 = i2.get(r3.car, { throwError: false });
                      u2 = g(a2);
                      s2 = u2 || D(o2, r3) || x(o2);
                      if (!(S(a2, o2) && !w(a2))) {
                        t3.next = 31;
                        break;
                      }
                      c2 = o2 instanceof Syntax ? r3 : r3.cdr;
                      t3.next = 11;
                      return o2.invoke(c2, _objectSpread(_objectSpread({}, v), {}, { env: i2 }), true);
                    case 11:
                      l2 = t3.sent;
                      if (!(o2 instanceof Syntax)) {
                        t3.next = 20;
                        break;
                      }
                      f = l2, _ = f.expr, p = f.scope;
                      if (!is_pair(_)) {
                        t3.next = 19;
                        break;
                      }
                      if (!(n2 !== -1 && n2 <= 1 || n2 < recur_guard)) {
                        t3.next = 17;
                        break;
                      }
                      return t3.abrupt("return", _);
                    case 17:
                      if (n2 !== -1) {
                        n2 = n2 - 1;
                      }
                      return t3.abrupt("return", F(_, n2, p));
                    case 19:
                      l2 = _;
                    case 20:
                      if (!(l2 instanceof LSymbol)) {
                        t3.next = 22;
                        break;
                      }
                      return t3.abrupt("return", quote(l2));
                    case 22:
                      if (!is_pair(l2)) {
                        t3.next = 27;
                        break;
                      }
                      if (!(n2 !== -1 && n2 <= 1 || n2 < recur_guard)) {
                        t3.next = 25;
                        break;
                      }
                      return t3.abrupt("return", l2);
                    case 25:
                      if (n2 !== -1) {
                        n2 = n2 - 1;
                      }
                      return t3.abrupt("return", F(l2, n2, i2));
                    case 27:
                      if (!is_atom(l2)) {
                        t3.next = 29;
                        break;
                      }
                      return t3.abrupt("return", l2);
                    case 29:
                      t3.next = 50;
                      break;
                    case 31:
                      if (!(s2 && is_pair(r3.cdr.car))) {
                        t3.next = 50;
                        break;
                      }
                      if (!u2) {
                        t3.next = 39;
                        break;
                      }
                      b = E(r3.cdr.car);
                      t3.next = 36;
                      return A(r3.cdr.car, n2);
                    case 36:
                      d = t3.sent;
                      t3.next = 41;
                      break;
                    case 39:
                      b = L(r3.cdr.car);
                      d = r3.cdr.car;
                    case 41:
                      t3.t0 = Pair;
                      t3.t1 = r3.car;
                      t3.t2 = Pair;
                      t3.t3 = d;
                      t3.next = 47;
                      return F(r3.cdr.cdr, n2, i2);
                    case 47:
                      t3.t4 = t3.sent;
                      t3.t5 = new t3.t2(t3.t3, t3.t4);
                      return t3.abrupt("return", new t3.t0(t3.t1, t3.t5));
                    case 50:
                      h = r3.car;
                      if (!is_pair(h)) {
                        t3.next = 55;
                        break;
                      }
                      t3.next = 54;
                      return F(h, n2, i2);
                    case 54:
                      h = t3.sent;
                    case 55:
                      m = r3.cdr;
                      if (!is_pair(m)) {
                        t3.next = 60;
                        break;
                      }
                      t3.next = 59;
                      return F(m, n2, i2);
                    case 59:
                      m = t3.sent;
                    case 60:
                      y = new Pair(h, m);
                      return t3.abrupt("return", y);
                    case 62:
                    case "end":
                      return t3.stop();
                  }
                }, e78);
              }));
              return c.apply(this, arguments);
            };
            F = function e77(t3, r3, n2) {
              return c.apply(this, arguments);
            };
            s = function e77() {
              s = _asyncToGenerator(_regeneratorRuntime.mark(function e78(r3, n2) {
                var i2;
                return _regeneratorRuntime.wrap(function e79(t3) {
                  while (1) switch (t3.prev = t3.next) {
                    case 0:
                      if (!is_nil(r3)) {
                        t3.next = 2;
                        break;
                      }
                      return t3.abrupt("return", _nil);
                    case 2:
                      i2 = r3.car;
                      t3.t0 = Pair;
                      t3.t1 = Pair;
                      t3.t2 = i2.car;
                      t3.next = 8;
                      return F(i2.cdr, n2, a);
                    case 8:
                      t3.t3 = t3.sent;
                      t3.t4 = new t3.t1(t3.t2, t3.t3);
                      t3.next = 12;
                      return A(r3.cdr);
                    case 12:
                      t3.t5 = t3.sent;
                      return t3.abrupt("return", new t3.t0(t3.t4, t3.t5));
                    case 14:
                    case "end":
                      return t3.stop();
                  }
                }, e78);
              }));
              return s.apply(this, arguments);
            };
            A = function e77(t3, r3) {
              return s.apply(this, arguments);
            };
            S = function e77(t3, r3) {
              return r3 instanceof Macro && r3.__defmacro__ && !b.includes(t3);
            };
            E = function e77(t3) {
              return [].concat(_toConsumableArray(b), _toConsumableArray(t3.to_array(false).map(function(e78) {
                if (is_pair(e78)) {
                  return e78.car.valueOf();
                }
                var t4 = type(e78);
                var r3 = "macroexpand: Invalid let binding expectig pair got ".concat(t4);
                throw new Error(r3);
              })));
            };
            L = function e77(t3) {
              var r3 = [];
              while (true) {
                if (!is_nil(t3)) {
                  if (t3 instanceof LSymbol) {
                    r3.push(t3.valueOf());
                    break;
                  }
                  r3.push(t3.car.valueOf());
                  t3 = t3.cdr;
                } else {
                  break;
                }
              }
              return [].concat(_toConsumableArray(b), r3);
            };
            x = function e77(t3) {
              return t3 === o;
            };
            D = function e77(t3, r3) {
              return t3 === u && is_pair(r3.cdr.car);
            };
            w = function e77(t3) {
              if (!g(t3)) {
                return false;
              }
              return i.includes(a.get(t3));
            };
            g = function e77(t3) {
              return n.includes(t3);
            };
            a = v["env"] = this;
            b = [];
            n = ["let", "let*", "letrec", "letrec*"];
            i = n.map(function(e77) {
              return global_env.get(e77);
            });
            o = global_env.get("lambda");
            u = global_env.get("define");
            if (!(is_pair(r2.cdr) && LNumber.isNumber(r2.cdr.car))) {
              t2.next = 23;
              break;
            }
            t2.t0 = quote;
            t2.next = 21;
            return F(r2, r2.cdr.car.valueOf(), a);
          case 21:
            t2.t1 = t2.sent.car;
            return t2.abrupt("return", (0, t2.t0)(t2.t1));
          case 23:
            if (!l) {
              t2.next = 29;
              break;
            }
            t2.t2 = quote;
            t2.next = 27;
            return F(r2, 1, a);
          case 27:
            t2.t3 = t2.sent.car;
            return t2.abrupt("return", (0, t2.t2)(t2.t3));
          case 29:
            t2.t4 = quote;
            t2.next = 32;
            return F(r2, -1, a);
          case 32:
            t2.t5 = t2.sent.car;
            return t2.abrupt("return", (0, t2.t4)(t2.t5));
          case 34:
          case "end":
            return t2.stop();
        }
      }, e75, this);
    }));
    return function(e75, t2) {
      return r.apply(this, arguments);
    };
  }();
}
function Syntax(e75, t2) {
  this.__env__ = t2;
  this.__fn__ = e75;
  this.__defmacro__ = true;
}
function extract_patterns(e75, t2, K, J) {
  var r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  var W = { "...": { symbols: {}, lists: [] }, symbols: {} };
  var Q = r.expansion, X = r.define;
  log(K);
  function Z(t3, e76) {
    var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var n = r2.ellipsis, i = n === void 0 ? false : n, a = r2.trailing, I = a === void 0 ? false : a, o = r2.pattern_names, u = o === void 0 ? [] : o;
    log({ code: e76, pattern: t3 });
    if (is_atom(t3) && !(t3 instanceof LSymbol)) {
      return same_atom(t3, e76);
    }
    if (t3 instanceof LSymbol) {
      var s = t3.literal();
      if (K.includes(s)) {
        if (!LSymbol.is(e76, s) && !LSymbol.is(t3, e76)) {
          return false;
        }
        var c = Q.ref(s);
        return !c || c === X || c === global_env;
      }
    }
    if (Array.isArray(t3) && Array.isArray(e76)) {
      log("<<< a 1");
      if (t3.length === 0 && e76.length === 0) {
        return true;
      }
      if (LSymbol.is(t3[1], J)) {
        if (t3[0] instanceof LSymbol) {
          var l = t3[0].valueOf();
          log("<<< a 2 " + i);
          if (i) {
            var f = e76.length - 2;
            var j = f > 0 ? e76.slice(0, f) : e76;
            var _ = Pair.fromArray(j, false);
            if (!W["..."].symbols[l]) {
              W["..."].symbols[l] = new Pair(_, _nil);
            } else {
              W["..."].symbols[l].append(new Pair(_, _nil));
            }
          } else {
            W["..."].symbols[l] = Pair.fromArray(e76, false);
          }
        } else if (Array.isArray(t3[0])) {
          log("<<< a 3");
          var R = _toConsumableArray(u);
          var T = _objectSpread(_objectSpread({}, r2), {}, { pattern_names: R, ellipsis: true });
          if (!e76.every(function(e77) {
            return Z(t3[0], e77, T);
          })) {
            return false;
          }
        }
        if (t3.length > 2) {
          var p = t3.slice(2);
          return Z(p, e76.slice(-p.length), r2);
        }
        return true;
      }
      var d = Z(t3[0], e76[0], r2);
      log({ first: d, pattern: t3[0], code: e76[0] });
      var h = Z(t3.slice(1), e76.slice(1), r2);
      log({ first: d, rest: h });
      return d && h;
    }
    if (is_pair(t3) && is_pair(t3.car) && is_pair(t3.car.cdr) && LSymbol.is(t3.car.cdr.car, J)) {
      log(">> 0");
      if (is_nil(e76)) {
        log({ pattern: t3 });
        if (t3.car.car instanceof LSymbol) {
          var m = t3.car.car.valueOf();
          if (W["..."].symbols[m]) {
            throw new Error("syntax: named ellipsis can only appear onces");
          }
          W["..."].symbols[m] = e76;
        }
      }
    }
    if (is_pair(t3) && is_pair(t3.cdr) && LSymbol.is(t3.cdr.car, J)) {
      log(">> 1 (a)");
      if (!is_nil(t3.cdr.cdr)) {
        if (is_pair(t3.cdr.cdr)) {
          log(">> 1 (b)");
          var $ = t3.cdr.cdr.length();
          var y = !is_nil(t3.last_pair().cdr);
          if (!is_pair(e76)) {
            return false;
          }
          var v = e76.length();
          var b = e76;
          var M = y ? 1 : 1;
          while (v - M > $) {
            b = b.cdr;
            v--;
          }
          var V = b.cdr;
          b.cdr = _nil;
          var q = _objectSpread(_objectSpread({}, r2), {}, { trailing: y });
          if (!Z(t3.cdr.cdr, V, q)) {
            return false;
          }
        }
      }
      if (t3.car instanceof LSymbol) {
        var g = t3.car.__name__;
        if (W["..."].symbols[g] && !u.includes(g) && !i) {
          throw new Error("syntax: named ellipsis can only appear onces");
        }
        log(">> 1 (next)");
        if (is_nil(e76)) {
          log(">> 2");
          if (i) {
            log("NIL");
            W["..."].symbols[g] = _nil;
          } else {
            log("NULL");
            W["..."].symbols[g] = null;
          }
        } else if (is_pair(e76) && (is_pair(e76.car) || is_nil(e76.car))) {
          log(">> 3 " + i);
          if (i) {
            if (W["..."].symbols[g]) {
              var w = W["..."].symbols[g];
              if (is_nil(w)) {
                w = new Pair(_nil, new Pair(e76, _nil));
              } else {
                w = w.append(new Pair(e76, _nil));
              }
              W["..."].symbols[g] = w;
            } else {
              W["..."].symbols[g] = new Pair(e76, _nil);
            }
          } else {
            log(">> 4");
            W["..."].symbols[g] = new Pair(e76, _nil);
          }
        } else {
          log(">> 6");
          if (is_pair(e76)) {
            log(">> 7 " + i);
            if (!is_pair(e76.cdr) && !is_nil(e76.cdr)) {
              log(">> 7 (b)");
              if (is_nil(t3.cdr.cdr)) {
                return false;
              } else if (!W["..."].symbols[g]) {
                W["..."].symbols[g] = new Pair(e76.car, _nil);
                return Z(t3.cdr.cdr, e76.cdr, r2);
              }
            }
            var D = e76.last_pair();
            log({ last_pair: D });
            if (!is_nil(D.cdr)) {
              log(">> 7 (c)");
              if (is_nil(t3.cdr.cdr)) {
                return false;
              } else {
                log(">> 7 (d)");
                var x = e76.clone();
                x.last_pair().cdr = _nil;
                W["..."].symbols[g] = x;
                return Z(t3.cdr.cdr, D.cdr, r2);
              }
            }
            u.push(g);
            if (!W["..."].symbols[g]) {
              log(">> 7 (e)");
              W["..."].symbols[g] = new Pair(e76, _nil);
            } else {
              log(">> 7 (f)");
              var z = W["..."].symbols[g];
              W["..."].symbols[g] = z.append(new Pair(e76, _nil));
            }
            log({ IIIIII: W["..."].symbols[g] });
          } else if (t3.car instanceof LSymbol && is_pair(t3.cdr) && LSymbol.is(t3.cdr.car, J)) {
            log(">> 8");
            W["..."].symbols[g] = null;
            return Z(t3.cdr.cdr, e76, r2);
          } else {
            log(">> 9");
            return false;
          }
        }
        return true;
      } else if (is_pair(t3.car)) {
        var L = _toConsumableArray(u);
        if (is_nil(e76)) {
          log(">> 10");
          W["..."].lists.push(_nil);
          return true;
        }
        log(">> 11");
        var E = e76;
        var U = _objectSpread(_objectSpread({}, r2), {}, { pattern_names: L, ellipsis: true });
        while (is_pair(E)) {
          if (!Z(t3.car, E.car, U)) {
            return false;
          }
          E = E.cdr;
        }
        return true;
      }
      if (Array.isArray(t3.car)) {
        var L = _toConsumableArray(u);
        var S = e76;
        var G = _objectSpread(_objectSpread({}, r2), {}, { pattern_names: L, ellipsis: true });
        while (is_pair(S)) {
          if (!Z(t3.car, S.car, G)) {
            return false;
          }
          S = S.cdr;
        }
        return true;
      }
      return false;
    }
    if (t3 instanceof LSymbol) {
      if (LSymbol.is(t3, J)) {
        throw new Error("syntax: invalid usage of ellipsis");
      }
      log(">> 12");
      var A = t3.__name__;
      if (K.includes(A)) {
        return true;
      }
      if (i) {
        var F, k;
        log(W["..."].symbols[A]);
        (k = (F = W["..."].symbols)[A]) !== null && k !== void 0 ? k : F[A] = [];
        W["..."].symbols[A].push(e76);
      } else {
        W.symbols[A] = e76;
      }
      return true;
    }
    if (is_pair(t3) && is_pair(e76)) {
      log(">> 13");
      log({ a: 13, code: e76, pattern: t3 });
      var C = t3.car instanceof LSymbol && t3.cdr instanceof LSymbol;
      if (I && C) {
        log(">> 13 (a)");
        if (!is_nil(e76.cdr)) {
          return false;
        }
        var H = t3.car.valueOf();
        var Y = t3.cdr.valueOf();
        W.symbols[H] = e76.car;
        W.symbols[Y] = _nil;
        return true;
      }
      if (is_nil(e76.cdr)) {
        log(">> 13 (b)");
        if (C) {
          if (!Z(t3.car, e76.car, r2)) {
            return false;
          }
          log(">> 14");
          var P = t3.cdr.valueOf();
          if (!(P in W.symbols)) {
            W.symbols[P] = _nil;
          }
          P = t3.car.valueOf();
          if (!(P in W.symbols)) {
            W.symbols[P] = e76.car;
          }
          return true;
        }
      }
      log({ pattern: t3, code: e76 });
      if (is_pair(t3.cdr) && is_pair(t3.cdr.cdr) && t3.cdr.car instanceof LSymbol && LSymbol.is(t3.cdr.cdr.car, J) && is_pair(t3.cdr.cdr.cdr) && !LSymbol.is(t3.cdr.cdr.cdr.car, J) && Z(t3.car, e76.car, r2) && Z(t3.cdr.cdr.cdr, e76.cdr, _objectSpread(_objectSpread({}, r2), {}, { trailing: true }))) {
        var O = t3.cdr.car.__name__;
        log({ pattern: t3, code: e76, name: O });
        if (K.includes(O)) {
          return true;
        }
        W["..."].symbols[O] = null;
        return true;
      }
      log("recur");
      log({ pattern: t3, code: e76 });
      var N = Z(t3.car, e76.car, r2);
      var B = Z(t3.cdr, e76.cdr, r2);
      log({ $car_code: e76.car, $car_pattern: t3.car, car: N, $cdr_code: e76.cdr, $cdr_pattern: t3.cdr, cdr: B });
      if (N && B) {
        return true;
      }
    } else if (is_nil(t3) && (is_nil(e76) || e76 === void 0)) {
      return true;
    } else if (is_pair(t3.car) && LSymbol.is(t3.car.car, J)) {
      throw new Error("syntax: invalid usage of ellipsis");
    } else {
      return false;
    }
  }
  if (Z(e75, t2)) {
    return W;
  }
}
function clear_gensyms(e75, i) {
  function a(t2) {
    if (is_pair(t2)) {
      if (!i.length) {
        return t2;
      }
      var e76 = a(t2.car);
      var r = a(t2.cdr);
      return new Pair(e76, r);
    } else if (t2 instanceof LSymbol) {
      var n = i.find(function(e77) {
        return e77.gensym === t2;
      });
      if (n) {
        return LSymbol(n.name);
      }
      return t2;
    } else {
      return t2;
    }
  }
  return a(e75);
}
function transform_syntax() {
  var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var O = e75.bindings, t2 = e75.expr, N = e75.scope, o = e75.symbols, l = e75.names, B = e75.ellipsis;
  var f = {};
  function u(e76) {
    if (e76 instanceof LSymbol) {
      return true;
    }
    return ["string", "symbol"].includes(_typeof$1(e76));
  }
  function I(e76) {
    if (!u(e76)) {
      var t3 = type(e76);
      throw new Error("syntax: internal error, need symbol got ".concat(t3));
    }
    var r = e76.valueOf();
    if (r === B) {
      throw new Error("syntax: internal error, ellipis not transformed");
    }
    var n = _typeof$1(r);
    if (["string", "symbol"].includes(n)) {
      if (r in O.symbols) {
        return O.symbols[r];
      } else if (n === "string" && r.match(/\./)) {
        var i = r.split(".");
        var a = i[0];
        if (a in O.symbols) {
          return Pair.fromArray([LSymbol("."), O.symbols[a]].concat(i.slice(1).map(function(e77) {
            return LString(e77);
          })));
        }
      }
    }
    if (o.includes(r)) {
      return e76;
    }
    return s(r, e76);
  }
  function s(e76, t3) {
    if (!f[e76]) {
      var r = N.ref(e76);
      if (_typeof$1(e76) === "symbol" && !r) {
        e76 = t3.literal();
      }
      if (f[e76]) {
        return f[e76];
      }
      var n = gensym(e76);
      if (r) {
        var i = N.get(e76);
        N.set(n, i);
      } else {
        var a = N.get(e76, { throwError: false });
        if (typeof a !== "undefined") {
          N.set(n, a);
        }
      }
      l.push({ name: e76, gensym: n });
      f[e76] = n;
      if (typeof e76 === "string" && e76.match(/\./)) {
        var o2 = e76.split(".").filter(Boolean), u2 = _toArray(o2), s2 = u2[0], c = u2.slice(1);
        if (f[s2]) {
          hidden_prop(n, "__object__", [f[s2]].concat(_toConsumableArray(c)));
        }
      }
    }
    return f[e76];
  }
  function j(e76, t3, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
    };
    var i = r.nested;
    log({ bindings: t3, expr: e76 });
    if (Array.isArray(e76) && !e76.length) {
      return e76;
    }
    if (e76 instanceof LSymbol) {
      var a = e76.valueOf();
      if (is_gensym(e76) && !t3[a]) ;
      log("[t 1");
      if (t3[a]) {
        if (is_pair(t3[a])) {
          var o2 = t3[a], u2 = o2.car, s2 = o2.cdr;
          if (i) {
            var c = u2.car, l2 = u2.cdr;
            if (!is_nil(l2)) {
              n(a, new Pair(l2, _nil));
            }
            return c;
          }
          if (!is_nil(s2)) {
            n(a, s2);
          }
          return u2;
        } else if (t3[a] instanceof Array) {
          n(a, t3[a].slice(1));
          return t3[a][0];
        }
      }
      return I(e76);
    }
    var f2 = Array.isArray(e76);
    if (is_pair(e76) || f2) {
      var _ = f2 ? e76[0] : e76.car;
      var p = f2 ? e76[1] : is_pair(e76.cdr) && e76.cdr.car;
      if (_ instanceof LSymbol && LSymbol.is(p, B)) {
        f2 ? e76.slice(2) : e76.cdr.cdr;
        log("[t 2");
        var d = _.valueOf();
        var h = t3[d];
        if (h === null) {
          return;
        } else if (d in t3) {
          log({ name: d, binding: t3[d] });
          if (is_pair(h)) {
            log("[t 2 Pair " + i);
            var m = h.car, y = h.cdr;
            var v = f2 ? e76.slice(2) : e76.cdr.cdr;
            if (i) {
              if (!is_nil(y)) {
                log("|| next 1");
                n(d, y);
              }
              if (f2 && v.length || !is_nil(v) && !f2) {
                var b = j(v, t3, r, n);
                if (f2) {
                  return m.concat(b);
                } else if (is_pair(m)) {
                  return m.append(b);
                } else {
                  log("UNKNOWN");
                }
              }
              return m;
            } else if (is_pair(m)) {
              if (!is_nil(m.cdr)) {
                log("|| next 2");
                n(d, new Pair(m.cdr, y));
              }
              return new Value(m.car);
            } else if (is_nil(y)) {
              return m;
            } else {
              var g = e76.last_pair();
              if (g.cdr instanceof LSymbol) {
                log("|| next 3");
                n(d, h.last_pair());
                return m;
              }
            }
          } else if (h instanceof Array) {
            log("[t 2 Array " + i);
            if (i) {
              n(d, h.slice(1));
              return Pair.fromArray(h);
            } else {
              var w = h.slice(1);
              if (w.length) {
                n(d, w);
              }
              return h[0];
            }
          } else {
            return h;
          }
        }
      }
      log("[t 3 recur ", e76);
      var D = f2 ? e76.slice(1) : e76.cdr;
      var x = j(_, t3, r, n);
      var L = j(D, t3, r, n);
      log({ head: x, rest: L });
      if (f2) {
        return [x].concat(L);
      }
      return new Pair(x, L);
    }
    return e76;
  }
  function R(t3, r) {
    var e76 = Object.values(t3);
    var n = Object.getOwnPropertySymbols(t3);
    if (n.length) {
      e76.push.apply(e76, _toConsumableArray(n.map(function(e77) {
        return t3[e77];
      })));
    }
    return e76.length && e76.every(function(e77) {
      if (e77 === null) {
        return !r;
      }
      return is_pair(e77) || is_nil(e77) || Array.isArray(e77) && e77.length;
    });
  }
  function T(e76) {
    return Object.keys(e76).concat(Object.getOwnPropertySymbols(e76));
  }
  function $(i) {
    var e76 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t3 = e76.disabled;
    log("traverse>> ", i);
    var a = Array.isArray(i);
    if (a && i.length === 0) {
      return i;
    }
    if (is_pair(i) || a) {
      log(">> 0");
      var r = a ? i[0] : i.car;
      var n, o2;
      if (a) {
        n = i[1];
        o2 = i.slice(2);
      } else if (is_pair(i.cdr)) {
        n = i.cdr.car;
        o2 = i.cdr.cdr;
      }
      log({ first: r, second: n, rest_second: o2 });
      if (!t3 && is_pair(r) && LSymbol.is(r.car, B)) {
        return new Pair(r.cdr.car, $(i.cdr));
      }
      if (n && LSymbol.is(n, B) && !t3) {
        log(">> 1");
        var u2 = O["..."].symbols;
        var s2 = Object.values(u2);
        if (s2.length && s2.every(function(e77) {
          return e77 === null;
        })) {
          log(">>> 1 (a)");
          return $(o2, { disabled: t3 });
        }
        var c = T(u2);
        var l2 = r instanceof LSymbol && LSymbol.is(o2.car, B);
        if (is_pair(r) || l2) {
          log(">>> 1 (b)");
          if (is_nil(O["..."].lists[0])) {
            if (!l2) {
              return $(o2, { disabled: t3 });
            }
            log(o2);
            return _nil;
          }
          var f2 = r;
          if (l2) {
            log(">>> 1 (c)");
            f2 = new Pair(r, new Pair(n, _nil));
          }
          log(">> 2");
          var _;
          if (c.length) {
            log(">> 2 (a)");
            var p = _objectSpread({}, u2);
            _ = a ? [] : _nil;
            var d = function e77() {
              log({ bind: p });
              if (!R(p)) {
                return 1;
              }
              var n2 = {};
              var t4 = function e78(t5, r3) {
                n2[t5] = r3;
              };
              var r2 = j(f2, p, { nested: true }, t4);
              if (r2 !== void 0) {
                if (r2 instanceof Value) {
                  r2 = r2.valueOf();
                }
                if (l2) {
                  if (a) {
                    if (Array.isArray(r2)) {
                      var i2;
                      (i2 = _).push.apply(i2, _toConsumableArray(r2));
                    } else {
                      log("ZONK {1}");
                    }
                  } else {
                    if (is_nil(_)) {
                      _ = r2;
                    } else {
                      _ = _.append(r2);
                    }
                  }
                } else if (a) {
                  _.push(r2);
                } else {
                  _ = new Pair(r2, _);
                }
              }
              p = n2;
            };
            while (true) {
              if (d()) break;
            }
            if (!is_nil(_) && !l2 && !a) {
              _ = _.reverse();
            }
            if (a) {
              if (o2) {
                log({ rest_second: o2, expr: i });
                var h = $(o2, { disabled: t3 });
                return _.concat(h);
              }
              return _;
            }
            if (!is_nil(i.cdr.cdr) && !LSymbol.is(i.cdr.cdr.car, B)) {
              var m = $(i.cdr.cdr, { disabled: t3 });
              return _.append(m);
            }
            return _;
          } else {
            log(">> 3");
            var y = j(r, u2, { nested: true });
            if (y) {
              if (y instanceof Value) {
                y = y.valueOf();
              }
              return new Pair(y, _nil);
            }
            return _nil;
          }
        } else if (r instanceof LSymbol) {
          log(">> 4");
          if (LSymbol.is(o2.car, B)) {
            log(">> 4 (a)");
          } else {
            log(">> 4 (b)");
          }
          var v = r.__name__;
          var b = _defineProperty({}, v, u2[v]);
          log({ bind: b });
          var g = u2[v] === null;
          var w = a ? [] : _nil;
          var D = function e77() {
            if (!R(b, true)) {
              log({ bind: b });
              return 1;
            }
            var n2 = {};
            var t4 = function e78(t5, r3) {
              n2[t5] = r3;
            };
            var r2 = j(i, b, { nested: false }, t4);
            log({ value: r2 });
            if (typeof r2 !== "undefined") {
              if (r2 instanceof Value) {
                r2 = r2.valueOf();
              }
              if (a) {
                w.push(r2);
              } else {
                w = new Pair(r2, w);
              }
            }
            b = n2;
          };
          while (true) {
            if (D()) break;
          }
          if (!is_nil(w) && !a) {
            w = w.reverse();
          }
          if (is_pair(i.cdr)) {
            if (is_pair(i.cdr.cdr) || i.cdr.cdr instanceof LSymbol) {
              var x = $(i.cdr.cdr, { disabled: t3 });
              log({ node: x });
              if (g) {
                return x;
              }
              if (is_nil(w)) {
                w = x;
              } else {
                w.append(x);
              }
              log({ result: w, node: x });
            }
          }
          log("<<<< 2");
          log({ result: w });
          return w;
        }
      }
      var L = $(r, { disabled: t3 });
      var E;
      var S;
      if (r instanceof LSymbol) {
        var A = N.get(r, { throwError: false });
        S = A instanceof Macro && A.__name__ === "syntax-rules";
      }
      if (S) {
        if (i.cdr.car instanceof LSymbol) {
          E = new Pair($(i.cdr.car, { disabled: t3 }), new Pair(i.cdr.cdr.car, $(i.cdr.cdr.cdr, { disabled: t3 })));
        } else {
          E = new Pair(i.cdr.car, $(i.cdr.cdr, { disabled: t3 }));
        }
        log("REST >>>> ", E);
      } else {
        E = $(i.cdr, { disabled: t3 });
      }
      log({ a: true, car: to_string(i.car), cdr: to_string(i.cdr), head: to_string(L), rest: to_string(E) });
      return new Pair(L, E);
    }
    if (i instanceof LSymbol) {
      if (t3 && LSymbol.is(i, B)) {
        return i;
      }
      var F = Object.keys(O["..."].symbols);
      var k = i.literal();
      if (F.includes(k)) {
        var C = "missing ellipsis symbol next to name `".concat(k, "'");
        throw new Error("syntax-rules: ".concat(C));
      }
      var P = I(i);
      if (typeof P !== "undefined") {
        return P;
      }
    }
    return i;
  }
  return $(t2, {});
}
function is_null(e75) {
  return is_undef(e75) || is_nil(e75) || e75 === null;
}
function is_nil(e75) {
  return e75 === _nil;
}
function is_function(e75) {
  return typeof e75 === "function" && typeof e75.bind === "function";
}
function is_directive(e75) {
  return directives.includes(e75);
}
function is_false(e75) {
  return e75 === false || e75 === null;
}
function is_string(e75) {
  return typeof e75 === "string";
}
function is_lambda(e75) {
  return e75 && e75[__lambda__];
}
function is_method(e75) {
  return e75 && e75[__method__];
}
function is_raw_lambda(e75) {
  return is_lambda(e75) && !e75[__prototype__] && !is_method(e75) && !is_port_method(e75);
}
function is_native_function(e75) {
  var t2 = Symbol["for"]("__native__");
  return is_function(e75) && e75.toString().match(/\{\s*\[native code\]\s*\}/) && (e75.name.match(/^bound /) && e75[t2] === true || !e75.name.match(/^bound /) && !e75[t2]);
}
function is_prototype(e75) {
  return e75 && _typeof$1(e75) === "object" && e75.hasOwnProperty && e75.hasOwnProperty("constructor") && typeof e75.constructor === "function" && e75.constructor.prototype === e75;
}
function is_continuation(e75) {
  return e75 instanceof Continuation;
}
function is_context(e75) {
  return e75 instanceof LambdaContext;
}
function is_parameter(e75) {
  return e75 instanceof Parameter;
}
function is_pair(e75) {
  return e75 instanceof Pair;
}
function is_env(e75) {
  return e75 instanceof Environment;
}
function is_callable(e75) {
  return is_function(e75) || is_continuation(e75) || is_parameter(e75) || is_macro(e75);
}
function is_macro(e75) {
  return e75 instanceof Macro || e75 instanceof SyntaxParameter;
}
function is_promise(e75) {
  if (e75 instanceof QuotedPromise) {
    return false;
  }
  if (e75 instanceof Promise) {
    return true;
  }
  return !!e75 && is_function(e75.then);
}
function is_undef(e75) {
  return typeof e75 === "undefined";
}
function get_proto(e75) {
  return Object.getPrototypeOf(e75);
}
function is_iterator(e75, t2) {
  if (has_own_symbol(e75, t2) || has_own_symbol(get_proto(e75), t2)) {
    return is_function(e75[t2]);
  }
}
function is_instance(e75) {
  if (!e75) {
    return false;
  }
  if (_typeof$1(e75) !== "object") {
    return false;
  }
  if (e75.__instance__) {
    e75.__instance__ = false;
    return e75.__instance__;
  }
  return false;
}
function self_evaluated(e75) {
  var t2 = _typeof$1(e75);
  return ["string", "function"].includes(t2) || _typeof$1(e75) === "symbol" || e75 instanceof QuotedPromise || e75 instanceof LSymbol || e75 instanceof LNumber || e75 instanceof LString || e75 instanceof RegExp;
}
function is_native(e75) {
  return e75 && (e75 instanceof LNumber || e75 instanceof LString || e75 instanceof LCharacter);
}
function has_own_symbol(e75, t2) {
  if (e75 === null) {
    return false;
  }
  return _typeof$1(e75) === "object" && t2 in Object.getOwnPropertySymbols(e75);
}
function box(e75) {
  switch (_typeof$1(e75)) {
    case "string":
      return LString(e75);
    case "bigint":
      return LNumber(e75);
    case "number":
      if (Number.isNaN(e75)) {
        return nan;
      } else {
        return LNumber(e75);
      }
  }
  return e75;
}
function map_object(r, n) {
  var e75 = Object.getOwnPropertyNames(r);
  var t2 = Object.getOwnPropertySymbols(r);
  var i = {};
  e75.concat(t2).forEach(function(e76) {
    var t3 = n(r[e76]);
    i[e76] = t3;
  });
  return i;
}
function unbox(t2) {
  var e75 = [LString, LNumber, LCharacter].some(function(e76) {
    return t2 instanceof e76;
  });
  if (e75) {
    return t2.valueOf();
  }
  if (t2 instanceof Array) {
    return t2.map(unbox);
  }
  if (t2 instanceof QuotedPromise) {
    delete t2.then;
  }
  if (is_plain_object(t2)) {
    return map_object(t2, unbox);
  }
  return t2;
}
function patch_value(e75, t2) {
  if (is_pair(e75)) {
    e75.mark_cycles();
    return quote(e75);
  }
  if (is_function(e75)) {
    if (t2) {
      return bind(e75, t2);
    }
  }
  return box(e75);
}
function unbind(e75) {
  if (is_bound(e75)) {
    return e75[__fn__];
  }
  return e75;
}
function bind(e75, t2) {
  if (e75[Symbol["for"]("__bound__")]) {
    return e75;
  }
  var r = e75.bind(t2);
  var n = Object.getOwnPropertyNames(e75);
  var i = _createForOfIteratorHelper(n), a;
  try {
    for (i.s(); !(a = i.n()).done; ) {
      var o = a.value;
      if (filter_fn_names(o)) {
        try {
          r[o] = e75[o];
        } catch (e76) {
        }
      }
    }
  } catch (e76) {
    i.e(e76);
  } finally {
    i.f();
  }
  hidden_prop(r, "__fn__", e75);
  hidden_prop(r, "__context__", t2);
  hidden_prop(r, "__bound__", true);
  if (is_native_function(e75)) {
    hidden_prop(r, "__native__", true);
  }
  if (is_plain_object(t2) && is_lambda(e75)) {
    hidden_prop(r, "__method__", true);
  }
  r.valueOf = function() {
    return e75;
  };
  return r;
}
function is_object_bound(e75) {
  return is_bound(e75) && e75[Symbol["for"]("__context__")] === Object;
}
function is_bound(e75) {
  return !!(is_function(e75) && e75[__fn__]);
}
function lips_context(e75) {
  if (is_function(e75)) {
    var t2 = e75[__context__];
    if (t2 && (t2 === lips || t2.constructor && t2.constructor.__class__)) {
      return true;
    }
  }
  return false;
}
function is_port(e75) {
  return e75 instanceof InputPort || e75 instanceof OutputPort;
}
function is_port_method(e75) {
  if (is_function(e75)) {
    if (is_port(e75[__context__])) {
      return true;
    }
  }
  return false;
}
function filter_fn_names(e75) {
  return !exluded_names.includes(e75);
}
function enumerable(e75, t2, r) {
  Object.defineProperty(e75, t2, { value: r, enumerable: true });
}
function hidden_prop(e75, t2, r) {
  Object.defineProperty(e75, Symbol["for"](t2), { get: function e76() {
    return r;
  }, set: function e76() {
  }, configurable: false, enumerable: false });
}
function set_fn_length(t2, r) {
  try {
    Object.defineProperty(t2, "length", { get: function e75() {
      return r;
    } });
    return t2;
  } catch (e75) {
    var n = new Array(r).fill(0).map(function(e76, t3) {
      return "a" + t3;
    }).join(",");
    var i = new Function("f", "return function(".concat(n, ") {\n                return f.apply(this, arguments);\n            };"));
    return i(t2);
  }
}
function let_macro(e75) {
  var w;
  switch (e75) {
    case Symbol["for"]("letrec"):
      w = "letrec";
      break;
    case Symbol["for"]("let"):
      w = "let";
      break;
    case Symbol["for"]("let*"):
      w = "let*";
      break;
    default:
      throw new Error("Invalid let_macro value");
  }
  return Macro.defmacro(w, function(t2, e76) {
    var l = e76.dynamic_env;
    var f = e76.error, r = e76.macro_expand, _ = e76.use_dynamic;
    var p;
    if (t2.car instanceof LSymbol) {
      if (!(is_pair(t2.cdr.car) || is_nil(t2.cdr.car))) {
        throw new Error("let require list of pairs");
      }
      var n;
      if (is_nil(t2.cdr.car)) {
        p = _nil;
        n = _nil;
      } else {
        n = t2.cdr.car.map(function(e77) {
          return e77.car;
        });
        p = t2.cdr.car.map(function(e77) {
          return e77.cdr.car;
        });
      }
      return new Pair(Pair.fromArray([LSymbol("letrec"), [[t2.car, Pair(LSymbol("lambda"), Pair(n, t2.cdr.cdr))]], t2.car]), p);
    } else if (r) {
      return;
    }
    var d = this;
    p = global_env.get("list->array")(t2.car);
    var h = d.inherit(w);
    var m, y;
    if (w === "let*") {
      y = h;
    } else if (w === "let") {
      m = [];
    }
    var v = 0;
    function b() {
      var e77 = hygienic_begin([h], t2.cdr);
      return _evaluate(e77, { env: h, dynamic_env: h, use_dynamic: _, error: f });
    }
    function g(e77) {
      if (e77 in h.__env__) {
        throw new Error("Duplicated let variable ".concat(e77));
      }
    }
    return function t3() {
      var r2 = p[v++];
      l = w === "let*" ? h : d;
      if (!r2) {
        if (m && m.length) {
          var e77 = m.map(function(e78) {
            return e78.value;
          });
          var n2 = e77.filter(is_promise);
          if (n2.length) {
            return promise_all(e77).then(function(e78) {
              for (var t4 = 0, r3 = e78.length; t4 < r3; ++t4) {
                var n3 = m[t4].name;
                g(n3);
                h.set(n3, e78[t4]);
              }
            }).then(b);
          } else {
            var i = _createForOfIteratorHelper(m), a;
            try {
              for (i.s(); !(a = i.n()).done; ) {
                var o = a.value, u = o.name, s = o.value;
                g(u);
                h.set(u, s);
              }
            } catch (e78) {
              i.e(e78);
            } finally {
              i.f();
            }
          }
        }
        return b();
      } else {
        if (w === "let") {
          y = d;
        } else if (w === "letrec") {
          y = h;
        }
        var c = _evaluate(r2.cdr.car, { env: y, dynamic_env: l, use_dynamic: _, error: f });
        if (w === "let*") {
          y = h = y.inherit("let*[" + v + "]");
        }
        if (m) {
          m.push({ name: r2.car, value: c });
          return t3();
        } else {
          return unpromise(c, function(e78) {
            h.set(r2.car, e78);
            return t3();
          });
        }
      }
    }();
  });
}
function parallel(e75, c) {
  return new Macro(e75, function(e76) {
    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t2.use_dynamic, n = t2.error;
    var i = this;
    var a = this;
    var o = [];
    var u = e76;
    while (is_pair(u)) {
      o.push(_evaluate(u.car, { env: i, dynamic_env: a, use_dynamic: r, error: n }));
      u = u.cdr;
    }
    var s = o.filter(is_promise).length;
    if (s) {
      return promise_all(o).then(c.bind(this));
    } else {
      return c.call(this, o);
    }
  });
}
function guard_math_call(e75) {
  for (var t2 = arguments.length, r = new Array(t2 > 1 ? t2 - 1 : 0), n = 1; n < t2; n++) {
    r[n - 1] = arguments[n];
  }
  r.forEach(function(e76) {
    typecheck("", e76, "number");
  });
  return e75.apply(void 0, r);
}
function pipe() {
  var n = this;
  for (var e75 = arguments.length, i = new Array(e75), t2 = 0; t2 < e75; t2++) {
    i[t2] = arguments[t2];
  }
  i.forEach(function(e76, t3) {
    typecheck("pipe", e76, "function", t3 + 1);
  });
  return function() {
    for (var e76 = arguments.length, t3 = new Array(e76), r = 0; r < e76; r++) {
      t3[r] = arguments[r];
    }
    return i.reduce(function(e77, t4) {
      return [t4.apply(n, e77)];
    }, t3)[0];
  };
}
function compose() {
  for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
    t2[r] = arguments[r];
  }
  t2.forEach(function(e76, t3) {
    typecheck("compose", e76, "function", t3 + 1);
  });
  return pipe.apply(void 0, _toConsumableArray(t2.reverse()));
}
function fold(o, u) {
  var s = this;
  return function e75(t2, r) {
    typecheck(o, t2, "function");
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) {
      i[a - 2] = arguments[a];
    }
    if (i.some(is_null)) {
      if (typeof r === "number") {
        return LNumber(r);
      }
      return r;
    } else {
      return u.call.apply(u, [s, e75, t2, r].concat(i));
    }
  };
}
function limit_math_op(e75, t2) {
  return limit(e75 + 1, curry(guard_math_call, t2));
}
function reduce_math_op(n) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  return function() {
    for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
      t2[r] = arguments[r];
    }
    if (i !== null) {
      t2 = [i].concat(_toConsumableArray(t2));
    }
    return t2.reduce(binary_math_op(n));
  };
}
function curry(o) {
  for (var e75 = arguments.length, t2 = new Array(e75 > 1 ? e75 - 1 : 0), r = 1; r < e75; r++) {
    t2[r - 1] = arguments[r];
  }
  typecheck("curry", o, "function");
  var u = o.length;
  return function() {
    var n = this;
    var i = t2.slice();
    var a = /* @__PURE__ */ function() {
      return function() {
        for (var e76 = arguments.length, t3 = new Array(e76), r2 = 0; r2 < e76; r2++) {
          t3[r2] = arguments[r2];
        }
        i = i.concat(t3);
        if (i.length >= u) {
          return o.apply(n, i);
        } else {
          return a;
        }
      };
    }();
    return a.apply(void 0, arguments);
  };
}
function limit(n, i) {
  typecheck("limit", i, "function", 2);
  return function() {
    for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
      t2[r] = arguments[r];
    }
    return i.apply(void 0, _toConsumableArray(t2.slice(0, n)));
  };
}
function LCharacter(e75) {
  if (typeof this !== "undefined" && !(this instanceof LCharacter) || typeof this === "undefined") {
    return new LCharacter(e75);
  }
  if (e75 instanceof LString) {
    e75 = e75.valueOf();
  }
  var t2;
  if (Array.from(e75).length > 1) {
    e75 = e75.toLowerCase();
    if (LCharacter.__names__[e75]) {
      t2 = e75;
      e75 = LCharacter.__names__[e75];
    } else {
      throw new Error("Internal: Unknown named character");
    }
  } else {
    t2 = LCharacter.__rev_names__[e75];
  }
  enumerable(this, "__char__", e75);
  if (t2) {
    enumerable(this, "__name__", t2);
  }
}
function LString(e75) {
  if (typeof this !== "undefined" && !(this instanceof LString) || typeof this === "undefined") {
    return new LString(e75);
  }
  if (e75 instanceof Array) {
    this.__string__ = e75.map(function(e76, t2) {
      typecheck("LString", e76, "character", t2 + 1);
      return e76.toString();
    }).join("");
  } else {
    this.__string__ = e75.valueOf();
  }
}
function LNumber(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (e75 instanceof LNumber) {
    return e75;
  }
  if (typeof this !== "undefined" && !(this instanceof LNumber) || typeof this === "undefined") {
    return new LNumber(e75, t2);
  }
  if (typeof e75 === "undefined") {
    throw new Error("Invalid LNumber constructor call");
  }
  var r = LNumber.getType(e75);
  if (LNumber.types[r]) {
    return LNumber.types[r](e75, t2);
  }
  var n = e75 instanceof Array && LString.isString(e75[0]) && LNumber.isNumber(e75[1]);
  if (e75 instanceof LNumber) {
    return LNumber(e75.value);
  }
  if (!LNumber.isNumber(e75) && !n) {
    throw new Error("You can't create LNumber from ".concat(type(e75)));
  }
  if (e75 === null) {
    e75 = 0;
  }
  var i;
  if (n) {
    var a = e75, o = _slicedToArray(a, 2), u = o[0], s = o[1];
    if (u instanceof LString) {
      u = u.valueOf();
    }
    if (s instanceof LNumber) {
      s = s.valueOf();
    }
    var c = u.match(/^([+-])/);
    var l = false;
    if (c) {
      u = u.replace(/^[+-]/, "");
      if (c[1] === "-") {
        l = true;
      }
    }
  }
  if (Number.isNaN(e75)) {
    return LFloat(e75);
  } else if (n && Number.isNaN(parseInt(u, s))) {
    return nan;
  } else if (typeof BigInt !== "undefined") {
    if (typeof e75 !== "bigint") {
      if (n) {
        var f;
        switch (s) {
          case 8:
            f = "0o";
            break;
          case 16:
            f = "0x";
            break;
          case 2:
            f = "0b";
            break;
          case 10:
            f = "";
            break;
        }
        if (typeof f === "undefined") {
          var _ = BigInt(s);
          i = _toConsumableArray(u).map(function(e76, t3) {
            return BigInt(parseInt(e76, s)) * pow(_, BigInt(t3));
          }).reduce(function(e76, t3) {
            return e76 + t3;
          });
        } else {
          i = BigInt(f + u);
        }
      } else {
        i = BigInt(e75);
      }
      if (l) {
        i *= BigInt(-1);
      }
    } else {
      i = e75;
    }
    return LBigInteger(i, true);
  } else if (typeof BN !== "undefined" && !(e75 instanceof BN)) {
    if (e75 instanceof Array) {
      return LBigInteger(_construct(BN, _toConsumableArray(e75)));
    }
    return LBigInteger(new BN(e75));
  } else if (n) {
    this.constant(parseInt(u, s), "integer");
  } else {
    this.constant(e75, "integer");
  }
}
function coerce(e75, t2, r, n) {
  return matrix[e75][t2](r, n);
}
function LComplex(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (typeof this !== "undefined" && !(this instanceof LComplex) || typeof this === "undefined") {
    return new LComplex(e75, t2);
  }
  if (e75 instanceof LComplex) {
    return LComplex({ im: e75.__im__, re: e75.__re__ });
  }
  if (LNumber.isNumber(e75) && t2) {
    if (!t2) {
      return Number(e75);
    }
  } else if (!LNumber.isComplex(e75)) {
    var r = "Invalid constructor call for LComplex expect &(:im <num> :re <num>) object but got ".concat(toString(e75));
    throw new Error(r);
  }
  var n = e75.im instanceof LNumber ? e75.im : LNumber(e75.im);
  var i = e75.re instanceof LNumber ? e75.re : LNumber(e75.re);
  this.constant(n, i);
}
function LFloat(e75) {
  if (typeof this !== "undefined" && !(this instanceof LFloat) || typeof this === "undefined") {
    return new LFloat(e75);
  }
  if (!LNumber.isNumber(e75)) {
    throw new Error("Invalid constructor call for LFloat");
  }
  if (e75 instanceof LNumber) {
    return LFloat(e75.valueOf());
  }
  if (typeof e75 === "number") {
    if (Object.is(e75, -0)) {
      Object.defineProperty(this, "_minus", { value: true });
    }
    this.constant(e75, "float");
  }
}
function approxRatio(n) {
  return function(e75) {
    var t2 = function e76(n2, t3, r2) {
      var i = function e77(t4, r3) {
        return r3 < n2 ? t4 : i(r3, t4 % r3);
      };
      if (Number.isNaN(t3) || Number.isNaN(r2)) {
        return NaN;
      }
      return i(Math.abs(t3), Math.abs(r2));
    }, r = t2(n ? n : 1 / 1e4, 1, e75);
    return LRational({ num: Math.floor(e75 / r), denom: Math.floor(1 / r) });
  };
}
function rationalize(e75, t2) {
  var r = e75.sub(t2);
  var n = e75.add(t2);
  var i;
  if (r.cmp(n) > 0) {
    i = simplest_rational2(n, r);
  } else if (n.cmp(r) <= 0) {
    i = r;
  } else if (r.cmp(0) > 0) {
    i = simplest_rational2(r, n);
  } else if (t2.cmp(0) < 0) {
    i = LNumber(simplest_rational2(n.sub(), r.sub())).sub();
  } else {
    i = LNumber(0);
  }
  if (LNumber.isFloat(t2) || LNumber.isFloat(e75)) {
    return LFloat(i);
  }
  return i;
}
function simplest_rational2(e75, t2) {
  var r = LNumber(e75).floor();
  var n = LNumber(t2).floor();
  if (e75.cmp(r) < 1) {
    return r;
  } else if (r.cmp(n) === 0) {
    var i = LNumber(1).div(t2.sub(n));
    var a = LNumber(1).div(e75.sub(r));
    return r.add(LNumber(1).div(simplest_rational2(i, a)));
  } else {
    return r.add(LNumber(1));
  }
}
function LRational(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (typeof this !== "undefined" && !(this instanceof LRational) || typeof this === "undefined") {
    return new LRational(e75, t2);
  }
  if (!LNumber.isRational(e75)) {
    throw new Error("Invalid constructor call for LRational");
  }
  var r, n;
  if (e75 instanceof LRational) {
    r = LNumber(e75.__num__);
    n = LNumber(e75.__denom__);
  } else {
    r = LNumber(e75.num);
    n = LNumber(e75.denom);
  }
  if (!t2 && n.cmp(0) !== 0) {
    var i = r.op("%", n).cmp(0) === 0;
    if (i) {
      return LNumber(r.div(n));
    }
  }
  this.constant(r, n);
}
function LBigInteger(e75, t2) {
  if (typeof this !== "undefined" && !(this instanceof LBigInteger) || typeof this === "undefined") {
    return new LBigInteger(e75, t2);
  }
  if (e75 instanceof LBigInteger) {
    return LBigInteger(e75.__value__, e75._native);
  }
  if (!LNumber.isBigInteger(e75)) {
    throw new Error("Invalid constructor call for LBigInteger");
  }
  this.constant(e75, "bigint");
  Object.defineProperty(this, "_native", { value: t2 });
}
function InputPort(e75) {
  var n = this;
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : global_env;
  if (typeof this !== "undefined" && !(this instanceof InputPort) || typeof this === "undefined") {
    return new InputPort(e75);
  }
  typecheck("InputPort", e75, "function");
  read_only(this, "__type__", text_port);
  var a;
  Object.defineProperty(this, "__parser__", { enumerable: true, get: function e76() {
    return a;
  }, set: function e76(t2) {
    typecheck("InputPort::__parser__", t2, "parser");
    a = t2;
  } });
  this._read = e75;
  this._with_parser = this._with_init_parser.bind(this, _asyncToGenerator(_regeneratorRuntime.mark(function e76() {
    var r;
    return _regeneratorRuntime.wrap(function e77(t2) {
      while (1) switch (t2.prev = t2.next) {
        case 0:
          if (n.char_ready()) {
            t2.next = 6;
            break;
          }
          t2.next = 3;
          return n._read();
        case 3:
          r = t2.sent;
          a = new Parser({ env: i });
          a.prepare(r);
        case 6:
          return t2.abrupt("return", n.__parser__);
        case 7:
        case "end":
          return t2.stop();
      }
    }, e76);
  })));
  this.char_ready = function() {
    return !!this.__parser__ && this.__parser__.__lexer__.peek() !== eof;
  };
  this._make_defaults();
}
function OutputPort(e75) {
  if (typeof this !== "undefined" && !(this instanceof OutputPort) || typeof this === "undefined") {
    return new OutputPort(e75);
  }
  typecheck("OutputPort", e75, "function");
  read_only(this, "__type__", text_port);
  this.write = e75;
}
function OutputStringPort(t2) {
  var r = this;
  if (typeof this !== "undefined" && !(this instanceof OutputStringPort) || typeof this === "undefined") {
    return new OutputStringPort(t2);
  }
  typecheck("OutputStringPort", t2, "function");
  read_only(this, "__type__", text_port);
  read_only(this, "__buffer__", []);
  this.write = function(e75) {
    if (!LString.isString(e75)) {
      e75 = t2(e75);
    } else {
      e75 = e75.valueOf();
    }
    r.__buffer__.push(e75);
  };
}
function OutputFilePort(e75, t2) {
  var r = this;
  if (typeof this !== "undefined" && !(this instanceof OutputFilePort) || typeof this === "undefined") {
    return new OutputFilePort(e75, t2);
  }
  typecheck("OutputFilePort", e75, "string");
  read_only(this, "__filename__", e75);
  read_only(this, "_fd", t2.valueOf(), { hidden: true });
  read_only(this, "__type__", text_port);
  this.write = function(e76) {
    if (!LString.isString(e76)) {
      e76 = to_string(e76);
    } else {
      e76 = e76.valueOf();
    }
    r.fs().write(r._fd, e76, function(e77) {
      if (e77) {
        throw e77;
      }
    });
  };
}
function InputStringPort(e75) {
  var t2 = this;
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : global_env;
  if (typeof this !== "undefined" && !(this instanceof InputStringPort) || typeof this === "undefined") {
    return new InputStringPort(e75);
  }
  typecheck("InputStringPort", e75, "string");
  e75 = e75.valueOf();
  this._with_parser = this._with_init_parser.bind(this, function() {
    if (!t2.__parser__) {
      t2.__parser__ = new Parser({ env: r });
      t2.__parser__.prepare(e75);
    }
    return t2.__parser__;
  });
  read_only(this, "__type__", text_port);
  this._make_defaults();
}
function ParserInputPort(e75) {
  if (typeof this !== "undefined" && !(this instanceof ParserInputPort) || typeof this === "undefined") {
    return new ParserInputPort(e75);
  }
  this._with_parser = this._with_init_parser.bind(this, function() {
    return e75;
  });
  read_only(this, "__type__", text_port);
  this._make_defaults();
}
function InputByteVectorPort(e75) {
  if (typeof this !== "undefined" && !(this instanceof InputByteVectorPort) || typeof this === "undefined") {
    return new InputByteVectorPort(e75);
  }
  typecheck("InputByteVectorPort", e75, "uint8array");
  read_only(this, "__vector__", e75);
  read_only(this, "__type__", binary_port);
  var r = 0;
  Object.defineProperty(this, "__index__", { enumerable: true, get: function e76() {
    return r;
  }, set: function e76(t2) {
    typecheck("InputByteVectorPort::__index__", t2, "number");
    if (t2 instanceof LNumber) {
      t2 = t2.valueOf();
    }
    if (typeof t2 === "bigint") {
      t2 = Number(t2);
    }
    if (Math.floor(t2) !== t2) {
      throw new Error("InputByteVectorPort::__index__ value is not integer");
    }
    r = t2;
  } });
}
function OutputByteVectorPort() {
  if (typeof this !== "undefined" && !(this instanceof OutputByteVectorPort) || typeof this === "undefined") {
    return new OutputByteVectorPort();
  }
  read_only(this, "__type__", binary_port);
  read_only(this, "_buffer", [], { hidden: true });
  this.write = function(e75) {
    typecheck("write", e75, ["number", "uint8array"]);
    if (LNumber.isNumber(e75)) {
      this._buffer.push(e75.valueOf());
    } else {
      var t2;
      (t2 = this._buffer).push.apply(t2, _toConsumableArray(Array.from(e75)));
    }
  };
  Object.defineProperty(this, "__buffer__", { enumerable: true, get: function e75() {
    return Uint8Array.from(this._buffer);
  } });
}
function InputFilePort(e75, t2) {
  if (typeof this !== "undefined" && !(this instanceof InputFilePort) || typeof this === "undefined") {
    return new InputFilePort(e75, t2);
  }
  InputStringPort.call(this, e75);
  typecheck("InputFilePort", t2, "string");
  read_only(this, "__filename__", t2);
}
function InputBinaryFilePort(e75, t2) {
  if (typeof this !== "undefined" && !(this instanceof InputBinaryFilePort) || typeof this === "undefined") {
    return new InputBinaryFilePort(e75, t2);
  }
  InputByteVectorPort.call(this, e75);
  typecheck("InputBinaryFilePort", t2, "string");
  read_only(this, "__filename__", t2);
}
function OutputBinaryFilePort(e75, t2) {
  var i = this;
  if (typeof this !== "undefined" && !(this instanceof OutputBinaryFilePort) || typeof this === "undefined") {
    return new OutputBinaryFilePort(e75, t2);
  }
  typecheck("OutputBinaryFilePort", e75, "string");
  read_only(this, "__filename__", e75);
  read_only(this, "_fd", t2.valueOf(), { hidden: true });
  read_only(this, "__type__", binary_port);
  var a;
  this.write = function(e76) {
    typecheck("write", e76, ["number", "uint8array"]);
    var n;
    if (!a) {
      a = i.internal("fs");
    }
    if (LNumber.isNumber(e76)) {
      n = new Uint8Array([e76.valueOf()]);
    } else {
      n = new Uint8Array(Array.from(e76));
    }
    return new Promise(function(t3, r) {
      a.write(i._fd, n, function(e77) {
        if (e77) {
          r(e77);
        } else {
          t3();
        }
      });
    });
  };
}
function EOF() {
}
function Interpreter(e75) {
  var t2 = this;
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.stderr, i = r.stdin, a = r.stdout, o = r.command_line, u = o === void 0 ? null : o, s = _objectWithoutProperties(r, _excluded3);
  if (typeof this !== "undefined" && !(this instanceof Interpreter) || typeof this === "undefined") {
    return new Interpreter(e75, _objectSpread({ stdin: i, stdout: a, stderr: n, command_line: u }, s));
  }
  if (typeof e75 === "undefined") {
    e75 = "anonymous";
  }
  this.__env__ = user_env.inherit(e75, s);
  this.__parser__ = new Parser({ env: this.__env__ });
  this.__env__.set("parent.frame", doc("parent.frame", function() {
    return t2.__env__;
  }, global_env.__env__["parent.frame"].__doc__));
  var c = "**interaction-environment-defaults**";
  this.set(c, get_props(s).concat(c));
  var l = internal_env.inherit("internal-".concat(e75));
  if (is_port(i)) {
    l.set("stdin", i);
  }
  if (is_port(n)) {
    l.set("stderr", n);
  }
  if (is_port(a)) {
    l.set("stdout", a);
  }
  l.set("command-line", u);
  set_interaction_env(this.__env__, l);
}
function LipsError(e75, t2) {
  this.name = "LipsError";
  this.message = e75;
  this.args = t2;
  this.stack = new Error().stack;
}
function Environment(e75, t2, r) {
  if (arguments.length === 1) {
    if (_typeof$1(arguments[0]) === "object") {
      e75 = arguments[0];
      t2 = null;
    } else if (typeof arguments[0] === "string") {
      e75 = {};
      t2 = null;
      r = arguments[0];
    }
  }
  this.__docs__ = /* @__PURE__ */ new Map();
  this.__env__ = e75;
  this.__parent__ = t2;
  this.__name__ = r || "anonymous";
}
function Value(e75) {
  if (typeof this !== "undefined" && !(this instanceof Value) || typeof this === "undefined") {
    return new Value(e75);
  }
  this.value = e75;
}
function Values(e75) {
  if (!e75.length) {
    return;
  }
  if (e75.length === 1) {
    return e75[0];
  }
  if (typeof this !== "undefined" && !(this instanceof Values) || typeof this === "undefined") {
    return new Values(e75);
  }
  this.__values__ = e75;
}
function quote(e75) {
  if (is_promise(e75)) {
    return e75.then(quote);
  }
  if (is_pair(e75) || e75 instanceof LSymbol) {
    e75[__data__] = true;
  }
  return e75;
}
function get_internal(e75) {
  return interaction(e75, "**internal-env**");
}
function internal(e75, t2) {
  var r = get_internal(e75);
  return r.get(t2);
}
function interaction(e75, t2) {
  var r = e75.get("**interaction-environment**");
  return r.get(t2);
}
function set_interaction_env(e75, t2) {
  e75.constant("**internal-env**", t2);
  e75.doc("**internal-env**", "**internal-env**\n\n         Constant used to hide stdin, stdout and stderr so they don't interfere\n         with variables with the same name. Constants are an internal type\n         of variable that can't be redefined, defining a variable with the same name\n         will throw an error.");
  global_env.set("**interaction-environment**", e75);
}
function set_fs(e75) {
  user_env.get("**internal-env**").set("fs", e75);
}
function allPossibleCases(e75) {
  if (e75.length === 1) {
    return e75[0];
  } else {
    var t2 = [];
    var r = allPossibleCases(e75.slice(1));
    for (var n = 0; n < r.length; n++) {
      for (var i = 0; i < e75[0].length; i++) {
        t2.push(e75[0][i] + r[n]);
      }
    }
    return t2;
  }
}
function combinations(e75, t2, r) {
  var n = [];
  for (var i = t2; i <= r; ++i) {
    var a = [];
    for (var o = 0; o < i; ++o) {
      a.push(e75);
    }
    n = n.concat(allPossibleCases(a));
  }
  return n;
}
function reversseFind(e75, t2) {
  var r = e75.split(path.sep).filter(Boolean);
  for (var n = r.length; n--; ) {
    var i;
    var a = (i = path).join.apply(i, ["/"].concat(_toConsumableArray(r.slice(0, n + 1))));
    if (t2(a)) {
      return a;
    }
  }
}
function nodeModuleFind(e75) {
  return reversseFind(e75, function(e76) {
    return fs.existsSync(path.join(e76, "node_modules"));
  });
}
function is_node() {
  return typeof global !== "undefined" && global.global === global;
}
function node_specific() {
  return _node_specific.apply(this, arguments);
}
function _node_specific() {
  _node_specific = _asyncToGenerator(_regeneratorRuntime.mark(function e75() {
    var r, n, i, a, o;
    return _regeneratorRuntime.wrap(function e76(t2) {
      while (1) switch (t2.prev = t2.next) {
        case 0:
          t2.next = 2;
          return import("module");
        case 2:
          r = t2.sent;
          n = r.createRequire;
          nodeRequire = n(import.meta.url);
          t2.next = 7;
          return import("fs");
        case 7:
          fs = t2.sent;
          t2.next = 10;
          return import("path");
        case 10:
          path = t2.sent;
          global_env.set("global", global);
          global_env.set("self", global);
          global_env.set("window", void 0);
          i = new URL(import.meta.url);
          a = path.dirname(i.pathname);
          o = path.basename(i.pathname);
          global_env.set("__dirname", a);
          global_env.set("__filename", o);
          global_env.set("require.resolve", doc("require.resolve", function(e77) {
            typecheck("require.resolve", e77, "string");
            var t3 = e77.valueOf();
            return nodeRequire.resolve(t3);
          }, "(require.resolve path)\n\n        Returns the path relative to the current module.\n\n        Only available when LIPS is running under Node.js."));
          global_env.set("require", doc("require", function(t3) {
            typecheck("require", t3, "string");
            t3 = t3.valueOf();
            var e77 = process.cwd();
            var r2;
            try {
              if (t3.match(/^\s*\./)) {
                r2 = nodeRequire(path.join(e77, t3));
              } else {
                var n2 = nodeModuleFind(e77);
                if (n2) {
                  r2 = nodeRequire(path.join(n2, "node_modules", t3));
                } else {
                  r2 = nodeRequire(t3);
                }
              }
            } catch (e78) {
              r2 = nodeRequire(t3);
            }
            return patch_value(r2, global);
          }, "(require module)\n\n        Function used inside Node.js to import a module."));
          process.on("unhandledRejection", function(e77, t3) {
            if (e77 instanceof IgnoreException) {
              t3["catch"](noop);
            }
          });
        case 22:
        case "end":
          return t2.stop();
      }
    }, e75);
  }));
  return _node_specific.apply(this, arguments);
}
function typeErrorMessage(e75, t2, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var i = e75 ? " in expression `".concat(e75, "`") : "";
  if (n !== null) {
    i += " (argument ".concat(n, ")");
  }
  if (is_function(r)) {
    return "Invalid type: got ".concat(t2).concat(i);
  }
  if (r instanceof Array) {
    if (r.length === 1) {
      var a = r[0].toLowerCase();
      r = "a" + ("aeiou".includes(a) ? "n " : " ") + r[0];
    } else {
      r = new Intl.ListFormat("en", { style: "long", type: "disjunction" }).format(r);
    }
  }
  return "Expecting ".concat(r, " got ").concat(t2).concat(i);
}
function typecheck_number(e75, t2, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  typecheck(e75, t2, "number", n);
  var i = t2.__type__;
  var a;
  if (is_pair(r)) {
    r = r.to_array();
  }
  if (r instanceof Array) {
    r = r.map(function(e76) {
      return e76.valueOf();
    });
  }
  if (r instanceof Array) {
    r = r.map(function(e76) {
      return e76.valueOf().toLowerCase();
    });
    if (r.includes(i)) {
      a = true;
    }
  } else {
    r = r.valueOf().toLowerCase();
  }
  if (!a && i !== r) {
    throw new Error(typeErrorMessage(e75, i, r, n));
  }
}
function typecheck_numbers(r, e75, n) {
  e75.forEach(function(e76, t2) {
    typecheck_number(r, e76, n, t2 + 1);
  });
}
function typecheck_args(r, e75, n) {
  e75.forEach(function(e76, t2) {
    typecheck(r, e76, n, t2 + 1);
  });
}
function typecheck_text_port(e75, t2, r) {
  typecheck(e75, t2, r);
  if (t2.__type__ === binary_port) {
    throw new Error(typeErrorMessage(e75, "binary-port", "textual-port"));
  }
}
function typecheck(e75, t2, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  e75 = e75.valueOf();
  var i = type(t2).toLowerCase();
  if (is_function(r)) {
    if (!r(t2)) {
      throw new Error(typeErrorMessage(e75, i, r, n));
    }
    return;
  }
  var a = false;
  if (is_pair(r)) {
    r = r.to_array();
  }
  if (r instanceof Array) {
    r = r.map(function(e76) {
      return e76.valueOf();
    });
  }
  if (r instanceof Array) {
    r = r.map(function(e76) {
      return e76.valueOf().toLowerCase();
    });
    if (r.includes(i)) {
      a = true;
    }
  } else {
    r = r.valueOf().toLowerCase();
  }
  if (!a && i !== r) {
    throw new Error(typeErrorMessage(e75, i, r, n));
  }
}
function memoize(r) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(e75) {
    var t2 = n.get(e75);
    if (!t2) {
      t2 = r(e75);
    }
    return t2;
  };
}
function type(e75) {
  var t2 = type_constants.get(e75);
  if (t2) {
    return t2;
  }
  if (_typeof$1(e75) === "object") {
    for (var r = 0, n = Object.entries(type_mapping); r < n.length; r++) {
      var i = _slicedToArray(n[r], 2), a = i[0], o = i[1];
      if (e75 instanceof o) {
        return a;
      }
    }
    if (is_instance(e75)) {
      if (is_function(e75.typeOf)) {
        return e75.typeOf();
      }
      return "instance";
    }
    if (e75.constructor) {
      if (e75.constructor.__class__) {
        return e75.constructor.__class__;
      }
      if (e75.constructor === Object) {
        if (is_iterator(e75, Symbol.iterator)) {
          return "iterator";
        }
        if (is_iterator(e75, Symbol.asyncIterator)) {
          return "async-iterator";
        }
      }
      if (e75.constructor.name === "") {
        return "object";
      }
      return e75.constructor.name.toLowerCase();
    }
  }
  if (e75 === void 0) {
    return "void";
  }
  return _typeof$1(e75);
}
function resolve_promises(e75) {
  var t2 = [];
  r(e75);
  if (t2.length) {
    return a(e75);
  }
  return e75;
  function r(e76) {
    if (is_promise(e76)) {
      t2.push(e76);
    } else if (is_pair(e76)) {
      if (!e76.have_cycles("car")) {
        r(e76.car);
      }
      if (!e76.have_cycles("cdr")) {
        r(e76.cdr);
      }
    } else if (e76 instanceof Array) {
      e76.forEach(r);
    }
  }
  function n(e76) {
    return i.apply(this, arguments);
  }
  function i() {
    i = _asyncToGenerator(_regeneratorRuntime.mark(function e76(r2) {
      var n2;
      return _regeneratorRuntime.wrap(function e77(t3) {
        while (1) switch (t3.prev = t3.next) {
          case 0:
            t3.t0 = Pair;
            if (!r2.have_cycles("car")) {
              t3.next = 5;
              break;
            }
            t3.t1 = r2.car;
            t3.next = 8;
            break;
          case 5:
            t3.next = 7;
            return a(r2.car);
          case 7:
            t3.t1 = t3.sent;
          case 8:
            t3.t2 = t3.t1;
            if (!r2.have_cycles("cdr")) {
              t3.next = 13;
              break;
            }
            t3.t3 = r2.cdr;
            t3.next = 16;
            break;
          case 13:
            t3.next = 15;
            return a(r2.cdr);
          case 15:
            t3.t3 = t3.sent;
          case 16:
            t3.t4 = t3.t3;
            n2 = new t3.t0(t3.t2, t3.t4);
            if (r2[__data__]) {
              n2[__data__] = true;
            }
            return t3.abrupt("return", n2);
          case 20:
          case "end":
            return t3.stop();
        }
      }, e76);
    }));
    return i.apply(this, arguments);
  }
  function a(e76) {
    if (e76 instanceof Array) {
      return promise_all(e76.map(a));
    }
    if (is_pair(e76) && t2.length) {
      return n(e76);
    }
    return e76;
  }
}
function evaluate_args(e75, t2) {
  var r = t2.use_dynamic, n = _objectWithoutProperties(t2, _excluded5);
  var i = [];
  var a = e75;
  function o() {
    return i;
  }
  return function t3() {
    if (is_pair(a)) {
      var e76 = _evaluate(a.car, _objectSpread({ use_dynamic: r }, n));
      if (r) {
        e76 = unpromise(e76, function(e77) {
          if (is_native_function(e77)) {
            return e77.bind(dynamic_env);
          }
          return e77;
        });
      }
      return unpromise(resolve_promises(e76), function(e77) {
        i.push(e77);
        if (a.have_cycles("cdr")) {
          throw new Error("Invalid expression: Can't evaluate cycle");
        }
        a = a.cdr;
        return t3();
      });
    } else if (is_nil(a)) {
      return o();
    } else {
      throw new Error("Syntax Error: improper list found in apply");
    }
  }();
}
function evaluate_syntax(e75, t2, r) {
  var n = e75.invoke(t2, r);
  return unpromise(resolve_promises(n), function(e76) {
    if (is_pair(e76)) {
      e76.mark_cycles();
    }
    return quote(e76);
  });
}
function evaluate_macro(e75, t2, r) {
  function n(e76) {
    if (is_pair(e76)) {
      e76.mark_cycles();
      return e76;
    }
    return quote(e76);
  }
  var i = e75.invoke(t2, r);
  return unpromise(resolve_promises(i), function e76(t3) {
    if (!t3 || t3 && t3[__data__] || self_evaluated(t3)) {
      return t3;
    } else {
      return unpromise(_evaluate(t3, r), n);
    }
  }, function(e76) {
    throw e76;
  });
}
function prepare_fn_args(e75, t2) {
  if (is_bound(e75) && !is_object_bound(e75) && (!lips_context(e75) || is_port_method(e75))) {
    t2 = t2.map(unbox);
  }
  if (!is_raw_lambda(e75) && t2.some(is_lips_function) && !is_lips_function(e75) && !is_array_method(e75)) {
    var r = [], n = t2.length;
    var i = function e76() {
      var i2 = t2[n];
      if (is_lips_function(i2)) {
        a = function e77() {
          for (var t3 = arguments.length, r2 = new Array(t3), n2 = 0; n2 < t3; n2++) {
            r2[n2] = arguments[n2];
          }
          return unpromise(i2.apply(this, r2), unbox);
        };
        hidden_prop(a, "__bound__", true);
        hidden_prop(a, "__fn__", i2);
        a.prototype = i2.prototype;
        r[n] = a;
      } else {
        r[n] = i2;
      }
    }, a;
    while (n--) {
      i();
    }
    t2 = r;
  }
  return t2;
}
function call_function(e75, t2) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.env, i = r.dynamic_env, a = r.use_dynamic;
  var o = n === null || n === void 0 ? void 0 : n.new_frame(e75, t2);
  var u = i === null || i === void 0 ? void 0 : i.new_frame(e75, t2);
  var s = new LambdaContext({ env: o, use_dynamic: a, dynamic_env: u });
  return resolve_promises(e75.apply(s, t2));
}
function apply(n, e75) {
  var t2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = t2.env, a = t2.dynamic_env, o = t2.use_dynamic, r = t2.error, u = r === void 0 ? function() {
  } : r;
  e75 = evaluate_args(e75, { env: i, dynamic_env: a, error: u, use_dynamic: o });
  return unpromise(e75, function(e76) {
    if (is_raw_lambda(n)) {
      n = unbind(n);
    }
    e76 = prepare_fn_args(n, e76);
    var t3 = e76.slice();
    var r2 = call_function(n, t3, { env: i, dynamic_env: a, use_dynamic: o });
    return unpromise(r2, function(e77) {
      if (is_pair(e77)) {
        e77.mark_cycles();
        return quote(e77);
      }
      return box(e77);
    }, u);
  });
}
function search_param(e75, t2) {
  var r = e75.get(t2.__name__, { throwError: false });
  if (is_parameter(r) && r !== t2) {
    return r;
  }
  var n = user_env.get("**interaction-environment**");
  while (true) {
    var i = e75.get("parent.frame", { throwError: false });
    e75 = i(0);
    if (e75 === n) {
      break;
    }
    r = e75.get(t2.__name__, { throwError: false });
    if (is_parameter(r) && r !== t2) {
      return r;
    }
  }
  return t2;
}
function _evaluate(u) {
  var e75 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = e75.env, c = e75.dynamic_env, l = e75.use_dynamic, t2 = e75.error, f = t2 === void 0 ? noop : t2, r = _objectWithoutProperties(e75, _excluded6);
  return function(e76) {
    try {
      if (!is_env(c)) {
        c = s === true ? user_env : s || user_env;
      }
      if (l) {
        s = c;
      } else if (s === true) {
        s = user_env;
      } else {
        s = s || global_env;
      }
      var t3 = { env: s, dynamic_env: c, use_dynamic: l, error: f };
      var r2;
      if (is_null(u)) {
        return u;
      }
      if (u instanceof LSymbol) {
        return s.get(u);
      }
      if (!is_pair(u)) {
        return u;
      }
      var n = u.car;
      var e76 = u.cdr;
      if (is_pair(n)) {
        r2 = resolve_promises(_evaluate(n, t3));
        if (is_promise(r2)) {
          return r2.then(function(e77) {
            if (!is_callable(e77)) {
              throw new Error(type(e77) + " " + s.get("repr")(e77) + " is not callable while evaluating " + u.toString());
            }
            return _evaluate(new Pair(e77, u.cdr), t3);
          });
        } else if (!is_callable(r2)) {
          throw new Error(type(r2) + " " + s.get("repr")(r2) + " is not callable while evaluating " + u.toString());
        }
      }
      if (n instanceof LSymbol) {
        r2 = s.get(n);
      } else if (is_function(n)) {
        r2 = n;
      }
      var i;
      if (r2 instanceof Syntax) {
        i = evaluate_syntax(r2, u, t3);
      } else if (r2 instanceof Macro) {
        i = evaluate_macro(r2, e76, t3);
      } else if (is_function(r2)) {
        i = apply(r2, e76, t3);
      } else if (r2 instanceof SyntaxParameter) {
        i = evaluate_syntax(r2._syntax, u, t3);
      } else if (is_parameter(r2)) {
        var a = search_param(c, r2);
        if (is_null(u.cdr)) {
          i = a.invoke();
        } else {
          return unpromise(_evaluate(u.cdr.car, t3), function(e77) {
            a.__value__ = e77;
          });
        }
      } else if (is_continuation(r2)) {
        i = r2.invoke();
      } else if (is_pair(u)) {
        r2 = n && n.toString();
        throw new Error("".concat(type(n), " ").concat(r2, " is not a function"));
      } else {
        return u;
      }
      var o = s.get(Symbol["for"]("__promise__"), { throwError: false });
      if (o === true && is_promise(i)) {
        i = i.then(function(e77) {
          if (is_pair(e77) && !r2[__data__]) {
            return _evaluate(e77, t3);
          }
          return e77;
        });
        return new QuotedPromise(i);
      }
      return i;
    } catch (e77) {
      f && f.call(s, e77, u);
    }
  }(r);
}
function exec_with_stacktrace(e75) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t2.env, n = t2.dynamic_env, i = t2.use_dynamic;
  return _evaluate(e75, { env: r, dynamic_env: n, use_dynamic: i, error: function e76(t3, r2) {
    if (t3 && t3.message) {
      if (t3.message.match(/^Error:/)) {
        var n2 = /^(Error:)\s*([^:]+:\s*)/;
        t3.message = t3.message.replace(n2, "$1 $2");
      }
      if (r2) {
        if (!(t3.__code__ instanceof Array)) {
          t3.__code__ = [];
        }
        t3.__code__.push(r2.toString(true));
      }
    }
    if (!(t3 instanceof IgnoreException)) {
      throw t3;
    }
  } });
}
function exec_collect(h) {
  return function() {
    var t2 = _asyncToGenerator(function(f) {
      var e76 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = e76.env, p = e76.dynamic_env, d = e76.use_dynamic;
      return _regeneratorRuntime.mark(function e77() {
        var r, n, i, a, o, u, s, c, l;
        return _regeneratorRuntime.wrap(function e78(t3) {
          while (1) switch (t3.prev = t3.next) {
            case 0:
              if (!is_env(p)) {
                p = _ === true ? user_env : _ || user_env;
              }
              if (_ === true) {
                _ = user_env;
              } else {
                _ = _ || user_env;
              }
              r = [];
              if (!is_pair(f)) {
                t3.next = 8;
                break;
              }
              t3.next = 6;
              return exec_with_stacktrace(f, { env: _, dynamic_env: p, use_dynamic: d });
            case 6:
              t3.t0 = t3.sent;
              return t3.abrupt("return", [t3.t0]);
            case 8:
              n = Array.isArray(f) ? f : _parse(f);
              i = false;
              a = false;
              t3.prev = 11;
              u = _asyncIterator(n);
            case 13:
              t3.next = 15;
              return u.next();
            case 15:
              if (!(i = !(s = t3.sent).done)) {
                t3.next = 24;
                break;
              }
              c = s.value;
              t3.next = 19;
              return exec_with_stacktrace(c, { env: _, dynamic_env: p, use_dynamic: d });
            case 19:
              l = t3.sent;
              r.push(h(c, l));
            case 21:
              i = false;
              t3.next = 13;
              break;
            case 24:
              t3.next = 30;
              break;
            case 26:
              t3.prev = 26;
              t3.t1 = t3["catch"](11);
              a = true;
              o = t3.t1;
            case 30:
              t3.prev = 30;
              t3.prev = 31;
              if (!(i && u["return"] != null)) {
                t3.next = 35;
                break;
              }
              t3.next = 35;
              return u["return"]();
            case 35:
              t3.prev = 35;
              if (!a) {
                t3.next = 38;
                break;
              }
              throw o;
            case 38:
              return t3.finish(35);
            case 39:
              return t3.finish(30);
            case 40:
              return t3.abrupt("return", r);
            case 41:
            case "end":
              return t3.stop();
          }
        }, e77, null, [[11, 26, 30, 40], [31, , 35, 39]]);
      })();
    });
    function e75(e76) {
      return t2.apply(this, arguments);
    }
    return e75;
  }();
}
function balanced(e75) {
  var t2 = { "[": "]", "(": ")" };
  var r;
  if (typeof e75 === "string") {
    try {
      r = tokenize(e75);
    } catch (e76) {
      if (e76 instanceof Unterminated) {
        return false;
      }
      throw e76;
    }
  } else {
    r = e75.map(function(e76) {
      return e76 && e76.token ? e76.token : e76;
    });
  }
  var n = Object.keys(t2);
  var i = Object.values(t2).concat(n);
  r = r.filter(function(e76) {
    return i.includes(e76);
  });
  var a = new Stack();
  var o = _createForOfIteratorHelper(r), u;
  try {
    for (o.s(); !(u = o.n()).done; ) {
      var s = u.value;
      if (n.includes(s)) {
        a.push(s);
      } else if (!a.is_empty()) {
        var c = a.top();
        var l = t2[c];
        if (s === l) {
          a.pop();
        } else {
          throw new Error("Syntax error: missing closing ".concat(l));
        }
      } else {
        throw new Error("Syntax error: not matched closing ".concat(s));
      }
    }
  } catch (e76) {
    o.e(e76);
  } finally {
    o.f();
  }
  return a.is_empty();
}
function fworker(e75) {
  var t2 = "(" + e75.toString() + ")()";
  var r = window.URL || window.webkitURL;
  var n;
  try {
    n = new Blob([t2], { type: "application/javascript" });
  } catch (e76) {
    var i = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
    n = new i();
    n.append(t2);
    n = n.getBlob();
  }
  return new root.Worker(r.createObjectURL(n));
}
function is_dev() {
  return lips.version.match(/^(\{\{VER\}\}|DEV)$/);
}
function get_current_script() {
  if (is_node()) {
    return;
  }
  var e75;
  if (document.currentScript) {
    e75 = document.currentScript;
  } else {
    var t2 = document.querySelectorAll("script");
    if (!t2.length) {
      return;
    }
    e75 = t2[t2.length - 1];
  }
  var r = e75.getAttribute("src");
  return r;
}
function bootstrap() {
  var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var t2 = "dist/std.xcb";
  if (e75 === "") {
    if (current_script) {
      e75 = current_script.replace(/[^/]*$/, "std.xcb");
    } else if (is_dev()) {
      e75 = "https://cdn.jsdelivr.net/gh/jcubic/lips@devel/".concat(t2);
    } else {
      e75 = "https://cdn.jsdelivr.net/npm/@jcubic/lips@".concat(lips.version, "/").concat(t2);
    }
  }
  global_env.set("__dirname", e75.replace(/[^/]+$/, ""));
  var r = global_env.get("load");
  return r.call(user_env, e75, global_env);
}
function Worker(e75) {
  this.url = e75;
  var o = this.worker = fworker(function() {
    var o2;
    var u;
    self.addEventListener("message", function(e76) {
      var r = e76.data;
      var t2 = r.id;
      if (r.type !== "RPC" || t2 === null) {
        return;
      }
      function n(e77) {
        self.postMessage({ id: t2, type: "RPC", result: e77 });
      }
      function i(e77) {
        self.postMessage({ id: t2, type: "RPC", error: e77 });
      }
      if (r.method === "eval") {
        if (!u) {
          i("Worker RPC: LIPS not initialized, call init first");
          return;
        }
        u.then(function() {
          var e77 = r.params[0];
          var t3 = r.params[1];
          o2.exec(e77, { use_dynamic: t3 }).then(function(e78) {
            e78 = e78.map(function(e79) {
              return e79 && e79.valueOf();
            });
            n(e78);
          })["catch"](function(e78) {
            i(e78);
          });
        });
      } else if (r.method === "init") {
        var a = r.params[0];
        if (typeof a !== "string") {
          i("Worker RPC: url is not a string");
        } else {
          importScripts("".concat(a, "/dist/lips.min.js"));
          o2 = new lips.Interpreter("worker");
          u = bootstrap(a);
          u.then(function() {
            n(true);
          });
        }
      }
    });
  });
  this.rpc = /* @__PURE__ */ function() {
    var n = 0;
    return function e76(t2, r) {
      var a = ++n;
      return new Promise(function(n2, i) {
        o.addEventListener("message", function e77(t3) {
          var r2 = t3.data;
          if (r2 && r2.type === "RPC" && r2.id === a) {
            if (r2.error) {
              i(r2.error);
            } else {
              n2(r2.result);
            }
            o.removeEventListener("message", e77);
          }
        });
        o.postMessage({ type: "RPC", method: t2, id: a, params: r });
      });
    };
  }();
  this.rpc("init", [e75])["catch"](function(e76) {
    console.error(e76);
  });
  this.exec = function(e76, t2) {
    var r = t2.use_dynamic, n = r === void 0 ? false : r;
    return this.rpc("eval", [e76, n]);
  };
}
function mangle_name(e75) {
  return class_map[e75];
}
function resolve_name(e75) {
  return available_class[e75];
}
function serialize(e75) {
  return JSON.stringify(e75, function(e76, t2) {
    var r = this[e76];
    if (r) {
      if (r instanceof RegExp) {
        return { "@": mangle_name("regex"), "#": [r.source, r.flags] };
      }
      var n = mangle_name(r.constructor.__class__);
      if (!is_undef(n)) {
        return { "@": n, "#": r.serialize() };
      }
    }
    return t2;
  });
}
function unserialize(e75) {
  return JSON.parse(e75, function(e76, t2) {
    if (t2 && _typeof$1(t2) === "object") {
      if (!is_undef(t2["@"])) {
        var r = resolve_name(t2["@"]);
        if (serialization_map[r]) {
          return serialization_map[r](t2["#"]);
        }
      }
    }
    return t2;
  });
}
function merge_uint8_array() {
  for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
    t2[r] = arguments[r];
  }
  if (t2.length > 1) {
    var n = t2.reduce(function(e76, t3) {
      return e76 + t3.length;
    }, 0);
    var i = new Uint8Array(n);
    var a = 0;
    t2.forEach(function(e76) {
      i.set(e76, a);
      a += e76.length;
    });
    return i;
  } else if (t2.length) {
    return t2[0];
  }
}
function encode_magic() {
  var e75 = 1;
  var t2 = new TextEncoder("utf-8");
  return t2.encode("LIPS".concat(e75.toString().padStart(3, " ")));
}
function decode_magic(e75) {
  var t2 = new TextDecoder("utf-8");
  var r = t2.decode(e75.slice(0, MAGIC_LENGTH));
  var n = r.substring(0, 4);
  if (n === "LIPS") {
    var i = r.match(/^(....).*([0-9]+)$/);
    if (i) {
      return { type: i[1], version: Number(i[2]) };
    }
  }
  return { type: "unknown" };
}
function serialize_bin(e75) {
  var t2 = encode_magic();
  var r = cbor.encode(e75);
  return merge_uint8_array(t2, lzjbPackExports.pack(r, { magic: false }));
}
function unserialize_bin(e75) {
  var t2 = decode_magic(e75), r = t2.type, n = t2.version;
  if (r === "LIPS" && n === 1) {
    var i = lzjbPackExports.unpack(e75.slice(MAGIC_LENGTH), { magic: false });
    return cbor.decode(i);
  } else {
    throw new Error("Invalid file format ".concat(r));
  }
}
function execError(e75) {
  console.error(e75.message || e75);
  if (Array.isArray(e75.code)) {
    console.error(e75.code.map(function(e76, t2) {
      return "[".concat(t2 + 1, "]: ").concat(e76);
    }));
  }
}
function init() {
  var o = ["text/x-lips", "text/x-scheme"];
  var u;
  function s(e76) {
    var t3;
    return (t3 = e76.getAttribute("data-bootstrap")) !== null && t3 !== void 0 ? t3 : e76.getAttribute("bootstrap");
  }
  function c(r2) {
    return new Promise(function(t3) {
      var e76 = r2.getAttribute("src");
      if (e76) {
        return fetch(e76).then(function(e77) {
          return e77.text();
        }).then(exec).then(t3)["catch"](function(e77) {
          execError(e77);
          t3();
        });
      } else {
        return exec(r2.innerHTML).then(t3)["catch"](function(e77) {
          execError(e77);
          t3();
        });
      }
    });
  }
  function e75() {
    return new Promise(function(i) {
      var a = Array.from(document.querySelectorAll("script"));
      return function e76() {
        var t3 = a.shift();
        if (!t3) {
          i();
        } else {
          var r2 = t3.getAttribute("type");
          if (o.includes(r2)) {
            var n = s(t3);
            if (!u && typeof n === "string") {
              return bootstrap(n).then(function() {
                return c(t3);
              }).then(e76);
            } else {
              return c(t3).then(e76);
            }
          } else if (r2 && r2.match(/lips|lisp/)) {
            console.warn("Expecting " + o.join(" or ") + " found " + r2);
          }
          return e76();
        }
      }();
    });
  }
  if (!window.document) {
    return Promise.resolve();
  } else if (currentScript) {
    var t2 = currentScript;
    var r = s(t2);
    if (typeof r === "string") {
      return bootstrap(r).then(function() {
        u = true;
        return e75();
      });
    }
  }
  return e75();
}
var regeneratorRuntime$1, _typeof, hasRequired_typeof, hasRequiredRegeneratorRuntime, regenerator, hasRequiredRegenerator, regeneratorExports, _regeneratorRuntime, decoder, src, srcEnd, position$1, LEGACY_RECORD_INLINE_ID, RECORD_DEFINITIONS_ID, RECORD_INLINE_ID, BUNDLED_STRINGS_ID, PACKED_REFERENCE_TAG_ID, STOP_CODE, maxArraySize, maxMapSize, currentDecoder, currentStructures, srcString, srcStringStart, srcStringEnd, bundledStrings$1, referenceMap, currentExtensions, currentExtensionRanges, packedValues, dataView, restoreMapsAsObject, defaultOptions, sequentialMode, inlineObjectReadThreshold, Decoder, validName, readFixedString, fromCharCode, f32Array, u8Array, Tag, recordDefinition, glbl, packedTable, SHARED_DATA_TAG_ID, isLittleEndianMachine$1, typedArrays, typedArrayTags, mult10, defaultDecoder, textEncoder, extensions, extensionClasses, Buffer$1, hasNodeBuffer, ByteArrayAllocate, ByteArray, MAX_STRUCTURES, MAX_BUFFER_SIZE, throwOnIterable, target, targetView, position, safeEnd, bundledStrings, MAX_BUNDLE_SIZE, hasNonLatin, RECORD_SYMBOL, Encoder, SharedData, BlobConstructor, isLittleEndianMachine, defaultEncoder, REUSE_BUFFER_MODE, RESET_BUFFER_MODE, THROW_ON_ITERABLE, lzjbPack, hasRequiredLzjbPack, lzjbPackExports, _excluded, _excluded2, _excluded3, _excluded4, _excluded5, _excluded6, root, type_mapping, type_constants, fs, path, nodeRequire, BN, re_re, float_stre, complex_float_stre, float_re, complex_list_re, characters, character_symbols, char_sre_re, char_re, complex_re, rational_re, int_re, int_bare_re, rational_bare_re, complex_bare_re, complex_bare_match_re, pre_num_parse_re, string_re, gensym, specials, defined_specials, builtins, Lexer, parsable_contants, directives, hash_literals, Parser, Unterminated, DatumReference, p_o, p_e, not_p, not_close, glob, sexp_or_atom, sexp, symbol, symbols, identifiers, let_value, syntax_rules, def_lambda_re, non_def, let_re, comment_re, fold_case_mapping, _nil, repr, props, array_methods, str_mapping, instances, native_types, truncate, macro, recur_guard, SyntaxParameter, __context__, __fn__, __data__, __ref__, __cycles__, __class__, __method__, __prototype__, __lambda__, exluded_names, single_math_op, binary_math_op, ignore, _keys, wrap, _iterator10, _step10, key, matrix, mapping, rev_mapping, pow, exp_op, toRational, BufferedOutputPort, binary_port, text_port, eof, IgnoreException, native_lambda, get2, internal_env, nan, constants, global_env, user_env, noop, node_ready, _p_name__, Parameter, LambdaContext, Continuation, compile, exec, current_script, serialization_map, available_class, class_map, _Object$entries3$_i, i, cls, _i6, _Object$entries3, cbor, MAGIC_LENGTH, currentScript, banner, version, date, parse, lips;
var init_lips_esm_min = __esm({
  "node_modules/.pnpm/@jcubic+lips@https+++codeload.github.com+jcubic+lips+tar.gz+876af5394f85e7b720f9a62545c19864bc1fe409/node_modules/@jcubic/lips/dist/lips.esm.min.js"() {
    AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
      return this;
    }, AsyncGenerator.prototype.next = function(e75) {
      return this._invoke("next", e75);
    }, AsyncGenerator.prototype["throw"] = function(e75) {
      return this._invoke("throw", e75);
    }, AsyncGenerator.prototype["return"] = function(e75) {
      return this._invoke("return", e75);
    };
    regeneratorRuntime$1 = { exports: {} };
    _typeof = { exports: {} };
    regeneratorExports = requireRegenerator();
    _regeneratorRuntime = getDefaultExportFromCjs(regeneratorExports);
    try {
      decoder = new TextDecoder();
    } catch (e75) {
    }
    position$1 = 0;
    LEGACY_RECORD_INLINE_ID = 105;
    RECORD_DEFINITIONS_ID = 57342;
    RECORD_INLINE_ID = 57343;
    BUNDLED_STRINGS_ID = 57337;
    PACKED_REFERENCE_TAG_ID = 6;
    STOP_CODE = {};
    maxArraySize = 11281e4;
    maxMapSize = 1681e4;
    currentDecoder = {};
    srcStringStart = 0;
    srcStringEnd = 0;
    currentExtensions = [];
    currentExtensionRanges = [];
    defaultOptions = { useRecords: false, mapsAsObjects: true };
    sequentialMode = false;
    inlineObjectReadThreshold = 2;
    try {
      new Function("");
    } catch (e75) {
      inlineObjectReadThreshold = Infinity;
    }
    Decoder = class _Decoder {
      constructor(r) {
        if (r) {
          if ((r.keyMap || r._keyMap) && !r.useRecords) {
            r.useRecords = false;
            r.mapsAsObjects = true;
          }
          if (r.useRecords === false && r.mapsAsObjects === void 0) r.mapsAsObjects = true;
          if (r.getStructures) r.getShared = r.getStructures;
          if (r.getShared && !r.structures) (r.structures = []).uninitialized = true;
          if (r.keyMap) {
            this.mapKey = /* @__PURE__ */ new Map();
            for (let [e75, t2] of Object.entries(r.keyMap)) this.mapKey.set(t2, e75);
          }
        }
        Object.assign(this, r);
      }
      decodeKey(e75) {
        return this.keyMap ? this.mapKey.get(e75) || e75 : e75;
      }
      encodeKey(e75) {
        return this.keyMap && this.keyMap.hasOwnProperty(e75) ? this.keyMap[e75] : e75;
      }
      encodeKeys(r) {
        if (!this._keyMap) return r;
        let n = /* @__PURE__ */ new Map();
        for (let [e75, t2] of Object.entries(r)) n.set(this._keyMap.hasOwnProperty(e75) ? this._keyMap[e75] : e75, t2);
        return n;
      }
      decodeKeys(e75) {
        if (!this._keyMap || e75.constructor.name != "Map") return e75;
        if (!this._mapKey) {
          this._mapKey = /* @__PURE__ */ new Map();
          for (let [e76, t2] of Object.entries(this._keyMap)) this._mapKey.set(t2, e76);
        }
        let r = {};
        e75.forEach((e76, t2) => r[safeKey(this._mapKey.has(t2) ? this._mapKey.get(t2) : t2)] = e76);
        return r;
      }
      mapDecode(e75, t2) {
        let r = this.decode(e75);
        if (this._keyMap) {
          switch (r.constructor.name) {
            case "Array":
              return r.map((e76) => this.decodeKeys(e76));
          }
        }
        return r;
      }
      decode(t2, e75) {
        if (src) {
          return saveState(() => {
            clearSource();
            return this ? this.decode(t2, e75) : _Decoder.prototype.decode.call(defaultOptions, t2, e75);
          });
        }
        srcEnd = e75 > -1 ? e75 : t2.length;
        position$1 = 0;
        srcStringEnd = 0;
        srcString = null;
        bundledStrings$1 = null;
        src = t2;
        try {
          dataView = t2.dataView || (t2.dataView = new DataView(t2.buffer, t2.byteOffset, t2.byteLength));
        } catch (e76) {
          src = null;
          if (t2 instanceof Uint8Array) throw e76;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (t2 && typeof t2 == "object" ? t2.constructor.name : typeof t2));
        }
        if (this instanceof _Decoder) {
          currentDecoder = this;
          packedValues = this.sharedValues && (this.pack ? new Array(this.maxPrivatePackedValues || 16).concat(this.sharedValues) : this.sharedValues);
          if (this.structures) {
            currentStructures = this.structures;
            return checkedRead();
          } else if (!currentStructures || currentStructures.length > 0) {
            currentStructures = [];
          }
        } else {
          currentDecoder = defaultOptions;
          if (!currentStructures || currentStructures.length > 0) currentStructures = [];
          packedValues = null;
        }
        return checkedRead();
      }
      decodeMultiple(r, n) {
        let i, a = 0;
        try {
          let e75 = r.length;
          sequentialMode = true;
          let t2 = this ? this.decode(r, e75) : defaultDecoder.decode(r, e75);
          if (n) {
            if (n(t2) === false) {
              return;
            }
            while (position$1 < e75) {
              a = position$1;
              if (n(checkedRead()) === false) {
                return;
              }
            }
          } else {
            i = [t2];
            while (position$1 < e75) {
              a = position$1;
              i.push(checkedRead());
            }
            return i;
          }
        } catch (e75) {
          e75.lastPosition = a;
          e75.values = i;
          throw e75;
        } finally {
          sequentialMode = false;
          clearSource();
        }
      }
    };
    validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
    readFixedString = readStringJS;
    fromCharCode = String.fromCharCode;
    f32Array = new Float32Array(1);
    u8Array = new Uint8Array(f32Array.buffer, 0, 4);
    new Array(4096);
    Tag = class {
      constructor(e75, t2) {
        this.value = e75;
        this.tag = t2;
      }
    };
    currentExtensions[0] = (e75) => {
      return new Date(e75);
    };
    currentExtensions[1] = (e75) => {
      return new Date(Math.round(e75 * 1e3));
    };
    currentExtensions[2] = (r) => {
      let n = BigInt(0);
      for (let e75 = 0, t2 = r.byteLength; e75 < t2; e75++) {
        n = BigInt(r[e75]) + (n << BigInt(8));
      }
      return n;
    };
    currentExtensions[3] = (e75) => {
      return BigInt(-1) - currentExtensions[2](e75);
    };
    currentExtensions[4] = (e75) => {
      return +(e75[1] + "e" + e75[0]);
    };
    currentExtensions[5] = (e75) => {
      return e75[1] * Math.exp(e75[0] * Math.log(2));
    };
    recordDefinition = (e75, t2) => {
      e75 = e75 - 57344;
      let r = currentStructures[e75];
      if (r && r.isShared) {
        (currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[e75] = r;
      }
      currentStructures[e75] = t2;
      t2.read = createStructureReader(t2);
    };
    currentExtensions[LEGACY_RECORD_INLINE_ID] = (r) => {
      let e75 = r.length;
      let n = r[1];
      recordDefinition(r[0], n);
      let i = {};
      for (let t2 = 2; t2 < e75; t2++) {
        let e76 = n[t2 - 2];
        i[safeKey(e76)] = r[t2];
      }
      return i;
    };
    currentExtensions[14] = (e75) => {
      if (bundledStrings$1) return bundledStrings$1[0].slice(bundledStrings$1.position0, bundledStrings$1.position0 += e75);
      return new Tag(e75, 14);
    };
    currentExtensions[15] = (e75) => {
      if (bundledStrings$1) return bundledStrings$1[1].slice(bundledStrings$1.position1, bundledStrings$1.position1 += e75);
      return new Tag(e75, 15);
    };
    glbl = { Error, RegExp };
    currentExtensions[27] = (e75) => {
      return (glbl[e75[0]] || Error)(e75[1], e75[2]);
    };
    packedTable = (e75) => {
      if (src[position$1++] != 132) {
        let e76 = new Error("Packed values structure must be followed by a 4 element array");
        if (src.length < position$1) e76.incomplete = true;
        throw e76;
      }
      let t2 = e75();
      if (!t2 || !t2.length) {
        let e76 = new Error("Packed values structure must be followed by a 4 element array");
        e76.incomplete = true;
        throw e76;
      }
      packedValues = packedValues ? t2.concat(packedValues.slice(t2.length)) : t2;
      packedValues.prefixes = e75();
      packedValues.suffixes = e75();
      return e75();
    };
    packedTable.handlesRead = true;
    currentExtensions[51] = packedTable;
    currentExtensions[PACKED_REFERENCE_TAG_ID] = (e75) => {
      if (!packedValues) {
        if (currentDecoder.getShared) loadShared();
        else return new Tag(e75, PACKED_REFERENCE_TAG_ID);
      }
      if (typeof e75 == "number") return packedValues[16 + (e75 >= 0 ? 2 * e75 : -2 * e75 - 1)];
      let t2 = new Error("No support for non-integer packed references yet");
      if (e75 === void 0) t2.incomplete = true;
      throw t2;
    };
    currentExtensions[28] = (e75) => {
      if (!referenceMap) {
        referenceMap = /* @__PURE__ */ new Map();
        referenceMap.id = 0;
      }
      let t2 = referenceMap.id++;
      let r = position$1;
      let n = src[position$1];
      let i;
      if (n >> 5 == 4) i = [];
      else i = {};
      let a = { target: i };
      referenceMap.set(t2, a);
      let o = e75();
      if (a.used) {
        if (Object.getPrototypeOf(i) !== Object.getPrototypeOf(o)) {
          position$1 = r;
          i = o;
          referenceMap.set(t2, { target: i });
          o = e75();
        }
        return Object.assign(i, o);
      }
      a.target = o;
      return o;
    };
    currentExtensions[28].handlesRead = true;
    currentExtensions[29] = (e75) => {
      let t2 = referenceMap.get(e75);
      t2.used = true;
      return t2.target;
    };
    currentExtensions[258] = (e75) => new Set(e75);
    (currentExtensions[259] = (e75) => {
      if (currentDecoder.mapsAsObjects) {
        currentDecoder.mapsAsObjects = false;
        restoreMapsAsObject = true;
      }
      return e75();
    }).handlesRead = true;
    SHARED_DATA_TAG_ID = 1399353956;
    currentExtensionRanges.push((e75, t2) => {
      if (e75 >= 225 && e75 <= 255) return combine(getPackedValues().prefixes[e75 - 224], t2);
      if (e75 >= 28704 && e75 <= 32767) return combine(getPackedValues().prefixes[e75 - 28672], t2);
      if (e75 >= 1879052288 && e75 <= 2147483647) return combine(getPackedValues().prefixes[e75 - 1879048192], t2);
      if (e75 >= 216 && e75 <= 223) return combine(t2, getPackedValues().suffixes[e75 - 216]);
      if (e75 >= 27647 && e75 <= 28671) return combine(t2, getPackedValues().suffixes[e75 - 27639]);
      if (e75 >= 1811940352 && e75 <= 1879048191) return combine(t2, getPackedValues().suffixes[e75 - 1811939328]);
      if (e75 == SHARED_DATA_TAG_ID) {
        return { packedValues, structures: currentStructures.slice(0), version: t2 };
      }
      if (e75 == 55799) return t2;
    });
    isLittleEndianMachine$1 = new Uint8Array(new Uint16Array([1]).buffer)[0] == 1;
    typedArrays = [Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, typeof BigUint64Array == "undefined" ? { name: "BigUint64Array" } : BigUint64Array, Int8Array, Int16Array, Int32Array, typeof BigInt64Array == "undefined" ? { name: "BigInt64Array" } : BigInt64Array, Float32Array, Float64Array];
    typedArrayTags = [64, 68, 69, 70, 71, 72, 77, 78, 79, 85, 86];
    for (let e75 = 0; e75 < typedArrays.length; e75++) {
      registerTypedArray(typedArrays[e75], typedArrayTags[e75]);
    }
    mult10 = new Array(147);
    for (let e75 = 0; e75 < 256; e75++) {
      mult10[e75] = +("1e" + Math.floor(45.15 - e75 * 0.30103));
    }
    defaultDecoder = new Decoder({ useRecords: false });
    defaultDecoder.decode;
    defaultDecoder.decodeMultiple;
    try {
      textEncoder = new TextEncoder();
    } catch (e75) {
    }
    Buffer$1 = typeof globalThis === "object" && globalThis.Buffer;
    hasNodeBuffer = typeof Buffer$1 !== "undefined";
    ByteArrayAllocate = hasNodeBuffer ? Buffer$1.allocUnsafeSlow : Uint8Array;
    ByteArray = hasNodeBuffer ? Buffer$1 : Uint8Array;
    MAX_STRUCTURES = 256;
    MAX_BUFFER_SIZE = hasNodeBuffer ? 4294967296 : 2144337920;
    position = 0;
    bundledStrings = null;
    MAX_BUNDLE_SIZE = 61440;
    hasNonLatin = /[\u0080-\uFFFF]/;
    RECORD_SYMBOL = Symbol("record-id");
    Encoder = class extends Decoder {
      constructor(r) {
        super(r);
        this.offset = 0;
        let s;
        let o;
        let c;
        let l;
        let n;
        r = r || {};
        let f = ByteArray.prototype.utf8Write ? function(e76, t2, r2) {
          return target.utf8Write(e76, t2, r2);
        } : textEncoder && textEncoder.encodeInto ? function(e76, t2) {
          return textEncoder.encodeInto(e76, target.subarray(t2)).written;
        } : false;
        let a = this;
        let e75 = r.structures || r.saveStructures;
        let _ = r.maxSharedStructures;
        if (_ == null) _ = e75 ? 128 : 0;
        if (_ > 8190) throw new Error("Maximum maxSharedStructure is 8190");
        let i = r.sequential;
        if (i) {
          _ = 0;
        }
        if (!this.structures) this.structures = [];
        if (this.saveStructures) this.saveShared = this.saveStructures;
        let p, d, u = r.sharedValues;
        let h;
        if (u) {
          h = /* @__PURE__ */ Object.create(null);
          for (let e76 = 0, t2 = u.length; e76 < t2; e76++) {
            h[u[e76]] = e76;
          }
        }
        let m = [];
        let y = 0;
        let v = 0;
        this.mapEncode = function(e76, t2) {
          if (this._keyMap && !this._mapped) {
            switch (e76.constructor.name) {
              case "Array":
                e76 = e76.map((e77) => this.encodeKeys(e77));
                break;
            }
          }
          return this.encode(e76, t2);
        };
        this.encode = function(t2, e76) {
          if (!target) {
            target = new ByteArrayAllocate(8192);
            targetView = new DataView(target.buffer, 0, 8192);
            position = 0;
          }
          safeEnd = target.length - 10;
          if (safeEnd - position < 2048) {
            target = new ByteArrayAllocate(target.length);
            targetView = new DataView(target.buffer, 0, target.length);
            safeEnd = target.length - 10;
            position = 0;
          } else if (e76 === REUSE_BUFFER_MODE) position = position + 7 & 2147483640;
          s = position;
          if (a.useSelfDescribedHeader) {
            targetView.setUint32(position, 3654940416);
            position += 3;
          }
          n = a.structuredClone ? /* @__PURE__ */ new Map() : null;
          if (a.bundleStrings && typeof t2 !== "string") {
            bundledStrings = [];
            bundledStrings.size = Infinity;
          } else bundledStrings = null;
          o = a.structures;
          if (o) {
            if (o.uninitialized) {
              let e78 = a.getShared() || {};
              a.structures = o = e78.structures || [];
              a.sharedVersion = e78.version;
              let r2 = a.sharedValues = e78.packedValues;
              if (r2) {
                h = {};
                for (let e79 = 0, t3 = r2.length; e79 < t3; e79++) h[r2[e79]] = e79;
              }
            }
            let e77 = o.length;
            if (e77 > _ && !i) e77 = _;
            if (!o.transitions) {
              o.transitions = /* @__PURE__ */ Object.create(null);
              for (let a2 = 0; a2 < e77; a2++) {
                let r2 = o[a2];
                if (!r2) continue;
                let n2, i2 = o.transitions;
                for (let t3 = 0, e78 = r2.length; t3 < e78; t3++) {
                  if (i2[RECORD_SYMBOL] === void 0) i2[RECORD_SYMBOL] = a2;
                  let e79 = r2[t3];
                  n2 = i2[e79];
                  if (!n2) {
                    n2 = i2[e79] = /* @__PURE__ */ Object.create(null);
                  }
                  i2 = n2;
                }
                i2[RECORD_SYMBOL] = a2 | 1048576;
              }
            }
            if (!i) o.nextId = e77;
          }
          if (c) c = false;
          l = o || [];
          d = h;
          if (r.pack) {
            let e77 = /* @__PURE__ */ new Map();
            e77.values = [];
            e77.encoder = a;
            e77.maxValues = r.maxPrivatePackedValues || (h ? 16 : Infinity);
            e77.objectMap = h || false;
            e77.samplingPackedValues = p;
            findRepetitiveStrings(t2, e77);
            if (e77.values.length > 0) {
              target[position++] = 216;
              target[position++] = 51;
              writeArrayHeader(4);
              let r2 = e77.values;
              b(r2);
              writeArrayHeader(0);
              writeArrayHeader(0);
              d = Object.create(h || null);
              for (let e78 = 0, t3 = r2.length; e78 < t3; e78++) {
                d[r2[e78]] = e78;
              }
            }
          }
          throwOnIterable = e76 & THROW_ON_ITERABLE;
          try {
            if (throwOnIterable) return;
            b(t2);
            if (bundledStrings) {
              writeBundles(s, b);
            }
            a.offset = position;
            if (n && n.idsToInsert) {
              position += n.idsToInsert.length * 2;
              if (position > safeEnd) w(position);
              a.offset = position;
              let e77 = insertIds(target.subarray(s, position), n.idsToInsert);
              n = null;
              return e77;
            }
            if (e76 & REUSE_BUFFER_MODE) {
              target.start = s;
              target.end = position;
              return target;
            }
            return target.subarray(s, position);
          } finally {
            if (o) {
              if (v < 10) v++;
              if (o.length > _) o.length = _;
              if (y > 1e4) {
                o.transitions = null;
                v = 0;
                y = 0;
                if (m.length > 0) m = [];
              } else if (m.length > 0 && !i) {
                for (let e77 = 0, t3 = m.length; e77 < t3; e77++) {
                  m[e77][RECORD_SYMBOL] = void 0;
                }
                m = [];
              }
            }
            if (c && a.saveShared) {
              if (a.structures.length > _) {
                a.structures = a.structures.slice(0, _);
              }
              let e77 = target.subarray(s, position);
              if (a.updateSharedData() === false) return a.encode(t2);
              return e77;
            }
            if (e76 & RESET_BUFFER_MODE) position = s;
          }
        };
        this.findCommonStringsToPack = () => {
          p = /* @__PURE__ */ new Map();
          if (!h) h = /* @__PURE__ */ Object.create(null);
          return (e76) => {
            let r2 = e76 && e76.threshold || 4;
            let n2 = this.pack ? e76.maxPrivatePackedValues || 16 : 0;
            if (!u) u = this.sharedValues = [];
            for (let [e77, t2] of p) {
              if (t2.count > r2) {
                h[e77] = n2++;
                u.push(e77);
                c = true;
              }
            }
            while (this.saveShared && this.updateSharedData() === false) {
            }
            p = null;
          };
        };
        const b = (o2) => {
          if (position > safeEnd) target = w(position);
          var e76 = typeof o2;
          var u2;
          if (e76 === "string") {
            if (d) {
              let e78 = d[o2];
              if (e78 >= 0) {
                if (e78 < 16) target[position++] = e78 + 224;
                else {
                  target[position++] = 198;
                  if (e78 & 1) b(15 - e78 >> 1);
                  else b(e78 - 16 >> 1);
                }
                return;
              } else if (p && !r.pack) {
                let e79 = p.get(o2);
                if (e79) e79.count++;
                else p.set(o2, { count: 1 });
              }
            }
            let i2 = o2.length;
            if (bundledStrings && i2 >= 4 && i2 < 1024) {
              if ((bundledStrings.size += i2) > MAX_BUNDLE_SIZE) {
                let e79;
                let t2 = (bundledStrings[0] ? bundledStrings[0].length * 3 + bundledStrings[1].length : 0) + 10;
                if (position + t2 > safeEnd) target = w(position + t2);
                target[position++] = 217;
                target[position++] = 223;
                target[position++] = 249;
                target[position++] = bundledStrings.position ? 132 : 130;
                target[position++] = 26;
                e79 = position - s;
                position += 4;
                if (bundledStrings.position) {
                  writeBundles(s, b);
                }
                bundledStrings = ["", ""];
                bundledStrings.size = 0;
                bundledStrings.position = e79;
              }
              let e78 = hasNonLatin.test(o2);
              bundledStrings[e78 ? 0 : 1] += o2;
              target[position++] = e78 ? 206 : 207;
              b(i2);
              return;
            }
            let a2;
            if (i2 < 32) {
              a2 = 1;
            } else if (i2 < 256) {
              a2 = 2;
            } else if (i2 < 65536) {
              a2 = 3;
            } else {
              a2 = 5;
            }
            let e77 = i2 * 3;
            if (position + e77 > safeEnd) target = w(position + e77);
            if (i2 < 64 || !f) {
              let e78, t2, r2, n2 = position + a2;
              for (e78 = 0; e78 < i2; e78++) {
                t2 = o2.charCodeAt(e78);
                if (t2 < 128) {
                  target[n2++] = t2;
                } else if (t2 < 2048) {
                  target[n2++] = t2 >> 6 | 192;
                  target[n2++] = t2 & 63 | 128;
                } else if ((t2 & 64512) === 55296 && ((r2 = o2.charCodeAt(e78 + 1)) & 64512) === 56320) {
                  t2 = 65536 + ((t2 & 1023) << 10) + (r2 & 1023);
                  e78++;
                  target[n2++] = t2 >> 18 | 240;
                  target[n2++] = t2 >> 12 & 63 | 128;
                  target[n2++] = t2 >> 6 & 63 | 128;
                  target[n2++] = t2 & 63 | 128;
                } else {
                  target[n2++] = t2 >> 12 | 224;
                  target[n2++] = t2 >> 6 & 63 | 128;
                  target[n2++] = t2 & 63 | 128;
                }
              }
              u2 = n2 - position - a2;
            } else {
              u2 = f(o2, position + a2, e77);
            }
            if (u2 < 24) {
              target[position++] = 96 | u2;
            } else if (u2 < 256) {
              if (a2 < 2) {
                target.copyWithin(position + 2, position + 1, position + 1 + u2);
              }
              target[position++] = 120;
              target[position++] = u2;
            } else if (u2 < 65536) {
              if (a2 < 3) {
                target.copyWithin(position + 3, position + 2, position + 2 + u2);
              }
              target[position++] = 121;
              target[position++] = u2 >> 8;
              target[position++] = u2 & 255;
            } else {
              if (a2 < 5) {
                target.copyWithin(position + 5, position + 3, position + 3 + u2);
              }
              target[position++] = 122;
              targetView.setUint32(position, u2);
              position += 4;
            }
            position += u2;
          } else if (e76 === "number") {
            if (!this.alwaysUseFloat && o2 >>> 0 === o2) {
              if (o2 < 24) {
                target[position++] = o2;
              } else if (o2 < 256) {
                target[position++] = 24;
                target[position++] = o2;
              } else if (o2 < 65536) {
                target[position++] = 25;
                target[position++] = o2 >> 8;
                target[position++] = o2 & 255;
              } else {
                target[position++] = 26;
                targetView.setUint32(position, o2);
                position += 4;
              }
            } else if (!this.alwaysUseFloat && o2 >> 0 === o2) {
              if (o2 >= -24) {
                target[position++] = 31 - o2;
              } else if (o2 >= -256) {
                target[position++] = 56;
                target[position++] = ~o2;
              } else if (o2 >= -65536) {
                target[position++] = 57;
                targetView.setUint16(position, ~o2);
                position += 2;
              } else {
                target[position++] = 58;
                targetView.setUint32(position, ~o2);
                position += 4;
              }
            } else {
              let t2;
              if ((t2 = this.useFloat32) > 0 && o2 < 4294967296 && o2 >= -2147483648) {
                target[position++] = 250;
                targetView.setFloat32(position, o2);
                let e77;
                if (t2 < 4 || (e77 = o2 * mult10[(target[position] & 127) << 1 | target[position + 1] >> 7]) >> 0 === e77) {
                  position += 4;
                  return;
                } else position--;
              }
              target[position++] = 251;
              targetView.setFloat64(position, o2);
              position += 8;
            }
          } else if (e76 === "object") {
            if (!o2) target[position++] = 246;
            else {
              if (n) {
                let t2 = n.get(o2);
                if (t2) {
                  target[position++] = 216;
                  target[position++] = 29;
                  target[position++] = 25;
                  if (!t2.references) {
                    let e78 = n.idsToInsert || (n.idsToInsert = []);
                    t2.references = [];
                    e78.push(t2);
                  }
                  t2.references.push(position - s);
                  position += 2;
                  return;
                } else n.set(o2, { offset: position - s });
              }
              let e77 = o2.constructor;
              if (e77 === Object) {
                g(o2);
              } else if (e77 === Array) {
                u2 = o2.length;
                if (u2 < 24) {
                  target[position++] = 128 | u2;
                } else {
                  writeArrayHeader(u2);
                }
                for (let e78 = 0; e78 < u2; e78++) {
                  b(o2[e78]);
                }
              } else if (e77 === Map) {
                if (this.mapsAsObjects ? this.useTag259ForMaps !== false : this.useTag259ForMaps) {
                  target[position++] = 217;
                  target[position++] = 1;
                  target[position++] = 3;
                }
                u2 = o2.size;
                if (u2 < 24) {
                  target[position++] = 160 | u2;
                } else if (u2 < 256) {
                  target[position++] = 184;
                  target[position++] = u2;
                } else if (u2 < 65536) {
                  target[position++] = 185;
                  target[position++] = u2 >> 8;
                  target[position++] = u2 & 255;
                } else {
                  target[position++] = 186;
                  targetView.setUint32(position, u2);
                  position += 4;
                }
                if (a.keyMap) {
                  for (let [e78, t2] of o2) {
                    b(a.encodeKey(e78));
                    b(t2);
                  }
                } else {
                  for (let [e78, t2] of o2) {
                    b(e78);
                    b(t2);
                  }
                }
              } else {
                for (let r2 = 0, e78 = extensions.length; r2 < e78; r2++) {
                  let e79 = extensionClasses[r2];
                  if (o2 instanceof e79) {
                    let e80 = extensions[r2];
                    let t2 = e80.tag;
                    if (t2 == void 0) t2 = e80.getTag && e80.getTag.call(this, o2);
                    if (t2 < 24) {
                      target[position++] = 192 | t2;
                    } else if (t2 < 256) {
                      target[position++] = 216;
                      target[position++] = t2;
                    } else if (t2 < 65536) {
                      target[position++] = 217;
                      target[position++] = t2 >> 8;
                      target[position++] = t2 & 255;
                    } else if (t2 > -1) {
                      target[position++] = 218;
                      targetView.setUint32(position, t2);
                      position += 4;
                    }
                    e80.encode.call(this, o2, b, w);
                    return;
                  }
                }
                if (o2[Symbol.iterator]) {
                  if (throwOnIterable) {
                    let e78 = new Error("Iterable should be serialized as iterator");
                    e78.iteratorNotHandled = true;
                    throw e78;
                  }
                  target[position++] = 159;
                  for (let e78 of o2) {
                    b(e78);
                  }
                  target[position++] = 255;
                  return;
                }
                if (o2[Symbol.asyncIterator] || isBlob(o2)) {
                  let e78 = new Error("Iterable/blob should be serialized as iterator");
                  e78.iteratorNotHandled = true;
                  throw e78;
                }
                if (this.useToJSON && o2.toJSON) {
                  const t2 = o2.toJSON();
                  if (t2 !== o2) return b(t2);
                }
                g(o2);
              }
            }
          } else if (e76 === "boolean") {
            target[position++] = o2 ? 245 : 244;
          } else if (e76 === "bigint") {
            if (o2 < BigInt(1) << BigInt(64) && o2 >= 0) {
              target[position++] = 27;
              targetView.setBigUint64(position, o2);
            } else if (o2 > -(BigInt(1) << BigInt(64)) && o2 < 0) {
              target[position++] = 59;
              targetView.setBigUint64(position, -o2 - BigInt(1));
            } else {
              if (this.largeBigIntToFloat) {
                target[position++] = 251;
                targetView.setFloat64(position, Number(o2));
              } else {
                if (o2 >= BigInt(0)) target[position++] = 194;
                else {
                  target[position++] = 195;
                  o2 = BigInt(-1) - o2;
                }
                let e77 = [];
                while (o2) {
                  e77.push(Number(o2 & BigInt(255)));
                  o2 >>= BigInt(8);
                }
                writeBuffer(new Uint8Array(e77.reverse()), w);
                return;
              }
            }
            position += 8;
          } else if (e76 === "undefined") {
            target[position++] = 247;
          } else {
            throw new Error("Unknown type: " + e76);
          }
        };
        const g = this.useRecords === false ? this.variableMapSize ? (e76) => {
          let t2 = Object.keys(e76);
          let r2 = Object.values(e76);
          let n2 = t2.length;
          if (n2 < 24) {
            target[position++] = 160 | n2;
          } else if (n2 < 256) {
            target[position++] = 184;
            target[position++] = n2;
          } else if (n2 < 65536) {
            target[position++] = 185;
            target[position++] = n2 >> 8;
            target[position++] = n2 & 255;
          } else {
            target[position++] = 186;
            targetView.setUint32(position, n2);
            position += 4;
          }
          if (a.keyMap) {
            for (let e77 = 0; e77 < n2; e77++) {
              b(a.encodeKey(t2[e77]));
              b(r2[e77]);
            }
          } else {
            for (let e77 = 0; e77 < n2; e77++) {
              b(t2[e77]);
              b(r2[e77]);
            }
          }
        } : (t2) => {
          target[position++] = 185;
          let e76 = position - s;
          position += 2;
          let r2 = 0;
          if (a.keyMap) {
            for (let e77 in t2) if (typeof t2.hasOwnProperty !== "function" || t2.hasOwnProperty(e77)) {
              b(a.encodeKey(e77));
              b(t2[e77]);
              r2++;
            }
          } else {
            for (let e77 in t2) if (typeof t2.hasOwnProperty !== "function" || t2.hasOwnProperty(e77)) {
              b(e77);
              b(t2[e77]);
              r2++;
            }
          }
          target[e76++ + s] = r2 >> 8;
          target[e76 + s] = r2 & 255;
        } : (t2, e76) => {
          let r2, n2 = l.transitions || (l.transitions = /* @__PURE__ */ Object.create(null));
          let i2 = 0;
          let a2 = 0;
          let o2;
          let u2;
          if (this.keyMap) {
            u2 = Object.keys(t2).map((e77) => this.encodeKey(e77));
            a2 = u2.length;
            for (let t3 = 0; t3 < a2; t3++) {
              let e77 = u2[t3];
              r2 = n2[e77];
              if (!r2) {
                r2 = n2[e77] = /* @__PURE__ */ Object.create(null);
                i2++;
              }
              n2 = r2;
            }
          } else {
            for (let e77 in t2) if (typeof t2.hasOwnProperty !== "function" || t2.hasOwnProperty(e77)) {
              r2 = n2[e77];
              if (!r2) {
                if (n2[RECORD_SYMBOL] & 1048576) {
                  o2 = n2[RECORD_SYMBOL] & 65535;
                }
                r2 = n2[e77] = /* @__PURE__ */ Object.create(null);
                i2++;
              }
              n2 = r2;
              a2++;
            }
          }
          let s2 = n2[RECORD_SYMBOL];
          if (s2 !== void 0) {
            s2 &= 65535;
            target[position++] = 217;
            target[position++] = s2 >> 8 | 224;
            target[position++] = s2 & 255;
          } else {
            if (!u2) u2 = n2.__keys__ || (n2.__keys__ = Object.keys(t2));
            if (o2 === void 0) {
              s2 = l.nextId++;
              if (!s2) {
                s2 = 0;
                l.nextId = 1;
              }
              if (s2 >= MAX_STRUCTURES) {
                l.nextId = (s2 = _) + 1;
              }
            } else {
              s2 = o2;
            }
            l[s2] = u2;
            if (s2 < _) {
              target[position++] = 217;
              target[position++] = s2 >> 8 | 224;
              target[position++] = s2 & 255;
              n2 = l.transitions;
              for (let e77 = 0; e77 < a2; e77++) {
                if (n2[RECORD_SYMBOL] === void 0 || n2[RECORD_SYMBOL] & 1048576) n2[RECORD_SYMBOL] = s2;
                n2 = n2[u2[e77]];
              }
              n2[RECORD_SYMBOL] = s2 | 1048576;
              c = true;
            } else {
              n2[RECORD_SYMBOL] = s2;
              targetView.setUint32(position, 3655335680);
              position += 3;
              if (i2) y += v * i2;
              if (m.length >= MAX_STRUCTURES - _) m.shift()[RECORD_SYMBOL] = void 0;
              m.push(n2);
              writeArrayHeader(a2 + 2);
              b(57344 + s2);
              b(u2);
              if (e76) return;
              for (let e77 in t2) if (typeof t2.hasOwnProperty !== "function" || t2.hasOwnProperty(e77)) b(t2[e77]);
              return;
            }
          }
          if (a2 < 24) {
            target[position++] = 128 | a2;
          } else {
            writeArrayHeader(a2);
          }
          if (e76) return;
          for (let e77 in t2) if (typeof t2.hasOwnProperty !== "function" || t2.hasOwnProperty(e77)) b(t2[e77]);
        };
        const w = (e76) => {
          let t2;
          if (e76 > 16777216) {
            if (e76 - s > MAX_BUFFER_SIZE) throw new Error("Encoded buffer would be larger than maximum buffer size");
            t2 = Math.min(MAX_BUFFER_SIZE, Math.round(Math.max((e76 - s) * (e76 > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096);
          } else t2 = (Math.max(e76 - s << 2, target.length - 1) >> 12) + 1 << 12;
          let r2 = new ByteArrayAllocate(t2);
          targetView = new DataView(r2.buffer, 0, t2);
          if (target.copy) target.copy(r2, 0, s, e76);
          else r2.set(target.slice(s, e76));
          position -= s;
          s = 0;
          safeEnd = r2.length - 10;
          return target = r2;
        };
        let D = 100;
        let x = 1e3;
        this.encodeAsIterable = function(e76, t2) {
          return A(e76, t2, L);
        };
        this.encodeAsAsyncIterable = function(e76, t2) {
          return A(e76, t2, F);
        };
        function* L(n2, i2, e76) {
          let t2 = n2.constructor;
          if (t2 === Object) {
            let r2 = a.useRecords !== false;
            if (r2) g(n2, true);
            else writeEntityLength(Object.keys(n2).length, 160);
            for (let t3 in n2) {
              let e77 = n2[t3];
              if (!r2) b(t3);
              if (e77 && typeof e77 === "object") {
                if (i2[t3]) yield* L(e77, i2[t3]);
                else yield* E(e77, i2, t3);
              } else b(e77);
            }
          } else if (t2 === Array) {
            let e77 = n2.length;
            writeArrayHeader(e77);
            for (let t3 = 0; t3 < e77; t3++) {
              let e78 = n2[t3];
              if (e78 && (typeof e78 === "object" || position - s > D)) {
                if (i2.element) yield* L(e78, i2.element);
                else yield* E(e78, i2, "element");
              } else b(e78);
            }
          } else if (n2[Symbol.iterator] && !n2.buffer) {
            target[position++] = 159;
            for (let e77 of n2) {
              if (e77 && (typeof e77 === "object" || position - s > D)) {
                if (i2.element) yield* L(e77, i2.element);
                else yield* E(e77, i2, "element");
              } else b(e77);
            }
            target[position++] = 255;
          } else if (isBlob(n2)) {
            writeEntityLength(n2.size, 64);
            yield target.subarray(s, position);
            yield n2;
            S();
          } else if (n2[Symbol.asyncIterator]) {
            target[position++] = 159;
            yield target.subarray(s, position);
            yield n2;
            S();
            target[position++] = 255;
          } else {
            b(n2);
          }
          if (e76 && position > s) yield target.subarray(s, position);
          else if (position - s > D) {
            yield target.subarray(s, position);
            S();
          }
        }
        function* E(t2, r2, n2) {
          let i2 = position - s;
          try {
            b(t2);
            if (position - s > D) {
              yield target.subarray(s, position);
              S();
            }
          } catch (e76) {
            if (e76.iteratorNotHandled) {
              r2[n2] = {};
              position = s + i2;
              yield* L.call(this, t2, r2[n2]);
            } else throw e76;
          }
        }
        function S() {
          D = x;
          a.encode(null, THROW_ON_ITERABLE);
        }
        function A(e76, t2, r2) {
          if (t2 && t2.chunkThreshold) D = x = t2.chunkThreshold;
          else D = 100;
          if (e76 && typeof e76 === "object") {
            a.encode(null, THROW_ON_ITERABLE);
            return r2(e76, a.iterateProperties || (a.iterateProperties = {}), true);
          }
          return [a.encode(e76)];
        }
        async function* F(e76, t2) {
          for (let r2 of L(e76, t2, true)) {
            let e77 = r2.constructor;
            if (e77 === ByteArray || e77 === Uint8Array) yield r2;
            else if (isBlob(r2)) {
              let e78 = r2.stream().getReader();
              let t3;
              while (!(t3 = await e78.read()).done) {
                yield t3.value;
              }
            } else if (r2[Symbol.asyncIterator]) {
              for await (let e78 of r2) {
                S();
                if (e78) yield* F(e78, t2.async || (t2.async = {}));
                else yield a.encode(e78);
              }
            } else {
              yield r2;
            }
          }
        }
      }
      useBuffer(e75) {
        target = e75;
        targetView = new DataView(target.buffer, target.byteOffset, target.byteLength);
        position = 0;
      }
      clearSharedData() {
        if (this.structures) this.structures = [];
        if (this.sharedValues) this.sharedValues = void 0;
      }
      updateSharedData() {
        let t2 = this.sharedVersion || 0;
        this.sharedVersion = t2 + 1;
        let e75 = this.structures.slice(0);
        let r = new SharedData(e75, this.sharedValues, this.sharedVersion);
        let n = this.saveShared(r, (e76) => (e76 && e76.version || 0) == t2);
        if (n === false) {
          r = this.getShared() || {};
          this.structures = r.structures || [];
          this.sharedValues = r.packedValues;
          this.sharedVersion = r.version;
          this.structures.nextId = this.structures.length;
        } else {
          e75.forEach((e76, t3) => this.structures[t3] = e76);
        }
        return n;
      }
    };
    SharedData = class {
      constructor(e75, t2, r) {
        this.structures = e75;
        this.packedValues = t2;
        this.version = r;
      }
    };
    BlobConstructor = typeof Blob === "undefined" ? function() {
    } : Blob;
    isLittleEndianMachine = new Uint8Array(new Uint16Array([1]).buffer)[0] == 1;
    extensionClasses = [Date, Set, Error, RegExp, Tag, ArrayBuffer, Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, typeof BigUint64Array == "undefined" ? function() {
    } : BigUint64Array, Int8Array, Int16Array, Int32Array, typeof BigInt64Array == "undefined" ? function() {
    } : BigInt64Array, Float32Array, Float64Array, SharedData];
    extensions = [{ tag: 1, encode(e75, t2) {
      let r = e75.getTime() / 1e3;
      if ((this.useTimestamp32 || e75.getMilliseconds() === 0) && r >= 0 && r < 4294967296) {
        target[position++] = 26;
        targetView.setUint32(position, r);
        position += 4;
      } else {
        target[position++] = 251;
        targetView.setFloat64(position, r);
        position += 8;
      }
    } }, { tag: 258, encode(e75, t2) {
      let r = Array.from(e75);
      t2(r);
    } }, { tag: 27, encode(e75, t2) {
      t2([e75.name, e75.message]);
    } }, { tag: 27, encode(e75, t2) {
      t2(["RegExp", e75.source, e75.flags]);
    } }, { getTag(e75) {
      return e75.tag;
    }, encode(e75, t2) {
      t2(e75.value);
    } }, { encode(e75, t2, r) {
      writeBuffer(e75, r);
    } }, { getTag(e75) {
      if (e75.constructor === Uint8Array) {
        if (this.tagUint8Array || hasNodeBuffer && this.tagUint8Array !== false) return 64;
      }
    }, encode(e75, t2, r) {
      writeBuffer(e75, r);
    } }, typedArrayEncoder(68, 1), typedArrayEncoder(69, 2), typedArrayEncoder(70, 4), typedArrayEncoder(71, 8), typedArrayEncoder(72, 1), typedArrayEncoder(77, 2), typedArrayEncoder(78, 4), typedArrayEncoder(79, 8), typedArrayEncoder(85, 4), typedArrayEncoder(86, 8), { encode(t2, n) {
      let e75 = t2.packedValues || [];
      let r = t2.structures || [];
      if (e75.values.length > 0) {
        target[position++] = 216;
        target[position++] = 51;
        writeArrayHeader(4);
        let r2 = e75.values;
        n(r2);
        writeArrayHeader(0);
        writeArrayHeader(0);
        packedObjectMap = Object.create(sharedPackedObjectMap || null);
        for (let e76 = 0, t3 = r2.length; e76 < t3; e76++) {
          packedObjectMap[r2[e76]] = e76;
        }
      }
      if (r) {
        targetView.setUint32(position, 3655335424);
        position += 3;
        let e76 = r.slice(0);
        e76.unshift(57344);
        e76.push(new Tag(t2.version, 1399353956));
        n(e76);
      } else n(new Tag(t2.version, 1399353956));
    } }];
    defaultEncoder = new Encoder({ useRecords: false });
    defaultEncoder.encode;
    defaultEncoder.encodeAsIterable;
    defaultEncoder.encodeAsAsyncIterable;
    REUSE_BUFFER_MODE = 512;
    RESET_BUFFER_MODE = 1024;
    THROW_ON_ITERABLE = 2048;
    lzjbPack = {};
    lzjbPackExports = requireLzjbPack();
    _excluded = ["token"];
    _excluded2 = ["env"];
    _excluded3 = ["stderr", "stdin", "stdout", "command_line"];
    _excluded4 = ["use_dynamic"];
    _excluded5 = ["use_dynamic"];
    _excluded6 = ["env", "dynamic_env", "use_dynamic", "error"];
    root = typeof global !== "undefined" ? global : self;
    if (!root.fetch) {
      root.fetch = e;
    }
    type_mapping = { pair: Pair, symbol: LSymbol, number: LNumber, array: Array, nil: Nil, character: LCharacter, values: Values, "input-port": InputPort, "output-port": OutputPort, regex: RegExp, syntax: Syntax, eof: EOF, macro: Macro, string: LString, "native-symbol": Symbol };
    type_constants = /* @__PURE__ */ new Map([[NaN, "NaN"], [null, "null"]]);
    BN = root.BN;
    re_re = /^#\/((?:\\\/|[^/]|\[[^\]]*\/[^\]]*\])+)\/([gimyus]*)$/;
    float_stre = "(?:[-+]?(?:[0-9]+(?:[eE][-+]?[0-9]+)|(?:\\.[0-9]+|[0-9]+\\.[0-9]+)(?:[eE][-+]?[0-9]+)?)|[0-9]+\\.)";
    complex_float_stre = "(?:#[ie])?(?:[+-]?(?:[0-9][0-9_]*/[0-9][0-9_]*|nan.0|inf.0|".concat(float_stre, "|[+-]?[0-9]+))?(?:").concat(float_stre, "|[+-](?:[0-9]+/[0-9]+|[0-9]+|nan.0|inf.0))i");
    float_re = new RegExp("^(#[ie])?".concat(float_stre, "$"), "i");
    complex_list_re = function() {
      var a = {};
      [[10, "", "[0-9]"], [16, "x", "[0-9a-fA-F]"], [8, "o", "[0-7]"], [2, "b", "[01]"]].forEach(function(e75) {
        var t2 = _slicedToArray(e75, 3), r = t2[0], n = t2[1], i = t2[2];
        a[r] = make_complex_match_re(n, i);
      });
      return a;
    }();
    characters = { alarm: "\x07", backspace: "\b", delete: "", escape: "\x1B", newline: "\n", null: "\0", return: "\r", space: " ", tab: "	", dle: "", soh: "", dc1: "", stx: "", dc2: "", etx: "", dc3: "", eot: "", dc4: "", enq: "", nak: "", ack: "", syn: "", bel: "\x07", etb: "", bs: "\b", can: "", ht: "	", em: "", lf: "\n", sub: "", vt: "\v", esc: "\x1B", ff: "\f", fs: "", cr: "\r", gs: "", so: "", rs: "", si: "", us: "", del: "" };
    character_symbols = Object.keys(characters).join("|");
    char_sre_re = "#\\\\(?:x[0-9a-f]+|".concat(character_symbols, "|[\\s\\S])");
    char_re = new RegExp("^".concat(char_sre_re, "$"), "i");
    complex_re = make_type_re(gen_complex_re);
    rational_re = make_type_re(gen_rational_re);
    int_re = make_type_re(gen_integer_re);
    int_bare_re = new RegExp("^(?:" + gen_integer_re("", "[0-9a-f]") + ")$", "i");
    rational_bare_re = new RegExp("^(?:" + gen_rational_re("", "[0-9a-f]") + ")$", "i");
    complex_bare_re = new RegExp("^(?:" + gen_complex_re("", "[0-9a-f]") + ")$", "i");
    complex_bare_match_re = make_complex_match_re("", "[0-9a-fA-F]");
    pre_num_parse_re = /((?:#[xodbie]){0,2})(.*)/i;
    string_re = /"(?:\\[\S\s]|[^"])*"?/g;
    Stack.prototype.push = function(e75) {
      this.data.push(e75);
    };
    Stack.prototype.top = function() {
      return this.data[this.data.length - 1];
    };
    Stack.prototype.pop = function() {
      return this.data.pop();
    };
    Stack.prototype.is_empty = function() {
      return !this.data.length;
    };
    Thunk.prototype.toString = function() {
      return "#<Thunk>";
    };
    LSymbol.list = {};
    LSymbol.literal = Symbol["for"]("__literal__");
    LSymbol.object = Symbol["for"]("__object__");
    LSymbol.prototype.is_interned = function() {
      return LSymbol.list[this.__name__] == this;
    };
    LSymbol.is = function(e75, t2) {
      return e75 instanceof LSymbol && (t2 instanceof LSymbol && e75.__name__ === t2.__name__ || typeof t2 === "string" && e75.__name__ === t2 || t2 instanceof RegExp && t2.test(e75.__name__));
    };
    LSymbol.prototype.toString = function(e75) {
      if (is_symbol(this.__name__)) {
        return symbol_to_string(this.__name__);
      }
      var t2 = this.valueOf();
      if (e75 && t2.match(/(^;|[\s()[\]'])/)) {
        return "|".concat(t2, "|");
      }
      return t2;
    };
    LSymbol.prototype.literal = function() {
      if (this.is_gensym()) {
        return this[LSymbol.literal];
      }
      return this.valueOf();
    };
    LSymbol.prototype.serialize = function() {
      if (LString.isString(this.__name__)) {
        return this.__name__;
      }
      return [symbol_to_string(this.__name__)];
    };
    LSymbol.prototype.valueOf = function() {
      return this.__name__.valueOf();
    };
    LSymbol.prototype.is_gensym = function() {
      return is_gensym(this.__name__);
    };
    gensym = /* @__PURE__ */ function() {
      var t2 = 0;
      function r(e75, t3) {
        var r2 = new LSymbol(t3, false);
        hidden_prop(r2, "__literal__", e75);
        return r2;
      }
      return function() {
        var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        if (e75 instanceof LSymbol) {
          if (e75.is_gensym()) {
            return e75;
          }
          e75 = e75.valueOf();
        }
        if (is_gensym(e75)) {
          return LSymbol(e75, false);
        }
        if (e75 !== null) {
          return r(e75, Symbol("#:".concat(e75)));
        }
        t2++;
        return r(t2, Symbol("#:g".concat(t2)));
      };
    }();
    QuotedPromise.prototype.then = function(e75) {
      return new QuotedPromise(this.valueOf().then(e75));
    };
    QuotedPromise.prototype["catch"] = function(e75) {
      return new QuotedPromise(this.valueOf()["catch"](e75));
    };
    QuotedPromise.prototype.valueOf = function() {
      if (!this._promise) {
        throw new Error("QuotedPromise: invalid promise created");
      }
      return this._promise;
    };
    QuotedPromise.prototype.toString = function() {
      if (this.__pending__) {
        return QuotedPromise.pending_str;
      }
      if (this.__rejected__) {
        return QuotedPromise.rejected_str;
      }
      return "#<js-promise resolved (".concat(this.__type__, ")>");
    };
    QuotedPromise.pending_str = "#<js-promise (pending)>";
    QuotedPromise.rejected_str = "#<js-promise (rejected)>";
    specials = { LITERAL: Symbol["for"]("literal"), SPLICE: Symbol["for"]("splice"), SYMBOL: Symbol["for"]("symbol"), names: function e2() {
      return Object.keys(this.__list__);
    }, type: function e3(t2) {
      try {
        return this.get(t2).type;
      } catch (e75) {
        console.log({ name: t2 });
        console.log(e75);
        return null;
      }
    }, get: function e4(t2) {
      return this.__list__[t2];
    }, off: function e5(t2) {
      var r = this;
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (Array.isArray(t2)) {
        t2.forEach(function(e75) {
          return r.off(e75, n);
        });
      } else if (n === null) {
        delete this.__events__[t2];
      } else {
        this.__events__ = this.__events__.filter(function(e75) {
          return e75 !== n;
        });
      }
    }, on: function e6(t2, r) {
      var n = this;
      if (Array.isArray(t2)) {
        t2.forEach(function(e75) {
          return n.on(e75, r);
        });
      } else if (!this.__events__[t2]) {
        this.__events__[t2] = [r];
      } else {
        this.__events__[t2].push(r);
      }
    }, trigger: function e7(t2) {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
        n[i - 1] = arguments[i];
      }
      if (this.__events__[t2]) {
        this.__events__[t2].forEach(function(e75) {
          return e75.apply(void 0, n);
        });
      }
    }, remove: function e8(t2) {
      delete this.__list__[t2];
      this.trigger("remove");
    }, append: function e9(t2, r, n) {
      this.__list__[t2] = { seq: t2, symbol: r, type: n };
      this.trigger("append");
    }, __events__: {}, __list__: {} };
    defined_specials = [["'", new LSymbol("quote"), specials.LITERAL], ["`", new LSymbol("quasiquote"), specials.LITERAL], [",@", new LSymbol("unquote-splicing"), specials.LITERAL], [",", new LSymbol("unquote"), specials.LITERAL], ["'>", new LSymbol("quote-promise"), specials.LITERAL]];
    builtins = defined_specials.map(function(e75) {
      return e75[0];
    });
    Object.freeze(builtins);
    Object.defineProperty(specials, "__builtins__", { writable: false, enumerable: true, value: builtins });
    defined_specials.forEach(function(e75) {
      var t2 = _slicedToArray(e75, 3), r = t2[0], n = t2[1], i = t2[2];
      specials.append(r, n, i);
    });
    Lexer = function() {
      function v(e75) {
        var t2 = this;
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.whitespace, i = n === void 0 ? false : n;
        _classCallCheck(this, v);
        read_only(this, "__input__", e75);
        var a = {};
        ["_i", "_whitespace", "_col", "_newline", "_line", "_state", "_next", "_token", "_prev_char"].forEach(function(r2) {
          Object.defineProperty(t2, r2, { configurable: false, enumerable: false, get: function e76() {
            return a[r2];
          }, set: function e76(t3) {
            a[r2] = t3;
          } });
        });
        this._whitespace = i;
        this._i = this._line = this._col = this._newline = 0;
        this._state = this._next = this._token = null;
        this._prev_char = "";
      }
      return _createClass(v, [{ key: "get", value: function e75(t2) {
        return this.__internal[t2];
      } }, { key: "set", value: function e75(t2, r) {
        this.__internal[t2] = r;
      } }, { key: "token", value: function e75() {
        var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (t2) {
          var r = this._line;
          if (this._whitespace && this._token === "\n") {
            --r;
          }
          return { token: this._token, col: this._col, offset: this._i, line: r };
        }
        return this._token;
      } }, { key: "peek", value: function e75() {
        var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (this._i >= this.__input__.length) {
          return eof;
        }
        if (this._token) {
          read_only(this, "__token__", this.token(true));
          return this.token(t2);
        }
        var r = this.next_token();
        if (r) {
          this._token = this.__input__.substring(this._i, this._next);
          if (!this.__token__) {
            read_only(this, "__token__", this.token(true));
          }
          return this.token(t2);
        }
        return eof;
      } }, { key: "skip", value: function e75() {
        if (this._next !== null) {
          this._token = null;
          this._i = this._next;
        }
      } }, { key: "read_line", value: function e75() {
        var t2 = this.__input__.length;
        if (this._i >= t2) {
          return eof;
        }
        for (var r = this._i; r < t2; ++r) {
          var n = this.__input__[r];
          if (n === "\n") {
            var i = this.__input__.substring(this._i, r);
            this._i = r + 1;
            ++this._line;
            return i;
          }
        }
        return this.read_rest();
      } }, { key: "read_rest", value: function e75() {
        var t2 = this._i;
        this._i = this.__input__.length;
        return this.__input__.substring(t2);
      } }, { key: "read_string", value: function e75(t2) {
        var r = this.__input__.length;
        if (this._i >= r) {
          return eof;
        }
        if (t2 + this._i >= r) {
          return this.read_rest();
        }
        var n = this._i + t2;
        var i = this.__input__.substring(this._i, n);
        var a = i.match(/\n/g);
        if (a) {
          this._line += a.length;
        }
        this._i = n;
        return i;
      } }, { key: "peek_char", value: function e75() {
        if (this._i >= this.__input__.length) {
          return eof;
        }
        return LCharacter(this.__input__[this._i]);
      } }, { key: "read_char", value: function e75() {
        var t2 = this.peek_char();
        this.skip_char();
        return t2;
      } }, { key: "skip_char", value: function e75() {
        if (this._i < this.__input__.length) {
          ++this._i;
          this._token = null;
        }
      } }, { key: "match_rule", value: function e75(t2) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.prev_char, i = r["char"], a = r.next_char;
        var o = _slicedToArray(t2, 4), u = o[0], s = o[1], c = o[2], l = o[3];
        if (t2.length !== 5) {
          throw new Error("Lexer: Invalid rule of length ".concat(t2.length));
        }
        if (is_string(u)) {
          if (u !== i) {
            return false;
          }
        } else if (!i.match(u)) {
          return false;
        }
        if (!match_or_null(s, n)) {
          return false;
        }
        if (!match_or_null(c, a)) {
          return false;
        }
        if (l !== this._state) {
          return false;
        }
        return true;
      } }, { key: "next_token", value: function e75() {
        if (this._i >= this.__input__.length) {
          return false;
        }
        var t2 = true;
        e: for (var r = this._i, n = this.__input__.length; r < n; ++r) {
          var i = this.__input__[r];
          var a = this.__input__[r - 1] || "";
          var o = this.__input__[r + 1] || "";
          if (i === "\n") {
            ++this._line;
            var u = this._newline;
            if (this._state === null) {
              this._newline = r + 1;
            }
            if (this._whitespace && this._state === null) {
              this._next = r + 1;
              this._col = this._i - u;
              return true;
            }
          }
          if (t2 && this._state === null && i.match(/\s/)) {
            if (this._whitespace) {
              if (!o.match(/\s/)) {
                this._next = r + 1;
                this._col = this._i - this._newline;
                return true;
              } else {
                continue;
              }
            } else {
              this._i = r + 1;
              continue;
            }
          }
          t2 = false;
          var s = _createForOfIteratorHelper(v.rules), c;
          try {
            for (s.s(); !(c = s.n()).done; ) {
              var l = c.value;
              if (this.match_rule(l, { prev_char: a, char: i, next_char: o })) {
                var f = l[l.length - 1];
                this._state = f;
                if (this._state === null) {
                  this._next = r + 1;
                  this._col = this._i - this._newline;
                  return true;
                }
                continue e;
              }
            }
          } catch (e76) {
            s.e(e76);
          } finally {
            s.f();
          }
          if (this._state !== null) {
            continue e;
          }
          var _ = this.__input__.split("\n")[this._line];
          throw new Error("Invalid Syntax at line ".concat(this._line + 1, "\n").concat(_));
        }
        if (![null, v.comment].includes(this._state)) {
          var p, d;
          var h = (p = (d = this.__input__.substring(0, this._newline).match(/\n/g)) === null || d === void 0 ? void 0 : d.length) !== null && p !== void 0 ? p : 0;
          var m = this.__input__.substring(this._newline);
          if (this.__input__[this._i] === "#") {
            var y = this.__input__.substring(this._i).replace(/^([^\s()\[\]]+).*/, "$1");
            throw new Error("Invalid Syntax at line ".concat(h + 1, ": invalid token ").concat(y));
          }
          throw new Unterminated("Invalid Syntax at line ".concat(h + 1, ": Unterminated expression ").concat(m));
        }
      } }]);
    }();
    Lexer.literal_rule = function e10(t2, r) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      if (t2.length === 0) {
        throw new Error("Lexer: invalid literal rule");
      }
      if (t2.length === 1) {
        return [[t2, n, i, null, null]];
      }
      var a = [];
      for (var o = 0, u = t2.length; o < u; ++o) {
        var s = [];
        s.push(t2[o]);
        s.push(t2[o - 1] || n);
        s.push(t2[o + 1] || i);
        if (o === 0) {
          s.push(null);
          s.push(r);
        } else if (o === u - 1) {
          s.push(r);
          s.push(null);
        } else {
          s.push(r);
          s.push(r);
        }
        a.push(s);
      }
      return a;
    };
    Lexer.string = Symbol["for"]("string");
    Lexer.string_escape = Symbol["for"]("string_escape");
    Lexer.symbol = Symbol["for"]("symbol");
    Lexer.comment = Symbol["for"]("comment");
    Lexer.regex = Symbol["for"]("regex");
    Lexer.regex_init = Symbol["for"]("regex_init");
    Lexer.regex_class = Symbol["for"]("regex_class");
    Lexer.character = Symbol["for"]("character");
    Lexer.bracket = Symbol["for"]("bracket");
    Lexer.b_symbol = Symbol["for"]("b_symbol");
    Lexer.b_symbol_ex = Symbol["for"]("b_symbol_ex");
    Lexer.b_comment = Symbol["for"]("b_comment");
    Lexer.i_comment = Symbol["for"]("i_comment");
    Lexer.l_datum = Symbol["for"]("l_datum");
    Lexer.dot = Symbol["for"]("dot");
    Lexer.boundary = /^$|[\s()[\]']/;
    Lexer._rules = [[/"/, null, null, Lexer.string, null], [/"/, null, null, null, Lexer.string], [/"/, null, null, Lexer.string_escape, Lexer.string], [/\\/, null, null, Lexer.string, Lexer.string_escape], [/./, /\\/, null, Lexer.string_escape, Lexer.string], [/#/, null, /[bdxoei]/i, null, Lexer.symbol], [/#/, null, /\\/, null, Lexer.character], [/\\/, /#/, /\s/, Lexer.character, Lexer.character], [/\\/, /#/, /[()[\]]/, Lexer.character, Lexer.character], [/\s/, /\\/, null, Lexer.character, null], [/\S/, null, Lexer.boundary, Lexer.character, null], [/#/, Lexer.boundary, /\//, null, Lexer.regex_init], [/./, /\//, null, Lexer.regex_init, Lexer.regex], [/[ \t]/, null, null, Lexer.regex, Lexer.regex], [/\[/, /[^\\]/, null, Lexer.regex, Lexer.regex_class], [/\]/, /[^\\]/, null, Lexer.regex_class, Lexer.regex], [/[()[\]]/, null, null, Lexer.regex, Lexer.regex], [/\//, /\\/, null, Lexer.regex, Lexer.regex], [/\//, null, Lexer.boundary, Lexer.regex, null], [/[gimyus]/, /\//, Lexer.boundary, Lexer.regex, null], [/[gimyus]/, /\//, /[gimyus]/, Lexer.regex, Lexer.regex], [/[gimyus]/, /[gimyus]/, Lexer.boundary, Lexer.regex, null], [/;/, /^$|[^#]/, null, null, Lexer.comment], [/\n/, ";", null, Lexer.comment, null], [/[\s\S]/, null, /\n/, Lexer.comment, null], [/\s/, null, null, Lexer.comment, Lexer.comment], [/#/, null, /\|/, null, Lexer.b_comment], [/\s/, null, null, Lexer.b_comment, Lexer.b_comment], [/#/, /\|/, null, Lexer.b_comment, null], [/#/, null, /;/, null, Lexer.i_comment], [/;/, /#/, null, Lexer.i_comment, null], [/#/, null, /[0-9]/, null, Lexer.l_datum], [/=/, /[0-9]/, null, Lexer.l_datum, null], [/#/, /[0-9]/, null, Lexer.l_datum, null], [/\./, Lexer.boundary, /,/, null, null], [/\|/, null, null, null, Lexer.b_symbol], [/\s/, null, null, Lexer.b_symbol, Lexer.b_symbol], [/\|/, null, Lexer.boundary, Lexer.b_symbol, null], [/\|/, null, /\S/, Lexer.b_symbol, Lexer.b_symbol_ex], [/\S/, null, Lexer.boundary, Lexer.b_symbol_ex, null]];
    Lexer._brackets = [[/[()[\]]/, null, null, null, null]];
    Lexer._symbol_rules = [[/\S/, Lexer.boundary, Lexer.boundary, null, null], [/\S/, Lexer.boundary, null, null, Lexer.symbol], [/\S/, null, Lexer.boundary, null, null], [/\S/, null, null, null, Lexer.symbol], [/\S/, null, Lexer.boundary, Lexer.symbol, null]];
    Lexer._cache = { valid: false, rules: null };
    specials.on(["remove", "append"], function() {
      Lexer._cache.valid = false;
      Lexer._cache.rules = null;
    });
    parsable_contants = { "#null": null, "#void": void 0 };
    directives = ["#!fold-case", "#!no-fold-case"];
    hash_literals = ["#t", "#f"];
    Object.defineProperty(Lexer, "rules", { get: function e11() {
      if (Lexer._cache.valid) {
        return Lexer._cache.rules;
      }
      var t2 = Object.keys(parsable_contants).concat(directives, hash_literals);
      var r = specials.names().concat(t2).sort(function(e75, t3) {
        return t3.length - e75.length || e75.localeCompare(t3);
      });
      var n = r.reduce(function(e75, t3) {
        var r2;
        var n2 = null;
        if (t3[0] === "#") {
          if (t3.length === 1) {
            r2 = Symbol["for"](t3);
          } else {
            if (hash_literals.includes(t3)) {
              n2 = Lexer.boundary;
            }
            r2 = Symbol["for"](t3[1]);
          }
        } else {
          r2 = Symbol["for"](t3);
        }
        var i = Lexer.literal_rule(t3, r2, null, n2);
        return e75.concat(i);
      }, []);
      Lexer._cache.rules = Lexer._rules.concat(Lexer._brackets, n, Lexer._symbol_rules);
      Lexer._cache.valid = true;
      return Lexer._cache.rules;
    } });
    Parser = function() {
      function o() {
        var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t2 = e75.env, r = e75.meta, n = r === void 0 ? false : r, i = e75.formatter, a = i === void 0 ? multiline_formatter : i;
        _classCallCheck(this, o);
        read_only(this, "_formatter", a, { hidden: true });
        read_only(this, "__env__", t2);
        read_only(this, "_meta", n, { hidden: true });
        read_only(this, "_refs", [], { hidden: true });
        read_only(this, "_state", { parentheses: 0, line: 0, fold_case: false }, { hidden: true });
      }
      return _createClass(o, [{ key: "prepare", value: function e75(t2) {
        if (t2 instanceof LString) {
          t2 = t2.toString();
        }
        this._reset_state();
        read_only(this, "__lexer__", new Lexer(t2));
      } }, { key: "_with_syntax_scope", value: function e75(t2) {
        var r = get_internal(this.__env__);
        var n = r.get("stdin");
        global_env.set("lips", _objectSpread(_objectSpread({}, lips), {}, { __parser__: this }));
        r.set("stdin", new ParserInputPort(this, this.__env__));
        var i = function e76() {
          global_env.set("lips", lips);
          r.set("stdin", n);
        };
        return unpromise(t2(), function(e76) {
          i();
          return e76;
        }, i);
      } }, { key: "_reset_state", value: function e75() {
        Object.assign(this._state, { parentheses: 0, line: 0 });
      } }, { key: "_resolve", value: function e75(t2) {
        return this.__env__ && this.__env__.get(t2, { throwError: false });
      } }, { key: "_peek", value: function() {
        var e75 = _asyncToGenerator(_regeneratorRuntime.mark(function e76() {
          var r;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                r = this.__lexer__.peek(true);
                if (!(r === eof)) {
                  t3.next = 4;
                  break;
                }
                return t3.abrupt("return", eof);
              case 4:
                if (!this._is_comment(r.token)) {
                  t3.next = 7;
                  break;
                }
                this.skip();
                return t3.abrupt("continue", 0);
              case 7:
                if (!is_directive(r.token)) {
                  t3.next = 11;
                  break;
                }
                this.skip();
                if (r.token === "#!fold-case") {
                  this._state.fold_case = true;
                } else if (r.token === "#!no-fold-case") {
                  this._state.fold_case = false;
                }
                return t3.abrupt("continue", 0);
              case 11:
                if (!(r.token === "#;")) {
                  t3.next = 18;
                  break;
                }
                this.skip();
                if (!(this.__lexer__.peek() === eof)) {
                  t3.next = 15;
                  break;
                }
                throw new Error("Lexer: syntax error eof found after comment");
              case 15:
                t3.next = 17;
                return this._read_object();
              case 17:
                return t3.abrupt("continue", 0);
              case 18:
                return t3.abrupt("break", 21);
              case 21:
                r = this._formatter(r);
                if (this._state.fold_case) {
                  r.token = foldcase_string(r.token);
                }
                return t3.abrupt("return", r);
              case 24:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function t2() {
          return e75.apply(this, arguments);
        }
        return t2;
      }() }, { key: "peek", value: function() {
        var e75 = _asyncToGenerator(_regeneratorRuntime.mark(function e76() {
          var r;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                r = this._peek();
                if (!this._meta) {
                  t3.next = 3;
                  break;
                }
                return t3.abrupt("return", r);
              case 3:
                return t3.abrupt("return", r.token);
              case 4:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function t2() {
          return e75.apply(this, arguments);
        }
        return t2;
      }() }, { key: "_reset", value: function e75() {
        this._refs.length = 0;
      } }, { key: "skip", value: function e75() {
        this.__lexer__.skip();
      } }, { key: "_read", value: function() {
        var e75 = _asyncToGenerator(_regeneratorRuntime.mark(function e76() {
          var r;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                t3.next = 2;
                return this._peek();
              case 2:
                r = t3.sent;
                this.skip();
                return t3.abrupt("return", r);
              case 5:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function t2() {
          return e75.apply(this, arguments);
        }
        return t2;
      }() }, { key: "read", value: function() {
        var e75 = _asyncToGenerator(_regeneratorRuntime.mark(function e76() {
          var r;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                t3.next = 2;
                return this.peek();
              case 2:
                r = t3.sent;
                this.skip();
                return t3.abrupt("return", r);
              case 5:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function t2() {
          return e75.apply(this, arguments);
        }
        return t2;
      }() }, { key: "_match_datum_label", value: function e75(t2) {
        var r = t2.token.match(/^#([0-9]+)=$/);
        return r && r[1];
      } }, { key: "_match_datum_ref", value: function e75(t2) {
        var r = t2.token.match(/^#([0-9]+)#$/);
        return r && r[1];
      } }, { key: "_is_open", value: function e75(t2) {
        return ["(", "["].includes(t2.token);
      } }, { key: "_is_close", value: function e75(t2) {
        return [")", "]"].includes(t2.token);
      } }, { key: "_read_list", value: function() {
        var e75 = _asyncToGenerator(_regeneratorRuntime.mark(function e76() {
          var r, n, i, a, o2, u;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                r = _nil, n = r;
              case 1:
                t3.next = 4;
                return this._peek();
              case 4:
                a = t3.sent;
                if (!(a === eof)) {
                  t3.next = 7;
                  break;
                }
                return t3.abrupt("break", 31);
              case 7:
                if (!this._is_close(a)) {
                  t3.next = 11;
                  break;
                }
                --this._state.parentheses;
                this.skip();
                return t3.abrupt("break", 31);
              case 11:
                if (!(a.token === "." && !is_nil(r))) {
                  t3.next = 19;
                  break;
                }
                this.skip();
                t3.next = 15;
                return this._read_object();
              case 15:
                n.cdr = t3.sent;
                i = true;
                t3.next = 29;
                break;
              case 19:
                if (!i) {
                  t3.next = 23;
                  break;
                }
                throw new Error("Parser: syntax error more than one element after dot");
              case 23:
                t3.next = 25;
                return this._read_object();
              case 25:
                o2 = t3.sent;
                u = new Pair(o2, _nil);
                if (is_nil(r)) {
                  r = u;
                } else {
                  n.cdr = u;
                }
                n = u;
              case 29:
                t3.next = 1;
                break;
              case 31:
                return t3.abrupt("return", r);
              case 32:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function t2() {
          return e75.apply(this, arguments);
        }
        return t2;
      }() }, { key: "_read_value", value: function() {
        var e75 = _asyncToGenerator(_regeneratorRuntime.mark(function e76() {
          var r;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                t3.next = 2;
                return this._read();
              case 2:
                r = t3.sent;
                if (!(r === eof || r.token === eof)) {
                  t3.next = 5;
                  break;
                }
                throw new Error("Parser: Expected token eof found");
              case 5:
                return t3.abrupt("return", parse_argument(r, this._meta));
              case 6:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function t2() {
          return e75.apply(this, arguments);
        }
        return t2;
      }() }, { key: "_is_comment", value: function e75(t2) {
        return t2.match(/^;/) || t2.match(/^#\|/) && t2.match(/\|#$/);
      } }, { key: "evaluate", value: function e75(t2) {
        return _evaluate(t2, { env: this.__env__, error: function e76(t3) {
          throw t3;
        } });
      } }, { key: "read_object", value: function() {
        var e75 = _asyncToGenerator(_regeneratorRuntime.mark(function e76() {
          var r;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                this._reset();
                t3.next = 3;
                return this._read_object();
              case 3:
                r = t3.sent;
                if (r instanceof DatumReference) {
                  r = r.valueOf();
                }
                if (!this._refs.length) {
                  t3.next = 7;
                  break;
                }
                return t3.abrupt("return", unpromise(this._resolve_object(r), function(e78) {
                  if (is_pair(e78)) {
                    e78.mark_cycles();
                  }
                  return e78;
                }));
              case 7:
                return t3.abrupt("return", r);
              case 8:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function t2() {
          return e75.apply(this, arguments);
        }
        return t2;
      }() }, { key: "balanced", value: function e75() {
        return this._state.parentheses === 0;
      } }, { key: "_ballancing_error", value: function e75(t2, r) {
        var n = this._state.parentheses;
        var i;
        if (n < 0) {
          i = new Error("Parser: unexpected parenthesis");
          if (r) {
            i.__code__ = [r.toString() + ")"];
          } else {
            i.__code__ = [")"];
          }
        } else {
          i = new Error("Parser: expected parenthesis but eof found");
          var a = new RegExp("\\){".concat(n, "}$"));
          i.__code__ = [t2.toString().replace(a, "")];
        }
        this._agument_exception(i);
        throw i;
      } }, { key: "_agument_exception", value: function e75(t2) {
        var r = this.__lexer__.__token__;
        if ("col" in r) {
          var n = r.col, i = r.offset, a = r.line;
          t2.message += " at line ".concat(a + 1, " and column ").concat(n + 1);
          read_only(t2, "__col__", n);
          read_only(t2, "__offset__", i);
          read_only(t2, "__line__", a);
        }
      } }, { key: "_resolve_object", value: function() {
        var t2 = _asyncToGenerator(_regeneratorRuntime.mark(function e76(r) {
          var n = this;
          var i;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                if (!Array.isArray(r)) {
                  t3.next = 2;
                  break;
                }
                return t3.abrupt("return", r.map(function(e78) {
                  return n._resolve_object(e78);
                }));
              case 2:
                if (!is_plain_object(r)) {
                  t3.next = 6;
                  break;
                }
                i = {};
                Object.keys(r).forEach(function(e78) {
                  i[e78] = n._resolve_object(r[e78]);
                });
                return t3.abrupt("return", i);
              case 6:
                if (!is_pair(r)) {
                  t3.next = 8;
                  break;
                }
                return t3.abrupt("return", this._resolve_pair(r));
              case 8:
                return t3.abrupt("return", r);
              case 9:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function e75(e76) {
          return t2.apply(this, arguments);
        }
        return e75;
      }() }, { key: "_resolve_pair", value: function() {
        var t2 = _asyncToGenerator(_regeneratorRuntime.mark(function e76(r) {
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                if (!is_pair(r)) {
                  t3.next = 15;
                  break;
                }
                if (!(r.car instanceof DatumReference)) {
                  t3.next = 7;
                  break;
                }
                t3.next = 4;
                return r.car.valueOf();
              case 4:
                r.car = t3.sent;
                t3.next = 8;
                break;
              case 7:
                this._resolve_pair(r.car);
              case 8:
                if (!(r.cdr instanceof DatumReference)) {
                  t3.next = 14;
                  break;
                }
                t3.next = 11;
                return r.cdr.valueOf();
              case 11:
                r.cdr = t3.sent;
                t3.next = 15;
                break;
              case 14:
                this._resolve_pair(r.cdr);
              case 15:
                return t3.abrupt("return", r);
              case 16:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function e75(e76) {
          return t2.apply(this, arguments);
        }
        return e75;
      }() }, { key: "get_line", value: function e75() {
        return this._state.line;
      } }, { key: "_read_object", value: function() {
        var e75 = _asyncToGenerator(_regeneratorRuntime.mark(function e76() {
          var r = this;
          var n, i, a, o2, u, s, c, l, f, _, p, d, h, m, y, v;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                t3.next = 2;
                return this._peek();
              case 2:
                n = t3.sent;
                if (!(n === eof)) {
                  t3.next = 5;
                  break;
                }
                return t3.abrupt("return", n);
              case 5:
                this._state.line = this.__lexer__.__token__.line;
                if (!is_special(n.token)) {
                  t3.next = 58;
                  break;
                }
                i = specials.get(n.token);
                a = is_builtin(n.token);
                this.skip();
                s = is_symbol_extension(n.token);
                t3.t0 = this;
                t3.next = 14;
                return this._peek();
              case 14:
                t3.t1 = t3.sent;
                c = t3.t0._is_close.call(t3.t0, t3.t1);
                if (!s) {
                  t3.next = 20;
                  break;
                }
                t3.t2 = void 0;
                t3.next = 23;
                break;
              case 20:
                t3.next = 22;
                return this._read_object();
              case 22:
                t3.t2 = t3.sent;
              case 23:
                l = t3.t2;
                if (!(l === eof)) {
                  t3.next = 26;
                  break;
                }
                throw new Unterminated("Expecting expression eof found");
              case 26:
                if (a) {
                  t3.next = 35;
                  break;
                }
                u = this.__env__.get(i.symbol);
                if (!(typeof u === "function")) {
                  t3.next = 35;
                  break;
                }
                if (is_literal(n.token)) {
                  f = [l];
                } else if (is_nil(l)) {
                  f = [];
                } else if (is_pair(l)) {
                  f = l.to_array(false);
                }
                if (!(f || s)) {
                  t3.next = 32;
                  break;
                }
                return t3.abrupt("return", this._with_syntax_scope(function() {
                  return call_function(u, s ? [] : f, { env: r.__env__, dynamic_env: r.__env__, use_dynamic: false });
                }));
              case 32:
                _ = new Error("Parse Error: Invalid parser extension " + "invocation ".concat(i.symbol));
                this._agument_exception(_);
                throw _;
              case 35:
                if (!is_literal(n.token)) {
                  t3.next = 43;
                  break;
                }
                if (!c) {
                  t3.next = 40;
                  break;
                }
                p = new Error("Parse Error: expecting datum");
                this._agument_exception(p);
                throw p;
              case 40:
                o2 = new Pair(i.symbol, new Pair(l, _nil));
                t3.next = 44;
                break;
              case 43:
                o2 = new Pair(i.symbol, l);
              case 44:
                if (!a) {
                  t3.next = 46;
                  break;
                }
                return t3.abrupt("return", o2);
              case 46:
                if (!(u instanceof Macro)) {
                  t3.next = 55;
                  break;
                }
                t3.next = 49;
                return this._with_syntax_scope(function() {
                  return r.evaluate(o2);
                });
              case 49:
                d = t3.sent;
                if (!(is_pair(d) || d instanceof LSymbol)) {
                  t3.next = 52;
                  break;
                }
                return t3.abrupt("return", Pair.fromArray([LSymbol("quote"), d]));
              case 52:
                return t3.abrupt("return", d);
              case 55:
                h = new Error("Parse Error: invalid parser extension: " + i.symbol);
                this._agument_exception(h);
                throw h;
              case 58:
                m = this._match_datum_ref(n);
                if (!(m !== null)) {
                  t3.next = 66;
                  break;
                }
                this.skip();
                if (!this._refs[m]) {
                  t3.next = 63;
                  break;
                }
                return t3.abrupt("return", new DatumReference(m, this._refs[m]));
              case 63:
                y = new Error("Parse Error: invalid datum label #".concat(m, "#"));
                this._agument_exception(y);
                throw y;
              case 66:
                v = this._match_datum_label(n);
                if (!(v !== null)) {
                  t3.next = 73;
                  break;
                }
                this.skip();
                this._refs[v] = this._read_object();
                return t3.abrupt("return", this._refs[v]);
              case 73:
                if (!this._is_close(n)) {
                  t3.next = 78;
                  break;
                }
                --this._state.parentheses;
                this.skip();
                t3.next = 85;
                break;
              case 78:
                if (!this._is_open(n)) {
                  t3.next = 84;
                  break;
                }
                ++this._state.parentheses;
                this.skip();
                return t3.abrupt("return", this._read_list());
              case 84:
                return t3.abrupt("return", this._read_value());
              case 85:
              case "end":
                return t3.stop();
            }
          }, e76, this);
        }));
        function t2() {
          return e75.apply(this, arguments);
        }
        return t2;
      }() }]);
    }();
    Unterminated = function(e75) {
      function t2() {
        _classCallCheck(this, t2);
        return _callSuper(this, t2, arguments);
      }
      _inherits(t2, e75);
      return _createClass(t2);
    }(_wrapNativeSuper(Error));
    Parser.Unterminated = Unterminated;
    DatumReference = function() {
      function r(e75, t2) {
        _classCallCheck(this, r);
        this.name = e75;
        this.data = t2;
      }
      return _createClass(r, [{ key: "valueOf", value: function e75() {
        return this.data;
      } }]);
    }();
    Formatter.defaults = { offset: 0, indent: 2, exceptions: { specials: [/^(?:#:)?(?:define(?:-values|-syntax|-macro|-class|-record-type)?|(?:call-with-(?:input-file|output-file|port))|lambda|let-env|try|catch|when|unless|while|syntax-rules|(let|letrec)(-syntax|\*?-values|\*)?)$/], shift: { 1: ["&", "#"] } } };
    Formatter.match = match;
    Formatter.prototype._options = function e12(t2) {
      var r = Formatter.defaults;
      if (typeof t2 === "undefined") {
        return Object.assign({}, r);
      }
      var n = t2 && t2.exceptions || {};
      var i = n.specials || [];
      var a = n.shift || { 1: [] };
      return _objectSpread(_objectSpread(_objectSpread({}, r), t2), {}, { exceptions: { specials: [].concat(_toConsumableArray(r.exceptions.specials), _toConsumableArray(i)), shift: _objectSpread(_objectSpread({}, a), {}, { 1: [].concat(_toConsumableArray(r.exceptions.shift[1]), _toConsumableArray(a[1])) }) } });
    };
    Formatter.prototype.indent = function e13(t2) {
      var r = tokenize(this.__code__, true);
      return this._indent(r, t2);
    };
    Formatter.exception_shift = function(a, e75) {
      function t2(e76) {
        if (!e76.length) {
          return false;
        }
        if (e76.indexOf(a) !== -1) {
          return true;
        } else {
          var t3 = e76.filter(function(e77) {
            return e77 instanceof RegExp;
          });
          if (!t3.length) {
            return false;
          }
          var r2 = _createForOfIteratorHelper(t3), n2;
          try {
            for (r2.s(); !(n2 = r2.n()).done; ) {
              var i2 = n2.value;
              if (a.match(i2)) {
                return true;
              }
            }
          } catch (e77) {
            r2.e(e77);
          } finally {
            r2.f();
          }
        }
        return false;
      }
      if (t2(e75.exceptions.specials)) {
        return e75.indent;
      }
      var r = e75.exceptions.shift;
      for (var n = 0, i = Object.entries(r); n < i.length; n++) {
        var o = _slicedToArray(i[n], 2), u = o[0], s = o[1];
        if (t2(s)) {
          return +u;
        }
      }
      return -1;
    };
    Formatter.prototype._indent = function e14(t2, r) {
      var n = this._options(r);
      var i = lineIndent(t2);
      var a = previousSexp(t2);
      var o = t2[t2.length - a.length - 1];
      var u = t2[t2.length - 1];
      if (u.token.match(/^"[\S\s]+[^"]$/)) {
        return i + n.indent;
      }
      if (a && a.length) {
        if (a[0].line > 0) {
          n.offset = 0;
        }
        if (a.toString() === t2.toString() && balanced(a)) {
          return n.offset + a[0].col;
        } else if (a.length === 1) {
          return n.offset + a[0].col + 1;
        } else {
          var s = -1;
          if (o) {
            var c = Formatter.exception_shift(o.token, n);
            if (c !== -1) {
              s = c;
            }
          }
          if (s === -1) {
            s = Formatter.exception_shift(a[1].token, n);
          }
          if (s !== -1) {
            return n.offset + a[0].col + s;
          } else if (a[0].line < a[1].line) {
            return n.offset + a[0].col + 1;
          } else if (a.length > 3 && a[1].line === a[3].line) {
            if (a[1].token === "(" || a[1].token === "[") {
              return n.offset + a[1].col;
            }
            return n.offset + a[3].col;
          } else if (a[0].line === a[1].line) {
            return n.offset + n.indent + a[0].col;
          } else {
            var l = a.slice(2);
            for (var f = 0; f < l.length; ++f) {
              var _ = l[f];
              if (_.token.trim()) {
                return _.col;
              }
            }
          }
        }
      } else {
        return 0;
      }
      return i + n.indent;
    };
    Ahead.prototype.toString = function() {
      return "#<pattern(".concat(this.pattern, ")>");
    };
    Ahead.prototype.match = function(e75) {
      return e75.match(this.pattern);
    };
    Pattern.prototype.toString = function() {
      var e75 = this.patterns.map(function(e76) {
        return to_string(e76);
      }).join("|");
      return "#<pattern(".concat(e75, " ").concat(this.flag, ")>");
    };
    Formatter.Pattern = Pattern;
    Formatter.Ahead = Ahead;
    p_o = /^[[(]$/;
    p_e = /^[\])]$/;
    not_p = /[^()[\]]/;
    not_close = new Ahead(/[^)\]]/);
    glob = Symbol["for"]("*");
    sexp_or_atom = new Pattern([p_o, glob, p_e], [not_p], "+");
    sexp = new Pattern([p_o, glob, p_e], "+");
    symbol = new Pattern([Symbol["for"]("symbol")], "?");
    symbols = new Pattern([Symbol["for"]("symbol")], "*");
    identifiers = [p_o, symbols, p_e];
    let_value = new Pattern([p_o, Symbol["for"]("symbol"), glob, p_e], "+");
    syntax_rules = keywords_re("syntax-rules");
    def_lambda_re = keywords_re("define", "lambda", "define-macro", "syntax-rules");
    non_def = /^(?!.*\b(?:[()[\]]|define(?:-macro)?|let(?:\*|rec|-env|-syntax|)?|lambda|syntax-rules)\b).*$/;
    let_re = /^(?:#:)?(let(?:\*|rec|-env|-syntax)?)$/;
    comment_re = /^;.*/;
    Formatter.rules = [[[sexp], 0, not_close], [[p_o, keywords_re("begin", "cond-expand")], 1, not_close], [[p_o, let_re, symbol, p_o, let_value, p_e], 1, not_close], [[p_o, let_re, symbol, sexp_or_atom], 1, not_close], [[p_o, let_re, p_o, let_value], 1, not_close], [[p_o, keywords_re("define-syntax"), /.+/], 1], [[p_o, syntax_rules, not_p, identifiers], 1], [[p_o, syntax_rules, not_p, identifiers, sexp], 1, not_close], [[p_o, syntax_rules, identifiers], 1], [comment_re, -1], [[p_o, syntax_rules, identifiers, sexp], 1, not_close], [[p_o, non_def, new Pattern([/[^()[\]]/], "+"), sexp], 1, not_close], [[p_o, sexp], 1, not_close], [[p_o, not_p, sexp], 1, not_close], [[p_o, keywords_re("lambda", "if"), not_p], 1, not_close], [[p_o, keywords_re("while"), not_p, sexp], 1, not_close], [[p_o, keywords_re("if"), not_p, glob], 1, not_close], [[p_o, def_lambda_re, identifiers], 0, not_close], [[p_o, def_lambda_re, identifiers, string_re], 0, not_close], [[p_o, def_lambda_re, identifiers, string_re, sexp], 0, not_close], [[p_o, def_lambda_re, identifiers, sexp], 0, not_close]];
    Formatter.prototype["break"] = function() {
      var e75 = this.__code__.replace(/\n[ \t]*/g, "\n ").trim();
      var t2 = function e76(t3) {
        if (t3.token.match(string_re) || t3.token.match(re_re)) {
          return t3.token;
        } else {
          return t3.token.replace(/\s+/, " ");
        }
      };
      var r = function e76(t3) {
        for (var r2 = t3.length; r2--; ) {
          var n2 = t3[r2];
          if (n2.trim() && !is_special(n2)) {
            return t3.length - r2 - 1;
          }
        }
      };
      var n = tokenize(e75, true).map(t2).filter(function(e76) {
        return e76 !== "\n";
      });
      var i = Formatter.rules;
      e: for (var a = 1; a < n.length; ++a) {
        if (!n[a].trim()) {
          continue;
        }
        var o = n.slice(0, a);
        var u = {};
        i.map(function(e76) {
          return e76[1];
        }).forEach(function(e76) {
          e76 = e76.valueOf();
          if (e76 > 0 && !u[e76]) {
            u[e76] = previousSexp(o, e76);
          }
        });
        var s = _createForOfIteratorHelper(i), c;
        try {
          for (s.s(); !(c = s.n()).done; ) {
            var l = _slicedToArray(c.value, 3), f = l[0], _ = l[1], p = l[2];
            var d = f === comment_re;
            _ = _.valueOf();
            var h = _ > 0 ? u[_] : o;
            var m = h.filter(function(e76) {
              return e76.trim() && !is_special(e76);
            });
            if (!m.length) {
              continue;
            }
            if (_ === -1) {
              f = [f];
              m = m.slice(-1);
            }
            var y = r(h);
            var v = match(f, m);
            var b = n.slice(a).find(function(e76) {
              return e76.trim() && !is_special(e76);
            });
            if (v && (p instanceof Ahead && p.match(b) || !p)) {
              var g = a - y;
              if (n[g] !== "\n") {
                if (!n[g].trim()) {
                  n[g] = "\n";
                } else {
                  n.splice(g, 0, "\n");
                  a++;
                }
              }
              a += y;
              continue e;
            }
          }
        } catch (e76) {
          s.e(e76);
        } finally {
          s.f();
        }
      }
      this.__code__ = n.join("");
      return this;
    };
    Formatter.prototype._spaces = function(e75) {
      return " ".repeat(e75);
    };
    Formatter.prototype.format = function e15(t2) {
      var r = this.__code__.trim().replace(/[ \t]*\n[ \t]*/g, "\n ");
      var n = tokenize(r, true);
      var i = this._options(t2);
      var a = 0;
      var o = 0;
      for (var u = 0; u < n.length; ++u) {
        var s = n[u];
        if (s.token === "\n") {
          a = this._indent(n.slice(0, u), i);
          o += a;
          if (n[u + 1]) {
            n[u + 1].token = this._spaces(a);
            a--;
            o--;
            for (var c = u + 2; c < n.length; ++c) {
              n[c].offset += o;
              n[c].col += a;
              if (n[c].token === "\n") {
                u = c - 1;
                break;
              }
            }
          }
        }
      }
      return n.map(function(e75) {
        if (e75.token.match(string_re)) {
          if (e75.token.match(/\n/)) {
            var t3 = " ".repeat(e75.col);
            var r2 = e75.token.split("\n");
            e75.token = [r2[0]].concat(r2.slice(1).map(function(e76) {
              return t3 + e76;
            })).join("\n");
          }
        }
        return e75.token;
      }).join("");
    };
    fold_case_mapping = { 65: 97, 66: 98, 67: 99, 68: 100, 69: 101, 70: 102, 71: 103, 72: 104, 73: 105, 74: 106, 75: 107, 76: 108, 77: 109, 78: 110, 79: 111, 80: 112, 81: 113, 82: 114, 83: 115, 84: 116, 85: 117, 86: 118, 87: 119, 88: 120, 89: 121, 90: 122, 181: 956, 192: 224, 193: 225, 194: 226, 195: 227, 196: 228, 197: 229, 198: 230, 199: 231, 200: 232, 201: 233, 202: 234, 203: 235, 204: 236, 205: 237, 206: 238, 207: 239, 208: 240, 209: 241, 210: 242, 211: 243, 212: 244, 213: 245, 214: 246, 216: 248, 217: 249, 218: 250, 219: 251, 220: 252, 221: 253, 222: 254, 256: 257, 258: 259, 260: 261, 262: 263, 264: 265, 266: 267, 268: 269, 270: 271, 272: 273, 274: 275, 276: 277, 278: 279, 280: 281, 282: 283, 284: 285, 286: 287, 288: 289, 290: 291, 292: 293, 294: 295, 296: 297, 298: 299, 300: 301, 302: 303, 306: 307, 308: 309, 310: 311, 313: 314, 315: 316, 317: 318, 319: 320, 321: 322, 323: 324, 325: 326, 327: 328, 330: 331, 332: 333, 334: 335, 336: 337, 338: 339, 340: 341, 342: 343, 344: 345, 346: 347, 348: 349, 350: 351, 352: 353, 354: 355, 356: 357, 358: 359, 360: 361, 362: 363, 364: 365, 366: 367, 368: 369, 370: 371, 372: 373, 374: 375, 376: 255, 377: 378, 379: 380, 381: 382, 383: 115, 385: 595, 386: 387, 388: 389, 390: 596, 391: 392, 393: 598, 394: 599, 395: 396, 398: 477, 399: 601, 400: 603, 401: 402, 403: 608, 404: 611, 406: 617, 407: 616, 408: 409, 412: 623, 413: 626, 415: 629, 416: 417, 418: 419, 420: 421, 422: 640, 423: 424, 425: 643, 428: 429, 430: 648, 431: 432, 433: 650, 434: 651, 435: 436, 437: 438, 439: 658, 440: 441, 444: 445, 452: 454, 453: 454, 455: 457, 456: 457, 458: 460, 459: 460, 461: 462, 463: 464, 465: 466, 467: 468, 469: 470, 471: 472, 473: 474, 475: 476, 478: 479, 480: 481, 482: 483, 484: 485, 486: 487, 488: 489, 490: 491, 492: 493, 494: 495, 497: 499, 498: 499, 500: 501, 502: 405, 503: 447, 504: 505, 506: 507, 508: 509, 510: 511, 512: 513, 514: 515, 516: 517, 518: 519, 520: 521, 522: 523, 524: 525, 526: 527, 528: 529, 530: 531, 532: 533, 534: 535, 536: 537, 538: 539, 540: 541, 542: 543, 544: 414, 546: 547, 548: 549, 550: 551, 552: 553, 554: 555, 556: 557, 558: 559, 560: 561, 562: 563, 570: 11365, 571: 572, 573: 410, 574: 11366, 577: 578, 579: 384, 580: 649, 581: 652, 582: 583, 584: 585, 586: 587, 588: 589, 590: 591, 837: 953, 880: 881, 882: 883, 886: 887, 895: 1011, 902: 940, 904: 941, 905: 942, 906: 943, 908: 972, 910: 973, 911: 974, 913: 945, 914: 946, 915: 947, 916: 948, 917: 949, 918: 950, 919: 951, 920: 952, 921: 953, 922: 954, 923: 955, 924: 956, 925: 957, 926: 958, 927: 959, 928: 960, 929: 961, 931: 963, 932: 964, 933: 965, 934: 966, 935: 967, 936: 968, 937: 969, 938: 970, 939: 971, 962: 963, 975: 983, 976: 946, 977: 952, 981: 966, 982: 960, 984: 985, 986: 987, 988: 989, 990: 991, 992: 993, 994: 995, 996: 997, 998: 999, 1e3: 1001, 1002: 1003, 1004: 1005, 1006: 1007, 1008: 954, 1009: 961, 1012: 952, 1013: 949, 1015: 1016, 1017: 1010, 1018: 1019, 1021: 891, 1022: 892, 1023: 893, 1024: 1104, 1025: 1105, 1026: 1106, 1027: 1107, 1028: 1108, 1029: 1109, 1030: 1110, 1031: 1111, 1032: 1112, 1033: 1113, 1034: 1114, 1035: 1115, 1036: 1116, 1037: 1117, 1038: 1118, 1039: 1119, 1040: 1072, 1041: 1073, 1042: 1074, 1043: 1075, 1044: 1076, 1045: 1077, 1046: 1078, 1047: 1079, 1048: 1080, 1049: 1081, 1050: 1082, 1051: 1083, 1052: 1084, 1053: 1085, 1054: 1086, 1055: 1087, 1056: 1088, 1057: 1089, 1058: 1090, 1059: 1091, 1060: 1092, 1061: 1093, 1062: 1094, 1063: 1095, 1064: 1096, 1065: 1097, 1066: 1098, 1067: 1099, 1068: 1100, 1069: 1101, 1070: 1102, 1071: 1103, 1120: 1121, 1122: 1123, 1124: 1125, 1126: 1127, 1128: 1129, 1130: 1131, 1132: 1133, 1134: 1135, 1136: 1137, 1138: 1139, 1140: 1141, 1142: 1143, 1144: 1145, 1146: 1147, 1148: 1149, 1150: 1151, 1152: 1153, 1162: 1163, 1164: 1165, 1166: 1167, 1168: 1169, 1170: 1171, 1172: 1173, 1174: 1175, 1176: 1177, 1178: 1179, 1180: 1181, 1182: 1183, 1184: 1185, 1186: 1187, 1188: 1189, 1190: 1191, 1192: 1193, 1194: 1195, 1196: 1197, 1198: 1199, 1200: 1201, 1202: 1203, 1204: 1205, 1206: 1207, 1208: 1209, 1210: 1211, 1212: 1213, 1214: 1215, 1216: 1231, 1217: 1218, 1219: 1220, 1221: 1222, 1223: 1224, 1225: 1226, 1227: 1228, 1229: 1230, 1232: 1233, 1234: 1235, 1236: 1237, 1238: 1239, 1240: 1241, 1242: 1243, 1244: 1245, 1246: 1247, 1248: 1249, 1250: 1251, 1252: 1253, 1254: 1255, 1256: 1257, 1258: 1259, 1260: 1261, 1262: 1263, 1264: 1265, 1266: 1267, 1268: 1269, 1270: 1271, 1272: 1273, 1274: 1275, 1276: 1277, 1278: 1279, 1280: 1281, 1282: 1283, 1284: 1285, 1286: 1287, 1288: 1289, 1290: 1291, 1292: 1293, 1294: 1295, 1296: 1297, 1298: 1299, 1300: 1301, 1302: 1303, 1304: 1305, 1306: 1307, 1308: 1309, 1310: 1311, 1312: 1313, 1314: 1315, 1316: 1317, 1318: 1319, 1320: 1321, 1322: 1323, 1324: 1325, 1326: 1327, 1329: 1377, 1330: 1378, 1331: 1379, 1332: 1380, 1333: 1381, 1334: 1382, 1335: 1383, 1336: 1384, 1337: 1385, 1338: 1386, 1339: 1387, 1340: 1388, 1341: 1389, 1342: 1390, 1343: 1391, 1344: 1392, 1345: 1393, 1346: 1394, 1347: 1395, 1348: 1396, 1349: 1397, 1350: 1398, 1351: 1399, 1352: 1400, 1353: 1401, 1354: 1402, 1355: 1403, 1356: 1404, 1357: 1405, 1358: 1406, 1359: 1407, 1360: 1408, 1361: 1409, 1362: 1410, 1363: 1411, 1364: 1412, 1365: 1413, 1366: 1414, 4256: 11520, 4257: 11521, 4258: 11522, 4259: 11523, 4260: 11524, 4261: 11525, 4262: 11526, 4263: 11527, 4264: 11528, 4265: 11529, 4266: 11530, 4267: 11531, 4268: 11532, 4269: 11533, 4270: 11534, 4271: 11535, 4272: 11536, 4273: 11537, 4274: 11538, 4275: 11539, 4276: 11540, 4277: 11541, 4278: 11542, 4279: 11543, 4280: 11544, 4281: 11545, 4282: 11546, 4283: 11547, 4284: 11548, 4285: 11549, 4286: 11550, 4287: 11551, 4288: 11552, 4289: 11553, 4290: 11554, 4291: 11555, 4292: 11556, 4293: 11557, 4295: 11559, 4301: 11565, 5112: 5104, 5113: 5105, 5114: 5106, 5115: 5107, 5116: 5108, 5117: 5109, 7296: 1074, 7297: 1076, 7298: 1086, 7299: 1089, 7300: 1090, 7301: 1090, 7302: 1098, 7303: 1123, 7304: 42571, 7312: 4304, 7313: 4305, 7314: 4306, 7315: 4307, 7316: 4308, 7317: 4309, 7318: 4310, 7319: 4311, 7320: 4312, 7321: 4313, 7322: 4314, 7323: 4315, 7324: 4316, 7325: 4317, 7326: 4318, 7327: 4319, 7328: 4320, 7329: 4321, 7330: 4322, 7331: 4323, 7332: 4324, 7333: 4325, 7334: 4326, 7335: 4327, 7336: 4328, 7337: 4329, 7338: 4330, 7339: 4331, 7340: 4332, 7341: 4333, 7342: 4334, 7343: 4335, 7344: 4336, 7345: 4337, 7346: 4338, 7347: 4339, 7348: 4340, 7349: 4341, 7350: 4342, 7351: 4343, 7352: 4344, 7353: 4345, 7354: 4346, 7357: 4349, 7358: 4350, 7359: 4351, 7680: 7681, 7682: 7683, 7684: 7685, 7686: 7687, 7688: 7689, 7690: 7691, 7692: 7693, 7694: 7695, 7696: 7697, 7698: 7699, 7700: 7701, 7702: 7703, 7704: 7705, 7706: 7707, 7708: 7709, 7710: 7711, 7712: 7713, 7714: 7715, 7716: 7717, 7718: 7719, 7720: 7721, 7722: 7723, 7724: 7725, 7726: 7727, 7728: 7729, 7730: 7731, 7732: 7733, 7734: 7735, 7736: 7737, 7738: 7739, 7740: 7741, 7742: 7743, 7744: 7745, 7746: 7747, 7748: 7749, 7750: 7751, 7752: 7753, 7754: 7755, 7756: 7757, 7758: 7759, 7760: 7761, 7762: 7763, 7764: 7765, 7766: 7767, 7768: 7769, 7770: 7771, 7772: 7773, 7774: 7775, 7776: 7777, 7778: 7779, 7780: 7781, 7782: 7783, 7784: 7785, 7786: 7787, 7788: 7789, 7790: 7791, 7792: 7793, 7794: 7795, 7796: 7797, 7798: 7799, 7800: 7801, 7802: 7803, 7804: 7805, 7806: 7807, 7808: 7809, 7810: 7811, 7812: 7813, 7814: 7815, 7816: 7817, 7818: 7819, 7820: 7821, 7822: 7823, 7824: 7825, 7826: 7827, 7828: 7829, 7835: 7777, 7840: 7841, 7842: 7843, 7844: 7845, 7846: 7847, 7848: 7849, 7850: 7851, 7852: 7853, 7854: 7855, 7856: 7857, 7858: 7859, 7860: 7861, 7862: 7863, 7864: 7865, 7866: 7867, 7868: 7869, 7870: 7871, 7872: 7873, 7874: 7875, 7876: 7877, 7878: 7879, 7880: 7881, 7882: 7883, 7884: 7885, 7886: 7887, 7888: 7889, 7890: 7891, 7892: 7893, 7894: 7895, 7896: 7897, 7898: 7899, 7900: 7901, 7902: 7903, 7904: 7905, 7906: 7907, 7908: 7909, 7910: 7911, 7912: 7913, 7914: 7915, 7916: 7917, 7918: 7919, 7920: 7921, 7922: 7923, 7924: 7925, 7926: 7927, 7928: 7929, 7930: 7931, 7932: 7933, 7934: 7935, 7944: 7936, 7945: 7937, 7946: 7938, 7947: 7939, 7948: 7940, 7949: 7941, 7950: 7942, 7951: 7943, 7960: 7952, 7961: 7953, 7962: 7954, 7963: 7955, 7964: 7956, 7965: 7957, 7976: 7968, 7977: 7969, 7978: 7970, 7979: 7971, 7980: 7972, 7981: 7973, 7982: 7974, 7983: 7975, 7992: 7984, 7993: 7985, 7994: 7986, 7995: 7987, 7996: 7988, 7997: 7989, 7998: 7990, 7999: 7991, 8008: 8e3, 8009: 8001, 8010: 8002, 8011: 8003, 8012: 8004, 8013: 8005, 8025: 8017, 8027: 8019, 8029: 8021, 8031: 8023, 8040: 8032, 8041: 8033, 8042: 8034, 8043: 8035, 8044: 8036, 8045: 8037, 8046: 8038, 8047: 8039, 8120: 8112, 8121: 8113, 8122: 8048, 8123: 8049, 8126: 953, 8136: 8050, 8137: 8051, 8138: 8052, 8139: 8053, 8152: 8144, 8153: 8145, 8154: 8054, 8155: 8055, 8168: 8160, 8169: 8161, 8170: 8058, 8171: 8059, 8172: 8165, 8184: 8056, 8185: 8057, 8186: 8060, 8187: 8061, 8486: 969, 8490: 107, 8491: 229, 8498: 8526, 8544: 8560, 8545: 8561, 8546: 8562, 8547: 8563, 8548: 8564, 8549: 8565, 8550: 8566, 8551: 8567, 8552: 8568, 8553: 8569, 8554: 8570, 8555: 8571, 8556: 8572, 8557: 8573, 8558: 8574, 8559: 8575, 8579: 8580, 9398: 9424, 9399: 9425, 9400: 9426, 9401: 9427, 9402: 9428, 9403: 9429, 9404: 9430, 9405: 9431, 9406: 9432, 9407: 9433, 9408: 9434, 9409: 9435, 9410: 9436, 9411: 9437, 9412: 9438, 9413: 9439, 9414: 9440, 9415: 9441, 9416: 9442, 9417: 9443, 9418: 9444, 9419: 9445, 9420: 9446, 9421: 9447, 9422: 9448, 9423: 9449, 11264: 11312, 11265: 11313, 11266: 11314, 11267: 11315, 11268: 11316, 11269: 11317, 11270: 11318, 11271: 11319, 11272: 11320, 11273: 11321, 11274: 11322, 11275: 11323, 11276: 11324, 11277: 11325, 11278: 11326, 11279: 11327, 11280: 11328, 11281: 11329, 11282: 11330, 11283: 11331, 11284: 11332, 11285: 11333, 11286: 11334, 11287: 11335, 11288: 11336, 11289: 11337, 11290: 11338, 11291: 11339, 11292: 11340, 11293: 11341, 11294: 11342, 11295: 11343, 11296: 11344, 11297: 11345, 11298: 11346, 11299: 11347, 11300: 11348, 11301: 11349, 11302: 11350, 11303: 11351, 11304: 11352, 11305: 11353, 11306: 11354, 11307: 11355, 11308: 11356, 11309: 11357, 11310: 11358, 11311: 11359, 11360: 11361, 11362: 619, 11363: 7549, 11364: 637, 11367: 11368, 11369: 11370, 11371: 11372, 11373: 593, 11374: 625, 11375: 592, 11376: 594, 11378: 11379, 11381: 11382, 11390: 575, 11391: 576, 11392: 11393, 11394: 11395, 11396: 11397, 11398: 11399, 11400: 11401, 11402: 11403, 11404: 11405, 11406: 11407, 11408: 11409, 11410: 11411, 11412: 11413, 11414: 11415, 11416: 11417, 11418: 11419, 11420: 11421, 11422: 11423, 11424: 11425, 11426: 11427, 11428: 11429, 11430: 11431, 11432: 11433, 11434: 11435, 11436: 11437, 11438: 11439, 11440: 11441, 11442: 11443, 11444: 11445, 11446: 11447, 11448: 11449, 11450: 11451, 11452: 11453, 11454: 11455, 11456: 11457, 11458: 11459, 11460: 11461, 11462: 11463, 11464: 11465, 11466: 11467, 11468: 11469, 11470: 11471, 11472: 11473, 11474: 11475, 11476: 11477, 11478: 11479, 11480: 11481, 11482: 11483, 11484: 11485, 11486: 11487, 11488: 11489, 11490: 11491, 11499: 11500, 11501: 11502, 11506: 11507, 42560: 42561, 42562: 42563, 42564: 42565, 42566: 42567, 42568: 42569, 42570: 42571, 42572: 42573, 42574: 42575, 42576: 42577, 42578: 42579, 42580: 42581, 42582: 42583, 42584: 42585, 42586: 42587, 42588: 42589, 42590: 42591, 42592: 42593, 42594: 42595, 42596: 42597, 42598: 42599, 42600: 42601, 42602: 42603, 42604: 42605, 42624: 42625, 42626: 42627, 42628: 42629, 42630: 42631, 42632: 42633, 42634: 42635, 42636: 42637, 42638: 42639, 42640: 42641, 42642: 42643, 42644: 42645, 42646: 42647, 42648: 42649, 42650: 42651, 42786: 42787, 42788: 42789, 42790: 42791, 42792: 42793, 42794: 42795, 42796: 42797, 42798: 42799, 42802: 42803, 42804: 42805, 42806: 42807, 42808: 42809, 42810: 42811, 42812: 42813, 42814: 42815, 42816: 42817, 42818: 42819, 42820: 42821, 42822: 42823, 42824: 42825, 42826: 42827, 42828: 42829, 42830: 42831, 42832: 42833, 42834: 42835, 42836: 42837, 42838: 42839, 42840: 42841, 42842: 42843, 42844: 42845, 42846: 42847, 42848: 42849, 42850: 42851, 42852: 42853, 42854: 42855, 42856: 42857, 42858: 42859, 42860: 42861, 42862: 42863, 42873: 42874, 42875: 42876, 42877: 7545, 42878: 42879, 42880: 42881, 42882: 42883, 42884: 42885, 42886: 42887, 42891: 42892, 42893: 613, 42896: 42897, 42898: 42899, 42902: 42903, 42904: 42905, 42906: 42907, 42908: 42909, 42910: 42911, 42912: 42913, 42914: 42915, 42916: 42917, 42918: 42919, 42920: 42921, 42922: 614, 42923: 604, 42924: 609, 42925: 620, 42926: 618, 42928: 670, 42929: 647, 42930: 669, 42931: 43859, 42932: 42933, 42934: 42935, 42936: 42937, 42938: 42939, 42940: 42941, 42942: 42943, 42944: 42945, 42946: 42947, 42948: 42900, 42949: 642, 42950: 7566, 42951: 42952, 42953: 42954, 42960: 42961, 42966: 42967, 42968: 42969, 42997: 42998, 43888: 5024, 43889: 5025, 43890: 5026, 43891: 5027, 43892: 5028, 43893: 5029, 43894: 5030, 43895: 5031, 43896: 5032, 43897: 5033, 43898: 5034, 43899: 5035, 43900: 5036, 43901: 5037, 43902: 5038, 43903: 5039, 43904: 5040, 43905: 5041, 43906: 5042, 43907: 5043, 43908: 5044, 43909: 5045, 43910: 5046, 43911: 5047, 43912: 5048, 43913: 5049, 43914: 5050, 43915: 5051, 43916: 5052, 43917: 5053, 43918: 5054, 43919: 5055, 43920: 5056, 43921: 5057, 43922: 5058, 43923: 5059, 43924: 5060, 43925: 5061, 43926: 5062, 43927: 5063, 43928: 5064, 43929: 5065, 43930: 5066, 43931: 5067, 43932: 5068, 43933: 5069, 43934: 5070, 43935: 5071, 43936: 5072, 43937: 5073, 43938: 5074, 43939: 5075, 43940: 5076, 43941: 5077, 43942: 5078, 43943: 5079, 43944: 5080, 43945: 5081, 43946: 5082, 43947: 5083, 43948: 5084, 43949: 5085, 43950: 5086, 43951: 5087, 43952: 5088, 43953: 5089, 43954: 5090, 43955: 5091, 43956: 5092, 43957: 5093, 43958: 5094, 43959: 5095, 43960: 5096, 43961: 5097, 43962: 5098, 43963: 5099, 43964: 5100, 43965: 5101, 43966: 5102, 43967: 5103, 65313: 65345, 65314: 65346, 65315: 65347, 65316: 65348, 65317: 65349, 65318: 65350, 65319: 65351, 65320: 65352, 65321: 65353, 65322: 65354, 65323: 65355, 65324: 65356, 65325: 65357, 65326: 65358, 65327: 65359, 65328: 65360, 65329: 65361, 65330: 65362, 65331: 65363, 65332: 65364, 65333: 65365, 65334: 65366, 65335: 65367, 65336: 65368, 65337: 65369, 65338: 65370, 66560: 66600, 66561: 66601, 66562: 66602, 66563: 66603, 66564: 66604, 66565: 66605, 66566: 66606, 66567: 66607, 66568: 66608, 66569: 66609, 66570: 66610, 66571: 66611, 66572: 66612, 66573: 66613, 66574: 66614, 66575: 66615, 66576: 66616, 66577: 66617, 66578: 66618, 66579: 66619, 66580: 66620, 66581: 66621, 66582: 66622, 66583: 66623, 66584: 66624, 66585: 66625, 66586: 66626, 66587: 66627, 66588: 66628, 66589: 66629, 66590: 66630, 66591: 66631, 66592: 66632, 66593: 66633, 66594: 66634, 66595: 66635, 66596: 66636, 66597: 66637, 66598: 66638, 66599: 66639, 66736: 66776, 66737: 66777, 66738: 66778, 66739: 66779, 66740: 66780, 66741: 66781, 66742: 66782, 66743: 66783, 66744: 66784, 66745: 66785, 66746: 66786, 66747: 66787, 66748: 66788, 66749: 66789, 66750: 66790, 66751: 66791, 66752: 66792, 66753: 66793, 66754: 66794, 66755: 66795, 66756: 66796, 66757: 66797, 66758: 66798, 66759: 66799, 66760: 66800, 66761: 66801, 66762: 66802, 66763: 66803, 66764: 66804, 66765: 66805, 66766: 66806, 66767: 66807, 66768: 66808, 66769: 66809, 66770: 66810, 66771: 66811, 66928: 66967, 66929: 66968, 66930: 66969, 66931: 66970, 66932: 66971, 66933: 66972, 66934: 66973, 66935: 66974, 66936: 66975, 66937: 66976, 66938: 66977, 66940: 66979, 66941: 66980, 66942: 66981, 66943: 66982, 66944: 66983, 66945: 66984, 66946: 66985, 66947: 66986, 66948: 66987, 66949: 66988, 66950: 66989, 66951: 66990, 66952: 66991, 66953: 66992, 66954: 66993, 66956: 66995, 66957: 66996, 66958: 66997, 66959: 66998, 66960: 66999, 66961: 67e3, 66962: 67001, 66964: 67003, 66965: 67004, 68736: 68800, 68737: 68801, 68738: 68802, 68739: 68803, 68740: 68804, 68741: 68805, 68742: 68806, 68743: 68807, 68744: 68808, 68745: 68809, 68746: 68810, 68747: 68811, 68748: 68812, 68749: 68813, 68750: 68814, 68751: 68815, 68752: 68816, 68753: 68817, 68754: 68818, 68755: 68819, 68756: 68820, 68757: 68821, 68758: 68822, 68759: 68823, 68760: 68824, 68761: 68825, 68762: 68826, 68763: 68827, 68764: 68828, 68765: 68829, 68766: 68830, 68767: 68831, 68768: 68832, 68769: 68833, 68770: 68834, 68771: 68835, 68772: 68836, 68773: 68837, 68774: 68838, 68775: 68839, 68776: 68840, 68777: 68841, 68778: 68842, 68779: 68843, 68780: 68844, 68781: 68845, 68782: 68846, 68783: 68847, 68784: 68848, 68785: 68849, 68786: 68850, 71840: 71872, 71841: 71873, 71842: 71874, 71843: 71875, 71844: 71876, 71845: 71877, 71846: 71878, 71847: 71879, 71848: 71880, 71849: 71881, 71850: 71882, 71851: 71883, 71852: 71884, 71853: 71885, 71854: 71886, 71855: 71887, 71856: 71888, 71857: 71889, 71858: 71890, 71859: 71891, 71860: 71892, 71861: 71893, 71862: 71894, 71863: 71895, 71864: 71896, 71865: 71897, 71866: 71898, 71867: 71899, 71868: 71900, 71869: 71901, 71870: 71902, 71871: 71903, 93760: 93792, 93761: 93793, 93762: 93794, 93763: 93795, 93764: 93796, 93765: 93797, 93766: 93798, 93767: 93799, 93768: 93800, 93769: 93801, 93770: 93802, 93771: 93803, 93772: 93804, 93773: 93805, 93774: 93806, 93775: 93807, 93776: 93808, 93777: 93809, 93778: 93810, 93779: 93811, 93780: 93812, 93781: 93813, 93782: 93814, 93783: 93815, 93784: 93816, 93785: 93817, 93786: 93818, 93787: 93819, 93788: 93820, 93789: 93821, 93790: 93822, 93791: 93823, 125184: 125218, 125185: 125219, 125186: 125220, 125187: 125221, 125188: 125222, 125189: 125223, 125190: 125224, 125191: 125225, 125192: 125226, 125193: 125227, 125194: 125228, 125195: 125229, 125196: 125230, 125197: 125231, 125198: 125232, 125199: 125233, 125200: 125234, 125201: 125235, 125202: 125236, 125203: 125237, 125204: 125238, 125205: 125239, 125206: 125240, 125207: 125241, 125208: 125242, 125209: 125243, 125210: 125244, 125211: 125245, 125212: 125246, 125213: 125247, 125214: 125248, 125215: 125249, 125216: 125250, 125217: 125251 };
    Nil.prototype.toString = function() {
      return "()";
    };
    Nil.prototype.valueOf = function() {
      return void 0;
    };
    Nil.prototype.serialize = function() {
      return 0;
    };
    Nil.prototype.to_object = function() {
      return {};
    };
    Nil.prototype.append = function(e75) {
      return new Pair(e75, _nil);
    };
    Nil.prototype.to_array = function() {
      return [];
    };
    _nil = new Nil();
    Pair.prototype.flatten = function() {
      return Pair.fromArray(flatten(this.to_array()));
    };
    Pair.prototype.length = function() {
      var e75 = 0;
      var t2 = this;
      while (true) {
        if (!t2 || is_nil(t2) || !is_pair(t2) || t2.have_cycles("cdr")) {
          break;
        }
        e75++;
        t2 = t2.cdr;
      }
      return e75;
    };
    Pair.prototype.freeze = function() {
      var e75 = this;
      while (true) {
        read_only(e75, "car", e75.car);
        if (is_pair(e75.car) && !e75.have_cycles("car")) {
          e75.car.freeze();
        }
        read_only(e75, "cdr", e75.cdr);
        if (e75.have_cycles("cdr")) {
          break;
        }
        e75 = e75.cdr;
        if (!is_pair(e75)) {
          break;
        }
      }
    };
    Pair.match = function(e75, t2) {
      if (e75 instanceof LSymbol) {
        return LSymbol.is(e75, t2);
      } else if (is_pair(e75)) {
        return Pair.match(e75.car, t2) || Pair.match(e75.cdr, t2);
      } else if (Array.isArray(e75)) {
        return e75.some(function(e76) {
          return Pair.match(e76, t2);
        });
      } else if (is_plain_object(e75)) {
        return Object.values(e75).some(function(e76) {
          return Pair.match(e76, t2);
        });
      }
      return false;
    };
    Pair.prototype.find = function(e75) {
      return Pair.match(this, e75);
    };
    Pair.prototype.clone = function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      var n = /* @__PURE__ */ new Map();
      function i(e75) {
        if (is_pair(e75)) {
          if (n.has(e75)) {
            return n.get(e75);
          }
          var t2 = new Pair();
          n.set(e75, t2);
          if (r) {
            t2.car = i(e75.car);
          } else {
            t2.car = e75.car;
          }
          t2.cdr = i(e75.cdr);
          t2[__cycles__] = e75[__cycles__];
          return t2;
        }
        return e75;
      }
      return i(this);
    };
    Pair.prototype.last_pair = function() {
      var e75 = this;
      while (true) {
        if (!is_pair(e75.cdr)) {
          return e75;
        }
        if (e75.have_cycles("cdr")) {
          break;
        }
        e75 = e75.cdr;
      }
    };
    Pair.prototype.to_array = function() {
      var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      var t2 = [];
      if (is_pair(this.car)) {
        if (e75) {
          t2.push(this.car.to_array());
        } else {
          t2.push(this.car);
        }
      } else {
        t2.push(this.car.valueOf());
      }
      if (is_pair(this.cdr)) {
        t2 = t2.concat(this.cdr.to_array(e75));
      }
      return t2;
    };
    Pair.fromArray = function(e75) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (is_pair(e75) || r && e75 instanceof Array && e75[__data__]) {
        return e75;
      }
      if (t2 === false) {
        var n = _nil;
        for (var i = e75.length; i--; ) {
          n = new Pair(e75[i], n);
        }
        return n;
      }
      if (e75.length && !(e75 instanceof Array)) {
        e75 = _toConsumableArray(e75);
      }
      var a = _nil;
      var o = e75.length;
      while (o--) {
        var u = e75[o];
        if (u instanceof Array) {
          u = Pair.fromArray(u, t2, r);
        } else if (typeof u === "string") {
          u = LString(u);
        } else if (typeof u === "number" && !Number.isNaN(u)) {
          u = LNumber(u);
        }
        a = new Pair(u, a);
      }
      return a;
    };
    Pair.prototype.to_object = function() {
      var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var t2 = this;
      var r = {};
      while (true) {
        if (is_pair(t2) && is_pair(t2.car)) {
          var n = t2.car;
          var i = n.car;
          if (i instanceof LSymbol) {
            i = i.__name__;
          }
          if (i instanceof LString) {
            i = i.valueOf();
          }
          var a = n.cdr;
          if (is_pair(a)) {
            a = a.to_object(e75);
          }
          if (is_native(a)) {
            if (!e75) {
              a = a.valueOf();
            }
          }
          r[i] = a;
          t2 = t2.cdr;
        } else {
          break;
        }
      }
      return r;
    };
    Pair.fromPairs = function(e75) {
      return e75.reduce(function(e76, t2) {
        return new Pair(new Pair(new LSymbol(t2[0]), t2[1]), e76);
      }, _nil);
    };
    Pair.fromObject = function(t2) {
      var e75 = Object.keys(t2).map(function(e76) {
        return [e76, t2[e76]];
      });
      return Pair.fromPairs(e75);
    };
    Pair.prototype.reduce = function(e75) {
      var t2 = this;
      var r = _nil;
      while (true) {
        if (!is_nil(t2)) {
          r = e75(r, t2.car);
          t2 = t2.cdr;
        } else {
          break;
        }
      }
      return r;
    };
    Pair.prototype.reverse = function() {
      if (this.have_cycles()) {
        throw new Error("You can't reverse list that have cycles");
      }
      var e75 = this;
      var t2 = _nil;
      while (!is_nil(e75)) {
        var r = e75.cdr;
        e75.cdr = t2;
        t2 = e75;
        e75 = r;
      }
      return t2;
    };
    Pair.prototype.transform = function(n) {
      function i(e75) {
        if (is_pair(e75)) {
          if (e75.replace) {
            delete e75.replace;
            return e75;
          }
          var t2 = n(e75.car);
          if (is_pair(t2)) {
            t2 = i(t2);
          }
          var r = n(e75.cdr);
          if (is_pair(r)) {
            r = i(r);
          }
          return new Pair(t2, r);
        }
        return e75;
      }
      return i(this);
    };
    Pair.prototype.map = function(e75) {
      if (typeof this.car !== "undefined") {
        return new Pair(e75(this.car), is_nil(this.cdr) ? _nil : this.cdr.map(e75));
      } else {
        return _nil;
      }
    };
    repr = /* @__PURE__ */ new Map();
    props = Object.getOwnPropertyNames(Array.prototype);
    array_methods = [];
    props.forEach(function(e75) {
      array_methods.push(Array[e75], Array.prototype[e75]);
    });
    str_mapping = /* @__PURE__ */ new Map();
    [[true, "#t"], [false, "#f"], [null, "#null"], [void 0, "#void"]].forEach(function(e75) {
      var t2 = _slicedToArray(e75, 2), r = t2[0], n = t2[1];
      str_mapping.set(r, n);
    });
    instances = /* @__PURE__ */ new Map();
    [[Error, function(e75) {
      return e75.message;
    }], [Pair, function(e75, t2) {
      var r = t2.quote, n = t2.skip_cycles, i = t2.pair_args;
      if (!n) {
        e75.mark_cycles();
      }
      return e75.toString.apply(e75, [r].concat(_toConsumableArray(i)));
    }], [LCharacter, function(e75, t2) {
      var r = t2.quote;
      if (r) {
        return e75.toString();
      }
      return e75.valueOf();
    }], [LString, function(e75, t2) {
      var r = t2.quote;
      e75 = e75.toString();
      if (r) {
        return JSON.stringify(e75).replace(/\\n/g, "\n");
      }
      return e75;
    }], [RegExp, function(e75) {
      return "#" + e75.toString();
    }]].forEach(function(e75) {
      var t2 = _slicedToArray(e75, 2), r = t2[0], n = t2[1];
      instances.set(r, n);
    });
    native_types = [LSymbol, Macro, InputPort, OutputPort, Environment, QuotedPromise];
    Pair.prototype.mark_cycles = function() {
      mark_cycles(this);
      return this;
    };
    Pair.prototype.have_cycles = function() {
      var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      if (!e75) {
        return this.have_cycles("car") || this.have_cycles("cdr");
      }
      return !!(this[__cycles__] && this[__cycles__][e75]);
    };
    Pair.prototype.is_cycle = function() {
      return is_cycle(this);
    };
    Pair.prototype.toString = function(e75) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t2.nested, n = r === void 0 ? false : r;
      var i = [];
      if (this[__ref__]) {
        i.push(this[__ref__] + "(");
      } else if (!n) {
        i.push("(");
      }
      var a;
      if (this[__cycles__] && this[__cycles__].car) {
        a = this[__cycles__].car;
      } else {
        a = to_string(this.car, e75, true);
      }
      if (a !== void 0) {
        i.push(a);
      }
      if (is_pair(this.cdr)) {
        if (this[__cycles__] && this[__cycles__].cdr) {
          i.push(" . ");
          i.push(this[__cycles__].cdr);
        } else {
          if (this.cdr[__ref__]) {
            i.push(" . ");
          } else {
            i.push(" ");
          }
          var o = this.cdr.toString(e75, { nested: true });
          i.push(o);
        }
      } else if (!is_nil(this.cdr)) {
        i = i.concat([" . ", to_string(this.cdr, e75, true)]);
      }
      if (!n || this[__ref__]) {
        i.push(")");
      }
      return i.join("");
    };
    Pair.prototype.set = function(e75, t2) {
      this[e75] = t2;
      if (is_pair(t2)) {
        this.mark_cycles();
      }
    };
    Pair.prototype.append = function(e75) {
      if (e75 instanceof Array) {
        return this.append(Pair.fromArray(e75));
      }
      var t2 = this;
      if (t2.car === void 0) {
        if (is_pair(e75)) {
          this.car = e75.car;
          this.cdr = e75.cdr;
        } else {
          this.car = e75;
        }
      } else if (!is_nil(e75)) {
        while (true) {
          if (is_pair(t2) && !is_nil(t2.cdr)) {
            t2 = t2.cdr;
          } else {
            break;
          }
        }
        t2.cdr = e75;
      }
      return this;
    };
    Pair.prototype.serialize = function() {
      return [this.car, this.cdr];
    };
    Pair.prototype[Symbol.iterator] = function() {
      var r = this;
      return { next: function e75() {
        var t2 = r;
        r = t2.cdr;
        if (is_nil(t2)) {
          return { value: void 0, done: true };
        } else {
          return { value: t2.car, done: false };
        }
      } };
    };
    truncate = function() {
      if (Math.trunc) {
        return Math.trunc;
      } else {
        return function(e75) {
          if (e75 === 0) {
            return 0;
          } else if (e75 < 0) {
            return Math.ceil(e75);
          } else {
            return Math.floor(e75);
          }
        };
      }
    }();
    Macro.defmacro = function(e75, t2, r, n) {
      var i = new Macro(e75, t2, r, n);
      i.__defmacro__ = true;
      return i;
    };
    Macro.prototype.invoke = function(e75, t2, r) {
      var n = t2.env, i = _objectWithoutProperties(t2, _excluded2);
      var a = _objectSpread(_objectSpread({}, i), {}, { macro_expand: r });
      var o = this.__fn__.call(n, e75, a, this.__name__);
      return o;
    };
    Macro.prototype.toString = function() {
      return "#<macro:".concat(this.__name__, ">");
    };
    macro = "define-macro";
    recur_guard = -1e4;
    Syntax.__merge_env__ = Symbol["for"]("merge");
    Syntax.prototype = Object.create(Macro.prototype);
    Syntax.prototype.invoke = function(e75, t2, r) {
      var n = t2.error, i = t2.env, a = t2.use_dynamic;
      var o = { error: n, env: i, use_dynamic: a, dynamic_env: this.__env__, macro_expand: r };
      return this.__fn__.call(i, e75, o, this.__name__ || "syntax");
    };
    Syntax.prototype.constructor = Syntax;
    Syntax.prototype.toString = function() {
      if (this.__name__) {
        return "#<syntax:".concat(this.__name__, ">");
      }
      return "#<syntax>";
    };
    SyntaxParameter = _createClass(function e16(t2) {
      _classCallCheck(this, e16);
      read_only(this, "_syntax", t2, { hidden: true });
      read_only(this._syntax, "_param", true, { hidden: true });
    });
    Syntax.Parameter = SyntaxParameter;
    __context__ = Symbol["for"]("__context__");
    __fn__ = Symbol["for"]("__fn__");
    __data__ = Symbol["for"]("__data__");
    __ref__ = Symbol["for"]("__ref__");
    __cycles__ = Symbol["for"]("__cycles__");
    __class__ = Symbol["for"]("__class__");
    __method__ = Symbol["for"]("__method__");
    __prototype__ = Symbol["for"]("__prototype__");
    __lambda__ = Symbol["for"]("__lambda__");
    exluded_names = ["name", "length", "caller", "callee", "arguments", "prototype"];
    single_math_op = curry(limit_math_op, 1);
    binary_math_op = curry(limit_math_op, 2);
    LCharacter.is = function(e75, t2) {
      return e75 instanceof LCharacter && e75.__char__ === t2;
    };
    LCharacter.__names__ = characters;
    LCharacter.__rev_names__ = {};
    Object.keys(LCharacter.__names__).forEach(function(e75) {
      var t2 = LCharacter.__names__[e75];
      LCharacter.__rev_names__[t2] = e75;
    });
    LCharacter.prototype.toUpperCase = function() {
      return LCharacter(this.__char__.toUpperCase());
    };
    LCharacter.prototype.toLowerCase = function() {
      return LCharacter(this.__char__.toLowerCase());
    };
    LCharacter.prototype.toString = function() {
      return "#\\" + (this.__name__ || this.__char__);
    };
    LCharacter.prototype.valueOf = LCharacter.prototype.serialize = function() {
      return this.__char__;
    };
    {
      ignore = ["length", "constructor"];
      _keys = Object.getOwnPropertyNames(String.prototype).filter(function(e75) {
        return !ignore.includes(e75);
      });
      wrap = function e75(n) {
        return function() {
          for (var e76 = arguments.length, t2 = new Array(e76), r = 0; r < e76; r++) {
            t2[r] = arguments[r];
          }
          return n.apply(this.__string__, t2);
        };
      };
      _iterator10 = _createForOfIteratorHelper(_keys);
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          key = _step10.value;
          LString.prototype[key] = wrap(String.prototype[key]);
        }
      } catch (e75) {
        _iterator10.e(e75);
      } finally {
        _iterator10.f();
      }
    }
    LString.prototype[Symbol.iterator] = _regeneratorRuntime.mark(function e17() {
      var r, n, i, a;
      return _regeneratorRuntime.wrap(function e75(t2) {
        while (1) switch (t2.prev = t2.next) {
          case 0:
            r = Array.from(this.__string__);
            n = 0, i = r;
          case 2:
            if (!(n < i.length)) {
              t2.next = 9;
              break;
            }
            a = i[n];
            t2.next = 6;
            return LCharacter(a);
          case 6:
            n++;
            t2.next = 2;
            break;
          case 9:
          case "end":
            return t2.stop();
        }
      }, e17, this);
    });
    LString.prototype.serialize = function() {
      return this.valueOf();
    };
    LString.is = function(e75, t2) {
      return e75 instanceof LString && e75.__string__ === t2;
    };
    LString.isString = function(e75) {
      return e75 instanceof LString || typeof e75 === "string";
    };
    LString.prototype.freeze = function() {
      var e75 = this.__string__;
      delete this.__string__;
      read_only(this, "__string__", e75);
    };
    LString.prototype.get = function(e75) {
      typecheck("LString::get", e75, "number");
      return Array.from(this.__string__)[e75.valueOf()];
    };
    LString.prototype.cmp = function(e75) {
      typecheck("LString::cmp", e75, "string");
      var t2 = this.valueOf();
      var r = e75.valueOf();
      if (t2 < r) {
        return -1;
      } else if (t2 === r) {
        return 0;
      } else {
        return 1;
      }
    };
    LString.prototype.lower = function() {
      return LString(this.__string__.toLowerCase());
    };
    LString.prototype.upper = function() {
      return LString(this.__string__.toUpperCase());
    };
    LString.prototype.set = function(e75, t2) {
      typecheck("LString::set", e75, "number");
      typecheck("LString::set", t2, ["string", "character"]);
      e75 = e75.valueOf();
      if (t2 instanceof LCharacter) {
        t2 = t2.__char__;
      }
      var r = [];
      if (e75 > 0) {
        r.push(this.__string__.substring(0, e75));
      }
      r.push(t2);
      if (e75 < this.__string__.length - 1) {
        r.push(this.__string__.substring(e75 + 1));
      }
      this.__string__ = r.join("");
    };
    Object.defineProperty(LString.prototype, "length", { get: function e18() {
      return this.__string__.length;
    } });
    LString.prototype.clone = function() {
      return LString(this.valueOf());
    };
    LString.prototype.fill = function(e75) {
      typecheck("LString::fill", e75, ["string", "character"]);
      if (e75 instanceof LCharacter) {
        e75 = e75.valueOf();
      }
      var t2 = this.__string__.length;
      this.__string__ = e75.repeat(t2);
    };
    LNumber.prototype.constant = function(e75, t2) {
      enumerable(this, "__value__", e75);
      enumerable(this, "__type__", t2);
    };
    LNumber.types = { float: function e19(t2) {
      return new LFloat(t2);
    }, complex: function e20(t2) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!LNumber.isComplex(t2)) {
        t2 = { im: 0, re: t2 };
      }
      return new LComplex(t2, r);
    }, rational: function e21(t2) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!LNumber.isRational(t2)) {
        t2 = { num: t2, denom: 1 };
      }
      return new LRational(t2, r);
    } };
    LNumber.prototype.serialize = function() {
      return this.__value__;
    };
    LNumber.prototype.isNaN = function() {
      return Number.isNaN(this.__value__);
    };
    LNumber.prototype.gcd = function(e75) {
      var t2 = this.abs();
      e75 = e75.abs();
      if (e75.cmp(t2) === 1) {
        var r = t2;
        t2 = e75;
        e75 = r;
      }
      while (true) {
        t2 = t2.rem(e75);
        if (t2.cmp(0) === 0) {
          return e75;
        }
        e75 = e75.rem(t2);
        if (e75.cmp(0) === 0) {
          return t2;
        }
      }
    };
    LNumber.isFloat = function e22(t2) {
      return t2 instanceof LFloat || Number(t2) === t2 && t2 % 1 !== 0;
    };
    LNumber.isNumber = function(e75) {
      return e75 instanceof LNumber || LNumber.isNative(e75) || LNumber.isBN(e75);
    };
    LNumber.isComplex = function(e75) {
      if (!e75) {
        return false;
      }
      var t2 = e75 instanceof LComplex || (LNumber.isNumber(e75.im) || LNumber.isRational(e75.im) || Number.isNaN(e75.im)) && (LNumber.isNumber(e75.re) || LNumber.isRational(e75.re) || Number.isNaN(e75.re));
      return t2;
    };
    LNumber.isRational = function(e75) {
      if (!e75) {
        return false;
      }
      return e75 instanceof LRational || LNumber.isNumber(e75.num) && LNumber.isNumber(e75.denom);
    };
    LNumber.isInteger = function(e75) {
      if (!(LNumber.isNative(e75) || e75 instanceof LNumber)) {
        return false;
      }
      if (LNumber.isFloat(e75)) {
        return false;
      }
      if (LNumber.isRational(e75)) {
        return false;
      }
      if (LNumber.isComplex(e75)) {
        return false;
      }
      return true;
    };
    LNumber.isNative = function(e75) {
      return typeof e75 === "bigint" || typeof e75 === "number";
    };
    LNumber.isBigInteger = function(e75) {
      return e75 instanceof LBigInteger || typeof e75 === "bigint" || LNumber.isBN(e75);
    };
    LNumber.isBN = function(e75) {
      return typeof BN !== "undefined" && e75 instanceof BN;
    };
    LNumber.getArgsType = function(e75, t2) {
      if (e75 instanceof LFloat || t2 instanceof LFloat) {
        return LFloat;
      }
      if (e75 instanceof LBigInteger || t2 instanceof LBigInteger) {
        return LBigInteger;
      }
      return LNumber;
    };
    LNumber.prototype.toString = function(e75) {
      if (Number.isNaN(this.__value__)) {
        return "+nan.0";
      }
      if (e75 >= 2 && e75 < 36) {
        return this.__value__.toString(e75);
      }
      return this.__value__.toString();
    };
    LNumber.prototype.asType = function(e75) {
      var t2 = LNumber.getType(this);
      return LNumber.types[t2] ? LNumber.types[t2](e75) : LNumber(e75);
    };
    LNumber.prototype.isBigNumber = function() {
      return typeof this.__value__ === "bigint" || typeof BN !== "undefined" && !(this.value instanceof BN);
    };
    ["floor", "ceil", "round"].forEach(function(e75) {
      LNumber.prototype[e75] = function() {
        if (this["float"] || LNumber.isFloat(this.__value__)) {
          return LNumber(Math[e75](this.__value__));
        } else {
          return LNumber(Math[e75](this.valueOf()));
        }
      };
    });
    LNumber.prototype.valueOf = function() {
      if (LNumber.isNative(this.__value__)) {
        return Number(this.__value__);
      } else if (LNumber.isBN(this.__value__)) {
        return this.__value__.toNumber();
      }
    };
    matrix = function() {
      var e75 = function e76(t3, r) {
        return [t3, r];
      };
      return { bigint: { bigint: e75, float: function e76(t3, r) {
        return [LFloat(t3.valueOf()), r];
      }, rational: function e76(t3, r) {
        return [{ num: t3, denom: 1 }, r];
      }, complex: function e76(t3, r) {
        return [{ im: 0, re: t3 }, r];
      } }, integer: { integer: e75, float: function e76(t3, r) {
        return [LFloat(t3.valueOf()), r];
      }, rational: function e76(t3, r) {
        return [{ num: t3, denom: 1 }, r];
      }, complex: function e76(t3, r) {
        return [{ im: 0, re: t3 }, r];
      } }, float: { bigint: function e76(t3, r) {
        return [t3, r && LFloat(r.valueOf())];
      }, integer: function e76(t3, r) {
        return [t3, r && LFloat(r.valueOf())];
      }, float: e75, rational: function e76(t3, r) {
        return [t3, r && LFloat(r.valueOf())];
      }, complex: function e76(t3, r) {
        return [{ re: t3, im: LFloat(0) }, r];
      } }, complex: { bigint: t2("bigint"), integer: t2("integer"), float: t2("float"), rational: t2("rational"), complex: function e76(t3, r) {
        var n = LNumber.coerce(t3.__re__, r.__re__), i = _slicedToArray(n, 2), a = i[0], o = i[1];
        var u = LNumber.coerce(t3.__im__, r.__im__), s = _slicedToArray(u, 2), c = s[0], l = s[1];
        return [{ im: c, re: a }, { im: l, re: o }];
      } }, rational: { bigint: function e76(t3, r) {
        return [t3, r && { num: r, denom: 1 }];
      }, integer: function e76(t3, r) {
        return [t3, r && { num: r, denom: 1 }];
      }, float: function e76(t3, r) {
        return [LFloat(t3.valueOf()), r];
      }, rational: e75, complex: function e76(t3, r) {
        return [{ im: coerce(t3.__type__, r.__im__.__type__, 0)[0], re: coerce(t3.__type__, r.__re__.__type__, t3)[0] }, { im: coerce(t3.__type__, r.__im__.__type__, r.__im__)[0], re: coerce(t3.__type__, r.__re__.__type__, r.__re__)[0] }];
      } } };
      function t2(r) {
        return function(e76, t3) {
          return [{ im: coerce(r, e76.__im__.__type__, 0, e76.__im__)[1], re: coerce(r, e76.__re__.__type__, 0, e76.__re__)[1] }, { im: coerce(r, e76.__im__.__type__, 0, 0)[1], re: coerce(r, t3.__type__, 0, t3)[1] }];
        };
      }
    }();
    LNumber.coerce = function(e75, t2) {
      var r = LNumber.getType(e75);
      var n = LNumber.getType(t2);
      if (!matrix[r]) {
        throw new Error("LNumber::coerce unknown lhs type ".concat(r));
      } else if (!matrix[r][n]) {
        throw new Error("LNumber::coerce unknown rhs type ".concat(n));
      }
      var i = matrix[r][n](e75, t2);
      return i.map(function(e76) {
        return LNumber(e76, true);
      });
    };
    LNumber.prototype.coerce = function(e75) {
      if (!(typeof e75 === "number" || e75 instanceof LNumber)) {
        throw new Error("LNumber: you can't coerce ".concat(type(e75)));
      }
      if (typeof e75 === "number") {
        e75 = LNumber(e75);
      }
      return LNumber.coerce(this, e75);
    };
    LNumber.getType = function(e75) {
      if (e75 instanceof LNumber) {
        return e75.__type__;
      }
      if (LNumber.isFloat(e75)) {
        return "float";
      }
      if (LNumber.isComplex(e75)) {
        return "complex";
      }
      if (LNumber.isRational(e75)) {
        return "rational";
      }
      if (typeof e75 === "number") {
        return "integer";
      }
      if (typeof BigInt !== "undefined" && typeof e75 !== "bigint" || typeof BN !== "undefined" && !(e75 instanceof BN)) {
        return "bigint";
      }
    };
    LNumber.prototype.isFloat = function() {
      return !!(LNumber.isFloat(this.__value__) || this["float"]);
    };
    mapping = { add: "+", sub: "-", mul: "*", div: "/", rem: "%", or: "|", and: "&", neg: "~", shl: ">>", shr: "<<" };
    rev_mapping = {};
    Object.keys(mapping).forEach(function(t2) {
      rev_mapping[mapping[t2]] = t2;
      LNumber.prototype[t2] = function(e75) {
        return this.op(mapping[t2], e75);
      };
    });
    LNumber._ops = { "*": function e23(t2, r) {
      return t2 * r;
    }, "+": function e24(t2, r) {
      return t2 + r;
    }, "-": function e25(t2, r) {
      if (typeof r === "undefined") {
        return -t2;
      }
      return t2 - r;
    }, "/": function e26(t2, r) {
      return t2 / r;
    }, "%": function e27(t2, r) {
      return t2 % r;
    }, "|": function e28(t2, r) {
      return t2 | r;
    }, "&": function e29(t2, r) {
      return t2 & r;
    }, "~": function e30(t2) {
      return ~t2;
    }, ">>": function e31(t2, r) {
      return t2 >> r;
    }, "<<": function e32(t2, r) {
      return t2 << r;
    } };
    LNumber.prototype.op = function(e75, t2) {
      if (typeof t2 === "undefined") {
        return LNumber(LNumber._ops[e75](this.valueOf()));
      }
      if (typeof t2 === "number") {
        t2 = LNumber(t2);
      }
      if (Number.isNaN(this.__value__) && !LNumber.isComplex(t2) || !LNumber.isComplex(this) && Number.isNaN(t2.__value__)) {
        return LNumber(NaN);
      }
      var r = this.coerce(t2), n = _slicedToArray(r, 2), i = n[0], a = n[1];
      if (i._op) {
        return i._op(e75, a);
      }
      return LNumber(LNumber._ops[e75](i, a));
    };
    LNumber.prototype.sqrt = function() {
      var e75 = this.valueOf();
      if (this.cmp(0) < 0) {
        var t2 = Math.sqrt(-e75);
        return LComplex({ re: 0, im: t2 });
      }
      return LNumber(Math.sqrt(e75));
    };
    pow = function e33(t2, r) {
      return Math.pow(t2, r);
    };
    try {
      exp_op = new Function("a,b", "return a ** b");
      if (exp_op(2, 2) === 4) {
        pow = exp_op;
      }
    } catch (e75) {
    }
    LNumber.prototype.pow = function(e75) {
      var t2;
      var r = this.coerce(e75), n = _slicedToArray(r, 2), i = n[0], a = n[1];
      if (LNumber.isNative(i.__value__) && LNumber.isNative(a.__value__)) {
        t2 = pow(i.__value__, a.__value__);
      } else if (LNumber.isBN(i.__value__) && LNumber.isBN(a.__value__)) {
        t2 = this.__value__.pow(e75.__value__);
      } else if (i.pow) {
        return i.pow(a);
      }
      return LNumber(t2);
    };
    LNumber.prototype.abs = function() {
      var e75 = this.__value__;
      if (LNumber.isNative(this.__value__)) {
        if (e75 < 0) {
          e75 = -e75;
        }
      } else if (LNumber.isBN(e75)) {
        e75.iabs();
      }
      return new LNumber(e75);
    };
    LNumber.prototype.isOdd = function() {
      if (LNumber.isNative(this.__value__)) {
        if (this.isBigNumber()) {
          return this.__value__ % BigInt(2) === BigInt(1);
        }
        if (this.__type__ === "float") {
          throw new Error("Invalid number float");
        }
        return this.__value__ % 2 === 1;
      } else if (LNumber.isBN(this.__value__)) {
        return this.__value__.isOdd();
      }
      throw new Error("Invalid number ".concat(this.__type__));
    };
    LNumber.prototype.isEven = function() {
      return !this.isOdd();
    };
    LNumber.prototype.cmp = function(e75) {
      var t2 = this.coerce(e75), r = _slicedToArray(t2, 2), n = r[0], i = r[1];
      function a(e76, t3) {
        if (e76.__value__ < t3.__value__) {
          return -1;
        } else if (e76.__value__ === t3.__value__) {
          return 0;
        } else {
          return 1;
        }
      }
      if (n.__type__ === "bigint") {
        if (LNumber.isNative(n.__value__)) {
          return a(n, i);
        } else if (LNumber.isBN(n.__value__)) {
          return this.__value__.cmp(i.__value__);
        }
      } else if (n instanceof LFloat) {
        return a(n, i);
      }
    };
    LComplex.prototype = Object.create(LNumber.prototype);
    LComplex.prototype.constructor = LComplex;
    LComplex.prototype.constant = function(e75, t2) {
      enumerable(this, "__im__", e75);
      enumerable(this, "__re__", t2);
      enumerable(this, "__type__", "complex");
    };
    LComplex.prototype.abs = function() {
      return LNumber(this.modulus());
    };
    LComplex.prototype.serialize = function() {
      return { re: this.__re__, im: this.__im__ };
    };
    LComplex.prototype.toRational = function(e75) {
      var t2 = this.__im__, r = this.__re__;
      if (LNumber.isFloat(this.__im__)) {
        t2 = LFloat(this.__im__).toRational(e75);
      }
      if (LNumber.isFloat(this.__re__)) {
        r = LFloat(this.__re__).toRational(e75);
      }
      return LComplex({ im: t2, re: r });
    };
    LComplex.prototype.pow = function(e75) {
      e75.cmp(0);
      if (e75 === 0) {
        return LNumber(1);
      }
      var t2 = LNumber(Math.atan2(this.__im__.valueOf(), this.__re__.valueOf()));
      var r = LNumber(this.modulus());
      if (LNumber.isComplex(e75) && e75.__im__.cmp(0) !== 0) {
        var n = e75.mul(Math.log(r.valueOf())).add(LComplex.i.mul(t2).mul(e75));
        if (!LNumber.isComplex(n)) {
          return LFloat(Math.E).pow(n);
        }
        var i = LFloat(Math.E).pow(n.__re__.valueOf());
        return LComplex({ re: i.mul(Math.cos(n.__im__.valueOf())), im: i.mul(Math.sin(n.__im__.valueOf())) });
      }
      var a = e75.__re__.cmp(0) > 0;
      e75 = e75.__re__.valueOf();
      if (LNumber.isInteger(e75) && a) {
        var o = this;
        while (--e75) {
          o = o.mul(this);
        }
        return o;
      }
      var u = r.pow(e75);
      var s = t2.mul(e75);
      return LComplex({ re: u.mul(Math.cos(s)), im: u.mul(Math.sin(s)) });
    };
    LComplex.prototype.add = function(e75) {
      return this.complex_op("add", e75, function(e76, t2, r, n) {
        return { re: e76.add(t2), im: r.add(n) };
      });
    };
    LComplex.prototype.factor = function() {
      if (this.__im__ instanceof LFloat || this.__im__ instanceof LFloat) {
        var e75 = this.__re__, t2 = this.__im__;
        var r, n;
        if (e75 instanceof LFloat) {
          r = e75.toRational().mul(e75.toRational());
        } else {
          r = e75.mul(e75);
        }
        if (t2 instanceof LFloat) {
          n = t2.toRational().mul(t2.toRational());
        } else {
          n = t2.mul(t2);
        }
        return r.add(n);
      } else {
        return this.__re__.mul(this.__re__).add(this.__im__.mul(this.__im__));
      }
    };
    LComplex.prototype.modulus = function() {
      return this.factor().sqrt();
    };
    LComplex.prototype.conjugate = function() {
      return LComplex({ re: this.__re__, im: this.__im__.sub() });
    };
    LComplex.prototype.sqrt = function() {
      var e75 = this.modulus();
      var t2, r;
      if (e75.cmp(0) === 0) {
        t2 = r = e75;
      } else if (this.__re__.cmp(0) === 1) {
        t2 = LFloat(0.5).mul(e75.add(this.__re__)).sqrt();
        r = this.__im__.div(t2).div(2);
      } else {
        r = LFloat(0.5).mul(e75.sub(this.__re__)).sqrt();
        if (this.__im__.cmp(0) === -1) {
          r = r.sub();
        }
        t2 = this.__im__.div(r).div(2);
      }
      return LComplex({ im: r, re: t2 });
    };
    LComplex.prototype.div = function(e75) {
      if (LNumber.isNumber(e75) && !LNumber.isComplex(e75)) {
        if (!(e75 instanceof LNumber)) {
          e75 = LNumber(e75);
        }
        var t2 = this.__re__.div(e75);
        var r = this.__im__.div(e75);
        return LComplex({ re: t2, im: r });
      } else if (!LNumber.isComplex(e75)) {
        throw new Error("[LComplex::div] Invalid value");
      }
      if (this.cmp(e75) === 0) {
        var n = this.coerce(e75), i = _slicedToArray(n, 2), a = i[0], o = i[1];
        var u = a.__im__.div(o.__im__);
        return u.coerce(o.__re__)[0];
      }
      var s = this.coerce(e75), c = _slicedToArray(s, 2), l = c[0], f = c[1];
      var _ = f.factor();
      var p = f.conjugate();
      var d = l.mul(p);
      if (!LNumber.isComplex(d)) {
        return d.div(_);
      }
      var h = d.__re__.op("/", _);
      var m = d.__im__.op("/", _);
      return LComplex({ re: h, im: m });
    };
    LComplex.prototype.sub = function(e75) {
      return this.complex_op("sub", e75, function(e76, t2, r, n) {
        return { re: e76.sub(t2), im: r.sub(n) };
      });
    };
    LComplex.prototype.mul = function(e75) {
      return this.complex_op("mul", e75, function(e76, t2, r, n) {
        var i = { re: e76.mul(t2).sub(r.mul(n)), im: e76.mul(n).add(t2.mul(r)) };
        return i;
      });
    };
    LComplex.prototype.complex_op = function(e75, t2, i) {
      var a = this;
      var r = function e76(t3, r2) {
        var n2 = i(a.__re__, t3, a.__im__, r2);
        if ("im" in n2 && "re" in n2) {
          if (n2.im.cmp(0) === 0) {
            return n2.re;
          }
          return LComplex(n2, true);
        }
        return n2;
      };
      if (typeof t2 === "undefined") {
        return r();
      }
      if (LNumber.isNumber(t2) && !LNumber.isComplex(t2)) {
        if (!(t2 instanceof LNumber)) {
          t2 = LNumber(t2);
        }
        var n = t2.asType(0);
        t2 = { __im__: n, __re__: t2 };
      } else if (!LNumber.isComplex(t2)) {
        throw new Error("[LComplex::".concat(e75, "] Invalid value"));
      }
      var o = t2.__re__ instanceof LNumber ? t2.__re__ : this.__re__.asType(t2.__re__);
      var u = t2.__im__ instanceof LNumber ? t2.__im__ : this.__im__.asType(t2.__im__);
      return r(o, u);
    };
    LComplex._op = { "+": "add", "-": "sub", "*": "mul", "/": "div" };
    LComplex.prototype._op = function(e75, t2) {
      var r = LComplex._op[e75];
      return this[r](t2);
    };
    LComplex.prototype.cmp = function(e75) {
      var t2 = this.coerce(e75), r = _slicedToArray(t2, 2), n = r[0], i = r[1];
      var a = n.__re__.coerce(i.__re__), o = _slicedToArray(a, 2), u = o[0], s = o[1];
      var c = u.cmp(s);
      if (c !== 0) {
        return c;
      } else {
        var l = n.__im__.coerce(i.__im__), f = _slicedToArray(l, 2), _ = f[0], p = f[1];
        return _.cmp(p);
      }
    };
    LComplex.prototype.valueOf = function() {
      return [this.__re__, this.__im__].map(function(e75) {
        return e75.valueOf();
      });
    };
    LComplex.prototype.toString = function() {
      var e75;
      if (this.__re__.cmp(0) !== 0) {
        e75 = [to_string(this.__re__)];
      } else {
        e75 = [];
      }
      var t2 = this.__im__.valueOf();
      var r = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY].includes(t2);
      var n = to_string(this.__im__);
      if (!r && !Number.isNaN(t2)) {
        var i = this.__im__.cmp(0);
        if (i < 0 || i === 0 && this.__im__._minus) {
          e75.push("-");
        } else {
          e75.push("+");
        }
        n = n.replace(/^-/, "");
      }
      e75.push(n);
      e75.push("i");
      return e75.join("");
    };
    LFloat.prototype = Object.create(LNumber.prototype);
    LFloat.prototype.constructor = LFloat;
    LFloat.prototype.toString = function(e75) {
      if (this.__value__ === Number.NEGATIVE_INFINITY) {
        return "-inf.0";
      }
      if (this.__value__ === Number.POSITIVE_INFINITY) {
        return "+inf.0";
      }
      if (Number.isNaN(this.__value__)) {
        return "+nan.0";
      }
      e75 && (e75 = e75.valueOf());
      var t2 = this.__value__.toString(e75);
      if (!t2.match(/e[+-]?[0-9]+$/i)) {
        var r = t2.replace(/^-/, "");
        var n = this.__value__ < 0 ? "-" : "";
        if (t2.match(/^-?0\.0{3}/)) {
          var i = r.match(/^[.0]+/g)[0].length - 1;
          var a = r.replace(/^[.0]+/, "").replace(/^([0-9a-f])/i, "$1.");
          return "".concat(n).concat(a, "e-").concat(i.toString(e75));
        }
        if (t2.match(/^-?[0-9a-f]{7,}\.?/i)) {
          var o = r.match(/^[0-9a-f]+/gi)[0].length - 1;
          var u = r.replace(/\./, "").replace(/^([0-9a-f])/i, "$1.").replace(/0+$/, "").replace(/\.$/, ".0");
          return "".concat(n).concat(u, "e+").concat(o.toString(e75));
        }
        if (!LNumber.isFloat(this.__value__)) {
          var s = t2 + ".0";
          return this._minus ? "-" + s : s;
        }
      }
      return t2.replace(/^([0-9]+)e/, "$1.0e");
    };
    LFloat.prototype._op = function(e75, t2) {
      if (t2 instanceof LNumber) {
        t2 = t2.__value__;
      }
      var r = LNumber._ops[e75];
      if (e75 === "/" && this.__value__ === 0 && t2 === 0) {
        return NaN;
      }
      return LFloat(r(this.__value__, t2));
    };
    LFloat.prototype.toRational = function() {
      var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      if (e75 === null) {
        return toRational(this.__value__.valueOf());
      }
      return approxRatio(e75.valueOf())(this.__value__.valueOf());
    };
    LFloat.prototype.sqrt = function() {
      var e75 = this.valueOf();
      if (this.cmp(0) < 0) {
        var t2 = LFloat(Math.sqrt(-e75));
        return LComplex({ re: 0, im: t2 });
      }
      return LFloat(Math.sqrt(e75));
    };
    LFloat.prototype.abs = function() {
      var e75 = this.valueOf();
      if (e75 < 0) {
        e75 = -e75;
      }
      return LFloat(e75);
    };
    toRational = approxRatio(1e-10);
    LRational.prototype = Object.create(LNumber.prototype);
    LRational.prototype.constructor = LRational;
    LRational.prototype.constant = function(e75, t2) {
      enumerable(this, "__num__", e75);
      enumerable(this, "__denom__", t2);
      enumerable(this, "__type__", "rational");
    };
    LRational.prototype.serialize = function() {
      return { num: this.__num__, denom: this.__denom__ };
    };
    LRational.prototype.pow = function(e75) {
      if (LNumber.isRational(e75)) {
        return LNumber(pow(this.valueOf(), e75.valueOf()));
      }
      var t2 = e75.cmp(0);
      if (t2 === 0) {
        return LNumber(1);
      }
      if (t2 === -1) {
        e75 = e75.sub();
        var r = this.__denom__.pow(e75);
        var n = this.__num__.pow(e75);
        return LRational({ num: r, denom: n });
      }
      var i = this;
      e75 = e75.valueOf();
      while (e75 > 1) {
        i = i.mul(this);
        e75--;
      }
      return i;
    };
    LRational.prototype.sqrt = function() {
      var e75 = this.__num__.sqrt();
      var t2 = this.__denom__.sqrt();
      if (e75 instanceof LFloat || t2 instanceof LFloat) {
        return e75.div(t2);
      }
      return LRational({ num: e75, denom: t2 });
    };
    LRational.prototype.abs = function() {
      var e75 = this.__num__;
      var t2 = this.__denom__;
      if (e75.cmp(0) === -1) {
        e75 = e75.sub();
      }
      if (t2.cmp(0) !== 1) {
        t2 = t2.sub();
      }
      return LRational({ num: e75, denom: t2 });
    };
    LRational.prototype.cmp = function(e75) {
      return LNumber(this.valueOf(), true).cmp(e75);
    };
    LRational.prototype.toString = function() {
      var e75 = this.__num__.gcd(this.__denom__);
      var t2, r;
      if (e75.cmp(1) !== 0) {
        t2 = this.__num__.div(e75);
        if (t2 instanceof LRational) {
          t2 = LNumber(t2.valueOf(true));
        }
        r = this.__denom__.div(e75);
        if (r instanceof LRational) {
          r = LNumber(r.valueOf(true));
        }
      } else {
        t2 = this.__num__;
        r = this.__denom__;
      }
      var n = this.cmp(0) < 0;
      if (n) {
        if (t2.abs().cmp(r.abs()) === 0) {
          return t2.toString();
        }
      } else if (t2.cmp(r) === 0) {
        return t2.toString();
      }
      return t2.toString() + "/" + r.toString();
    };
    LRational.prototype.valueOf = function(e75) {
      if (this.__denom__.cmp(0) === 0) {
        if (this.__num__.cmp(0) < 0) {
          return Number.NEGATIVE_INFINITY;
        }
        return Number.POSITIVE_INFINITY;
      }
      if (e75) {
        return LNumber._ops["/"](this.__num__.value, this.__denom__.value);
      }
      return LFloat(this.__num__.valueOf()).div(this.__denom__.valueOf());
    };
    LRational.prototype.mul = function(e75) {
      if (!(e75 instanceof LNumber)) {
        e75 = LNumber(e75);
      }
      if (LNumber.isRational(e75)) {
        var t2 = this.__num__.mul(e75.__num__);
        var r = this.__denom__.mul(e75.__denom__);
        return LRational({ num: t2, denom: r });
      }
      var n = LNumber.coerce(this, e75), i = _slicedToArray(n, 2), a = i[0], o = i[1];
      return a.mul(o);
    };
    LRational.prototype.div = function(e75) {
      if (!(e75 instanceof LNumber)) {
        e75 = LNumber(e75);
      }
      if (LNumber.isRational(e75)) {
        var t2 = this.__num__.mul(e75.__denom__);
        var r = this.__denom__.mul(e75.__num__);
        return LRational({ num: t2, denom: r });
      }
      var n = LNumber.coerce(this, e75), i = _slicedToArray(n, 2), a = i[0], o = i[1];
      var u = a.div(o);
      return u;
    };
    LRational.prototype._op = function(e75, t2) {
      return this[rev_mapping[e75]](t2);
    };
    LRational.prototype.sub = function(e75) {
      if (typeof e75 === "undefined") {
        return this.mul(-1);
      }
      if (!(e75 instanceof LNumber)) {
        e75 = LNumber(e75);
      }
      if (LNumber.isRational(e75)) {
        var t2 = e75.__num__.sub();
        var r = e75.__denom__;
        return this.add(LRational({ num: t2, denom: r }));
      }
      if (!(e75 instanceof LNumber)) {
        e75 = LNumber(e75).sub();
      } else {
        e75 = e75.sub();
      }
      var n = LNumber.coerce(this, e75), i = _slicedToArray(n, 2), a = i[0], o = i[1];
      return a.add(o);
    };
    LRational.prototype.add = function(e75) {
      if (!(e75 instanceof LNumber)) {
        e75 = LNumber(e75);
      }
      if (LNumber.isRational(e75)) {
        var t2 = this.__denom__;
        var r = e75.__denom__;
        var n = this.__num__;
        var i = e75.__num__;
        var a, o;
        if (t2 !== r) {
          o = r.mul(n).add(i.mul(t2));
          a = t2.mul(r);
        } else {
          o = n.add(i);
          a = t2;
        }
        return LRational({ num: o, denom: a });
      }
      if (LNumber.isFloat(e75)) {
        return LFloat(this.valueOf()).add(e75);
      }
      var u = LNumber.coerce(this, e75), s = _slicedToArray(u, 2), c = s[0], l = s[1];
      return c.add(l);
    };
    LBigInteger.prototype = Object.create(LNumber.prototype);
    LBigInteger.prototype.constructor = LBigInteger;
    LBigInteger.bn_op = { "+": "iadd", "-": "isub", "*": "imul", "/": "idiv", "%": "imod", "|": "ior", "&": "iand", "~": "inot", "<<": "ishrn", ">>": "ishln" };
    LBigInteger.prototype.serialize = function() {
      return this.__value__.toString();
    };
    LBigInteger.prototype._op = function(e75, t2) {
      if (typeof t2 === "undefined") {
        if (LNumber.isBN(this.__value__)) {
          e75 = LBigInteger.bn_op[e75];
          return LBigInteger(this.__value__.clone()[e75](), false);
        }
        return LBigInteger(LNumber._ops[e75](this.__value__), true);
      }
      if (LNumber.isBN(this.__value__) && LNumber.isBN(t2.__value__)) {
        e75 = LBigInteger.bn_op[e75];
        return LBigInteger(this.__value__.clone()[e75](t2), false);
      }
      var r = LNumber._ops[e75](this.__value__, t2.__value__);
      if (e75 === "/") {
        var n = this.op("%", t2).cmp(0) === 0;
        if (n) {
          return LNumber(r);
        }
        return LRational({ num: this, denom: t2 });
      }
      return LBigInteger(r, true);
    };
    LBigInteger.prototype.sqrt = function() {
      var e75;
      var t2 = this.cmp(0) < 0;
      if (LNumber.isNative(this.__value__)) {
        e75 = LNumber(Math.sqrt(t2 ? -this.valueOf() : this.valueOf()));
      } else if (LNumber.isBN(this.__value__)) {
        e75 = t2 ? this.__value__.neg().sqrt() : this.__value__.sqrt();
      }
      if (t2) {
        return LComplex({ re: 0, im: e75 });
      }
      return e75;
    };
    LNumber.NaN = LNumber(NaN);
    LComplex.i = LComplex({ im: 1, re: 0 });
    InputPort.prototype._make_defaults = function() {
      this.read = this._with_parser(function(e75) {
        return e75.read_object();
      });
      this.read_line = this._with_parser(function(e75) {
        return e75.__lexer__.read_line();
      });
      this.read_char = this._with_parser(function(e75) {
        return e75.__lexer__.read_char();
      });
      this.read_string = this._with_parser(function(e75, t2) {
        if (!LNumber.isInteger(t2)) {
          var r = LNumber.getType(t2);
          typeErrorMessage("read-string", r, "integer");
        }
        return e75.__lexer__.read_string(t2.valueOf());
      });
      this.peek_char = this._with_parser(function(e75) {
        return e75.__lexer__.peek_char();
      });
    };
    InputPort.prototype._with_init_parser = function(u, s) {
      var c = this;
      return _asyncToGenerator(_regeneratorRuntime.mark(function e75() {
        var r, n, i, a, o = arguments;
        return _regeneratorRuntime.wrap(function e76(t2) {
          while (1) switch (t2.prev = t2.next) {
            case 0:
              t2.next = 2;
              return u.call(c);
            case 2:
              r = t2.sent;
              for (n = o.length, i = new Array(n), a = 0; a < n; a++) {
                i[a] = o[a];
              }
              return t2.abrupt("return", s.apply(void 0, [r].concat(i)));
            case 5:
            case "end":
              return t2.stop();
          }
        }, e75);
      }));
    };
    InputPort.prototype.is_open = function() {
      return this._with_parser !== null;
    };
    InputPort.prototype.close = function() {
      var t2 = this;
      this.__parser__ = null;
      this._with_parser = null;
      ["read", "close", "read_char", "peek-char", "read_line"].forEach(function(e75) {
        t2[e75] = function() {
          throw new Error("input-port: port is closed");
        };
      });
      this.char_ready = function() {
        return false;
      };
    };
    InputPort.prototype.toString = function() {
      return "#<input-port>";
    };
    OutputPort.prototype.is_open = function() {
      return this._closed !== true;
    };
    OutputPort.prototype.close = function() {
      Object.defineProperty(this, "_closed", { get: function e75() {
        return true;
      }, set: function e75() {
      }, configurable: false, enumerable: false });
      this.write = function() {
        throw new Error("output-port: port is closed");
      };
    };
    OutputPort.prototype.flush = function() {
    };
    OutputPort.prototype.toString = function() {
      return "#<output-port>";
    };
    BufferedOutputPort = function(e75) {
      function r(e76) {
        var t2;
        _classCallCheck(this, r);
        t2 = _callSuper(this, r, [function() {
          var e77;
          return (e77 = t2)._write.apply(e77, arguments);
        }]);
        typecheck("BufferedOutputPort", e76, "function");
        read_only(t2, "_fn", e76, { hidden: true });
        read_only(t2, "_buffer", [], { hidden: true });
        return t2;
      }
      _inherits(r, e75);
      return _createClass(r, [{ key: "flush", value: function e76() {
        if (this._buffer.length) {
          this._fn(this._buffer.join(""));
          this._buffer.length = 0;
        }
      } }, { key: "_write", value: function e76() {
        var t2 = this;
        for (var r2 = arguments.length, n = new Array(r2), i = 0; i < r2; i++) {
          n[i] = arguments[i];
        }
        if (n.length) {
          n.forEach(function(e77) {
            t2._buffer.push(e77);
          });
          var a = this._buffer[this._buffer.length - 1];
          if (a.match(/\n$/)) {
            this._buffer[this._buffer.length - 1] = a.replace(/\n$/, "");
            this.flush();
          }
        }
      } }]);
    }(OutputPort);
    OutputStringPort.prototype = Object.create(OutputPort.prototype);
    OutputStringPort.prototype.constructor = OutputStringPort;
    OutputStringPort.prototype.toString = function() {
      return "#<output-port (string)>";
    };
    OutputStringPort.prototype.valueOf = function() {
      return this.__buffer__.map(function(e75) {
        return e75.valueOf();
      }).join("");
    };
    OutputFilePort.prototype = Object.create(OutputPort.prototype);
    OutputFilePort.prototype.constructor = OutputFilePort;
    OutputFilePort.prototype.fs = function() {
      if (!this._fs) {
        this._fs = this.internal("fs");
      }
      return this._fs;
    };
    OutputFilePort.prototype.internal = function(e75) {
      return user_env.get("**internal-env**").get(e75);
    };
    OutputFilePort.prototype.close = function() {
      var n = this;
      return new Promise(function(t2, r) {
        n.fs().close(n._fd, function(e75) {
          if (e75) {
            r(e75);
          } else {
            read_only(n, "_fd", null, { hidden: true });
            OutputPort.prototype.close.call(n);
            t2();
          }
        });
      });
    };
    OutputFilePort.prototype.toString = function() {
      return "#<output-port ".concat(this.__filename__, ">");
    };
    InputStringPort.prototype.char_ready = function() {
      return true;
    };
    InputStringPort.prototype = Object.create(InputPort.prototype);
    InputStringPort.prototype.constructor = InputStringPort;
    InputStringPort.prototype.toString = function() {
      return "#<input-port (string)>";
    };
    ParserInputPort.prototype.char_ready = function() {
      return true;
    };
    ParserInputPort.prototype = Object.create(InputPort.prototype);
    ParserInputPort.prototype.constructor = ParserInputPort;
    ParserInputPort.prototype.toString = function() {
      return "#<input-port (parser)>";
    };
    InputByteVectorPort.prototype = Object.create(InputPort.prototype);
    InputByteVectorPort.prototype.constructor = InputByteVectorPort;
    InputByteVectorPort.prototype.toString = function() {
      return "#<input-port (bytevector)>";
    };
    InputByteVectorPort.prototype.close = function() {
      var t2 = this;
      read_only(this, "__vector__", _nil);
      var r = function e75() {
        throw new Error("Input-binary-port: port is closed");
      };
      ["read_u8", "close", "peek_u8", "read_u8_vector"].forEach(function(e75) {
        t2[e75] = r;
      });
      this.u8_ready = this.char_ready = function() {
        return false;
      };
    };
    InputByteVectorPort.prototype.u8_ready = function() {
      return true;
    };
    InputByteVectorPort.prototype.peek_u8 = function() {
      if (this.__index__ >= this.__vector__.length) {
        return eof;
      }
      return this.__vector__[this.__index__];
    };
    InputByteVectorPort.prototype.skip = function() {
      if (this.__index__ <= this.__vector__.length) {
        ++this.__index__;
      }
    };
    InputByteVectorPort.prototype.read_u8 = function() {
      var e75 = this.peek_u8();
      this.skip();
      return e75;
    };
    InputByteVectorPort.prototype.read_u8_vector = function(e75) {
      if (typeof e75 === "undefined") {
        e75 = this.__vector__.length;
      } else if (e75 > this.__index__ + this.__vector__.length) {
        e75 = this.__index__ + this.__vector__.length;
      }
      if (this.peek_u8() === eof) {
        return eof;
      }
      return this.__vector__.slice(this.__index__, e75);
    };
    OutputByteVectorPort.prototype = Object.create(OutputPort.prototype);
    OutputByteVectorPort.prototype.constructor = OutputByteVectorPort;
    OutputByteVectorPort.prototype.close = function() {
      OutputPort.prototype.close.call(this);
      read_only(this, "_buffer", null, { hidden: true });
    };
    OutputByteVectorPort.prototype._close_guard = function() {
      if (this._closed) {
        throw new Error("output-port: binary port is closed");
      }
    };
    OutputByteVectorPort.prototype.write_u8 = function(e75) {
      typecheck("OutputByteVectorPort::write_u8", e75, "number");
      this.write(e75);
    };
    OutputByteVectorPort.prototype.write_u8_vector = function(e75) {
      typecheck("OutputByteVectorPort::write_u8_vector", e75, "uint8array");
      this.write(e75);
    };
    OutputByteVectorPort.prototype.toString = function() {
      return "#<output-port (bytevector)>";
    };
    OutputByteVectorPort.prototype.valueOf = function() {
      return this.__buffer__;
    };
    InputFilePort.prototype = Object.create(InputStringPort.prototype);
    InputFilePort.prototype.constructor = InputFilePort;
    InputFilePort.prototype.toString = function() {
      return "#<input-port (".concat(this.__filename__, ")>");
    };
    InputBinaryFilePort.prototype = Object.create(InputByteVectorPort.prototype);
    InputBinaryFilePort.prototype.constructor = InputBinaryFilePort;
    InputBinaryFilePort.prototype.toString = function() {
      return "#<input-binary-port (".concat(this.__filename__, ")>");
    };
    OutputBinaryFilePort.prototype = Object.create(OutputFilePort.prototype);
    OutputBinaryFilePort.prototype.constructor = OutputBinaryFilePort;
    OutputBinaryFilePort.prototype.write_u8 = function(e75) {
      typecheck("OutputByteVectorPort::write_u8", e75, "number");
      this.write(e75);
    };
    OutputBinaryFilePort.prototype.write_u8_vector = function(e75) {
      typecheck("OutputByteVectorPort::write_u8_vector", e75, "uint8array");
      this.write(e75);
    };
    binary_port = Symbol["for"]("binary");
    text_port = Symbol["for"]("text");
    eof = new EOF();
    EOF.prototype.toString = function() {
      return "#<eof>";
    };
    Interpreter.prototype.exec = function() {
      var t2 = _asyncToGenerator(function(s) {
        var c = this;
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return _regeneratorRuntime.mark(function e75() {
          var r, n, i, a, o, u;
          return _regeneratorRuntime.wrap(function e76(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                r = l.use_dynamic, n = r === void 0 ? false : r, i = l.dynamic_env, a = l.env;
                typecheck("Interpreter::exec", s, ["string", "array"], 1);
                typecheck("Interpreter::exec", n, "boolean", 2);
                if (!a) {
                  a = c.__env__;
                }
                if (!i) {
                  i = a;
                }
                global_env.set("**interaction-environment**", c.__env__);
                if (!Array.isArray(s)) {
                  t3.next = 10;
                  break;
                }
                return t3.abrupt("return", exec(s, { env: a, dynamic_env: i, use_dynamic: n }));
              case 10:
                t3.prev = 10;
                c.__parser__.prepare(s);
                t3.next = 14;
                return exec(c.__parser__, { env: a, dynamic_env: i, use_dynamic: n });
              case 14:
                return t3.abrupt("return", t3.sent);
              case 17:
                t3.prev = 17;
                t3.t0 = t3["catch"](10);
                if (!((o = t3.t0.message) !== null && o !== void 0 && o.includes("at line"))) {
                  u = " at line ".concat(c.__parser__.get_line() + 1);
                  t3.t0.message += u;
                }
                throw t3.t0;
              case 21:
              case "end":
                return t3.stop();
            }
          }, e75, null, [[10, 17]]);
        })();
      });
      return function(e75) {
        return t2.apply(this, arguments);
      };
    }();
    Interpreter.prototype.get = function(e75) {
      var t2 = this.__env__.get(e75);
      if (is_function(t2)) {
        var r = new LambdaContext({ env: this.__env__ });
        return t2.bind(r);
      }
      return t2;
    };
    Interpreter.prototype.set = function(e75, t2) {
      return this.__env__.set(e75, t2);
    };
    Interpreter.prototype.constant = function(e75, t2) {
      return this.__env__.constant(e75, t2);
    };
    LipsError.prototype = new Error();
    LipsError.prototype.constructor = LipsError;
    IgnoreException = function(e75) {
      function t2() {
        _classCallCheck(this, t2);
        return _callSuper(this, t2, arguments);
      }
      _inherits(t2, e75);
      return _createClass(t2);
    }(_wrapNativeSuper(Error));
    Environment.prototype.list = function() {
      return get_props(this.__env__);
    };
    Environment.prototype.fs = function() {
      return this.get("**fs**");
    };
    Environment.prototype.unset = function(e75) {
      if (e75 instanceof LSymbol) {
        e75 = e75.valueOf();
      }
      if (e75 instanceof LString) {
        e75 = e75.valueOf();
      }
      delete this.__env__[e75];
    };
    Environment.prototype.inherit = function(e75) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (_typeof$1(e75) === "object") {
        t2 = e75;
      }
      if (!e75 || _typeof$1(e75) === "object") {
        e75 = "child of " + (this.__name__ || "unknown");
      }
      return new Environment(t2 || {}, this, e75);
    };
    Environment.prototype.doc = function(e75) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (e75 instanceof LSymbol) {
        e75 = e75.__name__;
      }
      if (e75 instanceof LString) {
        e75 = e75.valueOf();
      }
      if (t2) {
        if (!r) {
          t2 = trim_lines(t2);
        }
        this.__docs__.set(e75, t2);
        return this;
      }
      if (this.__docs__.has(e75)) {
        return this.__docs__.get(e75);
      }
      if (this.__parent__) {
        return this.__parent__.doc(e75);
      }
    };
    Environment.prototype.new_frame = function(e75, t2) {
      var n = this.inherit("__frame__");
      n.set("parent.frame", doc("parent.frame", function() {
        var e76 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        e76 = e76.valueOf();
        var t3 = n.__parent__;
        if (!is_env(t3)) {
          return _nil;
        }
        if (e76 <= 0) {
          return t3;
        }
        var r = t3.get("parent.frame");
        return r(e76 - 1);
      }, global_env.__env__["parent.frame"].__doc__));
      t2.callee = e75;
      n.set("arguments", t2);
      return n;
    };
    Environment.prototype._lookup = function(e75) {
      if (e75 instanceof LSymbol) {
        e75 = e75.__name__;
      }
      if (e75 instanceof LString) {
        e75 = e75.valueOf();
      }
      if (this.__env__.hasOwnProperty(e75)) {
        return Value(this.__env__[e75]);
      }
      if (this.__parent__) {
        return this.__parent__._lookup(e75);
      }
    };
    Environment.prototype.toString = function() {
      return "#<environment:" + this.__name__ + ">";
    };
    Environment.prototype.clone = function() {
      var t2 = this;
      var r = {};
      Object.keys(this.__env__).forEach(function(e75) {
        r[e75] = t2.__env__[e75];
      });
      return new Environment(r, this.__parent__, this.__name__);
    };
    Environment.prototype.merge = function(e75) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "merge";
      typecheck("Environment::merge", e75, "environment");
      return this.inherit(t2, e75.__env__);
    };
    Value.isUndefined = function(e75) {
      return e75 instanceof Value && typeof e75.value === "undefined";
    };
    Value.prototype.valueOf = function() {
      return this.value;
    };
    Values.prototype.toString = function() {
      return this.__values__.map(function(e75) {
        return to_string(e75);
      }).join("\n");
    };
    Values.prototype.valueOf = function() {
      return this.__values__;
    };
    Environment.prototype.get = function(e75) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      typecheck("Environment::get", e75, ["symbol", "string"]);
      var r = t2.throwError, n = r === void 0 ? true : r;
      var i = e75;
      if (i instanceof LSymbol || i instanceof LString) {
        i = i.valueOf();
      }
      var a = this._lookup(i);
      if (a instanceof Value) {
        if (Value.isUndefined(a)) {
          return void 0;
        }
        return patch_value(a.valueOf());
      }
      var o;
      if (e75 instanceof LSymbol && e75[LSymbol.object]) {
        o = e75[LSymbol.object];
      } else if (typeof i === "string") {
        o = i.split(".").filter(Boolean);
      }
      if (o && o.length > 0) {
        var u = o, s = _toArray(u), c = s[0], l = s.slice(1);
        a = this._lookup(c);
        if (l.length) {
          try {
            if (a instanceof Value) {
              a = a.valueOf();
            } else {
              a = get2(root, c);
              if (is_function(a)) {
                a = unbind(a);
              }
            }
            if (typeof a !== "undefined") {
              return get2.apply(void 0, [a].concat(_toConsumableArray(l)));
            }
          } catch (e76) {
            throw e76;
          }
        } else if (a instanceof Value) {
          return patch_value(a.valueOf());
        }
        a = get2(root, i);
      }
      if (typeof a !== "undefined") {
        return a;
      }
      if (n) {
        throw new Error("Unbound variable `" + i.toString() + "'");
      }
    };
    Environment.prototype.set = function(e75, t2) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      typecheck("Environment::set", e75, ["string", "symbol"]);
      if (LNumber.isNumber(t2)) {
        t2 = LNumber(t2);
      }
      if (e75 instanceof LSymbol) {
        e75 = e75.__name__;
      }
      if (e75 instanceof LString) {
        e75 = e75.valueOf();
      }
      this.__env__[e75] = t2;
      if (r) {
        this.doc(e75, r, true);
      }
      return this;
    };
    Environment.prototype.constant = function(t2, e75) {
      var r = this;
      if (this.__env__.hasOwnProperty(t2)) {
        throw new Error("Environment::constant: ".concat(t2, " already exists"));
      }
      if (arguments.length === 1 && is_plain_object(arguments[0])) {
        var n = arguments[0];
        Object.keys(n).forEach(function(e76) {
          r.constant(t2, n[e76]);
        });
      } else {
        enumerable(this.__env__, t2, e75);
      }
      return this;
    };
    Environment.prototype.has = function(e75) {
      return this.__env__.hasOwnProperty(e75);
    };
    Environment.prototype.ref = function(e75) {
      var t2 = this;
      while (true) {
        if (!t2) {
          break;
        }
        if (t2.has(e75)) {
          return t2;
        }
        t2 = t2.__parent__;
      }
    };
    Environment.prototype.parents = function() {
      var e75 = this;
      var t2 = [];
      while (e75) {
        t2.unshift(e75);
        e75 = e75.__parent__;
      }
      return t2;
    };
    native_lambda = _parse(tokenize('(lambda ()\n                                        "[native code]"\n                                        (throw "Invalid Invocation"))'))[0];
    get2 = doc("get", function e34(t2) {
      var r;
      for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) {
        i[a - 1] = arguments[a];
      }
      var o = i.length;
      while (i.length) {
        if (is_function(t2) && _typeof$1(i[0]) !== "symbol") {
          t2 = unbind(t2);
        }
        var u = i.shift();
        var s = unbox(u);
        if (s === "then" && t2 instanceof QuotedPromise) {
          r = QuotedPromise.prototype.then;
        } else if (s === "__code__" && is_function(t2) && typeof t2.__code__ === "undefined") {
          r = native_lambda;
        } else {
          r = t2[s];
        }
        if (typeof r === "undefined") {
          if (i.length) {
            throw new Error("Try to get ".concat(i[0], " from undefined"));
          }
          return r;
        } else {
          var c;
          if (i.length - 1 < o) {
            c = t2;
          }
          r = patch_value(r, c);
        }
        t2 = r;
      }
      return r;
    }, "(. obj . args)\n    (get obj . args)\n\n    This function uses an object as a base and keeps using arguments to get the\n    property of JavaScript object. Arguments need to be a strings.\n    e.g. `(. console \"log\")` if you use any function inside LIPS it\n    will be weakly bound (can be rebound), so you can call this log function\n    without problem unlike in JavaScript when you use\n    `var log = console.log`.\n    `get` is an alias because . doesn't work everywhere, e.g. you can't\n    pass it as an argument.");
    internal_env = new Environment({ stdout: new BufferedOutputPort(function() {
      var e75;
      (e75 = console).log.apply(e75, arguments);
    }), stderr: new BufferedOutputPort(function() {
      var e75;
      (e75 = console).error.apply(e75, arguments);
    }), "command-line": [], stdin: InputPort(function() {
      return Promise.resolve(prompt(""));
    }), "letter-unicode-regex": /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/, "numeral-unicode-regex": /(?:[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDD40-\uDD49\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDED0-\uDEE3\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59\uDFF0-\uDFF9]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDF50-\uDF59\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD818[\uDD30-\uDD39]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDD70-\uDD79\uDE80-\uDE96]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD839[\uDCF0-\uDCF9\uDDF1-\uDDFA]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9])/, "space-unicode-regex": /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/ }, void 0, "internal");
    nan = LNumber(NaN);
    constants = _objectSpread({ "#t": true, "#f": false, "#true": true, "#false": false, "+inf.0": Number.POSITIVE_INFINITY, "-inf.0": Number.NEGATIVE_INFINITY, "+nan.0": nan, "-nan.0": nan }, parsable_contants);
    global_env = new Environment({ eof, undefined: void 0, "peek-char": doc("peek-char", function() {
      var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      if (e75 === null) {
        e75 = internal(this, "stdin");
      }
      typecheck_text_port("peek-char", e75, "input-port");
      return e75.peek_char();
    }, "(peek-char port)\n\n        This function reads and returns a character from the string\n        port, or, if there is no more data in the string port, it\n        returns an EOF."), "read-line": doc("read-line", function() {
      var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      if (e75 === null) {
        e75 = internal(this, "stdin");
      }
      typecheck_text_port("read-line", e75, "input-port");
      return e75.read_line();
    }, "(read-line port)\n\n        This function reads and returns the next line from the input\n        port."), "read-char": doc("read-char", function() {
      var e75 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      if (e75 === null) {
        e75 = internal(this, "stdin");
      }
      typecheck_text_port("read-char", e75, "input-port");
      return e75.read_char();
    }, "(read-char port)\n\n        This function reads and returns the next character from the\n        input port."), read: doc("read", function() {
      var e75 = _asyncToGenerator(function() {
        var i = this;
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        return _regeneratorRuntime.mark(function e76() {
          var r, n;
          return _regeneratorRuntime.wrap(function e77(t3) {
            while (1) switch (t3.prev = t3.next) {
              case 0:
                r = i.env;
                if (a === null) {
                  n = internal(r, "stdin");
                } else {
                  n = a;
                }
                typecheck_text_port("read", n, "input-port");
                return t3.abrupt("return", n.read.call(r));
              case 4:
              case "end":
                return t3.stop();
            }
          }, e76);
        })();
      });
      function t2() {
        return e75.apply(this, arguments);
      }
      return t2;
    }(), "(read [port])\n\n        This function, if called with a port, it will parse the next\n        item from the port. If called without an input, it will read\n        a string from standard input (using the browser's prompt or\n        a user defined input method) and parse it. This function can be\n        used together with `eval` to evaluate code from port."), pprint: doc("pprint", function e35(t2) {
      if (is_pair(t2)) {
        t2 = new lips.Formatter(t2.toString(true))["break"]().format();
        global_env.get("display").call(global_env, t2);
      } else {
        global_env.get("write").call(global_env, t2);
      }
      global_env.get("newline").call(global_env);
    }, "(pprint expression)\n\n        This function will pretty print its input to stdout. If it is called\n        with a non-list, it will just call the print function on its\n        input."), print: doc("print", function e36() {
      var t2 = global_env.get("display");
      var r = global_env.get("newline");
      var n = this.use_dynamic;
      var i = global_env;
      var a = global_env;
      for (var o = arguments.length, u = new Array(o), s = 0; s < o; s++) {
        u[s] = arguments[s];
      }
      u.forEach(function(e75) {
        call_function(t2, [e75], { env: i, dynamic_env: a, use_dynamic: n });
        call_function(r, [], { env: i, dynamic_env: a, use_dynamic: n });
      });
    }, "(print . args)\n\n        This function converts each input into a string and prints\n        the result to the standard output (by default it's the\n        console but it can be defined in user code). This function\n        calls `(newline)` after printing each input."), format: doc("format", function e37(t2) {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
        n[i - 1] = arguments[i];
      }
      typecheck("format", t2, "string");
      var a = /(~[as%~])/g;
      var o = t2.match(/(~[as])/g);
      if (o && o.length > n.length) {
        throw new Error("Not enough arguments");
      }
      var u = 0;
      var s = global_env.get("repr");
      t2 = t2.replace(a, function(e75) {
        var t3 = e75[1];
        if (t3 === "~") {
          return "~";
        } else if (t3 === "%") {
          return "\n";
        } else {
          var r2 = n[u++];
          if (t3 === "a") {
            return s(r2);
          } else {
            return s(r2, true);
          }
        }
      });
      o = t2.match(/~([\S])/);
      if (o) {
        throw new Error("format: Unrecognized escape sequence ".concat(o[1]));
      }
      return t2;
    }, "(format string n1 n2 ...)\n\n        This function accepts a string template and replaces any\n        escape sequences in its inputs:\n\n        * ~a value as if printed with `display`\n        * ~s value as if printed with `write`\n        * ~% newline character\n        * ~~ literal tilde '~'\n\n        If there are missing inputs or other escape characters it\n        will error."), newline: doc("newline", function e38() {
      var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      var r = global_env.get("display");
      var n = this.use_dynamic;
      var i = global_env;
      var a = global_env;
      call_function(r, ["\n", t2], { env: i, dynamic_env: a, use_dynamic: n });
    }, "(newline [port])\n\n        Write newline character to standard output or given port"), display: doc("display", function e39(t2) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (r === null) {
        r = internal(this, "stdout");
      } else {
        typecheck("display", r, "output-port");
      }
      var n = t2;
      if (!(r instanceof OutputBinaryFilePort)) {
        n = global_env.get("repr")(t2);
      }
      r.write.call(global_env, n);
    }, "(display string [port])\n\n        This function outputs the string to the standard output or\n        the port if given. No newline."), "display-error": doc("display-error", function e40() {
      var t2 = internal(this, "stderr");
      var r = global_env.get("repr");
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) {
        i[a] = arguments[a];
      }
      var o = i.map(r).join(" ");
      t2.write.call(global_env, o);
      global_env.get("newline").call(this, t2);
    }, "(display-error . args)\n\n        Display an error message on stderr."), "%foldcase-string": doc("%foldcase-string", foldcase_string, "(%foldcase-string string)\n\n         Same as string-foldcase but without typechecking"), "%same-functions": doc("%same-functions", function(e75, t2) {
      if (!is_function(e75)) {
        return false;
      }
      if (!is_function(t2)) {
        return false;
      }
      return unbind(e75) === unbind(t2);
    }, "(%same-functions a b)\n\n        A helper function that checks if the two input functions are\n        the same."), help: doc(new Macro("help", function(e75, t2) {
      var r = t2.dynamic_env, n = t2.use_dynamic, i = t2.error;
      var a;
      if (e75.car instanceof LSymbol) {
        a = e75.car;
      } else if (is_pair(e75.car) && e75.car.car instanceof LSymbol) {
        a = e75.car.car;
      } else {
        var o = this;
        r = this;
        var u = _evaluate(e75.car, { env: o, error: i, dynamic_env: r, use_dynamic: n });
        if (u && u.__doc__) {
          return u.__doc__;
        }
        return;
      }
      var s;
      var c = this.get(a);
      s = c && c.__doc__;
      if (s) {
        return s;
      }
      var l = this.ref(a);
      if (l) {
        s = l.doc(a);
        if (s) {
          return s;
        }
      }
    }), "(help object)\n\n         This macro returns documentation for a function, macro, or a variable."), cons: doc("cons", function e41(t2, r) {
      return new Pair(t2, r);
    }, "(cons left right)\n\n        This function returns a new list with the first appended\n        before the second. If the second is not a list cons will\n        return a dotted pair."), car: doc("car", function e42(t2) {
      typecheck("car", t2, "pair");
      return t2.car;
    }, "(car pair)\n\n        This function returns the car (item 1) of the list."), cdr: doc("cdr", function e43(t2) {
      typecheck("cdr", t2, "pair");
      return t2.cdr;
    }, "(cdr pair)\n\n        This function returns the cdr (all but first) of the list."), "set!": doc(new Macro("set!", function(e75) {
      var a = this;
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t2.use_dynamic, n = _objectWithoutProperties(t2, _excluded4);
      var i = this;
      var o = this;
      var u;
      var s = _objectSpread(_objectSpread({}, n), {}, { env: this, dynamic_env: i, use_dynamic: r });
      var c = _evaluate(e75.cdr.car, s);
      c = resolve_promises(c);
      function l(t3, r2, n2) {
        if (is_promise(t3)) {
          return t3.then(function(e76) {
            return l(t3, e76, n2);
          });
        }
        if (is_promise(r2)) {
          return r2.then(function(e76) {
            return l(t3, e76, n2);
          });
        }
        if (is_promise(n2)) {
          return n2.then(function(e76) {
            return l(t3, r2, e76);
          });
        }
        o.get("set-obj!").call(o, t3, r2, n2);
        return n2;
      }
      if (is_pair(e75.car) && LSymbol.is(e75.car.car, ".")) {
        var f = e75.car.cdr.car;
        var _ = e75.car.cdr.cdr.car;
        var p = _evaluate(f, s);
        var d = _evaluate(_, s);
        return l(p, d, c);
      }
      if (!(e75.car instanceof LSymbol)) {
        throw new Error("set! first argument need to be a symbol or dot accessor that evaluate to object.");
      }
      var h = e75.car.valueOf();
      u = this.ref(e75.car.__name__);
      return unpromise(c, function(e76) {
        if (!u) {
          var t3 = h.split(".");
          if (t3.length > 1) {
            var r2 = t3.pop();
            var n2 = t3.join(".");
            var i2 = a.get(n2, { throwError: false });
            if (i2) {
              l(i2, r2, e76);
              return;
            }
          }
          throw new Error("Unbound variable `" + h + "'");
        }
        u.set(h, e76);
      });
    }), "(set! name value)\n\n         Macro that can be used to set the value of the variable or slot (mutate it).\n         set! searches the scope chain until it finds first non empty slot and sets it."), "unset!": doc(new Macro("set!", function(e75) {
      if (!(e75.car instanceof LSymbol)) {
        throw new Error("unset! first argument need to be a symbol or dot accessor that evaluate to object.");
      }
      var t2 = e75.car;
      var r = this.ref(t2);
      if (r) {
        delete r.__env__[t2.__name__];
      }
    }), "(unset! name)\n\n         Function to delete the specified name from environment.\n         Trying to access the name afterwards will error."), "set-car!": doc("set-car!", function(e75, t2) {
      typecheck("set-car!", e75, "pair");
      e75.car = t2;
    }, "(set-car! obj value)\n\n         Function that sets the car (first item) of the list/pair to specified value.\n         The old value is lost."), "set-cdr!": doc("set-cdr!", function(e75, t2) {
      typecheck("set-cdr!", e75, "pair");
      e75.cdr = t2;
    }, "(set-cdr! obj value)\n\n         Function that sets the cdr (tail) of the list/pair to specified value.\n         It will destroy the list. The old tail is lost."), "empty?": doc("empty?", function(e75) {
      return typeof e75 === "undefined" || is_nil(e75);
    }, "(empty? object)\n\n         Function that returns #t if value is nil (an empty list) or undefined."), gensym: doc("gensym", gensym, "(gensym)\n\n         Generates a unique symbol that is not bound anywhere,\n         to use with macros as meta name."), load: doc("load", function e44(c, t2) {
      typecheck("load", c, "string");
      var l = this;
      if (l.__name__ === "__frame__") {
        l = l.__parent__;
      }
      if (!(t2 instanceof Environment)) {
        if (l === global_env) {
          t2 = l;
        } else {
          t2 = this.get("**interaction-environment**");
        }
      }
      var f = "@lips";
      var _ = c.startsWith(f);
      var p = "**module-path**";
      var d = global_env.get(p, { throwError: false });
      c = c.valueOf();
      if (!c.match(/.[^.]+$/)) {
        c += ".scm";
      }
      var r = c.match(/\.xcb$/);
      function h(e75) {
        if (r) {
          e75 = unserialize_bin(e75);
        } else {
          if (type(e75) === "buffer") {
            e75 = e75.toString();
          }
          e75 = e75.replace(/^(#!.*)/, function(e76, t3) {
            if (is_directive(t3)) {
              return t3;
            }
            return "";
          });
          if (e75.match(/^\{/)) {
            e75 = unserialize(e75);
          }
        }
        return exec(e75, { env: t2 });
      }
      function n(e75) {
        return root.fetch(e75).then(function(e76) {
          return r ? e76.arrayBuffer() : e76.text();
        }).then(function(e76) {
          if (r) {
            e76 = new Uint8Array(e76);
          }
          return e76;
        });
      }
      function m() {
        var e75 = global_env.get("__dirname");
        return e75.replace(/[^/]+$/, "");
      }
      if (is_node()) {
        return new Promise(function() {
          var r2 = _asyncToGenerator(_regeneratorRuntime.mark(function e75(r3, n2) {
            var i2, a2, o2, u2, s;
            return _regeneratorRuntime.wrap(function e76(t3) {
              while (1) switch (t3.prev = t3.next) {
                case 0:
                  t3.prev = 0;
                  t3.next = 3;
                  return node_ready;
                case 3:
                  i2 = nodeRequire("path");
                  a2 = nodeRequire("fs");
                  o2 = m();
                  if (_) {
                    c = c.replace(f, o2);
                  }
                  if (!d) {
                    t3.next = 12;
                    break;
                  }
                  d = d.valueOf();
                  if (!c.startsWith("/")) {
                    c = i2.join(d, c);
                  }
                  t3.next = 19;
                  break;
                case 12:
                  if (c.startsWith("/")) {
                    t3.next = 19;
                    break;
                  }
                  u2 = l.get("command-line", { throwError: false });
                  if (!u2) {
                    t3.next = 18;
                    break;
                  }
                  t3.next = 17;
                  return u2();
                case 17:
                  s = t3.sent;
                case 18:
                  if (s && !is_nil(s)) {
                    process.cwd();
                    c = i2.join(i2.dirname(s.car.valueOf()), c);
                  }
                case 19:
                  global_env.set(p, i2.dirname(c));
                  a2.readFile(c, function(e77, t4) {
                    if (e77) {
                      n2(e77);
                      global_env.set(p, d);
                    } else {
                      try {
                        h(t4).then(function() {
                          r3();
                          global_env.set(p, d);
                        })["catch"](n2);
                      } catch (e78) {
                        n2(e78);
                      }
                    }
                  });
                  t3.next = 26;
                  break;
                case 23:
                  t3.prev = 23;
                  t3.t0 = t3["catch"](0);
                  console.error(t3.t0);
                case 26:
                case "end":
                  return t3.stop();
              }
            }, e75, null, [[0, 23]]);
          }));
          return function(e75, t3) {
            return r2.apply(this, arguments);
          };
        }());
      }
      if (_) {
        var i, a;
        var o = (i = global_env.get("__dirname", { throwError: false })) !== null && i !== void 0 ? i : current_script;
        (a = o) !== null && a !== void 0 ? a : o = current_script;
        var u = o.replace(/dist\/?[^\/]*$/, "");
        c = c.replace(f, u);
      }
      if (d) {
        d = d.valueOf();
        if (!c.startsWith("/")) {
          c = d + "/" + c.replace(/^\.?\/?/, "");
        }
      }
      return n(c).then(function(e75) {
        global_env.set(p, c.replace(/\/[^/]*$/, ""));
        return h(e75);
      }).then(function() {
      })["finally"](function() {
        global_env.set(p, d);
      });
    }, "(load filename)\n        (load filename environment)\n\n        Fetches the file (from disk or network) and evaluates its content as LIPS code.\n        If the second argument is provided and it's an environment the evaluation\n        will happen in that environment."), while: doc(new Macro("while", function(e75, t2) {
      var r = e75.car;
      var n = _objectSpread(_objectSpread({}, t2), {}, { env: this });
      var i = new Pair(new LSymbol("begin"), e75.cdr);
      return function t3() {
        return unpromise(_evaluate(r, n), function(e76) {
          if (e76) {
            return unpromise(_evaluate(i, n), t3);
          }
        });
      }();
    }), "(while cond body)\n\n         Creates a loop, it executes cond and body until cond expression is false."), do: doc(new Macro("do", function() {
      var r = _asyncToGenerator(function(_, e75) {
        var p = this;
        var d = e75.use_dynamic, h = e75.error;
        return _regeneratorRuntime.mark(function e76() {
          var u, r2, s, c, n, l, f, i, a, o;
          return _regeneratorRuntime.wrap(function e77(t2) {
            while (1) switch (t2.prev = t2.next) {
              case 0:
                u = p;
                r2 = u;
                s = u.inherit("do");
                c = _.car;
                n = _.cdr.car;
                l = _.cdr.cdr;
                if (!is_nil(l)) {
                  l = new Pair(LSymbol("begin"), l);
                }
                f = { env: u, dynamic_env: r2, use_dynamic: d, error: h };
                i = c;
              case 9:
                if (is_nil(i)) {
                  t2.next = 20;
                  break;
                }
                a = i.car;
                t2.t0 = s;
                t2.t1 = a.car;
                t2.next = 15;
                return _evaluate(a.cdr.car, f);
              case 15:
                t2.t2 = t2.sent;
                t2.t0.set.call(t2.t0, t2.t1, t2.t2);
                i = i.cdr;
                t2.next = 9;
                break;
              case 20:
                f = { env: s, dynamic_env: r2, error: h };
                o = _regeneratorRuntime.mark(function e78() {
                  var r3, n2, i2, a2, o2;
                  return _regeneratorRuntime.wrap(function e79(t3) {
                    while (1) switch (t3.prev = t3.next) {
                      case 0:
                        if (is_nil(l)) {
                          t3.next = 3;
                          break;
                        }
                        t3.next = 3;
                        return lips.evaluate(l, f);
                      case 3:
                        r3 = c;
                        n2 = {};
                      case 5:
                        if (is_nil(r3)) {
                          t3.next = 15;
                          break;
                        }
                        i2 = r3.car;
                        if (is_nil(i2.cdr.cdr)) {
                          t3.next = 12;
                          break;
                        }
                        t3.next = 10;
                        return _evaluate(i2.cdr.cdr.car, f);
                      case 10:
                        a2 = t3.sent;
                        n2[i2.car.valueOf()] = a2;
                      case 12:
                        r3 = r3.cdr;
                        t3.next = 5;
                        break;
                      case 15:
                        o2 = Object.getOwnPropertySymbols(n2);
                        f.env = s = u.inherit("do");
                        Object.keys(n2).concat(o2).forEach(function(e80) {
                          s.set(e80, n2[e80]);
                        });
                      case 18:
                      case "end":
                        return t3.stop();
                    }
                  }, e78);
                });
              case 22:
                t2.next = 24;
                return _evaluate(n.car, f);
              case 24:
                t2.t3 = t2.sent;
                if (!(t2.t3 === false)) {
                  t2.next = 29;
                  break;
                }
                return t2.delegateYield(o(), "t4", 27);
              case 27:
                t2.next = 22;
                break;
              case 29:
                if (is_nil(n.cdr)) {
                  t2.next = 33;
                  break;
                }
                t2.next = 32;
                return _evaluate(n.cdr.car, f);
              case 32:
                return t2.abrupt("return", t2.sent);
              case 33:
              case "end":
                return t2.stop();
            }
          }, e76);
        })();
      });
      return function(e75, t2) {
        return r.apply(this, arguments);
      };
    }()), "(do ((<var> <init> <next>)) (test return) . body)\n\n         Iteration macro that evaluates the expression body in scope of the variables.\n         On each loop it changes the variables according to the <next> expression and runs\n         test to check if the loop should continue. If test is a single value, the macro\n         will return undefined. If the test is a pair of expressions the macro will\n         evaluate and return the second expression after the loop exits."), if: doc(new Macro("if", function(r, e75) {
      var t2 = e75.error, n = e75.use_dynamic;
      var i = this;
      var a = this;
      var o = { env: a, dynamic_env: i, use_dynamic: n, error: t2 };
      var u = function e76(t3) {
        if (is_false(t3)) {
          return _evaluate(r.cdr.cdr.car, o);
        } else {
          return _evaluate(r.cdr.car, o);
        }
      };
      if (is_nil(r)) {
        throw new Error("too few expressions for `if`");
      }
      var s = _evaluate(r.car, o);
      return unpromise(s, u);
    }), "(if cond true-expr false-expr)\n\n         Macro that evaluates cond expression and if the value is true, it\n         evaluates and returns true-expression, if not it evaluates and returns\n         false-expression."), "let-env": new Macro("let-env", function(t2) {
      var e75 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var r = e75.dynamic_env, n = e75.use_dynamic, i = e75.error;
      typecheck("let-env", t2, "pair");
      var a = _evaluate(t2.car, { env: this, dynamic_env: r, error: i, use_dynamic: n });
      return unpromise(a, function(e76) {
        typecheck("let-env", e76, "environment");
        return _evaluate(Pair(LSymbol("begin"), t2.cdr), { env: e76, dynamic_env: r, error: i });
      });
    }, "(let-env env . body)\n\n        Special macro that evaluates body in context of given environment\n        object."), letrec: doc(let_macro(Symbol["for"]("letrec")), "(letrec ((a value-a) (b value-b) ...) . body)\n\n         Macro that creates a new environment, then evaluates and assigns values to\n         names and then evaluates the body in context of that environment.\n         Values are evaluated sequentially and the next value can access the\n         previous values/names."), "letrec*": doc(let_macro(Symbol["for"]("letrec")), "(letrec* ((a value-a) (b value-b) ...) . body)\n\n         Same as letrec but the order of execution of the binding is guaranteed,\n         so you can use recursive code as well as referencing the previous binding.\n\n         In LIPS both letrec and letrec* behave the same."), "let*": doc(let_macro(Symbol["for"]("let*")), "(let* ((a value-a) (b value-b) ...) . body)\n\n         Macro similar to `let`, but the subsequent bindings after the first\n         are evaluated in the environment including the previous let variables,\n         so you can define one variable, and use it in the next's definition."), let: doc(let_macro(Symbol["for"]("let")), "(let ((a value-a) (b value-b) ...) . body)\n\n         Macro that creates a new environment, then evaluates and assigns values to names,\n         and then evaluates the body in context of that environment.  Values are evaluated\n         sequentially but you can't access previous values/names when the next are\n         evaluated. You can only get them in the body of the let expression.  (If you want\n         to define multiple variables and use them in each other's definitions, use\n         `let*`.)"), "begin*": doc(parallel("begin*", function(e75) {
      return e75.pop();
    }), "(begin* . body)\n\n         This macro is a parallel version of begin. It evaluates each expression\n         in the body and if it's a promise it will await it in parallel and return\n         the value of the last expression (i.e. it uses Promise.all())."), shuffle: doc("shuffle", function(e75) {
      typecheck("shuffle", e75, ["pair", "nil", "array"]);
      var t2 = global_env.get("random");
      if (is_nil(e75)) {
        return _nil;
      }
      if (Array.isArray(e75)) {
        return shuffle(e75.slice(), t2);
      }
      var r = global_env.get("list->array")(e75);
      r = shuffle(r, t2);
      return global_env.get("array->list")(r);
    }, "(shuffle obj)\n\n        Order items in vector or list in random order."), begin: doc(new Macro("begin", function(e75, t2) {
      var n = _objectSpread(_objectSpread({}, t2), {}, { env: this });
      var i = global_env.get("list->array")(e75);
      var a;
      return function t3() {
        if (i.length) {
          var e76 = i.shift();
          var r = _evaluate(e76, n);
          return unpromise(r, function(e77) {
            a = e77;
            return t3();
          });
        } else {
          return a;
        }
      }();
    }), "(begin . args)\n\n         Macro that runs a list of expressions in order and returns the value\n         of the last one. It can be used in places where you can only have a\n         single expression, like (if)."), ignore: new Macro("ignore", function(e75, t2) {
      var r = _objectSpread(_objectSpread({}, t2), {}, { env: this, dynamic_env: this });
      _evaluate(new Pair(new LSymbol("begin"), e75), r);
    }, "(ignore . body)\n\n        Macro that will evaluate the expression and swallow any promises that may\n        be created. It will discard any value that may be returned by the last body\n        expression. The code should have side effects and/or when it's promise\n        it should resolve to undefined."), "call/cc": doc(Macro.defmacro("call/cc", function(e75) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var r = _objectSpread({ env: this }, t2);
      return unpromise(_evaluate(e75.car, r), function(e76) {
        if (is_function(e76)) {
          return e76(new Continuation(null));
        }
      });
    }), "(call/cc proc)\n\n         Call-with-current-continuation.\n\n         NOT SUPPORTED BY LIPS RIGHT NOW"), parameterize: doc(new Macro("parameterize", function(t2, e75) {
      var i = e75.dynamic_env;
      var a = i.inherit("parameterize").new_frame(null, {});
      var o = _objectSpread(_objectSpread({}, e75), {}, { env: this });
      var u = t2.car;
      if (!is_pair(u)) {
        var r = type(u);
        throw new Error("Invalid syntax for parameterize expecting pair got ".concat(r));
      }
      function s() {
        var e76 = new Pair(new LSymbol("begin"), t2.cdr);
        return _evaluate(e76, _objectSpread(_objectSpread({}, o), {}, { dynamic_env: a }));
      }
      return function r2() {
        var e76 = u.car;
        var n = e76.car.valueOf();
        return unpromise(_evaluate(e76.cdr.car, o), function(e77) {
          var t3 = i.get(n, { throwError: false });
          if (!is_parameter(t3)) {
            throw new Error("Unknown parameter ".concat(n));
          }
          a.set(n, t3.inherit(e77));
          if (!is_null(u.cdr)) {
            u = u.cdr;
            return r2();
          } else {
            return s();
          }
        });
      }();
    }), "(parameterize ((name value) ...)\n\n         Macro that change the dynamic variable created by make-parameter."), "make-parameter": doc(new Macro("make-parameter", function(e75, t2) {
      t2.dynamic_env;
      var r = _evaluate(e75.car, t2);
      var n;
      if (is_pair(e75.cdr.car)) {
        n = _evaluate(e75.cdr.car, t2);
      }
      return new Parameter(r, n);
    }), "(make-parameter init converter)\n\n    Function creates new dynamic variable that can be custimized with parameterize\n    macro. The value should be assigned to a variable e.g.:\n\n    (define radix (make-parameter 10))\n\n    The result value is a procedure that return the value of dynamic variable."), "define-syntax-parameter": doc(new Macro("define-syntax-parameter", function(e75, t2) {
      var r = e75.car;
      var n = this;
      if (!(r instanceof LSymbol)) {
        throw new Error("define-syntax-parameter: invalid syntax expecting symbol got ".concat(type(r)));
      }
      var i = _evaluate(e75.cdr.car, _objectSpread({ env: n }, t2));
      typecheck("define-syntax-parameter", i, "syntax", 2);
      i.__name__ = r.valueOf();
      if (i.__name__ instanceof LString) {
        i.__name__ = i.__name__.valueOf();
      }
      var a;
      if (is_pair(e75.cdr.cdr) && LString.isString(e75.cdr.cdr.car)) {
        a = e75.cdr.cdr.car.valueOf();
      }
      n.set(e75.car, new SyntaxParameter(i), a, true);
    }), "(define-syntax-parameter name syntax [__doc__])\n\n         Binds <keyword> to the transformer obtained by evaluating <transformer spec>.\n         The transformer provides the default expansion for the syntax parameter,\n         and in the absence of syntax-parameterize, is functionally equivalent to\n         define-syntax."), "syntax-parameterize": doc(new Macro("syntax-parameterize", function(e75, t2) {
      var r = global_env.get("list->array")(e75.car);
      var n = this.inherit("syntax-parameterize");
      while (r.length) {
        var i = r.shift();
        if (!(is_pair(i) || i.car instanceof LSymbol)) {
          var a = "invalid syntax for syntax-parameterize: ".concat(repr(e75, true));
          throw new Error("syntax-parameterize: ".concat(a));
        }
        var o = _evaluate(i.cdr.car, _objectSpread(_objectSpread({}, t2), {}, { env: this }));
        var u = i.car;
        typecheck("syntax-parameterize", o, ["syntax"]);
        typecheck("syntax-parameterize", u, "symbol");
        o.__name__ = u.valueOf();
        if (o.__name__ instanceof LString) {
          o.__name__ = o.__name__.valueOf();
        }
        var s = new SyntaxParameter(o);
        if (u.is_gensym()) {
          var c = u.literal();
          var l = this.get(c, { throwError: false });
          if (l instanceof SyntaxParameter) {
            n.set(c, s);
          }
        }
        n.set(u, s);
      }
      var f = hygienic_begin([n, t2.dynamic_env], e75.cdr);
      return _evaluate(f, _objectSpread(_objectSpread({}, t2), {}, { env: n }));
    }), "(syntax-parameterize (bindings) body)\n\n         Macro work similar to let-syntax but the the bindnds will be exposed to the user.\n         With syntax-parameterize you can define anaphoric macros."), define: doc(Macro.defmacro("define", function(r, e75) {
      var n = this;
      if (is_pair(r.car) && r.car.car instanceof LSymbol) {
        var t2 = new Pair(new LSymbol("define"), new Pair(r.car.car, new Pair(new Pair(new LSymbol("lambda"), new Pair(r.car.cdr, r.cdr)))));
        return t2;
      } else if (e75.macro_expand) {
        return;
      }
      e75.dynamic_env = this;
      e75.env = n;
      var i = r.cdr.car;
      var a;
      if (is_pair(i)) {
        i = _evaluate(i, e75);
        a = true;
      } else if (i instanceof LSymbol) {
        i = n.get(i);
      }
      typecheck("define", r.car, "symbol");
      return unpromise(i, function(e76) {
        if (n.__name__ === Syntax.__merge_env__) {
          n = n.__parent__;
        }
        if (a && (is_function(e76) && is_lambda(e76) || e76 instanceof Syntax || is_parameter(e76))) {
          e76.__name__ = r.car.valueOf();
          if (e76.__name__ instanceof LString) {
            e76.__name__ = e76.__name__.valueOf();
          }
        }
        var t3;
        if (is_pair(r.cdr.cdr) && LString.isString(r.cdr.cdr.car)) {
          t3 = r.cdr.cdr.car.valueOf();
        }
        n.set(r.car, e76, t3, true);
      });
    }), '(define name expression)\n         (define name expression "doc string")\n         (define (function-name . args) . body)\n\n         Macro for defining values. It can be used to define variables,\n         or functions. If the first argument is list it will create a function\n         with name being first element of the list. This form expands to\n         `(define function-name (lambda args body))`'), "set-obj!": doc("set-obj!", function(e75, t2, r) {
      var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      var i = _typeof$1(e75);
      if (is_null(e75) || i !== "object" && i !== "function") {
        var a = typeErrorMessage("set-obj!", type(e75), ["object", "function"]);
        throw new Error(a);
      }
      typecheck("set-obj!", t2, ["string", "symbol", "number"]);
      e75 = unbind(e75);
      t2 = t2.valueOf();
      if (arguments.length === 2) {
        delete e75[t2];
      } else if (is_prototype(e75) && is_function(r)) {
        e75[t2] = unbind(r);
        e75[t2][__prototype__] = true;
      } else if (is_function(r) || is_native(r) || is_nil(r)) {
        e75[t2] = r;
      } else {
        e75[t2] = r && !is_prototype(r) ? r.valueOf() : r;
      }
      if (props) {
        var o = e75[t2];
        Object.defineProperty(e75, t2, _objectSpread(_objectSpread({}, n), {}, { value: o }));
      }
    }, "(set-obj! obj key value)\n        (set-obj! obj key value props)\n\n        Function set a property of a JavaScript object. props should be a vector of pairs,\n        passed to Object.defineProperty."), "null-environment": doc("null-environment", function() {
      return global_env.inherit("null");
    }, "(null-environment)\n\n        Returns a clean environment with only the standard library."), values: doc("values", function e45() {
      for (var t2 = arguments.length, r = new Array(t2), n = 0; n < t2; n++) {
        r[n] = arguments[n];
      }
      return Values(r);
    }, "(values a1 a2 ...)\n\n        If called with more then one element it will create a special\n        Values object that can be used in the call-with-values function."), "call-with-values": doc("call-with-values", function(e75, t2) {
      typecheck("call-with-values", e75, "function", 1);
      typecheck("call-with-values", t2, "function", 2);
      var r = e75.apply(this);
      if (r instanceof Values) {
        return t2.apply(this, r.valueOf());
      }
      return t2.call(this, r);
    }, "(call-with-values producer consumer)\n\n        Calls the producer procedure with no arguments, then calls the\n        consumer procedure with the returned value as an argument -- unless\n        the returned value is a special Values object created by (values), if it is\n        the values are unpacked and the consumer is called with multiple arguments."), "current-environment": doc("current-environment", function() {
      if (this.__name__ === "__frame__") {
        return this.__parent__;
      }
      return this;
    }, "(current-environment)\n\n        Function that returns the current environment (they're first-class objects!)"), "parent.frame": doc("parent.frame", function() {
      return user_env;
    }, "(parent.frame)\n\n        Returns the parent environment if called from inside a function.\n        If no parent frame can be found it returns nil."), eval: doc("eval", function(n, i) {
      i = i || this.get("interaction-environment").call(this);
      return new Promise(function(e75, t2) {
        var r = _evaluate(n, { env: i, dynamic_env: i, error: t2 });
        e75(r);
      });
    }, "(eval expr)\n        (eval expr environment)\n\n        Function that evaluates LIPS Scheme code. If the second argument is provided\n        it will be the environment that the code is evaluated in."), lambda: new Macro("lambda", function(m) {
      var e75 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = e75.use_dynamic, v = e75.error;
      var b = this;
      var g;
      if (is_pair(m.cdr) && LString.isString(m.cdr.car) && !is_nil(m.cdr.cdr)) {
        g = m.cdr.car.valueOf();
      }
      function w() {
        var e76 = is_context(this) ? this : { dynamic_env: b }, r = e76.dynamic_env;
        var n = b.inherit("lambda");
        r = r.inherit("lambda");
        if (this && !is_context(this)) {
          if (this && !this.__instance__) {
            Object.defineProperty(this, "__instance__", { enumerable: false, get: function e77() {
              return true;
            }, set: function e77() {
            }, configurable: false });
          }
          n.set("this", this);
        }
        for (var t3 = arguments.length, i = new Array(t3), a = 0; a < t3; a++) {
          i[a] = arguments[a];
        }
        if (this instanceof LambdaContext) {
          var o = { throwError: false };
          n.set("arguments", this.env.get("arguments", o));
          n.set("parent.frame", this.env.get("parent.frame", o));
        } else {
          var u = i.slice();
          u.callee = w;
          u.env = n;
          n.set("arguments", u);
        }
        function s(e77, t4) {
          n.__env__[e77.__name__] = t4;
          r.__env__[e77.__name__] = t4;
        }
        var c = m.car;
        var l = 0;
        if (c instanceof LSymbol || !is_nil(c)) {
          while (true) {
            if (!is_nil(c.car)) {
              if (c instanceof LSymbol) {
                var f = quote(Pair.fromArray(i.slice(l), false));
                s(c, f);
                break;
              } else if (is_pair(c)) {
                var _ = i[l];
                s(c.car, _);
              }
            }
            if (is_nil(c.cdr)) {
              break;
            }
            l++;
            c = c.cdr;
          }
        }
        var p = g ? m.cdr.cdr : m.cdr;
        var d = hygienic_begin([n, r], p);
        var h = { env: n, dynamic_env: r, use_dynamic: y, error: v };
        return _evaluate(d, h);
      }
      var t2 = is_pair(m.car) ? m.car.length() : null;
      w.__code__ = new Pair(new LSymbol("lambda"), m);
      w[__lambda__] = true;
      if (!is_pair(m.car)) {
        return doc(w, g, true);
      }
      return doc(set_fn_length(w, t2), g, true);
    }, "(lambda (a b) body)\n        (lambda args body)\n        (lambda (a b . rest) body)\n\n        The lambda macro creates a new anonymous function. If the first element of\n        the body is a string and there is more elements the string is used as the\n        documentation string, that can be read using (help fn)."), macroexpand: doc(new Macro("macroexpand", macro_expand()), "(macroexpand expr)\n\n         Macro that expand all macros inside and return single expression as output."), "macroexpand-1": doc(new Macro("macroexpand-1", macro_expand(true)), "(macroexpand-1 expr)\n\n         Macro similar to macroexpand but it expand macros only one level\n         and return single expression as output."), "define-macro": doc(new Macro(macro, function(e75, t2) {
      var r = t2.use_dynamic, n = t2.error;
      var i, a, o, u;
      if (is_named_macro(e75)) {
        i = e75.car.car.__name__;
        o = e75.cdr;
        u = e75.car.cdr;
      }
      if (is_lambda_macro(e75)) {
        i = e75.car.__name__;
        var s = e75.cdr.car;
        u = s.cdr.car;
        o = s.cdr.cdr;
      }
      if (i && o && u) {
        if (LString.isString(o.car) && is_pair(o.cdr)) {
          a = o.car.valueOf();
          o = o.cdr;
        }
        var c = define_macro(i, u, o, a, { use_dynamic: r, error: n });
        this.set(i, c);
      } else {
        throw new Error("Syntax Error: Invalid `define-macro` expression");
      }
    }), "(define-macro (name . args) body)\n\n         The meta-macro, that creates new macros. If the return value is a list structure\n         it will be evaluated where the macro is invoked from. You can use quasiquote `\n         and unquote , and unquote-splicing ,@ inside to create an expression that will be\n         evaluated at runtime. Macros works like this: if you pass any expression to a\n         macro the arguments will not be evaluated unless the macro's body explicitly\n         calls (eval) on it. Because of this a macro can manipulate the expression\n         (arguments) as lists."), "syntax-rules": new Macro("syntax-rules", function(b, e75) {
      var g = e75.use_dynamic, w = e75.error;
      var D = this;
      function x(e76) {
        var t3 = [];
        while (!is_nil(e76)) {
          var r2 = e76.car;
          t3.push(r2.valueOf());
          e76 = e76.cdr;
        }
        return t3;
      }
      function t2(e76) {
        while (!is_nil(e76)) {
          var t3 = e76.car;
          if (!(t3 instanceof LSymbol)) {
            throw new Error("syntax-rules: wrong identifier");
          }
          e76 = e76.cdr;
        }
      }
      if (b.car instanceof LSymbol) {
        t2(b.cdr.car);
      } else {
        t2(b.car);
      }
      var r = new Syntax(function(e76, t3) {
        var r2 = t3.macro_expand;
        log(">> SYNTAX");
        log(e76);
        log(b);
        var n = D.inherit("syntax");
        var i = n;
        var a = this;
        if (a.__name__ === Syntax.__merge_env__) {
          var o = Object.getOwnPropertySymbols(a.__env__);
          o.forEach(function(e77) {
            a.__parent__.set(e77, a.__env__[e77]);
          });
          a = a.__parent__;
        }
        var u = { env: n, dynamic_env: i, use_dynamic: g, error: w };
        var s, c, l;
        if (b.car instanceof LSymbol) {
          s = b.car;
          l = x(b.cdr.car);
          c = b.cdr.cdr;
        } else {
          s = "...";
          l = x(b.car);
          c = b.cdr;
        }
        try {
          while (!is_nil(c)) {
            var f = c.car.car;
            var _ = c.car.cdr.car;
            log("[[[ RULE");
            log(f);
            var p = extract_patterns(f, e76, l, s, { expansion: this, define: D });
            if (p) {
              if (is_debug()) {
                console.log(JSON.stringify(symbolize(p), true, 2));
                console.log("PATTERN: " + f.toString(true));
                console.log("MACRO: " + e76.toString(true));
              }
              var d = [];
              var h = transform_syntax({ bindings: p, expr: _, symbols: l, scope: n, lex_scope: a, names: d, ellipsis: s });
              log("OUPUT>>> ", h);
              if (h) {
                _ = h;
              }
              var m = a.merge(n, Syntax.__merge_env__);
              if (r2) {
                return { expr: _, scope: m };
              }
              var y = _evaluate(_, _objectSpread(_objectSpread({}, u), {}, { env: m }));
              return clear_gensyms(y, d);
            }
            c = c.cdr;
          }
        } catch (e77) {
          var v = "\nin macro:\n  ".concat(b.toString(true));
          if (!e77.message.includes(v)) {
            e77.message += v;
          }
          throw e77;
        }
        throw new Error("syntax-rules: no matching syntax in macro ".concat(e76.toString(true)));
      }, D);
      r.__code__ = b;
      return r;
    }, "(syntax-rules () (pattern expression) ...)\n\n        Base of hygienic macros, it will return a new syntax expander\n        that works like Lisp macros."), quote: doc(new Macro("quote", function(e75) {
      return quote(e75.car);
    }), "(quote expression) or 'expression\n\n         Macro that returns a single LIPS expression as data (it won't evaluate the\n         argument). It will return a list if put in front of LIPS code.\n         And if put in front of a symbol it will return the symbol itself, not the value\n         bound to that name."), "unquote-splicing": doc("unquote-splicing", function() {
      throw new Error("You can't call `unquote-splicing` outside of quasiquote");
    }, "(unquote-splicing code) or ,@code\n\n        Special form used in the quasiquote macro. It evaluates the expression inside and\n        splices the list into quasiquote's result. If it is not the last element of the\n        expression, the computed value must be a pair."), unquote: doc("unquote", function() {
      throw new Error("You can't call `unquote` outside of quasiquote");
    }, "(unquote code) or ,code\n\n        Special form used in the quasiquote macro. It evaluates the expression inside and\n        substitutes the value into quasiquote's result."), quasiquote: Macro.defmacro("quasiquote", function(e75, t2) {
      var u = t2.use_dynamic, s = t2.error;
      var c = this;
      var l = c;
      function a(e76) {
        return is_pair(e76) || is_plain_object(e76) || Array.isArray(e76);
      }
      function f(e76, t3) {
        var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a;
        if (is_pair(e76)) {
          var n2 = e76.car;
          var i2 = e76.cdr;
          if (r2(n2)) {
            n2 = t3(n2);
          }
          if (r2(i2)) {
            i2 = t3(i2);
          }
          if (is_promise(n2) || is_promise(i2)) {
            return promise_all([n2, i2]).then(function(e77) {
              var t4 = _slicedToArray(e77, 2), r3 = t4[0], n3 = t4[1];
              return new Pair(r3, n3);
            });
          } else {
            return new Pair(n2, i2);
          }
        }
        return e76;
      }
      function o(e76, t3) {
        if (is_pair(e76)) {
          if (!is_nil(t3)) {
            e76.append(t3);
          }
        } else {
          e76 = new Pair(e76, t3);
        }
        return e76;
      }
      function r(e76) {
        return !!e76.filter(function(e77) {
          return is_pair(e77) && LSymbol.is(e77.car, /^(unquote|unquote-splicing)$/);
        }).length;
      }
      function _(e76, n2, i2) {
        return e76.reduce(function(e77, t3) {
          if (!is_pair(t3)) {
            e77.push(t3);
            return e77;
          }
          if (LSymbol.is(t3.car, "unquote-splicing")) {
            var r2;
            if (n2 + 1 < i2) {
              r2 = m(t3.cdr, n2 + 1, i2);
            } else {
              r2 = _evaluate(t3.cdr.car, { env: c, use_dynamic: u, dynamic_env: l, error: s });
            }
            if (!is_pair(r2)) {
              throw new Error("Expecting list ".concat(type(t3), " found"));
            }
            return e77.concat(r2.to_array());
          }
          e77.push(m(t3, n2, i2));
          return e77;
        }, []);
      }
      function p(n2, i2, a2) {
        var o2 = {};
        i2++;
        Object.keys(n2).forEach(function(e76) {
          var t3 = n2[e76];
          if (is_pair(t3)) {
            if (LSymbol.is(t3.car, "unquote-splicing")) {
              throw new Error("You can't call `unquote-splicing` inside object");
            }
            var r2;
            if (i2 < a2) {
              r2 = m(t3.cdr.car, i2, a2);
            } else {
              r2 = _evaluate(t3.cdr.car, { env: c, dynamic_env: l, use_dynamic: u, error: s });
            }
            o2[e76] = r2;
          } else {
            o2[e76] = t3;
          }
        });
        if (Object.isFrozen(n2)) {
          Object.freeze(o2);
        }
        return o2;
      }
      function d(i2, e76, t3) {
        if (e76 < t3) {
          var r2 = _nil;
          if (!is_nil(i2.cdr)) {
            r2 = m(i2.cdr, e76 - 1, t3);
          }
          return new Pair(new Pair(i2.car.car, m(i2.car.cdr, e76, t3)), r2);
        }
        var n2 = [];
        return function e77(t4) {
          var r3 = _evaluate(t4.car, { env: c, dynamic_env: l, use_dynamic: u, error: s });
          n2.push(r3);
          if (is_pair(t4.cdr)) {
            return e77(t4.cdr);
          }
          return unpromise(n2, function(r4) {
            if (r4.some(function(e79) {
              return !is_pair(e79);
            })) {
              if (is_pair(i2.cdr) && LSymbol.is(i2.cdr.car, ".") && is_pair(i2.cdr.cdr) && is_nil(i2.cdr.cdr.cdr)) {
                return i2.cdr.cdr.car;
              }
              if (!(is_nil(i2.cdr) || is_pair(i2.cdr))) {
                var e78 = "You can't splice atom inside list";
                throw new Error(e78);
              }
              if (r4.length > 1) {
                var t5 = "You can't splice multiple atoms inside list";
                throw new Error(t5);
              }
              if (!(is_pair(i2.cdr) && is_nil(r4[0]))) {
                return r4[0];
              }
            }
            r4 = r4.map(function(e79) {
              if (h.has(e79)) {
                return e79.clone();
              } else {
                h.add(e79);
                return e79;
              }
            });
            var n3 = m(i2.cdr, 0, 1);
            if (is_nil(n3) && is_nil(r4[0])) {
              return void 0;
            }
            return unpromise(n3, function(e79) {
              if (is_nil(r4[0])) {
                return e79;
              }
              if (r4.length === 1) {
                return o(r4[0], e79);
              }
              var t6 = r4.reduce(function(e80, t7) {
                return o(e80, t7);
              });
              return o(t6, e79);
            });
          });
        }(i2.car.cdr);
      }
      var h = /* @__PURE__ */ new Set();
      function m(e76, t3, r2) {
        if (is_pair(e76)) {
          if (is_pair(e76.car)) {
            if (LSymbol.is(e76.car.car, "unquote-splicing")) {
              return d(e76, t3 + 1, r2);
            }
            if (LSymbol.is(e76.car.car, "unquote")) {
              if (t3 + 2 === r2 && is_pair(e76.car.cdr) && is_pair(e76.car.cdr.car) && LSymbol.is(e76.car.cdr.car.car, "unquote-splicing")) {
                var n2 = e76.car.cdr;
                return new Pair(new Pair(new LSymbol("unquote"), d(n2, t3 + 2, r2)), _nil);
              } else if (is_pair(e76.car.cdr) && !is_nil(e76.car.cdr.cdr)) {
                if (is_pair(e76.car.cdr.car)) {
                  var i2 = [];
                  return function t4(r3) {
                    if (is_nil(r3)) {
                      return Pair.fromArray(i2);
                    }
                    return unpromise(_evaluate(r3.car, { env: c, dynamic_env: l, use_dynamic: u, error: s }), function(e77) {
                      i2.push(e77);
                      return t4(r3.cdr);
                    });
                  }(e76.car.cdr);
                } else {
                  return e76.car.cdr;
                }
              }
            }
          }
          if (LSymbol.is(e76.car, "quasiquote")) {
            var a2 = m(e76.cdr, t3, r2 + 1);
            return new Pair(e76.car, a2);
          }
          if (LSymbol.is(e76.car, "quote")) {
            return new Pair(e76.car, m(e76.cdr, t3, r2));
          }
          if (LSymbol.is(e76.car, "unquote")) {
            t3++;
            if (t3 < r2) {
              return new Pair(new LSymbol("unquote"), m(e76.cdr, t3, r2));
            }
            if (t3 > r2) {
              throw new Error("You can't call `unquote` outside of quasiquote");
            }
            if (is_pair(e76.cdr)) {
              if (!is_nil(e76.cdr.cdr)) {
                if (is_pair(e76.cdr.car)) {
                  var o2 = [];
                  return function t4(r3) {
                    if (is_nil(r3)) {
                      return Pair.fromArray(o2);
                    }
                    return unpromise(_evaluate(r3.car, { env: c, dynamic_env: l, use_dynamic: u, error: s }), function(e77) {
                      o2.push(e77);
                      return t4(r3.cdr);
                    });
                  }(e76.cdr);
                } else {
                  return e76.cdr;
                }
              } else {
                return _evaluate(e76.cdr.car, { env: c, dynamic_env: l, error: s });
              }
            } else {
              return e76.cdr;
            }
          }
          return f(e76, function(e77) {
            return m(e77, t3, r2);
          });
        } else if (is_plain_object(e76)) {
          return p(e76, t3, r2);
        } else if (e76 instanceof Array) {
          return _(e76, t3, r2);
        }
        return e76;
      }
      function n(e76) {
        if (is_pair(e76)) {
          delete e76[__data__];
          if (!e76.have_cycles("car")) {
            n(e76.car);
          }
          if (!e76.have_cycles("cdr")) {
            n(e76.cdr);
          }
        }
      }
      if (is_plain_object(e75.car) && !r(Object.values(e75.car))) {
        return quote(e75.car);
      }
      if (Array.isArray(e75.car) && !r(e75.car)) {
        return quote(e75.car);
      }
      if (is_pair(e75.car) && !e75.car.find("unquote") && !e75.car.find("unquote-splicing") && !e75.car.find("quasiquote")) {
        return quote(e75.car);
      }
      var i = m(e75.car, 0, 1);
      return unpromise(i, function(e76) {
        n(e76);
        return quote(e76);
      });
    }, "(quasiquote list)\n\n        Similar macro to `quote` but inside it you can use special expressions (unquote\n        x) abbreviated to ,x that will evaluate x and insert its value verbatim or\n        (unquote-splicing x) abbreviated to ,@x that will evaluate x and splice the value\n        into the result. Best used with macros but it can be used outside."), clone: doc("clone", function e46(t2) {
      typecheck("clone", t2, "pair");
      return t2.clone();
    }, "(clone list)\n\n        Function that returns a clone of the list, that does not share any pairs with the\n        original, so the clone can be safely mutated without affecting the original."), append: doc("append", function e47() {
      var t2;
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) {
        n[i] = arguments[i];
      }
      n = n.map(function(e75) {
        if (is_pair(e75)) {
          return e75.clone();
        }
        return e75;
      });
      return (t2 = global_env.get("append!")).call.apply(t2, [this].concat(_toConsumableArray(n)));
    }, "(append item ...)\n\n        Function that creates a new list with each argument appended end-to-end.\n        It will always return a new list and not modify its arguments."), "append!": doc("append!", function() {
      var r = global_env.get("list?");
      for (var e75 = arguments.length, t2 = new Array(e75), n = 0; n < e75; n++) {
        t2[n] = arguments[n];
      }
      return t2.reduce(function(e76, t3) {
        typecheck("append!", e76, ["nil", "pair"]);
        if ((is_pair(t3) || is_nil(t3)) && !r(t3)) {
          throw new Error("append!: Invalid argument, value is not a list");
        }
        if (is_nil(e76)) {
          if (is_nil(t3)) {
            return _nil;
          }
          return t3;
        }
        if (is_null(t3)) {
          return e76;
        }
        return e76.append(t3);
      }, _nil);
    }, "(append! arg1 ...)\n\n        Destructive version of append, it can modify the lists in place. It returns\n        a new list where each argument is appended to the end. It may modify\n        lists added as arguments."), reverse: doc("reverse", function e48(t2) {
      typecheck("reverse", t2, ["array", "pair", "nil"]);
      if (is_nil(t2)) {
        return _nil;
      }
      if (is_pair(t2)) {
        var r = global_env.get("list->array")(t2).reverse();
        return global_env.get("array->list")(r);
      } else if (Array.isArray(t2)) {
        return t2.reverse();
      } else {
        throw new Error(typeErrorMessage("reverse", type(t2), "array or pair"));
      }
    }, "(reverse list)\n\n        Function that reverses the list or array. If value is not a list\n        or array it will error."), nth: doc("nth", function e49(t2, r) {
      typecheck("nth", t2, "number");
      typecheck("nth", r, ["array", "pair"]);
      if (is_pair(r)) {
        var n = r;
        var i = 0;
        while (i < t2) {
          if (!n.cdr || is_nil(n.cdr) || n.have_cycles("cdr")) {
            return _nil;
          }
          n = n.cdr;
          i++;
        }
        return n.car;
      } else if (r instanceof Array) {
        return r[t2];
      } else {
        throw new Error(typeErrorMessage("nth", type(r), "array or pair", 2));
      }
    }, "(nth index obj)\n\n        Function that returns the nth element of the list or array.\n        If used with a non-indexable value it will error."), list: doc("list", function e50() {
      for (var t2 = arguments.length, r = new Array(t2), n = 0; n < t2; n++) {
        r[n] = arguments[n];
      }
      return r.reverse().reduce(function(e75, t3) {
        return new Pair(t3, e75);
      }, _nil);
    }, "(list . args)\n\n        Function that creates a new list out of its arguments."), substring: doc("substring", function e51(t2, r, n) {
      typecheck("substring", t2, "string");
      typecheck("substring", r, "number");
      typecheck("substring", n, ["number", "void"]);
      return t2.substring(r.valueOf(), n && n.valueOf());
    }, "(substring string start end)\n\n        Function that returns the slice of the string starting at start and ending\n        with end."), concat: doc("concat", function e52() {
      for (var t2 = arguments.length, r = new Array(t2), n = 0; n < t2; n++) {
        r[n] = arguments[n];
      }
      r.forEach(function(e75, t3) {
        return typecheck("concat", e75, "string", t3 + 1);
      });
      return r.join("");
    }, "(concat . strings)\n\n        Function that creates a new string by joining its arguments."), join: doc("join", function e53(t2, r) {
      typecheck("join", t2, "string");
      typecheck("join", r, ["pair", "nil"]);
      return global_env.get("list->array")(r).join(t2);
    }, "(join separator list)\n\n        Function that returns a string by joining elements of the list using separator."), split: doc("split", function e54(t2, r) {
      typecheck("split", t2, ["regex", "string"]);
      typecheck("split", r, "string");
      return global_env.get("array->list")(r.split(t2));
    }, "(split separator string)\n\n        Function that creates a list by splitting string by separator which can\n        be a string or regular expression."), replace: doc("replace", function e55(t2, r, n) {
      typecheck("replace", t2, ["regex", "string"]);
      typecheck("replace", r, ["string", "function"]);
      typecheck("replace", n, "string");
      if (is_function(r)) {
        var i = [];
        n.replace(t2, function() {
          i.push(r.apply(void 0, arguments));
        });
        return unpromise(i, function(e75) {
          return n.replace(t2, function() {
            return e75.shift();
          });
        });
      }
      return n.replace(t2, r);
    }, "(replace pattern replacement string)\n\n        Function that changes pattern to replacement inside string. Pattern can be a\n        string or regex and replacement can be function or string. See Javascript\n        String.replace()."), match: doc("match", function e56(t2, r) {
      typecheck("match", t2, ["regex", "string"]);
      typecheck("match", r, "string");
      var n = r.match(t2);
      return n ? global_env.get("array->list")(n) : false;
    }, "(match pattern string)\n\n        Function that returns a match object from JavaScript as a list or #f if\n        no match."), search: doc("search", function e57(t2, r) {
      typecheck("search", t2, ["regex", "string"]);
      typecheck("search", r, "string");
      return r.search(t2);
    }, "(search pattern string)\n\n        Function that returns the first found index of the pattern inside a string."), repr: doc("repr", function e58(t2, r) {
      return to_string(t2, r);
    }, "(repr obj)\n\n        Function that returns a LIPS code representation of the object as a string."), "escape-regex": doc("escape-regex", function(e75) {
      typecheck("escape-regex", e75, "string");
      return escape_regex(e75.valueOf());
    }, "(escape-regex string)\n\n        Function that returns a new string where all special operators used in regex,\n        are escaped with backslashes so they can be used in the RegExp constructor\n        to match a literal string."), env: doc("env", function e59(e59) {
      e59 = e59 || this.env;
      var t2 = Object.keys(e59.__env__).map(LSymbol);
      var r;
      if (t2.length) {
        r = Pair.fromArray(t2);
      } else {
        r = _nil;
      }
      if (e59.__parent__ instanceof Environment) {
        return global_env.get("env").call(this, e59.__parent__).append(r);
      }
      return r;
    }, "(env)\n        (env obj)\n\n        Function that returns a list of names (functions, macros and variables)\n        that are bound in the current environment or one of its parents."), new: doc("new", function(e75) {
      var t2 = unbind(e75);
      var r;
      for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) {
        i[a - 1] = arguments[a];
      }
      if (t2[Symbol["for"]("__class__")]) {
        r = _construct(t2, i);
      } else {
        r = _construct(t2, _toConsumableArray(i.map(function(e76) {
          return unbox(e76);
        })));
      }
      return r;
    }, "(new obj . args)\n\n        Function that creates new JavaScript instance of an object."), typecheck: doc(typecheck, "(typecheck label value type [position])\n\n         Checks the type of value and errors if the type is not one allowed.  Type can be\n         string or list of strings. The position optional argument is used to create a\n         proper error message for the nth argument of function calls."), "typecheck-number": doc(typecheck_number, "(typecheck-number label value type [position])\n\n         Function similar to typecheck but checks if the argument is a number\n         and specific type of number e.g. complex."), "unset-special!": doc("unset-special!", function(e75) {
      typecheck("remove-special!", e75, "string");
      delete specials.remove(e75.valueOf());
    }, "(unset-special! name)\n\n        Function that removes a special symbol from parser added by `set-special!`,\n        name must be a string."), "set-special!": doc("set-special!", function(e75, t2) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : specials.LITERAL;
      typecheck("set-special!", e75, "string", 1);
      typecheck("set-special!", t2, "symbol", 2);
      specials.append(e75.valueOf(), t2, r);
    }, '(set-special! symbol name [type])\n\n        Add a special symbol to the list of transforming operators by the parser.\n        e.g.: `(add-special! "#" \'x)` will allow to use `#(1 2 3)` and it will be\n        transformed into (x (1 2 3)) so you can write x macro that will process\n        the list. 3rd argument is optional, and it can be one of two values:\n        lips.specials.LITERAL, which is the default behavior, or\n        lips.specials.SPLICE which causes the value to be unpacked into the expression.\n        This can be used for e.g. to make `#(1 2 3)` into (x 1 2 3) that is needed\n        by # that defines vectors.'), get: get2, ".": get2, unbind: doc(unbind, "(unbind fn)\n\n         Function that removes the weak 'this' binding from a function so you\n         can get properties from the actual function object."), type: doc(type, "(type object)\n\n         Function that returns the type of an object as string."), debugger: doc("debugger", function() {
      debugger;
    }, '(debugger)\n\n        Function that triggers the JavaScript debugger (e.g. the browser devtools)\n        using the "debugger;" statement. If a debugger is not running this\n        function does nothing.'), in: doc("in", function(e75, t2) {
      if (e75 instanceof LSymbol || e75 instanceof LString || e75 instanceof LNumber) {
        e75 = e75.valueOf();
      }
      return e75 in unbox(t2);
    }, '(in key value)\n\n        Function that uses the Javascript "in" operator to check if key is\n        a valid property in the value.'), "instance?": doc("instance?", function(e75) {
      return is_instance(e75);
    }, "(instance? obj)\n\n        Checks if object is an instance, created with a new operator"), instanceof: doc("instanceof", function(e75, t2) {
      return t2 instanceof unbind(e75);
    }, "(instanceof type obj)\n\n        Predicate that tests if the obj is an instance of type."), "prototype?": doc("prototype?", is_prototype, "(prototype? obj)\n\n         Predicate that tests if value is a valid JavaScript prototype,\n         i.e. calling (new) with it will not throw '<x> is not a constructor'."), "macro?": doc("macro?", function(e75) {
      return e75 instanceof Macro;
    }, "(macro? expression)\n\n        Predicate that tests if value is a macro."), "continuation?": doc("continuation?", is_continuation, "(continuation? expression)\n\n         Predicate that tests if value is a callable continuation."), "function?": doc("function?", is_function, "(function? expression)\n\n         Predicate that tests if value is a callable function."), "real?": doc("real?", function(e75) {
      if (type(e75) !== "number") {
        return false;
      }
      if (e75 instanceof LNumber) {
        return e75.isFloat();
      }
      return LNumber.isFloat(e75);
    }, "(real? number)\n\n        Predicate that tests if value is a real number (not complex)."), "number?": doc("number?", function(e75) {
      return Number.isNaN(e75) || LNumber.isNumber(e75);
    }, "(number? expression)\n\n        Predicate that tests if value is a number or NaN value."), "string?": doc("string?", function(e75) {
      return LString.isString(e75);
    }, "(string? expression)\n\n        Predicate that tests if value is a string."), "pair?": doc("pair?", is_pair, "(pair? expression)\n\n         Predicate that tests if value is a pair or list structure."), "regex?": doc("regex?", function(e75) {
      return e75 instanceof RegExp;
    }, "(regex? expression)\n\n        Predicate that tests if value is a regular expression."), "null?": doc("null?", function(e75) {
      return is_null(e75);
    }, "(null? expression)\n\n        Predicate that tests if value is null-ish (i.e. undefined, nil, or\n        Javascript null)."), "boolean?": doc("boolean?", function(e75) {
      return typeof e75 === "boolean";
    }, "(boolean? expression)\n\n        Predicate that tests if value is a boolean (#t or #f)."), "symbol?": doc("symbol?", function(e75) {
      return e75 instanceof LSymbol;
    }, "(symbol? expression)\n\n        Predicate that tests if value is a LIPS symbol."), "array?": doc("array?", function(e75) {
      return e75 instanceof Array;
    }, "(array? expression)\n\n        Predicate that tests if value is an array."), "object?": doc("object?", function(e75) {
      return !is_nil(e75) && e75 !== null && !(e75 instanceof LCharacter) && !(e75 instanceof RegExp) && !(e75 instanceof LString) && !is_pair(e75) && !(e75 instanceof LNumber) && _typeof$1(e75) === "object" && !(e75 instanceof Array);
    }, "(object? expression)\n\n        Predicate that tests if value is an plain object (not another LIPS type)."), flatten: doc("flatten", function e60(t2) {
      typecheck("flatten", t2, "pair");
      return t2.flatten();
    }, "(flatten list)\n\n        Returns a shallow list from tree structure (pairs)."), "vector-append": doc("vector-append", function() {
      for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
        t2[r] = arguments[r];
      }
      if (!t2.length) {
        return [];
      }
      typecheck_args("vector-append", t2, "array");
      var n = t2[0], i = t2.slice(1);
      return n.concat.apply(n, _toConsumableArray(i));
    }, "(vector-append v1 v2 ...)\n\n         Returns new vector by combining it's arguments that should be vectors."), "array->list": doc("array->list", function(e75) {
      typecheck("array->list", e75, "array");
      return Pair.fromArray(e75);
    }, "(array->list array)\n\n        Function that converts a JavaScript array to a LIPS cons list."), "tree->array": doc("tree->array", to_array("tree->array", true), "(tree->array list)\n\n         Function that converts a LIPS cons tree structure into a JavaScript array."), "list->array": doc("list->array", to_array("list->array"), "(list->array list)\n\n         Function that converts a LIPS list into a JavaScript array."), apply: doc("apply", function e61(t2) {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
        n[i - 1] = arguments[i];
      }
      typecheck("apply", t2, "function", 1);
      var a = n.pop();
      typecheck("apply", a, ["pair", "nil"], n.length + 2);
      n = n.concat(global_env.get("list->array").call(this, a));
      return t2.apply(this, prepare_fn_args(t2, n));
    }, "(apply fn list)\n\n        Function that calls fn with the list of arguments."), length: doc("length", function e62(t2) {
      if (!t2 || is_nil(t2)) {
        return 0;
      }
      if (is_pair(t2)) {
        return t2.length();
      }
      if ("length" in t2) {
        return t2.length;
      }
    }, '(length expression)\n\n        Function that returns the length of the object. The object can be a LIPS\n        list or any object that has a "length" property. Returns undefined if the\n        length could not be found.'), "string->number": doc("string->number", function(e75) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
      typecheck("string->number", e75, "string", 1);
      typecheck("string->number", t2, "number", 2);
      e75 = e75.valueOf();
      t2 = t2.valueOf();
      if (e75.match(rational_bare_re) || e75.match(rational_re)) {
        return parse_rational(e75, t2);
      } else if (e75.match(complex_bare_re) || e75.match(complex_re)) {
        return parse_complex(e75, t2);
      } else {
        var r = t2 === 10 && !e75.match(/e/i) || t2 === 16;
        if (e75.match(int_bare_re) && r || e75.match(int_re)) {
          return parse_integer(e75, t2);
        }
        if (e75.match(float_re)) {
          return parse_float(e75);
        }
      }
      return false;
    }, "(string->number number [radix])\n\n        Function that parses a string into a number."), try: doc(new Macro("try", function(r, e75) {
      var f = this;
      var _ = e75.use_dynamic;
      e75.error;
      return new Promise(function(t2, u) {
        var s, n;
        if (LSymbol.is(r.cdr.car.car, "catch")) {
          s = r.cdr.car;
          if (is_pair(r.cdr.cdr) && LSymbol.is(r.cdr.cdr.car.car, "finally")) {
            n = r.cdr.cdr.car;
          }
        } else if (LSymbol.is(r.cdr.car.car, "finally")) {
          n = r.cdr.car;
        }
        if (!(n || s)) {
          throw new Error("try: invalid syntax");
        }
        function c(e77) {
          t2(e77);
          throw new IgnoreException("[CATCH]");
        }
        var l = function e77(t3, r2) {
          r2(t3);
        };
        if (n) {
          l = function e77(t3, r2) {
            l = u;
            i.error = function(e78) {
              throw e78;
            };
            unpromise(_evaluate(new Pair(new LSymbol("begin"), n.cdr), i), function() {
              r2(t3);
            });
          };
        }
        var i = { env: f, use_dynamic: _, dynamic_env: f, error: function e77(t3) {
          if (t3 instanceof IgnoreException) {
            throw t3;
          }
          if (s) {
            var r2 = f.inherit("try");
            var n2 = s.cdr.car.car;
            if (!(n2 instanceof LSymbol)) {
              throw new Error("try: invalid syntax: catch require variable name");
            }
            r2.set(n2, t3);
            var i2;
            var a = { env: r2, use_dynamic: _, dynamic_env: f, error: function e78(t4) {
              i2 = true;
              u(t4);
              throw new IgnoreException("[CATCH]");
            } };
            var o = _evaluate(new Pair(new LSymbol("begin"), s.cdr.cdr), a);
            unpromise(o, function e78(t4) {
              if (!i2) {
                l(t4, c);
              }
            });
          } else {
            l(void 0, function() {
              u(t3);
            });
          }
        } };
        var e76 = _evaluate(r.car, i);
        unpromise(e76, function(e77) {
          l(e77, t2);
        }, i.error);
      });
    }), "(try expr (catch (e) code))\n         (try expr (catch (e) code) (finally code))\n         (try expr (finally code))\n\n         Macro that executes expr and catches any exceptions thrown. If catch is provided\n         it's executed when an error is thrown. If finally is provided it's always\n         executed at the end."), raise: doc("raise", function(e75) {
      throw e75;
    }, "(raise obj)\n\n        Throws the object verbatim (no wrapping an a new Error)."), throw: doc("throw", function(e75) {
      throw new Error(e75);
    }, "(throw string)\n\n        Throws a new exception."), find: doc("find", function t(r, n) {
      typecheck("find", n, ["pair", "nil"]);
      if (is_null(n)) {
        return false;
      }
      var e75 = matcher("find", r);
      return unpromise(e75(n.car), function(e76) {
        if (e76 && !is_nil(e76)) {
          return n.car;
        }
        return t(r, n.cdr);
      });
    }, "(find fn list)\n        (find regex list)\n        (find atom list)\n\n        Higher-order function that finds the first value for which fn return true.\n        If called with a regex or any atom it will create a matcher function."), "for-each": doc("for-each", function(e75) {
      var t2;
      typecheck("for-each", e75, "function");
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
        n[i - 1] = arguments[i];
      }
      n.forEach(function(e76, t3) {
        typecheck("for-each", e76, ["pair", "nil"], t3 + 1);
      });
      var a = (t2 = global_env.get("map")).call.apply(t2, [this, e75].concat(n));
      if (is_promise(a)) {
        return a.then(function() {
        });
      }
    }, "(for-each fn . lists)\n\n        Higher-order function that calls function `fn` on each\n        value of the argument. If you provide more than one list\n        it will take each value from each list and call `fn` function\n        with that many arguments as number of list arguments."), map: doc("map", function e63(r) {
      var n = this;
      for (var t2 = arguments.length, i = new Array(t2 > 1 ? t2 - 1 : 0), a = 1; a < t2; a++) {
        i[a - 1] = arguments[a];
      }
      typecheck("map", r, "function");
      var o = global_env.get("list?");
      i.forEach(function(e75, t3) {
        typecheck("map", e75, ["pair", "nil"], t3 + 1);
        if (is_pair(e75) && !o.call(n, e75)) {
          throw new Error("map: argument ".concat(t3 + 1, " is not a list"));
        }
      });
      if (i.length === 0) {
        return _nil;
      }
      if (i.some(is_nil)) {
        return _nil;
      }
      var u = i.map(function(e75) {
        return e75.car;
      });
      var s = this.env, c = this.dynamic_env, l = this.use_dynamic;
      var f = call_function(r, u, { env: s, dynamic_env: c, use_dynamic: l });
      return unpromise(f, function(t3) {
        return unpromise(e63.call.apply(e63, [n, r].concat(_toConsumableArray(i.map(function(e75) {
          return e75.cdr;
        })))), function(e75) {
          return new Pair(t3, e75);
        });
      });
    }, "(map fn . lists)\n\n        Higher-order function that calls function `fn` with each\n        value of the list. If you provide more then one list as argument\n        it will take each value from each list and call `fn` function\n        with that many argument as number of list arguments. The return\n        values of the fn calls are accumulated in a result list and\n        returned by map."), "list?": doc("list?", function(e75) {
      var t2 = e75;
      while (true) {
        if (is_nil(t2)) {
          return true;
        }
        if (!is_pair(t2)) {
          return false;
        }
        if (t2.have_cycles("cdr")) {
          return false;
        }
        t2 = t2.cdr;
      }
    }, '(list? obj)\n\n        Predicate that tests if value is a proper linked list structure.\n        The car of each pair can be any value. It returns false on cyclic lists."'), fold: doc("fold", fold("fold", function(e75, t2, r) {
      for (var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), a = 3; a < n; a++) {
        i[a - 3] = arguments[a];
      }
      typecheck("fold", t2, "function");
      i.forEach(function(e76, t3) {
        typecheck("fold", e76, ["pair", "nil"], t3 + 1);
      });
      if (i.some(is_nil)) {
        return r;
      }
      var o = e75.call.apply(e75, [this, t2, r].concat(_toConsumableArray(i.map(function(e76) {
        return e76.cdr;
      }))));
      return unpromise(o, function(e76) {
        return t2.apply(void 0, _toConsumableArray(i.map(function(e77) {
          return e77.car;
        })).concat([e76]));
      });
    }), "(fold fn init . lists)\n\n         Function fold is left-to-right reversal of reduce. It call `fn`\n         on each pair of elements of the list and returns a single value.\n         e.g. it computes (fn 'a 'x (fn 'b 'y (fn 'c 'z 'foo)))\n         for: (fold fn 'foo '(a b c) '(x y z))"), pluck: doc("pluck", function e64() {
      for (var t2 = arguments.length, a = new Array(t2), r = 0; r < t2; r++) {
        a[r] = arguments[r];
      }
      return function(t3) {
        a = a.map(function(e76) {
          return e76 instanceof LSymbol ? e76.__name__ : e76;
        });
        if (a.length === 0) {
          return _nil;
        } else if (a.length === 1) {
          var e75 = a, r2 = _slicedToArray(e75, 1), n = r2[0];
          return t3[n];
        }
        var i = {};
        a.forEach(function(e76) {
          i[e76] = t3[e76];
        });
        return i;
      };
    }, "(pluck . strings)\n\n        If called with a single string it will return a function that when\n        called with an object will return that key from the object.\n        If called with more then one string the returned function will\n        create a new object by copying all properties from the given object."), reduce: doc("reduce", fold("reduce", function(t2, r, e75) {
      var n = this;
      for (var i = arguments.length, a = new Array(i > 3 ? i - 3 : 0), o = 3; o < i; o++) {
        a[o - 3] = arguments[o];
      }
      typecheck("reduce", r, "function");
      a.forEach(function(e76, t3) {
        typecheck("reduce", e76, ["pair", "nil"], t3 + 1);
      });
      if (a.some(is_nil)) {
        return e75;
      }
      return unpromise(r.apply(void 0, _toConsumableArray(a.map(function(e76) {
        return e76.car;
      })).concat([e75])), function(e76) {
        return t2.call.apply(t2, [n, r, e76].concat(_toConsumableArray(a.map(function(e77) {
          return e77.cdr;
        }))));
      });
    }), "(reduce fn init list . lists)\n\n         Higher-order function that takes each element of the list and calls\n         the fn with result of previous call or init and the next element\n         of the list until each element is processed, and returns a single value\n         as result of last call to `fn` function.\n         e.g. it computes (fn 'c 'z (fn 'b 'y (fn 'a 'x 'foo)))\n         for: (reduce fn 'foo '(a b c) '(x y z))"), filter: doc("filter", function e65(t2, r) {
      typecheck("filter", t2, ["regex", "function"]);
      typecheck("filter", r, ["pair", "nil"]);
      var i = global_env.get("list->array")(r);
      var a = [];
      var o = matcher("filter", t2);
      return function t3(r2) {
        function e75(e76) {
          if (e76 && !is_nil(e76)) {
            a.push(n);
          }
          return t3(++r2);
        }
        if (r2 === i.length) {
          return Pair.fromArray(a);
        }
        var n = i[r2];
        return unpromise(o(n), e75);
      }(0);
    }, "(filter fn list)\n        (filter regex list)\n\n        Higher-order function that calls `fn` for each element of the list\n        and return a new list for only those elements for which fn returns\n        a truthy value. If called with a regex it will create a matcher function."), compose: doc(compose, "(compose . fns)\n\n         Higher-order function that creates a new function that applies all functions\n         from right to left and returns the last value. Reverse of pipe.\n         e.g.:\n         ((compose (curry + 2) (curry * 3)) 10) ==> (+ 2 (* 3 10)) ==> 32"), pipe: doc(pipe, "(pipe . fns)\n\n         Higher-order function that creates a new function that applies all functions\n         from left to right and returns the last value. Reverse of compose.\n         e.g.:\n         ((pipe (curry + 2) (curry * 3)) 10) ==> (* 3 (+ 2 10)) ==> 36"), curry: doc(curry, "(curry fn . args)\n\n         Higher-order function that creates a curried version of the function.\n         The result function will have partially applied arguments and it\n         will keep returning one-argument functions until all arguments are provided,\n         then it calls the original function with the accumulated arguments.\n\n         e.g.:\n         (define (add a b c d) (+ a b c d))\n         (define add1 (curry add 1))\n         (define add12 (add 2))\n         (display (add12 3 4))"), gcd: doc("gcd", function e66() {
      for (var t2 = arguments.length, r = new Array(t2), n = 0; n < t2; n++) {
        r[n] = arguments[n];
      }
      typecheck_args("lcm", r, "number");
      return r.reduce(function(e75, t3) {
        return e75.gcd(t3);
      });
    }, "(gcd n1 n2 ...)\n\n        Function that returns the greatest common divisor of the arguments."), lcm: doc("lcm", function e67() {
      for (var t2 = arguments.length, r = new Array(t2), n = 0; n < t2; n++) {
        r[n] = arguments[n];
      }
      typecheck_args("lcm", r, "number");
      var i = r.length, a = abs(r[0]);
      for (var o = 1; o < i; o++) {
        var u = abs(r[o]), s = a;
        while (a && u) {
          a > u ? a %= u : u %= a;
        }
        a = abs(s * r[o]) / (a + u);
      }
      return LNumber(a);
    }, "(lcm n1 n2 ...)\n\n        Function that returns the least common multiple of the arguments."), "odd?": doc("odd?", single_math_op(function(e75) {
      return LNumber(e75).isOdd();
    }), "(odd? number)\n\n         Checks if number is odd."), "even?": doc("even?", single_math_op(function(e75) {
      return LNumber(e75).isEven();
    }), "(even? number)\n\n         Checks if number is even."), "*": doc("*", reduce_math_op(function(e75, t2) {
      return LNumber(e75).mul(t2);
    }, LNumber(1)), "(* . numbers)\n\n        Multiplies all numbers passed as arguments. If single value is passed\n        it will return that value."), "+": doc("+", reduce_math_op(function(e75, t2) {
      return LNumber(e75).add(t2);
    }, LNumber(0)), "(+ . numbers)\n\n        Sums all numbers passed as arguments. If single value is passed it will\n        return that value."), "-": doc("-", function() {
      for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
        t2[r] = arguments[r];
      }
      if (t2.length === 0) {
        throw new Error("-: procedure require at least one argument");
      }
      typecheck_args("-", t2, "number");
      if (t2.length === 1) {
        return LNumber(t2[0]).sub();
      }
      if (t2.length) {
        return t2.reduce(binary_math_op(function(e76, t3) {
          return LNumber(e76).sub(t3);
        }));
      }
    }, "(- n1 n2 ...)\n        (- n)\n\n        Subtracts n2 and subsequent numbers from n1. If only one argument is passed\n        it will negate the value."), "/": doc("/", function() {
      for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
        t2[r] = arguments[r];
      }
      if (t2.length === 0) {
        throw new Error("/: procedure require at least one argument");
      }
      typecheck_args("/", t2, "number");
      if (t2.length === 1) {
        return LNumber(1).div(t2[0]);
      }
      return t2.reduce(binary_math_op(function(e76, t3) {
        return LNumber(e76).div(t3);
      }));
    }, "(/ n1 n2 ...)\n        (/ n)\n\n        Divides n1 by n2 and subsequent arguments one by one. If single argument\n        is passed it will calculate (/ 1 n)."), abs: doc("abs", single_math_op(function(e75) {
      return LNumber(e75).abs();
    }), "(abs number)\n\n         Function that returns the absolute value (magnitude) of number."), truncate: doc("truncate", function(e75) {
      typecheck("truncate", e75, "number");
      if (LNumber.isFloat(e75)) {
        if (e75 instanceof LNumber) {
          e75 = e75.valueOf();
        }
        return LFloat(truncate(e75));
      }
      return e75;
    }, "(truncate n)\n\n        Function that returns the integer part (floor) of a real number."), sqrt: doc("sqrt", single_math_op(function(e75) {
      return LNumber(e75).sqrt();
    }), "(sqrt number)\n\n         Function that returns the square root of the number."), "**": doc("**", binary_math_op(function(e75, t2) {
      e75 = LNumber(e75);
      t2 = LNumber(t2);
      if (LNumber.isInteger(t2)) {
        var r = t2.cmp(0) === -1;
        if (r) {
          t2 = t2.sub();
        }
        if (LNumber.isRational(e75)) {
          if (r) {
            var n = e75.__denom__.pow(t2);
            if (e75.__num__.cmp(1) === 0) {
              return n;
            }
            var i = e75.__num__.pow(t2);
            return LRational({ num: n, denom: i });
          }
          return LRational({ num: e75.__num__.pow(t2), denom: e75.__denom__.pow(t2) });
        }
        if (r) {
          return LRational({ num: 1, denom: e75.pow(t2) });
        }
      }
      if (LNumber.isRational(t2) && e75.cmp(0) === -1) {
        var a = t2.__denom__;
        var o = t2.__num__;
        if (a.cmp(2) === 0) {
          var u = e75.abs().pow(LRational({ num: 1, denom: 2 }));
          var s = e75.coerce(u);
          var c = _slicedToArray(s, 2);
          u = c[1];
          if (t2.cmp(0) === 1) {
            return LComplex({ re: LNumber(0), im: u });
          }
          if (o.cmp(0) === -1) {
            return LComplex({ re: LNumber(0), im: LRational({ num: -1, denom: u }) });
          }
        }
        var l = t2.valueOf();
        var f = l * Math.PI;
        var _ = e75.abs().pow(l);
        var p = _.mul(Math.cos(f));
        var d = _.mul(Math.sin(f));
        return LComplex({ re: p, im: d });
      }
      var h = e75.coerce(t2);
      var m = _slicedToArray(h, 2);
      e75 = m[0];
      t2 = m[1];
      return e75.pow(t2);
    }), "(** a b)\n\n         Function that calculates number a to to the power of b."), "1+": doc("1+", single_math_op(function(e75) {
      return LNumber(e75).add(1);
    }), "(1+ number)\n\n         Function that adds 1 to the number and return result."), "1-": doc(single_math_op(function(e75) {
      return LNumber(e75).sub(1);
    }), "(1- number)\n\n         Function that subtracts 1 from the number and return result."), "%": doc("%", function(e75, t2) {
      typecheck_args("%", [e75, t2], "number");
      return LNumber(e75).rem(t2);
    }, "(% n1 n2)\n\n        Function returns the remainder of n1/n2 (modulo)."), "==": doc("==", function() {
      for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
        t2[r] = arguments[r];
      }
      typecheck_args("==", t2, "number");
      return seq_compare(function(e76, t3) {
        return LNumber(e76).cmp(t3) === 0;
      }, t2);
    }, "(== x1 x2 ...)}\n\n        Function that compares its numerical arguments and checks if they are\n        all equal."), ">": doc(">", function() {
      for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
        t2[r] = arguments[r];
      }
      typecheck_numbers(">", t2, ["bigint", "float", "rational"]);
      return seq_compare(function(e76, t3) {
        return LNumber(e76).cmp(t3) === 1;
      }, t2);
    }, "(> x1 x2 x3 ...)\n\n        Function that compares its numerical arguments and checks if they are\n        monotonically decreasing, i.e. x1 > x2 and x2 > x3 and so on."), "<": doc("<", function() {
      for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
        t2[r] = arguments[r];
      }
      typecheck_numbers("<", t2, ["bigint", "float", "rational"]);
      return seq_compare(function(e76, t3) {
        return LNumber(e76).cmp(t3) === -1;
      }, t2);
    }, "(< x1 x2 ...)\n\n        Function that compares its numerical arguments and checks if they are\n        monotonically increasing, i.e. x1 < x2 and x2 < x3 and so on."), "<=": doc("<=", function() {
      for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
        t2[r] = arguments[r];
      }
      typecheck_numbers("<=", t2, ["bigint", "float", "rational"]);
      return seq_compare(function(e76, t3) {
        return [0, -1].includes(LNumber(e76).cmp(t3));
      }, t2);
    }, "(<= x1 x2 ...)\n\n        Function that compares its numerical arguments and checks if they are\n        monotonically nondecreasing, i.e. x1 <= x2 and x2 <= x3 and so on."), ">=": doc(">=", function() {
      for (var e75 = arguments.length, t2 = new Array(e75), r = 0; r < e75; r++) {
        t2[r] = arguments[r];
      }
      typecheck_numbers(">=", t2, ["bigint", "float", "rational"]);
      return seq_compare(function(e76, t3) {
        return [0, 1].includes(LNumber(e76).cmp(t3));
      }, t2);
    }, "(>= x1 x2 ...)\n\n        Function that compares its numerical arguments and checks if they are\n        monotonically nonincreasing, i.e. x1 >= x2 and x2 >= x3 and so on."), "eq?": doc("eq?", equal, "(eq? a b)\n\n         Function that compares two values if they are identical."), or: doc(new Macro("or", function(e75, t2) {
      var i = t2.use_dynamic, a = t2.error;
      var o = global_env.get("list->array")(e75);
      var u = this;
      var s = u;
      if (!o.length) {
        return false;
      }
      var c;
      return function t3() {
        function e76(e77) {
          c = e77;
          if (!is_false(c)) {
            return c;
          } else {
            return t3();
          }
        }
        if (!o.length) {
          if (!is_false(c)) {
            return c;
          } else {
            return false;
          }
        } else {
          var r = o.shift();
          var n = _evaluate(r, { env: u, dynamic_env: s, use_dynamic: i, error: a });
          return unpromise(n, e76);
        }
      }();
    }), "(or . expressions)\n\n         Macro that executes the values one by one and returns the first that is\n         a truthy value. If there are no expressions that evaluate to true it\n         returns false."), and: doc(new Macro("and", function(e75) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t2.use_dynamic, n = t2.error;
      var i = global_env.get("list->array")(e75);
      var a = this;
      var o = a;
      if (!i.length) {
        return true;
      }
      var u;
      var s = { env: a, dynamic_env: o, use_dynamic: r, error: n };
      return function t3() {
        function e76(e77) {
          u = e77;
          if (is_false(u)) {
            return u;
          } else {
            return t3();
          }
        }
        if (!i.length) {
          if (!is_false(u)) {
            return u;
          } else {
            return false;
          }
        } else {
          var r2 = i.shift();
          return unpromise(_evaluate(r2, s), e76);
        }
      }();
    }), "(and . expressions)\n\n         Macro that evaluates each expression in sequence and if any value returns false\n         it will stop and return false. If each value returns true it will return the\n         last value. If it's called without arguments it will return true."), "|": doc("|", function(e75, t2) {
      return LNumber(e75).or(t2);
    }, "(| a b)\n\n        Function that calculates the bitwise or operation."), "&": doc("&", function(e75, t2) {
      return LNumber(e75).and(t2);
    }, "(& a b)\n\n        Function that calculates the bitwise and operation."), "~": doc("~", function(e75) {
      return LNumber(e75).neg();
    }, "(~ number)\n\n        Function that calculates the bitwise inverse (flip all the bits)."), ">>": doc(">>", function(e75, t2) {
      return LNumber(e75).shr(t2);
    }, "(>> a b)\n\n        Function that right shifts the value a by value b bits."), "<<": doc("<<", function(e75, t2) {
      return LNumber(e75).shl(t2);
    }, "(<< a b)\n\n        Function that left shifts the value a by value b bits."), not: doc("not", function e68(t2) {
      return !t2;
    }, "(not object)\n\n        Function that returns the Boolean negation of its argument.") }, void 0, "global");
    user_env = global_env.inherit("user-env");
    set_interaction_env(user_env, internal_env);
    global_env.doc("**interaction-environment**", "**interaction-environment**\n\n    Internal dynamic, global variable used to find interpreter environment.\n    It's used so the read and write functions can locate **internal-env**\n    that contains the references to stdin, stdout and stderr.");
    (function() {
      var e75 = { ceil: "ceiling" };
      ["floor", "round", "ceil"].forEach(function(t2) {
        var r = e75[t2] ? e75[t2] : t2;
        global_env.set(r, doc(r, function(e76) {
          typecheck(r, e76, "number");
          if (e76 instanceof LNumber) {
            return e76[t2]();
          }
        }, "(".concat(r, " number)\n\n            Function that calculates the ").concat(r, " of a number.")));
      });
    })();
    combinations(["d", "a"], 2, 5).forEach(function(e75) {
      var t2 = e75.split("");
      var r = t2.slice().reverse();
      var n = t2.map(function(e76) {
        return "(c".concat(e76, "r");
      }).join(" ") + " arg" + ")".repeat(t2.length);
      var i = "c" + e75 + "r";
      global_env.set(i, doc(i, function(e76) {
        return r.reduce(function(e77, t3) {
          typecheck(i, e77, "pair");
          if (t3 === "a") {
            return e77.car;
          } else {
            return e77.cdr;
          }
        }, e76);
      }, "(".concat(i, " arg)\n\n        Function that calculates ").concat(n)));
    });
    noop = function e69() {
    };
    if (is_node()) {
      node_ready = node_specific();
    } else {
      node_ready = Promise.resolve();
      if (typeof window !== "undefined" && window === root) {
        global_env.set("window", window);
        global_env.set("global", void 0);
        global_env.set("self", window);
      } else if (typeof self !== "undefined" && typeof WorkerGlobalScope !== "undefined") {
        global_env.set("self", self);
        global_env.set("window", void 0);
        global_env.set("global", void 0);
      }
    }
    type = memoize(type);
    _p_name__ = /* @__PURE__ */ new WeakMap();
    Parameter = function() {
      function n(e75) {
        var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        _classCallCheck(this, n);
        _defineProperty(this, "__value__", void 0);
        _defineProperty(this, "__fn__", void 0);
        _classPrivateFieldInitSpec(this, _p_name__, void 0);
        this.__value__ = e75;
        if (t2) {
          if (!is_function(t2)) {
            throw new Error("Section argument to Parameter need to be function " + "".concat(type(t2), " given"));
          }
          this.__fn__ = t2;
        }
        if (r) {
          _classPrivateFieldSet(_p_name__, this, r);
        }
      }
      return _createClass(n, [{ key: "__name__", get: function e75() {
        return _classPrivateFieldGet(_p_name__, this);
      }, set: function e75(t2) {
        _classPrivateFieldSet(_p_name__, this, t2);
        if (this.__fn__) {
          this.__fn__.__name__ = "fn-".concat(t2);
        }
      } }, { key: "invoke", value: function e75() {
        if (is_function(this.__fn__)) {
          return this.__fn__(this.__value__);
        }
        return this.__value__;
      } }, { key: "inherit", value: function e75(t2) {
        return new n(t2, this.__fn__, this.__name__);
      } }]);
    }();
    LambdaContext = function() {
      function t2(e75) {
        _classCallCheck(this, t2);
        _defineProperty(this, "env", void 0);
        _defineProperty(this, "dynamic_env", void 0);
        _defineProperty(this, "use_dynamic", void 0);
        Object.assign(this, e75);
      }
      return _createClass(t2, [{ key: "__name__", get: function e75() {
        return this.env.__name__;
      } }, { key: "__parent__", get: function e75() {
        return this.env.__parent__;
      } }, { key: "get", value: function e75() {
        var t3;
        return (t3 = this.env).get.apply(t3, arguments);
      } }]);
    }();
    Continuation = function() {
      function t2(e75) {
        _classCallCheck(this, t2);
        _defineProperty(this, "__value__", void 0);
        this.__value__ = e75;
      }
      return _createClass(t2, [{ key: "invoke", value: function e75() {
        if (this.__value__ === null) {
          throw new Error("Continuations are not implemented yet");
        }
      } }]);
    }();
    compile = exec_collect(function(e75) {
      return e75;
    });
    exec = exec_collect(function(e75, t2) {
      return t2;
    });
    current_script = get_current_script();
    serialization_map = { pair: function e70(t2) {
      var r = _slicedToArray(t2, 2), n = r[0], i = r[1];
      return Pair(n, i);
    }, number: function e71(t2) {
      if (LString.isString(t2)) {
        return LNumber([t2, 10]);
      }
      return LNumber(t2);
    }, regex: function e72(t2) {
      var r = _slicedToArray(t2, 2), n = r[0], i = r[1];
      return new RegExp(n, i);
    }, nil: function e73() {
      return _nil;
    }, symbol: function e74(t2) {
      if (LString.isString(t2)) {
        return LSymbol(t2);
      } else if (Array.isArray(t2)) {
        return LSymbol(Symbol["for"](t2[0]));
      }
    }, string: LString, character: LCharacter };
    available_class = Object.keys(serialization_map);
    class_map = {};
    for (_i6 = 0, _Object$entries3 = Object.entries(available_class); _i6 < _Object$entries3.length; _i6++) {
      _Object$entries3$_i = _slicedToArray(_Object$entries3[_i6], 2), i = _Object$entries3$_i[0], cls = _Object$entries3$_i[1];
      class_map[cls] = +i;
    }
    cbor = function() {
      var e75 = { pair: Pair, symbol: LSymbol, number: LNumber, string: LString, character: LCharacter, nil: _nil.constructor, regex: RegExp };
      function t2(e76, t3) {
        return { deserialize: t3, Class: e76 };
      }
      var r = new Encoder();
      var a = {};
      for (var n = 0, i = Object.entries(serialization_map); n < i.length; n++) {
        var o = _slicedToArray(i[n], 2), u = o[0], s = o[1];
        var c = e75[u];
        a[u] = t2(c, s);
      }
      var l = 43311;
      Object.keys(a).forEach(function(e76) {
        var t3 = a[e76];
        if (typeof t3 === "function") {
          var r2 = t3;
          addExtension({ Class: r2, tag: l, encode: function e77(t4, r3) {
            r3(t4.serialize());
          }, decode: function e77(t4) {
            return new r2(t4);
          } });
        } else {
          var n2 = t3.deserialize, i2 = t3.Class;
          addExtension({ Class: i2, tag: l, encode: function e77(t4, r3) {
            if (t4 instanceof RegExp) {
              return r3([t4.source, t4.flags]);
            }
            r3(t4.serialize());
          }, decode: function e77(t4) {
            return n2(t4);
          } });
        }
        l++;
      });
      return r;
    }();
    MAGIC_LENGTH = 7;
    currentScript = typeof window !== "undefined" && window.document && document.currentScript;
    if (typeof window !== "undefined") {
      contentLoaded(window, init);
    }
    banner = function() {
      var e75 = LString("Sat, 10 May 2025 19:46:53 +0000").valueOf();
      var t2 = e75 === "{{DATE}}" ? /* @__PURE__ */ new Date() : new Date(e75);
      var r = function e76(t3) {
        return t3.toString().padStart(2, "0");
      };
      var n = t2.getFullYear();
      var i = [n, r(t2.getMonth() + 1), r(t2.getDate())].join("-");
      var a = "\n  __ __                          __\n / / \\ \\       _    _  ___  ___  \\ \\\n| |   \\ \\     | |  | || . \\/ __>  | |\n| |    > \\    | |_ | ||  _/\\__ \\  | |\n| |   / ^ \\   |___||_||_|  <___/  | |\n \\_\\ /_/ \\_\\                     /_/\n\nLIPS Interpreter DEV (".concat(i, ") <https://lips.js.org>\nCopyright (c) 2018-").concat(n, " Jakub T. Jankiewicz\n\nType (env) to see environment with functions macros and variables. You can also\nuse (help name) to display help for specific function or macro, (apropos name)\nto display list of matched names in environment and (dir object) to list\nproperties of an object.\n").replace(/^.*\n/, "");
      return a;
    }();
    read_only(Ahead, "__class__", "ahead");
    read_only(Pair, "__class__", "pair");
    read_only(Nil, "__class__", "nil");
    read_only(Pattern, "__class__", "pattern");
    read_only(Formatter, "__class__", "formatter");
    read_only(Macro, "__class__", "macro");
    read_only(Syntax, "__class__", "syntax");
    read_only(Syntax.Parameter, "__class__", "syntax-parameter");
    read_only(Environment, "__class__", "environment");
    read_only(InputPort, "__class__", "input-port");
    read_only(OutputPort, "__class__", "output-port");
    read_only(BufferedOutputPort, "__class__", "output-port");
    read_only(OutputStringPort, "__class__", "output-string-port");
    read_only(InputStringPort, "__class__", "input-string-port");
    read_only(InputFilePort, "__class__", "input-file-port");
    read_only(OutputFilePort, "__class__", "output-file-port");
    read_only(LipsError, "__class__", "lips-error");
    [LNumber, LComplex, LRational, LFloat, LBigInteger].forEach(function(e75) {
      read_only(e75, "__class__", "number");
    });
    read_only(LCharacter, "__class__", "character");
    read_only(LSymbol, "__class__", "symbol");
    read_only(LString, "__class__", "string");
    read_only(QuotedPromise, "__class__", "promise");
    read_only(Parameter, "__class__", "parameter");
    version = "DEV";
    date = "Sat, 10 May 2025 19:46:53 +0000";
    parse = compose(uniterate_async, _parse);
    lips = { version, banner, date, exec, parse, tokenize, evaluate: _evaluate, compile, serialize, unserialize, box, unbox, serialize_bin, unserialize_bin, bootstrap, Environment, env: user_env, Worker, Interpreter, balanced_parenthesis: balanced, balancedParenthesis: balanced, balanced, Macro, Syntax, Pair, Values, QuotedPromise, Error: LipsError, quote, InputPort, OutputPort, BufferedOutputPort, InputFilePort, OutputFilePort, InputStringPort, OutputStringPort, InputByteVectorPort, OutputByteVectorPort, InputBinaryFilePort, OutputBinaryFilePort, set_fs, Formatter, Parser, Lexer, specials, repr, nil: _nil, eof, LSymbol, LNumber, LFloat, LComplex, LRational, LBigInteger, LCharacter, LString, Parameter, rationalize };
    global_env.set("lips", lips);
  }
});

// src/common/otherTypes.ts
var Color, Point;
var init_otherTypes = __esm({
  "src/common/otherTypes.ts"() {
    "use strict";
    Color = class {
      r;
      g;
      b;
      constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
      }
      toString() {
        return `Color(${this.r}, ${this.g}, ${this.b})`;
      }
    };
    Point = class _Point {
      x;
      y;
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      toString() {
        return `Point(${this.x}, ${this.y})`;
      }
      static NOWHERE = new _Point(NaN, NaN);
    };
  }
});

// src/lipsShim.ts
var setRepr, bla;
var init_lipsShim = __esm({
  async "src/lipsShim.ts"() {
    "use strict";
    init_lips_esm_min();
    init_otherTypes();
    init_lips_esm_min();
    await bootstrap("https://cdn.jsdelivr.net/npm/@jcubic/lips/dist/std.xcb");
    specials.__list__ = {};
    LSymbol.list = new Proxy(LSymbol.list, {
      get: () => void 0
    });
    setRepr = user_env.get("set-repr!");
    setRepr(Point, (point) => {
      return `Point(${point.x}, ${point.y})`;
    });
    bla = (x) => x.toString(16).padStart(2, "0");
    setRepr(Color, (color) => {
      return `#${bla(color.r)}${bla(color.g)}${bla(color.b)}`;
    });
  }
});

// src/common/utils.ts
function zip(...arrays) {
  const length = Math.min(...arrays.map((arr) => arr.length));
  const result = [];
  for (let i = 0; i < length; i++) {
    const tuple = arrays.map((arr) => arr[i]);
    result.push(tuple);
  }
  return result;
}
var consToArray, arrayToConsList, repr2;
var init_utils = __esm({
  async "src/common/utils.ts"() {
    "use strict";
    await init_lipsShim();
    consToArray = user_env.get("list->array");
    arrayToConsList = user_env.get("vector->list");
    repr2 = (x) => user_env.get("format")("~s", x);
  }
});

// src/common/nodeDef.ts
var Port;
var init_nodeDef = __esm({
  "src/common/nodeDef.ts"() {
    "use strict";
    Port = class {
      type;
      initialVal;
      flags;
      constructor(type2, initialVal, flags = []) {
        this.type = type2;
        this.initialVal = initialVal;
        this.flags = flags;
      }
      is(pf) {
        return this.flags.includes(pf);
      }
    };
  }
});

// src/nodes/basic.ts
var basic_exports = {};
var init_basic = __esm({
  "src/nodes/basic.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      category: "Basic",
      id: "log",
      inputs: { values: new Port("any", [], ["bus"]) },
      outputs: {},
      doc: "Logs the values whenever one of them updates.",
      update({ app, node }) {
        app.log(node.get("values").join(" "));
      }
    });
  }
});

// src/nodes/flow_control.ts
var flow_control_exports = {};
var init_flow_control = __esm({
  "src/nodes/flow_control.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      category: "Flow Control",
      id: "value",
      template: { T: ["any"] },
      doc: `Emits the same value every time when it is updated
    by the \`:trigger\` input.`,
      inputs: {
        trigger: new Port("signal", void 0),
        value: new Port("T", void 0, ["silent"])
      },
      outputs: {
        value: new Port("T", void 0)
      },
      update({ node }) {
        node.output("value", node.get("value"));
      }
    });
    defNode({
      category: "Flow Control",
      id: "edges",
      doc: `Emits a signal on \`:rising\` when \`:value\` changes from
    false to true, and a signal on \`:falling\` when \`:value\` changes
    from true to false.`,
      inputs: {
        value: new Port("boolean", false)
      },
      outputs: {
        rising: new Port("signal", void 0),
        falling: new Port("signal", void 0)
      },
      stateKeys: ["oldState"],
      setup({ node }) {
        node.state.oldState = false;
      },
      update({ node, changes }) {
        const oldState = node.state.oldState;
        const newState = changes.value;
        node.state.oldState = newState;
        if (oldState !== newState) {
          node.output(newState ? "rising" : "falling");
        }
      }
    });
  }
});

// src/common/types.ts
function typeOf(obj) {
  if (obj === void 0 || obj === null) return "signal";
  if (typeof obj !== "object") return typeof obj;
  for (const [type2, constructor] of Object.entries(CONSTRUCTORS)) {
    if (obj instanceof constructor) {
      return type2;
    }
  }
  return "unknown";
}
var CONSTRUCTORS;
var init_types = __esm({
  async "src/common/types.ts"() {
    "use strict";
    await init_lipsShim();
    init_otherTypes();
    CONSTRUCTORS = {
      bigint: LBigInteger,
      number: LNumber,
      string: LString,
      symbol: LSymbol,
      boolean: Boolean,
      color: Color,
      point: Point,
      audio: AudioNode,
      "html-element": HTMLElement
    };
  }
});

// src/nodes/html.ts
var html_exports = {};
function hexToRgb(hex) {
  const num = parseInt(hex.slice(1), 16);
  const r = num >> 16 & 255;
  const g = num >> 8 & 255;
  const b = num & 255;
  return [r, g, b];
}
function rgbToHex(color) {
  const r = color.r.toString(16).padStart(2, "0");
  const g = color.g.toString(16).padStart(2, "0");
  const b = color.b.toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}
function processUI(containers, args) {
  if (args instanceof LString) {
    return make("span", {}, args.toString());
  }
  if (args instanceof LNumber) {
    const val = args.valueOf();
    return containers[val] = make("span.lynx-container");
  }
  if (args instanceof Pair) {
    const layout_type = args.car.toString();
    const children = consToArray(args.cdr);
    var root2;
    switch (layout_type) {
      case "flex":
        root2 = make("div");
        root2.style.display = "flex";
        root2.style.flexDirection = children[0].toString();
        root2.style.flexWrap = "wrap";
        root2.append(...children.slice(1).map((child) => processUI(containers, child)));
        break;
      case "table":
        root2 = make("table");
        root2.style.borderCollapse = "collapse";
        root2.style.tableLayout = "auto";
        root2.append(...children.map((child) => {
          const row = make("tr");
          consToArray(child).forEach((cell) => {
            const cellEl = make("td");
            cellEl.append(processUI(containers, cell));
            row.append(cellEl);
          });
          return row;
        }));
        break;
      default:
        throw new Error(`Unknown layout type ${layout_type}`);
    }
    return root2;
  }
  throw new Error(`${typeOf(args)} not valid here`);
}
var init_html = __esm({
  async "src/nodes/html.ts"() {
    "use strict";
    init_vanilla();
    init_nodeDef();
    init_otherTypes();
    await init_types();
    await init_utils();
    await init_lipsShim();
    init_all();
    defNode({
      category: "User Interface",
      id: "button",
      inputs: {
        text: new Port("string", "Button")
      },
      outputs: {
        pressed: new Port("boolean", false),
        hovering: new Port("boolean", false),
        clicked: new Port("signal", void 0),
        el: new Port("html-element", void 0)
      },
      doc: `Creates a HTML [\`<button>\`](https://developer.mozilla.org/docs/Web/HTML/Element/button)
    element with the given text and outputs \`:pressed\` and \`:hovering\` states when the user
    interacts with it.`,
      stateKeys: ["el"],
      setup({ app, node }) {
        const button = make("button.lynx-ui", {}, node.get("text"));
        app.addUI(button);
        node.state.el = button;
        button.addEventListener("pointerdown", () => {
          node.output("pressed", true);
        });
        button.addEventListener("pointerup", () => {
          node.output("pressed", false);
        });
        button.addEventListener("pointerenter", () => {
          node.output("hovering", true);
        });
        button.addEventListener("pointerleave", () => {
          node.output("hovering", false);
        });
        button.addEventListener("click", () => {
          node.output("clicked");
        });
        node.output("hovering", false);
        node.output("pressed", false);
        node.output("el", button);
      },
      update({ node }) {
        node.state.el.textContent = node.get("text");
      }
    });
    defNode({
      category: "User Interface",
      id: "select",
      inputs: {
        options: new Port("string", [], ["bus"]),
        label: new Port("string", "Select"),
        value: new Port("string", "")
      },
      outputs: {
        selected: new Port("string", ""),
        index: new Port("number", 0),
        el: new Port("html-element", void 0)
      },
      doc: `Creates a HTML [\`<select>\`](https://developer.mozilla.org/docs/Web/HTML/Element/select)
    dropdown. Takes an array of options and outputs the selected value and index.`,
      stateKeys: ["el", "labelText"],
      setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const select = make("select");
        labelEl.append(labelText, select);
        app.addUI(labelEl);
        node.state.el = select;
        node.state.labelText = labelText;
        (node.get("options") || []).forEach((opt) => {
          const option = make("option", {}, opt);
          select.append(option);
        });
        if (node.get("value")) {
          select.value = node.get("value");
        }
        select.addEventListener("change", () => {
          node.output("selected", select.value);
          node.output("index", select.selectedIndex);
        });
        node.output("selected", select.value);
        node.output("index", select.selectedIndex);
        node.output("el", labelEl);
      },
      update({ node, changes }) {
        const select = node.state.el;
        const labelText = node.state.labelText;
        labelText.textContent = node.get("label");
        const oldValue = select.value;
        select.innerHTML = "";
        (node.get("options") || []).forEach((opt) => {
          const option = make("option", {}, opt);
          select.append(option);
        });
        if ("value" in changes) {
          select.value = node.get("value");
        } else {
          select.value = oldValue;
        }
      }
    });
    defNode({
      category: "User Interface",
      id: "number-input",
      inputs: {
        value: new Port("number", 0),
        min: new Port("number", 0),
        max: new Port("number", 100),
        step: new Port("number", 1),
        label: new Port("string", "Number")
      },
      outputs: {
        value: new Port("number", 0),
        el: new Port("html-element", void 0)
      },
      doc: `Creates a HTML [\`<input type="number">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/number)
    element. Outputs the current value.`,
      stateKeys: ["el", "labelText"],
      setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const input = make("input", { type: "number" });
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        input.value = String(node.get("value"));
        input.addEventListener("change", () => {
          node.output("value", Number(input.value));
        });
        node.output("value", Number(input.value));
        node.output("el", labelEl);
      },
      update({ node, changes }) {
        const input = node.state.el;
        const labelText = node.state.labelText;
        labelText.textContent = node.get("label");
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        if ("value" in changes) {
          input.value = String(node.get("value"));
        }
      }
    });
    defNode({
      category: "User Interface",
      id: "range",
      inputs: {
        value: new Port("number", 0),
        min: new Port("number", 0),
        max: new Port("number", 100),
        step: new Port("number", 1),
        label: new Port("string", "Range")
      },
      outputs: {
        value: new Port("number", 0),
        el: new Port("html-element", void 0)
      },
      doc: `Creates a HTML [\`<input type="range">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/range)
    slider. Outputs the current value.`,
      stateKeys: ["el", "labelText"],
      setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        labelEl.append(labelText);
        const input = make("input", { type: "range" });
        labelEl.append(input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        input.value = String(node.get("value"));
        input.addEventListener("input", () => {
          node.output("value", Number(input.value));
        });
        node.output("value", Number(input.value));
        node.output("el", labelEl);
      },
      update({ node, changes }) {
        const input = node.state.el;
        const labelText = node.state.labelText;
        labelText.textContent = node.get("label");
        input.min = String(node.get("min"));
        input.max = String(node.get("max"));
        input.step = String(node.get("step"));
        if ("value" in changes) {
          input.value = String(node.get("value"));
        }
      }
    });
    defNode({
      category: "User Interface",
      id: "output",
      inputs: {
        value: new Port("any", ""),
        label: new Port("string", "Output")
      },
      outputs: {
        el: new Port("html-element", void 0)
      },
      doc: `Creates a HTML [\`<output>\`](https://developer.mozilla.org/docs/Web/HTML/Element/output)
    element to display a value.`,
      stateKeys: ["el", "labelText"],
      setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const output = make("output");
        labelEl.append(labelText, output);
        app.addUI(labelEl);
        node.state.el = output;
        node.state.labelText = labelText;
        output.textContent = node.get("value");
        node.output("el", labelEl);
      },
      update({ node }) {
        const output = node.state.el;
        const labelText = node.state.labelText;
        labelText.textContent = node.get("label");
        output.value = String(node.get("value"));
      }
    });
    defNode({
      category: "User Interface",
      id: "meter",
      inputs: {
        value: new Port("number", 0),
        min: new Port("number", 0),
        max: new Port("number", 100),
        low: new Port("number", 0),
        high: new Port("number", 100),
        optimum: new Port("number", 50),
        label: new Port("string", "Meter")
      },
      outputs: {
        el: new Port("html-element", void 0)
      },
      doc: `Creates a HTML [\`<meter>\`](https://developer.mozilla.org/docs/Web/HTML/Element/meter)
    element to display a numeric measurement.`,
      stateKeys: ["el", "labelText"],
      setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        labelEl.append(labelText);
        const meter = make("meter");
        labelEl.append(meter);
        app.addUI(labelEl);
        node.state.el = meter;
        node.state.labelText = labelText;
        meter.min = node.get("min");
        meter.max = node.get("max");
        meter.low = node.get("low");
        meter.high = node.get("high");
        meter.optimum = node.get("optimum");
        meter.value = node.get("value");
        node.output("el", labelEl);
      },
      update({ node, changes }) {
        const meter = node.state.el;
        const labelText = node.state.labelText;
        labelText.textContent = node.get("label");
        meter.min = node.get("min");
        meter.max = node.get("max");
        meter.low = node.get("low");
        meter.high = node.get("high");
        meter.optimum = node.get("optimum");
        if ("value" in changes) {
          meter.value = node.get("value");
        }
      }
    });
    defNode({
      category: "User Interface",
      id: "text-input",
      inputs: {
        label: new Port("string", "Text"),
        value: new Port("string", "")
      },
      outputs: {
        value: new Port("string", ""),
        el: new Port("html-element", void 0)
      },
      doc: `Creates a HTML [\`<input type="text">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/text)
    element with a label. Outputs the current value.`,
      stateKeys: ["el", "labelText"],
      setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const input = make("input", { type: "text" });
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.value = node.get("value");
        input.addEventListener("input", () => {
          node.output("value", input.value);
        });
        node.output("value", input.value);
        node.output("el", labelEl);
      },
      update({ node, changes }) {
        const input = node.state.el;
        const labelText = node.state.labelText;
        labelText.textContent = node.get("label");
        if ("value" in changes) {
          input.value = node.get("value");
        }
      }
    });
    defNode({
      category: "User Interface",
      id: "color-input",
      inputs: {
        label: new Port("string", "Color"),
        value: new Port("color", new Color(0, 0, 0))
      },
      outputs: {
        value: new Port("color", new Color(0, 0, 0)),
        el: new Port("html-element", void 0)
      },
      doc: `Creates a HTML [\`<input type="color">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/color)
    element with a label. Outputs the current color value.`,
      stateKeys: ["el", "labelText"],
      setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const input = make("input", { type: "color" });
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.value = rgbToHex(node.get("value"));
        input.addEventListener("input", () => {
          node.output("value", new Color(...hexToRgb(input.value)));
        });
        node.output("value", new Color(...hexToRgb(input.value)));
        node.output("el", labelEl);
      },
      update({ node, changes }) {
        const input = node.state.el;
        const labelText = node.state.labelText;
        labelText.textContent = node.get("label");
        if ("value" in changes) {
          input.value = rgbToHex(node.get("value"));
        }
      }
    });
    defNode({
      category: "User Interface",
      id: "checkbox",
      inputs: {
        label: new Port("string", "Checkbox"),
        checked: new Port("boolean", false)
      },
      outputs: {
        value: new Port("boolean", false),
        el: new Port("html-element", void 0)
      },
      doc: `Creates a HTML [\`<input type="checkbox">\`](https://developer.mozilla.org/docs/Web/HTML/Element/input/checkbox)
    element with a label. Outputs the checked state as a boolean.`,
      stateKeys: ["el", "labelText"],
      setup({ app, node }) {
        const labelEl = make("label.lynx-ui");
        const labelText = make("span", {}, node.get("label"));
        const input = make("input", { type: "checkbox" });
        labelEl.append(labelText, input);
        app.addUI(labelEl);
        node.state.el = input;
        node.state.labelText = labelText;
        input.checked = !!node.get("checked");
        input.addEventListener("change", () => {
          node.output("value", input.checked);
        });
        node.output("value", input.checked);
        node.output("el", labelEl);
      },
      update({ node, changes }) {
        const input = node.state.el;
        const labelText = node.state.labelText;
        labelText.textContent = node.get("label");
        if ("checked" in changes) {
          input.checked = !!node.get("checked");
        }
      }
    });
    defNode({
      category: "User Interface",
      id: "layout",
      paramDoc: "<layout>",
      inputs: {
        elements: new Port("html-element", [], ["bus", "silent"]),
        refresh: new Port("signal", void 0),
        hide: new Port("boolean", false)
      },
      outputs: {
        el: new Port("html-element", void 0)
      },
      doc: `Creates a layout container for multiple HTML elements.

    Layout description:

    * \`(flex <direction> <elements> ...)\` - flexbox layout with the given direction (row, column,
        row-reverse, etc).
    * \`(table (<cell> ...) ...)\` - table layout with a list of rows, each containing a list of cells.
    * \`<string>\` - creates a span with the given text.

        If you want to change the text, use a number and point it to an [\`<output>\`](#node-output)
        node.
    * \`<number>\` - will be filled with the corresponding element from the input list.

    Anything else is invalid.

    NOTE: There is no way to change the layout after it has been created, other than replacing
    individual elements.

    NOTE 2: A single node can only be put in one layout at a time. If you try to put it in
    multiple layouts, it will be removed from the previous one. This is a limitation of the
    underlying HTML DOM API. However you can move the node back and forth by updating the
    \`:refresh\` input.`,
      stateKeys: ["myEl", "containers"],
      setup({ app, args, node }) {
        node.state.containers = [];
        const mine = processUI(node.state.containers, args[0]);
        mine.classList.add("lynx-layout");
        app.addUI(mine);
        node.state.myEl = mine;
      },
      update({ node, changes }) {
        if (changes.refresh) {
          const newEls = node.get("elements");
          const containers = node.state.containers;
          for (var [a, b] of zip(containers, newEls)) {
            a.childNodes.forEach((child) => child.remove());
            a.append(b);
          }
        }
        if ("hide" in changes)
          node.state.myEl.style.display = changes.hide ? "none" : "block";
      }
    });
  }
});

// src/nodes/converters.ts
var converters_exports = {};
var init_converters = __esm({
  "src/nodes/converters.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      category: "Converters",
      id: "string->number",
      inputs: {
        string: new Port("string", "")
      },
      outputs: {
        number: new Port("number", 0)
      },
      doc: `Receives a string representing a number, parses it as a number, and
    outputs that. It uses <code>parseFloat</code> so if you give it a non-number
    string like <code>akjgsd78</code> you will just get 0.`,
      // cSpell: ignore akjgsd
      update({ node, changes }) {
        node.output("number", parseFloat(changes.string.toString()));
      }
    });
    defNode({
      category: "Converters",
      id: "to-string",
      inputs: {
        what: new Port("any", void 0)
      },
      outputs: {
        stringified: new Port("string", "")
      },
      doc: `Receives any object and converts it to a string using the Javascript
    <code>toString()</code> method.`,
      update({ node, changes }) {
        node.output("stringified", changes.what.toString());
      }
    });
    defNode({
      id: "string->boolean",
      category: "Converters",
      inputs: {
        string: new Port("string", "")
      },
      outputs: {
        boolean: new Port("boolean", false)
      },
      doc: `Returns false if the string is the empty string or the string "false", and true otherwise.`,
      update({ node, changes }) {
        const str = changes.string.toString();
        node.output("boolean", str !== "" && str.toLowerCase() !== "false");
      }
    });
  }
});

// src/nodes/features/gps.ts
var gps_exports = {};
var init_gps = __esm({
  "src/nodes/features/gps.ts"() {
    "use strict";
    init_nodeDef();
    init_otherTypes();
    init_all();
    defNode({
      id: "gps",
      category: "Device",
      inputs: {},
      outputs: {
        pos: new Port("point", Point.NOWHERE),
        altitude: new Port("number", 0),
        heading: new Port("number", 0),
        speed: new Port("number", 0)
      },
      doc: `Watches your device's GPS position and outputs position and movement data.

    The point that \`gps\` sends for :pos is of the form \`{x: longitude, y: latitude}\`.

    Altitude, heading, and speed may not be available or may be totally incorrect depending on your device.
    (Mine always returns 0 for altitude even though I am most certainly not at sea level.)`,
      setup({ app, node }) {
        navigator.geolocation.watchPosition((arg) => {
          const coords = arg.coords;
          console.log(coords);
          node.output("pos", new Point(coords.longitude, coords.latitude));
          if (coords.altitude !== null) node.output("altitude", coords.altitude);
          if (coords.heading !== null) node.output("heading", coords.heading);
          if (coords.speed !== null) node.output("speed", coords.speed);
        }, (err) => {
          console.error(err);
          switch (err.code) {
            case GeolocationPositionError.PERMISSION_DENIED:
              app.error(err.message ?? "Permission denied to access geolocation data");
              break;
            case GeolocationPositionError.POSITION_UNAVAILABLE:
              app.warn(err.message ?? "Error getting geolocation data");
              break;
            case GeolocationPositionError.TIMEOUT:
              app.warn(err.message ?? "Timed out trying to get geolocation data");
              break;
          }
        });
      }
    });
  }
});

// src/common/feature.ts
var Feature;
var init_feature = __esm({
  "src/common/feature.ts"() {
    "use strict";
    Feature = class {
      #didInit = false;
      doc;
      initializer;
      constructor(init2, methods) {
        Object.assign(this, methods);
        this.initializer = init2;
      }
      async init(flow) {
        if (this.#didInit) return;
        await this.initializer(flow);
        this.#didInit = true;
      }
    };
  }
});

// src/nodes/features/unsafe.ts
var unsafe_exports = {};
var init_unsafe = __esm({
  async "src/nodes/features/unsafe.ts"() {
    "use strict";
    init_vanilla();
    init_feature();
    init_nodeDef();
    await init_utils();
    await init_lipsShim();
    init_all();
    defFeature("unsafe-code", new Feature(async (app) => {
      const btn = make("button", {}, "Yes, run");
      const area = make(
        "div",
        {},
        "This flow runs arbitrary code. ",
        "Please confirm you want to run it: ",
        btn
      );
      app.addConnect(area);
      await new Promise((r) => {
        btn.addEventListener("click", () => r());
      });
    }, {
      doc: `Used by nodes that have access to all of Javascript, meaning that they could do just about anything, including executing malicious code.

    This feature forces the user to confirm they want to run the flow first before anything happens.`
    }));
    defNode({
      id: "fn",
      inputs: {
        inputs: new Port("any", [], ["bus"])
      },
      outputs: {
        outputs: new Port("any", [], ["bus"])
      },
      paramDoc: "<lambda body>",
      features: ["unsafe-code"],
      doc: `Transforms the input and output values using a Scheme function.

    The value of the inputs is available in the variable \`$inputs\`, the node object is available
    in the variable \`$node\`, and the app context is available in the variable \`$app\`.
    Whatever array the function returns will be passed to the output.

    If \`#<void>\` (JS \`undefined\`) is returned, the node will not update its outputs.`,
      async setup({ node, features, args }) {
        console.log(features["unsafe-code"]);
        const cons = (a, d) => new Pair(a, d);
        const s = (n) => new LSymbol(n);
        const code = cons(
          s("lambda"),
          cons(
            cons(s("$inputs"), cons(s("$node"), cons(s("$app"), _nil))),
            arrayToConsList(args)
          )
        );
        console.log(code.toString());
        node.state.func = (await exec(code))[0];
      },
      async update({ node, app }) {
        var value;
        try {
          value = await node.state.func(arrayToConsList(node.get("inputs")), node, app);
        } catch (e75) {
          app.error(e75);
          console.error(e75);
          return;
        }
        if (value instanceof Pair) value = consToArray(value);
        else value = [value];
        if (value !== void 0) node.output("outputs", value);
      }
    });
  }
});

// src/nodes/features/gamepad.ts
var gamepad_exports = {};
var MAPPING;
var init_gamepad = __esm({
  "src/nodes/features/gamepad.ts"() {
    "use strict";
    init_nodeDef();
    init_otherTypes();
    init_all();
    defNode({
      id: "gamepad",
      category: "Device",
      inputs: {
        index: new Port("number", 0),
        "rumble-left": new Port("number", 0),
        "rumble-right": new Port("number", 0),
        "rumble-lt": new Port("number", 0),
        "rumble-rt": new Port("number", 0)
      },
      outputs: {
        buttons: new Port("number", [], ["bus"]),
        axes: new Port("number", [], ["bus"]),
        connected: new Port("boolean", false),
        north: new Port("number", 0),
        south: new Port("number", 0),
        east: new Port("number", 0),
        west: new Port("number", 0),
        "dpad-up": new Port("number", 0),
        "dpad-down": new Port("number", 0),
        "dpad-left": new Port("number", 0),
        "dpad-right": new Port("number", 0),
        start: new Port("number", 0),
        select: new Port("number", 0),
        home: new Port("number", 0),
        "left-stick-press": new Port("number", 0),
        "right-stick-press": new Port("number", 0),
        "left-shoulder": new Port("number", 0),
        "right-shoulder": new Port("number", 0),
        "left-trigger": new Port("number", 0),
        "right-trigger": new Port("number", 0),
        "left-stick": new Port("point", new Point(0, 0)),
        "right-stick": new Port("point", new Point(0, 0))
      },
      doc: `Utilizes the [web gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API)
    to access gamepad data. The gamepad index is the index of the gamepad in the list of connected gamepads.
    The rumble inputs are used to control the rumble of the gamepad.
    The buttons and axes outputs are arrays of button and axis values which can be used to access buttons and axes
    when the gamepad is a non-standard layout.`,
      async tick({ node, dt }) {
        const gamepad = navigator.getGamepads()[node.get("index")];
        node.output("connected", !!gamepad);
        if (!gamepad) return;
        node.output("axes", gamepad.axes);
        node.output("buttons", gamepad.buttons.map((b) => b.value));
        for (const [name, index] of Object.entries(MAPPING.buttons)) {
          const value = gamepad.buttons[index]?.value;
          if (value === void 0) continue;
          node.output(name, value);
        }
        for (const [name, index] of Object.entries(MAPPING.sticks)) {
          const x = gamepad.axes[index.x];
          const y = gamepad.axes[index.y];
          if (x === void 0 || y === void 0) continue;
          node.output(name, new Point(x, y));
        }
        const rumbleMotors = (
          // @ts-ignore
          // this is too new for typescript lol
          gamepad.hapticActuators ?? []
        );
        if (gamepad.vibrationActuator) rumbleMotors.push(gamepad.vibrationActuator);
        await Promise.all([
          ...rumbleMotors.map((motor) => {
            try {
              motor.playEffect("dual-rumble", {
                strongMagnitude: node.get("rumble-left"),
                weakMagnitude: node.get("rumble-right"),
                duration: dt
              });
            } catch (e75) {
            }
          }),
          ...rumbleMotors.map((motor) => {
            try {
              motor.playEffect("trigger-rumble", {
                leftTrigger: node.get("rumble-lt"),
                rightTrigger: node.get("rumble-rt"),
                duration: dt
              });
            } catch (e75) {
            }
          })
        ]);
      }
    });
    MAPPING = {
      "buttons": {
        south: 0,
        east: 1,
        west: 2,
        north: 3,
        "left-shoulder": 4,
        "right-shoulder": 5,
        "left-trigger": 6,
        "right-trigger": 7,
        select: 8,
        start: 9,
        "left-stick": 10,
        "right-stick": 11,
        "dpad-up": 12,
        "dpad-down": 13,
        "dpad-left": 14,
        "dpad-right": 15,
        home: 16
      },
      "sticks": {
        "left-stick": { "x": 0, "y": 1 },
        "right-stick": { "x": 2, "y": 3 }
      }
    };
  }
});

// src/nodes/features/battery.ts
var battery_exports = {};
var init_battery = __esm({
  "src/nodes/features/battery.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      id: "battery",
      category: "Device",
      inputs: {},
      outputs: {
        level: new Port("number", 0),
        charging: new Port("boolean", false)
      },
      doc: `Utilizes the [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)
    to access battery data. The level output is a number between 0 and 1 representing the battery level.
    The charging output is a boolean indicating if the battery is charging.`,
      async setup({ node, app }) {
        if (!("getBattery" in navigator)) {
          app.error("Battery API not supported");
          return;
        }
        const battery = await navigator.getBattery();
        battery.addEventListener("levelchange", () => {
          node.output("level", battery.level);
        });
        battery.addEventListener("chargingchange", () => {
          node.output("charging", battery.charging);
        });
        node.output("level", battery.level);
        node.output("charging", battery.charging);
      }
    });
  }
});

// src/nodes/features/notification.ts
var notification_exports = {};
var init_notification = __esm({
  "src/nodes/features/notification.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      id: "notification",
      category: "Device",
      inputs: {
        title: new Port("string", "Notification"),
        body: new Port("string", ""),
        icon: new Port("string", ""),
        trigger: new Port("signal", void 0)
      },
      outputs: {},
      doc: `Sends a notification using the [Web Notification API](https://developer.mozilla.org/docs/Web/API/notification)
    when :trigger is received.`,
      update({ node, app, changes }) {
        if (changes.trigger) {
          if (!("Notification" in window)) {
            app.error("Web Notification API not supported");
            return;
          }
          if (Notification.permission === "granted") {
            new Notification(node.get("title"), {
              body: node.get("body"),
              icon: node.get("icon") || void 0
            });
          } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(() => node.send("trigger", void 0, void 0));
          } else {
            app.error("Notification permission denied");
          }
        }
      }
    });
  }
});

// src/nodes/features/clipboard.ts
var clipboard_exports = {};
var init_clipboard = __esm({
  "src/nodes/features/clipboard.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      id: "clipboard",
      category: "Device",
      inputs: {
        writeText: new Port("string", "")
      },
      outputs: {
        contents: new Port("string", "")
      },
      doc: `Reads from or writes to the clipboard using the [Clipboard API](https://developer.mozilla.org/docs/Web/API/Clipboard_API).`,
      async update({ app, changes }) {
        if (!("clipboard" in navigator)) {
          app.error("Clipboard API not supported");
          return;
        }
        await navigator.clipboard.writeText(changes.writeText);
      },
      async tick({ app, node }) {
        if (!("clipboard" in navigator)) {
          app.error("Clipboard API not supported");
          return;
        }
        const text = await navigator.clipboard.readText();
        if (text === node.outputCurrentValues.contents) {
          return;
        }
        node.output("contents", text);
      }
    });
  }
});

// src/nodes/math/arithmetic.ts
var arithmetic_exports = {};
var init_arithmetic = __esm({
  "src/nodes/math/arithmetic.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      id: "sum",
      category: "Math",
      template: { T: ["number"] },
      inputs: {
        values: new Port("T", [], ["bus"])
      },
      outputs: {
        sum: new Port("T", 0)
      },
      doc: `Adds a bunch of numbers.`,
      update({ node }) {
        node.output("sum", node.get("values").reduce((a, b) => a + b, 0));
      }
    });
    defNode({
      id: "sub",
      category: "Math",
      template: { T: ["number"] },
      inputs: {
        a: new Port("T", 0),
        b: new Port("T", 0)
      },
      outputs: {
        difference: new Port("T", 0)
      },
      doc: `Subtracts two numbers, a - b.`,
      update({ node }) {
        node.output("difference", node.get("a") - node.get("b"));
      }
    });
    defNode({
      id: "product",
      category: "Math",
      template: { T: ["number"] },
      inputs: {
        values: new Port("T", [], ["bus"])
      },
      outputs: {
        product: new Port("T", 1)
      },
      doc: `Multiplies a bunch of numbers.`,
      update({ node }) {
        node.output("product", node.get("values").reduce((a, b) => a * b, 1));
      }
    });
    defNode({
      id: "div",
      category: "Math",
      template: { T: ["number"] },
      inputs: {
        a: new Port("T", 1),
        b: new Port("T", 1)
      },
      outputs: {
        quotient: new Port("T", 1)
      },
      doc: `Divides two numbers, a / b.`,
      update({ node }) {
        node.output("quotient", node.get("a") / node.get("b"));
      }
    });
    defNode({
      id: "mod",
      category: "Math",
      template: { T: ["number"] },
      inputs: {
        a: new Port("T", 1),
        b: new Port("T", 1)
      },
      outputs: {
        modulus: new Port("T", 1)
      },
      doc: `Calculates the modulus of two numbers, a % b.`,
      update({ node }) {
        node.output("modulus", node.get("a") % node.get("b"));
      }
    });
  }
});

// src/nodes/math/statistics.ts
var statistics_exports = {};
var init_statistics = __esm({
  "src/nodes/math/statistics.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      id: "average",
      category: "Statistics",
      template: { T: ["number"] },
      inputs: {
        values: new Port("T", [], ["bus"])
      },
      outputs: {
        average: new Port("T", 0)
      },
      doc: `Calculates the average (arithmetic mean) of a bunch of numbers.`,
      update({ node }) {
        const values = node.get("values");
        node.output("average", values.reduce((a, b) => a + b, 0) / values.length);
      }
    });
    defNode({
      id: "variance",
      category: "Statistics",
      template: { T: ["number"] },
      inputs: {
        values: new Port("T", [], ["bus"])
      },
      outputs: {
        variance: new Port("T", 0)
      },
      doc: `Calculates the variance of a bunch of numbers.`,
      update({ node }) {
        const values = node.get("values");
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        node.output("variance", values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length);
      }
    });
  }
});

// src/nodes/math/random.ts
var random_exports = {};
var init_random = __esm({
  "src/nodes/math/random.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      category: "Math",
      id: "random",
      inputs: { randomize: new Port("signal", void 0) },
      outputs: { value: new Port("number", "a random value") },
      doc: "Outputs a random value in the range [0, 1) when updated.",
      setup({ node }) {
        node.output("value", Math.random());
      },
      update({ node }) {
        node.output("value", Math.random());
      }
    });
  }
});

// src/nodes/math/calculus.ts
var calculus_exports = {};
var init_calculus = __esm({
  "src/nodes/math/calculus.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      id: "integrate",
      category: "Calculus",
      inputs: {
        df: new Port("number", 0)
      },
      outputs: {
        f: new Port("number", 0)
      },
      doc: `Calculates the time integral of the input value.`,
      tick({ node, dt }) {
        node.output("f", node.get("df") * dt + node.outputCurrentValues.f);
      }
    });
    defNode({
      id: "derivative",
      category: "Calculus",
      inputs: {
        f: new Port("number", 0)
      },
      outputs: {
        df: new Port("number", 0)
      },
      stateKeys: ["old_df"],
      doc: `Calculates the time derivative of the input value.`,
      setup({ node }) {
        node.state.old_df = 0;
      },
      tick({ node, dt }) {
        const f = node.get("f");
        node.output("df", (f - node.state.old_df) / dt);
        node.state.old_df = f;
      }
    });
  }
});

// src/nodes/math/single_func.ts
var single_func_exports = {};
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}
var FUNCS;
var init_single_func = __esm({
  "src/nodes/math/single_func.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    FUNCS = {
      abs: { func: Math.abs, doc: "absolute value" },
      acos: { func: Math.acos, doc: "inverse cosine" },
      asin: { func: Math.asin, doc: "inverse sine" },
      atan: { func: Math.atan, doc: "inverse tangent" },
      ceil: { func: Math.ceil, doc: "round up" },
      cos: { func: Math.cos, doc: "cosine" },
      degrees: { func: radiansToDegrees, doc: "convert radians to degrees" },
      exp: { func: Math.exp, doc: "exponential function" },
      floor: { func: Math.floor, doc: "round down" },
      log: { func: Math.log, doc: "natural logarithm" },
      radians: { func: degreesToRadians, doc: "convert degrees to radians" },
      round: { func: Math.round, doc: "round to nearest integer" },
      sin: { func: Math.sin, doc: "sine" },
      sqrt: { func: Math.sqrt, doc: "square root" },
      tan: { func: Math.tan, doc: "tangent" },
      trunc: { func: Math.trunc, doc: "round towards zero" }
    };
    defNode({
      id: "mathfunc1",
      category: "Math",
      inputs: {
        input: new Port("number", 0)
      },
      outputs: {
        output: new Port("number", 0)
      },
      paramDoc: "<func>",
      doc: `Single-argument math functions.

${Object.entries(FUNCS).map(([name, { doc: doc2 }]) => `* \`${name}\`: ${doc2}`).join("\n")}`,
      stateKeys: ["func"],
      setup({ node, args, app }) {
        const func = FUNCS[args[0]];
        if (!func) {
          app.error(`Unknown function: ${args[0]}`);
          return;
        }
        node.state.func = func.func;
      },
      update({ node, changes }) {
        node.output("output", node.state.func(changes.input));
      }
    });
  }
});

// src/nodes/math/double_func.ts
var double_func_exports = {};
var MATH_FUNCS, COMPARE_FUNCS, BITWISE_FUNCS;
var init_double_func = __esm({
  "src/nodes/math/double_func.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    MATH_FUNCS = {
      pow: { func: Math.pow, doc: "a raised to the power of b" },
      atan2: { func: Math.atan2, doc: "arctangent of a/b, result in radians" },
      max: { func: Math.max, doc: "larger of a and b" },
      min: { func: Math.min, doc: "smaller of a and b" }
    };
    defNode({
      id: "mathfunc2",
      category: "Math",
      inputs: {
        a: new Port("number", 0),
        b: new Port("number", 0)
      },
      outputs: {
        result: new Port("number", 0)
      },
      paramDoc: "<func>",
      doc: `Two-argument math functions.

${Object.entries(MATH_FUNCS).map(([name, { doc: doc2 }]) => `* \`${name}\`: ${doc2}`).join("\n")}`,
      stateKeys: ["func"],
      setup({ node, args, app }) {
        const entry = MATH_FUNCS[args[0]];
        if (!entry) {
          app.error(`Unknown function: ${args[0]}`);
          return;
        }
        node.state.func = entry.func;
      },
      update({ node, changes }) {
        node.output("result", node.state.func(Number(changes.a), Number(changes.b)));
      }
    });
    COMPARE_FUNCS = {
      lt: { func: (a, b) => a < b, doc: "a < b" },
      lte: { func: (a, b) => a <= b, doc: "a ≤ b" },
      gt: { func: (a, b) => a > b, doc: "a > b" },
      gte: { func: (a, b) => a >= b, doc: "a ≥ b" },
      eq: { func: (a, b) => a === b, doc: "a === b (strict equality)" },
      neq: { func: (a, b) => a !== b, doc: "a !== b (strict inequality)" }
    };
    defNode({
      id: "compare",
      category: "Math",
      template: { T: ["number", "string"] },
      inputs: {
        a: new Port("T", 0),
        b: new Port("T", 0)
      },
      outputs: {
        result: new Port("boolean", false)
      },
      paramDoc: "<func>",
      doc: `Comparison functions for numbers and strings.

${Object.entries(COMPARE_FUNCS).map(([name, { doc: doc2 }]) => `* \`${name}\`: ${doc2}`).join("\n")}`,
      stateKeys: ["func"],
      setup({ node, args, app }) {
        const entry = COMPARE_FUNCS[args[0]];
        if (!entry) {
          app.error(`Unknown function: ${args[0]}`);
          return;
        }
        node.state.func = entry.func;
      },
      update({ node, changes }) {
        node.output("result", node.state.func(changes.a, changes.b));
      }
    });
    BITWISE_FUNCS = {
      and: { func: (a, b) => a & b, doc: "bitwise AND" },
      or: { func: (a, b) => a | b, doc: "bitwise OR" },
      xor: { func: (a, b) => a ^ b, doc: "bitwise XOR" }
    };
    defNode({
      id: "bitwise",
      category: "Math",
      inputs: {
        a: new Port("number", 0),
        b: new Port("number", 0)
      },
      outputs: {
        result: new Port("number", 0)
      },
      paramDoc: "<func>",
      doc: `Bitwise functions for numbers.

${Object.entries(BITWISE_FUNCS).map(([name, { doc: doc2 }]) => `* \`${name}\`: ${doc2}`).join("\n")}`,
      stateKeys: ["func"],
      setup({ node, args, app }) {
        const entry = BITWISE_FUNCS[args[0]];
        if (!entry) {
          app.error(`Unknown function: ${args[0]}`);
          return;
        }
        node.state.func = entry.func;
      },
      update({ node, changes }) {
        node.output("result", node.state.func(Number(changes.a), Number(changes.b)));
      }
    });
  }
});

// src/nodes/math/geometry.ts
var geometry_exports = {};
var init_geometry = __esm({
  "src/nodes/math/geometry.ts"() {
    "use strict";
    init_nodeDef();
    init_otherTypes();
    init_all();
    defNode({
      id: "distance",
      category: "Geometry",
      inputs: {
        a: new Port("point", new Point(0, 0)),
        b: new Port("point", new Point(0, 0))
      },
      outputs: {
        distance: new Port("number", 0)
      },
      doc: `Calculates the distance between two points.`,
      update({ node }) {
        const a = node.get("a");
        const b = node.get("b");
        const distance = Math.hypot(b.x - a.x, b.y - a.y);
        node.output("distance", distance);
      }
    });
    defNode({
      id: "centroid",
      category: "Geometry",
      inputs: {
        points: new Port("point", [], ["bus"])
      },
      outputs: {
        centroid: new Port("point", new Point(0, 0))
      },
      doc: `Calculates the centroid of a set of points. If there are only two points, it returns the midpoint.`,
      update({ node }) {
        const points = node.get("points");
        if (points.length === 0) {
          node.output("centroid", new Point(0, 0));
          return;
        }
        const sum = points.reduce((acc, point) => {
          acc.x += point.x;
          acc.y += point.y;
          return acc;
        }, new Point(0, 0));
        const centroid = new Point(sum.x / points.length, sum.y / points.length);
        node.output("centroid", centroid);
      }
    });
    defNode({
      id: "xy->point",
      category: "Geometry",
      inputs: {
        x: new Port("number", 0),
        y: new Port("number", 0)
      },
      outputs: {
        point: new Port("point", new Point(0, 0))
      },
      doc: `Converts x and y coordinates to a point.`,
      update({ node }) {
        node.output("point", new Point(node.get("x"), node.get("y")));
      }
    });
    defNode({
      id: "point->xy",
      category: "Geometry",
      inputs: {
        point: new Port("point", new Point(0, 0))
      },
      outputs: {
        x: new Port("number", 0),
        y: new Port("number", 0)
      },
      doc: `Converts a point to x and y coordinates.`,
      update({ node }) {
        const point = node.get("point");
        node.output("x", point.x);
        node.output("y", point.y);
      }
    });
  }
});

// src/nodes/electronics/timing.ts
var timing_exports = {};
var init_timing = __esm({
  "src/nodes/electronics/timing.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      category: "Timing",
      id: "clock",
      inputs: {
        interval: new Port("number", 1e3),
        paused: new Port("boolean", false),
        reset: new Port("signal", void 0)
      },
      outputs: {
        clock: new Port("signal", void 0)
      },
      stateKeys: ["elapsedTime"],
      doc: "Updates connected nodes every N milliseconds.",
      setup({ node }) {
        node.state.elapsedTime = 0;
      },
      update({ node, changes }) {
        if (changes.reset) {
          node.state.elapsedTime = 0;
        }
      },
      tick({ node, dt }) {
        if (!node.get("paused")) {
          node.state.elapsedTime += dt * 1e3;
        }
        if (node.state.elapsedTime >= node.get("interval")) {
          node.state.elapsedTime -= node.get("interval");
          node.output("clock");
        }
      }
    });
    defNode({
      category: "Timing",
      id: "delay",
      template: { T: ["any"] },
      inputs: {
        value: new Port("T", void 0),
        delay: new Port("number", 1e3, ["silent"])
      },
      outputs: {
        value: new Port("T", void 0)
      },
      doc: `Forwards the input value after a specified delay (in milliseconds)
    using \`setTimeout\`.`,
      update({ node, changes }) {
        const value = changes.value;
        const delay = (node.get("delay") ?? 0).valueOf();
        console.log("Delaying value ", value, "by", delay, "ms");
        setTimeout(() => node.output("value", value), delay);
      }
    });
    defNode({
      id: "pulse",
      inputs: {
        edge: new Port("signal", void 0)
      },
      outputs: {
        pulse: new Port("boolean", false)
      },
      doc: `When updated, sets output to true for one tick and then sets it back to false.`,
      tick({ node }) {
        if (node.outputCurrentValues.pulse)
          node.output("pulse", false);
      },
      update({ node }) {
        node.output("pulse", true);
      }
    });
  }
});

// src/nodes/electronics/logic.ts
var logic_exports = {};
var init_logic = __esm({
  "src/nodes/electronics/logic.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      category: "Logic",
      id: "not",
      inputs: {
        input: new Port("boolean", false)
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs the inverse of its input.",
      update({ node, changes }) {
        node.output("output", !changes.input);
      }
    });
    defNode({
      category: "Logic",
      id: "and",
      inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false)
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if both inputs are true and false otherwise.",
      update({ node, changes }) {
        node.output("output", !!(changes.a && changes.b));
      }
    });
    defNode({
      category: "Logic",
      id: "every",
      inputs: {
        inputs: new Port("boolean", [], ["bus"])
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if all inputs are true and false otherwise. This is the any-number-of-inputs version of the AND gate.",
      update({ node, changes }) {
        node.output("output", Array.isArray(changes.inputs) ? changes.inputs.every(Boolean) : false);
      }
    });
    defNode({
      category: "Logic",
      id: "or",
      inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false)
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs false if both inputs are false and true otherwise.",
      update({ node, changes }) {
        node.output("output", !!(changes.a || changes.b));
      }
    });
    defNode({
      category: "Logic",
      id: "merge-signals",
      inputs: {
        inputs: new Port("signal", [], ["bus"])
      },
      outputs: {
        output: new Port("signal", void 0)
      },
      doc: `Merges multiple signal inputs into a single output.
    When any input updates, the output will trigger an update.`,
      update({ node }) {
        console.log("merge-signals input changed");
        node.output("output");
      }
    });
    defNode({
      category: "Logic",
      id: "some",
      inputs: {
        inputs: new Port("boolean", [], ["bus"])
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs false if all inputs are false and true otherwise. This is the any-number-of-inputs version of the OR gate.",
      update({ node, changes }) {
        node.output("output", changes.inputs.some(Boolean));
      }
    });
    defNode({
      category: "Logic",
      id: "xor",
      inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false)
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if the inputs are different and false if they are the same.",
      update({ node, changes }) {
        node.output("output", !!changes.a === !changes.b);
      }
    });
    defNode({
      category: "Logic",
      id: "parity-1",
      inputs: {
        inputs: new Port("boolean", [], ["bus"])
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if an odd number of inputs are true and false if an even number of inputs are true. This is the any-number-of-inputs version of the XOR gate.",
      update({ node, changes }) {
        const count = changes.inputs.filter(Boolean).length;
        node.output("output", count % 2 === 1);
      }
    });
    defNode({
      category: "Logic",
      id: "nand",
      inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false)
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if at least one input is false and false if both inputs are true.",
      update({ node, changes }) {
        node.output("output", !(changes.a && changes.b));
      }
    });
    defNode({
      category: "Logic",
      id: "not-all",
      inputs: {
        inputs: new Port("boolean", [], ["bus"])
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if at least one input is false and false if all inputs are true. This is the any-number-of-inputs version of the NAND gate.",
      update({ node, changes }) {
        node.output("output", !changes.inputs.every(Boolean));
      }
    });
    defNode({
      category: "Logic",
      id: "nor",
      inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false)
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if both inputs are false and false otherwise.",
      update({ node, changes }) {
        node.output("output", !(changes.a || changes.b));
      }
    });
    defNode({
      category: "Logic",
      id: "none",
      inputs: {
        inputs: new Port("boolean", [], ["bus"])
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if all inputs are false and false if any are true. This is the any-number-of-inputs version of the NOR gate.",
      update({ node, changes }) {
        node.output("output", !changes.inputs.some(Boolean));
      }
    });
    defNode({
      category: "Logic",
      id: "xnor",
      inputs: {
        a: new Port("boolean", false),
        b: new Port("boolean", false)
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if both inputs are the same.",
      update({ node, changes }) {
        node.output("output", !!changes.a === !!changes.b);
      }
    });
    defNode({
      category: "Logic",
      id: "parity-0",
      inputs: {
        inputs: new Port("boolean", [], ["bus"])
      },
      outputs: {
        output: new Port("boolean", true)
      },
      doc: "Outputs true if an even number of inputs are true and false if an odd number of inputs are true. This is the any-number-of-inputs version of the XNOR gate.",
      update({ node, changes }) {
        const count = changes.inputs.filter(Boolean).length;
        node.output("output", count % 2 === 0);
      }
    });
  }
});

// src/nodes/electronics/latches.ts
var latches_exports = {};
var init_latches = __esm({
  "src/nodes/electronics/latches.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      category: "Logic",
      id: "d-latch",
      template: { T: ["any"] },
      inputs: {
        d: new Port("T", void 0),
        enable: new Port("boolean", false)
      },
      outputs: {
        q: new Port("T", void 0)
      },
      stateKeys: ["q"],
      doc: `D latch (transparent latch). When \`:enable\` is true, \`:q\` mirrors \`:d\`. When \`:enable\` is false, \`:q\` holds its value.`,
      update({ node }) {
        if (node.get("enable")) {
          const oldQ = node.state.q;
          node.state.q = node.get("d");
          if (oldQ !== node.state.q)
            node.output("q", node.state.q);
        }
      }
    });
    defNode({
      category: "Logic",
      id: "d-flipflop",
      template: { T: ["any"] },
      inputs: {
        d: new Port("T", void 0, ["silent"]),
        clock: new Port("signal", void 0)
      },
      outputs: {
        q: new Port("T", false)
      },
      stateKeys: ["q"],
      doc: `D flip-flop. When updated by \`:clock\`, \`:q\` is set to \`:d\`.`,
      update({ node }) {
        node.output("q", node.get("d"));
      }
    });
    defNode({
      id: "sr-latch",
      category: "Logic",
      inputs: {
        s: new Port("boolean", false),
        r: new Port("boolean", false),
        enable: new Port("boolean", true)
      },
      outputs: {
        q: new Port("boolean", false)
      },
      doc: `Set-reset latch. When \`:enable\` is true,
    \`:q\` is set if \`:s\` is true or cleared if \`:r\` is true.
    If both are true at the same time, \`:s\` takes precedence.
    If \`:enable\` is false, \`:q\` holds its value.`,
      update({ node }) {
        if (node.get("enable")) {
          var value = node.outputCurrentValues.q;
          if (node.get("s")) {
            value = true;
          } else if (node.get("r")) {
            value = false;
          }
          node.output("q", value);
        }
      }
    });
    defNode({
      category: "Logic",
      id: "jk-flipflop",
      inputs: {
        j: new Port("boolean", false, ["silent"]),
        k: new Port("boolean", false, ["silent"]),
        clock: new Port("signal", void 0)
      },
      outputs: {
        q: new Port("boolean", false)
      },
      stateKeys: ["q"],
      doc: `JK flip-flop. When updated by \`:clock\`, \`:q\` is set if \`:j\` is true or
    cleared if \`:k\` is true. If both are true at the same time, \`:q\` toggles.`,
      setup({ node }) {
        node.state.q = false;
        node.output("q", false);
      },
      update({ node }) {
        node.state.q = node.get("j") && !node.state.q || !node.get("k") && node.state.q;
        node.output("q", node.state.q);
      }
    });
  }
});

// src/nodes/electronics/mux.ts
var mux_exports = {};
var init_mux = __esm({
  "src/nodes/electronics/mux.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      id: "demultiplexer",
      category: "Flow Control",
      template: { T: ["any"] },
      inputs: {
        value: new Port("T", void 0),
        select: new Port("number", 0)
      },
      outputs: {
        out: new Port("T", [], ["bus"])
      },
      doc: `A demultiplexer. Takes a single input and routes it to one of several outputs based on the select input.`,
      update({ node }) {
        node.output("out", node.get("value"), node.get("select"));
      }
    });
    defNode({
      id: "multiplexer",
      category: "Flow Control",
      template: { T: ["any"] },
      inputs: {
        select: new Port("number", 0),
        in: new Port("T", [], ["bus"])
      },
      outputs: {
        out: new Port("T", void 0)
      },
      doc: `A multiplexer. Takes several inputs and routes one of them to the output based on the select input.`,
      update({ node }) {
        const oldValue = node.outputCurrentValues.out;
        const newValue = node.get("in")[node.get("select")];
        if (oldValue !== newValue) {
          node.output("out", newValue);
        }
      }
    });
  }
});

// src/nodes/electronics/filter.ts
var filter_exports = {};
var init_filter = __esm({
  "src/nodes/electronics/filter.ts"() {
    "use strict";
    init_nodeDef();
    init_all();
    defNode({
      id: "rc-lowpass",
      category: "Math",
      inputs: {
        input: new Port("number", 0),
        tau: new Port("number", 0.1)
        // RC time constant
      },
      outputs: {
        output: new Port("number", 0)
      },
      doc: `RC low-pass filter. Tau is the time it takes for the output to move
    1-1/<em>e</em> = ~63.2% of the change after a step change in input.`,
      tick({ node, dt }) {
        const input = node.get("input");
        const tau = node.get("tau");
        let y = node.outputCurrentValues.output;
        if (tau > 0) {
          y += (input - y) * (dt / tau);
        } else {
          y = input;
        }
        node.output("output", y);
      }
    });
    defNode({
      id: "ramp-follower",
      category: "Math",
      inputs: {
        input: new Port("number", 0),
        rate: new Port("number", 1)
        // max change per second
      },
      outputs: {
        output: new Port("number", 0)
      },
      doc: `Ramp follower (slew rate limiter). Limits the rate of change of the output to ±rate per second.`,
      tick({ node, dt }) {
        const input = node.get("input");
        const rate = node.get("rate");
        let y = node.outputCurrentValues.output;
        const maxDelta = Math.abs(rate) * dt;
        const delta = input - y;
        if (Math.abs(delta) > maxDelta) {
          y += Math.sign(delta) * maxDelta;
        } else {
          y = input;
        }
        node.output("output", y);
      }
    });
  }
});

// src/nodes/all.ts
function defNode(node) {
  NODES.push(node);
}
function defFeature(name, feat) {
  FEATURES.push([name, feat]);
}
var modulesReady, NODES, FEATURES;
var init_all = __esm({
  "src/nodes/all.ts"() {
    "use strict";
    modulesReady = Promise.all([
      Promise.resolve().then(() => (init_basic(), basic_exports)),
      Promise.resolve().then(() => (init_flow_control(), flow_control_exports)),
      init_html().then(() => html_exports),
      Promise.resolve().then(() => (init_converters(), converters_exports)),
      Promise.resolve().then(() => (init_gps(), gps_exports)),
      init_unsafe().then(() => unsafe_exports),
      Promise.resolve().then(() => (init_gamepad(), gamepad_exports)),
      Promise.resolve().then(() => (init_battery(), battery_exports)),
      Promise.resolve().then(() => (init_notification(), notification_exports)),
      Promise.resolve().then(() => (init_clipboard(), clipboard_exports)),
      Promise.resolve().then(() => (init_arithmetic(), arithmetic_exports)),
      Promise.resolve().then(() => (init_statistics(), statistics_exports)),
      Promise.resolve().then(() => (init_random(), random_exports)),
      Promise.resolve().then(() => (init_calculus(), calculus_exports)),
      Promise.resolve().then(() => (init_single_func(), single_func_exports)),
      Promise.resolve().then(() => (init_double_func(), double_func_exports)),
      Promise.resolve().then(() => (init_geometry(), geometry_exports)),
      Promise.resolve().then(() => (init_timing(), timing_exports)),
      Promise.resolve().then(() => (init_logic(), logic_exports)),
      Promise.resolve().then(() => (init_latches(), latches_exports)),
      Promise.resolve().then(() => (init_mux(), mux_exports)),
      Promise.resolve().then(() => (init_filter(), filter_exports))
    ]);
    NODES = [];
    FEATURES = [];
  }
});

// src/refpage_main.ts
init_vanilla();
await init_utils();
init_all();

// node_modules/.pnpm/marked@15.0.11/node_modules/marked/lib/marked.esm.js
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var noopTest = { exec: () => null };
function edit(regex, opt = "") {
  let source = typeof regex === "string" ? regex : regex.source;
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(other.caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (bull) => new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`),
  htmlBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i")
};
var newline = /^(?:[ \t]*(?:\n|$))+/;
var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html2 = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html: html2,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = {
  ...blockNormal,
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
var blockPedantic = {
  ...blockNormal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
var escape$1 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = /[\p{P}\p{S}]/u;
var _punctuationOrSpace = /[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u;
var punctuation = edit(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _punctuationOrSpace).getRegex();
var _punctuationGfmStrongEm = /(?!~)[\p{P}\p{S}]/u;
var _punctuationOrSpaceGfmStrongEm = /(?!~)[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s\p{P}\p{S}]|~)/u;
var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var emStrongLDelim = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongLDelimGfm = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\(punct)/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape: escape$1,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
var inlineGfm = {
  ...inlineNormal,
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
var inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html3, encode) {
  if (encode) {
    if (other.escapeTest.test(html3)) {
      return html3.replace(other.escapeReplace, getEscapeReplacement);
    }
  } else {
    if (other.escapeTestNoEncode.test(html3)) {
      return html3.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html3;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch {
    return null;
  }
  return href;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(other.findPipe, (match2, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(other.splitPipe);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells.at(-1)?.trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && true) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  if (level > 0) {
    return -2;
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2, rules) {
  const href = link2.href;
  const title = link2.title || null;
  const text = cap[1].replace(rules.other.outputLinkReplace, "$1");
  lexer2.state.inLink = true;
  const token = {
    type: cap[0].charAt(0) === "!" ? "image" : "link",
    raw,
    href,
    title,
    text,
    tokens: lexer2.inlineTokens(text)
  };
  lexer2.state.inLink = false;
  return token;
}
function indentCodeCompensation(raw, text, rules) {
  const matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(rules.other.beginningSpace);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options3) {
    this.options = options3 || _defaults;
  }
  space(src2) {
    const cap = this.rules.block.newline.exec(src2);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src2) {
    const cap = this.rules.block.code.exec(src2);
    if (cap) {
      const text = cap[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src2) {
    const cap = this.rules.block.fences.exec(src2);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "", this.rules);
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src2) {
    const cap = this.rules.block.heading.exec(src2);
    if (cap) {
      let text = cap[2].trim();
      if (this.rules.other.endingHash.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src2) {
    const cap = this.rules.block.hr.exec(src2);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src2) {
    const cap = this.rules.block.blockquote.exec(src2);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens2 = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (this.rules.other.blockquoteStart.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens2, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens2.at(-1);
        if (lastToken?.type === "code") {
          break;
        } else if (lastToken?.type === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens2[tokens2.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if (lastToken?.type === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens2[tokens2.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens2.at(-1).raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens: tokens2,
        text
      };
    }
  }
  list(src2) {
    let cap = this.rules.block.list.exec(src2);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = this.rules.other.listItemRegex(bull);
      let endsWithBlankLine = false;
      while (src2) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src2))) {
          break;
        }
        if (this.rules.block.hr.test(src2)) {
          break;
        }
        raw = cap[0];
        src2 = src2.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (t2) => " ".repeat(3 * t2.length));
        let nextLine = src2.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(this.rules.other.nonSpaceChar);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && this.rules.other.blankLine.test(nextLine)) {
          raw += nextLine + "\n";
          src2 = src2.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = this.rules.other.nextBulletRegex(indent);
          const hrRegex = this.rules.other.hrRegex(indent);
          const fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
          const headingBeginRegex = this.rules.other.headingBeginRegex(indent);
          const htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
          while (src2) {
            const rawLine = src2.split("\n", 1)[0];
            let nextLineWithoutTabs;
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  ");
              nextLineWithoutTabs = nextLine;
            } else {
              nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (htmlBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(nextLine)) {
              break;
            }
            if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src2 = src2.substring(rawLine.length + 1);
            line = nextLineWithoutTabs.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (this.rules.other.doubleBlankLine.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = this.rules.other.listIsTask.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(this.rules.other.listReplaceTask, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      const lastItem = list2.items.at(-1);
      if (lastItem) {
        lastItem.raw = lastItem.raw.trimEnd();
        lastItem.text = lastItem.text.trimEnd();
      } else {
        return;
      }
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t2) => t2.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t2) => this.rules.other.anyLine.test(t2.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src2) {
    const cap = this.rules.block.html.exec(src2);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src2) {
    const cap = this.rules.block.def.exec(src2);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
      const href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src2) {
    const cap = this.rules.block.table.exec(src2);
    if (!cap) {
      return;
    }
    if (!this.rules.other.tableDelimiter.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(this.rules.other.tableAlignChars, "").split("|");
    const rows = cap[3]?.trim() ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (this.rules.other.tableAlignRight.test(align)) {
        item.align.push("right");
      } else if (this.rules.other.tableAlignCenter.test(align)) {
        item.align.push("center");
      } else if (this.rules.other.tableAlignLeft.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src2) {
    const cap = this.rules.block.lheading.exec(src2);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src2) {
    const cap = this.rules.block.paragraph.exec(src2);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src2) {
    const cap = this.rules.block.text.exec(src2);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src2) {
    const cap = this.rules.inline.escape.exec(src2);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: cap[1]
      };
    }
  }
  tag(src2) {
    const cap = this.rules.inline.tag.exec(src2);
    if (cap) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && this.rules.other.endATag.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src2) {
    const cap = this.rules.inline.link.exec(src2);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
        if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex === -2) {
          return;
        }
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = this.rules.other.pedanticHrefTitle.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (this.rules.other.startAngleBracket.test(href)) {
        if (this.options.pedantic && !this.rules.other.endAngleBracket.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer, this.rules);
    }
  }
  reflink(src2, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src2)) || (cap = this.rules.inline.nolink.exec(src2))) {
      const linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer, this.rules);
    }
  }
  emStrong(src2, maskedSrc, prevChar = "") {
    let match2 = this.rules.inline.emStrongLDelim.exec(src2);
    if (!match2)
      return;
    if (match2[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric))
      return;
    const nextChar = match2[1] || match2[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match2[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match2[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src2.length + lLength);
      while ((match2 = endReg.exec(maskedSrc)) != null) {
        rDelim = match2[1] || match2[2] || match2[3] || match2[4] || match2[5] || match2[6];
        if (!rDelim)
          continue;
        rLength = [...rDelim].length;
        if (match2[3] || match2[4]) {
          delimTotal += rLength;
          continue;
        } else if (match2[5] || match2[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match2[0]][0].length;
        const raw = src2.slice(0, lLength + match2.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src2) {
    const cap = this.rules.inline.code.exec(src2);
    if (cap) {
      let text = cap[2].replace(this.rules.other.newLineCharGlobal, " ");
      const hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text);
      const hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text) && this.rules.other.endingSpaceChar.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src2) {
    const cap = this.rules.inline.br.exec(src2);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src2) {
    const cap = this.rules.inline.del.exec(src2);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src2) {
    const cap = this.rules.inline.autolink.exec(src2);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[1];
        href = "mailto:" + text;
      } else {
        text = cap[1];
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src2)) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[0];
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = cap[0];
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src2) {
    const cap = this.rules.inline.text.exec(src2);
    if (cap) {
      const escaped = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        escaped
      };
    }
  }
};
var _Lexer = class __Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options3) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options3 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      other,
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src2, options3) {
    const lexer2 = new __Lexer(options3);
    return lexer2.lex(src2);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src2, options3) {
    const lexer2 = new __Lexer(options3);
    return lexer2.inlineTokens(src2);
  }
  /**
   * Preprocessing
   */
  lex(src2) {
    src2 = src2.replace(other.carriageReturn, "\n");
    this.blockTokens(src2, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src2, tokens2 = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src2 = src2.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "");
    }
    while (src2) {
      let token;
      if (this.options.extensions?.block?.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src2, tokens2)) {
          src2 = src2.substring(token.raw.length);
          tokens2.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src2)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens2.at(-1);
        if (token.raw.length === 1 && lastToken !== void 0) {
          lastToken.raw += "\n";
        } else {
          tokens2.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src2)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens2.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens2.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src2)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens2.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      let cutSrc = src2;
      if (this.options.extensions?.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src2.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src2.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        const lastToken = tokens2.at(-1);
        if (lastParagraphClipped && lastToken?.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens2.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src2.length;
        src2 = src2.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src2)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens2.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens2.push(token);
        }
        continue;
      }
      if (src2) {
        const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens2;
  }
  inline(src2, tokens2 = []) {
    this.inlineQueue.push({ src: src2, tokens: tokens2 });
    return tokens2;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src2, tokens2 = []) {
    let maskedSrc = src2;
    let match2 = null;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match2 = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match2[0].slice(match2[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match2.index) + "[" + "a".repeat(match2[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match2 = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match2.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while ((match2 = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match2.index) + "[" + "a".repeat(match2[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    let keepPrevChar = false;
    let prevChar = "";
    while (src2) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      let token;
      if (this.options.extensions?.inline?.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src2, tokens2)) {
          src2 = src2.substring(token.raw.length);
          tokens2.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.link(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src2, this.tokens.links)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens2.at(-1);
        if (token.type === "text" && lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens2.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src2, maskedSrc, prevChar)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src2))) {
        src2 = src2.substring(token.raw.length);
        tokens2.push(token);
        continue;
      }
      let cutSrc = src2;
      if (this.options.extensions?.startInline) {
        let startIndex = Infinity;
        const tempSrc = src2.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src2.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src2 = src2.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        const lastToken = tokens2.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens2.push(token);
        }
        continue;
      }
      if (src2) {
        const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens2;
  }
};
var _Renderer = class {
  options;
  parser;
  // set by the parser
  constructor(options3) {
    this.options = options3 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    const langString = (lang || "").match(other.notSpaceStart)?.[0];
    const code = text.replace(other.endingNewline, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape(langString) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens: tokens2 }) {
    const body = this.parser.parse(tokens2);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens: tokens2, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens2)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type2 = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type2 + startAttr + ">\n" + body + "</" + type2 + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens[0]?.type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + escape(item.tokens[0].tokens[0].text);
            item.tokens[0].tokens[0].escaped = true;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " ",
            escaped: true
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: tokens2 }) {
    return `<p>${this.parser.parseInline(tokens2)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type2 = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type2} align="${token.align}">` : `<${type2}>`;
    return tag2 + content + `</${type2}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: tokens2 }) {
    return `<strong>${this.parser.parseInline(tokens2)}</strong>`;
  }
  em({ tokens: tokens2 }) {
    return `<em>${this.parser.parseInline(tokens2)}</em>`;
  }
  codespan({ text }) {
    return `<code>${escape(text, true)}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens: tokens2 }) {
    return `<del>${this.parser.parseInline(tokens2)}</del>`;
  }
  link({ href, title, tokens: tokens2 }) {
    const text = this.parser.parseInline(tokens2);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + escape(title) + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({ href, title, text, tokens: tokens2 }) {
    if (tokens2) {
      text = this.parser.parseInline(tokens2, this.parser.textRenderer);
    }
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return escape(text);
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${escape(title)}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape(token.text);
  }
};
var _TextRenderer = class {
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  options;
  renderer;
  textRenderer;
  constructor(options3) {
    this.options = options3 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens2, options3) {
    const parser2 = new __Parser(options3);
    return parser2.parse(tokens2);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens2, options3) {
    const parser2 = new __Parser(options3);
    return parser2.parseInline(tokens2);
  }
  /**
   * Parse Loop
   */
  parse(tokens2, top = true) {
    let out = "";
    for (let i = 0; i < tokens2.length; i++) {
      const anyToken = tokens2[i];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens2.length && tokens2[i + 1].type === "text") {
            textToken = tokens2[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body, escaped: true }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens2, renderer = this.renderer) {
    let out = "";
    for (let i = 0; i < tokens2.length; i++) {
      const anyToken = tokens2[i];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _Hooks = class {
  options;
  block;
  constructor(options3) {
    this.options = options3 || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html3) {
    return html3;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens2) {
    return tokens2;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
};
var Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens2, callback) {
    let values = [];
    for (const token of tokens2) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens3 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens3, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions2 = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions2.renderers[ext.name];
            if (prevRenderer) {
              extensions2.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions2.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions2[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions2[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions2.startBlock) {
                  extensions2.startBlock.push(ext.start);
                } else {
                  extensions2.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions2.startInline) {
                  extensions2.startInline.push(ext.start);
                } else {
                  extensions2.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions2.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions2;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (["options", "block"].includes(prop)) {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src2, options3) {
    return _Lexer.lex(src2, options3 ?? this.defaults);
  }
  parser(tokens2, options3) {
    return _Parser.parse(tokens2, options3 ?? this.defaults);
  }
  parseMarkdown(blockType) {
    const parse2 = (src2, options3) => {
      const origOpt = { ...options3 };
      const opt = { ...this.defaults, ...origOpt };
      const throwError = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === true && origOpt.async === false) {
        return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      }
      if (typeof src2 === "undefined" || src2 === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src2 !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src2) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
        opt.hooks.block = blockType;
      }
      const lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
      const parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src2) : src2).then((src3) => lexer2(src3, opt)).then((tokens2) => opt.hooks ? opt.hooks.processAllTokens(tokens2) : tokens2).then((tokens2) => opt.walkTokens ? Promise.all(this.walkTokens(tokens2, opt.walkTokens)).then(() => tokens2) : tokens2).then((tokens2) => parser2(tokens2, opt)).then((html3) => opt.hooks ? opt.hooks.postprocess(html3) : html3).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src2 = opt.hooks.preprocess(src2);
        }
        let tokens2 = lexer2(src2, opt);
        if (opt.hooks) {
          tokens2 = opt.hooks.processAllTokens(tokens2);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens2, opt.walkTokens);
        }
        let html3 = parser2(tokens2, opt);
        if (opt.hooks) {
          html3 = opt.hooks.postprocess(html3);
        }
        return html3;
      } catch (e75) {
        return throwError(e75);
      }
    };
    return parse2;
  }
  onError(silent, async) {
    return (e75) => {
      e75.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape(e75.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e75);
      }
      throw e75;
    };
  }
};
var markedInstance = new Marked();
function marked(src2, opt) {
  return markedInstance.parse(src2, opt);
}
marked.options = marked.setOptions = function(options3) {
  markedInstance.setOptions(options3);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens2, callback) {
  return markedInstance.walkTokens(tokens2, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parser = _Parser.parse;
var lexer = _Lexer.lex;

// src/markedShim.ts
var options2 = {
  gfm: true
};
function dedent(markdown) {
  const lines = markdown.split("\n");
  const indentsByLine = lines.map((x) => /^\s*$/.test(x) ? Infinity : /^\s*/.exec(x)?.[0].length ?? Infinity);
  const minIndent_rest = Math.min(...indentsByLine.slice(1));
  const minIndent_regexp = new RegExp(`^\\s{0,${minIndent_rest}}`);
  const ret = lines.map((line) => line.replace(minIndent_regexp, "")).join("\n");
  console.log(indentsByLine, ret);
  return ret;
}
function markdownToHTML(markdown) {
  return marked.parse(dedent(markdown), { ...options2, async: false });
}

// src/refpage_main.ts
await modulesReady;
var featuresContainer = get("#features-container");
var nodesContainer = get("#nodes-container");
var FEATURE_ID_PREFIX = "feat-";
var NODE_ID_PREFIX = "node-";
var CATEGORY_ID_PREFIX = "category-";
var MAX_NUM_ENTRIES = 6;
function renderPortsTable(ports, label) {
  const entries = Object.entries(ports);
  if (entries.length === 0) return null;
  const numRows = Math.ceil(entries.length / MAX_NUM_ENTRIES);
  const table = make("table");
  for (var row = 0; row < numRows; row++) {
    const start = row * MAX_NUM_ENTRIES;
    const chunk = entries.slice(start, start + MAX_NUM_ENTRIES);
    const tr = make("tr");
    if (row === 0) {
      tr.append(make("th", { rowspan: String(numRows) }, label));
    }
    for (const [name, port] of chunk) {
      const b = port.is("bus") ? ", bussed" : "";
      tr.append(
        make(
          "td",
          {},
          make(
            "div",
            {},
            make("code", {}, `:${name}`),
            " (",
            port.type,
            b,
            ")"
          ),
          ...port.type === "signal" ? [] : [make(
            "div",
            {},
            "default: ",
            make("code", {}, repr2(port.initialVal).toString())
          )]
        )
      );
    }
    table.append(tr);
  }
  return table;
}
function docNode(def2, list2, fStore) {
  const li = make("li");
  list2.append(li);
  li.append(make(
    "p",
    {},
    make(
      "code",
      {},
      "(",
      def2.id,
      ...def2.paramDoc ? [" ", def2.paramDoc] : Object.entries(def2.inputs).flatMap(([name, val]) => val.is("paramOnly") ? [` :${name} <${val.type}>`] : []),
      ")"
    )
  ));
  if (def2.features) {
    li.append(make(
      "p",
      {},
      "Uses features ",
      ...def2.features.flatMap((f2) => [
        ", ",
        make(
          "a",
          { href: `#${FEATURE_ID_PREFIX}${encodeURIComponent(f2)}` },
          make("strong", {}, make(
            "em",
            {},
            make("code", {}, f2)
          ))
        )
      ].slice(1))
    ));
    for (var f of def2.features) {
      fStore[f] ??= /* @__PURE__ */ new Set();
      fStore[f].add(def2.id);
    }
  }
  const inTable = renderPortsTable(def2.inputs, "Inputs");
  if (inTable) li.append(inTable);
  const outTable = renderPortsTable(def2.outputs, "Outputs");
  if (outTable) li.append(outTable);
  if (def2.doc) {
    li.append(make("p", {}, html(markdownToHTML(def2.doc))));
  }
}
var featuresByNodesUsing = {};
var nodesByCategory = {};
for (const node of NODES) {
  const cat = node.category || "Uncategorized";
  (nodesByCategory[cat] ??= []).push(node);
}
var sortedCategories = Object.keys(nodesByCategory).sort();
nodesContainer.append(make(
  "ul",
  {},
  ...sortedCategories.map(
    (cat) => make(
      "li",
      {},
      make("a", { href: `#${CATEGORY_ID_PREFIX}${cat.toLowerCase().replaceAll(" ", "-")}` }, cat)
    )
  )
));
for (const cat of sortedCategories) {
  nodesContainer.append(make("h3", { id: CATEGORY_ID_PREFIX + cat.toLowerCase().replaceAll(" ", "-") }, cat));
  const nodesInCat = nodesByCategory[cat] ?? [];
  const nodesById = Object.groupBy(nodesInCat, (x) => x.id);
  for (const id of Object.keys(nodesById).sort()) {
    nodesContainer.append(make(
      "h4",
      { id: NODE_ID_PREFIX + id },
      make("code", {}, id)
    ));
    const ul = make("ul");
    nodesContainer.append(ul);
    for (const variant of nodesById[id] ?? []) {
      docNode(variant, ul, featuresByNodesUsing);
    }
  }
}
function docFeature(id, feat, el, usedBy = /* @__PURE__ */ new Set()) {
  const dt = make("dt", { id: FEATURE_ID_PREFIX + id }, make("h3", {}, make("code", {}, id)));
  const dl2 = make(
    "dd",
    {},
    make(
      "p",
      {},
      make("em", {}, "Used by: ", ...Array.from(usedBy).flatMap((f) => [
        ", ",
        make(
          "a",
          { href: `#${NODE_ID_PREFIX}${encodeURIComponent(f)}` },
          make("code", {}, f)
        )
      ]).slice(1))
    ),
    make("p", {}, html(markdownToHTML(feat.doc)))
  );
  el.append(dt, dl2);
}
var dl = make("dl");
featuresContainer.append(dl);
for ([id, feature] of FEATURES.sort()) {
  docFeature(id, feature, dl, featuresByNodesUsing[id]);
}
var id;
var feature;
get(window.location.hash)?.scrollIntoView();
/*! Bundled license information:

@jcubic/lips/dist/lips.esm.min.js:
  (**@license
   *   __ __                          __
   *  / / \ \       _    _  ___  ___  \ \
   * | |   \ \     | |  | || . \/ __>  | |
   * | |    > \    | |_ | ||  _/\__ \  | |
   * | |   / ^ \   |___||_||_|  <___/  | |
   *  \_\ /_/ \_\                     /_/ v. DEV
   *
   * LIPS is Pretty Simple - Scheme based Powerful LISP in JavaScript
   *
   * Copyright (c) 2018-2024 Jakub T. Jankiewicz <https://jcubic.pl/me>
   * Released under the MIT license
   *
   * includes:
   *
   * unfetch by Jason Miller (@developit) MIT License
   *
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   *
   * dist file generated by Babel includes code
   * Copyright (c) 2014-present, Facebook, Inc.
   * released under MIT license
   *
   * build: Sat, 10 May 2025 19:46:53 +0000
   *)
  (**@license
   *
   * No Dependency fast and small LZJB Compression for Browser and Node
   *
   * Copyright (c) 2021 Jakub T. Jankiewicz https://jcubic.pl/me
   * Released under BSD-3-Clause License
   *
   * build: Wed, 27 Oct 2021 10:43:10 GMT
   *)
*/
//# sourceMappingURL=refpage_main.js.map
