import React from 'react'
import MapComponent from './maps/MapComponent'

function LocationPage() {
    return (
        <div className='min-h-screen grid grid-cols-2'>
            <div>Content</div>

            <div className='grid grid-rows-2'>
                <div>
                    <gmp-map-3d mode="hybrid" center="37.7921719,-122.4583893" range="2000" tilt="75" heading="330"></gmp-map-3d>
                    <script async src={`https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&v=beta&libraries=maps3d`}></script>
                </div>

                <div>
                    <MapComponent />
                </div>
            </div>
        </div>
    )
}

export default LocationPage