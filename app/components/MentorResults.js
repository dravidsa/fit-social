import React from 'react'
import MentorCard from './MentorCard'


export default function MentorResults({results}) {
  return (
    <div className='space-y-4 space-x-4'>
      { results.map((result) => (
        <MentorCard key={result.id }  result = {result} /> 
       
      ))}
    </div>
  )
}
