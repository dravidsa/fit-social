import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
 


export default function GroupCard({result}) {
   //console.log( "sport is " + result.attributes.sports.data[0].attributes.sport_name)
   const BASE_URL=process.env.BASE_URL  ; 
   const IMAGE_URL= BASE_URL + result.attributes.group_img.data[0].attributes.url ; 
  return (
    <div className='flex cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/group/${result.id}`} >
        <Image 
        src={IMAGE_URL } 
      
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
            <p className='line-clamp-3'>{result.attributes.group_name}</p>
            <h2 className='line-clamp-3'>{result.attributes.group_desc}</h2>
            
            <p className='flex items-center'>
              <FiUsers className='h-5 mr-1 items-center text-green-400'/> {result.attributes.noMembers}  </p> 
          
             <p className='item-center text-amber-300'> {result.attributes.sports.data[0].attributes.sport_name}
             </p>
        </div>

      </Link>
    </div>
  )
}
