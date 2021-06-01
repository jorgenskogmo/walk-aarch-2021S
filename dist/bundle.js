(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __assign = Object.assign;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (result) => {
        return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
      };
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/macy/dist/macy.js
  var require_macy = __commonJS((exports, module) => {
    !function(t, n) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : t.Macy = n();
    }(exports, function() {
      "use strict";
      function t(t2, n2) {
        var e2 = void 0;
        return function() {
          e2 && clearTimeout(e2), e2 = setTimeout(t2, n2);
        };
      }
      function n(t2, n2) {
        for (var e2 = t2.length, r2 = e2, o2 = []; e2--; )
          o2.push(n2(t2[r2 - e2 - 1]));
        return o2;
      }
      function e(t2, n2) {
        var e2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
        if (window.Promise)
          return A(t2, n2, e2);
        t2.recalculate(true, true);
      }
      function r(t2) {
        for (var n2 = t2.options, e2 = t2.responsiveOptions, r2 = t2.keys, o2 = t2.docWidth, i2 = void 0, s2 = 0; s2 < r2.length; s2++) {
          var a2 = parseInt(r2[s2], 10);
          o2 >= a2 && (i2 = n2.breakAt[a2], O(i2, e2));
        }
        return e2;
      }
      function o(t2) {
        for (var n2 = t2.options, e2 = t2.responsiveOptions, r2 = t2.keys, o2 = t2.docWidth, i2 = void 0, s2 = r2.length - 1; s2 >= 0; s2--) {
          var a2 = parseInt(r2[s2], 10);
          o2 <= a2 && (i2 = n2.breakAt[a2], O(i2, e2));
        }
        return e2;
      }
      function i(t2) {
        var n2 = t2.useContainerForBreakpoints ? t2.container.clientWidth : window.innerWidth, e2 = {columns: t2.columns};
        b(t2.margin) ? e2.margin = {x: t2.margin.x, y: t2.margin.y} : e2.margin = {x: t2.margin, y: t2.margin};
        var i2 = Object.keys(t2.breakAt);
        return t2.mobileFirst ? r({options: t2, responsiveOptions: e2, keys: i2, docWidth: n2}) : o({options: t2, responsiveOptions: e2, keys: i2, docWidth: n2});
      }
      function s(t2) {
        return i(t2).columns;
      }
      function a(t2) {
        return i(t2).margin;
      }
      function c(t2) {
        var n2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], e2 = s(t2), r2 = a(t2).x, o2 = 100 / e2;
        if (!n2)
          return o2;
        if (e2 === 1)
          return "100%";
        var i2 = "px";
        if (typeof r2 == "string") {
          var c2 = parseFloat(r2);
          i2 = r2.replace(c2, ""), r2 = c2;
        }
        return r2 = (e2 - 1) * r2 / e2, i2 === "%" ? o2 - r2 + "%" : "calc(" + o2 + "% - " + r2 + i2 + ")";
      }
      function u(t2, n2) {
        var e2 = s(t2.options), r2 = 0, o2 = void 0, i2 = void 0;
        if (++n2 === 1)
          return 0;
        i2 = a(t2.options).x;
        var u2 = "px";
        if (typeof i2 == "string") {
          var l2 = parseFloat(i2, 10);
          u2 = i2.replace(l2, ""), i2 = l2;
        }
        return o2 = (i2 - (e2 - 1) * i2 / e2) * (n2 - 1), r2 += c(t2.options, false) * (n2 - 1), u2 === "%" ? r2 + o2 + "%" : "calc(" + r2 + "% + " + o2 + u2 + ")";
      }
      function l(t2) {
        var n2 = 0, e2 = t2.container, r2 = t2.rows;
        v(r2, function(t3) {
          n2 = t3 > n2 ? t3 : n2;
        }), e2.style.height = n2 + "px";
      }
      function p(t2, n2) {
        var e2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], o2 = s(t2.options), i2 = a(t2.options).y;
        M(t2, o2, e2), v(n2, function(n3) {
          var e3 = 0, o3 = parseInt(n3.offsetHeight, 10);
          isNaN(o3) || (t2.rows.forEach(function(n4, r3) {
            n4 < t2.rows[e3] && (e3 = r3);
          }), n3.style.position = "absolute", n3.style.top = t2.rows[e3] + "px", n3.style.left = "" + t2.cols[e3], t2.rows[e3] += isNaN(o3) ? 0 : o3 + i2, r2 && (n3.dataset.macyComplete = 1));
        }), r2 && (t2.tmpRows = null), l(t2);
      }
      function f(t2, n2) {
        var e2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], o2 = s(t2.options), i2 = a(t2.options).y;
        M(t2, o2, e2), v(n2, function(n3) {
          t2.lastcol === o2 && (t2.lastcol = 0);
          var e3 = C(n3, "height");
          e3 = parseInt(n3.offsetHeight, 10), isNaN(e3) || (n3.style.position = "absolute", n3.style.top = t2.rows[t2.lastcol] + "px", n3.style.left = "" + t2.cols[t2.lastcol], t2.rows[t2.lastcol] += isNaN(e3) ? 0 : e3 + i2, t2.lastcol += 1, r2 && (n3.dataset.macyComplete = 1));
        }), r2 && (t2.tmpRows = null), l(t2);
      }
      var h = function t2(n2, e2) {
        if (!(this instanceof t2))
          return new t2(n2, e2);
        if (n2 && n2.nodeName)
          return n2;
        if (n2 = n2.replace(/^\s*/, "").replace(/\s*$/, ""), e2)
          return this.byCss(n2, e2);
        for (var r2 in this.selectors)
          if (e2 = r2.split("/"), new RegExp(e2[1], e2[2]).test(n2))
            return this.selectors[r2](n2);
        return this.byCss(n2);
      };
      h.prototype.byCss = function(t2, n2) {
        return (n2 || document).querySelectorAll(t2);
      }, h.prototype.selectors = {}, h.prototype.selectors[/^\.[\w\-]+$/] = function(t2) {
        return document.getElementsByClassName(t2.substring(1));
      }, h.prototype.selectors[/^\w+$/] = function(t2) {
        return document.getElementsByTagName(t2);
      }, h.prototype.selectors[/^\#[\w\-]+$/] = function(t2) {
        return document.getElementById(t2.substring(1));
      };
      var v = function(t2, n2) {
        for (var e2 = t2.length, r2 = e2; e2--; )
          n2(t2[r2 - e2 - 1]);
      }, m = function() {
        var t2 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        this.running = false, this.events = [], this.add(t2);
      };
      m.prototype.run = function() {
        if (!this.running && this.events.length > 0) {
          var t2 = this.events.shift();
          this.running = true, t2(), this.running = false, this.run();
        }
      }, m.prototype.add = function() {
        var t2 = this, n2 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        return !!n2 && (Array.isArray(n2) ? v(n2, function(n3) {
          return t2.add(n3);
        }) : (this.events.push(n2), void this.run()));
      }, m.prototype.clear = function() {
        this.events = [];
      };
      var d = function(t2) {
        var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return this.instance = t2, this.data = n2, this;
      }, y = function() {
        var t2 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        this.events = {}, this.instance = t2;
      };
      y.prototype.on = function() {
        var t2 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        return !(!t2 || !n2) && (Array.isArray(this.events[t2]) || (this.events[t2] = []), this.events[t2].push(n2));
      }, y.prototype.emit = function() {
        var t2 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!t2 || !Array.isArray(this.events[t2]))
          return false;
        var e2 = new d(this.instance, n2);
        v(this.events[t2], function(t3) {
          return t3(e2);
        });
      };
      var g = function(t2) {
        return !("naturalHeight" in t2 && t2.naturalHeight + t2.naturalWidth === 0) || t2.width + t2.height !== 0;
      }, E = function(t2, n2) {
        var e2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
        return new Promise(function(t3, e3) {
          if (n2.complete)
            return g(n2) ? t3(n2) : e3(n2);
          n2.addEventListener("load", function() {
            return g(n2) ? t3(n2) : e3(n2);
          }), n2.addEventListener("error", function() {
            return e3(n2);
          });
        }).then(function(n3) {
          e2 && t2.emit(t2.constants.EVENT_IMAGE_LOAD, {img: n3});
        }).catch(function(n3) {
          return t2.emit(t2.constants.EVENT_IMAGE_ERROR, {img: n3});
        });
      }, w = function(t2, e2) {
        var r2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
        return n(e2, function(n2) {
          return E(t2, n2, r2);
        });
      }, A = function(t2, n2) {
        var e2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
        return Promise.all(w(t2, n2, e2)).then(function() {
          t2.emit(t2.constants.EVENT_IMAGE_COMPLETE);
        });
      }, I = function(n2) {
        return t(function() {
          n2.emit(n2.constants.EVENT_RESIZE), n2.queue.add(function() {
            return n2.recalculate(true, true);
          });
        }, 100);
      }, N = function(t2) {
        if (t2.container = h(t2.options.container), t2.container instanceof h || !t2.container)
          return !!t2.options.debug && console.error("Error: Container not found");
        t2.container.length && (t2.container = t2.container[0]), t2.options.container = t2.container, t2.container.style.position = "relative";
      }, T = function(t2) {
        t2.queue = new m(), t2.events = new y(t2), t2.rows = [], t2.resizer = I(t2);
      }, L = function(t2) {
        var n2 = h("img", t2.container);
        window.addEventListener("resize", t2.resizer), t2.on(t2.constants.EVENT_IMAGE_LOAD, function() {
          return t2.recalculate(false, false);
        }), t2.on(t2.constants.EVENT_IMAGE_COMPLETE, function() {
          return t2.recalculate(true, true);
        }), t2.options.useOwnImageLoader || e(t2, n2, !t2.options.waitForImages), t2.emit(t2.constants.EVENT_INITIALIZED);
      }, _ = function(t2) {
        N(t2), T(t2), L(t2);
      }, b = function(t2) {
        return t2 === Object(t2) && Object.prototype.toString.call(t2) !== "[object Array]";
      }, O = function(t2, n2) {
        b(t2) || (n2.columns = t2), b(t2) && t2.columns && (n2.columns = t2.columns), b(t2) && t2.margin && !b(t2.margin) && (n2.margin = {x: t2.margin, y: t2.margin}), b(t2) && t2.margin && b(t2.margin) && t2.margin.x && (n2.margin.x = t2.margin.x), b(t2) && t2.margin && b(t2.margin) && t2.margin.y && (n2.margin.y = t2.margin.y);
      }, C = function(t2, n2) {
        return window.getComputedStyle(t2, null).getPropertyValue(n2);
      }, M = function(t2, n2) {
        var e2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
        if (t2.lastcol || (t2.lastcol = 0), t2.rows.length < 1 && (e2 = true), e2) {
          t2.rows = [], t2.cols = [], t2.lastcol = 0;
          for (var r2 = n2 - 1; r2 >= 0; r2--)
            t2.rows[r2] = 0, t2.cols[r2] = u(t2, r2);
        } else if (t2.tmpRows) {
          t2.rows = [];
          for (var r2 = n2 - 1; r2 >= 0; r2--)
            t2.rows[r2] = t2.tmpRows[r2];
        } else {
          t2.tmpRows = [];
          for (var r2 = n2 - 1; r2 >= 0; r2--)
            t2.tmpRows[r2] = t2.rows[r2];
        }
      }, V = function(t2) {
        var n2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], e2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], r2 = n2 ? t2.container.children : h(':scope > *:not([data-macy-complete="1"])', t2.container);
        r2 = Array.from(r2).filter(function(t3) {
          return t3.offsetParent !== null;
        });
        var o2 = c(t2.options);
        return v(r2, function(t3) {
          n2 && (t3.dataset.macyComplete = 0), t3.style.width = o2;
        }), t2.options.trueOrder ? (f(t2, r2, n2, e2), t2.emit(t2.constants.EVENT_RECALCULATED)) : (p(t2, r2, n2, e2), t2.emit(t2.constants.EVENT_RECALCULATED));
      }, R = function() {
        return !!window.Promise;
      }, x = Object.assign || function(t2) {
        for (var n2 = 1; n2 < arguments.length; n2++) {
          var e2 = arguments[n2];
          for (var r2 in e2)
            Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
        }
        return t2;
      };
      Array.from || (Array.from = function(t2) {
        for (var n2 = 0, e2 = []; n2 < t2.length; )
          e2.push(t2[n2++]);
        return e2;
      });
      var k = {columns: 4, margin: 2, trueOrder: false, waitForImages: false, useImageLoader: true, breakAt: {}, useOwnImageLoader: false, onInit: false, cancelLegacy: false, useContainerForBreakpoints: false};
      !function() {
        try {
          document.createElement("a").querySelector(":scope *");
        } catch (t2) {
          !function() {
            function t3(t4) {
              return function(e3) {
                if (e3 && n2.test(e3)) {
                  var r3 = this.getAttribute("id");
                  r3 || (this.id = "q" + Math.floor(9e6 * Math.random()) + 1e6), arguments[0] = e3.replace(n2, "#" + this.id);
                  var o2 = t4.apply(this, arguments);
                  return r3 === null ? this.removeAttribute("id") : r3 || (this.id = r3), o2;
                }
                return t4.apply(this, arguments);
              };
            }
            var n2 = /:scope\b/gi, e2 = t3(Element.prototype.querySelector);
            Element.prototype.querySelector = function(t4) {
              return e2.apply(this, arguments);
            };
            var r2 = t3(Element.prototype.querySelectorAll);
            Element.prototype.querySelectorAll = function(t4) {
              return r2.apply(this, arguments);
            };
          }();
        }
      }();
      var q = function t2() {
        var n2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k;
        if (!(this instanceof t2))
          return new t2(n2);
        this.options = {}, x(this.options, k, n2), this.options.cancelLegacy && !R() || _(this);
      };
      return q.init = function(t2) {
        return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "), new q(t2);
      }, q.prototype.recalculateOnImageLoad = function() {
        var t2 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        return e(this, h("img", this.container), !t2);
      }, q.prototype.runOnImageLoad = function(t2) {
        var n2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r2 = h("img", this.container);
        return this.on(this.constants.EVENT_IMAGE_COMPLETE, t2), n2 && this.on(this.constants.EVENT_IMAGE_LOAD, t2), e(this, r2, n2);
      }, q.prototype.recalculate = function() {
        var t2 = this, n2 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
        return e2 && this.queue.clear(), this.queue.add(function() {
          return V(t2, n2, e2);
        });
      }, q.prototype.remove = function() {
        window.removeEventListener("resize", this.resizer), v(this.container.children, function(t2) {
          t2.removeAttribute("data-macy-complete"), t2.removeAttribute("style");
        }), this.container.removeAttribute("style");
      }, q.prototype.reInit = function() {
        this.recalculate(true, true), this.emit(this.constants.EVENT_INITIALIZED), window.addEventListener("resize", this.resizer), this.container.style.position = "relative";
      }, q.prototype.on = function(t2, n2) {
        this.events.on(t2, n2);
      }, q.prototype.emit = function(t2, n2) {
        this.events.emit(t2, n2);
      }, q.constants = {EVENT_INITIALIZED: "macy.initialized", EVENT_RECALCULATED: "macy.recalculated", EVENT_IMAGE_LOAD: "macy.image.load", EVENT_IMAGE_ERROR: "macy.image.error", EVENT_IMAGE_COMPLETE: "macy.images.complete", EVENT_RESIZE: "macy.resize"}, q.prototype.constants = q.constants, q;
    });
  });

  // tools/students.json
  var students_default = [
    {
      id: "17001",
      firstname: "Nikolai",
      surname: "Thyregaard\xA0Nielsen",
      title: "TOTAL LANDSCAPE - Case Study Herning",
      email: "nikolaithyregaard@live.dk",
      mobile: "28308878",
      studio: "1A",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17002",
      firstname: "Rasmus Sebastian",
      surname: "Lassen",
      title: "Radikal transformation af Rindsholm M\xF8lle",
      email: "4004068@stud.aarch.dk",
      mobile: "51891364",
      studio: "1C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17003",
      firstname: "Asbj\xF8rn",
      surname: "Bratsbjerg",
      title: "Danmarks nye kystlinje",
      email: "asbjorn.bratsbjerg@gmail.com",
      mobile: "26354571",
      studio: "1C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17004",
      firstname: "Kasper",
      surname: "Eithz",
      title: "Klatrecenter Thy \u2013 Transformation af en nedlagt Falck-station i Thisted.",
      email: "kasper@eithz.dk",
      mobile: "22736462",
      studio: "1C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17005",
      firstname: "Poul",
      surname: "St\xF8ttrup Larsen",
      title: "Naturh\xF8jskolen Mols Bjerge - Natur og kulturhistorie som ramme for f\xE6llesskabet",
      email: "poul.stoettrup@gmail.com",
      mobile: "61308094",
      studio: "2C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17006",
      firstname: "Hafd\xEDs Anna",
      surname: "Bragad\xF3ttir",
      title: "Where light and darkness mingle",
      email: "hafdis.bragadottir@hotmail.com",
      mobile: "35 48216100",
      studio: "2B",
      theme: "Landscapes in Transition",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17007",
      firstname: "Wilhelm",
      surname: "Reymert",
      title: "Der By M\xF8ter Vann \u2013 Transformasjon av en Urban Lystb\xE5thavn",
      email: "wilhelm.reymert@gmail.com",
      mobile: "47 94977792",
      studio: "2A",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17008",
      firstname: "Annika",
      surname: "Lyon",
      title: "The Library of Things: Enriching Copenhagen\u2019s Circular Economy",
      email: "annika.lyon96@gmail.com",
      mobile: "91530996",
      studio: "3",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17009",
      firstname: "Sizhe",
      surname: "Wang",
      title: "Drawing Investigations - on how drawings become a spontaneous, conscious procedure for constructing architecture.",
      email: "wangsizhe19950806@163.com",
      mobile: "22647861",
      studio: "2B",
      theme: "Extreme Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17010",
      firstname: "Kristina",
      surname: "N\xF8rgaard",
      title: "Havet og \xF8erne - en transformation og fornyelse af F\xF8roya Sj\xF3savn",
      email: "kristina@noergaard.dk",
      mobile: "71906710",
      studio: "1C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17011",
      firstname: "Lucia",
      surname: "Pells",
      title: "An Idle Place: Sympoietic Presences in Gr\xE5sten Nor",
      email: "pells.luciam@gmail.com",
      mobile: "50237283",
      studio: "2A",
      theme: "Landscapes in Transition",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17012",
      firstname: "Amanda Elvira Fleischer",
      surname: "Vinther",
      title: "St\xF8berihallerne - Kulturens hus i Pr\xE6st\xF8",
      email: "amandaefvinther@gmail.com",
      mobile: "60467607",
      studio: "1B",
      theme: "Cultural Heritage",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17013",
      firstname: "Jacob Hammer",
      surname: "Thuesen",
      title: "The Unsighted Experience: An Acoustic Integration In Architectural Design Towards A Beneficial Aural Environment",
      email: "jacob.h.thuesen@gmail.com",
      mobile: "21343264",
      studio: "2B",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17014",
      firstname: "William",
      surname: "Reeve",
      title: "Circular Co-housing: How could circular principles be utilised to create & sustain bof\xE6llesskaber?",
      email: "willsreeve@outlook.com",
      mobile: "52827783",
      studio: "2C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17015",
      firstname: "Line",
      surname: "\xD8stergaard Poulsen",
      title: "Post-pandemic placemaking",
      email: "line_oep@live.dk",
      mobile: "20886149",
      studio: "3",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17016",
      firstname: "Hedvig",
      surname: "Holtmann",
      title: "Nurtured by Nature",
      email: "hedvig.holtmann@hotmail.com",
      mobile: "47 97473080",
      studio: "3",
      theme: "Extreme Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17017",
      firstname: "Maria",
      surname: "\xD8rris",
      title: "Vildrenens Forsvundne Territorier - En strategi for bevaring af h\xF8jfjeldets v\xE6rdier",
      email: "maria.oerris@hotmail.com",
      mobile: "20439271",
      studio: "1A",
      theme: "Landscapes in Transition",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17018",
      firstname: "Melissa",
      surname: "Bacher",
      title: "SOCIALLY INCLUSIVE AGEING - THE THRESHOLD BETWEEN HOUSING AND PUBLIC SPACE",
      email: "m.bacher@hotmail.com",
      mobile: "43 6601265079",
      studio: "3",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17019",
      firstname: "Ingilvd",
      surname: "Hansen",
      title: "The City as a Shared Resource - Investigations and Strategies for Aarhus as a Commons",
      email: "ingvild.h93@hotmail.com",
      mobile: "60242130",
      studio: "1A",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17020",
      firstname: "Louise Kring",
      surname: "Larsen",
      title: "Sidst jeg s\xE5 dig, var du v\xE6k - syv\xE5rss\xF8ernes foranderlige landskab",
      email: "louisekringlarsen@hotmail.com",
      mobile: "28888323",
      studio: "1A",
      theme: "Landscapes in Transition",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17021",
      firstname: "Philip",
      surname: "B. Stiernstr\xF6m",
      title: "Klippan: Merging narratives in Gothenburg harbour",
      email: "philip.b.stiernstrom@gmail.com",
      mobile: "42910282",
      studio: "2C",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17022",
      firstname: "Katarina",
      surname: "Buhl",
      title: "Designing For The Safe City",
      email: "Katarinab@live.dk",
      mobile: "60216461",
      studio: "3",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17023",
      firstname: "Odin",
      surname: "Olesen",
      title: "See and Be Scene",
      email: "odin.olesen@hotmail.com",
      mobile: "27641617",
      studio: "3",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17024",
      firstname: "Nick",
      surname: "Cole",
      title: "Intercultural Museum Copenhagen",
      email: "mail@nickcole.dk",
      mobile: "28308081",
      studio: "3",
      theme: "Cultural Heritage",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17025",
      firstname: "Nicola",
      surname: "Traise",
      title: "Terra Incognita: Exploring Inland Alternatives to Coastal Centralisation",
      email: "nicola.traise@hotmail.com",
      mobile: "91889827",
      studio: "1A",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17026",
      firstname: "Lotte Vittrup",
      surname: "Fredensborg",
      title: "The Sanctuary - For future Growth",
      email: "lotte_f92@hotmail.com",
      mobile: "60167089",
      studio: "3",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17027",
      firstname: "Sofia Smith",
      surname: "S\xF8rensen",
      title: "N\xE5r boligens rammer ikke kan rumme alle. Behov for pleje og forst\xE5else af begrebet hjem - En nyfortolkning.",
      email: "sssofia@live.dk",
      mobile: "20700975",
      studio: "2C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17028",
      firstname: "Vilde",
      surname: "Livsdatter",
      title: "Food as a social catalyst in an urban environment (working title)",
      email: "vildelivsdatter@live.com",
      mobile: "53830223",
      studio: "2C",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17029",
      firstname: "Janne N\xF8rreskov",
      surname: "Burhardt",
      title: "Et kulturmilj\xF8 i Aarhus",
      email: "fnumfnum@gmail.com",
      mobile: "25467524",
      studio: "1B",
      theme: "Cultural Heritage",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17030",
      firstname: "Anna",
      surname: "Plawecka",
      title: "In a loop of circularity: Building the future from the elements of the past. A space for inclusion, sustainability, and diversity in Aarhus Sydhavn.",
      email: "annplawecka@gmail.com",
      mobile: "91197976",
      studio: "1A",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17031",
      firstname: "June Elisabeth",
      surname: "Vestg\xE5rd",
      title: "Det r\xF8de slott - fra teglproduksjon til urbant grendehus langs Alnaelva",
      email: "junevestgard@gmail.com",
      mobile: "42658222",
      studio: "1C",
      theme: "Cultural Heritage",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17032",
      firstname: "Magnus Dahl",
      surname: "Nicolajsen",
      title: "Longing for a stranger",
      email: "futte2000@msn.com",
      mobile: "50333337",
      studio: "2D",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17033",
      firstname: "Jo Haugstveit",
      surname: "Rusten",
      title: "Rethinking Leisure: In Light of Pandemics and Climatic Challenges",
      email: "jo.h.rusten@gmail.com",
      mobile: "42742453",
      studio: "2A",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17034",
      firstname: "Emma Sophie Stein",
      surname: "Larsen",
      title: "Investigating Play & Movement in Full-scale at Eskelunden, Aarhus",
      email: "emma_sophie@hotmail.com",
      mobile: "27622151",
      studio: "2D",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17035",
      firstname: "Erik Buur",
      surname: "Bruntse",
      title: "Rathlousdal Gods",
      email: "4004386@stud.aarch.dk",
      mobile: "42916704",
      studio: "1B",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17036",
      firstname: "Rasmus Svane",
      surname: "H\xF8j",
      title: "NOAH, YOU'RE GONNA NEED A BIGGER BOAT! Ideas for a speculative future at the cruise port of Copenhagen",
      email: "rasmus.hoj@gmail.com",
      mobile: "42728669",
      studio: "2A",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17037",
      firstname: "Emma",
      surname: "Rish\xF8j Holm",
      title: "Sharing Suburbia",
      email: "emmahrh@hotmail.com",
      mobile: "28250244",
      studio: "3",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17038",
      firstname: "Jacob",
      surname: "Iuel Hersoug",
      title: "Vitalisering, reservering og fire tennisbaner - En studie av balansen mellom storbyens markedsrettede utvikling og verdien av \xE5 ivareta byens \xE5pne, gr\xF8nne \xF8yer.",
      email: "iuelhersoug@gmail.com",
      mobile: "25568145",
      studio: "2C",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17039",
      firstname: "Anders Christian Vandvik",
      surname: "Vedeler",
      title: "Fra kontor til hjem - En radikal transformasjon av KFUM-huset.",
      email: "anders.vedeler@gmail.com",
      mobile: "22880480",
      studio: "1C",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17040",
      firstname: "Hans",
      surname: "Nielsen",
      title: "The Elfdalian House - A Cultural Centre for Language",
      email: "hanssnielsen@hotmail.com",
      mobile: "27621026",
      studio: "3",
      theme: "Cultural Heritage",
      slug: "",
      kommentarak: "gruppe"
    },
    {
      id: "17041",
      firstname: "Johannes",
      surname: "Lundahl",
      title: "The Elfdalian House - A Cultural Centre for Language",
      email: "johanneslundahl@gmail.com",
      mobile: "51959799",
      studio: "3",
      theme: "Cultural Heritage",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17042",
      firstname: "Emma",
      surname: "Skelander",
      title: "Circularity",
      email: "emma.skelander@hotmail.com",
      mobile: "46 762728104",
      studio: "3",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17043",
      firstname: "Hanna",
      surname: "H\xF8jgaard Molden",
      title: "Thinking hands Working heads - A new gymnasium in the centre of Oslo",
      email: "moldenhanna@gmail.com",
      mobile: "22414803",
      studio: "2A",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17044",
      firstname: "Emilie",
      surname: "Enn\xE9 Lykkegaard",
      title: "Alice's Wonderland",
      email: "emilie.enne.lykkegaard@gmail.com",
      mobile: "53547510",
      studio: "3",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17045",
      firstname: "Noah",
      surname: "Vagle",
      title: "Akersveien 18. Arbeidstittel # 01. En restaurering.",
      email: "noahvagle@gmail.com",
      mobile: "47 41333191",
      studio: "1B",
      theme: "Cultural Heritage",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17046",
      firstname: "Hugo",
      surname: "Shackleton",
      title: "Polar Embassy",
      email: "shackletonh@gmail.com",
      mobile: "42604127",
      studio: "3",
      theme: "Landscapes in Transition",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17047",
      firstname: "Pernille",
      surname: "B\xF8gh Hansen",
      title: "Turisme i et industrilevn - transformation af Hoed Kalkv\xE6rk",
      email: "pernilleboeghh@gmail.com",
      mobile: "40789178",
      studio: "1C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17048",
      firstname: "\xC5smund",
      surname: "Fjellstad",
      title: "Lokstallen - Radikal transformasjon av et lokomotivverksted i Nordens Pompeii",
      email: "4004013@stud.aarch.dk",
      mobile: "42635333",
      studio: "1C",
      theme: "Cultural Heritage",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17050",
      firstname: "Morten",
      surname: "Hagemann Nielsen",
      title: "Et modul\xE6rt sommerhus - En unders\xF8gelse af bindingsv\xE6rkshusets principper i moderne kontekst",
      email: "mhagemannn@me.com",
      mobile: "25345382",
      studio: "2B",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17051",
      firstname: "Asger",
      surname: "Brix Pedersen",
      title: "Pier 3 quarter - a resilient biotope",
      email: "asger.b.p@gmail.com",
      mobile: "27586150",
      studio: "3",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17052",
      firstname: "Nikolaj",
      surname: "Heede Noe",
      title: "TURN ON YOUR BASEMENT, PLEASE",
      email: "nikolajnoe@hotmail.com",
      mobile: "30913730",
      studio: "2A",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17053",
      firstname: "Signe",
      surname: "Ravnholt",
      title: "Fra s\xE5ret landskab til s\xE6rligt sted: Landskabelige strategier for generationsforureningerne p\xE5 Harbo\xF8re Tange",
      email: "ravnholtsigne@gmail.com",
      mobile: "26737139",
      studio: "1A",
      theme: "Landscapes in Transition",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17054",
      firstname: "Peter Allan Klode",
      surname: "Gustafson",
      title: "Earth, Power and Building: Inhabiting terrain by architectrual degrowth",
      email: "pakg1992@gmail.com",
      mobile: "30717294",
      studio: "2A",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17055",
      firstname: "Anja Kristina",
      surname: "Koldby Jensen",
      title: "Den Kreative Efterskole - en skoloe med plads til fordybelse!",
      email: "anjakoldby@hotmail.com",
      mobile: "22716378",
      studio: "2C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17056",
      firstname: "Lars Erik",
      surname: "Elseth",
      title: "Instructed Matter A Material-Instructed Topology For Compact Urban Living.",
      email: "larserikelseth@gmail.com",
      mobile: "47 96911941",
      studio: "2B",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17057",
      firstname: "Lars",
      surname: "Brammer",
      title: "Tobaksfabrikken i Holstebro - Radikal bygningstransformation af produktionsindustri i midtbyen",
      email: "larsbrammerjensen@gmail.com",
      mobile: "22139120",
      studio: "1C",
      theme: "Urban Development",
      slug: "",
      kommentarak: "gruppe"
    },
    {
      id: "17049",
      firstname: "Andreas H.",
      surname: "Malsk\xE6r",
      title: "Tobaksfabrikken i Holstebro - Radikal bygningstransformation af produktionsindustri i midtbyen",
      email: "andreas@malskaer.dk",
      mobile: "52191695",
      studio: "1C",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17058",
      firstname: "Ulrikke",
      surname: "Eliassen",
      title: "What's that got to do with the price of Fish\xAE?",
      email: "ulrikke.eliassen@gmail.com",
      mobile: "26272192",
      studio: "2A",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17059",
      firstname: "Christian Vang",
      surname: "Madsen",
      title: "Accessing Nyholm - The Future Potential of Copenhagen's Last Fortification",
      email: "christian.vang.madsen@gmail.com",
      mobile: "29250888",
      studio: "2A",
      theme: "Urban Development",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17060",
      firstname: "Sara",
      surname: "Braae",
      title: "En Forenet Plejesektor",
      email: "sarabraae@hotmail.com",
      mobile: "26237227",
      studio: "2C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17061",
      firstname: "Tim",
      surname: "Greentree",
      title: "(Perma)Culture",
      email: "tim_greentree@icloud.com",
      mobile: "61 429940854",
      studio: "1A",
      theme: "Landscapes in Transition",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17062",
      firstname: "L\xE6rke",
      surname: "Landsverk",
      title: "Den gode afslutning - En nyfortolkning af \xE6ldrehjem",
      email: "lattejensen@hotmail.com",
      mobile: "29283505",
      studio: "2C",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17063",
      firstname: "Anne S\xF8by",
      surname: "Nielsen",
      title: "Architecture for Contested Sites: the Case of Grindsted",
      email: "annesoeby@gmail.com",
      mobile: "60290349",
      studio: "2A",
      theme: "Landscapes in Transition",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17064",
      firstname: "Pernille",
      surname: "Dambo",
      title: "From Linear to Circular - a rethinking of the waste station",
      email: "Pernille_Dambo@hotmail.com",
      mobile: "23722382",
      studio: "2A",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17065",
      firstname: "Lisa Christine",
      surname: "Sippli",
      title: "ZECHE GNEISENAU",
      email: "lisa.sippli@gmail.com",
      mobile: "53806080",
      studio: "1B",
      theme: "Cultural Heritage",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17066",
      firstname: "Malene Thornemann",
      surname: "Johansen",
      title: "Formet af Vand - Et center for bev\xE6gelse",
      email: "malenejohansen1@hotmail.com",
      mobile: "28914214",
      studio: "2A",
      theme: "Building Culture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17067",
      firstname: "Simon Egemose",
      surname: "Knudsen Kirk",
      title: "Revealing the multifarious nature around Flynders\xF8",
      email: "simonegemose@gmail.com",
      mobile: "31157244",
      studio: "2D",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: "gruppe"
    },
    {
      id: "17068",
      firstname: "Thor Hedegaard",
      surname: "Nielsen Bested",
      title: "Revealing the multifarious nature around Flynders\xF8",
      email: "thor.bested@outlook.dk",
      mobile: "40435633",
      studio: "2D",
      theme: "Sustainable Architecture",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17069",
      firstname: "Michelle",
      surname: "Rosenvinge",
      title: "Perception in the Absence of Sight : Rehabilitation for the Visually Impaired",
      email: "m.rosenvinge@icloud.com",
      mobile: "29277008",
      studio: "2A",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17070",
      firstname: "Thomas Rants\xE9n",
      surname: "H\xF8gdal",
      title: "Et flere-familie f\xE6llesskab",
      email: "thomas.hoegdal@hotmail.com",
      mobile: "24454206",
      studio: "2C",
      theme: "New Commons",
      slug: "",
      kommentarak: ""
    },
    {
      id: "17071",
      firstname: "Chris Jongberg",
      surname: "Johansen",
      title: "Ask Cohousing - A part of the village",
      email: "chrisjongberg@live.dk",
      mobile: "31343868",
      studio: "2C",
      theme: "",
      slug: "",
      kommentarak: "HAR IKKE UPLOADET BILLEDE - STANDIN!"
    },
    {
      id: "17072",
      firstname: "Sofie Dalsgaard",
      surname: "Jensen",
      title: "N\xE5r borgerne driver v\xE6rket / En selvbygget bydel i \xC5rhus",
      email: "4003467@stud.aarch.dk",
      mobile: "",
      studio: "1A",
      theme: "",
      slug: "",
      kommentarak: "HAR IKKE UDFYLDT SKEMAET mangler privat nummer, mail og theme"
    }
  ];

  // src/menu.js
  var menudata = [
    ["Architects", "architects", null],
    [
      "Categories",
      "categories",
      [
        ["New Commons", "cat:new-commons", null],
        ["Building Culture", "cat:building-culture", null],
        ["Urban Development", "cat:urban-development", null],
        ["Sustainable Architecture", "cat:sustainable-architecture", null],
        ["Landscapes in Transition", "cat:landscapes-in-transition", null],
        ["Cultural Heritage", "cat:cultural-heritage", null],
        ["Extreme Architecture", "cat:extreme-architecture", null]
      ]
    ],
    ["Search", "search", null],
    [
      "About",
      "about",
      [
        ["Rector\u2019s Speech", "page:rectors-speech", null],
        ["Curators voice", "page:curators-voice", null],
        ["Prizes", "page:prizes", null],
        ["Credits", "page:credits", null],
        ["Contact", "page:contact", null]
      ]
    ]
  ];
  var buildMenu = (selector) => {
    console.log("buildMenu selector", selector);
    let html = "";
    menudata.forEach((m) => {
      if (m[2] != null) {
        html += `<div data-menu-action='toggle' data-menu-key='${m[1]}'>${m[0]}</div><div class="grpc" id='${m[1]}'>`;
        m[2].forEach((sm) => {
          html += `<div class='sml' data-menu-action='go' data-menu-key='${sm[1]}'><span>${sm[0]}</span></div>`;
        });
        html += `</div>`;
      } else {
        html += `<div data-menu-action='go' data-menu-key='${m[1]}'>${m[0]}</div>`;
      }
    });
    document.querySelector(selector).innerHTML = html;
    document.querySelectorAll(selector + ` [data-menu-action="go"]`).forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelectorAll(selector + " .selected").forEach((el2) => el2.classList.remove("selected"));
        el.classList.add("selected");
        if (!el.classList.contains("sml")) {
          document.querySelectorAll(selector + " .grpc.open").forEach((el2) => el2.classList.remove("open"));
        }
        window.location.hash = `#${el.getAttribute("data-menu-key")}`;
      });
    });
    document.querySelectorAll(selector + ` [data-menu-action="toggle"]`).forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelectorAll(selector + " .selected").forEach((el2) => el2.classList.remove("selected"));
        el.classList.add("selected");
        document.querySelectorAll(selector + " .grpc.open").forEach((el2) => el2.classList.remove("open"));
        document.querySelector(`#${el.getAttribute("data-menu-key")}`).classList.add("open");
      });
    });
  };

  // src/layout-offgrid-bricklayer.js
  var macy = __toModule(require_macy());
  var masonry = null;
  var renderMasonry = (container) => __async(void 0, null, function* () {
    var list = document.querySelector(container), i;
    for (i = list.children.length; i >= 0; i--) {
      list.appendChild(list.children[Math.random() * i | 0]);
    }
    let w = Math.floor(document.querySelector(container).getBoundingClientRect().width / 100);
    masonry = yield new macy.default({
      container,
      useContainerForBreakpoints: true,
      debug: true,
      columns: w
    });
    console.log("M done", w);
    document.querySelectorAll(".projects .project").forEach((el) => {
      el.style.width = "100px";
    });
  });
  var removeMasonry = () => {
    if (masonry) {
      masonry.remove();
      document.querySelectorAll(".projects .project").forEach((el) => {
        el.style.height = el.getAttribute("data-height");
      });
    }
  };

  // src/index.js
  console.log("students", students_default);
  var DATA = students_default.map((s) => {
    let t = s.theme.toLowerCase().replace(/ /g, "-");
    return __assign(__assign({}, s), {theme: t});
  });
  console.log("students DATA", DATA);
  var MODE = {onoff: true, gridline: false};
  var PROJECTS_ELM = document.querySelector(".projects");
  var MOUSE_PRESSED = false;
  var onHashChanged = () => {
    const h = window.location.hash;
    console.log("onHashChanged", h);
    render_projects();
  };
  var setup = () => {
    buildMenu(".menu");
    render_toggle();
    window.addEventListener("hashchange", onHashChanged);
    window.addEventListener("mousedown", () => {
      MOUSE_PRESSED = true;
    }, false);
    window.addEventListener("mouseup", () => {
      MOUSE_PRESSED = false;
    }, false);
    document.querySelector(".modetoggle > .onoff").addEventListener("click", (e) => {
      MODE.onoff = !MODE.onoff;
      render_toggle();
      render();
    });
    document.querySelector(".modetoggle > .gridline").addEventListener("click", (e) => {
      MODE.gridline = !MODE.gridline;
      render_toggle();
      render();
    });
    render_projects();
    update();
  };
  var render_projects = () => {
    let themefilter = window.location.hash.indexOf("#cat:") === 0 ? window.location.hash.split("#cat:")[1] : null;
    let html = "";
    DATA.forEach((s, i) => {
      if (themefilter && s.theme != themefilter) {
      } else {
        html += `<div class="project" style="width:200px;">
          <img class="project-image" src="images/${s.id}.jpg" />
          <div class="project-meta">${s.firstname} ${s.surname}<br /><br />
          ${s.title}<br />
          [${i},${s.id}, ${s.theme}]</div>
        </div>`;
      }
    });
    PROJECTS_ELM.innerHTML = html;
  };
  var render_toggle = () => {
    document.querySelector(".modetoggle > span.onoff").innerHTML = MODE.onoff ? "ON" : "OFF";
    document.querySelector(".modetoggle > span.gridline").innerHTML = MODE.gridline ? "GRID" : "LINE";
  };
  var render = () => {
    removeMasonry();
    let className = "";
    if (MODE.onoff === false && MODE.gridline === false) {
      className = "offline";
    }
    if (MODE.onoff === true && MODE.gridline === false) {
      className = "online";
    }
    if (MODE.onoff === true && MODE.gridline === true) {
      className = "ongrid";
    }
    if (MODE.onoff === false && MODE.gridline === true) {
      className = "offgrid";
      renderMasonry(".projects");
    }
    console.log("mode:", className);
    document.querySelector(".copy > h2").innerHTML = className;
    PROJECTS_ELM.classList = "projects " + className;
  };
  var update = () => {
    if (!MOUSE_PRESSED && MODE.onoff && !MODE.gridline) {
      PROJECTS_ELM.scrollBy(1, 0);
    }
    requestAnimationFrame(update);
  };
  setup();
  render();
})();
