import React from 'react'
import { Link } from 'react-router-dom'
import '../style/hotaccessioriesmenu.css'

function HotAccessioriesMenu() {
  return (
    <div className='hotAccessMenu'>
        <Link to="/music" className='hotAccessLink'>Music Store</Link>
        <Link to="/devices" className='hotAccessLink'>Smart Devices</Link>
        <Link to="/home" className='hotAccessLink'>Home</Link>
        <Link to="/lifestyle" className='hotAccessLink'>Life Style</Link>
        <Link to="/mobileAccessories" className='hotAccessLink'>Moblie Accessories</Link>

    </div>

  )
}

export default HotAccessioriesMenu