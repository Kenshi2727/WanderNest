import React, { useEffect } from 'react'
import { cardData } from '../constants/cardData'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { categoryData } from '../constants/categoryData'
import CategoryListItem from './ui/CategoryListItem'
import AgentChat from './ui/AgentChat'
import { useNavStore } from '../store/useNavStore'

function Category() {
    const { id } = useParams();

    const { navList, setNavList } = useNavStore();

    /*=== will not work as useParams will return type route parameter */
    const category = cardData.find(item => item.id == id);
    const title = category.title;
    // console.log("category--->", category);
    const list = categoryData.find(item => item.id == id);

    useEffect(() => {
        setNavList([
            {
                route: "/",
                label: "Home",
            },
            {
                route: `/category/${id}`,
                label: title,
            }]);
    }, []);

    return (
        <div className='min-h-screen grid grid-rows-2 md:grid-rows-1 md:grid-cols-2'>
            <div className='m-4'>
                <ul className="list bg-base-100 rounded-box shadow-md">

                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">{title}</li>

                    {list.data.map((item, index) => (
                        <Link key={index} to={`/category/${id}/${item.id}`}>
                            <CategoryListItem id={id} item={item} />
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