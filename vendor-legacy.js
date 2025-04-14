;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function () {
        var __getOwnPropNames = Object.getOwnPropertyNames;
        var __commonJS = (cb, mod) => function __require() {
          return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
          }).exports, mod), mod.exports;
        };
        var require_vendor = __commonJS({
          "vendor.js"(exports, module) {
            /*! jQuery UI - v1.12.1 - 2018-05-24
             * https://jqueryui.com
             * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/mouse.js, widgets/slider.js, widgets/tooltip.js
             * Copyright jQuery Foundation and other contributors; Licensed MIT */
            (function (t) {
              "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
            })(function (t) {
              function e(t2) {
                for (var e2 = t2.css("visibility"); "inherit" === e2;) t2 = t2.parent(), e2 = t2.css("visibility");
                return "hidden" !== e2;
              }
              t.ui = t.ui || {}, t.ui.version = "1.12.1";
              var i = 0,
                s = Array.prototype.slice;
              t.cleanData = /* @__PURE__ */function (e2) {
                return function (i2) {
                  var s2, n2, o;
                  for (o = 0; null != (n2 = i2[o]); o++) try {
                    s2 = t._data(n2, "events"), s2 && s2.remove && t(n2).triggerHandler("remove");
                  } catch (a) {}
                  e2(i2);
                };
              }(t.cleanData), t.widget = function (e2, i2, s2) {
                var n2,
                  o,
                  a,
                  r = {},
                  l = e2.split(".")[0];
                e2 = e2.split(".")[1];
                var h2 = l + "-" + e2;
                return s2 || (s2 = i2, i2 = t.Widget), t.isArray(s2) && (s2 = t.extend.apply(null, [{}].concat(s2))), t.expr[":"][h2.toLowerCase()] = function (e3) {
                  return !!t.data(e3, h2);
                }, t[l] = t[l] || {}, n2 = t[l][e2], o = t[l][e2] = function (t2, e3) {
                  return this._createWidget ? (arguments.length && this._createWidget(t2, e3), void 0) : new o(t2, e3);
                }, t.extend(o, n2, {
                  version: s2.version,
                  _proto: t.extend({}, s2),
                  _childConstructors: []
                }), a = new i2(), a.options = t.widget.extend({}, a.options), t.each(s2, function (e3, s3) {
                  return t.isFunction(s3) ? (r[e3] = /* @__PURE__ */function () {
                    function t2() {
                      return i2.prototype[e3].apply(this, arguments);
                    }
                    function n3(t3) {
                      return i2.prototype[e3].apply(this, t3);
                    }
                    return function () {
                      var e4,
                        i3 = this._super,
                        o2 = this._superApply;
                      return this._super = t2, this._superApply = n3, e4 = s3.apply(this, arguments), this._super = i3, this._superApply = o2, e4;
                    };
                  }(), void 0) : (r[e3] = s3, void 0);
                }), o.prototype = t.widget.extend(a, {
                  widgetEventPrefix: n2 ? a.widgetEventPrefix || e2 : e2
                }, r, {
                  constructor: o,
                  namespace: l,
                  widgetName: e2,
                  widgetFullName: h2
                }), n2 ? (t.each(n2._childConstructors, function (e3, i3) {
                  var s3 = i3.prototype;
                  t.widget(s3.namespace + "." + s3.widgetName, o, i3._proto);
                }), delete n2._childConstructors) : i2._childConstructors.push(o), t.widget.bridge(e2, o), o;
              }, t.widget.extend = function (e2) {
                for (var i2, n2, o = s.call(arguments, 1), a = 0, r = o.length; r > a; a++) for (i2 in o[a]) n2 = o[a][i2], o[a].hasOwnProperty(i2) && void 0 !== n2 && (e2[i2] = t.isPlainObject(n2) ? t.isPlainObject(e2[i2]) ? t.widget.extend({}, e2[i2], n2) : t.widget.extend({}, n2) : n2);
                return e2;
              }, t.widget.bridge = function (e2, i2) {
                var n2 = i2.prototype.widgetFullName || e2;
                t.fn[e2] = function (o) {
                  var a = "string" == typeof o,
                    r = s.call(arguments, 1),
                    l = this;
                  return a ? this.length || "instance" !== o ? this.each(function () {
                    var i3,
                      s2 = t.data(this, n2);
                    return "instance" === o ? (l = s2, false) : s2 ? t.isFunction(s2[o]) && "_" !== o.charAt(0) ? (i3 = s2[o].apply(s2, r), i3 !== s2 && void 0 !== i3 ? (l = i3 && i3.jquery ? l.pushStack(i3.get()) : i3, false) : void 0) : t.error("no such method '" + o + "' for " + e2 + " widget instance") : t.error("cannot call methods on " + e2 + " prior to initialization; attempted to call method '" + o + "'");
                  }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function () {
                    var e3 = t.data(this, n2);
                    e3 ? (e3.option(o || {}), e3._init && e3._init()) : t.data(this, n2, new i2(o, this));
                  })), l;
                };
              }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                  classes: {},
                  disabled: false,
                  create: null
                },
                _createWidget: function (e2, s2) {
                  s2 = t(s2 || this.defaultElement || this)[0], this.element = t(s2), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s2 !== this && (t.data(s2, this.widgetFullName, this), this._on(true, this.element, {
                    remove: function (t2) {
                      t2.target === s2 && this.destroy();
                    }
                  }), this.document = t(s2.style ? s2.ownerDocument : s2.document || s2), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e2), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
                },
                _getCreateOptions: function () {
                  return {};
                },
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function () {
                  var e2 = this;
                  this._destroy(), t.each(this.classesElementLookup, function (t2, i2) {
                    e2._removeClass(i2, t2);
                  }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
                },
                _destroy: t.noop,
                widget: function () {
                  return this.element;
                },
                option: function (e2, i2) {
                  var s2,
                    n2,
                    o,
                    a = e2;
                  if (0 === arguments.length) return t.widget.extend({}, this.options);
                  if ("string" == typeof e2) if (a = {}, s2 = e2.split("."), e2 = s2.shift(), s2.length) {
                    for (n2 = a[e2] = t.widget.extend({}, this.options[e2]), o = 0; s2.length - 1 > o; o++) n2[s2[o]] = n2[s2[o]] || {}, n2 = n2[s2[o]];
                    if (e2 = s2.pop(), 1 === arguments.length) return void 0 === n2[e2] ? null : n2[e2];
                    n2[e2] = i2;
                  } else {
                    if (1 === arguments.length) return void 0 === this.options[e2] ? null : this.options[e2];
                    a[e2] = i2;
                  }
                  return this._setOptions(a), this;
                },
                _setOptions: function (t2) {
                  var e2;
                  for (e2 in t2) this._setOption(e2, t2[e2]);
                  return this;
                },
                _setOption: function (t2, e2) {
                  return "classes" === t2 && this._setOptionClasses(e2), this.options[t2] = e2, "disabled" === t2 && this._setOptionDisabled(e2), this;
                },
                _setOptionClasses: function (e2) {
                  var i2, s2, n2;
                  for (i2 in e2) n2 = this.classesElementLookup[i2], e2[i2] !== this.options.classes[i2] && n2 && n2.length && (s2 = t(n2.get()), this._removeClass(n2, i2), s2.addClass(this._classes({
                    element: s2,
                    keys: i2,
                    classes: e2,
                    add: true
                  })));
                },
                _setOptionDisabled: function (t2) {
                  this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t2), t2 && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
                },
                enable: function () {
                  return this._setOptions({
                    disabled: false
                  });
                },
                disable: function () {
                  return this._setOptions({
                    disabled: true
                  });
                },
                _classes: function (e2) {
                  function i2(i3, o) {
                    var a, r;
                    for (r = 0; i3.length > r; r++) a = n2.classesElementLookup[i3[r]] || t(), a = e2.add ? t(t.unique(a.get().concat(e2.element.get()))) : t(a.not(e2.element).get()), n2.classesElementLookup[i3[r]] = a, s2.push(i3[r]), o && e2.classes[i3[r]] && s2.push(e2.classes[i3[r]]);
                  }
                  var s2 = [],
                    n2 = this;
                  return e2 = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                  }, e2), this._on(e2.element, {
                    remove: "_untrackClassesElement"
                  }), e2.keys && i2(e2.keys.match(/\S+/g) || [], true), e2.extra && i2(e2.extra.match(/\S+/g) || []), s2.join(" ");
                },
                _untrackClassesElement: function (e2) {
                  var i2 = this;
                  t.each(i2.classesElementLookup, function (s2, n2) {
                    -1 !== t.inArray(e2.target, n2) && (i2.classesElementLookup[s2] = t(n2.not(e2.target).get()));
                  });
                },
                _removeClass: function (t2, e2, i2) {
                  return this._toggleClass(t2, e2, i2, false);
                },
                _addClass: function (t2, e2, i2) {
                  return this._toggleClass(t2, e2, i2, true);
                },
                _toggleClass: function (t2, e2, i2, s2) {
                  s2 = "boolean" == typeof s2 ? s2 : i2;
                  var n2 = "string" == typeof t2 || null === t2,
                    o = {
                      extra: n2 ? e2 : i2,
                      keys: n2 ? t2 : e2,
                      element: n2 ? this.element : t2,
                      add: s2
                    };
                  return o.element.toggleClass(this._classes(o), s2), this;
                },
                _on: function (e2, i2, s2) {
                  var n2,
                    o = this;
                  "boolean" != typeof e2 && (s2 = i2, i2 = e2, e2 = false), s2 ? (i2 = n2 = t(i2), this.bindings = this.bindings.add(i2)) : (s2 = i2, i2 = this.element, n2 = this.widget()), t.each(s2, function (s3, a) {
                    function r() {
                      return e2 || o.options.disabled !== true && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                    var l = s3.match(/^([\w:-]*)\s*(.*)$/),
                      h2 = l[1] + o.eventNamespace,
                      c = l[2];
                    c ? n2.on(h2, c, r) : i2.on(h2, r);
                  });
                },
                _off: function (e2, i2) {
                  i2 = (i2 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e2.off(i2).off(i2), this.bindings = t(this.bindings.not(e2).get()), this.focusable = t(this.focusable.not(e2).get()), this.hoverable = t(this.hoverable.not(e2).get());
                },
                _delay: function (t2, e2) {
                  function i2() {
                    return ("string" == typeof t2 ? s2[t2] : t2).apply(s2, arguments);
                  }
                  var s2 = this;
                  return setTimeout(i2, e2 || 0);
                },
                _hoverable: function (e2) {
                  this.hoverable = this.hoverable.add(e2), this._on(e2, {
                    mouseenter: function (e3) {
                      this._addClass(t(e3.currentTarget), null, "ui-state-hover");
                    },
                    mouseleave: function (e3) {
                      this._removeClass(t(e3.currentTarget), null, "ui-state-hover");
                    }
                  });
                },
                _focusable: function (e2) {
                  this.focusable = this.focusable.add(e2), this._on(e2, {
                    focusin: function (e3) {
                      this._addClass(t(e3.currentTarget), null, "ui-state-focus");
                    },
                    focusout: function (e3) {
                      this._removeClass(t(e3.currentTarget), null, "ui-state-focus");
                    }
                  });
                },
                _trigger: function (e2, i2, s2) {
                  var n2,
                    o,
                    a = this.options[e2];
                  if (s2 = s2 || {}, i2 = t.Event(i2), i2.type = (e2 === this.widgetEventPrefix ? e2 : this.widgetEventPrefix + e2).toLowerCase(), i2.target = this.element[0], o = i2.originalEvent) for (n2 in o) n2 in i2 || (i2[n2] = o[n2]);
                  return this.element.trigger(i2, s2), !(t.isFunction(a) && a.apply(this.element[0], [i2].concat(s2)) === false || i2.isDefaultPrevented());
                }
              }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
              }, function (e2, i2) {
                t.Widget.prototype["_" + e2] = function (s2, n2, o) {
                  "string" == typeof n2 && (n2 = {
                    effect: n2
                  });
                  var a,
                    r = n2 ? n2 === true || "number" == typeof n2 ? i2 : n2.effect || i2 : e2;
                  n2 = n2 || {}, "number" == typeof n2 && (n2 = {
                    duration: n2
                  }), a = !t.isEmptyObject(n2), n2.complete = o, n2.delay && s2.delay(n2.delay), a && t.effects && t.effects.effect[r] ? s2[e2](n2) : r !== e2 && s2[r] ? s2[r](n2.duration, n2.easing, o) : s2.queue(function (i3) {
                    t(this)[e2](), o && o.call(s2[0]), i3();
                  });
                };
              }), t.widget, function () {
                function e2(t2, e3, i3) {
                  return [parseFloat(t2[0]) * (u.test(t2[0]) ? e3 / 100 : 1), parseFloat(t2[1]) * (u.test(t2[1]) ? i3 / 100 : 1)];
                }
                function i2(e3, i3) {
                  return parseInt(t.css(e3, i3), 10) || 0;
                }
                function s2(e3) {
                  var i3 = e3[0];
                  return 9 === i3.nodeType ? {
                    width: e3.width(),
                    height: e3.height(),
                    offset: {
                      top: 0,
                      left: 0
                    }
                  } : t.isWindow(i3) ? {
                    width: e3.width(),
                    height: e3.height(),
                    offset: {
                      top: e3.scrollTop(),
                      left: e3.scrollLeft()
                    }
                  } : i3.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                      top: i3.pageY,
                      left: i3.pageX
                    }
                  } : {
                    width: e3.outerWidth(),
                    height: e3.outerHeight(),
                    offset: e3.offset()
                  };
                }
                var n2,
                  o = Math.max,
                  a = Math.abs,
                  r = /left|center|right/,
                  l = /top|center|bottom/,
                  h2 = /[\+\-]\d+(\.[\d]+)?%?/,
                  c = /^\w+/,
                  u = /%$/,
                  d = t.fn.position;
                t.position = {
                  scrollbarWidth: function () {
                    if (void 0 !== n2) return n2;
                    var e3,
                      i3,
                      s3 = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                      o2 = s3.children()[0];
                    return t("body").append(s3), e3 = o2.offsetWidth, s3.css("overflow", "scroll"), i3 = o2.offsetWidth, e3 === i3 && (i3 = s3[0].clientWidth), s3.remove(), n2 = e3 - i3;
                  },
                  getScrollInfo: function (e3) {
                    var i3 = e3.isWindow || e3.isDocument ? "" : e3.element.css("overflow-x"),
                      s3 = e3.isWindow || e3.isDocument ? "" : e3.element.css("overflow-y"),
                      n3 = "scroll" === i3 || "auto" === i3 && e3.width < e3.element[0].scrollWidth,
                      o2 = "scroll" === s3 || "auto" === s3 && e3.height < e3.element[0].scrollHeight;
                    return {
                      width: o2 ? t.position.scrollbarWidth() : 0,
                      height: n3 ? t.position.scrollbarWidth() : 0
                    };
                  },
                  getWithinInfo: function (e3) {
                    var i3 = t(e3 || window),
                      s3 = t.isWindow(i3[0]),
                      n3 = !!i3[0] && 9 === i3[0].nodeType,
                      o2 = !s3 && !n3;
                    return {
                      element: i3,
                      isWindow: s3,
                      isDocument: n3,
                      offset: o2 ? t(e3).offset() : {
                        left: 0,
                        top: 0
                      },
                      scrollLeft: i3.scrollLeft(),
                      scrollTop: i3.scrollTop(),
                      width: i3.outerWidth(),
                      height: i3.outerHeight()
                    };
                  }
                }, t.fn.position = function (n3) {
                  if (!n3 || !n3.of) return d.apply(this, arguments);
                  n3 = t.extend({}, n3);
                  var u2,
                    p,
                    f,
                    g,
                    m,
                    _,
                    v = t(n3.of),
                    b = t.position.getWithinInfo(n3.within),
                    y = t.position.getScrollInfo(b),
                    w = (n3.collision || "flip").split(" "),
                    k = {};
                  return _ = s2(v), v[0].preventDefault && (n3.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
                    var t2,
                      e3,
                      i3 = (n3[this] || "").split(" ");
                    1 === i3.length && (i3 = r.test(i3[0]) ? i3.concat(["center"]) : l.test(i3[0]) ? ["center"].concat(i3) : ["center", "center"]), i3[0] = r.test(i3[0]) ? i3[0] : "center", i3[1] = l.test(i3[1]) ? i3[1] : "center", t2 = h2.exec(i3[0]), e3 = h2.exec(i3[1]), k[this] = [t2 ? t2[0] : 0, e3 ? e3[0] : 0], n3[this] = [c.exec(i3[0])[0], c.exec(i3[1])[0]];
                  }), 1 === w.length && (w[1] = w[0]), "right" === n3.at[0] ? m.left += p : "center" === n3.at[0] && (m.left += p / 2), "bottom" === n3.at[1] ? m.top += f : "center" === n3.at[1] && (m.top += f / 2), u2 = e2(k.at, p, f), m.left += u2[0], m.top += u2[1], this.each(function () {
                    var s3,
                      r2,
                      l2 = t(this),
                      h3 = l2.outerWidth(),
                      c2 = l2.outerHeight(),
                      d2 = i2(this, "marginLeft"),
                      _2 = i2(this, "marginTop"),
                      x = h3 + d2 + i2(this, "marginRight") + y.width,
                      C = c2 + _2 + i2(this, "marginBottom") + y.height,
                      D = t.extend({}, m),
                      T = e2(k.my, l2.outerWidth(), l2.outerHeight());
                    "right" === n3.my[0] ? D.left -= h3 : "center" === n3.my[0] && (D.left -= h3 / 2), "bottom" === n3.my[1] ? D.top -= c2 : "center" === n3.my[1] && (D.top -= c2 / 2), D.left += T[0], D.top += T[1], s3 = {
                      marginLeft: d2,
                      marginTop: _2
                    }, t.each(["left", "top"], function (e3, i3) {
                      t.ui.position[w[e3]] && t.ui.position[w[e3]][i3](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: h3,
                        elemHeight: c2,
                        collisionPosition: s3,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [u2[0] + T[0], u2[1] + T[1]],
                        my: n3.my,
                        at: n3.at,
                        within: b,
                        elem: l2
                      });
                    }), n3.using && (r2 = function (t2) {
                      var e3 = g.left - D.left,
                        i3 = e3 + p - h3,
                        s4 = g.top - D.top,
                        r3 = s4 + f - c2,
                        u3 = {
                          target: {
                            element: v,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: f
                          },
                          element: {
                            element: l2,
                            left: D.left,
                            top: D.top,
                            width: h3,
                            height: c2
                          },
                          horizontal: 0 > i3 ? "left" : e3 > 0 ? "right" : "center",
                          vertical: 0 > r3 ? "top" : s4 > 0 ? "bottom" : "middle"
                        };
                      h3 > p && p > a(e3 + i3) && (u3.horizontal = "center"), c2 > f && f > a(s4 + r3) && (u3.vertical = "middle"), u3.important = o(a(e3), a(i3)) > o(a(s4), a(r3)) ? "horizontal" : "vertical", n3.using.call(this, t2, u3);
                    }), l2.offset(t.extend(D, {
                      using: r2
                    }));
                  });
                }, t.ui.position = {
                  fit: {
                    left: function (t2, e3) {
                      var i3,
                        s3 = e3.within,
                        n3 = s3.isWindow ? s3.scrollLeft : s3.offset.left,
                        a2 = s3.width,
                        r2 = t2.left - e3.collisionPosition.marginLeft,
                        l2 = n3 - r2,
                        h3 = r2 + e3.collisionWidth - a2 - n3;
                      e3.collisionWidth > a2 ? l2 > 0 && 0 >= h3 ? (i3 = t2.left + l2 + e3.collisionWidth - a2 - n3, t2.left += l2 - i3) : t2.left = h3 > 0 && 0 >= l2 ? n3 : l2 > h3 ? n3 + a2 - e3.collisionWidth : n3 : l2 > 0 ? t2.left += l2 : h3 > 0 ? t2.left -= h3 : t2.left = o(t2.left - r2, t2.left);
                    },
                    top: function (t2, e3) {
                      var i3,
                        s3 = e3.within,
                        n3 = s3.isWindow ? s3.scrollTop : s3.offset.top,
                        a2 = e3.within.height,
                        r2 = t2.top - e3.collisionPosition.marginTop,
                        l2 = n3 - r2,
                        h3 = r2 + e3.collisionHeight - a2 - n3;
                      e3.collisionHeight > a2 ? l2 > 0 && 0 >= h3 ? (i3 = t2.top + l2 + e3.collisionHeight - a2 - n3, t2.top += l2 - i3) : t2.top = h3 > 0 && 0 >= l2 ? n3 : l2 > h3 ? n3 + a2 - e3.collisionHeight : n3 : l2 > 0 ? t2.top += l2 : h3 > 0 ? t2.top -= h3 : t2.top = o(t2.top - r2, t2.top);
                    }
                  },
                  flip: {
                    left: function (t2, e3) {
                      var i3,
                        s3,
                        n3 = e3.within,
                        o2 = n3.offset.left + n3.scrollLeft,
                        r2 = n3.width,
                        l2 = n3.isWindow ? n3.scrollLeft : n3.offset.left,
                        h3 = t2.left - e3.collisionPosition.marginLeft,
                        c2 = h3 - l2,
                        u2 = h3 + e3.collisionWidth - r2 - l2,
                        d2 = "left" === e3.my[0] ? -e3.elemWidth : "right" === e3.my[0] ? e3.elemWidth : 0,
                        p = "left" === e3.at[0] ? e3.targetWidth : "right" === e3.at[0] ? -e3.targetWidth : 0,
                        f = -2 * e3.offset[0];
                      0 > c2 ? (i3 = t2.left + d2 + p + f + e3.collisionWidth - r2 - o2, (0 > i3 || a(c2) > i3) && (t2.left += d2 + p + f)) : u2 > 0 && (s3 = t2.left - e3.collisionPosition.marginLeft + d2 + p + f - l2, (s3 > 0 || u2 > a(s3)) && (t2.left += d2 + p + f));
                    },
                    top: function (t2, e3) {
                      var i3,
                        s3,
                        n3 = e3.within,
                        o2 = n3.offset.top + n3.scrollTop,
                        r2 = n3.height,
                        l2 = n3.isWindow ? n3.scrollTop : n3.offset.top,
                        h3 = t2.top - e3.collisionPosition.marginTop,
                        c2 = h3 - l2,
                        u2 = h3 + e3.collisionHeight - r2 - l2,
                        d2 = "top" === e3.my[1],
                        p = d2 ? -e3.elemHeight : "bottom" === e3.my[1] ? e3.elemHeight : 0,
                        f = "top" === e3.at[1] ? e3.targetHeight : "bottom" === e3.at[1] ? -e3.targetHeight : 0,
                        g = -2 * e3.offset[1];
                      0 > c2 ? (s3 = t2.top + p + f + g + e3.collisionHeight - r2 - o2, (0 > s3 || a(c2) > s3) && (t2.top += p + f + g)) : u2 > 0 && (i3 = t2.top - e3.collisionPosition.marginTop + p + f + g - l2, (i3 > 0 || u2 > a(i3)) && (t2.top += p + f + g));
                    }
                  },
                  flipfit: {
                    left: function () {
                      t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                    },
                    top: function () {
                      t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                    }
                  }
                };
              }(), t.ui.position, t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function (e2) {
                  return function (i2) {
                    return !!t.data(i2, e2);
                  };
                }) : function (e2, i2, s2) {
                  return !!t.data(e2, s2[3]);
                }
              }), t.fn.extend({
                disableSelection: function () {
                  var t2 = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                  return function () {
                    return this.on(t2 + ".ui-disableSelection", function (t3) {
                      t3.preventDefault();
                    });
                  };
                }(),
                enableSelection: function () {
                  return this.off(".ui-disableSelection");
                }
              }), t.ui.focusable = function (i2, s2) {
                var n2,
                  o,
                  a,
                  r,
                  l,
                  h2 = i2.nodeName.toLowerCase();
                return "area" === h2 ? (n2 = i2.parentNode, o = n2.name, i2.href && o && "map" === n2.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : false) : (/^(input|select|textarea|button|object)$/.test(h2) ? (r = !i2.disabled, r && (l = t(i2).closest("fieldset")[0], l && (r = !l.disabled))) : r = "a" === h2 ? i2.href || s2 : s2, r && t(i2).is(":visible") && e(t(i2)));
              }, t.extend(t.expr[":"], {
                focusable: function (e2) {
                  return t.ui.focusable(e2, null != t.attr(e2, "tabindex"));
                }
              }), t.ui.focusable, t.fn.form = function () {
                return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
              }, t.ui.formResetMixin = {
                _formResetHandler: function () {
                  var e2 = t(this);
                  setTimeout(function () {
                    var i2 = e2.data("ui-form-reset-instances");
                    t.each(i2, function () {
                      this.refresh();
                    });
                  });
                },
                _bindFormResetHandler: function () {
                  if (this.form = this.element.form(), this.form.length) {
                    var t2 = this.form.data("ui-form-reset-instances") || [];
                    t2.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t2.push(this), this.form.data("ui-form-reset-instances", t2);
                  }
                },
                _unbindFormResetHandler: function () {
                  if (this.form.length) {
                    var e2 = this.form.data("ui-form-reset-instances");
                    e2.splice(t.inArray(this, e2), 1), e2.length ? this.form.data("ui-form-reset-instances", e2) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
                  }
                }
              }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e2, i2) {
                function s2(e3, i3, s3, o2) {
                  return t.each(n2, function () {
                    i3 -= parseFloat(t.css(e3, "padding" + this)) || 0, s3 && (i3 -= parseFloat(t.css(e3, "border" + this + "Width")) || 0), o2 && (i3 -= parseFloat(t.css(e3, "margin" + this)) || 0);
                  }), i3;
                }
                var n2 = "Width" === i2 ? ["Left", "Right"] : ["Top", "Bottom"],
                  o = i2.toLowerCase(),
                  a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                  };
                t.fn["inner" + i2] = function (e3) {
                  return void 0 === e3 ? a["inner" + i2].call(this) : this.each(function () {
                    t(this).css(o, s2(this, e3) + "px");
                  });
                }, t.fn["outer" + i2] = function (e3, n3) {
                  return "number" != typeof e3 ? a["outer" + i2].call(this, e3) : this.each(function () {
                    t(this).css(o, s2(this, e3, true, n3) + "px");
                  });
                };
              }), t.fn.addBack = function (t2) {
                return this.add(null == t2 ? this.prevObject : this.prevObject.filter(t2));
              }), t.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
              }, t.ui.escapeSelector = /* @__PURE__ */function () {
                var t2 = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
                return function (e2) {
                  return e2.replace(t2, "\\$1");
                };
              }(), t.fn.labels = function () {
                var e2, i2, s2, n2, o;
                return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n2 = this.eq(0).parents("label"), s2 = this.attr("id"), s2 && (e2 = this.eq(0).parents().last(), o = e2.add(e2.length ? e2.siblings() : this.siblings()), i2 = "label[for='" + t.ui.escapeSelector(s2) + "']", n2 = n2.add(o.find(i2).addBack(i2))), this.pushStack(n2));
              }, t.fn.scrollParent = function (e2) {
                var i2 = this.css("position"),
                  s2 = "absolute" === i2,
                  n2 = e2 ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                  o = this.parents().filter(function () {
                    var e3 = t(this);
                    return s2 && "static" === e3.css("position") ? false : n2.test(e3.css("overflow") + e3.css("overflow-y") + e3.css("overflow-x"));
                  }).eq(0);
                return "fixed" !== i2 && o.length ? o : t(this[0].ownerDocument || document);
              }, t.extend(t.expr[":"], {
                tabbable: function (e2) {
                  var i2 = t.attr(e2, "tabindex"),
                    s2 = null != i2;
                  return (!s2 || i2 >= 0) && t.ui.focusable(e2, s2);
                }
              }), t.fn.extend({
                uniqueId: /* @__PURE__ */function () {
                  var t2 = 0;
                  return function () {
                    return this.each(function () {
                      this.id || (this.id = "ui-id-" + ++t2);
                    });
                  };
                }(),
                removeUniqueId: function () {
                  return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
                  });
                }
              }), t.widget("ui.accordion", {
                version: "1.12.1",
                options: {
                  active: 0,
                  animate: {},
                  classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                  },
                  collapsible: false,
                  event: "click",
                  header: "> li > :first-child, > :not(li):even",
                  heightStyle: "auto",
                  icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                  },
                  activate: null,
                  beforeActivate: null
                },
                hideProps: {
                  borderTopWidth: "hide",
                  borderBottomWidth: "hide",
                  paddingTop: "hide",
                  paddingBottom: "hide",
                  height: "hide"
                },
                showProps: {
                  borderTopWidth: "show",
                  borderBottomWidth: "show",
                  paddingTop: "show",
                  paddingBottom: "show",
                  height: "show"
                },
                _create: function () {
                  var e2 = this.options;
                  this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e2.collapsible || e2.active !== false && null != e2.active || (e2.active = 0), this._processPanels(), 0 > e2.active && (e2.active += this.headers.length), this._refresh();
                },
                _getCreateEventData: function () {
                  return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                  };
                },
                _createIcons: function () {
                  var e2,
                    i2,
                    s2 = this.options.icons;
                  s2 && (e2 = t("<span>"), this._addClass(e2, "ui-accordion-header-icon", "ui-icon " + s2.header), e2.prependTo(this.headers), i2 = this.active.children(".ui-accordion-header-icon"), this._removeClass(i2, s2.header)._addClass(i2, null, s2.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
                },
                _destroyIcons: function () {
                  this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
                },
                _destroy: function () {
                  var t2;
                  this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t2 = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t2.css("height", "");
                },
                _setOption: function (t2, e2) {
                  return "active" === t2 ? (this._activate(e2), void 0) : ("event" === t2 && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e2)), this._super(t2, e2), "collapsible" !== t2 || e2 || this.options.active !== false || this._activate(0), "icons" === t2 && (this._destroyIcons(), e2 && this._createIcons()), void 0);
                },
                _setOptionDisabled: function (t2) {
                  this._super(t2), this.element.attr("aria-disabled", t2), this._toggleClass(null, "ui-state-disabled", !!t2), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t2);
                },
                _keydown: function (e2) {
                  if (!e2.altKey && !e2.ctrlKey) {
                    var i2 = t.ui.keyCode,
                      s2 = this.headers.length,
                      n2 = this.headers.index(e2.target),
                      o = false;
                    switch (e2.keyCode) {
                      case i2.RIGHT:
                      case i2.DOWN:
                        o = this.headers[(n2 + 1) % s2];
                        break;
                      case i2.LEFT:
                      case i2.UP:
                        o = this.headers[(n2 - 1 + s2) % s2];
                        break;
                      case i2.SPACE:
                      case i2.ENTER:
                        this._eventHandler(e2);
                        break;
                      case i2.HOME:
                        o = this.headers[0];
                        break;
                      case i2.END:
                        o = this.headers[s2 - 1];
                    }
                    o && (t(e2.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e2.preventDefault());
                  }
                },
                _panelKeyDown: function (e2) {
                  e2.keyCode === t.ui.keyCode.UP && e2.ctrlKey && t(e2.currentTarget).prev().trigger("focus");
                },
                refresh: function () {
                  var e2 = this.options;
                  this._processPanels(), e2.active === false && e2.collapsible === true || !this.headers.length ? (e2.active = false, this.active = t()) : e2.active === false ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e2.active = false, this.active = t()) : this._activate(Math.max(0, e2.active - 1)) : e2.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
                },
                _processPanels: function () {
                  var t2 = this.headers,
                    e2 = this.panels;
                  this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e2 && (this._off(t2.not(this.headers)), this._off(e2.not(this.panels)));
                },
                _refresh: function () {
                  var e2,
                    i2 = this.options,
                    s2 = i2.heightStyle,
                    n2 = this.element.parent();
                  this.active = this._findActive(i2.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                    var e3 = t(this),
                      i3 = e3.uniqueId().attr("id"),
                      s3 = e3.next(),
                      n3 = s3.uniqueId().attr("id");
                    e3.attr("aria-controls", n3), s3.attr("aria-labelledby", i3);
                  }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                  }).next().attr({
                    "aria-hidden": "true"
                  }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                  }).next().attr({
                    "aria-hidden": "false"
                  }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i2.event), "fill" === s2 ? (e2 = n2.height(), this.element.siblings(":visible").each(function () {
                    var i3 = t(this),
                      s3 = i3.css("position");
                    "absolute" !== s3 && "fixed" !== s3 && (e2 -= i3.outerHeight(true));
                  }), this.headers.each(function () {
                    e2 -= t(this).outerHeight(true);
                  }), this.headers.next().each(function () {
                    t(this).height(Math.max(0, e2 - t(this).innerHeight() + t(this).height()));
                  }).css("overflow", "auto")) : "auto" === s2 && (e2 = 0, this.headers.next().each(function () {
                    var i3 = t(this).is(":visible");
                    i3 || t(this).show(), e2 = Math.max(e2, t(this).css("height", "").height()), i3 || t(this).hide();
                  }).height(e2));
                },
                _activate: function (e2) {
                  var i2 = this._findActive(e2)[0];
                  i2 !== this.active[0] && (i2 = i2 || this.active[0], this._eventHandler({
                    target: i2,
                    currentTarget: i2,
                    preventDefault: t.noop
                  }));
                },
                _findActive: function (e2) {
                  return "number" == typeof e2 ? this.headers.eq(e2) : t();
                },
                _setupEvents: function (e2) {
                  var i2 = {
                    keydown: "_keydown"
                  };
                  e2 && t.each(e2.split(" "), function (t2, e3) {
                    i2[e3] = "_eventHandler";
                  }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i2), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                  }), this._hoverable(this.headers), this._focusable(this.headers);
                },
                _eventHandler: function (e2) {
                  var i2,
                    s2,
                    n2 = this.options,
                    o = this.active,
                    a = t(e2.currentTarget),
                    r = a[0] === o[0],
                    l = r && n2.collapsible,
                    h2 = l ? t() : a.next(),
                    c = o.next(),
                    u = {
                      oldHeader: o,
                      oldPanel: c,
                      newHeader: l ? t() : a,
                      newPanel: h2
                    };
                  e2.preventDefault(), r && !n2.collapsible || this._trigger("beforeActivate", e2, u) === false || (n2.active = l ? false : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n2.icons && (i2 = o.children(".ui-accordion-header-icon"), this._removeClass(i2, null, n2.icons.activeHeader)._addClass(i2, null, n2.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n2.icons && (s2 = a.children(".ui-accordion-header-icon"), this._removeClass(s2, null, n2.icons.header)._addClass(s2, null, n2.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")));
                },
                _toggle: function (e2) {
                  var i2 = e2.newPanel,
                    s2 = this.prevShow.length ? this.prevShow : e2.oldPanel;
                  this.prevShow.add(this.prevHide).stop(true, true), this.prevShow = i2, this.prevHide = s2, this.options.animate ? this._animate(i2, s2, e2) : (s2.hide(), i2.show(), this._toggleComplete(e2)), s2.attr({
                    "aria-hidden": "true"
                  }), s2.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                  }), i2.length && s2.length ? s2.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                  }) : i2.length && this.headers.filter(function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10);
                  }).attr("tabIndex", -1), i2.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                  });
                },
                _animate: function (t2, e2, i2) {
                  var s2,
                    n2,
                    o,
                    a = this,
                    r = 0,
                    l = t2.css("box-sizing"),
                    h2 = t2.length && (!e2.length || t2.index() < e2.index()),
                    c = this.options.animate || {},
                    u = h2 && c.down || c,
                    d = function () {
                      a._toggleComplete(i2);
                    };
                  return "number" == typeof u && (o = u), "string" == typeof u && (n2 = u), n2 = n2 || u.easing || c.easing, o = o || u.duration || c.duration, e2.length ? t2.length ? (s2 = t2.show().outerHeight(), e2.animate(this.hideProps, {
                    duration: o,
                    easing: n2,
                    step: function (t3, e3) {
                      e3.now = Math.round(t3);
                    }
                  }), t2.hide().animate(this.showProps, {
                    duration: o,
                    easing: n2,
                    complete: d,
                    step: function (t3, i3) {
                      i3.now = Math.round(t3), "height" !== i3.prop ? "content-box" === l && (r += i3.now) : "content" !== a.options.heightStyle && (i3.now = Math.round(s2 - e2.outerHeight() - r), r = 0);
                    }
                  }), void 0) : e2.animate(this.hideProps, o, n2, d) : t2.animate(this.showProps, o, n2, d);
                },
                _toggleComplete: function (t2) {
                  var e2 = t2.oldPanel,
                    i2 = e2.prev();
                  this._removeClass(e2, "ui-accordion-content-active"), this._removeClass(i2, "ui-accordion-header-active")._addClass(i2, "ui-accordion-header-collapsed"), e2.length && (e2.parent()[0].className = e2.parent()[0].className), this._trigger("activate", null, t2);
                }
              }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
              var n = false;
              t(document).on("mouseup", function () {
                n = false;
              }), t.widget("ui.mouse", {
                version: "1.12.1",
                options: {
                  cancel: "input, textarea, button, select, option",
                  distance: 1,
                  delay: 0
                },
                _mouseInit: function () {
                  var e2 = this;
                  this.element.on("mousedown." + this.widgetName, function (t2) {
                    return e2._mouseDown(t2);
                  }).on("click." + this.widgetName, function (i2) {
                    return true === t.data(i2.target, e2.widgetName + ".preventClickEvent") ? (t.removeData(i2.target, e2.widgetName + ".preventClickEvent"), i2.stopImmediatePropagation(), false) : void 0;
                  }), this.started = false;
                },
                _mouseDestroy: function () {
                  this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
                },
                _mouseDown: function (e2) {
                  if (!n) {
                    this._mouseMoved = false, this._mouseStarted && this._mouseUp(e2), this._mouseDownEvent = e2;
                    var i2 = this,
                      s2 = 1 === e2.which,
                      o = "string" == typeof this.options.cancel && e2.target.nodeName ? t(e2.target).closest(this.options.cancel).length : false;
                    return s2 && !o && this._mouseCapture(e2) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                      i2.mouseDelayMet = true;
                    }, this.options.delay)), this._mouseDistanceMet(e2) && this._mouseDelayMet(e2) && (this._mouseStarted = this._mouseStart(e2) !== false, !this._mouseStarted) ? (e2.preventDefault(), true) : (true === t.data(e2.target, this.widgetName + ".preventClickEvent") && t.removeData(e2.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t2) {
                      return i2._mouseMove(t2);
                    }, this._mouseUpDelegate = function (t2) {
                      return i2._mouseUp(t2);
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e2.preventDefault(), n = true, true)) : true;
                  }
                },
                _mouseMove: function (e2) {
                  if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e2.button) return this._mouseUp(e2);
                    if (!e2.which) {
                      if (e2.originalEvent.altKey || e2.originalEvent.ctrlKey || e2.originalEvent.metaKey || e2.originalEvent.shiftKey) this.ignoreMissingWhich = true;else if (!this.ignoreMissingWhich) return this._mouseUp(e2);
                    }
                  }
                  return (e2.which || e2.button) && (this._mouseMoved = true), this._mouseStarted ? (this._mouseDrag(e2), e2.preventDefault()) : (this._mouseDistanceMet(e2) && this._mouseDelayMet(e2) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e2) !== false, this._mouseStarted ? this._mouseDrag(e2) : this._mouseUp(e2)), !this._mouseStarted);
                },
                _mouseUp: function (e2) {
                  this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = false, e2.target === this._mouseDownEvent.target && t.data(e2.target, this.widgetName + ".preventClickEvent", true), this._mouseStop(e2)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = false, n = false, e2.preventDefault();
                },
                _mouseDistanceMet: function (t2) {
                  return Math.max(Math.abs(this._mouseDownEvent.pageX - t2.pageX), Math.abs(this._mouseDownEvent.pageY - t2.pageY)) >= this.options.distance;
                },
                _mouseDelayMet: function () {
                  return this.mouseDelayMet;
                },
                _mouseStart: function () {},
                _mouseDrag: function () {},
                _mouseStop: function () {},
                _mouseCapture: function () {
                  return true;
                }
              }), t.widget("ui.slider", t.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "slide",
                options: {
                  animate: false,
                  classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                  },
                  distance: 0,
                  max: 100,
                  min: 0,
                  orientation: "horizontal",
                  range: false,
                  step: 1,
                  value: 0,
                  values: null,
                  change: null,
                  slide: null,
                  start: null,
                  stop: null
                },
                numPages: 5,
                _create: function () {
                  this._keySliding = false, this._mouseSliding = false, this._animateOff = true, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = false;
                },
                _refresh: function () {
                  this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
                },
                _createHandles: function () {
                  var e2,
                    i2,
                    s2 = this.options,
                    n2 = this.element.find(".ui-slider-handle"),
                    o = "<span tabindex='0'></span>",
                    a = [];
                  for (i2 = s2.values && s2.values.length || 1, n2.length > i2 && (n2.slice(i2).remove(), n2 = n2.slice(0, i2)), e2 = n2.length; i2 > e2; e2++) a.push(o);
                  this.handles = n2.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e3) {
                    t(this).data("ui-slider-handle-index", e3).attr("tabIndex", 0);
                  });
                },
                _createRange: function () {
                  var e2 = this.options;
                  e2.range ? (e2.range === true && (e2.values ? e2.values.length && 2 !== e2.values.length ? e2.values = [e2.values[0], e2.values[0]] : t.isArray(e2.values) && (e2.values = e2.values.slice(0)) : e2.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                  })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e2.range || "max" === e2.range) && this._addClass(this.range, "ui-slider-range-" + e2.range)) : (this.range && this.range.remove(), this.range = null);
                },
                _setupEvents: function () {
                  this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
                },
                _destroy: function () {
                  this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
                },
                _mouseCapture: function (e2) {
                  var i2,
                    s2,
                    n2,
                    o,
                    a,
                    r,
                    l,
                    h2,
                    c = this,
                    u = this.options;
                  return u.disabled ? false : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                  }, this.elementOffset = this.element.offset(), i2 = {
                    x: e2.pageX,
                    y: e2.pageY
                  }, s2 = this._normValueFromMouse(i2), n2 = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e3) {
                    var i3 = Math.abs(s2 - c.values(e3));
                    (n2 > i3 || n2 === i3 && (e3 === c._lastChangedValue || c.values(e3) === u.min)) && (n2 = i3, o = t(this), a = e3);
                  }), r = this._start(e2, a), r === false ? false : (this._mouseSliding = true, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), h2 = !t(e2.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h2 ? {
                    left: 0,
                    top: 0
                  } : {
                    left: e2.pageX - l.left - o.width() / 2,
                    top: e2.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                  }, this.handles.hasClass("ui-state-hover") || this._slide(e2, a, s2), this._animateOff = true, true));
                },
                _mouseStart: function () {
                  return true;
                },
                _mouseDrag: function (t2) {
                  var e2 = {
                      x: t2.pageX,
                      y: t2.pageY
                    },
                    i2 = this._normValueFromMouse(e2);
                  return this._slide(t2, this._handleIndex, i2), false;
                },
                _mouseStop: function (t2) {
                  return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = false, this._stop(t2, this._handleIndex), this._change(t2, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = false, false;
                },
                _detectOrientation: function () {
                  this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
                },
                _normValueFromMouse: function (t2) {
                  var e2, i2, s2, n2, o;
                  return "horizontal" === this.orientation ? (e2 = this.elementSize.width, i2 = t2.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e2 = this.elementSize.height, i2 = t2.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s2 = i2 / e2, s2 > 1 && (s2 = 1), 0 > s2 && (s2 = 0), "vertical" === this.orientation && (s2 = 1 - s2), n2 = this._valueMax() - this._valueMin(), o = this._valueMin() + s2 * n2, this._trimAlignValue(o);
                },
                _uiHash: function (t2, e2, i2) {
                  var s2 = {
                    handle: this.handles[t2],
                    handleIndex: t2,
                    value: void 0 !== e2 ? e2 : this.value()
                  };
                  return this._hasMultipleValues() && (s2.value = void 0 !== e2 ? e2 : this.values(t2), s2.values = i2 || this.values()), s2;
                },
                _hasMultipleValues: function () {
                  return this.options.values && this.options.values.length;
                },
                _start: function (t2, e2) {
                  return this._trigger("start", t2, this._uiHash(e2));
                },
                _slide: function (t2, e2, i2) {
                  var s2,
                    n2,
                    o = this.value(),
                    a = this.values();
                  this._hasMultipleValues() && (n2 = this.values(e2 ? 0 : 1), o = this.values(e2), 2 === this.options.values.length && this.options.range === true && (i2 = 0 === e2 ? Math.min(n2, i2) : Math.max(n2, i2)), a[e2] = i2), i2 !== o && (s2 = this._trigger("slide", t2, this._uiHash(e2, i2, a)), s2 !== false && (this._hasMultipleValues() ? this.values(e2, i2) : this.value(i2)));
                },
                _stop: function (t2, e2) {
                  this._trigger("stop", t2, this._uiHash(e2));
                },
                _change: function (t2, e2) {
                  this._keySliding || this._mouseSliding || (this._lastChangedValue = e2, this._trigger("change", t2, this._uiHash(e2)));
                },
                value: function (t2) {
                  return arguments.length ? (this.options.value = this._trimAlignValue(t2), this._refreshValue(), this._change(null, 0), void 0) : this._value();
                },
                values: function (e2, i2) {
                  var s2, n2, o;
                  if (arguments.length > 1) return this.options.values[e2] = this._trimAlignValue(i2), this._refreshValue(), this._change(null, e2), void 0;
                  if (!arguments.length) return this._values();
                  if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e2) : this.value();
                  for (s2 = this.options.values, n2 = arguments[0], o = 0; s2.length > o; o += 1) s2[o] = this._trimAlignValue(n2[o]), this._change(null, o);
                  this._refreshValue();
                },
                _setOption: function (e2, i2) {
                  var s2,
                    n2 = 0;
                  switch ("range" === e2 && this.options.range === true && ("min" === i2 ? (this.options.value = this._values(0), this.options.values = null) : "max" === i2 && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n2 = this.options.values.length), this._super(e2, i2), e2) {
                    case "orientation":
                      this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i2), this.handles.css("horizontal" === i2 ? "bottom" : "left", "");
                      break;
                    case "value":
                      this._animateOff = true, this._refreshValue(), this._change(null, 0), this._animateOff = false;
                      break;
                    case "values":
                      for (this._animateOff = true, this._refreshValue(), s2 = n2 - 1; s2 >= 0; s2--) this._change(null, s2);
                      this._animateOff = false;
                      break;
                    case "step":
                    case "min":
                    case "max":
                      this._animateOff = true, this._calculateNewMax(), this._refreshValue(), this._animateOff = false;
                      break;
                    case "range":
                      this._animateOff = true, this._refresh(), this._animateOff = false;
                  }
                },
                _setOptionDisabled: function (t2) {
                  this._super(t2), this._toggleClass(null, "ui-state-disabled", !!t2);
                },
                _value: function () {
                  var t2 = this.options.value;
                  return t2 = this._trimAlignValue(t2);
                },
                _values: function (t2) {
                  var e2, i2, s2;
                  if (arguments.length) return e2 = this.options.values[t2], e2 = this._trimAlignValue(e2);
                  if (this._hasMultipleValues()) {
                    for (i2 = this.options.values.slice(), s2 = 0; i2.length > s2; s2 += 1) i2[s2] = this._trimAlignValue(i2[s2]);
                    return i2;
                  }
                  return [];
                },
                _trimAlignValue: function (t2) {
                  if (this._valueMin() >= t2) return this._valueMin();
                  if (t2 >= this._valueMax()) return this._valueMax();
                  var e2 = this.options.step > 0 ? this.options.step : 1,
                    i2 = (t2 - this._valueMin()) % e2,
                    s2 = t2 - i2;
                  return 2 * Math.abs(i2) >= e2 && (s2 += i2 > 0 ? e2 : -e2), parseFloat(s2.toFixed(5));
                },
                _calculateNewMax: function () {
                  var t2 = this.options.max,
                    e2 = this._valueMin(),
                    i2 = this.options.step,
                    s2 = Math.round((t2 - e2) / i2) * i2;
                  t2 = s2 + e2, t2 > this.options.max && (t2 -= i2), this.max = parseFloat(t2.toFixed(this._precision()));
                },
                _precision: function () {
                  var t2 = this._precisionOf(this.options.step);
                  return null !== this.options.min && (t2 = Math.max(t2, this._precisionOf(this.options.min))), t2;
                },
                _precisionOf: function (t2) {
                  var e2 = "" + t2,
                    i2 = e2.indexOf(".");
                  return -1 === i2 ? 0 : e2.length - i2 - 1;
                },
                _valueMin: function () {
                  return this.options.min;
                },
                _valueMax: function () {
                  return this.max;
                },
                _refreshRange: function (t2) {
                  "vertical" === t2 && this.range.css({
                    width: "",
                    left: ""
                  }), "horizontal" === t2 && this.range.css({
                    height: "",
                    bottom: ""
                  });
                },
                _refreshValue: function () {
                  var e2,
                    i2,
                    s2,
                    n2,
                    o,
                    a = this.options.range,
                    r = this.options,
                    l = this,
                    h2 = this._animateOff ? false : r.animate,
                    c = {};
                  this._hasMultipleValues() ? this.handles.each(function (s3) {
                    i2 = 100 * ((l.values(s3) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i2 + "%", t(this).stop(1, 1)[h2 ? "animate" : "css"](c, r.animate), l.options.range === true && ("horizontal" === l.orientation ? (0 === s3 && l.range.stop(1, 1)[h2 ? "animate" : "css"]({
                      left: i2 + "%"
                    }, r.animate), 1 === s3 && l.range[h2 ? "animate" : "css"]({
                      width: i2 - e2 + "%"
                    }, {
                      queue: false,
                      duration: r.animate
                    })) : (0 === s3 && l.range.stop(1, 1)[h2 ? "animate" : "css"]({
                      bottom: i2 + "%"
                    }, r.animate), 1 === s3 && l.range[h2 ? "animate" : "css"]({
                      height: i2 - e2 + "%"
                    }, {
                      queue: false,
                      duration: r.animate
                    }))), e2 = i2;
                  }) : (s2 = this.value(), n2 = this._valueMin(), o = this._valueMax(), i2 = o !== n2 ? 100 * ((s2 - n2) / (o - n2)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i2 + "%", this.handle.stop(1, 1)[h2 ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h2 ? "animate" : "css"]({
                    width: i2 + "%"
                  }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h2 ? "animate" : "css"]({
                    width: 100 - i2 + "%"
                  }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h2 ? "animate" : "css"]({
                    height: i2 + "%"
                  }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h2 ? "animate" : "css"]({
                    height: 100 - i2 + "%"
                  }, r.animate));
                },
                _handleEvents: {
                  keydown: function (e2) {
                    var i2,
                      s2,
                      n2,
                      o,
                      a = t(e2.target).data("ui-slider-handle-index");
                    switch (e2.keyCode) {
                      case t.ui.keyCode.HOME:
                      case t.ui.keyCode.END:
                      case t.ui.keyCode.PAGE_UP:
                      case t.ui.keyCode.PAGE_DOWN:
                      case t.ui.keyCode.UP:
                      case t.ui.keyCode.RIGHT:
                      case t.ui.keyCode.DOWN:
                      case t.ui.keyCode.LEFT:
                        if (e2.preventDefault(), !this._keySliding && (this._keySliding = true, this._addClass(t(e2.target), null, "ui-state-active"), i2 = this._start(e2, a), i2 === false)) return;
                    }
                    switch (o = this.options.step, s2 = n2 = this._hasMultipleValues() ? this.values(a) : this.value(), e2.keyCode) {
                      case t.ui.keyCode.HOME:
                        n2 = this._valueMin();
                        break;
                      case t.ui.keyCode.END:
                        n2 = this._valueMax();
                        break;
                      case t.ui.keyCode.PAGE_UP:
                        n2 = this._trimAlignValue(s2 + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                      case t.ui.keyCode.PAGE_DOWN:
                        n2 = this._trimAlignValue(s2 - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                      case t.ui.keyCode.UP:
                      case t.ui.keyCode.RIGHT:
                        if (s2 === this._valueMax()) return;
                        n2 = this._trimAlignValue(s2 + o);
                        break;
                      case t.ui.keyCode.DOWN:
                      case t.ui.keyCode.LEFT:
                        if (s2 === this._valueMin()) return;
                        n2 = this._trimAlignValue(s2 - o);
                    }
                    this._slide(e2, a, n2);
                  },
                  keyup: function (e2) {
                    var i2 = t(e2.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = false, this._stop(e2, i2), this._change(e2, i2), this._removeClass(t(e2.target), null, "ui-state-active"));
                  }
                }
              }), t.widget("ui.tooltip", {
                version: "1.12.1",
                options: {
                  classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                  },
                  content: function () {
                    var e2 = t(this).attr("title") || "";
                    return t("<a>").text(e2).html();
                  },
                  hide: true,
                  items: "[title]:not([disabled])",
                  position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                  },
                  show: true,
                  track: false,
                  close: null,
                  open: null
                },
                _addDescribedBy: function (e2, i2) {
                  var s2 = (e2.attr("aria-describedby") || "").split(/\s+/);
                  s2.push(i2), e2.data("ui-tooltip-id", i2).attr("aria-describedby", t.trim(s2.join(" ")));
                },
                _removeDescribedBy: function (e2) {
                  var i2 = e2.data("ui-tooltip-id"),
                    s2 = (e2.attr("aria-describedby") || "").split(/\s+/),
                    n2 = t.inArray(i2, s2);
                  -1 !== n2 && s2.splice(n2, 1), e2.removeData("ui-tooltip-id"), s2 = t.trim(s2.join(" ")), s2 ? e2.attr("aria-describedby", s2) : e2.removeAttr("aria-describedby");
                },
                _create: function () {
                  this._on({
                    mouseover: "open",
                    focusin: "open"
                  }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                  }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]);
                },
                _setOption: function (e2, i2) {
                  var s2 = this;
                  this._super(e2, i2), "content" === e2 && t.each(this.tooltips, function (t2, e3) {
                    s2._updateContent(e3.element);
                  });
                },
                _setOptionDisabled: function (t2) {
                  this[t2 ? "_disable" : "_enable"]();
                },
                _disable: function () {
                  var e2 = this;
                  t.each(this.tooltips, function (i2, s2) {
                    var n2 = t.Event("blur");
                    n2.target = n2.currentTarget = s2.element[0], e2.close(n2, true);
                  }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                    var e3 = t(this);
                    return e3.is("[title]") ? e3.data("ui-tooltip-title", e3.attr("title")).removeAttr("title") : void 0;
                  }));
                },
                _enable: function () {
                  this.disabledTitles.each(function () {
                    var e2 = t(this);
                    e2.data("ui-tooltip-title") && e2.attr("title", e2.data("ui-tooltip-title"));
                  }), this.disabledTitles = t([]);
                },
                open: function (e2) {
                  var i2 = this,
                    s2 = t(e2 ? e2.target : this.element).closest(this.options.items);
                  s2.length && !s2.data("ui-tooltip-id") && (s2.attr("title") && s2.data("ui-tooltip-title", s2.attr("title")), s2.data("ui-tooltip-open", true), e2 && "mouseover" === e2.type && s2.parents().each(function () {
                    var e3,
                      s3 = t(this);
                    s3.data("ui-tooltip-open") && (e3 = t.Event("blur"), e3.target = e3.currentTarget = this, i2.close(e3, true)), s3.attr("title") && (s3.uniqueId(), i2.parents[this.id] = {
                      element: this,
                      title: s3.attr("title")
                    }, s3.attr("title", ""));
                  }), this._registerCloseHandlers(e2, s2), this._updateContent(s2, e2));
                },
                _updateContent: function (t2, e2) {
                  var i2,
                    s2 = this.options.content,
                    n2 = this,
                    o = e2 ? e2.type : null;
                  return "string" == typeof s2 || s2.nodeType || s2.jquery ? this._open(e2, t2, s2) : (i2 = s2.call(t2[0], function (i3) {
                    n2._delay(function () {
                      t2.data("ui-tooltip-open") && (e2 && (e2.type = o), this._open(e2, t2, i3));
                    });
                  }), i2 && this._open(e2, t2, i2), void 0);
                },
                _open: function (e2, i2, s2) {
                  function n2(t2) {
                    h2.of = t2, a.is(":hidden") || a.position(h2);
                  }
                  var o,
                    a,
                    r,
                    l,
                    h2 = t.extend({}, this.options.position);
                  if (s2) {
                    if (o = this._find(i2)) return o.tooltip.find(".ui-tooltip-content").html(s2), void 0;
                    i2.is("[title]") && (e2 && "mouseover" === e2.type ? i2.attr("title", "") : i2.removeAttr("title")), o = this._tooltip(i2), a = o.tooltip, this._addDescribedBy(i2, a.attr("id")), a.find(".ui-tooltip-content").html(s2), this.liveRegion.children().hide(), l = t("<div>").html(a.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e2 && /^mouse/.test(e2.type) ? (this._on(this.document, {
                      mousemove: n2
                    }), n2(e2)) : a.position(t.extend({
                      of: i2
                    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                      a.is(":visible") && (n2(h2.of), clearInterval(r));
                    }, t.fx.interval)), this._trigger("open", e2, {
                      tooltip: a
                    });
                  }
                },
                _registerCloseHandlers: function (e2, i2) {
                  var s2 = {
                    keyup: function (e3) {
                      if (e3.keyCode === t.ui.keyCode.ESCAPE) {
                        var s3 = t.Event(e3);
                        s3.currentTarget = i2[0], this.close(s3, true);
                      }
                    }
                  };
                  i2[0] !== this.element[0] && (s2.remove = function () {
                    this._removeTooltip(this._find(i2).tooltip);
                  }), e2 && "mouseover" !== e2.type || (s2.mouseleave = "close"), e2 && "focusin" !== e2.type || (s2.focusout = "close"), this._on(true, i2, s2);
                },
                close: function (e2) {
                  var i2,
                    s2 = this,
                    n2 = t(e2 ? e2.currentTarget : this.element),
                    o = this._find(n2);
                  return o ? (i2 = o.tooltip, o.closing || (clearInterval(this.delayedShow), n2.data("ui-tooltip-title") && !n2.attr("title") && n2.attr("title", n2.data("ui-tooltip-title")), this._removeDescribedBy(n2), o.hiding = true, i2.stop(true), this._hide(i2, this.options.hide, function () {
                    s2._removeTooltip(t(this));
                  }), n2.removeData("ui-tooltip-open"), this._off(n2, "mouseleave focusout keyup"), n2[0] !== this.element[0] && this._off(n2, "remove"), this._off(this.document, "mousemove"), e2 && "mouseleave" === e2.type && t.each(this.parents, function (e3, i3) {
                    t(i3.element).attr("title", i3.title), delete s2.parents[e3];
                  }), o.closing = true, this._trigger("close", e2, {
                    tooltip: i2
                  }), o.hiding || (o.closing = false)), void 0) : (n2.removeData("ui-tooltip-open"), void 0);
                },
                _tooltip: function (e2) {
                  var i2 = t("<div>").attr("role", "tooltip"),
                    s2 = t("<div>").appendTo(i2),
                    n2 = i2.uniqueId().attr("id");
                  return this._addClass(s2, "ui-tooltip-content"), this._addClass(i2, "ui-tooltip", "ui-widget ui-widget-content"), i2.appendTo(this._appendTo(e2)), this.tooltips[n2] = {
                    element: e2,
                    tooltip: i2
                  };
                },
                _find: function (t2) {
                  var e2 = t2.data("ui-tooltip-id");
                  return e2 ? this.tooltips[e2] : null;
                },
                _removeTooltip: function (t2) {
                  t2.remove(), delete this.tooltips[t2.attr("id")];
                },
                _appendTo: function (t2) {
                  var e2 = t2.closest(".ui-front, dialog");
                  return e2.length || (e2 = this.document[0].body), e2;
                },
                _destroy: function () {
                  var e2 = this;
                  t.each(this.tooltips, function (i2, s2) {
                    var n2 = t.Event("blur"),
                      o = s2.element;
                    n2.target = n2.currentTarget = o[0], e2.close(n2, true), t("#" + i2).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"));
                  }), this.liveRegion.remove();
                }
              }), t.uiBackCompat !== false && t.widget("ui.tooltip", t.ui.tooltip, {
                options: {
                  tooltipClass: null
                },
                _tooltip: function () {
                  var t2 = this._superApply(arguments);
                  return this.options.tooltipClass && t2.tooltip.addClass(this.options.tooltipClass), t2;
                }
              }), t.ui.tooltip;
            });
            /*! jQuery UI - v1.12.1 - 2018-05-24
            * https://jqueryui.com
            * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/mouse.js, widgets/slider.js, widgets/tooltip.js
            * Copyright jQuery Foundation and other contributors; Licensed MIT */
            (function (t) {
              "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
            })(function (t) {
              function e(t2) {
                for (var e2 = t2.css("visibility"); "inherit" === e2;) t2 = t2.parent(), e2 = t2.css("visibility");
                return "hidden" !== e2;
              }
              t.ui = t.ui || {}, t.ui.version = "1.12.1";
              var i = 0,
                s = Array.prototype.slice;
              t.cleanData = /* @__PURE__ */function (e2) {
                return function (i2) {
                  var s2, n2, o;
                  for (o = 0; null != (n2 = i2[o]); o++) try {
                    s2 = t._data(n2, "events"), s2 && s2.remove && t(n2).triggerHandler("remove");
                  } catch (a) {}
                  e2(i2);
                };
              }(t.cleanData), t.widget = function (e2, i2, s2) {
                var n2,
                  o,
                  a,
                  r = {},
                  l = e2.split(".")[0];
                e2 = e2.split(".")[1];
                var h2 = l + "-" + e2;
                return s2 || (s2 = i2, i2 = t.Widget), t.isArray(s2) && (s2 = t.extend.apply(null, [{}].concat(s2))), t.expr[":"][h2.toLowerCase()] = function (e3) {
                  return !!t.data(e3, h2);
                }, t[l] = t[l] || {}, n2 = t[l][e2], o = t[l][e2] = function (t2, e3) {
                  return this._createWidget ? (arguments.length && this._createWidget(t2, e3), void 0) : new o(t2, e3);
                }, t.extend(o, n2, {
                  version: s2.version,
                  _proto: t.extend({}, s2),
                  _childConstructors: []
                }), a = new i2(), a.options = t.widget.extend({}, a.options), t.each(s2, function (e3, s3) {
                  return t.isFunction(s3) ? (r[e3] = /* @__PURE__ */function () {
                    function t2() {
                      return i2.prototype[e3].apply(this, arguments);
                    }
                    function n3(t3) {
                      return i2.prototype[e3].apply(this, t3);
                    }
                    return function () {
                      var e4,
                        i3 = this._super,
                        o2 = this._superApply;
                      return this._super = t2, this._superApply = n3, e4 = s3.apply(this, arguments), this._super = i3, this._superApply = o2, e4;
                    };
                  }(), void 0) : (r[e3] = s3, void 0);
                }), o.prototype = t.widget.extend(a, {
                  widgetEventPrefix: n2 ? a.widgetEventPrefix || e2 : e2
                }, r, {
                  constructor: o,
                  namespace: l,
                  widgetName: e2,
                  widgetFullName: h2
                }), n2 ? (t.each(n2._childConstructors, function (e3, i3) {
                  var s3 = i3.prototype;
                  t.widget(s3.namespace + "." + s3.widgetName, o, i3._proto);
                }), delete n2._childConstructors) : i2._childConstructors.push(o), t.widget.bridge(e2, o), o;
              }, t.widget.extend = function (e2) {
                for (var i2, n2, o = s.call(arguments, 1), a = 0, r = o.length; r > a; a++) for (i2 in o[a]) n2 = o[a][i2], o[a].hasOwnProperty(i2) && void 0 !== n2 && (e2[i2] = t.isPlainObject(n2) ? t.isPlainObject(e2[i2]) ? t.widget.extend({}, e2[i2], n2) : t.widget.extend({}, n2) : n2);
                return e2;
              }, t.widget.bridge = function (e2, i2) {
                var n2 = i2.prototype.widgetFullName || e2;
                t.fn[e2] = function (o) {
                  var a = "string" == typeof o,
                    r = s.call(arguments, 1),
                    l = this;
                  return a ? this.length || "instance" !== o ? this.each(function () {
                    var i3,
                      s2 = t.data(this, n2);
                    return "instance" === o ? (l = s2, false) : s2 ? t.isFunction(s2[o]) && "_" !== o.charAt(0) ? (i3 = s2[o].apply(s2, r), i3 !== s2 && void 0 !== i3 ? (l = i3 && i3.jquery ? l.pushStack(i3.get()) : i3, false) : void 0) : t.error("no such method '" + o + "' for " + e2 + " widget instance") : t.error("cannot call methods on " + e2 + " prior to initialization; attempted to call method '" + o + "'");
                  }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function () {
                    var e3 = t.data(this, n2);
                    e3 ? (e3.option(o || {}), e3._init && e3._init()) : t.data(this, n2, new i2(o, this));
                  })), l;
                };
              }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                  classes: {},
                  disabled: false,
                  create: null
                },
                _createWidget: function (e2, s2) {
                  s2 = t(s2 || this.defaultElement || this)[0], this.element = t(s2), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s2 !== this && (t.data(s2, this.widgetFullName, this), this._on(true, this.element, {
                    remove: function (t2) {
                      t2.target === s2 && this.destroy();
                    }
                  }), this.document = t(s2.style ? s2.ownerDocument : s2.document || s2), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e2), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
                },
                _getCreateOptions: function () {
                  return {};
                },
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function () {
                  var e2 = this;
                  this._destroy(), t.each(this.classesElementLookup, function (t2, i2) {
                    e2._removeClass(i2, t2);
                  }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
                },
                _destroy: t.noop,
                widget: function () {
                  return this.element;
                },
                option: function (e2, i2) {
                  var s2,
                    n2,
                    o,
                    a = e2;
                  if (0 === arguments.length) return t.widget.extend({}, this.options);
                  if ("string" == typeof e2) if (a = {}, s2 = e2.split("."), e2 = s2.shift(), s2.length) {
                    for (n2 = a[e2] = t.widget.extend({}, this.options[e2]), o = 0; s2.length - 1 > o; o++) n2[s2[o]] = n2[s2[o]] || {}, n2 = n2[s2[o]];
                    if (e2 = s2.pop(), 1 === arguments.length) return void 0 === n2[e2] ? null : n2[e2];
                    n2[e2] = i2;
                  } else {
                    if (1 === arguments.length) return void 0 === this.options[e2] ? null : this.options[e2];
                    a[e2] = i2;
                  }
                  return this._setOptions(a), this;
                },
                _setOptions: function (t2) {
                  var e2;
                  for (e2 in t2) this._setOption(e2, t2[e2]);
                  return this;
                },
                _setOption: function (t2, e2) {
                  return "classes" === t2 && this._setOptionClasses(e2), this.options[t2] = e2, "disabled" === t2 && this._setOptionDisabled(e2), this;
                },
                _setOptionClasses: function (e2) {
                  var i2, s2, n2;
                  for (i2 in e2) n2 = this.classesElementLookup[i2], e2[i2] !== this.options.classes[i2] && n2 && n2.length && (s2 = t(n2.get()), this._removeClass(n2, i2), s2.addClass(this._classes({
                    element: s2,
                    keys: i2,
                    classes: e2,
                    add: true
                  })));
                },
                _setOptionDisabled: function (t2) {
                  this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t2), t2 && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
                },
                enable: function () {
                  return this._setOptions({
                    disabled: false
                  });
                },
                disable: function () {
                  return this._setOptions({
                    disabled: true
                  });
                },
                _classes: function (e2) {
                  function i2(i3, o) {
                    var a, r;
                    for (r = 0; i3.length > r; r++) a = n2.classesElementLookup[i3[r]] || t(), a = e2.add ? t(t.unique(a.get().concat(e2.element.get()))) : t(a.not(e2.element).get()), n2.classesElementLookup[i3[r]] = a, s2.push(i3[r]), o && e2.classes[i3[r]] && s2.push(e2.classes[i3[r]]);
                  }
                  var s2 = [],
                    n2 = this;
                  return e2 = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                  }, e2), this._on(e2.element, {
                    remove: "_untrackClassesElement"
                  }), e2.keys && i2(e2.keys.match(/\S+/g) || [], true), e2.extra && i2(e2.extra.match(/\S+/g) || []), s2.join(" ");
                },
                _untrackClassesElement: function (e2) {
                  var i2 = this;
                  t.each(i2.classesElementLookup, function (s2, n2) {
                    -1 !== t.inArray(e2.target, n2) && (i2.classesElementLookup[s2] = t(n2.not(e2.target).get()));
                  });
                },
                _removeClass: function (t2, e2, i2) {
                  return this._toggleClass(t2, e2, i2, false);
                },
                _addClass: function (t2, e2, i2) {
                  return this._toggleClass(t2, e2, i2, true);
                },
                _toggleClass: function (t2, e2, i2, s2) {
                  s2 = "boolean" == typeof s2 ? s2 : i2;
                  var n2 = "string" == typeof t2 || null === t2,
                    o = {
                      extra: n2 ? e2 : i2,
                      keys: n2 ? t2 : e2,
                      element: n2 ? this.element : t2,
                      add: s2
                    };
                  return o.element.toggleClass(this._classes(o), s2), this;
                },
                _on: function (e2, i2, s2) {
                  var n2,
                    o = this;
                  "boolean" != typeof e2 && (s2 = i2, i2 = e2, e2 = false), s2 ? (i2 = n2 = t(i2), this.bindings = this.bindings.add(i2)) : (s2 = i2, i2 = this.element, n2 = this.widget()), t.each(s2, function (s3, a) {
                    function r() {
                      return e2 || o.options.disabled !== true && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                    var l = s3.match(/^([\w:-]*)\s*(.*)$/),
                      h2 = l[1] + o.eventNamespace,
                      c = l[2];
                    c ? n2.on(h2, c, r) : i2.on(h2, r);
                  });
                },
                _off: function (e2, i2) {
                  i2 = (i2 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e2.off(i2).off(i2), this.bindings = t(this.bindings.not(e2).get()), this.focusable = t(this.focusable.not(e2).get()), this.hoverable = t(this.hoverable.not(e2).get());
                },
                _delay: function (t2, e2) {
                  function i2() {
                    return ("string" == typeof t2 ? s2[t2] : t2).apply(s2, arguments);
                  }
                  var s2 = this;
                  return setTimeout(i2, e2 || 0);
                },
                _hoverable: function (e2) {
                  this.hoverable = this.hoverable.add(e2), this._on(e2, {
                    mouseenter: function (e3) {
                      this._addClass(t(e3.currentTarget), null, "ui-state-hover");
                    },
                    mouseleave: function (e3) {
                      this._removeClass(t(e3.currentTarget), null, "ui-state-hover");
                    }
                  });
                },
                _focusable: function (e2) {
                  this.focusable = this.focusable.add(e2), this._on(e2, {
                    focusin: function (e3) {
                      this._addClass(t(e3.currentTarget), null, "ui-state-focus");
                    },
                    focusout: function (e3) {
                      this._removeClass(t(e3.currentTarget), null, "ui-state-focus");
                    }
                  });
                },
                _trigger: function (e2, i2, s2) {
                  var n2,
                    o,
                    a = this.options[e2];
                  if (s2 = s2 || {}, i2 = t.Event(i2), i2.type = (e2 === this.widgetEventPrefix ? e2 : this.widgetEventPrefix + e2).toLowerCase(), i2.target = this.element[0], o = i2.originalEvent) for (n2 in o) n2 in i2 || (i2[n2] = o[n2]);
                  return this.element.trigger(i2, s2), !(t.isFunction(a) && a.apply(this.element[0], [i2].concat(s2)) === false || i2.isDefaultPrevented());
                }
              }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
              }, function (e2, i2) {
                t.Widget.prototype["_" + e2] = function (s2, n2, o) {
                  "string" == typeof n2 && (n2 = {
                    effect: n2
                  });
                  var a,
                    r = n2 ? n2 === true || "number" == typeof n2 ? i2 : n2.effect || i2 : e2;
                  n2 = n2 || {}, "number" == typeof n2 && (n2 = {
                    duration: n2
                  }), a = !t.isEmptyObject(n2), n2.complete = o, n2.delay && s2.delay(n2.delay), a && t.effects && t.effects.effect[r] ? s2[e2](n2) : r !== e2 && s2[r] ? s2[r](n2.duration, n2.easing, o) : s2.queue(function (i3) {
                    t(this)[e2](), o && o.call(s2[0]), i3();
                  });
                };
              }), t.widget, function () {
                function e2(t2, e3, i3) {
                  return [parseFloat(t2[0]) * (u.test(t2[0]) ? e3 / 100 : 1), parseFloat(t2[1]) * (u.test(t2[1]) ? i3 / 100 : 1)];
                }
                function i2(e3, i3) {
                  return parseInt(t.css(e3, i3), 10) || 0;
                }
                function s2(e3) {
                  var i3 = e3[0];
                  return 9 === i3.nodeType ? {
                    width: e3.width(),
                    height: e3.height(),
                    offset: {
                      top: 0,
                      left: 0
                    }
                  } : t.isWindow(i3) ? {
                    width: e3.width(),
                    height: e3.height(),
                    offset: {
                      top: e3.scrollTop(),
                      left: e3.scrollLeft()
                    }
                  } : i3.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                      top: i3.pageY,
                      left: i3.pageX
                    }
                  } : {
                    width: e3.outerWidth(),
                    height: e3.outerHeight(),
                    offset: e3.offset()
                  };
                }
                var n2,
                  o = Math.max,
                  a = Math.abs,
                  r = /left|center|right/,
                  l = /top|center|bottom/,
                  h2 = /[\+\-]\d+(\.[\d]+)?%?/,
                  c = /^\w+/,
                  u = /%$/,
                  d = t.fn.position;
                t.position = {
                  scrollbarWidth: function () {
                    if (void 0 !== n2) return n2;
                    var e3,
                      i3,
                      s3 = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                      o2 = s3.children()[0];
                    return t("body").append(s3), e3 = o2.offsetWidth, s3.css("overflow", "scroll"), i3 = o2.offsetWidth, e3 === i3 && (i3 = s3[0].clientWidth), s3.remove(), n2 = e3 - i3;
                  },
                  getScrollInfo: function (e3) {
                    var i3 = e3.isWindow || e3.isDocument ? "" : e3.element.css("overflow-x"),
                      s3 = e3.isWindow || e3.isDocument ? "" : e3.element.css("overflow-y"),
                      n3 = "scroll" === i3 || "auto" === i3 && e3.width < e3.element[0].scrollWidth,
                      o2 = "scroll" === s3 || "auto" === s3 && e3.height < e3.element[0].scrollHeight;
                    return {
                      width: o2 ? t.position.scrollbarWidth() : 0,
                      height: n3 ? t.position.scrollbarWidth() : 0
                    };
                  },
                  getWithinInfo: function (e3) {
                    var i3 = t(e3 || window),
                      s3 = t.isWindow(i3[0]),
                      n3 = !!i3[0] && 9 === i3[0].nodeType,
                      o2 = !s3 && !n3;
                    return {
                      element: i3,
                      isWindow: s3,
                      isDocument: n3,
                      offset: o2 ? t(e3).offset() : {
                        left: 0,
                        top: 0
                      },
                      scrollLeft: i3.scrollLeft(),
                      scrollTop: i3.scrollTop(),
                      width: i3.outerWidth(),
                      height: i3.outerHeight()
                    };
                  }
                }, t.fn.position = function (n3) {
                  if (!n3 || !n3.of) return d.apply(this, arguments);
                  n3 = t.extend({}, n3);
                  var u2,
                    p,
                    f,
                    g,
                    m,
                    _,
                    v = t(n3.of),
                    b = t.position.getWithinInfo(n3.within),
                    y = t.position.getScrollInfo(b),
                    w = (n3.collision || "flip").split(" "),
                    k = {};
                  return _ = s2(v), v[0].preventDefault && (n3.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
                    var t2,
                      e3,
                      i3 = (n3[this] || "").split(" ");
                    1 === i3.length && (i3 = r.test(i3[0]) ? i3.concat(["center"]) : l.test(i3[0]) ? ["center"].concat(i3) : ["center", "center"]), i3[0] = r.test(i3[0]) ? i3[0] : "center", i3[1] = l.test(i3[1]) ? i3[1] : "center", t2 = h2.exec(i3[0]), e3 = h2.exec(i3[1]), k[this] = [t2 ? t2[0] : 0, e3 ? e3[0] : 0], n3[this] = [c.exec(i3[0])[0], c.exec(i3[1])[0]];
                  }), 1 === w.length && (w[1] = w[0]), "right" === n3.at[0] ? m.left += p : "center" === n3.at[0] && (m.left += p / 2), "bottom" === n3.at[1] ? m.top += f : "center" === n3.at[1] && (m.top += f / 2), u2 = e2(k.at, p, f), m.left += u2[0], m.top += u2[1], this.each(function () {
                    var s3,
                      r2,
                      l2 = t(this),
                      h3 = l2.outerWidth(),
                      c2 = l2.outerHeight(),
                      d2 = i2(this, "marginLeft"),
                      _2 = i2(this, "marginTop"),
                      x = h3 + d2 + i2(this, "marginRight") + y.width,
                      C = c2 + _2 + i2(this, "marginBottom") + y.height,
                      D = t.extend({}, m),
                      T = e2(k.my, l2.outerWidth(), l2.outerHeight());
                    "right" === n3.my[0] ? D.left -= h3 : "center" === n3.my[0] && (D.left -= h3 / 2), "bottom" === n3.my[1] ? D.top -= c2 : "center" === n3.my[1] && (D.top -= c2 / 2), D.left += T[0], D.top += T[1], s3 = {
                      marginLeft: d2,
                      marginTop: _2
                    }, t.each(["left", "top"], function (e3, i3) {
                      t.ui.position[w[e3]] && t.ui.position[w[e3]][i3](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: h3,
                        elemHeight: c2,
                        collisionPosition: s3,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [u2[0] + T[0], u2[1] + T[1]],
                        my: n3.my,
                        at: n3.at,
                        within: b,
                        elem: l2
                      });
                    }), n3.using && (r2 = function (t2) {
                      var e3 = g.left - D.left,
                        i3 = e3 + p - h3,
                        s4 = g.top - D.top,
                        r3 = s4 + f - c2,
                        u3 = {
                          target: {
                            element: v,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: f
                          },
                          element: {
                            element: l2,
                            left: D.left,
                            top: D.top,
                            width: h3,
                            height: c2
                          },
                          horizontal: 0 > i3 ? "left" : e3 > 0 ? "right" : "center",
                          vertical: 0 > r3 ? "top" : s4 > 0 ? "bottom" : "middle"
                        };
                      h3 > p && p > a(e3 + i3) && (u3.horizontal = "center"), c2 > f && f > a(s4 + r3) && (u3.vertical = "middle"), u3.important = o(a(e3), a(i3)) > o(a(s4), a(r3)) ? "horizontal" : "vertical", n3.using.call(this, t2, u3);
                    }), l2.offset(t.extend(D, {
                      using: r2
                    }));
                  });
                }, t.ui.position = {
                  fit: {
                    left: function (t2, e3) {
                      var i3,
                        s3 = e3.within,
                        n3 = s3.isWindow ? s3.scrollLeft : s3.offset.left,
                        a2 = s3.width,
                        r2 = t2.left - e3.collisionPosition.marginLeft,
                        l2 = n3 - r2,
                        h3 = r2 + e3.collisionWidth - a2 - n3;
                      e3.collisionWidth > a2 ? l2 > 0 && 0 >= h3 ? (i3 = t2.left + l2 + e3.collisionWidth - a2 - n3, t2.left += l2 - i3) : t2.left = h3 > 0 && 0 >= l2 ? n3 : l2 > h3 ? n3 + a2 - e3.collisionWidth : n3 : l2 > 0 ? t2.left += l2 : h3 > 0 ? t2.left -= h3 : t2.left = o(t2.left - r2, t2.left);
                    },
                    top: function (t2, e3) {
                      var i3,
                        s3 = e3.within,
                        n3 = s3.isWindow ? s3.scrollTop : s3.offset.top,
                        a2 = e3.within.height,
                        r2 = t2.top - e3.collisionPosition.marginTop,
                        l2 = n3 - r2,
                        h3 = r2 + e3.collisionHeight - a2 - n3;
                      e3.collisionHeight > a2 ? l2 > 0 && 0 >= h3 ? (i3 = t2.top + l2 + e3.collisionHeight - a2 - n3, t2.top += l2 - i3) : t2.top = h3 > 0 && 0 >= l2 ? n3 : l2 > h3 ? n3 + a2 - e3.collisionHeight : n3 : l2 > 0 ? t2.top += l2 : h3 > 0 ? t2.top -= h3 : t2.top = o(t2.top - r2, t2.top);
                    }
                  },
                  flip: {
                    left: function (t2, e3) {
                      var i3,
                        s3,
                        n3 = e3.within,
                        o2 = n3.offset.left + n3.scrollLeft,
                        r2 = n3.width,
                        l2 = n3.isWindow ? n3.scrollLeft : n3.offset.left,
                        h3 = t2.left - e3.collisionPosition.marginLeft,
                        c2 = h3 - l2,
                        u2 = h3 + e3.collisionWidth - r2 - l2,
                        d2 = "left" === e3.my[0] ? -e3.elemWidth : "right" === e3.my[0] ? e3.elemWidth : 0,
                        p = "left" === e3.at[0] ? e3.targetWidth : "right" === e3.at[0] ? -e3.targetWidth : 0,
                        f = -2 * e3.offset[0];
                      0 > c2 ? (i3 = t2.left + d2 + p + f + e3.collisionWidth - r2 - o2, (0 > i3 || a(c2) > i3) && (t2.left += d2 + p + f)) : u2 > 0 && (s3 = t2.left - e3.collisionPosition.marginLeft + d2 + p + f - l2, (s3 > 0 || u2 > a(s3)) && (t2.left += d2 + p + f));
                    },
                    top: function (t2, e3) {
                      var i3,
                        s3,
                        n3 = e3.within,
                        o2 = n3.offset.top + n3.scrollTop,
                        r2 = n3.height,
                        l2 = n3.isWindow ? n3.scrollTop : n3.offset.top,
                        h3 = t2.top - e3.collisionPosition.marginTop,
                        c2 = h3 - l2,
                        u2 = h3 + e3.collisionHeight - r2 - l2,
                        d2 = "top" === e3.my[1],
                        p = d2 ? -e3.elemHeight : "bottom" === e3.my[1] ? e3.elemHeight : 0,
                        f = "top" === e3.at[1] ? e3.targetHeight : "bottom" === e3.at[1] ? -e3.targetHeight : 0,
                        g = -2 * e3.offset[1];
                      0 > c2 ? (s3 = t2.top + p + f + g + e3.collisionHeight - r2 - o2, (0 > s3 || a(c2) > s3) && (t2.top += p + f + g)) : u2 > 0 && (i3 = t2.top - e3.collisionPosition.marginTop + p + f + g - l2, (i3 > 0 || u2 > a(i3)) && (t2.top += p + f + g));
                    }
                  },
                  flipfit: {
                    left: function () {
                      t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                    },
                    top: function () {
                      t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                    }
                  }
                };
              }(), t.ui.position, t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function (e2) {
                  return function (i2) {
                    return !!t.data(i2, e2);
                  };
                }) : function (e2, i2, s2) {
                  return !!t.data(e2, s2[3]);
                }
              }), t.fn.extend({
                disableSelection: function () {
                  var t2 = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                  return function () {
                    return this.on(t2 + ".ui-disableSelection", function (t3) {
                      t3.preventDefault();
                    });
                  };
                }(),
                enableSelection: function () {
                  return this.off(".ui-disableSelection");
                }
              }), t.ui.focusable = function (i2, s2) {
                var n2,
                  o,
                  a,
                  r,
                  l,
                  h2 = i2.nodeName.toLowerCase();
                return "area" === h2 ? (n2 = i2.parentNode, o = n2.name, i2.href && o && "map" === n2.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : false) : (/^(input|select|textarea|button|object)$/.test(h2) ? (r = !i2.disabled, r && (l = t(i2).closest("fieldset")[0], l && (r = !l.disabled))) : r = "a" === h2 ? i2.href || s2 : s2, r && t(i2).is(":visible") && e(t(i2)));
              }, t.extend(t.expr[":"], {
                focusable: function (e2) {
                  return t.ui.focusable(e2, null != t.attr(e2, "tabindex"));
                }
              }), t.ui.focusable, t.fn.form = function () {
                return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
              }, t.ui.formResetMixin = {
                _formResetHandler: function () {
                  var e2 = t(this);
                  setTimeout(function () {
                    var i2 = e2.data("ui-form-reset-instances");
                    t.each(i2, function () {
                      this.refresh();
                    });
                  });
                },
                _bindFormResetHandler: function () {
                  if (this.form = this.element.form(), this.form.length) {
                    var t2 = this.form.data("ui-form-reset-instances") || [];
                    t2.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t2.push(this), this.form.data("ui-form-reset-instances", t2);
                  }
                },
                _unbindFormResetHandler: function () {
                  if (this.form.length) {
                    var e2 = this.form.data("ui-form-reset-instances");
                    e2.splice(t.inArray(this, e2), 1), e2.length ? this.form.data("ui-form-reset-instances", e2) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
                  }
                }
              }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e2, i2) {
                function s2(e3, i3, s3, o2) {
                  return t.each(n2, function () {
                    i3 -= parseFloat(t.css(e3, "padding" + this)) || 0, s3 && (i3 -= parseFloat(t.css(e3, "border" + this + "Width")) || 0), o2 && (i3 -= parseFloat(t.css(e3, "margin" + this)) || 0);
                  }), i3;
                }
                var n2 = "Width" === i2 ? ["Left", "Right"] : ["Top", "Bottom"],
                  o = i2.toLowerCase(),
                  a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                  };
                t.fn["inner" + i2] = function (e3) {
                  return void 0 === e3 ? a["inner" + i2].call(this) : this.each(function () {
                    t(this).css(o, s2(this, e3) + "px");
                  });
                }, t.fn["outer" + i2] = function (e3, n3) {
                  return "number" != typeof e3 ? a["outer" + i2].call(this, e3) : this.each(function () {
                    t(this).css(o, s2(this, e3, true, n3) + "px");
                  });
                };
              }), t.fn.addBack = function (t2) {
                return this.add(null == t2 ? this.prevObject : this.prevObject.filter(t2));
              }), t.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
              }, t.ui.escapeSelector = /* @__PURE__ */function () {
                var t2 = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
                return function (e2) {
                  return e2.replace(t2, "\\$1");
                };
              }(), t.fn.labels = function () {
                var e2, i2, s2, n2, o;
                return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n2 = this.eq(0).parents("label"), s2 = this.attr("id"), s2 && (e2 = this.eq(0).parents().last(), o = e2.add(e2.length ? e2.siblings() : this.siblings()), i2 = "label[for='" + t.ui.escapeSelector(s2) + "']", n2 = n2.add(o.find(i2).addBack(i2))), this.pushStack(n2));
              }, t.fn.scrollParent = function (e2) {
                var i2 = this.css("position"),
                  s2 = "absolute" === i2,
                  n2 = e2 ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                  o = this.parents().filter(function () {
                    var e3 = t(this);
                    return s2 && "static" === e3.css("position") ? false : n2.test(e3.css("overflow") + e3.css("overflow-y") + e3.css("overflow-x"));
                  }).eq(0);
                return "fixed" !== i2 && o.length ? o : t(this[0].ownerDocument || document);
              }, t.extend(t.expr[":"], {
                tabbable: function (e2) {
                  var i2 = t.attr(e2, "tabindex"),
                    s2 = null != i2;
                  return (!s2 || i2 >= 0) && t.ui.focusable(e2, s2);
                }
              }), t.fn.extend({
                uniqueId: /* @__PURE__ */function () {
                  var t2 = 0;
                  return function () {
                    return this.each(function () {
                      this.id || (this.id = "ui-id-" + ++t2);
                    });
                  };
                }(),
                removeUniqueId: function () {
                  return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
                  });
                }
              }), t.widget("ui.accordion", {
                version: "1.12.1",
                options: {
                  active: 0,
                  animate: {},
                  classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                  },
                  collapsible: false,
                  event: "click",
                  header: "> li > :first-child, > :not(li):even",
                  heightStyle: "auto",
                  icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                  },
                  activate: null,
                  beforeActivate: null
                },
                hideProps: {
                  borderTopWidth: "hide",
                  borderBottomWidth: "hide",
                  paddingTop: "hide",
                  paddingBottom: "hide",
                  height: "hide"
                },
                showProps: {
                  borderTopWidth: "show",
                  borderBottomWidth: "show",
                  paddingTop: "show",
                  paddingBottom: "show",
                  height: "show"
                },
                _create: function () {
                  var e2 = this.options;
                  this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e2.collapsible || e2.active !== false && null != e2.active || (e2.active = 0), this._processPanels(), 0 > e2.active && (e2.active += this.headers.length), this._refresh();
                },
                _getCreateEventData: function () {
                  return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                  };
                },
                _createIcons: function () {
                  var e2,
                    i2,
                    s2 = this.options.icons;
                  s2 && (e2 = t("<span>"), this._addClass(e2, "ui-accordion-header-icon", "ui-icon " + s2.header), e2.prependTo(this.headers), i2 = this.active.children(".ui-accordion-header-icon"), this._removeClass(i2, s2.header)._addClass(i2, null, s2.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
                },
                _destroyIcons: function () {
                  this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
                },
                _destroy: function () {
                  var t2;
                  this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t2 = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t2.css("height", "");
                },
                _setOption: function (t2, e2) {
                  return "active" === t2 ? (this._activate(e2), void 0) : ("event" === t2 && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e2)), this._super(t2, e2), "collapsible" !== t2 || e2 || this.options.active !== false || this._activate(0), "icons" === t2 && (this._destroyIcons(), e2 && this._createIcons()), void 0);
                },
                _setOptionDisabled: function (t2) {
                  this._super(t2), this.element.attr("aria-disabled", t2), this._toggleClass(null, "ui-state-disabled", !!t2), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t2);
                },
                _keydown: function (e2) {
                  if (!e2.altKey && !e2.ctrlKey) {
                    var i2 = t.ui.keyCode,
                      s2 = this.headers.length,
                      n2 = this.headers.index(e2.target),
                      o = false;
                    switch (e2.keyCode) {
                      case i2.RIGHT:
                      case i2.DOWN:
                        o = this.headers[(n2 + 1) % s2];
                        break;
                      case i2.LEFT:
                      case i2.UP:
                        o = this.headers[(n2 - 1 + s2) % s2];
                        break;
                      case i2.SPACE:
                      case i2.ENTER:
                        this._eventHandler(e2);
                        break;
                      case i2.HOME:
                        o = this.headers[0];
                        break;
                      case i2.END:
                        o = this.headers[s2 - 1];
                    }
                    o && (t(e2.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e2.preventDefault());
                  }
                },
                _panelKeyDown: function (e2) {
                  e2.keyCode === t.ui.keyCode.UP && e2.ctrlKey && t(e2.currentTarget).prev().trigger("focus");
                },
                refresh: function () {
                  var e2 = this.options;
                  this._processPanels(), e2.active === false && e2.collapsible === true || !this.headers.length ? (e2.active = false, this.active = t()) : e2.active === false ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e2.active = false, this.active = t()) : this._activate(Math.max(0, e2.active - 1)) : e2.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
                },
                _processPanels: function () {
                  var t2 = this.headers,
                    e2 = this.panels;
                  this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e2 && (this._off(t2.not(this.headers)), this._off(e2.not(this.panels)));
                },
                _refresh: function () {
                  var e2,
                    i2 = this.options,
                    s2 = i2.heightStyle,
                    n2 = this.element.parent();
                  this.active = this._findActive(i2.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                    var e3 = t(this),
                      i3 = e3.uniqueId().attr("id"),
                      s3 = e3.next(),
                      n3 = s3.uniqueId().attr("id");
                    e3.attr("aria-controls", n3), s3.attr("aria-labelledby", i3);
                  }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                  }).next().attr({
                    "aria-hidden": "true"
                  }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                  }).next().attr({
                    "aria-hidden": "false"
                  }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i2.event), "fill" === s2 ? (e2 = n2.height(), this.element.siblings(":visible").each(function () {
                    var i3 = t(this),
                      s3 = i3.css("position");
                    "absolute" !== s3 && "fixed" !== s3 && (e2 -= i3.outerHeight(true));
                  }), this.headers.each(function () {
                    e2 -= t(this).outerHeight(true);
                  }), this.headers.next().each(function () {
                    t(this).height(Math.max(0, e2 - t(this).innerHeight() + t(this).height()));
                  }).css("overflow", "auto")) : "auto" === s2 && (e2 = 0, this.headers.next().each(function () {
                    var i3 = t(this).is(":visible");
                    i3 || t(this).show(), e2 = Math.max(e2, t(this).css("height", "").height()), i3 || t(this).hide();
                  }).height(e2));
                },
                _activate: function (e2) {
                  var i2 = this._findActive(e2)[0];
                  i2 !== this.active[0] && (i2 = i2 || this.active[0], this._eventHandler({
                    target: i2,
                    currentTarget: i2,
                    preventDefault: t.noop
                  }));
                },
                _findActive: function (e2) {
                  return "number" == typeof e2 ? this.headers.eq(e2) : t();
                },
                _setupEvents: function (e2) {
                  var i2 = {
                    keydown: "_keydown"
                  };
                  e2 && t.each(e2.split(" "), function (t2, e3) {
                    i2[e3] = "_eventHandler";
                  }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i2), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                  }), this._hoverable(this.headers), this._focusable(this.headers);
                },
                _eventHandler: function (e2) {
                  var i2,
                    s2,
                    n2 = this.options,
                    o = this.active,
                    a = t(e2.currentTarget),
                    r = a[0] === o[0],
                    l = r && n2.collapsible,
                    h2 = l ? t() : a.next(),
                    c = o.next(),
                    u = {
                      oldHeader: o,
                      oldPanel: c,
                      newHeader: l ? t() : a,
                      newPanel: h2
                    };
                  e2.preventDefault(), r && !n2.collapsible || this._trigger("beforeActivate", e2, u) === false || (n2.active = l ? false : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n2.icons && (i2 = o.children(".ui-accordion-header-icon"), this._removeClass(i2, null, n2.icons.activeHeader)._addClass(i2, null, n2.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n2.icons && (s2 = a.children(".ui-accordion-header-icon"), this._removeClass(s2, null, n2.icons.header)._addClass(s2, null, n2.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")));
                },
                _toggle: function (e2) {
                  var i2 = e2.newPanel,
                    s2 = this.prevShow.length ? this.prevShow : e2.oldPanel;
                  this.prevShow.add(this.prevHide).stop(true, true), this.prevShow = i2, this.prevHide = s2, this.options.animate ? this._animate(i2, s2, e2) : (s2.hide(), i2.show(), this._toggleComplete(e2)), s2.attr({
                    "aria-hidden": "true"
                  }), s2.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                  }), i2.length && s2.length ? s2.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                  }) : i2.length && this.headers.filter(function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10);
                  }).attr("tabIndex", -1), i2.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                  });
                },
                _animate: function (t2, e2, i2) {
                  var s2,
                    n2,
                    o,
                    a = this,
                    r = 0,
                    l = t2.css("box-sizing"),
                    h2 = t2.length && (!e2.length || t2.index() < e2.index()),
                    c = this.options.animate || {},
                    u = h2 && c.down || c,
                    d = function () {
                      a._toggleComplete(i2);
                    };
                  return "number" == typeof u && (o = u), "string" == typeof u && (n2 = u), n2 = n2 || u.easing || c.easing, o = o || u.duration || c.duration, e2.length ? t2.length ? (s2 = t2.show().outerHeight(), e2.animate(this.hideProps, {
                    duration: o,
                    easing: n2,
                    step: function (t3, e3) {
                      e3.now = Math.round(t3);
                    }
                  }), t2.hide().animate(this.showProps, {
                    duration: o,
                    easing: n2,
                    complete: d,
                    step: function (t3, i3) {
                      i3.now = Math.round(t3), "height" !== i3.prop ? "content-box" === l && (r += i3.now) : "content" !== a.options.heightStyle && (i3.now = Math.round(s2 - e2.outerHeight() - r), r = 0);
                    }
                  }), void 0) : e2.animate(this.hideProps, o, n2, d) : t2.animate(this.showProps, o, n2, d);
                },
                _toggleComplete: function (t2) {
                  var e2 = t2.oldPanel,
                    i2 = e2.prev();
                  this._removeClass(e2, "ui-accordion-content-active"), this._removeClass(i2, "ui-accordion-header-active")._addClass(i2, "ui-accordion-header-collapsed"), e2.length && (e2.parent()[0].className = e2.parent()[0].className), this._trigger("activate", null, t2);
                }
              }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
              var n = false;
              t(document).on("mouseup", function () {
                n = false;
              }), t.widget("ui.mouse", {
                version: "1.12.1",
                options: {
                  cancel: "input, textarea, button, select, option",
                  distance: 1,
                  delay: 0
                },
                _mouseInit: function () {
                  var e2 = this;
                  this.element.on("mousedown." + this.widgetName, function (t2) {
                    return e2._mouseDown(t2);
                  }).on("click." + this.widgetName, function (i2) {
                    return true === t.data(i2.target, e2.widgetName + ".preventClickEvent") ? (t.removeData(i2.target, e2.widgetName + ".preventClickEvent"), i2.stopImmediatePropagation(), false) : void 0;
                  }), this.started = false;
                },
                _mouseDestroy: function () {
                  this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
                },
                _mouseDown: function (e2) {
                  if (!n) {
                    this._mouseMoved = false, this._mouseStarted && this._mouseUp(e2), this._mouseDownEvent = e2;
                    var i2 = this,
                      s2 = 1 === e2.which,
                      o = "string" == typeof this.options.cancel && e2.target.nodeName ? t(e2.target).closest(this.options.cancel).length : false;
                    return s2 && !o && this._mouseCapture(e2) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                      i2.mouseDelayMet = true;
                    }, this.options.delay)), this._mouseDistanceMet(e2) && this._mouseDelayMet(e2) && (this._mouseStarted = this._mouseStart(e2) !== false, !this._mouseStarted) ? (e2.preventDefault(), true) : (true === t.data(e2.target, this.widgetName + ".preventClickEvent") && t.removeData(e2.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t2) {
                      return i2._mouseMove(t2);
                    }, this._mouseUpDelegate = function (t2) {
                      return i2._mouseUp(t2);
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e2.preventDefault(), n = true, true)) : true;
                  }
                },
                _mouseMove: function (e2) {
                  if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e2.button) return this._mouseUp(e2);
                    if (!e2.which) {
                      if (e2.originalEvent.altKey || e2.originalEvent.ctrlKey || e2.originalEvent.metaKey || e2.originalEvent.shiftKey) this.ignoreMissingWhich = true;else if (!this.ignoreMissingWhich) return this._mouseUp(e2);
                    }
                  }
                  return (e2.which || e2.button) && (this._mouseMoved = true), this._mouseStarted ? (this._mouseDrag(e2), e2.preventDefault()) : (this._mouseDistanceMet(e2) && this._mouseDelayMet(e2) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e2) !== false, this._mouseStarted ? this._mouseDrag(e2) : this._mouseUp(e2)), !this._mouseStarted);
                },
                _mouseUp: function (e2) {
                  this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = false, e2.target === this._mouseDownEvent.target && t.data(e2.target, this.widgetName + ".preventClickEvent", true), this._mouseStop(e2)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = false, n = false, e2.preventDefault();
                },
                _mouseDistanceMet: function (t2) {
                  return Math.max(Math.abs(this._mouseDownEvent.pageX - t2.pageX), Math.abs(this._mouseDownEvent.pageY - t2.pageY)) >= this.options.distance;
                },
                _mouseDelayMet: function () {
                  return this.mouseDelayMet;
                },
                _mouseStart: function () {},
                _mouseDrag: function () {},
                _mouseStop: function () {},
                _mouseCapture: function () {
                  return true;
                }
              }), t.widget("ui.slider", t.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "slide",
                options: {
                  animate: false,
                  classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                  },
                  distance: 0,
                  max: 100,
                  min: 0,
                  orientation: "horizontal",
                  range: false,
                  step: 1,
                  value: 0,
                  values: null,
                  change: null,
                  slide: null,
                  start: null,
                  stop: null
                },
                numPages: 5,
                _create: function () {
                  this._keySliding = false, this._mouseSliding = false, this._animateOff = true, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = false;
                },
                _refresh: function () {
                  this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
                },
                _createHandles: function () {
                  var e2,
                    i2,
                    s2 = this.options,
                    n2 = this.element.find(".ui-slider-handle"),
                    o = "<span tabindex='0'></span>",
                    a = [];
                  for (i2 = s2.values && s2.values.length || 1, n2.length > i2 && (n2.slice(i2).remove(), n2 = n2.slice(0, i2)), e2 = n2.length; i2 > e2; e2++) a.push(o);
                  this.handles = n2.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e3) {
                    t(this).data("ui-slider-handle-index", e3).attr("tabIndex", 0);
                  });
                },
                _createRange: function () {
                  var e2 = this.options;
                  e2.range ? (e2.range === true && (e2.values ? e2.values.length && 2 !== e2.values.length ? e2.values = [e2.values[0], e2.values[0]] : t.isArray(e2.values) && (e2.values = e2.values.slice(0)) : e2.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                  })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e2.range || "max" === e2.range) && this._addClass(this.range, "ui-slider-range-" + e2.range)) : (this.range && this.range.remove(), this.range = null);
                },
                _setupEvents: function () {
                  this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
                },
                _destroy: function () {
                  this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
                },
                _mouseCapture: function (e2) {
                  var i2,
                    s2,
                    n2,
                    o,
                    a,
                    r,
                    l,
                    h2,
                    c = this,
                    u = this.options;
                  return u.disabled ? false : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                  }, this.elementOffset = this.element.offset(), i2 = {
                    x: e2.pageX,
                    y: e2.pageY
                  }, s2 = this._normValueFromMouse(i2), n2 = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e3) {
                    var i3 = Math.abs(s2 - c.values(e3));
                    (n2 > i3 || n2 === i3 && (e3 === c._lastChangedValue || c.values(e3) === u.min)) && (n2 = i3, o = t(this), a = e3);
                  }), r = this._start(e2, a), r === false ? false : (this._mouseSliding = true, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), h2 = !t(e2.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h2 ? {
                    left: 0,
                    top: 0
                  } : {
                    left: e2.pageX - l.left - o.width() / 2,
                    top: e2.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                  }, this.handles.hasClass("ui-state-hover") || this._slide(e2, a, s2), this._animateOff = true, true));
                },
                _mouseStart: function () {
                  return true;
                },
                _mouseDrag: function (t2) {
                  var e2 = {
                      x: t2.pageX,
                      y: t2.pageY
                    },
                    i2 = this._normValueFromMouse(e2);
                  return this._slide(t2, this._handleIndex, i2), false;
                },
                _mouseStop: function (t2) {
                  return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = false, this._stop(t2, this._handleIndex), this._change(t2, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = false, false;
                },
                _detectOrientation: function () {
                  this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
                },
                _normValueFromMouse: function (t2) {
                  var e2, i2, s2, n2, o;
                  return "horizontal" === this.orientation ? (e2 = this.elementSize.width, i2 = t2.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e2 = this.elementSize.height, i2 = t2.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s2 = i2 / e2, s2 > 1 && (s2 = 1), 0 > s2 && (s2 = 0), "vertical" === this.orientation && (s2 = 1 - s2), n2 = this._valueMax() - this._valueMin(), o = this._valueMin() + s2 * n2, this._trimAlignValue(o);
                },
                _uiHash: function (t2, e2, i2) {
                  var s2 = {
                    handle: this.handles[t2],
                    handleIndex: t2,
                    value: void 0 !== e2 ? e2 : this.value()
                  };
                  return this._hasMultipleValues() && (s2.value = void 0 !== e2 ? e2 : this.values(t2), s2.values = i2 || this.values()), s2;
                },
                _hasMultipleValues: function () {
                  return this.options.values && this.options.values.length;
                },
                _start: function (t2, e2) {
                  return this._trigger("start", t2, this._uiHash(e2));
                },
                _slide: function (t2, e2, i2) {
                  var s2,
                    n2,
                    o = this.value(),
                    a = this.values();
                  this._hasMultipleValues() && (n2 = this.values(e2 ? 0 : 1), o = this.values(e2), 2 === this.options.values.length && this.options.range === true && (i2 = 0 === e2 ? Math.min(n2, i2) : Math.max(n2, i2)), a[e2] = i2), i2 !== o && (s2 = this._trigger("slide", t2, this._uiHash(e2, i2, a)), s2 !== false && (this._hasMultipleValues() ? this.values(e2, i2) : this.value(i2)));
                },
                _stop: function (t2, e2) {
                  this._trigger("stop", t2, this._uiHash(e2));
                },
                _change: function (t2, e2) {
                  this._keySliding || this._mouseSliding || (this._lastChangedValue = e2, this._trigger("change", t2, this._uiHash(e2)));
                },
                value: function (t2) {
                  return arguments.length ? (this.options.value = this._trimAlignValue(t2), this._refreshValue(), this._change(null, 0), void 0) : this._value();
                },
                values: function (e2, i2) {
                  var s2, n2, o;
                  if (arguments.length > 1) return this.options.values[e2] = this._trimAlignValue(i2), this._refreshValue(), this._change(null, e2), void 0;
                  if (!arguments.length) return this._values();
                  if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e2) : this.value();
                  for (s2 = this.options.values, n2 = arguments[0], o = 0; s2.length > o; o += 1) s2[o] = this._trimAlignValue(n2[o]), this._change(null, o);
                  this._refreshValue();
                },
                _setOption: function (e2, i2) {
                  var s2,
                    n2 = 0;
                  switch ("range" === e2 && this.options.range === true && ("min" === i2 ? (this.options.value = this._values(0), this.options.values = null) : "max" === i2 && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n2 = this.options.values.length), this._super(e2, i2), e2) {
                    case "orientation":
                      this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i2), this.handles.css("horizontal" === i2 ? "bottom" : "left", "");
                      break;
                    case "value":
                      this._animateOff = true, this._refreshValue(), this._change(null, 0), this._animateOff = false;
                      break;
                    case "values":
                      for (this._animateOff = true, this._refreshValue(), s2 = n2 - 1; s2 >= 0; s2--) this._change(null, s2);
                      this._animateOff = false;
                      break;
                    case "step":
                    case "min":
                    case "max":
                      this._animateOff = true, this._calculateNewMax(), this._refreshValue(), this._animateOff = false;
                      break;
                    case "range":
                      this._animateOff = true, this._refresh(), this._animateOff = false;
                  }
                },
                _setOptionDisabled: function (t2) {
                  this._super(t2), this._toggleClass(null, "ui-state-disabled", !!t2);
                },
                _value: function () {
                  var t2 = this.options.value;
                  return t2 = this._trimAlignValue(t2);
                },
                _values: function (t2) {
                  var e2, i2, s2;
                  if (arguments.length) return e2 = this.options.values[t2], e2 = this._trimAlignValue(e2);
                  if (this._hasMultipleValues()) {
                    for (i2 = this.options.values.slice(), s2 = 0; i2.length > s2; s2 += 1) i2[s2] = this._trimAlignValue(i2[s2]);
                    return i2;
                  }
                  return [];
                },
                _trimAlignValue: function (t2) {
                  if (this._valueMin() >= t2) return this._valueMin();
                  if (t2 >= this._valueMax()) return this._valueMax();
                  var e2 = this.options.step > 0 ? this.options.step : 1,
                    i2 = (t2 - this._valueMin()) % e2,
                    s2 = t2 - i2;
                  return 2 * Math.abs(i2) >= e2 && (s2 += i2 > 0 ? e2 : -e2), parseFloat(s2.toFixed(5));
                },
                _calculateNewMax: function () {
                  var t2 = this.options.max,
                    e2 = this._valueMin(),
                    i2 = this.options.step,
                    s2 = Math.round((t2 - e2) / i2) * i2;
                  t2 = s2 + e2, t2 > this.options.max && (t2 -= i2), this.max = parseFloat(t2.toFixed(this._precision()));
                },
                _precision: function () {
                  var t2 = this._precisionOf(this.options.step);
                  return null !== this.options.min && (t2 = Math.max(t2, this._precisionOf(this.options.min))), t2;
                },
                _precisionOf: function (t2) {
                  var e2 = "" + t2,
                    i2 = e2.indexOf(".");
                  return -1 === i2 ? 0 : e2.length - i2 - 1;
                },
                _valueMin: function () {
                  return this.options.min;
                },
                _valueMax: function () {
                  return this.max;
                },
                _refreshRange: function (t2) {
                  "vertical" === t2 && this.range.css({
                    width: "",
                    left: ""
                  }), "horizontal" === t2 && this.range.css({
                    height: "",
                    bottom: ""
                  });
                },
                _refreshValue: function () {
                  var e2,
                    i2,
                    s2,
                    n2,
                    o,
                    a = this.options.range,
                    r = this.options,
                    l = this,
                    h2 = this._animateOff ? false : r.animate,
                    c = {};
                  this._hasMultipleValues() ? this.handles.each(function (s3) {
                    i2 = 100 * ((l.values(s3) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i2 + "%", t(this).stop(1, 1)[h2 ? "animate" : "css"](c, r.animate), l.options.range === true && ("horizontal" === l.orientation ? (0 === s3 && l.range.stop(1, 1)[h2 ? "animate" : "css"]({
                      left: i2 + "%"
                    }, r.animate), 1 === s3 && l.range[h2 ? "animate" : "css"]({
                      width: i2 - e2 + "%"
                    }, {
                      queue: false,
                      duration: r.animate
                    })) : (0 === s3 && l.range.stop(1, 1)[h2 ? "animate" : "css"]({
                      bottom: i2 + "%"
                    }, r.animate), 1 === s3 && l.range[h2 ? "animate" : "css"]({
                      height: i2 - e2 + "%"
                    }, {
                      queue: false,
                      duration: r.animate
                    }))), e2 = i2;
                  }) : (s2 = this.value(), n2 = this._valueMin(), o = this._valueMax(), i2 = o !== n2 ? 100 * ((s2 - n2) / (o - n2)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i2 + "%", this.handle.stop(1, 1)[h2 ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h2 ? "animate" : "css"]({
                    width: i2 + "%"
                  }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h2 ? "animate" : "css"]({
                    width: 100 - i2 + "%"
                  }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h2 ? "animate" : "css"]({
                    height: i2 + "%"
                  }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h2 ? "animate" : "css"]({
                    height: 100 - i2 + "%"
                  }, r.animate));
                },
                _handleEvents: {
                  keydown: function (e2) {
                    var i2,
                      s2,
                      n2,
                      o,
                      a = t(e2.target).data("ui-slider-handle-index");
                    switch (e2.keyCode) {
                      case t.ui.keyCode.HOME:
                      case t.ui.keyCode.END:
                      case t.ui.keyCode.PAGE_UP:
                      case t.ui.keyCode.PAGE_DOWN:
                      case t.ui.keyCode.UP:
                      case t.ui.keyCode.RIGHT:
                      case t.ui.keyCode.DOWN:
                      case t.ui.keyCode.LEFT:
                        if (e2.preventDefault(), !this._keySliding && (this._keySliding = true, this._addClass(t(e2.target), null, "ui-state-active"), i2 = this._start(e2, a), i2 === false)) return;
                    }
                    switch (o = this.options.step, s2 = n2 = this._hasMultipleValues() ? this.values(a) : this.value(), e2.keyCode) {
                      case t.ui.keyCode.HOME:
                        n2 = this._valueMin();
                        break;
                      case t.ui.keyCode.END:
                        n2 = this._valueMax();
                        break;
                      case t.ui.keyCode.PAGE_UP:
                        n2 = this._trimAlignValue(s2 + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                      case t.ui.keyCode.PAGE_DOWN:
                        n2 = this._trimAlignValue(s2 - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                      case t.ui.keyCode.UP:
                      case t.ui.keyCode.RIGHT:
                        if (s2 === this._valueMax()) return;
                        n2 = this._trimAlignValue(s2 + o);
                        break;
                      case t.ui.keyCode.DOWN:
                      case t.ui.keyCode.LEFT:
                        if (s2 === this._valueMin()) return;
                        n2 = this._trimAlignValue(s2 - o);
                    }
                    this._slide(e2, a, n2);
                  },
                  keyup: function (e2) {
                    var i2 = t(e2.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = false, this._stop(e2, i2), this._change(e2, i2), this._removeClass(t(e2.target), null, "ui-state-active"));
                  }
                }
              }), t.widget("ui.tooltip", {
                version: "1.12.1",
                options: {
                  classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                  },
                  content: function () {
                    var e2 = t(this).attr("title") || "";
                    return t("<a>").text(e2).html();
                  },
                  hide: true,
                  items: "[title]:not([disabled])",
                  position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                  },
                  show: true,
                  track: false,
                  close: null,
                  open: null
                },
                _addDescribedBy: function (e2, i2) {
                  var s2 = (e2.attr("aria-describedby") || "").split(/\s+/);
                  s2.push(i2), e2.data("ui-tooltip-id", i2).attr("aria-describedby", t.trim(s2.join(" ")));
                },
                _removeDescribedBy: function (e2) {
                  var i2 = e2.data("ui-tooltip-id"),
                    s2 = (e2.attr("aria-describedby") || "").split(/\s+/),
                    n2 = t.inArray(i2, s2);
                  -1 !== n2 && s2.splice(n2, 1), e2.removeData("ui-tooltip-id"), s2 = t.trim(s2.join(" ")), s2 ? e2.attr("aria-describedby", s2) : e2.removeAttr("aria-describedby");
                },
                _create: function () {
                  this._on({
                    mouseover: "open",
                    focusin: "open"
                  }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                  }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]);
                },
                _setOption: function (e2, i2) {
                  var s2 = this;
                  this._super(e2, i2), "content" === e2 && t.each(this.tooltips, function (t2, e3) {
                    s2._updateContent(e3.element);
                  });
                },
                _setOptionDisabled: function (t2) {
                  this[t2 ? "_disable" : "_enable"]();
                },
                _disable: function () {
                  var e2 = this;
                  t.each(this.tooltips, function (i2, s2) {
                    var n2 = t.Event("blur");
                    n2.target = n2.currentTarget = s2.element[0], e2.close(n2, true);
                  }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                    var e3 = t(this);
                    return e3.is("[title]") ? e3.data("ui-tooltip-title", e3.attr("title")).removeAttr("title") : void 0;
                  }));
                },
                _enable: function () {
                  this.disabledTitles.each(function () {
                    var e2 = t(this);
                    e2.data("ui-tooltip-title") && e2.attr("title", e2.data("ui-tooltip-title"));
                  }), this.disabledTitles = t([]);
                },
                open: function (e2) {
                  var i2 = this,
                    s2 = t(e2 ? e2.target : this.element).closest(this.options.items);
                  s2.length && !s2.data("ui-tooltip-id") && (s2.attr("title") && s2.data("ui-tooltip-title", s2.attr("title")), s2.data("ui-tooltip-open", true), e2 && "mouseover" === e2.type && s2.parents().each(function () {
                    var e3,
                      s3 = t(this);
                    s3.data("ui-tooltip-open") && (e3 = t.Event("blur"), e3.target = e3.currentTarget = this, i2.close(e3, true)), s3.attr("title") && (s3.uniqueId(), i2.parents[this.id] = {
                      element: this,
                      title: s3.attr("title")
                    }, s3.attr("title", ""));
                  }), this._registerCloseHandlers(e2, s2), this._updateContent(s2, e2));
                },
                _updateContent: function (t2, e2) {
                  var i2,
                    s2 = this.options.content,
                    n2 = this,
                    o = e2 ? e2.type : null;
                  return "string" == typeof s2 || s2.nodeType || s2.jquery ? this._open(e2, t2, s2) : (i2 = s2.call(t2[0], function (i3) {
                    n2._delay(function () {
                      t2.data("ui-tooltip-open") && (e2 && (e2.type = o), this._open(e2, t2, i3));
                    });
                  }), i2 && this._open(e2, t2, i2), void 0);
                },
                _open: function (e2, i2, s2) {
                  function n2(t2) {
                    h2.of = t2, a.is(":hidden") || a.position(h2);
                  }
                  var o,
                    a,
                    r,
                    l,
                    h2 = t.extend({}, this.options.position);
                  if (s2) {
                    if (o = this._find(i2)) return o.tooltip.find(".ui-tooltip-content").html(s2), void 0;
                    i2.is("[title]") && (e2 && "mouseover" === e2.type ? i2.attr("title", "") : i2.removeAttr("title")), o = this._tooltip(i2), a = o.tooltip, this._addDescribedBy(i2, a.attr("id")), a.find(".ui-tooltip-content").html(s2), this.liveRegion.children().hide(), l = t("<div>").html(a.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e2 && /^mouse/.test(e2.type) ? (this._on(this.document, {
                      mousemove: n2
                    }), n2(e2)) : a.position(t.extend({
                      of: i2
                    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                      a.is(":visible") && (n2(h2.of), clearInterval(r));
                    }, t.fx.interval)), this._trigger("open", e2, {
                      tooltip: a
                    });
                  }
                },
                _registerCloseHandlers: function (e2, i2) {
                  var s2 = {
                    keyup: function (e3) {
                      if (e3.keyCode === t.ui.keyCode.ESCAPE) {
                        var s3 = t.Event(e3);
                        s3.currentTarget = i2[0], this.close(s3, true);
                      }
                    }
                  };
                  i2[0] !== this.element[0] && (s2.remove = function () {
                    this._removeTooltip(this._find(i2).tooltip);
                  }), e2 && "mouseover" !== e2.type || (s2.mouseleave = "close"), e2 && "focusin" !== e2.type || (s2.focusout = "close"), this._on(true, i2, s2);
                },
                close: function (e2) {
                  var i2,
                    s2 = this,
                    n2 = t(e2 ? e2.currentTarget : this.element),
                    o = this._find(n2);
                  return o ? (i2 = o.tooltip, o.closing || (clearInterval(this.delayedShow), n2.data("ui-tooltip-title") && !n2.attr("title") && n2.attr("title", n2.data("ui-tooltip-title")), this._removeDescribedBy(n2), o.hiding = true, i2.stop(true), this._hide(i2, this.options.hide, function () {
                    s2._removeTooltip(t(this));
                  }), n2.removeData("ui-tooltip-open"), this._off(n2, "mouseleave focusout keyup"), n2[0] !== this.element[0] && this._off(n2, "remove"), this._off(this.document, "mousemove"), e2 && "mouseleave" === e2.type && t.each(this.parents, function (e3, i3) {
                    t(i3.element).attr("title", i3.title), delete s2.parents[e3];
                  }), o.closing = true, this._trigger("close", e2, {
                    tooltip: i2
                  }), o.hiding || (o.closing = false)), void 0) : (n2.removeData("ui-tooltip-open"), void 0);
                },
                _tooltip: function (e2) {
                  var i2 = t("<div>").attr("role", "tooltip"),
                    s2 = t("<div>").appendTo(i2),
                    n2 = i2.uniqueId().attr("id");
                  return this._addClass(s2, "ui-tooltip-content"), this._addClass(i2, "ui-tooltip", "ui-widget ui-widget-content"), i2.appendTo(this._appendTo(e2)), this.tooltips[n2] = {
                    element: e2,
                    tooltip: i2
                  };
                },
                _find: function (t2) {
                  var e2 = t2.data("ui-tooltip-id");
                  return e2 ? this.tooltips[e2] : null;
                },
                _removeTooltip: function (t2) {
                  t2.remove(), delete this.tooltips[t2.attr("id")];
                },
                _appendTo: function (t2) {
                  var e2 = t2.closest(".ui-front, dialog");
                  return e2.length || (e2 = this.document[0].body), e2;
                },
                _destroy: function () {
                  var e2 = this;
                  t.each(this.tooltips, function (i2, s2) {
                    var n2 = t.Event("blur"),
                      o = s2.element;
                    n2.target = n2.currentTarget = o[0], e2.close(n2, true), t("#" + i2).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"));
                  }), this.liveRegion.remove();
                }
              }), t.uiBackCompat !== false && t.widget("ui.tooltip", t.ui.tooltip, {
                options: {
                  tooltipClass: null
                },
                _tooltip: function () {
                  var t2 = this._superApply(arguments);
                  return this.options.tooltipClass && t2.tooltip.addClass(this.options.tooltipClass), t2;
                }
              }), t.ui.tooltip;
            });
            /*!
             * imagesLoaded PACKAGED v4.1.1
             * JavaScript is all like "You images are done yet or what?"
             * MIT License
             */
            (function (global, factory) {
              if (typeof define == "function" && define.amd) {
                define("ev-emitter/ev-emitter", factory);
              } else if (typeof module == "object" && module.exports) {
                module.exports = factory();
              } else {
                global.EvEmitter = factory();
              }
            })(typeof window != "undefined" ? window : void 0, function () {
              function EvEmitter() {}
              var proto = EvEmitter.prototype;
              proto.on = function (eventName, listener) {
                if (!eventName || !listener) {
                  return;
                }
                var events = this._events = this._events || {};
                var listeners = events[eventName] = events[eventName] || [];
                if (listeners.indexOf(listener) == -1) {
                  listeners.push(listener);
                }
                return this;
              };
              proto.once = function (eventName, listener) {
                if (!eventName || !listener) {
                  return;
                }
                this.on(eventName, listener);
                var onceEvents = this._onceEvents = this._onceEvents || {};
                var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
                onceListeners[listener] = true;
                return this;
              };
              proto.off = function (eventName, listener) {
                var listeners = this._events && this._events[eventName];
                if (!listeners || !listeners.length) {
                  return;
                }
                var index = listeners.indexOf(listener);
                if (index != -1) {
                  listeners.splice(index, 1);
                }
                return this;
              };
              proto.emitEvent = function (eventName, args) {
                var listeners = this._events && this._events[eventName];
                if (!listeners || !listeners.length) {
                  return;
                }
                var i = 0;
                var listener = listeners[i];
                args = args || [];
                var onceListeners = this._onceEvents && this._onceEvents[eventName];
                while (listener) {
                  var isOnce = onceListeners && onceListeners[listener];
                  if (isOnce) {
                    this.off(eventName, listener);
                    delete onceListeners[listener];
                  }
                  listener.apply(this, args);
                  i += isOnce ? 0 : 1;
                  listener = listeners[i];
                }
                return this;
              };
              return EvEmitter;
            });
            /*!
             * imagesLoaded v4.1.1
             * JavaScript is all like "You images are done yet or what?"
             * MIT License
             */
            (function (window2, factory) {
              if (typeof define == "function" && define.amd) {
                define(["ev-emitter/ev-emitter"], function (EvEmitter) {
                  return factory(window2, EvEmitter);
                });
              } else if (typeof module == "object" && module.exports) {
                module.exports = factory(window2, require("ev-emitter"));
              } else {
                window2.imagesLoaded = factory(window2, window2.EvEmitter);
              }
            })(window,
            // --------------------------  factory -------------------------- //
            function factory(window2, EvEmitter) {
              var $2 = window2.jQuery;
              var console2 = window2.console;
              function extend(a, b) {
                for (var prop in b) {
                  a[prop] = b[prop];
                }
                return a;
              }
              function makeArray(obj) {
                var ary = [];
                if (Array.isArray(obj)) {
                  ary = obj;
                } else if (typeof obj.length == "number") {
                  for (var i = 0; i < obj.length; i++) {
                    ary.push(obj[i]);
                  }
                } else {
                  ary.push(obj);
                }
                return ary;
              }
              function ImagesLoaded(elem, options2, onAlways) {
                if (!(this instanceof ImagesLoaded)) {
                  return new ImagesLoaded(elem, options2, onAlways);
                }
                if (typeof elem == "string") {
                  elem = document.querySelectorAll(elem);
                }
                this.elements = makeArray(elem);
                this.options = extend({}, this.options);
                if (typeof options2 == "function") {
                  onAlways = options2;
                } else {
                  extend(this.options, options2);
                }
                if (onAlways) {
                  this.on("always", onAlways);
                }
                this.getImages();
                if ($2) {
                  this.jqDeferred = new $2.Deferred();
                }
                setTimeout(function () {
                  this.check();
                }.bind(this));
              }
              ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
              ImagesLoaded.prototype.options = {};
              ImagesLoaded.prototype.getImages = function () {
                this.images = [];
                this.elements.forEach(this.addElementImages, this);
              };
              ImagesLoaded.prototype.addElementImages = function (elem) {
                if (elem.nodeName == "IMG") {
                  this.addImage(elem);
                }
                if (this.options.background === true) {
                  this.addElementBackgroundImages(elem);
                }
                var nodeType = elem.nodeType;
                if (!nodeType || !elementNodeTypes[nodeType]) {
                  return;
                }
                var childImgs = elem.querySelectorAll("img");
                for (var i = 0; i < childImgs.length; i++) {
                  var img = childImgs[i];
                  this.addImage(img);
                }
                if (typeof this.options.background == "string") {
                  var children = elem.querySelectorAll(this.options.background);
                  for (i = 0; i < children.length; i++) {
                    var child = children[i];
                    this.addElementBackgroundImages(child);
                  }
                }
              };
              var elementNodeTypes = {
                1: true,
                9: true,
                11: true
              };
              ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
                var style = getComputedStyle(elem);
                if (!style) {
                  return;
                }
                var reURL = /url\((['"])?(.*?)\1\)/gi;
                var matches = reURL.exec(style.backgroundImage);
                while (matches !== null) {
                  var url = matches && matches[2];
                  if (url) {
                    this.addBackground(url, elem);
                  }
                  matches = reURL.exec(style.backgroundImage);
                }
              };
              ImagesLoaded.prototype.addImage = function (img) {
                var loadingImage = new LoadingImage(img);
                this.images.push(loadingImage);
              };
              ImagesLoaded.prototype.addBackground = function (url, elem) {
                var background = new Background(url, elem);
                this.images.push(background);
              };
              ImagesLoaded.prototype.check = function () {
                var _this = this;
                this.progressedCount = 0;
                this.hasAnyBroken = false;
                if (!this.images.length) {
                  this.complete();
                  return;
                }
                function onProgress(image, elem, message) {
                  setTimeout(function () {
                    _this.progress(image, elem, message);
                  });
                }
                this.images.forEach(function (loadingImage) {
                  loadingImage.once("progress", onProgress);
                  loadingImage.check();
                });
              };
              ImagesLoaded.prototype.progress = function (image, elem, message) {
                this.progressedCount++;
                this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
                this.emitEvent("progress", [this, image, elem]);
                if (this.jqDeferred && this.jqDeferred.notify) {
                  this.jqDeferred.notify(this, image);
                }
                if (this.progressedCount == this.images.length) {
                  this.complete();
                }
                if (this.options.debug && console2) {
                  console2.log("progress: " + message, image, elem);
                }
              };
              ImagesLoaded.prototype.complete = function () {
                var eventName = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = true;
                this.emitEvent(eventName, [this]);
                this.emitEvent("always", [this]);
                if (this.jqDeferred) {
                  var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
                  this.jqDeferred[jqMethod](this);
                }
              };
              function LoadingImage(img) {
                this.img = img;
              }
              LoadingImage.prototype = Object.create(EvEmitter.prototype);
              LoadingImage.prototype.check = function () {
                var isComplete = this.getIsImageComplete();
                if (isComplete) {
                  this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
                  return;
                }
                this.proxyImage = new Image();
                this.proxyImage.addEventListener("load", this);
                this.proxyImage.addEventListener("error", this);
                this.img.addEventListener("load", this);
                this.img.addEventListener("error", this);
                this.proxyImage.src = this.img.src;
              };
              LoadingImage.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth !== void 0;
              };
              LoadingImage.prototype.confirm = function (isLoaded, message) {
                this.isLoaded = isLoaded;
                this.emitEvent("progress", [this, this.img, message]);
              };
              LoadingImage.prototype.handleEvent = function (event2) {
                var method = "on" + event2.type;
                if (this[method]) {
                  this[method](event2);
                }
              };
              LoadingImage.prototype.onload = function () {
                this.confirm(true, "onload");
                this.unbindEvents();
              };
              LoadingImage.prototype.onerror = function () {
                this.confirm(false, "onerror");
                this.unbindEvents();
              };
              LoadingImage.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this);
                this.proxyImage.removeEventListener("error", this);
                this.img.removeEventListener("load", this);
                this.img.removeEventListener("error", this);
              };
              function Background(url, element) {
                this.url = url;
                this.element = element;
                this.img = new Image();
              }
              Background.prototype = Object.create(LoadingImage.prototype);
              Background.prototype.check = function () {
                this.img.addEventListener("load", this);
                this.img.addEventListener("error", this);
                this.img.src = this.url;
                var isComplete = this.getIsImageComplete();
                if (isComplete) {
                  this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
                  this.unbindEvents();
                }
              };
              Background.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this);
                this.img.removeEventListener("error", this);
              };
              Background.prototype.confirm = function (isLoaded, message) {
                this.isLoaded = isLoaded;
                this.emitEvent("progress", [this, this.element, message]);
              };
              ImagesLoaded.makeJQueryPlugin = function (jQuery2) {
                jQuery2 = jQuery2 || window2.jQuery;
                if (!jQuery2) {
                  return;
                }
                $2 = jQuery2;
                $2.fn.imagesLoaded = function (options2, callback) {
                  var instance = new ImagesLoaded(this, options2, callback);
                  return instance.jqDeferred.promise($2(this));
                };
              };
              ImagesLoaded.makeJQueryPlugin();
              return ImagesLoaded;
            });
            /*!
             * imagesLoaded PACKAGED v4.1.1
             * JavaScript is all like "You images are done yet or what?"
             * MIT License
             */
            (function (global, factory) {
              if (typeof define == "function" && define.amd) {
                define("ev-emitter/ev-emitter", factory);
              } else if (typeof module == "object" && module.exports) {
                module.exports = factory();
              } else {
                global.EvEmitter = factory();
              }
            })(typeof window != "undefined" ? window : void 0, function () {
              function EvEmitter() {}
              var proto = EvEmitter.prototype;
              proto.on = function (eventName, listener) {
                if (!eventName || !listener) {
                  return;
                }
                var events = this._events = this._events || {};
                var listeners = events[eventName] = events[eventName] || [];
                if (listeners.indexOf(listener) == -1) {
                  listeners.push(listener);
                }
                return this;
              };
              proto.once = function (eventName, listener) {
                if (!eventName || !listener) {
                  return;
                }
                this.on(eventName, listener);
                var onceEvents = this._onceEvents = this._onceEvents || {};
                var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
                onceListeners[listener] = true;
                return this;
              };
              proto.off = function (eventName, listener) {
                var listeners = this._events && this._events[eventName];
                if (!listeners || !listeners.length) {
                  return;
                }
                var index = listeners.indexOf(listener);
                if (index != -1) {
                  listeners.splice(index, 1);
                }
                return this;
              };
              proto.emitEvent = function (eventName, args) {
                var listeners = this._events && this._events[eventName];
                if (!listeners || !listeners.length) {
                  return;
                }
                var i = 0;
                var listener = listeners[i];
                args = args || [];
                var onceListeners = this._onceEvents && this._onceEvents[eventName];
                while (listener) {
                  var isOnce = onceListeners && onceListeners[listener];
                  if (isOnce) {
                    this.off(eventName, listener);
                    delete onceListeners[listener];
                  }
                  listener.apply(this, args);
                  i += isOnce ? 0 : 1;
                  listener = listeners[i];
                }
                return this;
              };
              return EvEmitter;
            });
            /*!
             * imagesLoaded v4.1.1
             * JavaScript is all like "You images are done yet or what?"
             * MIT License
             */
            (function (window2, factory) {
              if (typeof define == "function" && define.amd) {
                define(["ev-emitter/ev-emitter"], function (EvEmitter) {
                  return factory(window2, EvEmitter);
                });
              } else if (typeof module == "object" && module.exports) {
                module.exports = factory(window2, require("ev-emitter"));
              } else {
                window2.imagesLoaded = factory(window2, window2.EvEmitter);
              }
            })(window,
            // --------------------------  factory -------------------------- //
            function factory(window2, EvEmitter) {
              var $2 = window2.jQuery;
              var console2 = window2.console;
              function extend(a, b) {
                for (var prop in b) {
                  a[prop] = b[prop];
                }
                return a;
              }
              function makeArray(obj) {
                var ary = [];
                if (Array.isArray(obj)) {
                  ary = obj;
                } else if (typeof obj.length == "number") {
                  for (var i = 0; i < obj.length; i++) {
                    ary.push(obj[i]);
                  }
                } else {
                  ary.push(obj);
                }
                return ary;
              }
              function ImagesLoaded(elem, options2, onAlways) {
                if (!(this instanceof ImagesLoaded)) {
                  return new ImagesLoaded(elem, options2, onAlways);
                }
                if (typeof elem == "string") {
                  elem = document.querySelectorAll(elem);
                }
                this.elements = makeArray(elem);
                this.options = extend({}, this.options);
                if (typeof options2 == "function") {
                  onAlways = options2;
                } else {
                  extend(this.options, options2);
                }
                if (onAlways) {
                  this.on("always", onAlways);
                }
                this.getImages();
                if ($2) {
                  this.jqDeferred = new $2.Deferred();
                }
                setTimeout(function () {
                  this.check();
                }.bind(this));
              }
              ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
              ImagesLoaded.prototype.options = {};
              ImagesLoaded.prototype.getImages = function () {
                this.images = [];
                this.elements.forEach(this.addElementImages, this);
              };
              ImagesLoaded.prototype.addElementImages = function (elem) {
                if (elem.nodeName == "IMG") {
                  this.addImage(elem);
                }
                if (this.options.background === true) {
                  this.addElementBackgroundImages(elem);
                }
                var nodeType = elem.nodeType;
                if (!nodeType || !elementNodeTypes[nodeType]) {
                  return;
                }
                var childImgs = elem.querySelectorAll("img");
                for (var i = 0; i < childImgs.length; i++) {
                  var img = childImgs[i];
                  this.addImage(img);
                }
                if (typeof this.options.background == "string") {
                  var children = elem.querySelectorAll(this.options.background);
                  for (i = 0; i < children.length; i++) {
                    var child = children[i];
                    this.addElementBackgroundImages(child);
                  }
                }
              };
              var elementNodeTypes = {
                1: true,
                9: true,
                11: true
              };
              ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
                var style = getComputedStyle(elem);
                if (!style) {
                  return;
                }
                var reURL = /url\((['"])?(.*?)\1\)/gi;
                var matches = reURL.exec(style.backgroundImage);
                while (matches !== null) {
                  var url = matches && matches[2];
                  if (url) {
                    this.addBackground(url, elem);
                  }
                  matches = reURL.exec(style.backgroundImage);
                }
              };
              ImagesLoaded.prototype.addImage = function (img) {
                var loadingImage = new LoadingImage(img);
                this.images.push(loadingImage);
              };
              ImagesLoaded.prototype.addBackground = function (url, elem) {
                var background = new Background(url, elem);
                this.images.push(background);
              };
              ImagesLoaded.prototype.check = function () {
                var _this = this;
                this.progressedCount = 0;
                this.hasAnyBroken = false;
                if (!this.images.length) {
                  this.complete();
                  return;
                }
                function onProgress(image, elem, message) {
                  setTimeout(function () {
                    _this.progress(image, elem, message);
                  });
                }
                this.images.forEach(function (loadingImage) {
                  loadingImage.once("progress", onProgress);
                  loadingImage.check();
                });
              };
              ImagesLoaded.prototype.progress = function (image, elem, message) {
                this.progressedCount++;
                this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
                this.emitEvent("progress", [this, image, elem]);
                if (this.jqDeferred && this.jqDeferred.notify) {
                  this.jqDeferred.notify(this, image);
                }
                if (this.progressedCount == this.images.length) {
                  this.complete();
                }
                if (this.options.debug && console2) {
                  console2.log("progress: " + message, image, elem);
                }
              };
              ImagesLoaded.prototype.complete = function () {
                var eventName = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = true;
                this.emitEvent(eventName, [this]);
                this.emitEvent("always", [this]);
                if (this.jqDeferred) {
                  var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
                  this.jqDeferred[jqMethod](this);
                }
              };
              function LoadingImage(img) {
                this.img = img;
              }
              LoadingImage.prototype = Object.create(EvEmitter.prototype);
              LoadingImage.prototype.check = function () {
                var isComplete = this.getIsImageComplete();
                if (isComplete) {
                  this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
                  return;
                }
                this.proxyImage = new Image();
                this.proxyImage.addEventListener("load", this);
                this.proxyImage.addEventListener("error", this);
                this.img.addEventListener("load", this);
                this.img.addEventListener("error", this);
                this.proxyImage.src = this.img.src;
              };
              LoadingImage.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth !== void 0;
              };
              LoadingImage.prototype.confirm = function (isLoaded, message) {
                this.isLoaded = isLoaded;
                this.emitEvent("progress", [this, this.img, message]);
              };
              LoadingImage.prototype.handleEvent = function (event2) {
                var method = "on" + event2.type;
                if (this[method]) {
                  this[method](event2);
                }
              };
              LoadingImage.prototype.onload = function () {
                this.confirm(true, "onload");
                this.unbindEvents();
              };
              LoadingImage.prototype.onerror = function () {
                this.confirm(false, "onerror");
                this.unbindEvents();
              };
              LoadingImage.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this);
                this.proxyImage.removeEventListener("error", this);
                this.img.removeEventListener("load", this);
                this.img.removeEventListener("error", this);
              };
              function Background(url, element) {
                this.url = url;
                this.element = element;
                this.img = new Image();
              }
              Background.prototype = Object.create(LoadingImage.prototype);
              Background.prototype.check = function () {
                this.img.addEventListener("load", this);
                this.img.addEventListener("error", this);
                this.img.src = this.url;
                var isComplete = this.getIsImageComplete();
                if (isComplete) {
                  this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
                  this.unbindEvents();
                }
              };
              Background.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this);
                this.img.removeEventListener("error", this);
              };
              Background.prototype.confirm = function (isLoaded, message) {
                this.isLoaded = isLoaded;
                this.emitEvent("progress", [this, this.element, message]);
              };
              ImagesLoaded.makeJQueryPlugin = function (jQuery2) {
                jQuery2 = jQuery2 || window2.jQuery;
                if (!jQuery2) {
                  return;
                }
                $2 = jQuery2;
                $2.fn.imagesLoaded = function (options2, callback) {
                  var instance = new ImagesLoaded(this, options2, callback);
                  return instance.jqDeferred.promise($2(this));
                };
              };
              ImagesLoaded.makeJQueryPlugin();
              return ImagesLoaded;
            });
            /*!
             * jQuery UI Touch Punch 0.2.3
             *
             * Copyright 2011–2014, Dave Furfero
             * Dual licensed under the MIT or GPL Version 2 licenses.
             *
             * Depends:
             *  jquery.ui.widget.js
             *  jquery.ui.mouse.js
             */
            !function (a) {
              function f(a2, b2) {
                if (!(a2.originalEvent.touches.length > 1)) {
                  a2.preventDefault();
                  var c2 = a2.originalEvent.changedTouches[0],
                    d2 = document.createEvent("MouseEvents");
                  d2.initMouseEvent(b2, true, true, window, 1, c2.screenX, c2.screenY, c2.clientX, c2.clientY, false, false, false, false, 0, null), a2.target.dispatchEvent(d2);
                }
              }
              if (a.support.touch = "ontouchend" in document, a.support.touch) {
                var e,
                  b = a.ui.mouse.prototype,
                  c = b._mouseInit,
                  d = b._mouseDestroy;
                b._touchStart = function (a2) {
                  var b2 = this;
                  !e && b2._mouseCapture(a2.originalEvent.changedTouches[0]) && (e = true, b2._touchMoved = false, f(a2, "mouseover"), f(a2, "mousemove"), f(a2, "mousedown"));
                }, b._touchMove = function (a2) {
                  e && (this._touchMoved = true, f(a2, "mousemove"));
                }, b._touchEnd = function (a2) {
                  e && (f(a2, "mouseup"), f(a2, "mouseout"), this._touchMoved || f(a2, "click"), e = false);
                }, b._mouseInit = function () {
                  var b2 = this;
                  b2.element.bind({
                    touchstart: a.proxy(b2, "_touchStart"),
                    touchmove: a.proxy(b2, "_touchMove"),
                    touchend: a.proxy(b2, "_touchEnd")
                  }), c.call(b2);
                }, b._mouseDestroy = function () {
                  var b2 = this;
                  b2.element.unbind({
                    touchstart: a.proxy(b2, "_touchStart"),
                    touchmove: a.proxy(b2, "_touchMove"),
                    touchend: a.proxy(b2, "_touchEnd")
                  }), d.call(b2);
                };
              }
            }(jQuery);
            /*!
             * jQuery UI Touch Punch 0.2.3
             *
             * Copyright 2011–2014, Dave Furfero
             * Dual licensed under the MIT or GPL Version 2 licenses.
             *
             * Depends:
             *  jquery.ui.widget.js
             *  jquery.ui.mouse.js
             */
            !function (a) {
              function f(a2, b2) {
                if (!(a2.originalEvent.touches.length > 1)) {
                  a2.preventDefault();
                  var c2 = a2.originalEvent.changedTouches[0],
                    d2 = document.createEvent("MouseEvents");
                  d2.initMouseEvent(b2, true, true, window, 1, c2.screenX, c2.screenY, c2.clientX, c2.clientY, false, false, false, false, 0, null), a2.target.dispatchEvent(d2);
                }
              }
              if (a.support.touch = "ontouchend" in document, a.support.touch) {
                var e,
                  b = a.ui.mouse.prototype,
                  c = b._mouseInit,
                  d = b._mouseDestroy;
                b._touchStart = function (a2) {
                  var b2 = this;
                  !e && b2._mouseCapture(a2.originalEvent.changedTouches[0]) && (e = true, b2._touchMoved = false, f(a2, "mouseover"), f(a2, "mousemove"), f(a2, "mousedown"));
                }, b._touchMove = function (a2) {
                  e && (this._touchMoved = true, f(a2, "mousemove"));
                }, b._touchEnd = function (a2) {
                  e && (f(a2, "mouseup"), f(a2, "mouseout"), this._touchMoved || f(a2, "click"), e = false);
                }, b._mouseInit = function () {
                  var b2 = this;
                  b2.element.bind({
                    touchstart: a.proxy(b2, "_touchStart"),
                    touchmove: a.proxy(b2, "_touchMove"),
                    touchend: a.proxy(b2, "_touchEnd")
                  }), c.call(b2);
                }, b._mouseDestroy = function () {
                  var b2 = this;
                  b2.element.unbind({
                    touchstart: a.proxy(b2, "_touchStart"),
                    touchmove: a.proxy(b2, "_touchMove"),
                    touchend: a.proxy(b2, "_touchEnd")
                  }), d.call(b2);
                };
              }
            }(jQuery);
            (function ($2) {
              var focused = true;
              $2.flexslider = function (el, options2) {
                var slider = $2(el);
                slider.vars = $2.extend({}, $2.flexslider.defaults, options2);
                var namespace = slider.vars.namespace,
                  msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                  touch = ("ontouchstart" in window || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
                  eventType2 = "click touchend MSPointerUp keyup",
                  watchedEvent = "",
                  watchedEventClearTimer,
                  vertical = slider.vars.direction === "vertical",
                  reverse = slider.vars.reverse,
                  carousel = slider.vars.itemWidth > 0,
                  fade = slider.vars.animation === "fade",
                  asNav = slider.vars.asNavFor !== "",
                  methods = {};
                $2.data(el, "flexslider", slider);
                methods = {
                  init: function () {
                    slider.animating = false;
                    slider.currentSlide = parseInt(slider.vars.startAt ? slider.vars.startAt : 0, 10);
                    if (isNaN(slider.currentSlide)) {
                      slider.currentSlide = 0;
                    }
                    slider.animatingTo = slider.currentSlide;
                    slider.atEnd = slider.currentSlide === 0 || slider.currentSlide === slider.last;
                    slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(" "));
                    slider.slides = $2(slider.vars.selector, slider);
                    slider.container = $2(slider.containerSelector, slider);
                    slider.count = slider.slides.length;
                    slider.syncExists = $2(slider.vars.sync).length > 0;
                    if (slider.vars.animation === "slide") {
                      slider.vars.animation = "swing";
                    }
                    slider.prop = vertical ? "top" : "marginLeft";
                    slider.args = {};
                    slider.manualPause = false;
                    slider.stopped = false;
                    slider.started = false;
                    slider.startTimeout = null;
                    slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && function () {
                      var obj = document.createElement("div"),
                        props = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                      for (var i in props) {
                        if (obj.style[props[i]] !== void 0) {
                          slider.pfx = props[i].replace("Perspective", "").toLowerCase();
                          slider.prop = "-" + slider.pfx + "-transform";
                          return true;
                        }
                      }
                      return false;
                    }();
                    slider.ensureAnimationEnd = "";
                    if (slider.vars.controlsContainer !== "") slider.controlsContainer = $2(slider.vars.controlsContainer).length > 0 && $2(slider.vars.controlsContainer);
                    if (slider.vars.manualControls !== "") slider.manualControls = $2(slider.vars.manualControls).length > 0 && $2(slider.vars.manualControls);
                    if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $2(slider.vars.customDirectionNav).length === 2 && $2(slider.vars.customDirectionNav);
                    if (slider.vars.randomize) {
                      slider.slides.sort(function () {
                        return Math.round(Math.random()) - 0.5;
                      });
                      slider.container.empty().append(slider.slides);
                    }
                    slider.doMath();
                    slider.setup("init");
                    if (slider.vars.controlNav) {
                      methods.controlNav.setup();
                    }
                    if (slider.vars.directionNav) {
                      methods.directionNav.setup();
                    }
                    if (slider.vars.keyboard && ($2(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
                      $2(document).bind("keyup", function (event2) {
                        var keycode = event2.keyCode;
                        if (!slider.animating && (keycode === 39 || keycode === 37)) {
                          var target = keycode === 39 ? slider.getTarget("next") : keycode === 37 ? slider.getTarget("prev") : false;
                          slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                      });
                    }
                    if (slider.vars.mousewheel) {
                      slider.bind("mousewheel", function (event2, delta, deltaX, deltaY) {
                        event2.preventDefault();
                        var target = delta < 0 ? slider.getTarget("next") : slider.getTarget("prev");
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                      });
                    }
                    if (slider.vars.pausePlay) {
                      methods.pausePlay.setup();
                    }
                    if (slider.vars.slideshow && slider.vars.pauseInvisible) {
                      methods.pauseInvisible.init();
                    }
                    if (slider.vars.slideshow) {
                      if (slider.vars.pauseOnHover) {
                        slider.hover(function () {
                          if (!slider.manualPlay && !slider.manualPause) {
                            slider.pause();
                          }
                        }, function () {
                          if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                            slider.play();
                          }
                        });
                      }
                      if (!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
                        slider.vars.initDelay > 0 ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
                      }
                    }
                    if (asNav) {
                      methods.asNav.setup();
                    }
                    if (touch && slider.vars.touch) {
                      methods.touch();
                    }
                    if (!fade || fade && slider.vars.smoothHeight) {
                      $2(window).bind("resize orientationchange focus", methods.resize);
                    }
                    slider.find("img").attr("draggable", "false");
                    setTimeout(function () {
                      slider.vars.start(slider);
                    }, 200);
                  },
                  asNav: {
                    setup: function () {
                      slider.asNav = true;
                      slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
                      slider.currentItem = slider.currentSlide;
                      slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
                      if (!msGesture) {
                        slider.slides.on(eventType2, function (e) {
                          e.preventDefault();
                          var $slide = $2(this),
                            target = $slide.index();
                          var posFromLeft = $slide.offset().left - $2(slider).scrollLeft();
                          if (posFromLeft <= 0 && $slide.hasClass(namespace + "active-slide")) {
                            slider.flexAnimate(slider.getTarget("prev"), true);
                          } else if (!$2(slider.vars.asNavFor).data("flexslider").animating && !$slide.hasClass(namespace + "active-slide")) {
                            slider.direction = slider.currentItem < target ? "next" : "prev";
                            slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                          }
                        });
                      } else {
                        el._slider = slider;
                        slider.slides.each(function () {
                          var that = this;
                          that._gesture = new MSGesture();
                          that._gesture.target = that;
                          that.addEventListener("MSPointerDown", function (e) {
                            e.preventDefault();
                            if (e.currentTarget._gesture) {
                              e.currentTarget._gesture.addPointer(e.pointerId);
                            }
                          }, false);
                          that.addEventListener("MSGestureTap", function (e) {
                            e.preventDefault();
                            var $slide = $2(this),
                              target = $slide.index();
                            if (!$2(slider.vars.asNavFor).data("flexslider").animating && !$slide.hasClass("active")) {
                              slider.direction = slider.currentItem < target ? "next" : "prev";
                              slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                            }
                          });
                        });
                      }
                    }
                  },
                  controlNav: {
                    setup: function () {
                      if (!slider.manualControls) {
                        methods.controlNav.setupPaging();
                      } else {
                        methods.controlNav.setupManual();
                      }
                    },
                    setupPaging: function () {
                      var type = slider.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
                        j = 1,
                        item,
                        slide;
                      slider.controlNavScaffold = $2('<ol class="' + namespace + "control-nav " + namespace + type + '"></ol>');
                      if (slider.pagingCount > 1) {
                        for (var i = 0; i < slider.pagingCount; i++) {
                          slide = slider.slides.eq(i);
                          if (void 0 === slide.attr("data-thumb-alt")) {
                            slide.attr("data-thumb-alt", "");
                          }
                          var altText = "" !== slide.attr("data-thumb-alt") ? altText = ' alt="' + slide.attr("data-thumb-alt") + '"' : "";
                          item = slider.vars.controlNav === "thumbnails" ? '<img src="' + slide.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + j + "</a>";
                          if ("thumbnails" === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
                            var captn = slide.attr("data-thumbcaption");
                            if ("" !== captn && void 0 !== captn) {
                              item += '<span class="' + namespace + 'caption">' + captn + "</span>";
                            }
                          }
                          slider.controlNavScaffold.append("<li>" + item + "</li>");
                          j++;
                        }
                      }
                      slider.controlsContainer ? $2(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
                      methods.controlNav.set();
                      methods.controlNav.active();
                      slider.controlNavScaffold.delegate("a, img", eventType2, function (event2) {
                        event2.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event2.type) {
                          var $this = $2(this),
                            target = slider.controlNav.index($this);
                          if (!$this.hasClass(namespace + "active")) {
                            slider.direction = target > slider.currentSlide ? "next" : "prev";
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                          }
                        }
                        if (watchedEvent === "") {
                          watchedEvent = event2.type;
                        }
                        methods.setToClearWatchedEvent();
                      });
                    },
                    setupManual: function () {
                      slider.controlNav = slider.manualControls;
                      methods.controlNav.active();
                      slider.controlNav.bind(eventType2, function (event2) {
                        event2.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event2.type) {
                          var $this = $2(this),
                            target = slider.controlNav.index($this);
                          if (!$this.hasClass(namespace + "active")) {
                            target > slider.currentSlide ? slider.direction = "next" : slider.direction = "prev";
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                          }
                        }
                        if (watchedEvent === "") {
                          watchedEvent = event2.type;
                        }
                        methods.setToClearWatchedEvent();
                      });
                    },
                    set: function () {
                      var selector = slider.vars.controlNav === "thumbnails" ? "img" : "a";
                      slider.controlNav = $2("." + namespace + "control-nav li " + selector, slider.controlsContainer ? slider.controlsContainer : slider);
                    },
                    active: function () {
                      slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
                    },
                    update: function (action, pos) {
                      if (slider.pagingCount > 1 && action === "add") {
                        slider.controlNavScaffold.append($2('<li><a href="#">' + slider.count + "</a></li>"));
                      } else if (slider.pagingCount === 1) {
                        slider.controlNavScaffold.find("li").remove();
                      } else {
                        slider.controlNav.eq(pos).closest("li").remove();
                      }
                      methods.controlNav.set();
                      slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length ? slider.update(pos, action) : methods.controlNav.active();
                    }
                  },
                  directionNav: {
                    setup: function () {
                      var directionNavScaffold = $2('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + "</a></li></ul>");
                      if (slider.customDirectionNav) {
                        slider.directionNav = slider.customDirectionNav;
                      } else if (slider.controlsContainer) {
                        $2(slider.controlsContainer).append(directionNavScaffold);
                        slider.directionNav = $2("." + namespace + "direction-nav li a", slider.controlsContainer);
                      } else {
                        slider.append(directionNavScaffold);
                        slider.directionNav = $2("." + namespace + "direction-nav li a", slider);
                      }
                      methods.directionNav.update();
                      slider.directionNav.bind(eventType2, function (event2) {
                        event2.preventDefault();
                        var target;
                        if (watchedEvent === "" || watchedEvent === event2.type) {
                          target = $2(this).hasClass(namespace + "next") ? slider.getTarget("next") : slider.getTarget("prev");
                          slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                        if (watchedEvent === "") {
                          watchedEvent = event2.type;
                        }
                        methods.setToClearWatchedEvent();
                      });
                    },
                    update: function () {
                      var disabledClass = namespace + "disabled";
                      if (slider.pagingCount === 1) {
                        slider.directionNav.addClass(disabledClass).attr("tabindex", "-1");
                      } else if (!slider.vars.animationLoop) {
                        if (slider.animatingTo === 0) {
                          slider.directionNav.removeClass(disabledClass).filter("." + namespace + "prev").addClass(disabledClass).attr("tabindex", "-1");
                        } else if (slider.animatingTo === slider.last) {
                          slider.directionNav.removeClass(disabledClass).filter("." + namespace + "next").addClass(disabledClass).attr("tabindex", "-1");
                        } else {
                          slider.directionNav.removeClass(disabledClass).removeAttr("tabindex");
                        }
                      } else {
                        slider.directionNav.removeClass(disabledClass).removeAttr("tabindex");
                      }
                    }
                  },
                  pausePlay: {
                    setup: function () {
                      var pausePlayScaffold = $2('<div class="' + namespace + 'pauseplay"><a href="#"></a></div>');
                      if (slider.controlsContainer) {
                        slider.controlsContainer.append(pausePlayScaffold);
                        slider.pausePlay = $2("." + namespace + "pauseplay a", slider.controlsContainer);
                      } else {
                        slider.append(pausePlayScaffold);
                        slider.pausePlay = $2("." + namespace + "pauseplay a", slider);
                      }
                      methods.pausePlay.update(slider.vars.slideshow ? namespace + "pause" : namespace + "play");
                      slider.pausePlay.bind(eventType2, function (event2) {
                        event2.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event2.type) {
                          if ($2(this).hasClass(namespace + "pause")) {
                            slider.manualPause = true;
                            slider.manualPlay = false;
                            slider.pause();
                          } else {
                            slider.manualPause = false;
                            slider.manualPlay = true;
                            slider.play();
                          }
                        }
                        if (watchedEvent === "") {
                          watchedEvent = event2.type;
                        }
                        methods.setToClearWatchedEvent();
                      });
                    },
                    update: function (state2) {
                      state2 === "play" ? slider.pausePlay.removeClass(namespace + "pause").addClass(namespace + "play").html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + "play").addClass(namespace + "pause").html(slider.vars.pauseText);
                    }
                  },
                  touch: function () {
                    var startX,
                      startY,
                      offset,
                      cwidth,
                      dx,
                      startT,
                      onTouchStart,
                      onTouchMove,
                      onTouchEnd,
                      scrolling = false,
                      localX = 0,
                      localY = 0,
                      accDx = 0;
                    if (!msGesture) {
                      onTouchStart = function (e) {
                        if (slider.animating) {
                          e.preventDefault();
                        } else if (window.navigator.msPointerEnabled || e.touches.length === 1) {
                          slider.pause();
                          cwidth = vertical ? slider.h : slider.w;
                          startT = Number(/* @__PURE__ */new Date());
                          localX = e.touches[0].pageX;
                          localY = e.touches[0].pageY;
                          offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + slider.vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                          startX = vertical ? localY : localX;
                          startY = vertical ? localX : localY;
                          el.addEventListener("touchmove", onTouchMove, false);
                          el.addEventListener("touchend", onTouchEnd, false);
                        }
                      };
                      onTouchMove = function (e) {
                        localX = e.touches[0].pageX;
                        localY = e.touches[0].pageY;
                        dx = vertical ? startX - localY : startX - localX;
                        scrolling = vertical ? Math.abs(dx) < Math.abs(localX - startY) : Math.abs(dx) < Math.abs(localY - startY);
                        var fxms = 500;
                        if (!scrolling || Number(/* @__PURE__ */new Date()) - startT > fxms) {
                          e.preventDefault();
                          if (!fade && slider.transitions) {
                            if (!slider.vars.animationLoop) {
                              dx = dx / (slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0 ? Math.abs(dx) / cwidth + 2 : 1);
                            }
                            slider.setProps(offset + dx, "setTouch");
                          }
                        }
                      };
                      onTouchEnd = function (e) {
                        el.removeEventListener("touchmove", onTouchMove, false);
                        if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                          var updateDx = reverse ? -dx : dx,
                            target = updateDx > 0 ? slider.getTarget("next") : slider.getTarget("prev");
                          if (slider.canAdvance(target) && (Number(/* @__PURE__ */new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                          } else {
                            if (!fade) {
                              slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                            }
                          }
                        }
                        el.removeEventListener("touchend", onTouchEnd, false);
                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                      };
                      el.addEventListener("touchstart", onTouchStart, false);
                    } else {
                      let onMSPointerDown2 = function (e) {
                          e.stopPropagation();
                          if (slider.animating) {
                            e.preventDefault();
                          } else {
                            slider.pause();
                            el._gesture.addPointer(e.pointerId);
                            accDx = 0;
                            cwidth = vertical ? slider.h : slider.w;
                            startT = Number(/* @__PURE__ */new Date());
                            offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + slider.vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                          }
                        },
                        onMSGestureChange2 = function (e) {
                          e.stopPropagation();
                          var slider2 = e.target._slider;
                          if (!slider2) {
                            return;
                          }
                          var transX = -e.translationX,
                            transY = -e.translationY;
                          accDx = accDx + (vertical ? transY : transX);
                          dx = accDx;
                          scrolling = vertical ? Math.abs(accDx) < Math.abs(-transX) : Math.abs(accDx) < Math.abs(-transY);
                          if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function () {
                              el._gesture.stop();
                            });
                            return;
                          }
                          if (!scrolling || Number(/* @__PURE__ */new Date()) - startT > 500) {
                            e.preventDefault();
                            if (!fade && slider2.transitions) {
                              if (!slider2.vars.animationLoop) {
                                dx = accDx / (slider2.currentSlide === 0 && accDx < 0 || slider2.currentSlide === slider2.last && accDx > 0 ? Math.abs(accDx) / cwidth + 2 : 1);
                              }
                              slider2.setProps(offset + dx, "setTouch");
                            }
                          }
                        },
                        onMSGestureEnd2 = function (e) {
                          e.stopPropagation();
                          var slider2 = e.target._slider;
                          if (!slider2) {
                            return;
                          }
                          if (slider2.animatingTo === slider2.currentSlide && !scrolling && !(dx === null)) {
                            var updateDx = reverse ? -dx : dx,
                              target = updateDx > 0 ? slider2.getTarget("next") : slider2.getTarget("prev");
                            if (slider2.canAdvance(target) && (Number(/* @__PURE__ */new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                              slider2.flexAnimate(target, slider2.vars.pauseOnAction);
                            } else {
                              if (!fade) {
                                slider2.flexAnimate(slider2.currentSlide, slider2.vars.pauseOnAction, true);
                              }
                            }
                          }
                          startX = null;
                          startY = null;
                          dx = null;
                          offset = null;
                          accDx = 0;
                        };
                      el.style.msTouchAction = "none";
                      el._gesture = new MSGesture();
                      el._gesture.target = el;
                      el.addEventListener("MSPointerDown", onMSPointerDown2, false);
                      el._slider = slider;
                      el.addEventListener("MSGestureChange", onMSGestureChange2, false);
                      el.addEventListener("MSGestureEnd", onMSGestureEnd2, false);
                    }
                  },
                  resize: function () {
                    if (!slider.animating && slider.is(":visible")) {
                      if (!carousel) {
                        slider.doMath();
                      }
                      if (fade) {
                        methods.smoothHeight();
                      } else if (carousel) {
                        slider.slides.width(slider.computedW);
                        slider.update(slider.pagingCount);
                        slider.setProps();
                      } else if (vertical) {
                        slider.viewport.height(slider.h);
                        slider.setProps(slider.h, "setTotal");
                      } else {
                        if (slider.vars.smoothHeight) {
                          methods.smoothHeight();
                        }
                        slider.newSlides.width(slider.computedW);
                        slider.setProps(slider.computedW, "setTotal");
                      }
                    }
                  },
                  smoothHeight: function (dur) {
                    if (!vertical || fade) {
                      var $obj = fade ? slider : slider.viewport;
                      dur ? $obj.animate({
                        "height": slider.slides.eq(slider.animatingTo).innerHeight()
                      }, dur) : $obj.innerHeight(slider.slides.eq(slider.animatingTo).innerHeight());
                    }
                  },
                  sync: function (action) {
                    var $obj = $2(slider.vars.sync).data("flexslider"),
                      target = slider.animatingTo;
                    switch (action) {
                      case "animate":
                        $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
                        break;
                      case "play":
                        if (!$obj.playing && !$obj.asNav) {
                          $obj.play();
                        }
                        break;
                      case "pause":
                        $obj.pause();
                        break;
                    }
                  },
                  uniqueID: function ($clone) {
                    $clone.filter("[id]").add($clone.find("[id]")).each(function () {
                      var $this = $2(this);
                      $this.attr("id", $this.attr("id") + "_clone");
                    });
                    return $clone;
                  },
                  pauseInvisible: {
                    visProp: null,
                    init: function () {
                      var visProp = methods.pauseInvisible.getHiddenProp();
                      if (visProp) {
                        var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(evtname, function () {
                          if (methods.pauseInvisible.isHidden()) {
                            if (slider.startTimeout) {
                              clearTimeout(slider.startTimeout);
                            } else {
                              slider.pause();
                            }
                          } else {
                            if (slider.started) {
                              slider.play();
                            } else {
                              if (slider.vars.initDelay > 0) {
                                setTimeout(slider.play, slider.vars.initDelay);
                              } else {
                                slider.play();
                              }
                            }
                          }
                        });
                      }
                    },
                    isHidden: function () {
                      var prop = methods.pauseInvisible.getHiddenProp();
                      if (!prop) {
                        return false;
                      }
                      return document[prop];
                    },
                    getHiddenProp: function () {
                      var prefixes = ["webkit", "moz", "ms", "o"];
                      if ("hidden" in document) {
                        return "hidden";
                      }
                      for (var i = 0; i < prefixes.length; i++) {
                        if (prefixes[i] + "Hidden" in document) {
                          return prefixes[i] + "Hidden";
                        }
                      }
                      return null;
                    }
                  },
                  setToClearWatchedEvent: function () {
                    clearTimeout(watchedEventClearTimer);
                    watchedEventClearTimer = setTimeout(function () {
                      watchedEvent = "";
                    }, 3e3);
                  }
                };
                slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
                  if (!slider.vars.animationLoop && target !== slider.currentSlide) {
                    slider.direction = target > slider.currentSlide ? "next" : "prev";
                  }
                  if (asNav && slider.pagingCount === 1) slider.direction = slider.currentItem < target ? "next" : "prev";
                  if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
                    if (asNav && withSync) {
                      var master = $2(slider.vars.asNavFor).data("flexslider");
                      slider.atEnd = target === 0 || target === slider.count - 1;
                      master.flexAnimate(target, true, false, true, fromNav);
                      slider.direction = slider.currentItem < target ? "next" : "prev";
                      master.direction = slider.direction;
                      if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        target = Math.floor(target / slider.visible);
                      } else {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        return false;
                      }
                    }
                    slider.animating = true;
                    slider.animatingTo = target;
                    if (pause) {
                      slider.pause();
                    }
                    slider.vars.before(slider);
                    if (slider.syncExists && !fromNav) {
                      methods.sync("animate");
                    }
                    if (slider.vars.controlNav) {
                      methods.controlNav.active();
                    }
                    if (!carousel) {
                      slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                    }
                    slider.atEnd = target === 0 || target === slider.last;
                    if (slider.vars.directionNav) {
                      methods.directionNav.update();
                    }
                    if (target === slider.last) {
                      slider.vars.end(slider);
                      if (!slider.vars.animationLoop) {
                        slider.pause();
                      }
                    }
                    if (!fade) {
                      var dimension = vertical ? slider.slides.filter(":first").height() : slider.computedW,
                        margin,
                        slideString,
                        calcNext;
                      if (carousel) {
                        margin = slider.vars.itemMargin;
                        calcNext = (slider.itemW + margin) * slider.move * slider.animatingTo;
                        slideString = calcNext > slider.limit && slider.visible !== 1 ? slider.limit : calcNext;
                      } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
                        slideString = reverse ? (slider.count + slider.cloneOffset) * dimension : 0;
                      } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
                        slideString = reverse ? 0 : (slider.count + 1) * dimension;
                      } else {
                        slideString = reverse ? (slider.count - 1 - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
                      }
                      slider.setProps(slideString, "", slider.vars.animationSpeed);
                      if (slider.transitions) {
                        if (!slider.vars.animationLoop || !slider.atEnd) {
                          slider.animating = false;
                          slider.currentSlide = slider.animatingTo;
                        }
                        slider.container.unbind("webkitTransitionEnd transitionend");
                        slider.container.bind("webkitTransitionEnd transitionend", function () {
                          clearTimeout(slider.ensureAnimationEnd);
                          slider.wrapup(dimension);
                        });
                        clearTimeout(slider.ensureAnimationEnd);
                        slider.ensureAnimationEnd = setTimeout(function () {
                          slider.wrapup(dimension);
                        }, slider.vars.animationSpeed + 100);
                      } else {
                        slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function () {
                          slider.wrapup(dimension);
                        });
                      }
                    } else {
                      if (!touch) {
                        slider.slides.eq(slider.currentSlide).css({
                          "zIndex": 1
                        }).animate({
                          "opacity": 0
                        }, slider.vars.animationSpeed, slider.vars.easing);
                        slider.slides.eq(target).css({
                          "zIndex": 2
                        }).animate({
                          "opacity": 1
                        }, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
                      } else {
                        slider.slides.eq(slider.currentSlide).css({
                          "opacity": 0,
                          "zIndex": 1
                        });
                        slider.slides.eq(target).css({
                          "opacity": 1,
                          "zIndex": 2
                        });
                        slider.wrapup(dimension);
                      }
                    }
                    if (slider.vars.smoothHeight) {
                      methods.smoothHeight(slider.vars.animationSpeed);
                    }
                  }
                };
                slider.wrapup = function (dimension) {
                  if (!fade && !carousel) {
                    if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
                      slider.setProps(dimension, "jumpEnd");
                    } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
                      slider.setProps(dimension, "jumpStart");
                    }
                  }
                  slider.animating = false;
                  slider.currentSlide = slider.animatingTo;
                  slider.vars.after(slider);
                };
                slider.animateSlides = function () {
                  if (!slider.animating && focused) {
                    slider.flexAnimate(slider.getTarget("next"));
                  }
                };
                slider.pause = function () {
                  clearInterval(slider.animatedSlides);
                  slider.animatedSlides = null;
                  slider.playing = false;
                  if (slider.vars.pausePlay) {
                    methods.pausePlay.update("play");
                  }
                  if (slider.syncExists) {
                    methods.sync("pause");
                  }
                };
                slider.play = function () {
                  if (slider.playing) {
                    clearInterval(slider.animatedSlides);
                  }
                  slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
                  slider.started = slider.playing = true;
                  if (slider.vars.pausePlay) {
                    methods.pausePlay.update("pause");
                  }
                  if (slider.syncExists) {
                    methods.sync("play");
                  }
                };
                slider.stop = function () {
                  slider.pause();
                  slider.stopped = true;
                };
                slider.canAdvance = function (target, fromNav) {
                  var last = asNav ? slider.pagingCount - 1 : slider.last;
                  return fromNav ? true : asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev" ? true : asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next" ? false : target === slider.currentSlide && !asNav ? false : slider.vars.animationLoop ? true : slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next" ? false : slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next" ? false : true;
                };
                slider.getTarget = function (dir) {
                  slider.direction = dir;
                  if (dir === "next") {
                    return slider.currentSlide === slider.last ? 0 : slider.currentSlide + 1;
                  } else {
                    return slider.currentSlide === 0 ? slider.last : slider.currentSlide - 1;
                  }
                };
                slider.setProps = function (pos, special, dur) {
                  var target = function () {
                    var posCheck = pos ? pos : (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo,
                      posCalc = function () {
                        if (carousel) {
                          return special === "setTouch" ? pos : reverse && slider.animatingTo === slider.last ? 0 : reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : slider.animatingTo === slider.last ? slider.limit : posCheck;
                        } else {
                          switch (special) {
                            case "setTotal":
                              return reverse ? (slider.count - 1 - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                            case "setTouch":
                              return reverse ? pos : pos;
                            case "jumpEnd":
                              return reverse ? pos : slider.count * pos;
                            case "jumpStart":
                              return reverse ? slider.count * pos : pos;
                            default:
                              return pos;
                          }
                        }
                      }();
                    return posCalc * -1 + "px";
                  }();
                  if (slider.transitions) {
                    target = vertical ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
                    dur = dur !== void 0 ? dur / 1e3 + "s" : "0s";
                    slider.container.css("-" + slider.pfx + "-transition-duration", dur);
                    slider.container.css("transition-duration", dur);
                  }
                  slider.args[slider.prop] = target;
                  if (slider.transitions || dur === void 0) {
                    slider.container.css(slider.args);
                  }
                  slider.container.css("transform", target);
                };
                slider.setup = function (type) {
                  if (!fade) {
                    var sliderOffset, arr;
                    if (type === "init") {
                      slider.viewport = $2('<div class="' + namespace + 'viewport"></div>').css({
                        "overflow": "hidden",
                        "position": "relative"
                      }).appendTo(slider).append(slider.container);
                      slider.cloneCount = 0;
                      slider.cloneOffset = 0;
                      if (reverse) {
                        arr = $2.makeArray(slider.slides).reverse();
                        slider.slides = $2(arr);
                        slider.container.empty().append(slider.slides);
                      }
                    }
                    if (slider.vars.animationLoop && !carousel) {
                      slider.cloneCount = 2;
                      slider.cloneOffset = 1;
                      if (type !== "init") {
                        slider.container.find(".clone").remove();
                      }
                      slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(methods.uniqueID(slider.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"));
                    }
                    slider.newSlides = $2(slider.vars.selector, slider);
                    sliderOffset = reverse ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
                    if (vertical && !carousel) {
                      slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                      setTimeout(function () {
                        slider.newSlides.css({
                          "display": "block"
                        });
                        slider.doMath();
                        slider.viewport.height(slider.h);
                        slider.setProps(sliderOffset * slider.h, "init");
                      }, type === "init" ? 100 : 0);
                    } else {
                      slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
                      slider.setProps(sliderOffset * slider.computedW, "init");
                      setTimeout(function () {
                        slider.doMath();
                        slider.newSlides.css({
                          "width": slider.computedW,
                          "marginRight": slider.computedM,
                          "float": "left",
                          "display": "block"
                        });
                        if (slider.vars.smoothHeight) {
                          methods.smoothHeight();
                        }
                      }, type === "init" ? 100 : 0);
                    }
                  } else {
                    slider.slides.css({
                      "width": "100%",
                      "float": "left",
                      "marginRight": "-100%",
                      "position": "relative"
                    });
                    if (type === "init") {
                      if (!touch) {
                        if (slider.vars.fadeFirstSlide == false) {
                          slider.slides.css({
                            "opacity": 0,
                            "display": "block",
                            "zIndex": 1
                          }).eq(slider.currentSlide).css({
                            "zIndex": 2
                          }).css({
                            "opacity": 1
                          });
                        } else {
                          slider.slides.css({
                            "opacity": 0,
                            "display": "block",
                            "zIndex": 1
                          }).eq(slider.currentSlide).css({
                            "zIndex": 2
                          }).animate({
                            "opacity": 1
                          }, slider.vars.animationSpeed, slider.vars.easing);
                        }
                      } else {
                        slider.slides.css({
                          "opacity": 0,
                          "display": "block",
                          "webkitTransition": "opacity " + slider.vars.animationSpeed / 1e3 + "s ease",
                          "zIndex": 1
                        }).eq(slider.currentSlide).css({
                          "opacity": 1,
                          "zIndex": 2
                        });
                      }
                    }
                    if (slider.vars.smoothHeight) {
                      methods.smoothHeight();
                    }
                  }
                  if (!carousel) {
                    slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
                  }
                  slider.vars.init(slider);
                };
                slider.doMath = function () {
                  var slide = slider.slides.first(),
                    slideMargin = slider.vars.itemMargin,
                    minItems = slider.vars.minItems,
                    maxItems = slider.vars.maxItems;
                  slider.w = slider.viewport === void 0 ? slider.width() : slider.viewport.width();
                  slider.h = slide.height();
                  slider.boxPadding = slide.outerWidth() - slide.width();
                  if (carousel) {
                    slider.itemT = slider.vars.itemWidth + slideMargin;
                    slider.itemM = slideMargin;
                    slider.minW = minItems ? minItems * slider.itemT : slider.w;
                    slider.maxW = maxItems ? maxItems * slider.itemT - slideMargin : slider.w;
                    slider.itemW = slider.minW > slider.w ? (slider.w - slideMargin * (minItems - 1)) / minItems : slider.maxW < slider.w ? (slider.w - slideMargin * (maxItems - 1)) / maxItems : slider.vars.itemWidth > slider.w ? slider.w : slider.vars.itemWidth;
                    slider.visible = Math.floor(slider.w / slider.itemW);
                    slider.move = slider.vars.move > 0 && slider.vars.move < slider.visible ? slider.vars.move : slider.visible;
                    slider.pagingCount = Math.ceil((slider.count - slider.visible) / slider.move + 1);
                    slider.last = slider.pagingCount - 1;
                    slider.limit = slider.pagingCount === 1 ? 0 : slider.vars.itemWidth > slider.w ? slider.itemW * (slider.count - 1) + slideMargin * (slider.count - 1) : (slider.itemW + slideMargin) * slider.count - slider.w - slideMargin;
                  } else {
                    slider.itemW = slider.w;
                    slider.itemM = slideMargin;
                    slider.pagingCount = slider.count;
                    slider.last = slider.count - 1;
                  }
                  slider.computedW = slider.itemW - slider.boxPadding;
                  slider.computedM = slider.itemM;
                };
                slider.update = function (pos, action) {
                  slider.doMath();
                  if (!carousel) {
                    if (pos < slider.currentSlide) {
                      slider.currentSlide += 1;
                    } else if (pos <= slider.currentSlide && pos !== 0) {
                      slider.currentSlide -= 1;
                    }
                    slider.animatingTo = slider.currentSlide;
                  }
                  if (slider.vars.controlNav && !slider.manualControls) {
                    if (action === "add" && !carousel || slider.pagingCount > slider.controlNav.length) {
                      methods.controlNav.update("add");
                    } else if (action === "remove" && !carousel || slider.pagingCount < slider.controlNav.length) {
                      if (carousel && slider.currentSlide > slider.last) {
                        slider.currentSlide -= 1;
                        slider.animatingTo -= 1;
                      }
                      methods.controlNav.update("remove", slider.last);
                    }
                  }
                  if (slider.vars.directionNav) {
                    methods.directionNav.update();
                  }
                };
                slider.addSlide = function (obj, pos) {
                  var $obj = $2(obj);
                  slider.count += 1;
                  slider.last = slider.count - 1;
                  if (vertical && reverse) {
                    pos !== void 0 ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
                  } else {
                    pos !== void 0 ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
                  }
                  slider.update(pos, "add");
                  slider.slides = $2(slider.vars.selector + ":not(.clone)", slider);
                  slider.setup();
                  slider.vars.added(slider);
                };
                slider.removeSlide = function (obj) {
                  var pos = isNaN(obj) ? slider.slides.index($2(obj)) : obj;
                  slider.count -= 1;
                  slider.last = slider.count - 1;
                  if (isNaN(obj)) {
                    $2(obj, slider.slides).remove();
                  } else {
                    vertical && reverse ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
                  }
                  slider.doMath();
                  slider.update(pos, "remove");
                  slider.slides = $2(slider.vars.selector + ":not(.clone)", slider);
                  slider.setup();
                  slider.vars.removed(slider);
                };
                methods.init();
              };
              $2(window).blur(function (e) {
                focused = false;
              }).focus(function (e) {
                focused = true;
              });
              $2.flexslider.defaults = {
                namespace: "flex-",
                //{NEW} String: Prefix string attached to the class of every element generated by the plugin
                selector: ".slides > li",
                //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
                animation: "fade",
                //String: Select your animation type, "fade" or "slide"
                easing: "swing",
                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
                direction: "horizontal",
                //String: Select the sliding direction, "horizontal" or "vertical"
                reverse: false,
                //{NEW} Boolean: Reverse the animation direction
                animationLoop: true,
                //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
                smoothHeight: false,
                //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
                startAt: 0,
                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
                slideshow: true,
                //Boolean: Animate slider automatically
                slideshowSpeed: 7e3,
                //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 600,
                //Integer: Set the speed of animations, in milliseconds
                initDelay: 0,
                //{NEW} Integer: Set an initialization delay, in milliseconds
                randomize: false,
                //Boolean: Randomize slide order
                fadeFirstSlide: true,
                //Boolean: Fade in the first slide when animation type is "fade"
                thumbCaptions: false,
                //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.
                // Usability features
                pauseOnAction: true,
                //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
                pauseOnHover: false,
                //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
                pauseInvisible: true,
                //{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
                useCSS: true,
                //{NEW} Boolean: Slider will use CSS3 transitions if available
                touch: true,
                //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
                video: false,
                //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
                // Primary Controls
                controlNav: true,
                //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
                directionNav: true,
                //Boolean: Create navigation for previous/next navigation? (true/false)
                prevText: "Previous",
                //String: Set the text for the "previous" directionNav item
                nextText: "Next",
                //String: Set the text for the "next" directionNav item
                // Secondary Navigation
                keyboard: true,
                //Boolean: Allow slider navigating via keyboard left/right keys
                multipleKeyboard: false,
                //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
                mousewheel: false,
                //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
                pausePlay: false,
                //Boolean: Create pause/play dynamic element
                pauseText: "Pause",
                //String: Set the text for the "pause" pausePlay item
                playText: "Play",
                //String: Set the text for the "play" pausePlay item
                // Special properties
                controlsContainer: "",
                //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
                manualControls: "",
                //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
                customDirectionNav: "",
                //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
                sync: "",
                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
                asNavFor: "",
                //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
                // Carousel Options
                itemWidth: 0,
                //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
                itemMargin: 0,
                //{NEW} Integer: Margin between carousel items.
                minItems: 1,
                //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
                maxItems: 0,
                //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
                move: 0,
                //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
                allowOneSlide: true,
                //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide
                // Callback API
                start: function () {},
                //Callback: function(slider) - Fires when the slider loads the first slide
                before: function () {},
                //Callback: function(slider) - Fires asynchronously with each slider animation
                after: function () {},
                //Callback: function(slider) - Fires after each slider animation completes
                end: function () {},
                //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
                added: function () {},
                //{NEW} Callback: function(slider) - Fires after a slide is added
                removed: function () {},
                //{NEW} Callback: function(slider) - Fires after a slide is removed
                init: function () {}
                //{NEW} Callback: function(slider) - Fires after the slider is initially setup
              };
              $2.fn.flexslider = function (options2) {
                if (options2 === void 0) {
                  options2 = {};
                }
                if (typeof options2 === "object") {
                  return this.each(function () {
                    var $this = $2(this),
                      selector = options2.selector ? options2.selector : ".slides > li",
                      $slides = $this.find(selector);
                    if ($slides.length === 1 && options2.allowOneSlide === false || $slides.length === 0) {
                      $slides.fadeIn(400);
                      if (options2.start) {
                        options2.start($this);
                      }
                    } else if ($this.data("flexslider") === void 0) {
                      new $2.flexslider(this, options2);
                    }
                  });
                } else {
                  var $slider = $2(this).data("flexslider");
                  switch (options2) {
                    case "play":
                      $slider.play();
                      break;
                    case "pause":
                      $slider.pause();
                      break;
                    case "stop":
                      $slider.stop();
                      break;
                    case "next":
                      $slider.flexAnimate($slider.getTarget("next"), true);
                      break;
                    case "prev":
                    case "previous":
                      $slider.flexAnimate($slider.getTarget("prev"), true);
                      break;
                    default:
                      if (typeof options2 === "number") {
                        $slider.flexAnimate(options2, true);
                      }
                  }
                }
              };
            })(jQuery);
            (function (factory) {
              if (typeof define === "function" && define.amd) {
                define(["jquery"], factory);
              } else if (typeof exports === "object") {
                factory(require("jquery"));
              } else {
                factory(window.jQuery || window.Zepto);
              }
            })(function ($2) {
              var CLOSE_EVENT = "Close",
                BEFORE_CLOSE_EVENT = "BeforeClose",
                AFTER_CLOSE_EVENT = "AfterClose",
                BEFORE_APPEND_EVENT = "BeforeAppend",
                MARKUP_PARSE_EVENT = "MarkupParse",
                OPEN_EVENT = "Open",
                CHANGE_EVENT = "Change",
                NS = "mfp",
                EVENT_NS = "." + NS,
                READY_CLASS = "mfp-ready",
                REMOVING_CLASS = "mfp-removing",
                PREVENT_CLOSE_CLASS = "mfp-prevent-close";
              var mfp,
                MagnificPopup = function () {},
                _isJQ = !!window.jQuery,
                _prevStatus,
                _window = $2(window),
                _document,
                _prevContentType,
                _wrapClasses,
                _currPopupType;
              var _mfpOn = function (name, f) {
                  mfp.ev.on(NS + name + EVENT_NS, f);
                },
                _getEl = function (className, appendTo, html, raw) {
                  var el = document.createElement("div");
                  el.className = "mfp-" + className;
                  if (html) {
                    el.innerHTML = html;
                  }
                  {
                    el = $2(el);
                    if (appendTo) {
                      el.appendTo(appendTo);
                    }
                  }
                  return el;
                },
                _mfpTrigger = function (e, data2) {
                  mfp.ev.triggerHandler(NS + e, data2);
                  if (mfp.st.callbacks) {
                    e = e.charAt(0).toLowerCase() + e.slice(1);
                    if (mfp.st.callbacks[e]) {
                      mfp.st.callbacks[e].apply(mfp, $2.isArray(data2) ? data2 : [data2]);
                    }
                  }
                },
                _getCloseBtn = function (type) {
                  if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
                    mfp.currTemplate.closeBtn = $2(mfp.st.closeMarkup.replace("%title%", mfp.st.tClose));
                    _currPopupType = type;
                  }
                  return mfp.currTemplate.closeBtn;
                },
                _checkInstance = function () {
                  if (!$2.magnificPopup.instance) {
                    mfp = new MagnificPopup();
                    mfp.init();
                    $2.magnificPopup.instance = mfp;
                  }
                },
                supportsTransitions = function () {
                  var s = document.createElement("p").style,
                    v = ["ms", "O", "Moz", "Webkit"];
                  if (s["transition"] !== void 0) {
                    return true;
                  }
                  while (v.length) {
                    if (v.pop() + "Transition" in s) {
                      return true;
                    }
                  }
                  return false;
                };
              MagnificPopup.prototype = {
                constructor: MagnificPopup,
                /**
                 * Initializes Magnific Popup plugin. 
                 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
                 */
                init: function () {
                  var appVersion = navigator.appVersion;
                  mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
                  mfp.isAndroid = /android/gi.test(appVersion);
                  mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
                  mfp.supportsTransition = supportsTransitions();
                  mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
                  _document = $2(document);
                  mfp.popupsCache = {};
                },
                /**
                 * Opens popup
                 * @param  data [description]
                 */
                open: function (data2) {
                  var i;
                  if (data2.isObj === false) {
                    mfp.items = data2.items.toArray();
                    mfp.index = 0;
                    var items = data2.items,
                      item;
                    for (i = 0; i < items.length; i++) {
                      item = items[i];
                      if (item.parsed) {
                        item = item.el[0];
                      }
                      if (item === data2.el[0]) {
                        mfp.index = i;
                        break;
                      }
                    }
                  } else {
                    mfp.items = $2.isArray(data2.items) ? data2.items : [data2.items];
                    mfp.index = data2.index || 0;
                  }
                  if (mfp.isOpen) {
                    mfp.updateItemHTML();
                    return;
                  }
                  mfp.types = [];
                  _wrapClasses = "";
                  if (data2.mainEl && data2.mainEl.length) {
                    mfp.ev = data2.mainEl.eq(0);
                  } else {
                    mfp.ev = _document;
                  }
                  if (data2.key) {
                    if (!mfp.popupsCache[data2.key]) {
                      mfp.popupsCache[data2.key] = {};
                    }
                    mfp.currTemplate = mfp.popupsCache[data2.key];
                  } else {
                    mfp.currTemplate = {};
                  }
                  mfp.st = $2.extend(true, {}, $2.magnificPopup.defaults, data2);
                  mfp.fixedContentPos = mfp.st.fixedContentPos === "auto" ? !mfp.probablyMobile : mfp.st.fixedContentPos;
                  if (mfp.st.modal) {
                    mfp.st.closeOnContentClick = false;
                    mfp.st.closeOnBgClick = false;
                    mfp.st.showCloseBtn = false;
                    mfp.st.enableEscapeKey = false;
                  }
                  if (!mfp.bgOverlay) {
                    mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function () {
                      mfp.close();
                    });
                    mfp.wrap = _getEl("wrap").attr("tabindex", -1).on("click" + EVENT_NS, function (e) {
                      if (mfp._checkIfClose(e.target)) {
                        mfp.close();
                      }
                    });
                    mfp.container = _getEl("container", mfp.wrap);
                  }
                  mfp.contentContainer = _getEl("content");
                  if (mfp.st.preloader) {
                    mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading);
                  }
                  var modules = $2.magnificPopup.modules;
                  for (i = 0; i < modules.length; i++) {
                    var n = modules[i];
                    n = n.charAt(0).toUpperCase() + n.slice(1);
                    mfp["init" + n].call(mfp);
                  }
                  _mfpTrigger("BeforeOpen");
                  if (mfp.st.showCloseBtn) {
                    if (!mfp.st.closeBtnInside) {
                      mfp.wrap.append(_getCloseBtn());
                    } else {
                      _mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item2) {
                        values.close_replaceWith = _getCloseBtn(item2.type);
                      });
                      _wrapClasses += " mfp-close-btn-in";
                    }
                  }
                  if (mfp.st.alignTop) {
                    _wrapClasses += " mfp-align-top";
                  }
                  if (mfp.fixedContentPos) {
                    mfp.wrap.css({
                      overflow: mfp.st.overflowY,
                      overflowX: "hidden",
                      overflowY: mfp.st.overflowY
                    });
                  } else {
                    mfp.wrap.css({
                      top: _window.scrollTop(),
                      position: "absolute"
                    });
                  }
                  if (mfp.st.fixedBgPos === false || mfp.st.fixedBgPos === "auto" && !mfp.fixedContentPos) {
                    mfp.bgOverlay.css({
                      height: _document.height(),
                      position: "absolute"
                    });
                  }
                  if (mfp.st.enableEscapeKey) {
                    _document.on("keyup" + EVENT_NS, function (e) {
                      if (e.keyCode === 27) {
                        mfp.close();
                      }
                    });
                  }
                  _window.on("resize" + EVENT_NS, function () {
                    mfp.updateSize();
                  });
                  if (!mfp.st.closeOnContentClick) {
                    _wrapClasses += " mfp-auto-cursor";
                  }
                  if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);
                  var windowHeight = mfp.wH = _window.height();
                  var windowStyles = {};
                  if (mfp.fixedContentPos) {
                    if (mfp._hasScrollBar(windowHeight)) {
                      var s = mfp._getScrollbarSize();
                      if (s) {
                        windowStyles.marginRight = s;
                      }
                    }
                  }
                  if (mfp.fixedContentPos) {
                    if (!mfp.isIE7) {
                      windowStyles.overflow = "hidden";
                    } else {
                      $2("body, html").css("overflow", "hidden");
                    }
                  }
                  var classesToadd = mfp.st.mainClass;
                  if (mfp.isIE7) {
                    classesToadd += " mfp-ie7";
                  }
                  if (classesToadd) {
                    mfp._addClassToMFP(classesToadd);
                  }
                  mfp.updateItemHTML();
                  _mfpTrigger("BuildControls");
                  $2("html").css(windowStyles);
                  mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $2(document.body));
                  mfp._lastFocusedEl = document.activeElement;
                  setTimeout(function () {
                    if (mfp.content) {
                      mfp._addClassToMFP(READY_CLASS);
                      mfp._setFocus();
                    } else {
                      mfp.bgOverlay.addClass(READY_CLASS);
                    }
                    _document.on("focusin" + EVENT_NS, mfp._onFocusIn);
                  }, 16);
                  mfp.isOpen = true;
                  mfp.updateSize(windowHeight);
                  _mfpTrigger(OPEN_EVENT);
                  return data2;
                },
                /**
                 * Closes the popup
                 */
                close: function () {
                  if (!mfp.isOpen) return;
                  _mfpTrigger(BEFORE_CLOSE_EVENT);
                  mfp.isOpen = false;
                  if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                    mfp._addClassToMFP(REMOVING_CLASS);
                    setTimeout(function () {
                      mfp._close();
                    }, mfp.st.removalDelay);
                  } else {
                    mfp._close();
                  }
                },
                /**
                 * Helper for close() function
                 */
                _close: function () {
                  _mfpTrigger(CLOSE_EVENT);
                  var classesToRemove = REMOVING_CLASS + " " + READY_CLASS + " ";
                  mfp.bgOverlay.detach();
                  mfp.wrap.detach();
                  mfp.container.empty();
                  if (mfp.st.mainClass) {
                    classesToRemove += mfp.st.mainClass + " ";
                  }
                  mfp._removeClassFromMFP(classesToRemove);
                  if (mfp.fixedContentPos) {
                    var windowStyles = {
                      marginRight: ""
                    };
                    if (mfp.isIE7) {
                      $2("body, html").css("overflow", "");
                    } else {
                      windowStyles.overflow = "";
                    }
                    $2("html").css(windowStyles);
                  }
                  _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS);
                  mfp.ev.off(EVENT_NS);
                  mfp.wrap.attr("class", "mfp-wrap").removeAttr("style");
                  mfp.bgOverlay.attr("class", "mfp-bg");
                  mfp.container.attr("class", "mfp-container");
                  if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                    if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
                  }
                  if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
                    $2(mfp._lastFocusedEl).focus();
                  }
                  mfp.currItem = null;
                  mfp.content = null;
                  mfp.currTemplate = null;
                  mfp.prevHeight = 0;
                  _mfpTrigger(AFTER_CLOSE_EVENT);
                },
                updateSize: function (winHeight) {
                  if (mfp.isIOS) {
                    var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                    var height = window.innerHeight * zoomLevel;
                    mfp.wrap.css("height", height);
                    mfp.wH = height;
                  } else {
                    mfp.wH = winHeight || _window.height();
                  }
                  if (!mfp.fixedContentPos) {
                    mfp.wrap.css("height", mfp.wH);
                  }
                  _mfpTrigger("Resize");
                },
                /**
                 * Set content of popup based on current index
                 */
                updateItemHTML: function () {
                  var item = mfp.items[mfp.index];
                  mfp.contentContainer.detach();
                  if (mfp.content) mfp.content.detach();
                  if (!item.parsed) {
                    item = mfp.parseEl(mfp.index);
                  }
                  var type = item.type;
                  _mfpTrigger("BeforeChange", [mfp.currItem ? mfp.currItem.type : "", type]);
                  mfp.currItem = item;
                  if (!mfp.currTemplate[type]) {
                    var markup = mfp.st[type] ? mfp.st[type].markup : false;
                    _mfpTrigger("FirstMarkupParse", markup);
                    if (markup) {
                      mfp.currTemplate[type] = $2(markup);
                    } else {
                      mfp.currTemplate[type] = true;
                    }
                  }
                  if (_prevContentType && _prevContentType !== item.type) {
                    mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
                  }
                  var newContent = mfp["get" + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
                  mfp.appendContent(newContent, type);
                  item.preloaded = true;
                  _mfpTrigger(CHANGE_EVENT, item);
                  _prevContentType = item.type;
                  mfp.container.prepend(mfp.contentContainer);
                  _mfpTrigger("AfterChange");
                },
                /**
                 * Set HTML content of popup
                 */
                appendContent: function (newContent, type) {
                  mfp.content = newContent;
                  if (newContent) {
                    if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                      if (!mfp.content.find(".mfp-close").length) {
                        mfp.content.append(_getCloseBtn());
                      }
                    } else {
                      mfp.content = newContent;
                    }
                  } else {
                    mfp.content = "";
                  }
                  _mfpTrigger(BEFORE_APPEND_EVENT);
                  mfp.container.addClass("mfp-" + type + "-holder");
                  mfp.contentContainer.append(mfp.content);
                },
                /**
                 * Creates Magnific Popup data object based on given data
                 * @param  {int} index Index of item to parse
                 */
                parseEl: function (index) {
                  var item = mfp.items[index],
                    type;
                  if (item.tagName) {
                    item = {
                      el: $2(item)
                    };
                  } else {
                    type = item.type;
                    item = {
                      data: item,
                      src: item.src
                    };
                  }
                  if (item.el) {
                    var types = mfp.types;
                    for (var i = 0; i < types.length; i++) {
                      if (item.el.hasClass("mfp-" + types[i])) {
                        type = types[i];
                        break;
                      }
                    }
                    item.src = item.el.attr("data-mfp-src");
                    if (!item.src) {
                      item.src = item.el.attr("href");
                    }
                  }
                  item.type = type || mfp.st.type || "inline";
                  item.index = index;
                  item.parsed = true;
                  mfp.items[index] = item;
                  _mfpTrigger("ElementParse", item);
                  return mfp.items[index];
                },
                /**
                 * Initializes single popup or a group of popups
                 */
                addGroup: function (el, options2) {
                  var eHandler = function (e) {
                    e.mfpEl = this;
                    mfp._openClick(e, el, options2);
                  };
                  if (!options2) {
                    options2 = {};
                  }
                  var eName = "click.magnificPopup";
                  options2.mainEl = el;
                  if (options2.items) {
                    options2.isObj = true;
                    el.off(eName).on(eName, eHandler);
                  } else {
                    options2.isObj = false;
                    if (options2.delegate) {
                      el.off(eName).on(eName, options2.delegate, eHandler);
                    } else {
                      options2.items = el;
                      el.off(eName).on(eName, eHandler);
                    }
                  }
                },
                _openClick: function (e, el, options2) {
                  var midClick = options2.midClick !== void 0 ? options2.midClick : $2.magnificPopup.defaults.midClick;
                  if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                    return;
                  }
                  var disableOn = options2.disableOn !== void 0 ? options2.disableOn : $2.magnificPopup.defaults.disableOn;
                  if (disableOn) {
                    if ($2.isFunction(disableOn)) {
                      if (!disableOn.call(mfp)) {
                        return true;
                      }
                    } else {
                      if (_window.width() < disableOn) {
                        return true;
                      }
                    }
                  }
                  if (e.type) {
                    e.preventDefault();
                    if (mfp.isOpen) {
                      e.stopPropagation();
                    }
                  }
                  options2.el = $2(e.mfpEl);
                  if (options2.delegate) {
                    options2.items = el.find(options2.delegate);
                  }
                  mfp.open(options2);
                },
                /**
                 * Updates text on preloader
                 */
                updateStatus: function (status, text) {
                  if (mfp.preloader) {
                    if (_prevStatus !== status) {
                      mfp.container.removeClass("mfp-s-" + _prevStatus);
                    }
                    if (!text && status === "loading") {
                      text = mfp.st.tLoading;
                    }
                    var data2 = {
                      status,
                      text
                    };
                    _mfpTrigger("UpdateStatus", data2);
                    status = data2.status;
                    text = data2.text;
                    mfp.preloader.html(text);
                    mfp.preloader.find("a").on("click", function (e) {
                      e.stopImmediatePropagation();
                    });
                    mfp.container.addClass("mfp-s-" + status);
                    _prevStatus = status;
                  }
                },
                /*
                	"Private" helpers that aren't private at all
                 */
                // Check to close popup or not
                // "target" is an element that was clicked
                _checkIfClose: function (target) {
                  if ($2(target).hasClass(PREVENT_CLOSE_CLASS)) {
                    return;
                  }
                  var closeOnContent = mfp.st.closeOnContentClick;
                  var closeOnBg = mfp.st.closeOnBgClick;
                  if (closeOnContent && closeOnBg) {
                    return true;
                  } else {
                    if (!mfp.content || $2(target).hasClass("mfp-close") || mfp.preloader && target === mfp.preloader[0]) {
                      return true;
                    }
                    if (target !== mfp.content[0] && !$2.contains(mfp.content[0], target)) {
                      if (closeOnBg) {
                        if ($2.contains(document, target)) {
                          return true;
                        }
                      }
                    } else if (closeOnContent) {
                      return true;
                    }
                  }
                  return false;
                },
                _addClassToMFP: function (cName) {
                  mfp.bgOverlay.addClass(cName);
                  mfp.wrap.addClass(cName);
                },
                _removeClassFromMFP: function (cName) {
                  this.bgOverlay.removeClass(cName);
                  mfp.wrap.removeClass(cName);
                },
                _hasScrollBar: function (winHeight) {
                  return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
                },
                _setFocus: function () {
                  (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
                },
                _onFocusIn: function (e) {
                  if (e.target !== mfp.wrap[0] && !$2.contains(mfp.wrap[0], e.target)) {
                    mfp._setFocus();
                    return false;
                  }
                },
                _parseMarkup: function (template, values, item) {
                  var arr;
                  if (item.data) {
                    values = $2.extend(item.data, values);
                  }
                  _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
                  $2.each(values, function (key, value) {
                    if (value === void 0 || value === false) {
                      return true;
                    }
                    arr = key.split("_");
                    if (arr.length > 1) {
                      var el = template.find(EVENT_NS + "-" + arr[0]);
                      if (el.length > 0) {
                        var attr = arr[1];
                        if (attr === "replaceWith") {
                          if (el[0] !== value[0]) {
                            el.replaceWith(value);
                          }
                        } else if (attr === "img") {
                          if (el.is("img")) {
                            el.attr("src", value);
                          } else {
                            el.replaceWith($2("<img>").attr("src", value).attr("class", el.attr("class")));
                          }
                        } else {
                          el.attr(arr[1], value);
                        }
                      }
                    } else {
                      template.find(EVENT_NS + "-" + key).html(value);
                    }
                  });
                },
                _getScrollbarSize: function () {
                  if (mfp.scrollbarSize === void 0) {
                    var scrollDiv = document.createElement("div");
                    scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                    document.body.appendChild(scrollDiv);
                    mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                    document.body.removeChild(scrollDiv);
                  }
                  return mfp.scrollbarSize;
                }
              };
              $2.magnificPopup = {
                instance: null,
                proto: MagnificPopup.prototype,
                modules: [],
                open: function (options2, index) {
                  _checkInstance();
                  if (!options2) {
                    options2 = {};
                  } else {
                    options2 = $2.extend(true, {}, options2);
                  }
                  options2.isObj = true;
                  options2.index = index || 0;
                  return this.instance.open(options2);
                },
                close: function () {
                  return $2.magnificPopup.instance && $2.magnificPopup.instance.close();
                },
                registerModule: function (name, module2) {
                  if (module2.options) {
                    $2.magnificPopup.defaults[name] = module2.options;
                  }
                  $2.extend(this.proto, module2.proto);
                  this.modules.push(name);
                },
                defaults: {
                  // Info about options is in docs:
                  // https://dimsemenov.com/plugins/magnific-popup/documentation.html#options
                  disableOn: 0,
                  key: null,
                  midClick: false,
                  mainClass: "",
                  preloader: true,
                  focus: "",
                  // CSS selector of input to focus after popup is opened
                  closeOnContentClick: false,
                  closeOnBgClick: true,
                  closeBtnInside: true,
                  showCloseBtn: true,
                  enableEscapeKey: true,
                  modal: false,
                  alignTop: false,
                  removalDelay: 0,
                  prependTo: null,
                  fixedContentPos: "auto",
                  fixedBgPos: "auto",
                  overflowY: "auto",
                  closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                  tClose: "Close (Esc)",
                  tLoading: "Loading...",
                  autoFocusLast: true
                }
              };
              $2.fn.magnificPopup = function (options2) {
                _checkInstance();
                var jqEl = $2(this);
                if (typeof options2 === "string") {
                  if (options2 === "open") {
                    var items,
                      itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup,
                      index = parseInt(arguments[1], 10) || 0;
                    if (itemOpts.items) {
                      items = itemOpts.items[index];
                    } else {
                      items = jqEl;
                      if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                      }
                      items = items.eq(index);
                    }
                    mfp._openClick({
                      mfpEl: items
                    }, jqEl, itemOpts);
                  } else {
                    if (mfp.isOpen) mfp[options2].apply(mfp, Array.prototype.slice.call(arguments, 1));
                  }
                } else {
                  options2 = $2.extend(true, {}, options2);
                  if (_isJQ) {
                    jqEl.data("magnificPopup", options2);
                  } else {
                    jqEl[0].magnificPopup = options2;
                  }
                  mfp.addGroup(jqEl, options2);
                }
                return jqEl;
              };
              var INLINE_NS = "inline",
                _hiddenClass,
                _inlinePlaceholder,
                _lastInlineElement,
                _putInlineElementsBack = function () {
                  if (_lastInlineElement) {
                    _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
                    _lastInlineElement = null;
                  }
                };
              $2.magnificPopup.registerModule(INLINE_NS, {
                options: {
                  hiddenClass: "hide",
                  // will be appended with `mfp-` prefix
                  markup: "",
                  tNotFound: "Content not found"
                },
                proto: {
                  initInline: function () {
                    mfp.types.push(INLINE_NS);
                    _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function () {
                      _putInlineElementsBack();
                    });
                  },
                  getInline: function (item, template) {
                    _putInlineElementsBack();
                    if (item.src) {
                      var inlineSt = mfp.st.inline,
                        el = $2(item.src);
                      if (el.length) {
                        var parent = el[0].parentNode;
                        if (parent && parent.tagName) {
                          if (!_inlinePlaceholder) {
                            _hiddenClass = inlineSt.hiddenClass;
                            _inlinePlaceholder = _getEl(_hiddenClass);
                            _hiddenClass = "mfp-" + _hiddenClass;
                          }
                          _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }
                        mfp.updateStatus("ready");
                      } else {
                        mfp.updateStatus("error", inlineSt.tNotFound);
                        el = $2("<div>");
                      }
                      item.inlineElement = el;
                      return el;
                    }
                    mfp.updateStatus("ready");
                    mfp._parseMarkup(template, {}, item);
                    return template;
                  }
                }
              });
              var AJAX_NS = "ajax",
                _ajaxCur,
                _removeAjaxCursor = function () {
                  if (_ajaxCur) {
                    $2(document.body).removeClass(_ajaxCur);
                  }
                },
                _destroyAjaxRequest = function () {
                  _removeAjaxCursor();
                  if (mfp.req) {
                    mfp.req.abort();
                  }
                };
              $2.magnificPopup.registerModule(AJAX_NS, {
                options: {
                  settings: null,
                  cursor: "mfp-ajax-cur",
                  tError: '<a href="%url%">The content</a> could not be loaded.'
                },
                proto: {
                  initAjax: function () {
                    mfp.types.push(AJAX_NS);
                    _ajaxCur = mfp.st.ajax.cursor;
                    _mfpOn(CLOSE_EVENT + "." + AJAX_NS, _destroyAjaxRequest);
                    _mfpOn("BeforeChange." + AJAX_NS, _destroyAjaxRequest);
                  },
                  getAjax: function (item) {
                    if (_ajaxCur) {
                      $2(document.body).addClass(_ajaxCur);
                    }
                    mfp.updateStatus("loading");
                    var opts = $2.extend({
                      url: item.src,
                      success: function (data2, textStatus, jqXHR) {
                        var temp = {
                          data: data2,
                          xhr: jqXHR
                        };
                        _mfpTrigger("ParseAjax", temp);
                        mfp.appendContent($2(temp.data), AJAX_NS);
                        item.finished = true;
                        _removeAjaxCursor();
                        mfp._setFocus();
                        setTimeout(function () {
                          mfp.wrap.addClass(READY_CLASS);
                        }, 16);
                        mfp.updateStatus("ready");
                        _mfpTrigger("AjaxContentAdded");
                      },
                      error: function () {
                        _removeAjaxCursor();
                        item.finished = item.loadError = true;
                        mfp.updateStatus("error", mfp.st.ajax.tError.replace("%url%", item.src));
                      }
                    }, mfp.st.ajax.settings);
                    mfp.req = $2.ajax(opts);
                    return "";
                  }
                }
              });
              var _imgInterval,
                _getTitle = function (item) {
                  if (item.data && item.data.title !== void 0) return item.data.title;
                  var src = mfp.st.image.titleSrc;
                  if (src) {
                    if ($2.isFunction(src)) {
                      return src.call(mfp, item);
                    } else if (item.el) {
                      return item.el.attr(src) || "";
                    }
                  }
                  return "";
                };
              $2.magnificPopup.registerModule("image", {
                options: {
                  markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                  cursor: "mfp-zoom-out-cur",
                  titleSrc: "title",
                  verticalFit: true,
                  tError: '<a href="%url%">The image</a> could not be loaded.'
                },
                proto: {
                  initImage: function () {
                    var imgSt = mfp.st.image,
                      ns = ".image";
                    mfp.types.push("image");
                    _mfpOn(OPEN_EVENT + ns, function () {
                      if (mfp.currItem.type === "image" && imgSt.cursor) {
                        $2(document.body).addClass(imgSt.cursor);
                      }
                    });
                    _mfpOn(CLOSE_EVENT + ns, function () {
                      if (imgSt.cursor) {
                        $2(document.body).removeClass(imgSt.cursor);
                      }
                      _window.off("resize" + EVENT_NS);
                    });
                    _mfpOn("Resize" + ns, mfp.resizeImage);
                    if (mfp.isLowIE) {
                      _mfpOn("AfterChange", mfp.resizeImage);
                    }
                  },
                  resizeImage: function () {
                    var item = mfp.currItem;
                    if (!item || !item.img) return;
                    if (mfp.st.image.verticalFit) {
                      var decr = 0;
                      if (mfp.isLowIE) {
                        decr = parseInt(item.img.css("padding-top"), 10) + parseInt(item.img.css("padding-bottom"), 10);
                      }
                      item.img.css("max-height", mfp.wH - decr);
                    }
                  },
                  _onImageHasSize: function (item) {
                    if (item.img) {
                      item.hasSize = true;
                      if (_imgInterval) {
                        clearInterval(_imgInterval);
                      }
                      item.isCheckingImgSize = false;
                      _mfpTrigger("ImageHasSize", item);
                      if (item.imgHidden) {
                        if (mfp.content) mfp.content.removeClass("mfp-loading");
                        item.imgHidden = false;
                      }
                    }
                  },
                  /**
                   * Function that loops until the image has size to display elements that rely on it asap
                   */
                  findImageSize: function (item) {
                    var counter = 0,
                      img = item.img[0],
                      mfpSetInterval = function (delay) {
                        if (_imgInterval) {
                          clearInterval(_imgInterval);
                        }
                        _imgInterval = setInterval(function () {
                          if (img.naturalWidth > 0) {
                            mfp._onImageHasSize(item);
                            return;
                          }
                          if (counter > 200) {
                            clearInterval(_imgInterval);
                          }
                          counter++;
                          if (counter === 3) {
                            mfpSetInterval(10);
                          } else if (counter === 40) {
                            mfpSetInterval(50);
                          } else if (counter === 100) {
                            mfpSetInterval(500);
                          }
                        }, delay);
                      };
                    mfpSetInterval(1);
                  },
                  getImage: function (item, template) {
                    var guard = 0,
                      onLoadComplete = function () {
                        if (item) {
                          if (item.img[0].complete) {
                            item.img.off(".mfploader");
                            if (item === mfp.currItem) {
                              mfp._onImageHasSize(item);
                              mfp.updateStatus("ready");
                            }
                            item.hasSize = true;
                            item.loaded = true;
                            _mfpTrigger("ImageLoadComplete");
                          } else {
                            guard++;
                            if (guard < 200) {
                              setTimeout(onLoadComplete, 100);
                            } else {
                              onLoadError();
                            }
                          }
                        }
                      },
                      onLoadError = function () {
                        if (item) {
                          item.img.off(".mfploader");
                          if (item === mfp.currItem) {
                            mfp._onImageHasSize(item);
                            mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
                          }
                          item.hasSize = true;
                          item.loaded = true;
                          item.loadError = true;
                        }
                      },
                      imgSt = mfp.st.image;
                    var el = template.find(".mfp-img");
                    if (el.length) {
                      var img = document.createElement("img");
                      img.className = "mfp-img";
                      if (item.el && item.el.find("img").length) {
                        img.alt = item.el.find("img").attr("alt");
                      }
                      item.img = $2(img).on("load.mfploader", onLoadComplete).on("error.mfploader", onLoadError);
                      img.src = item.src;
                      if (el.is("img")) {
                        item.img = item.img.clone();
                      }
                      img = item.img[0];
                      if (img.naturalWidth > 0) {
                        item.hasSize = true;
                      } else if (!img.width) {
                        item.hasSize = false;
                      }
                    }
                    mfp._parseMarkup(template, {
                      title: _getTitle(item),
                      img_replaceWith: item.img
                    }, item);
                    mfp.resizeImage();
                    if (item.hasSize) {
                      if (_imgInterval) clearInterval(_imgInterval);
                      if (item.loadError) {
                        template.addClass("mfp-loading");
                        mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
                      } else {
                        template.removeClass("mfp-loading");
                        mfp.updateStatus("ready");
                      }
                      return template;
                    }
                    mfp.updateStatus("loading");
                    item.loading = true;
                    if (!item.hasSize) {
                      item.imgHidden = true;
                      template.addClass("mfp-loading");
                      mfp.findImageSize(item);
                    }
                    return template;
                  }
                }
              });
              var hasMozTransform,
                getHasMozTransform = function () {
                  if (hasMozTransform === void 0) {
                    hasMozTransform = document.createElement("p").style.MozTransform !== void 0;
                  }
                  return hasMozTransform;
                };
              $2.magnificPopup.registerModule("zoom", {
                options: {
                  enabled: false,
                  easing: "ease-in-out",
                  duration: 300,
                  opener: function (element) {
                    return element.is("img") ? element : element.find("img");
                  }
                },
                proto: {
                  initZoom: function () {
                    var zoomSt = mfp.st.zoom,
                      ns = ".zoom",
                      image;
                    if (!zoomSt.enabled || !mfp.supportsTransition) {
                      return;
                    }
                    var duration = zoomSt.duration,
                      getElToAnimate = function (image2) {
                        var newImg = image2.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                          transition = "all " + zoomSt.duration / 1e3 + "s " + zoomSt.easing,
                          cssObj = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                          },
                          t = "transition";
                        cssObj["-webkit-" + t] = cssObj["-moz-" + t] = cssObj["-o-" + t] = cssObj[t] = transition;
                        newImg.css(cssObj);
                        return newImg;
                      },
                      showMainContent = function () {
                        mfp.content.css("visibility", "visible");
                      },
                      openTimeout,
                      animatedImg;
                    _mfpOn("BuildControls" + ns, function () {
                      if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.content.css("visibility", "hidden");
                        image = mfp._getItemToZoom();
                        if (!image) {
                          showMainContent();
                          return;
                        }
                        animatedImg = getElToAnimate(image);
                        animatedImg.css(mfp._getOffset());
                        mfp.wrap.append(animatedImg);
                        openTimeout = setTimeout(function () {
                          animatedImg.css(mfp._getOffset(true));
                          openTimeout = setTimeout(function () {
                            showMainContent();
                            setTimeout(function () {
                              animatedImg.remove();
                              image = animatedImg = null;
                              _mfpTrigger("ZoomAnimationEnded");
                            }, 16);
                          }, duration);
                        }, 16);
                      }
                    });
                    _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
                      if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.st.removalDelay = duration;
                        if (!image) {
                          image = mfp._getItemToZoom();
                          if (!image) {
                            return;
                          }
                          animatedImg = getElToAnimate(image);
                        }
                        animatedImg.css(mfp._getOffset(true));
                        mfp.wrap.append(animatedImg);
                        mfp.content.css("visibility", "hidden");
                        setTimeout(function () {
                          animatedImg.css(mfp._getOffset());
                        }, 16);
                      }
                    });
                    _mfpOn(CLOSE_EVENT + ns, function () {
                      if (mfp._allowZoom()) {
                        showMainContent();
                        if (animatedImg) {
                          animatedImg.remove();
                        }
                        image = null;
                      }
                    });
                  },
                  _allowZoom: function () {
                    return mfp.currItem.type === "image";
                  },
                  _getItemToZoom: function () {
                    if (mfp.currItem.hasSize) {
                      return mfp.currItem.img;
                    } else {
                      return false;
                    }
                  },
                  // Get element postion relative to viewport
                  _getOffset: function (isLarge) {
                    var el;
                    if (isLarge) {
                      el = mfp.currItem.img;
                    } else {
                      el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                    }
                    var offset = el.offset();
                    var paddingTop = parseInt(el.css("padding-top"), 10);
                    var paddingBottom = parseInt(el.css("padding-bottom"), 10);
                    offset.top -= $2(window).scrollTop() - paddingTop;
                    var obj = {
                      width: el.width(),
                      // fix Zepto height+padding issue
                      height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                    };
                    if (getHasMozTransform()) {
                      obj["-moz-transform"] = obj["transform"] = "translate(" + offset.left + "px," + offset.top + "px)";
                    } else {
                      obj.left = offset.left;
                      obj.top = offset.top;
                    }
                    return obj;
                  }
                }
              });
              var IFRAME_NS = "iframe",
                _emptyPage = "//about:blank",
                _fixIframeBugs = function (isShowing) {
                  if (mfp.currTemplate[IFRAME_NS]) {
                    var el = mfp.currTemplate[IFRAME_NS].find("iframe");
                    if (el.length) {
                      if (!isShowing) {
                        el[0].src = _emptyPage;
                      }
                      if (mfp.isIE8) {
                        el.css("display", isShowing ? "block" : "none");
                      }
                    }
                  }
                };
              $2.magnificPopup.registerModule(IFRAME_NS, {
                options: {
                  markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                  srcAction: "iframe_src",
                  // we don't care and support only one default type of URL by default
                  patterns: {
                    youtube: {
                      index: "youtube.com",
                      id: "v=",
                      src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                      index: "vimeo.com/",
                      id: "/",
                      src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                      index: "//maps.google.",
                      src: "%id%&output=embed"
                    }
                  }
                },
                proto: {
                  initIframe: function () {
                    mfp.types.push(IFRAME_NS);
                    _mfpOn("BeforeChange", function (e, prevType, newType) {
                      if (prevType !== newType) {
                        if (prevType === IFRAME_NS) {
                          _fixIframeBugs();
                        } else if (newType === IFRAME_NS) {
                          _fixIframeBugs(true);
                        }
                      }
                    });
                    _mfpOn(CLOSE_EVENT + "." + IFRAME_NS, function () {
                      _fixIframeBugs();
                    });
                  },
                  getIframe: function (item, template) {
                    var embedSrc = item.src;
                    var iframeSt = mfp.st.iframe;
                    $2.each(iframeSt.patterns, function () {
                      if (embedSrc.indexOf(this.index) > -1) {
                        if (this.id) {
                          if (typeof this.id === "string") {
                            embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                          } else {
                            embedSrc = this.id.call(this, embedSrc);
                          }
                        }
                        embedSrc = this.src.replace("%id%", embedSrc);
                        return false;
                      }
                    });
                    var dataObj = {};
                    if (iframeSt.srcAction) {
                      dataObj[iframeSt.srcAction] = embedSrc;
                    }
                    mfp._parseMarkup(template, dataObj, item);
                    mfp.updateStatus("ready");
                    return template;
                  }
                }
              });
              var _getLoopedId = function (index) {
                  var numSlides = mfp.items.length;
                  if (index > numSlides - 1) {
                    return index - numSlides;
                  } else if (index < 0) {
                    return numSlides + index;
                  }
                  return index;
                },
                _replaceCurrTotal = function (text, curr, total) {
                  return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
                };
              $2.magnificPopup.registerModule("gallery", {
                options: {
                  enabled: false,
                  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                  preload: [0, 2],
                  navigateByImgClick: true,
                  arrows: true,
                  tPrev: "Previous (Left arrow key)",
                  tNext: "Next (Right arrow key)",
                  tCounter: "%curr% of %total%"
                },
                proto: {
                  initGallery: function () {
                    var gSt = mfp.st.gallery,
                      ns = ".mfp-gallery";
                    mfp.direction = true;
                    if (!gSt || !gSt.enabled) return false;
                    _wrapClasses += " mfp-gallery";
                    _mfpOn(OPEN_EVENT + ns, function () {
                      if (gSt.navigateByImgClick) {
                        mfp.wrap.on("click" + ns, ".mfp-img", function () {
                          if (mfp.items.length > 1) {
                            mfp.next();
                            return false;
                          }
                        });
                      }
                      _document.on("keydown" + ns, function (e) {
                        if (e.keyCode === 37) {
                          mfp.prev();
                        } else if (e.keyCode === 39) {
                          mfp.next();
                        }
                      });
                    });
                    _mfpOn("UpdateStatus" + ns, function (e, data2) {
                      if (data2.text) {
                        data2.text = _replaceCurrTotal(data2.text, mfp.currItem.index, mfp.items.length);
                      }
                    });
                    _mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
                      var l = mfp.items.length;
                      values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : "";
                    });
                    _mfpOn("BuildControls" + ns, function () {
                      if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                        var markup = gSt.arrowMarkup,
                          arrowLeft = mfp.arrowLeft = $2(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, "left")).addClass(PREVENT_CLOSE_CLASS),
                          arrowRight = mfp.arrowRight = $2(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, "right")).addClass(PREVENT_CLOSE_CLASS);
                        arrowLeft.click(function () {
                          mfp.prev();
                        });
                        arrowRight.click(function () {
                          mfp.next();
                        });
                        mfp.container.append(arrowLeft.add(arrowRight));
                      }
                    });
                    _mfpOn(CHANGE_EVENT + ns, function () {
                      if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
                      mfp._preloadTimeout = setTimeout(function () {
                        mfp.preloadNearbyImages();
                        mfp._preloadTimeout = null;
                      }, 16);
                    });
                    _mfpOn(CLOSE_EVENT + ns, function () {
                      _document.off(ns);
                      mfp.wrap.off("click" + ns);
                      mfp.arrowRight = mfp.arrowLeft = null;
                    });
                  },
                  next: function () {
                    mfp.direction = true;
                    mfp.index = _getLoopedId(mfp.index + 1);
                    mfp.updateItemHTML();
                  },
                  prev: function () {
                    mfp.direction = false;
                    mfp.index = _getLoopedId(mfp.index - 1);
                    mfp.updateItemHTML();
                  },
                  goTo: function (newIndex) {
                    mfp.direction = newIndex >= mfp.index;
                    mfp.index = newIndex;
                    mfp.updateItemHTML();
                  },
                  preloadNearbyImages: function () {
                    var p = mfp.st.gallery.preload,
                      preloadBefore = Math.min(p[0], mfp.items.length),
                      preloadAfter = Math.min(p[1], mfp.items.length),
                      i;
                    for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                      mfp._preloadItem(mfp.index + i);
                    }
                    for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                      mfp._preloadItem(mfp.index - i);
                    }
                  },
                  _preloadItem: function (index) {
                    index = _getLoopedId(index);
                    if (mfp.items[index].preloaded) {
                      return;
                    }
                    var item = mfp.items[index];
                    if (!item.parsed) {
                      item = mfp.parseEl(index);
                    }
                    _mfpTrigger("LazyLoad", item);
                    if (item.type === "image") {
                      item.img = $2('<img class="mfp-img" />').on("load.mfploader", function () {
                        item.hasSize = true;
                      }).on("error.mfploader", function () {
                        item.hasSize = true;
                        item.loadError = true;
                        _mfpTrigger("LazyLoadError", item);
                      }).attr("src", item.src);
                    }
                    item.preloaded = true;
                  }
                }
              });
              var RETINA_NS = "retina";
              $2.magnificPopup.registerModule(RETINA_NS, {
                options: {
                  replaceSrc: function (item) {
                    return item.src.replace(/\.\w+$/, function (m) {
                      return "@2x" + m;
                    });
                  },
                  ratio: 1
                  // Function or number.  Set to 1 to disable.
                },
                proto: {
                  initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                      var st = mfp.st.retina,
                        ratio = st.ratio;
                      ratio = !isNaN(ratio) ? ratio : ratio();
                      if (ratio > 1) {
                        _mfpOn("ImageHasSize." + RETINA_NS, function (e, item) {
                          item.img.css({
                            "max-width": item.img[0].naturalWidth / ratio,
                            "width": "100%"
                          });
                        });
                        _mfpOn("ElementParse." + RETINA_NS, function (e, item) {
                          item.src = st.replaceSrc(item, ratio);
                        });
                      }
                    }
                  }
                }
              });
              _checkInstance();
            });
            var ytp = ytp || {};
            var getYTPVideoID = function (url) {
              var videoID, playlistID;
              if (url.indexOf("youtu.be") > 0) {
                videoID = url.substr(url.lastIndexOf("/") + 1, url.length);
                playlistID = videoID.indexOf("?list=") > 0 ? videoID.substr(videoID.lastIndexOf("="), videoID.length) : null;
                videoID = playlistID ? videoID.substr(0, videoID.lastIndexOf("?")) : videoID;
              } else if (url.indexOf("http") > -1) {
                videoID = url.match(/[\\?&]v=([^&#]*)/)[1];
                playlistID = url.indexOf("list=") > 0 ? url.match(/[\\?&]list=([^&#]*)/)[1] : null;
              } else {
                videoID = url.length > 15 ? null : url;
                playlistID = videoID ? null : url;
              }
              return {
                videoID,
                playlistID
              };
            };
            (function (jQuery, ytp) {
              jQuery.mbYTPlayer = {
                name: "jquery.mb.YTPlayer",
                version: "3.0.12",
                build: "6132",
                author: "Matteo Bicocchi (pupunzi)",
                apiKey: "",
                defaults: {
                  containment: "body",
                  ratio: "auto",
                  // "auto", "16/9", "4/3"
                  videoURL: null,
                  playlistURL: null,
                  startAt: 0,
                  stopAt: 0,
                  autoPlay: true,
                  vol: 50,
                  // 1 to 100
                  addRaster: false,
                  mask: false,
                  opacity: 1,
                  quality: "default",
                  //or “small”, “medium”, “large”, “hd720”, “hd1080”, “highres”
                  mute: false,
                  loop: true,
                  fadeOnStartTime: 1e3,
                  //fade in timing at video start
                  showControls: true,
                  showAnnotations: false,
                  showYTLogo: true,
                  stopMovieOnBlur: true,
                  realfullscreen: true,
                  mobileFallbackImage: null,
                  gaTrack: true,
                  optimizeDisplay: true,
                  anchor: "center,center",
                  // top,bottom,left,right combined in pair
                  onReady: function (player) {},
                  onError: function (player, err) {}
                },
                /**
                 *  @fontface icons
                 *  */
                controls: {
                  play: "P",
                  pause: "p",
                  mute: "M",
                  unmute: "A",
                  onlyYT: "O",
                  showSite: "R",
                  ytLogo: "Y"
                },
                controlBar: null,
                loading: null,
                locationProtocol: "https:",
                filters: {
                  grayscale: {
                    value: 0,
                    unit: "%"
                  },
                  hue_rotate: {
                    value: 0,
                    unit: "deg"
                  },
                  invert: {
                    value: 0,
                    unit: "%"
                  },
                  opacity: {
                    value: 0,
                    unit: "%"
                  },
                  saturate: {
                    value: 0,
                    unit: "%"
                  },
                  sepia: {
                    value: 0,
                    unit: "%"
                  },
                  brightness: {
                    value: 0,
                    unit: "%"
                  },
                  contrast: {
                    value: 0,
                    unit: "%"
                  },
                  blur: {
                    value: 0,
                    unit: "px"
                  }
                },
                /**
                 *
                 * @param options
                 * @returns [players]
                 */
                buildPlayer: function (options) {
                  return this.each(function () {
                    var YTPlayer = this;
                    var $YTPlayer = jQuery(YTPlayer);
                    YTPlayer.loop = 0;
                    YTPlayer.opt = {};
                    YTPlayer.state = {};
                    YTPlayer.filters = jQuery.mbYTPlayer.filters;
                    YTPlayer.filtersEnabled = true;
                    YTPlayer.id = YTPlayer.id || "YTP_" + (/* @__PURE__ */new Date()).getTime();
                    $YTPlayer.addClass("mb_YTPlayer");
                    var property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                    if (typeof property != "undefined" && typeof property.vol != "undefined") property.vol = property.vol === 0 ? property.vol = 1 : property.vol;
                    jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
                    if (!YTPlayer.hasChanged) {
                      YTPlayer.defaultOpt = {};
                      jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options);
                    }
                    if (YTPlayer.opt.loop == "true") YTPlayer.opt.loop = 9999;
                    YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                    var isIframe = function () {
                      var isIfr = false;
                      try {
                        if (self.location.href != top.location.href) isIfr = true;
                      } catch (e) {
                        isIfr = true;
                      }
                      return isIfr;
                    };
                    YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe());
                    if (!YTPlayer.canGoFullScreen) YTPlayer.opt.realfullscreen = false;
                    if (!$YTPlayer.attr("id")) $YTPlayer.attr("id", "ytp_" + (/* @__PURE__ */new Date()).getTime());
                    var playerID = "mbYTP_" + YTPlayer.id;
                    YTPlayer.isAlone = false;
                    YTPlayer.hasFocus = true;
                    YTPlayer.videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : false;
                    YTPlayer.playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : false;
                    YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                    var playerVars = {
                      "modestbranding": 1,
                      "autoplay": 0,
                      "controls": 0,
                      "showinfo": 0,
                      "rel": 0,
                      "enablejsapi": 1,
                      "version": 3,
                      "playerapiid": playerID,
                      "origin": "*",
                      "allowfullscreen": true,
                      "wmode": "transparent",
                      "iv_load_policy": YTPlayer.opt.showAnnotations
                    };
                    if (document.createElement("video").canPlayType) jQuery.extend(playerVars, {
                      "html5": 1
                    });
                    if (jQuery.browser.msie && jQuery.browser.version < 9) this.opt.opacity = 1;
                    YTPlayer.isSelf = YTPlayer.opt.containment == "self";
                    YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery(this) : jQuery(YTPlayer.opt.containment);
                    YTPlayer.isBackground = YTPlayer.opt.containment.is("body");
                    if (YTPlayer.isBackground && ytp.backgroundIsInited) return;
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    YTPlayer.canPlayOnMobile = isPlayer && jQuery(this).children().length === 0;
                    YTPlayer.isPlayer = false;
                    if (!isPlayer) {
                      $YTPlayer.hide();
                    } else {
                      YTPlayer.isPlayer = true;
                    }
                    var overlay = jQuery("<div/>").css({
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }).addClass("mbYTP_overlay");
                    if (YTPlayer.isPlayer) {
                      overlay.on("click", function () {
                        $YTPlayer.YTPTogglePlay();
                      });
                    }
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    wrapper.css({
                      position: "absolute",
                      zIndex: 0,
                      minWidth: "100%",
                      minHeight: "100%",
                      left: 0,
                      top: 0,
                      overflow: "hidden",
                      opacity: 0
                    });
                    var playerBox = jQuery("<div/>").addClass("mbYTP_playerBox").attr("id", playerID);
                    playerBox.css({
                      position: "absolute",
                      zIndex: 0,
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      overflow: "hidden"
                    });
                    wrapper.append(playerBox);
                    YTPlayer.opt.containment.children().not("script, style").each(function () {
                      if (jQuery(this).css("position") == "static") jQuery(this).css("position", "relative");
                    });
                    if (YTPlayer.isBackground) {
                      jQuery("body").css({
                        boxSizing: "border-box"
                      });
                      wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                      });
                      $YTPlayer.hide();
                    } else if (YTPlayer.opt.containment.css("position") == "static") YTPlayer.opt.containment.css({
                      position: "relative"
                    });
                    YTPlayer.opt.containment.prepend(wrapper);
                    YTPlayer.wrapper = wrapper;
                    playerBox.css({
                      opacity: 1
                    });
                    if (!jQuery.browser.mobile) {
                      playerBox.after(overlay);
                      YTPlayer.overlay = overlay;
                    }
                    if (!YTPlayer.isBackground) {
                      overlay.on("mouseenter", function () {
                        if (YTPlayer.controlBar && YTPlayer.controlBar.length) YTPlayer.controlBar.addClass("visible");
                      }).on("mouseleave", function () {
                        if (YTPlayer.controlBar && YTPlayer.controlBar.length) YTPlayer.controlBar.removeClass("visible");
                      });
                    }
                    if (!ytp.YTAPIReady) {
                      jQuery("#YTAPI").remove();
                      var tag = jQuery("<script><\/script>").attr({
                        "src": jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                        "id": "YTAPI"
                      });
                      jQuery("head").prepend(tag);
                    } else {
                      setTimeout(function () {
                        jQuery(document).trigger("YTAPIReady");
                      }, 100);
                    }
                    if (jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) {
                      if (YTPlayer.opt.mobileFallbackImage) {
                        wrapper.css({
                          backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          opacity: 1
                        });
                      }
                      $YTPlayer.remove();
                      jQuery(document).trigger("YTPUnavailable");
                      return;
                    }
                    jQuery(document).on("YTAPIReady", function () {
                      if (YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit) return;
                      if (YTPlayer.isBackground) {
                        ytp.backgroundIsInited = true;
                      }
                      YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == "undefined" ? YTPlayer.isBackground ? true : false : YTPlayer.opt.autoPlay;
                      YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
                      jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);
                      jQuery(YTPlayer).on("YTPChanged", function () {
                        if (YTPlayer.isInit) return;
                        YTPlayer.isInit = true;
                        if (jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                          if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                            YTPlayer.opt.containment.css({
                              maxWidth: "100%"
                            });
                            var h = YTPlayer.opt.containment.outerWidth() * 0.563;
                            YTPlayer.opt.containment.css({
                              maxHeight: h
                            });
                          }
                          new YT.Player(playerID, {
                            videoId: YTPlayer.videoID.toString(),
                            width: "100%",
                            height: h,
                            playerVars,
                            events: {
                              "onReady": function (event2) {
                                YTPlayer.player = event2.target;
                                playerBox.css({
                                  opacity: 1
                                });
                                YTPlayer.wrapper.css({
                                  opacity: 1
                                });
                              }
                            }
                          });
                          return;
                        }
                        new YT.Player(playerID, {
                          videoId: YTPlayer.videoID.toString(),
                          playerVars,
                          events: {
                            "onReady": function (event2) {
                              YTPlayer.player = event2.target;
                              if (YTPlayer.isReady) return;
                              YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? false : true;
                              YTPlayer.playerEl = YTPlayer.player.getIframe();
                              jQuery(YTPlayer.playerEl).unselectable();
                              $YTPlayer.optimizeDisplay();
                              jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function () {
                                $YTPlayer.optimizeDisplay();
                              });
                              jQuery.mbYTPlayer.checkForState(YTPlayer);
                            },
                            /**
                             *
                             * @param event
                             *
                             * -1 (unstarted)
                             * 0 (ended)
                             * 1 (playing)
                             * 2 (paused)
                             * 3 (buffering)
                             * 5 (video cued).
                             *
                             *
                             */
                            "onStateChange": function (event) {
                              if (typeof event.target.getPlayerState != "function") return;
                              var state = event.target.getPlayerState();
                              if (YTPlayer.preventTrigger) {
                                YTPlayer.preventTrigger = false;
                                return;
                              }
                              YTPlayer.state = state;
                              var eventType;
                              switch (state) {
                                case -1:
                                  eventType = "YTPUnstarted";
                                  break;
                                case 0:
                                  eventType = "YTPEnd";
                                  break;
                                case 1:
                                  eventType = "YTPPlay";
                                  if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause);
                                  if (typeof _gaq != "undefined" && eval(YTPlayer.opt.gaTrack)) _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]);
                                  if (typeof ga != "undefined" && eval(YTPlayer.opt.gaTrack)) ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                  break;
                                case 2:
                                  eventType = "YTPPause";
                                  if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                  break;
                                case 3:
                                  YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                  eventType = "YTPBuffering";
                                  if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                  break;
                                case 5:
                                  eventType = "YTPCued";
                                  break;
                              }
                              var YTPEvent = jQuery.Event(eventType);
                              YTPEvent.time = YTPlayer.currentTime;
                              if (YTPlayer.canTrigger) jQuery(YTPlayer).trigger(YTPEvent);
                            },
                            /**
                             *
                             * @param e
                             */
                            "onPlaybackQualityChange": function (e) {
                              var quality = e.target.getPlaybackQuality();
                              var YTPQualityChange = jQuery.Event("YTPQualityChange");
                              YTPQualityChange.quality = quality;
                              jQuery(YTPlayer).trigger(YTPQualityChange);
                            },
                            /**
                             *
                             * @param err
                             */
                            "onError": function (err) {
                              if (err.data == 150) {
                                console.log("Embedding this video is restricted by Youtube.");
                                if (YTPlayer.isPlayList) jQuery(YTPlayer).playNext();
                              }
                              if (err.data == 2 && YTPlayer.isPlayList) jQuery(YTPlayer).playNext();
                              if (typeof YTPlayer.opt.onError == "function") YTPlayer.opt.onError($YTPlayer, err);
                            }
                          }
                        });
                      });
                    });
                    $YTPlayer.off("YTPTime.mask");
                    jQuery.mbYTPlayer.applyMask(YTPlayer);
                  });
                },
                /**
                 *
                 * @param YTPlayer
                 */
                getDataFromAPI: function (YTPlayer2) {
                  YTPlayer2.videoData = jQuery.mbStorage.get("YTPlayer_data_" + YTPlayer2.videoID);
                  jQuery(YTPlayer2).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
                    if (YTPlayer2.hasData) {
                      if (YTPlayer2.isPlayer && !YTPlayer2.opt.autoPlay) {
                        var bgndURL2 = YTPlayer2.videoData.thumb_max || YTPlayer2.videoData.thumb_high || YTPlayer2.videoData.thumb_medium;
                        YTPlayer2.opt.containment.css({
                          background: "rgba(0,0,0,0.5) url(" + bgndURL2 + ") center center",
                          backgroundSize: "cover"
                        });
                        YTPlayer2.opt.backgroundUrl = bgndURL2;
                      }
                    }
                  });
                  if (YTPlayer2.videoData) {
                    setTimeout(function () {
                      YTPlayer2.opt.ratio = YTPlayer2.opt.ratio == "auto" ? "16/9" : YTPlayer2.opt.ratio;
                      YTPlayer2.dataReceived = true;
                      jQuery(YTPlayer2).trigger("YTPChanged");
                      var YTPData = jQuery.Event("YTPData");
                      YTPData.prop = {};
                      for (var x in YTPlayer2.videoData) YTPData.prop[x] = YTPlayer2.videoData[x];
                      jQuery(YTPlayer2).trigger(YTPData);
                    }, 500);
                    YTPlayer2.hasData = true;
                  } else if (jQuery.mbYTPlayer.apiKey) {
                    jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + YTPlayer2.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (data2) {
                      YTPlayer2.dataReceived = true;
                      jQuery(YTPlayer2).trigger("YTPChanged");
                      function parseYTPlayer_data(data3) {
                        YTPlayer2.videoData = {};
                        YTPlayer2.videoData.id = YTPlayer2.videoID;
                        YTPlayer2.videoData.channelTitle = data3.channelTitle;
                        YTPlayer2.videoData.title = data3.title;
                        YTPlayer2.videoData.description = data3.description.length < 400 ? data3.description : data3.description.substring(0, 400) + " ...";
                        YTPlayer2.videoData.aspectratio = YTPlayer2.opt.ratio == "auto" ? "16/9" : YTPlayer2.opt.ratio;
                        YTPlayer2.opt.ratio = YTPlayer2.videoData.aspectratio;
                        YTPlayer2.videoData.thumb_max = data3.thumbnails.maxres ? data3.thumbnails.maxres.url : null;
                        YTPlayer2.videoData.thumb_high = data3.thumbnails.high ? data3.thumbnails.high.url : null;
                        YTPlayer2.videoData.thumb_medium = data3.thumbnails.medium ? data3.thumbnails.medium.url : null;
                        jQuery.mbStorage.set("YTPlayer_data_" + YTPlayer2.videoID, YTPlayer2.videoData);
                      }
                      parseYTPlayer_data(data2.items[0].snippet);
                      YTPlayer2.hasData = true;
                      var YTPData = jQuery.Event("YTPData");
                      YTPData.prop = {};
                      for (var x in YTPlayer2.videoData) YTPData.prop[x] = YTPlayer2.videoData[x];
                      jQuery(YTPlayer2).trigger(YTPData);
                    });
                  } else {
                    setTimeout(function () {
                      jQuery(YTPlayer2).trigger("YTPChanged");
                    }, 50);
                    if (YTPlayer2.isPlayer && !YTPlayer2.opt.autoPlay) {
                      var bgndURL = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + YTPlayer2.videoID + "/hqdefault.jpg";
                      if (bgndURL) YTPlayer2.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                        backgroundSize: "cover"
                      });
                      YTPlayer2.opt.backgroundUrl = bgndURL;
                    }
                    YTPlayer2.videoData = null;
                    YTPlayer2.opt.ratio = YTPlayer2.opt.ratio == "auto" ? "16/9" : YTPlayer2.opt.ratio;
                  }
                  if (YTPlayer2.isPlayer && !YTPlayer2.opt.autoPlay && !jQuery.browser.mobile) {
                    YTPlayer2.loading = jQuery("<div/>").addClass("loading").html("Loading").hide();
                    jQuery(YTPlayer2).append(YTPlayer2.loading);
                    YTPlayer2.loading.fadeIn();
                  }
                },
                /**
                 *
                 */
                removeStoredData: function () {
                  jQuery.mbStorage.remove();
                },
                /**
                 *
                 * @returns {*|YTPlayer.videoData}
                 */
                getVideoData: function () {
                  var YTPlayer2 = this.get(0);
                  return YTPlayer2.videoData;
                },
                /**
                 *
                 * @returns {*|YTPlayer.videoID|boolean}
                 */
                getVideoID: function () {
                  var YTPlayer2 = this.get(0);
                  return YTPlayer2.videoID || false;
                },
                /**
                 *
                 * @param quality
                 */
                setVideoQuality: function (quality) {
                  var YTPlayer2 = this.get(0);
                  YTPlayer2.player.setPlaybackQuality(quality);
                },
                /**
                 *
                 * @param videos
                 * @param shuffle
                 * @param callback
                 * @param loopList
                 * @returns {jQuery.mbYTPlayer}
                 */
                playlist: function (videos, shuffle, callback, loopList) {
                  var $YTPlayer2 = this;
                  var YTPlayer2 = $YTPlayer2.get(0);
                  YTPlayer2.isPlayList = true;
                  if (shuffle) videos = jQuery.shuffle(videos);
                  if (!YTPlayer2.videoID) {
                    YTPlayer2.videos = videos;
                    YTPlayer2.videoCounter = 0;
                    YTPlayer2.videoLength = videos.length;
                    jQuery(YTPlayer2).data("property", videos[0]);
                    jQuery(YTPlayer2).mb_YTPlayer();
                  }
                  if (typeof callback == "function") jQuery(YTPlayer2).one("YTPChanged", function () {
                    callback(YTPlayer2);
                  });
                  jQuery(YTPlayer2).on("YTPEnd", function () {
                    loopList = typeof loopList == "undefined" ? true : loopList;
                    jQuery(YTPlayer2).playNext(loopList);
                  });
                  return this;
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                playNext: function (loopList) {
                  var YTPlayer2 = this.get(0);
                  if (YTPlayer2.checkForStartAt) {
                    clearTimeout(YTPlayer2.checkForStartAt);
                    clearInterval(YTPlayer2.getState);
                  }
                  YTPlayer2.videoCounter++;
                  if (YTPlayer2.videoCounter >= YTPlayer2.videoLength && loopList) YTPlayer2.videoCounter = 0;
                  if (YTPlayer2.videoCounter < YTPlayer2.videoLength) jQuery(YTPlayer2).YTPChangeMovie(YTPlayer2.videos[YTPlayer2.videoCounter]);else YTPlayer2.videoCounter--;
                  return this;
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                playPrev: function () {
                  var YTPlayer2 = this.get(0);
                  if (YTPlayer2.checkForStartAt) {
                    clearInterval(YTPlayer2.checkForStartAt);
                    clearInterval(YTPlayer2.getState);
                  }
                  YTPlayer2.videoCounter--;
                  if (YTPlayer2.videoCounter < 0) YTPlayer2.videoCounter = YTPlayer2.videoLength - 1;
                  jQuery(YTPlayer2).YTPChangeMovie(YTPlayer2.videos[YTPlayer2.videoCounter]);
                  return this;
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                playIndex: function (idx2) {
                  var YTPlayer2 = this.get(0);
                  idx2 = idx2 - 1;
                  if (YTPlayer2.checkForStartAt) {
                    clearInterval(YTPlayer2.checkForStartAt);
                    clearInterval(YTPlayer2.getState);
                  }
                  YTPlayer2.videoCounter = idx2;
                  if (YTPlayer2.videoCounter >= YTPlayer2.videoLength - 1) YTPlayer2.videoCounter = YTPlayer2.videoLength - 1;
                  jQuery(YTPlayer2).YTPChangeMovie(YTPlayer2.videos[YTPlayer2.videoCounter]);
                  return this;
                },
                /**
                 *
                 * @param opt
                 */
                changeMovie: function (opt) {
                  var $YTPlayer2 = this;
                  var YTPlayer2 = $YTPlayer2.get(0);
                  YTPlayer2.opt.startAt = 0;
                  YTPlayer2.opt.stopAt = 0;
                  YTPlayer2.opt.mask = false;
                  YTPlayer2.opt.mute = true;
                  YTPlayer2.hasData = false;
                  YTPlayer2.hasChanged = true;
                  YTPlayer2.player.loopTime = void 0;
                  if (opt) jQuery.extend(YTPlayer2.opt, opt);
                  YTPlayer2.videoID = getYTPVideoID(YTPlayer2.opt.videoURL).videoID;
                  if (YTPlayer2.opt.loop == "true") YTPlayer2.opt.loop = 9999;
                  jQuery(YTPlayer2.playerEl).CSSAnimate({
                    opacity: 0
                  }, YTPlayer2.opt.fadeOnStartTime, function () {
                    var YTPChangeMovie = jQuery.Event("YTPChangeMovie");
                    YTPChangeMovie.time = YTPlayer2.currentTime;
                    YTPChangeMovie.videoId = YTPlayer2.videoID;
                    jQuery(YTPlayer2).trigger(YTPChangeMovie);
                    jQuery(YTPlayer2).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + YTPlayer2.videoID), 1, YTPlayer2.opt.quality);
                    jQuery(YTPlayer2).optimizeDisplay();
                    jQuery.mbYTPlayer.checkForState(YTPlayer2);
                    jQuery.mbYTPlayer.getDataFromAPI(YTPlayer2);
                  });
                  jQuery.mbYTPlayer.applyMask(YTPlayer2);
                },
                /**
                 *
                 * @returns {player}
                 */
                getPlayer: function () {
                  return jQuery(this).get(0).player;
                },
                playerDestroy: function () {
                  var YTPlayer2 = this.get(0);
                  ytp.YTAPIReady = true;
                  ytp.backgroundIsInited = false;
                  YTPlayer2.isInit = false;
                  YTPlayer2.videoID = null;
                  YTPlayer2.isReady = false;
                  var playerBox2 = YTPlayer2.wrapper;
                  playerBox2.remove();
                  jQuery("#controlBar_" + YTPlayer2.id).remove();
                  clearInterval(YTPlayer2.checkForStartAt);
                  clearInterval(YTPlayer2.getState);
                  return this;
                },
                /**
                 *
                 * @param real
                 * @returns {jQuery.mbYTPlayer}
                 */
                fullscreen: function (real) {
                  var YTPlayer = this.get(0);
                  if (typeof real == "undefined") real = YTPlayer.opt.realfullscreen;
                  real = eval(real);
                  var controls = jQuery("#controlBar_" + YTPlayer.id);
                  var fullScreenBtn = controls.find(".mb_OnlyYT");
                  var videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
                  if (real) {
                    var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                    jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
                      var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                      if (!isFullScreen) {
                        YTPlayer.isAlone = false;
                        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                        jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality);
                        videoWrapper.removeClass("YTPFullscreen");
                        videoWrapper.CSSAnimate({
                          opacity: YTPlayer.opt.opacity
                        }, YTPlayer.opt.fadeOnStartTime);
                        videoWrapper.css({
                          zIndex: 0
                        });
                        if (YTPlayer.isBackground) {
                          jQuery("body").after(controls);
                        } else {
                          YTPlayer.wrapper.before(controls);
                        }
                        jQuery(window).resize();
                        jQuery(YTPlayer).trigger("YTPFullScreenEnd");
                      } else {
                        jQuery(YTPlayer).YTPSetVideoQuality("default");
                        jQuery(YTPlayer).trigger("YTPFullScreenStart");
                      }
                    });
                  }
                  if (!YTPlayer.isAlone) {
                    let hideMouse2 = function () {
                      YTPlayer.overlay.css({
                        cursor: "none"
                      });
                    };
                    jQuery(document).on("mousemove.YTPlayer", function (e) {
                      YTPlayer.overlay.css({
                        cursor: "auto"
                      });
                      clearTimeout(YTPlayer.hideCursor);
                      if (!jQuery(e.target).parents().is(".mb_YTPBar")) YTPlayer.hideCursor = setTimeout(hideMouse2, 3e3);
                    });
                    hideMouse2();
                    if (real) {
                      videoWrapper.css({
                        opacity: 0
                      });
                      videoWrapper.addClass("YTPFullscreen");
                      launchFullscreen(videoWrapper.get(0));
                      setTimeout(function () {
                        videoWrapper.CSSAnimate({
                          opacity: 1
                        }, YTPlayer.opt.fadeOnStartTime);
                        YTPlayer.wrapper.append(controls);
                        jQuery(YTPlayer).optimizeDisplay();
                        YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + 0.1, true);
                      }, 500);
                    } else videoWrapper.css({
                      zIndex: 1e4
                    }).CSSAnimate({
                      opacity: 1
                    }, YTPlayer.opt.fadeOnStartTime);
                    fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
                    YTPlayer.isAlone = true;
                  } else {
                    jQuery(document).off("mousemove.YTPlayer");
                    clearTimeout(YTPlayer.hideCursor);
                    YTPlayer.overlay.css({
                      cursor: "auto"
                    });
                    if (real) {
                      cancelFullscreen();
                    } else {
                      videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                      }, YTPlayer.opt.fadeOnStartTime);
                      videoWrapper.css({
                        zIndex: 0
                      });
                    }
                    fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                    YTPlayer.isAlone = false;
                  }
                  function RunPrefixMethod(obj, method) {
                    var pfx = ["webkit", "moz", "ms", "o", ""];
                    var p = 0,
                      m,
                      t;
                    while (p < pfx.length && !obj[m]) {
                      m = method;
                      if (pfx[p] == "") {
                        m = m.substr(0, 1).toLowerCase() + m.substr(1);
                      }
                      m = pfx[p] + m;
                      t = typeof obj[m];
                      if (t != "undefined") {
                        pfx = [pfx[p]];
                        return t == "function" ? obj[m]() : obj[m];
                      }
                      p++;
                    }
                  }
                  function launchFullscreen(element) {
                    RunPrefixMethod(element, "RequestFullScreen");
                  }
                  function cancelFullscreen() {
                    if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
                      RunPrefixMethod(document, "CancelFullScreen");
                    }
                  }
                  return this;
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                toggleLoops: function () {
                  var YTPlayer2 = this.get(0);
                  var data2 = YTPlayer2.opt;
                  if (data2.loop == 1) {
                    data2.loop = 0;
                  } else {
                    if (data2.startAt) {
                      YTPlayer2.player.seekTo(data2.startAt);
                    } else {
                      YTPlayer2.player.playVideo();
                    }
                    data2.loop = 1;
                  }
                  return this;
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                play: function () {
                  var YTPlayer2 = this.get(0);
                  if (!YTPlayer2.isReady) return this;
                  YTPlayer2.player.playVideo();
                  YTPlayer2.wrapper.CSSAnimate({
                    opacity: YTPlayer2.isAlone ? 1 : YTPlayer2.opt.opacity
                  }, YTPlayer2.opt.fadeOnStartTime * 2);
                  jQuery(YTPlayer2.playerEl).CSSAnimate({
                    opacity: 1
                  }, YTPlayer2.opt.fadeOnStartTime);
                  var controls2 = jQuery("#controlBar_" + YTPlayer2.id);
                  var playBtn = controls2.find(".mb_YTPPlaypause");
                  playBtn.html(jQuery.mbYTPlayer.controls.pause);
                  YTPlayer2.state = 1;
                  YTPlayer2.orig_background = jQuery(YTPlayer2).css("background-image");
                  return this;
                },
                /**
                 *
                 * @param callback
                 * @returns {jQuery.mbYTPlayer}
                 */
                togglePlay: function (callback) {
                  var YTPlayer2 = this.get(0);
                  if (YTPlayer2.state == 1) this.YTPPause();else this.YTPPlay();
                  if (typeof callback == "function") callback(YTPlayer2.state);
                  return this;
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                stop: function () {
                  var YTPlayer2 = this.get(0);
                  var controls2 = jQuery("#controlBar_" + YTPlayer2.id);
                  var playBtn = controls2.find(".mb_YTPPlaypause");
                  playBtn.html(jQuery.mbYTPlayer.controls.play);
                  YTPlayer2.player.stopVideo();
                  return this;
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                pause: function () {
                  var YTPlayer2 = this.get(0);
                  YTPlayer2.player.pauseVideo();
                  YTPlayer2.state = 2;
                  return this;
                },
                /**
                 *
                 * @param val
                 * @returns {jQuery.mbYTPlayer}
                 */
                seekTo: function (val) {
                  var YTPlayer2 = this.get(0);
                  YTPlayer2.player.seekTo(val, true);
                  return this;
                },
                /**
                 *
                 * @param val
                 * @returns {jQuery.mbYTPlayer}
                 */
                setVolume: function (val) {
                  var YTPlayer2 = this.get(0);
                  if (!val && !YTPlayer2.opt.vol && YTPlayer2.player.getVolume() == 0) jQuery(YTPlayer2).YTPUnmute();else if (!val && YTPlayer2.player.getVolume() > 0 || val && YTPlayer2.opt.vol == val) {
                    if (!YTPlayer2.isMute) jQuery(YTPlayer2).YTPMute();else jQuery(YTPlayer2).YTPUnmute();
                  } else {
                    YTPlayer2.opt.vol = val;
                    YTPlayer2.player.setVolume(YTPlayer2.opt.vol);
                    if (YTPlayer2.volumeBar && YTPlayer2.volumeBar.length) YTPlayer2.volumeBar.updateSliderVal(val);
                  }
                  return this;
                },
                /**
                 *
                 * @returns {boolean}
                 */
                toggleVolume: function () {
                  var YTPlayer2 = this.get(0);
                  if (!YTPlayer2) return;
                  if (YTPlayer2.player.isMuted()) {
                    jQuery(YTPlayer2).YTPUnmute();
                    return true;
                  } else {
                    jQuery(YTPlayer2).YTPMute();
                    return false;
                  }
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                mute: function () {
                  var YTPlayer2 = this.get(0);
                  if (YTPlayer2.isMute) return;
                  YTPlayer2.player.mute();
                  YTPlayer2.isMute = true;
                  YTPlayer2.player.setVolume(0);
                  if (YTPlayer2.volumeBar && YTPlayer2.volumeBar.length && YTPlayer2.volumeBar.width() > 10) {
                    YTPlayer2.volumeBar.updateSliderVal(0);
                  }
                  var controls2 = jQuery("#controlBar_" + YTPlayer2.id);
                  var muteBtn = controls2.find(".mb_YTPMuteUnmute");
                  muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
                  jQuery(YTPlayer2).addClass("isMuted");
                  if (YTPlayer2.volumeBar && YTPlayer2.volumeBar.length) YTPlayer2.volumeBar.addClass("muted");
                  var YTPEvent2 = jQuery.Event("YTPMuted");
                  YTPEvent2.time = YTPlayer2.currentTime;
                  if (YTPlayer2.canTrigger) jQuery(YTPlayer2).trigger(YTPEvent2);
                  return this;
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                unmute: function () {
                  var YTPlayer2 = this.get(0);
                  if (!YTPlayer2.isMute) return;
                  YTPlayer2.player.unMute();
                  YTPlayer2.isMute = false;
                  YTPlayer2.player.setVolume(YTPlayer2.opt.vol);
                  if (YTPlayer2.volumeBar && YTPlayer2.volumeBar.length) YTPlayer2.volumeBar.updateSliderVal(YTPlayer2.opt.vol > 10 ? YTPlayer2.opt.vol : 10);
                  var controls2 = jQuery("#controlBar_" + YTPlayer2.id);
                  var muteBtn = controls2.find(".mb_YTPMuteUnmute");
                  muteBtn.html(jQuery.mbYTPlayer.controls.mute);
                  jQuery(YTPlayer2).removeClass("isMuted");
                  if (YTPlayer2.volumeBar && YTPlayer2.volumeBar.length) YTPlayer2.volumeBar.removeClass("muted");
                  var YTPEvent2 = jQuery.Event("YTPUnmuted");
                  YTPEvent2.time = YTPlayer2.currentTime;
                  if (YTPlayer2.canTrigger) jQuery(YTPlayer2).trigger(YTPEvent2);
                  return this;
                },
                /**
                 * FILTERS
                 *
                 *
                 * @param filter
                 * @param value
                 * @returns {jQuery.mbYTPlayer}
                 */
                applyFilter: function (filter, value) {
                  return this.each(function () {
                    var YTPlayer2 = this;
                    YTPlayer2.filters[filter].value = value;
                    if (YTPlayer2.filtersEnabled) jQuery(YTPlayer2).YTPEnableFilters();
                  });
                },
                /**
                 *
                 * @param filters
                 * @returns {jQuery.mbYTPlayer}
                 */
                applyFilters: function (filters) {
                  return this.each(function () {
                    var YTPlayer2 = this;
                    if (!YTPlayer2.isReady) {
                      jQuery(YTPlayer2).on("YTPReady", function () {
                        jQuery(YTPlayer2).YTPApplyFilters(filters);
                      });
                      return;
                    }
                    for (var key in filters) jQuery(YTPlayer2).YTPApplyFilter(key, filters[key]);
                    jQuery(YTPlayer2).trigger("YTPFiltersApplied");
                  });
                },
                /**
                 *
                 * @param filter
                 * @param value
                 * @returns {*}
                 */
                toggleFilter: function (filter, value) {
                  return this.each(function () {
                    var YTPlayer2 = this;
                    if (!YTPlayer2.filters[filter].value) YTPlayer2.filters[filter].value = value;else YTPlayer2.filters[filter].value = 0;
                    if (YTPlayer2.filtersEnabled) jQuery(this).YTPEnableFilters();
                  });
                },
                /**
                 *
                 * @param callback
                 * @returns {*}
                 */
                toggleFilters: function (callback) {
                  return this.each(function () {
                    var YTPlayer2 = this;
                    if (YTPlayer2.filtersEnabled) {
                      jQuery(YTPlayer2).trigger("YTPDisableFilters");
                      jQuery(YTPlayer2).YTPDisableFilters();
                    } else {
                      jQuery(YTPlayer2).YTPEnableFilters();
                      jQuery(YTPlayer2).trigger("YTPEnableFilters");
                    }
                    if (typeof callback == "function") callback(YTPlayer2.filtersEnabled);
                  });
                },
                /**
                 *
                 * @returns {*}
                 */
                disableFilters: function () {
                  return this.each(function () {
                    var YTPlayer2 = this;
                    var iframe = jQuery(YTPlayer2.playerEl);
                    iframe.css("-webkit-filter", "");
                    iframe.css("filter", "");
                    YTPlayer2.filtersEnabled = false;
                  });
                },
                /**
                 *
                 * @returns {*}
                 */
                enableFilters: function () {
                  return this.each(function () {
                    var YTPlayer2 = this;
                    var iframe = jQuery(YTPlayer2.playerEl);
                    var filterStyle = "";
                    for (var key in YTPlayer2.filters) {
                      if (YTPlayer2.filters[key].value) filterStyle += key.replace("_", "-") + "(" + YTPlayer2.filters[key].value + YTPlayer2.filters[key].unit + ") ";
                    }
                    iframe.css("-webkit-filter", filterStyle);
                    iframe.css("filter", filterStyle);
                    YTPlayer2.filtersEnabled = true;
                  });
                },
                /**
                 *
                 * @param filter
                 * @param callback
                 * @returns {*}
                 */
                removeFilter: function (filter, callback) {
                  return this.each(function () {
                    var YTPlayer2 = this;
                    if (typeof filter == "function") {
                      callback = filter;
                      filter = null;
                    }
                    if (!filter) for (var key in YTPlayer2.filters) {
                      jQuery(this).YTPApplyFilter(key, 0);
                      if (typeof callback == "function") callback(key);
                    } else {
                      jQuery(this).YTPApplyFilter(filter, 0);
                      if (typeof callback == "function") callback(filter);
                    }
                  });
                },
                /**
                 *
                 * @returns {*}
                 */
                getFilters: function () {
                  var YTPlayer2 = this.get(0);
                  return YTPlayer2.filters;
                },
                /**
                 * MASK
                 *
                 *
                 * @param mask
                 * @returns {jQuery.mbYTPlayer}
                 */
                addMask: function (mask) {
                  var YTPlayer2 = this.get(0);
                  var overlay2 = YTPlayer2.overlay;
                  if (!mask) {
                    mask = YTPlayer2.actualMask;
                  }
                  var tempImg = jQuery("<img/>").attr("src", mask).on("load", function () {
                    overlay2.CSSAnimate({
                      opacity: 0
                    }, YTPlayer2.opt.fadeOnStartTime, function () {
                      YTPlayer2.hasMask = true;
                      tempImg.remove();
                      overlay2.css({
                        backgroundImage: "url(" + mask + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                      });
                      overlay2.CSSAnimate({
                        opacity: 1
                      }, YTPlayer2.opt.fadeOnStartTime);
                    });
                  });
                  return this;
                },
                /**
                 *
                 * @returns {jQuery.mbYTPlayer}
                 */
                removeMask: function () {
                  var YTPlayer2 = this.get(0);
                  var overlay2 = YTPlayer2.overlay;
                  overlay2.CSSAnimate({
                    opacity: 0
                  }, YTPlayer2.opt.fadeOnStartTime, function () {
                    YTPlayer2.hasMask = false;
                    overlay2.css({
                      backgroundImage: "",
                      backgroundRepeat: "",
                      backgroundPosition: "",
                      backgroundSize: ""
                    });
                    overlay2.CSSAnimate({
                      opacity: 1
                    }, YTPlayer2.opt.fadeOnStartTime);
                  });
                  return this;
                },
                /**
                 *
                 * @param YTPlayer
                 */
                applyMask: function (YTPlayer2) {
                  var $YTPlayer2 = jQuery(YTPlayer2);
                  $YTPlayer2.off("YTPTime.mask");
                  if (YTPlayer2.opt.mask) {
                    if (typeof YTPlayer2.opt.mask == "string") {
                      $YTPlayer2.YTPAddMask(YTPlayer2.opt.mask);
                      YTPlayer2.actualMask = YTPlayer2.opt.mask;
                    } else if (typeof YTPlayer2.opt.mask == "object") {
                      for (var time in YTPlayer2.opt.mask) {
                        if (YTPlayer2.opt.mask[time]) var img = jQuery("<img/>").attr("src", YTPlayer2.opt.mask[time]);
                      }
                      if (YTPlayer2.opt.mask[0]) $YTPlayer2.YTPAddMask(YTPlayer2.opt.mask[0]);
                      $YTPlayer2.on("YTPTime.mask", function (e) {
                        for (var time2 in YTPlayer2.opt.mask) {
                          if (e.time == time2) if (!YTPlayer2.opt.mask[time2]) {
                            $YTPlayer2.YTPRemoveMask();
                          } else {
                            $YTPlayer2.YTPAddMask(YTPlayer2.opt.mask[time2]);
                            YTPlayer2.actualMask = YTPlayer2.opt.mask[time2];
                          }
                        }
                      });
                    }
                  }
                },
                /**
                 *
                 */
                toggleMask: function () {
                  var YTPlayer2 = this.get(0);
                  var $YTPlayer2 = $(YTPlayer2);
                  if (YTPlayer2.hasMask) $YTPlayer2.YTPRemoveMask();else $YTPlayer2.YTPAddMask();
                  return this;
                },
                /**
                 *
                 * @returns {{totalTime: number, currentTime: number}}
                 */
                manageProgress: function () {
                  var YTPlayer2 = this.get(0);
                  var controls2 = jQuery("#controlBar_" + YTPlayer2.id);
                  var progressBar2 = controls2.find(".mb_YTPProgress");
                  var loadedBar2 = controls2.find(".mb_YTPLoaded");
                  var timeBar2 = controls2.find(".mb_YTPseekbar");
                  var totW = progressBar2.outerWidth();
                  var currentTime = Math.floor(YTPlayer2.player.getCurrentTime());
                  var totalTime = Math.floor(YTPlayer2.player.getDuration());
                  var timeW = currentTime * totW / totalTime;
                  var startLeft = 0;
                  var loadedW = YTPlayer2.player.getVideoLoadedFraction() * 100;
                  loadedBar2.css({
                    left: startLeft,
                    width: loadedW + "%"
                  });
                  timeBar2.css({
                    left: 0,
                    width: timeW
                  });
                  return {
                    totalTime,
                    currentTime
                  };
                },
                /**
                 *
                 * @param YTPlayer
                 */
                buildControls: function (YTPlayer) {
                  var data = YTPlayer.opt;
                  data.showYTLogo = data.showYTLogo || data.printUrl;
                  if (jQuery("#controlBar_" + YTPlayer.id).length) return;
                  YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                  }).hide();
                  var buttonBar = jQuery("<div/>").addClass("buttonBar");
                  var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
                    if (YTPlayer.player.getPlayerState() == 1) jQuery(YTPlayer).YTPPause();else jQuery(YTPlayer).YTPPlay();
                  });
                  var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
                    if (YTPlayer.player.getVolume() == 0) {
                      jQuery(YTPlayer).YTPUnmute();
                    } else {
                      jQuery(YTPlayer).YTPMute();
                    }
                  });
                  var volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                    display: "inline-block"
                  });
                  YTPlayer.volumeBar = volumeBar;
                  var idx = jQuery("<span/>").addClass("mb_YTPTime");
                  var vURL = data.videoURL ? data.videoURL : "";
                  if (vURL.indexOf("http") < 0) vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL;
                  var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                    window.open(vURL, "viewOnYT");
                  });
                  var onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
                    jQuery(YTPlayer).YTPFullscreen(data.realfullscreen);
                  });
                  var progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (e) {
                    timeBar.css({
                      width: e.clientX - timeBar.offset().left
                    });
                    YTPlayer.timeW = e.clientX - timeBar.offset().left;
                    YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                      width: 0
                    });
                    var totalTime = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer.goto = timeBar.outerWidth() * totalTime / progressBar.outerWidth();
                    YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
                    YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                      width: 0
                    });
                  });
                  var loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute");
                  var timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                  progressBar.append(loadedBar).append(timeBar);
                  buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx);
                  if (data.showYTLogo) {
                    buttonBar.append(movieUrl);
                  }
                  if (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) buttonBar.append(onlyVideo);
                  YTPlayer.controlBar.append(buttonBar).append(progressBar);
                  if (!YTPlayer.isBackground) {
                    YTPlayer.controlBar.addClass("inlinePlayer");
                    YTPlayer.wrapper.before(YTPlayer.controlBar);
                  } else {
                    jQuery("body").after(YTPlayer.controlBar);
                  }
                  volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function (el) {
                      if (el.value == 0) {
                        jQuery(YTPlayer).YTPMute();
                      } else {
                        jQuery(YTPlayer).YTPUnmute();
                      }
                      YTPlayer.player.setVolume(el.value);
                      if (!YTPlayer.isMute) YTPlayer.opt.vol = el.value;
                    }
                  });
                },
                /**
                 *
                 * @param YTPlayer
                 */
                checkForState: function (YTPlayer) {
                  var interval = YTPlayer.opt.showControls ? 100 : 400;
                  clearInterval(YTPlayer.getState);
                  if (!jQuery.contains(document, YTPlayer)) {
                    jQuery(YTPlayer).YTPPlayerDestroy();
                    clearInterval(YTPlayer.getState);
                    clearInterval(YTPlayer.checkForStartAt);
                    return;
                  }
                  jQuery.mbYTPlayer.checkForStart(YTPlayer);
                  YTPlayer.getState = setInterval(function () {
                    var prog = jQuery(YTPlayer).YTPManageProgress();
                    var $YTPlayer = jQuery(YTPlayer);
                    var data = YTPlayer.opt;
                    var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                    var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                    stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;
                    if (YTPlayer.currentTime != prog.currentTime) {
                      var YTPEvent = jQuery.Event("YTPTime");
                      YTPEvent.time = YTPlayer.currentTime;
                      jQuery(YTPlayer).trigger(YTPEvent);
                    }
                    YTPlayer.currentTime = prog.currentTime;
                    YTPlayer.totalTime = YTPlayer.player.getDuration();
                    if (YTPlayer.player.getVolume() == 0) $YTPlayer.addClass("isMuted");else $YTPlayer.removeClass("isMuted");
                    if (YTPlayer.opt.showControls) if (prog.totalTime) {
                      YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
                    } else {
                      YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --");
                    }
                    if (eval(YTPlayer.opt.stopMovieOnBlur)) {
                      if (!document.hasFocus()) {
                        if (YTPlayer.state == 1) {
                          YTPlayer.hasFocus = false;
                          $YTPlayer.YTPPause();
                        }
                      } else if (document.hasFocus() && !YTPlayer.hasFocus && !(YTPlayer.state == -1 || YTPlayer.state == 0)) {
                        YTPlayer.hasFocus = true;
                        $YTPlayer.YTPPlay();
                      }
                    }
                    if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact) {
                      YTPlayer.controlBar.addClass("compact");
                      YTPlayer.isCompact = true;
                      if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                    } else if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact) {
                      YTPlayer.controlBar.removeClass("compact");
                      YTPlayer.isCompact = false;
                      if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                    }
                    if (YTPlayer.player.getPlayerState() == 1 && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                      if (YTPlayer.isEnded) return;
                      YTPlayer.isEnded = true;
                      setTimeout(function () {
                        YTPlayer.isEnded = false;
                      }, 1e3);
                      if (YTPlayer.isPlayList) {
                        if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                          YTPlayer.player.loopTime = void 0;
                          clearInterval(YTPlayer.getState);
                          var YTPEnd = jQuery.Event("YTPEnd");
                          YTPEnd.time = YTPlayer.currentTime;
                          jQuery(YTPlayer).trigger(YTPEnd);
                          return;
                        }
                      } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                        YTPlayer.player.loopTime = void 0;
                        YTPlayer.preventTrigger = true;
                        YTPlayer.state = 2;
                        jQuery(YTPlayer).YTPPause();
                        YTPlayer.wrapper.CSSAnimate({
                          opacity: 0
                        }, YTPlayer.opt.fadeOnStartTime, function () {
                          if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                          var YTPEnd2 = jQuery.Event("YTPEnd");
                          YTPEnd2.time = YTPlayer.currentTime;
                          jQuery(YTPlayer).trigger(YTPEnd2);
                          YTPlayer.player.seekTo(startAt, true);
                          if (!YTPlayer.isBackground) {
                            if (YTPlayer.opt.backgroundUrl && YTPlayer.isPlayer) {
                              YTPlayer.opt.backgroundUrl = YTPlayer.opt.backgroundUrl || YTPlayer.orig_background;
                              YTPlayer.opt.containment.css({
                                background: "url(" + YTPlayer.opt.backgroundUrl + ") center center",
                                backgroundSize: "cover"
                              });
                            }
                          } else {
                            if (YTPlayer.orig_background) jQuery(YTPlayer).css("background-image", YTPlayer.orig_background);
                          }
                        });
                        return;
                      }
                      YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1;
                      startAt = startAt || 1;
                      YTPlayer.preventTrigger = true;
                      YTPlayer.state = 2;
                      jQuery(YTPlayer).YTPPause();
                      YTPlayer.player.seekTo(startAt, true);
                      $YTPlayer.YTPPlay();
                    }
                  }, interval);
                },
                /**
                 *
                 * @returns {string} time
                 */
                getTime: function () {
                  var YTPlayer2 = this.get(0);
                  return jQuery.mbYTPlayer.formatTime(YTPlayer2.currentTime);
                },
                /**
                 *
                 * @returns {string} total time
                 */
                getTotalTime: function () {
                  var YTPlayer2 = this.get(0);
                  return jQuery.mbYTPlayer.formatTime(YTPlayer2.totalTime);
                },
                /**
                 *
                 * @param YTPlayer
                 */
                checkForStart: function (YTPlayer2) {
                  var $YTPlayer2 = jQuery(YTPlayer2);
                  if (!jQuery.contains(document, YTPlayer2)) {
                    jQuery(YTPlayer2).YTPPlayerDestroy();
                    return;
                  }
                  YTPlayer2.preventTrigger = true;
                  YTPlayer2.state = 2;
                  jQuery(YTPlayer2).YTPPause();
                  jQuery(YTPlayer2).muteYTPVolume();
                  jQuery("#controlBar_" + YTPlayer2.id).remove();
                  YTPlayer2.controlBar = false;
                  if (YTPlayer2.opt.showControls) jQuery.mbYTPlayer.buildControls(YTPlayer2);
                  if (YTPlayer2.opt.addRaster) {
                    var classN = YTPlayer2.opt.addRaster == "dot" ? "raster-dot" : "raster";
                    YTPlayer2.overlay.addClass(YTPlayer2.isRetina ? classN + " retina" : classN);
                  } else {
                    YTPlayer2.overlay.removeClass(function (index, classNames) {
                      var current_classes = classNames.split(" "),
                        classes_to_remove = [];
                      jQuery.each(current_classes, function (index2, class_name) {
                        if (/raster.*/.test(class_name)) {
                          classes_to_remove.push(class_name);
                        }
                      });
                      classes_to_remove.push("retina");
                      return classes_to_remove.join(" ");
                    });
                  }
                  var startAt2 = YTPlayer2.opt.startAt ? YTPlayer2.opt.startAt : 1;
                  YTPlayer2.player.playVideo();
                  YTPlayer2.player.seekTo(startAt2, true);
                  YTPlayer2.checkForStartAt = setInterval(function () {
                    jQuery(YTPlayer2).YTPMute();
                    var canPlayVideo = YTPlayer2.player.getVideoLoadedFraction() >= startAt2 / YTPlayer2.player.getDuration();
                    if (YTPlayer2.player.getDuration() > 0 && YTPlayer2.player.getCurrentTime() >= startAt2 && canPlayVideo) {
                      clearInterval(YTPlayer2.checkForStartAt);
                      if (typeof YTPlayer2.opt.onReady == "function") YTPlayer2.opt.onReady(YTPlayer2);
                      YTPlayer2.isReady = true;
                      var YTPready = jQuery.Event("YTPReady");
                      YTPready.time = YTPlayer2.currentTime;
                      jQuery(YTPlayer2).trigger(YTPready);
                      YTPlayer2.preventTrigger = true;
                      YTPlayer2.state = 2;
                      jQuery(YTPlayer2).YTPPause();
                      if (!YTPlayer2.opt.mute) jQuery(YTPlayer2).YTPUnmute();
                      YTPlayer2.canTrigger = true;
                      if (YTPlayer2.opt.autoPlay) {
                        var YTPStart = jQuery.Event("YTPStart");
                        YTPStart.time = YTPlayer2.currentTime;
                        jQuery(YTPlayer2).trigger(YTPStart);
                        jQuery(YTPlayer2.playerEl).CSSAnimate({
                          opacity: 1
                        }, 1e3);
                        $YTPlayer2.YTPPlay();
                        YTPlayer2.wrapper.CSSAnimate({
                          opacity: YTPlayer2.isAlone ? 1 : YTPlayer2.opt.opacity
                        }, YTPlayer2.opt.fadeOnStartTime);
                        if (jQuery.browser.safari) {
                          YTPlayer2.safariPlay = setInterval(function () {
                            if (YTPlayer2.state != 1) $YTPlayer2.YTPPlay();else clearInterval(YTPlayer2.safariPlay);
                          }, 10);
                        }
                        $YTPlayer2.on("YTPReady", function () {
                          $YTPlayer2.YTPPlay();
                        });
                      } else {
                        YTPlayer2.player.pauseVideo();
                        if (!YTPlayer2.isPlayer) {
                          jQuery(YTPlayer2.playerEl).CSSAnimate({
                            opacity: 1
                          }, YTPlayer2.opt.fadeOnStartTime);
                          YTPlayer2.wrapper.CSSAnimate({
                            opacity: YTPlayer2.isAlone ? 1 : YTPlayer2.opt.opacity
                          }, YTPlayer2.opt.fadeOnStartTime);
                        }
                        if (YTPlayer2.controlBar.length) YTPlayer2.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                      }
                      if (YTPlayer2.isPlayer && !YTPlayer2.opt.autoPlay && YTPlayer2.loading && YTPlayer2.loading.length) {
                        YTPlayer2.loading.html("Ready");
                        setTimeout(function () {
                          YTPlayer2.loading.fadeOut();
                        }, 100);
                      }
                      if (YTPlayer2.controlBar && YTPlayer2.controlBar.length) YTPlayer2.controlBar.slideDown(1e3);
                    } else if (jQuery.browser.safari) {
                      YTPlayer2.player.playVideo();
                      if (startAt2 >= 0) YTPlayer2.player.seekTo(startAt2, true);
                    }
                  }, 1);
                },
                /**
                 *
                 * @param anchor
                 */
                setAnchor: function (anchor) {
                  var $YTplayer = this;
                  $YTplayer.optimizeDisplay(anchor);
                },
                /**
                 *
                 * @param anchor
                 */
                getAnchor: function () {
                  var YTPlayer2 = this.get(0);
                  return YTPlayer2.opt.anchor;
                },
                /**
                 *
                 * @param s
                 * @returns {string}
                 */
                formatTime: function (s) {
                  var min = Math.floor(s / 60);
                  var sec = Math.floor(s - 60 * min);
                  return (min <= 9 ? "0" + min : min) + " : " + (sec <= 9 ? "0" + sec : sec);
                }
              };
              jQuery.fn.optimizeDisplay = function (anchor) {
                var YTPlayer2 = this.get(0);
                var playerBox2 = jQuery(YTPlayer2.playerEl);
                var vid = {};
                YTPlayer2.opt.anchor = anchor || YTPlayer2.opt.anchor;
                YTPlayer2.opt.anchor = typeof YTPlayer2.opt.anchor != "undefined " ? YTPlayer2.opt.anchor : "center,center";
                var YTPAlign = YTPlayer2.opt.anchor.split(",");
                if (YTPlayer2.opt.optimizeDisplay) {
                  var abundance = YTPlayer2.isPlayer ? 0 : 80;
                  var win = {};
                  var el = YTPlayer2.wrapper;
                  win.width = el.outerWidth();
                  win.height = el.outerHeight() + abundance;
                  vid.width = win.width;
                  vid.height = YTPlayer2.opt.ratio == "16/9" ? Math.ceil(vid.width * (9 / 16)) : Math.ceil(vid.width * (3 / 4));
                  vid.marginTop = -((vid.height - win.height) / 2);
                  vid.marginLeft = 0;
                  var lowest = vid.height < win.height;
                  if (lowest) {
                    vid.height = win.height;
                    vid.width = YTPlayer2.opt.ratio == "16/9" ? Math.floor(vid.height * (16 / 9)) : Math.floor(vid.height * (4 / 3));
                    vid.marginTop = 0;
                    vid.marginLeft = -((vid.width - win.width) / 2);
                  }
                  for (var a in YTPAlign) {
                    if (YTPAlign.hasOwnProperty(a)) {
                      var al = YTPAlign[a].replace(/ /g, "");
                      switch (al) {
                        case "top":
                          vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                          break;
                        case "bottom":
                          vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                          break;
                        case "left":
                          vid.marginLeft = 0;
                          break;
                        case "right":
                          vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                          break;
                        default:
                          if (vid.width > win.width) vid.marginLeft = -((vid.width - win.width) / 2);
                          break;
                      }
                    }
                  }
                } else {
                  vid.width = "100%";
                  vid.height = "100%";
                  vid.marginTop = 0;
                  vid.marginLeft = 0;
                }
                playerBox2.css({
                  width: vid.width,
                  height: vid.height,
                  marginTop: vid.marginTop,
                  marginLeft: vid.marginLeft,
                  maxWidth: "initial"
                });
              };
              jQuery.shuffle = function (arr) {
                var newArray = arr.slice();
                var len = newArray.length;
                var i = len;
                while (i--) {
                  var p = parseInt(Math.random() * len);
                  var t = newArray[i];
                  newArray[i] = newArray[p];
                  newArray[p] = t;
                }
                return newArray;
              };
              jQuery.fn.unselectable = function () {
                return this.each(function () {
                  jQuery(this).css({
                    "-moz-user-select": "none",
                    "-webkit-user-select": "none",
                    "user-select": "none"
                  }).attr("unselectable", "on");
                });
              };
              jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
              jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer;
              jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID;
              jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie;
              jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy;
              jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play;
              jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay;
              jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop;
              jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause;
              jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo;
              jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist;
              jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext;
              jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev;
              jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex;
              jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute;
              jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute;
              jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume;
              jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume;
              jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData;
              jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen;
              jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops;
              jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
              jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress;
              jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter;
              jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters;
              jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter;
              jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters;
              jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter;
              jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters;
              jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters;
              jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters;
              jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime;
              jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime;
              jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask;
              jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask;
              jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask;
              jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor;
              jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor;
              jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
              jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
              jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
              jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
              jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
              jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
              jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
              jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
              jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls;
              jQuery.fn.playYTP = jQuery.mbYTPlayer.play;
              jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
              jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop;
              jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause;
              jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo;
              jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute;
              jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute;
              jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume;
              jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
              jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress;
              jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData;
            })(jQuery, ytp);
            function uncamel(e) {
              return e.replace(/([A-Z])/g, function (e2) {
                return "-" + e2.toLowerCase();
              });
            }
            function setUnit(e, t) {
              return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e;
            }
            function setFilter(e, t, r) {
              var i = uncamel(t),
                n = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
              e[n + "filter"] = e[n + "filter"] || "", r = setUnit(r > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : r, jQuery.CSS.filters[t].unit), e[n + "filter"] += i + "(" + r + ") ", delete e[t];
            }
            jQuery.support.CSStransition = function () {
              var e = document.body || document.documentElement,
                t = e.style;
              return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition;
            }(), jQuery.CSS = {
              name: "mb.CSSAnimate",
              author: "Matteo Bicocchi",
              version: "2.0.0",
              transitionEnd: "transitionEnd",
              sfx: "",
              filters: {
                blur: {
                  min: 0,
                  max: 100,
                  unit: "px"
                },
                brightness: {
                  min: 0,
                  max: 400,
                  unit: "%"
                },
                contrast: {
                  min: 0,
                  max: 400,
                  unit: "%"
                },
                grayscale: {
                  min: 0,
                  max: 100,
                  unit: "%"
                },
                hueRotate: {
                  min: 0,
                  max: 360,
                  unit: "deg"
                },
                invert: {
                  min: 0,
                  max: 100,
                  unit: "%"
                },
                saturate: {
                  min: 0,
                  max: 400,
                  unit: "%"
                },
                sepia: {
                  min: 0,
                  max: 100,
                  unit: "%"
                }
              },
              normalizeCss: function (e) {
                var t = jQuery.extend(true, {}, e);
                jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
                for (var r in t) {
                  "transform" === r && (t[jQuery.CSS.sfx + "transform"] = t[r], delete t[r]), "transform-origin" === r && (t[jQuery.CSS.sfx + "transform-origin"] = e[r], delete t[r]), "filter" !== r || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[r], delete t[r]), "blur" === r && setFilter(t, "blur", e[r]), "brightness" === r && setFilter(t, "brightness", e[r]), "contrast" === r && setFilter(t, "contrast", e[r]), "grayscale" === r && setFilter(t, "grayscale", e[r]), "hueRotate" === r && setFilter(t, "hueRotate", e[r]), "invert" === r && setFilter(t, "invert", e[r]), "saturate" === r && setFilter(t, "saturate", e[r]), "sepia" === r && setFilter(t, "sepia", e[r]);
                  var i = "";
                  "x" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateX(" + setUnit(e[r], "px") + ")", delete t[r]), "y" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateY(" + setUnit(e[r], "px") + ")", delete t[r]), "z" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateZ(" + setUnit(e[r], "px") + ")", delete t[r]), "rotate" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotate(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateX(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateY(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateZ" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateZ(" + setUnit(e[r], "deg") + ")", delete t[r]), "scale" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scale(" + setUnit(e[r], "") + ")", delete t[r]), "scaleX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleX(" + setUnit(e[r], "") + ")", delete t[r]), "scaleY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleY(" + setUnit(e[r], "") + ")", delete t[r]), "scaleZ" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleZ(" + setUnit(e[r], "") + ")", delete t[r]), "skew" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skew(" + setUnit(e[r], "deg") + ")", delete t[r]), "skewX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewX(" + setUnit(e[r], "deg") + ")", delete t[r]), "skewY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewY(" + setUnit(e[r], "deg") + ")", delete t[r]), "perspective" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " perspective(" + setUnit(e[r], "px") + ")", delete t[r]);
                }
                return t;
              },
              getProp: function (e) {
                var t = [];
                for (var r in e) t.indexOf(r) < 0 && t.push(uncamel(r));
                return t.join(",");
              },
              animate: function (e, t, r, i, n) {
                return this.each(function () {
                  function s() {
                    u.called = true, u.CSSAIsRunning = false, a.off(jQuery.CSS.transitionEnd + "." + u.id), clearTimeout(u.timeout), a.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof n && n.apply(u), "function" == typeof u.CSSqueue && (u.CSSqueue(), u.CSSqueue = null);
                  }
                  var u = this,
                    a = jQuery(this);
                  u.id = u.id || "CSSA_" + (/* @__PURE__ */new Date()).getTime();
                  var o = o || {
                    type: "noEvent"
                  };
                  if (u.CSSAIsRunning && u.eventType == o.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return void (u.CSSqueue = function () {
                    a.CSSAnimate(e, t, r, i, n);
                  });
                  if (u.CSSqueue = null, u.eventType = o.type, 0 !== a.length && e) {
                    if (e = jQuery.normalizeCss(e), u.CSSAIsRunning = true, "function" == typeof t && (n = t, t = jQuery.fx.speeds._default), "function" == typeof r && (i = r, r = 0), "string" == typeof r && (n = r, r = 0), "function" == typeof i && (n = i, i = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t) for (var f in jQuery.fx.speeds) {
                      if (t == f) {
                        t = jQuery.fx.speeds[f];
                        break;
                      }
                      t = jQuery.fx.speeds._default;
                    }
                    if (t || (t = jQuery.fx.speeds._default), "string" == typeof n && (i = n, n = null), !jQuery.support.CSStransition) {
                      for (var c in e) {
                        if ("transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c) {
                          var S = e[c],
                            l = "left";
                          e[l] = S, delete e[c];
                        }
                        if ("y" === c) {
                          var S = e[c],
                            l = "top";
                          e[l] = S, delete e[c];
                        }
                        ("-ms-transform" === c || "-ms-filter" === c) && delete e[c];
                      }
                      return void a.delay(r).animate(e, t, n);
                    }
                    var y = {
                      "default": "ease",
                      "in": "ease-in",
                      out: "ease-out",
                      "in-out": "ease-in-out",
                      snap: "cubic-bezier(0,1,.5,1)",
                      easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                      easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                      easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                      easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                      easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                      easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                      easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                      easeInOutExpo: "cubic-bezier(1,0,0,1)",
                      easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                      easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                      easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                      easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                      easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                      easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                      easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                      easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                      easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                      easeInSine: "cubic-bezier(.47,0,.745,.715)",
                      easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                      easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                      easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                      easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                      easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    y[i] && (i = y[i]), a.off(jQuery.CSS.transitionEnd + "." + u.id);
                    var m = jQuery.CSS.getProp(e),
                      d = {};
                    jQuery.extend(d, e), d[jQuery.CSS.sfx + "transition-property"] = m, d[jQuery.CSS.sfx + "transition-duration"] = t + "ms", d[jQuery.CSS.sfx + "transition-delay"] = r + "ms", d[jQuery.CSS.sfx + "transition-timing-function"] = i, setTimeout(function () {
                      a.one(jQuery.CSS.transitionEnd + "." + u.id, s), a.css(d);
                    }, 1), u.timeout = setTimeout(function () {
                      return u.called || !n ? (u.called = false, void (u.CSSAIsRunning = false)) : (a.css(jQuery.CSS.sfx + "transition", ""), n.apply(u), u.CSSAIsRunning = false, void ("function" == typeof u.CSSqueue && (u.CSSqueue(), u.CSSqueue = null)));
                    }, t + r + 10);
                  }
                });
              }
            }, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (e) {
              return this.each(function () {
                var t = jQuery(this),
                  r = jQuery.normalizeCss(e);
                t.css(r);
              });
            };
            var nAgt = navigator.userAgent;
            if (!jQuery.browser) {
              jQuery.browser = {}, jQuery.browser.mozilla = false, jQuery.browser.webkit = false, jQuery.browser.opera = false, jQuery.browser.safari = false, jQuery.browser.chrome = false, jQuery.browser.androidStock = false, jQuery.browser.msie = false, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
              var nameOffset, verOffset, ix;
              if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = true, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = true, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = true, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
                jQuery.browser.msie = true, jQuery.browser.name = "Microsoft Internet Explorer";
                var start = nAgt.indexOf("rv:") + 3,
                  end = start + 4;
                jQuery.browser.fullVersion = nAgt.substring(start, end);
              } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = true, jQuery.browser.chrome = true, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = true, jQuery.browser.androidStock = true, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = true, jQuery.browser.safari = true, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = true, jQuery.browser.safari = true, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = true, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
              -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion;
            }
            jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt);
            var nAgt = navigator.userAgent;
            if (!jQuery.browser) {
              jQuery.browser = {}, jQuery.browser.mozilla = false, jQuery.browser.webkit = false, jQuery.browser.opera = false, jQuery.browser.safari = false, jQuery.browser.chrome = false, jQuery.browser.androidStock = false, jQuery.browser.msie = false, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
              var nameOffset, verOffset, ix;
              if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = true, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = true, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = true, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
                jQuery.browser.msie = true, jQuery.browser.name = "Microsoft Internet Explorer";
                var start = nAgt.indexOf("rv:") + 3,
                  end = start + 4;
                jQuery.browser.fullVersion = nAgt.substring(start, end);
              } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = true, jQuery.browser.chrome = true, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = true, jQuery.browser.androidStock = true, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = true, jQuery.browser.safari = true, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = true, jQuery.browser.safari = true, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = true, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
              -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion;
            }
            jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt);
            (function (b) {
              b.simpleSlider = {
                defaults: {
                  initialval: 0,
                  scale: 100,
                  orientation: "h",
                  readonly: false,
                  callback: false
                },
                events: {
                  start: b.browser.mobile ? "touchstart" : "mousedown",
                  end: b.browser.mobile ? "touchend" : "mouseup",
                  move: b.browser.mobile ? "touchmove" : "mousemove"
                },
                init: function (c) {
                  return this.each(function () {
                    var a = this,
                      d = b(a);
                    d.addClass("simpleSlider");
                    a.opt = {};
                    b.extend(a.opt, b.simpleSlider.defaults, c);
                    b.extend(a.opt, d.data());
                    var e = "h" == a.opt.orientation ? "horizontal" : "vertical",
                      e = b("<div/>").addClass("level").addClass(e);
                    d.prepend(e);
                    a.level = e;
                    d.css({
                      cursor: "default"
                    });
                    "auto" == a.opt.scale && (a.opt.scale = b(a).outerWidth());
                    d.updateSliderVal();
                    a.opt.readonly || (d.on(b.simpleSlider.events.start, function (c2) {
                      b.browser.mobile && (c2 = c2.changedTouches[0]);
                      a.canSlide = true;
                      d.updateSliderVal(c2);
                      "h" == a.opt.orientation ? d.css({
                        cursor: "col-resize"
                      }) : d.css({
                        cursor: "row-resize"
                      });
                      c2.preventDefault();
                      c2.stopPropagation();
                    }), b(document).on(b.simpleSlider.events.move, function (c2) {
                      b.browser.mobile && (c2 = c2.changedTouches[0]);
                      a.canSlide && (b(document).css({
                        cursor: "default"
                      }), d.updateSliderVal(c2), c2.preventDefault(), c2.stopPropagation());
                    }).on(b.simpleSlider.events.end, function () {
                      b(document).css({
                        cursor: "auto"
                      });
                      a.canSlide = false;
                      d.css({
                        cursor: "auto"
                      });
                    }));
                  });
                },
                updateSliderVal: function (c) {
                  var a = this.get(0);
                  if (a.opt) {
                    a.opt.initialval = "number" == typeof a.opt.initialval ? a.opt.initialval : a.opt.initialval(a);
                    var d = b(a).outerWidth(),
                      e = b(a).outerHeight();
                    a.x = "object" == typeof c ? c.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof c ? c * d / a.opt.scale : a.opt.initialval * d / a.opt.scale;
                    a.y = "object" == typeof c ? c.clientY + document.body.scrollTop - this.offset().top : "number" == typeof c ? (a.opt.scale - a.opt.initialval - c) * e / a.opt.scale : a.opt.initialval * e / a.opt.scale;
                    a.y = this.outerHeight() - a.y;
                    a.scaleX = a.x * a.opt.scale / d;
                    a.scaleY = a.y * a.opt.scale / e;
                    a.outOfRangeX = a.scaleX > a.opt.scale ? a.scaleX - a.opt.scale : 0 > a.scaleX ? a.scaleX : 0;
                    a.outOfRangeY = a.scaleY > a.opt.scale ? a.scaleY - a.opt.scale : 0 > a.scaleY ? a.scaleY : 0;
                    a.outOfRange = "h" == a.opt.orientation ? a.outOfRangeX : a.outOfRangeY;
                    a.value = "undefined" != typeof c ? "h" == a.opt.orientation ? a.x >= this.outerWidth() ? a.opt.scale : 0 >= a.x ? 0 : a.scaleX : a.y >= this.outerHeight() ? a.opt.scale : 0 >= a.y ? 0 : a.scaleY : "h" == a.opt.orientation ? a.scaleX : a.scaleY;
                    "h" == a.opt.orientation ? a.level.width(Math.floor(100 * a.x / d) + "%") : a.level.height(Math.floor(100 * a.y / e));
                    "function" == typeof a.opt.callback && a.opt.callback(a);
                  }
                }
              };
              b.fn.simpleSlider = b.simpleSlider.init;
              b.fn.updateSliderVal = b.simpleSlider.updateSliderVal;
            })(jQuery);
            !function (a) {
              a.mbCookie = {
                set: function (a2, b, c, d) {
                  b = JSON.stringify(b), c || (c = 7), d = d ? "; domain=" + d : "";
                  var f,
                    e = /* @__PURE__ */new Date();
                  e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c), f = "; expires=" + e.toGMTString(), document.cookie = a2 + "=" + b + f + "; path=/" + d;
                },
                get: function (a2) {
                  for (var b = a2 + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                    for (var e = c[d]; " " == e.charAt(0);) e = e.substring(1, e.length);
                    if (0 == e.indexOf(b)) return JSON.parse(e.substring(b.length, e.length));
                  }
                  return null;
                },
                remove: function (b) {
                  a.mbCookie.set(b, "", -1);
                }
              }, a.mbStorage = {
                set: function (a2, b) {
                  b = JSON.stringify(b), localStorage.setItem(a2, b);
                },
                get: function (a2) {
                  return localStorage[a2] ? JSON.parse(localStorage[a2]) : null;
                },
                remove: function (a2) {
                  a2 ? localStorage.removeItem(a2) : localStorage.clear();
                }
              };
            }(jQuery);
            !function (e) {
              var t = {
                animation: "dissolve",
                separator: ",",
                speed: 2e3
              };
              e.fx.step.textShadowBlur = function (t2) {
                e(t2.elem).prop("textShadowBlur", t2.now).css({
                  textShadow: "0 0 " + Math.floor(t2.now) + "px black"
                });
              };
              e.fn.textrotator = function (n) {
                var r = e.extend({}, t, n);
                return this.each(function () {
                  var t2 = e(this);
                  var n2 = [];
                  e.each(t2.text().split(r.separator), function (e2, t3) {
                    n2.push(t3);
                  });
                  t2.text(n2[0]);
                  var i = function () {
                    switch (r.animation) {
                      case "dissolve":
                        t2.animate({
                          textShadowBlur: 20,
                          opacity: 0
                        }, 500, function () {
                          s = e.inArray(t2.text(), n2);
                          if (s + 1 == n2.length) s = -1;
                          t2.text(n2[s + 1]).animate({
                            textShadowBlur: 0,
                            opacity: 1
                          }, 500);
                        });
                        break;
                      case "flip":
                        if (t2.find(".back").length > 0) {
                          t2.html(t2.find(".back").html());
                        }
                        var i2 = t2.text();
                        var s = e.inArray(i2, n2);
                        if (s + 1 == n2.length) s = -1;
                        t2.html("");
                        e("<span class='front'>" + i2 + "</span>").appendTo(t2);
                        e("<span class='back'>" + n2[s + 1] + "</span>").appendTo(t2);
                        t2.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
                          "-webkit-transform": " rotateY(-180deg)",
                          "-moz-transform": " rotateY(-180deg)",
                          "-o-transform": " rotateY(-180deg)",
                          transform: " rotateY(-180deg)"
                        });
                        break;
                      case "flipUp":
                        if (t2.find(".back").length > 0) {
                          t2.html(t2.find(".back").html());
                        }
                        var i2 = t2.text();
                        var s = e.inArray(i2, n2);
                        if (s + 1 == n2.length) s = -1;
                        t2.html("");
                        e("<span class='front'>" + i2 + "</span>").appendTo(t2);
                        e("<span class='back'>" + n2[s + 1] + "</span>").appendTo(t2);
                        t2.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
                          "-webkit-transform": " rotateX(-180deg)",
                          "-moz-transform": " rotateX(-180deg)",
                          "-o-transform": " rotateX(-180deg)",
                          transform: " rotateX(-180deg)"
                        });
                        break;
                      case "flipCube":
                        if (t2.find(".back").length > 0) {
                          t2.html(t2.find(".back").html());
                        }
                        var i2 = t2.text();
                        var s = e.inArray(i2, n2);
                        if (s + 1 == n2.length) s = -1;
                        t2.html("");
                        e("<span class='front'>" + i2 + "</span>").appendTo(t2);
                        e("<span class='back'>" + n2[s + 1] + "</span>").appendTo(t2);
                        t2.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
                          "-webkit-transform": " rotateY(180deg)",
                          "-moz-transform": " rotateY(180deg)",
                          "-o-transform": " rotateY(180deg)",
                          transform: " rotateY(180deg)"
                        });
                        break;
                      case "flipCubeUp":
                        if (t2.find(".back").length > 0) {
                          t2.html(t2.find(".back").html());
                        }
                        var i2 = t2.text();
                        var s = e.inArray(i2, n2);
                        if (s + 1 == n2.length) s = -1;
                        t2.html("");
                        e("<span class='front'>" + i2 + "</span>").appendTo(t2);
                        e("<span class='back'>" + n2[s + 1] + "</span>").appendTo(t2);
                        t2.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
                          "-webkit-transform": " rotateX(180deg)",
                          "-moz-transform": " rotateX(180deg)",
                          "-o-transform": " rotateX(180deg)",
                          transform: " rotateX(180deg)"
                        });
                        break;
                      case "spin":
                        if (t2.find(".rotating").length > 0) {
                          t2.html(t2.find(".rotating").html());
                        }
                        s = e.inArray(t2.text(), n2);
                        if (s + 1 == n2.length) s = -1;
                        t2.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(n2[s + 1]).show().css({
                          "-webkit-transform": " rotate(0) scale(1)",
                          "-moz-transform": "rotate(0) scale(1)",
                          "-o-transform": "rotate(0) scale(1)",
                          transform: "rotate(0) scale(1)"
                        });
                        break;
                      case "fade":
                        t2.fadeOut(r.speed, function () {
                          s = e.inArray(t2.text(), n2);
                          if (s + 1 == n2.length) s = -1;
                          t2.text(n2[s + 1]).fadeIn(r.speed);
                        });
                        break;
                    }
                  };
                  setInterval(i, r.speed);
                });
              };
            }(window.jQuery);
            !function (a, b, c, d) {
              function e(b2, c2) {
                this.settings = null, this.options = a.extend({}, e.Defaults, c2), this.$element = a(b2), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                  time: null,
                  target: null,
                  pointer: null,
                  stage: {
                    start: null,
                    current: null
                  },
                  direction: null
                }, this._states = {
                  current: {},
                  tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                  }
                }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b3, c3) {
                  this._handlers[c3] = a.proxy(this[c3], this);
                }, this)), a.each(e.Plugins, a.proxy(function (a2, b3) {
                  this._plugins[a2.charAt(0).toLowerCase() + a2.slice(1)] = new b3(this);
                }, this)), a.each(e.Workers, a.proxy(function (b3, c3) {
                  this._pipe.push({
                    filter: c3.filter,
                    run: a.proxy(c3.run, this)
                  });
                }, this)), this.setup(), this.initialize();
              }
              e.Defaults = {
                items: 3,
                loop: false,
                center: false,
                rewind: false,
                mouseDrag: true,
                touchDrag: true,
                pullDrag: true,
                freeDrag: false,
                margin: 0,
                stagePadding: 0,
                merge: false,
                mergeFit: true,
                autoWidth: false,
                startPosition: 0,
                rtl: false,
                smartSpeed: 250,
                fluidSpeed: false,
                dragEndSpeed: false,
                responsive: {},
                responsiveRefreshRate: 200,
                responsiveBaseElement: b,
                fallbackEasing: "swing",
                info: false,
                nestedItemSelector: false,
                itemElement: "div",
                stageElement: "div",
                refreshClass: "owl-refresh",
                loadedClass: "owl-loaded",
                loadingClass: "owl-loading",
                rtlClass: "owl-rtl",
                responsiveClass: "owl-responsive",
                dragClass: "owl-drag",
                itemClass: "owl-item",
                stageClass: "owl-stage",
                stageOuterClass: "owl-stage-outer",
                grabClass: "owl-grab"
              }, e.Width = {
                Default: "default",
                Inner: "inner",
                Outer: "outer"
              }, e.Type = {
                Event: "event",
                State: "state"
              }, e.Plugins = {}, e.Workers = [{
                filter: ["width", "settings"],
                run: function () {
                  this._width = this.$element.width();
                }
              }, {
                filter: ["width", "items", "settings"],
                run: function (a2) {
                  a2.current = this._items && this._items[this.relative(this._current)];
                }
              }, {
                filter: ["items", "settings"],
                run: function () {
                  this.$stage.children(".cloned").remove();
                }
              }, {
                filter: ["width", "items", "settings"],
                run: function (a2) {
                  var b2 = this.settings.margin || "",
                    c2 = !this.settings.autoWidth,
                    d2 = this.settings.rtl,
                    e2 = {
                      width: "auto",
                      "margin-left": d2 ? b2 : "",
                      "margin-right": d2 ? "" : b2
                    };
                  !c2 && this.$stage.children().css(e2), a2.css = e2;
                }
              }, {
                filter: ["width", "items", "settings"],
                run: function (a2) {
                  var b2 = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    c2 = null,
                    d2 = this._items.length,
                    e2 = !this.settings.autoWidth,
                    f = [];
                  for (a2.items = {
                    merge: false,
                    width: b2
                  }; d2--;) c2 = this._mergers[d2], c2 = this.settings.mergeFit && Math.min(c2, this.settings.items) || c2, a2.items.merge = c2 > 1 || a2.items.merge, f[d2] = e2 ? b2 * c2 : this._items[d2].width();
                  this._widths = f;
                }
              }, {
                filter: ["items", "settings"],
                run: function () {
                  var b2 = [],
                    c2 = this._items,
                    d2 = this.settings,
                    e2 = Math.max(2 * d2.items, 4),
                    f = 2 * Math.ceil(c2.length / 2),
                    g = d2.loop && c2.length ? d2.rewind ? e2 : Math.max(e2, f) : 0,
                    h2 = "",
                    i = "";
                  for (g /= 2; g--;) b2.push(this.normalize(b2.length / 2, true)), h2 += c2[b2[b2.length - 1]][0].outerHTML, b2.push(this.normalize(c2.length - 1 - (b2.length - 1) / 2, true)), i = c2[b2[b2.length - 1]][0].outerHTML + i;
                  this._clones = b2, a(h2).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
                }
              }, {
                filter: ["width", "items", "settings"],
                run: function () {
                  for (var a2 = this.settings.rtl ? 1 : -1, b2 = this._clones.length + this._items.length, c2 = -1, d2 = 0, e2 = 0, f = []; ++c2 < b2;) d2 = f[c2 - 1] || 0, e2 = this._widths[this.relative(c2)] + this.settings.margin, f.push(d2 + e2 * a2);
                  this._coordinates = f;
                }
              }, {
                filter: ["width", "items", "settings"],
                run: function () {
                  var a2 = this.settings.stagePadding,
                    b2 = this._coordinates,
                    c2 = {
                      width: Math.ceil(Math.abs(b2[b2.length - 1])) + 2 * a2,
                      "padding-left": a2 || "",
                      "padding-right": a2 || ""
                    };
                  this.$stage.css(c2);
                }
              }, {
                filter: ["width", "items", "settings"],
                run: function (a2) {
                  var b2 = this._coordinates.length,
                    c2 = !this.settings.autoWidth,
                    d2 = this.$stage.children();
                  if (c2 && a2.items.merge) for (; b2--;) a2.css.width = this._widths[this.relative(b2)], d2.eq(b2).css(a2.css);else c2 && (a2.css.width = a2.items.width, d2.css(a2.css));
                }
              }, {
                filter: ["items"],
                run: function () {
                  this._coordinates.length < 1 && this.$stage.removeAttr("style");
                }
              }, {
                filter: ["width", "items", "settings"],
                run: function (a2) {
                  a2.current = a2.current ? this.$stage.children().index(a2.current) : 0, a2.current = Math.max(this.minimum(), Math.min(this.maximum(), a2.current)), this.reset(a2.current);
                }
              }, {
                filter: ["position"],
                run: function () {
                  this.animate(this.coordinates(this._current));
                }
              }, {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                  var a2,
                    b2,
                    c2,
                    d2,
                    e2 = this.settings.rtl ? 1 : -1,
                    f = 2 * this.settings.stagePadding,
                    g = this.coordinates(this.current()) + f,
                    h2 = g + this.width() * e2,
                    i = [];
                  for (c2 = 0, d2 = this._coordinates.length; c2 < d2; c2++) a2 = this._coordinates[c2 - 1] || 0, b2 = Math.abs(this._coordinates[c2]) + f * e2, (this.op(a2, "<=", g) && this.op(a2, ">", h2) || this.op(b2, "<", g) && this.op(b2, ">", h2)) && i.push(c2);
                  this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
                }
              }], e.prototype.initialize = function () {
                if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                  var b2, c2, e2;
                  b2 = this.$element.find("img"), c2 = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e2 = this.$element.children(c2).width(), b2.length && e2 <= 0 && this.preloadAutoWidthImages(b2);
                }
                this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
              }, e.prototype.setup = function () {
                var b2 = this.viewport(),
                  c2 = this.options.responsive,
                  d2 = -1,
                  e2 = null;
                c2 ? (a.each(c2, function (a2) {
                  a2 <= b2 && a2 > d2 && (d2 = Number(a2));
                }), e2 = a.extend({}, this.options, c2[d2]), "function" == typeof e2.stagePadding && (e2.stagePadding = e2.stagePadding()), delete e2.responsive, e2.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d2))) : e2 = a.extend({}, this.options), this.trigger("change", {
                  property: {
                    name: "settings",
                    value: e2
                  }
                }), this._breakpoint = d2, this.settings = e2, this.invalidate("settings"), this.trigger("changed", {
                  property: {
                    name: "settings",
                    value: this.settings
                  }
                });
              }, e.prototype.optionsLogic = function () {
                this.settings.autoWidth && (this.settings.stagePadding = false, this.settings.merge = false);
              }, e.prototype.prepare = function (b2) {
                var c2 = this.trigger("prepare", {
                  content: b2
                });
                return c2.data || (c2.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b2)), this.trigger("prepared", {
                  content: c2.data
                }), c2.data;
              }, e.prototype.update = function () {
                for (var b2 = 0, c2 = this._pipe.length, d2 = a.proxy(function (a2) {
                    return this[a2];
                  }, this._invalidated), e2 = {}; b2 < c2;) (this._invalidated.all || a.grep(this._pipe[b2].filter, d2).length > 0) && this._pipe[b2].run(e2), b2++;
                this._invalidated = {}, !this.is("valid") && this.enter("valid");
              }, e.prototype.width = function (a2) {
                switch (a2 = a2 || e.Width.Default) {
                  case e.Width.Inner:
                  case e.Width.Outer:
                    return this._width;
                  default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                }
              }, e.prototype.refresh = function () {
                this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
              }, e.prototype.onThrottledResize = function () {
                b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
              }, e.prototype.onResize = function () {
                return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), false) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
              }, e.prototype.registerEventHandlers = function () {
                a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== false && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                  return false;
                })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
              }, e.prototype.onDragStart = function (b2) {
                var d2 = null;
                3 !== b2.which && (a.support.transform ? (d2 = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d2 = {
                  x: d2[16 === d2.length ? 12 : 4],
                  y: d2[16 === d2.length ? 13 : 5]
                }) : (d2 = this.$stage.position(), d2 = {
                  x: this.settings.rtl ? d2.left + this.$stage.width() - this.width() + this.settings.margin : d2.left,
                  y: d2.top
                }), this.is("animating") && (a.support.transform ? this.animate(d2.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b2.type), this.speed(0), this._drag.time = (/* @__PURE__ */new Date()).getTime(), this._drag.target = a(b2.target), this._drag.stage.start = d2, this._drag.stage.current = d2, this._drag.pointer = this.pointer(b2), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b3) {
                  var d3 = this.difference(this._drag.pointer, this.pointer(b3));
                  a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d3.x) < Math.abs(d3.y) && this.is("valid") || (b3.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                }, this)));
              }, e.prototype.onDragMove = function (a2) {
                var b2 = null,
                  c2 = null,
                  d2 = null,
                  e2 = this.difference(this._drag.pointer, this.pointer(a2)),
                  f = this.difference(this._drag.stage.start, e2);
                this.is("dragging") && (a2.preventDefault(), this.settings.loop ? (b2 = this.coordinates(this.minimum()), c2 = this.coordinates(this.maximum() + 1) - b2, f.x = ((f.x - b2) % c2 + c2) % c2 + b2) : (b2 = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c2 = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d2 = this.settings.pullDrag ? -1 * e2.x / 5 : 0, f.x = Math.max(Math.min(f.x, b2 + d2), c2 + d2)), this._drag.stage.current = f, this.animate(f.x));
              }, e.prototype.onDragEnd = function (b2) {
                var d2 = this.difference(this._drag.pointer, this.pointer(b2)),
                  e2 = this._drag.stage.current,
                  f = d2.x > 0 ^ this.settings.rtl ? "left" : "right";
                a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d2.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e2.x, 0 !== d2.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d2.x) > 3 || (/* @__PURE__ */new Date()).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
                  return false;
                })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
              }, e.prototype.closest = function (b2, c2) {
                var d2 = -1,
                  e2 = 30,
                  f = this.width(),
                  g = this.coordinates();
                return this.settings.freeDrag || a.each(g, a.proxy(function (a2, h2) {
                  return "left" === c2 && b2 > h2 - e2 && b2 < h2 + e2 ? d2 = a2 : "right" === c2 && b2 > h2 - f - e2 && b2 < h2 - f + e2 ? d2 = a2 + 1 : this.op(b2, "<", h2) && this.op(b2, ">", g[a2 + 1] || h2 - f) && (d2 = "left" === c2 ? a2 + 1 : a2), d2 === -1;
                }, this)), this.settings.loop || (this.op(b2, ">", g[this.minimum()]) ? d2 = b2 = this.minimum() : this.op(b2, "<", g[this.maximum()]) && (d2 = b2 = this.maximum())), d2;
              }, e.prototype.animate = function (b2) {
                var c2 = this.speed() > 0;
                this.is("animating") && this.onTransitionEnd(), c2 && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
                  transform: "translate3d(" + b2 + "px,0px,0px)",
                  transition: this.speed() / 1e3 + "s"
                }) : c2 ? this.$stage.animate({
                  left: b2 + "px"
                }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                  left: b2 + "px"
                });
              }, e.prototype.is = function (a2) {
                return this._states.current[a2] && this._states.current[a2] > 0;
              }, e.prototype.current = function (a2) {
                if (a2 === d) return this._current;
                if (0 === this._items.length) return d;
                if (a2 = this.normalize(a2), this._current !== a2) {
                  var b2 = this.trigger("change", {
                    property: {
                      name: "position",
                      value: a2
                    }
                  });
                  b2.data !== d && (a2 = this.normalize(b2.data)), this._current = a2, this.invalidate("position"), this.trigger("changed", {
                    property: {
                      name: "position",
                      value: this._current
                    }
                  });
                }
                return this._current;
              }, e.prototype.invalidate = function (b2) {
                return "string" === a.type(b2) && (this._invalidated[b2] = true, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a2, b3) {
                  return b3;
                });
              }, e.prototype.reset = function (a2) {
                a2 = this.normalize(a2), a2 !== d && (this._speed = 0, this._current = a2, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a2)), this.release(["translate", "translated"]));
              }, e.prototype.normalize = function (a2, b2) {
                var c2 = this._items.length,
                  e2 = b2 ? 0 : this._clones.length;
                return !this.isNumeric(a2) || c2 < 1 ? a2 = d : (a2 < 0 || a2 >= c2 + e2) && (a2 = ((a2 - e2 / 2) % c2 + c2) % c2 + e2 / 2), a2;
              }, e.prototype.relative = function (a2) {
                return a2 -= this._clones.length / 2, this.normalize(a2, true);
              }, e.prototype.maximum = function (a2) {
                var b2,
                  c2,
                  d2,
                  e2 = this.settings,
                  f = this._coordinates.length;
                if (e2.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e2.autoWidth || e2.merge) {
                  for (b2 = this._items.length, c2 = this._items[--b2].width(), d2 = this.$element.width(); b2-- && (c2 += this._items[b2].width() + this.settings.margin, !(c2 > d2)););
                  f = b2 + 1;
                } else f = e2.center ? this._items.length - 1 : this._items.length - e2.items;
                return a2 && (f -= this._clones.length / 2), Math.max(f, 0);
              }, e.prototype.minimum = function (a2) {
                return a2 ? 0 : this._clones.length / 2;
              }, e.prototype.items = function (a2) {
                return a2 === d ? this._items.slice() : (a2 = this.normalize(a2, true), this._items[a2]);
              }, e.prototype.mergers = function (a2) {
                return a2 === d ? this._mergers.slice() : (a2 = this.normalize(a2, true), this._mergers[a2]);
              }, e.prototype.clones = function (b2) {
                var c2 = this._clones.length / 2,
                  e2 = c2 + this._items.length,
                  f = function (a2) {
                    return a2 % 2 === 0 ? e2 + a2 / 2 : c2 - (a2 + 1) / 2;
                  };
                return b2 === d ? a.map(this._clones, function (a2, b3) {
                  return f(b3);
                }) : a.map(this._clones, function (a2, c3) {
                  return a2 === b2 ? f(c3) : null;
                });
              }, e.prototype.speed = function (a2) {
                return a2 !== d && (this._speed = a2), this._speed;
              }, e.prototype.coordinates = function (b2) {
                var c2,
                  e2 = 1,
                  f = b2 - 1;
                return b2 === d ? a.map(this._coordinates, a.proxy(function (a2, b3) {
                  return this.coordinates(b3);
                }, this)) : (this.settings.center ? (this.settings.rtl && (e2 = -1, f = b2 + 1), c2 = this._coordinates[b2], c2 += (this.width() - c2 + (this._coordinates[f] || 0)) / 2 * e2) : c2 = this._coordinates[f] || 0, c2 = Math.ceil(c2));
              }, e.prototype.duration = function (a2, b2, c2) {
                return 0 === c2 ? 0 : Math.min(Math.max(Math.abs(b2 - a2), 1), 6) * Math.abs(c2 || this.settings.smartSpeed);
              }, e.prototype.to = function (a2, b2) {
                var c2 = this.current(),
                  d2 = null,
                  e2 = a2 - this.relative(c2),
                  f = (e2 > 0) - (e2 < 0),
                  g = this._items.length,
                  h2 = this.minimum(),
                  i = this.maximum();
                this.settings.loop ? (!this.settings.rewind && Math.abs(e2) > g / 2 && (e2 += f * -1 * g), a2 = c2 + e2, d2 = ((a2 - h2) % g + g) % g + h2, d2 !== a2 && d2 - e2 <= i && d2 - e2 > 0 && (c2 = d2 - e2, a2 = d2, this.reset(c2))) : this.settings.rewind ? (i += 1, a2 = (a2 % i + i) % i) : a2 = Math.max(h2, Math.min(i, a2)), this.speed(this.duration(c2, a2, b2)), this.current(a2), this.$element.is(":visible") && this.update();
              }, e.prototype.next = function (a2) {
                a2 = a2 || false, this.to(this.relative(this.current()) + 1, a2);
              }, e.prototype.prev = function (a2) {
                a2 = a2 || false, this.to(this.relative(this.current()) - 1, a2);
              }, e.prototype.onTransitionEnd = function (a2) {
                if (a2 !== d && (a2.stopPropagation(), (a2.target || a2.srcElement || a2.originalTarget) !== this.$stage.get(0))) return false;
                this.leave("animating"), this.trigger("translated");
              }, e.prototype.viewport = function () {
                var d2;
                return this.options.responsiveBaseElement !== b ? d2 = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d2 = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d2 = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d2;
              }, e.prototype.replace = function (b2) {
                this.$stage.empty(), this._items = [], b2 && (b2 = b2 instanceof jQuery ? b2 : a(b2)), this.settings.nestedItemSelector && (b2 = b2.find("." + this.settings.nestedItemSelector)), b2.filter(function () {
                  return 1 === this.nodeType;
                }).each(a.proxy(function (a2, b3) {
                  b3 = this.prepare(b3), this.$stage.append(b3), this._items.push(b3), this._mergers.push(1 * b3.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
              }, e.prototype.add = function (b2, c2) {
                var e2 = this.relative(this._current);
                c2 = c2 === d ? this._items.length : this.normalize(c2, true), b2 = b2 instanceof jQuery ? b2 : a(b2), this.trigger("add", {
                  content: b2,
                  position: c2
                }), b2 = this.prepare(b2), 0 === this._items.length || c2 === this._items.length ? (0 === this._items.length && this.$stage.append(b2), 0 !== this._items.length && this._items[c2 - 1].after(b2), this._items.push(b2), this._mergers.push(1 * b2.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c2].before(b2), this._items.splice(c2, 0, b2), this._mergers.splice(c2, 0, 1 * b2.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e2] && this.reset(this._items[e2].index()), this.invalidate("items"), this.trigger("added", {
                  content: b2,
                  position: c2
                });
              }, e.prototype.remove = function (a2) {
                a2 = this.normalize(a2, true), a2 !== d && (this.trigger("remove", {
                  content: this._items[a2],
                  position: a2
                }), this._items[a2].remove(), this._items.splice(a2, 1), this._mergers.splice(a2, 1), this.invalidate("items"), this.trigger("removed", {
                  content: null,
                  position: a2
                }));
              }, e.prototype.preloadAutoWidthImages = function (b2) {
                b2.each(a.proxy(function (b3, c2) {
                  this.enter("pre-loading"), c2 = a(c2), a(new Image()).one("load", a.proxy(function (a2) {
                    c2.attr("src", a2.target.src), c2.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                  }, this)).attr("src", c2.attr("src") || c2.attr("data-src") || c2.attr("data-src-retina"));
                }, this));
              }, e.prototype.destroy = function () {
                this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== false && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
                for (var d2 in this._plugins) this._plugins[d2].destroy();
                this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
              }, e.prototype.op = function (a2, b2, c2) {
                var d2 = this.settings.rtl;
                switch (b2) {
                  case "<":
                    return d2 ? a2 > c2 : a2 < c2;
                  case ">":
                    return d2 ? a2 < c2 : a2 > c2;
                  case ">=":
                    return d2 ? a2 <= c2 : a2 >= c2;
                  case "<=":
                    return d2 ? a2 >= c2 : a2 <= c2;
                }
              }, e.prototype.on = function (a2, b2, c2, d2) {
                a2.addEventListener ? a2.addEventListener(b2, c2, d2) : a2.attachEvent && a2.attachEvent("on" + b2, c2);
              }, e.prototype.off = function (a2, b2, c2, d2) {
                a2.removeEventListener ? a2.removeEventListener(b2, c2, d2) : a2.detachEvent && a2.detachEvent("on" + b2, c2);
              }, e.prototype.trigger = function (b2, c2, d2, f, g) {
                var h2 = {
                    item: {
                      count: this._items.length,
                      index: this.current()
                    }
                  },
                  i = a.camelCase(a.grep(["on", b2, d2], function (a2) {
                    return a2;
                  }).join("-").toLowerCase()),
                  j = a.Event([b2, "owl", d2 || "carousel"].join(".").toLowerCase(), a.extend({
                    relatedTarget: this
                  }, h2, c2));
                return this._supress[b2] || (a.each(this._plugins, function (a2, b3) {
                  b3.onTrigger && b3.onTrigger(j);
                }), this.register({
                  type: e.Type.Event,
                  name: b2
                }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
              }, e.prototype.enter = function (b2) {
                a.each([b2].concat(this._states.tags[b2] || []), a.proxy(function (a2, b3) {
                  this._states.current[b3] === d && (this._states.current[b3] = 0), this._states.current[b3]++;
                }, this));
              }, e.prototype.leave = function (b2) {
                a.each([b2].concat(this._states.tags[b2] || []), a.proxy(function (a2, b3) {
                  this._states.current[b3]--;
                }, this));
              }, e.prototype.register = function (b2) {
                if (b2.type === e.Type.Event) {
                  if (a.event.special[b2.name] || (a.event.special[b2.name] = {}), !a.event.special[b2.name].owl) {
                    var c2 = a.event.special[b2.name]._default;
                    a.event.special[b2.name]._default = function (a2) {
                      return !c2 || !c2.apply || a2.namespace && a2.namespace.indexOf("owl") !== -1 ? a2.namespace && a2.namespace.indexOf("owl") > -1 : c2.apply(this, arguments);
                    }, a.event.special[b2.name].owl = true;
                  }
                } else b2.type === e.Type.State && (this._states.tags[b2.name] ? this._states.tags[b2.name] = this._states.tags[b2.name].concat(b2.tags) : this._states.tags[b2.name] = b2.tags, this._states.tags[b2.name] = a.grep(this._states.tags[b2.name], a.proxy(function (c3, d2) {
                  return a.inArray(c3, this._states.tags[b2.name]) === d2;
                }, this)));
              }, e.prototype.suppress = function (b2) {
                a.each(b2, a.proxy(function (a2, b3) {
                  this._supress[b3] = true;
                }, this));
              }, e.prototype.release = function (b2) {
                a.each(b2, a.proxy(function (a2, b3) {
                  delete this._supress[b3];
                }, this));
              }, e.prototype.pointer = function (a2) {
                var c2 = {
                  x: null,
                  y: null
                };
                return a2 = a2.originalEvent || a2 || b.event, a2 = a2.touches && a2.touches.length ? a2.touches[0] : a2.changedTouches && a2.changedTouches.length ? a2.changedTouches[0] : a2, a2.pageX ? (c2.x = a2.pageX, c2.y = a2.pageY) : (c2.x = a2.clientX, c2.y = a2.clientY), c2;
              }, e.prototype.isNumeric = function (a2) {
                return !isNaN(parseFloat(a2));
              }, e.prototype.difference = function (a2, b2) {
                return {
                  x: a2.x - b2.x,
                  y: a2.y - b2.y
                };
              }, a.fn.owlCarousel = function (b2) {
                var c2 = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                  var d2 = a(this),
                    f = d2.data("owl.carousel");
                  f || (f = new e(this, "object" == typeof b2 && b2), d2.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b3, c3) {
                    f.register({
                      type: e.Type.Event,
                      name: c3
                    }), f.$element.on(c3 + ".owl.carousel.core", a.proxy(function (a2) {
                      a2.namespace && a2.relatedTarget !== this && (this.suppress([c3]), f[c3].apply(this, [].slice.call(arguments, 1)), this.release([c3]));
                    }, f));
                  })), "string" == typeof b2 && "_" !== b2.charAt(0) && f[b2].apply(f, c2);
                });
              }, a.fn.owlCarousel.Constructor = e;
            }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
              var e = function (b2) {
                this._core = b2, this._interval = null, this._visible = null, this._handlers = {
                  "initialized.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._core.settings.autoRefresh && this.watch();
                  }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
              };
              e.Defaults = {
                autoRefresh: true,
                autoRefreshInterval: 500
              }, e.prototype.watch = function () {
                this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
              }, e.prototype.refresh = function () {
                this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
              }, e.prototype.destroy = function () {
                var a2, c2;
                b.clearInterval(this._interval);
                for (a2 in this._handlers) this._core.$element.off(a2, this._handlers[a2]);
                for (c2 in Object.getOwnPropertyNames(this)) "function" != typeof this[c2] && (this[c2] = null);
              }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
            }(window.Zepto || window.jQuery, window), function (a, b, c, d) {
              var e = function (b2) {
                this._core = b2, this._loaded = [], this._handlers = {
                  "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b3) {
                    if (b3.namespace && this._core.settings && this._core.settings.lazyLoad && (b3.property && "position" == b3.property.name || "initialized" == b3.type)) for (var c2 = this._core.settings, e2 = c2.center && Math.ceil(c2.items / 2) || c2.items, f = c2.center && e2 * -1 || 0, g = (b3.property && b3.property.value !== d ? b3.property.value : this._core.current()) + f, h2 = this._core.clones().length, i = a.proxy(function (a2, b4) {
                        this.load(b4);
                      }, this); f++ < e2;) this.load(h2 / 2 + this._core.relative(g)), h2 && a.each(this._core.clones(this._core.relative(g)), i), g++;
                  }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
              };
              e.Defaults = {
                lazyLoad: false
              }, e.prototype.load = function (c2) {
                var d2 = this._core.$stage.children().eq(c2),
                  e2 = d2 && d2.find(".owl-lazy");
                !e2 || a.inArray(d2.get(0), this._loaded) > -1 || (e2.each(a.proxy(function (c3, d3) {
                  var e3,
                    f = a(d3),
                    g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                  this._core.trigger("load", {
                    element: f,
                    url: g
                  }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                    f.css("opacity", 1), this._core.trigger("loaded", {
                      element: f,
                      url: g
                    }, "lazy");
                  }, this)).attr("src", g) : (e3 = new Image(), e3.onload = a.proxy(function () {
                    f.css({
                      "background-image": 'url("' + g + '")',
                      opacity: "1"
                    }), this._core.trigger("loaded", {
                      element: f,
                      url: g
                    }, "lazy");
                  }, this), e3.src = g);
                }, this)), this._loaded.push(d2.get(0)));
              }, e.prototype.destroy = function () {
                var a2, b2;
                for (a2 in this.handlers) this._core.$element.off(a2, this.handlers[a2]);
                for (b2 in Object.getOwnPropertyNames(this)) "function" != typeof this[b2] && (this[b2] = null);
              }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
            }(window.Zepto || window.jQuery, window), function (a, b, c, d) {
              var e = function (b2) {
                this._core = b2, this._handlers = {
                  "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._core.settings.autoHeight && this.update();
                  }, this),
                  "changed.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._core.settings.autoHeight && "position" == a2.property.name && this.update();
                  }, this),
                  "loaded.owl.lazy": a.proxy(function (a2) {
                    a2.namespace && this._core.settings.autoHeight && a2.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                  }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
              };
              e.Defaults = {
                autoHeight: false,
                autoHeightClass: "owl-height"
              }, e.prototype.update = function () {
                var b2 = this._core._current,
                  c2 = b2 + this._core.settings.items,
                  d2 = this._core.$stage.children().toArray().slice(b2, c2),
                  e2 = [],
                  f = 0;
                a.each(d2, function (b3, c3) {
                  e2.push(a(c3).height());
                }), f = Math.max.apply(null, e2), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
              }, e.prototype.destroy = function () {
                var a2, b2;
                for (a2 in this._handlers) this._core.$element.off(a2, this._handlers[a2]);
                for (b2 in Object.getOwnPropertyNames(this)) "function" != typeof this[b2] && (this[b2] = null);
              }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
            }(window.Zepto || window.jQuery), function (a, b, c, d) {
              var e = function (b2) {
                this._core = b2, this._videos = {}, this._playing = null, this._handlers = {
                  "initialized.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._core.register({
                      type: "state",
                      name: "playing",
                      tags: ["interacting"]
                    });
                  }, this),
                  "resize.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._core.settings.video && this.isInFullScreen() && a2.preventDefault();
                  }, this),
                  "refreshed.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                  }, this),
                  "changed.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && "position" === a2.property.name && this._playing && this.stop();
                  }, this),
                  "prepared.owl.carousel": a.proxy(function (b3) {
                    if (b3.namespace) {
                      var c2 = a(b3.content).find(".owl-video");
                      c2.length && (c2.css("display", "none"), this.fetch(c2, a(b3.content)));
                    }
                  }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a2) {
                  this.play(a2);
                }, this));
              };
              e.Defaults = {
                video: false,
                videoHeight: false,
                videoWidth: false
              }, e.prototype.fetch = function (a2, b2) {
                var c2 = function () {
                    return a2.attr("data-vimeo-id") ? "vimeo" : a2.attr("data-vzaar-id") ? "vzaar" : "youtube";
                  }(),
                  d2 = a2.attr("data-vimeo-id") || a2.attr("data-youtube-id") || a2.attr("data-vzaar-id"),
                  e2 = a2.attr("data-width") || this._core.settings.videoWidth,
                  f = a2.attr("data-height") || this._core.settings.videoHeight,
                  g = a2.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (d2 = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d2[3].indexOf("youtu") > -1) c2 = "youtube";else if (d2[3].indexOf("vimeo") > -1) c2 = "vimeo";else {
                  if (!(d2[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                  c2 = "vzaar";
                }
                d2 = d2[6], this._videos[g] = {
                  type: c2,
                  id: d2,
                  width: e2,
                  height: f
                }, b2.attr("data-video", g), this.thumbnail(a2, this._videos[g]);
              }, e.prototype.thumbnail = function (b2, c2) {
                var d2,
                  e2,
                  f,
                  g = c2.width && c2.height ? 'style="width:' + c2.width + "px;height:" + c2.height + 'px;"' : "",
                  h2 = b2.find("img"),
                  i = "src",
                  j = "",
                  k = this._core.settings,
                  l = function (a2) {
                    e2 = '<div class="owl-video-play-icon"></div>', d2 = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a2 + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a2 + ')"></div>', b2.after(d2), b2.after(e2);
                  };
                if (b2.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h2.length) return l(h2.attr(i)), h2.remove(), false;
                "youtube" === c2.type ? (f = "//img.youtube.com/vi/" + c2.id + "/hqdefault.jpg", l(f)) : "vimeo" === c2.type ? a.ajax({
                  type: "GET",
                  url: "//vimeo.com/api/v2/video/" + c2.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (a2) {
                    f = a2[0].thumbnail_large, l(f);
                  }
                }) : "vzaar" === c2.type && a.ajax({
                  type: "GET",
                  url: "//vzaar.com/api/videos/" + c2.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (a2) {
                    f = a2.framegrab_url, l(f);
                  }
                });
              }, e.prototype.stop = function () {
                this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
              }, e.prototype.play = function (b2) {
                var c2,
                  d2 = a(b2.target),
                  e2 = d2.closest("." + this._core.settings.itemClass),
                  f = this._videos[e2.attr("data-video")],
                  g = f.width || "100%",
                  h2 = f.height || this._core.$stage.height();
                this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e2 = this._core.items(this._core.relative(e2.index())), this._core.reset(e2.index()), "youtube" === f.type ? c2 = '<iframe width="' + g + '" height="' + h2 + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c2 = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h2 + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c2 = '<iframe frameborder="0"height="' + h2 + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c2 + "</div>").insertAfter(e2.find(".owl-video")), this._playing = e2.addClass("owl-video-playing"));
              }, e.prototype.isInFullScreen = function () {
                var b2 = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                return b2 && a(b2).parent().hasClass("owl-video-frame");
              }, e.prototype.destroy = function () {
                var a2, b2;
                this._core.$element.off("click.owl.video");
                for (a2 in this._handlers) this._core.$element.off(a2, this._handlers[a2]);
                for (b2 in Object.getOwnPropertyNames(this)) "function" != typeof this[b2] && (this[b2] = null);
              }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
            }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
              var e = function (b2) {
                this.core = b2, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = true, this.previous = d, this.next = d, this.handlers = {
                  "change.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && "position" == a2.property.name && (this.previous = this.core.current(), this.next = a2.property.value);
                  }, this),
                  "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && (this.swapping = "translated" == a2.type);
                  }, this),
                  "translate.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                  }, this)
                }, this.core.$element.on(this.handlers);
              };
              e.Defaults = {
                animateOut: false,
                animateIn: false
              }, e.prototype.swap = function () {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                  this.core.speed(0);
                  var b2,
                    c2 = a.proxy(this.clear, this),
                    d2 = this.core.$stage.children().eq(this.previous),
                    e2 = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                  this.core.current() !== this.previous && (g && (b2 = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d2.one(a.support.animation.end, c2).css({
                    left: b2 + "px"
                  }).addClass("animated owl-animated-out").addClass(g)), f && e2.one(a.support.animation.end, c2).addClass("animated owl-animated-in").addClass(f));
                }
              }, e.prototype.clear = function (b2) {
                a(b2.target).css({
                  left: ""
                }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
              }, e.prototype.destroy = function () {
                var a2, b2;
                for (a2 in this.handlers) this.core.$element.off(a2, this.handlers[a2]);
                for (b2 in Object.getOwnPropertyNames(this)) "function" != typeof this[b2] && (this[b2] = null);
              }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
            }(window.Zepto || window.jQuery), function (a, b, c, d) {
              var e = function (b2) {
                this._core = b2, this._timeout = null, this._paused = false, this._handlers = {
                  "changed.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && "settings" === a2.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a2.namespace && "position" === a2.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
                  }, this),
                  "initialized.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._core.settings.autoplay && this.play();
                  }, this),
                  "play.owl.autoplay": a.proxy(function (a2, b3, c2) {
                    a2.namespace && this.play(b3, c2);
                  }, this),
                  "stop.owl.autoplay": a.proxy(function (a2) {
                    a2.namespace && this.stop();
                  }, this),
                  "mouseover.owl.autoplay": a.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                  }, this),
                  "mouseleave.owl.autoplay": a.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                  }, this),
                  "touchstart.owl.core": a.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                  }, this),
                  "touchend.owl.core": a.proxy(function () {
                    this._core.settings.autoplayHoverPause && this.play();
                  }, this)
                }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
              };
              e.Defaults = {
                autoplay: false,
                autoplayTimeout: 5e3,
                autoplayHoverPause: false,
                autoplaySpeed: false
              }, e.prototype.play = function (a2, b2) {
                this._paused = false, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
              }, e.prototype._getNextTimeout = function (d2, e2) {
                return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
                  this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e2 || this._core.settings.autoplaySpeed);
                }, this), d2 || this._core.settings.autoplayTimeout);
              }, e.prototype._setAutoPlayInterval = function () {
                this._timeout = this._getNextTimeout();
              }, e.prototype.stop = function () {
                this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
              }, e.prototype.pause = function () {
                this._core.is("rotating") && (this._paused = true);
              }, e.prototype.destroy = function () {
                var a2, b2;
                this.stop();
                for (a2 in this._handlers) this._core.$element.off(a2, this._handlers[a2]);
                for (b2 in Object.getOwnPropertyNames(this)) "function" != typeof this[b2] && (this[b2] = null);
              }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
            }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
              var e = function (b2) {
                this._core = b2, this._initialized = false, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                  next: this._core.next,
                  prev: this._core.prev,
                  to: this._core.to
                }, this._handlers = {
                  "prepared.owl.carousel": a.proxy(function (b3) {
                    b3.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b3.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                  }, this),
                  "added.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._core.settings.dotsData && this._templates.splice(a2.position, 0, this._templates.pop());
                  }, this),
                  "remove.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._core.settings.dotsData && this._templates.splice(a2.position, 1);
                  }, this),
                  "changed.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && "position" == a2.property.name && this.draw();
                  }, this),
                  "initialized.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = true, this._core.trigger("initialized", null, "navigation"));
                  }, this),
                  "refreshed.owl.carousel": a.proxy(function (a2) {
                    a2.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                  }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
              };
              e.Defaults = {
                nav: false,
                navText: ["prev", "next"],
                navSpeed: false,
                navElement: "div",
                navContainer: false,
                navContainerClass: "owl-nav",
                navClass: ["owl-prev", "owl-next"],
                slideBy: 1,
                dotClass: "owl-dot",
                dotsClass: "owl-dots",
                dots: true,
                dotsEach: false,
                dotsData: false,
                dotsSpeed: false,
                dotsContainer: false
              }, e.prototype.initialize = function () {
                var b2,
                  c2 = this._core.settings;
                this._controls.$relative = (c2.navContainer ? a(c2.navContainer) : a("<div>").addClass(c2.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c2.navElement + ">").addClass(c2.navClass[0]).html(c2.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a2) {
                  this.prev(c2.navSpeed);
                }, this)), this._controls.$next = a("<" + c2.navElement + ">").addClass(c2.navClass[1]).html(c2.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a2) {
                  this.next(c2.navSpeed);
                }, this)), c2.dotsData || (this._templates = [a("<div>").addClass(c2.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c2.dotsContainer ? a(c2.dotsContainer) : a("<div>").addClass(c2.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b3) {
                  var d2 = a(b3.target).parent().is(this._controls.$absolute) ? a(b3.target).index() : a(b3.target).parent().index();
                  b3.preventDefault(), this.to(d2, c2.dotsSpeed);
                }, this));
                for (b2 in this._overrides) this._core[b2] = a.proxy(this[b2], this);
              }, e.prototype.destroy = function () {
                var a2, b2, c2, d2;
                for (a2 in this._handlers) this.$element.off(a2, this._handlers[a2]);
                for (b2 in this._controls) this._controls[b2].remove();
                for (d2 in this.overides) this._core[d2] = this._overrides[d2];
                for (c2 in Object.getOwnPropertyNames(this)) "function" != typeof this[c2] && (this[c2] = null);
              }, e.prototype.update = function () {
                var a2,
                  b2,
                  d2 = this._core.clones().length / 2,
                  e2 = d2 + this._core.items().length,
                  f = this._core.maximum(true),
                  g = this._core.settings,
                  h2 = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a2 = d2, b2 = 0, 0; a2 < e2; a2++) {
                  if (b2 >= h2 || 0 === b2) {
                    if (this._pages.push({
                      start: Math.min(f, a2 - d2),
                      end: a2 - d2 + h2 - 1
                    }), Math.min(f, a2 - d2) === f) break;
                    b2 = 0;
                  }
                  b2 += this._core.mergers(this._core.relative(a2));
                }
              }, e.prototype.draw = function () {
                var b2,
                  c2 = this._core.settings,
                  d2 = this._core.items().length <= c2.items,
                  e2 = this._core.relative(this._core.current()),
                  f = c2.loop || c2.rewind;
                this._controls.$relative.toggleClass("disabled", !c2.nav || d2), c2.nav && (this._controls.$previous.toggleClass("disabled", !f && e2 <= this._core.minimum(true)), this._controls.$next.toggleClass("disabled", !f && e2 >= this._core.maximum(true))), this._controls.$absolute.toggleClass("disabled", !c2.dots || d2), c2.dots && (b2 = this._pages.length - this._controls.$absolute.children().length, c2.dotsData && 0 !== b2 ? this._controls.$absolute.html(this._templates.join("")) : b2 > 0 ? this._controls.$absolute.append(new Array(b2 + 1).join(this._templates[0])) : b2 < 0 && this._controls.$absolute.children().slice(b2).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
              }, e.prototype.onTrigger = function (b2) {
                var c2 = this._core.settings;
                b2.page = {
                  index: a.inArray(this.current(), this._pages),
                  count: this._pages.length,
                  size: c2 && (c2.center || c2.autoWidth || c2.dotsData ? 1 : c2.dotsEach || c2.items)
                };
              }, e.prototype.current = function () {
                var b2 = this._core.relative(this._core.current());
                return a.grep(this._pages, a.proxy(function (a2, c2) {
                  return a2.start <= b2 && a2.end >= b2;
                }, this)).pop();
              }, e.prototype.getPosition = function (b2) {
                var c2,
                  d2,
                  e2 = this._core.settings;
                return "page" == e2.slideBy ? (c2 = a.inArray(this.current(), this._pages), d2 = this._pages.length, b2 ? ++c2 : --c2, c2 = this._pages[(c2 % d2 + d2) % d2].start) : (c2 = this._core.relative(this._core.current()), d2 = this._core.items().length, b2 ? c2 += e2.slideBy : c2 -= e2.slideBy), c2;
              }, e.prototype.next = function (b2) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(true), b2);
              }, e.prototype.prev = function (b2) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(false), b2);
              }, e.prototype.to = function (b2, c2, d2) {
                var e2;
                !d2 && this._pages.length ? (e2 = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b2 % e2 + e2) % e2].start, c2)) : a.proxy(this._overrides.to, this._core)(b2, c2);
              }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
            }(window.Zepto || window.jQuery), function (a, b, c, d) {
              var e = function (c2) {
                this._core = c2, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                  "initialized.owl.carousel": a.proxy(function (c3) {
                    c3.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                  }, this),
                  "prepared.owl.carousel": a.proxy(function (b2) {
                    if (b2.namespace) {
                      var c3 = a(b2.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                      if (!c3) return;
                      this._hashes[c3] = b2.content;
                    }
                  }, this),
                  "changed.owl.carousel": a.proxy(function (c3) {
                    if (c3.namespace && "position" === c3.property.name) {
                      var d2 = this._core.items(this._core.relative(this._core.current())),
                        e2 = a.map(this._hashes, function (a2, b2) {
                          return a2 === d2 ? b2 : null;
                        }).join();
                      if (!e2 || b.location.hash.slice(1) === e2) return;
                      b.location.hash = e2;
                    }
                  }, this)
                }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a2) {
                  var c3 = b.location.hash.substring(1),
                    e2 = this._core.$stage.children(),
                    f = this._hashes[c3] && e2.index(this._hashes[c3]);
                  f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), false, true);
                }, this));
              };
              e.Defaults = {
                URLhashListener: false
              }, e.prototype.destroy = function () {
                var c2, d2;
                a(b).off("hashchange.owl.navigation");
                for (c2 in this._handlers) this._core.$element.off(c2, this._handlers[c2]);
                for (d2 in Object.getOwnPropertyNames(this)) "function" != typeof this[d2] && (this[d2] = null);
              }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
            }(window.Zepto || window.jQuery, window), function (a, b, c, d) {
              function e(b2, c2) {
                var e2 = false,
                  f2 = b2.charAt(0).toUpperCase() + b2.slice(1);
                return a.each((b2 + " " + h2.join(f2 + " ") + f2).split(" "), function (a2, b3) {
                  if (g[b3] !== d) return e2 = !c2 || b3, false;
                }), e2;
              }
              function f(a2) {
                return e(a2, true);
              }
              var g = a("<support>").get(0).style,
                h2 = "Webkit Moz O ms".split(" "),
                i = {
                  transition: {
                    end: {
                      WebkitTransition: "webkitTransitionEnd",
                      MozTransition: "transitionend",
                      OTransition: "oTransitionEnd",
                      transition: "transitionend"
                    }
                  },
                  animation: {
                    end: {
                      WebkitAnimation: "webkitAnimationEnd",
                      MozAnimation: "animationend",
                      OAnimation: "oAnimationEnd",
                      animation: "animationend"
                    }
                  }
                },
                j = {
                  csstransforms: function () {
                    return !!e("transform");
                  },
                  csstransforms3d: function () {
                    return !!e("perspective");
                  },
                  csstransitions: function () {
                    return !!e("transition");
                  },
                  cssanimations: function () {
                    return !!e("animation");
                  }
                };
              j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
            }(window.Zepto || window.jQuery);
            var pJS = function (tag_id, params) {
              var canvas_el = document.querySelector("#" + tag_id + " > .particles-js-canvas-el");
              this.pJS = {
                canvas: {
                  el: canvas_el,
                  w: canvas_el.offsetWidth,
                  h: canvas_el.offsetHeight
                },
                particles: {
                  number: {
                    value: 400,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#fff"
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#ff0000"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 1,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 2,
                      opacity_min: 0,
                      sync: false
                    }
                  },
                  size: {
                    value: 20,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 20,
                      size_min: 0,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 100,
                    color: "#fff",
                    opacity: 1,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 3e3,
                      rotateY: 3e3
                    }
                  },
                  array: []
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "grab"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 100,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 200,
                      size: 80,
                      duration: 0.4
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  },
                  mouse: {}
                },
                retina_detect: false,
                fn: {
                  interact: {},
                  modes: {},
                  vendors: {}
                },
                tmp: {}
              };
              var pJS2 = this.pJS;
              if (params) {
                Object.deepExtend(pJS2, params);
              }
              pJS2.tmp.obj = {
                size_value: pJS2.particles.size.value,
                size_anim_speed: pJS2.particles.size.anim.speed,
                move_speed: pJS2.particles.move.speed,
                line_linked_distance: pJS2.particles.line_linked.distance,
                line_linked_width: pJS2.particles.line_linked.width,
                mode_grab_distance: pJS2.interactivity.modes.grab.distance,
                mode_bubble_distance: pJS2.interactivity.modes.bubble.distance,
                mode_bubble_size: pJS2.interactivity.modes.bubble.size,
                mode_repulse_distance: pJS2.interactivity.modes.repulse.distance
              };
              pJS2.fn.retinaInit = function () {
                if (pJS2.retina_detect && window.devicePixelRatio > 1) {
                  pJS2.canvas.pxratio = window.devicePixelRatio;
                  pJS2.tmp.retina = true;
                } else {
                  pJS2.canvas.pxratio = 1;
                  pJS2.tmp.retina = false;
                }
                pJS2.canvas.w = pJS2.canvas.el.offsetWidth * pJS2.canvas.pxratio;
                pJS2.canvas.h = pJS2.canvas.el.offsetHeight * pJS2.canvas.pxratio;
                pJS2.particles.size.value = pJS2.tmp.obj.size_value * pJS2.canvas.pxratio;
                pJS2.particles.size.anim.speed = pJS2.tmp.obj.size_anim_speed * pJS2.canvas.pxratio;
                pJS2.particles.move.speed = pJS2.tmp.obj.move_speed * pJS2.canvas.pxratio;
                pJS2.particles.line_linked.distance = pJS2.tmp.obj.line_linked_distance * pJS2.canvas.pxratio;
                pJS2.interactivity.modes.grab.distance = pJS2.tmp.obj.mode_grab_distance * pJS2.canvas.pxratio;
                pJS2.interactivity.modes.bubble.distance = pJS2.tmp.obj.mode_bubble_distance * pJS2.canvas.pxratio;
                pJS2.particles.line_linked.width = pJS2.tmp.obj.line_linked_width * pJS2.canvas.pxratio;
                pJS2.interactivity.modes.bubble.size = pJS2.tmp.obj.mode_bubble_size * pJS2.canvas.pxratio;
                pJS2.interactivity.modes.repulse.distance = pJS2.tmp.obj.mode_repulse_distance * pJS2.canvas.pxratio;
              };
              pJS2.fn.canvasInit = function () {
                pJS2.canvas.ctx = pJS2.canvas.el.getContext("2d");
              };
              pJS2.fn.canvasSize = function () {
                pJS2.canvas.el.width = pJS2.canvas.w;
                pJS2.canvas.el.height = pJS2.canvas.h;
                if (pJS2 && pJS2.interactivity.events.resize) {
                  window.addEventListener("resize", function () {
                    pJS2.canvas.w = pJS2.canvas.el.offsetWidth;
                    pJS2.canvas.h = pJS2.canvas.el.offsetHeight;
                    if (pJS2.tmp.retina) {
                      pJS2.canvas.w *= pJS2.canvas.pxratio;
                      pJS2.canvas.h *= pJS2.canvas.pxratio;
                    }
                    pJS2.canvas.el.width = pJS2.canvas.w;
                    pJS2.canvas.el.height = pJS2.canvas.h;
                    if (!pJS2.particles.move.enable) {
                      pJS2.fn.particlesEmpty();
                      pJS2.fn.particlesCreate();
                      pJS2.fn.particlesDraw();
                      pJS2.fn.vendors.densityAutoParticles();
                    }
                    pJS2.fn.vendors.densityAutoParticles();
                  });
                }
              };
              pJS2.fn.canvasPaint = function () {
                pJS2.canvas.ctx.fillRect(0, 0, pJS2.canvas.w, pJS2.canvas.h);
              };
              pJS2.fn.canvasClear = function () {
                pJS2.canvas.ctx.clearRect(0, 0, pJS2.canvas.w, pJS2.canvas.h);
              };
              pJS2.fn.particle = function (color, opacity, position) {
                this.radius = (pJS2.particles.size.random ? Math.random() : 1) * pJS2.particles.size.value;
                if (pJS2.particles.size.anim.enable) {
                  this.size_status = false;
                  this.vs = pJS2.particles.size.anim.speed / 100;
                  if (!pJS2.particles.size.anim.sync) {
                    this.vs = this.vs * Math.random();
                  }
                }
                this.x = position ? position.x : Math.random() * pJS2.canvas.w;
                this.y = position ? position.y : Math.random() * pJS2.canvas.h;
                if (this.x > pJS2.canvas.w - this.radius * 2) this.x = this.x - this.radius;else if (this.x < this.radius * 2) this.x = this.x + this.radius;
                if (this.y > pJS2.canvas.h - this.radius * 2) this.y = this.y - this.radius;else if (this.y < this.radius * 2) this.y = this.y + this.radius;
                if (pJS2.particles.move.bounce) {
                  pJS2.fn.vendors.checkOverlap(this, position);
                }
                this.color = {};
                if (typeof color.value == "object") {
                  if (color.value instanceof Array) {
                    var color_selected = color.value[Math.floor(Math.random() * pJS2.particles.color.value.length)];
                    this.color.rgb = hexToRgb(color_selected);
                  } else {
                    if (color.value.r != void 0 && color.value.g != void 0 && color.value.b != void 0) {
                      this.color.rgb = {
                        r: color.value.r,
                        g: color.value.g,
                        b: color.value.b
                      };
                    }
                    if (color.value.h != void 0 && color.value.s != void 0 && color.value.l != void 0) {
                      this.color.hsl = {
                        h: color.value.h,
                        s: color.value.s,
                        l: color.value.l
                      };
                    }
                  }
                } else if (color.value == "random") {
                  this.color.rgb = {
                    r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
                    g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
                    b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
                  };
                } else if (typeof color.value == "string") {
                  this.color = color;
                  this.color.rgb = hexToRgb(this.color.value);
                }
                this.opacity = (pJS2.particles.opacity.random ? Math.random() : 1) * pJS2.particles.opacity.value;
                if (pJS2.particles.opacity.anim.enable) {
                  this.opacity_status = false;
                  this.vo = pJS2.particles.opacity.anim.speed / 100;
                  if (!pJS2.particles.opacity.anim.sync) {
                    this.vo = this.vo * Math.random();
                  }
                }
                var velbase = {};
                switch (pJS2.particles.move.direction) {
                  case "top":
                    velbase = {
                      x: 0,
                      y: -1
                    };
                    break;
                  case "top-right":
                    velbase = {
                      x: 0.5,
                      y: -0.5
                    };
                    break;
                  case "right":
                    velbase = {
                      x: 1,
                      y: -0
                    };
                    break;
                  case "bottom-right":
                    velbase = {
                      x: 0.5,
                      y: 0.5
                    };
                    break;
                  case "bottom":
                    velbase = {
                      x: 0,
                      y: 1
                    };
                    break;
                  case "bottom-left":
                    velbase = {
                      x: -0.5,
                      y: 1
                    };
                    break;
                  case "left":
                    velbase = {
                      x: -1,
                      y: 0
                    };
                    break;
                  case "top-left":
                    velbase = {
                      x: -0.5,
                      y: -0.5
                    };
                    break;
                  default:
                    velbase = {
                      x: 0,
                      y: 0
                    };
                    break;
                }
                if (pJS2.particles.move.straight) {
                  this.vx = velbase.x;
                  this.vy = velbase.y;
                  if (pJS2.particles.move.random) {
                    this.vx = this.vx * Math.random();
                    this.vy = this.vy * Math.random();
                  }
                } else {
                  this.vx = velbase.x + Math.random() - 0.5;
                  this.vy = velbase.y + Math.random() - 0.5;
                }
                this.vx_i = this.vx;
                this.vy_i = this.vy;
                var shape_type = pJS2.particles.shape.type;
                if (typeof shape_type == "object") {
                  if (shape_type instanceof Array) {
                    var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                    this.shape = shape_selected;
                  }
                } else {
                  this.shape = shape_type;
                }
                if (this.shape == "image") {
                  var sh = pJS2.particles.shape;
                  this.img = {
                    src: sh.image.src,
                    ratio: sh.image.width / sh.image.height
                  };
                  if (!this.img.ratio) this.img.ratio = 1;
                  if (pJS2.tmp.img_type == "svg" && pJS2.tmp.source_svg != void 0) {
                    pJS2.fn.vendors.createSvgImg(this);
                    if (pJS2.tmp.pushing) {
                      this.img.loaded = false;
                    }
                  }
                }
              };
              pJS2.fn.particle.prototype.draw = function () {
                var p = this;
                if (p.radius_bubble != void 0) {
                  var radius = p.radius_bubble;
                } else {
                  var radius = p.radius;
                }
                if (p.opacity_bubble != void 0) {
                  var opacity = p.opacity_bubble;
                } else {
                  var opacity = p.opacity;
                }
                if (p.color.rgb) {
                  var color_value = "rgba(" + p.color.rgb.r + "," + p.color.rgb.g + "," + p.color.rgb.b + "," + opacity + ")";
                } else {
                  var color_value = "hsla(" + p.color.hsl.h + "," + p.color.hsl.s + "%," + p.color.hsl.l + "%," + opacity + ")";
                }
                pJS2.canvas.ctx.fillStyle = color_value;
                pJS2.canvas.ctx.beginPath();
                switch (p.shape) {
                  case "circle":
                    pJS2.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
                    break;
                  case "edge":
                    pJS2.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
                    break;
                  case "triangle":
                    pJS2.fn.vendors.drawShape(pJS2.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
                    break;
                  case "polygon":
                    pJS2.fn.vendors.drawShape(pJS2.canvas.ctx, p.x - radius / (pJS2.particles.shape.polygon.nb_sides / 3.5),
                    // startX
                    p.y - radius / (2.66 / 3.5),
                    // startY
                    radius * 2.66 / (pJS2.particles.shape.polygon.nb_sides / 3),
                    // sideLength
                    pJS2.particles.shape.polygon.nb_sides,
                    // sideCountNumerator
                    1
                    // sideCountDenominator
                    );
                    break;
                  case "star":
                    pJS2.fn.vendors.drawShape(pJS2.canvas.ctx, p.x - radius * 2 / (pJS2.particles.shape.polygon.nb_sides / 4),
                    // startX
                    p.y - radius / (2 * 2.66 / 3.5),
                    // startY
                    radius * 2 * 2.66 / (pJS2.particles.shape.polygon.nb_sides / 3),
                    // sideLength
                    pJS2.particles.shape.polygon.nb_sides,
                    // sideCountNumerator
                    2
                    // sideCountDenominator
                    );
                    break;
                  case "image":
                    let draw2 = function () {
                      pJS2.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
                    };
                    if (pJS2.tmp.img_type == "svg") {
                      var img_obj = p.img.obj;
                    } else {
                      var img_obj = pJS2.tmp.img_obj;
                    }
                    if (img_obj) {
                      draw2();
                    }
                    break;
                }
                pJS2.canvas.ctx.closePath();
                if (pJS2.particles.shape.stroke.width > 0) {
                  pJS2.canvas.ctx.strokeStyle = pJS2.particles.shape.stroke.color;
                  pJS2.canvas.ctx.lineWidth = pJS2.particles.shape.stroke.width;
                  pJS2.canvas.ctx.stroke();
                }
                pJS2.canvas.ctx.fill();
              };
              pJS2.fn.particlesCreate = function () {
                for (var i = 0; i < pJS2.particles.number.value; i++) {
                  pJS2.particles.array.push(new pJS2.fn.particle(pJS2.particles.color, pJS2.particles.opacity.value));
                }
              };
              pJS2.fn.particlesUpdate = function () {
                for (var i = 0; i < pJS2.particles.array.length; i++) {
                  var p = pJS2.particles.array[i];
                  if (pJS2.particles.move.enable) {
                    var ms = pJS2.particles.move.speed / 2;
                    p.x += p.vx * ms;
                    p.y += p.vy * ms;
                  }
                  if (pJS2.particles.opacity.anim.enable) {
                    if (p.opacity_status == true) {
                      if (p.opacity >= pJS2.particles.opacity.value) p.opacity_status = false;
                      p.opacity += p.vo;
                    } else {
                      if (p.opacity <= pJS2.particles.opacity.anim.opacity_min) p.opacity_status = true;
                      p.opacity -= p.vo;
                    }
                    if (p.opacity < 0) p.opacity = 0;
                  }
                  if (pJS2.particles.size.anim.enable) {
                    if (p.size_status == true) {
                      if (p.radius >= pJS2.particles.size.value) p.size_status = false;
                      p.radius += p.vs;
                    } else {
                      if (p.radius <= pJS2.particles.size.anim.size_min) p.size_status = true;
                      p.radius -= p.vs;
                    }
                    if (p.radius < 0) p.radius = 0;
                  }
                  if (pJS2.particles.move.out_mode == "bounce") {
                    var new_pos = {
                      x_left: p.radius,
                      x_right: pJS2.canvas.w,
                      y_top: p.radius,
                      y_bottom: pJS2.canvas.h
                    };
                  } else {
                    var new_pos = {
                      x_left: -p.radius,
                      x_right: pJS2.canvas.w + p.radius,
                      y_top: -p.radius,
                      y_bottom: pJS2.canvas.h + p.radius
                    };
                  }
                  if (p.x - p.radius > pJS2.canvas.w) {
                    p.x = new_pos.x_left;
                    p.y = Math.random() * pJS2.canvas.h;
                  } else if (p.x + p.radius < 0) {
                    p.x = new_pos.x_right;
                    p.y = Math.random() * pJS2.canvas.h;
                  }
                  if (p.y - p.radius > pJS2.canvas.h) {
                    p.y = new_pos.y_top;
                    p.x = Math.random() * pJS2.canvas.w;
                  } else if (p.y + p.radius < 0) {
                    p.y = new_pos.y_bottom;
                    p.x = Math.random() * pJS2.canvas.w;
                  }
                  switch (pJS2.particles.move.out_mode) {
                    case "bounce":
                      if (p.x + p.radius > pJS2.canvas.w) p.vx = -p.vx;else if (p.x - p.radius < 0) p.vx = -p.vx;
                      if (p.y + p.radius > pJS2.canvas.h) p.vy = -p.vy;else if (p.y - p.radius < 0) p.vy = -p.vy;
                      break;
                  }
                  if (isInArray("grab", pJS2.interactivity.events.onhover.mode)) {
                    pJS2.fn.modes.grabParticle(p);
                  }
                  if (isInArray("bubble", pJS2.interactivity.events.onhover.mode) || isInArray("bubble", pJS2.interactivity.events.onclick.mode)) {
                    pJS2.fn.modes.bubbleParticle(p);
                  }
                  if (isInArray("repulse", pJS2.interactivity.events.onhover.mode) || isInArray("repulse", pJS2.interactivity.events.onclick.mode)) {
                    pJS2.fn.modes.repulseParticle(p);
                  }
                  if (pJS2.particles.line_linked.enable || pJS2.particles.move.attract.enable) {
                    for (var j = i + 1; j < pJS2.particles.array.length; j++) {
                      var p2 = pJS2.particles.array[j];
                      if (pJS2.particles.line_linked.enable) {
                        pJS2.fn.interact.linkParticles(p, p2);
                      }
                      if (pJS2.particles.move.attract.enable) {
                        pJS2.fn.interact.attractParticles(p, p2);
                      }
                      if (pJS2.particles.move.bounce) {
                        pJS2.fn.interact.bounceParticles(p, p2);
                      }
                    }
                  }
                }
              };
              pJS2.fn.particlesDraw = function () {
                pJS2.canvas.ctx.clearRect(0, 0, pJS2.canvas.w, pJS2.canvas.h);
                pJS2.fn.particlesUpdate();
                for (var i = 0; i < pJS2.particles.array.length; i++) {
                  var p = pJS2.particles.array[i];
                  p.draw();
                }
              };
              pJS2.fn.particlesEmpty = function () {
                pJS2.particles.array = [];
              };
              pJS2.fn.particlesRefresh = function () {
                cancelRequestAnimFrame(pJS2.fn.checkAnimFrame);
                cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);
                pJS2.tmp.source_svg = void 0;
                pJS2.tmp.img_obj = void 0;
                pJS2.tmp.count_svg = 0;
                pJS2.fn.particlesEmpty();
                pJS2.fn.canvasClear();
                pJS2.fn.vendors.start();
              };
              pJS2.fn.interact.linkParticles = function (p1, p2) {
                var dx = p1.x - p2.x,
                  dy = p1.y - p2.y,
                  dist = Math.sqrt(dx * dx + dy * dy);
                if (dist <= pJS2.particles.line_linked.distance) {
                  var opacity_line = pJS2.particles.line_linked.opacity - dist / (1 / pJS2.particles.line_linked.opacity) / pJS2.particles.line_linked.distance;
                  if (opacity_line > 0) {
                    var color_line = pJS2.particles.line_linked.color_rgb_line;
                    pJS2.canvas.ctx.strokeStyle = "rgba(" + color_line.r + "," + color_line.g + "," + color_line.b + "," + opacity_line + ")";
                    pJS2.canvas.ctx.lineWidth = pJS2.particles.line_linked.width;
                    pJS2.canvas.ctx.beginPath();
                    pJS2.canvas.ctx.moveTo(p1.x, p1.y);
                    pJS2.canvas.ctx.lineTo(p2.x, p2.y);
                    pJS2.canvas.ctx.stroke();
                    pJS2.canvas.ctx.closePath();
                  }
                }
              };
              pJS2.fn.interact.attractParticles = function (p1, p2) {
                var dx = p1.x - p2.x,
                  dy = p1.y - p2.y,
                  dist = Math.sqrt(dx * dx + dy * dy);
                if (dist <= pJS2.particles.line_linked.distance) {
                  var ax = dx / (pJS2.particles.move.attract.rotateX * 1e3),
                    ay = dy / (pJS2.particles.move.attract.rotateY * 1e3);
                  p1.vx -= ax;
                  p1.vy -= ay;
                  p2.vx += ax;
                  p2.vy += ay;
                }
              };
              pJS2.fn.interact.bounceParticles = function (p1, p2) {
                var dx = p1.x - p2.x,
                  dy = p1.y - p2.y,
                  dist = Math.sqrt(dx * dx + dy * dy),
                  dist_p = p1.radius + p2.radius;
                if (dist <= dist_p) {
                  p1.vx = -p1.vx;
                  p1.vy = -p1.vy;
                  p2.vx = -p2.vx;
                  p2.vy = -p2.vy;
                }
              };
              pJS2.fn.modes.pushParticles = function (nb, pos) {
                pJS2.tmp.pushing = true;
                for (var i = 0; i < nb; i++) {
                  pJS2.particles.array.push(new pJS2.fn.particle(pJS2.particles.color, pJS2.particles.opacity.value, {
                    "x": pos ? pos.pos_x : Math.random() * pJS2.canvas.w,
                    "y": pos ? pos.pos_y : Math.random() * pJS2.canvas.h
                  }));
                  if (i == nb - 1) {
                    if (!pJS2.particles.move.enable) {
                      pJS2.fn.particlesDraw();
                    }
                    pJS2.tmp.pushing = false;
                  }
                }
              };
              pJS2.fn.modes.removeParticles = function (nb) {
                pJS2.particles.array.splice(0, nb);
                if (!pJS2.particles.move.enable) {
                  pJS2.fn.particlesDraw();
                }
              };
              pJS2.fn.modes.bubbleParticle = function (p) {
                if (pJS2.interactivity.events.onhover.enable && isInArray("bubble", pJS2.interactivity.events.onhover.mode)) {
                  let init2 = function () {
                    p.opacity_bubble = p.opacity;
                    p.radius_bubble = p.radius;
                  };
                  var dx_mouse = p.x - pJS2.interactivity.mouse.pos_x,
                    dy_mouse = p.y - pJS2.interactivity.mouse.pos_y,
                    dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
                    ratio = 1 - dist_mouse / pJS2.interactivity.modes.bubble.distance;
                  if (dist_mouse <= pJS2.interactivity.modes.bubble.distance) {
                    if (ratio >= 0 && pJS2.interactivity.status == "mousemove") {
                      if (pJS2.interactivity.modes.bubble.size != pJS2.particles.size.value) {
                        if (pJS2.interactivity.modes.bubble.size > pJS2.particles.size.value) {
                          var size = p.radius + pJS2.interactivity.modes.bubble.size * ratio;
                          if (size >= 0) {
                            p.radius_bubble = size;
                          }
                        } else {
                          var dif = p.radius - pJS2.interactivity.modes.bubble.size,
                            size = p.radius - dif * ratio;
                          if (size > 0) {
                            p.radius_bubble = size;
                          } else {
                            p.radius_bubble = 0;
                          }
                        }
                      }
                      if (pJS2.interactivity.modes.bubble.opacity != pJS2.particles.opacity.value) {
                        if (pJS2.interactivity.modes.bubble.opacity > pJS2.particles.opacity.value) {
                          var opacity = pJS2.interactivity.modes.bubble.opacity * ratio;
                          if (opacity > p.opacity && opacity <= pJS2.interactivity.modes.bubble.opacity) {
                            p.opacity_bubble = opacity;
                          }
                        } else {
                          var opacity = p.opacity - (pJS2.particles.opacity.value - pJS2.interactivity.modes.bubble.opacity) * ratio;
                          if (opacity < p.opacity && opacity >= pJS2.interactivity.modes.bubble.opacity) {
                            p.opacity_bubble = opacity;
                          }
                        }
                      }
                    }
                  } else {
                    init2();
                  }
                  if (pJS2.interactivity.status == "mouseleave") {
                    init2();
                  }
                } else if (pJS2.interactivity.events.onclick.enable && isInArray("bubble", pJS2.interactivity.events.onclick.mode)) {
                  let process2 = function (bubble_param, particles_param, p_obj_bubble, p_obj, id) {
                    if (bubble_param != particles_param) {
                      if (!pJS2.tmp.bubble_duration_end) {
                        if (dist_mouse <= pJS2.interactivity.modes.bubble.distance) {
                          if (p_obj_bubble != void 0) var obj = p_obj_bubble;else var obj = p_obj;
                          if (obj != bubble_param) {
                            var value = p_obj - time_spent * (p_obj - bubble_param) / pJS2.interactivity.modes.bubble.duration;
                            if (id == "size") p.radius_bubble = value;
                            if (id == "opacity") p.opacity_bubble = value;
                          }
                        } else {
                          if (id == "size") p.radius_bubble = void 0;
                          if (id == "opacity") p.opacity_bubble = void 0;
                        }
                      } else {
                        if (p_obj_bubble != void 0) {
                          var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS2.interactivity.modes.bubble.duration,
                            dif2 = bubble_param - value_tmp;
                          value = bubble_param + dif2;
                          if (id == "size") p.radius_bubble = value;
                          if (id == "opacity") p.opacity_bubble = value;
                        }
                      }
                    }
                  };
                  if (pJS2.tmp.bubble_clicking) {
                    var dx_mouse = p.x - pJS2.interactivity.mouse.click_pos_x,
                      dy_mouse = p.y - pJS2.interactivity.mouse.click_pos_y,
                      dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
                      time_spent = ((/* @__PURE__ */new Date()).getTime() - pJS2.interactivity.mouse.click_time) / 1e3;
                    if (time_spent > pJS2.interactivity.modes.bubble.duration) {
                      pJS2.tmp.bubble_duration_end = true;
                    }
                    if (time_spent > pJS2.interactivity.modes.bubble.duration * 2) {
                      pJS2.tmp.bubble_clicking = false;
                      pJS2.tmp.bubble_duration_end = false;
                    }
                  }
                  if (pJS2.tmp.bubble_clicking) {
                    process2(pJS2.interactivity.modes.bubble.size, pJS2.particles.size.value, p.radius_bubble, p.radius, "size");
                    process2(pJS2.interactivity.modes.bubble.opacity, pJS2.particles.opacity.value, p.opacity_bubble, p.opacity, "opacity");
                  }
                }
              };
              pJS2.fn.modes.repulseParticle = function (p) {
                if (pJS2.interactivity.events.onhover.enable && isInArray("repulse", pJS2.interactivity.events.onhover.mode) && pJS2.interactivity.status == "mousemove") {
                  var dx_mouse = p.x - pJS2.interactivity.mouse.pos_x,
                    dy_mouse = p.y - pJS2.interactivity.mouse.pos_y,
                    dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
                  var normVec = {
                      x: dx_mouse / dist_mouse,
                      y: dy_mouse / dist_mouse
                    },
                    repulseRadius = pJS2.interactivity.modes.repulse.distance,
                    velocity = 100,
                    repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
                  var pos = {
                    x: p.x + normVec.x * repulseFactor,
                    y: p.y + normVec.y * repulseFactor
                  };
                  if (pJS2.particles.move.out_mode == "bounce") {
                    if (pos.x - p.radius > 0 && pos.x + p.radius < pJS2.canvas.w) p.x = pos.x;
                    if (pos.y - p.radius > 0 && pos.y + p.radius < pJS2.canvas.h) p.y = pos.y;
                  } else {
                    p.x = pos.x;
                    p.y = pos.y;
                  }
                } else if (pJS2.interactivity.events.onclick.enable && isInArray("repulse", pJS2.interactivity.events.onclick.mode)) {
                  if (!pJS2.tmp.repulse_finish) {
                    pJS2.tmp.repulse_count++;
                    if (pJS2.tmp.repulse_count == pJS2.particles.array.length) {
                      pJS2.tmp.repulse_finish = true;
                    }
                  }
                  if (pJS2.tmp.repulse_clicking) {
                    let process2 = function () {
                      var f = Math.atan2(dy, dx);
                      p.vx = force * Math.cos(f);
                      p.vy = force * Math.sin(f);
                      if (pJS2.particles.move.out_mode == "bounce") {
                        var pos2 = {
                          x: p.x + p.vx,
                          y: p.y + p.vy
                        };
                        if (pos2.x + p.radius > pJS2.canvas.w) p.vx = -p.vx;else if (pos2.x - p.radius < 0) p.vx = -p.vx;
                        if (pos2.y + p.radius > pJS2.canvas.h) p.vy = -p.vy;else if (pos2.y - p.radius < 0) p.vy = -p.vy;
                      }
                    };
                    var repulseRadius = Math.pow(pJS2.interactivity.modes.repulse.distance / 6, 3);
                    var dx = pJS2.interactivity.mouse.click_pos_x - p.x,
                      dy = pJS2.interactivity.mouse.click_pos_y - p.y,
                      d = dx * dx + dy * dy;
                    var force = -repulseRadius / d * 1;
                    if (d <= repulseRadius) {
                      process2();
                    }
                  } else {
                    if (pJS2.tmp.repulse_clicking == false) {
                      p.vx = p.vx_i;
                      p.vy = p.vy_i;
                    }
                  }
                }
              };
              pJS2.fn.modes.grabParticle = function (p) {
                if (pJS2.interactivity.events.onhover.enable && pJS2.interactivity.status == "mousemove") {
                  var dx_mouse = p.x - pJS2.interactivity.mouse.pos_x,
                    dy_mouse = p.y - pJS2.interactivity.mouse.pos_y,
                    dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
                  if (dist_mouse <= pJS2.interactivity.modes.grab.distance) {
                    var opacity_line = pJS2.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS2.interactivity.modes.grab.line_linked.opacity) / pJS2.interactivity.modes.grab.distance;
                    if (opacity_line > 0) {
                      var color_line = pJS2.particles.line_linked.color_rgb_line;
                      pJS2.canvas.ctx.strokeStyle = "rgba(" + color_line.r + "," + color_line.g + "," + color_line.b + "," + opacity_line + ")";
                      pJS2.canvas.ctx.lineWidth = pJS2.particles.line_linked.width;
                      pJS2.canvas.ctx.beginPath();
                      pJS2.canvas.ctx.moveTo(p.x, p.y);
                      pJS2.canvas.ctx.lineTo(pJS2.interactivity.mouse.pos_x, pJS2.interactivity.mouse.pos_y);
                      pJS2.canvas.ctx.stroke();
                      pJS2.canvas.ctx.closePath();
                    }
                  }
                }
              };
              pJS2.fn.vendors.eventsListeners = function () {
                if (pJS2.interactivity.detect_on == "window") {
                  pJS2.interactivity.el = window;
                } else {
                  pJS2.interactivity.el = pJS2.canvas.el;
                }
                if (pJS2.interactivity.events.onhover.enable || pJS2.interactivity.events.onclick.enable) {
                  pJS2.interactivity.el.addEventListener("mousemove", function (e) {
                    if (pJS2.interactivity.el == window) {
                      var pos_x = e.clientX,
                        pos_y = e.clientY;
                    } else {
                      var pos_x = e.offsetX || e.clientX,
                        pos_y = e.offsetY || e.clientY;
                    }
                    pJS2.interactivity.mouse.pos_x = pos_x;
                    pJS2.interactivity.mouse.pos_y = pos_y;
                    if (pJS2.tmp.retina) {
                      pJS2.interactivity.mouse.pos_x *= pJS2.canvas.pxratio;
                      pJS2.interactivity.mouse.pos_y *= pJS2.canvas.pxratio;
                    }
                    pJS2.interactivity.status = "mousemove";
                  });
                  pJS2.interactivity.el.addEventListener("mouseleave", function (e) {
                    pJS2.interactivity.mouse.pos_x = null;
                    pJS2.interactivity.mouse.pos_y = null;
                    pJS2.interactivity.status = "mouseleave";
                  });
                }
                if (pJS2.interactivity.events.onclick.enable) {
                  pJS2.interactivity.el.addEventListener("click", function () {
                    pJS2.interactivity.mouse.click_pos_x = pJS2.interactivity.mouse.pos_x;
                    pJS2.interactivity.mouse.click_pos_y = pJS2.interactivity.mouse.pos_y;
                    pJS2.interactivity.mouse.click_time = (/* @__PURE__ */new Date()).getTime();
                    if (pJS2.interactivity.events.onclick.enable) {
                      switch (pJS2.interactivity.events.onclick.mode) {
                        case "push":
                          if (pJS2.particles.move.enable) {
                            pJS2.fn.modes.pushParticles(pJS2.interactivity.modes.push.particles_nb, pJS2.interactivity.mouse);
                          } else {
                            if (pJS2.interactivity.modes.push.particles_nb == 1) {
                              pJS2.fn.modes.pushParticles(pJS2.interactivity.modes.push.particles_nb, pJS2.interactivity.mouse);
                            } else if (pJS2.interactivity.modes.push.particles_nb > 1) {
                              pJS2.fn.modes.pushParticles(pJS2.interactivity.modes.push.particles_nb);
                            }
                          }
                          break;
                        case "remove":
                          pJS2.fn.modes.removeParticles(pJS2.interactivity.modes.remove.particles_nb);
                          break;
                        case "bubble":
                          pJS2.tmp.bubble_clicking = true;
                          break;
                        case "repulse":
                          pJS2.tmp.repulse_clicking = true;
                          pJS2.tmp.repulse_count = 0;
                          pJS2.tmp.repulse_finish = false;
                          setTimeout(function () {
                            pJS2.tmp.repulse_clicking = false;
                          }, pJS2.interactivity.modes.repulse.duration * 1e3);
                          break;
                      }
                    }
                  });
                }
              };
              pJS2.fn.vendors.densityAutoParticles = function () {
                if (pJS2.particles.number.density.enable) {
                  var area = pJS2.canvas.el.width * pJS2.canvas.el.height / 1e3;
                  if (pJS2.tmp.retina) {
                    area = area / (pJS2.canvas.pxratio * 2);
                  }
                  var nb_particles = area * pJS2.particles.number.value / pJS2.particles.number.density.value_area;
                  var missing_particles = pJS2.particles.array.length - nb_particles;
                  if (missing_particles < 0) pJS2.fn.modes.pushParticles(Math.abs(missing_particles));else pJS2.fn.modes.removeParticles(missing_particles);
                }
              };
              pJS2.fn.vendors.checkOverlap = function (p1, position) {
                for (var i = 0; i < pJS2.particles.array.length; i++) {
                  var p2 = pJS2.particles.array[i];
                  var dx = p1.x - p2.x,
                    dy = p1.y - p2.y,
                    dist = Math.sqrt(dx * dx + dy * dy);
                  if (dist <= p1.radius + p2.radius) {
                    p1.x = position ? position.x : Math.random() * pJS2.canvas.w;
                    p1.y = position ? position.y : Math.random() * pJS2.canvas.h;
                    pJS2.fn.vendors.checkOverlap(p1);
                  }
                }
              };
              pJS2.fn.vendors.createSvgImg = function (p) {
                var svgXml = pJS2.tmp.source_svg,
                  rgbHex = /#([0-9A-F]{3,6})/gi,
                  coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
                    if (p.color.rgb) {
                      var color_value = "rgba(" + p.color.rgb.r + "," + p.color.rgb.g + "," + p.color.rgb.b + "," + p.opacity + ")";
                    } else {
                      var color_value = "hsla(" + p.color.hsl.h + "," + p.color.hsl.s + "%," + p.color.hsl.l + "%," + p.opacity + ")";
                    }
                    return color_value;
                  });
                var svg = new Blob([coloredSvgXml], {
                    type: "image/svg+xml;charset=utf-8"
                  }),
                  DOMURL = window.URL || window.webkitURL || window,
                  url = DOMURL.createObjectURL(svg);
                var img = new Image();
                img.addEventListener("load", function () {
                  p.img.obj = img;
                  p.img.loaded = true;
                  DOMURL.revokeObjectURL(url);
                  pJS2.tmp.count_svg++;
                });
                img.src = url;
              };
              pJS2.fn.vendors.destroypJS = function () {
                cancelAnimationFrame(pJS2.fn.drawAnimFrame);
                canvas_el.remove();
                pJSDom = null;
              };
              pJS2.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
                var sideCount = sideCountNumerator * sideCountDenominator;
                var decimalSides = sideCountNumerator / sideCountDenominator;
                var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
                var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
                c.save();
                c.beginPath();
                c.translate(startX, startY);
                c.moveTo(0, 0);
                for (var i = 0; i < sideCount; i++) {
                  c.lineTo(sideLength, 0);
                  c.translate(sideLength, 0);
                  c.rotate(interiorAngle);
                }
                c.fill();
                c.restore();
              };
              pJS2.fn.vendors.exportImg = function () {
                window.open(pJS2.canvas.el.toDataURL("image/png"), "_blank");
              };
              pJS2.fn.vendors.loadImg = function (type) {
                pJS2.tmp.img_error = void 0;
                if (pJS2.particles.shape.image.src != "") {
                  if (type == "svg") {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", pJS2.particles.shape.image.src);
                    xhr.onreadystatechange = function (data2) {
                      if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                          pJS2.tmp.source_svg = data2.currentTarget.response;
                          pJS2.fn.vendors.checkBeforeDraw();
                        } else {
                          console.log("Error pJS - Image not found");
                          pJS2.tmp.img_error = true;
                        }
                      }
                    };
                    xhr.send();
                  } else {
                    var img = new Image();
                    img.addEventListener("load", function () {
                      pJS2.tmp.img_obj = img;
                      pJS2.fn.vendors.checkBeforeDraw();
                    });
                    img.src = pJS2.particles.shape.image.src;
                  }
                } else {
                  console.log("Error pJS - No image.src");
                  pJS2.tmp.img_error = true;
                }
              };
              pJS2.fn.vendors.draw = function () {
                if (pJS2.particles.shape.type == "image") {
                  if (pJS2.tmp.img_type == "svg") {
                    if (pJS2.tmp.count_svg >= pJS2.particles.number.value) {
                      pJS2.fn.particlesDraw();
                      if (!pJS2.particles.move.enable) cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);else pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
                    } else {
                      if (!pJS2.tmp.img_error) pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
                    }
                  } else {
                    if (pJS2.tmp.img_obj != void 0) {
                      pJS2.fn.particlesDraw();
                      if (!pJS2.particles.move.enable) cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);else pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
                    } else {
                      if (!pJS2.tmp.img_error) pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
                    }
                  }
                } else {
                  pJS2.fn.particlesDraw();
                  if (!pJS2.particles.move.enable) cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);else pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
                }
              };
              pJS2.fn.vendors.checkBeforeDraw = function () {
                if (pJS2.particles.shape.type == "image") {
                  if (pJS2.tmp.img_type == "svg" && pJS2.tmp.source_svg == void 0) {
                    pJS2.tmp.checkAnimFrame = requestAnimFrame(check);
                  } else {
                    cancelRequestAnimFrame(pJS2.tmp.checkAnimFrame);
                    if (!pJS2.tmp.img_error) {
                      pJS2.fn.vendors.init();
                      pJS2.fn.vendors.draw();
                    }
                  }
                } else {
                  pJS2.fn.vendors.init();
                  pJS2.fn.vendors.draw();
                }
              };
              pJS2.fn.vendors.init = function () {
                pJS2.fn.retinaInit();
                pJS2.fn.canvasInit();
                pJS2.fn.canvasSize();
                pJS2.fn.canvasPaint();
                pJS2.fn.particlesCreate();
                pJS2.fn.vendors.densityAutoParticles();
                pJS2.particles.line_linked.color_rgb_line = hexToRgb(pJS2.particles.line_linked.color);
              };
              pJS2.fn.vendors.start = function () {
                if (isInArray("image", pJS2.particles.shape.type)) {
                  pJS2.tmp.img_type = pJS2.particles.shape.image.src.substr(pJS2.particles.shape.image.src.length - 3);
                  pJS2.fn.vendors.loadImg(pJS2.tmp.img_type);
                } else {
                  pJS2.fn.vendors.checkBeforeDraw();
                }
              };
              pJS2.fn.vendors.eventsListeners();
              pJS2.fn.vendors.start();
            };
            Object.deepExtend = function (destination, source) {
              for (var property2 in source) {
                if (source[property2] && source[property2].constructor && source[property2].constructor === Object) {
                  destination[property2] = destination[property2] || {};
                  arguments.callee(destination[property2], source[property2]);
                } else {
                  destination[property2] = source[property2];
                }
              }
              return destination;
            };
            window.requestAnimFrame = function () {
              return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1e3 / 60);
              };
            }();
            window.cancelRequestAnimFrame = function () {
              return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
            }();
            function hexToRgb(hex) {
              var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
              hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                return r + r + g + g + b + b;
              });
              var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
              return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
              } : null;
            }
            function clamp(number, min, max) {
              return Math.min(Math.max(number, min), max);
            }
            function isInArray(value, array) {
              return array.indexOf(value) > -1;
            }
            window.pJSDom = [];
            window.particlesJS = function (tag_id, params) {
              if (typeof tag_id != "string") {
                params = tag_id;
                tag_id = "particles-js";
              }
              if (!tag_id) {
                tag_id = "particles-js";
              }
              var pJS_tag = document.getElementById(tag_id),
                pJS_canvas_class = "particles-js-canvas-el",
                exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
              if (exist_canvas.length) {
                while (exist_canvas.length > 0) {
                  pJS_tag.removeChild(exist_canvas[0]);
                }
              }
              var canvas_el = document.createElement("canvas");
              canvas_el.className = pJS_canvas_class;
              canvas_el.style.width = "100%";
              canvas_el.style.height = "100%";
              var canvas = document.getElementById(tag_id).appendChild(canvas_el);
              if (canvas != null) {
                pJSDom.push(new pJS(tag_id, params));
              }
            };
            window.particlesJS.load = function (tag_id, path_config_json, callback) {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", path_config_json);
              xhr.onreadystatechange = function (data2) {
                if (xhr.readyState == 4) {
                  if (xhr.status == 200) {
                    var params = JSON.parse(data2.currentTarget.response);
                    window.particlesJS(tag_id, params);
                    if (callback) callback();
                  } else {
                    console.log("Error pJS - XMLHttpRequest status: " + xhr.status);
                    console.log("Error pJS - File config not found");
                  }
                }
              };
              xhr.send();
            };
            function ssc_init() {
              if (!document.body) return;
              var e = document.body;
              var t = document.documentElement;
              var n = window.innerHeight;
              var r = e.scrollHeight;
              ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
              ssc_activeElement = e;
              ssc_initdone = true;
              if (top != self) {
                ssc_frame = true;
              } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
                ssc_root.style.height = "auto";
                if (ssc_root.offsetHeight <= n) {
                  var i = document.createElement("div");
                  i.style.clear = "both";
                  e.appendChild(i);
                }
              }
              {
                ssc_addEvent("keydown", ssc_keydown);
              }
            }
            function ssc_scrollArray(e, t, n, r) {
              r || (r = 1e3);
              ssc_directionCheck(t, n);
              ssc_que.push({
                x: t,
                y: n,
                lastX: t < 0 ? 0.99 : -0.99,
                lastY: n < 0 ? 0.99 : -0.99,
                start: + /* @__PURE__ */new Date()
              });
              if (ssc_pending) {
                return;
              }
              var i = function () {
                var s = + /* @__PURE__ */new Date();
                var o = 0;
                var u = 0;
                for (var a = 0; a < ssc_que.length; a++) {
                  var f = ssc_que[a];
                  var l = s - f.start;
                  var c = l >= ssc_animtime;
                  var h2 = c ? 1 : l / ssc_animtime;
                  {
                    h2 = ssc_pulse(h2);
                  }
                  var p = f.x * h2 - f.lastX >> 0;
                  var d = f.y * h2 - f.lastY >> 0;
                  o += p;
                  u += d;
                  f.lastX += p;
                  f.lastY += d;
                  if (c) {
                    ssc_que.splice(a, 1);
                    a--;
                  }
                }
                if (t) {
                  var v = e.scrollLeft;
                  e.scrollLeft += o;
                  if (o && e.scrollLeft === v) {
                    t = 0;
                  }
                }
                if (n) {
                  var m = e.scrollTop;
                  e.scrollTop += u;
                  if (u && e.scrollTop === m) {
                    n = 0;
                  }
                }
                if (!t && !n) {
                  ssc_que = [];
                }
                if (ssc_que.length) {
                  setTimeout(i, r / ssc_framerate + 1);
                } else {
                  ssc_pending = false;
                }
              };
              setTimeout(i, 0);
              ssc_pending = true;
            }
            function ssc_wheel(e) {
              if (!ssc_initdone) {
                ssc_init();
              }
              var t = e.target;
              var n = ssc_overflowingAncestor(t);
              if (!n || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
                return true;
              }
              var r = e.wheelDeltaX || 0;
              var i = e.wheelDeltaY || 0;
              if (!r && !i) {
                i = e.wheelDelta || 0;
              }
              if (Math.abs(r) > 1.2) {
                r *= ssc_stepsize / 120;
              }
              if (Math.abs(i) > 1.2) {
                i *= ssc_stepsize / 120;
              }
              ssc_scrollArray(n, -r, -i);
              e.preventDefault();
            }
            function ssc_keydown(e) {
              var t = e.target;
              var n = e.ctrlKey || e.altKey || e.metaKey;
              if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
                return true;
              }
              if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
                return true;
              }
              var r,
                i = 0,
                s = 0;
              var o = ssc_overflowingAncestor(ssc_activeElement);
              var u = o.clientHeight;
              if (o == document.body) {
                u = window.innerHeight;
              }
              switch (e.keyCode) {
                case ssc_key.up:
                  s = -ssc_arrowscroll;
                  break;
                case ssc_key.down:
                  s = ssc_arrowscroll;
                  break;
                case ssc_key.spacebar:
                  r = e.shiftKey ? 1 : -1;
                  s = -r * u * 0.9;
                  break;
                case ssc_key.pageup:
                  s = -u * 0.9;
                  break;
                case ssc_key.pagedown:
                  s = u * 0.9;
                  break;
                case ssc_key.home:
                  s = -o.scrollTop;
                  break;
                case ssc_key.end:
                  var a = o.scrollHeight - o.scrollTop - u;
                  s = a > 0 ? a + 10 : 0;
                  break;
                case ssc_key.left:
                  i = -ssc_arrowscroll;
                  break;
                case ssc_key.right:
                  i = ssc_arrowscroll;
                  break;
                default:
                  return true;
              }
              ssc_scrollArray(o, i, s);
              e.preventDefault();
            }
            function ssc_mousedown(e) {
              ssc_activeElement = e.target;
            }
            function ssc_setCache(e, t) {
              for (var n = e.length; n--;) ssc_cache[ssc_uniqueID(e[n])] = t;
              return t;
            }
            function ssc_overflowingAncestor(e) {
              var t = [];
              var n = ssc_root.scrollHeight;
              do {
                var r = ssc_cache[ssc_uniqueID(e)];
                if (r) {
                  return ssc_setCache(t, r);
                }
                t.push(e);
                if (n === e.scrollHeight) {
                  if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
                    return ssc_setCache(t, document.body);
                  }
                } else if (e.clientHeight + 10 < e.scrollHeight) {
                  overflow = getComputedStyle(e, "").getPropertyValue("overflow");
                  if (overflow === "scroll" || overflow === "auto") {
                    return ssc_setCache(t, e);
                  }
                }
              } while (e = e.parentNode);
            }
            function ssc_addEvent(e, t, n) {
              window.addEventListener(e, t, false);
            }
            function ssc_isNodeName(e, t) {
              return e.nodeName.toLowerCase() === t.toLowerCase();
            }
            function ssc_directionCheck(e, t) {
              e = e > 0 ? 1 : -1;
              t = t > 0 ? 1 : -1;
              if (ssc_direction.x !== e || ssc_direction.y !== t) {
                ssc_direction.x = e;
                ssc_direction.y = t;
                ssc_que = [];
              }
            }
            function ssc_pulse_(e) {
              var t, n, r;
              e = e * ssc_pulseScale;
              if (e < 1) {
                t = e - (1 - Math.exp(-e));
              } else {
                n = Math.exp(-1);
                e -= 1;
                r = 1 - Math.exp(-e);
                t = n + r * (1 - n);
              }
              return t * ssc_pulseNormalize;
            }
            function ssc_pulse(e) {
              if (e >= 1) return 1;
              if (e <= 0) return 0;
              if (ssc_pulseNormalize == 1) {
                ssc_pulseNormalize /= ssc_pulse_(1);
              }
              return ssc_pulse_(e);
            }
            var ssc_framerate = 150;
            var ssc_animtime = 500;
            var ssc_stepsize = 150;
            var ssc_pulseScale = 6;
            var ssc_pulseNormalize = 1;
            var ssc_arrowscroll = 50;
            var ssc_frame = false;
            var ssc_direction = {
              x: 0,
              y: 0
            };
            var ssc_initdone = false;
            var ssc_root = document.documentElement;
            var ssc_activeElement;
            var ssc_key = {
              left: 37,
              up: 38,
              right: 39,
              down: 40,
              spacebar: 32,
              pageup: 33,
              pagedown: 34,
              end: 35,
              home: 36
            };
            var ssc_que = [];
            var ssc_pending = false;
            var ssc_cache = {};
            setInterval(function () {
              ssc_cache = {};
            }, 10 * 1e3);
            var ssc_uniqueID = /* @__PURE__ */function () {
              var e = 0;
              return function (t) {
                return t.ssc_uniqueID || (t.ssc_uniqueID = e++);
              };
            }();
            var ischrome = /chrome/.test(navigator.userAgent.toLowerCase());
            if (ischrome) {
              ssc_addEvent("mousedown", ssc_mousedown);
              ssc_addEvent("mousewheel", ssc_wheel);
              ssc_addEvent("load", ssc_init);
            }
            !function () {
              function t(t2, e) {
                function n() {
                  A = document.createElementNS(E, "svg"), A.addEventListener("mousemove", v), t2.appendChild(A), p.bgDraw && (P = document.createElementNS(E, "rect"), P.setAttribute("x", 0), P.setAttribute("y", 0), P.setAttribute("fill", p.bgColor), A.appendChild(P)), a(), i(), d(), window.addEventListener("resize", y);
                }
                function i() {
                  var e2 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    n2 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    i2 = e2,
                    r2 = n2;
                  p.width.toString().indexOf("%") > 0 || p.height.toString().indexOf("%") > 0 ? (i2 = Math.round(t2.offsetWidth / 100 * parseInt(p.width)), r2 = Math.round(i2 / 100 * parseInt(p.height))) : (i2 = parseInt(p.width), r2 = parseInt(p.height)), i2 >= e2 && (i2 = e2), r2 >= n2 && (r2 = n2), b = {
                    x: i2 / 2,
                    y: r2 / 2
                  }, O.x = p.speed / b.x, O.y = p.speed / b.y, w = i2 >= r2 ? r2 / 100 * parseInt(p.radius) : i2 / 100 * parseInt(p.radius), 1 > w && (w = 1), x = w / 2, x < p.radiusMin && (x = p.radiusMin, w = 2 * x), A.setAttribute("width", i2), A.setAttribute("height", r2), p.bgDraw && (P.setAttribute("width", i2), P.setAttribute("height", r2)), o(x);
                }
                function o(t3) {
                  for (var e2 = 0, n2 = S.length; n2 > e2; e2++) r(S[e2], t3);
                }
                function r(t3, e2) {
                  var n2 = t3.vectorPosition.x - C.x,
                    i2 = t3.vectorPosition.y - C.y,
                    o2 = t3.vectorPosition.z - C.z,
                    r2 = Math.sqrt(n2 * n2 + i2 * i2 + o2 * o2);
                  t3.vectorPosition.x /= r2, t3.vectorPosition.y /= r2, t3.vectorPosition.z /= r2, t3.vectorPosition.x *= e2, t3.vectorPosition.y *= e2, t3.vectorPosition.z *= e2;
                }
                function s(t3, e2, n2, i2, o2) {
                  var r2 = {};
                  return r2.element = document.createElementNS(E, "text"), r2.element.setAttribute("x", 0), r2.element.setAttribute("y", 0), r2.element.setAttribute("fill", p.fontColor), r2.element.setAttribute("font-family", p.fontFamily), r2.element.setAttribute("font-size", p.fontSize), r2.element.setAttribute("font-weight", p.fontWeight), r2.element.setAttribute("font-style", p.fontStyle), r2.element.setAttribute("font-stretch", p.fontStretch), r2.element.setAttribute("text-anchor", "middle"), r2.element.textContent = p.fontToUpperCase ? e2.label.toUpperCase() : e2.label, r2.link = document.createElementNS(E, "a"), r2.link.setAttributeNS("https://www.w3.org/1999/xlink", "xlink:href", e2.url), r2.link.setAttribute("target", e2.target), r2.link.addEventListener("mouseover", f, true), r2.link.addEventListener("mouseout", h2, true), r2.link.appendChild(r2.element), r2.index = t3, r2.mouseOver = false, r2.vectorPosition = {
                    x: n2,
                    y: i2,
                    z: o2
                  }, r2.vector2D = {
                    x: 0,
                    y: 0
                  }, A.appendChild(r2.link), r2;
                }
                function a() {
                  for (var t3 = 1, e2 = p.entries.length + 1; e2 > t3; t3++) {
                    var n2 = Math.acos(-1 + (2 * t3 - 1) / e2),
                      i2 = Math.sqrt(e2 * Math.PI) * n2,
                      o2 = Math.cos(i2) * Math.sin(n2),
                      r2 = Math.sin(i2) * Math.sin(n2),
                      a2 = Math.cos(n2),
                      u2 = s(t3 - 1, p.entries[t3 - 1], o2, r2, a2);
                    S.push(u2);
                  }
                }
                function u(t3) {
                  for (var e2 = 0, n2 = S.length; n2 > e2; e2++) {
                    var i2 = S[e2];
                    if (i2.element.getAttribute("x") === t3.getAttribute("x") && i2.element.getAttribute("y") === t3.getAttribute("y")) return i2;
                  }
                }
                function c(t3) {
                  for (var e2 = u(t3), n2 = 0, i2 = S.length; i2 > n2; n2++) {
                    var o2 = S[n2];
                    o2.index === e2.index ? o2.mouseOver = true : o2.mouseOver = false;
                  }
                }
                function l() {
                  var t3 = O.x * z.x - p.speed,
                    e2 = p.speed - O.y * z.y,
                    n2 = t3 * k,
                    i2 = e2 * k;
                  D.sx = Math.sin(n2), D.cx = Math.cos(n2), D.sy = Math.sin(i2), D.cy = Math.cos(i2);
                  for (var o2 = 0, r2 = S.length; r2 > o2; o2++) {
                    var s2 = S[o2];
                    if (M) {
                      var a2 = s2.vectorPosition.x,
                        u2 = s2.vectorPosition.y * D.sy + s2.vectorPosition.z * D.cy;
                      s2.vectorPosition.x = a2 * D.cx + u2 * D.sx, s2.vectorPosition.y = s2.vectorPosition.y * D.cy + s2.vectorPosition.z * -D.sy, s2.vectorPosition.z = a2 * -D.sx + u2 * D.cx;
                    }
                    var c2 = p.fov / (p.fov + s2.vectorPosition.z);
                    s2.vector2D.x = s2.vectorPosition.x * c2 + b.x, s2.vector2D.y = s2.vectorPosition.y * c2 + b.y, s2.element.setAttribute("x", s2.vector2D.x), s2.element.setAttribute("y", s2.vector2D.y);
                    var l2;
                    M ? (l2 = (x - s2.vectorPosition.z) / w, l2 < p.opacityOut && (l2 = p.opacityOut)) : (l2 = parseFloat(s2.element.getAttribute("opacity")), l2 += s2.mouseOver ? (p.opacityOver - l2) / p.opacitySpeed : (p.opacityOut - l2) / p.opacitySpeed), s2.element.setAttribute("opacity", l2);
                  }
                  S = S.sort(function (t4, e3) {
                    return e3.vectorPosition.z - t4.vectorPosition.z;
                  });
                }
                function d() {
                  requestAnimFrame(d), l();
                }
                function f(t3) {
                  M = false, c(t3.target);
                }
                function h2(t3) {
                  M = true;
                }
                function v(t3) {
                  z = m(A, t3);
                }
                function m(t3, e2) {
                  var n2 = t3.getBoundingClientRect();
                  return {
                    x: e2.clientX - n2.left,
                    y: e2.clientY - n2.top
                  };
                }
                function y(t3) {
                  i();
                }
                var p = {
                  entries: [],
                  width: 480,
                  height: 480,
                  radius: "70%",
                  radiusMin: 75,
                  bgDraw: true,
                  bgColor: "#000",
                  opacityOver: 1,
                  opacityOut: 0.05,
                  opacitySpeed: 6,
                  fov: 800,
                  speed: 2,
                  fontFamily: "Arial, sans-serif",
                  fontSize: "15",
                  fontColor: "#fff",
                  fontWeight: "normal",
                  fontStyle: "normal",
                  fontStretch: "normal",
                  fontToUpperCase: false
                };
                if (void 0 !== e) for (var g in e) e.hasOwnProperty(g) && p.hasOwnProperty(g) && (p[g] = e[g]);
                if (!p.entries.length) return false;
                var x,
                  w,
                  b,
                  A,
                  P,
                  S = [],
                  M = true,
                  z = {
                    x: 0,
                    y: 0
                  },
                  C = {
                    x: 0,
                    y: 0,
                    z: 0
                  },
                  O = {
                    x: 0,
                    y: 0
                  },
                  D = {
                    sx: 0,
                    cx: 0,
                    sy: 0,
                    cy: 0
                  },
                  k = Math.PI / 180,
                  E = "https://www.w3.org/2000/svg";
                window.requestAnimFrame = function () {
                  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t3) {
                    window.setTimeout(t3, 1e3 / 60);
                  };
                }(), n();
              }
              window.SVG3DTagCloud = t;
            }(), "undefined" != typeof jQuery && !function (t) {
              t.fn.svg3DTagCloud = function (e) {
                return this.each(function () {
                  t.data(this, "plugin_SVG3DTagCloud") || t.data(this, "plugin_SVG3DTagCloud", new SVG3DTagCloud(this, e));
                });
              };
            }(jQuery);
            (function (global, factory) {
              typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.versor = factory();
            })(void 0, function () {
              var acos = Math.acos,
                asin = Math.asin,
                atan2 = Math.atan2,
                cos = Math.cos,
                max = Math.max,
                min = Math.min,
                PI = Math.PI,
                sin = Math.sin,
                sqrt = Math.sqrt,
                radians = PI / 180,
                degrees = 180 / PI;
              function versor(e) {
                var l = e[0] / 2 * radians,
                  sl = sin(l),
                  cl = cos(l),
                  p = e[1] / 2 * radians,
                  sp = sin(p),
                  cp = cos(p),
                  g = e[2] / 2 * radians,
                  sg = sin(g),
                  cg = cos(g);
                return [cl * cp * cg + sl * sp * sg, sl * cp * cg - cl * sp * sg, cl * sp * cg + sl * cp * sg, cl * cp * sg - sl * sp * cg];
              }
              versor.cartesian = function (e) {
                var l = e[0] * radians,
                  p = e[1] * radians,
                  cp = cos(p);
                return [cp * cos(l), cp * sin(l), sin(p)];
              };
              versor.rotation = function (q) {
                return [atan2(2 * (q[0] * q[1] + q[2] * q[3]), 1 - 2 * (q[1] * q[1] + q[2] * q[2])) * degrees, asin(max(-1, min(1, 2 * (q[0] * q[2] - q[3] * q[1])))) * degrees, atan2(2 * (q[0] * q[3] + q[1] * q[2]), 1 - 2 * (q[2] * q[2] + q[3] * q[3])) * degrees];
              };
              versor.delta = function (v0, v1) {
                var w = cross(v0, v1),
                  l = sqrt(dot(w, w));
                if (!l) return [1, 0, 0, 0];
                var t = acos(max(-1, min(1, dot(v0, v1)))) / 2,
                  s = sin(t);
                return [cos(t), w[2] / l * s, -w[1] / l * s, w[0] / l * s];
              };
              versor.multiply = function (q0, q1) {
                return [q0[0] * q1[0] - q0[1] * q1[1] - q0[2] * q1[2] - q0[3] * q1[3], q0[0] * q1[1] + q0[1] * q1[0] + q0[2] * q1[3] - q0[3] * q1[2], q0[0] * q1[2] - q0[1] * q1[3] + q0[2] * q1[0] + q0[3] * q1[1], q0[0] * q1[3] + q0[1] * q1[2] - q0[2] * q1[1] + q0[3] * q1[0]];
              };
              function cross(v0, v1) {
                return [v0[1] * v1[2] - v0[2] * v1[1], v0[2] * v1[0] - v0[0] * v1[2], v0[0] * v1[1] - v0[1] * v1[0]];
              }
              function dot(v0, v1) {
                return v0[0] * v1[0] + v0[1] * v1[1] + v0[2] * v1[2];
              }
              return versor;
            });
            (function () {
              var MutationObserver,
                Util,
                WeakMap,
                getComputedStyle2,
                getComputedStyleRX,
                bind = function (fn, me) {
                  return function () {
                    return fn.apply(me, arguments);
                  };
                },
                indexOf = [].indexOf || function (item) {
                  for (var i = 0, l = this.length; i < l; i++) {
                    if (i in this && this[i] === item) return i;
                  }
                  return -1;
                };
              Util = function () {
                function Util2() {}
                Util2.prototype.extend = function (custom, defaults) {
                  var key, value;
                  for (key in defaults) {
                    value = defaults[key];
                    if (custom[key] == null) {
                      custom[key] = value;
                    }
                  }
                  return custom;
                };
                Util2.prototype.isMobile = function (agent) {
                  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
                };
                Util2.prototype.createEvent = function (event2, bubble, cancel, detail) {
                  var customEvent;
                  if (bubble == null) {
                    bubble = false;
                  }
                  if (cancel == null) {
                    cancel = false;
                  }
                  if (detail == null) {
                    detail = null;
                  }
                  if (document.createEvent != null) {
                    customEvent = document.createEvent("CustomEvent");
                    customEvent.initCustomEvent(event2, bubble, cancel, detail);
                  } else if (document.createEventObject != null) {
                    customEvent = document.createEventObject();
                    customEvent.eventType = event2;
                  } else {
                    customEvent.eventName = event2;
                  }
                  return customEvent;
                };
                Util2.prototype.emitEvent = function (elem, event2) {
                  if (elem.dispatchEvent != null) {
                    return elem.dispatchEvent(event2);
                  } else if (event2 in (elem != null)) {
                    return elem[event2]();
                  } else if ("on" + event2 in (elem != null)) {
                    return elem["on" + event2]();
                  }
                };
                Util2.prototype.addEvent = function (elem, event2, fn) {
                  if (elem.addEventListener != null) {
                    return elem.addEventListener(event2, fn, false);
                  } else if (elem.attachEvent != null) {
                    return elem.attachEvent("on" + event2, fn);
                  } else {
                    return elem[event2] = fn;
                  }
                };
                Util2.prototype.removeEvent = function (elem, event2, fn) {
                  if (elem.removeEventListener != null) {
                    return elem.removeEventListener(event2, fn, false);
                  } else if (elem.detachEvent != null) {
                    return elem.detachEvent("on" + event2, fn);
                  } else {
                    return delete elem[event2];
                  }
                };
                Util2.prototype.innerHeight = function () {
                  if ("innerHeight" in window) {
                    return window.innerHeight;
                  } else {
                    return document.documentElement.clientHeight;
                  }
                };
                return Util2;
              }();
              WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = function () {
                function WeakMap2() {
                  this.keys = [];
                  this.values = [];
                }
                WeakMap2.prototype.get = function (key) {
                  var i, item, j, len, ref;
                  ref = this.keys;
                  for (i = j = 0, len = ref.length; j < len; i = ++j) {
                    item = ref[i];
                    if (item === key) {
                      return this.values[i];
                    }
                  }
                };
                WeakMap2.prototype.set = function (key, value) {
                  var i, item, j, len, ref;
                  ref = this.keys;
                  for (i = j = 0, len = ref.length; j < len; i = ++j) {
                    item = ref[i];
                    if (item === key) {
                      this.values[i] = value;
                      return;
                    }
                  }
                  this.keys.push(key);
                  return this.values.push(value);
                };
                return WeakMap2;
              }());
              MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = function () {
                function MutationObserver2() {
                  if (typeof console !== "undefined" && console !== null) {
                    console.warn("MutationObserver is not supported by your browser.");
                  }
                  if (typeof console !== "undefined" && console !== null) {
                    console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
                  }
                }
                MutationObserver2.notSupported = true;
                MutationObserver2.prototype.observe = function () {};
                return MutationObserver2;
              }());
              getComputedStyle2 = this.getComputedStyle || function (el, pseudo) {
                this.getPropertyValue = function (prop) {
                  var ref;
                  if (prop === "float") {
                    prop = "styleFloat";
                  }
                  if (getComputedStyleRX.test(prop)) {
                    prop.replace(getComputedStyleRX, function (_, _char) {
                      return _char.toUpperCase();
                    });
                  }
                  return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
                };
                return this;
              };
              getComputedStyleRX = /(\-([a-z]){1})/g;
              this.WOW = function () {
                WOW.prototype.defaults = {
                  boxClass: "wow",
                  animateClass: "animated",
                  offset: 0,
                  mobile: true,
                  live: true,
                  callback: null
                };
                function WOW(options2) {
                  if (options2 == null) {
                    options2 = {};
                  }
                  this.scrollCallback = bind(this.scrollCallback, this);
                  this.scrollHandler = bind(this.scrollHandler, this);
                  this.resetAnimation = bind(this.resetAnimation, this);
                  this.start = bind(this.start, this);
                  this.scrolled = true;
                  this.config = this.util().extend(options2, this.defaults);
                  this.animationNameCache = new WeakMap();
                  this.wowEvent = this.util().createEvent(this.config.boxClass);
                }
                WOW.prototype.init = function () {
                  var ref;
                  this.element = window.document.documentElement;
                  if ((ref = document.readyState) === "interactive" || ref === "complete") {
                    this.start();
                  } else {
                    this.util().addEvent(document, "DOMContentLoaded", this.start);
                  }
                  return this.finished = [];
                };
                WOW.prototype.start = function () {
                  var box, j, len, ref;
                  this.stopped = false;
                  this.boxes = function () {
                    var j2, len2, ref2, results;
                    ref2 = this.element.querySelectorAll("." + this.config.boxClass);
                    results = [];
                    for (j2 = 0, len2 = ref2.length; j2 < len2; j2++) {
                      box = ref2[j2];
                      results.push(box);
                    }
                    return results;
                  }.call(this);
                  this.all = function () {
                    var j2, len2, ref2, results;
                    ref2 = this.boxes;
                    results = [];
                    for (j2 = 0, len2 = ref2.length; j2 < len2; j2++) {
                      box = ref2[j2];
                      results.push(box);
                    }
                    return results;
                  }.call(this);
                  if (this.boxes.length) {
                    if (this.disabled()) {
                      this.resetStyle();
                    } else {
                      ref = this.boxes;
                      for (j = 0, len = ref.length; j < len; j++) {
                        box = ref[j];
                        this.applyStyle(box, true);
                      }
                    }
                  }
                  if (!this.disabled()) {
                    this.util().addEvent(window, "scroll", this.scrollHandler);
                    this.util().addEvent(window, "resize", this.scrollHandler);
                    this.interval = setInterval(this.scrollCallback, 50);
                  }
                  if (this.config.live) {
                    return new MutationObserver(/* @__PURE__ */function (_this) {
                      return function (records) {
                        var k, len1, node, record, results;
                        results = [];
                        for (k = 0, len1 = records.length; k < len1; k++) {
                          record = records[k];
                          results.push(function () {
                            var l, len2, ref1, results1;
                            ref1 = record.addedNodes || [];
                            results1 = [];
                            for (l = 0, len2 = ref1.length; l < len2; l++) {
                              node = ref1[l];
                              results1.push(this.doSync(node));
                            }
                            return results1;
                          }.call(_this));
                        }
                        return results;
                      };
                    }(this)).observe(document.body, {
                      childList: true,
                      subtree: true
                    });
                  }
                };
                WOW.prototype.stop = function () {
                  this.stopped = true;
                  this.util().removeEvent(window, "scroll", this.scrollHandler);
                  this.util().removeEvent(window, "resize", this.scrollHandler);
                  if (this.interval != null) {
                    return clearInterval(this.interval);
                  }
                };
                WOW.prototype.sync = function (element) {
                  if (MutationObserver.notSupported) {
                    return this.doSync(this.element);
                  }
                };
                WOW.prototype.doSync = function (element) {
                  var box, j, len, ref, results;
                  if (element == null) {
                    element = this.element;
                  }
                  if (element.nodeType !== 1) {
                    return;
                  }
                  element = element.parentNode || element;
                  ref = element.querySelectorAll("." + this.config.boxClass);
                  results = [];
                  for (j = 0, len = ref.length; j < len; j++) {
                    box = ref[j];
                    if (indexOf.call(this.all, box) < 0) {
                      this.boxes.push(box);
                      this.all.push(box);
                      if (this.stopped || this.disabled()) {
                        this.resetStyle();
                      } else {
                        this.applyStyle(box, true);
                      }
                      results.push(this.scrolled = true);
                    } else {
                      results.push(void 0);
                    }
                  }
                  return results;
                };
                WOW.prototype.show = function (box) {
                  this.applyStyle(box);
                  box.className = box.className + " " + this.config.animateClass;
                  if (this.config.callback != null) {
                    this.config.callback(box);
                  }
                  this.util().emitEvent(box, this.wowEvent);
                  this.util().addEvent(box, "animationend", this.resetAnimation);
                  this.util().addEvent(box, "oanimationend", this.resetAnimation);
                  this.util().addEvent(box, "webkitAnimationEnd", this.resetAnimation);
                  this.util().addEvent(box, "MSAnimationEnd", this.resetAnimation);
                  return box;
                };
                WOW.prototype.applyStyle = function (box, hidden) {
                  var delay, duration, iteration;
                  duration = box.getAttribute("data-wow-duration");
                  delay = box.getAttribute("data-wow-delay");
                  iteration = box.getAttribute("data-wow-iteration");
                  return this.animate(/* @__PURE__ */function (_this) {
                    return function () {
                      return _this.customStyle(box, hidden, duration, delay, iteration);
                    };
                  }(this));
                };
                WOW.prototype.animate = function () {
                  if ("requestAnimationFrame" in window) {
                    return function (callback) {
                      return window.requestAnimationFrame(callback);
                    };
                  } else {
                    return function (callback) {
                      return callback();
                    };
                  }
                }();
                WOW.prototype.resetStyle = function () {
                  var box, j, len, ref, results;
                  ref = this.boxes;
                  results = [];
                  for (j = 0, len = ref.length; j < len; j++) {
                    box = ref[j];
                    results.push(box.style.visibility = "visible");
                  }
                  return results;
                };
                WOW.prototype.resetAnimation = function (event2) {
                  var target;
                  if (event2.type.toLowerCase().indexOf("animationend") >= 0) {
                    target = event2.target || event2.srcElement;
                    return target.className = target.className.replace(this.config.animateClass, "").trim();
                  }
                };
                WOW.prototype.customStyle = function (box, hidden, duration, delay, iteration) {
                  if (hidden) {
                    this.cacheAnimationName(box);
                  }
                  box.style.visibility = hidden ? "hidden" : "visible";
                  if (duration) {
                    this.vendorSet(box.style, {
                      animationDuration: duration
                    });
                  }
                  if (delay) {
                    this.vendorSet(box.style, {
                      animationDelay: delay
                    });
                  }
                  if (iteration) {
                    this.vendorSet(box.style, {
                      animationIterationCount: iteration
                    });
                  }
                  this.vendorSet(box.style, {
                    animationName: hidden ? "none" : this.cachedAnimationName(box)
                  });
                  return box;
                };
                WOW.prototype.vendors = ["moz", "webkit"];
                WOW.prototype.vendorSet = function (elem, properties) {
                  var name, results, value, vendor;
                  results = [];
                  for (name in properties) {
                    value = properties[name];
                    elem["" + name] = value;
                    results.push(function () {
                      var j, len, ref, results1;
                      ref = this.vendors;
                      results1 = [];
                      for (j = 0, len = ref.length; j < len; j++) {
                        vendor = ref[j];
                        results1.push(elem["" + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value);
                      }
                      return results1;
                    }.call(this));
                  }
                  return results;
                };
                WOW.prototype.vendorCSS = function (elem, property2) {
                  var j, len, ref, result, style, vendor;
                  style = getComputedStyle2(elem);
                  result = style.getPropertyCSSValue(property2);
                  ref = this.vendors;
                  for (j = 0, len = ref.length; j < len; j++) {
                    vendor = ref[j];
                    result = result || style.getPropertyCSSValue("-" + vendor + "-" + property2);
                  }
                  return result;
                };
                WOW.prototype.animationName = function (box) {
                  var animationName;
                  try {
                    animationName = this.vendorCSS(box, "animation-name").cssText;
                  } catch (_error) {
                    animationName = getComputedStyle2(box).getPropertyValue("animation-name");
                  }
                  if (animationName === "none") {
                    return "";
                  } else {
                    return animationName;
                  }
                };
                WOW.prototype.cacheAnimationName = function (box) {
                  return this.animationNameCache.set(box, this.animationName(box));
                };
                WOW.prototype.cachedAnimationName = function (box) {
                  return this.animationNameCache.get(box);
                };
                WOW.prototype.scrollHandler = function () {
                  return this.scrolled = true;
                };
                WOW.prototype.scrollCallback = function () {
                  var box;
                  if (this.scrolled) {
                    this.scrolled = false;
                    this.boxes = function () {
                      var j, len, ref, results;
                      ref = this.boxes;
                      results = [];
                      for (j = 0, len = ref.length; j < len; j++) {
                        box = ref[j];
                        if (!box) {
                          continue;
                        }
                        if (this.isVisible(box)) {
                          this.show(box);
                          continue;
                        }
                        results.push(box);
                      }
                      return results;
                    }.call(this);
                    if (!(this.boxes.length || this.config.live)) {
                      return this.stop();
                    }
                  }
                };
                WOW.prototype.offsetTop = function (element) {
                  var top2;
                  while (element.offsetTop === void 0) {
                    element = element.parentNode;
                  }
                  top2 = element.offsetTop;
                  while (element = element.offsetParent) {
                    top2 += element.offsetTop;
                  }
                  return top2;
                };
                WOW.prototype.isVisible = function (box) {
                  var bottom, offset, top2, viewBottom, viewTop;
                  offset = box.getAttribute("data-wow-offset") || this.config.offset;
                  viewTop = window.pageYOffset;
                  viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
                  top2 = this.offsetTop(box);
                  bottom = top2 + box.clientHeight;
                  return top2 <= viewBottom && bottom >= viewTop;
                };
                WOW.prototype.util = function () {
                  return this._util != null ? this._util : this._util = new Util();
                };
                WOW.prototype.disabled = function () {
                  return !this.config.mobile && this.util().isMobile(navigator.userAgent);
                };
                return WOW;
              }();
            }).call(void 0);
          }
        });
        require_vendor();
      }
    };
  });
})();
