import React from 'react'
import { cardData } from '../constants/cardData'
import { useParams } from 'react-router-dom'

function Category() {
    const { id } = useParams();
    /*=== will not work as useParams will return type route parameter */
    const category = cardData.find(item => item.id == id);
    const title = category.title;
    // console.log("category--->", category);


    return (
        <div className='min-h-screen grid grid-rows-2 md:grid-cols-2'>
            <div className='m-4'>
                <ul className="list bg-base-100 rounded-box shadow-md">

                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">{title}</li>

                    <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                        <div><img className="size-20 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                        <div className="list-col-grow">
                            <div>Dio Lupa</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                langchain agent
            </div>
        </div>
    )
}

export default Category