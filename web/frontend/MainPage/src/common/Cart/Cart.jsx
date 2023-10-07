import React from "react"
import "./style.css"
import { useState } from "react";
import { useEffect } from "react";

const Cart = ({ CartItem, addToCart, decreaseQty, removeItem }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.Price, 0).toFixed(2)

  const [user, setUser] = useState({});

  useEffect(() => {
  }, [user])
  
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      window.location.href = "http://localhost:3001";
    } else {
      setUser(JSON.parse(localStorage.getItem("username")))
    }
  }, []);

  const handleBuy = async () => {
    let susScore = 0;
    let carbonFP = 0;
    let count = 0;

    // Use map to create an array of promises for fetch operations
    const fetchPromises = CartItem.map(async (item) => {
      try {
        const response = await fetch(
          `http://localhost:3500/prodScore?Name=${item.Name}`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const data = await response.json();
          susScore += data.sustainabilityScore;
          carbonFP += data.carbonFootprintsScore;

          count ++;
        } else {
          console.error(
            `Error fetching product info for ${item.Name}. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error(`Error fetching product info for ${item.Name}:`, error);
      }
    });

    // Wait for all fetch operations to complete before continuing
    await Promise.all(fetchPromises);

    // Now you can use susScore and carbonFP as needed
    console.log("Total Sustainability Score:", susScore);
    console.log("Total Carbon Footprint:", carbonFP);

    const updatedUserInfo = {
      carbonFootprint: parseFloat((user[0].carbonFootprint + carbonFP)/(count+1)*100).toFixed(2),
      sustainbilityScore: parseFloat((user[0].sustainbilityScore + susScore)/(count+1)).toFixed(2),
      email: user[0].email,
      firstName: user[0].firstName,
      username: user[0].username,
    };

    // Send a PATCH request to update user information
    try {
      const response = await fetch("http://localhost:3500/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserInfo),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log the response from the server
      } else {
        console.error("Error updating user information.");
      }
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };
  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item, idx) => {
              const productQty = item.Price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.idx}>
                  <div className='img'>
                    <img src={item.imgLink} alt={item.Name} />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.Name}</h3>
                    <h4>
                      ${item.Price} * {item.qty}
                      <span>${productQty}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart' onClick={() => removeItem(item)}>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}</h3>
            </div>
            <button onClick={handleBuy} className="buyBttn">Buy</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
