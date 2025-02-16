import  Carousel  from 'react-bootstrap/Carousel'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Slider({start}) {
  return (
    <Carousel fade>

        {
        start.map((item)=>(
            <Carousel.Item >
                <img 
                className ="d-block w-100"
                src={item}
                alt="Not available"
                />
                 </Carousel.Item>
        ))
        }
   
    </Carousel>
  )
}

export default Slider