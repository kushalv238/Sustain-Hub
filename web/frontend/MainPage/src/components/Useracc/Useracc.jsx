import React from 'react'
import './Useracc.css'
import userImg from './../../resources/user.webp'
import { useEffect } from 'react';
import { useState } from 'react';

function Useracc() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Extract the username from the current URL
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const params = new URLSearchParams(url.search);
    let usernameFromUrl
    
    if (localStorage.getItem(`username`)) {
      usernameFromUrl = JSON.parse(localStorage.getItem(`username`))[0].username;
    } else {
      usernameFromUrl = params.get('name');
    }

    // Function to fetch user information and handle local storage
    const fetchUserInfo = (username) => {
      fetch("http://localhost:3500/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Save user information in local storage
          localStorage.setItem(`username`, JSON.stringify(data));

          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };

    if (usernameFromUrl) {
      // Use the username from the URL
      fetchUserInfo(usernameFromUrl);
    } else {
      // Redirect to http://localhost:3001 if no username is available
      window.location.href = "http://localhost:3001";
    }
  }, []);
  useEffect(() => {
    console.log(user)
  }, [user])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className="Useracc">
      <div className="content">

        <div className="title-new"> <h3>Get to know the yourself better !</h3></div>

        <div className="about card">
          <img src={userImg} className='Araish' alt="" />
          <div className=" a-name">{user[0].firstName}</div>
          <div className="a-short"> Green enthusiast, eco-chic, always smiling eco-warrior</div>
          <div className="social-medias">

            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_118_1011)">
                <path d="M21.3333 0C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V21.3333C24 22.0406 23.719 22.7189 23.219 23.219C22.7189 23.719 22.0406 24 21.3333 24H2.66667C1.95942 24 1.28115 23.719 0.781048 23.219C0.280951 22.7189 0 22.0406 0 21.3333V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H21.3333ZM20.6667 20.6667V13.6C20.6667 12.4472 20.2087 11.3416 19.3936 10.5264C18.5784 9.71128 17.4728 9.25333 16.32 9.25333C15.1867 9.25333 13.8667 9.94667 13.2267 10.9867V9.50667H9.50667V20.6667H13.2267V14.0933C13.2267 13.0667 14.0533 12.2267 15.08 12.2267C15.5751 12.2267 16.0499 12.4233 16.3999 12.7734C16.75 13.1235 16.9467 13.5983 16.9467 14.0933V20.6667H20.6667ZM5.17333 7.41333C5.76742 7.41333 6.33717 7.17733 6.75725 6.75725C7.17733 6.33717 7.41333 5.76742 7.41333 5.17333C7.41333 3.93333 6.41333 2.92 5.17333 2.92C4.57571 2.92 4.00257 3.1574 3.57999 3.57999C3.1574 4.00257 2.92 4.57571 2.92 5.17333C2.92 6.41333 3.93333 7.41333 5.17333 7.41333ZM7.02667 20.6667V9.50667H3.33333V20.6667H7.02667Z" fill="#212121" />
              </g>
              <defs>
                <clipPath id="clip0_118_1011">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg></a>

            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_118_1013)">
                <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2073 22.581 20.2775 21.05 21.744 19.0076C23.2106 16.9653 23.9996 14.5144 24 12C24 5.37 18.63 0 12 0Z" fill="#212121" />
              </g>
              <defs>
                <clipPath id="clip0_118_1013">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg></a>

            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_118_1015)">
                <path d="M6.96 0H17.04C20.88 0 24 3.12 24 6.96V17.04C24 18.8859 23.2667 20.6562 21.9615 21.9615C20.6562 23.2667 18.8859 24 17.04 24H6.96C3.12 24 0 20.88 0 17.04V6.96C0 5.11409 0.733284 3.34379 2.03854 2.03854C3.34379 0.733284 5.11409 0 6.96 0ZM6.72 2.4C5.57427 2.4 4.47546 2.85514 3.6653 3.6653C2.85514 4.47546 2.4 5.57427 2.4 6.72V17.28C2.4 19.668 4.332 21.6 6.72 21.6H17.28C18.4257 21.6 19.5245 21.1449 20.3347 20.3347C21.1449 19.5245 21.6 18.4257 21.6 17.28V6.72C21.6 4.332 19.668 2.4 17.28 2.4H6.72ZM18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7C19.8 6.09783 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09783 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4Z" fill="#212121" />
              </g>
              <defs>
                <clipPath id="clip0_118_1015">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg></a>



            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_118_1019)">
                <path d="M22.68 0H1.32C0.969914 0 0.634167 0.139071 0.386619 0.386619C0.139071 0.634167 0 0.969914 0 1.32V22.68C0 23.0301 0.139071 23.3658 0.386619 23.6134C0.634167 23.8609 0.969914 24 1.32 24H12.816V14.7H9.696V11.1H12.816V8.4C12.7514 7.76611 12.8262 7.12575 13.0353 6.52385C13.2443 5.92194 13.5825 5.37305 14.0262 4.91569C14.4698 4.45833 15.0081 4.10357 15.6034 3.87629C16.1987 3.649 16.8364 3.5547 17.472 3.6C18.406 3.59425 19.3395 3.64233 20.268 3.744V6.984H18.36C16.848 6.984 16.56 7.704 16.56 8.748V11.064H20.16L19.692 14.664H16.56V24H22.68C22.8533 24 23.025 23.9659 23.1851 23.8995C23.3453 23.8332 23.4908 23.736 23.6134 23.6134C23.736 23.4908 23.8332 23.3453 23.8995 23.1851C23.9659 23.025 24 22.8533 24 22.68V1.32C24 1.14666 23.9659 0.975008 23.8995 0.814858C23.8332 0.654708 23.736 0.509193 23.6134 0.386619C23.4908 0.264046 23.3453 0.166815 23.1851 0.100479C23.025 0.0341429 22.8533 0 22.68 0Z" fill="#212121" />
              </g>
              <defs>
                <clipPath id="clip0_118_1019">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg></a>

          </div>
          <button className='a-portfolio green-btn' >{user[0].sustainbilityScore} Green Points</button>
          <button className='a-portfolio black-btn' >{user[0].carbonFootprint}% Carbon Footprint</button>
        </div>
      </div>

    </div>

  )
}

export default Useracc