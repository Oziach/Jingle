import { MapContainer, TileLayer, Circle } from "react-leaflet";

interface LinkPoint{
    x: number,
    y: number;
    name: string;
    mapId: number
}

export interface LinksData{
    mapIdLinks: {start: LinkPoint, end: LinkPoint}[];
    setCurrentMapId: React.Dispatch<React.SetStateAction<number>>;
    setMapCenter: React.Dispatch<React.SetStateAction<number[]>>;
    
}


export default function LinkClickboxes ({mapIdLinks, setCurrentMapId, setMapCenter} : LinksData){
  if(!mapIdLinks){return null;}
  return mapIdLinks.map((link, index) => (
    <Circle
      key={index}
      center={[link.start.y, link.start.x]}
      radius={5} // Radius in meters (constant size on map)
      fillColor="cyan"
      fillOpacity={0.5}
      stroke={true} 
      color="black"
      eventHandlers={{
         click: () => {
            setCurrentMapId(link.end.mapId);
            setMapCenter([link.end.x, link.end.y]);
         }
      }}
    />
  ));
};