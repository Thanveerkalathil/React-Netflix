import React, {useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[7])
      console.log(response.data.results.length)
      
      /* Right now useEffect will work after rendering the below returning html file */
    })
  }, [])
  
  return (
    <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name : ""}</h1>           
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview.slice(0,285) + '...' : ""}</h1>            
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner