import React from 'react'
import PsychCard from '../components/PsychCard'

const Psych = () => {
   const data=[{id:1,
        name:"ABC",}]
    data.map((psych)=>{
        return <PsychCard psych={psych} key={psych.id}/>
          }) 
}

export default Psych
