/**
 * CaseStudyOverview — Challenge / Goals / Solution + Design Philosophy.
 * @param {object} data — a single case study object from caseStudies.js
 */
export function CaseStudyOverview(data) {
  const { overview, designPhilosophy } = data;

  const goalsHtml = (overview.goals || [])
    .map((g) => `<li>${g}</li>`)
    .join('');

  const principlesHtml = (designPhilosophy.principles || [])
    .map((p) => `<li>${p}</li>`)
    .join('');

  const colorsHtml = (designPhilosophy.colors || [])
    .map(
      (c) => `
      <div class="cs-color-swatch">
        <div class="cs-color-swatch__fill" style="background: ${c.hex};"></div>
        <span class="cs-color-swatch__name">${c.name}</span>
        <span class="cs-color-swatch__hex">${c.hex}</span>
      </div>`
    )
    .join('');

  return /* html */ `
    <div class="cs-overview">

      <!-- Challenge -->
      <div class="cs-overview__block">
        <h4 class="cs-section-title">
          <span class="mini-pill">The Challenge</span>
        </h4>
        <p class="cs-body">${overview.challenge}</p>
      </div>

      <!-- Goals -->
      <div class="cs-overview__block">
        <h4 class="cs-section-title">
          <span class="mini-pill">Goals</span>
        </h4>
        <ul class="cs-list">${goalsHtml}</ul>
      </div>

      <!-- Solution -->
      <div class="cs-overview__block">
        <h4 class="cs-section-title">
          <span class="mini-pill">Solution</span>
        </h4>
        <p class="cs-body">${overview.solution}</p>
      </div>

    </div>

    <!-- Design Philosophy -->
    <div class="cs-philosophy">
      <h4 class="cs-section-title">
        <span class="mini-pill">Design Philosophy</span>
      </h4>

      <div class="cs-philosophy__grid">
        <!-- Principles -->
        <div class="cs-philosophy__col">
          <h5 class="cs-sub-heading">Principles</h5>
          <ul class="cs-list">${principlesHtml}</ul>
        </div>

        <!-- Typography -->
        <div class="cs-philosophy__col">
          <h5 class="cs-sub-heading">Typography</h5>
          <div class="cs-type-card">
            <span class="cs-type-card__heading">${designPhilosophy.typography.heading}</span>
            <span class="cs-type-card__body">${designPhilosophy.typography.body}</span>
            <p class="cs-type-card__note">${designPhilosophy.typography.note}</p>
          </div>
        </div>
      </div>

      <!-- Color palette -->
      <h5 class="cs-sub-heading" style="margin-top: 28px;">Color Palette</h5>
      <div class="cs-color-grid">${colorsHtml}</div>
    </div>
  `;
}
