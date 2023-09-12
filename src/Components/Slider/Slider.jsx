import { useState, useEffect } from "react";
import './Slider.css'
import axios from 'axios';
import CharacterModal from "../CharacterModal/CharacterModal.jsx";


function Slider({ character, location, residents, pageNumber, setPageNumber,}){
    
    const pageUp = () => setPageNumber(prev => prev + 1)
    const pageDown = () => setPageNumber(prev => prev - 1)
    const fiftyUp = () => setPageNumber(prev => prev + 50)
    const fiftyDown = () => setPageNumber(prev => prev -50)
    const begining = () => setPageNumber(prev => prev = 1)
    const end = () => setPageNumber(prev => prev = 826)

return (
    <div className ='infoWindow'>  
        
        <div className="forwardButtons">
            <button  className ='next' onClick={pageUp}>▶︎</button>
            <button  className ='fiftyUp' onClick={fiftyUp}>▷▶</button>
            <button  className ='end' onClick={end}>⇥</button>
        </div>

        <div className = 'display' id = 'display'>
            <div className ='characterDiv'>
                <img className ='characterImage' src={character.image} alt='Character Image'></img>
                <div className='characterTextArea'>
                    <h3 data-type = 'Character' className="characterName">Name: {character?character.name:''}</h3>
                    <h3 className="characterStatus">Status: {character?character.status:''}</h3>
                    <h3 className="characterGender">Gender: {character?character.gender:''}</h3>
                    <h3  data-type = 'location' className="characterLocation" id='chatacterLocation'>Location: {character.location?character.location.name:'N/A'}
                        <div className='residents'>Residents:{
                            <CharacterModal character={character} location={location} residents={residents}/>
                        }</div>
                    </h3>
                    <h3  data-type = 'origin' className="characterOrigin" id='characterOrigin' >Origin: {character.origin?character.origin.name:'N/A'}</h3>
                    <h3 className="characterSpecies">Species: {character?character.species:''}</h3>
                    <div>In Episode/s: 
                        <div></div>
                    </div>
                    <h4 className="characteroutOf">Character: {character?character.id:''} of 826</h4>
                </div>
            </div>
        </div>

    <div className='backButtons'>
        <button className ='prev' onClick={pageDown}>◀︎</button>
        <button className ='fiftyDown' onClick={fiftyDown}>◀︎◁</button>
        <button className ='start' onClick={begining}>⇤</button>
    </div>

  </div> 
  )
} 
export default Slider