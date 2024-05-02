import React from 'react'

import Image from 'next/image'
import EventResults from '../components/EventResults'
export default async function Events() {
  //const genre = searchParams.genre || "fetchTrending" 
  
  //console.log( API_KEY )  ; 
  const URL = process.env.NEXT_PUBLIC_EVENTS_URL  + "?populate=*" ; 
  //const URL = 'http://localhost:1337/api/events?populate=event_banner,mentors' ; 
  console.log ( "Ëvent URL is "+  URL) ; 
  
  const res = await fetch(URL, {next : { revalidate : 10}});  

  
  if ( !res.ok) {
    throw new Error ( " Failed to fetch data from server") ; 
  }

  const data = await res.json() ; 
  const results = data.data ; 

  console.log( "events in main page "+ results) ; 

  return (
    <div> 
       <EventResults results={results} />  
    </div>
    )
}
