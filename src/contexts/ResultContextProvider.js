import React ,{createContext ,useContext,useState} from "react";



const ResultContext = createContext();
const BaseUrl='https://google-search3.p.rapidapi.com/api/v1';



// url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk=100',

export const ResultContextProvider = ({children}) => {
    const [results, setResults]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [searchTerm,setSearchTerm]=useState('');

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${BaseUrl}${type}`,{
            method:'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'IN',
                'X-RapidAPI-Key': process.env.REACT_APP_GOOGLE_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
              } 
        })

        const data = await response.json();

        // console.log(data);
        if(type.includes('/news')){
            setResults(data.entries)
        }else if(type.includes('/image')){
            setResults(data.image_results)
        }else{
            setResults(data.results)
        }
        // setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{getResults,results,searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}


export const useResultContext = ()=>useContext(ResultContext);