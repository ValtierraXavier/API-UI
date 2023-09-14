import './App.css';
import Slider from './Components/Slider/Slider.jsx';
import Navbar from './Navbar.jsx'
import CharacterModal from './Components/CharacterModal/CharacterModal.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [character, setCharacter] = useState({})
  const [pageNumber, setPageNumber] = useState(1)
  const [modalType, setmodalType] = useState('')
  const [location, setLocation] = useState([])
  const [origin, setOrigin] = useState({})
  const [residentsURLArr, setResidentsURLArr]=useState('')
  let residentsIdArr=[]
  let [residents, setResidents] =useState()
  const infoModal = document.getElementById('characterModal')

  
  const fetchCharacter = async () => {
    if(pageNumber === 0 || pageNumber === 827){
      return
    }
    else{
      try{
      const characterInfo = await axios(`https://rickandmortyapi.com/api/character/${pageNumber}`);
      if(characterInfo.status === 200){        
        setCharacter(prev => prev = characterInfo.data)
        if(characterInfo.data.location.name === 'unknown'){
          return
        }else{
          const location = await axios(`${characterInfo.data.location.url}`)
          setLocation(prev => prev = location.data)
          const locationResidents = location.data.residents
           if(locationResidents.length === 0){
            return
           }else{
             const arr = []
            locationResidents.forEach((resident)=>{
            arr.push(resident.split('/')[5])
            })
            setResidents(prev => prev = arr.toString())
           }
        }
      }else{
        window.alert('UhOh something went wrong...')
      }
    }catch(error){console.log(error.message)}
  }
  }


function limiter(){
  if(pageNumber<1){
      setPageNumber(prev => prev = 826)
  } else if(pageNumber > 826){
      setPageNumber(prev => prev = 1)
  }
}
  
useEffect(()=>{
  fetchCharacter()
  limiter()
}, [pageNumber])

  return (
  <section className='whole'>
    <Navbar/>
    <Slider character={character} location={location} residents={residents} setCharacter={setCharacter} pageNumber={pageNumber} setPageNumber={setPageNumber} />
  </section>
  )
}

export default App;
