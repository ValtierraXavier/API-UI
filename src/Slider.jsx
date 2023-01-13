import { useState } from "react"
import Data from './db/Data.json'


function Slider(props){
    const[image, setImage] = useState('')
    const[name, setName] = useState('')
    const[pageNumber, setPageNumber] = useState(1)

    const pageUp = () => setPageNumber(pageNumber+1)
    const pageDown = () => setPageNumber(pageNumber-1)
    const theImage = `https://rickandmortyapi.com/api/character/avatar/${pageNumber}.jpeg`

    // const limiter = () =>{
    //     if(pageNumber <= 0){

    //     }
    // }

return (
    <div class ='infoWindow'>{pageNumber}
        <div class ='next' onClick={pageUp}>next</div>
        <div class = 'display'>R&M Characters
            <div class ='image'>
                <img class ='image' src={theImage} alt='Character Picture'></img>
            </div>
            <div class = 'name'></div>
        </div>
    <div class ='prev' onClick={pageDown}>prev</div>
  </div>)
} 
export default Slider