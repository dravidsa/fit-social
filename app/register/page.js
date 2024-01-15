'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react"
import axios from "axios";



async function registerForEvent(data)  {
    console.log ( "full name is ",  data.full_name ) ; 
/*
 const results = await axios({
        method: 'POST',
        url: 'http://localhost:1337/api/event_enrollments', 
        data :  { 
            full_name : data.full_name , 
            contact_number : data.mobile , 
            email : data.email 

        }
      });
*/
  
    const result = await  axios.post("http://localhost:1337/api/event-enrollments/", {
           data  : {  full_name : data.full_name ,
                    email : data.email , 
                    contact_number : data.mobile , 
                    attendee_catagory : "general" , 
                    event_catagory : data.race_cat ,
                    gender : data.gender , 
                    address:  data.address ,
                    event : { data :  { id : 3 } } 
                 } 

        },   { headers: new Headers({'content-type': 'application/json'} ) }    
     ) ;
 

    console.log( "result is ", result ) ; 
    } 
  
 


const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm() ; 
    

  /*
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        full_name: 'Enter full name',
        email: 'Enter email',
        address : 'Enter your address',
        mobile : 'Enter mobile number'
    },
  })    ;

  */ 


  const  handleRegistration = (data) => { console.log(data);
  console.log ( "going to call azios api now "); 
  registerForEvent(data)  ; 

  } 


  const handleError = (errors) => {console.log( "ërror here " + errors )};



  const registerOptions = {
    full_name: { required: "Full Name is required" },
    email: { required: "Email is required" },
    address : { required : "address is required"} , 
    mobile : { required : "mobile number is required " , minLength : { value : 10 , message  : "mobile number must be 10 digits"}}   ,
    race_cat  : { required : "race category is required"} , 
    gender : { required : "gender is required"}
  };

  const [race_cat, setRace] = useState("10k")
  const [gender, setGender] = useState("male")

  const onOptionChange = e => {
    console.log( "race option changed" )
    setRace(e.target.value)
  } 
  const onGenderChange = e =>{ 
    console.log ( "Gender option changed ")
    setGender(e.target.value) 
  }

  return (
    <div className="text-2xl px-5 py-5 w-full" > 
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <label>Name  </label>
        <input name="full_name" type="text" {...register('full_name', registerOptions.full_name) }/>
        <small className="text-danger">
          {errors?.full_name && errors.full_name.message}
        </small>
      </div>
      <div>
        <label>Email  </label>
        <input
          type="text"
          name="email"
          {...register('email', registerOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          {...register('address', registerOptions.address)}
        />
        <small className="text-danger">
          {errors?.address && errors.address.message}
        </small>
      </div>
      <div>
        <label>Mobile</label>
        <input
          type="text"
          name="mobile"
          {...register('mobile', registerOptions.mobile)}
        />
        <small className="text-danger">
          {errors?.mobile && errors.mobile.message}
        </small>
      </div><br /> 

    <div className="App">
      <h3>Select race category</h3>

      <input
        type="radio"
        name="race_cat"
        value="5k"
        id="5k"
        checked={race_cat === "5k"}
        onChange={onOptionChange}
        {...register('race_cat', registerOptions.race_cat)}
      
      />
      <label htmlFor="5k">5 KM</label>

      <input
        type="radio"
        name="race_cat"
        value="10k"
        id="10k"
        checked={race_cat === "10k"}
        onChange={onOptionChange}
        {...register('race_cat', registerOptions.race_cat)}
      />
      <label htmlFor="10k">10 KM</label>

      <input
        type="radio"
        name="race_cat"
        value="21k"
        id="21k"
        checked={race_cat === "21k"}
        onChange={onOptionChange}
        {...register('race_cat', registerOptions.race_cat)}
      />
      <label htmlFor="21k">21 KM</label><br />

      <h3>Select Gender</h3>

<input
  type="radio"
  name="gender"
  value="female"
  id="female"
  checked={gender === "female"}
  onChange={onGenderChange}
 
/>
<label htmlFor="female">Female</label>

<input
  type="radio"
  name="gender"
  value="male"
  id="male"
  checked={gender === "male"}
  onChange={onGenderChange}
/>
<label htmlFor="male">Male</label>



    </div><br /> 



      <button>Submit</button>
      
    </form>

    <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  border-spacing-5">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
    </div> 
    <div>

<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
    </div>
  </div>
</form>


    </div>


    
    </div>
  );
};


export default Register;