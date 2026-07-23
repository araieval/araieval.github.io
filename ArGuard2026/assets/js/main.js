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

// Motto band: draw in the highlight bars when it enters the viewport.
(function initMotto() {
  const band = document.querySelector(".motto-band");
  if (!band) return;
  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    band.classList.add("is-visible");
    return;
  }
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      band.classList.add("is-visible");
      io.disconnect();
    }
  }, { threshold: 0.25 });
  io.observe(band);
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

