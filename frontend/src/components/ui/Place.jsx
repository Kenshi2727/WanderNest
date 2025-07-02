import React from 'react'

function Place({ title, description, imageUrl, badges }) {
    return (
        <div className="card bg-base-100 w-80 sm:w-96 hover:scale-105 active:scale-105 shadow-md transition-transform duration-300 cursor-pointer">
            <figure>
                <img
                    className="h-48 w-full object-cover"
                    src={imageUrl}
                    loading='lazy'
                    alt="places" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">TRENDING</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{badges[0]}</div>
                    <div className="badge badge-outline">{badges[1]}</div>
                </div>
            </div>
        </div>
    )
}

export default Place