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
    linkClick: React.RefObject<boolean>
}


export default function LinkClickboxes ({mapIdLinks, map, setCurrentMapId, setMapCenter, linkClick} : LinksData){

  if(!mapIdLinks){return null;}

  const OnClick = (link: {start: LinkPoint, end: LinkPoint}) => {
    
    linkClick.current = true;
    if(link.start.mapId == link.end.mapId){
      map.panTo([link.end.y, link.end.x])
    }
    else{
      setCurrentMapId(link.end.mapId);
      setMapCenter([link.end.x, link.end.y]);
    }
  }

  const zoom = map.getZoom();

  return mapIdLinks.map((link, index) => (

    <CircleMarker
      key={index}
      center={[link.start.y+0.65, link.start.x-0.5]} 
      radius={zoom == 3 ? 16 : 8} 
      fillColor="cyan"
      fillOpacity={0.0}
      stroke={false} 
      color="red"

      eventHandlers={{
         click: () => OnClick(link)
      }}
    />
  ));
};