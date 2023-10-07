import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import Hero from '../img/hero_img.png'
import Hero2 from '../img/img.png'


const Home = () => {
  return (
    <>
      <section className='home'>
        <div className=''>
       <div className="main">
        
        <div className="text">
        Protecting
        Nature for a
        <div className="text2"> Sustainable future</div>
      
        </div>
        <div className="hero">
          <img src={Hero} className="hero_img" alt="" />
         
        </div>
       
       </div>
        </div>
      </section>
    </>
  )
}

export default Home
