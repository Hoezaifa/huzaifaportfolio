/**
 * CaseStudyDrawer — master component that assembles all case-study sections.
 * Lazy-renders content on first expansion.
 */
import { CaseStudyHero } from './CaseStudyHero.js';
import { CaseStudyOverview } from './CaseStudyOverview.js';
import { CaseStudyGallery } from './CaseStudyGallery.js';
import { CaseStudyDesignSystem } from './CaseStudyDesignSystem.js';

/**
 * Renders the full case-study content into an HTML string.
 * @param {object} data — a single case study entry from caseStudies.js
 * @returns {string} HTML string
 */
export function renderCaseStudy(data) {
  return [
    CaseStudyHero(data),
    CaseStudyOverview(data),
    CaseStudyGallery(data),
    CaseStudyDesignSystem(data),
  ].join('');
}

/**
 * Initialises all case-study drawers on the page.
 * Call once after DOMContentLoaded.
 *
 * @param {Array} studies — the caseStudies array
 */
export function initCaseStudyDrawers(studies) {
  /** Track which drawer is currently open (null = none) */
  let openSlug = null;

  /** Map of slugs that have already been rendered (lazy-load guard) */
  const rendered = new Set();

  document.querySelectorAll('[data-cs-toggle]').forEach((btn) => {
    const slug = btn.dataset.csToggle;
    const study = studies.find((s) => s.slug === slug);
    if (!study || !study.expandable) return;

    const drawer = document.getElementById(`drawer-${slug}`);
    if (!drawer) return;

    btn.addEventListener('click', () => {
      const isCurrentlyOpen = drawer.classList.contains('is-open');

      /* ── Close any currently open drawer first ──────────── */
      if (openSlug && openSlug !== slug) {
        const otherDrawer = document.getElementById(`drawer-${openSlug}`);
        const otherBtn = document.querySelector(`[data-cs-toggle="${openSlug}"]`);
        if (otherDrawer) {
          collapseDrawer(otherDrawer, otherBtn);
        }
      }

      /* ── Toggle this drawer ─────────────────────────────── */
      if (isCurrentlyOpen) {
        collapseDrawer(drawer, btn);
        openSlug = null;
      } else {
        /* Lazy-render on first open */
        if (!rendered.has(slug)) {
          drawer.querySelector('.cs-drawer__inner').innerHTML = renderCaseStudy(study);
          rendered.add(slug);
        }
        expandDrawer(drawer, btn);
        openSlug = slug;
      }
    });
  });
}

/* ─── Private helpers ───────────────────────────────────────────── */

function expandDrawer(drawer, btn) {
  const inner = drawer.querySelector('.cs-drawer__inner');

  /* Measure natural height */
  drawer.classList.add('is-measuring');
  const height = inner.scrollHeight;
  drawer.classList.remove('is-measuring');

  /* Animate open */
  drawer.style.height = '0px';
  drawer.classList.add('is-open');
  // Force reflow so the browser registers the starting height
  void drawer.offsetHeight;
  drawer.style.height = height + 'px';

  /* After transition, let height be auto (for resize safety) */
  const onEnd = () => {
    drawer.style.height = 'auto';
    drawer.removeEventListener('transitionend', onEnd);
  };
  drawer.addEventListener('transitionend', onEnd);

  /* Update button text */
  if (btn) {
    btn.innerHTML = collapseLabel();
    btn.classList.add('is-active');
  }

  /* Gentle scroll to make the start of the drawer visible */
  requestAnimationFrame(() => {
    const rect = drawer.getBoundingClientRect();
    if (rect.top < 0 || rect.top > window.innerHeight * 0.5) {
      const topbar = document.querySelector('.topbar');
      const offset = topbar ? topbar.offsetHeight + 16 : 72;
      const y = drawer.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
}

function collapseDrawer(drawer, btn) {
  /* Set explicit height so we can animate from it to 0 */
  const inner = drawer.querySelector('.cs-drawer__inner');
  drawer.style.height = inner.scrollHeight + 'px';
  // Force reflow
  void drawer.offsetHeight;
  drawer.style.height = '0px';

  const onEnd = () => {
    drawer.classList.remove('is-open');
    drawer.removeEventListener('transitionend', onEnd);
  };
  drawer.addEventListener('transitionend', onEnd);

  /* Update button text */
  if (btn) {
    btn.innerHTML = expandLabel();
    btn.classList.remove('is-active');
  }
}

function expandLabel() {
  return `View Full Case Study <span class="cs-toggle__arrow" aria-hidden="true">&#8595;</span>`;
}

function collapseLabel() {
  return `Collapse Case Study <span class="cs-toggle__arrow" aria-hidden="true">&#8593;</span>`;
}
