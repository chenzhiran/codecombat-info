/* CodeCombat 用户故事 · 交互脚本 */
(function () {
  "use strict";

  /* 阅读进度 */
  var bar = document.querySelector(".progress");
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      bar.style.width = Math.min(100, Math.max(0, p * 100)) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* 滚动浮现 */
  var items = document.querySelectorAll(".reveal");
  if (items.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
      items.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i % 9, 8) * 30 + "ms";
        io.observe(el);
      });
    } else {
      items.forEach(function (el) { el.classList.add("in"); });
    }
  }

  /* 分类筛选 */
  var chips = document.querySelectorAll(".chip[data-filter]");
  var sections = document.querySelectorAll(".section[data-cat]");
  if (chips.length && sections.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var key = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        sections.forEach(function (sec) {
          var show = key === "all" || sec.getAttribute("data-cat") === key;
          sec.style.display = show ? "" : "none";
        });
        if (window.history && window.history.replaceState) {
          var url = key === "all" ? location.pathname + location.search : "?f=" + key;
          window.history.replaceState(null, "", url);
        }
      });
    });
    var f = new URLSearchParams(location.search).get("f");
    if (f) {
      var target = document.querySelector('.chip[data-filter="' + f + '"]');
      if (target) target.click();
    }
  }
})();
