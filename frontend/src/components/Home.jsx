import React from 'react'
import Carousel from './ui/Carousel'
import SearchBar from './ui/SearchBar'
import Places from './ui/Places'
import Testimonials from './ui/Testimonials'

function Home() {
    return (
        <div className='min-h-screen'>
            <div className='text-center my-10 gap-2 flex flex-col items-center'>
                <h1 className='font-bold text-6xl'>WanderNest</h1>
                <p className='text-2xl text-gray-600 max-w-2xl'>
                    "Because every soul needs a place to wander"
                </p>
            </div>

            <Carousel />
            <SearchBar />
            <Places />
            <Testimonials />
        </div>
    )
}

export default Home