
import React, { useEffect, useRef } from 'react';

interface TravelMapProps {
  coordinates: [number, number];
  className?: string;
  zoom?: number;
}

const TravelMap: React.FC<TravelMapProps> = ({ 
  coordinates, 
  className = "h-64 rounded-lg overflow-hidden shadow-md", 
  zoom = 14 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real implementation, this would use a mapping library like Leaflet or Google Maps
    // For now, we'll use a static image from OpenStreetMap
    
    if (mapRef.current) {
      const [lat, lng] = coordinates;
      const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lng}`;
      
      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.frameBorder = '0';
      iframe.scrolling = 'no';
      iframe.marginHeight = 0;
      iframe.marginWidth = 0;
      iframe.src = mapUrl;
      
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
  }, [coordinates]);

  return (
    <div ref={mapRef} className={className}></div>
  );
};

export default TravelMap;
