import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {GiPriceTag} from 'react-icons/Gi'


export default function EventCard({result}) {
  console.log( "sport is " + result.attributes.event_banner.data[0].attributes.url)
  return (
    /*
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
    */
<div> 
<div>
<section class="text-gray-600 body-font">
  <div class="container mx-auto  px-5 py-24  items-center">
    <div class="flex">
      <h1 class="">Before they sold out </h1> 
     
 
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={`http://localhost:1337${result.attributes.event_banner.data[0].attributes.url}` }  />
    </div>
  </div>
</section>
</div>   




    </div>
  )
}
