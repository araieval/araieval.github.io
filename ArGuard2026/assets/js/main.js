const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Reveal-on-scroll (used by other sections that opt in).
const reveals = document.querySelectorAll("[data-reveal]");
if (reveals.length) {
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${Math.min(i, 4) * 80}ms`;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
}

// Live updates carousel — auto-rotates, click a tab to jump, pause on hover.
(function initLiveFeed() {
  const feed = document.querySelector("[data-live-feed]");
  if (!feed) return;

  const cards = Array.from(feed.querySelectorAll(".lf-card"));
  const tabs = Array.from(feed.querySelectorAll(".lf-tab"));
  if (cards.length === 0 || cards.length !== tabs.length) return;

  const PERIOD_MS = 6000;
  const TICK_MS = 100;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let current = 0;
  let elapsed = 0;
  let paused = false;
  let timer = null;

  function activate(i, { resetElapsed = true } = {}) {
    current = (i + cards.length) % cards.length;
    cards.forEach((c, idx) => {
      if (idx === current) c.setAttribute("data-active", "");
      else c.removeAttribute("data-active");
    });
    tabs.forEach((t, idx) => {
      t.setAttribute("aria-selected", String(idx === current));
      const fill = t.querySelector(".lf-tab-progress-fill");
      if (fill && idx !== current) fill.style.width = "0%";
    });
    if (resetElapsed) elapsed = 0;
  }

  function tick() {
    if (paused || reducedMotion) return;
    elapsed += TICK_MS;
    const pct = Math.min(100, (elapsed / PERIOD_MS) * 100);
    const fill = tabs[current].querySelector(".lf-tab-progress-fill");
    if (fill) fill.style.width = pct + "%";
    if (elapsed >= PERIOD_MS) activate(current + 1);
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => activate(i));
    tab.addEventListener("focus", () => { paused = true; });
    tab.addEventListener("blur", () => { paused = false; });
  });

  feed.addEventListener("mouseenter", () => { paused = true; });
  feed.addEventListener("mouseleave", () => { paused = false; });

  // Pause when off-screen so the carousel doesn't churn invisibly.
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(([entry]) => {
      paused = !entry.isIntersecting;
    }, { threshold: 0.05 });
    io.observe(feed);
  }

  activate(0);
  if (!reducedMotion) timer = setInterval(tick, TICK_MS);
})();
