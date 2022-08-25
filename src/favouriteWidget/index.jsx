import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { FavList } from '../context/FavouriteContext'
import './style.css'

const FavouriteWidget = () => {

  const Nav = useNavigate()
  const {favItems} = useContext(FavList)

  const handleFav = () =>{
    Nav('/favourites')
  }

  return (
    <div>
        <FaHeart size={30} className='FavIcon' onClick={ handleFav } />
        {(favItems.length  > 0) ? <span className='spanFavItems'>{favItems.length}</span> : ' '}
    </div>
  )
}

export default FavouriteWidget