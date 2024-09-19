import React from 'react'
import Navbar  from './../../Navbar/navbar'
import ContactImg from './Contact.jpg';

function contact() {
  return (
    <div>
      <Navbar/>
      <h1 className='h1'>Contact</h1>

      <img src={ContactImg} className='common-img'/>
    </div>
  )
}

export default contact
