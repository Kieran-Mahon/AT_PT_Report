import React from 'react';
import { Tooltip } from 'react-leaflet/Tooltip';

export default function VehiclePopUp({ road }) {
  return (
    <Tooltip>
      <b>{ road.name }</b>
      <br/>
      Average Speed: { Math.round(road.speed) } km/h
      <br/>
      Max Speed: { Math.round(road.maxSpeed) } km/h
    </Tooltip>
  );
};
