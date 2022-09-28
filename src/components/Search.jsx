import React, {useState} from "react";


import { useResultContext } from "../contexts/ResultContextProvider";
import Links from "./Links";


function Search (){
    const [text,setText] = useState('India');
    const { setSearchTerm } = useResultContext();
    // const [debouncedText] = useDebounce(text, 500);


    // useEffect(()=>{
    //     if(debouncedText){
    //         setSearchTerm(debouncedText);
    //     }
    // },[debouncedText]);

       


    return (
        <div  className="relative sm:ml-48 md-ml-72 sm:-mt-10 mt-3">
            <input
                value={text}
                type="text"
                className="sm:w-95 w-80 h-10 ark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-white transition-colors duration-200 dark:text-white dark:text-black dark:focus:text-white"  
                placeholder="Search for news, images, videos"
                onChange={(e)=>setText(e.target.value)}
            />
            {text && (
                <button type="button" className="flex justify-center items-center absolute top-1.5 right-4 mr-8  mt-1 text-2xl text-gray-500" onClick={()=>setSearchTerm(text)}>
                    🔎
                </button>
            )}
            <Links />
        </div>
    )
}

export default Search;