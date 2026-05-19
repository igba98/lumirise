/**
 * Central role → asset map. Swap a photo by changing one line here.
 * All files live in /public. Catalogued from the supplied Pexels set.
 */
export const images = {
  // Wide port at golden hour, road down the centre — left-aligned hero.
  hero: "/pexels-bilal-ahmed-297238753-14020705.jpg",
  // Moody port container yard with cranes.
  port: "/pexels-samuel-wolfl-628277-1427541.jpg",
  // Aerial port with containers + trucks.
  logisticsAerial: "/pexels-kelly-13766343.jpg",
  // Aerial distribution warehouse, trucks at loading docks.
  warehouse: "/pexels-marcin-jozwiak-199600-2804929.jpg",
  // Aerial row of white tankers/trailers.
  fuelTanker: "/pexels-lidia-volovaci-336303382-13961751.jpg",
  // Close-up red shipping containers.
  containers: "/pexels-jan-van-der-wolf-11680885-13443134.jpg",
  // Blue containers on the move through countryside.
  crossBorder: "/pexels-robertkso-12196579.jpg",
  // Top-down containers laid out in rows + a truck.
  breakBulk: "/pexels-olliecraig1-7519246.jpg",
  // Yellow + white trucks on a road with green hills.
  dryCargo: "/pexels-tkirkgoz-35374590.jpg",
  // Row of heavy truck cabs, frontal.
  fleet: "/pexels-shuaizhi-tian-485596-20882743.jpg",
  // Trucks at golden-hour sunset — driver / why-choose vibe.
  goldenHour: "/pexels-maltelu-1606957.jpg",
  // Dramatic lit night port terminal.
  night: "/pexels-yusuf-beler-712216039-18249561.jpg",
} as const;

export type ImageRole = keyof typeof images;

/** Industry → photo (spec §4.5 / §9). */
export const industryImage = {
  manufacturing: images.warehouse,
  retail: images.logisticsAerial,
  energy: images.fuelTanker,
  construction: images.breakBulk,
  agriculture: images.dryCargo,
} as const;

/** Service slug → hero/card photo (spec §6 / §7). */
export const serviceImage = {
  "fuel-petroleum": images.fuelTanker,
  "dry-cargo": images.dryCargo,
  containers: images.containers,
  "break-bulk": images.breakBulk,
  "cross-border": images.crossBorder,
} as const;
