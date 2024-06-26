import axios from "axios";
import { useEffect, useState } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {
      
    const [gif,setGif] =useState();
    const [loading,setLoading]=useState(false);

    async function fetchData(tag){
       setLoading(true)
        try{
            const {data} = await axios.get(tag?(`${url}&tag=${tag}`):(url));
        const image =data.images.url;
         setGif(image);
        }
        catch(err){
            console.log("nhi aarha gif")
        }
         setLoading(false)
    } 
    useEffect(()=>{
        fetchData('car')
    },[]);

   return {gif,loading,fetchData};
};

export default useGif;
