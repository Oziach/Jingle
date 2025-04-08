import { Guess } from "../hooks/useGameLogic";
import { GameState } from "../types/jingle";
import rawBasemaps from "../data/basemaps";
import L from 'leaflet'

export interface InternalMapState { 
  gameState: GameState;
  onGuess: (guess: Guess) => void;
  className?: string;

  confirmedGuess: boolean; 
  setShowConfirmGuess: React.Dispatch<React.SetStateAction<boolean>>;

  setMapCenter: React.Dispatch<React.SetStateAction<number[]>>;

  currentMapId: number;
  setCurrentMapId: React.Dispatch<React.SetStateAction<number>>;

  zoom: number;
  setZoom:  React.Dispatch<React.SetStateAction<number>>;

  markerState: {
    markerPosition: L.LatLng | null;
    markerMapId: number;
  }
  setMarkerState: React.Dispatch<React.SetStateAction<{
    markerPosition: L.LatLng | null;
    markerMapId: number;
  }>>
}

//sorted, with Gielinor Surface at top
export const basemaps = [
    ...rawBasemaps.filter(m => m.name === "Gielinor Surface"),
    ...rawBasemaps
      .filter(m => m.name !== "Gielinor Surface")
      .sort((a, b) => a.name.localeCompare(b.name))
  ]

export const ConfigureMap = (map: L.Map, currentMapId: number) => {

    //crispy nearest neighbor scaling for high zoom levels.
    const updateZoomClass = () => {

        const zoom = map.getZoom();
        const container = map.getContainer();

        container.classList.remove("zoom-level-2", "zoom-level-3");
        if (zoom === 2) container.classList.add("zoom-level-2");
        if (zoom === 3) container.classList.add("zoom-level-3");
    };

    map.on("zoomend", updateZoomClass);
    updateZoomClass(); // Set initial


    //custom tile layer overriden for bottom-left origin and negative zooms
    class CustomTileLayer extends L.TileLayer {
        getTileUrl(coords: L.Coords): string {
            const { x, y, z } = coords;

            //leaflet's tms param DOESN'T GODDAMN WORK.
            const tmsY = -y - 1;

            return `/rsmap-tiles/mapIdTiles/${currentMapId}/${z}/0_${x}_${tmsY}.png`;
        }
    }

    const tileLayer = new CustomTileLayer("", {
        minZoom: -1,
        maxZoom: 3,
        maxNativeZoom: 2,
        tileSize: 256,
    });

    tileLayer.addTo(map);


    //cleanup
    return () => {
        if (map) {
            map.off("zoomend", updateZoomClass);
            map.removeLayer(tileLayer);
        }
    };

}


export const HandleMapZoom = (map: L.Map, setZoom: React.Dispatch<React.SetStateAction<number>>) => {

    const updateZoom = () => setZoom(map.getZoom());
    map.on("zoomend", updateZoom);

    return () => {
        if (map) {
            map.off("zoomend", updateZoom);
        }
    };
}
