import React from 'react'
import Map2DComponent from './maps/Map2DComponent'
import Map3DComponent from './maps/Map3DComponent'
import { APIProvider } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react';
import { useNavStore } from '../store/useNavStore';
import { useParams } from 'react-router-dom';
import { categoryData } from '../constants/categoryData';
import { cardData } from '../constants/cardData';
import ErrorBoundary from './handler/ErrorBoundary';
import LocationDisplay from './ui/LocationDisplay';

function LocationPage() {
    const [apiReady, setApiReady] = useState(false);
    const { id, locationId } = useParams();
    const { setNavList } = useNavStore();

    // console.log("data--->", id, locationId);

    useEffect(() => {
        const data = (categoryData.find((item) => item.id == id)).data;
        console.log("data--->", data);

        setNavList([
            {
                route: "/",
                label: "Home",
            },
            {
                route: `/category/${id}`,
                label: cardData.find((item) => item.id === parseInt(id)).title || 'Category',
            },
            {
                route: `/category/${id}/${locationId}`,
                label: data.find((item) => item.id === locationId).name || 'Category',
            }]);
    }, [id, locationId]);

    useEffect(() => {
        // Clean up previous Google Maps API scripts
        const scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');
        scripts.forEach(script => script.remove());

        // Clear Google Maps objects
        window.google = undefined;
        setApiReady(false);

        // Create new API loader
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&v=beta&libraries=maps3d,marker&callback=initMaps`;
        script.async = true;
        script.defer = true;


        /*
        Uses callback=initMaps to notify us when API is ready
    
        Callback Setup:
    
        window.initMaps = () => setApiReady(true) creates a global callback
    
        Google Maps will call this function when it's fully loaded
        */

        window.initMaps = () => setApiReady(true);
        document.head.appendChild(script);

        return () => {
            window.initMaps = undefined;
            document.head.removeChild(script);
        };
    }, []);

    if (!apiReady) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-xl">Loading maps...</div>
        </div>
    );

    return (
        <ErrorBoundary >
            <APIProvider
                apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                version="beta"
                libraries={['maps3d', 'marker']}
            >
                <div className='min-h-screen grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2'>
                    <div className='size-full p-2 flex flex-col gap-2'>
                        <LocationDisplay />
                    </div>

                    <div className='grid grid-rows-2 p-2 gap-2'>
                        {/* overflow-hidden to make the rounded edges appear on map components */}
                        <div className='size-full rounded-xl overflow-hidden shadow-lg'>
                            <Map3DComponent />
                            {/* <gmp-map-3d mode="hybrid" center="37.7921719,-122.4583893" range="2000" tilt="75" heading="330"></gmp-map-3d>
                    <script async src={`https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&v=beta&libraries=maps3d,marker`}></script> */}
                        </div>

                        <div className='size-full rounded-xl overflow-hidden shadow-lg'>
                            <Map2DComponent />
                        </div>
                    </div>
                </div>
            </APIProvider>
        </ErrorBoundary>
    )
}

export default LocationPage