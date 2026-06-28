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

// Store all map markers
const markers = [];

// Assign icon by asset type
function getIcon(assetType) {
    switch (assetType) {
        case "Transformer":
            return transformerIcon;
        case "Pole":
            return poleIcon;
        case "Hydrant":
            return hydrantIcon;
        case "Valve":
            return valveIcon;
        default:
            return poleIcon;
    }
}

// Add markers and popups
utilityAssets.forEach(asset => {
    const marker = L.marker(asset.coordinates, {
        icon: getIcon(asset.type)
    })
        .addTo(map)
        .bindPopup(`
            <strong>${asset.name}</strong><br>
            Type: ${asset.type}<br>
            Status: ${asset.status}<br>
            Last Inspection: ${asset.inspection}
        `);

    markers.push({
        marker: marker,
        asset: asset
    });
});

// Automatically zoom the map to show all assets
const bounds = L.latLngBounds(
    utilityAssets.map(asset => asset.coordinates)
);

map.fitBounds(bounds, {
    padding: [40, 40]
});

// Apply asset filters
function applyFilters() {

    const selectedType = document.getElementById("asset-type").value;
    const searchText = document.getElementById("asset-search").value.toLowerCase();

    let visibleCount = 0;

    markers.forEach(item => {

        const matchesType =
            selectedType === "All" || item.asset.type === selectedType;

        const matchesSearch =
            item.asset.name.toLowerCase().includes(searchText) ||
            item.asset.type.toLowerCase().includes(searchText) ||
            item.asset.status.toLowerCase().includes(searchText);

        if (matchesType && matchesSearch) {
            item.marker.addTo(map);
            visibleCount++;
        } else {
            map.removeLayer(item.marker);
        }

    });

    document.getElementById("asset-count").textContent =
        `Showing ${visibleCount} of ${markers.length} assets`;

}

// Filter by asset type
document.getElementById("asset-type").addEventListener("change", applyFilters);

// Search assets by name, type, or status
document.getElementById("asset-search").addEventListener("input", applyFilters);
