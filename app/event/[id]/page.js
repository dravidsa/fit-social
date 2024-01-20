
import React from 'react'
import MentorContact from "../../components/MentorContact"
import Hero from "../../components/Hero"
import Testimonial from "../..//components/Testimonial"
import Feature from "../../components/Feature"
import Service from "../../components/Service"
import Medialist from "../../components/Medialist"
import Events from '@/app/events/page'
import EventDetailCard from "../../components/EventDetailCard"

import AttendeeCatagories  from "../../components/AttendeeCatagories";
import EventCatagories  from "../../components/EventCatagories";
import Inclusions from "../../components/Inclusions";
import Instructions from "../../components/Instructions";



async function getEvent(event_id) { 
  
  const EVENT_URL = process.env.EVENT_URL + "/"+ event_id  + "?populate=*" ; 
  //const URL = `http://localhost:1337/api/events/${event_id}?populate=*` ; 
  console.log ( "new event URL is " + EVENT_URL ); 
  const res = await fetch ( EVENT_URL) ; 
  //const res = await fetch ( `https://localhost:1337/api/mentor/${mentorId}?api_key=${process.env.API_KEY}`) ; 
  return await res.json() ; 
}
export default async function EventPage({params}) {
const event_id = params.id ; 
let event ;  
event  = await getEvent(event_id)

  console.log ("event in eventPage  now  is  " + JSON.stringify(event) )   ; 
  return (
    <div> 
         <div className='text=bold text-4xl'>
        <center>{event.data.attributes.event_name}</center>
      </div>
    
  <div class=" px-4 py-4">
  
  <EventDetailCard result={event} /> 
  </div>

    
    
    
    <div  className="px-10 py-10" >
  

    <AttendeeCatagories results={event} /> 

    <EventCatagories results={event}/> 

    <Inclusions results={event}/>

    <Instructions results={event}/> 

    </div>
    </div> 
  ) } 
  
//console.log( "event in eventPage is  " + JSON.stringify(event.data.attributes.event_name) )  ; 
