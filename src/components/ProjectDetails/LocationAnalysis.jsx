import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Necessary fix for Leaflet's icon issue with Webpack
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationAnalysis = ({ filters, defaultMarker, markers }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedMarkers, setSelectedMarkers] = useState([defaultMarker]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setSelectedMarkers(markers[filter] || []);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Location Analysis</h2>
      <div className="mb-4">
        {Object.keys(filters).map((filter, index) => (
          <select
            key={index}
            className="mr-2 p-2 border"
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="">{filter}</option>
            {filters[filter].map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        ))}
      </div>
      <MapContainer center={[defaultMarker.lat, defaultMarker.lng]} zoom={12} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedMarkers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocationAnalysis;
