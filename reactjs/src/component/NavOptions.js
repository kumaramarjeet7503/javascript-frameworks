import {useState,useEffect}  from 'react'
import NavCard from '../component/NavCard.js'
import '../styles/navOptions.css'



 const NavOptions = ({miPhones,redmiPhones,tv,laptop,fitness,home,audio,accessories}) => {

    const [miPhoneToggle, setmiPhoneToggle] = useState(false)
    const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false)
    const [tvToggle, settvToggle] = useState(false)
    const [laptopToggle, setlaptopToggle] = useState(false)
    const [fitnessToggle, setfitnessToggle] = useState(false)
    const [homeToggle, sethomeToggle] = useState(false)
    const [audioToggle, setaudioToggle] = useState(false)
    const [accessoriesToggle, setaccessoriesToggle] = useState(false)

        useEffect(()=> {
            if(window.location.pathname === "/miphones")
            {
                return setmiPhoneToggle(true)
            }
            if(window.location.pathname === "/redmiphones")
            {
                return setredmiPhonesToggle(true)
            }
            if(window.location.pathname === "/tv")
            {
                return settvToggle(true)
            }
            if(window.location.pathname === "/home")
            {
                return sethomeToggle(true)
            }
            if(window.location.pathname === "/fitness")
            {
                return setfitnessToggle(true)
            }
            if(window.location.pathname === "/audio")
            {
                return setaudioToggle(true)
            }
            if(window.location.pathname === "/accessories")
            {
                return setaccessoriesToggle(true)
            }
            if(window.location.pathname === "/laptop")
            {
                return setlaptopToggle(true)
            }
        },[])

  return (
    <div className='navOptions'>
        { miPhoneToggle ? miPhones.map((item)=> {
            return <NavCard name={item.name} price={item.price} image={item.image} key={item.name} ></NavCard>
        }) : null }
                { redmiPhonesToggle ? redmiPhones.map((item)=> {
            return <NavCard name={item.name} price={item.price} image={item.image} key={item.name} ></NavCard>
        }) : null }
                { tvToggle ? tv.map((item)=> {
            return <NavCard name={item.name} price={item.price} image={item.image} key={item.name} ></NavCard>
        }) : null }
                { laptopToggle ? laptop.map((item)=> {
           return <NavCard name={item.name} price={item.price} image={item.image} key={item.name} ></NavCard>
        }) : null }
                { fitnessToggle ? fitness.map((item)=> {
          return  <NavCard name={item.name} price={item.price} image={item.image} key={item.name} ></NavCard>
        }) : null }
                { homeToggle ? home.map((item)=> {
           return <NavCard name={item.name} price={item.price} image={item.image} key={item.name} ></NavCard>
        }) : null }
                { audioToggle ? audio.map((item)=> {
           return <NavCard name={item.name} price={item.price} image={item.image} key={item.name} ></NavCard>
        }) : null }
                        { accessoriesToggle ? accessories.map((item)=> {
           return <NavCard name={item.name} price={item.price} image={item.image} key={item.name} ></NavCard>
        }) : null }
    </div>
  )
}

export default NavOptions