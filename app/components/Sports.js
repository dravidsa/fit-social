import React from 'react'

export default function Sports({results}) {
  return (
    
    <div>
      <div>
      { results.attributes.sports.data.map((result) => (
        
        <span class="bg-yellow-100 text-yellow-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">{result.attributes.sport_name}</span>
       
      ))}
    </div>
    </div>
  )
}
