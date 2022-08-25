import React, { useContext } from 'react'
import { FavList } from '../../context/FavouriteContext'
import { FaTrash } from 'react-icons/fa'
import NavBar from '../navBar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import './style.css'

const Favourites = () => {

  const {favItems, removeItem, clear} = useContext(FavList);
  

  return (
    <div className='containerGralFav'>
      <NavBar />
      <div className='containerFav'>
        {(favItems.length)  < 1 ?
          (
          <div className='contentEmptyFav'>
            <h3 className='titEmptyFav'>Your favourite list it's empty</h3>
            <button className='btnBackFav'><Link to='/home'>Back Home</Link></button>
          </div>
          ) :
          <> {favItems.map (movie => ( 
            <Link to={`/detail/${movie.id}`} key={movie.id}>
              <div className='contentItemFav'>
                <div className='itemFav' >
                  <img className='imgFav' src={movie.Poster} alt= {movie.Title} />
                  <p className='txtItemFav'>{movie.Title} - {movie.Year}</p>
                  <button>
                  <FaTrash size={23} color='#000084' onClick={() => removeItem(movie)} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
          </>
        }
      </div>
      <button className='btnClearFav' onClick={clear}>Clear Favourites</button>
      <Footer />
    </div>
  )
}

export default Favourites