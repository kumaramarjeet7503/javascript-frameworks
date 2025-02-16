import React from 'react'
import '../styles/videos.css'
import VideoCard from '../component/VideoCard.js'

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
        videos.map((item,index)=>
        {
          return  <VideoCard key ={index} name={item.name}  image = {item.image} ></VideoCard>
        })
        }
    </div>
  )
}

export default Videos