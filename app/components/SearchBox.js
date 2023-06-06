"use client" ; 
import React from 'react'
import {useState} from 'react' 
import {useRouter} from 'next/navigation' ; 


export default function SearchBox() {
const [ search , setSearch ]  = useState("") ; 
const router = useRouter(); 

function handleSubmit (e) { 
    e.preventDefault() ; 
    console.log("search is ") 
    console.log(search); 
    if ( !search) return ; 
   
    router.push(`/search/${search}`) ; 

}
  return (
    <form onSubmit={handleSubmit} 
        className='flex max-w-6xl mx-auto  justify-between items-center px-5 '>
        <input 
        value={search}
        onChange={(e)=> setSearch(e.target.value) }
        type="text" placeholder='Search keywords.....' 
        className='w-full h-14 rounded-sm placeholder-grey-500 outline-none bg-transparent'/> 
        <button disabled={!search} type="submit" className='text-amber-700 disabled:text-gray-400'>Search</button> 
    </form>
  )
}
