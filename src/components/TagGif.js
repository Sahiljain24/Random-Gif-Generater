import { useState } from "react";
import useGif from "../hooks/useGif"
import Spinner from "./Spinner";

const TagGif =()=>{
     

    const[tag,setTag] =useState('car')
    const {gif,loading , fetchData} = useGif(tag);
      
    return <div>
     <h2> Random ${tag} Gif</h2>
     <div>
        
     {
            loading?( <Spinner/>):(
                <img src={gif} alt="Chitra"></img>
       )
        }

     </div>

         <input
           type="text"
           onChange={(event)=>(setTag(event.target.value))}
           value={tag}
           name="tag"

         
         
         ></input>
         <button  onClick={()=>(fetchData(tag))}>Generate Gif</button>
    </div>
}

export default TagGif