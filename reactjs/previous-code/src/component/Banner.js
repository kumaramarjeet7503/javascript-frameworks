import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = ({end}) => {
  return (
    <div className='banner'>
            <Carousel fade>

                {
                end.map((item)=>(
                    <Carousel.Item >
                        <img 
                        className ="d-block w-100"
                        src={item.image}
                        alt="Not available"
                        />
                        <Carousel.Caption >
                        <h3>{item.name}</h3>
                        <p>{item.description}</p> 
                        </Carousel.Caption>
                        </Carousel.Item>

                        
                ))
                }

                </Carousel>
    </div>
  )
}

export default Banner