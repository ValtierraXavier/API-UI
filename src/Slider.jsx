import { useState, useEffect } from "react";
import axios from 'axios';



function Slider(){
    const [character, setCharacter] = useState({})
    const[pageNumber, setPageNumber] = useState(1)

    const pageUp = () => setPageNumber(prev => prev + 1)
    const pageDown = () => setPageNumber(prev => prev - 1)
    const theImage = `https://rickandmortyapi.com/api/character/avatar/${pageNumber}.jpeg`

    const fetchCharacter = async () => {
        const response = await axios(`https://rickandmortyapi.com/api/character/${pageNumber}`);
        setCharacter(response.data)
    }
    
    useEffect(()=>{
        fetchCharacter()
    }, [pageNumber])

return (
    <div className ='infoWindow'>  
        <button disabled={pageNumber >= 826} className ='next' onClick={pageUp}>▶︎</button>
        <div className = 'display'>
            <div className ='imageDiv'>
                <img className ='image' src={theImage} alt='Character Image'></img>
            </div>
            <div className='textArea'>
                <h3 className="name">Name: {character.name}</h3>
                <h3 className="status">Status: {character.status}</h3>
            </div>
        </div>
    <button disabled={pageNumber <= 1} className ='prev' onClick={pageDown}>◀︎</button>
  </div>)
} 
export default Slider