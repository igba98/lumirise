import { serviceImage } from "@/lib/images";
import { serviceIcons } from "@/components/ui/icons";

export type Service = {
  slug: keyof typeof serviceImage;
  name: string;
  shortName: string;
  snapshot: string;
  heroHeadline: string;
  lead: string;
  overview: string;
  transportLabel: string;
  transports: string[];
  features: string[];
  sectors: string[];
};

export const services: Service[] = [
  {
    slug: "fuel-petroleum",
    name: "Fuel & Petroleum Transport",
    shortName: "Fuel & Petroleum",
    snapshot:
      "Certified tankers for diesel, petrol, kerosene, and other petroleum products.",
    heroHeadline: "Certified Fuel Tankers for Critical Cargo.",
    lead: "Petroleum logistics demands more than vehicles — it demands certified equipment, trained drivers, and zero tolerance for shortcuts. Lumirise transports diesel, petrol, kerosene, and other petroleum products under the strictest safety and regulatory standards, every kilometre of the journey.",
    overview:
      "Certified fuel tankers for the safe transport of diesel, petrol, kerosene, and other petroleum products. Strict safety standards and regulatory adherence throughout every journey.",
    transportLabel: "What we transport",
    transports: [
      "Diesel and petrol",
      "Kerosene",
      "Lubricants",
      "Regulated petroleum products",
    ],
    features: [
      "Certified tankers",
      "Trained, licensed drivers",
      "Real-time monitoring",
      "Full regulatory compliance",
      "Emergency response protocols",
    ],
    sectors: [
      "Energy companies",
      "Fuel distributors",
      "Mining operations",
      "Construction sites",
      "Industrial clients",
    ],
  },
  {
    slug: "dry-cargo",
    name: "Dry Cargo Transport",
    shortName: "Dry Cargo",
    snapshot:
      "Fertilizers, grains, cement, packaged goods, and industrial materials.",
    heroHeadline: "Reliable Dry Cargo, Delivered on Schedule.",
    lead: "From fertilizers to fast-moving consumer goods, our dry cargo fleet keeps supply chains running. Well-maintained vehicles, experienced crews, and disciplined route planning ensure your goods arrive intact and on time.",
    overview:
      "Efficient transport of fertilizers, grains, cement, general merchandise, packaged goods, and industrial materials in well-maintained fleets.",
    transportLabel: "What we transport",
    transports: [
      "Fertilizers and agricultural inputs",
      "Grains and bulk produce",
      "Cement and building materials",
      "General merchandise and FMCG",
      "Industrial materials",
    ],
    features: [
      "Maintained fleet",
      "Secure loading",
      "Route optimisation",
      "End-to-end tracking",
    ],
    sectors: ["Agriculture", "FMCG", "Retail", "Manufacturing", "Construction"],
  },
  {
    slug: "containers",
    name: "Container Transport",
    shortName: "Containers",
    snapshot: "20ft and 40ft containers, port to destination.",
    heroHeadline: "20ft & 40ft Container Movement — Port to Destination.",
    lead: "We move standard and high-cube containers from the Port of Dar es Salaam to inland depots, warehouses, and onward to regional destinations. Our team coordinates port clearance, documentation, and customs compliance so your cargo keeps moving without delays.",
    overview:
      "Moving 20ft and 40ft containers from ports, inland depots, and warehouses — including port clearance coordination and customs compliance.",
    transportLabel: "What we offer",
    transports: [
      "20ft and 40ft container transport",
      "Port clearance coordination",
      "Customs documentation support",
      "Inland depot collection",
      "Onward delivery to client warehouses",
    ],
    features: [
      "Port clearance coordination",
      "Customs documentation support",
      "Inland depot collection",
      "Onward delivery",
    ],
    sectors: [
      "Importers",
      "Exporters",
      "Freight forwarders",
      "Shipping lines",
      "Manufacturers",
    ],
  },
  {
    slug: "break-bulk",
    name: "Loose Cargo / Break-Bulk",
    shortName: "Break-Bulk",
    snapshot:
      "Machinery, equipment, and oversized loads with precision planning.",
    heroHeadline: "Precision Planning for Non-Containerised Cargo.",
    lead: "Machinery, construction materials, and oversized industrial equipment require more than a truck — they require planning, permits, and people who understand the route. Our break-bulk service handles complex loads with care.",
    overview:
      "Transporting non-containerized goods such as machinery, construction materials, industrial equipment, and oversized cargo with precision planning.",
    transportLabel: "What we transport",
    transports: [
      "Heavy machinery",
      "Construction materials",
      "Industrial equipment",
      "Oversized cargo",
      "Project freight",
    ],
    features: [
      "Route surveys",
      "Special permits",
      "Escort coordination where required",
      "Specialised loading equipment",
    ],
    sectors: [
      "Construction",
      "Energy",
      "Mining",
      "Manufacturing",
      "Infrastructure projects",
    ],
  },
  {
    slug: "cross-border",
    name: "Cross-Border Transport",
    shortName: "Cross-Border",
    snapshot: "Regional routes connecting 7 countries.",
    heroHeadline: "Seven Countries. One Logistics Partner.",
    lead: "Lumirise supports regional trade across East and Central Africa with established cross-border routes, full documentation expertise, and on-ground familiarity with every major border post.",
    overview:
      "Supporting regional trade to Rwanda, Burundi, Malawi, Zambia, Kenya, Uganda, and DRC — including border documentation and route planning.",
    transportLabel: "What we handle",
    transports: [
      "Border documentation",
      "Customs coordination",
      "Transit permits",
      "Route planning",
      "Multi-jurisdiction compliance",
    ],
    features: [
      "Border documentation",
      "Customs coordination",
      "Transit permits",
      "Route planning",
      "Driver compliance across jurisdictions",
    ],
    sectors: [
      "Rwanda",
      "Burundi",
      "Kenya",
      "Uganda",
      "Zambia",
      "Malawi",
      "DR Congo",
    ],
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export { serviceImage, serviceIcons };
