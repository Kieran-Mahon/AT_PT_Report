import React from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { LayersControl } from 'react-leaflet';

export default function Map({ passedFunction }) {
  const mapOptions = {
    center: [-36.8747, 174.7739],
    zoom: 12,
    attributionControl: false,
  };

  return (
    <MapContainer {...mapOptions} style={{ height: '700px' }}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="CartoDB Light">
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="CartoDB Dark">
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        </LayersControl.BaseLayer>
      </LayersControl>
      {passedFunction()}
    </MapContainer>
  );
};
