import React from 'react'
import Autocomplete from "react-google-autocomplete";
import { Link } from 'react-router-dom';

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

                <div className='w-full flex flex-col items-center gap-4'>
                    <div className='w-full flex sm:flex-row flex-col justify-center items-center gap-2'>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <Link to="/auth/sign-in">
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                Login with Email
                            </button>
                        </Link>
                    </div>

                    <p className='text-xs sm:text-sm md:text-base text-base-content text-center'>
                        Not signed in? <Link to="/auth/sign-up"><span><div className="tooltip"><div className="tooltip-content"> <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Step Out!</div></div><span className='underline underline-offset-2'>Create</span></div></span></Link> an account to get started!
                    </p>
                </div>

            </div>
        </div >
    )
}

export default SearchBar