import React from 'react'
import '../styles/footer.css'

const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"/></svg> ;
const sheldIcon =  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg> ;
const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"/></svg> ;

const Footer = ({footer}) => {
  return (
    <div className='footer'>
        <div className='preFooter1'>
            <div>
            {repeatIcon}
            <p><b>Hassle free payment</b> <br/>10 days easy replacement policy on mi.co</p>
            </div>
            <div>
            {sheldIcon}
            <p><b>We support card, EMI and EOD</b><br/>100% secure payment</p>
            </div>
            <div>
            {mapIcon}
            <p><b>Availaible across the globe</b><br/>MI Centers are available across 600 cities</p>
            </div>
        </div>
        <div className='footer-block'>
            <div>
            <p>Support</p> 
            {footer.support.map((item)=>{ return <a href= {item.url} >{item.name} </a>})}
            </div>
            <div>
            <p>Shop And Learn </p>
            {footer.shopAndLearn.map((item)=>{ return <a href= {item.url} >{item.name} </a>})}
            </div>
            <div>
            <p>Retail Store </p>
            {footer.retailStore.map((item)=>{ return <a href= {item.url} >{item.name} </a>})}
            </div>
            <div>
            <p>About Us</p>
            {footer.aboutUS.map((item)=>{ return <a href= {item.url} >{item.name} </a>})}
            </div>
            <div>
                <p>Contact Us</p>
            {footer.contactUs.map((item)=>{ return <a href= {item.url} >{item.name} </a>})}
            </div>
            <div>
            <div style={{color:'grey',margin :'0.5vmax'}}>Chat with out Virtual AI Bot(24/7 Live Agent Support)</div><button>Chat Now</button>
            </div>
        </div>
        <div className='footer-end' style={{background : "black",color:"grey", padding : '0.7vmax'}}>
            <div >
                Copyright @2010 - 2021 Xiaomi. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer