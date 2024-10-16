import React from 'react';
import { Tooltip } from 'react-leaflet/Tooltip';

export default function VehiclePopUp({ road }) {
  var avgSpeed = road.sumSpeed / road.dataCount;
  return (
    <Tooltip>
      <b>{ road.roadName }</b>
      <br/>
      Average Speed: { Math.round(avgSpeed) } km/h
      <br/>
      Max Speed: { Math.round(road.maxSpeed) } km/h
    </Tooltip>
  );
};
