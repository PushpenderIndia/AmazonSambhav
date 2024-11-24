import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
// Define the type for the product data
type ProductData = {
    product_id: string;
    created_at: string;
    images_list: string[];
    product_title: string;
    price: string;
    product_details: { [key: string]: string };
    "about this item": string;
    "Product description": string;
};
const LinkSocialMedia: React.FC = () => {
    // Code for Social media connection : start
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

    const [socialMediaLinks, setSocialMediaLinks] = useState({
        instagram_link: "",
        facebook_link: "",
        tiktok_link: "",
    });

    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
    const [newLink, setNewLink] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch connected social media accounts
    const fetchSocialMediaLinks = async () => {
        try {
            const token = await getToken();
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/connected_social_media`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch social media links");
            }
            const data = await response.json();
            setSocialMediaLinks(data);
        } catch (error: any) {
            console.error("Error fetching social media links:", error.message);
        }
    };

    // Submit updated social media link
    const handleSubmit = async () => {
        if (!newLink || !selectedPlatform) return;

        const requestBody: { [key: string]: string } = {
            [`${selectedPlatform}_link`]: newLink,
        };

        try {
            const token = await getToken();
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/update_social_media`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                setSocialMediaLinks((prev) => ({
                    ...prev,
                    [`${selectedPlatform}_link`]: newLink,
                }));
                setIsModalOpen(false);
            } else {
                console.error("Error updating social media link");
            }
        } catch (error: any) {
            console.error("Error:", error.message);
        }
    };

    // Fetch social media links on component mount
    useEffect(() => {
        if (isLoaded) {
            getUsername();
            fetchSocialMediaLinks();
        }
    }, [isLoaded]);

    const openModal = (platform: string) => {
        setSelectedPlatform(platform);
        setNewLink("");
        setIsModalOpen(true);
    };

    const renderCard = (platform: string, link: string) => (
        <div className="col-md-4">
            <div className="d-flex flex-column align-items-center border rounded p-4" style={{ fontFamily: "Open Sans, sans-serif" }}>
                <div className="rounded-circle bg-primary d-flex justify-content-center align-items-center text-white social-media-icon mb-3" style={{ width: "60px", height: "60px" }}>
                    <i className={`bi bi-${platform} fs-2`}></i>
                </div>
                <h6 className="mb-1 text-dark" style={{ fontSize: "1.4rem", fontWeight: "600" }}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</h6>
                {link ? (
                    <>
                        <p className="mb-3 text-center" style={{ fontSize: "1.3rem", lineHeight: "1.5" }}>
                            Connected with the following account:
                            <br />
                            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                        </p>
                        <button
                            className="btn btn-outline-primary px-4 py-2 fw-bold"
                            style={{ fontSize: "1.2rem", fontWeight: "500" }}
                            onClick={() => openModal(platform)}
                        >
                            Change Account
                        </button>
                    </>
                ) : (
                    <>
                        <p className="text mb-3 text-center" style={{ fontSize: "1.3rem", lineHeight: "1.5" }}>
                            Connect your {platform.charAt(0).toUpperCase() + platform.slice(1)} account
                        </p>
                        <button
                            className="btn btn-outline-primary px-4 py-2 fw-bold"
                            style={{ fontSize: "1.2rem", fontWeight: "500" }}
                            onClick={() => openModal(platform)}
                        >
                            Connect
                        </button>
                    </>
                )}
            </div>
        </div>
    );
    // Code for social medai connection : end

    // code for post editing and preview : start
    // State for storing API data
    const [productData, setProductData] = useState<ProductData | null>(null);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState<Partial<ProductData>>({}); // Partial for editing fields

    // Fetch data from API on component load
    useEffect(() => {
        fetchProductData();
    }, [isLoaded]);

    const fetchProductData = async () => {
        try {
            const response = await axios.get<ProductData>("https://127.0.0.1:8000/api/update_listing_data");
            setProductData(response.data);
            setFormData(response.data); // Set initial form data
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    // Handle form field changes
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleFormSubmit = async () => {
        try {
            const response = await axios.post<ProductData>("https://127.0.0.1:8000/api/update_listing_data", formData);
            console.log("Updated product data:", response.data);
            setIsEditModalOpen(false); // Close the modal after submission
            fetchProductData(); // Refresh the data
        } catch (error) {
            console.error("Error updating product data:", error);
        }
    };
    // code for post editing and preview : end
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
                                            <img className="logo" id="logo_header_mobile" alt="" src="images/logo/logo.png"/>
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
                                                            {profile_img && <img src={profile_img} alt="" />}
                                                            {error && <img src="images/avatar/user-1.png" alt="" />}
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
                                        <div className="main-content-wrap">

                                            <div className="wg-box mb-30">
                                                <div>
                                                    <div className="container px-4 py-4">
                                                        <h4 className="mb-3 text-dark text-center" style={{ fontSize: "2rem", fontWeight: "600", fontFamily: "Roboto, sans-serif" }}>
                                                            Connect Your Social Media Accounts
                                                        </h4>
                                                        <p className="text-center mb-4" style={{ fontSize: "1.35rem", lineHeight: "1.6", fontFamily: "Open Sans, sans-serif" }}>
                                                            Link your accounts to start generating Amazon listings from your content.
                                                        </p>

                                                        {/* Social Media Cards */}
                                                        <div className="row gx-4">
                                                            {renderCard("instagram", socialMediaLinks.instagram_link)}
                                                            {renderCard("facebook", socialMediaLinks.facebook_link)}
                                                            {renderCard("tiktok", socialMediaLinks.tiktok_link)}
                                                        </div>

                                                        {/* Modal */}
                                                        {isModalOpen && (
                                                            <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title">Connect {selectedPlatform?.charAt(0).toUpperCase() + selectedPlatform?.slice(1)} Account</h5>
                                                                            <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <div className="form-group">
                                                                                <label htmlFor="socialMediaLink" className="form-label">Profile URL</label>
                                                                                <input
                                                                                    type="url"
                                                                                    id="socialMediaLink"
                                                                                    className="form-control"
                                                                                    value={newLink}
                                                                                    onChange={(e) => setNewLink(e.target.value)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                                                                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wg-box mb-30 shadow-sm featured-content">
                                                <div className="">
                                                    <div className="row">
                                                        {/* Left Column: Carousel */}
                                                        <div className="col-md-6 mb-4 mb-md-0">
                                                            <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
                                                                <div className="carousel-inner rounded">
                                                                    {productData?.images_list?.map((image, index) => (
                                                                        <div
                                                                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                                                                            key={index}
                                                                        >
                                                                            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <button
                                                                    className="carousel-control-prev"
                                                                    type="button"
                                                                    data-bs-target="#imageCarousel"
                                                                    data-bs-slide="prev"
                                                                >
                                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                    <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button
                                                                    className="carousel-control-next"
                                                                    type="button"
                                                                    data-bs-target="#imageCarousel"
                                                                    data-bs-slide="next"
                                                                >
                                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                    <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* Right Column: Title, Description, and Buttons */}
                                                        <div className="col-md-6 d-flex flex-column">
                                                            <div>
                                                                <div className="featured-content-title">
                                                                    {productData?.product_title || "Loading..."}
                                                                </div>
                                                                <p className="text-dark">
                                                                    {productData?.["Product description"] ||
                                                                        "Explore our curated selection of top-performing content."}
                                                                </p>
                                                            </div>
                                                            <div className="mt-16">
                                                                <p className="text-secondary-custom mb-3">
                                                                    Fetched {productData?.created_at || "some time ago"}
                                                                </p>
                                                                <div className="d-flex justify-content-end">
                                                                    <button
                                                                        className="btn btn-outline-primary me-2 link-btn"
                                                                        onClick={() => setIsPreviewModalOpen(true)}
                                                                    >
                                                                        Preview
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-primary link-btn"
                                                                        onClick={() => setIsEditModalOpen(true)}
                                                                    >
                                                                        Edit Data
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Preview Modal */}
                                                        {isPreviewModalOpen && (
                                                            <div className="modal-overlay" onClick={() => setIsPreviewModalOpen(false)}>
                                                                <div
                                                                    className="modal-content"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    <h5>Product Preview</h5>
                                                                    <p>Title: {productData?.product_title}</p>
                                                                    <p>Price: {productData?.price}</p>
                                                                    <p>Description: {productData?.["Product description"]}</p>
                                                                    <p>About This Item: {productData?.["about this item"]}</p>
                                                                    <button onClick={() => setIsPreviewModalOpen(false)}>Close</button>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Edit Modal */}
                                                        {isEditModalOpen && (
                                                            <div className="modal-overlay" onClick={() => setIsEditModalOpen(false)}>
                                                                <div
                                                                    className="modal-content"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                >
                                                                    <h5>Edit Product Data</h5>
                                                                    <form>
                                                                        <label>
                                                                            Title:
                                                                            <input
                                                                                type="text"
                                                                                name="product_title"
                                                                                value={formData.product_title || ""}
                                                                                onChange={handleFormChange}
                                                                            />
                                                                        </label>
                                                                        <label>
                                                                            Price:
                                                                            <input
                                                                                type="text"
                                                                                name="price"
                                                                                value={formData.price || ""}
                                                                                onChange={handleFormChange}
                                                                            />
                                                                        </label>
                                                                        <label>
                                                                            Description:
                                                                            <textarea
                                                                                name="Product description"
                                                                                value={formData["Product description"] || ""}
                                                                                onChange={handleFormChange}
                                                                            />
                                                                        </label>
                                                                        <button type="button" onClick={handleFormSubmit}>
                                                                            Submit
                                                                        </button>
                                                                        <button type="button" onClick={() => setIsEditModalOpen(false)}>
                                                                            Cancel
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Linked Content Preview Section  */}
                                            {/* Product Added Section */}
                                            <div className="wg-box py-5 mb-30">
                                                <div className="text-center featured-content-title mb-4">Previously added products</div>
                                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                                    <div className="col">
                                                        <div className="card h-100 shadow-sm">
                                                            <div className="card-img-container">
                                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLOKocediUNjqq0L_QOZCtrVu8SYusAh6Ww&s" className="card-img-top" alt="Product 1" />
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-title added-products-title">Product 1</div>
                                                                <p className="card-text">A brief description of Product 1 and its features.</p>
                                                            </div>
                                                            <div className="card-overlay">
                                                                <button className="btn btn-primary">
                                                                    View Details
                                                                    <span className="visually-hidden">for Product 1</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="card h-100 shadow-sm">
                                                            <div className="card-img-container">
                                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yflggK4Iy7KRo18fIGYgGlmdMIBAlb0_Vw&s" className="card-img-top" alt="Product 2" />
                                                            </div>
                                                            <div className="card-body">
                                                                <h5 className="card-title added-products-title">Product 2</h5>
                                                                <p className="card-text">A brief description of Product 2 and its features.</p>
                                                            </div>
                                                            <div className="card-overlay">
                                                                <button className="btn btn-primary">
                                                                    View Details
                                                                    <span className="visually-hidden">for Product 2</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="card h-100 shadow-sm">
                                                            <div className="card-img-container">
                                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuilK6m7nQE2OpadkIFpoyxcf98oAS80LzeQ&s" className="card-img-top" alt="Product 3" />
                                                            </div>
                                                            <div className="card-body">
                                                                <h5 className="card-title added-products-title">Product 3</h5>
                                                                <p className="card-text">A brief description of Product 3 and its features.</p>
                                                            </div>
                                                            <div className="card-overlay">
                                                                <button className="btn btn-primary">
                                                                    View Details
                                                                    <span className="visually-hidden">for Product 3</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
            </div>
        </>
    );
};

export default LinkSocialMedia;
