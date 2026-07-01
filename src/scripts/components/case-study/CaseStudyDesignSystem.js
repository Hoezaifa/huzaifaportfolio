/**
 * CaseStudyDesignSystem — color tokens, components list, and reflection/outcomes.
 * @param {object} data — a single case study object from caseStudies.js
 */
export function CaseStudyDesignSystem(data) {
  const { designSystem, reflection } = data;

  /* ── DS Colors ──────────────────────────────────────────── */
  const dsColorsHtml = (designSystem.colors || [])
    .map(
      (c) => `
      <div class="cs-ds-color">
        <div class="cs-ds-color__swatch" style="background: ${c.hex};"></div>
        <span class="cs-ds-color__name">${c.name}</span>
        <span class="cs-ds-color__hex">${c.hex}</span>
      </div>`
    )
    .join('');

  /* ── DS Components ──────────────────────────────────────── */
  const componentsHtml = (designSystem.components || [])
    .map((c) => `<span class="cs-ds-chip">${c}</span>`)
    .join('');

  /* ── Reflection ─────────────────────────────────────────── */
  const learningsHtml = (reflection.learnings || [])
    .map((l) => `<li>${l}</li>`)
    .join('');

  return /* html */ `
    <!-- Design System -->
    <div class="cs-design-system">
      <h4 class="cs-section-title">
        <span class="mini-pill">${designSystem.heading}</span>
      </h4>

      <h5 class="cs-sub-heading">Colors</h5>
      <div class="cs-ds-color-grid">${dsColorsHtml}</div>

      <h5 class="cs-sub-heading" style="margin-top: 28px;">Components</h5>
      <div class="cs-ds-chips">${componentsHtml}</div>
    </div>

    <!-- Reflection -->
    <div class="cs-reflection">
      <h4 class="cs-section-title">
        <span class="mini-pill">${reflection.heading}</span>
      </h4>

      <h5 class="cs-sub-heading">Key Learnings</h5>
      <ul class="cs-list">${learningsHtml}</ul>

      <h5 class="cs-sub-heading" style="margin-top: 22px;">Outcome</h5>
      <p class="cs-body">${reflection.outcome}</p>
    </div>
  `;
}
