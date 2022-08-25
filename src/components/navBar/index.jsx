import React from 'react'
import { Link } from 'react-router-dom'
import FavouriteWidget from '../../favouriteWidget'
import './style.css'

const NavBar = () => {
  return (
    <header>
      <nav>
        <ol>
          <li className="navLink"><Link to='/home'>Home</Link></li>
          <li className="navLink"><Link to='/Genre/Action'>Action</Link></li>
          <li className="navLink"><Link to='/Genre/Adventure'>Adventure</Link></li>
          <li className="navLink"><Link to='/Genre/Comedy'>Comedy</Link></li>
          <li className="navLink"><Link to='/Genre/Family'>Family</Link></li>
          <li className="navLink"><Link to='/Genre/Fantasy'>Fantasy</Link></li>
          <li className="navLink"><Link to='/Genre/Sci-Fi'>Sci-Fi</Link></li>
        </ol>
      </nav>
      <FavouriteWidget />
    </header>
  )
}

export default NavBar