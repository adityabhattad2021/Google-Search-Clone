import React from "react";

// get current year
const currentYear = new Date().getFullYear();


function Footer (){
    return (
        <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
            <h1>{currentYear} ©️ Aditya Bhattad</h1>
        </div>
    )
}



export default Footer;