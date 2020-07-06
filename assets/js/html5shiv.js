!(function (e, t) {
  function n(e, t) {
    var n = e.createElement("p"),
      r = e.getElementsByTagName("head")[0] || e.documentElement
    return (
      (n.innerHTML = "x<style>" + t + "</style>"),
      r.insertBefore(n.lastChild, r.firstChild)
    )
  }
  function r() {
    var e = p.elements
    return "string" == typeof e ? e.split(" ") : e
  }
  function a(e) {
    var t = v[e[f]]
    return t || ((t = {}), g++, (e[f] = g), (v[g] = t)), t
  }
  function c(e, n, r) {
    if ((n || (n = t), s)) return n.createElement(e)
    r || (r = a(n))
    var c
    return (
      (c = r.cache[e]
        ? r.cache[e].cloneNode()
        : d.test(e)
        ? (r.cache[e] = r.createElem(e)).cloneNode()
        : r.createElem(e)),
      c.canHaveChildren && !h.test(e) ? r.frag.appendChild(c) : c
    )
  }
  function o(e, n) {
    if ((e || (e = t), s)) return e.createDocumentFragment()
    n = n || a(e)
    for (var c = n.frag.cloneNode(), o = 0, i = r(), l = i.length; o < l; o++)
      c.createElement(i[o])
    return c
  }
  function i(e, t) {
    t.cache ||
      ((t.cache = {}),
      (t.createElem = e.createElement),
      (t.createFrag = e.createDocumentFragment),
      (t.frag = t.createFrag())),
      (e.createElement = function (n) {
        return p.shivMethods ? c(n, e, t) : t.createElem(n)
      }),
      (e.createDocumentFragment = Function(
        "h,f",
        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
          r()
            .join()
            .replace(/[\w\-]+/g, function (e) {
              return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) +
          ");return n}"
      )(p, t.frag))
  }
  function l(e) {
    e || (e = t)
    var r = a(e)
    return (
      !p.shivCSS ||
        m ||
        r.hasCSS ||
        (r.hasCSS = !!n(
          e,
          "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
        )),
      s || i(e, r),
      e
    )
  }
  var m,
    s,
    u = e.html5 || {},
    h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
    f = "_html5shiv",
    g = 0,
    v = {}
  !(function () {
    try {
      var e = t.createElement("a")
      ;(e.innerHTML = "<xyz></xyz>"),
        (m = "hidden" in e),
        (s =
          1 == e.childNodes.length ||
          (function () {
            t.createElement("a")
            var e = t.createDocumentFragment()
            return (
              void 0 === e.cloneNode ||
              void 0 === e.createDocumentFragment ||
              void 0 === e.createElement
            )
          })())
    } catch (e) {
      ;(m = !0), (s = !0)
    }
  })()
  var p = {
    elements:
      u.elements ||
      "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
    version: "3.7.0",
    shivCSS: !1 !== u.shivCSS,
    supportsUnknownElements: s,
    shivMethods: !1 !== u.shivMethods,
    type: "default",
    shivDocument: l,
    createElement: c,
    createDocumentFragment: o,
  }
  ;(e.html5 = p), l(t)
})(this, document)
