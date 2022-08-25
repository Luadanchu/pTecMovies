import React from 'react'
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className='footerContent'>
        <BsInstagram size={40} />
        <BsTwitter size={40} />
        <BsWhatsapp size={40} />
      </div>
    </footer>
  )
}

export default Footer