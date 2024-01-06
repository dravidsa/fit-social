import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {GiPriceTag} from 'react-icons/Gi'


export default function DashCard({result}) {
  console.log( "sport is " + result.attributes.image.data.attributes.url)
  return (
   <div>
    
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
       
      <Link href={`/event/${result.id}`} >
        <Image 
        src={`http://localhost:1337${result.attributes.image.data.attributes.url}` } 
      
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
        <div className='p-2 flex'>
            <p className='line-clamp-3 p-2'>{result.attributes.metric}</p>
            
            
    
              <h1 className='p-2'>{result.attributes.value } </h1> 
              
             <p className='item-center'> 
             </p>
        </div>

      </Link>
    </div>
    </div> 

  )
}
