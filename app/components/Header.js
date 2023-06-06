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

import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between mx-2 mx-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title="HOME" address="/" Icon={AiFillHome} /> 
        <MenuItem title="About" address="/about" Icon={AiFillInfoCircle} />
        <MenuItem title="Events" address="/events" Icon={MdEmojiEvents} />
        <MenuItem title="Groups" address="/groups" Icon={MdGroups2} />
        <MenuItem title="Marketplace" address="/market" Icon={AiOutlineShoppingCart} />
        <MenuItem title="Expert Corner" address="/experts" Icon={GrUserExpert} />
        <MenuItem title="Fitness Wallet" address="/wallet" Icon={AiFillWallet} />
       </div>

       <div className='px-6 flex items-center space-x-5'>
      <DarkModeSwitch /> 

      <Link href="/">
        <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-1 rounded-lg mr-1'>FIT</span>
        <span className='text-xl hidden : sm:inline'>Social</span></h2>
      </Link>

      </div>
      
    </div>
  )
}
