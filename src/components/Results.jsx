import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ReactPlayer from "react-player";
import Loading from "./Loading";

import { useResultContext } from '../contexts/ResultContextProvider'


function Block(props){
    return (
        <div key={props.index} className="md:w-2/5 w-full ">
            <a href={props.link} target="_blank" rel="noreferrer">
                 <p className="text-sm">        
                    {props.link}
                 </p>
                 <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {props.title}
                </p>
            </a>
        </div>
    )
}


function ImageBlock(props){
    return (
        <a className="sm:p-3 p-5" href={props.href} key={props.index} target="_blank" rel="noreferrer">
            <img src={props.image?.src} alt={props.title} loading="lazy" />
            <p className="w-36 break-words text-sm mt-2">
                {props.title}
            </p>
        </a>
    )
}

function NewsBlock(props){
    return  (<div key={props.id} className="md:w-2/5 w-full">
                    <a href={props.links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                        <p className="text-lg dark:text-blue-300 text-blue-700">
                            {props.title}
                        </p>
                        </a>
                    <div className="flex gap-4">
                        <a href={props.source?.href} target="_blank" rel="noreferrer">
                        {props.source?.href}
                        </a>
                    </div>
                    
            </div>)
}


function Results (){

    const { results,isLoading,getResults,searchTerm }=useResultContext();
    const location = useLocation();

    useEffect(()=>{
        if(searchTerm){
            if(location.pathname==='/videos'){
                getResults(`/search/q=${searchTerm} videos`)
            } else {
                getResults(`${location.pathname}/q=${searchTerm}&num=20`)
            }
        }
    },[searchTerm,location.pathname]);

    if(isLoading) return <Loading />


    // const titles=[]
    // const links=[]
    // const Results=[]
  
    // console.log(titles);

    console.log(location.pathname);

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
            
                    {results?.map((ele,index) => <Block title={ele.title} index={index} link={ele.link}/>)}
                    
                </div>
   
            )
        case '/image':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map(({image,link:{href,title}},index)=> <ImageBlock image={image} index={index} href={href} title={title} />)}
                </div>
            )
        case '/news':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
                  {results?.map(({links,id,source,title})=> <NewsBlock links={links} id={id} source={source} title={title} />)}
                </div>
                // <h1>spdfsdf</h1>
            )
        case '/video':
            return (
                <div className="flex flex-wrap">
                    {results.map((video,index)=>(
                        <div className="p-2" key={index} >
                            {video?.additional_links?.[0].href && <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px"  />}
                        </div>
                    ))}
                </div>
            )
        default:
            return (
                <h1>Error</h1>
            )
    }
}


export default Results;