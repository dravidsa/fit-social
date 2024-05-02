import React from 'react'

import Image from 'next/image'
import GroupResults from '../components/GroupResults'
export default async function Groups() {
  //const genre = searchParams.genre || "fetchTrending" 
  
  //console.log( API_KEY )  ; 
  console.log ( "Base URL IS " + process.env.NEXT_PUBLIC_BASE ) ; 
  
  const URL = process.env.NEXT_PUBLIC_GROUPS_URL + "?populate=*" ; 

  console.log ( "groups URL is " + URL) ; 

  //const URL = 'http://localhost:1337/api/groups?populate=group_img,sports' ; 
   
  
  const res = await fetch(URL, {next : { revalidate : 10}});  

  
  if ( !res.ok) {
    throw new Error ( " Failed to fetch data from server") ; 
  }

  const data = await res.json() ; 
  const results = data.data ; 

  console.log( results) ; 

  return (
    <div> 
       <GroupResults results={results} />  
    </div>
    )
}
