import React from 'react'

export default function Hero({mentor}) {
  const hero_image = mentor.data.attributes.hero_image.data[0].attributes.url ;
  console.log ( "image is " + JSON.stringify(mentor.data.attributes.mentor_img)) ; 

  const mentor_image =  mentor.data.attributes.mentor_img.data[0].attributes.url ; 
  console.log( "hero image is " + hero_image) ; 
  const hero_full_url = "http://localhost:1337" + mentor_image ; 
  const name = mentor.data.attributes.mentor_name ; 
  const desc = mentor.data.attributes.mentor_desc ; 
  console.log(  "Desc is " + desc ) ; 
   const email = mentor.data.attributes.email ;
  const contact = mentor.data.attributes.contact ; 
  const address = mentor.data.attributes.address ; 
  const city = mentor.data.attributes.city ; 
  const headline = mentor.data.attributes.headline ;
  const state = mentor.data.attributes.state ; 


  return (
    <div className="w-screen h-screen text-white" style={{
      background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
    }}>
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img class="w-50 lg:w-2/6 md:w-3/6  mb-10 object-cover object-center" alt="hero" src={hero_full_url} />
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            {headline}
          </h1>
          <p className="text-2xl mb-8">
            {desc}
          </p>
          <div className="flex justify-center mx-auto">
            <button
              className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              View Projects
            </button>
            <button
              className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Plugins
            </button>
          </div>
        </div>
      </div>
    </div >
  ); 
}