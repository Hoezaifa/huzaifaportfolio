/**
 * CaseStudyHero — large project title, year, category, description, metrics.
 * @param {object} data — a single case study object from caseStudies.js
 */
export function CaseStudyHero(data) {
  const metricsHtml = (data.metrics || [])
    .map(
      (m) => `
      <div class="cs-hero__metric">
        <span class="cs-hero__metric-val">${m.value}</span>
        <span class="cs-hero__metric-label">${m.label}</span>
      </div>`
    )
    .join('');

  return /* html */ `
    <div class="cs-hero">
      <div class="cs-hero__text">
        <span class="cs-hero__category">${data.category}</span>
        <h3 class="cs-hero__title">${data.title}</h3>
        <span class="cs-hero__year">${data.year}</span>
        <p class="cs-hero__desc">${data.description}</p>
      </div>
      ${
        metricsHtml
          ? `<div class="cs-hero__metrics">${metricsHtml}</div>`
          : ''
      }
    </div>
  `;
}
