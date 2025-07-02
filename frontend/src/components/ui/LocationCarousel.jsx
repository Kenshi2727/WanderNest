import React, { useEffect, useRef } from 'react';

function LocationCarousel() {
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

    const images = [
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
        "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
        "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    ];

    return (
        <div className="h-1/3 w-full">
            <div
                ref={carouselRef}
                className="carousel w-full gap-4 shadow-2xl rounded-xl flex overflow-x-auto scroll-smooth no-scrollbar h-full"
            >
                {images.map((src, idx) => (
                    <div key={idx} className="carousel-item w-full flex-shrink-0">
                        <img
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LocationCarousel;
