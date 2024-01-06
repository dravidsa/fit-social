import React from 'react'
import MentorCard2 from './MentorCard2'


export default function MentorResults({results}) {
  return (
    <div className='max-dw-6xl mx-auto px-5 py-4 '>
      { results.map((result) => (
        <MentorCard2 key={result.id }  result = {result} /> 
       
      ))}
    </div>
  )
}
