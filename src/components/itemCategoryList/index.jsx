import React from 'react'
import ItemCat from '../itemCat'
import './style.css'

const ItemCategory = ({ movies }) => {
  return (
    <div className='cardMovieContainer'>
      {movies.map(movie => <ItemCat key={movie.id} movie={movie} /> )}
    </div>
  )
}

export default ItemCategory