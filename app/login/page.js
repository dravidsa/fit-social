'use client'

import {useState} from 'react'
import React from 'react';
import getConfig from 'next/config'
import { setCookie } from 'nookies'
import Router from 'next/router'

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
//const { publicRuntimeConfig } = getConfig();
export default function App() {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //console.log ( "user is " + username + "pass is " + password )
  //const username1 = "sandeep.dravid@ford.com" 
  ///const password1 = "Sandeep@123"

    async function handleLogin() {
      console.log ( " in handle login ")
        const loginInfo = {
            identifier: username,
            password: password
        }
        //const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, 
        const LOGIN_URL = process.env.LOGIN_URL  ; 

        const login = await fetch( LOGIN_URL , {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
      
        console.log( "req is " + JSON.stringify(loginInfo))
        const loginResponse = await login.json()
        
        if ( !login.ok) {
          console.log ( "error is " + JSON.stringify(loginResponse) + "-"+ loginResponse.error.status)
          throw new Error ( " Login Failed ") ; 
        }
       else { 
       
      
       
       
      
        console.log ( "response is " , loginResponse)

        setCookie(null, 'jwt', loginResponse.jwt , {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          }
        )
        //const router = useRouter()
       // Router.push('/mentors') 
      }

    }




  return (
    <div className='flex justify-center items-center py-4'> 
 
<div class="w-full max-w-xs ">

<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  border-spacing-5 ">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Email
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={e => setUsername(e.target.value) }  />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"  onChange={e => setPassword(e.target.value) }  />
    <p class="text-red-500 text-xs italic">Please choose a password.</p>
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleLogin() }>
      Sign In
    </button>
    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      Forgot Password?
    </a>

   
  </div>
  <a class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-blue-800 px-2 py-2 " href="/register">
      Not a member? Click here to register
    </a>
</form>

  </div> 
 
  </div>
  );
  }
