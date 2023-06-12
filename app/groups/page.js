import React from 'react'

import Image from 'next/image'
import GroupResults from '../components/GroupResults'
export default async function Groups() {
  //const genre = searchParams.genre || "fetchTrending" 
  
  //console.log( API_KEY )  ; 
  const URL = 'http://localhost:1337/api/groups?populate=group_img,sports' ; 
  console.log ( URL) ; 
  
  const res = await fetch(URL, {next : { revalidate : 10}});  

  //const res = await fetch("https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1&api_key=d2c231a550db30d1d26c0f57b8ecf4b2");  

  /*
  ${
    genre === "fetchTopRated" ? "movie/top_rated" : 
    "trending/all/week?"
  }api_key=${API_KEY}&Language=en-US&Page=1`,
  { next : { revalidate : 10000}} 
  ) ; 
*/ 
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
