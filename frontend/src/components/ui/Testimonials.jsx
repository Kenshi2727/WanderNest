import React from 'react'
import Testimonial from './Testimonial'
import { testData } from '../../constants/testData'

function Testimonials() {
    return (
        <div className='flex flex-col mb-10 mx-10'>
            <div className='my-10 gap-2 flex items-center justify-center'>
                <p className='font-bold text-2xl text-center'>“From First Tap to Final Destination”—Our users say it best</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-10 my-10">
                {testData.map((testimonial) => (
                    <Testimonial
                        key={testimonial.id}
                        name={testimonial.name}
                        description={testimonial.description}
                        imageUrl={testimonial.imageUrl}
                    />
                ))}
            </div>

        </div>
    )
}

export default Testimonials