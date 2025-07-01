import React from 'react'

function MapComponent() {
    return (
        <div className='w-full h-full'>
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3152.914445590186!2d-122.45805670608213!3d37.792044724762135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQ3JzMxLjgiTiAxMjLCsDI3JzMwLjIiVw!5e0!3m2!1sen!2sin!4v1751352626758!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default MapComponent