import React from "react";
import {BallTriangle} from 'react-loader-spinner';


function Loading (){
    return (
        <div className="flex justify-center items-center ">
            <BallTriangle color="#00BFFF" height={550} width={100} />
        </div>
    )
}


export default Loading;