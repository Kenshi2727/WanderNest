import React from 'react'
import Reviews from './Reviews'
import PlannerChat from './PlannerChat'
import LocationCarousel from './LocationCarousel'

function LocationDisplay() {
    return (
        <div className='h-screen flex flex-col gap-2'>
            <LocationCarousel />

            <div className='flex flex-col gap-1 p-2 bg-base-100 rounded-sm shadow-lg h-[70%] overflow-y-scroll'>
                <header>
                    <h2 className='text-2xl font-bold'>Location Name</h2>
                    <p className='text-sm text-gray-600'>Location description goes here. This is a brief overview of the location, its significance, and what visitors can expect.</p>
                </header>

                <div className=''>
                    <h3 className='text-lg font-semibold'>Details</h3>
                    <ul className='list-disc pl-5 text-sm text-gray-700'>
                        <li>Address: 123 Main St, City, Country</li>
                        <li>Opening Hours: 9:00 AM - 5:00 PM</li>
                        <li>Contact: +123 456 7890</li>
                        <li>Website: <a href="https://example.com" className='text-blue-500 hover:underline'>example.com</a></li>
                    </ul>
                </div>

                <div className=''>
                    <div className='flex justify-center items-center mt-2'>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Use AI Travel Planner</button>
                    </div>

                    <div>
                        <p>Reviews:</p>
                        <Reviews />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationDisplay