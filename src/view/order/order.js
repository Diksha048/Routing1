import React from 'react'
import Navbar from './../../Navbar/navbar'
import OrderImg from './Order.jpg';

function order() {
  return (
    <div>
      <Navbar/>
      <h1 className='h1'>Order</h1>

      <img src={OrderImg} className='common-img'/>
    </div>
  )
}

export default order
