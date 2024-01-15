import React from 'react'
import Image from 'next/image'


async function getMovie(movieId) { 
    const res = await fetch ( `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`) ; 
    return await res.json() ; 
}
export default async function MoviePage({params}) {
 const movieId = params.id ; 
const movie = await getMovie(movieId)  ;


return (
    <div className='w-full'>
       <div className='p-4 md:gt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto  '>    
       <Image 
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
        width={500} 
        height={300} 
        className="sm:rounded-t-lg"
        placeholder="blur"
        style = { { 
            maxWidth : "100%" ,
            height: "100%"
        }

        }
        blurDataURL="/spinner.svg"
        alt="Image not available"
        >
        </Image>
        <div className='p-2'>
            <h2 className='text-lg mg-3  font-bold'> {movie.title || movie.name} </h2>
            <p className='text-lg mb-3'><span className='font-semibold mr-1 '>Overview : </span>
            {movie.overview}
            </p>
            <p><span className='font-semibold' >Date Released:</span>
            {movie.release_date}
            </p>
            <p><span className='font-semibold' >Rating:</span>
            {movie.vote_count}
            </p>
        </div>
       </div>

    </div>
  )
}
