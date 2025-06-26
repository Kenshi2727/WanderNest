import React, { useEffect, useRef } from 'react';

function Carousel() {
    const slideIds = ['#slide1', '#slide2', '#slide3', '#slide4', '#slide5', '#slide6', '#slide7'];
    const currentIndex = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex.current = (currentIndex.current + 1) % slideIds.length;//circular loop

            const targetId = slideIds[currentIndex.current];
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                // This replaces the current URL in the address bar without refreshing the page or causing scroll jumps.
                // '#slide2' = updates the URL to look like you clicked an anchor, without the jump
                history.replaceState(null, '', targetId);
            }
        }, 3000); // change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='mx-4'>
            <div className="carousel w-full gap-4 shadow-2xl rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="slide1.jpg"
                        className="w-full rounded-xl h-122 object-cover"
                    />
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="slide2.jpg"
                        className="w-full rounded-xl h-122 object-cover"
                    />
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="slide3.jpg"
                        className="w-full rounded-xl h-122 object-cover"
                    />
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="slide4.jpg"
                        className="w-full rounded-xl h-122 object-cover"
                    />
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img
                        src="slide5.jpg"
                        className="w-full rounded-xl h-122 object-cover"
                    />
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img
                        src="slide6.jpg"
                        className="w-full rounded-xl h-122 object-cover"
                    />
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <img
                        src="slide7.jpg"
                        className="w-full rounded-xl h-122 object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
