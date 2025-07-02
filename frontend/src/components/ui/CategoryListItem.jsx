import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CategoryListItem({ item }) {
    const [liked, setLiked] = useState(false);

    return (
        <li className="list-row hover:bg-base-200 active:bg-base-200 cursor-pointer">
            <div className="text-4xl font-thin opacity-30 tabular-nums">{item.id}</div>
            <div><img className="size-20 rounded-box" src={item.imageUrl} /></div>
            <div className="list-col-grow">
                <div>{item.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{item.description}</div>
            </div>

            <div className={`tooltip ${(liked) ? 'tooltip-error' : 'tooltip-secondary'} h-fit`} data-tip={(liked) ? "Remove from favourites" : "Add to favorites"}>
                <Link to="#">
                    <button onClick={() => setLiked(!liked)} className="btn btn-square btn-ghost">
                        {
                            (!liked) ?
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                :
                                <svg
                                    className="size-[1.2em]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                                4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
                                14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                                6.86-8.55 11.54L12 21.35z" />
                                </svg>
                        }
                    </button>
                </Link>
            </div>
        </li>
    )
}

export default CategoryListItem