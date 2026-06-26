// Initialize map
const map = L.map("map").setView([33.4484, -112.0740], 12);

// Add basemap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

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
    L.marker(asset.coordinates)
        .addTo(map)
        .bindPopup(`
            <strong>${asset.name}</strong><br>
            Type: ${asset.type}<br>
            Status: ${asset.status}<br>
            Last Inspection: ${asset.inspection}
        `);
});
