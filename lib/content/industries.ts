import { Truck, Box, Fuel, Layers, Globe } from "@/components/ui/icons";
import { industryImage } from "@/lib/images";

export type Industry = {
  id: keyof typeof industryImage;
  name: string;
  icon: typeof Truck;
  blurb: string;
  points: string[];
  relevant: string[];
};

/** Spec §4.5 / §9 */
export const industries: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Box,
    blurb:
      "Lumirise supports manufacturers with reliable scheduled freight that keeps production lines moving. Raw materials in, finished goods out.",
    points: [
      "Raw materials to factories on time",
      "Finished goods to distribution centres",
      "Inter-facility transfers across the region",
      "Industrial materials and packaged products",
    ],
    relevant: ["Container Transport", "Dry Cargo", "Cross-Border"],
  },
  {
    id: "retail",
    name: "Retail & FMCG",
    icon: Truck,
    blurb:
      "Time-sensitive distribution of consumer goods to warehouses and stores across East and Central Africa.",
    points: [
      "Fast-moving consumer goods transport",
      "Packaged goods to retail centres",
      "Regional distribution networks",
      "Reliable scheduled deliveries",
    ],
    relevant: ["Dry Cargo", "Container Transport", "Cross-Border"],
  },
  {
    id: "energy",
    name: "Energy & Petroleum",
    icon: Fuel,
    blurb:
      "Certified tanker transport for fuel distributors, mining operations, and energy infrastructure projects.",
    points: [
      "Diesel, petrol, and kerosene transport",
      "Lubricants and industrial fuels",
      "Mining and energy site supply",
      "Strict regulatory compliance",
    ],
    relevant: ["Fuel & Petroleum Transport", "Cross-Border"],
  },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    icon: Layers,
    blurb:
      "Cement, steel, machinery, and break-bulk freight to project sites anywhere in the region.",
    points: [
      "Cement and building materials",
      "Heavy machinery and equipment",
      "Project freight coordination",
      "Oversized cargo handling",
    ],
    relevant: ["Dry Cargo", "Loose Cargo / Break-Bulk", "Container Transport"],
  },
  {
    id: "agriculture",
    name: "Agriculture & Mining",
    icon: Globe,
    blurb:
      "Bulk transport for the region's primary industries — fertilizers in, harvests and minerals out.",
    points: [
      "Fertilizer and seed distribution",
      "Grain and produce haulage",
      "Mining material transport",
      "Cross-border bulk shipments",
    ],
    relevant: ["Dry Cargo", "Container Transport", "Cross-Border"],
  },
];
