import React from 'react'
import Autocomplete from "react-google-autocomplete";
import { Download } from "lucide-react";
import FaviconIcon from '../assets/favicon.svg?react';

function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl rounded-lg" href='/'>
                    {/* <img src="favicon.svg" className='size-full' /> */}
                    <FaviconIcon className='size-full fill-current text-base-content' />
                </a>
            </div>
            <div className="flex gap-4">
                {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto focus:outline-none" /> */}
                <Autocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    onPlaceSelected={(place) => {
                        console.log(place);
                    }}
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto focus:outline-none"
                />

                <div className='flex justify-center items-center cursor-pointer rounded-full bg-base-200 hover:bg-base-300 active:bg-base-300 size-full p-2'>
                    <Download />
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between" href='/profile'>
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href="/themes">Choose Theme</a></li>
                        <li><a href='#'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header