import React from 'react'

import Image from 'next/image'
import MentorResults from '../components/MentorResults'

export default async function Mentors() {
  //const genre = searchParams.genre || "fetchTrending" 
  
  //console.log( API_KEY )  ; 
  const URL = process.env.NEXT_PUBLIC_MENTORS_URL + "?populate=*" ; 
  //const URL = 'http://localhost:1337/api/mentors?populate=*' ; 
  console.log ( URL) ; 
  
  const res = await fetch(URL, {next : { revalidate : 10}});  

 
  if ( !res.ok) {
    throw new Error ( " Failed to fetch data from server") ; 
  }

  const data = await res.json() ; 
  const results = data.data ; 

  console.log( results) ; 

  return (
    <div className='px-5 py-5'> 
       <MentorResults results={results} />  
    </div>
    )
}
