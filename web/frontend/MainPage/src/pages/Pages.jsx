import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
import Useracc from "../components/Useracc/Useracc"
const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>

      <Home />

      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate productItems={productItems} />
     

      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Useracc/>
      <Wrapper />
    </>
  )
}

export default Pages
