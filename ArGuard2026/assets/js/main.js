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

// Motto carousel: cross-fades through a set of mottos, pause on hover / off-screen.
(function initMotto() {
  const band = document.querySelector("[data-motto]");
  if (!band) return;
  const mottos = Array.from(band.querySelectorAll(".motto-headline"));
  const dots = Array.from(band.querySelectorAll(".motto-dot"));
  if (mottos.length <= 1) return;

  const PERIOD_MS = 6500;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;
  let paused = false;
  let onScreen = true;
  let timer = null;

  function show(i) {
    current = (i + mottos.length) % mottos.length;
    mottos.forEach((m, idx) => {
      if (idx === current) m.setAttribute("data-active", "");
      else m.removeAttribute("data-active");
    });
    dots.forEach((d, idx) => {
      d.setAttribute("aria-selected", String(idx === current));
    });
  }

  function schedule() {
    clearTimeout(timer);
    if (reducedMotion || paused || !onScreen) return;
    timer = setTimeout(() => { show(current + 1); schedule(); }, PERIOD_MS);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { show(i); schedule(); });
  });

  band.addEventListener("mouseenter", () => { paused = true;  clearTimeout(timer); });
  band.addEventListener("mouseleave", () => { paused = false; schedule(); });
  band.addEventListener("focusin",    () => { paused = true;  clearTimeout(timer); });
  band.addEventListener("focusout",   () => { paused = false; schedule(); });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      schedule();
    }, { threshold: 0.25 }).observe(band);
  }

  show(0);
  schedule();
})();

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

