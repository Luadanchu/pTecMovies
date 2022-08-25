import React, { useContext, useState } from 'react'
import { FavList } from '../context/FavouriteContext'
import './style.css'

const MovieDetail = ({ movie }) => {

  const [count, setCount] = useState(0)
  const {addItemFav} = useContext(FavList)

  const handleAdd = () =>{
    addItemFav(movie, setCount(count + 1))
  }


  return (
    <div className='containerDetailMovie'>
      <div className='cardDetailMovie'>
        <picture>
          <img className='imgDetailMovie' src={movie.Poster} alt= {movie.Title} />
        </picture>
        <div className='textContainerDetailMovie'>
          <p className='titDetailMovie'>{movie.Title} - {movie.Year} </p>
          <p className='txtDetailMovie'>{movie.Plot}</p>
          <p className='PeopleDetailMovie'>Actors: {movie.Actors}</p>
          <p className='PeopleDetailMovie'>Director: {movie.Director}</p>
          <div className='txtEspDetailMovie'>
            <p>Rated: {movie.Rated}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Rating: {movie.Ratings}</p>
          </div>
          <button className='btnDetailMovie' onClick={() => handleAdd(count)} >Add to favourites</button>
        </div>
      </div>
      <iframe width='890' height='460' title={movie.Title} src={movie.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
  )
}

export default MovieDetail