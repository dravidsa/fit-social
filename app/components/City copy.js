"use client" 

import React from 'react'
import  useState  from 'react';

export  default async function City() {
/*

  const CITY_URL = process.env.CITY_URL ; 
  const URL = 'http://localhost:1337/api/cities' ; 

  console.log ( "cities  URL now is "+  CITY_URL) ; 
  
  const res = await fetch(URL, {next : { revalidate : 10}});  

  
  if ( !res.ok) {
    throw new Error ( " Failed to fetch cities data from server") ; 
  }

  const data = await res.json() ; 
  const results = data.data ; 

  console.log( "cities in main page "+ JSON.stringify	(results) ); 
  */

  
    const options = [
   
        { label: 'Pune', value: 'Pune' },
     
        { label: 'Mumbai', value: 'Mumbai' },
     
        { label: 'Kolhapur', value: 'Kolhapur' },
     
      ];
  

      /*
   
      const [value, setValue] = React.useState();
     
      //const [value, setValue] = useState("Pune");
     
      const handleChange = (event) => {
     
        setValue(event.target.value);
     
      };
     
*/    
      let value = "" ; 

      return (
     
        <div className = "px-6 flex items-center space-x-5">
     
          <label>
     
            
     
            <select value={value}>
     
              {results.map((result) => (
     
                <option value={result.attributes.name}>{result.attributes.name}</option>
     
              ))}
     
            </select>
     
          </label>
    
     
        </div>
     
      );
}
