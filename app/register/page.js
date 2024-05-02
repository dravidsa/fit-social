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
export default function Register() {
    //const isSubmitDisabled = new Boolean(true)  ; 

   

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword ]  = useState('')
  //let errorMessage = "" ; 

  const isSubmitDisabled =
  !password ||
  !repassword ||
  password !== repassword ;

  const [errorMessage, setError] = React.useState('');
  //console.log ( "user is " + username + "pass is " + password )
  //const username1 = "sandeep.dravid@ford.com" 
  ///const password1 = "Sandeep@123"

    async function handleLogin() {
      console.log ( " in handle login ")
        const loginInfo = {
            username: username,
            password: password,
            email : username  , 
            role : "5"
        }
        //const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
        const REGISTER_USER_URL = process.env.NEXT_PUBLIC_BASE + "/api/users" ;
        console.log( "register URL now is  " + REGISTER_USER_URL) ; 
         
        const login = await fetch(REGISTER_USER_URL, {

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
          setError( "error while loggin in " + loginResponse.error.message )  ; 
          //errorMessage = "error while loggin in " + loginResponse.error.message  ; 
          console.log ( "error was " + loginResponse.error.message)
          //throw new Error ( " Login Failed ") ; 
        }
       else { 
       
      
       setError("Login Successful " ) ; 

       
      
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
    <div> 


<div class="w-full max-w-xs flex justify-center items-center py-4">
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  border-spacing-5  py-5">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Email
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={e => setUsername(e.target.value) }  />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Enter Password
    </label>
    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"  onChange={e => setPassword(e.target.value) }  />
   
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="repassword">
      Enter Password Again
    </label>
    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="repassword" type="password"  onChange={e => setRepassword(e.target.value) }  />
    <p class="text-red-500 text-xs italic">{errorMessage}</p>
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleLogin() }   disabled = {isSubmitDisabled} >
      Register
    </button>
    
  </div>
</form>
  </div> 
 
  </div>
  );
  }
