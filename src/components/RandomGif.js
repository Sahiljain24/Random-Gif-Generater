import useGif from "../hooks/useGif"
import Spinner from "./Spinner";

const RandomGif =()=>{
      const {gif ,loading, fetchData} = useGif();
     
    return <div className="flex flex-col gap-6 items-center  m-auto justify-evenly">
          <h2>A Random Gif</h2>
     <div>
        {
            loading?( <Spinner/>):(
                <img
                className="flex"
                 src={gif} alt="Chitra"></img>
       )
        }
     </div>
         <button onClick={()=>(fetchData(null))}>Generate Gif</button>
    </div>
}

export default RandomGif