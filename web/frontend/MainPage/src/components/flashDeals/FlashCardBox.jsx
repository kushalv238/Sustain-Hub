import { useEffect, useState, useRef } from "react"
import { sendHttpReq, sendDataToServer } from "../Data"

import axios from "axios"

const FlashCardBox = ({ productItems, addToCart, redeem }) => {
    const [score, setScore] = useState({})

    // const getData = async () => {
    //     let responseData = await sendHttpReq('GET', 'http://localhost:3500/prodScore', productItems.Name)
    //     return responseData
    // }

    // useEffect(() => {
    //     async function fetchData() {
    //         const newData = await getData();
    //         setScore(newData)
    //     }

    //     fetchData();
    // }, [])
    useEffect(() => {
        let isMounted = true; // Flag to track if the component is mounted

        // Example requestData object
        const requestData = {
            Name: productItems.Name
        };

        // Call the Axios function and save the response data to state
        sendDataToServer(requestData)
            .then(data => {
                if (isMounted) {
                    setScore(data); // Update the state with the received data only if the component is still mounted
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors if needed
            });

        // Cleanup function to cancel the Axios request and update isMounted
        return () => {
            isMounted = false; // Set isMounted to false when the component unmounts
        };
    }, []);

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className='box'>
            <div className='product mtop'>
                <div className='img'>
                    <span className='discount'>20% Off</span>
                    <img src={productItems?.imgLink} alt='' />
                    <div className='product-like'>
                        <label>{count[0]}</label> <br />
                        <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div>
                </div>
                <div className='product-details'>
                    <h3>{productItems.Name}</h3>
                    <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                    <div className='price'>
                        <h4>{redeem ? 'Gree Coin: '+productItems.RedeemPrice : '$'+productItems.Price}</h4>
                        {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                        <span>
                            <div className="prod-score">
                                <div className="leaf-img"></div>
                                <div className="leaf-img-score">{score.sustainabilityScore}</div>
                            </div>
                            <button onClick={() => addToCart(productItems)}>
                                <i className='fa fa-plus'></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashCardBox