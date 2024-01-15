import React from 'react'

import { CiCreditCard2 } from "react-icons/ci";
import { FaTshirt } from "react-icons/fa";
import { CiRoute } from "react-icons/ci";
import { IoTimerSharp } from "react-icons/io5";

import { MdOutlineFreeBreakfast } from "react-icons/md";


export default function Inclusions ({results}) {
    console.log(  "results in inclusions is  " + JSON.stringify(results.data.attributes.inclusions)) 
    return (
     
      <div className="text-3xl text-amber-500 px-4 py-4">
        
        <div className= "flex">
          <div className="text-2xl text-black-900" > Inclusions : 
          </div> 
          
        { results.data.attributes.inclusions.map((result) => (
         
       <span class="bg-amber-100 text-black-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">{result.name}</span>

         
        ))}
      </div>
      </div>
    )
  }
  
