import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"

const TopCart = ({ productItems }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {productItems.slice(productItems.length-5, productItems.length).map((value, index) => {
          return (

            <div className='box product' key={index}>
              <div className='nametop d_flex'>
                <span className='tright'>{value.Description}</span>
              </div>
              <div className='img'>
                <img src={value.imgLink} alt={value.Name} />
              </div>
            </div>

          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
