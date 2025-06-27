import React from 'react'
import Place from './Place'
import { cardData } from '../../constants/cardData'
import { Link } from 'react-router-dom'

function Places() {
    return (
        <div className='flex flex-col mb-10'>
            <div className='my-10 gap-2 flex items-center justify-center'>
                <p className='font-bold text-2xl text-center'>Trending Now: Explore the World’s Hottest Spots</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-y-10 my-10">
                {cardData.map((place) => (
                    <Link to={`/category/${place.id}`}>
                        <Place
                            key={place.id}
                            title={place.title}
                            description={place.description}
                            imageUrl={place.imageUrl}
                            badges={place.badges}
                        />
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Places