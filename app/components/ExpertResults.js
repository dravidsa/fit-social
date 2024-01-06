import React from 'react'
import ExpertCard from './ExpertCard'


export default function ExpertResults({results}) {
  return (
    <div className=' max-dw-6xl mx-auto  py-4 '>
      { results.map((result) => (
        <ExpertCard key={result.id }  result = {result} /> 
       
      ))}
    </div>
  )
}
