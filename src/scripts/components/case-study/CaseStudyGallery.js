/**
 * CaseStudyGallery — Interface Showcase, Flow, and Full Gallery sections.
 * Uses CaseStudyPlaceholder for all image slots.
 * @param {object} data — a single case study object from caseStudies.js
 */
import { CaseStudyPlaceholder } from './CaseStudyPlaceholder.js';

export function CaseStudyGallery(data) {
  const { interfaceShowcase, flow, gallery } = data;

  /* ── Interface Showcase ─────────────────────────────────── */
  const phonesHtml = (interfaceShowcase.phoneMockups || [])
    .map((m) =>
      CaseStudyPlaceholder({ id: m.id, label: m.label, aspect: '9/18', type: 'phone' })
    )
    .join('');

  /* ── Flow Steps ─────────────────────────────────────────── */
  const flowHtml = (flow.steps || [])
    .map(
      (s, i) => `
      <div class="cs-flow__step">
        <div class="cs-flow__num">${String(i + 1).padStart(2, '0')}</div>
        <div class="cs-flow__content">
          <h5 class="cs-flow__label">${s.label}</h5>
          <p class="cs-flow__desc">${s.description}</p>
        </div>
        ${CaseStudyPlaceholder({ id: s.id, label: s.label, aspect: '9/18', type: 'phone' })}
      </div>`
    )
    .join('');

  /* ── Full Gallery ───────────────────────────────────────── */
  const galleryHtml = (gallery.items || [])
    .map((g) =>
      CaseStudyPlaceholder({ id: g.id, label: g.label, aspect: g.aspect, type: 'gallery' })
    )
    .join('');

  return /* html */ `
    <!-- Interface Showcase -->
    <div class="cs-interface">
      <h4 class="cs-section-title">
        <span class="mini-pill">${interfaceShowcase.heading}</span>
      </h4>
      <p class="cs-body">${interfaceShowcase.description}</p>
      <div class="cs-phones-grid">${phonesHtml}</div>
    </div>

    <!-- Flow -->
    <div class="cs-flow">
      <h4 class="cs-section-title">
        <span class="mini-pill">${flow.heading}</span>
      </h4>
      <p class="cs-body">${flow.description}</p>
      <div class="cs-flow__steps">${flowHtml}</div>
    </div>

    <!-- Full Gallery -->
    <div class="cs-gallery">
      <h4 class="cs-section-title">
        <span class="mini-pill">${gallery.heading}</span>
      </h4>
      <div class="cs-gallery__grid">${galleryHtml}</div>
    </div>
  `;
}
