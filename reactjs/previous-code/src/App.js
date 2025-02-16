import './App.css';
import PreNav from './component/PreNav';
import NavBar from './component/NavBar.js';
import {BrowserRouter as Router, Routes} from "react-router-dom"
import Slider from "./component/Slider.js"
import data from "./data/data.json"
import Offers from "./component/Offers.js"
import Heading from "./component/Heading.js"
import StarProduct from "./component/StarProduct.js"
import HotAccessioriesMenu from "./component/HotAccessioriesMenu.js"
import {Route } from 'react-router-dom'
import HotAccessiories from "./component/HotAccessiories.js"
import ProductReviews from "./component/ProductReviews.js"
import Videos from './component/Videos.js'
import Banner from './component/Banner.js'
import Footer from './component/Footer.js'
import NavOptions from './component/NavOptions.js'

function App() {
  return (
    <Router className="App">
     
      <PreNav />
      <NavBar  />
      <NavOptions miPhones = {data.miPhones} redmiPhones = {data.redmiPhones} tv = {data.tv} laptop = {data.laptop} fitness = {data.fitnessAndLifeStyle} home={data.home} audio ={data.audio} accessories={data.accessories}  />
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct product={data.starProduct}></StarProduct>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessioriesMenu />
      <Routes>
        <Route path="/music" element={ <HotAccessiories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}/>
        <Route path="/devices" element={ <HotAccessiories device={data.hotAccessories.smartDevice} deviceCover={data.hotAccessoriesCover.smartDevice} />}/>
        <Route path="/home" element={ <HotAccessiories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}/>
        <Route path="/lifestyle" element={ <HotAccessiories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />}/>
        <Route path="/mobileAccessories" element={ <HotAccessiories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}/>
      </Routes>
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews = {data.productReviews} />
      <Heading text="VIDEOS"/>
      <Videos videos = {data.videos} />
      <Heading text="IN THE PRESS"/>
      <Banner end={data.banner.end} />
      <Footer footer={data.footer}></Footer>
    </Router>
  );
}

export default App;
