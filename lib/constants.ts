/**
 * Application constants
 * All hardcoded values and constants are centralized here
 */

// ============================================================================
// URLs
// ============================================================================

export const SITE_URLS = {
  BASE: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ddosim.com",
  SIMULATOR: "https://ddosim.vercel.app",
  SCHEMA_ORG: "https://schema.org",
  GITHUB_REPO_API: "https://api.github.com/repos/DDoSimLab/Site",
  GITHUB_REPO: "https://github.com/DDoSimLab/Site",
} as const;

export const SIMULATOR_URLS = {
  PRIMARY: SITE_URLS.SIMULATOR,
} as const;

// ============================================================================
// Site Metadata
// ============================================================================

export const SITE_METADATA = {
  NAME: "DDoSim",
  COMPANY_NAME: "DDoSimLab",
  TITLE: {
    DEFAULT: "DDoSim - Interactive DDoS Attack Simulation & Visualization",
    TEMPLATE: "%s | DDoSim",
    BLOG: "Blog | DDoSim - Cybersecurity Articles and Guides",
    BLOG_POST_TEMPLATE: "%s | DDoSim Blog",
    NOT_FOUND: "Blog Post Not Found",
  },
  DESCRIPTION: {
    DEFAULT:
      "Experience real-time DDoS attack simulations with interactive global mapping, analytics, and educational insights. Visualize distributed denial-of-service attacks from multiple locations worldwide.",
    OPEN_GRAPH:
      "Interactive DDoS attack simulations with real-time global visualization and educational insights.",
    TWITTER:
      "Simulate and visualize DDoS attacks in real time for education, training, and research.",
    BLOG: "Explore our collection of cybersecurity articles, DDoS attack guides, network security best practices, and educational content.",
  },
  KEYWORDS: [
    "DDoS simulation",
    "DDoS attacks",
    "cybersecurity",
    "network security",
    "attack visualization",
    "security education",
    "DDoS training",
  ] as string[],
  OPEN_GRAPH: {
    TYPE: "website",
    IMAGE: {
      URL: "/og-image.jpg",
      WIDTH: 1200,
      HEIGHT: 630,
      ALT: "DDoSim - DDoS attack simulation and visualization",
    },
  },
  TWITTER: {
    CARD: "summary_large_image",
  },
  ROBOTS: {
    INDEX: true,
    FOLLOW: true,
  },
} as const;

// ============================================================================
// Routes & Navigation
// ============================================================================

export const ROUTES = {
  HOME: "/",
  BLOG: "/blog",
  BLOG_SLUG: (slug: string) => `/blog/${slug}`,
} as const;

export const NAVIGATION = {
  ITEMS: [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
  ] as Array<{ name: string; link: string }>,
  SECTIONS: {
    FEATURES: "#features",
    ABOUT: "#about",
  },
} as const;

// ============================================================================
// Text Content
// ============================================================================

export const TEXT_CONTENT = {
  HERO: {
    HEADING: {
      PART1: "Experience Real-Time",
      PART2: "DDoS",
      PART3: "Attack",
      PART4: "Simulations",
    },
    DESCRIPTION:
      "DDoSim is an interactive platform for simulating and visualizing Distributed Denial-of-Service (DDoS) attacks in real time across the globe.",
    BUTTON: "Simulator",
    ARIA_LABEL: "Open the DDoSim interactive DDoS attack simulator",
  },
  ABOUT: {
    TITLE: "About DDoSim",
    DESCRIPTION:
      "We're on a mission to make cybersecurity education accessible, interactive, and engaging for everyone.",
    MISSION: {
      TITLE: "Our Mission",
      DESCRIPTION:
        "To provide a powerful, educational platform that helps security professionals, students, and organizations understand DDoS attacks through interactive visualization and real-time simulation.",
    },
    VISION: {
      TITLE: "Our Vision",
      DESCRIPTION:
        "To become the leading platform for cybersecurity education, empowering the next generation of security professionals with hands-on experience in a safe, controlled environment.",
    },
  },
  FEATURES: {
    TITLE: "Features",
    DESCRIPTION:
      "DDoSim lets you quickly model, visualize, and understand DDoS attack and defense strategies with a beautiful, interactive globe.",
    ITEMS: [
      {
        TITLE: "Instant DDoS Attack Simulation",
        DESCRIPTION:
          "Model high-volume attack traffic and defense strategies in seconds—no server setup required.",
      },
      {
        TITLE: "Interactive, Real-Time Visualization",
        DESCRIPTION:
          "Watch attack and mitigation flows on a beautiful globe, enabling deeper understanding at a glance.",
      },
      {
        TITLE: "Safe & Educational",
        DESCRIPTION:
          "Safely simulate scenarios for training, workshops, and CTFs—without risking real infrastructure.",
      },
      {
        TITLE: "Flexible, Extensible Workflows",
        DESCRIPTION:
          "Script your own event scenarios or integrate with blue team tools to customize simulations to your needs.",
      },
    ],
  },
  BLOG: {
    PAGE: {
      TITLE: "Cybersecurity Articles & DDoS Guides",
      DESCRIPTION:
        "Read in-depth articles on distributed denial-of-service attacks, network security architecture, and modern cyber threat trends.",
      SEARCH_PLACEHOLDER: "Search articles by title, topic, or tag...",
      SEARCH_ARIA_LABEL: "Search blog articles",
      NO_RESULTS: "No blog posts found matching your search.",
      READ_MORE: "Read more",
      VIEW_ALL: "View All Articles",
    },
    POST: {
      BACK_TO_BLOG: "Back to Blog",
      BACK_TO_ALL: "Back to All Blogs",
      BY: "By",
      MIN_READ: "min read",
    },
  },
  FOOTER: {
    COPYRIGHT: (year: number) => `© ${year} DDoSimLab, All rights reserved`,
  },
  BUTTONS: {
    SIMULATOR: "Simulator",
  },
} as const;

// ============================================================================
// Globe Component Constants
// ============================================================================

export const GLOBE = {
  MOVEMENT_DAMPING: 1400,
  MARKER_COLORS: [
    [251 / 255, 100 / 255, 21 / 255], // Orange
    [59 / 255, 130 / 255, 246 / 255], // Blue
    [34 / 255, 197 / 255, 94 / 255], // Green
    [168 / 255, 85 / 255, 247 / 255], // Purple
    [236 / 255, 72 / 255, 153 / 255], // Pink
    [251 / 255, 191 / 255, 36 / 255], // Yellow
    [239 / 255, 68 / 255, 68 / 255], // Red
    [14 / 255, 165 / 255, 233 / 255], // Cyan
    [139 / 255, 92 / 255, 246 / 255], // Indigo
    [20 / 255, 184 / 255, 166 / 255], // Teal
  ] as const,
  CONFIG: {
    WIDTH: 800,
    HEIGHT: 800,
    DEVICE_PIXEL_RATIO: 2,
    PHI: 0,
    THETA: 0.3,
    DARK: 0,
    DIFFUSE: 0.4,
    MAP_SAMPLES: 16000,
    MAP_BRIGHTNESS: 1.2,
    BASE_COLOR: [1, 1, 1] as [number, number, number],
    MARKER_COLOR: [251 / 255, 100 / 255, 21 / 255] as [number, number, number],
    GLOW_COLOR: [1, 1, 1] as [number, number, number],
    MARKERS: [
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.1 },
      { location: [23.8103, 90.4125], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.07 },
      { location: [39.9042, 116.4074], size: 0.08 },
      { location: [-23.5505, -46.6333], size: 0.1 },
      { location: [19.4326, -99.1332], size: 0.1 },
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [34.6937, 135.5022], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.06 },
      { location: [51.5074, -0.1278], size: 0.09 }, // London, UK
      { location: [48.8566, 2.3522], size: 0.08 }, // Paris, France
      { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney, Australia
      { location: [-26.2041, 28.0473], size: 0.06 }, // Johannesburg, South Africa
      { location: [55.7558, 37.6173], size: 0.08 }, // Moscow, Russia
      { location: [37.5665, 126.978], size: 0.07 }, // Seoul, South Korea
      { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
      { location: [25.2048, 55.2708], size: 0.06 }, // Dubai, UAE
      { location: [6.5244, 3.3792], size: 0.05 }, // Lagos, Nigeria
      { location: [-34.6037, -58.3816], size: 0.07 }, // Buenos Aires, Argentina
      { location: [43.6532, -79.3832], size: 0.08 }, // Toronto, Canada
      // { location: [34.0522, -118.2437], size: 0.09 }, // Los Angeles, USA
      // { location: [41.8781, -87.6298], size: 0.08 }, // Chicago, USA
      // { location: [39.9526, -75.1652], size: 0.07 }, // Philadelphia, USA
      { location: [32.7767, -96.797], size: 0.06 }, // Dallas, USA
      { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco, USA
      // { location: [47.6062, -122.3321], size: 0.07 }, // Seattle, USA
      { location: [25.7617, -80.1918], size: 0.07 }, // Miami, USA
      { location: [52.52, 13.405], size: 0.07 }, // Berlin, Germany
      { location: [41.9028, 12.4964], size: 0.06 }, // Rome, Italy
      { location: [13.7563, 100.5018], size: 0.05 }, // Bangkok, Thailand
      { location: [59.9343, 30.3351], size: 0.05 }, // Saint Petersburg, Russia
      { location: [22.3193, 114.1694], size: 0.04 }, // Hong Kong
      { location: [-22.9068, -43.1729], size: 0.08 }, // Rio de Janeiro, Brazil
      { location: [28.6139, 77.209], size: 0.09 }, // New Delhi, India
    ] as Array<{ location: [number, number]; size: number }>,
  },
  ANIMATION: {
    PHI_INCREMENT: 0.005,
    PULSE_SPEED: 0.02,
    PHASE_OFFSET: 0.5,
    MIN_SCALE: 0.8,
    MAX_SCALE: 1.2,
    DEFAULT_SIZE: 0.05,
  },
  SPRING: {
    MASS: 1,
    DAMPING: 30,
    STIFFNESS: 100,
  },
} as const;

// ============================================================================
// Colors
// ============================================================================

export const COLORS = {
  HIGHLIGHT_ORANGE: "#FF9800",
} as const;

// ============================================================================
// Icon Sizes
// ============================================================================

export const ICON_SIZES = {
  SMALL: 16,
  MEDIUM: 20,
  LARGE: 24,
} as const;

// ============================================================================
// Image Dimensions
// ============================================================================

export const IMAGE_DIMENSIONS = {
  OG_IMAGE: {
    WIDTH: 1200,
    HEIGHT: 630,
  },
  BLOG_HERO: {
    MOBILE_HEIGHT: 400,
    DESKTOP_HEIGHT: 500,
  },
  FEATURES_ILLUSTRATION: {
    WIDTH: 1000,
    HEIGHT: 1137,
  },
} as const;

// ============================================================================
// Blog Configuration
// ============================================================================

export const BLOG = {
  RECENT_POSTS_COUNT: 3,
  MAX_TAGS_DISPLAY: 3,
  SCHEMA_TYPE: "BlogPosting",
  PUBLISHER_NAME: "DDoSim",
} as const;

// ============================================================================
// Sitemap Configuration
// ============================================================================

export const SITEMAP = {
  HOME: {
    CHANGE_FREQUENCY: "weekly" as const,
    PRIORITY: 1,
  },
  BLOG: {
    CHANGE_FREQUENCY: "weekly" as const,
    PRIORITY: 0.9,
  },
  BLOG_POST: {
    CHANGE_FREQUENCY: "monthly" as const,
    PRIORITY: 0.8,
  },
} as const;

// ============================================================================
// Legacy Exports (for backward compatibility)
// ============================================================================

export const SIMULATOR_CTA_TEXT = {
  TRY_SIMULATOR: "Try our interactive DDoS attack simulator",
  EXPERIENCE_SIMULATOR: "Experience real-time DDoS attack simulations",
  TEST_YOUR_KNOWLEDGE: "Test your understanding with our hands-on simulator",
} as const;
