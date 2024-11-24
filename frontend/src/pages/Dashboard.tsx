import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

const Dashboard: React.FC = () => {
  const { isLoaded, getToken } = useAuth();
  const [helloUser, setHelloUser] = useState(""); // State to store the hello user message
  const [error, setError] = useState(null); // State to handle errors
  const [profile_img, setProfileImg] = useState(null); // State to store the profile image

  // Function to fetch user data
  const getUsername = async () => {
    try {
      const token = await getToken();
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API_URL}/profile_data`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data.first_name) {
        setHelloUser(data.first_name); // Update state with API response
        setProfileImg(data.profile_image); // Update state with API response
      } else {
        setError(data.message || "Unknown error occurred");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Fetch user data when the component mounts
  useEffect(() => {
    if (isLoaded) {
      getUsername();
    }
  }, [isLoaded]);

  return (
    <>
    <div id="wrapper">
        
        <div id="page" className="">
            {/* layout-wrap  */}
           <div className="layout-wrap">
                {/* preload  */}
                    {/* <div id="preload" className="preload-container">
                        <div className="preloading">
                            <span></span>
                        </div>
                    </div>  */}
                {/* preload section-menu-left  */}
                <div className="section-menu-left">
                    <div className="box-logo">
                        <a href="index.html" id="site-logo-inner">
                            <img className="logo" src="public\images\logo\logo.png" alt="" />
                        </a>
                        <div className="button-show-hide">
                            <i className="icon-menu-left"></i>
                        </div>
                    </div>
                    <div className="center">
                        <div className="center-item">
                            <ul className="menu-list">
                                <li className="menu-item">
                                <a href="/dashboard" className="menu-item-button">
                                    <div className="icon"><i className="icon-grid"></i></div>
                                    <div className="text">Dashboard</div>
                                </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/linksocialmedia" className="">
                                        <div className="icon"><i className="icon-image"></i></div>
                                        <div className="text">Link Social Media</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="report.html" className="">
                                        <div className="icon"><i className="icon-pie-chart"></i></div>
                                        <div className="text">Generated Listings</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* section-menu-left  */}
               {/* section-content-right  */}
                <div className="section-content-right">
                    {/* header-dashboard  */}
                    <div className="header-dashboard">
                        <div className="wrap">
                            <div className="header-left">
                                <a href="index.html">
                                    <img className="" id="logo_header_mobile" alt="" src="images/logo/logo.png" data-light="images/logo/logo.png" data-dark="images/logo/logo.png" data-width="154px" data-height="52px" data-retina="images/logo/logo.png"/>
                                </a>
                                <div className="button-show-hide">
                                    <i className="icon-menu-left"></i>
                                </div>
                            </div>
                            <div className="header-grid">
                                <div className="header-item button-zoom-maximize">
                                    <div className="">
                                        <i className="icon-maximize"></i>
                                    </div>
                                </div>
                                <div className="popup-wrap user type-header">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-user wg-user">
                                                <span className="image">
                                                    {profile_img && <img src={profile_img} alt=""/>}
                                                    {error && <img src="images/avatar/user-1.png" alt=""/>}
                                                </span>
                                                <span className="flex flex-column">
                                                    <span className="text-tiny">Hello</span>
                                                    {helloUser && <span className="body-title mb-2">{helloUser}!</span>}
                                                    {error && <span className="body-title mb-2">Error: {error}!</span>}
                                                </span>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton3" >
                                            <li>
                                                <a href="#" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="body-title-2">Account</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="login.html" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-log-out"></i>
                                                    </div>
                                                    <div className="body-title-2">Log out</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* header-dashboard  */}
                    {/* main-content  */}
                    <div className="main-content">
                        {/* main-content-wrap  */}
                        <div className="main-content-inner">
                            {/* main-content-wrap  */}
                            <div className="main-content-wrap">
                                <div className="tf-section-4 mb-30">
                                    {/* chart-default  */}
                                    <div className="wg-chart-default">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap14">
                                                <div className="image type-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="52" viewBox="0 0 48 52" fill="none">
                                                        <path d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z" fill="#22C55E"/>
                                                    </svg>
                                                    <i className="icon-shopping-bag"></i>
                                                </div>
                                                <div>
                                                    <div className="body-text mb-2">Total Listings</div>
                                                    <h4>34,945</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wrap-chart">
                                            <div id="line-chart-1"></div>
                                        </div>
                                    </div>
                                    {/* chart-default  */}
                                    {/* chart-default  */}
                                    <div className="wg-chart-default">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap14">
                                                <div className="image type-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="52" viewBox="0 0 48 52" fill="none">
                                                        <path d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z" fill="#FF5200"/>
                                                    </svg>
                                                    <i className="icon-dollar-sign"></i>
                                                </div>
                                                <div>
                                                    <div className="body-text mb-2">Approved Listing</div>
                                                    <h4>$37,802</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wrap-chart">
                                            <div id="line-chart-2"></div>
                                        </div>
                                    </div>
                                    {/* chart-default  */}
                                    {/* chart-default  */}
                                    <div className="wg-chart-default">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap14">
                                                <div className="image type-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="52" viewBox="0 0 48 52" fill="none">
                                                        <path d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z" fill="#CBD5E1"/>
                                                    </svg>
                                                    <i className="icon-file"></i>
                                                </div>
                                                <div>
                                                    <div className="body-text mb-2">Disapproved Listing</div>
                                                    <h4>34,945</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* chart-default  */}
                                    {/* chart-default  */}
                                    <div className="wg-chart-default">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap14">
                                                <div className="image type-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="52" viewBox="0 0 48 52" fill="none">
                                                        <path d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z" fill="#2377FC"/>
                                                    </svg>
                                                    <i className="icon-users"></i>
                                                </div>
                                                <div>
                                                    <div className="body-text mb-2">Connected Social Media</div>
                                                    <h4>34,945</h4>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    {/* chart-default  */}
                                </div>
                                <div className="tf-section mb-30">
                                    
                               
                                    
                                <div className="">
                                    {/* YHAA PASTE KRNA HAI NEW COMPONENTS  */}
                                    <div className="wg-box mb-30">
                                        <div className="">
                                            <h5>Sale / Purchase return</h5>
                                            <div className="flex gap10">
                                                <h4>$84.86B</h4>
                                                <div className="box-icon-trending down">
                                                    <i className="icon-trending-down"></i>
                                                    <div className="body-title number">1.02%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="line-chart-15"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Recently viewed  */}
                            
                            {/* main-content-wrap  */}
                        </div>
                        {/* main-content-wrap  */}
                        {/* bottom-page  */}
                        <div className="bottom-page">
                            <div className="body-text">Made with LOVE </div>
                            <i className="icon-heart"></i>
                            <div className="body-text">by <a href="">Team Malaai</a> All rights reserved.</div>
                        </div>
                        {/* bottom-page  */}
                    </div>
                    {/* main-content  */}
                </div>
                {/* section-content-right  */}
            </div>
            {/* layout-wrap  */}
        </div>
        {/* page  */}
    </div>
    </div>
    </>
  );
};

export default Dashboard;
