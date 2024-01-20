import React from 'react'
import MentorContact from "../../components/MentorContact"
import Hero from "../../components/Hero"
import Testimonial from "../..//components/Testimonial"
import Feature from "../../components/Feature"
import Service from "../../components/Service" 
import Medialist from "../../components/Medialist"


async function getMentor(mentor_id) {  
  const MENTORS_URL = process.env.BASE_URL + "/api/mentors/"+ mentor_id + "?populate=*"
  //const URL = `http://localhost:1337/api/mentors/${mentor_id}?populate=*` ; 
  console.log ( "URL is " + MENTORS_URL ); 
  const res = await fetch ( MENTORS_URL) ; 
  //const res = await fetch ( `https://localhost:1337/api/mentor/${mentorId}?api_key=${process.env.API_KEY}`) ; 
  return await res.json() ; 
}
export default async function MentorPage({params}) {
const mentor_id = params.id ; 
const mentor = await getMentor(mentor_id)  ;
console.log( "mentor is  " + JSON.stringify(mentor)) ; 

  return (
    <div> 
    <div className='text=bold text-4xl'>
      <center>{mentor.data.attributes.mentor_name}</center>

  </div>
  
  
  <div>
    <Hero mentor={mentor}/>
  </div>
  <div>
    <Feature mentor={mentor}/>
  </div>
  <div>
    <Testimonial mentor={mentor}/>
  </div>
  <div>
    <Medialist mentor={mentor}/>
  </div>
  </div>
  )
}
