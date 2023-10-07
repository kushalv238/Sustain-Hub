// const Data = {
//   productItems: [
//     {
//       id: 1,
//       discount: 50,
//       cover: "./images/flash/flash-1.png",
//       name: "Shoes",
//       price: 100,
//     },
//     {
//       id: 2,
//       discount: 40,
//       cover: "./images/flash/flash-2.png",
//       name: "Watch",
//       price: 20,
//     },
//     {
//       id: 3,
//       discount: 40,
//       cover: "./images/flash/flash-3.png",
//       name: "Smart Mobile Black",
//       price: 200,
//     },
//     {
//       id: 4,
//       discount: 40,
//       cover: "./images/flash/flash-4.png",
//       name: "Smart Watch Black",
//       price: 50,
//     },
//     {
//       id: 5,
//       discount: 50,
//       cover: "./images/flash/flash-1.png",
//       name: "Shoes",
//       price: 100,
//     },
//     {
//       id: 6,
//       discount: 50,
//       cover: "./images/flash/flash-3.png",
//       name: "Shoes",
//       price: 100,
//     },
//   ],
// }
// export default Data

import axios from 'axios'

const sendHttpReq = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (data) {
      console.log(data)
      xhr.setRequestHeader('Conent-Type', 'application/json;charset=UTF-8')
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject('Something went wrong')
    }

    xhr.send(JSON.stringify(data))
  })

  return promise
}

const getData = async () => {
  let responseData = await sendHttpReq('GET', 'http://localhost:3500/products')
  return responseData
}

const sendDataToServer = async (requestData) => {
  try {
    // Make the POST request with the data in the request body
    const response = await axios.get('http://localhost:3500/prodScore', {
      params: requestData, // Pass requestData as query parameters
    });

    // Access the response data
    const data = response.data;

    // Return the data to the caller
    return data;
  } catch (error) {
    // Handle any errors and return an error object or throw an error if needed
    throw error;
  }
};


export {
  sendHttpReq,
  getData,
  sendDataToServer,
}