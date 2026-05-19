export type Route = {
  to: string;
  country: string;
  cargo: string;
};

/** Spec §8.3 — established corridors from the Port of Dar es Salaam. */
export const routes: Route[] = [
  { to: "Kigali", country: "Rwanda", cargo: "Containers, dry cargo, fuel" },
  { to: "Bujumbura", country: "Burundi", cargo: "Containers, dry cargo" },
  { to: "Lusaka", country: "Zambia", cargo: "Containers, fuel, break-bulk" },
  { to: "Blantyre", country: "Malawi", cargo: "Dry cargo, containers" },
  { to: "Nairobi", country: "Kenya", cargo: "Containers, dry cargo" },
  { to: "Kampala", country: "Uganda", cargo: "Containers, fuel, dry cargo" },
  {
    to: "Kinshasa",
    country: "DR Congo",
    cargo: "Containers, break-bulk, dry cargo",
  },
];

export const origin = "Dar es Salaam";
