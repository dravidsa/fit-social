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
        //const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
        const login = await fetch(`http://localhost:1337/api/auth/local`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
      
        if ( !login.ok) {
          throw new Error ( " Login Failed ") ; 
        }
      
        console.log( "req is " + JSON.stringify(loginInfo))
      
        const loginResponse = await login.json()
        console.log ( "error is " + JSON.stringify(loginResponse) + "-"+ loginResponse.error.status)
      
        console.log ( "response is " , loginResponse)

        setCookie(null, 'jwt', loginResponse.jwt , {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        }
        )
        //const router = useRouter()
        Router.push('/mentors') 

    }




  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' onChange={e => setUsername(e.target.value) }  label='Email address' id='username' type='email'/>
      <MDBInput wrapperClass='mb-4' onChange={e => setPassword(e.target.value) } label='Password' id='password' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4"  onClick={() => handleLogin() }>Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
 
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  );
  }
