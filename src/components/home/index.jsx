import React from 'react'
import Footer from '../footer'
import NavBar from '../navBar'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Home = () => {

  const Nav = useNavigate()

  const handleAction = () =>{
    Nav('/Genre/Action')
  }
  const handleAdventure = () =>{
    Nav('/Genre/Adventure')
  }
  const handleComedy = () =>{
    Nav('/Genre/Comedy')
  }
  const handleFamily = () =>{
    Nav('/Genre/Family')
  }
  const handleSciFi = () =>{
    Nav('/Genre/Sci-Fi')
  }


  return (
    <div className='containerGralHome'>
      <NavBar />
      <h1 className='titHome'>Movies Streaming</h1>
      <div className='cardCategorycontainer'>
          <div className='cardCategory action' onClick={ handleAction }>
            <h3 className='cardTxtCategory'>Action</h3>
          </div>
          <div className='cardCategory adventure' onClick={ handleAdventure }>
          <h3 className='cardTxtCategory'>Adventure</h3>
          </div>
          <div className='cardCategory comedy' onClick={ handleComedy }>
            <h3 className='cardTxtCategory'>Comedy</h3>
          </div>
          <div className='cardCategory family' onClick={ handleFamily }>
            <h3 className='cardTxtCategory'>Family</h3>
          </div>
          <div className='cardCategory scifi' onClick={ handleSciFi }>
            <h3 className='cardTxtCategory'>Sci-Fi</h3>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home