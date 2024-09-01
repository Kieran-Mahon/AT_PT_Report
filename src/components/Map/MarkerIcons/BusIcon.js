import { DivIcon } from 'leaflet';
import { ICONSIZE, POPUPANCHOR } from './MarkerIconsSettings';

import 'leaflet/dist/leaflet.css';
import './MarkerIcons.css';

export default function BusIcon(colour) {
    const SVG = `
      <svg viewBox="0 0 283.46 283.46" fill-opacity="0.8">
        <circle cx="141.73" cy="141.73" r="141.73" fill="${colour}"/>
        <path d="M141.32,234.65h53.31s.59,16.69,11.94,17.1h10c5.08,0,10.78-4.85,10.78-12.92,0,0-.26-107-.34-112.51a6.48,6.48,0,0,0,
          2.67.59h6.66a6.54,6.54,0,0,0,6.53-6.53V93.14a6.54,6.54,0,0,0-6.53-6.53h-6.66a6.46,6.46,0,0,0-4,1.43c-.37-13.18-.74-22.79-.74-22.79,
          0-15.19-14.94-33.54-33.73-33.54l-49.91,0-49.91,0c-18.78,0-33.73,18.34-33.73,33.54,0,0-.37,9.61-.74,22.79a6.46,6.46,0,0,
          0-4-1.43H46.19a6.54,6.54,0,0,0-6.53,6.53v27.25a6.54,6.54,0,0,0,6.53,6.53h6.66a6.48,6.48,0,0,0,2.67-.59c-.08,5.46-.34,112.51-.34,
          112.51,0,8.07,5.69,12.92,10.78,12.92H76c11.34-.42,11.94-17.1,11.94-17.1ZM141.21,40h36.21a3.15,3.15,0,0,1,3.14,3.14V54.41a3.15,3.15,
          0,0,1-3.14,3.14H105.11A3.15,3.15,0,0,1,102,54.41V43.17A3.15,3.15,0,0,1,105.11,40Zm-48,177.72a16.13,16.13,0,1,1,16.13-16.13A16.13,
          16.13,0,0,1,93.26,217.76Zm96,0a16.13,16.13,0,1,1,16.13-16.13A16.13,16.13,0,0,1,189.27,217.76Zm-48-151.29h46.62c9.72,0,17.69,2.88,
          17.69,46.1V150.3c.07,9.8-8.16,14.14-14.88,15.81,0,0-18.85,4.78-49.49,
          4.83s-49.48-4.83-49.48-4.83c-6.71-1.66-14.95-6-14.88-15.81V112.56c0-43.22,8-46.1,17.69-46.1Z"/>
      </svg>
    `;
  
    return new DivIcon({
      html: SVG,
      className: 'MarkerIcon',
      iconSize : ICONSIZE,
      popupAnchor : POPUPANCHOR
    });
  }