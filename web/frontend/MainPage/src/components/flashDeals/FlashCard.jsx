import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { sendHttpReq } from "../Data"
import FlashCardBox from "./FlashCardBox"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  // const [score, setScore] = useState([0, 0])

  // const getData = async () => {
  //   let responseData = await sendHttpReq('GET', 'http://localhost:3500/prodScore')
  //   return responseData
  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     const newData = await getData();
  //     setScore(newData)
  //   }

  //   fetchData();
  // }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.slice(productItems.length / 3).map((productItem, idx) =>
          <FlashCardBox key={idx} productItems={productItem} addToCart={addToCart} />
        )}
      </Slider>
    </>
  )
}

export default FlashCard
