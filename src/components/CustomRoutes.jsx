import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";


function CustomRoutes (){
    return (
        <div className="p-4">
            <Routes>
                <Route exact path="/" element={<Navigate to="/search" replace />}>
    
                </Route>
                <Route exact path="/search" element={<Results />}/>
                <Route exact path="/image" element={<Results />}/>
                <Route exact path="/video" element={<Results />}/>
                <Route exact path="/news" element={<Results />}/>
            </Routes>
        </div>
    )
}


export default CustomRoutes;