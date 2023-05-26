"use client"
import React from 'react'
import {MdOutlineLightMode} from 'react-icons/md'
import {BsFillMoonFill} from 'react-icons/bs' 
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
    
    const { systemTheme  , theme , setTheme} = useTheme() ; 
    const currentTheme = theme === "system" ? systemTheme :theme; 
    
  return (
    <>
    { currentTheme === "dark" ? ( 
            <MdOutlineLightMode className='text-xl cursor-pointer hover:text-amber-500'onClick= { () => setTheme("light")} /> 
    ) : ( 
            <BsFillMoonFill className = 'text-xl cursor-pointer hover:text-amber-500' onClick= { () => setTheme("dark")}/> 
             )
    } 
    
    </>
  )
}
