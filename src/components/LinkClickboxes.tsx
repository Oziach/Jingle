import { map } from "leaflet";
import { MapContainer, TileLayer, Circle, CircleMarker } from "react-leaflet";

interface LinkPoint{
    x: number,
    y: number;
    name: string;
    mapId: number
}

export interface LinksData{
    mapIdLinks: {start: LinkPoint, end: LinkPoint}[];
    map: L.Map,
    setCurrentMapId: React.Dispatch<React.SetStateAction<number>>;
    setMapCenter: React.Dispatch<React.SetStateAction<number[]>>;
    
}


export default function LinkClickboxes ({mapIdLinks, map, setCurrentMapId, setMapCenter} : LinksData){
  if(!mapIdLinks){return null;}
  return mapIdLinks.map((link, index) => (
    <CircleMarker
      key={index}
      center={[link.start.y, link.start.x]}
      radius={8} 
      //  fillColor="cyan"
       fillOpacity={0.0}
        stroke={false} 
      // color="black"
      eventHandlers={{
         click: () => {
            if(link.start.mapId == link.end.mapId){
              map.panTo([link.end.y, link.end.x])
            }
            else{
              setCurrentMapId(link.end.mapId);
              setMapCenter([link.end.x, link.end.y]);
            }
         }
      }}
    />
  ));
};