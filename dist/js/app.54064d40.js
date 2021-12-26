(function (t) {
  function e(e) {
    for (
      var c, i, a = e[0], u = e[1], s = e[2], b = 0, f = [];
      b < a.length;
      b++
    )
      (i = a[b]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]),
        (o[i] = 0);
    for (c in u) Object.prototype.hasOwnProperty.call(u, c) && (t[c] = u[c]);
    l && l(e);
    while (f.length) f.shift()();
    return r.push.apply(r, s || []), n();
  }
  function n() {
    for (var t, e = 0; e < r.length; e++) {
      for (var n = r[e], c = !0, a = 1; a < n.length; a++) {
        var u = n[a];
        0 !== o[u] && (c = !1);
      }
      c && (r.splice(e--, 1), (t = i((i.s = n[0]))));
    }
    return t;
  }
  var c = {},
    o = { app: 0 },
    r = [];
  function i(e) {
    if (c[e]) return c[e].exports;
    var n = (c[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = t),
    (i.c = c),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var c in t)
          i.d(
            n,
            c,
            function (e) {
              return t[e];
            }.bind(null, c)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "/");
  var a = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = a.push.bind(a);
  (a.push = e), (a = a.slice());
  for (var s = 0; s < a.length; s++) e(a[s]);
  var l = u;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("cd49");
  },
  "05e0": function (t, e, n) {
    "use strict";
    n("afb0");
  },
  "1ce5": function (t, e, n) {},
  "30ca": function (t, e, n) {
    "use strict";
    n("adb5");
  },
  "75d5": function (t, e, n) {
    "use strict";
    n("1ce5");
  },
  adb5: function (t, e, n) {},
  afb0: function (t, e, n) {},
  cd49: function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var c = n("7a23"),
      o = { id: "nav" },
      r = { key: 0, id: "primary-nav", class: "primary-nav flex" },
      i = Object(c["h"])("Home"),
      a = Object(c["h"])("About"),
      u = Object(c["h"])("Projects"),
      s = Object(c["h"])("Contact");
    function l(t, e, n, l, b, f) {
      var d = Object(c["y"])("router-link"),
        j = Object(c["y"])("router-view");
      return (
        Object(c["s"])(),
        Object(c["f"])(
          c["a"],
          null,
          [
            Object(c["g"])("div", o, [
              Object(c["g"])(
                "button",
                {
                  class: Object(c["o"])([
                    t.isActive ? "open" : "closed",
                    "mobile-nav-toggle",
                  ]),
                  onClick:
                    e[0] ||
                    (e[0] = function () {
                      return (
                        t.toggleMobileNav &&
                        t.toggleMobileNav.apply(t, arguments)
                      );
                    }),
                },
                null,
                2
              ),
              Object(c["i"])(
                c["b"],
                { name: "slide-fade" },
                {
                  default: Object(c["C"])(function () {
                    return [
                      t.isActive || t.windowWidth > 560
                        ? (Object(c["s"])(),
                          Object(c["f"])("ul", r, [
                            Object(c["i"])(
                              d,
                              { to: "/" },
                              {
                                default: Object(c["C"])(function () {
                                  return [i];
                                }),
                                _: 1,
                              }
                            ),
                            Object(c["i"])(
                              d,
                              { to: "/about" },
                              {
                                default: Object(c["C"])(function () {
                                  return [a];
                                }),
                                _: 1,
                              }
                            ),
                            Object(c["i"])(
                              d,
                              { to: "/projects" },
                              {
                                default: Object(c["C"])(function () {
                                  return [u];
                                }),
                                _: 1,
                              }
                            ),
                            Object(c["i"])(
                              d,
                              { to: "/contact" },
                              {
                                default: Object(c["C"])(function () {
                                  return [s];
                                }),
                                _: 1,
                              }
                            ),
                          ]))
                        : Object(c["e"])("", !0),
                    ];
                  }),
                  _: 1,
                }
              ),
            ]),
            Object(c["i"])(j),
          ],
          64
        )
      );
    }
    var b = Object(c["j"])({
        el: "#app",
        data: function () {
          return { isActive: !1, windowWidth: window.innerWidth };
        },
        methods: {
          toggleMobileNav: function () {
            (this.isActive = !this.isActive), console.log(this.isActive);
          },
        },
        mounted: function () {
          var t = this;
          window.onresize = function () {
            t.windowWidth = window.innerWidth;
          };
        },
      }),
      f = (n("05e0"), n("6b0d")),
      d = n.n(f);
    const j = d()(b, [["render", l]]);
    var p = j,
      O = n("6c02"),
      v = function (t) {
        return (
          Object(c["v"])("data-v-0636f950"), (t = t()), Object(c["t"])(), t
        );
      },
      h = { class: "home" },
      g = v(function () {
        return Object(c["g"])("div", { class: "wave -one" }, null, -1);
      }),
      m = v(function () {
        return Object(c["g"])("div", { class: "wave -two" }, null, -1);
      }),
      w = v(function () {
        return Object(c["g"])("div", { class: "wave -three" }, null, -1);
      }),
      y = v(function () {
        return Object(c["g"])(
          "div",
          { class: "welcome" },
          [
            Object(c["g"])("h1", null, "Welcome to my website!"),
            Object(c["g"])("h2", null, "I'm Duy Lam"),
          ],
          -1
        );
      }),
      _ = [g, m, w, y];
    function A(t, e, n, o, r, i) {
      return Object(c["s"])(), Object(c["f"])("div", h, _);
    }
    var P = {};
    n("30ca");
    const C = d()(P, [
      ["render", A],
      ["__scopeId", "data-v-0636f950"],
    ]);
    var M = C,
      k = function (t) {
        return (
          Object(c["v"])("data-v-71a90a1a"), (t = t()), Object(c["t"])(), t
        );
      },
      x = { class: "about" },
      W = k(function () {
        return Object(c["g"])(
          "div",
          { class: "intro" },
          [
            Object(c["g"])("h1", null, "About Me"),
            Object(c["g"])(
              "h2",
              null,
              " I am a full-stack web developer with a passion for creating beautiful, functional, and responsive websites. "
            ),
          ],
          -1
        );
      }),
      S = [W];
    function I(t, e) {
      return Object(c["s"])(), Object(c["f"])("div", x, S);
    }
    n("75d5");
    const N = {},
      H = d()(N, [
        ["render", I],
        ["__scopeId", "data-v-71a90a1a"],
      ]);
    var J = H,
      T = { class: "projects" };
    function z(t, e) {
      return Object(c["s"])(), Object(c["f"])("div", T);
    }
    const D = {},
      L = d()(D, [["render", z]]);
    var q = L,
      B = { class: "contact" };
    function E(t, e) {
      return Object(c["s"])(), Object(c["f"])("div", B);
    }
    const F = {},
      G = d()(F, [["render", E]]);
    var K = G,
      Q = [
        { path: "/", name: "Home", component: M },
        { path: "/about", name: "About", component: J },
        { path: "/projects", name: "Projects", component: q },
        { path: "/contact", name: "Contact", component: K },
      ],
      R = Object(O["a"])({ history: Object(O["b"])("/"), routes: Q }),
      U = R,
      V = n("5502"),
      X = Object(V["a"])({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      });
    Object(c["d"])(p).use(X).use(U).mount("#app");
  },
});
//# sourceMappingURL=app.54064d40.js.map
