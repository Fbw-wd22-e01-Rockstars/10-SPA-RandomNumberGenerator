import React,{useState} from 'react'
import {v4 as uuid} from "uuid"

console.log(uuid())
export default function RandomList() {

    const [randomNumbers, setRandomNumber]=useState([])

    const addRandomNumber=()=>{
        /* randomNumbers.push(Math.random()*100) */
        setRandomNumber([...randomNumbers,(Math.random()*100).toFixed(1)])
    }

  return (
    <div>
            <ul>
                {randomNumbers.map(num=>{
                    return( <li key={uuid()}>{num} </li>)
                })}
            </ul>
        <button onClick={addRandomNumber}>add new random number</button>
    </div>
  )
}
