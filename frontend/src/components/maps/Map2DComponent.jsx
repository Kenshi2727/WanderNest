import React, { use, useEffect } from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
    useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useState } from 'react';

function Map2DComponent() {
    const center = {
        lat: 37.7921719,
        lng: -122.4583893
    }
    const [open, setOpen] = useState(false);

    // Loads 'marker' library when APIProvider is ready
    const markerLibrary = useMapsLibrary('marker');

    if (!markerLibrary) return <div>2D Map loading...</div>

    return (
        <div className='h-full'>
            <Map
                style={{ width: '100%', height: '100%' }}
                // zoom={15}
                // center={center}
                // use default to enable gesture handling
                defaultZoom={15}
                defaultCenter={center}
                reuseMaps={true}
                mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
                fullscreenControl={false}
                mapTypeControl={false}
                // draggable={true}
                gestureHandling="greedy"
            >
                <AdvancedMarker
                    position={center}
                    onClick={() => setOpen(!open)}
                >
                    <Pin
                        background={"red"}
                        borderColor={"white"}
                        glyphColor={"white"}
                    />
                </AdvancedMarker>

                {
                    open &&
                    <InfoWindow
                        position={center}
                        onCloseClick={() => setOpen(false)}
                    >
                        <p>WanderNest Swagatam!</p>
                    </InfoWindow>
                }
            </Map>
        </div>
    )
}

export default Map2DComponent;
