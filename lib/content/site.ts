export const site = {
  name: "Lumirise Company Limited",
  shortName: "Lumirise",
  tagline: "Safe. Reliable. On Time.",
  description:
    "A dynamic Tanzanian transportation and logistics company moving your cargo safely, reliably, and on time across East and Central Africa.",
  phones: ["+255 762 361 374", "+255 719 186 216"],
  phonePrimary: "+255 762 361 374",
  email: "info@lumirise.co.tz",
  whatsapp: "255762361374",
  address: {
    line1: "Buza kwa Mama Kibonge, Plot No. 12",
    city: "Dar es Salaam, Tanzania",
    poBox: "P.O. Box 10877, Dar es Salaam",
  },
  hours: "Monday – Saturday, 8:00 AM – 6:00 PM EAT",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerColumns = {
  pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Coverage", href: "/coverage" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Fuel & Petroleum", href: "/services/fuel-petroleum" },
    { label: "Dry Cargo", href: "/services/dry-cargo" },
    { label: "Containers", href: "/services/containers" },
    { label: "Break-Bulk", href: "/services/break-bulk" },
    { label: "Cross-Border", href: "/services/cross-border" },
  ],
} as const;
