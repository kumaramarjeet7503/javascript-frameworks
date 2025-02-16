import React from 'react'
import Offer from './Offer.js'
import '../styles/Offer.css'

function Offers({offer}) {
  return (
    <div className='offerSection'>
        {
            offer.map((item,index)=> (
                <Offer key={item.image} src={item.image} link={item.url} />
            ))
        }
    </div>
  )
}

export default Offers