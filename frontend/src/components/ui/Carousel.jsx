import React, { useEffect, useRef } from 'react';

function Carousel() {
    const slideCount = 7;
    const currentIndex = useRef(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex.current = (currentIndex.current + 1) % slideCount;

            const carousel = carouselRef.current;
            if (carousel) {
                const slideWidth = carousel.offsetWidth;
                carousel.scrollTo({
                    left: currentIndex.current * slideWidth,
                    behavior: 'smooth',
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='mx-4'>
            <div
                ref={carouselRef}
                className="carousel w-full gap-4 shadow-2xl rounded-xl flex overflow-x-auto scroll-smooth no-scrollbar"
            >
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <div key={num} className="carousel-item relative w-full flex-shrink-0">
                        <img
                            src={`slide${num}.jpg`}
                            alt={`Slide ${num}`}
                            className="w-full rounded-xl h-122 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
