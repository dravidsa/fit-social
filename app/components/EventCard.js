'use client'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  import Link from 'next/link'
  import Sports from "./Sports"

  export default function EventCard({result}) {
    console.log ( "in event card ") ;
    const BASE_URL = process.env.BASE_URL  ;  
    const IMAGE_URL = BASE_URL + result.attributes.event_banner.data[0].attributes.url ; 
    console.log( "image url is" + IMAGE_URL); 
    return (
    <Link href={`/event/${result.id}`} >  
      <Card className="w-full  flex-row space-y-4">
        <CardHeader
          shadow={true}
          floated={false}
          className="m-0 w-1/5 shrink-0 rounded-r-none px-2 py-4"
        >
          <img
           
            src={IMAGE_URL}
            //src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"            
            className="h-75 w-100  object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {result.attributes.event_name }
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {result.attributes.event_desc}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {result.attributes.event_date}
          </Typography>
          <div className="px-2 py-5">
          {result.attributes.event_sport_type}
          </div> 

          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
          
        </CardBody>
      </Card>
      </Link>
    );
  }