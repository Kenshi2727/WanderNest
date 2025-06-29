import React from 'react'
import { cardData } from '../constants/cardData'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { categoryData } from '../constants/categoryData'
import CategoryListItem from './ui/CategoryListItem'
import AgentChat from './ui/AgentChat'

function Category() {
    const { id } = useParams();

    /*=== will not work as useParams will return type route parameter */
    const category = cardData.find(item => item.id == id);
    const title = category.title;
    // console.log("category--->", category);
    const list = categoryData.find(item => item.id == id);



    return (
        <div className='min-h-screen grid grid-rows-2 md:grid-rows-1 md:grid-cols-2'>
            <div className='m-4'>
                <ul className="list bg-base-100 rounded-box shadow-md">

                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">{title}</li>

                    {list.data.map((item, index) => (
                        <Link to={`/category/${id}/${item.id}`}>
                            <CategoryListItem item={item} index={index} />
                        </Link>
                    ))}
                </ul>
            </div>

            {/*agent chat */}
            <div className='m-4'>
                <AgentChat />
            </div>
        </div>
    )
}

export default Category