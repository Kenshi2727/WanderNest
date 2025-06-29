import React from 'react';

function Testimonial({ name, description, imageUrl }) {
    return (
        <div className="card card-side bg-base-100 shadow-md w-full h-60">
            <figure className="w-60 h-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={imageUrl}
                    alt="testimonial"
                />
            </figure>
            <div className="card-body w-fit">
                <h2 className="card-title">{name}</h2>
                <p className='text-xs sm:text-sm md:text-xl'>{description}</p>
                <div className="card-actions justify-end">
                    <div className="rating">
                        <div className="mask mask-star" aria-label="1 star"></div>
                        <div className="mask mask-star" aria-label="2 star"></div>
                        <div className="mask mask-star" aria-label="3 star"></div>
                        <div className="mask mask-star" aria-label="4 star" aria-current="true"></div>
                        <div className="mask mask-star" aria-label="5 star"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;