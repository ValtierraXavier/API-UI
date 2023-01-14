import { useState, useEffect } from "react";
import axios from 'axios';



function Slider(){
    const [character, setCharacter] = useState({})
    const[pageNumber, setPageNumber] = useState(1)

    const pageUp = () => setPageNumber(prev => prev + 1)
    const pageDown = () => setPageNumber(prev => prev - 1)
    const fiftyUp = () => setPageNumber(prev => prev + 50)
    const fiftyDown = () => setPageNumber(prev => prev -50)
    const begining = () => setPageNumber(prev => prev = 1)
    const end = () => setPageNumber(prev => prev = 826)
    const theImage = `https://rickandmortyapi.com/api/character/avatar/${pageNumber}.jpeg`

    const fetchCharacter = async () => {
        const response = await axios(`https://rickandmortyapi.com/api/character/${pageNumber}`);
        setCharacter(response.data)
    }
    
    function limiter(){
        if(pageNumber<1){
            setPageNumber(prev => prev = 1)
        } else if(pageNumber > 826){
            setPageNumber(prev => prev = 826)
        }
    }

    useEffect(()=>{
        fetchCharacter()
        limiter()
    }, [pageNumber])

return (
    <div className ='infoWindow'>  
        
        <div className="forwardButtons">
            <button disabled={pageNumber >= 826} className ='next' onClick={pageUp}>▶︎</button>
            <button disabled={pageNumber >= 826} className ='fiftyUp' onClick={fiftyUp}>▷▶</button>
            <button disabled={pageNumber >= 826} className ='end' onClick={end}>⇥</button>
        </div>

        <div className = 'display'>

            <div className ='imageDiv'>
                <img className ='image' src={theImage} alt='Character Image'></img>
            </div>

            <div className='textArea'>
                <h3 className="name">Name: {character.name}</h3>
                <h3 className="status">Status: {character.status}</h3>
                <p className="outOf">{pageNumber} of 826</p>
            </div>

        </div>

    <div className='backButtons'>
        <button disabled={pageNumber <= 1} className ='prev' onClick={pageDown}>◀︎</button>
        <button disabled={pageNumber <= 1} className ='fiftyDown' onClick={fiftyDown}>◀︎◁</button>
        <button disabled={pageNumber <= 1} className ='start' onClick={begining}>⇤</button>
    </div>

  </div> 
  )
} 
export default Slider