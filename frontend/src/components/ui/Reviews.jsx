import React from 'react'

function Reviews() {
    return (
        <div className='overflow-y-scroll'>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">See what people have to say:</li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                    <div>
                        <div>Dio Lupa</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                    </div>
                    <div className="rating rating-xs">
                        <div className="mask mask-star" aria-label="1 star"></div>
                        <div className="mask mask-star" aria-label="2 star"></div>
                        <div className="mask mask-star" aria-label="3 star"></div>
                        <div className="mask mask-star" aria-label="4 star" aria-current="true"></div>
                        <div className="mask mask-star" aria-label="5 star"></div>
                    </div>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
                    <div>
                        <div>Ellie Beilish</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                    </div>
                    <div className="rating rating-xs">
                        <div className="mask mask-star" aria-label="1 star"></div>
                        <div className="mask mask-star" aria-label="2 star"></div>
                        <div className="mask mask-star" aria-label="3 star"></div>
                        <div className="mask mask-star" aria-label="4 star" aria-current="true"></div>
                        <div className="mask mask-star" aria-label="5 star"></div>
                    </div>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
                    <div>
                        <div>Sabrino Gardener</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                    </div>
                    <div className="rating rating-xs">
                        <div className="mask mask-star" aria-label="1 star"></div>
                        <div className="mask mask-star" aria-label="2 star"></div>
                        <div className="mask mask-star" aria-label="3 star"></div>
                        <div className="mask mask-star" aria-label="4 star" aria-current="true"></div>
                        <div className="mask mask-star" aria-label="5 star"></div>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Reviews