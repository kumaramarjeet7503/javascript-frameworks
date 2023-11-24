import React from 'react'
import '../styles/NavCard.css'

const NavCard = ({image,name,price}) => {
  return (
    <div className='navCard'>
        <img src={image} alt='cover'></img>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard