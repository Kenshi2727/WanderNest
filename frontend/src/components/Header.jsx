import React from 'react'
import Autocomplete from "react-google-autocomplete";
import { Download } from "lucide-react";
import FaviconIcon from '../assets/favicon.svg?react';
import { DefferedPromptContext } from '../context/DefferedPromptContext';
import { useContext, useEffect } from 'react';

function Header() {
    const { deferredPrompt, setDeferredPrompt } = useContext(DefferedPromptContext);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        }
        window.addEventListener('beforeinstallprompt', handler);

        window.addEventListener('appinstalled', () => {
            console.log('App installed successfully!');
        });

    }, [])

    const handleInstall = async () => {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('User accepted the installation prompt');
        } else {
            console.log('User dismissed the installation prompt');
        }
        // setDeferredPrompt(null);// Clear the prompt after use
    }

    return (
        <div className="navbar fixed top-0 left-0 z-50 h-16 backdrop-blur-md bg-base-100/60 shadow-sm">
            <div className="flex-1">
                <div className="tooltip tooltip-bottom" data-tip="Home">
                    <a className="btn btn-ghost text-xl no-depth rounded-lg border-transparent bg-transparent" href='/'>
                        {/* <img src="favicon.svg" className='size-full' /> */}
                        <FaviconIcon className='size-full fill-current text-base-content' />
                    </a>
                </div>
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

                <div className="tooltip tooltip-bottom" data-tip="Install App">
                    <button
                        onClick={handleInstall}
                        className='flex justify-center items-center cursor-pointer rounded-full bg-base-200 hover:bg-base-300 active:bg-base-300 size-full p-2'>
                        <Download />
                    </button>
                </div>

                <div className="dropdown dropdown-end">
                    <div className="tooltip tooltip-bottom" data-tip="Profile">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    loading='lazy'
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
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