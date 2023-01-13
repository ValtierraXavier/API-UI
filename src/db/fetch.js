import {promises as fsPromises} from "fs"
import fetch from 'node-fetch'

fetch(`https://rickandmortyapi.com/api/character?page=2`)
.then((response) => response.json())
.then((data)=> fsPromises.appendFile('./src/Data.json', JSON.stringify(data)))
.catch((error)=> console.error('Error: ', error))