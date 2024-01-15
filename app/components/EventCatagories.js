
import React from 'react'

export default function EventCatagories({results}) {
  console.log(  "results in event cat is " + JSON.stringify(results.data.attributes.event_catagories)) 
  return (
   
    <div className="text-3xl text-amber-500 px-4 py-4">
      
      <div className= "flex">
        <div className="text-2xl text-black-900" > Event Catagories : 
        </div> 
      { results.data.attributes.event_catagories.map((result) => (
        
          <span class="bg-yellow-100 text-yellow-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">{result.name}</span>
       
      ))}
    </div>
    </div>
  )
}
