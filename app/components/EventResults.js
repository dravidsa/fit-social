import React from 'react'
import EventCard from './EventCard'


export default function EventResults({results}) {
  return (
    <div className=' py-4 '>
      { results.map((result) => (
        <EventCard key={result.id }  result = {result} /> 
       
      ))}
    </div>
  )
}
