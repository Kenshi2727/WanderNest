import React from 'react'
import { useNavStore } from '../../store/useNavStore'

function Navigator() {
    const { navList } = useNavStore();

    return (
        <div className='w-full p-4'>
            <div className="breadcrumbs text-sm">
                <ul>
                    {
                        navList.map((nav, index) => (
                            <li key={index}>
                                <a href={nav.route}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4 stroke-current">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                    </svg>
                                    {nav.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navigator