/**
 * CaseStudyPlaceholder — elegant placeholder for phone/mockup/gallery slots.
 * Returns an HTML string. Replace the image manually later.
 *
 * @param {object} opts
 * @param {string} opts.id       — unique id for the slot (for later replacement)
 * @param {string} opts.label    — human-readable label
 * @param {string} [opts.aspect] — CSS aspect-ratio value, e.g. '9/18'
 * @param {'phone'|'mockup'|'gallery'} [opts.type] — determines label prefix
 */
export function CaseStudyPlaceholder({ id, label, aspect = '9/18', type = 'phone' }) {
  const prefix = {
    phone:   'SCREEN_PLACEHOLDER',
    mockup:  'MOCKUP_PLACEHOLDER',
    gallery: 'GALLERY_PLACEHOLDER',
  }[type] || 'SCREEN_PLACEHOLDER';

  const cls = type === 'phone' ? 'cs-placeholder--phone' : '';

  return /* html */ `
    <div class="cs-placeholder ${cls}" id="${id}" style="aspect-ratio: ${aspect};">
      <span class="cs-placeholder__label">${prefix}</span>
      <span class="cs-placeholder__name">${label}</span>
    </div>
  `;
}
