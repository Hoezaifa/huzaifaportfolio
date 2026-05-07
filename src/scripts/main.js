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

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollSpy();
});
