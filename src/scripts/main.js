/** Mobile nav toggle */
function initNav() {
  const toggle = document.querySelector('.topbar__toggle');
  const nav    = document.querySelector('.topbar__nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/** Highlight active nav link based on scroll position */
function initScrollSpy() {
  const sections  = document.querySelectorAll('[id]');
  const navLinks  = document.querySelectorAll('.topbar__nav a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => a.classList.remove('is-active'));
        const link = document.querySelector(`.topbar__nav a[href="#${entry.target.id}"]`);
        if (link) link.classList.add('is-active');
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

/**
 * Custom smooth scroll — uses requestAnimationFrame so it works
 * even when Windows "Animation effects" / prefers-reduced-motion is off.
 */
function smoothScrollTo(targetY, duration = 900) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;

  // ease-in-out cubic
  function ease(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * ease(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

/** Smooth scroll for all anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        smoothScrollTo(0);
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const topbarHeight = 60; // offset for fixed topbar
        const targetY = target.getBoundingClientRect().top + window.scrollY - topbarHeight;
        smoothScrollTo(targetY);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollSpy();
  initSmoothScroll();
});
