import React from 'react'
import DashCard from './DashCard'


export default function DashResults({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-dw-6xl mx-auto  py-4 '>
      { results.map((result) => (
        <DashCard key={result.id }  result = {result} /> 
       
      ))}
    </div>
  )
}
