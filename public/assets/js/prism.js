!(function () {
  var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
    t = (self.Prism = {
      util: {
        type: function (e) {
          return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
        },
        clone: function (e) {
          switch (t.util.type(e)) {
            case "Object":
              var n = {}
              for (var a in e)
                e.hasOwnProperty(a) && (n[a] = t.util.clone(e[a]))
              return n
            case "Array":
              return e.slice()
          }
          return e
        },
      },
      languages: {
        extend: function (e, n) {
          var a = t.util.clone(t.languages[e])
          for (var r in n) a[r] = n[r]
          return a
        },
        insertBefore: function (e, n, a, r) {
          r = r || t.languages
          var i = r[e],
            s = {}
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              if (l == n) for (var g in a) a.hasOwnProperty(g) && (s[g] = a[g])
              s[l] = i[l]
            }
          return (r[e] = s)
        },
        DFS: function (e, n) {
          for (var a in e)
            n.call(e, a, e[a]),
              "Object" === t.util.type(e) && t.languages.DFS(e[a], n)
        },
      },
      highlightAll: function (e, n) {
        for (
          var a,
            r = document.querySelectorAll(
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            ),
            i = 0;
          (a = r[i++]);

        )
          t.highlightElement(a, !0 === e, n)
      },
      highlightElement: function (a, r, i) {
        for (var s, l, g = a; g && !e.test(g.className); ) g = g.parentNode
        if (
          (g &&
            ((s = (g.className.match(e) || [, ""])[1]), (l = t.languages[s])),
          l)
        ) {
          ;(a.className =
            a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s),
            (g = a.parentNode),
            /pre/i.test(g.nodeName) &&
              (g.className =
                g.className.replace(e, "").replace(/\s+/g, " ") +
                " language-" +
                s)
          var o = a.textContent
          if (o) {
            o = o
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/\u00a0/g, " ")
            var c = { element: a, language: s, grammar: l, code: o }
            if ((t.hooks.run("before-highlight", c), r && self.Worker)) {
              var u = new Worker(t.filename)
              ;(u.onmessage = function (e) {
                ;(c.highlightedCode = n.stringify(JSON.parse(e.data), s)),
                  t.hooks.run("before-insert", c),
                  (c.element.innerHTML = c.highlightedCode),
                  i && i.call(c.element),
                  t.hooks.run("after-highlight", c)
              }),
                u.postMessage(
                  JSON.stringify({ language: c.language, code: c.code })
                )
            } else
              (c.highlightedCode = t.highlight(c.code, c.grammar, c.language)),
                t.hooks.run("before-insert", c),
                (c.element.innerHTML = c.highlightedCode),
                i && i.call(a),
                t.hooks.run("after-highlight", c)
          }
        }
      },
      highlight: function (e, a, r) {
        return n.stringify(t.tokenize(e, a), r)
      },
      tokenize: function (e, n, a) {
        var r = t.Token,
          i = [e],
          s = n.rest
        if (s) {
          for (var l in s) n[l] = s[l]
          delete n.rest
        }
        e: for (var l in n)
          if (n.hasOwnProperty(l) && n[l]) {
            var g = n[l],
              o = g.inside,
              c = !!g.lookbehind,
              u = 0
            g = g.pattern || g
            for (var p = 0; p < i.length; p++) {
              var d = i[p]
              if (i.length > e.length) break e
              if (!(d instanceof r)) {
                g.lastIndex = 0
                var m = g.exec(d)
                if (m) {
                  c && (u = m[1].length)
                  var f = m.index - 1 + u,
                    m = m[0].slice(u),
                    h = m.length,
                    y = f + h,
                    w = d.slice(0, f + 1),
                    k = d.slice(y + 1),
                    b = [p, 1]
                  w && b.push(w)
                  var v = new r(l, o ? t.tokenize(m, o) : m)
                  b.push(v), k && b.push(k), Array.prototype.splice.apply(i, b)
                }
              }
            }
          }
        return i
      },
      hooks: {
        all: {},
        add: function (e, n) {
          var a = t.hooks.all
          ;(a[e] = a[e] || []), a[e].push(n)
        },
        run: function (e, n) {
          var a = t.hooks.all[e]
          if (a && a.length) for (var r, i = 0; (r = a[i++]); ) r(n)
        },
      },
    }),
    n = (t.Token = function (e, t) {
      ;(this.type = e), (this.content = t)
    })
  if (
    ((n.stringify = function (e, a, r) {
      if ("string" == typeof e) return e
      if ("[object Array]" == Object.prototype.toString.call(e))
        return e
          .map(function (t) {
            return n.stringify(t, a, e)
          })
          .join("")
      var i = {
        type: e.type,
        content: n.stringify(e.content, a, r),
        tag: "span",
        classes: ["token", e.type],
        attributes: {},
        language: a,
        parent: r,
      }
      "comment" == i.type && (i.attributes.spellcheck = "true"),
        t.hooks.run("wrap", i)
      var s = ""
      for (var l in i.attributes) s += l + '="' + (i.attributes[l] || "") + '"'
      return (
        "<" +
        i.tag +
        ' class="' +
        i.classes.join(" ") +
        '" ' +
        s +
        ">" +
        i.content +
        "</" +
        i.tag +
        ">"
      )
    }),
    !self.document)
  )
    return void self.addEventListener(
      "message",
      function (e) {
        var n = JSON.parse(e.data),
          a = n.language,
          r = n.code
        self.postMessage(JSON.stringify(t.tokenize(r, t.languages[a]))),
          self.close()
      },
      !1
    )
  var a = document.getElementsByTagName("script")
  ;(a = a[a.length - 1]) &&
    ((t.filename = a.src),
    document.addEventListener &&
      !a.hasAttribute("data-manual") &&
      document.addEventListener("DOMContentLoaded", t.highlightAll))
})(),
  (Prism.languages.markup = {
    comment: /&lt;!--[\w\W]*?-->/g,
    prolog: /&lt;\?.+?\?>/,
    doctype: /&lt;!DOCTYPE.+?>/,
    cdata: /&lt;!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
      pattern: /&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,
      inside: {
        tag: {
          pattern: /^&lt;\/?[\w:-]+/i,
          inside: { punctuation: /^&lt;\/?/, namespace: /^[\w-]+?:/ },
        },
        "attr-value": {
          pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
          inside: { punctuation: /=|>|"/g },
        },
        punctuation: /\/?>/g,
        "attr-name": {
          pattern: /[\w:-]+/g,
          inside: { namespace: /^[\w-]+?:/ },
        },
      },
    },
    entity: /&amp;#?[\da-z]{1,8};/gi,
  }),
  Prism.hooks.add("wrap", function (e) {
    "entity" === e.type &&
      (e.attributes.title = e.content.replace(/&amp;/, "&"))
  }),
  (Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//g,
    atrule: {
      pattern: /@[\w-]+?.*?(;|(?=\s*{))/gi,
      inside: { punctuation: /[;:]/g },
    },
    url: /url\((["']?).*?\1\)/gi,
    selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/g,
    property: /(\b|\B)[\w-]+(?=\s*:)/gi,
    string: /("|')(\\?.)*?\1/g,
    important: /\B!important\b/gi,
    ignore: /&(lt|gt|amp);/gi,
    punctuation: /[\{\};:]/g,
  }),
  Prism.languages.markup &&
    Prism.languages.insertBefore("markup", "tag", {
      style: {
        pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,
        inside: {
          tag: {
            pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,
            inside: Prism.languages.markup.tag.inside,
          },
          rest: Prism.languages.css,
        },
      },
    }),
  (Prism.languages.css.selector = {
    pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
    inside: {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g,
      "pseudo-class": /:[-\w]+(?:\(.*\))?/g,
      class: /\.[-:\.\w]+/g,
      id: /#[-:\.\w]+/g,
    },
  }),
  Prism.languages.insertBefore("css", "ignore", {
    hexcode: /#[\da-f]{3,6}/gi,
    entity: /\\[\da-f]{1,8}/gi,
    number: /[\d%\.]+/g,
    function: /(attr|calc|cross-fade|cycle|element|hsla?|image|lang|linear-gradient|matrix3d|matrix|perspective|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|rgba?|rotatex|rotatey|rotatez|rotate3d|rotate|scalex|scaley|scalez|scale3d|scale|skewx|skewy|skew|steps|translatex|translatey|translatez|translate3d|translate|url|var)/gi,
  }),
  (Prism.languages.clike = {
    comment: {
      pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,
      lookbehind: !0,
    },
    string: /("|')(\\?.)*?\1/g,
    "class-name": {
      pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,
      lookbehind: !0,
      inside: { punctuation: /(\.|\\)/ },
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
    boolean: /\b(true|false)\b/g,
    function: { pattern: /[a-z0-9_]+\(/gi, inside: { punctuation: /\(/ } },
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
    operator: /[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
    ignore: /&(lt|gt|amp);/gi,
    punctuation: /[{}[\];(),.:]/g,
  }),
  (Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g,
  })),
  Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
      lookbehind: !0,
    },
  }),
  Prism.languages.markup &&
    Prism.languages.insertBefore("markup", "tag", {
      script: {
        pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,
        inside: {
          tag: {
            pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,
            inside: Prism.languages.markup.tag.inside,
          },
          rest: Prism.languages.javascript,
        },
      },
    }),
  Prism.hooks.add("after-highlight", function (e) {
    var t = e.element.parentNode
    if (
      t &&
      /pre/i.test(t.nodeName) &&
      -1 !== t.className.indexOf("line-numbers")
    ) {
      var n,
        a = 1 + e.code.split("\n").length
      ;(lines = new Array(a)),
        (lines = lines.join("<span></span>")),
        (n = document.createElement("span")),
        (n.className = "line-numbers-rows"),
        (n.innerHTML = lines),
        t.hasAttribute("data-start") &&
          (t.style.counterReset =
            "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)),
        e.element.appendChild(n)
    }
  }),
  (function () {
    if (self.Prism) {
      var e = /\b([a-z]{3,7}:\/\/|tel:)[\w-+%~\/.]+/,
        t = /\b\S+@[\w.]+[a-z]{2}/,
        n = /\[([^\]]+)]\(([^)]+)\)/,
        a = ["comment", "url", "attr-value", "string"]
      for (var r in Prism.languages) {
        var i = Prism.languages[r]
        Prism.languages.DFS(i, function (r, i) {
          a.indexOf(r) > -1 &&
            (i.pattern || (i = this[r] = { pattern: i }),
            (i.inside = i.inside || {}),
            "comment" == r && (i.inside["md-link"] = n),
            (i.inside["url-link"] = e),
            (i.inside["email-link"] = t))
        }),
          (i["url-link"] = e),
          (i["email-link"] = t)
      }
      Prism.hooks.add("wrap", function (e) {
        if (/-link$/.test(e.type)) {
          e.tag = "a"
          var t = e.content
          if ("email-link" == e.type) t = "mailto:" + t
          else if ("md-link" == e.type) {
            var a = e.content.match(n)
            ;(t = a[2]), (e.content = a[1])
          }
          e.attributes.href = t
        }
      })
    }
  })()
