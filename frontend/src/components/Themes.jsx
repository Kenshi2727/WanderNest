import React from 'react'
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";

function Themes() {
    const { theme, setTheme } = useThemeStore();

    return (
        <div className="flex flex-col gap-4 mb-10 min-h-screen container mx-auto px-4 pt-20 max-w-5xl overflow-y-scroll no-scrollbar">
            <div className="space-y-6">
                <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold">Theme</h2>
                    <p className="text-sm text-base-content/70">Choose a theme for your wandering mind</p>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                    {THEMES.map((t) => (
                        <button
                            key={t}
                            className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
                `}
                            onClick={() => setTheme(t)}
                        >
                            <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
                                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                                    <div className="rounded bg-primary"></div>
                                    <div className="rounded bg-secondary"></div>
                                    <div className="rounded bg-accent"></div>
                                    <div className="rounded bg-neutral"></div>
                                </div>
                            </div>
                            <span className="text-[11px] font-medium truncate w-full text-center">
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </span>
                        </button>
                    ))}
                </div>
            </div>



            {/*desktop mockup */}
            <div className="border border-base-300 w-full shadow-lg rounded-lg">
                {/* Toolbar */}
                <div className="mockup-browser-toolbar bg-base-200 flex items-center space-x-2 px-4 py-2 rounded-t-lg">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <div className="input input-bordered input-sm flex-1 ml-2">
                        https://wandernest.com
                    </div>
                </div>

                {/* Content */}
                <div className="h-80 border-t border-base-300 bg-base-100 p-6 flex flex-col justify-center items-center space-y-4 rounded-b-lg">
                    <h2 className="text-2xl font-semibold text-center">Welcome to WanderNest</h2>
                    <p className="text-base-content text-center max-w-md">
                        Explore your next adventure with smart travel planning at your fingertips.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>

        </div>
    );
}

export default Themes;