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
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;