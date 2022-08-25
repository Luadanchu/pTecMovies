import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const ItemCat = ({ movie }) => {


  return (
    <Link to={`/detail/${movie.id}`}>
      <div className='cardMovie'>
        <img className='imgCardMovie' src={movie.Poster} alt={movie.Title} />
        <h4 className='titCardMovie'>{movie.Title}</h4>
      </div> 
    </Link>
  )
}

export default ItemCat