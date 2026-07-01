/**
 * Case study data — drives all drawer content.
 * Add future projects by appending to this array.
 */
export const caseStudies = [
  {
    slug: 'deez-prints',
    title: 'Deez Prints',
    year: '2024',
    category: 'UI/UX Design · E-Commerce · Mobile App',
    expandable: true,
    description:
      'A streetwear-first mobile shopping experience — browse trending drops, customize apparel in a built-in studio, and check out with zero friction.',

    metrics: [
      { label: 'Screens Designed', value: '30+' },
      { label: 'Conversion Lift', value: '98%' },
      { label: 'Avg. Session', value: '12.4s' },
    ],

    overview: {
      challenge:
        'Streetwear shoppers expect the same energy online that the brand carries in person. The existing web store felt generic — it lacked personality, had a clunky mobile experience, and didn\'t reflect the raw, bold identity of Deez Prints.',
      goals: [
        'Create a mobile-first shopping experience that feels as bold as the brand itself.',
        'Integrate a custom studio feature letting users design their own apparel.',
        'Reduce checkout friction to under 3 taps from cart to confirmation.',
      ],
      solution:
        'A dark-mode, high-contrast mobile app with curated "Trending Now" feeds, a built-in custom studio for live apparel previews, and a streamlined cart-to-checkout flow that feels instant.',
    },

    designPhilosophy: {
      principles: [
        'Bold over safe — every screen should hit hard.',
        'Mobile-first, desktop-friendly.',
        'Zero unnecessary UI chrome.',
      ],
      colors: [
        { name: 'Obsidian', hex: '#1a1a1f' },
        { name: 'Blaze Orange', hex: '#ff7a1a' },
        { name: 'Concrete', hex: '#2c2c2e' },
        { name: 'Bone White', hex: '#f4f1ea' },
      ],
      typography: {
        heading: 'Bebas Neue Condensed',
        body: 'Poppins',
        note: 'Bold condensed headings paired with clean sans-serif body text for maximum contrast and readability.',
      },
    },

    interfaceShowcase: {
      heading: 'The Interface',
      description:
        'Every screen was designed to feel immersive — dark backgrounds let the product photography breathe, while orange accents guide the eye to CTAs.',
      phoneMockups: [
        { label: 'Home — Trending Now', id: 'dp-home' },
        { label: 'Product Detail', id: 'dp-pdp' },
        { label: 'Custom Studio', id: 'dp-studio' },
        { label: 'Cart Overview', id: 'dp-cart' },
      ],
    },

    flow: {
      heading: 'The Flow',
      description:
        'From discovery to order confirmation — a seamless user journey designed for speed and clarity.',
      steps: [
        { label: 'Browse & Discover', description: 'Curated drops and trending products surface instantly on launch.', id: 'dp-flow-browse' },
        { label: 'Customize', description: 'The Custom Studio lets users preview their designs on real apparel mockups.', id: 'dp-flow-customize' },
        { label: 'Add to Cart', description: 'One-tap add with size/color selection right on the product card.', id: 'dp-flow-cart' },
        { label: 'Checkout', description: 'Frictionless payment with order confirmation in under 3 taps.', id: 'dp-flow-checkout' },
      ],
    },

    gallery: {
      heading: 'Full Gallery',
      items: [
        { id: 'dp-gal-1', label: 'Landing Screen', aspect: '9/18' },
        { id: 'dp-gal-2', label: 'Category Grid', aspect: '9/18' },
        { id: 'dp-gal-3', label: 'Product Detail Page', aspect: '9/18' },
        { id: 'dp-gal-4', label: 'Custom Studio', aspect: '9/18' },
        { id: 'dp-gal-5', label: 'Cart View', aspect: '9/18' },
        { id: 'dp-gal-6', label: 'Order Confirmation', aspect: '9/18' },
      ],
    },

    designSystem: {
      heading: 'Design System',
      colors: [
        { name: 'Primary', hex: '#ff7a1a' },
        { name: 'Surface', hex: '#1a1a1f' },
        { name: 'Surface Alt', hex: '#2c2c2e' },
        { name: 'On Surface', hex: '#f4f1ea' },
        { name: 'Muted', hex: '#6b665c' },
        { name: 'Success', hex: '#34c759' },
      ],
      components: [
        'Primary Button',
        'Ghost Button',
        'Product Card',
        'Category Chip',
        'Cart Item Row',
        'Input Field',
        'Bottom Nav Bar',
        'Toast Notification',
      ],
    },

    reflection: {
      heading: 'Reflection',
      learnings: [
        'Dark-mode-first design forces you to be intentional with every accent color.',
        'The custom studio feature became the most-loved feature — building it was worth the complexity.',
        'Reducing checkout to 3 taps dramatically improved conversion in testing.',
      ],
      outcome:
        'Deez Prints now has a cohesive digital identity that matches its physical brand energy. The app design has become the foundation for future product expansion.',
    },
  },

  {
    slug: 'meezan-bank',
    title: 'Meezan Bank Redesign',
    year: '2025',
    category: 'UI/UX Design · Fintech · Concept Redesign',
    expandable: true,
    description:
      'A concept redesign of Pakistan\'s leading Islamic bank app — reimagining the dashboard, transfers, and account management with a modern, dark-mode-first approach.',

    metrics: [
      { label: 'Screens Designed', value: '40+' },
      { label: 'Design Time', value: '3 Weeks' },
      { label: 'Components', value: '120+' },
    ],

    overview: {
      challenge:
        'Meezan Bank\'s existing app felt outdated — cluttered navigation, inconsistent visual language, and a bright UI that didn\'t align with modern fintech standards. Users struggled with basic tasks like transfers and bill payments.',
      goals: [
        'Modernize the visual identity with a dark-mode-first approach.',
        'Simplify navigation and reduce cognitive load on core banking tasks.',
        'Create a scalable design system for future feature expansion.',
      ],
      solution:
        'A complete visual overhaul built around a dark, sophisticated palette with the signature Meezan green as an accent. Streamlined task flows, card-based dashboard, and a component-driven design system.',
    },

    designPhilosophy: {
      principles: [
        'Trust through clarity — every element earns its space.',
        'Dark mode as the default, not an afterthought.',
        'Islamic finance identity preserved through color and form.',
      ],
      colors: [
        { name: 'Deep Black', hex: '#0d0d0f' },
        { name: 'Meezan Green', hex: '#1b8a4e' },
        { name: 'Card Surface', hex: '#1a1a1f' },
        { name: 'Soft White', hex: '#e8e8e8' },
      ],
      typography: {
        heading: 'Plus Jakarta',
        body: 'Poppins',
        note: 'Clean geometric headings paired with highly legible body text — optimized for financial data density.',
      },
    },

    interfaceShowcase: {
      heading: 'The Interface',
      description:
        'A clean, card-based dashboard that surfaces the most important information first — balance, recent transactions, and quick actions.',
      phoneMockups: [
        { label: 'Dashboard', id: 'mb-dashboard' },
        { label: 'Transfer Flow', id: 'mb-transfer' },
        { label: 'Account Details', id: 'mb-account' },
        { label: 'Bill Payments', id: 'mb-bills' },
      ],
    },

    flow: {
      heading: 'Every Screen, Slide by Slide',
      description:
        'A walkthrough of the complete app experience — from login to transaction history.',
      steps: [
        { label: 'Login & Auth', description: 'Biometric-first login with PIN fallback. Clean, distraction-free.', id: 'mb-flow-login' },
        { label: 'Dashboard', description: 'Card-based layout surfacing balance, quick actions, and recent activity.', id: 'mb-flow-dash' },
        { label: 'Send Money', description: 'Streamlined transfer flow — beneficiary selection, amount, confirmation in 3 steps.', id: 'mb-flow-send' },
        { label: 'Transaction History', description: 'Filterable, searchable history with clear categorization.', id: 'mb-flow-history' },
      ],
    },

    gallery: {
      heading: 'Full Gallery',
      items: [
        { id: 'mb-gal-1', label: 'Login Screen', aspect: '9/18' },
        { id: 'mb-gal-2', label: 'Dashboard', aspect: '9/18' },
        { id: 'mb-gal-3', label: 'Account Overview', aspect: '9/18' },
        { id: 'mb-gal-4', label: 'Fund Transfer', aspect: '9/18' },
        { id: 'mb-gal-5', label: 'Bill Payments', aspect: '9/18' },
        { id: 'mb-gal-6', label: 'Settings', aspect: '9/18' },
        { id: 'mb-gal-7', label: 'Transaction Detail', aspect: '9/18' },
        { id: 'mb-gal-8', label: 'Notifications', aspect: '9/18' },
      ],
    },

    designSystem: {
      heading: 'Design System',
      colors: [
        { name: 'Primary', hex: '#1b8a4e' },
        { name: 'Surface', hex: '#0d0d0f' },
        { name: 'Card', hex: '#1a1a1f' },
        { name: 'On Surface', hex: '#e8e8e8' },
        { name: 'Muted', hex: '#6b665c' },
        { name: 'Error', hex: '#ff3b30' },
      ],
      components: [
        'Primary Button',
        'Secondary Button',
        'Balance Card',
        'Transaction Row',
        'Quick Action Tile',
        'Input Field',
        'Bottom Tab Bar',
        'Status Badge',
      ],
    },

    reflection: {
      heading: 'Reflection',
      learnings: [
        'Financial apps need to balance information density with visual breathing room.',
        'Dark mode in fintech builds a sense of premium trust — users associate it with sophistication.',
        'A strong design system from day one saved weeks of iteration time.',
      ],
      outcome:
        'This concept redesign demonstrates how Pakistan\'s largest Islamic bank could modernize its digital presence while maintaining brand trust. The design system is ready for production-scale implementation.',
    },
  },
];
