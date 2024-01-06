'use client'
import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons'
import {AiFillInfoCircle} from 'react-icons/ai' 
import {MdEmojiEvents} from 'react-icons/md' ; 
import {MdGroups2} from 'react-icons/md'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GrUserExpert} from 'react-icons/gr' 
import {AiFillWallet} from 'react-icons/ai'
import {MdForum} from 'react-icons/Md'
import City from './City'
import  {useRouter} from 'next/router'

import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
import { GiConsoleController } from 'react-icons/gi'

function handleLogin() {
  console.log ( "going  for login ") 
  const router = useRouter();
 

  const handleLOgin = () => {
    router.push('/login');
  };
}
export default function Header() {
  return (

    
    <div className='flex justify-between mx-2 mx-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>

      <Link href="/">
        <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-1 rounded-lg mr-1'>FIT</span>
        <span className='text-xl hidden : sm:inline'>Social</span></h2>
      </Link>

        <MenuItem title="Home" address="/dashboard" Icon={AiFillHome} /> 
        <MenuItem title="Mentors" address="/mentors" Icon={AiFillInfoCircle} />
        <MenuItem title="Events" address="/events" Icon={MdEmojiEvents} />
        <MenuItem title="Groups" address="/groups" Icon={MdGroups2} />
        <MenuItem title="Marketplace" address="/market" Icon={AiOutlineShoppingCart} />
        <MenuItem title="Expert Corner" address="/experts" Icon={GrUserExpert} />
        <MenuItem title="Fitness Wallet" address="/wallet" Icon={AiFillWallet} />
        <MenuItem title="Forum" address="/discussion" Icon={MdForum} />
       </div>

      

       <div className='px-6 flex items-center space-x-5'>
      <DarkModeSwitch /> 

      <City />
      <Link href="/login">
      <span className='text-xl hidden : sm:inline'>Login</span>
        </Link> 

     
      </div>
      
    </div>
  )
}
