// Initialize map
const map = L.map("map").setView([33.4484, -112.0740], 12);

// Add basemap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Custom utility icons
const transformerIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const poleIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const hydrantIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const valveIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

// Sample utility assets
const utilityAssets = [
    {
        name: "Transformer T-1024",
        type: "Transformer",
        status: "Active",
        inspection: "2026-04-12",
        coordinates: [33.4521, -112.0718]
    },
    {
        name: "Utility Pole P-204",
        type: "Pole",
        status: "Inspection Due",
        inspection: "2025-11-03",
        coordinates: [33.4562, -112.0804]
    },
    {
        name: "Fire Hydrant H-18",
        type: "Hydrant",
        status: "Active",
        inspection: "2026-01-22",
        coordinates: [33.4448, -112.0685]
    },
    {
        name: "Water Valve V-77",
        type: "Valve",
        status: "Maintenance Required",
        inspection: "2025-09-14",
        coordinates: [33.4399, -112.0762]
    }
];

// Add markers and popups
utilityAssets.forEach(asset => {

    let icon;

switch (asset.type) {
    case "Transformer": icon = transformerIcon; break;
    case "Pole": icon = poleIcon; break;
    case "Hydrant": icon = hydrantIcon; break;
    case "Valve": icon = valveIcon; break;
}

L.marker(asset.coordinates, { icon: icon })
        .addTo(map)
        .bindPopup(`
            <strong>${asset.name}</strong><br>
            Type: ${asset.type}<br>
            Status: ${asset.status}<br>
            Last Inspection: ${asset.inspection}
        `);
});

// Automatically zoom the map to show all assets
const bounds = L.latLngBounds(
    utilityAssets.map(asset => asset.coordinates)
);

map.fitBounds(bounds, {
    padding: [40, 40]
});
