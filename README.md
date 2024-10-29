# Auckland Transport Public Transport Report

## What is this?
This is a React-based website which generates speed reports of vehicle data from Auckland Transport (AT)'s network.
The data is sourced from AT's public API and route data is sourced from OpenStreetMap's public API.

## Where can I access it?
You can access it at <https://kieran-mahon.github.io/AT_PT_Report/>

## Limitations
- Data is collected only every 30 seconds and is added to the current hour's average.
- The GPS location on the vehicle can sometimes be wrong. Meaning sometimes the vehicle is added to the wrong road.
- Route data is sourced from the OpenStreetMap API which can sometimes be wrong due to being open source.

## Pages
- <b>Reports -</b> Reports is a report generation tool which allows viewing of speed data which is plotted on the map.

## References
- <b>Auckland Transport -</b> All vehicle data.
- <b>OpenStreetMap -</b> The map layer, vehicle routes, and road data.
- <b>Leaflet -</b> The map, markers, and pop-ups.
- <b>React Leaflet -</b> React version of Leaflet.
