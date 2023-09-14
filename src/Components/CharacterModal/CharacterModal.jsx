import React, {useEffect, useState} from 'react'
import './CharacterModal.css'
import axios from 'axios'

export default function CharacterModal({location, modalType, character, residents}){
    const[currentResidents, setCurrentResidents]=useState(null)

    const locationResidents=async()=>{
        try {
            if((residents?residents.length:-1) > 0){
                const res = await axios(`https://rickandmortyapi.com/api/character/${residents}`)
            if(res.status === 200 && res.data.length > 1 ){
                setCurrentResidents(prev => prev = res.data)            
            }else{
                setCurrentResidents(prev => prev = [])
                console.log(res)
            }}
        } catch (error) {
            console.log(error.message)
        }
    }
    // console.log( currentResidents)

    useEffect(()=>{
        locationResidents()
    },[location, character])

  return (
    <div className='characterModal' id='characterModal'>{`Residents:`}
        <div className='mapDiv'>            
        {(currentResidents?currentResidents.length>1:currentResidents)?
            currentResidents.map((resident, index)=>{
                return(
                    <div className='residentName' key={`rN${index}`}>
                        <div>{residents?resident.name:''}</div>
                    </div>
                    )
                })
                :(currentResidents)?
                <div className='residentName'>
                    <div>{currentResidents?currentResidents.name:{}}</div>
                </div>
                :location.name === 'unknown'?
                <div>No one lives here lol</div>
                :
                <div>No one lives here</div>
            }
        </div>
    </div>
  )
}
