import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {GiPriceTag} from 'react-icons/Gi'


export default function EventCard({result}) {
  console.log( "sport is " + result.attributes.event_banner.data[0].attributes.url)
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
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
            <p className='line-clamp-3'>{result.attributes.event_name}</p>
            
            
            <p className='flex items-center'>
              <GiPriceTag className='h-5 mr-1 ml-3 items-center'/> {result.attributes.event_price || 'Free'}  </p> 
          
             <p className='item-center'> 
             </p>
        </div>

      </Link>
    </div>
  )
}
