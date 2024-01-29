'use client'

import React from 'react'


import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function SiteFeature({siteFeatures}) {
  console.log ( "data in site feature is " + JSON.stringify(siteFeatures)); 

  //const features = mentor.data.attributes.features[0].description;  
  //console.log( "features are " , features) ; 

  return (
    <>
    <div className="flex justify-center items-center py-5 px-5 ">
      <span class="bg-blue-400 text-black-800 text-2xl font-medium me-2 rounded dark:bg-gray-700  dark:text-yellow-300 border border-yellow-300 justify-center px-2 py-2 ">Features</span> 
    </div>
    <div className='flex justify-center space-x-5'> 
   
   

    {siteFeatures.data[0].attributes.features.map((feature) => (
      
      <Card className="mt-6 w-96 px-2 py-2 ">
        <CardBody>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 text-gray-900"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
          <Typography variant="h5" color="blue-gray" className="mb-2 justify-center bg-blue-gray-200">
            {feature.name}
          </Typography>
          <Typography>
            {feature.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
      ))
    }
    </div> 
    </>
  )
}   
  