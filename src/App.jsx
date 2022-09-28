import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomRoutes from "./components/CustomRoutes";








function App(){
    const [darkMode, setDarkMode] = React.useState(true);

    return (
        <div className={darkMode ? 'dark' : ''}>
          <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
            <Navbar darkTheme={darkMode} setDarkTheme={setDarkMode}/>
            <CustomRoutes />
            <Footer />
          </div>
        </div>
    );
}


export default App;