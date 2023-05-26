import React from 'react'
import MenuItem from './MenuIIem'
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons'
import {AiFillInfoCircle} from 'react-icons/ai' 
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between mx-2 mx-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title="HOME" address="/" Icon={AiFillHome} /> 
        <MenuItem title="About" address="/about" Icon={AiFillInfoCircle} />
       </div>

       <div className=''>
        
      <Link href="/">
        <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-1 rounded-lg mr-1'>FIT</span>
        <span className='text-xl hidden : sm:inline'>Social</span></h2>
      </Link>

      </div>
      
    </div>
  )
}
