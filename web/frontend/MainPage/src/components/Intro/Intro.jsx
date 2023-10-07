import React from 'react'
import './Intro.css';
import Hero from '../img/Hero.png'
import Text from '../img/Text.png'
import Rect from '../img/Rect.png'
import Rect1 from '../img/Rectangle 7.png'
import Rect2 from '../img/Rectangle 8.png'
import Rect3 from '../img/Rectangle 9.png'
function Intro() {
  return (
  <div className="intro">
 <div className="hero_img">
 <img src={Hero} alt="" />
 </div>
 <div className="top-text"> <img src={Text} alt="" /></div>
 <div className="side-text">We help you live <br></br>carbon neutral</div>
 <div className="side-text">


 </div>

 <div className="Rect"> <img src={Rect} alt="" /></div>
 <div className="Rect1"> <img src={Rect1} alt="" /></div>


 <div className="blur"></div>


  </div>
     
  )
}

export default Intro