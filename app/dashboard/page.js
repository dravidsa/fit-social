import React from 'react'

import Image from 'next/image'
import DashResults from '../components/DashResults'
import DashCard from '../components/DashCard';
import SiteFeatures from '../components/SiteFeatures'

import EventDetailCard  from '../components/EventDetailCard';

async function getEvent(event_id) { 
  
  const EVENT_URL = process.env.EVENT_URL + "/"+ event_id  + "?populate=*" ; 
  //const URL = `http://localhost:1337/api/events/${event_id}?populate=*` ; 
  console.log ( "new event URL is " + EVENT_URL ); 
  const res = await fetch ( EVENT_URL) ; 
  //const res = await fetch ( `https://localhost:1337/api/mentor/${mentorId}?api_key=${process.env.API_KEY}`) ; 
  //console.log( "returning this event" + JSON.stringify(res.json())) ; 
  return await res.json() ; 
}


export default async function Home() {
  //const genre = searchParams.genre || "fetchTrending" 
  
  //console.log( API_KEY )  ; 
  //const URL = 'http://localhost:1337/api/metric-stats?populate=image' ; 
  const ABOUT_URL = process.env.BASE_URL  + "/api/home-pages?populate=*" ;
  //const tmp = process.env.CITY_URL ; 
  console.log ( "home is "+ ABOUT_URL ) ; 
  
  const res = await fetch(ABOUT_URL, {next : { revalidate : 10}});  


  if ( !res.ok) {
    throw new Error ( " Failed to fetch data from server ") ; 
  }

  const results  = await res.json() ; 
  //const results = data.data ; 
  const about_image =  results.data[0].attributes.about_image.data[0].attributes.url ; 
  console.log ( "about image is "+ about_image ) ; 
  const imageURL = process.env.BASE_URL + about_image ; 


  console.log( "home is "+ JSON.stringify(results))  ; 


  const STATS_URL = process.env.BASE_URL  + "/api/metric-stats?populate=*" ;
  //const tmp = process.env.CITY_URL ; 
  console.log ( "home is "+ STATS_URL ) ; 
  
  const res_stats = await fetch(STATS_URL, {next : { revalidate : 10}});  


  if ( !res_stats.ok) {
    throw new Error ( " Failed to fetch data from server") ; 
  }

  const data_stats = await res_stats.json() ; 
  const results_stats = data_stats.data ; 

  console.log( "metric stats is "+ JSON.stringify(results_stats))  ; 
  console.log ( "event in focus is "  + results.data[0].attributes.event.data.id  )  ; 
  
  const event_id = results.data[0].attributes.event.data.id  ; 
  const event = await getEvent(event_id)  ; 
  event && console.log( "event found in dashboard" + JSON.stringify(event)) ; 
  



  return (
    <>
    <div className='w-75 space-y-4 p-6'> 
     

      
  <a href="#" class="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src= {imageURL} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{results.data[0].attributes.title } </h5>
        <p class="text-2xl font-normal text-amber-700 dark:text-gray-400">{results.data[0].attributes.about } </p>
    </div>
</a>


<div> 
        <h1 className='text-lg font-bold place-text-center space-x-2 space-y-2 p-6'> FIT-Social at a glance </h1> 
       <DashResults results={results_stats} />  
    </div>
    
    </div> 
    

    <div> 
       <SiteFeatures siteFeatures={results} />  
    </div>
     
     <div className= "px-5 py-5"> 
      <EventDetailCard result={event} />
   
    </div>
    
    </>
    )
}
