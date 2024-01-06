"use client" 

import React from 'react'

export default function City() {

    const options = [
   
        { label: 'Pune', value: 'Pune' },
     
        { label: 'Mumbai', value: 'Mumbai' },
     
        { label: 'Kolhapur', value: 'Kolhapur' },
     
      ];
     
      const [value, setValue] = React.useState('fruit');
     
      const handleChange = (event) => {
     
        setValue(event.target.value);
     
      };
     
      return (
     
        <div classnAme = "px-6 flex items-center space-x-5">
     
          <label>
     
            
     
            <select value={value} onChange={handleChange}>
     
              {options.map((option) => (
     
                <option value={option.value}>{option.label}</option>
     
              ))}
     
            </select>
     
          </label>
    
     
        </div>
     
      );
}
