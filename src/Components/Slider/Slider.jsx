import './Slider.css'
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
            <button className='forwardButton' id ='next' onClick={pageUp}>▶︎</button>
            <button className='forwardButton' id ='fiftyUp' onClick={fiftyUp}>▷▶</button>
            <button className='forwardButton' id ='end' onClick={end}>⇥</button>
        </div>

        <div className = 'display' id = 'display'>
            <div className ='characterDiv'>
                <img className ='characterImage' src={character.image} alt='Character Image'></img>
                <div className='characterTextArea'>
                    <h4 data-type = 'Character' className="characterName">Name: {character?character.name:''}</h4>
                    {character.status === 'Alive'?                        
                    <h4 className="characterStatus"  style= {{color: 'seagreen'}}  >Status: {character?character.status:''}</h4>
                    :character.status === "Dead" ?
                    <h4 className="characterStatus"  style= {{color: 'coral'}} >Status: {character?character.status:''}</h4>
                    :
                    <h4 className="characterStatus"  style= {{color: 'lightgrey'}} >Status: {character?character.status:''}</h4>
                    }
                    <h4 className="characterGender">Gender: {character?character.gender:''}</h4>
                    <h4  data-type = 'location' className="characterLocation" id='chatacterLocation'>Location: {character.location?character.location.name:'N/A'}
                        <div className='residents'> 
                            <CharacterModal character={character} location={location} residents={residents}/>
                        </div>
                    </h4>
                    <h4  data-type = 'origin' className="characterOrigin" id='characterOrigin'>Origin: {character.origin?character.origin.name:'N/A'}</h4>
                    <h4 className="characterSpecies">Species: {character?character.species:''}</h4>
                    <h4 className="characteroutOf">Character: {character?character.id:''} of 826</h4>
                </div>
            </div>
        </div>

    <div className='backButtons'>
        <button className='backButton' id ='prev' onClick={pageDown}>◀︎</button>
        <button className='backButton' id ='fiftyDown' onClick={fiftyDown}>◀︎◁</button>
        <button className='backButton' id ='start' onClick={begining}>⇤</button>
    </div>

  </div> 
  )
} 
export default Slider