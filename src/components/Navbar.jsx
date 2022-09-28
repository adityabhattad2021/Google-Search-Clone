import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

function Navbar ({darkTheme,setDarkTheme}){
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/search">
                    <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500  dark:text-gray-900">Goggl 🔎</p>
                </Link>
                <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className="text-xl font-bold dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{!darkTheme ? 'Dark 🌑' :'Light 💡'}</button>
            </div>
            <Search />
        </div>
    )
}

export default Navbar;