import React from 'react'


function Offer({src,link,index}) {
  return (
    <a href={link}>
        <img src={src} alt={index} ></img>
    </a>
  )
}

export default Offer