import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import './DarkMap.css';

// Kultuurikatel coordinates
const LAT = 59.4443;
const LNG = 24.7513;
const ZOOM = 15;

export default function DarkMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return; // already initialised

    import('leaflet').then(({ default: L }) => {
      const map = L.map(containerRef.current, {
        center: [LAT, LNG],
        zoom: ZOOM,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      mapRef.current = map;

      // OpenStreetMap tiles + CSS filter for dark appearance — no API key needed
      L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
          className: 'map-tiles-dark',
        }
      ).addTo(map);

      // Custom brand-green marker
      const icon = L.divIcon({
        className: 'dark-map-marker',
        html: `<div class="dark-map-marker__pin"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, -12],
      });

      L.marker([LAT, LNG], { icon })
        .addTo(map)
        .bindPopup(
          '<strong style="font-family:sans-serif;font-size:13px">Kultuurikatel</strong>' +
          '<br><span style="font-family:sans-serif;font-size:11px;color:#888">Kursi 3, Tallinn</span>'
        );
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="dark-map-wrap">
      <div ref={containerRef} className="dark-map-container" />
    </div>
  );
}
