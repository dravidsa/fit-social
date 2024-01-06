import React from 'react'

import Image from 'next/image'
import DashResults from '../components/DashResults'
export default async function Events() {
  //const genre = searchParams.genre || "fetchTrending" 
  
  //console.log( API_KEY )  ; 
  const URL = 'http://localhost:1337/api/metric-stats?populate=image' ; 
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
    <>
    <div className='max-w-6x1 mx-auto space-y-4 p-6'> 
      <h1 className='text-lg font-medium text-black-600 space-x-4'>About </h1>  
     
      <p className = 'text-2x1 font-medium text-amber-600 space-x-4 '> 
        Fit Social is SAAS platform for enablement of Sprots and Fitness community . 
        It is an attempt to get like minded fitness lovers to come together to form groups , understand about the events happening in their areas , 
        register for the events and brag about their achievements. 
      </p>

      <p className = 'text-2x1 font-medium text-amber-600 space-x-4 '>
      It also is a place with mentors and trainers can showcase their skills to members . This platform will enable sports event managers to plan 
      and execute events right from concept to social media marketing , manage registrations , event day planing , race day pictures and results. 
      </p>
    </div> 
    


    <div> 
        <h1 className='text-lg font-bold place-text-center space-x-2 space-y-2 p-6'> FIT-Social at a glance </h1> 
       <DashResults results={results} />  
    </div>
    </>
    )
}
