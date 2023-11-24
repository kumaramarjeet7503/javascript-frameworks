import React from 'react'
import ProductReview from './ProductReview.js'
import '../styles/ProductReview.css'

function ProductReviews({productReviews}) {
  return (
    <div className='productReviews'>
        {
            productReviews.map((item,index)=>{
              return <ProductReview key={item.name} image={item.image} name={item.name}  price = {item.price}  review= {item.review} />
            })
        }
        
    </div>
  )
}

export default ProductReviews