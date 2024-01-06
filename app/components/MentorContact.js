import React from 'react'

export default function MentorContact({mentor}) {
    console.log ( "data in card is " + JSON.stringify(mentor))
    
    const name = mentor.data.attributes.mentor_name ; 
    const desc = mentor.data.attributes.mentor_desc ; 
    console.log(  "Desc is " + desc ) ; 
     const email = mentor.data.attributes.email ;
    const contact = mentor.data.attributes.contact ; 
    const address = mentor.data.attributes.address ; 
    const city = mentor.data.attributes.city ; 
    const headline = mentor.data.attributes.headline ;
    const state = mentor.data.attributes.state ; 
    //const image_url =  mentor.data.attributes.mentor_img.data[0].attributes.url
    //console.log ( "image is " + image_url ) ; 
        return (
            <div
            className="flex w-full rounded-lg  md:max-w-xl md:flex-row px-5 -y-5 ">
            <img
              className="w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src=  "https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" 
              alt="" />
            <div className="flex flex-col justify-start p-6">
              <h5
                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {headline}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {desc}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
                Last updated 3 mins ago
              </p>
            </div>
          </div>
        );
      }

    


