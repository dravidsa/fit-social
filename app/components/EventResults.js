import React from 'react'
import EventCard from './EventCard'


export default function EventResults({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-dw-6xl mx-auto  py-4 '>
      { results.map((result) => (
        <EventCard key={result.id }  result = {result} /> 
       
      ))}
    </div>
  )
}
