import React, {useEffect, useState} from 'react'
import './CharacterModal.css'
import axios from 'axios'

export default function CharacterModal({location, modalType, character, residents}){
    const[currentResidents, setCurrentResidents]=useState([])

    const locationResidents=async()=>{
        try {
            if(residents.length > 0){
                const res = await axios(`https://rickandmortyapi.com/api/character/${residents}`)
            if(res.status === 200){
                setCurrentResidents(prev => prev = res.data)            
            }else{
                return
            }}
        } catch (error) {
            console.log(error.message)
        }
    }

    console.log(currentResidents)
    useEffect(()=>{
        locationResidents()
    },[location])

  return (
    <div className='characterModal' id='characterModal'>
        <div className='mapDiv'>            
        {(currentResidents?currentResidents:[])?
            currentResidents.map((resident, index)=>{
                return(
                    <div className='residentName' key={`rN${index}`}>
                        <div>{resident.name}</div>
                    </div>
                    )
                })
                :
                <div>No one live here lol</div>
            }
        </div>
    </div>
  )
}
