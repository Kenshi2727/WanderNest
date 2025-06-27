import React from 'react'
import Autocomplete from "react-google-autocomplete";

function SearchBar() {
    return (
        <div className='w-full flex justify-center items-center my-20 sm:my-30'>
            <div className='w-full mx-10 md:mx-20 flex flex-col items-center gap-4 bg-base-200 shadow-lg rounded-xl p-8'>
                <p className='font-bold text-md sm:text-lg md:text-xl'>Let’s Get You Somewhere Beautiful</p>
                {/* <input type="text" placeholder="Ready to explore? Type a place..." className="input input-bordered placeholder:text-center text-center text-xs sm:text-lg md:text-xl w-full h-12 sm:h-16 focus:outline-none" /> */}
                <Autocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    onPlaceSelected={(place) => {
                        console.log(place);
                    }}

                    placeholder="Ready to explore? Type a place..."
                    className="input input-bordered placeholder:text-center text-center text-xs sm:text-lg md:text-xl w-full h-12 sm:h-16 focus:outline-none"
                />

            </div>
        </div>
    )
}

export default SearchBar