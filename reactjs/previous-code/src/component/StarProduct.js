import React from 'react'
import '../styles/starProduct.css'
function StarProduct({product}) {
  return (
    <div className='starProducts' >
        <div >
            <a ><img src={product[0].image}></img></a>
        </div>
        <div >
            <a ><img src={product[1].image}></img></a>
            <a ><img src={product[2].image}></img></a>
            <a ><img src={product[3].image}></img></a>
        </div>
    </div>
  )
}

export default StarProduct