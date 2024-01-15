import React from 'react'
import MentorCard2 from './MentorCard2'


export default function MentorResults({results}) {
  return (
    <div className='space-y-4 space-x-4'>
      { results.map((result) => (
        <MentorCard2 key={result.id }  result = {result} /> 
       
      ))}
    </div>
  )
}
