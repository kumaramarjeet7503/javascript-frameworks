import React from 'react'
import '../styles/product.css'

function ProductReview({image,review,price,name}) {
  return (
    <div className='productReview' >
        <img src={image} alt='cover'></img>
        <h5 >{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReview