jQuery(document).ready(function (t) {
  function a(a) {
    if (t(document).width() > 900) {
      var s = a.substr(1)
      if ("yes" == s || "no" == s) return
      var r = t("#" + s),
        n = r.position(),
        i = t(r).prop("tagName")
      ;(i = i.toLowerCase()), t(o).attr("data-target-tag", i)
      var c = n.top
      t(o).css({ top: c }), a == e ? t(o).hide() : t(o).show()
      var g = r.offset().top - 30
      t("body").animate({ scrollTop: g }, 100)
    }
  }
  function s(a, s) {
    var o = "tag-" + a
    ;(s = s || t(".tags-button--" + a)),
      t("." + o).show(),
      t(".tags-button--current").removeClass("tags-button--current"),
      s.addClass("tags-button--current")
  }
  if ((t("body").removeClass("no-js"), t(".p-hide-demo").length > 0)) {
    t(".post__text")
      .find(".jsbin[data-src]")
      .each(function () {
        t(this).before(
          '<div class="js--toggle-demo"><span class="js--toggle-demo__text">Демо</span>'
        )
      }),
      t(".js--toggle-demo").click(function () {
        var a = t(this).next(".jsbin"),
          s = t(a).attr("data-src")
        t(a).attr("src", s),
          t(a).slideToggle("slow"),
          t(this).toggleClass("js--toggle-opened")
      })
  }
  var o = ".js--target-marker",
    e = "#begin"
  if (t(e).length > 0) {
    var r =
      "<a href='" +
      e +
      "' class='js--target-marker'><svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><path id='arrow' d='M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0-0.781 0.781-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z'/></svg></a>"
    t(e).before(r)
  }
  t("a[href^='#']").click(function (s) {
    a(t(this).attr("href"))
  })
  var n = document.location.hash
  n &&
    ("/tags" === document.location.pathname ||
    "/tags/" === document.location.pathname
      ? s(n.substr(1))
      : a(n))
  var i = t(".posts__list---by-tag .post")
  t(".tags-button").click(function () {
    var a = this.dataset.targetTag
    i.hide(), s(a, t(this)), (document.location.hash = a)
  })
})
