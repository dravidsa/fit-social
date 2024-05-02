import React from 'react'

export default function EventRoute({results}) {
    console.log( "result in route map is  " + JSON.stringify(results)); 
const route_URL = results.data.attributes.route_map.data[0].attributes.url ; 
const route_image = process.env.NEXT_PUBLIC_BASE + route_URL  ; 
console.log ( "route map is " + route_image  )  ; 

return (
    <div>
       <div className="text-2xl text-black-900 px-4 py-4 " > Event Route Map : 
       </div> 
     <img src={route_image} />

    </div>
  )
}
