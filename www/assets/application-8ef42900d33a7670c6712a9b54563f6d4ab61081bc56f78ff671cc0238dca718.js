function initializeMap() {
    var e = "31.455118",
        t = "74.366717",
        n = t - .001,
        i = {
            scrollwheel: !1,
            draggable: !0,
            disableDefaultUI: !0,
            center: new google.maps.LatLng(e, n),
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        r = new google.maps.Map(document.getElementById("map-canvas"), i);
    new google.maps.Marker({
        map: r,
        icon: "http://suavistech.com/assets/favicon-b7ed2f228fc9287add13b48e89dda8991515d88aaed48c31a6e5fdfd70dc66e5.ico",
        position: new google.maps.LatLng(e, t)
    })
}(function() {
    var e = this;
    (function() {
        (function() {
            this.Rails = {
                linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
                buttonClickSelector: {
                    selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                    exclude: "form button"
                },
                inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                formSubmitSelector: "form",
                formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                fileInputSelector: "input[name][type=file]:not([disabled])",
                linkDisableSelector: "a[data-disable-with], a[data-disable]",
                buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
            }
        }).call(this)
    }).call(e);
    var t = e.Rails;
    (function() {
        (function() {
            var e, n;
            n = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector, t.matches = function(e, t) {
                return null != t.exclude ? n.call(e, t.selector) && !n.call(e, t.exclude) : n.call(e, t)
            }, e = "_ujsData", t.getData = function(t, n) {
                var i;
                return null != (i = t[e]) ? i[n] : void 0
            }, t.setData = function(t, n, i) {
                return null == t[e] && (t[e] = {}), t[e][n] = i
            }, t.$ = function(e) {
                return Array.prototype.slice.call(document.querySelectorAll(e))
            }
        }).call(this),
            function() {
                var e, n, i;
                e = t.$, i = t.csrfToken = function() {
                    var e;
                    return (e = document.querySelector("meta[name=csrf-token]")) && e.content
                }, n = t.csrfParam = function() {
                    var e;
                    return (e = document.querySelector("meta[name=csrf-param]")) && e.content
                }, t.CSRFProtection = function(e) {
                    var t;
                    if (null != (t = i())) return e.setRequestHeader("X-CSRF-Token", t)
                }, t.refreshCSRFTokens = function() {
                    var t, r;
                    if (r = i(), t = n(), null != r && null != t) return e('form input[name="' + t + '"]').forEach(function(e) {
                        return e.value = r
                    })
                }
            }.call(this),
            function() {
                var e, n, i;
                i = t.matches, e = window.CustomEvent, "function" != typeof e && (e = function(e, t) {
                    var n;
                    return n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                }, e.prototype = window.Event.prototype), n = t.fire = function(t, n, i) {
                    var r;
                    return r = new e(n, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: i
                    }), t.dispatchEvent(r), !r.defaultPrevented
                }, t.stopEverything = function(e) {
                    return n(e.target, "ujs:everythingStopped"), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
                }, t.delegate = function(e, t, n, r) {
                    return e.addEventListener(n, function(e) {
                        var n;
                        for (n = e.target; n instanceof Element && !i(n, t);) n = n.parentNode;
                        if (n instanceof Element && !1 === r.call(n, e)) return e.preventDefault(), e.stopPropagation()
                    })
                }
            }.call(this),
            function() {
                var e, n, i, r, o, s;
                n = t.CSRFProtection, r = t.fire, e = {
                    "*": "*/*",
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                }, t.ajax = function(e) {
                    var t;
                    return e = o(e), t = i(e, function() {
                        var n;
                        return n = s(t.response, t.getResponseHeader("Content-Type")), 2 === Math.floor(t.status / 100) ? "function" == typeof e.success && e.success(n, t.statusText, t) : "function" == typeof e.error && e.error(n, t.statusText, t), "function" == typeof e.complete ? e.complete(t, t.statusText) : void 0
                    }), "function" == typeof e.beforeSend && e.beforeSend(t, e), t.readyState === XMLHttpRequest.OPENED ? t.send(e.data) : r(document, "ajaxStop")
                }, o = function(t) {
                    return t.url = t.url || location.href, t.type = t.type.toUpperCase(), "GET" === t.type && t.data && (t.url.indexOf("?") < 0 ? t.url += "?" + t.data : t.url += "&" + t.data), null == e[t.dataType] && (t.dataType = "*"), t.accept = e[t.dataType], "*" !== t.dataType && (t.accept += ", */*; q=0.01"), t
                }, i = function(e, t) {
                    var i;
                    return i = new XMLHttpRequest, i.open(e.type, e.url, !0), i.setRequestHeader("Accept", e.accept), "string" == typeof e.data && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), e.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n(i), i.withCredentials = !!e.withCredentials, i.onreadystatechange = function() {
                        if (i.readyState === XMLHttpRequest.DONE) return t(i)
                    }, i
                }, s = function(e, t) {
                    var n, i;
                    if ("string" == typeof e && "string" == typeof t)
                        if (t.match(/\bjson\b/)) try {
                                e = JSON.parse(e)
                            } catch (e) {} else if (t.match(/\b(?:java|ecma)script\b/)) i = document.createElement("script"), i.text = e, document.head.appendChild(i).parentNode.removeChild(i);
                            else if (t.match(/\b(xml|html|svg)\b/)) {
                        n = new DOMParser, t = t.replace(/;.+/, "");
                        try {
                            e = n.parseFromString(e, t)
                        } catch (e) {}
                    }
                    return e
                }, t.href = function(e) {
                    return e.href
                }, t.isCrossDomain = function(e) {
                    var t, n;
                    t = document.createElement("a"), t.href = location.href, n = document.createElement("a");
                    try {
                        return n.href = e, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                    } catch (e) {
                        return e, !0
                    }
                }
            }.call(this),
            function() {
                var e, n;
                e = t.matches, n = function(e) {
                    return Array.prototype.slice.call(e)
                }, t.serializeElement = function(t, i) {
                    var r, o;
                    return r = [t], e(t, "form") && (r = n(t.elements)), o = [], r.forEach(function(t) {
                        if (t.name) return e(t, "select") ? n(t.options).forEach(function(e) {
                            if (e.selected) return o.push({
                                name: t.name,
                                value: e.value
                            })
                        }) : t.checked || -1 === ["radio", "checkbox", "submit"].indexOf(t.type) ? o.push({
                            name: t.name,
                            value: t.value
                        }) : void 0
                    }), i && o.push(i), o.map(function(e) {
                        return null != e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : e
                    }).join("&")
                }, t.formElements = function(t, i) {
                    return e(t, "form") ? n(t.elements).filter(function(t) {
                        return e(t, i)
                    }) : n(t.querySelectorAll(i))
                }
            }.call(this),
            function() {
                var e, n, i;
                n = t.fire, i = t.stopEverything, t.handleConfirm = function(t) {
                    if (!e(this)) return i(t)
                }, e = function(e) {
                    var t, i, r;
                    if (!(r = e.getAttribute("data-confirm"))) return !0;
                    if (t = !1, n(e, "confirm")) {
                        try {
                            t = confirm(r)
                        } catch (e) {}
                        i = n(e, "confirm:complete", [t])
                    }
                    return t && i
                }
            }.call(this),
            function() {
                var e, n, i, r, o, s, a, l, c, u, d;
                c = t.matches, l = t.getData, u = t.setData, d = t.stopEverything, a = t.formElements, t.handleDisabledElement = function(e) {
                    var t;
                    if (t = this, t.disabled) return d(e)
                }, t.enableElement = function(e) {
                    var n;
                    return n = e instanceof Event ? e.target : e, c(n, t.linkDisableSelector) ? s(n) : c(n, t.buttonDisableSelector) || c(n, t.formEnableSelector) ? r(n) : c(n, t.formSubmitSelector) ? o(n) : void 0
                }, t.disableElement = function(r) {
                    var o;
                    return o = r instanceof Event ? r.target : r, c(o, t.linkDisableSelector) ? i(o) : c(o, t.buttonDisableSelector) || c(o, t.formDisableSelector) ? e(o) : c(o, t.formSubmitSelector) ? n(o) : void 0
                }, i = function(e) {
                    var t;
                    return t = e.getAttribute("data-disable-with"), null != t && (u(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t), e.addEventListener("click", d), u(e, "ujs:disabled", !0)
                }, s = function(e) {
                    var t;
                    return t = l(e, "ujs:enable-with"), null != t && (e.innerHTML = t, u(e, "ujs:enable-with", null)), e.removeEventListener("click", d), u(e, "ujs:disabled", null)
                }, n = function(n) {
                    return a(n, t.formDisableSelector).forEach(e)
                }, e = function(e) {
                    var t;
                    return t = e.getAttribute("data-disable-with"), null != t && (c(e, "button") ? (u(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t) : (u(e, "ujs:enable-with", e.value), e.value = t)), e.disabled = !0, u(e, "ujs:disabled", !0)
                }, o = function(e) {
                    return a(e, t.formEnableSelector).forEach(r)
                }, r = function(e) {
                    var t;
                    return t = l(e, "ujs:enable-with"), null != t && (c(e, "button") ? e.innerHTML = t : e.value = t, u(e, "ujs:enable-with", null)), e.disabled = !1, u(e, "ujs:disabled", null)
                }
            }.call(this),
            function() {
                var e;
                e = t.stopEverything, t.handleMethod = function(n) {
                    var i, r, o, s, a, l, c;
                    if (l = this, c = l.getAttribute("data-method")) return a = t.href(l), r = t.csrfToken(), i = t.csrfParam(), o = document.createElement("form"), s = "<input name='_method' value='" + c + "' type='hidden' />", null == i || null == r || t.isCrossDomain(a) || (s += "<input name='" + i + "' value='" + r + "' type='hidden' />"), s += '<input type="submit" />', o.method = "post", o.action = a, o.target = l.target, o.innerHTML = s, o.style.display = "none", document.body.appendChild(o), o.querySelector('[type="submit"]').click(), e(n)
                }
            }.call(this),
            function() {
                var e, n, i, r, o, s, a, l, c, u = [].slice;
                s = t.matches, i = t.getData, l = t.setData, n = t.fire, c = t.stopEverything, e = t.ajax, r = t.isCrossDomain, a = t.serializeElement, o = function(e) {
                    var t;
                    return null != (t = e.getAttribute("data-remote")) && "false" !== t
                }, t.handleRemote = function(d) {
                    var f, p, h, m, g, v, y;
                    return m = this, !o(m) || (n(m, "ajax:before") ? (y = m.getAttribute("data-with-credentials"), h = m.getAttribute("data-type") || "script", s(m, t.formSubmitSelector) ? (f = i(m, "ujs:submit-button"), g = i(m, "ujs:submit-button-formmethod") || m.method, v = i(m, "ujs:submit-button-formaction") || m.getAttribute("action") || location.href, "GET" === g.toUpperCase() && (v = v.replace(/\?.*$/, "")), "multipart/form-data" === m.enctype ? (p = new FormData(m), null != f && p.append(f.name, f.value)) : p = a(m, f), l(m, "ujs:submit-button", null), l(m, "ujs:submit-button-formmethod", null), l(m, "ujs:submit-button-formaction", null)) : s(m, t.buttonClickSelector) || s(m, t.inputChangeSelector) ? (g = m.getAttribute("data-method"), v = m.getAttribute("data-url"), p = a(m, m.getAttribute("data-params"))) : (g = m.getAttribute("data-method"), v = t.href(m), p = m.getAttribute("data-params")), e({
                        type: g || "GET",
                        url: v,
                        data: p,
                        dataType: h,
                        beforeSend: function(e, t) {
                            return n(m, "ajax:beforeSend", [e, t]) ? n(m, "ajax:send", [e]) : (n(m, "ajax:stopped"), e.abort())
                        },
                        success: function() {
                            var e;
                            return e = 1 <= arguments.length ? u.call(arguments, 0) : [], n(m, "ajax:success", e)
                        },
                        error: function() {
                            var e;
                            return e = 1 <= arguments.length ? u.call(arguments, 0) : [], n(m, "ajax:error", e)
                        },
                        complete: function() {
                            var e;
                            return e = 1 <= arguments.length ? u.call(arguments, 0) : [], n(m, "ajax:complete", e)
                        },
                        crossDomain: r(v),
                        withCredentials: null != y && "false" !== y
                    }), c(d)) : (n(m, "ajax:stopped"), !1))
                }, t.formSubmitButtonClick = function() {
                    var e, t;
                    if (e = this, t = e.form) return e.name && l(t, "ujs:submit-button", {
                        name: e.name,
                        value: e.value
                    }), l(t, "ujs:formnovalidate-button", e.formNoValidate), l(t, "ujs:submit-button-formaction", e.getAttribute("formaction")), l(t, "ujs:submit-button-formmethod", e.getAttribute("formmethod"))
                }, t.handleMetaClick = function(e) {
                    var t, n, i;
                    if (n = this, i = (n.getAttribute("data-method") || "GET").toUpperCase(), t = n.getAttribute("data-params"), (e.metaKey || e.ctrlKey) && "GET" === i && !t) return e.stopImmediatePropagation()
                }
            }.call(this),
            function() {
                var e, n, i, r, o, s, a, l, c, u, d, f, p, h;
                s = t.fire, i = t.delegate, l = t.getData, e = t.$, h = t.refreshCSRFTokens, n = t.CSRFProtection, o = t.enableElement, r = t.disableElement, u = t.handleDisabledElement, c = t.handleConfirm, p = t.handleRemote, a = t.formSubmitButtonClick, d = t.handleMetaClick, f = t.handleMethod, "undefined" == typeof jQuery || null === jQuery || null == jQuery.ajax || jQuery.rails || (jQuery.rails = t, jQuery.ajaxPrefilter(function(e, t, i) {
                    if (!e.crossDomain) return n(i)
                })), t.start = function() {
                    if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!");
                    return window.addEventListener("pageshow", function() {
                        return e(t.formEnableSelector).forEach(function(e) {
                            if (l(e, "ujs:disabled")) return o(e)
                        }), e(t.linkDisableSelector).forEach(function(e) {
                            if (l(e, "ujs:disabled")) return o(e)
                        })
                    }), i(document, t.linkDisableSelector, "ajax:complete", o), i(document, t.linkDisableSelector, "ajax:stopped", o), i(document, t.buttonDisableSelector, "ajax:complete", o), i(document, t.buttonDisableSelector, "ajax:stopped", o), i(document, t.linkClickSelector, "click", u), i(document, t.linkClickSelector, "click", c), i(document, t.linkClickSelector, "click", d), i(document, t.linkClickSelector, "click", r), i(document, t.linkClickSelector, "click", p), i(document, t.linkClickSelector, "click", f), i(document, t.buttonClickSelector, "click", u), i(document, t.buttonClickSelector, "click", c), i(document, t.buttonClickSelector, "click", r), i(document, t.buttonClickSelector, "click", p), i(document, t.inputChangeSelector, "change", u), i(document, t.inputChangeSelector, "change", c), i(document, t.inputChangeSelector, "change", p), i(document, t.formSubmitSelector, "submit", u), i(document, t.formSubmitSelector, "submit", c), i(document, t.formSubmitSelector, "submit", p), i(document, t.formSubmitSelector, "submit", function(e) {
                        return setTimeout(function() {
                            return r(e)
                        }, 13)
                    }), i(document, t.formSubmitSelector, "ajax:send", r), i(document, t.formSubmitSelector, "ajax:complete", o), i(document, t.formInputClickSelector, "click", u), i(document, t.formInputClickSelector, "click", c), i(document, t.formInputClickSelector, "click", a), document.addEventListener("DOMContentLoaded", h), window._rails_loaded = !0
                }, window.Rails === t && s(document, "rails:attachBindings") && t.start()
            }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
}).call(this),
    function(e, t) {
        function n(e) {
            var t = he[e] = {};
            return K.each(e.split(te), function(e, n) {
                t[n] = !0
            }), t
        }

        function i(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var r = "data-" + n.replace(ge, "-$1").toLowerCase();
                if ("string" == typeof(i = e.getAttribute(r))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : me.test(i) ? K.parseJSON(i) : i)
                    } catch (e) {}
                    K.data(e, n, i)
                } else i = t
            }
            return i
        }

        function r(e) {
            var t;
            for (t in e)
                if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function o() {
            return !1
        }

        function s() {
            return !0
        }

        function a(e) {
            return !e || !e.parentNode || 11 === e.parentNode.nodeType
        }

        function l(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function c(e, t, n) {
            if (t = t || 0, K.isFunction(t)) return K.grep(e, function(e, i) {
                return !!t.call(e, i, e) === n
            });
            if (t.nodeType) return K.grep(e, function(e) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var i = K.grep(e, function(e) {
                    return 1 === e.nodeType
                });
                if (He.test(t)) return K.filter(t, i, !n);
                t = K.filter(t, i)
            }
            return K.grep(e, function(e) {
                return K.inArray(e, t) >= 0 === n
            })
        }

        function u(e) {
            var t = _e.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function d(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function f(e, t) {
            if (1 === t.nodeType && K.hasData(e)) {
                var n, i, r, o = K._data(e),
                    s = K._data(t, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; i < r; i++) K.event.add(t, n, a[n][i])
                }
                s.data && (s.data = K.extend({}, s.data))
            }
        }

        function p(e, t) {
            var n;
            1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ue.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(K.expando))
        }

        function h(e) {
            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
        }

        function m(e) {
            Ue.test(e.type) && (e.defaultChecked = e.checked)
        }

        function g(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = vt.length; r--;)
                if ((t = vt[r] + n) in e) return t;
            return i
        }

        function v(e, t) {
            return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
        }

        function y(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++) n = e[o], n.style && (r[o] = K._data(n, "olddisplay"), t ? (!r[o] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && v(n) && (r[o] = K._data(n, "olddisplay", C(n.nodeName)))) : (i = nt(n, "display"), !r[o] && "none" !== i && K._data(n, "olddisplay", i)));
            for (o = 0; o < s; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
            return e
        }

        function b(e, t, n) {
            var i = ut.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function x(e, t, n, i) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; r < 4; r += 2) "margin" === n && (o += K.css(e, n + gt[r], !0)), i ? ("content" === n && (o -= parseFloat(nt(e, "padding" + gt[r])) || 0), "margin" !== n && (o -= parseFloat(nt(e, "border" + gt[r] + "Width")) || 0)) : (o += parseFloat(nt(e, "padding" + gt[r])) || 0, "padding" !== n && (o += parseFloat(nt(e, "border" + gt[r] + "Width")) || 0));
            return o
        }

        function w(e, t, n) {
            var i = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = !0,
                o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
            if (i <= 0 || null == i) {
                if (i = nt(e, t), (i < 0 || null == i) && (i = e.style[t]), dt.test(i)) return i;
                r = o && (K.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + x(e, t, n || (o ? "border" : "content"), r) + "px"
        }

        function C(e) {
            if (pt[e]) return pt[e];
            var t = K("<" + e + ">").appendTo(z.body),
                n = t.css("display");
            return t.remove(), "none" !== n && "" !== n || (it = z.body.appendChild(it || K.extend(z.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            })), rt && it.createElement || (rt = (it.contentWindow || it.contentDocument).document, rt.write("<!doctype html><html><body>"), rt.close()), t = rt.body.appendChild(rt.createElement(e)), n = nt(t, "display"), z.body.removeChild(it)), pt[e] = n, n
        }

        function S(e, t, n, i) {
            var r;
            if (K.isArray(t)) K.each(t, function(t, r) {
                n || xt.test(e) ? i(e, r) : S(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== K.type(t)) i(e, t);
            else
                for (r in t) S(e + "[" + r + "]", t[r], n, i)
        }

        function T(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r, o, s = t.toLowerCase().split(te),
                    a = 0,
                    l = s.length;
                if (K.isFunction(n))
                    for (; a < l; a++) i = s[a], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[o ? "unshift" : "push"](n)
            }
        }

        function k(e, n, i, r, o, s) {
            o = o || n.dataTypes[0], s = s || {}, s[o] = !0;
            for (var a, l = e[o], c = 0, u = l ? l.length : 0, d = e === Ht; c < u && (d || !a); c++) "string" == typeof(a = l[c](n, i, r)) && (!d || s[a] ? a = t : (n.dataTypes.unshift(a), a = k(e, n, i, r, a, s)));
            return (d || !a) && !s["*"] && (a = k(e, n, i, r, "*", s)), a
        }

        function E(e, n) {
            var i, r, o = K.ajaxSettings.flatOptions || {};
            for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
            r && K.extend(!0, e, r)
        }

        function j(e, n, i) {
            var r, o, s, a, l = e.contents,
                c = e.dataTypes,
                u = e.responseFields;
            for (o in u) o in i && (n[u[o]] = i[o]);
            for (;
                "*" === c[0];) c.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
            if (r)
                for (o in l)
                    if (l[o] && l[o].test(r)) {
                        c.unshift(o);
                        break
                    } if (c[0] in i) s = c[0];
            else {
                for (o in i) {
                    if (!c[0] || e.converters[o + " " + c[0]]) {
                        s = o;
                        break
                    }
                    a || (a = o)
                }
                s = s || a
            }
            if (s) return s !== c[0] && c.unshift(s), i[s]
        }

        function N(e, t) {
            var n, i, r, o, s = e.dataTypes.slice(),
                a = s[0],
                l = {},
                c = 0;
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), s[1])
                for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
            for (; r = s[++c];)
                if ("*" !== r) {
                    if ("*" !== a && a !== r) {
                        if (!(n = l[a + " " + r] || l["* " + r]))
                            for (i in l)
                                if (o = i.split(" "), o[1] === r && (n = l[a + " " + o[0]] || l["* " + o[0]])) {
                                    !0 === n ? n = l[i] : !0 !== l[i] && (r = o[0], s.splice(c--, 0, r));
                                    break
                                } if (!0 !== n)
                            if (n && e["throws"]) t = n(t);
                            else try {
                                t = n(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: n ? e : "No conversion from " + a + " to " + r
                                }
                            }
                    }
                    a = r
                } return {
                state: "success",
                data: t
            }
        }

        function $() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }

        function D() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function A() {
            return setTimeout(function() {
                Qt = t
            }, 0), Qt = K.now()
        }

        function L(e, t) {
            K.each(t, function(t, n) {
                for (var i = (Kt[t] || []).concat(Kt["*"]), r = 0, o = i.length; r < o; r++)
                    if (i[r].call(e, t, n)) return
            })
        }

        function M(e, t, n) {
            var i, r = 0,
                o = Jt.length,
                s = K.Deferred().always(function() {
                    delete a.elem
                }),
                a = function() {
                    for (var t = Qt || A(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), r = 0, o = l.tweens.length; r < o; r++) l.tweens[r].run(i);
                    return s.notifyWith(e, [l, i, n]), i < 1 && o ? n : (s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: K.extend({}, t),
                    opts: K.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Qt || A(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = K.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(i), i
                    },
                    stop: function(t) {
                        for (var n = 0, i = t ? l.tweens.length : 0; n < i; n++) l.tweens[n].run(1);
                        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (O(c, l.opts.specialEasing); r < o; r++)
                if (i = Jt[r].call(l, e, c, l.opts)) return i;
            return L(l, c), K.isFunction(l.opts.start) && l.opts.start.call(e, l), K.fx.timer(K.extend(a, {
                anim: l,
                queue: l.opts.queue,
                elem: e
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function O(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (i = K.camelCase(n), r = t[i], o = e[n], K.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = K.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function P(e, t, n) {
            var i, r, o, s, a, l, c, u, d = this,
                f = e.style,
                p = {},
                h = [],
                m = e.nodeType && v(e);
            n.queue || (c = K._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, u = c.empty.fire, c.empty.fire = function() {
                c.unqueued || u()
            }), c.unqueued++, d.always(function() {
                d.always(function() {
                    c.unqueued--, K.queue(e, "fx").length || c.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", K.support.shrinkWrapBlocks || d.done(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], Gt.exec(o)) {
                    if (delete t[i], o === (m ? "hide" : "show")) continue;
                    h.push(i)
                } if (s = h.length)
                for (a = K._data(e, "fxshow") || K._data(e, "fxshow", {}), m ? K(e).show() : d.done(function() {
                        K(e).hide()
                    }), d.done(function() {
                        var t;
                        K.removeData(e, "fxshow", !0);
                        for (t in p) K.style(e, t, p[t])
                    }), i = 0; i < s; i++) r = h[i], l = d.createTween(r, m ? a[r] : 0), p[r] = a[r] || K.style(e, r), r in a || (a[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }

        function H(e, t, n, i, r) {
            return new H.prototype.init(e, t, n, i, r)
        }

        function F(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = gt[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function q(e) {
            return K.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var _, I, z = e.document,
            W = e.location,
            R = e.navigator,
            B = e.jQuery,
            X = e.$,
            Q = Array.prototype.push,
            Y = Array.prototype.slice,
            G = Array.prototype.indexOf,
            U = Object.prototype.toString,
            V = Object.prototype.hasOwnProperty,
            J = String.prototype.trim,
            K = function(e, t) {
                return new K.fn.init(e, t, _)
            },
            Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            ee = /\S/,
            te = /\s+/,
            ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ie = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            oe = /^[\],:{}\s]*$/,
            se = /(?:^|:|,)(?:\s*\[)+/g,
            ae = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            le = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            ce = /^-ms-/,
            ue = /-([\da-z])/gi,
            de = function(e, t) {
                return (t + "").toUpperCase()
            },
            fe = function() {
                z.addEventListener ? (z.removeEventListener("DOMContentLoaded", fe, !1), K.ready()) : "complete" === z.readyState && (z.detachEvent("onreadystatechange", fe), K.ready())
            },
            pe = {};
        K.fn = K.prototype = {
            constructor: K,
            init: function(e, n, i) {
                var r, o, s;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if ("string" == typeof e) {
                    if ((r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ie.exec(e)) && (r[1] || !n)) {
                        if (r[1]) return n = n instanceof K ? n[0] : n, s = n && n.nodeType ? n.ownerDocument || n : z, e = K.parseHTML(r[1], s, !0), re.test(r[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0), K.merge(this, e);
                        if ((o = z.getElementById(r[2])) && o.parentNode) {
                            if (o.id !== r[2]) return i.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = z, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
                }
                return K.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
            },
            selector: "",
            jquery: "1.8.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return Y.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e, t, n) {
                var i = K.merge(this.constructor(), e);
                return i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
            },
            each: function(e, t) {
                return K.each(this, e, t)
            },
            ready: function(e) {
                return K.ready.promise().done(e), this
            },
            eq: function(e) {
                return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(Y.apply(this, arguments), "slice", Y.call(arguments).join(","))
            },
            map: function(e) {
                return this.pushStack(K.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Q,
            sort: [].sort,
            splice: [].splice
        }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function() {
            var e, n, i, r, o, s, a = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" != typeof a && !K.isFunction(a) && (a = {}), c === l && (a = this, --l); l < c; l++)
                if (null != (e = arguments[l]))
                    for (n in e) i = a[n], r = e[n], a !== r && (u && r && (K.isPlainObject(r) || (o = K.isArray(r))) ? (o ? (o = !1, s = i && K.isArray(i) ? i : []) : s = i && K.isPlainObject(i) ? i : {}, a[n] = K.extend(u, s, r)) : r !== t && (a[n] = r));
            return a
        }, K.extend({
            noConflict: function(t) {
                return e.$ === K && (e.$ = X), t && e.jQuery === K && (e.jQuery = B), K
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? K.readyWait++ : K.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--K.readyWait : !K.isReady) {
                    if (!z.body) return setTimeout(K.ready, 1);
                    K.isReady = !0, !0 !== e && --K.readyWait > 0 || (I.resolveWith(z, [K]), K.fn.trigger && K(z).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === K.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === K.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : pe[U.call(e)] || "object"
            },
            isPlainObject: function(e) {
                if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
                try {
                    if (e.constructor && !V.call(e, "constructor") && !V.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                var n;
                for (n in e);
                return n === t || V.call(e, n)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                var i;
                return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || z, (i = re.exec(e)) ? [t.createElement(i[1])] : (i = K.buildFragment([e], t, n ? null : []), K.merge([], (i.cacheable ? K.clone(i.fragment) : i.fragment).childNodes))) : null
            },
            parseJSON: function(t) {
                return t && "string" == typeof t ? (t = K.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : oe.test(t.replace(ae, "@").replace(le, "]").replace(se, "")) ? new Function("return " + t)() : void K.error("Invalid JSON: " + t)) : null
            },
            parseXML: function(n) {
                var i, r;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                } catch (e) {
                    i = t
                }
                return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + n), i
            },
            noop: function() {},
            globalEval: function(t) {
                t && ee.test(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(ce, "ms-").replace(ue, de)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, n, i) {
                var r, o = 0,
                    s = e.length,
                    a = s === t || K.isFunction(e);
                if (i)
                    if (a) {
                        for (r in e)
                            if (!1 === n.apply(e[r], i)) break
                    } else
                        for (; o < s && !1 !== n.apply(e[o++], i););
                else if (a) {
                    for (r in e)
                        if (!1 === n.call(e[r], r, e[r])) break
                } else
                    for (; o < s && !1 !== n.call(e[o], o, e[o++]););
                return e
            },
            trim: J && !J.call("\ufeff ") ? function(e) {
                return null == e ? "" : J.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(ne, "")
            },
            makeArray: function(e, t) {
                var n, i = t || [];
                return null != e && (n = K.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? Q.call(i, e) : K.merge(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (G) return G.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var i = n.length,
                    r = e.length,
                    o = 0;
                if ("number" == typeof i)
                    for (; o < i; o++) e[r++] = n[o];
                else
                    for (; n[o] !== t;) e[r++] = n[o++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                var i, r = [],
                    o = 0,
                    s = e.length;
                for (n = !!n; o < s; o++) i = !!t(e[o], o), n !== i && r.push(e[o]);
                return r
            },
            map: function(e, n, i) {
                var r, o, s = [],
                    a = 0,
                    l = e.length;
                if (e instanceof K || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || K.isArray(e)))
                    for (; a < l; a++) null != (r = n(e[a], a, i)) && (s[s.length] = r);
                else
                    for (o in e) null != (r = n(e[o], o, i)) && (s[s.length] = r);
                return s.concat.apply([], s)
            },
            guid: 1,
            proxy: function(e, n) {
                var i, r, o;
                return "string" == typeof n && (i = e[n], n = e, e = i), K.isFunction(e) ? (r = Y.call(arguments, 2), o = function() {
                    return e.apply(n, r.concat(Y.call(arguments)))
                }, o.guid = e.guid = e.guid || K.guid++, o) : t
            },
            access: function(e, n, i, r, o, s, a) {
                var l, c = null == i,
                    u = 0,
                    d = e.length;
                if (i && "object" == typeof i) {
                    for (u in i) K.access(e, n, u, i[u], 1, s, r);
                    o = 1
                } else if (r !== t) {
                    if (l = a === t && K.isFunction(r), c && (l ? (l = n, n = function(e, t, n) {
                            return l.call(K(e), n)
                        }) : (n.call(e, r), n = null)), n)
                        for (; u < d; u++) n(e[u], i, l ? r.call(e[u], u, n(e[u], i)) : r, a);
                    o = 1
                }
                return o ? e : c ? n.call(e) : d ? n(e[0], i) : s
            },
            now: function() {
                return (new Date).getTime()
            }
        }), K.ready.promise = function(t) {
            if (!I)
                if (I = K.Deferred(), "complete" === z.readyState) setTimeout(K.ready, 1);
                else if (z.addEventListener) z.addEventListener("DOMContentLoaded", fe, !1), e.addEventListener("load", K.ready, !1);
            else {
                z.attachEvent("onreadystatechange", fe), e.attachEvent("onload", K.ready);
                var n = !1;
                try {
                    n = null == e.frameElement && z.documentElement
                } catch (e) {}
                n && n.doScroll && function e() {
                    if (!K.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        K.ready()
                    }
                }()
            }
            return I.promise(t)
        }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            pe["[object " + t + "]"] = t.toLowerCase()
        }), _ = K(z);
        var he = {};
        K.Callbacks = function(e) {
            e = "string" == typeof e ? he[e] || n(e) : K.extend({}, e);
            var i, r, o, s, a, l, c = [],
                u = !e.once && [],
                d = function(t) {
                    for (i = e.memory && t, r = !0, l = s || 0, s = 0, a = c.length, o = !0; c && l < a; l++)
                        if (!1 === c[l].apply(t[0], t[1]) && e.stopOnFalse) {
                            i = !1;
                            break
                        } o = !1, c && (u ? u.length && d(u.shift()) : i ? c = [] : f.disable())
                },
                f = {
                    add: function() {
                        if (c) {
                            var t = c.length;
                            (function t(n) {
                                K.each(n, function(n, i) {
                                    var r = K.type(i);
                                    "function" !== r || e.unique && f.has(i) ? i && i.length && "string" !== r && t(i) : c.push(i)
                                })
                            })(arguments), o ? a = c.length : i && (s = t, d(i))
                        }
                        return this
                    },
                    remove: function() {
                        return c && K.each(arguments, function(e, t) {
                            for (var n;
                                (n = K.inArray(t, c, n)) > -1;) c.splice(n, 1), o && (n <= a && a--, n <= l && l--)
                        }), this
                    },
                    has: function(e) {
                        return K.inArray(e, c) > -1
                    },
                    empty: function() {
                        return c = [], this
                    },
                    disable: function() {
                        return c = u = i = t, this
                    },
                    disabled: function() {
                        return !c
                    },
                    lock: function() {
                        return u = t, i || f.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], c && (!r || u) && (o ? u.push(t) : d(t)), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return f
        }, K.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", K.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return K.Deferred(function(n) {
                                K.each(t, function(t, i) {
                                    var o = i[0],
                                        s = e[t];
                                    r[i[1]](K.isFunction(s) ? function() {
                                        var e = s.apply(this, arguments);
                                        e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [e])
                                    } : n[o])
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? K.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, K.each(t, function(e, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = s.fire, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = Y.call(arguments),
                    s = o.length,
                    a = 1 !== s || e && K.isFunction(e.promise) ? s : 0,
                    l = 1 === a ? e : K.Deferred(),
                    c = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? Y.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && K.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        }), K.support = function() {
            var t, n, i, r, o, s, a, l, c, u, d, f = z.createElement("div");
            if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), i = f.getElementsByTagName("a")[0], i.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length) return {};
            r = z.createElement("select"), o = r.appendChild(z.createElement("option")), s = f.getElementsByTagName("input")[0], t = {
                leadingWhitespace: 3 === f.firstChild.nodeType,
                tbody: !f.getElementsByTagName("tbody").length,
                htmlSerialize: !!f.getElementsByTagName("link").length,
                style: /top/.test(i.getAttribute("style")),
                hrefNormalized: "/a" === i.getAttribute("href"),
                opacity: /^0.5/.test(i.style.opacity),
                cssFloat: !!i.style.cssFloat,
                checkOn: "on" === s.value,
                optSelected: o.selected,
                getSetAttribute: "t" !== f.className,
                enctype: !!z.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === z.compatMode,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete f.test
            } catch (e) {
                t.deleteExpando = !1
            }
            if (!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", d = function() {
                    t.noCloneEvent = !1
                }), f.cloneNode(!0).fireEvent("onclick"), f.detachEvent("onclick", d)), s = z.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), f.appendChild(s), a = z.createDocumentFragment(), a.appendChild(f.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = s.checked, a.removeChild(s), a.appendChild(f), f.attachEvent)
                for (c in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) l = "on" + c, u = l in f, u || (f.setAttribute(l, "return;"), u = "function" == typeof f[l]), t[c + "Bubbles"] = u;
            return K(function() {
                var n, i, r, o, s = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    a = z.getElementsByTagName("body")[0];
                a && (n = z.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), i = z.createElement("div"), n.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = i.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === i.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                    width: "4px"
                }).width, o = z.createElement("div"), o.style.cssText = i.style.cssText = s, o.style.marginRight = o.style.width = "0", i.style.width = "1px", i.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== i.offsetWidth, n.style.zoom = 1), a.removeChild(n), n = i = r = o = null)
            }), a.removeChild(f), n = i = r = o = s = a = f = null, t
        }();
        var me = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            ge = /([A-Z])/g;
        K.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando]) && !r(e)
            },
            data: function(e, n, i, r) {
                if (K.acceptData(e)) {
                    var o, s, a = K.expando,
                        l = "string" == typeof n,
                        c = e.nodeType,
                        u = c ? K.cache : e,
                        d = c ? e[a] : e[a] && a;
                    if (d && u[d] && (r || u[d].data) || !l || i !== t) return d || (c ? e[a] = d = K.deletedIds.pop() || K.guid++ : d = a), u[d] || (u[d] = {}, c || (u[d].toJSON = K.noop)), "object" != typeof n && "function" != typeof n || (r ? u[d] = K.extend(u[d], n) : u[d].data = K.extend(u[d].data, n)), o = u[d], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[K.camelCase(n)] = i), l ? null == (s = o[n]) && (s = o[K.camelCase(n)]) : s = o, s
                }
            },
            removeData: function(e, t, n) {
                if (K.acceptData(e)) {
                    var i, o, s, a = e.nodeType,
                        l = a ? K.cache : e,
                        c = a ? e[K.expando] : K.expando;
                    if (l[c]) {
                        if (t && (i = n ? l[c] : l[c].data)) {
                            K.isArray(t) || (t in i ? t = [t] : (t = K.camelCase(t), t = t in i ? [t] : t.split(" ")));
                            for (o = 0, s = t.length; o < s; o++) delete i[t[o]];
                            if (!(n ? r : K.isEmptyObject)(i)) return
                        }(n || (delete l[c].data, r(l[c]))) && (a ? K.cleanData([e], !0) : K.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
                    }
                }
            },
            _data: function(e, t, n) {
                return K.data(e, t, n, !0)
            },
            acceptData: function(e) {
                var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
                return !t || !0 !== t && e.getAttribute("classid") === t
            }
        }), K.fn.extend({
            data: function(e, n) {
                var r, o, s, a, l, c = this[0],
                    u = 0,
                    d = null;
                if (e === t) {
                    if (this.length && (d = K.data(c), 1 === c.nodeType && !K._data(c, "parsedAttrs"))) {
                        for (s = c.attributes, l = s.length; u < l; u++) a = s[u].name, a.indexOf("data-") || (a = K.camelCase(a.substring(5)), i(c, a, d[a]));
                        K._data(c, "parsedAttrs", !0)
                    }
                    return d
                }
                return "object" == typeof e ? this.each(function() {
                    K.data(this, e)
                }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", o = r[1] + "!", K.access(this, function(n) {
                    if (n === t) return d = this.triggerHandler("getData" + o, [r[0]]), d === t && c && (d = K.data(c, e), d = i(c, e, d)), d === t && r[1] ? this.data(r[0]) : d;
                    r[1] = n, this.each(function() {
                        var t = K(this);
                        t.triggerHandler("setData" + o, r), K.data(this, e, n), t.triggerHandler("changeData" + o, r)
                    })
                }, null, n, arguments.length > 1, null, !1))
            },
            removeData: function(e) {
                return this.each(function() {
                    K.removeData(this, e)
                })
            }
        }), K.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = K._data(e, t), n && (!i || K.isArray(n) ? i = K._data(e, t, K.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = K.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = K._queueHooks(e, t),
                    s = function() {
                        K.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return K._data(e, n) || K._data(e, n, {
                    empty: K.Callbacks("once memory").add(function() {
                        K.removeData(e, t + "queue", !0), K.removeData(e, n, !0)
                    })
                })
            }
        }), K.fn.extend({
            queue: function(e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? K.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = K.queue(this, e, n);
                    K._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    K.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var i, r = 1,
                    o = K.Deferred(),
                    s = this,
                    a = this.length,
                    l = function() {
                        --r || o.resolveWith(s, [s])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;)(i = K._data(s[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(l));
                return l(), o.promise(n)
            }
        });
        var ve, ye, be, xe = /[\t\r\n]/g,
            we = /\r/g,
            Ce = /^(?:button|input)$/i,
            Se = /^(?:button|input|object|select|textarea)$/i,
            Te = /^a(?:rea|)$/i,
            ke = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            Ee = K.support.getSetAttribute;
        K.fn.extend({
            attr: function(e, t) {
                return K.access(this, K.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    K.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return K.access(this, K.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = K.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (e) {}
                })
            },
            addClass: function(e) {
                var t, n, i, r, o, s, a;
                if (K.isFunction(e)) return this.each(function(t) {
                    K(this).addClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e)
                    for (t = e.split(te), n = 0, i = this.length; n < i; n++)
                        if (r = this[n], 1 === r.nodeType)
                            if (r.className || 1 !== t.length) {
                                for (o = " " + r.className + " ", s = 0, a = t.length; s < a; s++) o.indexOf(" " + t[s] + " ") < 0 && (o += t[s] + " ");
                                r.className = K.trim(o)
                            } else r.className = e;
                return this
            },
            removeClass: function(e) {
                var n, i, r, o, s, a, l;
                if (K.isFunction(e)) return this.each(function(t) {
                    K(this).removeClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e || e === t)
                    for (n = (e || "").split(te), a = 0, l = this.length; a < l; a++)
                        if (r = this[a], 1 === r.nodeType && r.className) {
                            for (i = (" " + r.className + " ").replace(xe, " "), o = 0, s = n.length; o < s; o++)
                                for (; i.indexOf(" " + n[o] + " ") >= 0;) i = i.replace(" " + n[o] + " ", " ");
                            r.className = e ? K.trim(i) : ""
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    i = "boolean" == typeof t;
                return K.isFunction(e) ? this.each(function(n) {
                    K(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var r, o = 0, s = K(this), a = t, l = e.split(te); r = l[o++];) a = i ? a : !s.hasClass(r), s[a ? "addClass" : "removeClass"](r);
                    else "undefined" !== n && "boolean" !== n || (this.className && K._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : K._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xe, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, i, r, o = this[0]; {
                    if (arguments.length) return r = K.isFunction(e), this.each(function(i) {
                        var o, s = K(this);
                        1 === this.nodeType && (o = r ? e.call(this, i, s.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                    });
                    if (o) return n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(we, "") : null == i ? "" : i)
                }
            }
        }), K.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, r, o = e.selectedIndex,
                            s = [],
                            a = e.options,
                            l = "select-one" === e.type;
                        if (o < 0) return null;
                        for (n = l ? o : 0, i = l ? o + 1 : a.length; n < i; n++)
                            if (r = a[n], r.selected && (K.support.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !K.nodeName(r.parentNode, "optgroup"))) {
                                if (t = K(r).val(), l) return t;
                                s.push(t)
                            } return l && !s.length && a.length ? K(a[o]).val() : s
                    },
                    set: function(e, t) {
                        var n = K.makeArray(t);
                        return K(e).find("option").each(function() {
                            this.selected = K.inArray(K(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attrFn: {},
            attr: function(e, n, i, r) {
                var o, s, a, l = e.nodeType;
                if (e && 3 !== l && 8 !== l && 2 !== l) return r && K.isFunction(K.fn[n]) ? K(e)[n](i) : "undefined" == typeof e.getAttribute ? K.prop(e, n, i) : ((a = 1 !== l || !K.isXMLDoc(e)) && (n = n.toLowerCase(), s = K.attrHooks[n] || (ke.test(n) ? ye : ve)), i !== t ? null === i ? void K.removeAttr(e, n) : s && "set" in s && a && (o = s.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : s && "get" in s && a && null !== (o = s.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
            },
            removeAttr: function(e, t) {
                var n, i, r, o, s = 0;
                if (t && 1 === e.nodeType)
                    for (i = t.split(te); s < i.length; s++)(r = i[s]) && (n = K.propFix[r] || r, o = ke.test(r), o || K.attr(e, r, ""), e.removeAttribute(Ee ? r : n), o && n in e && (e[n] = !1))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (Ce.test(e.nodeName) && e.parentNode) K.error("type property can't be changed");
                        else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                },
                value: {
                    get: function(e, t) {
                        return ve && K.nodeName(e, "button") ? ve.get(e, t) : t in e ? e.value : null
                    },
                    set: function(e, t, n) {
                        if (ve && K.nodeName(e, "button")) return ve.set(e, t, n);
                        e.value = t
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, i) {
                var r, o, s, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !K.isXMLDoc(e), s && (n = K.propFix[n] || n, o = K.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : Se.test(e.nodeName) || Te.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), ye = {
            get: function(e, n) {
                var i, r = K.prop(e, n);
                return !0 === r || "boolean" != typeof r && (i = e.getAttributeNode(n)) && !1 !== i.nodeValue ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                var i;
                return !1 === t ? K.removeAttr(e, n) : (i = K.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, Ee || (be = {
            name: !0,
            id: !0,
            coords: !0
        }, ve = K.valHooks.button = {
            get: function(e, n) {
                var i;
                return i = e.getAttributeNode(n), i && (be[n] ? "" !== i.value : i.specified) ? i.value : t
            },
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || (i = z.createAttribute(n), e.setAttributeNode(i)), i.value = t + ""
            }
        }, K.each(["width", "height"], function(e, t) {
            K.attrHooks[t] = K.extend(K.attrHooks[t], {
                set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            })
        }), K.attrHooks.contenteditable = {
            get: ve.get,
            set: function(e, t, n) {
                "" === t && (t = "false"), ve.set(e, t, n)
            }
        }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(e, n) {
            K.attrHooks[n] = K.extend(K.attrHooks[n], {
                get: function(e) {
                    var i = e.getAttribute(n, 2);
                    return null === i ? t : i
                }
            })
        }), K.support.style || (K.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function() {
            K.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), K.each(["radio", "checkbox"], function() {
            K.valHooks[this] = K.extend(K.valHooks[this], {
                set: function(e, t) {
                    if (K.isArray(t)) return e.checked = K.inArray(K(e).val(), t) >= 0
                }
            })
        });
        var je = /^(?:textarea|input|select)$/i,
            Ne = /^([^\.]*|)(?:\.(.+)|)$/,
            $e = /(?:^|\s)hover(\.\S+|)\b/,
            De = /^key/,
            Ae = /^(?:mouse|contextmenu)|click/,
            Le = /^(?:focusinfocus|focusoutblur)$/,
            Me = function(e) {
                return K.event.special.hover ? e : e.replace($e, "mouseenter$1 mouseleave$1")
            };
        K.event = {
                add: function(e, n, i, r, o) {
                    var s, a, l, c, u, d, f, p, h, m, g;
                    if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (s = K._data(e))) {
                        for (i.handler && (h = i, i = h.handler, o = h.selector), i.guid || (i.guid = K.guid++), l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function(e) {
                                return void 0 === K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(a.elem, arguments)
                            }, a.elem = e), n = K.trim(Me(n)).split(" "), c = 0; c < n.length; c++) u = Ne.exec(n[c]) || [], d = u[1], f = (u[2] || "").split(".").sort(), g = K.event.special[d] || {}, d = (o ? g.delegateType : g.bindType) || d, g = K.event.special[d] || {}, p = K.extend({
                            type: d,
                            origType: u[1],
                            data: r,
                            handler: i,
                            guid: i.guid,
                            selector: o,
                            needsContext: o && K.expr.match.needsContext.test(o),
                            namespace: f.join(".")
                        }, h), m = l[d], m || (m = l[d] = [], m.delegateCount = 0, g.setup && !1 !== g.setup.call(e, r, f, a) || (e.addEventListener ? e.addEventListener(d, a, !1) : e.attachEvent && e.attachEvent("on" + d, a))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), K.event.global[d] = !0;
                        e = null
                    }
                },
                global: {},
                remove: function(e, t, n, i, r) {
                    var o, s, a, l, c, u, d, f, p, h, m, g = K.hasData(e) && K._data(e);
                    if (g && (f = g.events)) {
                        for (t = K.trim(Me(t || "")).split(" "), o = 0; o < t.length; o++)
                            if (s = Ne.exec(t[o]) || [], a = l = s[1], c = s[2], a) {
                                for (p = K.event.special[a] || {}, a = (i ? p.delegateType : p.bindType) || a, h = f[a] || [], u = h.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0; d < h.length; d++) m = h[d], (r || l === m.origType) && (!n || n.guid === m.guid) && (!c || c.test(m.namespace)) && (!i || i === m.selector || "**" === i && m.selector) && (h.splice(d--, 1), m.selector && h.delegateCount--, p.remove && p.remove.call(e, m));
                                0 === h.length && u !== h.length && ((!p.teardown || !1 === p.teardown.call(e, c, g.handle)) && K.removeEvent(e, a, g.handle), delete f[a])
                            } else
                                for (a in f) K.event.remove(e, a + t[o], n, i, !0);
                        K.isEmptyObject(f) && (delete g.handle, K.removeData(e, "events", !0))
                    }
                },
                customEvent: {
                    getData: !0,
                    setData: !0,
                    changeData: !0
                },
                trigger: function(n, i, r, o) {
                    if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                        var s, a, l, c, u, d, f, p, h, m, g = n.type || n,
                            v = [];
                        if (Le.test(g + K.event.triggered)) return;
                        if (g.indexOf("!") >= 0 && (g = g.slice(0, -1), a = !0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), (!r || K.event.customEvent[g]) && !K.event.global[g]) return;
                        if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(g, n) : new K.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = a, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = g.indexOf(":") < 0 ? "on" + g : "", !r) {
                            s = K.cache;
                            for (l in s) s[l].events && s[l].events[g] && K.event.trigger(n, i, s[l].handle.elem, !0);
                            return
                        }
                        if (n.result = t, n.target || (n.target = r), i = null != i ? K.makeArray(i) : [], i.unshift(n), f = K.event.special[g] || {}, f.trigger && !1 === f.trigger.apply(r, i)) return;
                        if (h = [
                                [r, f.bindType || g]
                            ], !o && !f.noBubble && !K.isWindow(r)) {
                            for (m = f.delegateType || g, c = Le.test(m + g) ? r : r.parentNode, u = r; c; c = c.parentNode) h.push([c, m]), u = c;
                            u === (r.ownerDocument || z) && h.push([u.defaultView || u.parentWindow || e, m])
                        }
                        for (l = 0; l < h.length && !n.isPropagationStopped(); l++) c = h[l][0], n.type = h[l][1], p = (K._data(c, "events") || {})[n.type] && K._data(c, "handle"), p && p.apply(c, i), (p = d && c[d]) && K.acceptData(c) && p.apply && !1 === p.apply(c, i) && n.preventDefault();
                        return n.type = g, !o && !n.isDefaultPrevented() && (!f._default || !1 === f._default.apply(r.ownerDocument, i)) && ("click" !== g || !K.nodeName(r, "a")) && K.acceptData(r) && d && r[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !K.isWindow(r) && (u = r[d], u && (r[d] = null), K.event.triggered = g, r[g](), K.event.triggered = t, u && (r[d] = u)), n.result
                    }
                },
                dispatch: function(n) {
                    n = K.event.fix(n || e.event);
                    var i, r, o, s, a, l, c, u, d, f = (K._data(this, "events") || {})[n.type] || [],
                        p = f.delegateCount,
                        h = Y.call(arguments),
                        m = !n.exclusive && !n.namespace,
                        g = K.event.special[n.type] || {},
                        v = [];
                    if (h[0] = n, n.delegateTarget = this, !g.preDispatch || !1 !== g.preDispatch.call(this, n)) {
                        if (p && (!n.button || "click" !== n.type))
                            for (o = n.target; o != this; o = o.parentNode || this)
                                if (!0 !== o.disabled || "click" !== n.type) {
                                    for (a = {}, c = [], i = 0; i < p; i++) u = f[i], d = u.selector, a[d] === t && (a[d] = u.needsContext ? K(d, this).index(o) >= 0 : K.find(d, this, null, [o]).length), a[d] && c.push(u);
                                    c.length && v.push({
                                        elem: o,
                                        matches: c
                                    })
                                } for (f.length > p && v.push({
                                elem: this,
                                matches: f.slice(p)
                            }), i = 0; i < v.length && !n.isPropagationStopped(); i++)
                            for (l = v[i], n.currentTarget = l.elem, r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++) u = l.matches[r], (m || !n.namespace && !u.namespace || n.namespace_re && n.namespace_re.test(u.namespace)) && (n.data = u.data, n.handleObj = u, (s = ((K.event.special[u.origType] || {}).handle || u.handler).apply(l.elem, h)) !== t && (n.result = s, !1 === s && (n.preventDefault(), n.stopPropagation())));
                        return g.postDispatch && g.postDispatch.call(this, n), n.result
                    }
                },
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, n) {
                        var i, r, o, s = n.button,
                            a = n.fromElement;
                        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || z, r = i.documentElement, o = i.body, e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && s !== t && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                    }
                },
                fix: function(e) {
                    if (e[K.expando]) return e;
                    var t, n, i = e,
                        r = K.event.fixHooks[e.type] || {},
                        o = r.props ? this.props.concat(r.props) : this.props;
                    for (e = K.Event(i), t = o.length; t;) n = o[--t], e[n] = i[n];
                    return e.target || (e.target = i.srcElement || z), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, i) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        delegateType: "focusin"
                    },
                    blur: {
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        setup: function(e, t, n) {
                            K.isWindow(this) && (this.onbeforeunload = n)
                        },
                        teardown: function(e, t) {
                            this.onbeforeunload === t && (this.onbeforeunload = null)
                        }
                    }
                },
                simulate: function(e, t, n, i) {
                    var r = K.extend(new K.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    i ? K.event.trigger(r, null, t) : K.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
                }
            }, K.event.handle = K.event.dispatch, K.removeEvent = z.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                var i = "on" + t;
                e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
            }, K.Event = function(e, t) {
                if (!(this instanceof K.Event)) return new K.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? s : o) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0
            }, K.Event.prototype = {
                preventDefault: function() {
                    this.isDefaultPrevented = s;
                    var e = this.originalEvent;
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    this.isPropagationStopped = s;
                    var e = this.originalEvent;
                    e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = s, this.stopPropagation()
                },
                isDefaultPrevented: o,
                isPropagationStopped: o,
                isImmediatePropagationStopped: o
            }, K.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                K.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = this,
                            r = e.relatedTarget,
                            o = e.handleObj;
                        o.selector;
                        return r && (r === i || K.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), K.support.submitBubbles || (K.event.special.submit = {
                setup: function() {
                    if (K.nodeName(this, "form")) return !1;
                    K.event.add(this, "click._submit keypress._submit", function(e) {
                        var n = e.target,
                            i = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                        i && !K._data(i, "_submit_attached") && (K.event.add(i, "submit._submit", function(e) {
                            e._submit_bubble = !0
                        }), K._data(i, "_submit_attached", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    if (K.nodeName(this, "form")) return !1;
                    K.event.remove(this, "._submit")
                }
            }), K.support.changeBubbles || (K.event.special.change = {
                setup: function() {
                    if (je.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (K.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }), K.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0)
                    })), !1;
                    K.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        je.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function(e) {
                            this.parentNode && !e.isSimulated && !e.isTrigger && K.event.simulate("change", this.parentNode, e, !0)
                        }), K._data(t, "_change_attached", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return K.event.remove(this, "._change"), !je.test(this.nodeName)
                }
            }), K.support.focusinBubbles || K.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = 0,
                    i = function(e) {
                        K.event.simulate(t, e.target, K.event.fix(e), !0)
                    };
                K.event.special[t] = {
                    setup: function() {
                        0 == n++ && z.addEventListener(e, i, !0)
                    },
                    teardown: function() {
                        0 == --n && z.removeEventListener(e, i, !0)
                    }
                }
            }), K.fn.extend({
                on: function(e, n, i, r, s) {
                    var a, l;
                    if ("object" == typeof e) {
                        "string" != typeof n && (i = i || n, n = t);
                        for (l in e) this.on(l, n, i, e[l], s);
                        return this
                    }
                    if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), !1 === r) r = o;
                    else if (!r) return this;
                    return 1 === s && (a = r, r = function(e) {
                        return K().off(e), a.apply(this, arguments)
                    }, r.guid = a.guid || (a.guid = K.guid++)), this.each(function() {
                        K.event.add(this, e, r, i, n)
                    })
                },
                one: function(e, t, n, i) {
                    return this.on(e, t, n, i, 1)
                },
                off: function(e, n, i) {
                    var r, s;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, K(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (s in e) this.off(s, n, e[s]);
                        return this
                    }
                    return !1 !== n && "function" != typeof n || (i = n, n = t), !1 === i && (i = o), this.each(function() {
                        K.event.remove(this, e, i, n)
                    })
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                live: function(e, t, n) {
                    return K(this.context).on(e, this.selector, t, n), this
                },
                die: function(e, t) {
                    return K(this.context).off(e, this.selector || "**", t), this
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        K.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    if (this[0]) return K.event.trigger(e, t, this[0], !0)
                },
                toggle: function(e) {
                    var t = arguments,
                        n = e.guid || K.guid++,
                        i = 0,
                        r = function(n) {
                            var r = (K._data(this, "lastToggle" + e.guid) || 0) % i;
                            return K._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) || !1
                        };
                    for (r.guid = n; i < t.length;) t[i++].guid = n;
                    return this.click(r)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                K.fn[t] = function(e, n) {
                    return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }, De.test(t) && (K.event.fixHooks[t] = K.event.keyHooks), Ae.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
            }),
            function(e, t) {
                function n(e, t, n, i) {
                    n = n || [], t = t || A;
                    var r, o, s, a, l = t.nodeType;
                    if (!e || "string" != typeof e) return n;
                    if (1 !== l && 9 !== l) return [];
                    if (!(s = w(t)) && !i && (r = ne.exec(e)))
                        if (a = r[1]) {
                            if (9 === l) {
                                if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && C(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (r[2]) return H.apply(n, F.call(t.getElementsByTagName(e), 0)), n;
                            if ((a = r[3]) && fe && t.getElementsByClassName) return H.apply(n, F.call(t.getElementsByClassName(a), 0)), n
                        } return m(e.replace(J, "$1"), t, n, i, s)
                }

                function i(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function r(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function o(e) {
                    return _(function(t) {
                        return t = +t, _(function(n, i) {
                            for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function s(e, t, n) {
                    if (e === t) return n;
                    for (var i = e.nextSibling; i;) {
                        if (i === t) return -1;
                        i = i.nextSibling
                    }
                    return 1
                }

                function a(e, t) {
                    var i, r, o, s, a, l, c, u = W[$][e];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], c = b.preFilter; a;) {
                        i && !(r = Z.exec(a)) || (r && (a = a.slice(r[0].length)), l.push(o = [])), i = !1, (r = ee.exec(a)) && (o.push(i = new D(r.shift())), a = a.slice(i.length), i.type = r[0].replace(J, " "));
                        for (s in b.filter)(r = ae[s].exec(a)) && (!c[s] || (r = c[s](r, A, !0))) && (o.push(i = new D(r.shift())), a = a.slice(i.length), i.type = s, i.matches = r);
                        if (!i) break
                    }
                    return t ? a.length : a ? n.error(e) : W(e, l).slice(0)
                }

                function l(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === t.dir,
                        o = O++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (r || 1 === t.nodeType) return e(t, n, o)
                    } : function(t, n, s) {
                        if (s) {
                            for (; t = t[i];)
                                if ((r || 1 === t.nodeType) && e(t, n, s)) return t
                        } else
                            for (var a, l = M + " " + o + " ", c = l + v; t = t[i];)
                                if (r || 1 === t.nodeType) {
                                    if ((a = t[$]) === c) return t.sizset;
                                    if ("string" == typeof a && 0 === a.indexOf(l)) {
                                        if (t.sizset) return t
                                    } else {
                                        if (t[$] = c, e(t, n, s)) return t.sizset = !0, t;
                                        t.sizset = !1
                                    }
                                }
                    }
                }

                function c(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function u(e, t, n, i, r) {
                    for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
                    return s
                }

                function d(e, t, n, i, r, o) {
                    return i && !i[$] && (i = d(i)), r && !r[$] && (r = d(r, o)), _(function(o, s, a, l) {
                        if (!o || !r) {
                            var c, d, f, p = [],
                                m = [],
                                g = s.length,
                                v = o || h(t || "*", a.nodeType ? [a] : a, [], o),
                                y = !e || !o && t ? v : u(v, p, e, a, l),
                                b = n ? r || (o ? e : g || i) ? [] : s : y;
                            if (n && n(y, b, a, l), i)
                                for (f = u(b, m), i(f, [], a, l), c = f.length; c--;)(d = f[c]) && (b[m[c]] = !(y[m[c]] = d));
                            if (o)
                                for (c = e && b.length; c--;)(d = b[c]) && (o[p[c]] = !(s[p[c]] = d));
                            else b = u(b === s ? b.splice(g, b.length) : b), r ? r(null, s, b, l) : H.apply(s, b)
                        }
                    })
                }

                function f(e) {
                    for (var t, n, i, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = l(function(e) {
                            return e === t
                        }, s, !0), p = l(function(e) {
                            return q.call(t, e) > -1
                        }, s, !0), h = [function(e, n, i) {
                            return !o && (i || n !== E) || ((t = n).nodeType ? u(e, n, i) : p(e, n, i))
                        }]; a < r; a++)
                        if (n = b.relative[e[a].type]) h = [l(c(h), n)];
                        else {
                            if (n = b.filter[e[a].type].apply(null, e[a].matches), n[$]) {
                                for (i = ++a; i < r && !b.relative[e[i].type]; i++);
                                return d(a > 1 && c(h), a > 1 && e.slice(0, a - 1).join("").replace(J, "$1"), n, a < i && f(e.slice(a, i)), i < r && f(e = e.slice(i)), i < r && e.join(""))
                            }
                            h.push(n)
                        } return c(h)
                }

                function p(e, t) {
                    var i = t.length > 0,
                        r = e.length > 0,
                        o = function(s, a, l, c, d) {
                            var f, p, h, m = [],
                                g = 0,
                                y = "0",
                                x = s && [],
                                w = null != d,
                                C = E,
                                S = s || r && b.find.TAG("*", d && a.parentNode || a),
                                T = M += null == C ? 1 : Math.E;
                            for (w && (E = a !== A && a, v = o.el); null != (f = S[y]); y++) {
                                if (r && f) {
                                    for (p = 0; h = e[p]; p++)
                                        if (h(f, a, l)) {
                                            c.push(f);
                                            break
                                        } w && (M = T, v = ++o.el)
                                }
                                i && ((f = !h && f) && g--, s && x.push(f))
                            }
                            if (g += y, i && y !== g) {
                                for (p = 0; h = t[p]; p++) h(x, m, a, l);
                                if (s) {
                                    if (g > 0)
                                        for (; y--;) !x[y] && !m[y] && (m[y] = P.call(c));
                                    m = u(m)
                                }
                                H.apply(c, m), w && !s && m.length > 0 && g + t.length > 1 && n.uniqueSort(c)
                            }
                            return w && (M = T, E = C), x
                        };
                    return o.el = 0, i ? _(o) : o
                }

                function h(e, t, i, r) {
                    for (var o = 0, s = t.length; o < s; o++) n(e, t[o], i, r);
                    return i
                }

                function m(e, t, n, i, r) {
                    var o, s, l, c, u, d = a(e);
                    d.length;
                    if (!i && 1 === d.length) {
                        if (s = d[0] = d[0].slice(0), s.length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && !r && b.relative[s[1].type]) {
                            if (!(t = b.find.ID(l.matches[0].replace(se, ""), t, r)[0])) return n;
                            e = e.slice(s.shift().length)
                        }
                        for (o = ae.POS.test(e) ? -1 : s.length - 1; o >= 0 && (l = s[o], !b.relative[c = l.type]); o--)
                            if ((u = b.find[c]) && (i = u(l.matches[0].replace(se, ""), ie.test(s[0].type) && t.parentNode || t, r))) {
                                if (s.splice(o, 1), !(e = i.length && s.join(""))) return H.apply(n, F.call(i, 0)), n;
                                break
                            }
                    }
                    return S(e, d)(i, t, r, n, ie.test(e)), n
                }

                function g() {}
                var v, y, b, x, w, C, S, T, k, E, j = !0,
                    N = "undefined",
                    $ = ("sizcache" + Math.random()).replace(".", ""),
                    D = String,
                    A = e.document,
                    L = A.documentElement,
                    M = 0,
                    O = 0,
                    P = [].pop,
                    H = [].push,
                    F = [].slice,
                    q = [].indexOf || function(e) {
                        for (var t = 0, n = this.length; t < n; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    _ = function(e, t) {
                        return e[$] = null == t || t, e
                    },
                    I = function() {
                        var e = {},
                            t = [];
                        return _(function(n, i) {
                            return t.push(n) > b.cacheLength && delete e[t.shift()], e[n] = i
                        }, e)
                    },
                    z = I(),
                    W = I(),
                    R = I(),
                    B = "[\\x20\\t\\r\\n\\f]",
                    X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                    Q = X.replace("w", "w#"),
                    Y = "([*^$|!~]?=)",
                    G = "\\[" + B + "*(" + X + ")" + B + "*(?:" + Y + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Q + ")|)|)" + B + "*\\]",
                    U = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + G + ")|[^:]|\\\\.)*|.*))\\)|)",
                    V = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)",
                    J = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
                    Z = new RegExp("^" + B + "*," + B + "*"),
                    ee = new RegExp("^" + B + "*([\\x20\\t\\r\\n\\f>+~])" + B + "*"),
                    te = new RegExp(U),
                    ne = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                    ie = /[\x20\t\r\n\f]*[+~]/,
                    re = /h\d/i,
                    oe = /input|select|textarea|button/i,
                    se = /\\(?!\\)/g,
                    ae = {
                        ID: new RegExp("^#(" + X + ")"),
                        CLASS: new RegExp("^\\.(" + X + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + X.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + G),
                        PSEUDO: new RegExp("^" + U),
                        POS: new RegExp(V, "i"),
                        CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + B + "*[>+~]|" + V, "i")
                    },
                    le = function(e) {
                        var t = A.createElement("div");
                        try {
                            return e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t = null
                        }
                    },
                    ce = le(function(e) {
                        return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
                    }),
                    ue = le(function(e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== N && "#" === e.firstChild.getAttribute("href")
                    }),
                    de = le(function(e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return "boolean" !== t && "string" !== t
                    }),
                    fe = le(function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
                    }),
                    pe = le(function(e) {
                        e.id = $ + 0, e.innerHTML = "<a name='" + $ + "'></a><div name='" + $ + "'></div>", L.insertBefore(e, L.firstChild);
                        var t = A.getElementsByName && A.getElementsByName($).length === 2 + A.getElementsByName($ + 0).length;
                        return y = !A.getElementById($), L.removeChild(e), t
                    });
                try {
                    F.call(L.childNodes, 0)[0].nodeType
                } catch (e) {
                    F = function(e) {
                        for (var t, n = []; t = this[e]; e++) n.push(t);
                        return n
                    }
                }
                n.matches = function(e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function(e, t) {
                    return n(t, null, null, [e]).length > 0
                }, x = n.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += x(t);
                    return n
                }, w = n.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, C = n.contains = L.contains ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
                } : L.compareDocumentPosition ? function(e, t) {
                    return t && !!(16 & e.compareDocumentPosition(t))
                } : function(e, t) {
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                    return !1
                }, n.attr = function(e, t) {
                    var n, i = w(e);
                    return i || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : i || de ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
                }, b = n.selectors = {
                    cacheLength: 50,
                    createPseudo: _,
                    match: ae,
                    attrHandle: ue ? {} : {
                        href: function(e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    },
                    find: {
                        ID: y ? function(e, t, n) {
                            if (typeof t.getElementById !== N && !n) {
                                var i = t.getElementById(e);
                                return i && i.parentNode ? [i] : []
                            }
                        } : function(e, n, i) {
                            if (typeof n.getElementById !== N && !i) {
                                var r = n.getElementById(e);
                                return r ? r.id === e || typeof r.getAttributeNode !== N && r.getAttributeNode("id").value === e ? [r] : t : []
                            }
                        },
                        TAG: ce ? function(e, t) {
                            if (typeof t.getElementsByTagName !== N) return t.getElementsByTagName(e)
                        } : function(e, t) {
                            var n = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (var i, r = [], o = 0; i = n[o]; o++) 1 === i.nodeType && r.push(i);
                                return r
                            }
                            return n
                        },
                        NAME: pe && function(e, t) {
                            if (typeof t.getElementsByName !== N) return t.getElementsByName(name)
                        },
                        CLASS: fe && function(e, t, n) {
                            if (typeof t.getElementsByClassName !== N && !n) return t.getElementsByClassName(e)
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(se, ""), e[3] = (e[4] || e[5] || "").replace(se, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n;
                            return ae.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (te.test(t) && (n = a(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
                        }
                    },
                    filter: {
                        ID: y ? function(e) {
                            return e = e.replace(se, ""),
                                function(t) {
                                    return t.getAttribute("id") === e
                                }
                        } : function(e) {
                            return e = e.replace(se, ""),
                                function(t) {
                                    var n = typeof t.getAttributeNode !== N && t.getAttributeNode("id");
                                    return n && n.value === e
                                }
                        },
                        TAG: function(e) {
                            return "*" === e ? function() {
                                return !0
                            } : (e = e.replace(se, "").toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function(e) {
                            var t = z[$][e];
                            return t || (t = z(e, new RegExp("(^|" + B + ")" + e + "(" + B + "|$)"))),
                                function(e) {
                                    return t.test(e.className || typeof e.getAttribute !== N && e.getAttribute("class") || "")
                                }
                        },
                        ATTR: function(e, t, i) {
                            return function(r) {
                                var o = n.attr(r, e);
                                return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.substr(o.length - i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t && (o === i || o.substr(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i) {
                            return "nth" === e ? function(e) {
                                var t, r, o = e.parentNode;
                                if (1 === n && 0 === i) return !0;
                                if (o)
                                    for (r = 0, t = o.firstChild; t && (1 !== t.nodeType || (r++, e !== t)); t = t.nextSibling);
                                return (r -= i) === n || r % n == 0 && r / n >= 0
                            } : function(t) {
                                var n = t;
                                switch (e) {
                                    case "only":
                                    case "first":
                                        for (; n = n.previousSibling;)
                                            if (1 === n.nodeType) return !1;
                                        if ("first" === e) return !0;
                                        n = t;
                                    case "last":
                                        for (; n = n.nextSibling;)
                                            if (1 === n.nodeType) return !1;
                                        return !0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var i, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return r[$] ? r(t) : r.length > 1 ? (i = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? _(function(e, n) {
                                for (var i, o = r(e, t), s = o.length; s--;) i = q.call(e, o[s]), e[i] = !(n[i] = o[s])
                            }) : function(e) {
                                return r(e, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: _(function(e) {
                            var t = [],
                                n = [],
                                i = S(e.replace(J, "$1"));
                            return i[$] ? _(function(e, t, n, r) {
                                for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, r, o) {
                                return t[0] = e, i(t, null, o, n), !n.pop()
                            }
                        }),
                        has: _(function(e) {
                            return function(t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: _(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                            }
                        }),
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        parent: function(e) {
                            return !b.pseudos.empty(e)
                        },
                        empty: function(e) {
                            var t;
                            for (e = e.firstChild; e;) {
                                if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                                e = e.nextSibling
                            }
                            return !0
                        },
                        header: function(e) {
                            return re.test(e.nodeName)
                        },
                        text: function(e) {
                            var t, n;
                            return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                        },
                        radio: i("radio"),
                        checkbox: i("checkbox"),
                        file: i("file"),
                        password: i("password"),
                        image: i("image"),
                        submit: r("submit"),
                        reset: r("reset"),
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        input: function(e) {
                            return oe.test(e.nodeName)
                        },
                        focus: function(e) {
                            var t = e.ownerDocument;
                            return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && (!!e.type || !!e.href)
                        },
                        active: function(e) {
                            return e === e.ownerDocument.activeElement
                        },
                        first: o(function() {
                            return [0]
                        }),
                        last: o(function(e, t) {
                            return [t - 1]
                        }),
                        eq: o(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: o(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: o(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: o(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: o(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, T = L.compareDocumentPosition ? function(e, t) {
                    return e === t ? (k = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
                } : function(e, t) {
                    if (e === t) return k = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, i, r = [],
                        o = [],
                        a = e.parentNode,
                        l = t.parentNode,
                        c = a;
                    if (a === l) return s(e, t);
                    if (!a) return -1;
                    if (!l) return 1;
                    for (; c;) r.unshift(c), c = c.parentNode;
                    for (c = l; c;) o.unshift(c), c = c.parentNode;
                    n = r.length, i = o.length;
                    for (var u = 0; u < n && u < i; u++)
                        if (r[u] !== o[u]) return s(r[u], o[u]);
                    return u === n ? s(e, o[u], -1) : s(r[u], t, 1)
                }, [0, 0].sort(T), j = !k, n.uniqueSort = function(e) {
                    var t, n = 1;
                    if (k = j, e.sort(T), k)
                        for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
                    return e
                }, n.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, S = n.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        o = R[$][e];
                    if (!o) {
                        for (t || (t = a(e)), n = t.length; n--;) o = f(t[n]), o[$] ? i.push(o) : r.push(o);
                        o = R(e, p(r, i))
                    }
                    return o
                }, A.querySelectorAll && function() {
                    var e, t = m,
                        i = /'|\\/g,
                        r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        o = [":focus"],
                        s = [":active", ":focus"],
                        l = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector;
                    le(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + B + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
                    }), le(function(e) {
                        e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + B + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
                    }), o = new RegExp(o.join("|")), m = function(e, n, r, s, l) {
                        if (!(s || l || o && o.test(e))) {
                            var c, u, d = !0,
                                f = $,
                                p = n,
                                h = 9 === n.nodeType && e;
                            if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                for (c = a(e), (d = n.getAttribute("id")) ? f = d.replace(i, "\\$&") : n.setAttribute("id", f), f = "[id='" + f + "'] ", u = c.length; u--;) c[u] = f + c[u].join("");
                                p = ie.test(e) && n.parentNode || n, h = c.join(",")
                            }
                            if (h) try {
                                return H.apply(r, F.call(p.querySelectorAll(h), 0)), r
                            } catch (e) {} finally {
                                d || n.removeAttribute("id")
                            }
                        }
                        return t(e, n, r, s, l)
                    }, l && (le(function(t) {
                        e = l.call(t, "div");
                        try {
                            l.call(t, "[test!='']:sizzle"), s.push("!=", U)
                        } catch (e) {}
                    }), s = new RegExp(s.join("|")), n.matchesSelector = function(t, i) {
                        if (i = i.replace(r, "='$1']"), !(w(t) || s.test(i) || o && o.test(i))) try {
                            var a = l.call(t, i);
                            if (a || e || t.document && 11 !== t.document.nodeType) return a
                        } catch (e) {}
                        return n(i, null, null, [t]).length > 0
                    })
                }(), b.pseudos.nth = b.pseudos.eq, b.filters = g.prototype = b.pseudos, b.setFilters = new g, n.attr = K.attr, K.find = n, K.expr = n.selectors, K.expr[":"] = K.expr.pseudos, K.unique = n.uniqueSort, K.text = n.getText, K.isXMLDoc = n.isXML, K.contains = n.contains
            }(e);
        var Oe = /Until$/,
            Pe = /^(?:parents|prev(?:Until|All))/,
            He = /^.[^:#\[\.,]*$/,
            Fe = K.expr.match.needsContext,
            qe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        K.fn.extend({
            find: function(e) {
                var t, n, i, r, o, s, a = this;
                if ("string" != typeof e) return K(e).filter(function() {
                    for (t = 0, n = a.length; t < n; t++)
                        if (K.contains(a[t], this)) return !0
                });
                for (s = this.pushStack("", "find", e), t = 0, n = this.length; t < n; t++)
                    if (i = s.length, K.find(e, this[t], s), t > 0)
                        for (r = i; r < s.length; r++)
                            for (o = 0; o < i; o++)
                                if (s[o] === s[r]) {
                                    s.splice(r--, 1);
                                    break
                                } return s
            },
            has: function(e) {
                var t, n = K(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (K.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(c(this, e, !1), "not", e)
            },
            filter: function(e) {
                return this.pushStack(c(this, e, !0), "filter", e)
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? Fe.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], s = Fe.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                        if (s ? s.index(n) > -1 : K.find.matchesSelector(n, e)) {
                            o.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                return o = o.length > 1 ? K.unique(o) : o, this.pushStack(o, "closest", e)
            },
            index: function(e) {
                return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e),
                    i = K.merge(this.get(), n);
                return this.pushStack(a(n[0]) || a(i[0]) ? i : K.unique(i))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), K.fn.andSelf = K.fn.addBack, K.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return K.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return K.dir(e, "parentNode", n)
            },
            next: function(e) {
                return l(e, "nextSibling")
            },
            prev: function(e) {
                return l(e, "previousSibling")
            },
            nextAll: function(e) {
                return K.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return K.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return K.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return K.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return K.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return K.sibling(e.firstChild)
            },
            contents: function(e) {
                return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
            }
        }, function(e, t) {
            K.fn[e] = function(n, i) {
                var r = K.map(this, t, n);
                return Oe.test(e) || (i = n), i && "string" == typeof i && (r = K.filter(i, r)), r = this.length > 1 && !qe[e] ? K.unique(r) : r, this.length > 1 && Pe.test(e) && (r = r.reverse()), this.pushStack(r, e, Y.call(arguments).join(","))
            }
        }), K.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
            },
            dir: function(e, n, i) {
                for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !K(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
                return r
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var _e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ie = / jQuery\d+="(?:null|\d+)"/g,
            ze = /^\s+/,
            We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Re = /<([\w:]+)/,
            Be = /<tbody/i,
            Xe = /<|&#?\w+;/,
            Qe = /<(?:script|style|link)/i,
            Ye = /<(?:script|object|embed|option|style)/i,
            Ge = new RegExp("<(?:" + _e + ")[\\s/>]", "i"),
            Ue = /^(?:checkbox|radio)$/,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Je = /\/(java|ecma)script/i,
            Ke = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
            Ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            et = u(z),
            tt = et.appendChild(z.createElement("div"));
        Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, K.support.htmlSerialize || (Ze._default = [1, "X<div>", "</div>"]), K.fn.extend({
                text: function(e) {
                    return K.access(this, function(e) {
                        return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(e))
                    }, null, e, arguments.length)
                },
                wrapAll: function(e) {
                    if (K.isFunction(e)) return this.each(function(t) {
                        K(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return K.isFunction(e) ? this.each(function(t) {
                        K(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = K(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = K.isFunction(e);
                    return this.each(function(n) {
                        K(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                    })
                },
                before: function() {
                    if (!a(this[0])) return this.domManip(arguments, !1, function(e) {
                        this.parentNode.insertBefore(e, this)
                    });
                    if (arguments.length) {
                        var e = K.clean(arguments);
                        return this.pushStack(K.merge(e, this), "before", this.selector)
                    }
                },
                after: function() {
                    if (!a(this[0])) return this.domManip(arguments, !1, function(e) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    });
                    if (arguments.length) {
                        var e = K.clean(arguments);
                        return this.pushStack(K.merge(this, e), "after", this.selector)
                    }
                },
                remove: function(e, t) {
                    for (var n, i = 0; null != (n = this[i]); i++) e && !K.filter(e, [n]).length || (!t && 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), K.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return K.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return K.access(this, function(e) {
                        var n = this[0] || {},
                            i = 0,
                            r = this.length;
                        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ie, "") : t;
                        if ("string" == typeof e && !Qe.test(e) && (K.support.htmlSerialize || !Ge.test(e)) && (K.support.leadingWhitespace || !ze.test(e)) && !Ze[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(We, "<$1></$2>");
                            try {
                                for (; i < r; i++) n = this[i] || {}, 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                                n = 0
                            } catch (e) {}
                        }
                        n && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function(e) {
                    return a(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function(t) {
                        var n = K(this),
                            i = n.html();
                        n.replaceWith(e.call(this, t, i))
                    }) : ("string" != typeof e && (e = K(e).detach()), this.each(function() {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        K(this).remove(), t ? K(t).before(e) : K(n).append(e)
                    }))
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, n, i) {
                    e = [].concat.apply([], e);
                    var r, o, s, a, l = 0,
                        c = e[0],
                        u = [],
                        f = this.length;
                    if (!K.support.checkClone && f > 1 && "string" == typeof c && Ve.test(c)) return this.each(function() {
                        K(this).domManip(e, n, i)
                    });
                    if (K.isFunction(c)) return this.each(function(r) {
                        var o = K(this);
                        e[0] = c.call(this, r, n ? o.html() : t), o.domManip(e, n, i)
                    });
                    if (this[0]) {
                        if (r = K.buildFragment(e, this, u), s = r.fragment, o = s.firstChild, 1 === s.childNodes.length && (s = o), o)
                            for (n = n && K.nodeName(o, "tr"), a = r.cacheable || f - 1; l < f; l++) i.call(n && K.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === a ? s : K.clone(s, !0, !0));
                        s = o = null, u.length && K.each(u, function(e, t) {
                            t.src ? K.ajax ? K.ajax({
                                url: t.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ke, "")), t.parentNode && t.parentNode.removeChild(t)
                        })
                    }
                    return this
                }
            }), K.buildFragment = function(e, n, i) {
                var r, o, s, a = e[0];
                return n = n || z, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, 1 === e.length && "string" == typeof a && a.length < 512 && n === z && "<" === a.charAt(0) && !Ye.test(a) && (K.support.checkClone || !Ve.test(a)) && (K.support.html5Clone || !Ge.test(a)) && (o = !0, r = K.fragments[a], s = r !== t), r || (r = n.createDocumentFragment(), K.clean(e, n, r, i), o && (K.fragments[a] = s && r)), {
                    fragment: r,
                    cacheable: o
                }
            }, K.fragments = {}, K.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                K.fn[e] = function(n) {
                    var i, r = 0,
                        o = [],
                        s = K(n),
                        a = s.length,
                        l = 1 === this.length && this[0].parentNode;
                    if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a) return s[t](this[0]), this;
                    for (; r < a; r++) i = (r > 0 ? this.clone(!0) : this).get(), K(s[r])[t](i), o = o.concat(i);
                    return this.pushStack(o, e, s.selector)
                }
            }), K.extend({
                clone: function(e, t, n) {
                    var i, r, o, s;
                    if (K.support.html5Clone || K.isXMLDoc(e) || !Ge.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(s = tt.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                        for (p(e, s), i = h(e), r = h(s), o = 0; i[o]; ++o) r[o] && p(i[o], r[o]);
                    if (t && (f(e, s), n))
                        for (i = h(e), r = h(s), o = 0; i[o]; ++o) f(i[o], r[o]);
                    return i = r = null, s
                },
                clean: function(e, t, n, i) {
                    var r, o, s, a, l, c, d, f, p, h, g, v = t === z && et,
                        y = [];
                    for (t && "undefined" != typeof t.createDocumentFragment || (t = z), r = 0; null != (s = e[r]); r++)
                        if ("number" == typeof s && (s += ""), s) {
                            if ("string" == typeof s)
                                if (Xe.test(s)) {
                                    for (v = v || u(t), d = t.createElement("div"), v.appendChild(d), s = s.replace(We, "<$1></$2>"), a = (Re.exec(s) || ["", ""])[1].toLowerCase(), l = Ze[a] || Ze._default, c = l[0], d.innerHTML = l[1] + s + l[2]; c--;) d = d.lastChild;
                                    if (!K.support.tbody)
                                        for (f = Be.test(s), p = "table" !== a || f ? "<table>" !== l[1] || f ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, o = p.length - 1; o >= 0; --o) K.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                                    !K.support.leadingWhitespace && ze.test(s) && d.insertBefore(t.createTextNode(ze.exec(s)[0]), d.firstChild), s = d.childNodes, d.parentNode.removeChild(d)
                                } else s = t.createTextNode(s);
                            s.nodeType ? y.push(s) : K.merge(y, s)
                        } if (d && (s = d = v = null), !K.support.appendChecked)
                        for (r = 0; null != (s = y[r]); r++) K.nodeName(s, "input") ? m(s) : "undefined" != typeof s.getElementsByTagName && K.grep(s.getElementsByTagName("input"), m);
                    if (n)
                        for (h = function(e) {
                                if (!e.type || Je.test(e.type)) return i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                            }, r = 0; null != (s = y[r]); r++) K.nodeName(s, "script") && h(s) || (n.appendChild(s), "undefined" != typeof s.getElementsByTagName && (g = K.grep(K.merge([], s.getElementsByTagName("script")), h), y.splice.apply(y, [r + 1, 0].concat(g)), r += g.length));
                    return y
                },
                cleanData: function(e, t) {
                    for (var n, i, r, o, s = 0, a = K.expando, l = K.cache, c = K.support.deleteExpando, u = K.event.special; null != (r = e[s]); s++)
                        if ((t || K.acceptData(r)) && (i = r[a], n = i && l[i])) {
                            if (n.events)
                                for (o in n.events) u[o] ? K.event.remove(r, o) : K.removeEvent(r, o, n.handle);
                            l[i] && (delete l[i], c ? delete r[a] : r.removeAttribute ? r.removeAttribute(a) : r[a] = null, K.deletedIds.push(i))
                        }
                }
            }),
            function() {
                var e, t;
                K.uaMatch = function(e) {
                    e = e.toLowerCase();
                    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                }, e = K.uaMatch(R.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), K.browser = t, K.sub = function() {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    K.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
                        return i && i instanceof K && !(i instanceof e) && (i = e(i)), K.fn.init.call(this, n, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(z);
                    return e
                }
            }();
        var nt, it, rt, ot = /alpha\([^)]*\)/i,
            st = /opacity=([^)]*)/,
            at = /^(top|right|bottom|left)$/,
            lt = /^(none|table(?!-c[ea]).+)/,
            ct = /^margin/,
            ut = new RegExp("^(" + Z + ")(.*)$", "i"),
            dt = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
            ft = new RegExp("^([-+])=(" + Z + ")", "i"),
            pt = {},
            ht = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            mt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            gt = ["Top", "Right", "Bottom", "Left"],
            vt = ["Webkit", "O", "Moz", "ms"],
            yt = K.fn.toggle;
        K.fn.extend({
            css: function(e, n) {
                return K.access(this, function(e, n, i) {
                    return i !== t ? K.style(e, n, i) : K.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return y(this, !0)
            },
            hide: function() {
                return y(this)
            },
            toggle: function(e, t) {
                var n = "boolean" == typeof e;
                return K.isFunction(e) && K.isFunction(t) ? yt.apply(this, arguments) : this.each(function() {
                    (n ? e : v(this)) ? K(this).show(): K(this).hide()
                })
            }
        }), K.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = nt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, i, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, s, a, l = K.camelCase(n),
                        c = e.style;
                    if (n = K.cssProps[l] || (K.cssProps[l] = g(c, l)), a = K.cssHooks[n] || K.cssHooks[l], i === t) return a && "get" in a && (o = a.get(e, !1, r)) !== t ? o : c[n];
                    if ("string" === (s = typeof i) && (o = ft.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(K.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" === s && !K.cssNumber[l] && (i += "px"), a && "set" in a && (i = a.set(e, i, r)) === t))) try {
                        c[n] = i
                    } catch (e) {}
                }
            },
            css: function(e, n, i, r) {
                var o, s, a, l = K.camelCase(n);
                return n = K.cssProps[l] || (K.cssProps[l] = g(e.style, l)), a = K.cssHooks[n] || K.cssHooks[l], a && "get" in a && (o = a.get(e, !0, r)), o === t && (o = nt(e, n)), "normal" === o && n in mt && (o = mt[n]), i || r !== t ? (s = parseFloat(o), i || K.isNumeric(s) ? s || 0 : o) : o
            },
            swap: function(e, t, n) {
                var i, r, o = {};
                for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                i = n.call(e);
                for (r in t) e.style[r] = o[r];
                return i
            }
        }), e.getComputedStyle ? nt = function(t, n) {
            var i, r, o, s, a = e.getComputedStyle(t, null),
                l = t.style;
            return a && (i = a[n], "" === i && !K.contains(t.ownerDocument, t) && (i = K.style(t, n)), dt.test(i) && ct.test(n) && (r = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, i = a.width, l.width = r, l.minWidth = o, l.maxWidth = s)), i
        } : z.documentElement.currentStyle && (nt = function(e, t) {
            var n, i, r = e.currentStyle && e.currentStyle[t],
                o = e.style;
            return null == r && o && o[t] && (r = o[t]), dt.test(r) && !at.test(t) && (n = o.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : r, r = o.pixelLeft + "px", o.left = n, i && (e.runtimeStyle.left = i)), "" === r ? "auto" : r
        }), K.each(["height", "width"], function(e, t) {
            K.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return 0 === e.offsetWidth && lt.test(nt(e, "display")) ? K.swap(e, ht, function() {
                        return w(e, t, i)
                    }) : w(e, t, i)
                },
                set: function(e, n, i) {
                    return b(e, n, i ? x(e, t, i, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
                }
            }
        }), K.support.opacity || (K.cssHooks.opacity = {
            get: function(e, t) {
                return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, t >= 1 && "" === K.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
            }
        }), K(function() {
            K.support.reliableMarginRight || (K.cssHooks.marginRight = {
                get: function(e, t) {
                    return K.swap(e, {
                        display: "inline-block"
                    }, function() {
                        if (t) return nt(e, "marginRight")
                    })
                }
            }), !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function(e, t) {
                K.cssHooks[t] = {
                    get: function(e, n) {
                        if (n) {
                            var i = nt(e, t);
                            return dt.test(i) ? K(e).position()[t] + "px" : i
                        }
                    }
                }
            })
        }), K.expr && K.expr.filters && (K.expr.filters.hidden = function(e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nt(e, "display"))
        }, K.expr.filters.visible = function(e) {
            return !K.expr.filters.hidden(e)
        }), K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            K.cssHooks[e + t] = {
                expand: function(n) {
                    var i, r = "string" == typeof n ? n.split(" ") : [n],
                        o = {};
                    for (i = 0; i < 4; i++) o[e + gt[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ct.test(e) || (K.cssHooks[e + t].set = b)
        });
        var bt = /%20/g,
            xt = /\[\]$/,
            wt = /\r?\n/g,
            Ct = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            St = /^(?:select|textarea)/i;
        K.fn.extend({
            serialize: function() {
                return K.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? K.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || St.test(this.nodeName) || Ct.test(this.type))
                }).map(function(e, t) {
                    var n = K(this).val();
                    return null == n ? null : K.isArray(n) ? K.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(wt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(wt, "\r\n")
                    }
                }).get()
            }
        }), K.param = function(e, n) {
            var i, r = [],
                o = function(e, t) {
                    t = K.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (i in e) S(i, e[i], n, o);
            return r.join("&").replace(bt, "+")
        };
        var Tt, kt, Et = /#.*$/,
            jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Nt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            $t = /^(?:GET|HEAD)$/,
            Dt = /^\/\//,
            At = /\?/,
            Lt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            Mt = /([?&])_=[^&]*/,
            Ot = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Pt = K.fn.load,
            Ht = {},
            Ft = {},
            qt = ["*/"] + ["*"];
        try {
            kt = W.href
        } catch (e) {
            kt = z.createElement("a"), kt.href = "", kt = kt.href
        }
        Tt = Ot.exec(kt.toLowerCase()) || [], K.fn.load = function(e, n, i) {
            if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
            if (!this.length) return this;
            var r, o, s, a = this,
                l = e.indexOf(" ");
            return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), K.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), K.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function(e, t) {
                    i && a.each(i, s || [e.responseText, t, e])
                }
            }).done(function(e) {
                s = arguments, a.html(r ? K("<div>").append(e.replace(Lt, "")).find(r) : e)
            }), this
        }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
            K.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), K.each(["get", "post"], function(e, n) {
            K[n] = function(e, i, r, o) {
                return K.isFunction(i) && (o = o || r, r = i, i = t), K.ajax({
                    type: n,
                    url: e,
                    data: i,
                    success: r,
                    dataType: o
                })
            }
        }), K.extend({
            getScript: function(e, n) {
                return K.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return K.get(e, t, n, "json")
            },
            ajaxSetup: function(e, t) {
                return t ? E(e, K.ajaxSettings) : (t = e, e = K.ajaxSettings), E(e, t), e
            },
            ajaxSettings: {
                url: kt,
                isLocal: Nt.test(Tt[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": qt
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": K.parseJSON,
                    "text xml": K.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: T(Ht),
            ajaxTransport: T(Ft),
            ajax: function(e, n) {
                function i(e, n, i, s) {
                    var c, d, y, b, w, S = n;
                    2 !== x && (x = 2, l && clearTimeout(l), a = t, o = s || "", C.readyState = e > 0 ? 4 : 0, i && (b = j(f, C, i)), e >= 200 && e < 300 || 304 === e ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (K.lastModified[r] = w), (w = C.getResponseHeader("Etag")) && (K.etag[r] = w)), 304 === e ? (S = "notmodified", c = !0) : (c = N(f, b), S = c.state, d = c.data, y = c.error, c = !y)) : (y = S, S && !e || (S = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || S) + "", c ? m.resolveWith(p, [d, S, C]) : m.rejectWith(p, [C, S, y]), C.statusCode(v), v = t, u && h.trigger("ajax" + (c ? "Success" : "Error"), [C, f, c ? d : y]), g.fireWith(p, [C, S]), u && (h.trigger("ajaxComplete", [C, f]), --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var r, o, s, a, l, c, u, d, f = K.ajaxSetup({}, n),
                    p = f.context || f,
                    h = p !== f && (p.nodeType || p instanceof K) ? K(p) : K.event,
                    m = K.Deferred(),
                    g = K.Callbacks("once memory"),
                    v = f.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    C = {
                        readyState: 0,
                        setRequestHeader: function(e, t) {
                            if (!x) {
                                var n = e.toLowerCase();
                                e = b[n] = b[n] || e, y[e] = t
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? o : null
                        },
                        getResponseHeader: function(e) {
                            var n;
                            if (2 === x) {
                                if (!s)
                                    for (s = {}; n = jt.exec(o);) s[n[1].toLowerCase()] = n[2];
                                n = s[e.toLowerCase()]
                            }
                            return n === t ? null : n
                        },
                        overrideMimeType: function(e) {
                            return x || (f.mimeType = e), this
                        },
                        abort: function(e) {
                            return e = e || w, a && a.abort(e), i(0, e), this
                        }
                    };
                if (m.promise(C), C.success = C.done, C.error = C.fail, C.complete = g.add, C.statusCode = function(e) {
                        if (e) {
                            var t;
                            if (x < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else t = e[C.status], C.always(t)
                        }
                        return this
                    }, f.url = ((e || f.url) + "").replace(Et, "").replace(Dt, Tt[1] + "//"), f.dataTypes = K.trim(f.dataType || "*").toLowerCase().split(te), null == f.crossDomain && (c = Ot.exec(f.url.toLowerCase()) || !1, f.crossDomain = c && c.join(":") + (c[3] ? "" : "http:" === c[1] ? 80 : 443) !== Tt.join(":") + (Tt[3] ? "" : "http:" === Tt[1] ? 80 : 443)), f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)), k(Ht, f, n, C), 2 === x) return C;
                if (u = f.global, f.type = f.type.toUpperCase(), f.hasContent = !$t.test(f.type), u && 0 == K.active++ && K.event.trigger("ajaxStart"), !f.hasContent && (f.data && (f.url += (At.test(f.url) ? "&" : "?") + f.data, delete f.data), r = f.url, !1 === f.cache)) {
                    var S = K.now(),
                        T = f.url.replace(Mt, "$1_=" + S);
                    f.url = T + (T === f.url ? (At.test(f.url) ? "&" : "?") + "_=" + S : "")
                }(f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), f.ifModified && (r = r || f.url, K.lastModified[r] && C.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && C.setRequestHeader("If-None-Match", K.etag[r])), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : f.accepts["*"]);
                for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
                if (!f.beforeSend || !1 !== f.beforeSend.call(p, C, f) && 2 !== x) {
                    w = "abort";
                    for (d in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) C[d](f[d]);
                    if (a = k(Ft, f, n, C)) {
                        C.readyState = 1, u && h.trigger("ajaxSend", [C, f]), f.async && f.timeout > 0 && (l = setTimeout(function() {
                            C.abort("timeout")
                        }, f.timeout));
                        try {
                            x = 1, a.send(y, i)
                        } catch (e) {
                            if (!(x < 2)) throw e;
                            i(-1, e)
                        }
                    } else i(-1, "No Transport");
                    return C
                }
                return C.abort()
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        var _t = [],
            It = /\?/,
            zt = /(=)\?(?=&|$)|\?\?/,
            Wt = K.now();
        K.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = _t.pop() || K.expando + "_" + Wt++;
                return this[e] = !0, e
            }
        }), K.ajaxPrefilter("json jsonp", function(n, i, r) {
            var o, s, a, l = n.data,
                c = n.url,
                u = !1 !== n.jsonp,
                d = u && zt.test(c),
                f = u && !d && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(l);
            if ("jsonp" === n.dataTypes[0] || d || f) return o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, s = e[o], d ? n.url = c.replace(zt, "$1" + o) : f ? n.data = l.replace(zt, "$1" + o) : u && (n.url += (It.test(c) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return a || K.error(o + " was not called"), a[0]
            }, n.dataTypes[0] = "json", e[o] = function() {
                a = arguments
            }, r.always(function() {
                e[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, _t.push(o)), a && K.isFunction(s) && s(a[0]), a = s = t
            }), "script"
        }), K.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(e) {
                    return K.globalEval(e), e
                }
            }
        }), K.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), K.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, i = z.head || z.getElementsByTagName("head")[0] || z.documentElement;
                return {
                    send: function(r, o) {
                        n = z.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
                            (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || o(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(0, 1)
                    }
                }
            }
        });
        var Rt, Bt = !!e.ActiveXObject && function() {
                for (var e in Rt) Rt[e](0, 1)
            },
            Xt = 0;
        K.ajaxSettings.xhr = e.ActiveXObject ? function() {
                return !this.isLocal && $() || D()
            } : $,
            function(e) {
                K.extend(K.support, {
                    ajax: !!e,
                    cors: !!e && "withCredentials" in e
                })
            }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function(n) {
                if (!n.crossDomain || K.support.cors) {
                    var i;
                    return {
                        send: function(r, o) {
                            var s, a, l = n.xhr();
                            if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                                for (a in n.xhrFields) l[a] = n.xhrFields[a];
                            n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (a in r) l.setRequestHeader(a, r[a])
                            } catch (e) {}
                            l.send(n.hasContent && n.data || null), i = function(e, r) {
                                var a, c, u, d, f;
                                try {
                                    if (i && (r || 4 === l.readyState))
                                        if (i = t, s && (l.onreadystatechange = K.noop, Bt && delete Rt[s]), r) 4 !== l.readyState && l.abort();
                                        else {
                                            a = l.status, u = l.getAllResponseHeaders(), d = {}, (f = l.responseXML) && f.documentElement && (d.xml = f);
                                            try {
                                                d.text = l.responseText
                                            } catch (e) {}
                                            try {
                                                c = l.statusText
                                            } catch (e) {
                                                c = ""
                                            }
                                            a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                        }
                                } catch (e) {
                                    r || o(-1, e)
                                }
                                d && o(a, c, d, u)
                            }, n.async ? 4 === l.readyState ? setTimeout(i, 0) : (s = ++Xt, Bt && (Rt || (Rt = {}, K(e).unload(Bt)), Rt[s] = i), l.onreadystatechange = i) : i()
                        },
                        abort: function() {
                            i && i(0, 1)
                        }
                    }
                }
            });
        var Qt, Yt, Gt = /^(?:toggle|show|hide)$/,
            Ut = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
            Vt = /queueHooks$/,
            Jt = [P],
            Kt = {
                "*": [function(e, t) {
                    var n, i, r = this.createTween(e, t),
                        o = Ut.exec(t),
                        s = r.cur(),
                        a = +s || 0,
                        l = 1,
                        c = 20;
                    if (o) {
                        if (n = +o[2], "px" !== (i = o[3] || (K.cssNumber[e] ? "" : "px")) && a) {
                            a = K.css(r.elem, e, !0) || n || 1;
                            do {
                                l = l || ".5", a /= l, K.style(r.elem, e, a + i)
                            } while (l !== (l = r.cur() / s) && 1 !== l && --c)
                        }
                        r.unit = i, r.start = a, r.end = o[1] ? a + (o[1] + 1) * n : n
                    }
                    return r
                }]
            };
        K.Animation = K.extend(M, {
            tweener: function(e, t) {
                K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Kt[n] = Kt[n] || [], Kt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Jt.unshift(e) : Jt.push(e)
            }
        }), K.Tween = H, H.prototype = {
            constructor: H,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (K.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = H.propHooks[this.prop];
                return e && e.get ? e.get(this) : H.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, K.each(["toggle", "show", "hide"], function(e, t) {
            var n = K.fn[t];
            K.fn[t] = function(i, r, o) {
                return null == i || "boolean" == typeof i || !e && K.isFunction(i) && K.isFunction(r) ? n.apply(this, arguments) : this.animate(F(t, !0), i, r, o)
            }
        }), K.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(v).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = K.isEmptyObject(e),
                    o = K.speed(t, n, i),
                    s = function() {
                        var t = M(this, K.extend({}, e), o);
                        r && t.stop(!0)
                    };
                return r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, n, i) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = K.timers,
                        s = K._data(this);
                    if (n) s[n] && s[n].stop && r(s[n]);
                    else
                        for (n in s) s[n] && s[n].stop && Vt.test(n) && r(s[n]);
                    for (n = o.length; n--;) o[n].elem === this && (null == e || o[n].queue === e) && (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                    (t || !i) && K.dequeue(this, e)
                })
            }
        }), K.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            K.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), K.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? K.extend({}, e) : {
                complete: n || !n && t || K.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !K.isFunction(t) && t
            };
            return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue)
            }, i
        }, K.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, K.timers = [], K.fx = H.prototype.init, K.fx.tick = function() {
            for (var e, t = K.timers, n = 0; n < t.length; n++) !(e = t[n])() && t[n] === e && t.splice(n--, 1);
            t.length || K.fx.stop()
        }, K.fx.timer = function(e) {
            e() && K.timers.push(e) && !Yt && (Yt = setInterval(K.fx.tick, K.fx.interval))
        }, K.fx.interval = 13, K.fx.stop = function() {
            clearInterval(Yt), Yt = null
        }, K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function(e) {
            return K.grep(K.timers, function(t) {
                return e === t.elem
            }).length
        });
        var Zt = /^(?:body|html)$/i;
        K.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                K.offset.setOffset(this, e, t)
            });
            var n, i, r, o, s, a, l, c = {
                    top: 0,
                    left: 0
                },
                u = this[0],
                d = u && u.ownerDocument;
            if (d) return (i = d.body) === u ? K.offset.bodyOffset(u) : (n = d.documentElement, K.contains(n, u) ? ("undefined" != typeof u.getBoundingClientRect && (c = u.getBoundingClientRect()), r = q(d), o = n.clientTop || i.clientTop || 0, s = n.clientLeft || i.clientLeft || 0, a = r.pageYOffset || n.scrollTop, l = r.pageXOffset || n.scrollLeft, {
                top: c.top + a - o,
                left: c.left + l - s
            }) : c)
        }, K.offset = {
            bodyOffset: function(e) {
                var t = e.offsetTop,
                    n = e.offsetLeft;
                return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0, n += parseFloat(K.css(e, "marginLeft")) || 0), {
                    top: t,
                    left: n
                }
            },
            setOffset: function(e, t, n) {
                var i = K.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var r, o, s = K(e),
                    a = s.offset(),
                    l = K.css(e, "top"),
                    c = K.css(e, "left"),
                    u = ("absolute" === i || "fixed" === i) && K.inArray("auto", [l, c]) > -1,
                    d = {},
                    f = {};
                u ? (f = s.position(), r = f.top, o = f.left) : (r = parseFloat(l) || 0, o = parseFloat(c) || 0), K.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : s.css(d)
            }
        }, K.fn.extend({
            position: function() {
                if (this[0]) {
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        i = Zt.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : t.offset();
                    return n.top -= parseFloat(K.css(e, "marginTop")) || 0, n.left -= parseFloat(K.css(e, "marginLeft")) || 0, i.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0, {
                        top: n.top - i.top,
                        left: n.left - i.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || z.body; e && !Zt.test(e.nodeName) && "static" === K.css(e, "position");) e = e.offsetParent;
                    return e || z.body
                })
            }
        }), K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = /Y/.test(n);
            K.fn[e] = function(r) {
                return K.access(this, function(e, r, o) {
                    var s = q(e);
                    if (o === t) return s ? n in s ? s[n] : s.document.documentElement[r] : e[r];
                    s ? s.scrollTo(i ? K(s).scrollLeft() : o, i ? o : K(s).scrollTop()) : e[r] = o
                }, e, r, arguments.length, null)
            }
        }), K.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            K.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(i, r) {
                K.fn[r] = function(r, o) {
                    var s = arguments.length && (i || "boolean" != typeof r),
                        a = i || (!0 === r || !0 === o ? "margin" : "border");
                    return K.access(this, function(n, i, r) {
                        var o;
                        return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? K.css(n, i, r, a) : K.style(n, i, r, a)
                    }, n, s ? r : t, s, null)
                }
            })
        }), e.jQuery = e.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return K
        })
    }(window),
    function(e) {
        function t(t, i, s, a, l) {
            function c() {
                g.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"), i && n(i, s, a, l), l.startOrder = [], l.newOrder = [], l.origSort = [], l.checkSort = [], m.removeStyle(l.prefix + "filter, filter, " + l.prefix + "transform, transform, opacity, display").css(l.clean).removeAttr("data-checksum"), window.atob || m.css({
                    display: "none",
                    opacity: "0"
                });
                var e = l.resizeContainer ? "height" : "";
                g.removeStyle(l.prefix + "transition, transition, " + l.prefix + "perspective, perspective, " + l.prefix + "perspective-origin, perspective-origin, " + e), "list" == l.layoutMode ? (y.css({
                    display: l.targetDisplayList,
                    opacity: "1"
                }), l.origDisplay = l.targetDisplayList) : (y.css({
                    display: l.targetDisplayGrid,
                    opacity: "1"
                }), l.origDisplay = l.targetDisplayGrid), l.origLayout = l.layoutMode;
                setTimeout(function() {
                    if (m.removeStyle(l.prefix + "transition, transition"), l.mixing = !1, "function" == typeof l.onMixEnd) {
                        var e = l.onMixEnd.call(this, l);
                        l = e || l
                    }
                })
            }
            if (clearInterval(l.failsafe), l.mixing = !0, l.filter = t, "function" == typeof l.onMixStart) {
                var u = l.onMixStart.call(this, l);
                l = u || l
            }
            for (var d = l.transitionSpeed, f = 0; f < 2; f++) {
                var p = 0 == f ? p = l.prefix : "";
                l.transition[p + "transition"] = "all " + d + "ms linear", l.transition[p + "transform"] = p + "translate3d(0,0,0)", l.perspective[p + "perspective"] = l.perspectiveDistance + "px", l.perspective[p + "perspective-origin"] = l.perspectiveOrigin
            }
            var h = l.targetSelector,
                m = a.find(h);
            m.each(function() {
                this.data = {}
            });
            var g = m.parent();
            g.css(l.perspective), l.easingFallback = "ease-in-out", "smooth" == l.easing && (l.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"), "snap" == l.easing && (l.easing = "cubic-bezier(0.77, 0, 0.175, 1)"), "windback" == l.easing && (l.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", l.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)"), "windup" == l.easing && (l.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", l.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)");
            var v = "list" == l.layoutMode && null != l.listEffects ? l.listEffects : l.effects;
            Array.prototype.indexOf && (l.fade = v.indexOf("fade") > -1 ? "0" : "", l.scale = v.indexOf("scale") > -1 ? "scale(.01)" : "", l.rotateZ = v.indexOf("rotateZ") > -1 ? "rotate(180deg)" : "", l.rotateY = v.indexOf("rotateY") > -1 ? "rotateY(90deg)" : "", l.rotateX = v.indexOf("rotateX") > -1 ? "rotateX(90deg)" : "", l.blur = v.indexOf("blur") > -1 ? "blur(8px)" : "", l.grayscale = v.indexOf("grayscale") > -1 ? "grayscale(100%)" : "");
            var y = e(),
                b = e(),
                x = [],
                w = !1;
            "string" == typeof t ? x = o(t) : (w = !0, e.each(t, function(e) {
                x[e] = o(this)
            })), "or" == l.filterLogic ? ("" == x[0] && x.shift(), x.length < 1 ? b = b.add(a.find(h + ":visible")) : m.each(function() {
                var t = e(this);
                if (w) {
                    var n = 0;
                    e.each(x, function() {
                        this.length ? t.is("." + this.join(", .")) && n++ : n > 0 && n++
                    }), n == x.length ? y = y.add(t) : b = b.add(t)
                } else t.is("." + x.join(", .")) ? y = y.add(t) : b = b.add(t)
            })) : (y = y.add(g.find(h + "." + x.join("."))), b = b.add(g.find(h + ":not(." + x.join(".") + "):visible")));
            var C = y.length,
                S = e(),
                T = e(),
                k = e();
            if (b.each(function() {
                    var t = e(this);
                    "none" != t.css("display") && (S = S.add(t), k = k.add(t))
                }), y.filter(":visible").length == C && !S.length && !i) {
                if (l.origLayout == l.layoutMode) return c(), !1;
                if (1 == y.length) return "list" == l.layoutMode ? (a.addClass(l.listClass), a.removeClass(l.gridClass), k.css("display", l.targetDisplayList)) : (a.addClass(l.gridClass), a.removeClass(l.listClass), k.css("display", l.targetDisplayGrid)), c(), !1
            }
            if (l.origHeight = g.height(), y.length) {
                if (a.removeClass(l.failClass), y.each(function() {
                        var t = e(this);
                        "none" == t.css("display") ? T = T.add(t) : k = k.add(t)
                    }), l.origLayout != l.layoutMode && 0 == l.animateGridList) return "list" == l.layoutMode ? (a.addClass(l.listClass), a.removeClass(l.gridClass), k.css("display", l.targetDisplayList)) : (a.addClass(l.gridClass), a.removeClass(l.listClass), k.css("display", l.targetDisplayGrid)), c(), !1;
                if (!window.atob) return c(), !1;
                if (m.css(l.clean), k.each(function() {
                        this.data.origPos = e(this).offset()
                    }), "list" == l.layoutMode ? (a.addClass(l.listClass), a.removeClass(l.gridClass), T.css("display", l.targetDisplayList)) : (a.addClass(l.gridClass), a.removeClass(l.listClass), T.css("display", l.targetDisplayGrid)), T.each(function() {
                        this.data.showInterPos = e(this).offset()
                    }), S.each(function() {
                        this.data.hideInterPos = e(this).offset()
                    }), k.each(function() {
                        this.data.preInterPos = e(this).offset()
                    }), "list" == l.layoutMode ? k.css("display", l.targetDisplayList) : k.css("display", l.targetDisplayGrid), i && n(i, s, a, l), i && r(l.origSort, l.checkSort)) return c(), !1;
                S.hide(), T.each(function() {
                    this.data.finalPos = e(this).offset()
                }), k.each(function() {
                    this.data.finalPrePos = e(this).offset()
                }), l.newHeight = g.height(), i && n("reset", null, a, l), T.hide(), k.css("display", l.origDisplay), "block" == l.origDisplay ? (a.addClass(l.listClass), T.css("display", l.targetDisplayList)) : (a.removeClass(l.listClass), T.css("display", l.targetDisplayGrid)), l.resizeContainer && g.css("height", l.origHeight + "px");
                for (var E = {}, f = 0; f < 2; f++) {
                    var p = 0 == f ? p = l.prefix : "";
                    E[p + "transform"] = l.scale + " " + l.rotateX + " " + l.rotateY + " " + l.rotateZ, E[p + "filter"] = l.blur + " " + l.grayscale
                }
                T.css(E), k.each(function() {
                    var t = this.data,
                        n = e(this);
                    n.hasClass("mix_tohide") ? (t.preTX = t.origPos.left - t.hideInterPos.left, t.preTY = t.origPos.top - t.hideInterPos.top) : (t.preTX = t.origPos.left - t.preInterPos.left, t.preTY = t.origPos.top - t.preInterPos.top);
                    for (var i = {}, r = 0; r < 2; r++) {
                        var o = 0 == r ? o = l.prefix : "";
                        i[o + "transform"] = "translate(" + t.preTX + "px," + t.preTY + "px)"
                    }
                    n.css(i)
                }), "list" == l.layoutMode ? (a.addClass(l.listClass), a.removeClass(l.gridClass)) : (a.addClass(l.gridClass), a.removeClass(l.listClass));
                setTimeout(function() {
                    if (l.resizeContainer) {
                        for (var t = {}, n = 0; n < 2; n++) {
                            var i = 0 == n ? i = l.prefix : "";
                            t[i + "transition"] = "all " + d + "ms ease-in-out", t.height = l.newHeight + "px"
                        }
                        g.css(t)
                    }
                    S.css("opacity", l.fade), T.css("opacity", 1), T.each(function() {
                        var t = this.data;
                        t.tX = t.finalPos.left - t.showInterPos.left, t.tY = t.finalPos.top - t.showInterPos.top;
                        for (var n = {}, i = 0; i < 2; i++) {
                            var r = 0 == i ? r = l.prefix : "";
                            n[r + "transition-property"] = r + "transform, " + r + "filter, opacity", n[r + "transition-timing-function"] = l.easing + ", linear, linear", n[r + "transition-duration"] = d + "ms", n[r + "transition-delay"] = "0", n[r + "transform"] = "translate(" + t.tX + "px," + t.tY + "px)", n[r + "filter"] = "none"
                        }
                        e(this).css("-webkit-transition", "all " + d + "ms " + l.easingFallback).css(n)
                    }), k.each(function() {
                        var t = this.data;
                        t.tX = 0 != t.finalPrePos.left ? t.finalPrePos.left - t.preInterPos.left : 0, t.tY = 0 != t.finalPrePos.left ? t.finalPrePos.top - t.preInterPos.top : 0;
                        for (var n = {}, i = 0; i < 2; i++) {
                            var r = 0 == i ? r = l.prefix : "";
                            n[r + "transition"] = "all " + d + "ms " + l.easing, n[r + "transform"] = "translate(" + t.tX + "px," + t.tY + "px)"
                        }
                        e(this).css("-webkit-transition", "all " + d + "ms " + l.easingFallback).css(n)
                    });
                    for (var r = {}, n = 0; n < 2; n++) {
                        var i = 0 == n ? i = l.prefix : "";
                        r[i + "transition"] = "all " + d + "ms " + l.easing + ", " + i + "filter " + d + "ms linear, opacity " + d + "ms linear", r[i + "transform"] = l.scale + " " + l.rotateX + " " + l.rotateY + " " + l.rotateZ, r[i + "filter"] = l.blur + " " + l.grayscale, r.opacity = l.fade
                    }
                    S.css(r), g.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(t) {
                        (t.originalEvent.propertyName.indexOf("transform") > -1 || t.originalEvent.propertyName.indexOf("opacity") > -1) && (h.indexOf(".") > -1 ? e(t.target).hasClass(h.replace(".", "")) && c() : e(t.target).is(h) && c())
                    })
                }, 10);
                l.failsafe = setTimeout(function() {
                    l.mixing && c()
                }, d + 400)
            } else {
                if (l.resizeContainer && g.css("height", l.origHeight + "px"), !window.atob) return c(), !1;
                S = b;
                setTimeout(function() {
                    if (g.css(l.perspective), l.resizeContainer) {
                        for (var e = {}, t = 0; t < 2; t++) {
                            var n = 0 == t ? n = l.prefix : "";
                            e[n + "transition"] = "height " + d + "ms ease-in-out", e.height = l.minHeight + "px"
                        }
                        g.css(e)
                    }
                    if (m.css(l.transition), b.length) {
                        for (var i = {}, t = 0; t < 2; t++) {
                            var n = 0 == t ? n = l.prefix : "";
                            i[n + "transform"] = l.scale + " " + l.rotateX + " " + l.rotateY + " " + l.rotateZ, i[n + "filter"] = l.blur + " " + l.grayscale, i.opacity = l.fade
                        }
                        S.css(i), g.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(e) {
                            (e.originalEvent.propertyName.indexOf("transform") > -1 || e.originalEvent.propertyName.indexOf("opacity") > -1) && (a.addClass(l.failClass), c())
                        })
                    } else l.mixing = !1
                }, 10)
            }
        }

        function n(t, n, i, r) {
            function o(e, n) {
                var i = isNaN(1 * e.attr(t)) ? e.attr(t).toLowerCase() : 1 * e.attr(t),
                    r = isNaN(1 * n.attr(t)) ? n.attr(t).toLowerCase() : 1 * n.attr(t);
                return i < r ? -1 : i > r ? 1 : 0
            }

            function s(e) {
                "asc" == n ? l.prepend(e).prepend(" ") : l.append(e).append(" ")
            }

            function a(e) {
                for (var t = e.slice(), n = t.length, i = n; i--;) {
                    var r = parseInt(Math.random() * n),
                        o = t[i];
                    t[i] = t[r], t[r] = o
                }
                return t
            }
            i.find(r.targetSelector).wrapAll('<div class="mix_sorter"/>');
            var l = i.find(".mix_sorter");
            if (r.origSort.length || l.find(r.targetSelector + ":visible").each(function() {
                    e(this).wrap("<s/>"), r.origSort.push(e(this).parent().html().replace(/\s+/g, "")), e(this).unwrap()
                }), l.empty(), "reset" == t) e.each(r.startOrder, function() {
                l.append(this).append(" ")
            });
            else if ("default" == t) e.each(r.origOrder, function() {
                s(this)
            });
            else if ("random" == t) r.newOrder.length || (r.newOrder = a(r.startOrder)), e.each(r.newOrder, function() {
                l.append(this).append(" ")
            });
            else if ("custom" == t) e.each(n, function() {
                s(this)
            });
            else {
                if (void 0 === r.origOrder[0].attr(t)) return console.log("No such attribute found. Terminating"), !1;
                r.newOrder.length || (e.each(r.origOrder, function() {
                    r.newOrder.push(e(this))
                }), r.newOrder.sort(o)), e.each(r.newOrder, function() {
                    s(this)
                })
            }
            r.checkSort = [], l.find(r.targetSelector + ":visible").each(function(t) {
                var n = e(this);
                0 == t && n.attr("data-checksum", "1"), n.wrap("<s/>"), r.checkSort.push(n.parent().html().replace(/\s+/g, "")), n.unwrap()
            }), i.find(r.targetSelector).unwrap()
        }

        function i(e) {
            for (var t = ["Webkit", "Moz", "O", "ms"], n = 0; n < t.length; n++)
                if (t[n] + "Transition" in e.style) return t[n];
            return "transition" in e.style && ""
        }

        function r(e, t) {
            if (e.length != t.length) return !1;
            for (var n = 0; n < t.length; n++) {
                if (e[n].compare && !e[n].compare(t[n])) return !1;
                if (e[n] !== t[n]) return !1
            }
            return !0
        }

        function o(t) {
            t = t.replace(/\s{2,}/g, " ");
            var n = t.split(" ");
            return e.each(n, function(e) {
                "all" == this && (n[e] = "mix_all")
            }), "" == n[0] && n.shift(), n
        }
        var s = {
            init: function(r) {
                return this.each(function() {
                    var o = {
                        targetSelector: ".mix",
                        filterSelector: ".filter",
                        sortSelector: ".sort",
                        buttonEvent: "click",
                        effects: ["fade", "scale"],
                        listEffects: null,
                        easing: "smooth",
                        layoutMode: "grid",
                        targetDisplayGrid: "inline-block",
                        targetDisplayList: "block",
                        listClass: "",
                        gridClass: "",
                        transitionSpeed: 600,
                        showOnLoad: "all",
                        sortOnLoad: !1,
                        multiFilter: !1,
                        filterLogic: "or",
                        resizeContainer: !0,
                        minHeight: 0,
                        failClass: "fail",
                        perspectiveDistance: "3000",
                        perspectiveOrigin: "50% 50%",
                        animateGridList: !0,
                        onMixLoad: null,
                        onMixStart: null,
                        onMixEnd: null,
                        container: null,
                        origOrder: [],
                        startOrder: [],
                        newOrder: [],
                        origSort: [],
                        checkSort: [],
                        filter: "",
                        mixing: !1,
                        origDisplay: "",
                        origLayout: "",
                        origHeight: 0,
                        newHeight: 0,
                        isTouch: !1,
                        resetDelay: 0,
                        failsafe: null,
                        prefix: "",
                        easingFallback: "ease-in-out",
                        transition: {},
                        perspective: {},
                        clean: {},
                        fade: "1",
                        scale: "",
                        rotateX: "",
                        rotateY: "",
                        rotateZ: "",
                        blur: "",
                        grayscale: ""
                    };
                    r && e.extend(o, r), this.config = o, e.support.touch = "ontouchend" in document, e.support.touch && (o.isTouch = !0, o.resetDelay = 350), o.container = e(this);
                    var s = o.container;
                    if (o.prefix = i(s[0]), o.prefix = o.prefix ? "-" + o.prefix.toLowerCase() + "-" : "", s.find(o.targetSelector).each(function() {
                            o.origOrder.push(e(this))
                        }), o.sortOnLoad) {
                        var a, l;
                        e.isArray(o.sortOnLoad) ? (a = o.sortOnLoad[0], l = o.sortOnLoad[1], e(o.sortSelector + "[data-sort=" + o.sortOnLoad[0] + "][data-order=" + o.sortOnLoad[1] + "]").addClass("active")) : (e(o.sortSelector + "[data-sort=" + o.sortOnLoad + "]").addClass("active"), a = o.sortOnLoad, o.sortOnLoad = "desc"), n(a, l, s, o)
                    }
                    for (var c = 0; c < 2; c++) {
                        var u = 0 == c ? u = o.prefix : "";
                        o.transition[u + "transition"] = "all " + o.transitionSpeed + "ms ease-in-out", o.perspective[u + "perspective"] = o.perspectiveDistance + "px", o.perspective[u + "perspective-origin"] = o.perspectiveOrigin
                    }
                    for (var c = 0; c < 2; c++) {
                        var u = 0 == c ? u = o.prefix : "";
                        o.clean[u + "transition"] = "none"
                    }
                    "list" == o.layoutMode ? (s.addClass(o.listClass), o.origDisplay = o.targetDisplayList) : (s.addClass(o.gridClass), o.origDisplay = o.targetDisplayGrid), o.origLayout = o.layoutMode;
                    var d = o.showOnLoad.split(" ");
                    e.each(d, function() {
                        e(o.filterSelector + '[data-filter="' + this + '"]').addClass("active")
                    }), s.find(o.targetSelector).addClass("mix_all"), "all" == d[0] && (d[0] = "mix_all", o.showOnLoad = "mix_all");
                    var f = e();
                    e.each(d, function() {
                        f = f.add(e("." + this))
                    }), f.each(function() {
                        var t = e(this);
                        "list" == o.layoutMode ? t.css("display", o.targetDisplayList) : t.css("display", o.targetDisplayGrid), t.css(o.transition)
                    });
                    setTimeout(function() {
                        o.mixing = !0, f.css("opacity", "1");
                        setTimeout(function() {
                            if ("list" == o.layoutMode ? f.removeStyle(o.prefix + "transition, transition").css({
                                    display: o.targetDisplayList,
                                    opacity: 1
                                }) : f.removeStyle(o.prefix + "transition, transition").css({
                                    display: o.targetDisplayGrid,
                                    opacity: 1
                                }), o.mixing = !1, "function" == typeof o.onMixLoad) {
                                var e = o.onMixLoad.call(this, o);
                                o = e || o
                            }
                        }, o.transitionSpeed)
                    }, 10);
                    o.filter = o.showOnLoad, e(o.sortSelector).bind(o.buttonEvent, function() {
                        if (!o.mixing) {
                            var n = e(this),
                                i = n.attr("data-sort"),
                                r = n.attr("data-order");
                            if (n.hasClass("active")) {
                                if ("random" != i) return !1
                            } else e(o.sortSelector).removeClass("active"), n.addClass("active");
                            s.find(o.targetSelector).each(function() {
                                o.startOrder.push(e(this))
                            }), t(o.filter, i, r, s, o)
                        }
                    }), e(o.filterSelector).bind(o.buttonEvent, function() {
                        if (!o.mixing) {
                            var n = e(this);
                            if (0 == o.multiFilter) e(o.filterSelector).removeClass("active"), n.addClass("active"), o.filter = n.attr("data-filter"), e(o.filterSelector + '[data-filter="' + o.filter + '"]').addClass("active");
                            else {
                                var i = n.attr("data-filter");
                                if (n.hasClass("active")) {
                                    n.removeClass("active");
                                    var r = new RegExp("(\\s|^)" + i);
                                    o.filter = o.filter.replace(r, "")
                                } else n.addClass("active"), o.filter = o.filter + " " + i
                            }
                            t(o.filter, null, null, s, o)
                        }
                    })
                })
            },
            toGrid: function() {
                return this.each(function() {
                    var n = this.config;
                    "grid" != n.layoutMode && (n.layoutMode = "grid", t(n.filter, null, null, e(this), n))
                })
            },
            toList: function() {
                return this.each(function() {
                    var n = this.config;
                    "list" != n.layoutMode && (n.layoutMode = "list", t(n.filter, null, null, e(this), n))
                })
            },
            filter: function(n) {
                return this.each(function() {
                    var i = this.config;
                    i.mixing || (e(i.filterSelector).removeClass("active"), e(i.filterSelector + '[data-filter="' + n + '"]').addClass("active"), t(n, null, null, e(this), i))
                })
            },
            sort: function(n) {
                return this.each(function() {
                    var i = this.config,
                        r = e(this);
                    if (!i.mixing) {
                        if (e(i.sortSelector).removeClass("active"), e.isArray(n)) {
                            var o = n[0],
                                s = n[1];
                            e(i.sortSelector + '[data-sort="' + n[0] + '"][data-order="' + n[1] + '"]').addClass("active")
                        } else {
                            e(i.sortSelector + '[data-sort="' + n + '"]').addClass("active");
                            var o = n,
                                s = "desc"
                        }
                        r.find(i.targetSelector).each(function() {
                            i.startOrder.push(e(this))
                        }), t(i.filter, o, s, r, i)
                    }
                })
            },
            multimix: function(n) {
                return this.each(function() {
                    var i = this.config,
                        r = e(this);
                    multiOut = {
                        filter: i.filter,
                        sort: null,
                        order: "desc",
                        layoutMode: i.layoutMode
                    }, e.extend(multiOut, n), i.mixing || (e(i.filterSelector).add(i.sortSelector).removeClass("active"), e(i.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass("active"), "undefined" != typeof multiOut.sort && (e(i.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass("active"), r.find(i.targetSelector).each(function() {
                        i.startOrder.push(e(this))
                    })), i.layoutMode = multiOut.layoutMode, t(multiOut.filter, multiOut.sort, multiOut.order, r, i))
                })
            },
            remix: function(n) {
                return this.each(function() {
                    var i = this.config,
                        r = e(this);
                    i.origOrder = [], r.find(i.targetSelector).each(function() {
                        var t = e(this);
                        t.addClass("mix_all"), i.origOrder.push(t)
                    }), i.mixing || void 0 === n || (e(i.filterSelector).removeClass("active"), e(i.filterSelector + '[data-filter="' + n + '"]').addClass("active"), t(n, null, null, r, i))
                })
            }
        };
        e.fn.mixitup = function(e) {
            return s[e] ? s[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void 0 : s.init.apply(this, arguments)
        }, e.fn.removeStyle = function(t) {
            return this.each(function() {
                var n = e(this);
                t = t.replace(/\s+/g, "");
                var i = t.split(",");
                e.each(i, function() {
                    var e = new RegExp(this.toString() + "[^;]+;?", "g");
                    n.attr("style", function(t, n) {
                        if (n) return n.replace(e, "")
                    })
                })
            })
        }
    }(jQuery),
    function(e) {
        "use strict";
        e(function() {
            e.support.transition = function() {
                var e = function() {
                    var e, t = document.createElement("bootstrap"),
                        n = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                    for (e in n)
                        if (t.style[e] !== undefined) return n[e]
                }();
                return e && {
                    end: e
                }
            }()
        })
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function(t, n) {
            this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
        t.prototype = {
            constructor: t,
            toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function() {
                var t = this,
                    n = e.Event("show");
                this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                    var n = e.support.transition && t.$element.hasClass("fade");
                    t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
                        t.$element.focus().trigger("shown")
                    }) : t.$element.focus().trigger("shown")
                }))
            },
            hide: function(t) {
                t && t.preventDefault();
                t = e.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            },
            enforceFocus: function() {
                var t = this;
                e(document).on("focusin.modal", function(e) {
                    t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()
                })
            },
            escape: function() {
                var e = this;
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                    27 == t.which && e.hide()
                }) : this.isShown || this.$element.off("keyup.dismiss.modal")
            },
            hideWithTransition: function() {
                var t = this,
                    n = setTimeout(function() {
                        t.$element.off(e.support.transition.end), t.hideModal()
                    }, 500);
                this.$element.one(e.support.transition.end, function() {
                    clearTimeout(n), t.hideModal()
                })
            },
            hideModal: function() {
                var e = this;
                this.$element.hide(), this.backdrop(function() {
                    e.removeBackdrop(), e.$element.trigger("hidden")
                })
            },
            removeBackdrop: function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            },
            backdrop: function(t) {
                var n = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var i = e.support.transition && n;
                    if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                    i ? this.$backdrop.one(e.support.transition.end, t) : t()
                } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
            }
        };
        var n = e.fn.modal;
        e.fn.modal = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("modal"),
                    o = e.extend({}, e.fn.modal.defaults, i.data(), "object" == typeof n && n);
                r || i.data("modal", r = new t(this, o)), "string" == typeof n ? r[n]() : o.show && r.show()
            })
        }, e.fn.modal.defaults = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
            return e.fn.modal = n, this
        }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
            var n = e(this),
                i = n.attr("href"),
                r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                o = r.data("modal") ? "toggle" : e.extend({
                    remote: !/#/.test(i) && i
                }, r.data(), n.data());
            t.preventDefault(), r.modal(o).one("hide", function() {
                n.focus()
            })
        })
    }(window.jQuery),
    function(e) {
        "use strict";

        function t() {
            e(".dropdown-backdrop").remove(), e(i).each(function() {
                n(e(this)).removeClass("open")
            })
        }

        function n(t) {
            var n, i = t.attr("data-target");
            return i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), n = i && e(i), n && n.length || (n = t.parent()), n
        }
        var i = "[data-toggle=dropdown]",
            r = function(t) {
                var n = e(t).on("click.dropdown.data-api", this.toggle);
                e("html").on("click.dropdown.data-api", function() {
                    n.parent().removeClass("open")
                })
            };
        r.prototype = {
            constructor: r,
            toggle: function() {
                var i, r, o = e(this);
                if (!o.is(".disabled, :disabled")) return i = n(o), r = i.hasClass("open"), t(), r || ("ontouchstart" in document.documentElement && e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click", t), i.toggleClass("open")), o.focus(), !1
            },
            keydown: function(t) {
                var r, o, s, a, l;
                if (/(38|40|27)/.test(t.keyCode) && (r = e(this), t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled"))) {
                    if (s = n(r), !(a = s.hasClass("open")) || a && 27 == t.keyCode) return 27 == t.which && s.find(i).focus(), r.click();
                    o = e("[role=menu] li:not(.divider):visible a", s), o.length && (l = o.index(o.filter(":focus")), 38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < o.length - 1 && l++, ~l || (l = 0), o.eq(l).focus())
                }
            }
        };
        var o = e.fn.dropdown;
        e.fn.dropdown = function(t) {
            return this.each(function() {
                var n = e(this),
                    i = n.data("dropdown");
                i || n.data("dropdown", i = new r(this)), "string" == typeof t && i[t].call(n)
            })
        }, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
            return e.fn.dropdown = o, this
        }, e(document).on("click.dropdown.data-api", t).on("click.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.dropdown.data-api", i, r.prototype.toggle).on("keydown.dropdown.data-api", i + ", [role=menu]", r.prototype.keydown)
    }(window.jQuery),
    function(e) {
        "use strict";

        function t(t, n) {
            var i, r = e.proxy(this.process, this),
                o = e(e(t).is("body") ? window : t);
            this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = o.on("scroll.scroll-spy.data-api", r), this.selector = (this.options.target || (i = e(t).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body"), this.refresh(), this.process()
        }
        t.prototype = {
            constructor: t,
            refresh: function() {
                var t = this;
                this.offsets = e([]), this.targets = e([]), this.$body.find(this.selector).map(function() {
                    var n = e(this),
                        i = n.data("target") || n.attr("href"),
                        r = /^#\w/.test(i) && e(i);
                    return r && r.length && [
                        [r.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), i]
                    ] || null
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).each(function() {
                    t.offsets.push(this[0]), t.targets.push(this[1])
                })
            },
            process: function() {
                var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                    n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                    i = n - this.$scrollElement.height(),
                    r = this.offsets,
                    o = this.targets,
                    s = this.activeTarget;
                if (t >= i) return s != (e = o.last()[0]) && this.activate(e);
                for (e = r.length; e--;) s != o[e] && t >= r[e] && (!r[e + 1] || t <= r[e + 1]) && this.activate(o[e])
            },
            activate: function(t) {
                var n, i;
                this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(i).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
            }
        };
        var n = e.fn.scrollspy;
        e.fn.scrollspy = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("scrollspy"),
                    o = "object" == typeof n && n;
                r || i.data("scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
            offset: 10
        }, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = n, this
        }, e(window).on("load", function() {
            e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                t.scrollspy(t.data())
            })
        })
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function(t) {
            this.element = e(t)
        };
        t.prototype = {
            constructor: t,
            show: function() {
                var t, n, i, r = this.element,
                    o = r.closest("ul:not(.dropdown-menu)"),
                    s = r.attr("data-target");
                s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), r.parent("li").hasClass("active") || (t = o.find(".active:last a")[0], i = e.Event("show", {
                    relatedTarget: t
                }), r.trigger(i), i.isDefaultPrevented() || (n = e(s), this.activate(r.parent("li"), o), this.activate(n, n.parent(), function() {
                    r.trigger({
                        type: "shown",
                        relatedTarget: t
                    })
                })))
            },
            activate: function(t, n, i) {
                function r() {
                    o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
                }
                var o = n.find("> .active"),
                    s = i && e.support.transition && o.hasClass("fade");
                s ? o.one(e.support.transition.end, r) : r(), o.removeClass("in")
            }
        };
        var n = e.fn.tab;
        e.fn.tab = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("tab");
                r || i.data("tab", r = new t(this)), "string" == typeof n && r[n]()
            })
        }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
            return e.fn.tab = n, this
        }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
            t.preventDefault(), e(this).tab("show")
        })
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function(e, t) {
            this.init("tooltip", e, t)
        };
        t.prototype = {
            constructor: t,
            init: function(t, n, i) {
                var r, o, s, a, l;
                for (this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.enabled = !0, s = this.options.trigger.split(" "), l = s.length; l--;) a = s[l], "click" == a ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != a && (r = "hover" == a ? "mouseenter" : "focus", o = "hover" == a ? "mouseleave" : "blur", this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
                this.options.selector ? this._options = e.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(t) {
                return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), t
            },
            enter: function(t) {
                var n, i = e.fn[this.type].defaults,
                    r = {};
                if (this._options && e.each(this._options, function(e, t) {
                        i[e] != t && (r[e] = t)
                    }, this), n = e(t.currentTarget)[this.type](r).data(this.type), !n.options.delay || !n.options.delay.show) return n.show();
                clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function() {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)
            },
            leave: function(t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                if (this.timeout && clearTimeout(this.timeout), !n.options.delay || !n.options.delay.hide) return n.hide();
                n.hoverState = "out", this.timeout = setTimeout(function() {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)
            },
            show: function() {
                var t, n, i, r, o, s, a = e.Event("show");
                if (this.hasContent() && this.enabled) {
                    if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                    switch (t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), i = t[0].offsetWidth, r = t[0].offsetHeight, o) {
                        case "bottom":
                            s = {
                                top: n.top + n.height,
                                left: n.left + n.width / 2 - i / 2
                            };
                            break;
                        case "top":
                            s = {
                                top: n.top - r,
                                left: n.left + n.width / 2 - i / 2
                            };
                            break;
                        case "left":
                            s = {
                                top: n.top + n.height / 2 - r / 2,
                                left: n.left - i
                            };
                            break;
                        case "right":
                            s = {
                                top: n.top + n.height / 2 - r / 2,
                                left: n.left + n.width
                            }
                    }
                    this.applyPlacement(s, o), this.$element.trigger("shown")
                }
            },
            applyPlacement: function(e, t) {
                var n, i, r, o, s = this.tip(),
                    a = s[0].offsetWidth,
                    l = s[0].offsetHeight;
                s.offset(e).addClass(t).addClass("in"), n = s[0].offsetWidth, i = s[0].offsetHeight, "top" == t && i != l && (e.top = e.top + l - i, o = !0), "bottom" == t || "top" == t ? (r = 0, e.left < 0 && (r = -2 * e.left, e.left = 0, s.offset(e), n = s[0].offsetWidth, i = s[0].offsetHeight), this.replaceArrow(r - a + n, n, "left")) : this.replaceArrow(i - l, i, "top"), o && s.offset(e)
            },
            replaceArrow: function(e, t, n) {
                this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
            },
            setContent: function() {
                var e = this.tip(),
                    t = this.getTitle();
                e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
            },
            hide: function() {
                function t() {
                    var t = setTimeout(function() {
                        n.off(e.support.transition.end).detach()
                    }, 500);
                    n.one(e.support.transition.end, function() {
                        clearTimeout(t), n.detach()
                    })
                }
                var n = this.tip(),
                    i = e.Event("hide");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? t() : n.detach(), this.$element.trigger("hidden"), this
            },
            fixTitle: function() {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function() {
                var t = this.$element[0];
                return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }, this.$element.offset())
            },
            getTitle: function() {
                var e = this.$element,
                    t = this.options;
                return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
            },
            tip: function() {
                return this.$tip = this.$tip || e(this.options.template)
            },
            arrow: function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function(t) {
                var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
                n.tip().hasClass("in") ? n.hide() : n.show()
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        };
        var n = e.fn.tooltip;
        e.fn.tooltip = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("tooltip"),
                    o = "object" == typeof n && n;
                r || i.data("tooltip", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, e.fn.tooltip.noConflict = function() {
            return e.fn.tooltip = n, this
        }
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function(e, t) {
            this.init("popover", e, t)
        };
        t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
            constructor: t,
            setContent: function() {
                var e = this.tip(),
                    t = this.getTitle(),
                    n = this.getContent();
                e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
            },
            hasContent: function() {
                return this.getTitle() || this.getContent()
            },
            getContent: function() {
                var e = this.$element,
                    t = this.options;
                return ("function" == typeof t.content ? t.content.call(e[0]) : t.content) || e.attr("data-content")
            },
            tip: function() {
                return this.$tip || (this.$tip = e(this.options.template)), this.$tip
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        });
        var n = e.fn.popover;
        e.fn.popover = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("popover"),
                    o = "object" == typeof n && n;
                r || i.data("popover", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), e.fn.popover.noConflict = function() {
            return e.fn.popover = n, this
        }
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function(t, n) {
            this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function() {
                setTimeout(e.proxy(this.checkPosition, this), 1)
            }, this)), this.$element = e(t), this.checkPosition()
        };
        t.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var t, n = e(document).height(),
                    i = this.$window.scrollTop(),
                    r = this.$element.offset(),
                    o = this.options.offset,
                    s = o.bottom,
                    a = o.top,
                    l = "affix affix-top affix-bottom";
                "object" != typeof o && (s = a = o), "function" == typeof a && (a = o.top()), "function" == typeof s && (s = o.bottom()), t = !(null != this.unpin && i + this.unpin <= r.top) && (null != s && r.top + this.$element.height() >= n - s ? "bottom" : null != a && i <= a && "top"), this.affixed !== t && (this.affixed = t, this.unpin = "bottom" == t ? r.top - i : null, this.$element.removeClass(l).addClass("affix" + (t ? "-" + t : "")))
            }
        };
        var n = e.fn.affix;
        e.fn.affix = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("affix"),
                    o = "object" == typeof n && n;
                r || i.data("affix", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {
            offset: 0
        }, e.fn.affix.noConflict = function() {
            return e.fn.affix = n, this
        }, e(window).on("load", function() {
            e('[data-spy="affix"]').each(function() {
                var t = e(this),
                    n = t.data();
                n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
            })
        })
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = '[data-dismiss="alert"]',
            n = function(n) {
                e(n).on("click", t, this.close)
            };
        n.prototype.close = function(t) {
            function n() {
                i.trigger("closed").remove()
            }
            var i, r = e(this),
                o = r.attr("data-target");
            o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), i = e(o), t && t.preventDefault(), i.length || (i = r.hasClass("alert") ? r : r.parent()), i.trigger(t = e.Event("close")), t.isDefaultPrevented() || (i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, n) : n())
        };
        var i = e.fn.alert;
        e.fn.alert = function(t) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("alert");
                r || i.data("alert", r = new n(this)), "string" == typeof t && r[t].call(i)
            })
        }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
            return e.fn.alert = i, this
        }, e(document).on("click.alert.data-api", t, n.prototype.close)
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
        };
        t.prototype.setState = function(e) {
            var t = "disabled",
                n = this.$element,
                i = n.data(),
                r = n.is("input") ? "val" : "html";
            e += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[e] || this.options[e]), setTimeout(function() {
                "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
            }, 0)
        }, t.prototype.toggle = function() {
            var e = this.$element.closest('[data-toggle="buttons-radio"]');
            e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
        };
        var n = e.fn.button;
        e.fn.button = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("button"),
                    o = "object" == typeof n && n;
                r || i.data("button", r = new t(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n)
            })
        }, e.fn.button.defaults = {
            loadingText: "loading..."
        }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
            return e.fn.button = n, this
        }, e(document).on("click.button.data-api", "[data-toggle^=button]", function(t) {
            var n = e(t.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
        })
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
        };
        t.prototype = {
            constructor: t,
            dimension: function() {
                return this.$element.hasClass("width") ? "width" : "height"
            },
            show: function() {
                var t, n, i, r;
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    if (t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), (i = this.$parent && this.$parent.find("> .accordion-group > .in")) && i.length) {
                        if ((r = i.data("collapse")) && r.transitioning) return;
                        i.collapse("hide"), r || i.data("collapse", null)
                    }
                    this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n])
                }
            },
            hide: function() {
                var t;
                !this.transitioning && this.$element.hasClass("in") && (t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0))
            },
            reset: function(e) {
                var t = this.dimension();
                return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null !== e ? "addClass" : "removeClass"]("collapse"), this
            },
            transition: function(t, n, i) {
                var r = this,
                    o = function() {
                        "show" == n.type && r.reset(), r.transitioning = 0, r.$element.trigger(i)
                    };
                this.$element.trigger(n), n.isDefaultPrevented() || (this.transitioning = 1, this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, o) : o())
            },
            toggle: function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
        };
        var n = e.fn.collapse;
        e.fn.collapse = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("collapse"),
                    o = e.extend({}, e.fn.collapse.defaults, i.data(), "object" == typeof n && n);
                r || i.data("collapse", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }, e.fn.collapse.defaults = {
            toggle: !0
        }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = n, this
        }, e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
            var n, i = e(this),
                r = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
                o = e(r).data("collapse") ? "toggle" : i.data();
            i[e(r).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(r).collapse(o)
        })
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function(t, n) {
            this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
        };
        t.prototype = {
            cycle: function(t) {
                return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
            },
            getActiveIndex: function() {
                return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
            },
            to: function(t) {
                var n = this.getActiveIndex(),
                    i = this;
                if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid", function() {
                    i.to(t)
                }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
            },
            pause: function(t) {
                return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
            },
            next: function() {
                if (!this.sliding) return this.slide("next")
            },
            prev: function() {
                if (!this.sliding) return this.slide("prev")
            },
            slide: function(t, n) {
                var i, r = this.$element.find(".item.active"),
                    o = n || r[t](),
                    s = this.interval,
                    a = "next" == t ? "left" : "right",
                    l = "next" == t ? "first" : "last",
                    c = this;
                if (this.sliding = !0, s && this.pause(), o = o.length ? o : this.$element.find(".item")[l](), i = e.Event("slide", {
                        relatedTarget: o[0],
                        direction: a
                    }), !o.hasClass("active")) {
                    if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                            var t = e(c.$indicators.children()[c.getActiveIndex()]);
                            t && t.addClass("active")
                        })), e.support.transition && this.$element.hasClass("slide")) {
                        if (this.$element.trigger(i), i.isDefaultPrevented()) return;
                        o.addClass(t), o[0].offsetWidth, r.addClass(a), o.addClass(a), this.$element.one(e.support.transition.end, function() {
                            o.removeClass([t, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), c.sliding = !1, setTimeout(function() {
                                c.$element.trigger("slid")
                            }, 0)
                        })
                    } else {
                        if (this.$element.trigger(i), i.isDefaultPrevented()) return;
                        r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return s && this.cycle(), this
                }
            }
        };
        var n = e.fn.carousel;
        e.fn.carousel = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("carousel"),
                    o = e.extend({}, e.fn.carousel.defaults, "object" == typeof n && n),
                    s = "string" == typeof n ? n : o.slide;
                r || i.data("carousel", r = new t(this, o)), "number" == typeof n ? r.to(n) : s ? r[s]() : o.interval && r.pause().cycle()
            })
        }, e.fn.carousel.defaults = {
            interval: 5e3,
            pause: "hover"
        }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
            return e.fn.carousel = n, this
        }, e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
            var n, i, r = e(this),
                o = e(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
                s = e.extend({}, o.data(), r.data());
            o.carousel(s), (i = r.attr("data-slide-to")) && o.data("carousel").pause().to(i).cycle(), t.preventDefault()
        })
    }(window.jQuery),
    function(e) {
        "use strict";
        var t = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = e(this.options.menu), this.shown = !1, this.listen()
        };
        t.prototype = {
            constructor: t,
            select: function() {
                var e = this.$menu.find(".active").attr("data-value");
                return this.$element.val(this.updater(e)).change(), this.hide()
            },
            updater: function(e) {
                return e
            },
            show: function() {
                var t = e.extend({}, this.$element.position(), {
                    height: this.$element[0].offsetHeight
                });
                return this.$menu.insertAfter(this.$element).css({
                    top: t.top + t.height,
                    left: t.left
                }).show(), this.shown = !0, this
            },
            hide: function() {
                return this.$menu.hide(), this.shown = !1, this
            },
            lookup: function() {
                var t;
                return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (t = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, t ? this.process(t) : this)
            },
            process: function(t) {
                var n = this;
                return t = e.grep(t, function(e) {
                    return n.matcher(e)
                }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
            },
            matcher: function(e) {
                return ~e.toLowerCase().indexOf(this.query.toLowerCase())
            },
            sorter: function(e) {
                for (var t, n = [], i = [], r = []; t = e.shift();) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? i.push(t) : r.push(t) : n.push(t);
                return n.concat(i, r)
            },
            highlighter: function(e) {
                var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                    return "<strong>" + t + "</strong>"
                })
            },
            render: function(t) {
                var n = this;
                return t = e(t).map(function(t, i) {
                    return t = e(n.options.item).attr("data-value", i), t.find("a").html(n.highlighter(i)), t[0]
                }), t.first().addClass("active"), this.$menu.html(t), this
            },
            next: function() {
                var t = this.$menu.find(".active").removeClass("active"),
                    n = t.next();
                n.length || (n = e(this.$menu.find("li")[0])), n.addClass("active")
            },
            prev: function() {
                var e = this.$menu.find(".active").removeClass("active"),
                    t = e.prev();
                t.length || (t = this.$menu.find("li").last()), t.addClass("active")
            },
            listen: function() {
                this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this))
            },
            eventSupported: function(e) {
                var t = e in this.$element;
                return t || (this.$element.setAttribute(e, "return;"), t = "function" == typeof this.$element[e]), t
            },
            move: function(e) {
                if (this.shown) {
                    switch (e.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            e.preventDefault();
                            break;
                        case 38:
                            e.preventDefault(), this.prev();
                            break;
                        case 40:
                            e.preventDefault(), this.next()
                    }
                    e.stopPropagation()
                }
            },
            keydown: function(t) {
                this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
            },
            keypress: function(e) {
                this.suppressKeyPressRepeat || this.move(e)
            },
            keyup: function(e) {
                switch (e.keyCode) {
                    case 40:
                    case 38:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    case 9:
                    case 13:
                        if (!this.shown) return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown) return;
                        this.hide();
                        break;
                    default:
                        this.lookup()
                }
                e.stopPropagation(), e.preventDefault()
            },
            focus: function() {
                this.focused = !0
            },
            blur: function() {
                this.focused = !1, !this.mousedover && this.shown && this.hide()
            },
            click: function(e) {
                e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus()
            },
            mouseenter: function(t) {
                this.mousedover = !0, this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
            },
            mouseleave: function() {
                this.mousedover = !1, !this.focused && this.shown && this.hide()
            }
        };
        var n = e.fn.typeahead;
        e.fn.typeahead = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("typeahead"),
                    o = "object" == typeof n && n;
                r || i.data("typeahead", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }, e.fn.typeahead.defaults = {
            source: [],
            items: 8,
            menu: '<ul class="typeahead dropdown-menu"></ul>',
            item: '<li><a href="#"></a></li>',
            minLength: 1
        }, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function() {
            return e.fn.typeahead = n, this
        }, e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
            var t = e(this);
            t.data("typeahead") || t.typeahead(t.data())
        })
    }(window.jQuery), window.Modernizr = function(e, t, n) {
        function i(e) {
            g.cssText = e
        }

        function r(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            for (var i in e)
                if (g[e[i]] !== n) return "pfx" != t || e[i];
            return !1
        }

        function s(e, t, i) {
            for (var o in e) {
                var s = t[e[o]];
                if (s !== n) return !1 === i ? e[o] : r(s, "function") ? s.bind(i || t) : s
            }
            return !1
        }

        function a(e, t, n) {
            var i = e.charAt(0).toUpperCase() + e.substr(1),
                a = (e + " " + y.join(i + " ") + i).split(" ");
            return r(t, "string") || r(t, "undefined") ? o(a, t) : (a = (e + " " + b.join(i + " ") + i).split(" "), s(a, t, n))
        }
        var l, c, u = "2.5.3",
            d = {},
            f = !0,
            p = t.documentElement,
            h = "modernizr",
            m = t.createElement(h),
            g = m.style,
            v = ({}.toString, "Webkit Moz O ms"),
            y = v.split(" "),
            b = v.toLowerCase().split(" "),
            x = {},
            w = [],
            C = w.slice,
            S = {}.hasOwnProperty;
        c = r(S, "undefined") || r(S.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return S.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = C.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var r = function() {};
                        r.prototype = t.prototype;
                        var o = new r,
                            s = t.apply(o, n.concat(C.call(arguments)));
                        return Object(s) === s ? s : o
                    }
                    return t.apply(e, n.concat(C.call(arguments)))
                };
            return i
        }), x.cssanimations = function() {
            return a("animationName")
        }, x.csstransitions = function() {
            return a("transition")
        };
        for (var T in x) c(x, T) && (l = T.toLowerCase(), d[l] = x[T](), w.push((d[l] ? "" : "no-") + l));
        return i(""), m = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        i = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var e = u.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function r(e) {
                    var t = {},
                        n = e.createElement,
                        r = e.createDocumentFragment,
                        o = r();
                    e.createElement = function(e) {
                        var i = (t[e] || (t[e] = n(e))).cloneNode();
                        return u.shivMethods && i.canHaveChildren && !c.test(e) ? o.appendChild(i) : i
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(e) {
                        return t[e] = n(e), o.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(u, o)
                }

                function o(e) {
                    var t;
                    return e.documentShived ? e : (u.shivCSS && !s && (t = !!n(e, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), a || (t = !r(e)), t && (e.documentShived = t), e)
                }
                var s, a, l = e.html5 || {},
                    c = /^<|^(?:button|form|map|select|textarea)$/i;
                ! function() {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", s = "hidden" in e, a = 1 == e.childNodes.length || function() {
                        try {
                            t.createElement("a")
                        } catch (e) {
                            return !0
                        }
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
                }();
                var u = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: !1 !== l.shivCSS,
                    shivMethods: !1 !== l.shivMethods,
                    type: "default",
                    shivDocument: o
                };
                e.html5 = u, o(t)
            }(this, t), d._version = u, d._domPrefixes = b, d._cssomPrefixes = y, d.testProp = function(e) {
                return o([e])
            }, d.testAllProps = a, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + w.join(" ") : ""), d
    }(0, this.document),
    function(e, t, n) {
        function i(e) {
            return "[object Function]" == g.call(e)
        }

        function r(e) {
            return "string" == typeof e
        }

        function o() {}

        function s(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function a() {
            var e = v.shift();
            y = 1, e ? e.t ? h(function() {
                ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), a()) : y = 0
        }

        function l(e, n, i, r, o, l, c) {
            function u(t) {
                if (!p && s(d.readyState) && (b.r = p = 1, !y && a(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && h(function() {
                        w.removeChild(d)
                    }, 50);
                    for (var i in E[n]) E[n].hasOwnProperty(i) && E[n][i].onload()
                }
            }
            var c = c || f.errorTimeout,
                d = {},
                p = 0,
                g = 0,
                b = {
                    t: i,
                    s: n,
                    e: o,
                    a: l,
                    x: c
                };
            1 === E[n] && (g = 1, E[n] = [], d = t.createElement(e)), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                u.call(this, g)
            }, v.splice(r, 0, b), "img" != e && (g || 2 === E[n] ? (w.insertBefore(d, x ? null : m), h(u, c)) : E[n].push(d))
        }

        function c(e, t, n, i, o) {
            return y = 0, t = t || "j", r(e) ? l("c" == t ? S : C, e, t, this.i++, n, i, o) : (v.splice(this.i++, 0, e), 1 == v.length && a()), this
        }

        function u() {
            var e = f;
            return e.loader = {
                load: c,
                i: 0
            }, e
        }
        var d, f, p = t.documentElement,
            h = e.setTimeout,
            m = t.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in p.style,
            x = b && !!t.createRange().compareNode,
            w = x ? p : m.parentNode,
            p = e.opera && "[object Opera]" == g.call(e.opera),
            p = !!t.attachEvent && !p,
            C = b ? "object" : p ? "script" : "img",
            S = p ? "script" : C,
            T = Array.isArray || function(e) {
                return "[object Array]" == g.call(e)
            },
            k = [],
            E = {},
            j = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        f = function(e) {
            function t(e) {
                var t, n, i, e = e.split("!"),
                    r = k.length,
                    o = e.pop(),
                    s = e.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: e
                    };
                for (n = 0; n < s; n++) i = e[n].split("="), (t = j[i.shift()]) && (o = t(o, i));
                for (n = 0; n < r; n++) o = k[n](o);
                return o
            }

            function s(e, r, o, s, l) {
                var c = t(e),
                    d = c.autoCallback;
                c.url.split(".").pop().split("?").shift(), c.bypass || (r && (r = i(r) ? r : r[e] || r[s] || r[e.split("/").pop().split("?")[0]] || a), c.instead ? c.instead(e, r, o, s, l) : (E[c.url] ? c.noexec = !0 : E[c.url] = 1, o.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout), (i(r) || i(d)) && o.load(function() {
                    u(), r && r(c.origUrl, l, s), d && d(c.origUrl, l, s), E[c.url] = 2
                })))
            }

            function l(e, t) {
                function n(e, n) {
                    if (e) {
                        if (r(e)) n || (d = function() {
                            var e = [].slice.call(arguments);
                            f.apply(this, e), p()
                        }), s(e, d, t, 0, c);
                        else if (Object(e) === e)
                            for (l in a = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(l) && (!n && !--a && (i(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                f.apply(this, e), p()
                            } : d[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(f[l])), s(e[l], d, t, l, c))
                    } else !n && p()
                }
                var a, l, c = !!e.test,
                    u = e.load || e.both,
                    d = e.callback || o,
                    f = d,
                    p = e.complete || o;
                n(c ? e.yep : e.nope, !!u), u && n(u)
            }
            var c, d, p = this.yepnope.loader;
            if (r(e)) s(e, 0, p, 0);
            else if (T(e))
                for (c = 0; c < e.length; c++) d = e[c], r(d) ? s(d, 0, p, 0) : T(d) ? f(d) : Object(d) === d && l(d, p);
            else Object(e) === e && l(e, p)
        }, f.addPrefix = function(e, t) {
            j[e] = t
        }, f.addFilter = function(e) {
            k.push(e)
        }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), e.yepnope = u(), e.yepnope.executeStack = a, e.yepnope.injectJs = function(e, n, i, r, l, c) {
            var u, d, p = t.createElement("script"),
                r = r || f.errorTimeout;
            p.src = e;
            for (d in i) p.setAttribute(d, i[d]);
            n = c ? a : n || o, p.onreadystatechange = p.onload = function() {
                !u && s(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
            }, h(function() {
                u || (u = 1, n(1))
            }, r), l ? p.onload() : m.parentNode.insertBefore(p, m)
        }, e.yepnope.injectCss = function(e, n, i, r, s, l) {
            var c, r = t.createElement("link"),
                n = l ? a : n || o;
            r.href = e, r.rel = "stylesheet", r.type = "text/css";
            for (c in i) r.setAttribute(c, i[c]);
            s || (m.parentNode.insertBefore(r, m), h(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(e) {
        var t = {},
            n = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "visible",
                responsive: !0,
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 4e3,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {}
            };
        e.fn.bxSlider = function(r) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                e(this).bxSlider(r)
            }), this;
            var o = {},
                s = this;
            t.el = this;
            var a = e(window).width(),
                l = e(window).height(),
                c = function() {
                    o.settings = e.extend({}, n, r), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = s.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                        index: o.settings.startSlide
                    }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
                        var e = document.createElement("div"),
                            t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in t)
                            if (e.style[t[n]] !== undefined) return o.cssPrefix = t[n].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), s.data("origStyle", s.attr("style")), s.children(o.settings.slideSelector).each(function() {
                        e(this).data("origStyle", e(this).attr("style"))
                    }), u()
                },
                u = function() {
                    s.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = s.parent(), o.loader = e('<div class="bx-loading" />'), o.viewport.prepend(o.loader), s.css({
                        width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), o.usingCSS && o.settings.easing ? s.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing");
                    g();
                    o.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), o.viewport.parent().css({
                        maxWidth: h()
                    }), o.settings.pager || o.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), o.children.css({
                        "float": "horizontal" == o.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), o.children.css("width", m()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), o.children.eq(o.settings.startSlide).css({
                        zIndex: 50,
                        display: "block"
                    })), o.controls.el = e('<div class="bx-controls" />'), o.settings.captions && k(), o.active.last = o.settings.startSlide == v() - 1, o.settings.video && s.fitVids();
                    var t = o.children.eq(o.settings.startSlide);
                    "all" == o.settings.preloadImages && (t = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && C(), o.settings.controls && S(), o.settings.auto && o.settings.autoControls && T(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), d(t, f)
                },
                d = function(t, n) {
                    var i = t.find("img, iframe").length;
                    if (0 == i) return void n();
                    var r = 0;
                    t.find("img, iframe").each(function() {
                        e(this).is("img") && e(this).attr("src", e(this).attr("src") + "?timestamp=" + (new Date).getTime()), e(this).load(function() {
                            setTimeout(function() {
                                ++r == i && n()
                            }, 0)
                        })
                    })
                },
                f = function() {
                    if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                        var t = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                            n = o.children.slice(0, t).clone().addClass("bx-clone"),
                            i = o.children.slice(-t).clone().addClass("bx-clone");
                        s.append(n).prepend(i)
                    }
                    o.loader.remove(), b(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(p()), s.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && e(window).bind("resize", W), o.settings.auto && o.settings.autoStart && P(), o.settings.ticker && H(), o.settings.pager && A(o.settings.startSlide), o.settings.controls && O(), o.settings.touchEnabled && !o.settings.ticker && q()
                },
                p = function() {
                    var t = 0,
                        n = e();
                    if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                        if (o.carousel) {
                            var r = 1 == o.settings.moveSlides ? o.active.index : o.active.index * y();
                            for (n = o.children.eq(r), i = 1; i <= o.settings.maxSlides - 1; i++) n = r + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(r + i))
                        } else n = o.children.eq(o.active.index);
                    else n = o.children;
                    return "vertical" == o.settings.mode ? (n.each(function() {
                        t += e(this).outerHeight()
                    }), o.settings.slideMargin > 0 && (t += o.settings.slideMargin * (o.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function() {
                        return e(this).outerHeight(!1)
                    }).get()), t
                },
                h = function() {
                    var e = "100%";
                    return o.settings.slideWidth > 0 && (e = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), e
                },
                m = function() {
                    var e = o.settings.slideWidth,
                        t = o.viewport.width();
                    return 0 == o.settings.slideWidth || o.settings.slideWidth > t && !o.carousel || "vertical" == o.settings.mode ? e = t : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (t > o.maxThreshold || t < o.minThreshold && (e = (t - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), e
                },
                g = function() {
                    var e = 1;
                    if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                        if (o.viewport.width() < o.minThreshold) e = o.settings.minSlides;
                        else if (o.viewport.width() > o.maxThreshold) e = o.settings.maxSlides;
                    else {
                        var t = o.children.first().width();
                        e = Math.floor(o.viewport.width() / t)
                    } else "vertical" == o.settings.mode && (e = o.settings.minSlides);
                    return e
                },
                v = function() {
                    var e = 0;
                    if (o.settings.moveSlides > 0)
                        if (o.settings.infiniteLoop) e = o.children.length / y();
                        else
                            for (var t = 0, n = 0; t < o.children.length;) ++e, t = n + g(),
                                n += o.settings.moveSlides <= g() ? o.settings.moveSlides : g();
                    else e = Math.ceil(o.children.length / g());
                    return e
                },
                y = function() {
                    return o.settings.moveSlides > 0 && o.settings.moveSlides <= g() ? o.settings.moveSlides : g()
                },
                b = function() {
                    if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                        if ("horizontal" == o.settings.mode) {
                            var e = o.children.last(),
                                t = e.position();
                            x(-(t.left - (o.viewport.width() - e.width())), "reset", 0)
                        } else if ("vertical" == o.settings.mode) {
                            var n = o.children.length - o.settings.minSlides,
                                t = o.children.eq(n).position();
                            x(-t.top, "reset", 0)
                        }
                    } else {
                        var t = o.children.eq(o.active.index * y()).position();
                        o.active.index == v() - 1 && (o.active.last = !0), t != undefined && ("horizontal" == o.settings.mode ? x(-t.left, "reset", 0) : "vertical" == o.settings.mode && x(-t.top, "reset", 0))
                    }
                },
                x = function(e, t, n, i) {
                    if (o.usingCSS) {
                        var r = "vertical" == o.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)";
                        s.css("-" + o.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" == t ? (s.css(o.animProp, r), s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), L()
                        })) : "reset" == t ? s.css(o.animProp, r) : "ticker" == t && (s.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), s.css(o.animProp, r), s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), x(i.resetValue, "reset", 0), F()
                        }))
                    } else {
                        var a = {};
                        a[o.animProp] = e, "slide" == t ? s.animate(a, n, o.settings.easing, function() {
                            L()
                        }) : "reset" == t ? s.css(o.animProp, e) : "ticker" == t && s.animate(a, speed, "linear", function() {
                            x(i.resetValue, "reset", 0), F()
                        })
                    }
                },
                w = function() {
                    for (var t = "", n = v(), i = 0; i < n; i++) {
                        var r = "";
                        o.settings.buildPager && e.isFunction(o.settings.buildPager) ? (r = o.settings.buildPager(i), o.pagerEl.addClass("bx-custom-pager")) : (r = i + 1, o.pagerEl.addClass("bx-default-pager")), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + r + "</a></div>"
                    }
                    o.pagerEl.html(t)
                },
                C = function() {
                    o.settings.pagerCustom ? o.pagerEl = e(o.settings.pagerCustom) : (o.pagerEl = e('<div class="bx-pager" />'), o.settings.pagerSelector ? e(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.delegate("a", "click", D)
                },
                S = function() {
                    o.controls.next = e('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = e('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", E), o.controls.prev.bind("click", j), o.settings.nextSelector && e(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && e(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = e('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
                },
                T = function() {
                    o.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = e('<div class="bx-controls-auto" />'), o.controls.autoEl.delegate(".bx-start", "click", N), o.controls.autoEl.delegate(".bx-stop", "click", $), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? e(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), M(o.settings.autoStart ? "stop" : "start")
                },
                k = function() {
                    o.children.each(function() {
                        var t = e(this).find("img:first").attr("title");
                        t != undefined && ("" + t).length && e(this).append('<div class="bx-caption"><span>' + t + "</span></div>")
                    })
                },
                E = function(e) {
                    o.settings.auto && s.stopAuto(), s.goToNextSlide(), e.preventDefault()
                },
                j = function(e) {
                    o.settings.auto && s.stopAuto(), s.goToPrevSlide(), e.preventDefault()
                },
                N = function(e) {
                    s.startAuto(), e.preventDefault()
                },
                $ = function(e) {
                    s.stopAuto(), e.preventDefault()
                },
                D = function(t) {
                    o.settings.auto && s.stopAuto();
                    var n = e(t.currentTarget),
                        i = parseInt(n.attr("data-slide-index"));
                    i != o.active.index && s.goToSlide(i), t.preventDefault()
                },
                A = function(t) {
                    var n = o.children.length;
                    if ("short" == o.settings.pagerType) return o.settings.maxSlides > 1 && (n = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(t + 1 + o.settings.pagerShortSeparator + n);
                    o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(n, i) {
                        e(i).find("a").eq(t).addClass("active")
                    })
                },
                L = function() {
                    if (o.settings.infiniteLoop) {
                        var e = "";
                        0 == o.active.index ? e = o.children.eq(0).position() : o.active.index == v() - 1 && o.carousel ? e = o.children.eq((v() - 1) * y()).position() : o.active.index == o.children.length - 1 && (e = o.children.eq(o.children.length - 1).position()), "horizontal" == o.settings.mode ? x(-e.left, "reset", 0) : "vertical" == o.settings.mode && x(-e.top, "reset", 0)
                    }
                    o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
                },
                M = function(e) {
                    o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[e]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
                },
                O = function() {
                    1 == v() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == v() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
                },
                P = function() {
                    if (o.settings.autoDelay > 0) {
                        setTimeout(s.startAuto, o.settings.autoDelay)
                    } else s.startAuto();
                    o.settings.autoHover && s.hover(function() {
                        o.interval && (s.stopAuto(!0), o.autoPaused = !0)
                    }, function() {
                        o.autoPaused && (s.startAuto(!0), o.autoPaused = null)
                    })
                },
                H = function() {
                    var t = 0;
                    if ("next" == o.settings.autoDirection) s.append(o.children.clone().addClass("bx-clone"));
                    else {
                        s.prepend(o.children.clone().addClass("bx-clone"));
                        var n = o.children.first().position();
                        t = "horizontal" == o.settings.mode ? -n.left : -n.top
                    }
                    x(t, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                        s.stop()
                    }, function() {
                        var t = 0;
                        o.children.each(function() {
                            t += "horizontal" == o.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                        });
                        var n = o.settings.speed / t,
                            i = "horizontal" == o.settings.mode ? "left" : "top",
                            r = n * (t - Math.abs(parseInt(s.css(i))));
                        F(r)
                    }), F()
                },
                F = function(e) {
                    speed = e || o.settings.speed;
                    var t = {
                            left: 0,
                            top: 0
                        },
                        n = {
                            left: 0,
                            top: 0
                        };
                    "next" == o.settings.autoDirection ? t = s.find(".bx-clone").first().position() : n = o.children.first().position();
                    var i = "horizontal" == o.settings.mode ? -t.left : -t.top,
                        r = "horizontal" == o.settings.mode ? -n.left : -n.top,
                        a = {
                            resetValue: r
                        };
                    x(i, "ticker", speed, a)
                },
                q = function() {
                    o.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, o.viewport.bind("touchstart", _)
                },
                _ = function(e) {
                    if (o.working) e.preventDefault();
                    else {
                        o.touch.originalPos = s.position();
                        var t = e.originalEvent;
                        o.touch.start.x = t.changedTouches[0].pageX, o.touch.start.y = t.changedTouches[0].pageY, o.viewport.bind("touchmove", I), o.viewport.bind("touchend", z)
                    }
                },
                I = function(e) {
                    var t = e.originalEvent,
                        n = Math.abs(t.changedTouches[0].pageX - o.touch.start.x),
                        i = Math.abs(t.changedTouches[0].pageY - o.touch.start.y);
                    if (3 * n > i && o.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * i > n && o.settings.preventDefaultSwipeY && e.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                        var r = 0;
                        if ("horizontal" == o.settings.mode) {
                            var s = t.changedTouches[0].pageX - o.touch.start.x;
                            r = o.touch.originalPos.left + s
                        } else {
                            var s = t.changedTouches[0].pageY - o.touch.start.y;
                            r = o.touch.originalPos.top + s
                        }
                        x(r, "reset", 0)
                    }
                },
                z = function(e) {
                    o.viewport.unbind("touchmove", I);
                    var t = e.originalEvent,
                        n = 0;
                    if (o.touch.end.x = t.changedTouches[0].pageX, o.touch.end.y = t.changedTouches[0].pageY, "fade" == o.settings.mode) {
                        var i = Math.abs(o.touch.start.x - o.touch.end.x);
                        i >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto())
                    } else {
                        var i = 0;
                        "horizontal" == o.settings.mode ? (i = o.touch.end.x - o.touch.start.x, n = o.touch.originalPos.left) : (i = o.touch.end.y - o.touch.start.y, n = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && i > 0 || o.active.last && i < 0) ? x(n, "reset", 200) : Math.abs(i) >= o.settings.swipeThreshold ? (i < 0 ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto()) : x(n, "reset", 200)
                    }
                    o.viewport.unbind("touchend", z)
                },
                W = function() {
                    var t = e(window).width(),
                        n = e(window).height();
                    a == t && l == n || (a = t, l = n, s.redrawSlider())
                };
            return s.goToSlide = function(t, n) {
                if (!o.working && o.active.index != t)
                    if (o.working = !0, o.oldIndex = o.active.index, t < 0 ? o.active.index = v() - 1 : t >= v() ? o.active.index = 0 : o.active.index = t, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == n ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == n && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= v() - 1, o.settings.pager && A(o.active.index), o.settings.controls && O(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({
                        height: p()
                    }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }), o.children.eq(o.active.index).css("zIndex", 51).fadeIn(o.settings.speed, function() {
                        e(this).css("zIndex", 50), L()
                    });
                    else {
                        o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({
                            height: p()
                        }, o.settings.adaptiveHeightSpeed);
                        var i = 0,
                            r = {
                                left: 0,
                                top: 0
                            };
                        if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                            if ("horizontal" == o.settings.mode) {
                                var a = o.children.eq(o.children.length - 1);
                                r = a.position(), i = o.viewport.width() - a.outerWidth()
                            } else {
                                var l = o.children.length - o.settings.minSlides;
                                r = o.children.eq(l).position()
                            }
                        else if (o.carousel && o.active.last && "prev" == n) {
                            var c = 1 == o.settings.moveSlides ? o.settings.maxSlides - y() : (v() - 1) * y() - (o.children.length - o.settings.maxSlides),
                                a = s.children(".bx-clone").eq(c);
                            r = a.position()
                        } else if ("next" == n && 0 == o.active.index) r = s.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                        else if (t >= 0) {
                            var u = t * y();
                            r = o.children.eq(u).position()
                        }
                        if (void 0 !== r) {
                            var d = "horizontal" == o.settings.mode ? -(r.left - i) : -r.top;
                            x(d, "slide", o.settings.speed)
                        }
                    }
            }, s.goToNextSlide = function() {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var e = parseInt(o.active.index) + 1;
                    s.goToSlide(e, "next")
                }
            }, s.goToPrevSlide = function() {
                if (o.settings.infiniteLoop || 0 != o.active.index) {
                    var e = parseInt(o.active.index) - 1;
                    s.goToSlide(e, "prev")
                }
            }, s.startAuto = function(e) {
                o.interval || (o.interval = setInterval(function() {
                    "next" == o.settings.autoDirection ? s.goToNextSlide() : s.goToPrevSlide()
                }, o.settings.pause), o.settings.autoControls && 1 != e && M("stop"))
            }, s.stopAuto = function(e) {
                o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != e && M("start"))
            }, s.getCurrentSlide = function() {
                return o.active.index
            }, s.getSlideCount = function() {
                return o.children.length
            }, s.redrawSlider = function() {
                o.children.add(s.find(".bx-clone")).outerWidth(m()), o.viewport.css("height", p()), o.settings.ticker || b(), o.active.last && (o.active.index = v() - 1), o.active.index >= v() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), A(o.active.index))
            }, s.destroySlider = function() {
                o.initialized && (o.initialized = !1, e(".bx-clone", this).remove(), o.children.each(function() {
                    e(this).data("origStyle") != undefined ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
                }), e(this).data("origStyle") != undefined ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.pagerEl.remove(), e(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && e(window).unbind("resize", W))
            }, s.reloadSlider = function(e) {
                e != undefined && (r = e), s.destroySlider(), c()
            }, c(), this
        }
    }(jQuery),
    function(e) {
        e.Slider = function(t, n) {
            this.$el = e(n), this._init(t)
        }, e.Slider.defaults = {
            width: 1170,
            height: 500,
            current: 0,
            bgincrement: 100,
            autoplay: !0,
            interval: 6e3
        }, e.Slider.prototype = {
            _init: function(t) {
                var n = this;
                this.options = e.extend(!0, {}, e.Slider.defaults, t), this.ratio = this.$el.width() / this.$el.height(), this.$slides = this.$el.children().children(".da-slide"), this.slidesCount = this.$slides.length, this.current = this.options.current, (this.current < 0 || this.current >= this.slidesCount) && (this.current = 0), this.$slides.eq(this.current).addClass("da-slide-current");
                for (var i = e('<nav class="da-dots"/>'), r = 0; r < this.slidesCount; ++r) i.append("<span/>");
                i.appendTo(this.$el), this.$pages = this.$el.find("nav.da-dots > span"), this.$navNext = this.$el.find("span.da-arrows-next"), this.$navPrev = this.$el.find("span.da-arrows-prev"), this.isAnimating = !1, this.bgpositer = 0, this.cssAnimations = Modernizr.cssanimations, this.cssTransitions = Modernizr.csstransitions, this.cssAnimations && this.cssAnimations || this.$el.addClass("da-slider-fb"), this._updatePage(), this._loadEvents(), this.options.autoplay && this._startSlideshow(), e(window).bind("resize", function() {
                    setTimeout(function() {
                        n._makeResponsive()
                    }, 150)
                }), this._makeResponsive()
            },
            _navigate: function(e, t) {
                var n, i = this.$slides.eq(this.current),
                    r = this;
                if (this.current === e || this.isAnimating) return !1;
                this.isAnimating = !0;
                var o, s, a;
                if (a = t || (e > this.current ? "next" : "prev"), this.cssAnimations && this.cssAnimations && ("next" === a ? (o = "da-slide-toleft", s = "da-slide-fromright", ++this.bgpositer) : (o = "da-slide-toright", s = "da-slide-fromleft", --this.bgpositer), this.$el.css("background-position", this.bgpositer * this.options.bgincrement + "% center")), this.current = e, n = this.$slides.eq(this.current), this.cssAnimations && this.cssAnimations) {
                    var l = "da-slide-toleft da-slide-toright da-slide-fromleft da-slide-fromright";
                    i.removeClass(l), n.removeClass(l), i.addClass(o), n.addClass(s), i.removeClass("da-slide-current"), n.addClass("da-slide-current")
                }
                this.cssAnimations && this.cssAnimations || (n.addClass("da-slide-current"), n.css("left", "next" === a ? "100%" : "-100%").stop().animate({
                    left: "0%"
                }, 1e3, function() {
                    r.isAnimating = !1
                }), i.stop().animate({
                    left: "next" === a ? "-100%" : "100%"
                }, 1e3, function() {
                    i.removeClass("da-slide-current")
                })), this._updatePage()
            },
            _updatePage: function() {
                this.$pages.removeClass("da-dots-current"), this.$pages.eq(this.current).addClass("da-dots-current")
            },
            _startSlideshow: function() {
                var e = this;
                this.slideshow = setTimeout(function() {
                    var t = t = e.current < e.slidesCount - 1 ? e.current + 1 : 0;
                    e._navigate(t, "next"), e.options.autoplay && e._startSlideshow()
                }, this.options.interval)
            },
            page: function(e) {
                if (e >= this.slidesCount || e < 0) return !1;
                this.options.autoplay && (clearTimeout(this.slideshow), this.options.autoplay = !1), this._navigate(e)
            },
            _makeResponsive: function() {
                var e = this,
                    t = this.$el.width(),
                    n = this.$el.height(),
                    i = n;
                if (t < e.options.width) {
                    var r = this.options.width / this.options.height,
                        i = t / r;
                    this.$el.height(Math.ceil(i))
                } else this.$el.height(Math.ceil(this.options.height))
            },
            _loadEvents: function() {
                var t = this;
                this.$pages.on("click.cslider", function() {
                    return t.page(e(this).index()), !1
                }), this.$navNext.on("click.cslider", function() {
                    t.options.autoplay && (clearTimeout(t.slideshow), t.options.autoplay = !1);
                    var e = e = t.current < t.slidesCount - 1 ? t.current + 1 : 0;
                    return t._navigate(e, "next"), !1
                }), this.$navPrev.on("click.cslider", function() {
                    t.options.autoplay && (clearTimeout(t.slideshow), t.options.autoplay = !1);
                    var e = e = t.current > 0 ? t.current - 1 : t.slidesCount - 1;
                    return t._navigate(e, "prev"), !1
                }), this.cssTransitions && (this.options.bgincrement ? this.$el.on("webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider", function(e) {
                    e.target.id === t.$el.attr("id") && (t.isAnimating = !1)
                }) : this.$el.on("webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider", function(e) {
                    "toRightAnim4" !== e.originalEvent.animationName && "toLeftAnim4" !== e.originalEvent.animationName || (t.isAnimating = !1)
                }))
            }
        };
        var t = function(e) {
            this.console && console.error(e)
        };
        e.fn.cslider = function(n) {
            if ("string" == typeof n) {
                var i = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var r = e.data(this, "cslider");
                    return r ? e.isFunction(r[n]) && "_" !== n.charAt(0) ? void r[n].apply(r, i) : void t("no such method '" + n + "' for cslider instance") : void t("cannot call methods on cslider prior to initialization; attempted to call method '" + n + "'")
                })
            } else this.each(function() {
                e.data(this, "cslider") || e.data(this, "cslider", new e.Slider(n, this))
            });
            return this
        }
    }(jQuery),
    function(e, t, n) {
        function i(e) {
            var t = {},
                i = /^jQuery\d+$/;
            return n.each(e.attributes, function(e, n) {
                n.specified && !i.test(n.name) && (t[n.name] = n.value)
            }), t
        }

        function r(e, i) {
            var r = this,
                o = n(r);
            if (r.value == o.attr("placeholder") && o.hasClass("placeholder"))
                if (o.data("placeholder-password")) {
                    if (o = o.hide().next().show().attr("id", o.removeAttr("id").data("placeholder-id")), !0 === e) return o[0].value = i;
                    o.focus()
                } else r.value = "", o.removeClass("placeholder"), r == t.activeElement && r.select()
        }

        function o() {
            var e, t = this,
                o = n(t),
                s = this.id;
            if ("" == t.value) {
                if ("password" == t.type) {
                    if (!o.data("placeholder-textinput")) {
                        try {
                            e = o.clone().attr({
                                type: "text"
                            })
                        } catch (t) {
                            e = n("<input>").attr(n.extend(i(this), {
                                type: "text"
                            }))
                        }
                        e.removeAttr("name").data({
                            "placeholder-password": o,
                            "placeholder-id": s
                        }).bind("focus.placeholder", r), o.data({
                            "placeholder-textinput": e,
                            "placeholder-id": s
                        }).before(e)
                    }
                    o = o.removeAttr("id").hide().prev().attr("id", s).show()
                }
                o.addClass("placeholder"), o[0].value = o.attr("placeholder")
            } else o.removeClass("placeholder")
        }
        var s, a, l = "placeholder" in t.createElement("input"),
            c = "placeholder" in t.createElement("textarea"),
            u = n.fn,
            d = n.valHooks,
            f = n.propHooks;
        l && c ? (a = u.placeholder = function() {
            return this
        }, a.input = a.textarea = !0) : (a = u.placeholder = function() {
            var e = this;
            return e.filter((l ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": r,
                "blur.placeholder": o
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
        }, a.input = l, a.textarea = c, s = {
            get: function(e) {
                var t = n(e),
                    i = t.data("placeholder-password");
                return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            },
            set: function(e, i) {
                var s = n(e),
                    a = s.data("placeholder-password");
                return a ? a[0].value = i : s.data("placeholder-enabled") ? ("" == i ? (e.value = i, e != t.activeElement && o.call(e)) : s.hasClass("placeholder") ? r.call(e, !0, i) || (e.value = i) : e.value = i, s) : e.value = i
            }
        }, l || (d.input = s, f.value = s), c || (d.textarea = s, f.value = s), n(function() {
            n(t).delegate("form", "submit.placeholder", function() {
                var e = n(".placeholder", this).each(r);
                setTimeout(function() {
                    e.each(o)
                }, 10)
            })
        }), n(e).bind("beforeunload.placeholder", function() {
            n(".placeholder").each(function() {
                this.value = ""
            })
        }))
    }(this, document, jQuery),
    function(e) {
        function t() {
            var t = window.innerHeight,
                n = document.compatMode;
            return !n && e.support.boxModel || (t = "CSS1Compat" == n ? document.documentElement.clientHeight : document.body.clientHeight), t
        }
        e(window).scroll(function() {
            var n = t(),
                i = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop,
                r = [];
            e.each(e.cache, function() {
                this.events && this.events.inview && r.push(this.handle.elem)
            }), r.length && e(r).each(function() {
                var t = e(this),
                    r = t.offset().top,
                    o = t.height(),
                    s = t.data("inview") || !1;
                i > r + o || i + n < r ? s && (t.data("inview", !1), t.trigger("inview", [!1])) : i < r + o && (s || (t.data("inview", !0), t.trigger("inview", [!0])))
            })
        }), e(function() {
            e(window).scroll()
        })
    }(jQuery), jQuery(document).ready(function(e) {
        var t, n = e("#top-navigation"),
            i = n.outerHeight(),
            r = n.find("a"),
            o = r.map(function() {
                if (0 === e(this).attr("href").indexOf("#")) {
                    var t = e(e(this).attr("href"));
                    if (t.length) return t
                }
            }),
            s = e(".section .container").width();
        e(".triangle").css({
            "border-left": s / 2 + "px outset transparent",
            "border-right": s / 2 + "px outset transparent"
        }), e(window).resize(function() {
            s = e(".container").width(), e(".triangle").css({
                "border-left": s / 2 + "px outset transparent",
                "border-right": s / 2 + "px outset transparent"
            })
        }), e("#da-slider").cslider(), e("#portfolio-grid").mixitup({
            onMixStart: function() {
                e("div.toggleDiv").hide()
            }
        }), e("#clint-slider").bxSlider({
            pager: !1,
            minSlides: 1,
            maxSlides: 5,
            moveSlides: 2,
            slideWidth: 210,
            slideMargin: 25,
            prevSelector: e("#client-prev"),
            nextSelector: e("#client-next"),
            prevText: '<i class="icon-left-open"></i>',
            nextText: '<i class="icon-right-open"></i>'
        }), e("input, textarea").placeholder(), e(window).scroll(function() {
            e(this).scrollTop() > 100 ? e(".scrollup").fadeIn() : e(".scrollup").fadeOut(), e(this).scrollTop() > 130 ? e(".navbar").addClass("navbar-fixed-top animated fadeInDown") : e(".navbar").removeClass("navbar-fixed-top animated fadeInDown");
            var n = e(this).scrollTop() + i + 10,
                s = o.map(function() {
                    if (e(this).offset().top < n) return this
                });
            s = s[s.length - 1];
            var a = s && s.length ? s[0].id : "";
            t !== a && (t = a, r.parent().removeClass("active").end().filter("[href=#" + a + "]").parent().addClass("active"))
        }), e(".scrollup").click(function() {
            return e("html, body").animate({
                scrollTop: 0
            }, 600), !1
        }), e(window).load(function() {
            function t(e) {
                return e.replace(/^\//, "").replace(/(index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
            }
            e("a[href*=#]").each(function() {
                if (t(location.pathname) == t(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, "")) {
                    var i = e(this.hash),
                        r = e("[name=" + this.hash.slice(1) + "]"),
                        o = i.length ? i : !!r.length && r;
                    o && e(this).click(function() {
                        n.parent().attr("style", "height:0px").removeClass("in"), e(".navbar .btn-navbar").addClass("collapsed");
                        var t = o.offset().top - 63;
                        return e("html, body").animate({
                            scrollTop: t
                        }, 800), !1
                    })
                }
            })
        }), e("#subscribe").click(function() {
            var t = !1,
                n = /^([a-z0-9_.-]+)@([0-9a-z.-]+).([a-z.]{2,6})$/,
                i = e("input#nlmail").val().toLowerCase();
            return "" != i && " " != i && n.test(i) || (e("#err-subscribe").show(500), e("#err-subscribe").delay(4e3), e("#err-subscribe").animate({
                height: "toggle"
            }, 500, function() {}), t = !0), !1 === t && e.ajax({
                type: "POST",
                url: "php/newsletter.php",
                data: {
                    email: e("#nlmail").val()
                },
                error: function() {
                    alert("An error occurred")
                },
                success: function(t) {
                    "OK" == t ? (e("#success-subscribe").show(), e("#nlmail").val("")) : alert("An error occurred")
                }
            }), !1
        }), e("#send-mail").click(function() {
            var t = e("input#name").val(),
                n = !1;
            "" != t && " " != t || (e("#err-name").show(500), e("#err-name").delay(4e3), e("#err-name").animate({
                height: "toggle"
            }, 500, function() {}), n = !0);
            var i = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/,
                r = e("input#email").val().toLowerCase();
            "" != r && " " != r && i.test(r) || (e("#err-email").show(500), e("#err-email").delay(4e3), e("#err-email").animate({
                height: "toggle"
            }, 500, function() {}), n = !0);
            var o = e("textarea#comment").val();
            if ("" != o && " " != o || (e("#err-comment").show(500), e("#err-comment").delay(4e3), e("#err-comment").animate({
                    height: "toggle"
                }, 500, function() {}), n = !0), 0 == n) {
                var s = e("#contact-form").serialize();
                return e.ajax({
                    type: "POST",
                    url: e("#contact-form").attr("action"),
                    data: s,
                    timeout: 6e3,
                    error: function() {},
                    success: function(t) {
                        t.success ? (e("#successSend").show(), e("#name").val(""), e("#email").val(""), e("#comment").val("")) : e("#errorSend").show()
                    }
                }), !1
            }
            return !1
        }), e.fn.showHide = function(t) {
            var n = {
                    speed: 1e3,
                    easing: "",
                    changeText: 0,
                    showText: "Show",
                    hideText: "Hide"
                },
                t = e.extend(n, t);
            e(this).click(function() {
                e(".toggleDiv").slideUp(t.speed, t.easing);
                var n = e(this),
                    i = e(this).attr("rel");
                return e(i).slideToggle(t.speed, t.easing, function() {
                    1 == t.changeText && (e(i).is(":visible") ? n.text(t.hideText) : n.text(t.showText))
                }), !1
            })
        }, e("div.toggleDiv").hide(), e(".show_hide").showHide({
            speed: 500,
            changeText: 0,
            showText: "View",
            hideText: "Close"
        }), jQuery(".thumbnail").one("inview", function(e, t) {
            1 == t ? jQuery(this).addClass("animated fadeInDown") : jQuery(this).removeClass("animated fadeInDown")
        }), jQuery(".triangle").bind("inview", function(e, t) {
            1 == t ? jQuery(this).addClass("animated fadeInDown") : jQuery(this).removeClass("animated fadeInDown")
        }), jQuery("#first-person").bind("inview", function(e, t) {
            1 == t ? jQuery("#first-person").addClass("animated pulse") : jQuery("#first-person").removeClass("animated pulse")
        }), jQuery("#second-person").bind("inview", function(e, t) {
            1 == t ? jQuery("#second-person").addClass("animated pulse") : jQuery("#second-person").removeClass("animated pulse")
        }), jQuery("#third-person").bind("inview", function(e, t) {
            1 == t ? jQuery("#third-person").addClass("animated pulse") : jQuery("#third-person").removeClass("animated pulse")
        }), jQuery(".price-column, .testimonial").bind("inview", function(e, t) {
            1 == t ? jQuery(this).addClass("animated fadeInDown") : jQuery(this).removeClass("animated fadeInDown")
        }), jQuery(".contact-form").bind("inview", function(e, t) {
            1 == t ? jQuery(".contact-form").addClass("animated bounceIn") : jQuery(".contact-form").removeClass("animated bounceIn")
        }), jQuery(".skills > li > span").one("inview", function(e, t) {
            1 == t && jQuery(this).each(function() {
                jQuery(this).animate({
                    width: jQuery(this).attr("data-width")
                }, 3e3)
            })
        })
    });