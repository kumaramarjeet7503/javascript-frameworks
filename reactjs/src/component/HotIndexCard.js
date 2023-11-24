import React from 'react'
import '../styles/hotItemCard.css'

function HotIndexCard({image,index,name,price}) {
  return (
    <div className='hotItemCard'>
        <img src={image} alt='cover' ></img>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotIndexCard