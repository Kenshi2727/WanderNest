import React from 'react'
import { useEffect, useRef } from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    useMapsLibrary
} from "@vis.gl/react-google-maps";

function Map3DComponent() {
    const mapRef = useRef();
    const maps3d = useMapsLibrary('maps3d');
    const center = {
        lat: 37.7921719,
        lng: -122.4583893
    }

    if (!maps3d) return <div>3D Map is Loading...</div>;

    return (
        <div ref={mapRef} className='size-full'>
            <Map
                style={{ width: '100%', height: '100%' }}
                mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
                defaultCenter={center}
                defaultZoom={15}
                // mode={maps3d ? 'satellite' : undefined}
                defaultTilt={75}
                defaultHeading={330}
                range={2000}
                reuseMaps={true}
                fullscreenControl={false}
                mapTypeId="hybrid"
                mapTypeControl={false} // Optional: toggle visible
                gestureHandling="greedy"
                mapOptions={{
                    // mapTypeControl: true, // Optional: toggle visible
                    // mapTypeId: 'satellite',
                    // mapTypeControlOptions: {
                    //     mapTypeIds: ['roadmap', 'satellite'], // optional, but defaults to both anyway
                    // }
                }}
            >
                {maps3d && (
                    <AdvancedMarker position={{ lat: 37.7921719, lng: -122.4583893 }} />
                )}
            </Map>
        </div>
    )
}

export default Map3DComponent