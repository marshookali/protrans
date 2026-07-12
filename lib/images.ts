// Curated, content-verified logistics/freight imagery (Unsplash).
// Each entry is a stable photo ID with descriptive alt text. Centralised so
// imagery stays consistent and is easy to swap in one place.

const base = "https://images.unsplash.com/";
const params = "?auto=format&fit=crop&q=80";

function img(id: string, alt: string) {
  return { src: `${base}${id}${params}`, alt };
}

export const images = {
  truckHighwayFront: img(
    "photo-1601584115197-04ecc0da31d7",
    "Modern haulage truck on an open highway under a clear sky",
  ),
  truckMountainRear: img(
    "photo-1519003722824-194d4455a60c",
    "Cargo truck travelling a winding mountain highway",
  ),
  truckTankerAutumn: img(
    "photo-1591768793355-74d04bb6608f",
    "Long-haul truck on a highway lined with autumn trees",
  ),
  reeferDusk: img(
    "photo-1616432043562-3671ea2e5242",
    "Refrigerated trailer truck on the road at dusk",
  ),
  warehousePackages: img(
    "photo-1586528116311-ad8dd3c8310d",
    "Distribution warehouse stacked with palletised goods",
  ),
  warehouseRacking: img(
    "photo-1553413077-190dd305871c",
    "Tall racking aisles inside a modern storage warehouse",
  ),
  dockBays: img(
    "photo-1504376830547-506dedfe1fe9",
    "Loading dock bay doors at a distribution centre",
  ),
  portAerial: img(
    "photo-1494412574643-ff11b0a5c1c3",
    "Aerial view of a container port and freight yard",
  ),
  containerShip: img(
    "photo-1578575437130-527eed3abbec",
    "Container ship berthed beside port cranes",
  ),
  roadForest: img(
    "photo-1471958680802-1345a694ba6d",
    "Open road stretching through forested countryside",
  ),
  gpsPhone: img(
    "photo-1548345680-f5475ea5df84",
    "Live route tracking on a mobile map",
  ),
  boxesMinimal: img(
    "photo-1595246140625-573b715d11dc",
    "Neatly packaged parcels ready for dispatch",
  ),
} as const;

export type ImageRef = { src: string; alt: string };
