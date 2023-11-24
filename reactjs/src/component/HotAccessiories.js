import React from 'react'
import HotIndexCard from './HotIndexCard.js'
import '../styles/hotAccess.css'

function HotAccessiories({music,musicCover,device,deviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) {
  return (
    <div className='hotAccess'>
        <div>
            <img src={musicCover ||  musicCover ||  deviceCover || homeCover ||  lifestyleCover ||  mobileAccessoriesCover }></img>
        </div>
        <div>
            
                {music && music.map((item,index)=>{
                  return   <HotIndexCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  ></HotIndexCard>
                }) }
                { device && device.map((item,index)=>{
                  return   <HotIndexCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  ></HotIndexCard>
                }) }
                {home && home.map((item,index)=>{
                  return   <HotIndexCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  ></HotIndexCard>
                }) }
                { lifestyle && lifestyle.map((item,index)=>{
                  return   <HotIndexCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  ></HotIndexCard>
                }) }
                { mobileAccessories && mobileAccessories.map((item,index)=>{
                  return   <HotIndexCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  ></HotIndexCard>
                }) }
            
        </div>

    </div>
  )
}

export default HotAccessiories