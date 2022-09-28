import React from "react";

import { NavLink } from "react-router-dom";


const AllLinks=[
    {url:'/search',text:'Search 🔎'},
    {url:'/news',text:'News 📰'},
    {url:'/image',text:'Images 🖼'},
    {url:'/video',text:'Videos 🎥'},
]

function Links(){
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {AllLinks.map(({url,text})=>(
                <NavLink to={url}
                className={({ isActive }) =>
                 isActive ? ' text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 font-bold text-2xl' : 'text-xl mx-4 mb-0 font-bold'
                }>
                    {text}
                </NavLink>
            ))}
        </div>
    )
}


export default Links;