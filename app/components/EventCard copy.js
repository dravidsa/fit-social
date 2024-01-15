import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
 


export default function EventCard({result}) {
   console.log( "event banner  is " + result.attributes.event_banner.data[0].attributes.url)
  
   
   return (
    <div className='cursor-pointer sm:p-1 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 flex'>
      <Link href={`/event/${result.id}`} >
        <Image 
        src={`http://localhost:1337${result.attributes.event_banner.data[0].attributes.url}` } 
      
        width={500} 
        height={300} 
        className="sm:rounded-t-lg"
        placeholder="blur"
        style = { { 
            maxWidth : "100%" ,
            height: "auto"
        }

        }
        blurDataURL="/spinner.svg"
        alt="Image not available"
        >
        </Image>
        <div className='p-2'>
            <h1 className='line-clamp-3 text-2xl '>{result.attributes.event_name}</h1>
            <h2 className='line-clamp-5'>{result.attributes.event_desc}</h2>
            <h2 className='line-clamp-5'>{result.attributes.event_date}</h2>
            
            
        </div>

      </Link>
    </div>
  )
}

