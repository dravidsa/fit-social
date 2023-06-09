import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
 


export default function ExpertCard({result}) {
   console.log( "blog  is " + result.attributes.image.data[0].attributes.url)
  return (
    <div className='cursor-pointer sm:p-1 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/blog/${result.id}`} >
        <Image 
        src={`http://localhost:1337${result.attributes.image.data[0].attributes.url}` } 
      
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
            <p className='line-clamp-3'>{result.attributes.title}</p>
            <h2 className='line-clamp-5'>{result.attributes.content}</h2>
            
            
        </div>

      </Link>
    </div>
  )
}
