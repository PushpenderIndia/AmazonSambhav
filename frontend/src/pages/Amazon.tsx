import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";

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
const Amazon: React.FC = () => {
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

// Function to display the data

const [productData, setProductData] = useState<ProductData | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false); // Preview state
    const [formData, setFormData] = useState<Record<string, any>>({}); // Dynamic fields

    // Fetch data from `/recent_fetched_post` when the edit modal is opened
    useEffect(() => {
        if (isEditModalOpen) fetchProductData();
    }, [isEditModalOpen]);
    useEffect(() => {
        if (isLoaded) fetchProductData();
    }, [isLoaded]);

    const fetchProductData = async () => {
        try {
            const token = await getToken(); // Assuming getToken retrieves a valid token
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_API_URL}/recent_fetched_post`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch product data");
            }

            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
                setProductData(data[0]); // Set the first item of the array as productData
                setFormData(data[0]); // Initialize the form with fetched data
            } else {
                throw new Error("No product data available");
            }
        } catch (err: any) {
            console.error("Error fetching product data:", err.message);
        }
    };
    return (
      <>
          
  {/* sp:feature:head-start */}
  <meta charSet="utf-8" />
  {/* sp:end-feature:head-start */}
  {/* sp:feature:csm:head-open-part1 */}
  {/* sp:end-feature:csm:head-open-part1 */}
  {/* sp:feature:cs-optimization */}
  <meta httpEquiv="x-dns-prefetch-control" content="on" />
  <link rel="stylesheet" href="/style.css" />
  {/* htmlBeginMarker */}
  {/*&&&Portal&Delimite*/}
  {/*&&&Portal&Delimiter&&&*/}
  {/* sp:end-feature:host-assets */}
  {/* sp:feature:encrypted-slate-token */}
  <meta
    name="encrypted-slate-token"
    content="AnYx82xy1x7yuO5f19iAHnNiCPSB/+puixjzZkLdSBlpps2FuStJX/4tq/PC6RO/sjP+idPPLiIKHnaI052/oxmMRYHa2MALSu2Wx869Pk6WOcBTYkMEV8aNqv9tNB5MtDaiNWeHRj8t1OxisnQUGYkMUduaX2BU+EHeQtzvx4XXwTQkdUJAUO1PhWEmY2Z/OrQF/Zhz4C4MbDixEGyFs2EmS9LjCU8llNj1Uag5grFzNb+Qj9bULnWVlRpmntbfKhVxSTMzb8/kAhIjrr+C"
  />
  {/* sp:end-feature:encrypted-slate-token */}
  {/* sp:feature:csm:head-close */}
  {/* sp:end-feature:csm:head-close */}
  {/* sp:feature:head-close */}
  {/* sp:end-feature:head-close */}
  {/* sp:feature:start-body */}
  <div id="ap_container" />
  <iframe
    frameBorder={0}
    tabIndex={-1}
    src="javascript:void(false)"
    style={{
      display: "none",
      position: "absolute",
      zIndex: 0,
      filter: 'Alpha(Opacity="0")',
      opacity: 0
    }}
  />
  <iframe
    frameBorder={0}
    tabIndex={-1}
    src="javascript:void(false)"
    style={{
      display: "none",
      position: "absolute",
      zIndex: 0,
      filter: 'Alpha(Opacity="0")',
      opacity: 0
    }}
  />
  <iframe
    frameBorder={0}
    tabIndex={-1}
    src="javascript:void(false)"
    style={{
      display: "none",
      position: "absolute",
      zIndex: 0,
      filter: 'Alpha(Opacity="0")',
      opacity: 0
    }}
  />
  <div id="a-page">
    {/* sp:end-feature:start-body */}
    {/* sp:feature:csm:body-open */}
    {/* sp:end-feature:csm:body-open */}
    {/* sp:feature:nav-inline-js */}
    {/* NAVYAAN JS */}
    <img
      src="https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB541718031_.png"
      style={{ display: "none" }}
      alt=""
    />
    {/* sp:end-feature:nav-inline-js */}
    {/* sp:feature:nav-skeleton */}
    {/* sp:end-feature:nav-skeleton */}
    {/* sp:feature:navbar */}
    {/*Pilu */}
    {/* NAVYAAN */}
    {/* navmet initial definition */}
    <noscript></noscript>
    <a id="nav-top" />
    <header
      id="navbar-main"
      className="nav-opt-sprite nav-flex nav-locale-in nav-lang-en nav-ssl nav-unrec nav-progressive-attribute"
    >
      <div
        id="navbar"
        
        role="navigation"
        className="nav-sprite-v1 celwidget nav-bluebeacon nav-a11y-t1 bold-focus-hover layout2 nav-flex layout3 layout3-alt nav-packard-glow hamburger nav-progressive-attribute using-mouse"
        data-csa-c-id="h17cgz-gswrc1-c7ct63-n9peh7"
        data-cel-widget="Navigation-desktop-navbar"
      >
        <div id="nav-belt">
          <div className="nav-left">
            <div id="nav-logo">
              <a
                href="/ref=nav_logo"
                id="nav-logo-sprites"
                className="nav-logo-link nav-progressive-attribute"
                aria-label="Amazon.in"
              >
                <span className="nav-sprite nav-logo-base" />
                <span
                  id="logo-ext"
                  className="nav-sprite nav-logo-ext nav-progressive-content"
                />
                <span className="nav-logo-locale">.in</span>
              </a>
            </div>
            <div id="nav-global-location-slot">
              <span
                id="nav-global-location-data-modal-action"
                className="a-declarative nav-progressive-attribute"
                data-a-modal='{"width":375, "closeButton":"true","popoverLabel":"Choose your location", "ajaxHeaders":{"anti-csrftoken-a2z":"hEpmpucSDafxMMKoZnk2FFgQ+BryRgxyuyGoK9vzSPWSAAAAAGdDKxkAAAAB"}, "name":"glow-modal", "url":"/portal-migration/hz/glow/get-rendered-address-selections?deviceType=desktop&pageType=Detail&storeContext=watches&actionSource=desktop-modal", "footer":null,"header":"Choose your location"}'
                data-action="a-modal"
              >
                <a
                  id="nav-global-location-popover-link"
                  role="button"
                  tabIndex={0}
                  className="nav-a nav-a-2 a-popover-trigger a-declarative nav-progressive-attribute"
                  href=""
                >
                  <div
                    className="nav-sprite nav-progressive-attribute"
                    id="nav-packard-glow-loc-icon"
                  ></div>
                  <div id="glow-ingress-block">
                    <span
                      className="nav-line-1 nav-progressive-content"
                      id="glow-ingress-line1"
                    >
                      Delivering to New Delhi 110020
                    </span>
                    <span
                      className="nav-line-2 nav-progressive-content"
                      id="glow-ingress-line2"
                    >
                      Update location
                    </span>
                  </div>
                </a>
              </span>
              <input
                data-addnewaddress="add-new"
                id="unifiedLocation1ClickAddress"
                name="dropdown-selection"
                type="hidden"
                defaultValue="add-new"
                className="nav-progressive-attribute"
              />
              <input
                data-addnewaddress="add-new"
                id="ubbShipTo"
                name="dropdown-selection-ubb"
                type="hidden"
                defaultValue="add-new"
                className="nav-progressive-attribute"
              />
              <input
                id="glowValidationToken"
                name="glow-validation-token"
                type="hidden"
                defaultValue="hEpmpucSDafxMMKoZnk2FFgQ+BryRgxyuyGoK9vzSPWSAAAAAGdDKxkAAAAB"
                className="nav-progressive-attribute"
              />
              <input
                id="glowDestinationType"
                name="glow-destination-type"
                type="hidden"
                defaultValue="IP2LOCATION"
                className="nav-progressive-attribute"
              />
            </div>
            <div
              id="nav-global-location-toaster-script-container"
              className="nav-progressive-content"
            ></div>
          </div>
          <div className="nav-fill">
            <div id="nav-search">
              <div id="nav-bar-left" />
              <form
                id="nav-search-bar-form"
                acceptCharset="utf-8"
                action="/s/ref=nb_sb_noss"
                className="nav-searchbar nav-progressive-attribute"
                method="GET"
                name="site-search"
                role="search"
              >
                <div className="nav-left">
                  <div id="nav-search-dropdown-card">
                    <div className="nav-search-scope nav-sprite">
                      <div
                        className="nav-search-facade"
                        data-value="search-alias=aps"
                      >
                        <span
                          id="nav-search-label-id"
                          className="nav-search-label nav-progressive-content"
                          style={{ width: "auto" }}
                        >
                          All
                        </span>
                        <i className="nav-icon" />
                      </div>
                      <label
                        id="searchDropdownDescription"
                        htmlFor="searchDropdownBox"
                        className="nav-progressive-attribute"
                        style={{ display: "none" }}
                      >
                        Select the department you want to search in
                      </label>
                      <select
                        aria-describedby="searchDropdownDescription"
                        className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"
                        data-nav-digest="bWVcD3YlJR7bl7mJRxk8QgeiLoU="
                        data-nav-selected={0}
                        id="searchDropdownBox"
                        name="url"
                        style={{ display: "block", top: "2.5px" }}
                        tabIndex={0}
                        title="Search in"
                      >
                        <option value="search-alias=aps">
                          All Categories
                        </option>
                        <option value="search-alias=alexa-skills">
                          Alexa Skills
                        </option>
                        <option value="search-alias=amazon-devices">
                          Amazon Devices
                        </option>
                        <option value="search-alias=fashion">
                          Amazon Fashion
                        </option>
                        <option value="search-alias=nowstore">
                          Amazon Fresh
                        </option>
                        <option value="search-alias=freshmeat">
                          Amazon Fresh Meat
                        </option>
                        <option value="search-alias=amazon-pharmacy">
                          Amazon Pharmacy
                        </option>
                        <option value="search-alias=appliances">
                          Appliances
                        </option>
                        <option value="search-alias=mobile-apps">
                          Apps &amp; Games
                        </option>
                        <option value="search-alias=audible">
                          Audible Audiobooks
                        </option>
                        <option value="search-alias=baby">Baby</option>
                        <option value="search-alias=beauty">Beauty</option>
                        <option value="search-alias=stripbooks">Books</option>
                        <option value="search-alias=automotive">
                          Car &amp; Motorbike
                        </option>
                        <option value="search-alias=apparel">
                          Clothing &amp; Accessories
                        </option>
                        <option value="search-alias=collectibles">
                          Collectibles
                        </option>
                        <option value="search-alias=computers">
                          Computers &amp; Accessories
                        </option>
                        <option value="search-alias=todays-deals">Deals</option>
                        <option value="search-alias=electronics">
                          Electronics
                        </option>
                        <option value="search-alias=furniture">
                          Furniture
                        </option>
                        <option value="search-alias=lawngarden">
                          Garden &amp; Outdoors
                        </option>
                        <option value="search-alias=gift-cards">
                          Gift Cards
                        </option>
                        <option value="search-alias=grocery">
                          Grocery &amp; Gourmet Foods
                        </option>
                        <option value="search-alias=hpc">
                          Health &amp; Personal Care
                        </option>
                        <option value="search-alias=kitchen">
                          Home &amp; Kitchen
                        </option>
                        <option value="search-alias=industrial">
                          Industrial &amp; Scientific
                        </option>
                        <option value="search-alias=jewelry">Jewellery</option>
                        <option value="search-alias=digital-text">
                          Kindle Store
                        </option>
                        <option value="search-alias=luggage">
                          Luggage &amp; Bags
                        </option>
                        <option value="search-alias=luxury-beauty">
                          Luxury Beauty
                        </option>
                        <option value="search-alias=dvd">
                          Movies &amp; TV Shows
                        </option>
                        <option value="search-alias=digital-music">
                          MP3 Music
                        </option>
                        <option value="search-alias=popular">Music</option>
                        <option value="search-alias=mi">
                          Musical Instruments
                        </option>
                        <option value="search-alias=office-products">
                          Office Products
                        </option>
                        <option value="search-alias=pets">Pet Supplies</option>
                        <option value="search-alias=instant-video">
                          Prime Video
                        </option>
                        <option value="search-alias=shoes">
                          Shoes &amp; Handbags
                        </option>
                        <option value="search-alias=software">Software</option>
                        <option value="search-alias=sporting">
                          Sports, Fitness &amp; Outdoors
                        </option>
                        <option value="search-alias=specialty-aps-sns">
                          Subscribe &amp; Save
                        </option>
                        <option value="search-alias=home-improvement">
                          Tools &amp; Home Improvement
                        </option>
                        <option value="search-alias=toys">
                          Toys &amp; Games
                        </option>
                        <option value="search-alias=under-ten-dollars">
                          Under ₹500
                        </option>
                        <option value="search-alias=videogames">
                          Video Games
                        </option>
                        <option value="search-alias=watches">Watches</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="nav-fill">
                  <div className="nav-search-field ">
                    <div className="ac-input-container">
                      <div
                        className="ac-live-field"
                        id="ac-liveField"
                        role="status"
                        aria-atomic="true"
                        aria-live="polite"
                      />
                      <div className="ac-input-overlay" aria-hidden="true">
                        <span className="ac-ghost" id="ac-predictive-text">
                          <span className="ac-current-input" id="ac-prefix" />
                          <span
                            className="ac-ghost-suggestion"
                            id="ac-prediction"
                          />
                        </span>
                      </div>
                      <label
                        htmlFor="twotabsearchtextbox"
                        style={{ display: "none" }}
                      >
                        Search Amazon.in
                      </label>
                      <input
                        type="text"
                        id="twotabsearchtextbox"
                        defaultValue=""
                        name="field-keywords"
                        autoComplete="off"
                        placeholder="Search Amazon.in"
                        className="nav-input nav-progressive-attribute"
                        dir="auto"
                        tabIndex={0}
                        aria-label="Search Amazon.in"
                        role="searchbox"
                        aria-autocomplete="list"
                        aria-controls="sac-autocomplete-results-container"
                        aria-expanded="false"
                        aria-haspopup="grid"
                        spellCheck="false"
                      />
                    </div>
                  </div>
                  <div id="nav-iss-attach" />
                </div>
                <div className="nav-right">
                  <div className="nav-search-submit nav-sprite">
                    <span
                      id="nav-search-submit-text"
                      className="nav-search-submit-text nav-sprite nav-progressive-attribute"
                      aria-label="Go"
                    >
                      <input
                        id="nav-search-submit-button"
                        type="submit"
                        className="nav-input nav-progressive-attribute"
                        defaultValue="Go"
                        tabIndex={0}
                      />
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="nav-right">
            <div id="nav-tools" className="layoutToolbarPadding">
              
              <a
                href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2FSELLORIA-Shockproof-Multi-Functional-Waterproof-Resistance%2Fdp%2FB09CHJ5RWK%3Fcrid%3D15LXPTWQ3BJ2A%26dib%3DeyJ2IjoiMSJ9.K0ktjucI-teePMdVZx5Jnadt9dIlpzg-aCS89zpCxUG3tJVDYApOWbesGFiTWosijf23nmOHWdA3yZcwKbFPT_PczRejz2HzxJnglypx0W6PgQSJLJYT4FVJlT6K-WWpmzrJnEx34X21aRQZT2Depu3cZG87KfBJVZXWru92lAR8IamwAqdBb8MuPEbWDkFZrCuFUfS6uDsShsyYdnp8kzsb1yURs4C0sbTuhvlggxfyNXt5NlpCqaNViK1l3MArXCut22CnTHuFzYFX0y6lV3XNTFZtMcAWg8TDpPlUe8Q.nOVZAHn8fAV0orBCqJGRj8yMkjqTdizVnecuEsQuGks%26dib_tag%3Dse%26keywords%3Dwatch%26qid%3D1732454536%26sprefix%3D%252Caps%252C236%26sr%3D8-7%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
                className="nav-a nav-a-2   nav-progressive-attribute"
                data-nav-ref="nav_ya_signin"
                data-nav-role="signin"
                data-ux-jq-mouseenter="true"
                id="nav-link-accountList"
                tabIndex={0}
                data-csa-c-type="link"
                data-csa-c-slot-id="nav-link-accountList"
                data-csa-c-content-id="nav_ya_signin"
                data-csa-c-id="m80anj-pjokyt-jl4xp0-nsd8yo"
              >
                <div className="nav-line-1-container">
                  <span
                    id="nav-link-accountList-nav-line-1"
                    className="nav-line-1 nav-progressive-content"
                  >
                    Hello, sign in
                  </span>
                </div>
                <span className="nav-line-2 ">
                  Account &amp; Lists
                  <span
                    className="nav-icon nav-arrow"
                    style={{ visibility: "visible" }}
                  />
                </span>
              </a>
              <a
                href="/gp/css/order-history?ref_=nav_orders_first"
                className="nav-a nav-a-2   nav-progressive-attribute"
                id="nav-orders"
                tabIndex={0}
              >
                <span className="nav-line-1">Returns</span>
                <span className="nav-line-2">
                  &amp; Orders
                  <span className="nav-icon nav-arrow" />
                </span>
              </a>
              <a
                href="/gp/cart/view.html?ref_=nav_cart"
                aria-label="0 items in cart"
                className="nav-a nav-a-2 nav-progressive-attribute"
                id="nav-cart"
              >
                <div id="nav-cart-count-container">
                  <span
                    id="nav-cart-count"
                    aria-hidden="true"
                    className="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content"
                  >
                    0
                  </span>
                  <span className="nav-cart-icon nav-sprite" />
                </div>
                <div
                  id="nav-cart-text-container"
                  className=" nav-progressive-attribute"
                >
                  <span aria-hidden="true" className="nav-line-1"></span>
                  <span aria-hidden="true" className="nav-line-2">
                    Cart
                    <span className="nav-icon nav-arrow" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="nav-flyout-iss-anchor">
          <div id="nav-flyout-searchAjax" className="nav-issFlyout nav-flyout">
            <div className="nav-template nav-flyout-content" />
            <div className="autocomplete-results-container">
              <div className="two-pane-results-container">
                <div className="left-pane-results-container" />
                <div className="right-pane-results-container" />
              </div>
              <div className="status-message-container" role="status" />
            </div>
          </div>
        </div>
        <div id="nav-flyout-anchor">
          <div className="nav-ewc-arrow" style={{}} />
          <div
            id="nav-flyout-amazonprime"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-accountList"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content">
              <div id="nav-al-container">
                <div id="nav-al-signin">
                  <div
                    id="nav-flyout-ya-signin"
                    className="nav-flyout-content nav-flyout-accessibility"
                  >
                    <a
                      href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2FSELLORIA-Shockproof-Multi-Functional-Waterproof-Resistance%2Fdp%2FB09CHJ5RWK%3Fcrid%3D15LXPTWQ3BJ2A%26dib%3DeyJ2IjoiMSJ9.K0ktjucI-teePMdVZx5Jnadt9dIlpzg-aCS89zpCxUG3tJVDYApOWbesGFiTWosijf23nmOHWdA3yZcwKbFPT_PczRejz2HzxJnglypx0W6PgQSJLJYT4FVJlT6K-WWpmzrJnEx34X21aRQZT2Depu3cZG87KfBJVZXWru92lAR8IamwAqdBb8MuPEbWDkFZrCuFUfS6uDsShsyYdnp8kzsb1yURs4C0sbTuhvlggxfyNXt5NlpCqaNViK1l3MArXCut22CnTHuFzYFX0y6lV3XNTFZtMcAWg8TDpPlUe8Q.nOVZAHn8fAV0orBCqJGRj8yMkjqTdizVnecuEsQuGks%26dib_tag%3Dse%26keywords%3Dwatch%26qid%3D1732454536%26sprefix%3D%252Caps%252C236%26sr%3D8-7%26ref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
                      rel="nofollow"
                      className="nav-action-signin-button"
                      data-nav-role="signin"
                      data-nav-ref="nav_signin"
                    >
                      <span className="nav-action-inner">Sign in</span>
                    </a>
                    <div
                      id="nav-flyout-ya-newCust"
                      className="nav_pop_new_cust nav-flyout-content nav-flyout-accessibility"
                    >
                      New customer?{" "}
                      <a
                        href="https://www.amazon.in/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2FSELLORIA-Shockproof-Multi-Functional-Waterproof-Resistance%2Fdp%2FB09CHJ5RWK%2F%3F_encoding%3DUTF8%26crid%3D15LXPTWQ3BJ2A%26dib%3DeyJ2IjoiMSJ9.K0ktjucI-teePMdVZx5Jnadt9dIlpzg-aCS89zpCxUG3tJVDYApOWbesGFiTWosijf23nmOHWdA3yZcwKbFPT_PczRejz2HzxJnglypx0W6PgQSJLJYT4FVJlT6K-WWpmzrJnEx34X21aRQZT2Depu3cZG87KfBJVZXWru92lAR8IamwAqdBb8MuPEbWDkFZrCuFUfS6uDsShsyYdnp8kzsb1yURs4C0sbTuhvlggxfyNXt5NlpCqaNViK1l3MArXCut22CnTHuFzYFX0y6lV3XNTFZtMcAWg8TDpPlUe8Q.nOVZAHn8fAV0orBCqJGRj8yMkjqTdizVnecuEsQuGks%26dib_tag%3Dse%26keywords%3Dwatch%26qid%3D1732454536%26sprefix%3D%252Caps%252C236%26sr%3D8-7%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
                        rel="nofollow"
                        className="nav-a"
                        aria-label="New to Amazon? Start here to create an account"
                      >
                        Start here.
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="nav-al-wishlist"
                  className="nav-al-column nav-tpl-itemList nav-flyout-content nav-flyout-accessibility"
                >
                  <div
                    className="nav-title"
                    id="nav-al-title"
                    role="heading"
                    aria-level={6}
                  >
                    Your Lists
                  </div>
                  <a
                    href="/hz/wishlist/ls?triggerElementID=createList&ref_=nav_ListFlyout_navFlyout_createList_lv_redirect"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Create a Wish List</span>
                  </a>
                  <a
                    href="/wishlist/universal?ref_=nav_ListFlyout_gno_listpop_uwl"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Wish from Any Website</span>
                  </a>{" "}
                  <a
                    href="/baby-reg/homepage?ref_=nav_ListFlyout_gno_listpop_br"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Baby Wishlist</span>
                  </a>{" "}
                  <a
                    href="/discover/?ref_=nav_ListFlyout_sbl"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Discover Your Style</span>
                  </a>{" "}
                  <a
                    href="/showroom?ref_=nav_ListFlyout_srm_your_desk_wl_in"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Explore Showroom</span>
                  </a>
                </div>
                <div
                  id="nav-al-your-account"
                  className="nav-al-column nav-template nav-flyout-content nav-tpl-itemList nav-flyout-accessibility"
                >
                  <div className="nav-title" role="heading" aria-level={6}>
                    Your Account
                  </div>
                  <a
                    href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Your Account</span>
                  </a>{" "}
                  <a
                    id="nav_prefetch_yourorders"
                    href="/gp/css/order-history?ref_=nav_AccountFlyout_orders"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Your Orders</span>
                  </a>{" "}
                  <a
                    href="/hz/wishlist/ls?requiresSignIn=1&ref_=nav_AccountFlyout_wl"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Your Wish List</span>
                  </a>{" "}
                  <a
                    href="/gp/yourstore?ref_=nav_AccountFlyout_recs"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Your Recommendations</span>
                  </a>{" "}
                  <a
                    href="/gp/primecentral?ref_=nav_AccountFlyout_prime"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Your Prime Membership</span>
                  </a>{" "}
                  <a
                    href="/gp/redirect.html?location=https%3A%2F%2Fwww.primevideo.com%2F%3Fref_%3D_apv&source=nav_linktree&token=13D4F90D28CD96790B94E6091246BB1B2AE9FA05"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Your Prime Video</span>
                  </a>{" "}
                  <a
                    href="/auto-deliveries?ref_=nav_AccountFlyout_sns"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">
                      Your Subscribe &amp; Save Items
                    </span>
                  </a>{" "}
                  <a
                    href="/hz5/yourmembershipsandsubscriptions?ref_=nav_AccountFlyout_digital_subscriptions"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">
                      Memberships &amp; Subscriptions
                    </span>
                  </a>{" "}
                  <a
                    href="/b/?node=2838698031&ld=AZINSOAYAFlyout&ref_=nav_AccountFlyout_sell"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">Your Seller Account</span>
                  </a>
                  <a
                    href="/hz/mycd/myx?pageType=content&ref_=nav_AccountFlyout_myk"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">
                      Manage Your Content and Devices
                    </span>
                  </a>{" "}
                  <a
                    href="https://www.amazon.in/business/register/org/landing?ref_=nav_ya_flyout_b2b_reg_bottom_create"
                    className="nav-link nav-item"
                  >
                    <span className="nav-text">
                      Your Free Amazon Business Account
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-amazonfresh"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div id="nav-flyout-groceries" className="nav-coreFlyout nav-flyout">
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content">
              <span className="a-size-medium a-text-bold">Shop groceries</span>
              <div className="f3-cgi-flyout-section f3-cgi-flyout-section-stores">
                <a
                  className="a-link-normal"
                  href="/alm/storefront?almBrandId=ctnow&ref=nav_cs_dsk_grfl_stfr_fs"
                >
                  <div className="f3-cgi-flyout-store-box f3-cgi-flyout-store-box-left">
                    <img
                      className="f3-cgi-flyout-store-img"
                      src="https://m.media-amazon.com/images/I/31PgK9rqbzL._SY269_FMpng_.png"
                      alt="Amazon Fresh"
                      width="100px"
                      height="80px"
                    />
                  </div>
                </a>
                <a
                  className="a-link-normal"
                  href="/alm/storefront?almBrandId=foq3ZnlEaO&ref=nav_cs_dsk_grfl_stfr_fm"
                >
                  <div className="f3-cgi-flyout-store-box f3-cgi-flyout-store-box-right">
                    <img
                      className="f3-cgi-flyout-store-img"
                      src="https://m.media-amazon.com/images/I/21hOOiPs0KL._SY135_FMpng_.png"
                      alt="Amazon Fresh Meat"
                      width="100px"
                      height="80px"
                    />
                  </div>
                </a>
              </div>
              <hr
                aria-hidden="true"
                className="a-divider-normal f3-cgi-flyout-divider-static-links"
              />
              <div className="a-section a-text-left f3-cgi-flyout-static-links-section f3-cgi-flyout-static-links-max-width">
                <a
                  className="a-size-base a-link-normal"
                  href="/fmc/learn-more?ref=nav_cs_dsk_grfl_sag"
                >
                  Shop all groceries on Amazon
                </a>
              </div>
            </div>
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-transientFlyout"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div id="nav-flyout-health" className="nav-coreFlyout nav-flyout">
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div id="nav-flyout-pharmacy" className="nav-coreFlyout nav-flyout">
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-abAcquisition"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-abActivation"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-abAccountLink"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-abCatAcquisition"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-abCatActivation"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-abCatAccountLink"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div id="nav-flyout-abCatShuma" className="nav-coreFlyout nav-flyout">
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-abCatClaimedDomain"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-abCatPendingInvitation"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-aj:https://images-eu.ssl-images-amazon.com/images/G/31/img16/wayfinding/json/subnavmay18.json:subnav-sl-megamenu-1:0"
            className="nav-fullWidthSubnavFlyout nav-flyout"
            style={{
              display: "none",
              position: "absolute",
              top: "87.8px",
              left: 0,
              right: 0,
              width: "auto",
              borderRadius: 0,
              borderRight: 0,
              borderLeft: 0,
              paddingLeft: 0,
              paddingRight: 0,
              minWidth: 1000,
              maxWidth: 1519
            }}
          >
            <div
              className="nav-arrow"
              style={{ position: "absolute", left: "310.95px" }}
            >
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content">
              <div className="mega-menu">
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_1_1_1_1?rh=i%3Aapparel%2Cn%3A1953602031&ie=UTF8&lo=apparel">
                      CLOTHING
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_2?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A%211597453031%2Cn%3A%211597455031%2Cn%3A16194128031%2Cn%3A1953602031&bbn=16194128031&sort=date-desc-rank&ie=UTF8">
                        New Arrivals
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_3?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A%211571272031%2Cn%3A1953602031%2Cp_n_feature_nineteen_browse-bin%3A11301357031%7C14852585031&bbn=1953602031&hidden-keywords=-sunglasses+-eyewear+-socks&ie=UTF8&lo=apparel">
                        Top Brands
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_4?rh=i%3Aapparel%2Cn%3A11400137031&ie=UTF8&lo=apparel">
                        All Western Wear
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_5?rh=i%3Aapparel%2Cn%3A1968542031&ie=UTF8&lo=apparel">
                        Shirts, Tops &amp; Tees
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_6?rh=i%3Aapparel%2Cn%3A1968445031&ie=UTF8&lo=apparel">
                        Dresses
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_7?rh=i%3Aapparel%2Cn%3A1968447031&ie=UTF8&lo=apparel">
                        Jeans &amp; Jeggings
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_8?rh=i%3Aapparel%2Cn%3A1968253031&ie=UTF8&lo=apparel">
                        All Ethnic Wear
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_9?rh=i%3Aapparel%2Cn%3A1968255031&ie=UTF8&lo=apparel">
                        Kurtas
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_10?rh=i%3Aapparel%2Cn%3A3723380031&ie=UTF8&lo=apparel">
                        Salwar Suits
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_11?rh=i%3Aapparel%2Cn%3A1968256031&ie=UTF8&lo=apparel">
                        Sarees
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_12?rh=i%3Aapparel%2Cn%3A11400136031&ie=UTF8&lo=apparel">
                        Lingerie, Sleep &amp; Lounge
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_1_1_13?rh=i%3Aapparel%2Cn%3A1968428031&ie=UTF8&lo=apparel">
                        Sportswear
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_1_1_2_1?rh=i%3Aapparel%2Cn%3A11971792031&ie=UTF8&lo=apparel">
                      HANDLOOMS &amp; HANDICRAFTS
                    </a>
                  </h3>
                </div>
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_1_2_1_1?rh=i%3Ashoes%2Cn%3A1983578031&ie=UTF8&lo=shoes">
                      SHOES
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_2?rh=i%3Ashoes%2Cn%3A1983633031&ie=UTF8&lo=shoes">
                        Fashion Sandals
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_3?rh=i%3Ashoes%2Cn%3A1983631031&ie=UTF8&lo=shoes">
                        Pumps &amp; Peeptoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_4?rh=i%3Ashoes%2Cn%3A1983639031&ie=UTF8&lo=shoes">
                        Casual Slippers
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_5?rh=i%3Ashoes%2Cn%3A9780815031&ie=UTF8&lo=shoes">
                        Casual Shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_6?rh=i%3Ashoes%2Cn%3A1983629031&ie=UTF8&lo=shoes">
                        Boots
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_7?rh=i%3Ashoes%2Cn%3A1983579031&ie=UTF8&lo=shoes">
                        Sports Shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_8?rh=i%3Ashoes%2Cn%3A1983638031&ie=UTF8&lo=shoes">
                        Flip-Flops
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_9?rh=i%3Ashoes%2Cn%3A1983627031&ie=UTF8&lo=shoes">
                        Ballet Flats
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_10?rh=i%3Ashoes%2Cn%3A4068645031&ie=UTF8&lo=shoes">
                        Ethnic Footwear
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_1_11?rh=i%3Ashoes%2Cn%3A1983634031&ie=UTF8&lo=shoes">
                        Formal Shoes
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_1_2_2_1?rh=i%3Aapparel%2Cn%3A1968397031&ie=UTF8&lo=apparel">
                      EYEWEAR
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_2_2?rh=i%3Aapparel%2Cn%3A1968401031&ie=UTF8&lo=apparel">
                        Sunglasses
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_2_2_3?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A%211597453031%2Cn%3A%211597455031%2Cn%3A7424748031%2Cn%3A1953602031&bbn=7424748031&ie=UTF8&lo=apparel">
                        Spectacle Frames
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_1_3_1_1?rh=i%3Awatches%2Cn%3A2563505031&ie=UTF8&lo=watches">
                      WATCHES
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_3_1_2?rh=i%3Awatches%2Cn%3A1350387031%2Cn%3A%211499791031%2Cn%3A%211499793031%2Cn%3A10590945031%2Cn%3A2563505031&bbn=10590945031&ie=UTF8&lo=watches&hidden-keywords=-sponsored">
                        Gold &amp; rose-gold
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_3_1_3?rh=i%3Awatches%2Cn%3A1350387031%2Cn%3A%211350388031%2Cn%3A2563505031%2Cp_n_material_browse%3A1480914031&bbn=2563505031&hidden-keywords=-sponsored&ie=UTF8&lo=watches">
                        Stainless steel
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_3_1_4?rh=i%3Awatches%2Cn%3A1350387031%2Cn%3A%211350388031%2Cn%3A2563505031%2Cp_n_material_browse%3A1480907031&bbn=2563505031&hidden-keywords=-sponsored&ie=UTF8&lo=watches">
                        Leather
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_1_3_2_1?rh=i%3Ajewelry%2Cn%3A7124358031&ie=UTF8&lo=jewelry">
                      JEWELLERY
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_3_2_2?rh=i%3Ajewelry%2Cn%3A5210069031&ie=UTF8&lo=jewelry">
                        Gold &amp; Diamond Jewellery
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_3_2_3?rh=i%3Ajewelry%2Cn%3A3543375031&ie=UTF8&lo=jewelry">
                        Traditional Imitation
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_3_2_4?rh=i%3Ajewelry%2Cn%3A5210079031&ie=UTF8&lo=jewelry">
                        Fashion Jewellery
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_3_2_5?rh=i%3Ajewelry%2Cn%3A3588502031&ie=UTF8&lo=jewelry">
                        Silver Jewellery
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_1_3_3_1?rh=i%3Ashoes%2Cn%3A1983338031&ie=UTF8&lo=shoes">
                      HANDBAGS &amp; CLUTCHES
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_3_3_2?rh=i%3Ashoes%2Cn%3A1983355031&ie-UTF8&lo=shoes">
                        Handbags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_1_3_3_3?rh=i%3Aluggage%2Cn%3A2917497031&ie=UTF8&lo=luggage">
                        Wallets
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_1_4_1_1?rh=i%3Aapparel%2Cn%3A1953602031&ie=UTF8&lo=apparel"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Women.jpg" />
                    <h3>Women's Clothing</h3>Explore Store
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_1_5_1_1?rh=i%3Ajewelry%2Cn%3A3588502031&ie=UTF8&lo=jewelry"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Jew/Feb/380-500.jpg" />
                    <h3>Silver Jewellery</h3>Explore Store
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_1_6_1_1?rh=i%3Aapparel%2Cn%3A17489521031&ie=UTF8&lo=apparel"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-Women-2._CB439603748_.jpg" />
                    <h3>MAX | Just Launched</h3>Explore Store
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-aj:https://images-eu.ssl-images-amazon.com/images/G/31/img16/wayfinding/json/subnavmay18.json:subnav-sl-megamenu-2:0"
            className="nav-fullWidthSubnavFlyout nav-flyout"
            style={{
              display: "none",
              position: "absolute",
              top: "87.8px",
              left: 0,
              right: 0,
              width: "auto",
              borderRadius: 0,
              borderRight: 0,
              borderLeft: 0,
              paddingLeft: 0,
              paddingRight: 0,
              minWidth: 1000,
              maxWidth: 1519
            }}
          >
            <div
              className="nav-arrow"
              style={{ position: "absolute", left: "475.462px" }}
            >
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content">
              <div className="mega-menu">
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_2_1_1_1?rh=i%3Aapparel%2Cn%3A1968024031&ie=UTF8&lo=apparel">
                      CLOTHING
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_2?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A!1571272031%2Cn%3A1968024031%2Cn%3A1968120031&ie=UTF8&lo=apparel">
                        T-Shirts &amp; Polos
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_3?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A!1571272031%2Cn%3A1968024031%2Cn%3A1968093031&ie=UTF8&lo=apparel">
                        Shirts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_4?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A!1571272031%2Cn%3A1968024031%2Cn%3A1968125031&ie=UTF8&lo=apparel">
                        Trousers
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_5?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A!1571272031%2Cn%3A1968024031%2Cn%3A1968076031&ie=UTF8&lo=apparel">
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_6?rh=i%3Aapparel%2Cn%3A1968126031&ie=UTF8&lo=apparel">
                        Innerwear
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_7?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A!1571272031%2Cn%3A1968024031%2Cn%3A1968062031&bbn=1968024031&ie=UTF8&lo=apparel">
                        Sportswear
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_8?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A!1571272031%2Cn%3A1968024031%2Cn%3A1968082031&ie=UTF8&lo=apparel">
                        Sleep &amp; Lounge Wear
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_9?rh=i%3Aapparel%2Cn%3A1968248031&ie=UTF8">
                        Ethnic Wear
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_10?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A!1571272031%2Cn%3A1968024031%2Cn%3A1968025031&bbn=1968024031&ie=UTF8&lo=apparel">
                        Ties, Socks &amp; Belts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_11?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A!1571272031%2Cn%3A1968024031%2Cn%3A1968107031&ie=UTF8&lo=apparel">
                        Suits &amp; Blazers
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_12?rh=i%3Aapparel%2Cn%3A1968077031&ie=UTF8">
                        Sweaters
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_1_1_13?rh=i%3Aapparel%2Cn%3A1968088031&ie=UTF8">
                        Jackets &amp; Coats
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_2_2_1_1?rh=i%3Ashoes%2Cn%3A1983518031&ie=UTF8&lo=shoes">
                      SHOES
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_2?rh=i%3Ashoes%2Cn%3A1983519031&ie=UTF8&lo=shoes">
                        Sports Shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_3?rh=i%3Ashoes%2Cn%3A1983572031&ie=UTF8&lo=shoes">
                        Formal Shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_4?rh=i%3Ashoes%2Cn%3A9780814031&ie=UTF8&lo=shoes">
                        Casual Shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_5?rh=i%3Ashoes%2Cn%3A1983577031&ie=UTF8&lo=shoes">
                        Sneakers
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_6?rh=i%3Ashoes%2Cn%3A1983573031&ie=UTF8&lo=shoes">
                        Loafers &amp; Mocassins
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_7?rh=i%3Ashoes%2Cn%3A1983575031&ie=UTF8&lo=shoes">
                        Flip-Flops
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_8?rh=i%3Ashoes%2Cn%3A1983568031&ie=UTF8&lo=shoes">
                        Boots
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_9?rh=i%3Ashoes%2Cn%3A1983571031&ie=UTF8&lo=shoes">
                        Sandals &amp; Floaters
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_10?rh=i%3Ashoes%2Cn%3A1983576031&ie=UTF8&lo=shoes">
                        Thong Sandals
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_2_1_11?rh=i%3Ashoes%2Cn%3A1983567031&ie=UTF8&lo=shoes">
                        Boat Shoes
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_2_3_1_1?rh=i%3Awatches%2Cn%3A2563504031&ie=UTF8&lo=watches">
                      WATCHES
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_3_1_2?rh=i%3Awatches%2Cn%3A1350387031%2Cn%3A%211350388031%2Cn%3A2563504031%2Cp_n_material_browse%3A1480914031&bbn=2563504031&hidden-keywords=-sponsored&ie=UTF8&lo=watches">
                        Metallic
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_3_1_3?rh=i%3Awatches%2Cn%3A1350387031%2Cn%3A%211350388031%2Cn%3A2563504031%2Cp_n_feature_seven_browse-bin%3A1480903031&bbn=2563504031&hidden-keywords=-sponsored&ie=UTF8&lo=watches">
                        Chronographs
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_3_1_4?rh=i%3Awatches%2Cn%3A1350387031%2Cp_n_material_browse%3A1480907031%2Cn%3A%211350388031%2Cn%3A2563504031&bbn=1350388031&hidden-keywords=-sponsored&ie=UTF8&lo=watches">
                        Leather
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_2_3_2_1?rh=i%3Ajewelry%2Cn%3A1951048031%2Cn%3A!1951049031%2Cn%3A7124359031&ie=UTF8&lo=jewelry">
                      JEWELLERY
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_3_2_2?rh=i%3Ajewelry%2Cn%3A1951048031%2Cn%3A%211951049031%2Cn%3A7124359031%2Cn%3A7124369031&bbn=7124359031&ie=UTF8&lo=jewelry">
                        Rings
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_3_2_3?rh=i%3Ajewelry%2Cn%3A1951048031%2Cn%3A%211951049031%2Cn%3A7124359031%2Cn%3A7124364031&bbn=7124359031&ie=UTF8&lo=jewelry">
                        Bracelets
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_2_3_3_1?rh=i%3Aapparel%2Cn%3A1968032031&ie=UTF8&lo=apparel">
                      EYEWEAR
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_3_3_2?rh=i%3Aapparel%2Cn%3A1968036031&ie=UTF8&lo=apparel">
                        Sunglasses
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_2_3_3_3?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A%211597453031%2Cn%3A%211597455031%2Cn%3A7424748031%2Cn%3A1968024031&bbn=7424748031&ie=UTF8&lo=apparel">
                        Spectacle Frames
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_2_3_4_1?rh=i%3Aluggage%2Cn%3A2917496031&ie=UTF8&lo=luggage">
                      WALLETS
                    </a>
                  </h3>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_2_4_1_1?rh=i%3Aapparel%2Cn%3A1968024031&ie=UTF8&lo=apparel"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Men.jpg" />
                    <h3>Men's Clothing</h3>Explore Store
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_2_5_1_1?rh=i%3Ashoes%2Cn%3A1571283031%2Cn%3A%211571284031%2Cn%3A1983396031%2Cn%3A1983518031%2Cn%3A1983519031%2Cn%3A1983550031%2Cp_n_feature_nineteen_browse-bin%3A11301363031%2Cp_98%3A10440597031&bbn=1983550031&ie=UTF8&lo=shoes"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Running-Shoes.jpg" />
                    <h3>Running Shoes</h3>See More
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_2_6_1_1?rh=i%3Aapparel%2Cn%3A17489523031&ie=UTF8&lo=apparel"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-men-2._CB439603748_.jpg" />
                    <h3>MAX | Just Launched</h3>Explore Store
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-aj:https://images-eu.ssl-images-amazon.com/images/G/31/img16/wayfinding/json/subnavmay18.json:subnav-sl-megamenu-3:0"
            className="nav-fullWidthSubnavFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content">
              <div className="mega-menu">
                <div className="mm-column">
                  <h3>GIRLS</h3>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_1_2_1?rh=i%3Aapparel%2Cn%3A15952299031&ie=UTF8&lo=apparel">
                      ALL CLOTHING
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_1_2_2?rh=i%3Aapparel%2Cn%3A1968010031&ie=UTF8&lo=apparel">
                        Tops &amp; Tees
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_1_2_3?rh=i%3Aapparel%2Cn%3A1967972031&ie=UTF8&lo=apparel">
                        Dresses
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_1_2_4?rh=i%3Aapparel%2Cn%3A1967974031&ie=UTF8&lo=apparel">
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_1_2_5?rh=i%3Aapparel%2Cn%3A1968015031&ie=UTF8&lo=apparel">
                        Pants
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_1_2_6?rh=i%3Aapparel%2Cn%3A1967982031&ie=UTF8&lo=apparel">
                        Clothing Sets
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_1_2_7?rh=i%3Aapparel%2Cn%3A1953210031&ie=UTF8&lo=apparel">
                        Baby Girl
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_1_3_1?rh=i%3Ashoes%2Cn%3A1983456031&ie=UTF8&lo=shoes">
                      SHOES
                    </a>
                  </h3>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_1_4_1?rh=i%3Awatches%2Cn%3A1350387031%2Cn%3A%211499791031%2Cn%3A%211499793031%2Cn%3A13815992031%2Cn%3A5518819031&bbn=13815992031&hidden-keywords=-sponsored&ie=UTF8">
                      WATCHES
                    </a>
                  </h3>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_1_5_1?rh=i%3Aapparel%2Cn%3A1967947031%2Cn%3A4384739031%2Cn%3A4091078031%2Cn%3A%211975997031%2Cn%3A%211571273031%2Cn%3A1571271031&ie=UTF8&bbn=4384739031&lo=apparel">
                      SUNGLASSES
                    </a>
                  </h3>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_1_6_1?rh=i%3Ajewelry%2Cn%3A1951048031%2Cn%3A%212152573031%2Cn%3A%212152575031%2Cn%3A9272613031%2Cn%3A7124361031%2Cn%3A%212152575031%2Cn%3A%212152573031%2Cn%3A!2152573031%2Cn%3A!2152575031&bbn=9272613031&ie=UTF8">
                      JEWELLERY
                    </a>
                  </h3>
                </div>
                <div className="mm-column">
                  <h3>BOYS</h3>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_2_2_1?rh=i%3Aapparel%2Cn%3A15952293031&ie=UTF8&lo=apparel">
                      ALL CLOTHING
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_2_2_2?rh=i%3Aapparel%2Cn%3A1967922031&ie=UTF8&lo=apparel">
                        T-Shirts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_2_2_3?rh=i%3Aapparel%2Cn%3A1967895031&ie=UTF8&lo=apparel">
                        Shirts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_2_2_4?rh=i%3Aapparel%2Cn%3A1967887031&ie=UTF8&lo=apparel">
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_2_2_5?rh=i%3Aapparel%2Cn%3A1967927031&ie=UTF8&lo=apparel">
                        Pants
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_2_2_6?rh=i%3Aapparel%2Cn%3A1967893031&ie=UTF8&lo=apparel">
                        Clothing Sets
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_2_2_7?rh=i%3Aapparel%2Cn%3A1953149031&ie=UTF8&lo=apparel">
                        Baby Boy
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_2_3_1?rh=i%3Ashoes%2Cn%3A1983397031&ie=UTF8&lo=shoes">
                      SHOES
                    </a>
                  </h3>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_2_4_1?rh=i%3Awatches%2Cn%3A1350387031%2Cn%3A%211499791031%2Cn%3A%211499793031%2Cn%3A13815992031%2Cn%3A2563506031&bbn=13815992031&hidden-keywords=-sponsored&ie=UTF8">
                      WATCHES
                    </a>
                  </h3>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_2_5_1?rh=i%3Aapparel%2Cn%3A1967862031%2Cn%3A4384739031%2Cn%3A4091078031%2Cn%3A%211975997031%2Cn%3A%211571273031%2Cn%3A1571271031&ie=UTF8&bbn=4384739031&lo=apparel">
                      SUNGLASSES
                    </a>
                  </h3>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_2_6_1?rh=i%3Ajewelry%2Cn%3A1951048031%2Cn%3A%212152573031%2Cn%3A%212152575031%2Cn%3A9272613031%2Cn%3A7124360031%2Cn%3A%212152575031%2Cn%3A%212152573031%2Cn%3A!2152573031%2Cn%3A!2152575031&bbn=9272613031&ie=UTF8">
                      JEWELLERY
                    </a>
                  </h3>
                </div>
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_3_3_1_1?rh=i%3Aapparel%2Cn%3A9361420031&ie=UTF8">
                      KIDS
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_3_1_2?rh=i%3Aapparel%2Cn%3A4091091031&ie=UTF8&lo=apparel">
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_3_1_3?rh=i%3Aapparel%2Cn%3A4091095031&ie=UTF8&lo=shoes">
                        Shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_3_1_4?rh=i%3Awatches%2Cn%3A1350387031%2Cn%3A%211499791031%2Cn%3A%211499793031%2Cn%3A13815992031&bbn=13815992031&hidden-keywords=-sponsored&ie=UTF8">
                        Watches
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_3_1_5?rh=i%3Ajewelry%2Ck%3A%22kids-jewelry-collection-store-2016%22&ie=UTF8">
                        Jewellery
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_3_1_6?rh=i%3Aapparel%2Cn%3A4384739031&ie=UTF8&lo=apparel">
                        Sunglasses
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_3_1_7?rh=i%3Aluggage%2Cn%3A2917444031&ie=UTF8&lo=luggage">
                        School Bags
                      </a>
                    </li>
                  </ul>
                  <h3>BABY</h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_3_2_2?rh=i%3Aapparel%2Cn%3A1953148031&ie=UTF8&lo=apparel">
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_3_3_2_3?rh=i%3Aapparel%2Cn%3A1953272031&ie=UTF8&lo=shoes">
                        Shoes
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_3_4_1_1?rh=i%3Aapparel%2Cn%3A17489524031&ie=UTF8&lo=apparel"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-Kids._CB1198675309_.jpg" />
                    <h3>MAX | Just Launched</h3>Explore Store
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_3_5_1_1?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A%211571273031%2Cn%3A%211975997031%2Cn%3A4091091031%2Cn%3A1967851031&bbn=4091091031&hidden-keywords=-sunglasses+-frames+-belts+-caps&field-pct-off-with-tax=40-&ie=UTF8&lo=apparel"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Apparel/KA/GW/Sub-Nav/2._CB469401627_.jpg" />
                    <h3>Boys' Clothing</h3>40% - 70% off
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_3_6_1_1?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A%211571273031%2Cn%3A%211975997031%2Cn%3A4091091031%2Cp_n_pct-off-with-tax%3A40-%2Cn%3A1967936031&bbn=4091091031&hidden-keywords=-sunglasses+-frames+-belts+-caps+-socks+-muffs+-band&ie=UTF8&lo=apparel"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Apparel/KA/GW/Sub-Nav/girls._CB469401626_.jpg" />
                    <h3>Girls' Clothing</h3>40% - 70% off
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-aj:https://images-eu.ssl-images-amazon.com/images/G/31/img16/wayfinding/json/subnavmay18.json:subnav-sl-megamenu-4:0"
            className="nav-fullWidthSubnavFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content">
              <div className="mega-menu">
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_4_1_1_1?rh=i%3Aluggage%2Cn%3A2917431031&ie=UTF8&lo=luggage">
                      BAGS &amp; BACKPACKS
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_1_1_2?rh=i%3Aluggage%2Cn%3A2917430031&ie=UTF8&lo=luggage">
                        Backpacks
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_1_1_3?rh=i%3Aluggage%2Cn%3A2917441031&ie=UTF8&lo=luggage">
                        Laptop Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_1_1_4?rh=i%3Aluggage%2Cn%3A2917438031&ie=UTF8&lo=luggage">
                        Briefcases
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_1_1_5?rh=i%3Aluggage%2Cn%3A2917442031&ie=UTF8&lo=luggage">
                        Messenger Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_1_1_6?rh=i%3Aluggage%2Cn%3A1984997031&ie=UTF8&lo=luggage">
                        Rucksacks
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_1_1_7?rh=i%3Aluggage%2Cn%3A2917444031&ie=UTF8&lo=luggage">
                        School Bags
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_4_1_2_1?rh=i%3Aluggage%2Cn%3A2917432031&ie=UTF8&lo=luggage">
                      LUGGAGE
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_1_2_2?rh=i%3Aluggage%2Cn%3A2917450031&ie=UTF8&lo=luggage">
                        Suitcases &amp; Trolley Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_1_2_3?rh=i%3Aluggage%2Cn%3A2917451031&ie=UTF8&lo=luggage">
                        Travel Duffles
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_1_2_4?rh=i%3Aluggage%2Cn%3A2917434031&ie=UTF8&lo=luggage">
                        Travel Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_4_2_1_1?rh=i%3Ashoes%2Cn%3A1983338031&ie-UTF8&lo=shoes">
                      HANDBAGS &amp; CLUTCHES
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_2_1_2?rh=i%3Ashoes%2Cn%3A1983355031&ie-UTF8&lo=shoes">
                        Handbags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_2_1_3?rh=i%3Ashoes%2Cn%3A1983350031&ie-UTF8&lo=shoes">
                        Clutches
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_2_1_4?rh=i%3Ashoes%2Cn%3A1983356031&ie-UTF8&lo=shoes">
                        Totes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_2_1_5?rh=i%3Ashoes%2Cn%3A1983351031&ie-UTF8&lo=shoes">
                        Sling Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_2_1_6?rh=i%3Ashoes%2Cn%3A1983352031&ie-UTF8&lo=shoes">
                        Hobos and Shoulder Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_2_1_7?rh=i%3Ashoes%2Cn%3A1983354031&ie-UTF8&lo=shoes">
                        Satchels
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_4_2_2_1?rh=i%3Aluggage%2Cn%3A2917484031&ie=UTF8&lo=luggage">
                      WALLETS
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_2_2_2?rh=i%3Aluggage%2Cn%3A2917496031&ie=UTF8&lo=luggage">
                        Men's Wallets
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_2_2_3?rh=i%3Aluggage%2Cn%3A2917497031&ie=UTF8&lo=luggage">
                        Women's Wallets
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <h3>STORES</h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_3_1_2?rh=i%3Ashoes%2Cn%3A4296709031&ie-UTF8&lo=shoes">
                        Leather Handbags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_3_1_3?rh=i%3Ashoes%2Cn%3A4296705031&ie-UTF8&lo=shoes">
                        Ethnic Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_3_1_4?rh=i%3Ashoes%2Cn%3A4296706031&ie-UTF8&lo=shoes">
                        Party Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_3_1_5?rh=i%3Aluggage%2Cn%3A4894771031&ie=UTF8&lo=luggage">
                        Work Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_3_1_6?rh=i%3Aluggage%2Cn%3A5521028031&ie=UTF8&lo=luggage">
                        College Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_4_3_1_7?rh=i%3Ashoes%2Cn%3A4296704031&ie=UTF8&lo=shoes">
                        Premium Handbags
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_4_4_1_1?rh=i%3Ashoes%2Cn%3A1983338031&ie=UTF8&lo=shoes"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/HB.jpg" />
                    <h3>Handbags</h3>40%-70% off
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_4_5_1_1?rh=i%3Aluggage%2Cn%3A2917430031&ie=UTF8&lo=luggage"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/BP.jpg" />
                    <h3>Backpacks</h3>40%-70% off
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_4_6_1_1?rh=i%3Aluggage%2Cn%3A2454169031%2Cp_n_date_first_available_absolute%3A1318488031&bbn=2454169031&sort=popularity-rank&hidden-keywords=-helmet+-handbags+-trajectory+-alice+-smiledrive+-rewy+-sskk+-asus+-xanax+-bmax+-fansport+-miradh+-maxeon+-bagex+-bizarre+-torch+-mug+-urination+-shopee+-B01ISL7R6W+-Pcs+-jhalak+-elektra+-forberesten+-briefcase+-redlicchi+-aeoss+-storite+-multizone+-generic+-caps+-Frantic+-Especial+-9303+-Techhark+-Crystu+-cord+-PAZZO+-dndeal+-tent+-B07DCQFHZQ+-B01NBPK7WP+-B01N11LCKF+-PETRICE+-OZOY+-BLUTECH+-SAISAN+-Duffel&ie=UTF8"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/BWL.jpg" />
                    <h3>New Arrivals</h3>Bags and Luggage
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-aj:https://images-eu.ssl-images-amazon.com/images/G/31/img16/wayfinding/json/subnavmay18.json:subnav-sl-megamenu-5:0"
            className="nav-fullWidthSubnavFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content">
              <div className="mega-menu">
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_5_1_1_1?rh=i%3Afashion%2Cn%3A12456568031&ie=UTF8 ">
                      MEN
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_2?ie=UTF8&node=1983550031&bbn=1983519031">
                        Running shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_3?ie=UTF8&node=1983547031&bbn=1983519031">
                        Training shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_4?ie=UTF8&node=1983519031&bbn=1983519031">
                        Walking shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_5?ie=UTF8&node=1983538031&bbn=1983519031">
                        Football shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_6?ie=UTF8&node=1983560031&bbn=1983519031">
                        Trekking shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_7?ie=UTF8&node=1968067031&bbn=1968062031">
                        Sports t-shirts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_8?ie=UTF8&node=1968068031&bbn=1968062031">
                        Shorts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_9?ie=UTF8&node=1968071031&bbn=1968062031">
                        Track pants{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_10?ie=UTF8&node=1968024031&bbn=1968024031">
                        Swimwear
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_11?ie=UTF8&node=11960414031&bbn=1968024031">
                        Sweatshirts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_12?ie=UTF8&node=2917502031">
                        Gym bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_1_1_13?ie=UTF8&hidden-keywords=sports%2C+athletic%2C+-belt%2C+-glove&page=1&rh=n%3A1968025031&bbn=1968025031">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_5_2_1_1?ie=UTF8&node=12302884031">
                      WOMEN
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_2?ie=UTF8&node=1983610031&bbn=1983579031">
                        Running shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_3?ie=UTF8&node=1983607031&bbn=1983579031">
                        Training shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_4?ie=UTF8&node=1983606031&bbn=1983579031">
                        Walking shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_5?ie=UTF8&node=1983579031&bbn=1983579031">
                        Trekking shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_6?ie=UTF8&node=1968428031&bbn=1968428031">
                        Sports t-shirts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_7?ie=UTF8&node=1968433031&bbn=1968467031">
                        Sports bras
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_8?ie=UTF8&node=1968428031&bbn=1968428031">
                        Tights &amp; leggings
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_9?ie=UTF8&node=1968428031&bbn=1968428031">
                        Shorts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_10?ie=UTF8&node=1968533031&bbn=1968428031">
                        Swimwear
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_11?ie=UTF8&node=11400133031&bbn=1968428031">
                        Sweatshirts
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_12?ie=UTF8&node=2917502031&bbn=2917502031">
                        Gym bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_2_1_13?ie=UTF8&hidden-keywords=sports%2C+athletic%2C+-belt%2C+-glove&page=1&rh=n%3A1968391031&bbn=1968391031">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <h3>
                    <a href="/s/ref=mega_sv_s23_5_3_1_1?rh=i%3Afashion%2Cn%3A12302885031&ie=UTF8 ">
                      KIDS
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_3_1_2?ie=UTF8&node=1967873031&bbn=1967851031">
                        Boys' Clothing
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_3_1_3?ie=UTF8&node=1983398031&bbn=1983397031">
                        Boys' Shoes
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_3_1_4?ie=UTF8&node=1967955031&bbn=1967936031">
                        Girls' Clothing
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_3_1_5?ie=UTF8&node=1983457031&bbn=1983456031">
                        Girls' Shoes
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_5_3_2_1?rh=n%3A12421136031%2Ci%3Aaps&ie=UTF8">
                      ACCESSORIES
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_3_2_2?rh=i%3Aluggage%2Cn%3A2454169031%2Cn%3A%212864250031%2Cn%3A%212938605031%2Cn%3A12421136031%2Cn%3A2917431031%2Cn%3A2917430031%2Cn%3A2917436031&bbn=12421136031&ie=UTF8">
                        Backpacks
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_3_2_3?rh=i%3Aluggage%2Cn%3A2454169031%2Cn%3A%212864250031%2Cn%3A%212938605031%2Cn%3A12421136031%2Cn%3A2917431031%2Cn%3A2917502031&bbn=12421136031&ie=UTF8">
                        Gym Bags
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_3_2_4?rh=i%3Awatches%2Cn%3A3044924031&ie=UTF8&bbn=3044924031">
                        Sports Watches
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <h3>TOP BRANDS</h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_1_2?rh=i%3Afashion%2Cn%3A6648217031%2Cp_89%3APuma&bbn=7459781031&ie=UTF8">
                        Puma
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_1_3?ie=UTF8&page=1&rh=n%3A6648217031%2Cp_89%3Aadidas&bbn=7459781031">
                        adidas
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_1_4?ie=UTF8&page=1&rh=n%3A6648217031%2Cp_89%3Areebok&bbn=7459781031">
                        Reebok
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_1_5?ie=UTF8&page=1&rh=n%3A6648217031%2Cp_89%3Askechers&bbn=7459781031">
                        Skechers
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_1_6?ie=UTF8&page=1&rh=n%3A6648217031%2Cp_89%3Aasics&bbn=7459781031">
                        Asics
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_1_7?ie=UTF8&page=1&rh=n%3A6648217031%2Cp_89%3Afila&bbn=7459781031">
                        Fila
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_1_8?ie=UTF8&page=1&rh=n%3A6648217031%2Cp_89%3Aspeedo&bbn=7459781031">
                        Speedo
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_1_9?ie=UTF8&page=1&rh=n%3A6648217031%2Cp_89%3Anew+balance&bbn=7459781031">
                        New Balance
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_1_10?ie=UTF8&page=1&rh=n%3A6648217031%2Cp_89%3Anike&bbn=7459781031">
                        Nike
                      </a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/s/ref=mega_sv_s23_5_4_2_1?rh=i%3Asporting%2Cn%3A1984443031&ie=UTF8">
                      SPORTS AND FITNESS GEAR
                    </a>
                  </h3>
                  <ul className="mm-category-list">
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_2_2?rh=i%3Asporting%2Cn%3A3403628031&ie=UTF8">
                        Cricket
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_2_3?rh=i%3Asporting%2Cn%3A3403619031&ie=UTF8">
                        Badminton
                      </a>
                    </li>
                    <li>
                      <a href="/s/ref=mega_sv_s23_5_4_2_4?rh=i%3Asporting%2Cn%3A3403635031&ie=UTF8">
                        Exercise and Fitness
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_5_5_1_1?rh=i%3Afashion%2Cn%3A12456568031&ie=UTF8 "
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Sports_M._CB483839267_.jpg" />
                    <h3>Men's sportswear</h3>See More
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_5_6_1_1?rh=i%3Afashion%2Cn%3A12302884031&ie=UTF8 "
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Sports_W._CB483839267_.jpg" />
                    <h3>Women's sportswear</h3>See More
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-aj:https://images-eu.ssl-images-amazon.com/images/G/31/img16/wayfinding/json/subnavmay18.json:subnav-sl-megamenu-7:0"
            className="nav-fullWidthSubnavFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content">
              <div className="mega-menu">
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_7_1_1_1?rh=i%3Aapparel%2Cn%3A1571271031%2Cp_n_pct-off-with-tax%3A40-&bbn=1571271031&hidden-keywords=-socks+-gloves+-belts+-caps+-sunglasses+-petals&ie=UTF8&lo=apparel"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/CL.jpg" />
                    <h3>Clothing</h3>40% - 70% off
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_7_2_1_1?rh=i%3Ashoes%2Cn%3A1571283031%2Cn%3A%211571284031%2Cn%3A1983396031%2Cp_85%3A10440599031&bbn=1983396031&field-pct-off-with-tax=40-&ie=UTF8&lo=shoes"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/SH.jpg" />
                    <h3>Shoes</h3>40% - 70% off
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_7_3_1_1?rh=i%3Awatches%2Cn%3A1350387031%2Cn%3A%211350388031%2Cn%3A2563505031%2Cp_85%3A10440599031&bbn=2563505031&field-pct-off-with-tax=40-&ie=UTF8&lo=watches"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/W.jpg" />
                    <h3>Watches</h3>40% - 70% off
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_7_4_1_1?rh=i%3Aluggage%2Cn%3A2454169031%2Cp_85%3A10440599031&bbn=2454169031&field-pct-off-with-tax=40-&ie=UTF8"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/LG.jpg" />
                    <h3>Bags &amp; Luggage</h3>40% - 70% off
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_7_5_1_1?rh=i%3Ajewelry%2Cn%3A7124358031&field-pct-off-with-tax=70-&ie=UTF8&lo=jewelry"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/JW.jpg" />
                    <h3>Jewellery</h3>Minimum 70% off
                  </a>
                </div>
                <div className="mm-column">
                  <a
                    className="mm-merch-panel"
                    href="/s/ref=mega_sv_s23_7_6_1_1?rh=i%3Aapparel%2Cn%3A1571271031%2Cn%3A%211571273031%2Cn%3A%211975997031%2Cn%3A4091078031%2Cp_85%3A10440599031&bbn=4091078031&field-pct-off-with-tax=40-&ie=UTF8"
                  >
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/SG.jpg" />
                    <h3>Sunglasses</h3>40% - 80% off
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div id="nav-flyout-icp" className="nav-coreFlyout nav-flyout">
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
          <div
            id="nav-flyout-icp-footer-flyout"
            className="nav-coreFlyout nav-flyout"
          >
            <div className="nav-arrow">
              <div className="nav-arrow-inner" />
            </div>
            <div className="nav-template nav-flyout-content nav-spinner" />
            <div className="nav-flyout-buffer-left" />
            <div className="nav-flyout-buffer-right" />
            <div className="nav-flyout-buffer-top" />
            <div className="nav-flyout-buffer-bottom" />
          </div>
        </div>
        <div id="nav-main" className="nav-sprite">
          <div className="nav-left">
            <a
              href="javascript: void(0)"
              id="nav-hamburger-menu"
              role="button"
              aria-label="Open All Categories Menu"
              aria-expanded="false"
              data-csa-c-type="widget"
              data-csa-c-slot-id="HamburgerMenuDesktop"
              data-csa-c-interaction-events="click"
              data-csa-c-id="jl3tjq-o9ebuw-4xplo-t62lq3"
            >
              <i className="hm-icon nav-sprite" />
              <span className="hm-icon-label">All</span>
            </a>
          </div>
          <div className="nav-fill">
            <div id="nav-shop"></div>
            <div id="nav-xshop-container">
              <div id="nav-xshop" className="nav-progressive-content">
                <a
                  href="/fresh?ref_=nav_cs_grocery"
                  aria-expanded="false"
                  className="nav-a  "
                  data-ux-jq-mouseenter="true"
                  id="nav-link-groceries"
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav-link-groceries"
                  data-csa-c-content-id="nav_cs_grocery"
                  data-csa-c-id="ecu9bp-iqv9yr-i3ac9p-wq6k2a"
                >
                  <span>Fresh</span>
                  <span
                    className="nav-icon nav-arrow"
                    style={{ visibility: "visible" }}
                  />
                </a>
                <a
                  href="/minitv?ref_=nav_avod_desktop_topnav"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_1"
                  data-csa-c-content-id="nav_avod_desktop_topnav"
                  data-csa-c-id="mz0fg3-bc58tc-gizx4y-91tfft"
                >
                  MX Player
                </a>
                <a
                  href="/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_2"
                  data-csa-c-content-id="nav_cs_sell_T3"
                  data-csa-c-id="o9r3vs-9ubz57-1qr9ie-784fb2"
                >
                  Sell
                </a>
                <a
                  href="/gp/bestsellers/?ref_=nav_cs_bestsellers"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_3"
                  data-csa-c-content-id="nav_cs_bestsellers"
                  data-csa-c-id="xtg8c6-x9k8nr-iltgth-du6hhm"
                >
                  Best Sellers
                </a>
                <a
                  href="/deals?ref_=nav_cs_gb"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_4"
                  data-csa-c-content-id="nav_cs_gb"
                  data-csa-c-id="hd693s-hqv3ab-akz4xd-u352j8"
                >
                  Today's Deals
                </a>
                <a
                  href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_5"
                  data-csa-c-content-id="nav_cs_mobiles"
                  data-csa-c-id="7ioioy-ovjxpb-2jxxm0-qmpote"
                >
                  Mobiles
                </a>
                <a
                  href="/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_6"
                  data-csa-c-content-id="nav_cs_electronics"
                  data-csa-c-id="9qxb85-o1m53o-c6zdj8-1lyjo0"
                >
                  {" "}
                  Electronics{" "}
                </a>
                <a
                  href="/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_7"
                  data-csa-c-content-id="nav_cs_help"
                  data-csa-c-id="fivtpx-m0sdtm-pnbi60-n3xcam"
                >
                  Customer Service
                </a>
                <a
                  href="/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_8"
                  data-csa-c-content-id="nav_cs_home"
                  data-csa-c-id="qwk9wh-tb7gp7-oke5wd-5uebw9"
                >
                  Home &amp; Kitchen
                </a>
                <a
                  href="/prime?ref_=nav_cs_primelink_nonmember"
                  aria-expanded="false"
                  className="nav-a  "
                  data-ux-jq-mouseenter="true"
                  id="nav-link-amazonprime"
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav-link-amazonprime"
                  data-csa-c-content-id="nav_cs_primelink_nonmember"
                  data-csa-c-id="9i5fq7-65z5j3-86ghpp-7tl7r4"
                >
                  <span>Prime</span>
                  <span
                    className="nav-icon nav-arrow"
                    style={{ visibility: "visible" }}
                  />
                </a>
                <a
                  href="/gp/sva/dashboard?ref_=nav_cs_apay"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_10"
                  data-csa-c-content-id="nav_cs_apay"
                  data-csa-c-id="gkutvs-hd0j4c-gig2v3-dcp7rp"
                >
                  Amazon Pay
                </a>
                <a
                  href="/gp/new-releases/?ref_=nav_cs_newreleases"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_11"
                  data-csa-c-content-id="nav_cs_newreleases"
                  data-csa-c-id="gfh95s-5tdwao-es7yru-otohdf"
                >
                  New Releases
                </a>
                <a
                  href="/gp/browse.html?node=6648217031&ref_=nav_cs_fashion"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_12"
                  data-csa-c-content-id="nav_cs_fashion"
                  data-csa-c-id="eyrz9q-yjicdd-tu24l7-d46oa9"
                >
                  Fashion
                </a>
                <a
                  href="/Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_13"
                  data-csa-c-content-id="nav_cs_automotive"
                  data-csa-c-id="3xh66t-9a9ds2-qugzfm-d215nh"
                >
                  Car &amp; Motorbike
                </a>
                <a
                  href="/computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_14"
                  data-csa-c-content-id="nav_cs_pc"
                  data-csa-c-id="jzcgkw-cgtrix-8du0n-x7n4ug"
                >
                  Computers
                </a>
                <a
                  href="/Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_15"
                  data-csa-c-content-id="nav_cs_sports"
                  data-csa-c-id="c1hy9l-9rwvlt-xund9i-k2qexw"
                >
                  Sports, Fitness &amp; Outdoors
                </a>
                <a
                  href="/beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_16"
                  data-csa-c-content-id="nav_cs_beauty"
                  data-csa-c-id="7i1utw-gdegnk-n70s2i-1uhbmt"
                >
                  Beauty &amp; Personal Care
                </a>
                <a
                  href="/Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_17"
                  data-csa-c-content-id="nav_cs_books"
                  data-csa-c-id="ln748m-scdd44-1z81b7-r3yebn"
                >
                  Books
                </a>
                <a
                  href="/Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_18"
                  data-csa-c-content-id="nav_cs_hi"
                  data-csa-c-id="urirmp-5w6id7-407xt9-ku05nm"
                >
                  Home Improvement
                </a>
                <a
                  href="/Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_19"
                  data-csa-c-content-id="nav_cs_toys"
                  data-csa-c-id="afv9hd-70zwgi-3bsbdf-30j9rm"
                >
                  Toys &amp; Games
                </a>
                <a
                  href="/gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_20"
                  data-csa-c-content-id="nav_cs_gc"
                  data-csa-c-id="p21bxy-mp9dz3-7ey3tr-5sgts1"
                >
                  Gift Cards
                </a>
                <a
                  href="/health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_21"
                  data-csa-c-content-id="nav_cs_hpc"
                  data-csa-c-id="bccfnw-2521l4-pt2oro-bdc63o"
                >
                  Health, Household &amp; Personal Care
                </a>
                <a
                  href="/Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_22"
                  data-csa-c-content-id="nav_cs_baby"
                  data-csa-c-id="akwpt5-yd7y1h-woybov-lpb0xu"
                >
                  Baby
                </a>
                <a
                  href="/Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_23"
                  data-csa-c-content-id="nav_cs_grocery"
                  data-csa-c-id="xa8h9l-7cf2vb-jd6egh-p6c99z"
                >
                  Grocery &amp; Gourmet Foods
                </a>
                <a
                  href="/Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_24"
                  data-csa-c-content-id="nav_cs_custom"
                  data-csa-c-id="6s7zm7-4f0jp-mzwd4b-tl2uge"
                >
                  Custom Products
                </a>
                <a
                  href="/video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_25"
                  data-csa-c-content-id="nav_cs_video_games"
                  data-csa-c-id="6p6g01-njhbjm-g4hfkk-fxncr4"
                >
                  Video Games
                </a>
                <a
                  href="/Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_26"
                  data-csa-c-content-id="nav_cs_pets"
                  data-csa-c-id="egtbip-pmtxgh-j8nfiz-i5volt"
                >
                  Pet Supplies
                </a>
                <a
                  href="/Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_27"
                  data-csa-c-content-id="nav_cs_audible"
                  data-csa-c-id="k36o4a-xem50i-6is1pu-o680b3"
                >
                  Audible
                </a>
                <a
                  href="/gcx/-/gfhz/?ref_=nav_cs_giftfinder"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_28"
                  data-csa-c-content-id="nav_cs_giftfinder"
                  data-csa-c-id="3x5ml9-w60be1-tkab00-xbmblo"
                >
                  Gift Ideas{" "}
                </a>
                <a
                  href="/auto-deliveries/landing?ref_=nav_cs_sns"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_29"
                  data-csa-c-content-id="nav_cs_sns"
                  data-csa-c-id="7rchrh-mnanhi-1ej04h-k4q30p"
                >
                  Subscribe &amp; Save
                </a>
                <a
                  href="/b/?node=6637738031&ref_=nav_cs_amazonbasics"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_30"
                  data-csa-c-content-id="nav_cs_amazonbasics"
                  data-csa-c-id="a36gq4-j3zxyp-vllkgu-3h40vm"
                >
                  AmazonBasics
                </a>
                <a
                  href="/Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books"
                  className="nav-a  "
                  tabIndex={0}
                  data-csa-c-type="link"
                  data-csa-c-slot-id="nav_cs_31"
                  data-csa-c-content-id="nav_cs_kindle_books"
                  data-csa-c-id="tqz45u-2s7zdp-1hzpyv-ptth7e"
                >
                  Kindle eBooks
                </a>
              </div>
            </div>
          </div>
          <div className="nav-right">
            {/* Navyaan SWM */}
            <div id="nav-swmslot">
              {/* Scheduled SWM widget failed to render */}
            </div>
          </div>
        </div>
        <div id="nav-subnav-toaster" />
        <div id="nav-progressive-subnav">
          <div id="nav-subnav" className="spacious" data-category="watches">
            <a
              href="/b/?ie=UTF8&node=6648217031&ref_=topnav_storetab_top_ap_mega"
              className="nav-a nav-hasImage"
              tabIndex={0}
            >
              <span className="nav-a-content">
                <img
                  src="https://m.media-amazon.com/images/G/31/IMG17/Fashion/January/Ingresses/Subnav/Amazon-fashion-logo._CB485923938_.png"
                  className="nav-categ-image"
                  alt="Amazon Fashion"
                />
              </span>
            </a>
            <a
              href="/gp/help/customer/display.html/?ie=UTF8&nodeId=201149900&ref_=sv_top_ap_mega_7"
              className="nav-a nav-hasImage nav-right"
              aria-label="Free Returns"
              tabIndex={0}
            >
              <span className="nav-a-content">
                <img
                  src="https://m.media-amazon.com/images/G/31/img17/Fashion/150-x-50._CB485918503_.jpg"
                  className="nav-image"
                  alt="Free Returns"
                />
              </span>
            </a>
            {/* nav-linktree-subnav - 'watches' */}
          </div>
        </div>
        <div
          id="nav-flyout-ewc"
          className="nav-ewc-lazy-align nav-ewcFlyout nav-flyout nav-locked"
          style={{ top: 0, height: 322 }}
        >
          <div className="nav-flyout-body ewc-beacon" tabIndex={-1}>
            <div className="nav-ewc-content" />
          </div>
          <div
            className="nav-template nav-flyout-content"
            style={{ display: "none" }}
          >
            {" "}
          </div>
        </div>
      </div>
    </header>
    <a id="skippedLink" tabIndex={-1} />
    {/* sp:end-feature:navbar */}
    {/* sp:feature:configured-sitewide-before-host-atf-assets */}
    {/* sp:end-feature:configured-sitewide-before-host-atf-assets */}
    {/* sp:feature:host-atf */}
    
    <title>
      
    </title>
    <meta
      name="description"
      content="SELLORIA Silicone Digital Watch Shockproof Multi-Functional Automatic Black Color Strap Waterproof Digital Sports Watch For Mens Kids Watch For Boys, Men Pack Of 1, Water Resistance : Amazon.in: Fashion"
    />
    <div id="dp" className="watch en_IN">
      <div id="percolate-ui-ilm_div"></div>
      <div id="percolate-ui-lpo_div"></div>
      <div id="showing-breadcrumbs_div">
        <div
          
          className="celwidget"
          data-csa-c-id="u8btuf-4dz8f7-ofuk54-sb8954"
          data-cel-widget="showing-breadcrumbs_csm_instrumentation_wrapper"
        ></div>
      </div>
      <div id="rw-preload-landing-image_div"></div>
      <div id="dp-container" className="a-container" role="main">
        <div
          
          className="celwidget"
          data-csa-c-id="wy4ysz-ghjk4o-47shvp-q0n3rm"
          data-cel-widget="dpx-ppd_csm_instrumentation_wrapper"
        >
          <div id="ppd" className="a-section a-spacing-base">
            <div className="a-row">
              <div
                id="iesABBanner_feature_div"
                className="celwidget"
                data-feature-name="iesABBanner"
                data-csa-c-type="widget"
                data-csa-c-content-id="iesABBanner"
                data-csa-c-slot-id="iesABBanner_feature_div"
                data-csa-c-asin="B09CHJ5RWK"
                data-csa-c-is-in-initial-active-row="false"
                data-csa-c-id="lb1ttq-6clm9e-ko5eea-n64x0f"
                data-cel-widget="iesABBanner_feature_div"
              ></div>
              <div
                id="companyCompliancePolicies_feature_div"
                className="celwidget"
                data-feature-name="companyCompliancePolicies"
                data-csa-c-type="widget"
                data-csa-c-content-id="companyCompliancePolicies"
                data-csa-c-slot-id="companyCompliancePolicies_feature_div"
                data-csa-c-asin="B09CHJ5RWK"
                data-csa-c-is-in-initial-active-row="false"
                data-csa-c-id="t0oc0y-uv1ys9-bbrr8i-q0we9h"
                data-cel-widget="companyCompliancePolicies_feature_div"
              ></div>
              <div
                id="orderInformationGroup"
                className="celwidget"
                data-feature-name="orderInformationGroup"
                data-csa-c-type="widget"
                data-csa-c-content-id="orderInformationGroup"
                data-csa-c-slot-id="orderInformationGroup"
                data-csa-c-asin="B09CHJ5RWK"
                data-csa-c-is-in-initial-active-row="false"
                data-csa-c-id="f8no95-oz6c5-okaleh-yr6qpc"
                data-cel-widget="orderInformationGroup"
              ></div>
            </div>
            <div className="a-row">
              <div
                id="leftCol"
                className="a-column a-span4 dp_aib_left_column_t1"
              >
                <div
                  id="imageBlock_feature_div"
                  className="celwidget"
                  data-feature-name="imageBlock"
                  data-csa-c-type="widget"
                  data-csa-c-content-id="imageBlock"
                  data-csa-c-slot-id="imageBlock_feature_div"
                  data-csa-c-asin=""
                  data-csa-c-is-in-initial-active-row="false"
                  data-csa-c-id="qce0oo-td0l0q-ff6kfy-y52lho"
                  data-cel-widget="imageBlock_feature_div"
                >
                  <span
                    className="a-declarative"
                    data-action="ssf-share-icon"
                    data-csa-c-type="widget"
                    data-csa-c-func-deps="aui-da-ssf-share-icon"
                    data-ssf-share-icon='{"treatment":"C","image":"https://m.media-amazon.com/images/I/41QR8JgNXxL.jpg","eventPreviewTreatment":"C","shareDataAttributes":{"isInternal":false,"marketplaceId":"A21TJRUUN4KGV","ingress":"DetailPage","isRobot":false,"requestId":"AGSRENW6SRAW518HGTR3","customerId":"","asin":"B09CHJ5RWK","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36","platform":"DESKTOP"},"deeplinkInfo":{"flag":0,"isDisabled":false},"isOGTEnabled":false,"aapiBaseUrl":"data.amazon.in","title":"SELLORIA Silicone Digital Watch Shockproof Multi-Functional Automatic Black Color Strap Waterproof Digital Sports Watch For Mens Kids Watch For Boys, Men Pack Of 1, Water Resistance","refererURL":"https://www.amazon.in/s?k=watch&crid=15LXPTWQ3BJ2A&sprefix=%2Caps%2C236&ref=nb_sb_ss_recent_3_0_recent","storeId":"","emailSubject":"Check this out at Amazon","isIncrementCountEnabled":false,"url":"https://www.amazon.in/dp/B09CHJ5RWK","dealsPreviewEnabled":false,"skipTwisterAPI":"C","isUnrecognizedUsersRichPreviewEnabled":false,"t":{"taf_twitter_name":"Twitter","taf_copy_url_changeover":"Link copied!","taf_pinterest_name":"Pinterest","taf_share_bottom_sheet_title":"Share this product with friends","taf_copy_tooltip":"Copy Link","taf_email_tooltip":"Share via e-mail","taf_copy_name":"Copy Link","taf_email_name":"Email","taf_facebook_name":"Facebook","taf_twitter_tooltip":"Share on Twitter","taf_facebook_tooltip":"Share on Facebook","taf_pinterest_tooltip":"Pin it on Pinterest"},"isBestFormatEnabled":false,"weblab":"SHARE_ICON_EXPERIMENT_DESKTOP_671038","mailToUri":"mailto:?body=I%20want%20to%20recommend%20this%20product%20at%20Amazon%0A%0ASELLORIA%20Silicone%20Digital%20Watch%20Shockproof%20Multi-Functional%20Automatic%20Black%20Color%20Strap%20Waterproof%20Digital%20Sports%20Watch%20For%20Mens%20Kids%20Watch%20For%20Boys%2C%20Men%20Pack%20Of%201%2C%20Water%20Resistance%0Aby%20shopPrime%0ALearn%20more%3A%20https%3A%2F%2Fwww.amazon.in%2Fdp%2FB09CHJ5RWK%2Fref%3Dcm_sw_em_r_mt_dp_AGSRENW6SRAW518HGTR3&subject=Check%20this%20out%20at%20Amazon","refId":"dp","isIpadFixesEnabled":false,"shareAapiCsrfToken":"1@gwK4di4nVSSigR/rLgJhoFvC4HxBQ26ztjjOKM5QerkIAAAAAQAAAABnQysacmF3AAAAABVX8CwXqz42z+J7i/ABqA==@NLD_B6R8RN","tinyUrlEnabled":true}'
                    id="ssf-primary-widget-desktop"
                    data-csa-c-id="8ulmdr-tf0hn7-9c7zh3-12rxpr"
                  >
                    <div className="ssf-background ssf-bg-count" role="button">
                      <a
                        href="javascript:void(0)"
                        className="ssf-share-trigger"
                        title="Share"
                        role="button"
                        aria-label="Share"
                        aria-haspopup="true"
                        data-share='{"background":true}'
                        style={{
                          height: 24,
                          width: 24,
                          backgroundImage:
                            'url("https://m.media-amazon.com/images/G/01/share-icons/share-std.svg")'
                        }}
                      />
                    </div>
                  </span>
                  <div
                    id="imageBlock"
                    data-csa-c-content-id="image-block-desktop"
                    data-csa-c-slot-id="image-block"
                    data-csa-c-type="widget"
                    data-csa-op-log-render=""
                    aria-hidden="true"
                    className="a-section imageBlockRearch"
                    style={{ opacity: 1 }}
                    data-csa-c-id="gwn3nj-v8kokg-3j37uo-ls4syi"
                  >
                    <div className="a-fixed-left-grid">
                      <div
                        className="a-fixed-left-grid-inner"
                        style={{ paddingLeft: 40 }}
                      >
                        <div
                          id="altImages"
                          className="a-fixed-left-grid-col a-col-left"
                          style={{
                            width: 40,
                            marginLeft: "-40px",
                            float: "left"
                          }}
                        >
                          <ul className="a-unordered-list a-nostyle a-button-list a-vertical a-spacing-top-extra-large regularAltImageViewLayout">
                            <li className="a-spacing-small 360IngressTemplate pos-360 aok-hidden">
                              <span className="a-list-item">
                                {" "}
                                <span
                                  className="a-declarative"
                                  data-action="thumb-action"
                                  data-csa-c-type="widget"
                                  data-csa-c-func-deps="aui-da-thumb-action"
                                  data-thumb-action="{}"
                                  data-csa-c-id="oke2fg-ly5lql-8ww13k-tpwavb"
                                >
                                  {" "}
                                  <span
                                    className="a-button a-button-thumbnail a-button-toggle"
                                    id="a-autoid-0"
                                  >
                                    <span className="a-button-inner">
                                      <input
                                        className="a-button-input"
                                        type="submit"
                                        aria-labelledby="a-autoid-0-announce"
                                      />
                                      <span
                                        className="a-button-text"
                                        aria-hidden="true"
                                        id="a-autoid-0-announce"
                                      >
                                        {" "}
                                        <img
                                          alt=""
                                          src="https://m.media-amazon.com/images/G/31/HomeCustomProduct/360_icon_73x73v2._CB485971317_SX38_SY50_CR,0,0,38,50_FMpng_RI_.png"
                                        />
                                      </span>
                                    </span>
                                  </span>{" "}
                                </span>{" "}
                              </span>
                            </li>
                            <li className="a-spacing-small template">
                              <span className="a-list-item">
                                <span
                                  className="a-button a-button-thumbnail a-button-toggle"
                                  id="a-autoid-1"
                                >
                                  <span className="a-button-inner">
                                    <input
                                      className="a-button-input"
                                      type="submit"
                                      aria-labelledby="a-autoid-1-announce"
                                    />
                                    <span
                                      className="a-button-text"
                                      aria-hidden="true"
                                      id="a-autoid-1-announce"
                                    >
                                      {" "}
                                      <span className="placeHolder" />
                                    </span>
                                  </span>
                                </span>{" "}
                              </span>
                            </li>
                            <li
                              className="a-spacing-small item imageThumbnail a-declarative"
                              data-ux-click=""
                              data-csa-c-type="uxElement"
                              data-csa-c-element-type="navigational"
                              data-csa-c-action="image-block-alt-image-hover"
                              data-csa-c-posy={1}
                              data-csa-c-id="fp6ns9-s58ntf-r9zmo0-4usl66"
                            >
                              <span className="a-list-item">
                                {" "}
                                <span
                                  className="a-button a-button-thumbnail a-button-toggle"
                                  id="a-autoid-2"
                                >
                                  <span className="a-button-inner">
                                    <input
                                      className="a-button-input"
                                      type="submit"
                                      aria-labelledby="a-autoid-2-announce"
                                    />
                                    <span
                                      className="a-button-text"
                                      aria-hidden="true"
                                      id="a-autoid-2-announce"
                                    >
                                      {" "}
                                      <img src="https://m.media-amazon.com/images/I/41QR8JgNXxL._SX38_SY50_CR,0,0,38,50_.jpg" />
                                    </span>
                                  </span>
                                </span>{" "}
                              </span>
                            </li>
                            <li
                              className="a-spacing-small item imageThumbnail a-declarative"
                              data-ux-click=""
                              data-csa-c-type="uxElement"
                              data-csa-c-element-type="navigational"
                              data-csa-c-action="image-block-alt-image-hover"
                              data-csa-c-posy={2}
                              data-csa-c-id="95rf6s-enoge0-mrm3qn-8l5jin"
                            >
                              <span className="a-list-item">
                                {" "}
                                <span
                                  className="a-button a-button-thumbnail a-button-toggle"
                                  id="a-autoid-3"
                                >
                                  <span className="a-button-inner">
                                    <input
                                      className="a-button-input"
                                      type="submit"
                                      aria-labelledby="a-autoid-3-announce"
                                    />
                                    <span
                                      className="a-button-text"
                                      aria-hidden="true"
                                      id="a-autoid-3-announce"
                                    >
                                      {" "}
                                      <img src="https://m.media-amazon.com/images/I/41B4Tm-OOcL._SX38_SY50_CR,0,0,38,50_.jpg" />
                                    </span>
                                  </span>
                                </span>{" "}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="a-text-center a-fixed-left-grid-col regularImageBlockViewLayout a-col-right"
                          style={{ paddingLeft: "1%", float: "left" }}
                        >
                          <div
                            className="a-row a-spacing-base a-grid-vertical-align a-grid-center canvas ie7-width-96"
                            style={{ opacity: 1 }}
                          >
                            <div
                              id="main-image-container"
                              className="a-dynamic-image-container"
                              style={{ height: 700 }}
                            >
                              <div id="video-outer-container">
                                <div
                                  id="main-video-container"
                                  className="chromeful-container"
                                >
                                  <div
                                    data-csa-c-component="MediaBlockSoftlines-vse-video-widget"
                                    data-csa-c-content-id=""
                                    data-csa-c-cs-type="vse"
                                    data-csa-c-painter="vse-player"
                                    data-csa-c-type="widget"
                                    className="a-section vse-player-container"
                                    style={{ display: "none" }}
                                    data-csa-c-id="n35ql6-sbf0e9-4w9sg9-27h6ap"
                                  >
                                    <div
                                      className="vse-airy-container vse-player-container none "
                                      style={{
                                        display: "none",
                                        minWidth: "auto"
                                      }}
                                    >
                                      <div
                                        id="ive-mbsoftlines-player-label-container"
                                        data-element-id="ive-player-label-container"
                                        className="a-section a-spacing-none ive-player-label-container"
                                      >
                                        <span
                                          className="a-declarative"
                                          data-action="a-popover"
                                          data-csa-c-type="widget"
                                          data-csa-c-func-deps="aui-da-a-popover"
                                          data-a-popover='{"dataStrategy":"preload","name":"ive-mbsoftlines-label-type-tooltip","width":"300","position":"triggerRight"}'
                                          data-csa-c-id="50inlj-pc9u90-fliplo-yfkcle"
                                        >
                                          <a
                                            href="javascript:void(0)"
                                            role="button"
                                            className="a-popover-trigger a-declarative ive-player-label-name aok-hidden"
                                          >
                                            <i className="a-icon a-icon-popover" />
                                          </a>
                                        </span>
                                        <div
                                          className="a-popover-preload"
                                          id="a-popover-ive-mbsoftlines-label-type-tooltip"
                                        >
                                          <span className="ive-demo-label-tooltip ive-player-label-tooltip aok-hidden">
                                            The video showcases the product in
                                            use.
                                          </span>
                                          <span className="ive-assembly-label-tooltip ive-player-label-tooltip aok-hidden">
                                            The video guides you through product
                                            setup.
                                          </span>
                                          <span className="ive-comparison-label-tooltip ive-player-label-tooltip aok-hidden">
                                            The video compares multiple
                                            products.
                                          </span>
                                          <span className="ive-unboxing-label-tooltip ive-player-label-tooltip aok-hidden">
                                            The video shows the product being
                                            unpacked.
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        id="mbsoftlines-player-fc77b1c8-d552-4c8c-a588-4e8eb8a5c839"
                                        className="vse-player"
                                        data-element-id="vse-player-container"
                                      >
                                        <div
                                          id="mbsoftlines-player-fc77b1c8-d552-4c8c-a588-4e8eb8a5c839-container"
                                          style={{
                                            width: "100%",
                                            height: "100%"
                                          }}
                                        >
                                          <div
                                            
                                            
                                            className="video-js brila-video-js vjs-paused vjs-controls-enabled vjs-workinghover vjs-v7 vjs-user-active vjs-fluid mbsoftlines-player-fc77b1c8-d552-4c8c-a588-4e8eb8a5c839-container-element-dimensions"
                                            id="mbsoftlines-player-fc77b1c8-d552-4c8c-a588-4e8eb8a5c839-container-element"
                                            tabIndex={-1}
                                            lang="en"
                                            style={{
                                              width: "100%",
                                              height: "100%"
                                            }}
                                          >
                                            <video
                                              id="mbsoftlines-player-fc77b1c8-d552-4c8c-a588-4e8eb8a5c839-container-element_html5_api"
                                              className="vjs-tech"
                                            
                                              tabIndex={-1}
                                              role="application"
                                              preload="auto"
                                              poster="https://m.media-amazon.com/images/I/81Ub94zEseL.SX522_.jpg"
                                              src="blob:https://www.amazon.in/72010268-a9e6-4c57-b8ae-d69c266ed4f5"
                                            />
                                            <div
                                              className="vjs-poster"
                                              tabIndex={-1}
                                              aria-disabled="false"
                                              style={{
                                                backgroundImage:
                                                  'url("https://m.media-amazon.com/images/I/81Ub94zEseL.SX522_.jpg")'
                                              }}
                                            ></div>
                                            <div
                                              className="vjs-text-track-display"
                                              aria-live="off"
                                              aria-atomic="true"
                                            >
                                              <div
                                                style={{
                                                  position: "absolute",
                                                  inset: 0,
                                                  margin: "1.5%"
                                                }}
                                              ></div>
                                            </div>
                                            <div
                                              className="vjs-loading-spinner"
                                              dir="ltr"
                                            >
                                              <span className="vjs-control-text">
                                                Video Player is loading.
                                              </span>
                                            </div>
                                            <button
                                              className="vjs-big-play-button"
                                              type="button"
                                              title="Play Video"
                                              aria-disabled="false"
                                            >
                                              <span
                                                className="vjs-icon-placeholder"
                                                aria-hidden="true"
                                              />
                                              <span
                                                className="vjs-control-text"
                                                aria-live="polite"
                                              >
                                                Play Video
                                              </span>
                                            </button>
                                            <div
                                              className="vjs-control-bar"
                                              dir="ltr"
                                            >
                                              <button
                                                className="vjs-play-control vjs-control vjs-button"
                                                type="button"
                                                title="Play"
                                                aria-disabled="false"
                                                aria-label="Play"
                                              >
                                                <span
                                                  className="vjs-icon-placeholder"
                                                  aria-hidden="true"
                                                />
                                                <span
                                                  className="vjs-control-text"
                                                  aria-live="polite"
                                                >
                                                  Play
                                                </span>
                                              </button>
                                              <div className="vjs-volume-panel vjs-control vjs-volume-panel-horizontal">
                                                <button
                                                  className="vjs-mute-control vjs-control vjs-button vjs-vol-3"
                                                  type="button"
                                                  title="Mute"
                                                  aria-disabled="false"
                                                  aria-label="Mute"
                                                >
                                                  <span
                                                    className="vjs-icon-placeholder"
                                                    aria-hidden="true"
                                                  />
                                                  <span
                                                    className="vjs-control-text"
                                                    aria-live="polite"
                                                  >
                                                    Mute
                                                  </span>
                                                </button>
                                                <div className="vjs-volume-control vjs-control vjs-volume-horizontal">
                                                  <div
                                                    tabIndex={0}
                                                    className="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal"
                                                    role="slider"
                                                    aria-valuenow={100}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    aria-label="Volume Level"
                                                    aria-live="polite"
                                                    title="Volume Slider"
                                                    aria-valuetext="100%"
                                                  >
                                                    <div className="vjs-mouse-display">
                                                      <div
                                                        className="vjs-volume-tooltip"
                                                        aria-hidden="true"
                                                      ></div>
                                                    </div>
                                                    <div className="vjs-volume-level">
                                                      <span className="vjs-control-text" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="vjs-current-time vjs-time-control vjs-control">
                                                <span
                                                  className="vjs-control-text"
                                                  role="presentation"
                                                >
                                                  Current Time&nbsp;
                                                </span>
                                                <span
                                                  className="vjs-current-time-display"
                                                  aria-live="off"
                                                  role="presentation"
                                                >
                                                  0:00
                                                </span>
                                              </div>
                                              <div
                                                className="vjs-time-control vjs-time-divider"
                                                aria-hidden="true"
                                              >
                                                <div>
                                                  <span>/</span>
                                                </div>
                                              </div>
                                              <div className="vjs-duration vjs-time-control vjs-control">
                                                <span
                                                  className="vjs-control-text"
                                                  role="presentation"
                                                >
                                                  Duration&nbsp;
                                                </span>
                                                <span
                                                  className="vjs-duration-display"
                                                  aria-live="off"
                                                  role="presentation"
                                                >
                                                  0:30
                                                </span>
                                              </div>
                                              <div className="vjs-progress-control vjs-control">
                                                <div
                                                  tabIndex={0}
                                                  className="vjs-progress-holder vjs-slider vjs-slider-horizontal"
                                                  role="slider"
                                                  aria-valuenow={0.0}
                                                  aria-valuemin={0}
                                                  aria-valuemax={100}
                                                  aria-label="Progress Bar"
                                                  aria-valuetext="0:00 of 0:30"
                                                >
                                                  <div
                                                    className="vjs-load-progress"
                                                    style={{ width: "10.01%" }}
                                                  >
                                                    <span className="vjs-control-text">
                                                      <span>Loaded</span>:
                                                      <span className="vjs-control-text-loaded-percentage">
                                                        10.01%
                                                      </span>
                                                    </span>
                                                    <div
                                                      data-start={0}
                                                      data-end="3.003"
                                                      style={{
                                                        left: "0%",
                                                        width: "100%"
                                                      }}
                                                    ></div>
                                                  </div>
                                                  <div className="vjs-mouse-display">
                                                    <div
                                                      className="vjs-time-tooltip"
                                                      aria-hidden="true"
                                                    ></div>
                                                  </div>
                                                  <div
                                                    className="vjs-play-progress vjs-slider-bar"
                                                    aria-hidden="true"
                                                    style={{ width: "0%" }}
                                                  >
                                                    <div
                                                      className="vjs-time-tooltip"
                                                      aria-hidden="true"
                                                      style={{ right: 0 }}
                                                    >
                                                      0:00
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="vjs-live-control vjs-control vjs-hidden">
                                                <div
                                                  className="vjs-live-display"
                                                  aria-live="off"
                                                >
                                                  <span className="vjs-control-text">
                                                    Stream Type&nbsp;
                                                  </span>
                                                  LIVE
                                                </div>
                                              </div>
                                              <button
                                                className="vjs-seek-to-live-control vjs-control"
                                                type="button"
                                                title="Seek to live, currently behind live"
                                                aria-disabled="false"
                                              >
                                                <span
                                                  className="vjs-icon-placeholder"
                                                  aria-hidden="true"
                                                />
                                                <span
                                                  className="vjs-control-text"
                                                  aria-live="polite"
                                                >
                                                  Seek to live, currently behind
                                                  live
                                                </span>
                                                <span
                                                  className="vjs-seek-to-live-text"
                                                  aria-hidden="true"
                                                >
                                                  LIVE
                                                </span>
                                              </button>
                                              <div
                                                className="vjs-remaining-time vjs-time-control vjs-control"
                                                tabIndex={0}
                                              >
                                                <span
                                                  className="vjs-control-text"
                                                  role="presentation"
                                                >
                                                  Remaining Time&nbsp;
                                                </span>
                                                <span aria-hidden="true">
                                                  -
                                                </span>
                                                <span
                                                  className="vjs-remaining-time-display"
                                                  aria-live="off"
                                                  role="presentation"
                                                >
                                                  0:30
                                                </span>
                                              </div>
                                              <div className="vjs-custom-control-spacer vjs-spacer ">
                                                &nbsp;
                                              </div>
                                              <div className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                                <div
                                                  className="vjs-playback-rate-value"
                                                  id="vjs-playback-rate-value-label-mbsoftlines-player-fc77b1c8-d552-4c8c-a588-4e8eb8a5c839-container-element_component_320"
                                                >
                                                  1x
                                                </div>
                                                <button
                                                  className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button"
                                                  type="button"
                                                  aria-disabled="false"
                                                  title="Playback Rate"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                  aria-describedby="vjs-playback-rate-value-label-mbsoftlines-player-fc77b1c8-d552-4c8c-a588-4e8eb8a5c839-container-element_component_320"
                                                >
                                                  <span
                                                    className="vjs-icon-placeholder"
                                                    aria-hidden="true"
                                                  />
                                                  <span
                                                    className="vjs-control-text"
                                                    aria-live="polite"
                                                  >
                                                    Playback Rate
                                                  </span>
                                                </button>
                                                <div className="vjs-menu">
                                                  <ul
                                                    className="vjs-menu-content"
                                                    role="menu"
                                                  ></ul>
                                                </div>
                                              </div>
                                              <div className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                                <button
                                                  className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                                  type="button"
                                                  aria-disabled="false"
                                                  title="Chapters"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  <span
                                                    className="vjs-icon-placeholder"
                                                    aria-hidden="true"
                                                  />
                                                  <span
                                                    className="vjs-control-text"
                                                    aria-live="polite"
                                                  >
                                                    Chapters
                                                  </span>
                                                </button>
                                                <div className="vjs-menu">
                                                  <ul
                                                    className="vjs-menu-content"
                                                    role="menu"
                                                  >
                                                    <li
                                                      className="vjs-menu-title"
                                                      tabIndex={-1}
                                                    >
                                                      Chapters
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                                <button
                                                  className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                                  type="button"
                                                  aria-disabled="false"
                                                  title="Descriptions"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  <span
                                                    className="vjs-icon-placeholder"
                                                    aria-hidden="true"
                                                  />
                                                  <span
                                                    className="vjs-control-text"
                                                    aria-live="polite"
                                                  >
                                                    Descriptions
                                                  </span>
                                                </button>
                                                <div className="vjs-menu">
                                                  <ul
                                                    className="vjs-menu-content"
                                                    role="menu"
                                                  >
                                                    <li
                                                      className="vjs-menu-item vjs-selected"
                                                      tabIndex={-1}
                                                      role="menuitemradio"
                                                      aria-disabled="false"
                                                      aria-checked="true"
                                                    >
                                                      <span className="vjs-menu-item-text">
                                                        descriptions off
                                                      </span>
                                                      <span
                                                        className="vjs-control-text"
                                                        aria-live="polite"
                                                      >
                                                        , selected
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                                <button
                                                  className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                                  type="button"
                                                  aria-disabled="false"
                                                  title="Captions"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  <span
                                                    className="vjs-icon-placeholder"
                                                    aria-hidden="true"
                                                  />
                                                  <span
                                                    className="vjs-control-text"
                                                    aria-live="polite"
                                                  >
                                                    Captions
                                                  </span>
                                                </button>
                                                <div className="vjs-menu">
                                                  <ul
                                                    className="vjs-menu-content"
                                                    role="menu"
                                                  >
                                                    <li
                                                      className="vjs-menu-item vjs-selected"
                                                      tabIndex={-1}
                                                      role="menuitemradio"
                                                      aria-disabled="false"
                                                      aria-checked="true"
                                                    >
                                                      <span className="vjs-menu-item-text">
                                                        captions off
                                                      </span>
                                                      <span
                                                        className="vjs-control-text"
                                                        aria-live="polite"
                                                      >
                                                        , selected
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                                <button
                                                  className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                                  type="button"
                                                  aria-disabled="false"
                                                  title="Audio Track"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  <span
                                                    className="vjs-icon-placeholder"
                                                    aria-hidden="true"
                                                  />
                                                  <span
                                                    className="vjs-control-text"
                                                    aria-live="polite"
                                                  >
                                                    Audio Track
                                                  </span>
                                                </button>
                                                <div className="vjs-menu">
                                                  <ul
                                                    className="vjs-menu-content"
                                                    role="menu"
                                                  >
                                                    <li
                                                      className="vjs-menu-item vjs-selected vjs-main-menu-item"
                                                      tabIndex={-1}
                                                      role="menuitemradio"
                                                      aria-disabled="false"
                                                      aria-checked="true"
                                                    >
                                                      <span className="vjs-menu-item-text">
                                                        default
                                                      </span>
                                                      <span
                                                        className="vjs-control-text"
                                                        aria-live="polite"
                                                      >
                                                        , selected
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <button
                                                className="vjs-fullscreen-control vjs-control vjs-button"
                                                type="button"
                                                title="Fullscreen"
                                                aria-disabled="false"
                                                aria-label="Fullscreen"
                                              >
                                                <span
                                                  className="vjs-icon-placeholder"
                                                  aria-hidden="true"
                                                />
                                                <span
                                                  className="vjs-control-text"
                                                  aria-live="polite"
                                                >
                                                  Fullscreen
                                                </span>
                                              </button>
                                            </div>
                                            <div
                                              className="vjs-error-display vjs-modal-dialog vjs-hidden "
                                              tabIndex={-1}
                                              aria-describedby="mbsoftlines-player-fc77b1c8-d552-4c8c-a588-4e8eb8a5c839-container-element_component_524_description"
                                              aria-hidden="true"
                                              aria-label="Modal Window"
                                              role="dialog"
                                            >
                                              <p
                                                className="vjs-modal-dialog-description vjs-control-text"
                                                id="mbsoftlines-player-fc77b1c8-d552-4c8c-a588-4e8eb8a5c839-container-element_component_524_description"
                                              >
                                                This is a modal window.
                                              </p>
                                              <div
                                                className="vjs-modal-dialog-content"
                                                role="document"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  
                                  className="a-profile ive-creator-profile aok-hidden"
                                  data-a-size="small"
                                  data-a-descriptor="true"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="a-profile-avatar-wrapper"
                                  >
                                    <div className="a-profile-avatar">
                                      <img
                                        src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif"
                                        className="a-lazy-loaded"
                                        style={{}}
                                      />
                                      <noscript>&lt;img /&gt;</noscript>
                                    </div>
                                  </div>
                                  <div className="a-profile-content">
                                    <span className="a-profile-name">
                                      Digital Boy's Watch Multifunctional Date
                                      &amp; Display Watch
                                    </span>
                                    <span className="a-profile-descriptor">
                                      shopPrime
                                    </span>
                                  </div>
                                </div>
                                <div
                                  id="video-canvas-caption"
                                  className="a-row"
                                >
                                  <div className="a-column a-span12 a-text-center">
                                    {" "}
                                    <span
                                      id="videoCaption"
                                      className="a-color-secondary"
                                    />{" "}
                                  </div>
                                </div>
                              </div>
                              <div
                                className="a-hidden"
                                id="auiImmersiveViewDiv"
                              />
                              <div
                                className="variationUnavailable unavailableExp"
                                style={{ display: "none" }}
                              >
                                <div className="inner">
                                  <div
                                    className="a-box a-alert a-alert-error"
                                    role="alert"
                                  >
                                    <div className="a-box-inner a-alert-container">
                                      <h4 className="a-alert-heading">
                                        Image Unavailable
                                      </h4>
                                      <i className="a-icon a-icon-alert" />
                                      <div className="a-alert-content">
                                        {" "}
                                        <span className="a-text-bold">
                                          {" "}
                                          Image not available for
                                          <br />
                                          Colour:{" "}
                                          <span className="unvailableVariation" />
                                        </span>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Append onload function to stretch image on load to avoid flicker when transitioning from low res image from Mason to large image variant in desktop */}
                              {/* any change in onload function requires a corresponding change in Mason to allow it pass in /mason/amazon-family/gp/product/features/embed-features.mi */}
                              {/* and /mason/amazon-family/gp/product/features/embed-landing-image.mi */}
                              <ul className="a-unordered-list a-nostyle a-horizontal list maintain-height">
                                <li
                                  data-csa-c-action="image-block-main-image-hover"
                                  data-csa-c-element-type="navigational"
                                  data-csa-c-posy={1}
                                  data-csa-c-type="uxElement"
                                  className="image item itemNo0 maintain-height"
                                  data-csa-c-id="58l3yq-5geyo5-uqkogw-fa5h0q"
                                >
                                  <span className="a-list-item">
                                    {" "}
                                    <span
                                      className="a-declarative"
                                      data-action="main-image-click"
                                      data-csa-c-type="widget"
                                      data-csa-c-func-deps="aui-da-main-image-click"
                                      data-main-image-click="{}"
                                      data-ux-click=""
                                      data-csa-c-id="gb8ugr-470w6y-wzu2k9-rgup11"
                                    >
                                      <div
                                        id="imgTagWrapperId"
                                        className="imgTagWrapper"
                                        style={{ height: 700 }}
                                      >
                                        <img
                                          alt="SELLORIA Silicone Digital Watch Shockproof Multi-Functional Automatic Black Color Strap Waterproof Digital Sports Watch For Mens Kids Watch For Boys, Men Pack Of 1, Water Resistance"
                                          src="https://m.media-amazon.com/images/I/61YTgYOiedL._SY741_.jpg"
                                          data-old-hires="https://m.media-amazon.com/images/I/61YTgYOiedL._SL1500_.jpg"
                                          data-a-image-name="landingImage"
                                          className="a-dynamic-image a-stretch-vertical"
                                          id="landingImage"
                                          data-a-dynamic-image='{"https://m.media-amazon.com/images/I/61YTgYOiedL._SY606_.jpg":[606,456],"https://m.media-amazon.com/images/I/61YTgYOiedL._SY445_.jpg":[445,335],"https://m.media-amazon.com/images/I/61YTgYOiedL._SY500_.jpg":[500,376],"https://m.media-amazon.com/images/I/61YTgYOiedL._SY741_.jpg":[741,557],"https://m.media-amazon.com/images/I/61YTgYOiedL._SY879_.jpg":[879,661],"https://m.media-amazon.com/images/I/61YTgYOiedL._SY679_.jpg":[679,511],"https://m.media-amazon.com/images/I/61YTgYOiedL._SY550_.jpg":[550,414]}'
                                          style={{
                                            maxWidth: "526.733px",
                                            maxHeight: 700
                                          }}
                                        />
                                      </div>
                                    </span>{" "}
                                  </span>
                                </li>
                                <li className="mainImageTemplate template">
                                  <span className="a-list-item">
                                    {" "}
                                    <span
                                      className="a-declarative"
                                      data-action="main-image-click"
                                      data-csa-c-type="widget"
                                      data-csa-c-func-deps="aui-da-main-image-click"
                                      data-main-image-click="{}"
                                      data-ux-click=""
                                      data-csa-c-id="8iq1w7-ba9nx2-da0sem-qox1rl"
                                    >
                                      <div className="imgTagWrapper">
                                        <span className="placeHolder" />
                                      </div>
                                    </span>{" "}
                                  </span>
                                </li>
                                <li className="swatchHoverExp a-hidden maintain-height">
                                  <span className="a-list-item">
                                    {" "}
                                    <span
                                      className="a-declarative"
                                      data-action="main-image-click"
                                      data-csa-c-type="widget"
                                      data-csa-c-func-deps="aui-da-main-image-click"
                                      data-main-image-click="{}"
                                      data-csa-c-id="i9onvn-li7p3u-ddkih5-41cpuu"
                                    >
                                      <div className="imgTagWrapper">
                                        <span className="placeHolder" />
                                      </div>
                                    </span>{" "}
                                  </span>
                                </li>
                                <li
                                  id="noFlashContent"
                                  className="noFlash a-hidden"
                                >
                                  <span className="a-list-item">
                                    {" "}
                                    To view this video download
                                    <a
                                      className="a-link-normal"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href="https://get.adobe.com/flashplayer"
                                    >
                                      Flash Player{" "}
                                      <span className="swSprite s_extLink" />{" "}
                                    </a>
                                  </span>
                                </li>
                                <li
                                  className="image item itemNo1 maintain-height"
                                  data-csa-c-type="uxElement"
                                  data-csa-c-element-type="navigational"
                                  data-csa-c-action="image-block-main-image-hover"
                                  data-csa-c-posy={2}
                                  data-csa-c-id="dnqxdt-t3j4dl-4nw13m-hpq1e7"
                                >
                                  <span className="a-list-item">
                                    {" "}
                                    <span
                                      className="a-declarative"
                                      data-action="main-image-click"
                                      data-csa-c-type="widget"
                                      data-csa-c-func-deps="aui-da-main-image-click"
                                      data-main-image-click="{}"
                                      data-ux-click=""
                                      data-csa-c-id="8iq1w7-ba9nx2-da0sem-qox1rl"
                                    >
                                      <div
                                        className="imgTagWrapper"
                                        style={{ height: 700 }}
                                      >
                                        <img
                                          src="https://m.media-amazon.com/images/I/619AHzZQ5SL._SX569_.jpg"
                                          className="a-dynamic-image a-stretch-vertical"
                                          id=""
                                          style={{
                                            maxHeight: 700,
                                            maxWidth: "550.345px"
                                          }}
                                          data-old-hires="https://m.media-amazon.com/images/I/619AHzZQ5SL._SL1400_.jpg"
                                          data-a-manual-replacement="true"
                                        />
                                      </div>
                                    </span>{" "}
                                  </span>
                                </li>
                                <li
                                  className="image item itemNo4 maintain-height selected"
                                  data-csa-c-type="uxElement"
                                  data-csa-c-element-type="navigational"
                                  data-csa-c-action="image-block-main-image-hover"
                                  data-csa-c-posy={5}
                                  data-csa-c-id="yn9n13-npt203-ieypt5-4lzwgf"
                                >
                                  <span className="a-list-item">
                                    {" "}
                                    <span
                                      className="a-declarative"
                                      data-action="main-image-click"
                                      data-csa-c-type="widget"
                                      data-csa-c-func-deps="aui-da-main-image-click"
                                      data-main-image-click="{}"
                                      data-ux-click=""
                                      data-csa-c-id="8iq1w7-ba9nx2-da0sem-qox1rl"
                                    >
                                      <div
                                        className="imgTagWrapper"
                                        style={{ height: 700 }}
                                      >
                                        <img
                                          src="https://m.media-amazon.com/images/I/51jQSp3MRKL.jpg"
                                          className="a-dynamic-image a-stretch-horizontal"
                                          id=""
                                          style={{
                                            maxHeight: 500,
                                            maxWidth: 500
                                          }}
                                          data-a-manual-replacement="true"
                                        />
                                      </div>
                                    </span>{" "}
                                  </span>
                                </li>
                                <li
                                  className="image item itemNo3 maintain-height"
                                  data-csa-c-type="uxElement"
                                  data-csa-c-element-type="navigational"
                                  data-csa-c-action="image-block-main-image-hover"
                                  data-csa-c-posy={4}
                                  data-csa-c-id="lwajy3-bljx5z-ibugju-4p7jsm"
                                >
                                  <span className="a-list-item">
                                    {" "}
                                    <span
                                      className="a-declarative"
                                      data-action="main-image-click"
                                      data-csa-c-type="widget"
                                      data-csa-c-func-deps="aui-da-main-image-click"
                                      data-main-image-click="{}"
                                      data-ux-click=""
                                      data-csa-c-id="8iq1w7-ba9nx2-da0sem-qox1rl"
                                    >
                                      <div
                                        className="imgTagWrapper"
                                        style={{ height: 700 }}
                                      >
                                        <img
                                          src="https://m.media-amazon.com/images/I/81WFYutBJNL._SX679_.jpg"
                                          className="a-dynamic-image a-stretch-horizontal"
                                          id=""
                                          style={{
                                            maxHeight: "414.667px",
                                            maxWidth: 622
                                          }}
                                          data-old-hires="https://m.media-amazon.com/images/I/81WFYutBJNL._SL1500_.jpg"
                                          data-a-manual-replacement="true"
                                        />
                                      </div>
                                    </span>{" "}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate3d(-50%, -50%, 0px)",
                                zIndex: 3,
                                width: 48,
                                height: 48,
                                border: "8px solid rgb(255, 255, 255)",
                                borderRadius: "100%",
                                display: "none"
                              }}
                            >
                              <span className="a-spinner a-spinner-medium" />
                            </div>
                          </div>
                          <div id="image-canvas-caption" className="a-row">
                            <div className="a-column a-span12 a-text-center">
                              {" "}
                              <span
                                id="canvasCaption"
                                className="a-color-secondary"
                              />
                            </div>
                          </div>
                          <div className="collections-collect-button" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="twister-main-image"
                    className="a-hidden"
                    ></div>
                  <div
                    id="thumbs-image"
                    className="a-hidden"
                    ></div>
                  <div
                    className="a-popover-preload"
                    id="a-popover-immersiveView"
                  >
                    <div id="ivMain" className="legacyImmersiveView">
                      <div id="ivThumbColumn">
                        <div id="ivTitle" />
                        <div id="ivVariationSelection" />
                        <div id="ivMediaSelection">
                          <select id="ivMediaSelect" />
                        </div>
                        <div id="ivThumbs">
                          <div className="ivRow placeholder" />
                          <span className="ivThumbVideoPopover placeholder">
                            <b className="ivVideoPopoverTitle" />
                            <br />
                            <span className="ivVideoPopoverDuration" />
                          </span>
                          <div className="ivThumb placeholder">
                            <div className="ivThumbImage" />
                          </div>
                        </div>
                        <div id="ivVideoList">
                          <div className="ivThumbVideoListOuter placeholder">
                            <div className="ivThumbVideoList">
                              <div className="ivThumbImage" />
                            </div>
                            <div className="ivThumbText">
                              <b className="ivThumbTitle" />
                              <span className="ivThumbDuration" />
                              <div className="ivClearfix" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="ivStage">
                        <div id="ivLargeImage" />
                        <div id="ivLargeVideo" />
                        <div id="ivLarge360" />
                      </div>
                      <div className="ivClearfix" />
                    </div>
                  </div>{" "}
                  {/* Original Prod code structure for when weblab is not T1 */}
                  <div
                    className="dp-cif aok-hidden"
                    data-feature-details='{"name":"imageblock","hasComponents":true,"components":[{"name":"mainimage","events":["click","hover"]},{"name":"thumbnail","events":["click","hover"]}]}'
                    data-dp-critical-js-modules='["ImageBlockInitViews","ImageBlockController","ImageBlockView","a-modal"]'
                  ></div>
                </div>
                <div
                  id="rhapsodyARIngress_feature_div"
                  className="celwidget"
                  data-feature-name="rhapsodyARIngress"
                  data-csa-c-type="widget"
                  data-csa-c-content-id="rhapsodyARIngress"
                  data-csa-c-slot-id="rhapsodyARIngress_feature_div"
                  data-csa-c-asin=""
                  data-csa-c-is-in-initial-active-row="false"
                  data-csa-c-id="r8ivtu-3e5sd-963m2w-rdckfr"
                  data-cel-widget="rhapsodyARIngress_feature_div"
                >
                  {/* rhapsodyARIngress on Desktop */}
                  <div id="rhapsody-ar-ingress" style={{}}>
                    <div className="a-section a-text-center">
                      <div id="ar-view-grid" className="a-row">
                        <ul className="a-unordered-list a-nostyle a-horizontal a-text-center ar-list"></ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="legalEUAtf_feature_div"
                  className="celwidget"
                  data-feature-name="legalEUAtf"
                  data-csa-c-type="widget"
                  data-csa-c-content-id="legalEUAtf"
                  data-csa-c-slot-id="legalEUAtf_feature_div"
                  data-csa-c-asin=""
                  data-csa-c-is-in-initial-active-row="false"
                  data-csa-c-id="2pvzor-xtuhpi-hj4k0z-ymf81h"
                  data-cel-widget="legalEUAtf_feature_div"
                >
                  {/* In Desktop ATF only display content if there are Hazard or Precautionary content */}
                </div>
                <div
                  id="buffetServiceCardAtf_feature_div"
                  className="celwidget"
                  data-feature-name="buffetServiceCardAtf"
                  data-csa-c-type="widget"
                  data-csa-c-content-id="buffetServiceCardAtf"
                  data-csa-c-slot-id="buffetServiceCardAtf_feature_div"
                  data-csa-c-asin=""
                  data-csa-c-is-in-initial-active-row="false"
                  data-csa-c-id="welkdp-cep12u-wz4i8u-srp6df"
                  data-cel-widget="buffetServiceCardAtf_feature_div"
                >
                  <div
                    className="celwidget c-f"
                   
                    data-csa-op-log-render=""
                    data-csa-c-content-id="DsUnknown"
                    data-csa-c-slot-id="DsUnknown-1"
                    data-csa-c-type="widget"
                    data-csa-c-painter="buffet-high-priority-disclaimers-card-cards"
                    data-csa-c-id="a0ock7-70ohmz-oc3ffb-pwr7dy"
                    data-cel-widget="buffet-high-priority-disclaimers-card_DetailPage_0"
                  >
                    {/*CardsClient*/}
                    <div
                      className="a-section a-spacing-none"
                      id="CardInstance_vl-54HGDgohv4XnPENnLQ"
                      data-card-metrics-id="buffet-high-priority-disclaimers-card_DetailPage_0"
                      data-acp-tracking="{}"
                      data-mix-claimed="true"
                    />
                  </div>
                </div>
              </div>
              <div className="a-column a-span8 dp_aib_right_column_t1 a-span-last">
                <div className="a-fixed-right-grid">
                  <div
                    className="a-fixed-right-grid-inner"
                    style={{ paddingRight: 244 }}
                  >
                    <div
                      id="centerCol"
                      className="a-fixed-right-grid-col ie7-width-935 a-col-left"
                      style={{ paddingRight: "6.5%", float: "left" }}
                    >
                      <div
                        id="titleBlock"
                        className="celwidget"
                        data-feature-name="titleBlock"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="titleBlock"
                        data-csa-c-slot-id="titleBlock"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="c76471-3jxrlg-513ywa-uabwtl"
                        data-cel-widget="titleBlock"
                      >
                        <div
                          id="titleBlockLeftSection"
                          className="a-section a-spacing-none"
                        >
                          <div
                            id="bylineInfo_feature_div"
                            className="celwidget"
                            data-feature-name="bylineInfo"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="bylineInfo"
                            data-csa-c-slot-id="bylineInfo_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="ioyoav-me301w-gooq00-rvlqst"
                            data-cel-widget="bylineInfo_feature_div"
                          >
                            {/*This check is an indicator on whether to show the Premium Fashion brand logo byline regardless of weblab treatment*/}
                          </div>
                        </div>
                        <div
                          id="titleBlockRightSection"
                          className="a-section a-spacing-none"
                        >
                          <div
                            id="title_feature_div"
                            className="celwidget"
                            data-feature-name="title"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="title"
                            data-csa-c-slot-id="title_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="unc8dp-tgn3un-w4n6ky-eyx1s"
                            data-cel-widget="title_feature_div"
                          >
                            <div
    id="titleSection"
    className="a-section a-spacing-none"
>
    <h1
        id="title"
        className="a-size-large a-spacing-none"
    >
        <span
            id="productTitle"
            className="a-size-large product-title-word-break"
        >
            {productData?.product_title || "Product Title Not Available"}
        </span>
    </h1>
    <div
        id="expandTitleToggle"
        className="a-section a-spacing-none expand aok-hidden"
    ></div>
</div>

                          </div>
                          <div
                            id="qpeTitleTag_feature_div"
                            className="celwidget"
                            data-feature-name="qpeTitleTag"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="qpeTitleTag"
                            data-csa-c-slot-id="qpeTitleTag_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="74453q-m6gjmb-nqv56h-k0etus"
                            data-cel-widget="qpeTitleTag_feature_div"
                          ></div>
                          <div
                            id="cmrsSummary_feature_div"
                            className="celwidget"
                            data-feature-name="cmrsSummary"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="cmrsSummary"
                            data-csa-c-slot-id="cmrsSummary_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="vzeh41-gzrnda-ldooai-pjhqoq"
                            data-cel-widget="cmrsSummary_feature_div"
                          ></div>
                          <div
                            id="averageCustomerReviews_feature_div"
                            className="celwidget"
                            data-feature-name="averageCustomerReviews"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="averageCustomerReviews"
                            data-csa-c-slot-id="averageCustomerReviews_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="fvkw2a-u1zi8i-kzz5xe-doufxr"
                            data-cel-widget="averageCustomerReviews_feature_div"
                          ></div>
                          <div
                            id="ask_feature_div"
                            className="celwidget"
                            data-feature-name="ask"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="ask"
                            data-csa-c-slot-id="ask_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="helldl-gcpbvv-s9go1u-rgbik0"
                            data-cel-widget="ask_feature_div"
                          >
                            <span
                              data-csa-c-type="widget"
                              data-csa-c-slot-id="ask-atf-link-search-this-page"
                              data-csa-c-content-id="ask-atf-link-search-this-page-content"
                              data-csa-c-id="2y3tff-nbj2fh-kb2zam-4xllnp"
                            >
                              <a
                                id="askATFLink"
                                className="a-link-normal askATFLink"
                                href="#Ask"
                              >
                                {" "}
                              </a>{" "}
                            </span>
                          </div>
                          <div
                            id="acBadge_feature_div"
                            className="celwidget"
                            data-feature-name="acBadge"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="acBadge"
                            data-csa-c-slot-id="acBadge_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="bp9j0s-9oo5d9-b3of5q-g8363i"
                            data-cel-widget="acBadge_feature_div"
                          ></div>
                          <div
                            id="climatePledgeFriendlyATF_feature_div"
                            className="celwidget"
                            data-feature-name="climatePledgeFriendlyATF"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="climatePledgeFriendlyATF"
                            data-csa-c-slot-id="climatePledgeFriendlyATF_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="2ujz1u-7v6e21-usquwh-p404a9"
                            data-cel-widget="climatePledgeFriendlyATF_feature_div"
                          ></div>
                          <div
                            id="zeitgeistBadge_feature_div"
                            className="celwidget"
                            data-feature-name="zeitgeistBadge"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="zeitgeistBadge"
                            data-csa-c-slot-id="zeitgeistBadge_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="m7xe7q-twa3pb-wzmesk-ckmu1r"
                            data-cel-widget="zeitgeistBadge_feature_div"
                          ></div>
                          <div
                            id="socialProofingBadge_feature_div"
                            className="celwidget"
                            data-feature-name="socialProofingBadge"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="socialProofingBadge"
                            data-csa-c-slot-id="socialProofingBadge_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="1n81x8-86mjjf-3m3qqz-eogh1n"
                            data-cel-widget="socialProofingBadge_feature_div"
                          ></div>
                          <div
                            id="socialProofingAsinFaceout_feature_div"
                            className="celwidget"
                            data-feature-name="socialProofingAsinFaceout"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="socialProofingAsinFaceout"
                            data-csa-c-slot-id="socialProofingAsinFaceout_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="wwx469-iqpq0s-lly5f5-6w2fcd"
                            data-cel-widget="socialProofingAsinFaceout_feature_div"
                          >
                            <div className="a-section a-spacing-micro social-proofing-faceout">
                              <div className="a-section social-proofing-faceout-title social-proofing-faceout-title-alignment-left">
                                <span
                                  id="social-proofing-faceout-title-tk_bought"
                                  className="a-size-small social-proofing-faceout-title-text"
                                ></span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div
                        id="desktop_unifiedPrice"
                        className="celwidget"
                        data-feature-name="desktop_unifiedPrice"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="desktop_unifiedPrice"
                        data-csa-c-slot-id="desktop_unifiedPrice"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="h68cep-uqepi1-xoqa3w-mki7wv"
                        data-cel-widget="desktop_unifiedPrice"
                      >
                        <div
                          id="unifiedPrice_feature_div"
                          className="celwidget"
                          data-feature-name="unifiedPrice"
                          data-csa-c-type="widget"
                          data-csa-c-content-id="unifiedPrice"
                          data-csa-c-slot-id="unifiedPrice_feature_div"
                          data-csa-c-asin=""
                          data-csa-c-is-in-initial-active-row="false"
                          data-csa-c-id="l2kix3-4fo3u-n806r6-5ho1a9"
                          data-cel-widget="unifiedPrice_feature_div"
                        ></div>
                      </div>
                      <div
                        id="apex_desktop"
                        className="celwidget"
                        data-feature-name="apex_desktop"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="apex_desktop"
                        data-csa-c-slot-id="apex_desktop"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="1rcj2m-78e5nk-u7nkkg-627tx7"
                        data-cel-widget="apex_desktop"
                      >
                        <div
                          data-csa-c-type="widget"
                          data-csa-c-slot-id="apex_dp_center_column"
                          data-csa-c-content-id="apex"
                          data-csa-c-id="teqlpf-s0539j-dpco6w-vnsm2a"
                        >
                          <div
                            data-csa-c-type="widget"
                            data-csa-c-slot-id="apex_dp_center_column"
                            data-csa-c-content-id="apex_with_rio_cx"
                            data-csa-c-id="hglkw6-gtus4i-kjcuxc-51amgm"
                          >
                            <div
                              id="dealBadge_feature_div"
                              className="celwidget"
                              data-feature-name="dealBadge"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="dealBadge"
                              data-csa-c-slot-id="dealBadge_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="xtyuil-n3wxoi-jd40m8-4vvz01"
                              data-cel-widget="dealBadge_feature_div"
                            ></div>
                            <div
                              id="almRedWithPrimeBadge_feature_div"
                              className="celwidget"
                              data-feature-name="almRedWithPrimeBadge"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="almRedWithPrimeBadge"
                              data-csa-c-slot-id="almRedWithPrimeBadge_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="nct7nm-5v1nq6-pzt9s6-gnj6y2"
                              data-cel-widget="almRedWithPrimeBadge_feature_div"
                            ></div>
                            <div
                              id="delightPricingBadge_feature_div"
                              className="celwidget"
                              data-feature-name="delightPricingBadge"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="delightPricingBadge"
                              data-csa-c-slot-id="delightPricingBadge_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="cn46zr-br8byg-o5ller-d5zqe5"
                              data-cel-widget="delightPricingBadge_feature_div"
                            >
                              {/* considering updating DetailPageDelightPricingTests package whenever you change the template view */}
                            </div>
                            <div
                              id="inemi_feature_div"
                              className="celwidget"
                              data-feature-name="inemi"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="inemi"
                              data-csa-c-slot-id="inemi_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="rdb5lw-5h0e98-vkhfr3-clw87x"
                              data-cel-widget="inemi_feature_div"
                            ></div>
                            <div
                              id="corePriceDisplay_desktop_feature_div"
                              className="celwidget"
                              data-feature-name="corePriceDisplay_desktop"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="corePriceDisplay_desktop"
                              data-csa-c-slot-id="corePriceDisplay_desktop_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="91k5c7-sam30x-fdepej-95auql"
                              data-cel-widget="corePriceDisplay_desktop_feature_div"
                            >
                              <div className="a-section a-spacing-none aok-align-center aok-relative">
                                <span className="aok-offscreen">
                                  {" "}
                                  ₹{productData?.price || "Price Not Available"} with 89 percent savings{" "}
                                </span>{" "}
                                <span
                                  className="a-price aok-align-center reinventPricePriceToPayMargin priceToPay"
                                  data-a-size="xl"
                                  data-a-color="base"
                                >
                                  <span className="a-offscreen"> </span>
                                  <span aria-hidden="true">
                                    <span className="a-price-symbol">₹</span>
                                    <span className="a-price-whole">{productData?.price || "Price Not Available"}</span>
                                  </span>
                                </span>
                                <span
                                  id="taxInclusiveMessage"
                                  className="a-size-mini a-color-base aok-align-center aok-nowrap"
                                ></span>{" "}
                              </div>
                              <div className="a-section a-spacing-small aok-align-center">
                                <span>
                                  {" "}
                                  <span className="aok-relative">
                                    <span className="a-size-small aok-offscreen">
                                      {" "}
                                      M.R.P.: ₹1,499.00{" "}
                                    </span>
                                  </span>{" "}
                                  <span className="a-size-small aok-align-center basisPriceLegalMessage"></span>{" "}
                                </span>{" "}
                              </div>
                            </div>
                            <div
                              id="inemi_feature_div"
                              className="celwidget"
                              data-feature-name="inemi"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="inemi"
                              data-csa-c-slot-id="inemi_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="b8uqv5-enoio8-vimi3q-291vh8"
                              data-cel-widget="inemi_feature_div"
                            ></div>
                            <div
                              id="priceTracker_feature_div"
                              className="celwidget"
                              data-feature-name="priceTracker"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="priceTracker"
                              data-csa-c-slot-id="priceTracker_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="lyy1kc-lyz7ch-wljllg-triezd"
                              data-cel-widget="priceTracker_feature_div"
                            ></div>
                            <div
                              id="taxInclusiveMessage_feature_div"
                              className="celwidget"
                              data-feature-name="taxInclusiveMessage"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="taxInclusiveMessage"
                              data-csa-c-slot-id="taxInclusiveMessage_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="gj5b4f-56l284-4xcn7z-lqvqed"
                              data-cel-widget="taxInclusiveMessage_feature_div"
                            ></div>
                            <div
                              id="delightPricingBadge_feature_div"
                              className="celwidget"
                              data-feature-name="delightPricingBadge"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="delightPricingBadge"
                              data-csa-c-slot-id="delightPricingBadge_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="1ayaff-bh06d6-rghuvx-iwu19c"
                              data-cel-widget="delightPricingBadge_feature_div"
                            >
                              {/* leaving comment so that file does not delete and we are not blocked until themis feature deletion. Will remove this once themis feature is cleaned. */}
                            </div>
                            <div
                              id="omnibusPrice_feature_div"
                              className="celwidget"
                              data-feature-name="omnibusPrice"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="omnibusPrice"
                              data-csa-c-slot-id="omnibusPrice_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="rhz5or-id9haj-ttuooc-n7vgmt"
                              data-cel-widget="omnibusPrice_feature_div"
                            ></div>
                            <div
                              id="agsIfdInsidePrice_feature_div"
                              className="celwidget"
                              data-feature-name="agsIfdInsidePrice"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="agsIfdInsidePrice"
                              data-csa-c-slot-id="agsIfdInsidePrice_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="g2k2kl-e4q01d-n6qn2o-w56hne"
                              data-cel-widget="agsIfdInsidePrice_feature_div"
                            >
                              {/* For LightningDeal use case, agsShippingAndIfdInsideBuyBox is only configured on regular offer, so set defaultPageContext as buyingPrice */}
                            </div>
                            <div
                              id="regulatoryDeposit_feature_div"
                              className="celwidget"
                              data-feature-name="regulatoryDeposit"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="regulatoryDeposit"
                              data-csa-c-slot-id="regulatoryDeposit_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="ihgzzw-fb7egk-n4dah9-bdtrvq"
                              data-cel-widget="regulatoryDeposit_feature_div"
                            ></div>
                            <div
                              id="deliveryPriceBadging_feature_div"
                              className="celwidget"
                              data-feature-name="deliveryPriceBadging"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="deliveryPriceBadging"
                              data-csa-c-slot-id="deliveryPriceBadging_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="4cyp06-35x3dp-1ljnr6-v2csvw"
                              data-cel-widget="deliveryPriceBadging_feature_div"
                            >
                              <input
                                type="hidden"
                                id="deliveryBlockSelectAsin"
                                defaultValue="B09CHJ5RWK"
                              />
                              <input
                                type="hidden"
                                id="deliveryBlockSelectMerchant"
                                defaultValue="A1BWY9D1T7XXN2"
                              />
                            </div>
                            <div
                              id="freeShippingPriceBadging_feature_div"
                              className="celwidget"
                              data-feature-name="freeShippingPriceBadging"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="freeShippingPriceBadging"
                              data-csa-c-slot-id="freeShippingPriceBadging_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="w5jjud-r8xyx1-josvxs-jwgceg"
                              data-cel-widget="freeShippingPriceBadging_feature_div"
                            >
                              <span className="a-size-base">
                                <i className="a-icon-wrapper a-icon-fba-with-text">
                                  <i
                                    className="a-icon a-icon-fba"
                                    role="img"
                                    aria-label="Fulfilled"
                                  />
                                  <span className="a-icon-text-fba">
                                    Fulfilled
                                  </span>
                                </i>
                              </span>
                            </div>
                            <div
                              id="freeReturns_feature_div"
                              className="celwidget"
                              data-feature-name="freeReturns"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="freeReturns"
                              data-csa-c-slot-id="freeReturns_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="lonb8e-dltt3i-pknwd-4lxo6z"
                              data-cel-widget="freeReturns_feature_div"
                            ></div>
                            <div
                              id="almTaxExclusivePrice_feature_div"
                              className="celwidget"
                              data-feature-name="almTaxExclusivePrice"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="almTaxExclusivePrice"
                              data-csa-c-slot-id="almTaxExclusivePrice_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="jj73xm-bppczf-fdnhrq-ydu7n8"
                              data-cel-widget="almTaxExclusivePrice_feature_div"
                            ></div>
                            <div
                              id="oneTimePaymentPrice_feature_div"
                              className="celwidget"
                              data-feature-name="oneTimePaymentPrice"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="oneTimePaymentPrice"
                              data-csa-c-slot-id="oneTimePaymentPrice_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="1ss4fd-5bnj1g-pst6r2-75j8vi"
                              data-cel-widget="oneTimePaymentPrice_feature_div"
                            ></div>
                            <div
                              id="installmentPaymentPrice_feature_div"
                              className="celwidget"
                              data-feature-name="installmentPaymentPrice"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="installmentPaymentPrice"
                              data-csa-c-slot-id="installmentPaymentPrice_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="t736tz-a5yue1-asr38o-vkr0uy"
                              data-cel-widget="installmentPaymentPrice_feature_div"
                            ></div>
                            <div
                              id="amazonDevicesCustomPriceMessaging_feature_div"
                              className="celwidget"
                              data-feature-name="amazonDevicesCustomPriceMessaging"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="amazonDevicesCustomPriceMessaging"
                              data-csa-c-slot-id="amazonDevicesCustomPriceMessaging_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="btk7ba-7go6th-oq6vv8-55o52c"
                              data-cel-widget="amazonDevicesCustomPriceMessaging_feature_div"
                            ></div>
                            <div
                              id="bundleLTBSSavings_feature_div"
                              className="celwidget"
                              data-feature-name="bundleLTBSSavings"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="bundleLTBSSavings"
                              data-csa-c-slot-id="bundleLTBSSavings_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="bze401-hroq32-qkmmxj-ph65jb"
                              data-cel-widget="bundleLTBSSavings_feature_div"
                            ></div>
                            <div
                              id="volumeAwarePricingTableLoader_feature_div"
                              className="celwidget"
                              data-feature-name="volumeAwarePricingTableLoader"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="volumeAwarePricingTableLoader"
                              data-csa-c-slot-id="volumeAwarePricingTableLoader_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="r7ialx-o7g8bl-xnx9ig-2lw241"
                              data-cel-widget="volumeAwarePricingTableLoader_feature_div"
                            ></div>
                            <div
                              id="promoMessagingDiscountValue_feature_div"
                              className="celwidget"
                              data-feature-name="promoMessagingDiscountValue"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="promoMessagingDiscountValue"
                              data-csa-c-slot-id="promoMessagingDiscountValue_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="bsjfws-piva4x-aet12j-t51bn2"
                              data-cel-widget="promoMessagingDiscountValue_feature_div"
                            ></div>
                            <div
                              id="vatMessage_feature_div"
                              className="celwidget"
                              data-feature-name="vatMessage"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="vatMessage"
                              data-csa-c-slot-id="vatMessage_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="ndf8we-j31ypf-vcwhj7-qi6uxx"
                              data-cel-widget="vatMessage_feature_div"
                            >
                              <span className="a-size-base a-text-normal">
                                {" "}
                                Inclusive of all taxes
                              </span>
                            </div>
                            <div
                              id="points_feature_div"
                              className="celwidget"
                              data-feature-name="points"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="points"
                              data-csa-c-slot-id="points_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="4ucyn-wvirp0-h3hje2-lyx3wr"
                              data-cel-widget="points_feature_div"
                            ></div>
                            <div
                              id="pep_feature_div"
                              className="celwidget"
                              data-feature-name="pep"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="pep"
                              data-csa-c-slot-id="pep_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="mkd0zr-k7g8r8-lbwk7o-h57p1n"
                              data-cel-widget="pep_feature_div"
                            ></div>
                            <div
                              id="almPrimeSavings_feature_div"
                              className="celwidget"
                              data-feature-name="almPrimeSavings"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="almPrimeSavings"
                              data-csa-c-slot-id="almPrimeSavings_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="tkpd15-e2pb8z-kd2uvz-c2fgio"
                              data-cel-widget="almPrimeSavings_feature_div"
                            ></div>
                            <div
                              id="reinvent_price_tabular_desktop"
                              className="celwidget"
                              data-feature-name="reinvent_price_tabular_desktop"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="reinvent_price_tabular_desktop"
                              data-csa-c-slot-id="reinvent_price_tabular_desktop"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="uxcnq2-m5svl6-k08p4e-jq98xp"
                              data-cel-widget="reinvent_price_tabular_desktop"
                            >
                              <table className="a-normal a-spacing-none reInventPriceTable"></table>
                            </div>
                            <div
                              id="rebates_feature_div"
                              className="celwidget"
                              data-feature-name="rebates"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="rebates"
                              data-csa-c-slot-id="rebates_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="3ddix2-70i3za-lous09-hkx8vl"
                              data-cel-widget="rebates_feature_div"
                            ></div>
                            <div
                              id="volumeAwarePricingPriceBlockMessaging_feature_div"
                              className="celwidget"
                              data-feature-name="volumeAwarePricingPriceBlockMessaging"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="volumeAwarePricingPriceBlockMessaging"
                              data-csa-c-slot-id="volumeAwarePricingPriceBlockMessaging_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="th9ug-yn0ebi-wdgyjw-az8axt"
                              data-cel-widget="volumeAwarePricingPriceBlockMessaging_feature_div"
                            ></div>
                            <div
                              id="agsBadgeInsidePrice_feature_div"
                              className="celwidget"
                              data-feature-name="agsBadgeInsidePrice"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="agsBadgeInsidePrice"
                              data-csa-c-slot-id="agsBadgeInsidePrice_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="y0i5w2-13uo8y-frsl1f-ayszsp"
                              data-cel-widget="agsBadgeInsidePrice_feature_div"
                            ></div>
                            <div
                              id="superSaverBadge_feature_div"
                              className="celwidget"
                              data-feature-name="superSaverBadge"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="superSaverBadge"
                              data-csa-c-slot-id="superSaverBadge_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="lj3t0n-t3wkqj-5lb6uc-9x8ofx"
                              data-cel-widget="superSaverBadge_feature_div"
                            ></div>
                            <div
                              id="tradeInPriceBlock_feature_div"
                              className="celwidget"
                              data-feature-name="tradeInPriceBlock"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="tradeInPriceBlock"
                              data-csa-c-slot-id="tradeInPriceBlock_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="96eeoh-4dqn18-jhrghc-2rrzb6"
                              data-cel-widget="tradeInPriceBlock_feature_div"
                            ></div>
                            <div
                              id="quantityPricingTableSummaryInPriceBlock_feature_div"
                              className="celwidget"
                              data-feature-name="quantityPricingTableSummaryInPriceBlock"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="quantityPricingTableSummaryInPriceBlock"
                              data-csa-c-slot-id="quantityPricingTableSummaryInPriceBlock_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="jx15oy-z33cdc-7qoq0t-u27bhq"
                              data-cel-widget="quantityPricingTableSummaryInPriceBlock_feature_div"
                            ></div>
                            <div
                              id="exportsTaxMessage_feature_div"
                              className="celwidget"
                              data-feature-name="exportsTaxMessage"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="exportsTaxMessage"
                              data-csa-c-slot-id="exportsTaxMessage_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="91atv2-i0l621-vfvpi5-rh2mvw"
                              data-cel-widget="exportsTaxMessage_feature_div"
                            ></div>
                            <div
                              id="amazonGlobal_feature_div"
                              className="celwidget"
                              data-feature-name="amazonGlobal"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="amazonGlobal"
                              data-csa-c-slot-id="amazonGlobal_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="bxt8y5-qva9in-9f973f-9im52z"
                              data-cel-widget="amazonGlobal_feature_div"
                            ></div>
                            <div
                              id="promoPriceBlockMessage_feature_div"
                              className="celwidget"
                              data-feature-name="promoPriceBlockMessage"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="promoPriceBlockMessage"
                              data-csa-c-slot-id="promoPriceBlockMessage_feature_div"
                              data-csa-c-asin=""
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="ymel8g-iwhbd8-eovs2x-xdfx1u"
                              data-cel-widget="promoPriceBlockMessage_feature_div"
                            >
                              <div style={{ padding: "0px 0px 0px 0px" }}>
                                {/*ocf0*/}{" "}
                                <span
                                  className="promoPriceBlockMessage"
                                  data-csa-c-content-id="amzn1.asin.B09CHJ5RWK:amzn1.bot.NEW"
                                  data-csa-c-type="widget"
                                  data-csa-c-slot-id="dp-promo-price-block-message"
                                  data-csa-c-painter="dp-cxcw"
                                  data-csa-op-log-render=""
                                  data-csa-c-merchant="A1BWY9D1T7XXN2"
                                  data-csa-c-id="okpz4g-neeb94-o6bm49-gyazjw"
                                >
                                  {/*cc*/}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="issuancePriceblockAmabotIN_feature_div"
                        className="celwidget"
                        data-feature-name="issuancePriceblockAmabotIN"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="issuancePriceblockAmabotIN"
                        data-csa-c-slot-id="issuancePriceblockAmabotIN_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="d39wp3-6ucdi8-qelcya-vh19jl"
                        data-cel-widget="issuancePriceblockAmabotIN_feature_div"
                      ></div>
                      <div
                        id="easyShipMessaging_feature_div"
                        className="celwidget"
                        data-feature-name="easyShipMessaging"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="easyShipMessaging"
                        data-csa-c-slot-id="easyShipMessaging_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="gd7qom-czcibu-67jldy-vv9dgs"
                        data-cel-widget="easyShipMessaging_feature_div"
                      ></div>
                      <div
                        id="dynamicDeliveryMessage_feature_div"
                        className="celwidget"
                        data-feature-name="dynamicDeliveryMessage"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="dynamicDeliveryMessage"
                        data-csa-c-slot-id="dynamicDeliveryMessage_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="wczrsk-cln8h7-y46uyu-3kmseg"
                        data-cel-widget="dynamicDeliveryMessage_feature_div"
                      ></div>
                      <div
                        id="pmpux_feature_div"
                        className="celwidget"
                        data-feature-name="pmpux"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="pmpux"
                        data-csa-c-slot-id="pmpux_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="mn31ao-niwk4s-2bg25j-v19wuw"
                        data-cel-widget="pmpux_feature_div"
                      ></div>
                      <div
                        id="cashOnDelivery_feature_div"
                        className="celwidget"
                        data-feature-name="cashOnDelivery"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="cashOnDelivery"
                        data-csa-c-slot-id="cashOnDelivery_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="ticsmb-wic1y8-hmhwsh-ople7a"
                        data-cel-widget="cashOnDelivery_feature_div"
                      ></div>
                      <div
                        id="b2bUpsell_feature_div"
                        className="celwidget"
                        data-feature-name="b2bUpsell"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="b2bUpsell"
                        data-csa-c-slot-id="b2bUpsell_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="r6wvm2-vi173-tjr9wq-v0h1iq"
                        data-cel-widget="b2bUpsell_feature_div"
                      ></div>
                      <div
                        id="applicablePromotionList_feature_div"
                        className="celwidget"
                        data-feature-name="applicablePromotionList"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="applicablePromotionList"
                        data-csa-c-slot-id="applicablePromotionList_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="wurck-5dlaf6-qagntr-bzl8em"
                        data-cel-widget="applicablePromotionList_feature_div"
                      ></div>
                      <div
                        id="soppATF_feature_div"
                        className="celwidget"
                        data-feature-name="sopp"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="sopp"
                        data-csa-c-slot-id="soppATF_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="75a6zc-vc27az-i6kjm9-t6bsfk"
                        data-cel-widget="soppATF_feature_div"
                      ></div>
                      <div
                        id="vsxoffers_feature_div"
                        className="celwidget"
                        data-feature-name="vsxoffers"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="vsxoffers"
                        data-csa-c-slot-id="vsxoffers_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="cyo2ry-j8l4vu-twdjwh-31d0on"
                        data-cel-widget="vsxoffers_feature_div"
                      >
                        <div className="a-section vsxoffers_desktop_feature">
                          
                            <div className="a-section a-spacing-none vsx__commons">
                              <div
                                id="vsx__offer-data"
                                data-ajaxerrormessage="Error while fetching the offer details. Try again later."
                                data-asin="B09CHJ5RWK"
                                data-buyingoptionindex={0}
                                data-query-args="merchantId:A1BWY9D1T7XXN2"
                                className="a-section aok-hidden"
                              />
                            </div>
                            <hr
                              aria-hidden="true"
                              className="a-spacing-small a-divider-normal twister-plus-divider"
                            />
                            
                        </div>
                      </div>
                      <div
                        id="loyaltyRewardPointsEarnings_feature_div"
                        className="celwidget"
                        data-feature-name="loyaltyRewardPointsEarnings"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="loyaltyRewardPointsEarnings"
                        data-csa-c-slot-id="loyaltyRewardPointsEarnings_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="gwro7a-gzzz6z-acaczt-igvyoc"
                        data-cel-widget="loyaltyRewardPointsEarnings_feature_div"
                      ></div>
                      <div
                        id="freebies_feature_div"
                        className="celwidget"
                        data-feature-name="freebies"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="freebies"
                        data-csa-c-slot-id="freebies_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="hbasem-qplfsp-kh3utr-fthuzk"
                        data-cel-widget="freebies_feature_div"
                      ></div>
                      <div
                        id="iconfarmv2_feature_div"
                        className="celwidget"
                        data-feature-name="iconfarmv2"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="iconfarmv2"
                        data-csa-c-slot-id="iconfarmv2_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="ziafbz-pdhyh2-c5qnfk-ed7n9k"
                        data-cel-widget="iconfarmv2_feature_div"
                      >
                        <div id="iconfarm-pagestate-holder-0"></div>
                        <div
                          id="icon-farm-widget-0"
                          className="a-section icon-farm-margins celwidget"
                          data-csa-c-id="n1ffdj-bimj6a-je9thc-w60d34"
                          data-cel-widget="icon-farm-widget-0"
                        ></div>
                        <div
                          id="icon-container-1034abf0-15b3-477e-a5db-66d886efe914"
                          className="aok-hidden icon-farm-bottom-sheet a-scroller a-scroller-vertical"
                        >
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-header">
                            <span> 6 Month Warranty </span>{" "}
                          </div>
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-content">
                            <span> 6 months </span>{" "}
                          </div>
                        </div>
                        {/*
  JSP template for returns policy secondary view page, including both GL level
  and generic returns policy.
    */}
                        {/*
    JSP template for new returns policy secondary view page
    */}
                        <div
                          id="icon-farm-secondary-view-holder"
                          className="a-section"
                        >
                          <div
                            className="a-popover-preload"
                            id="a-popover-return-policy-secondary-view"
                          >
                            <div className="a-container return-policy-secondary-view-container">
                              <h2 className="a-size-medium return-policy-title">
                                {" "}
                                <span>10 days Replacement</span>{" "}
                              </h2>{" "}
                              {/*
    JSP template for populating table with return policy info
    */}
                              <table className="a-keyvalue">
                                <tbody>
                                  <tr>
                                    <th> Replacement Reason </th>
                                    <th> Replacement Period </th>
                                    <th> Replacement Policy </th>
                                  </tr>
                                  <tr>
                                    <td>
                                      {" "}
                                      Physical Damage, <br /> Defective, <br />{" "}
                                      Wrong and Missing Item{" "}
                                    </td>
                                    <td> 10 days from delivery </td>
                                    <td> Replacement </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                className="a-box a-alert-inline a-alert-inline-info a-spacing-medium"
                                aria-live="polite"
                                aria-atomic="true"
                              >
                                <div className="a-box-inner a-alert-container">
                                  <i className="a-icon a-icon-alert" />
                                  <div className="a-alert-content">
                                    {" "}
                                    <span>
                                      We will need you to submit a proof of
                                      issue to verify your request.{" "}
                                    </span>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="a-row a-expander-container a-expander-inline-container">
                                <a
                                  data-csa-c-func-deps="aui-da-a-expander-toggle"
                                  data-csa-c-type="widget"
                                  data-csa-interaction-events="click"
                                  aria-expanded="false"
                                  role="button"
                                  href="javascript:void(0)"
                                  data-action="a-expander-toggle"
                                  className="a-expander-header a-declarative a-expander-inline-header a-link-expander"
                                  data-a-expander-toggle='{"allowLinkDefault":true, "expand_prompt":"", "collapse_prompt":""}'
                                  data-csa-c-id="4hpzv6-lq1ztm-xmh6ls-dwv5yt"
                                >
                                  <i className="a-icon a-icon-expand" />
                                  <span className="a-expander-prompt">
                                    {" "}
                                    <span>Know More</span>{" "}
                                  </span>
                                </a>
                                <div
                                  data-expanded="false"
                                  className="a-expander-content return-policy-inline-expander-content a-expander-inline-content a-expander-inner"
                                  style={{ display: "none" }}
                                >
                                  {" "}
                                  {/*
    JSP template for showing icon with return process info
    */}
                                  {/* Title */}
                                  <h1 className="a-size-medium">
                                    {" "}
                                    Replacement Instructions
                                  </h1>
                                  <div className="a-section">
                                    <div className="a-row">
                                      <div className="a-column a-span3 a-text-left">
                                        {/* Icon */}
                                        <img
                                          alt=""
                                          src="https://m.media-amazon.com/images/I/11Sa2OpQXzL.png"
                                        />
                                      </div>
                                      <div className="a-column a-span8 a-text-left">
                                        {/* Description */}
                                        <span>
                                          Keep the item in its original
                                          condition and packaging along with MRP
                                          tag and accessories for a successful
                                          pick-up.
                                        </span>
                                      </div>
                                    </div>
                                  </div>{" "}
                                  {/*
    JSP template for showing icon with return process info
    */}
                                  {/* Title */}
                                  <h1 className="a-size-medium">
                                    {" "}
                                    Replacement verification
                                  </h1>
                                  <div className="a-section">
                                    <div className="a-row">
                                      <div className="a-column a-span3 a-text-left">
                                        {/* Icon */}
                                        <img
                                          alt=""
                                          src="https://m.media-amazon.com/images/I/11aVEj4+dRL.png"
                                        />
                                      </div>
                                      <div className="a-column a-span8 a-text-left">
                                        {/* Description */}
                                        <span>
                                          We will prompt you to download a
                                          diagnostic app or upload an image
                                          proof to resolve device issues.
                                        </span>
                                        <a
                                          className="a-link-normal"
                                          href="/gp/help/customer/display.html?ref_=hp_left_v4_sib&nodeId=G202111910#GUID-752A7CBD-5FE2-4AAE-9ECC-4131D5E29776__SECTION_08E7F16A15F348B58D42EE5C2CEE8C4E"
                                        >
                                          <span>Know more</span>
                                        </a>
                                        <span>
                                          . We may also schedule a call, a
                                          technician visit to your location.
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <hr
                                    aria-hidden="true"
                                    className="a-divider-normal"
                                  />{" "}
                                  <a
                                    className="a-link-emphasis"
                                    href="https://www.amazon.in/gp/help/customer/display.html/?ie=UTF8&nodeId=201149900"
                                  >
                                    Read full returns policy{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="icon-container-59d71874-d1de-4f86-96f5-22535ef5c04f"
                          className="aok-hidden icon-farm-bottom-sheet a-scroller a-scroller-vertical"
                        >
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-header">
                            <span> What is Pay on Delivery (Cash/Card)? </span>{" "}
                          </div>
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-content">
                            <span>
                              {" "}
                              Pay on Delivery (Cash/Card) payment method
                              includes Cash on Delivery (COD) as well as Debit
                              card / Credit card / Net banking payments at your
                              doorstep.{" "}
                            </span>{" "}
                          </div>
                        </div>
                        <div
                          id="icon-container-130ee0e5-0b3f-482c-9188-55fb0eb7393c"
                          className="aok-hidden icon-farm-bottom-sheet a-scroller a-scroller-vertical"
                        >
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-header">
                            <span> Amazon Delivered </span>{" "}
                          </div>
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-content">
                            <span>
                              {" "}
                              Amazon directly manages delivery for this product.
                              Order delivery tracking to your doorstep is
                              available.{" "}
                            </span>
                          </div>
                        </div>
                        <div
                          id="icon-container-a887ec1a-29ad-4689-8755-f4faad67c951"
                          className="aok-hidden icon-farm-bottom-sheet a-scroller a-scroller-vertical"
                        >
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-header">
                            <span> Free Delivery </span>{" "}
                          </div>
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-content">
                            <span>
                              {" "}
                              The product is eligible for Free delivery on your
                              first order in this category.{" "}
                              <a
                                className="a-link-normal a-nowrap"
                                target="_blank"
                                href="/gp/help/customer/display.html?nodeId=200534000"
                              >
                                Learn more
                              </a>{" "}
                            </span>{" "}
                          </div>
                        </div>
                        <div
                          id="icon-container-e40c3354-ad45-4a55-a022-a3f21be8f632"
                          className="aok-hidden icon-farm-bottom-sheet a-scroller a-scroller-vertical"
                        >
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-header">
                            <span> Your transaction is secure </span>{" "}
                          </div>
                          <div className="a-section a-spacing-none icon-farm-bottom-sheet-content">
                            <span>
                              {" "}
                              We work hard to protect your security and privacy.
                              Our payment security system encrypts your
                              information during transmission. We don’t share
                              your credit card details with third-party sellers,
                              and we don’t sell your information to others.{" "}
                              <a
                                className="a-link-normal a-nowrap"
                                target="_blank"
                                href="/gp/help/customer/display.html?nodeId=202115020"
                              >
                                Learn more
                              </a>{" "}
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        id="pbx_feature_div"
                        className="celwidget"
                        data-feature-name="pbx"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="pbx"
                        data-csa-c-slot-id="pbx_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="pik28a-bvmq99-ism0f0-mmknzl"
                        data-cel-widget="pbx_feature_div"
                      ></div>
                      <div
                        id="pbxFreebies_feature_div"
                        className="celwidget"
                        data-feature-name="pbxFreebies"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="pbxFreebies"
                        data-csa-c-slot-id="pbxFreebies_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="ff20fq-4tugpe-18axxh-r6j387"
                        data-cel-widget="pbxFreebies_feature_div"
                      ></div>
                      <div
                        id="alternativeOfferEligibilityMessaging_feature_div"
                        className="celwidget"
                        data-feature-name="alternativeOfferEligibilityMessaging"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="alternativeOfferEligibilityMessaging"
                        data-csa-c-slot-id="alternativeOfferEligibilityMessaging_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="txdr6r-7nclp8-5bbr2e-ln1hn0"
                        data-cel-widget="alternativeOfferEligibilityMessaging_feature_div"
                      ></div>
                      <div
                        id="availability_feature_div"
                        className="celwidget"
                        data-feature-name="availability"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="availability"
                        data-csa-c-slot-id="availability_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="ltd0bl-goivlq-wwn187-j5btb2"
                        data-cel-widget="availability_feature_div"
                      ></div>
                      <div
                        id="globalStoreBadgePopover_feature_div"
                        className="celwidget"
                        data-feature-name="globalStoreBadgePopover"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="globalStoreBadgePopover"
                        data-csa-c-slot-id="globalStoreBadgePopover_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="60v8su-nad0c-w7zkqv-v8u0vl"
                        data-cel-widget="globalStoreBadgePopover_feature_div"
                      ></div>
                      <div
                        id="customConditionInline_feature_div"
                        className="celwidget"
                        data-feature-name="customCondition"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="customCondition"
                        data-csa-c-slot-id="customConditionInline_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="dvpgtr-x9a8ba-lips0i-ool6me"
                        data-cel-widget="customConditionInline_feature_div"
                      ></div>
                      <div
                        id="outOfCountry_feature_div"
                        className="celwidget"
                        data-feature-name="outOfCountry"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="outOfCountry"
                        data-csa-c-slot-id="outOfCountry_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="sek15z-54sms8-dsfi46-o63huh"
                        data-cel-widget="outOfCountry_feature_div"
                      ></div>
                      <div
                        id="shipsFromSoldBy_feature_div"
                        className="celwidget"
                        data-feature-name="shipsFromSoldBy"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="shipsFromSoldBy"
                        data-csa-c-slot-id="shipsFromSoldBy_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="i4yg5t-bcp0u5-xfp2vx-n901e0"
                        data-cel-widget="shipsFromSoldBy_feature_div"
                      ></div>
                      <div
                        id="productSupportAndReturnPolicy_feature_div"
                        className="celwidget"
                        data-feature-name="productSupportAndReturnPolicy"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="productSupportAndReturnPolicy"
                        data-csa-c-slot-id="productSupportAndReturnPolicy_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="1ifs11-awdz37-erhiab-zgd1yc"
                        data-cel-widget="productSupportAndReturnPolicy_feature_div"
                      >
                        {/* productSupportAndReturnPolicy */}
                      </div>
                      <div
                        id="twister_feature_div"
                        className="celwidget"
                        data-feature-name="twister"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="twister"
                        data-csa-c-slot-id="twister_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="h0lvyq-5zrjo3-6wac0-ro7r4i"
                        data-cel-widget="twister_feature_div"
                      ></div>
                      <div
                        id="bundles_feature_div"
                        className="celwidget"
                        data-feature-name="bundles"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="bundles"
                        data-csa-c-slot-id="bundles_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="4mm31j-tpl54h-sng62t-kysoky"
                        data-cel-widget="bundles_feature_div"
                      ></div>
                      <div
                        id="dynamicFitZone"
                        className="celwidget"
                        data-feature-name="dynamicFitZone"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="dynamicFitZone"
                        data-csa-c-slot-id="dynamicFitZone"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="8j7wyj-nhow6z-g8u8yp-uzl8n6"
                        data-cel-widget="dynamicFitZone"
                      >
                        <div className="a-section">
                          <div
                            id="softlinesPDPIngress_feature_div"
                            className="celwidget"
                            data-feature-name="softlinesPDPIngress"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="softlinesPDPIngress"
                            data-csa-c-slot-id="softlinesPDPIngress_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="49ijlg-eyr54a-rc48mo-vqjkuh"
                            data-cel-widget="softlinesPDPIngress_feature_div"
                          ></div>
                          <div
                            id="substituteRecommendations_feature_div"
                            className="celwidget"
                            data-feature-name="substituteRecommendations"
                            data-csa-c-type="widget"
                            data-csa-c-content-id="substituteRecommendations"
                            data-csa-c-slot-id="substituteRecommendations_feature_div"
                            data-csa-c-asin=""
                            data-csa-c-is-in-initial-active-row="false"
                            data-csa-c-id="r13pic-5my9rn-munz9q-p7qqiv"
                            data-cel-widget="substituteRecommendations_feature_div"
                          ></div>
                        </div>
                      </div>
                      <div
                        id="valueAdds_feature_div"
                        className="celwidget"
                        data-feature-name="valueAdds"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="valueAdds"
                        data-csa-c-slot-id="valueAdds_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="wxozk5-y80skt-i14xgn-59xt9c"
                        data-cel-widget="valueAdds_feature_div"
                      >
                        {/* Do not use this file for any Non VAS use cases */}
                        {/* if warranty SI is eligible to be shown https://w.amazon.com/bin/view/VAS/Discovery/ServiceInterstitialDisplayLogic*/}
                      </div>
                      <div
                        id="veryHighValueMessage_feature_div"
                        className="celwidget"
                        data-feature-name="veryHighValueMessage"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="veryHighValueMessage"
                        data-csa-c-slot-id="veryHighValueMessage_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="jeblo6-ib46r1-gpoq-7mv32k"
                        data-cel-widget="veryHighValueMessage_feature_div"
                      ></div>
                      <div
                        id="clickToContact_feature_div"
                        className="celwidget"
                        data-feature-name="clickToContact"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="clickToContact"
                        data-csa-c-slot-id="clickToContact_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="hcnq6j-4kwygb-uocdxc-p0eent"
                        data-cel-widget="clickToContact_feature_div"
                      ></div>
                      <div
                        id="twisterPlusWWDesktop"
                        className="celwidget"
                        data-feature-name="twisterPlusWWDesktop"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="twisterPlusWWDesktop"
                        data-csa-c-slot-id="twisterPlusWWDesktop"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="svt2uy-wdud1q-wo3lr-nkyw8p"
                        data-cel-widget="twisterPlusWWDesktop"
                      >
                        <div className="a-section aok-hidden twister-plus-buying-options-price-data">
                          {"{"}"desktop_buybox_group_1":[{"{"}
                          "displayPrice":"₹169.00","priceAmount":169.00,"currencySymbol":"₹","integerValue":"169","decimalSeparator":".","fractionalValue":"00","symbolPosition":"left","hasSpace":false,"showFractionalPartIfEmpty":false,"offerListingId":"s5crAhuVQ%2FOU8XQNPI4ZPLl7Or37TuEO4VtnQnPQ4Mxdj5FrW0QD%2BLFSwWXARQzT36bMujRIB57vfdbCoxUhOVtSzX8lZ2eONA60LLZsiVkyYJ3JKfaLBFZxrpIqrAPEAU5pmft4ND7piqAzk8CmiS7ESg6cMupFKtQTCq4ADkf9jTbhq1SWBymTrcJTOaCr","locale":"en-IN","buyingOptionType":"NEW","aapiBuyingOptionIndex":0
                          {"}"}]{"}"}
                        </div>
                        <div
                          id="twister-plus-feature"
                          className="a-section a-spacing-large aok-hidden"
                        >
                          <h3 className="a-spacing-small a-spacing-top-large twister-plus-header">
                            Purchase options and add-ons{" "}
                          </h3>
                          <hr
                            aria-hidden="true"
                            className="a-spacing-small a-divider-normal twister-plus-divider"
                          />
                          <div
                            id="tp-cc-cards-refresh-strings"
                            data-multiple-card-invalid-or-selection-invalid-message="The enhancements that you chose aren’t available for this option"
                            data-multiple-details-update-or-cards-refresh-message="The enhancements that you chose have been updated"
                            data-single-card-invalid-message="###cardName not available for this option"
                            data-single-details-update-message="###cardName you chose has been updated"
                            data-single-selection-invalid-message="###cardName you chose isn't available for this option"
                            className="a-section aok-hidden"
                          >
                            {" "}
                          </div>
                          <div
                            id="tp-cc-cards-refresh-red-notification"
                            className="a-section aok-hidden"
                          >
                            <div
                              className="a-box a-alert-inline a-alert-inline-error"
                              role="alert"
                            >
                              <div className="a-box-inner a-alert-container">
                                <i className="a-icon a-icon-alert" />
                                <div className="a-alert-content" />
                              </div>
                            </div>
                          </div>
                          <div
                            id="tp-cc-cards-refresh-green-notification"
                            className="a-section aok-hidden"
                          >
                            <div
                              className="a-box a-alert-inline a-alert-inline-info"
                              aria-live="polite"
                              aria-atomic="true"
                            >
                              <div className="a-box-inner a-alert-container">
                                <i className="a-icon a-icon-alert" />
                                <div className="a-alert-content" />
                              </div>
                            </div>
                          </div>{" "}
                          <input
                            type="hidden"
                            id="twister-plus-active-cards"
                            defaultValue=""
                          />
                          <input
                            type="checkbox"
                            id="twister-plus-checkbox"
                            className="aok-hidden"
                          />
                        </div>{" "}
                        <input
                          type="hidden"
                          id="twister-plus-device-type"
                          defaultValue="web"
                        />
                        <input
                          type="hidden"
                          id="twister-plus-eligible"
                          defaultValue="true"
                        />
                        <input
                          type="hidden"
                          id="ccCardsRendered"
                          defaultValue="false"
                        />
                        <input
                          type="hidden"
                          id="twister-plus-asin"
                          defaultValue="B09CHJ5RWK"
                        />
                        <input
                          type="hidden"
                          id="twister-plus-offer-listing-id"
                          defaultValue="s5crAhuVQ%2FOU8XQNPI4ZPLl7Or37TuEO4VtnQnPQ4Mxdj5FrW0QD%2BLFSwWXARQzT36bMujRIB57vfdbCoxUhOVtSzX8lZ2eONA60LLZsiVkyYJ3JKfaLBFZxrpIqrAPEAU5pmft4ND7piqAzk8CmiS7ESg6cMupFKtQTCq4ADkf9jTbhq1SWBymTrcJTOaCr"
                        />
                        <div
                          id="twister-plus-side-sheet-content"
                          className="a-section aok-hidden"
                        >
                          <div id="tp-side-sheet" className="a-section">
                            <div
                              id="tp-side-sheet-main-section"
                              className="a-section aok-hidden twister-plus-side-sheet-content-padding"
                            ></div>
                          </div>
                        </div>{" "}
                        <span
                          className="a-declarative"
                          data-action="close-side-sheet"
                          data-csa-c-type="widget"
                          data-csa-c-func-deps="aui-da-close-side-sheet"
                          data-close-side-sheet="{}"
                          data-csa-c-id="46u2kq-phyi43-kmxz5o-3ikmw5"
                        >
                          <div
                            id="twister-plus-dp-bg"
                            className="a-section aok-hidden twister-plus-darken-bg"
                          >
                            {" "}
                            <i
                              className="a-icon a-icon-close-white a-icon-medium twister-plus-close-button"
                              role="img"
                              aria-label="close"
                            />{" "}
                          </div>
                        </span>
                      </div>
                      <div
                        id="gestaltCustomizationSummary_feature_div"
                        className="celwidget"
                        data-feature-name="gestaltCustomizationSummary"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="gestaltCustomizationSummary"
                        data-csa-c-slot-id="gestaltCustomizationSummary_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="sogyub-xl057w-z98z42-uz1s18"
                        data-cel-widget="gestaltCustomizationSummary_feature_div"
                      ></div>
                      <div
                        id="sizeChartV2Data_feature_div"
                        className="celwidget"
                        data-feature-name="sizeChartV2Data"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="sizeChartV2Data"
                        data-csa-c-slot-id="sizeChartV2Data_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="9qu8h3-ay7rvb-h2whh1-3q9brm"
                        data-cel-widget="sizeChartV2Data_feature_div"
                      ></div>
                      <div
                        id="productFactsDesktop_feature_div"
                        className="celwidget"
                        data-feature-name="productFactsDesktop"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="productFactsDesktop"
                        data-csa-c-slot-id="productFactsDesktop_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="ewjmdo-x4h9k0-t7guoo-u34jj8"
                        data-cel-widget="productFactsDesktop_feature_div"
                      >
                        <div
                          id="productFactsDesktopExpander"
                          data-a-expander-name="productFactsDesktopExpander"
                          data-a-expander-collapsed-height={400}
                          className="a-expander-collapsed-height a-row a-expander-container a-spacing-medium a-expander-partial-collapse-container"
                          style={{ maxHeight: "none", height: "auto" }}
                        >
                          <div
                            data-expanded="true"
                            className="a-expander-content a-expander-partial-collapse-content a-expander-content-expanded"
                            style={{ paddingBottom: 20 }}
                          >
                            <h3 className="product-facts-title">
                              {" "}
                              Product details{" "}
                            </h3>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                <div
                                  className="a-fixed-left-grid-col a-col-left"
                                  style={{
                                    width: 140,
                                    marginLeft: "-140px",
                                    float: "left"
                                  }}
                                >
                                  <span style={{ fontWeight: 600 }}>
                                    <span className="a-color-base">
                                      Case diameter
                                    </span>
                                  </span>
                                </div>
                                <div
                                  className="a-fixed-left-grid-col a-col-right"
                                  style={{ paddingLeft: "6%", float: "left" }}
                                >
                                  {" "}
                                  <span style={{ fontWeight: 400 }}>
                                    <span className="a-color-base">
                                      28 Millimetres
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                <div
                                  className="a-fixed-left-grid-col a-col-left"
                                  style={{
                                    width: 140,
                                    marginLeft: "-140px",
                                    float: "left"
                                  }}
                                >
                                  <span style={{ fontWeight: 600 }}>
                                    <span className="a-color-base">
                                      Band colour
                                    </span>
                                  </span>
                                </div>
                                <div
                                  className="a-fixed-left-grid-col a-col-right"
                                  style={{ paddingLeft: "6%", float: "left" }}
                                >
                                  {" "}
                                  <span style={{ fontWeight: 400 }}>
                                    <span className="a-color-base">Black</span>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                <div
                                  className="a-fixed-left-grid-col a-col-left"
                                  style={{
                                    width: 140,
                                    marginLeft: "-140px",
                                    float: "left"
                                  }}
                                >
                                  <span style={{ fontWeight: 600 }}>
                                    <span className="a-color-base">
                                      Band material type
                                    </span>{" "}
                                  </span>
                                </div>
                                <div
                                  className="a-fixed-left-grid-col a-col-right"
                                  style={{ paddingLeft: "6%", float: "left" }}
                                >
                                  {" "}
                                  <span style={{ fontWeight: 400 }}>
                                    <span className="a-color-base">
                                      Silicone
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                <div
                                  className="a-fixed-left-grid-col a-col-left"
                                  style={{
                                    width: 140,
                                    marginLeft: "-140px",
                                    float: "left"
                                  }}
                                >
                                  <span style={{ fontWeight: 600 }}>
                                    <span className="a-color-base">
                                      Warranty type
                                    </span>
                                  </span>
                                </div>
                                <div
                                  className="a-fixed-left-grid-col a-col-right"
                                  style={{ paddingLeft: "6%", float: "left" }}
                                >
                                  {" "}
                                  <span style={{ fontWeight: 400 }}>
                                    <span className="a-color-base">
                                      No Warranty
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                <div
                                  className="a-fixed-left-grid-col a-col-left"
                                  style={{
                                    width: 140,
                                    marginLeft: "-140px",
                                    float: "left"
                                  }}
                                >
                                  <span style={{ fontWeight: 600 }}>
                                    <span className="a-color-base">
                                      Watch movement type
                                    </span>{" "}
                                  </span>
                                </div>
                                <div
                                  className="a-fixed-left-grid-col a-col-right"
                                  style={{ paddingLeft: "6%", float: "left" }}
                                >
                                  {" "}
                                  <span style={{ fontWeight: 400 }}>
                                    <span className="a-color-base">Quartz</span>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                <div
                                  className="a-fixed-left-grid-col a-col-left"
                                  style={{
                                    width: 140,
                                    marginLeft: "-140px",
                                    float: "left"
                                  }}
                                >
                                  <span style={{ fontWeight: 600 }}>
                                    <span className="a-color-base">
                                      Case thickness
                                    </span>
                                  </span>
                                </div>
                                <div
                                  className="a-fixed-left-grid-col a-col-right"
                                  style={{ paddingLeft: "6%", float: "left" }}
                                >
                                  {" "}
                                  <span style={{ fontWeight: 400 }}>
                                    <span className="a-color-base">7.5</span>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                <div
                                  className="a-fixed-left-grid-col a-col-left"
                                  style={{
                                    width: 140,
                                    marginLeft: "-140px",
                                    float: "left"
                                  }}
                                >
                                  <span style={{ fontWeight: 600 }}>
                                    <span className="a-color-base">
                                      Country of Origin
                                    </span>{" "}
                                  </span>
                                </div>
                                <div
                                  className="a-fixed-left-grid-col a-col-right"
                                  style={{ paddingLeft: "6%", float: "left" }}
                                >
                                  {" "}
                                  <span style={{ fontWeight: 400 }}>
                                    <span className="a-color-base">India</span>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <hr
                              aria-hidden="true"
                              className="a-spacing-base a-spacing-top-base a-divider-normal"
                            />
                            <h3 className="product-facts-title">
                              {" "}
                              About this item{" "}
                            </h3>
                            <ul className="a-unordered-list a-vertical a-spacing-small">
                              <li>
                                <span className="a-list-item a-size-base a-color-base">
                                
                                </span>
                              </li>
                            </ul>
                            <hr
                              aria-hidden="true"
                              className="a-spacing-base a-spacing-top-base a-divider-normal"
                            />
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                {" "}
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                {" "}
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                {" "}
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                {" "}
                              </div>
                            </div>
                            <div className="a-fixed-left-grid product-facts-detail">
                              <div
                                className="a-fixed-left-grid-inner"
                                style={{ paddingLeft: 140 }}
                              >
                                {" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="provenanceCertifications_feature_div"
                        className="celwidget"
                        data-feature-name="provenanceCertifications"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="provenanceCertifications"
                        data-csa-c-slot-id="provenanceCertifications_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="7cd58j-92thsk-pnqzt9-kxpeoi"
                        data-cel-widget="provenanceCertifications_feature_div"
                      ></div>
                      <div
                        id="globalStoreInfoBullets_feature_div"
                        className="celwidget"
                        data-feature-name="globalStoreInfoBullets"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="globalStoreInfoBullets"
                        data-csa-c-slot-id="globalStoreInfoBullets_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="n3webd-9qwtbs-tlpid1-cnmwxl"
                        data-cel-widget="globalStoreInfoBullets_feature_div"
                      ></div>
                      <div
                        id="andonCord_feature_div"
                        className="celwidget"
                        data-feature-name="andonCord"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="andonCord"
                        data-csa-c-slot-id="andonCord_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="bc3voh-hb9qba-jj0tpb-49tl3l"
                        data-cel-widget="andonCord_feature_div"
                      ></div>
                      <div
                        id="buyingOptionNostosBadge_feature_div"
                        className="celwidget"
                        data-feature-name="buyingOptionNostosBadge"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="buyingOptionNostosBadge"
                        data-csa-c-slot-id="buyingOptionNostosBadge_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="2d5da6-x41t0g-gu23yg-3utxfw"
                        data-cel-widget="buyingOptionNostosBadge_feature_div"
                      ></div>
                      <div
                        id="tellAmazon_feature_div"
                        className="celwidget"
                        data-feature-name="tellAmazon"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="tellAmazon"
                        data-csa-c-slot-id="tellAmazon_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="vs58qi-en7xpk-t4m55u-srb4hi"
                        data-cel-widget="tellAmazon_feature_div"
                      >
                        <div
                          className="celwidget c-f"
                         
                          data-csa-op-log-render=""
                          data-csa-c-content-id="DsUnknown"
                          data-csa-c-slot-id="DsUnknown-2"
                          data-csa-c-type="widget"
                          data-csa-c-painter="tell-amazon-desktop-cards"
                          data-csa-c-id="dence5-71k8t9-os09nk-fk9zaq"
                          data-cel-widget="tell-amazon-desktop_DetailPage_1"
                        >
                          {/*CardsClient*/}
                          <div
                            id="CardInstance8QsKby6FGC1QBF5TsHloLw"
                            data-card-metrics-id="tell-amazon-desktop_DetailPage_1"
                            data-acp-tracking="{}"
                            data-mix-claimed="true"
                          >
                            <div className="_tell-amazon-desktop_style_tell_amazon_modal_root__1q10s aok-hidden">
                              <div className="_tell-amazon-desktop_style_tell_amazon_modal_content__2YB_6">
                                <div className="_tell-amazon-desktop_style_tell_amazon_modal_spinner__3bz5K">
                                  <span className="a-spinner a-spinner-medium" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="heroQuickPromo_feature_div"
                        className="celwidget"
                        data-feature-name="heroQuickPromo"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="heroQuickPromo"
                        data-csa-c-slot-id="heroQuickPromo_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="3cndpj-wz0c5h-fbzazq-cqmyaw"
                        data-cel-widget="heroQuickPromo_feature_div"
                      >
                        <div style={{ marginBottom: 5 }} />
                      </div>
                      <div
                        id="newerVersion_feature_div"
                        className="celwidget"
                        data-feature-name="newerVersion"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="newerVersion"
                        data-csa-c-slot-id="newerVersion_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="3okrjd-ca2ytn-lrcqw-n7set9"
                        data-cel-widget="newerVersion_feature_div"
                      ></div>
                      <div
                        id="valuePick_feature_div"
                        className="celwidget"
                        data-feature-name="valuePick"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="valuePick"
                        data-csa-c-slot-id="valuePick_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="8drkbj-1k0fap-7as0l8-rvqoa7"
                        data-cel-widget="valuePick_feature_div"
                      >
                        <div
                          id="valuePick_container"
                          className="celwidget pf_rd_p-95ea8b69-9a0d-4a8a-8f4e-5e974a005fcd pf_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-WrHqp pd_rd_i-B09TPKLFMM pd_rd_w-9mk1O content-id-amzn1.sym.95ea8b69-9a0d-4a8a-8f4e-5e974a005fcd pd_rd_r-ac4b6791-8a20-464b-8ebf-02970cdcc34d "
                          
                          data-source="dpUpsellWidgetVPINDesktop"
                          data-csa-c-id="et7u3b-4ac0g3-7hiwxv-z2j7l3"
                          data-cel-widget="valuePick_desktop_container"
                        ></div>
                      </div>
                      <div
                        id="productAlert_feature_div"
                        className="celwidget"
                        data-feature-name="productAlert"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="productAlert"
                        data-csa-c-slot-id="productAlert_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="x76ifv-z1ac5s-tykldp-mp9k6u"
                        data-cel-widget="productAlert_feature_div"
                      ></div>
                      <div id="hover-zoom-end" style={{ display: "none" }} />
                    </div>
                    <div
                      id="rightCol"
                      className="a-fixed-right-grid-col a-col-right"
                      style={{
                        width: 244,
                        marginRight: "-244px",
                        float: "left"
                      }}
                    >
                      <div
                        id="tellAFriendBox_feature_div"
                        className="celwidget"
                        data-feature-name="tellAFriendBox"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="tellAFriendBox"
                        data-csa-c-slot-id="tellAFriendBox_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="u1p5jo-hpdfct-xxceab-q4d4h"
                        data-cel-widget="tellAFriendBox_feature_div"
                      ></div>
                      <div
                        id="trustMessage_feature_div"
                        className="celwidget"
                        data-feature-name="trustMessage"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="trustMessage"
                        data-csa-c-slot-id="trustMessage_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="9u8b7d-73ncsw-ualz1t-u4g373"
                        data-cel-widget="trustMessage_feature_div"
                      ></div>
                      <div
                        id="fodcx_feature_div"
                        className="celwidget"
                        data-feature-name="fodcx"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="fodcx"
                        data-csa-c-slot-id="fodcx_feature_div"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="v4irry-mua3qb-4zq0yw-7lbrg3"
                        data-cel-widget="fodcx_feature_div"
                      ></div>
                      <div
                        id="desktop_buybox"
                        className="celwidget"
                        data-feature-name="desktop_buybox"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="desktop_buybox"
                        data-csa-c-slot-id="desktop_buybox"
                        data-csa-c-asin=""
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="ihmowf-jqk5oh-in6wst-fbpj6w"
                        data-cel-widget="desktop_buybox"
                      >
                        <div id="buybox">
                          <div
                            data-csa-c-type="element"
                            data-csa-c-slot-id="offer_display_content"
                            data-csa-c-content-id="desktop_buybox_group_1"
                            data-csa-c-id="gdj2ck-iv7dua-okc3eo-5hb95d"
                          >
                            <div
                              id="gsod_singleOfferDisplay_Desktop"
                              className="celwidget"
                              data-feature-name="gsod_singleOfferDisplay_Desktop"
                              data-csa-c-type="widget"
                              data-csa-c-content-id="gsod_singleOfferDisplay_Desktop"
                              data-csa-c-slot-id="gsod_singleOfferDisplay_Desktop"
                              data-csa-c-asin="B09CHJ5RWK"
                              data-csa-c-is-in-initial-active-row="false"
                              data-csa-c-id="gzmdm5-h9bsex-t5yejx-wqxu0x"
                              data-cel-widget="gsod_singleOfferDisplay_Desktop"
                            >
                              <div
                                id="qualifiedBuybox"
                                className="celwidget"
                                data-feature-name="qualifiedBuybox"
                                data-csa-c-id="fdb7hs-2mykc0-1wkfoy-z4dqsl"
                                data-cel-widget="qualifiedBuybox"
                              >
                                <div className="a-section">
                                  <form
                                    method="post"
                                    id="addToCart"
                                    action="/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance"
                                    className="a-content"
                                    autoComplete="off"
                                  >
                                    {/* sp:csrf */}
                                    <input
                                      type="hidden"
                                      name="anti-csrftoken-a2z"
                                      defaultValue="hLiIbsvLMPI1G4CXXA1/tyLiwyWEshTF4Ig0Lfxzbr74AAAAAGdDKxo5ZTU1MWQwNC03ZjdmLTQyNWMtYTI3ZS04OTUyMDQ0OWNmZjU="
                                      id="desktop-atc-anti-csrf-token"
                                    />
                                    {/* sp:end-csrf */}
                                    <input
                                      type="hidden"
                                      name="items[0.base][asin]"
                                      defaultValue="B09CHJ5RWK"
                                    />
                                    <input
                                      type="hidden"
                                      name="clientName"
                                      defaultValue="OffersX_OfferDisplay_DetailPage"
                                    />
                                    <input
                                      type="hidden"
                                      name="items[0.base][offerListingId]"
                                      defaultValue="s5crAhuVQ%2FOU8XQNPI4ZPLl7Or37TuEO4VtnQnPQ4Mxdj5FrW0QD%2BLFSwWXARQzT36bMujRIB57vfdbCoxUhOVtSzX8lZ2eONA60LLZsiVkyYJ3JKfaLBFZxrpIqrAPEAU5pmft4ND7piqAzk8CmiS7ESg6cMupFKtQTCq4ADkf9jTbhq1SWBymTrcJTOaCr"
                                    />
                                    <input
                                      type="hidden"
                                      name="pageLoadTimestampUTC"
                                      defaultValue="2024-11-24T13:33:14.302Z"
                                    />
                                    <input
                                      type="hidden"
                                      id="offerListingID"
                                      name="offerListingID"
                                      defaultValue="s5crAhuVQ%2FOU8XQNPI4ZPLl7Or37TuEO4VtnQnPQ4Mxdj5FrW0QD%2BLFSwWXARQzT36bMujRIB57vfdbCoxUhOVtSzX8lZ2eONA60LLZsiVkyYJ3JKfaLBFZxrpIqrAPEAU5pmft4ND7piqAzk8CmiS7ESg6cMupFKtQTCq4ADkf9jTbhq1SWBymTrcJTOaCr"
                                    />
                                    <input
                                      type="hidden"
                                      id="session-id"
                                      name="session-id"
                                      defaultValue="261-0713373-3141624"
                                    />
                                    <input
                                      type="hidden"
                                      id="ASIN"
                                      name="ASIN"
                                      defaultValue="B09CHJ5RWK"
                                    />
                                    <input
                                      type="hidden"
                                      id="isMerchantExclusive"
                                      name="isMerchantExclusive"
                                      defaultValue={0}
                                    />
                                    <input
                                      type="hidden"
                                      id="merchantID"
                                      name="merchantID"
                                      defaultValue="A1BWY9D1T7XXN2"
                                    />
                                    <input
                                      type="hidden"
                                      id="isAddon"
                                      name="isAddon"
                                      defaultValue={0}
                                    />
                                    <input
                                      type="hidden"
                                      id="nodeID"
                                      name="nodeID"
                                      defaultValue=""
                                    />
                                    <input
                                      type="hidden"
                                      id="sellingCustomerID"
                                      name="sellingCustomerID"
                                      defaultValue=""
                                    />
                                    <input
                                      type="hidden"
                                      id="qid"
                                      name="qid"
                                      defaultValue={1732454536}
                                    />
                                    <input
                                      type="hidden"
                                      id="sr"
                                      name="sr"
                                      defaultValue="8-7"
                                    />
                                    <input
                                      type="hidden"
                                      id="storeID"
                                      name="storeID"
                                      defaultValue=""
                                    />
                                    <input
                                      type="hidden"
                                      id="tagActionCode"
                                      name="tagActionCode"
                                      defaultValue=""
                                    />
                                    <input
                                      type="hidden"
                                      id="viewID"
                                      name="viewID"
                                      defaultValue="glance"
                                    />
                                    <input
                                      type="hidden"
                                      id="rebateId"
                                      name="rebateId"
                                      defaultValue=""
                                    />
                                    <input
                                      type="hidden"
                                      id="ctaDeviceType"
                                      name="ctaDeviceType"
                                      defaultValue="desktop"
                                    />
                                    <input
                                      type="hidden"
                                      id="ctaPageType"
                                      name="ctaPageType"
                                      defaultValue="detail"
                                    />
                                    <input
                                      type="hidden"
                                      id="usePrimeHandler"
                                      name="usePrimeHandler"
                                      defaultValue={0}
                                    />
                                    <input
                                      type="hidden"
                                      id="smokeTestEnabled"
                                      name="smokeTestEnabled"
                                      defaultValue="false"
                                    />
                                    <input
                                      type="hidden"
                                      id="rsid"
                                      name="rsid"
                                      defaultValue="261-0713373-3141624"
                                    />
                                    <input
                                      type="hidden"
                                      id="sourceCustomerOrgListID"
                                      name="sourceCustomerOrgListID"
                                      defaultValue=""
                                    />
                                    <input
                                      type="hidden"
                                      id="sourceCustomerOrgListItemID"
                                      name="sourceCustomerOrgListItemID"
                                      defaultValue=""
                                    />
                                    <input
                                      type="hidden"
                                      name="wlPopCommand"
                                      defaultValue=""
                                    />
                                    <div className="a-box-group">
                                      <div className="a-box a-last">
                                        <div className="a-box-inner">
                                          <div className="a-section a-spacing-none a-padding-none">
                                            <div
                                              id="renewedSingleOfferHeader"
                                              className="celwidget"
                                              data-feature-name="renewedSingleOfferHeader"
                                              data-csa-c-type="widget"
                                              data-csa-c-content-id="renewedSingleOfferHeader"
                                              data-csa-c-slot-id="renewedSingleOfferHeader"
                                              data-csa-c-asin="B09CHJ5RWK"
                                              data-csa-c-is-in-initial-active-row="false"
                                              data-csa-c-id="r65u7m-64c832-hgxe27-q1hxih"
                                              data-cel-widget="renewedSingleOfferHeader"
                                            >
                                              <div
                                                id="renewedSingleOfferCaption_feature_div"
                                                className="celwidget"
                                                data-feature-name="renewedSingleOfferCaption"
                                                data-csa-c-type="widget"
                                                data-csa-c-content-id="renewedSingleOfferCaption"
                                                data-csa-c-slot-id="renewedSingleOfferCaption_feature_div"
                                                data-csa-c-asin="B09CHJ5RWK"
                                                data-csa-c-is-in-initial-active-row="false"
                                                data-csa-c-id="gy6tl1-26egj7-zb32iy-t9lvx7"
                                                data-cel-widget="renewedSingleOfferCaption_feature_div"
                                              ></div>
                                            </div>
                                            <div
                                              id="booksHeaderInfoContainer"
                                              className="celwidget"
                                              data-feature-name="booksHeaderInfoContainer"
                                              data-csa-c-type="widget"
                                              data-csa-c-content-id="booksHeaderInfoContainer"
                                              data-csa-c-slot-id="booksHeaderInfoContainer"
                                              data-csa-c-asin="B09CHJ5RWK"
                                              data-csa-c-is-in-initial-active-row="false"
                                              data-csa-c-id="7vgphy-oi0e5i-tgmkpn-839voj"
                                              data-cel-widget="booksHeaderInfoContainer"
                                            ></div>
                                            <div
                                              id="apex_offerDisplay_desktop"
                                              className="celwidget"
                                              data-feature-name="apex_offerDisplay_desktop"
                                              data-csa-c-type="widget"
                                              data-csa-c-content-id="apex_offerDisplay_desktop"
                                              data-csa-c-slot-id="apex_offerDisplay_desktop"
                                              data-csa-c-asin="B09CHJ5RWK"
                                              data-csa-c-is-in-initial-active-row="false"
                                              data-csa-c-id="xyhbdy-sxyjhb-g6txsi-l3t7wd"
                                              data-cel-widget="apex_offerDisplay_desktop"
                                            >
                                              <div
                                                data-csa-c-type="widget"
                                                data-csa-c-slot-id="apex_dp_offer_display"
                                                data-csa-c-content-id="apex"
                                                data-csa-c-id="9jjidu-p1pr6h-ls79g2-avdvvc"
                                              >
                                                <div
                                                  id="corePrice_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="corePrice"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="corePrice"
                                                  data-csa-c-slot-id="corePrice_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="6h4zpe-2j08rh-d9vkbg-7too7d"
                                                  data-cel-widget="corePrice_feature_div"
                                                >
                                                  <div
                                                    data-csa-c-type="widget"
                                                    data-csa-c-slot-id="apex_dp_offer_display"
                                                    data-csa-c-content-id="apex_with_rio_cx"
                                                    data-csa-c-id="inbiae-z7nl57-cn5ijm-cgiq67"
                                                  >
                                                    <div className="a-section">
                                                      <span
                                                        className="a-price aok-align-center"
                                                        data-a-size="xl"
                                                        data-a-color="base"
                                                      >
                                                        <span className="a-offscreen">
                                                          ₹169.00
                                                        </span>
                                                        <span aria-hidden="true">
                                                          <span className="a-price-symbol">
                                                            ₹
                                                          </span>
                                                          <span className="a-price-whole">
                                                          {productData?.price || "Price Not Available"}
                                                            <span className="a-price-decimal">
                                                              .
                                                            </span>
                                                          </span>
                                                          <span className="a-price-fraction">
                                                            00
                                                          </span>
                                                        </span>
                                                      </span>
                                                      <span
                                                        id="taxInclusiveMessage"
                                                        className="a-size-mini a-color-base aok-align-center aok-nowrap"
                                                      ></span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="regulatoryDeposit_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="regulatoryDeposit"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="regulatoryDeposit"
                                                  data-csa-c-slot-id="regulatoryDeposit_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="hxptyg-dbqx46-4hu8fy-9y1q15"
                                                  data-cel-widget="regulatoryDeposit_feature_div"
                                                ></div>
                                              </div>
                                            </div>
                                            <div
                                              id="desktop_qualifiedBuyBox"
                                              className="celwidget"
                                              data-feature-name="desktop_qualifiedBuyBox"
                                              data-csa-c-type="widget"
                                              data-csa-c-content-id="desktop_qualifiedBuyBox"
                                              data-csa-c-slot-id="desktop_qualifiedBuyBox"
                                              data-csa-c-asin="B09CHJ5RWK"
                                              data-csa-c-is-in-initial-active-row="false"
                                              data-csa-c-id="rgc2fz-rg5b9l-kynr12-4byj03"
                                              data-cel-widget="desktop_qualifiedBuyBox"
                                            >
                                              <div className="a-section a-spacing-none a-padding-none">
                                                <div
                                                  id="dealProgress_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="dealProgress"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="dealProgress"
                                                  data-csa-c-slot-id="dealProgress_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="aspn3v-dloj76-uf9iwk-q0x4l6"
                                                  data-cel-widget="dealProgress_feature_div"
                                                ></div>
                                                <div
                                                  id="invitePlatform_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="invitePlatform"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="invitePlatform"
                                                  data-csa-c-slot-id="invitePlatform_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="qjm8gg-hcb0cb-yzafup-u1dfol"
                                                  data-cel-widget="invitePlatform_feature_div"
                                                ></div>
                                                <div
                                                  id="apex_offerDisplay_single_desktop"
                                                  className="celwidget"
                                                  data-feature-name="apex_offerDisplay_single_desktop"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="apex_offerDisplay_single_desktop"
                                                  data-csa-c-slot-id="apex_offerDisplay_single_desktop"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="iffdeq-gp8hjv-knxmzb-c0eny1"
                                                  data-cel-widget="apex_offerDisplay_single_desktop"
                                                >
                                                  <div
                                                    id="layawayBuyboxMessage_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="layawayBuyboxMessage"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="layawayBuyboxMessage"
                                                    data-csa-c-slot-id="layawayBuyboxMessage_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="q289yx-kyginv-jir4v3-tpnj1v"
                                                    data-cel-widget="layawayBuyboxMessage_feature_div"
                                                  ></div>
                                                  <div
                                                    id="promotionMessageInsideBuyBox_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="promotionMessageInsideBuyBox"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="promotionMessageInsideBuyBox"
                                                    data-csa-c-slot-id="promotionMessageInsideBuyBox_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="3ek81r-u4b9cn-ydt88-kpegjw"
                                                    data-cel-widget="promotionMessageInsideBuyBox_feature_div"
                                                  ></div>
                                                  <div
                                                    id="booksAdditionalPriceInfoContainer"
                                                    className="celwidget"
                                                    data-feature-name="booksAdditionalPriceInfoContainer"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="booksAdditionalPriceInfoContainer"
                                                    data-csa-c-slot-id="booksAdditionalPriceInfoContainer"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="5lsdac-m38dzx-e0y384-78z6sx"
                                                    data-cel-widget="booksAdditionalPriceInfoContainer"
                                                  ></div>
                                                  <div
                                                    id="pointsInsideBuyBox_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="pointsInsideBuyBox"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="pointsInsideBuyBox"
                                                    data-csa-c-slot-id="pointsInsideBuyBox_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="4rdguk-z9m1nr-wdubsm-h0rvrn"
                                                    data-cel-widget="pointsInsideBuyBox_feature_div"
                                                  ></div>
                                                  <div
                                                    id="agsShippingAndIfdInsideBuyBox_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="agsShippingAndIfdInsideBuyBox"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="agsShippingAndIfdInsideBuyBox"
                                                    data-csa-c-slot-id="agsShippingAndIfdInsideBuyBox_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="q2j295-e4uv1i-632t4n-mi2ne3"
                                                    data-cel-widget="agsShippingAndIfdInsideBuyBox_feature_div"
                                                  >
                                                    {/* For LightningDeal use case, agsShippingAndIfdInsideBuyBox is only configured on regular offer, so set defaultPageContext as buyingPrice */}
                                                  </div>
                                                  <div
                                                    id="ehf_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="ehf"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="ehf"
                                                    data-csa-c-slot-id="ehf_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="6rjz2e-jytzq4-wkg6s7-ho91wl"
                                                    data-cel-widget="ehf_feature_div"
                                                  ></div>
                                                  <div
                                                    id="shippingMessageInsideBuyBox_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="shippingMessageInsideBuyBox"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="shippingMessageInsideBuyBox"
                                                    data-csa-c-slot-id="shippingMessageInsideBuyBox_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="c6etz1-us88vq-b3kmcl-tbhtpe"
                                                    data-cel-widget="shippingMessageInsideBuyBox_feature_div"
                                                  >
                                                    <div className="a-section">
                                                      <div className="a-row">
                                                        <div className="a-column a-span12 a-text-left a-spacing-top-micro">
                                                          <span
                                                            id="price-shipping-message"
                                                            className="a-size-base a-color-base"
                                                          >
                                                            <i className="a-icon-wrapper a-icon-fba-with-text">
                                                              <i
                                                                className="a-icon a-icon-fba"
                                                                role="img"
                                                                aria-label="Fulfilled"
                                                              />
                                                              <span className="a-icon-text-fba">
                                                                Fulfilled
                                                              </span>
                                                            </i>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    id="amazonGlobal_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="amazonGlobal"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="amazonGlobal"
                                                    data-csa-c-slot-id="amazonGlobal_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="ia44jj-5uy9ol-fpepco-vhr8vt"
                                                    data-cel-widget="amazonGlobal_feature_div"
                                                  ></div>
                                                  <div
                                                    id="couponsInBuybox_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="couponsInBuybox"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="couponsInBuybox"
                                                    data-csa-c-slot-id="couponsInBuybox_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="dgsaa6-qa4lkv-e6of5-dnz1ss"
                                                    data-cel-widget="couponsInBuybox_feature_div"
                                                  ></div>
                                                  <div
                                                    id="deliveryBlockContainer"
                                                    className="celwidget"
                                                    data-feature-name="deliveryBlockContainer"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="deliveryBlockContainer"
                                                    data-csa-c-slot-id="deliveryBlockContainer"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="f0nkz-bmw4s2-5ux2t6-aytj5i"
                                                    data-cel-widget="deliveryBlockContainer"
                                                  >
                                                    <div
                                                      id="deliveryBlock_feature_div"
                                                      className="celwidget"
                                                      data-feature-name="deliveryBlock"
                                                      data-csa-c-type="widget"
                                                      data-csa-c-content-id="deliveryBlock"
                                                      data-csa-c-slot-id="deliveryBlock_feature_div"
                                                      data-csa-c-asin="B09CHJ5RWK"
                                                      data-csa-c-is-in-initial-active-row="false"
                                                      data-csa-c-id="k92x2u-izf2y1-rpz6zm-5rervf"
                                                      data-cel-widget="deliveryBlock_feature_div"
                                                    ></div>
                                                  </div>
                                                  <div
                                                    id="deliveryPromiseInsideBuyBox_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="deliveryPromiseInsideBuyBox"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="deliveryPromiseInsideBuyBox"
                                                    data-csa-c-slot-id="deliveryPromiseInsideBuyBox_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="5mawdg-uv4rfg-16kem6-b7qzd2"
                                                    data-cel-widget="deliveryPromiseInsideBuyBox_feature_div"
                                                  ></div>
                                                  <div
                                                    id="promiseBasedBadgeInsideBuyBox_feature_div"
                                                    className="celwidget"
                                                    data-feature-name="promiseBasedBadgeInsideBuyBox"
                                                    data-csa-c-type="widget"
                                                    data-csa-c-content-id="promiseBasedBadgeInsideBuyBox"
                                                    data-csa-c-slot-id="promiseBasedBadgeInsideBuyBox_feature_div"
                                                    data-csa-c-asin="B09CHJ5RWK"
                                                    data-csa-c-is-in-initial-active-row="false"
                                                    data-csa-c-id="f7x2k5-x5xyoh-ab558o-4920ov"
                                                    data-cel-widget="promiseBasedBadgeInsideBuyBox_feature_div"
                                                  >
                                                    <div className="a-section a-spacing-micro">
                                                      <div className="a-row">
                                                        <div className="a-column a-span12 a-text-left"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="addOnMessage_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="addOnMessage"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="addOnMessage"
                                                  data-csa-c-slot-id="addOnMessage_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="x14ans-1jx2bq-lseft5-orpf6s"
                                                  data-cel-widget="addOnMessage_feature_div"
                                                ></div>
                                                <div
                                                  id="availabilityInsideBuyBox_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="availabilityInsideBuyBox"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="availabilityInsideBuyBox"
                                                  data-csa-c-slot-id="availabilityInsideBuyBox_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="xkc3z5-gbym9i-vribmo-u7dzka"
                                                  data-cel-widget="availabilityInsideBuyBox_feature_div"
                                                >
                                                  <div className="a-section">
                                                    <div
                                                      id="availability"
                                                      className="a-section a-spacing-none a-spacing-top-micro }"
                                                    >
                                                      <span className="a-size-medium a-color-success">
                                                        In stock
                                                      </span>{" "}
                                                      <br />
                                                    </div>
                                                    <div className="a-section a-spacing-none"></div>
                                                    <div className="a-section a-spacing-mini"></div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="outOfCountryInsideBuyBox_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="outOfCountryInsideBuyBox"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="outOfCountryInsideBuyBox"
                                                  data-csa-c-slot-id="outOfCountryInsideBuyBox_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="6uk3qt-5q8wjl-wzf8cp-t55law"
                                                  data-cel-widget="outOfCountryInsideBuyBox_feature_div"
                                                ></div>
                                                <div
                                                  id="alternativeProductMessage_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="alternativeProductMessage"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="alternativeProductMessage"
                                                  data-csa-c-slot-id="alternativeProductMessage_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="qaev9-opke56-gue9cf-qg73ih"
                                                  data-cel-widget="alternativeProductMessage_feature_div"
                                                ></div>
                                                <div
                                                  id="globalStoreBadgePopoverInsideBuybox_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="globalStoreBadgePopoverInsideBuybox"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="globalStoreBadgePopoverInsideBuybox"
                                                  data-csa-c-slot-id="globalStoreBadgePopoverInsideBuybox_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="ddf23e-r7uz1g-gf8e9b-n5i1nw"
                                                  data-cel-widget="globalStoreBadgePopoverInsideBuybox_feature_div"
                                                ></div>
                                                <div
                                                  id="quantityRelocate_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="quantityRelocate"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="quantityRelocate"
                                                  data-csa-c-slot-id="quantityRelocate_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="j2kymx-l78pqi-yk54pk-eh5kwb"
                                                  data-cel-widget="quantityRelocate_feature_div"
                                                ></div>
                                                <div
                                                  id="soldByThirdPartyRelocate_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="soldByThirdPartyRelocate"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="soldByThirdPartyRelocate"
                                                  data-csa-c-slot-id="soldByThirdPartyRelocate_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="orgl5w-zery92-q3ey28-4wqie7"
                                                  data-cel-widget="soldByThirdPartyRelocate_feature_div"
                                                ></div>
                                                <div
                                                  id="twisterPlusPriceSubtotalWWDesktop_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="twisterPlusPriceSubtotalWWDesktop"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="twisterPlusPriceSubtotalWWDesktop"
                                                  data-csa-c-slot-id="twisterPlusPriceSubtotalWWDesktop_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="u4x0ed-ecd319-5wxbx0-8ebgxf"
                                                  data-cel-widget="twisterPlusPriceSubtotalWWDesktop_feature_div"
                                                ></div>
                                                <div
                                                  id="gestalt_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="gestalt"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="gestalt"
                                                  data-csa-c-slot-id="gestalt_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="orm4wq-ltke7i-hze637-kk3fd6"
                                                  data-cel-widget="gestalt_feature_div"
                                                ></div>
                                                <div
                                                  id="exportAlternativeWidget_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="exportAlternativeWidget"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="exportAlternativeWidget"
                                                  data-csa-c-slot-id="exportAlternativeWidget_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="ywrkz1-o6oa4f-35upxa-assfef"
                                                  data-cel-widget="exportAlternativeWidget_feature_div"
                                                ></div>
                                                <div
                                                  id="addToCart_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="addToCart"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="addToCart"
                                                  data-csa-c-slot-id="addToCart_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="fi7q5y-nx7b0u-lh9xnq-2zirdv"
                                                  data-cel-widget="addToCart_feature_div"
                                                ></div>
                                                <div
                                                  id="buyNow_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="buyNow"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="buyNow"
                                                  data-csa-c-slot-id="buyNow_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="9wl0ay-59wlfx-82o9y5-at3xar"
                                                  data-cel-widget="buyNow_feature_div"
                                                ></div>
                                                <div
                                                  id="merchConfigure_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="merchConfigure"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="merchConfigure"
                                                  data-csa-c-slot-id="merchConfigure_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="xpvv5y-vxqnh6-iqsck1-sf4tht"
                                                  data-cel-widget="merchConfigure_feature_div"
                                                ></div>
                                                <div
                                                  id="twisterPlusBuyBoxMessage_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="twisterPlusBuyBoxMessage"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="twisterPlusBuyBoxMessage"
                                                  data-csa-c-slot-id="twisterPlusBuyBoxMessage_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="8ljdkm-1yi4g1-k3jxi6-28ezda"
                                                  data-cel-widget="twisterPlusBuyBoxMessage_feature_div"
                                                ></div>
                                                <div
                                                  id="tabularSecureTransaction_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="tabularSecureTransaction"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="tabularSecureTransaction"
                                                  data-csa-c-slot-id="tabularSecureTransaction_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="alz7j-4allv6-qrctut-f8lbgs"
                                                  data-cel-widget="tabularSecureTransaction_feature_div"
                                                ></div>
                                                <div
                                                  id="tabular_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="tabular"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="tabular"
                                                  data-csa-c-slot-id="tabular_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="tlu5c7-kn1jjg-nm9fjh-zf4uq1"
                                                  data-cel-widget="tabular_feature_div"
                                                >
                                                  <div
                                                    id="tabular-buybox-side-sheet-content"
                                                    className="a-section a-padding-large"
                                                  >
                                                    <div className="a-fixed-left-grid a-spacing-small">
                                                      <div
                                                        className="a-fixed-left-grid-inner"
                                                        style={{
                                                          paddingLeft: 130
                                                        }}
                                                      >
                                                        <div
                                                          className="a-fixed-left-grid-col tabular-buybox-sidesheet-label-column a-col-left"
                                                          style={{
                                                            width: 130,
                                                            marginLeft:
                                                              "-130px",
                                                            float: "left"
                                                          }}
                                                        >
                                                          <span className="a-size-small a-color-tertiary">
                                                            Payment
                                                          </span>
                                                        </div>
                                                        <div
                                                          data-side-sheet-attribute-name="Payment"
                                                          className="a-fixed-left-grid-col tabular-buybox-sidesheet-content-column a-col-right"
                                                          style={{
                                                            paddingLeft: "0%",
                                                            float: "left"
                                                          }}
                                                        >
                                                          <div className="a-row">
                                                            <div className="a-row a-spacing-micro">
                                                              <span className="a-size-small">
                                                                Secure
                                                                transaction
                                                              </span>
                                                            </div>
                                                            <div className="a-row a-spacing-micro">
                                                              <span className="a-size-small">
                                                                We work hard to
                                                                protect your
                                                                security and
                                                                privacy. Our
                                                                payment security
                                                                system encrypts
                                                                your information
                                                                during
                                                                transmission. We
                                                                don’t share your
                                                                credit card
                                                                details with
                                                                third-party
                                                                sellers, and we
                                                                don’t sell your
                                                                information to
                                                                others.
                                                              </span>
                                                              <a
                                                                className="a-link-normal a-nowrap"
                                                                target="_blank"
                                                                href="/gp/help/customer/display.html?nodeId=202115020"
                                                              >
                                                                <span className="a-size-small">
                                                                  Learn more
                                                                </span>
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <hr
                                                      aria-hidden="true"
                                                      className="a-spacing-small a-divider-normal"
                                                    />
                                                    <div className="a-fixed-left-grid a-spacing-small">
                                                      <div
                                                        className="a-fixed-left-grid-inner"
                                                        style={{
                                                          paddingLeft: 130
                                                        }}
                                                      >
                                                        <div
                                                          className="a-fixed-left-grid-col tabular-buybox-sidesheet-label-column a-col-left"
                                                          style={{
                                                            width: 130,
                                                            marginLeft:
                                                              "-130px",
                                                            float: "left"
                                                          }}
                                                        >
                                                          <span className="a-size-small a-color-tertiary">
                                                            Ships from
                                                          </span>
                                                        </div>
                                                        <div
                                                          data-side-sheet-attribute-name="Ships from"
                                                          className="a-fixed-left-grid-col tabular-buybox-sidesheet-content-column a-col-right"
                                                          style={{
                                                            paddingLeft: "0%",
                                                            float: "left"
                                                          }}
                                                        >
                                                          <div className="a-row">
                                                            <span className="a-size-small">
                                                              Amazon
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <hr
                                                      aria-hidden="true"
                                                      className="a-spacing-small a-divider-normal"
                                                    />
                                                    <div className="a-fixed-left-grid a-spacing-small">
                                                      <div
                                                        className="a-fixed-left-grid-inner"
                                                        style={{
                                                          paddingLeft: 130
                                                        }}
                                                      >
                                                        <div
                                                          className="a-fixed-left-grid-col tabular-buybox-sidesheet-label-column a-col-left"
                                                          style={{
                                                            width: 130,
                                                            marginLeft:
                                                              "-130px",
                                                            float: "left"
                                                          }}
                                                        >
                                                          <span className="a-size-small a-color-tertiary">
                                                            Sold by
                                                          </span>
                                                        </div>
                                                        <div
                                                          data-side-sheet-attribute-name="Sold by"
                                                          className="a-fixed-left-grid-col tabular-buybox-sidesheet-content-column a-col-right"
                                                          style={{
                                                            paddingLeft: "0%",
                                                            float: "left"
                                                          }}
                                                        >
                                                          <div className="a-row">
                                                            <span className="a-size-small">
                                                              <a
                                                                href="/gp/help/seller/at-a-glance.html/ref=dp_merchant_link?ie=UTF8&seller=A1BWY9D1T7XXN2&asin=B09CHJ5RWK&ref_=dp_merchant_link&isAmazonFulfilled=1"
                                                                id="sellerProfileTriggerId"
                                                                target="_blank"
                                                              >
                                                                shopPrime
                                                              </a>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <hr
                                                      aria-hidden="true"
                                                      className="a-spacing-small a-divider-normal"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  id="sfsbLegalMessage_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="sfsbLegalMessage"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="sfsbLegalMessage"
                                                  data-csa-c-slot-id="sfsbLegalMessage_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="tlwkph-clz1v9-1pnxj9-vme6k4"
                                                  data-cel-widget="sfsbLegalMessage_feature_div"
                                                ></div>
                                                <div
                                                  id="tabularSellerCertifications_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="tabularSellerCertifications"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="tabularSellerCertifications"
                                                  data-csa-c-slot-id="tabularSellerCertifications_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="lv7ngt-i2sjr1-9e75ib-1fkmd2"
                                                  data-cel-widget="tabularSellerCertifications_feature_div"
                                                ></div>
                                                <div
                                                  id="tabularPackaging_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="tabularPackaging"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="tabularPackaging"
                                                  data-csa-c-slot-id="tabularPackaging_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="abcqv0-8c6pol-9zhh3k-zs7lo"
                                                  data-cel-widget="tabularPackaging_feature_div"
                                                ></div>
                                                <div
                                                  id="hbaLabel_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="hbaLabel"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="hbaLabel"
                                                  data-csa-c-slot-id="hbaLabel_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="9ebif2-ob43rp-zarpjo-hqb9dc"
                                                  data-cel-widget="hbaLabel_feature_div"
                                                ></div>
                                                <div
                                                  id="tradeInInstantSavings_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="tradeInInstantSavings"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="tradeInInstantSavings"
                                                  data-csa-c-slot-id="tradeInInstantSavings_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="xuccj7-dr60vi-c4z0hm-7otsl8"
                                                  data-cel-widget="tradeInInstantSavings_feature_div"
                                                ></div>
                                                <div
                                                  id="quantityLayoutHigh_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="quantityLayoutHigh"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="quantityLayoutHigh"
                                                  data-csa-c-slot-id="quantityLayoutHigh_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="majw3j-1v5196-8k5i1c-memj6a"
                                                  data-cel-widget="quantityLayoutHigh_feature_div"
                                                ></div>
                                                <div
                                                  id="bbop_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="bbop"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="bbop"
                                                  data-csa-c-slot-id="bbop_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="u88rln-o8s9ue-imtczy-86gb2q"
                                                  data-cel-widget="bbop_feature_div"
                                                ></div>
                                                <div
                                                  id="voltageCompliance_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="voltageCompliance"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="voltageCompliance"
                                                  data-csa-c-slot-id="voltageCompliance_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="8hx2m9-1ut5os-l8ne54-f0rhtk"
                                                  data-cel-widget="voltageCompliance_feature_div"
                                                ></div>
                                                <div
                                                  id="businessPricing_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="businessPricing"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="businessPricing"
                                                  data-csa-c-slot-id="businessPricing_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="a7d6x1-ep7yyd-pdv920-v0s2ki"
                                                  data-cel-widget="businessPricing_feature_div"
                                                ></div>
                                                <div
                                                  id="soldByThirdParty_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="soldByThirdParty"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="soldByThirdParty"
                                                  data-csa-c-slot-id="soldByThirdParty_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="eo2ups-rc2jke-b315i4-91i4ae"
                                                  data-cel-widget="soldByThirdParty_feature_div"
                                                ></div>
                                                <div
                                                  id="scheduledDelivery_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="scheduledDelivery"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="scheduledDelivery"
                                                  data-csa-c-slot-id="scheduledDelivery_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="ysqeq3-b8evx0-kh1pvf-bnwqy0"
                                                  data-cel-widget="scheduledDelivery_feature_div"
                                                ></div>
                                                <div
                                                  id="mbb_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="mbb"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="mbb"
                                                  data-csa-c-slot-id="mbb_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="x2v3yt-uf1yzk-208cor-b81f2f"
                                                  data-cel-widget="mbb_feature_div"
                                                >
                                                  <input
                                                    type="hidden"
                                                    name="itemCount"
                                                    defaultValue={20}
                                                  />
                                                  <div
                                                    id="abbWrapper"
                                                    className="a-section a-spacing-small mbb__bb mbb__tsn"
                                                  >
                                                    <input
                                                      type="hidden"
                                                      id="warranty-customerID"
                                                      defaultValue=""
                                                    />
                                                    <fieldset className="forScreenreaders">
                                                      <legend className="">
                                                        <span>Include</span>
                                                      </legend>
                                                      <div className="a-section a-spacing-none">
                                                        <span
                                                          className="a-text-bold"
                                                          role="heading"
                                                        >
                                                          Add a Protection Plan:
                                                        </span>
                                                      </div>
                                                      <div className="a-row a-spacing-top-mini">
                                                        <div className="a-section a-spacing-none abbListItem mbb__r">
                                                          <input
                                                            type="hidden"
                                                            name="quantity.1"
                                                            defaultValue={1}
                                                          />
                                                          <input
                                                            type="hidden"
                                                            name="asin.1"
                                                            defaultValue="B0BZ8MD2T6"
                                                          />
                                                          <div
                                                            data-a-input-name="offeringID.1"
                                                            className="a-checkbox"
                                                          >
                                                            <label htmlFor="mbb-offeringID-1">
                                                              <input
                                                                id="mbb-offeringID-1"
                                                                type="checkbox"
                                                                name="offeringID.1"
                                                                defaultValue="LfN7glYRZdRwTOHfijLf%2FdSL0ejJzcRYPNDOp9VZNTgrTSdbqOdE7COWGhKgsfEwtJkkhjI39bWCsEvfLIXH1%2Bnlbg479eKCctv%2FCS%2BQyhx6F2wHF7MNpZZXXzDV2FRwDzmFsCVzC%2F1Cyl1IudWZ3ViS0VZ5LypMk4HHgz64FpM26uTH3632XfSL9EE7FVCy"
                                                              />
                                                              <i className="a-icon a-icon-checkbox" />
                                                              <span className="a-label a-checkbox-label">
                                                                <a
                                                                  id="mbbPopoverLink"
                                                                  className="a-link-normal mbb__st a-declarative"
                                                                  href="#"
                                                                >
                                                                  1 Year
                                                                  Extended
                                                                  Warranty
                                                                </a>
                                                                for
                                                                <span className="a-color-price">
                                                                  ₹69.00
                                                                </span>
                                                              </span>
                                                            </label>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </fieldset>
                                                    <div className="aok-hidden mbb__mh">
                                                      Add to your order
                                                    </div>
                                                    <div
                                                      className="a-popover-preload"
                                                      id="a-popover-MbbModal-mbb__tsn0"
                                                    >
                                                      <div
                                                        className="mbb__m mbb__tsn"
                                                        data-i={0}
                                                      >
                                                        <div className="a-row">
                                                          <h2 className="a-size-large a-text-bold">
                                                            1 Year Extended
                                                            Warranty
                                                          </h2>
                                                        </div>
                                                        <div className="a-row">
                                                          <span className="a-size-base a-color-secondary">
                                                            from Onsite Electro
                                                            Services Private
                                                            Limited
                                                          </span>
                                                        </div>
                                                        <div className="a-row">
                                                          <div className="a-column a-span8">
                                                            <div className="a-row">
                                                              <a
                                                                className="a-link-normal mbb__reviews"
                                                                href="/product-reviews/B0BZ8MD2T6/ref=psd_bb_r1_B09CHJ5RWK_B0BZ8MD2T6?ie=UTF8&showViewpoints=1"
                                                              >
                                                                <i className="a-icon a-icon-star a-star-4" />
                                                              </a>
                                                              <a
                                                                className="a-link-normal mbb__reviews"
                                                                href="/product-reviews/B0BZ8MD2T6/ref=psd_bb_r1_B09CHJ5RWK_B0BZ8MD2T6?ie=UTF8&showViewpoints=1"
                                                              >
                                                                <span className="a-color-tertiary">
                                                                  (461)
                                                                </span>
                                                              </a>
                                                            </div>
                                                            <div className="a-row">
                                                              <ul className="a-unordered-list a-vertical a-spacing-none">
                                                                <li>
                                                                  <span className="a-list-item">
                                                                    <span>
                                                                      EMAIL
                                                                      DELIVERY
                                                                      ONLY:
                                                                      Download
                                                                      your
                                                                      extended
                                                                      warranty
                                                                      certificate
                                                                      by sharing
                                                                      your
                                                                      device
                                                                      details.
                                                                      The link
                                                                      is
                                                                      available
                                                                      under
                                                                      buyer/seller
                                                                      messages
                                                                      at
                                                                      www.amazon.in/msg
                                                                      and is
                                                                      also sent
                                                                      to your
                                                                      Amazon
                                                                      registered
                                                                      email ID.
                                                                    </span>
                                                                  </span>
                                                                </li>
                                                                <li>
                                                                  <span className="a-list-item">
                                                                    <span>
                                                                      REPAIR OR
                                                                      REPLACEMENT
                                                                      GUARANTEE:
                                                                      We will
                                                                      either
                                                                      repair
                                                                      your
                                                                      device or
                                                                      give a
                                                                      replacement.
                                                                      The
                                                                      replacement
                                                                      device or
                                                                      gift
                                                                      vouchers
                                                                      will be
                                                                      provided
                                                                      at the
                                                                      discretion
                                                                      of
                                                                      Onsitego
                                                                      on the
                                                                      basis of
                                                                      the
                                                                      depreciated
                                                                      value of
                                                                      your
                                                                      device.
                                                                    </span>
                                                                  </span>
                                                                </li>
                                                                <li>
                                                                  <span className="a-list-item">
                                                                    <span>
                                                                      HASSLE-FREE
                                                                      SERVICE:
                                                                      ‘No
                                                                      Questions
                                                                      Asked’
                                                                      Repair
                                                                      Policy |
                                                                      Zero-Paperwork
                                                                      Claims
                                                                      Process |
                                                                      Free Pick
                                                                      &amp; Drop
                                                                      or At-Home
                                                                      Service.
                                                                    </span>
                                                                  </span>
                                                                </li>
                                                                <li>
                                                                  <span className="a-list-item">
                                                                    <span>
                                                                      LIMIT OF
                                                                      LIABILITY:
                                                                      Onsitego
                                                                      liability
                                                                      is limited
                                                                      to the
                                                                      depreciated
                                                                      value of
                                                                      the device
                                                                      as
                                                                      detailed
                                                                      in our
                                                                      T&amp;C
                                                                      document.
                                                                    </span>
                                                                  </span>
                                                                </li>
                                                                <li>
                                                                  <span className="a-list-item">
                                                                    <span>
                                                                      HIGH-QUALITY
                                                                      REPAIRS:
                                                                      Service by
                                                                      Onsitego
                                                                      authorized
                                                                      service
                                                                      engineers
                                                                      with
                                                                      high-quality
                                                                      spare
                                                                      parts
                                                                      every
                                                                      single
                                                                      time.
                                                                    </span>
                                                                  </span>
                                                                </li>
                                                                <li>
                                                                  <span className="a-list-item">
                                                                    <span>
                                                                      EASY TO
                                                                      REQUEST
                                                                      SERVICE:
                                                                      Download
                                                                      the
                                                                      Onsitego
                                                                      app to
                                                                      raise a
                                                                      repair
                                                                      request
                                                                      within 10
                                                                      seconds or
                                                                      visit our
                                                                      website.
                                                                      You can
                                                                      also call
                                                                      us on our
                                                                      toll-free
                                                                      number
                                                                      99205
                                                                      99206.
                                                                    </span>
                                                                  </span>
                                                                </li>
                                                                <li>
                                                                  <span className="a-list-item">
                                                                    <span>
                                                                      COVERAGE:
                                                                      The plan
                                                                      covers all
                                                                      defects
                                                                      &amp;
                                                                      malfunctions
                                                                      under the
                                                                      original
                                                                      manufacturer’s
                                                                      warranty.
                                                                      The plan
                                                                      starts the
                                                                      day after
                                                                      the
                                                                      manufacturer’s
                                                                      warranty
                                                                      ends. It
                                                                      does not
                                                                      cover
                                                                      physical
                                                                      or liquid
                                                                      damage,
                                                                      accessories
                                                                      or
                                                                      consumables.
                                                                      It also
                                                                      does not
                                                                      cover
                                                                      parts that
                                                                      are not
                                                                      covered
                                                                      under the
                                                                      standard
                                                                      manufacturer’s
                                                                      warranty.
                                                                    </span>
                                                                  </span>
                                                                </li>
                                                                <li>
                                                                  <span className="a-list-item">
                                                                    <span>
                                                                      ELIGIBILITY:
                                                                      The plan
                                                                      can be
                                                                      purchased
                                                                      only for
                                                                      new
                                                                      devices
                                                                      bought on
                                                                      the Amazon
                                                                      platform
                                                                      and WITHIN
                                                                      9 MONTHS
                                                                      of device
                                                                      purchase.
                                                                      You can
                                                                      purchase
                                                                      this plan
                                                                      only for
                                                                      devices
                                                                      which have
                                                                      AT LEAST
                                                                      1-YEAR
                                                                      manufacturer's
                                                                      warranty
                                                                      valid in
                                                                      India. The
                                                                      sum of
                                                                      manufacturer’s
                                                                      warranty
                                                                      and
                                                                      extended
                                                                      warranty
                                                                      CANNOT
                                                                      EXCEED 5
                                                                      YEARS.
                                                                      This plan
                                                                      does not
                                                                      cover
                                                                      products
                                                                      or devices
                                                                      purchased
                                                                      or used
                                                                      for
                                                                      COMMERCIAL
                                                                      purposes.
                                                                    </span>
                                                                  </span>
                                                                </li>
                                                              </ul>
                                                            </div>
                                                          </div>
                                                          <div className="a-column a-span4 a-span-last">
                                                            <div className="a-box a-color-alternate-background">
                                                              <div className="a-box-inner">
                                                                <div className="a-button-stack">
                                                                  <span
                                                                    className="a-button a-spacing-small a-button-primary mbb__yes"
                                                                    id="a-autoid-13"
                                                                  >
                                                                    <span className="a-button-inner">
                                                                      <button
                                                                        className="a-button-text"
                                                                        type="button"
                                                                        id="a-autoid-13-announce"
                                                                      >
                                                                        Add
                                                                        Protection
                                                                      </button>
                                                                    </span>
                                                                  </span>
                                                                  <span
                                                                    className="a-button a-button-base mbb__no"
                                                                    id="a-autoid-14"
                                                                  >
                                                                    <span className="a-button-inner">
                                                                      <button
                                                                        className="a-button-text"
                                                                        type="button"
                                                                        id="a-autoid-14-announce"
                                                                      >
                                                                        Skip
                                                                      </button>
                                                                    </span>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="a-row">
                                                          <a
                                                            className="a-link-normal mbb__learnMore"
                                                            href="/dp/B0BZ8MD2T6/ref=psd_bb_lm1_B09CHJ5RWK_B0BZ8MD2T6"
                                                          >
                                                            Learn more
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="desktop_productInsurance_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="desktop_productInsurance"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="desktop_productInsurance"
                                                  data-csa-c-slot-id="desktop_productInsurance_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="r5kehu-i63wmm-ax92xd-apb8n2"
                                                  data-cel-widget="desktop_productInsurance_feature_div"
                                                ></div>
                                                <div
                                                  id="quantityLayoutLow_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="quantityLayoutLow"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="quantityLayoutLow"
                                                  data-csa-c-slot-id="quantityLayoutLow_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="pl5lxh-74hge1-ih5pmb-ni3u8w"
                                                  data-cel-widget="quantityLayoutLow_feature_div"
                                                >
                                                  <div className="a-row a-spacing-top-small">
                                                    <div className="a-column a-span12 a-text-left">
                                                      <div
                                                        id="selectQuantity"
                                                        className="a-section a-spacing-none a-padding-none improvedQuantityButton"
                                                      >
                                                        <span
                                                          className="a-declarative"
                                                          data-action="quantity-dropdown"
                                                          data-csa-c-type="widget"
                                                          data-csa-c-func-deps="aui-da-quantity-dropdown"
                                                          data-quantity-dropdown="{}"
                                                          data-csa-c-id="yq2i6u-tsxxri-qyi4ts-ogmi56"
                                                        >
                                                          <div className="a-row a-spacing-base">
                                                            <div className="a-column a-span12 a-text-left">
                                                              <input
                                                                type="hidden"
                                                                name="items[0.base][quantity]"
                                                                defaultValue={1}
                                                                autoComplete="off"
                                                              />
                                                              <span className="a-dropdown-container">
                                                                <label
                                                                  htmlFor="quantity"
                                                                  className="a-native-dropdown"
                                                                >
                                                                  Quantity:
                                                                </label>
                                                                <select
                                                                  name="quantity"
                                                                  autoComplete="off"
                                                                  role="combobox"
                                                                  data-a-max-height="135px"
                                                                  id="quantity"
                                                                  tabIndex={0}
                                                                  data-action="a-dropdown-select"
                                                                  className="a-native-dropdown a-declarative"
                                                                >
                                                                  <option
                                                                    value={1}
                                                                    
                                                                  >
                                                                    1
                                                                  </option>
                                                                  <option
                                                                    value={2}
                                                                  >
                                                                    2
                                                                  </option>
                                                                  <option
                                                                    value={3}
                                                                  >
                                                                    3
                                                                  </option>
                                                                  <option
                                                                    value={4}
                                                                  >
                                                                    4
                                                                  </option>
                                                                  <option
                                                                    value={5}
                                                                  >
                                                                    5
                                                                  </option>
                                                                  <option
                                                                    value={6}
                                                                  >
                                                                    6
                                                                  </option>
                                                                  <option
                                                                    value={7}
                                                                  >
                                                                    7
                                                                  </option>
                                                                  <option
                                                                    value={8}
                                                                  >
                                                                    8
                                                                  </option>
                                                                  <option
                                                                    value={9}
                                                                  >
                                                                    9
                                                                  </option>
                                                                  <option
                                                                    value={10}
                                                                  >
                                                                    10
                                                                  </option>
                                                                  <option
                                                                    value={11}
                                                                  >
                                                                    11
                                                                  </option>
                                                                  <option
                                                                    value={12}
                                                                  >
                                                                    12
                                                                  </option>
                                                                  <option
                                                                    value={13}
                                                                  >
                                                                    13
                                                                  </option>
                                                                  <option
                                                                    value={14}
                                                                  >
                                                                    14
                                                                  </option>
                                                                  <option
                                                                    value={15}
                                                                  >
                                                                    15
                                                                  </option>
                                                                  <option
                                                                    value={16}
                                                                  >
                                                                    16
                                                                  </option>
                                                                  <option
                                                                    value={17}
                                                                  >
                                                                    17
                                                                  </option>
                                                                  <option
                                                                    value={18}
                                                                  >
                                                                    18
                                                                  </option>
                                                                  <option
                                                                    value={19}
                                                                  >
                                                                    19
                                                                  </option>
                                                                  <option
                                                                    value={20}
                                                                  >
                                                                    20
                                                                  </option>
                                                                  <option
                                                                    value={21}
                                                                  >
                                                                    21
                                                                  </option>
                                                                </select>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="dsvDigitalBuyNow_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="dsvDigitalBuyNow"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="dsvDigitalBuyNow"
                                                  data-csa-c-slot-id="dsvDigitalBuyNow_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="nwc9z3-2sejv5-ycasen-357cdt"
                                                  data-cel-widget="dsvDigitalBuyNow_feature_div"
                                                ></div>
                                                <div
                                                  id="asg_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="asg"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="asg"
                                                  data-csa-c-slot-id="asg_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="ei0zdl-ofiyml-yhpesh-ckgsfh"
                                                  data-cel-widget="asg_feature_div"
                                                ></div>
                                                <div
                                                  id="twisterPlusPriceSubtotalWWDesktop_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="twisterPlusPriceSubtotalWWDesktop"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="twisterPlusPriceSubtotalWWDesktop"
                                                  data-csa-c-slot-id="twisterPlusPriceSubtotalWWDesktop_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="20xpw3-6g5u9m-aawhv0-whgoz5"
                                                  data-cel-widget="twisterPlusPriceSubtotalWWDesktop_feature_div"
                                                >
                                                  <input
                                                    type="hidden"
                                                    id="twister-plus-price-data-price"
                                                    defaultValue={169}
                                                  />
                                                  <input
                                                    type="hidden"
                                                    id="twister-plus-price-data-savings"
                                                    defaultValue={0}
                                                  />
                                                  <input
                                                    type="hidden"
                                                    id="twister-plus-price-data-price-unit"
                                                    defaultValue="₹"
                                                  />
                                                  <div
                                                    id="tp_price_update_feature_ww"
                                                    className="a-section price-update-feature-ww aok-hidden"
                                                  >
                                                    <div
                                                      id="tp_price_row_ww"
                                                      className="a-section a-spacing-small price-update-row-ww aok-hidden"
                                                    >
                                                      <span
                                                        id="price_block_currency_symbol_ww"
                                                        className="a-size-medium a-price-symbol"
                                                      >
                                                        ₹
                                                      </span>
                                                      {/*Adding space based
     on hasSpace */}
                                                      {/*To remove span
  space*/}
                                                      {/*To remove
    span space*/}
                                                      <span className="a-size-medium a-text-bold">
                                                        {/*To
    remove span space*/}
                                                        <span
                                                          id="tp_price_block_total_price_ww"
                                                          className="a-price"
                                                          data-a-size="m"
                                                          data-a-color="base"
                                                        >
                                                          <span className="a-offscreen">
                                                            ₹169.00
                                                          </span>
                                                          <span aria-hidden="true">
                                                            <span className="a-price-symbol" />
                                                            <span className="a-price-whole">
                                                            {productData?.price || "Price Not Available"}
                                                              <span className="a-price-decimal">
                                                                .
                                                              </span>
                                                            </span>
                                                            <span className="a-price-fraction">
                                                              00
                                                            </span>
                                                          </span>
                                                        </span>
                                                        {/*To remove
    span space*/}
                                                      </span>
                                                      {/*To remove
    span space*/}{" "}
                                                      <span
                                                        id="tp-price-update-payment-period"
                                                        className="a-size-medium a-color-price aok-hidden"
                                                      >
                                                        {" "}
                                                        <span id="tp-price-update-payment-term" />
                                                        (
                                                        <span id="tp-price-update-payment-term-length" />
                                                        )
                                                      </span>
                                                      <span
                                                        id="tp_options_detail"
                                                        className="a-size-base aok-hidden"
                                                      >
                                                        Includes selected
                                                        options.
                                                      </span>
                                                      <span
                                                        id="tp_monthly_options_detail"
                                                        className="a-size-base aok-hidden"
                                                      >
                                                        Includes initial monthly
                                                        payment and selected
                                                        options.
                                                      </span>
                                                      <span className="a-size-base">
                                                        <span
                                                          className="a-declarative"
                                                          data-action="a-popover"
                                                          data-csa-c-type="widget"
                                                          data-csa-c-func-deps="aui-da-a-popover"
                                                          data-a-popover='{"closeButton":"false","name":"twisterPlusPopOver","activate":"onmouseover","width":"350px","position":"triggerLeft"}'
                                                          data-csa-c-id="d1nufg-cxv1jp-kx9mdx-aucpl3"
                                                        >
                                                          <span
                                                           
                                                       
                                                          >
                                                            <a
                                                              id="price_block_total_price_details_ww"
                                                              className="a-link-normal"
                                                              href="#"
                                                            >
                                                              Details
                                                            </a>
                                                          </span>
                                                        </span>
                                                        <div
                                                          className="a-popover-preload"
                                                          id="a-popover-twisterPlusPopOver"
                                                        >
                                                          <div
                                                            id="twister-plus-popover-inner"
                                                            className="a-section"
                                                          >
                                                            <div
                                                              id="twister-plus-tool-tip"
                                                              className="a-section twister-plus-tool-tip-container"
                                                            >
                                                              <div
                                                                id="tp-tool-tip-price-section"
                                                                className="a-section a-spacing-base a-spacing-top-base"
                                                              >
                                                                <div
                                                                  id="tp-tool-tip-price-block"
                                                                  className="a-fixed-right-grid a-spacing-small"
                                                                >
                                                                  <div
                                                                    className="a-fixed-right-grid-inner"
                                                                    style={{
                                                                      paddingRight: 110
                                                                    }}
                                                                  >
                                                                    <div
                                                                      className="a-fixed-right-grid-col a-col-left"
                                                                      style={{
                                                                        paddingRight:
                                                                          "4%",
                                                                        float:
                                                                          "left"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="display-string"
                                                                        className="a-size-base"
                                                                      >
                                                                        Price
                                                                      </span>
                                                                      <span className="a-size-base tp-tool-tip-quantity-block aok-hidden">
                                                                        <span className="a-offscreen" />
                                                                        <span aria-hidden="true">
                                                                          <span>
                                                                            (
                                                                          </span>
                                                                          {/* Adding comment to avoid span
                      space*/}
                                                                          {/* Adding comment to avoid span
                      space*/}
                                                                          <span className="a-price-symbol">
                                                                            ₹
                                                                          </span>
                                                                          {/* Adding space based on
                      hasSpace*/}
                                                                          {/* To remove span
                      space*/}
                                                                          {/* To remove span
                      space*/}
                                                                          <span className="a-price-whole">
                                                                          {productData?.price || "Price Not Available"}
                                                                            <span className="a-price-decimal">
                                                                              .
                                                                            </span>
                                                                          </span>
                                                                          <span className="a-price-fraction">
                                                                            00
                                                                          </span>
                                                                          {/* To remove span
                      space*/}
                                                                          {/* Adding comment to avoid span
                      space*/}
                                                                          <span>
                                                                            x
                                                                            <span id="tp-item-quantity" />
                                                                            )
                                                                          </span>{" "}
                                                                        </span>{" "}
                                                                      </span>{" "}
                                                                    </div>
                                                                    <div
                                                                      className="a-text-right a-fixed-right-grid-col a-col-right"
                                                                      style={{
                                                                        width: 110,
                                                                        marginRight:
                                                                          "-110px",
                                                                        float:
                                                                          "left"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="tp-tool-tip-price"
                                                                        className="a-size-base twister-plus-price-template"
                                                                      >
                                                                        <span className="a-offscreen" />
                                                                        <span aria-hidden="true">
                                                                          <span
                                                                            id="price-sign-string"
                                                                            className="a-size-base"
                                                                          />
                                                                          <span className="a-price-symbol">
                                                                            ₹
                                                                          </span>
                                                                          {/* Adding space based on
               hasSpace*/}
                                                                          {/* To remove span
              space*/}
                                                                          {/* To remove span
              space*/}
                                                                          <span className="a-price-whole">
                                                                          {productData?.price || "Price Not Available"}
                                                                            <span className="a-price-decimal">
                                                                              .
                                                                            </span>
                                                                          </span>
                                                                          <span className="a-price-fraction">
                                                                            00
                                                                          </span>
                                                                          {/* To remove span
              space*/}{" "}
                                                                        </span>{" "}
                                                                      </span>{" "}
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <hr
                                                                aria-hidden="true"
                                                                className="a-spacing-small a-divider-normal"
                                                              />
                                                              <div
                                                                id="twister-plus-tool-tip-subtotal-section"
                                                                className="a-section a-spacing-base"
                                                              >
                                                                <div
                                                                  id="tp-tool-tip-subtotal-price-block"
                                                                  className="a-fixed-right-grid a-spacing-small"
                                                                >
                                                                  <div
                                                                    className="a-fixed-right-grid-inner"
                                                                    style={{
                                                                      paddingRight: 110
                                                                    }}
                                                                  >
                                                                    <div
                                                                      className="a-fixed-right-grid-col a-col-left"
                                                                      style={{
                                                                        paddingRight:
                                                                          "4%",
                                                                        float:
                                                                          "left"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="display-string"
                                                                        className="a-size-base"
                                                                      >
                                                                        Subtotal
                                                                      </span>
                                                                    </div>
                                                                    <div
                                                                      className="a-text-right a-fixed-right-grid-col a-col-right"
                                                                      style={{
                                                                        width: 110,
                                                                        marginRight:
                                                                          "-110px",
                                                                        float:
                                                                          "left"
                                                                      }}
                                                                    >
                                                                      <span className="a-size-medium twister-plus-subtotal-price-template">
                                                                        <span
                                                                          id="tp-tool-tip-subtotal-price-currency-symbol"
                                                                          className="a-size-medium a-price-symbol"
                                                                        >
                                                                          ₹
                                                                        </span>
                                                                        {/* Adding space based on
          hasSpace*/}
                                                                        {/*To remove span
          space*/}
                                                                        {/*To remove span
          space*/}
                                                                        <span className="a-size-medium a-text-bold">
                                                                          {/*To
                  remove span space*/}
                                                                          <span
                                                                            id="tp-tool-tip-subtotal-price-value"
                                                                            className="a-price"
                                                                            data-a-size="m"
                                                                            data-a-color="base"
                                                                          >
                                                                            <span className="a-offscreen">
                                                                              ₹169.00
                                                                            </span>
                                                                            <span aria-hidden="true">
                                                                              <span className="a-price-symbol" />
                                                                              <span className="a-price-whole">
                                                                              {productData?.price || "Price Not Available"}
                                                                                <span className="a-price-decimal">
                                                                                  .
                                                                                </span>
                                                                              </span>
                                                                              <span className="a-price-fraction">
                                                                                00
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                          {/*To remove span
          space*/}
                                                                        </span>
                                                                        {/*To remove span
          space*/}{" "}
                                                                      </span>{" "}
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  id="tp-tool-tip-monthly-payment-subtotal-price-block"
                                                                  className="a-fixed-right-grid aok-hidden a-spacing-small"
                                                                >
                                                                  <div
                                                                    className="a-fixed-right-grid-inner"
                                                                    style={{
                                                                      paddingRight: 110
                                                                    }}
                                                                  >
                                                                    <div
                                                                      className="a-fixed-right-grid-col a-col-left"
                                                                      style={{
                                                                        paddingRight:
                                                                          "4%",
                                                                        float:
                                                                          "left"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="display-string"
                                                                        className="a-size-base"
                                                                      >
                                                                        Subtotal
                                                                      </span>
                                                                    </div>
                                                                    <div
                                                                      id="tp-monthly-payment-subtotal-price"
                                                                      className="a-text-right a-fixed-right-grid-col a-col-right"
                                                                      style={{
                                                                        width: 110,
                                                                        marginRight:
                                                                          "-110px",
                                                                        float:
                                                                          "left"
                                                                      }}
                                                                    ></div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  id="twister-plus-order-level-monthly-payments-section"
                                                                  className="a-section aok-hidden"
                                                                >
                                                                  <hr
                                                                    aria-hidden="true"
                                                                    className="a-spacing-small a-divider-normal"
                                                                  />
                                                                  <div
                                                                    id="tp-tool-tip-order-level-monthly-payments-price-block"
                                                                    className="a-fixed-right-grid a-spacing-small"
                                                                  >
                                                                    <div
                                                                      className="a-fixed-right-grid-inner"
                                                                      style={{
                                                                        paddingRight: 110
                                                                      }}
                                                                    >
                                                                      <div
                                                                        className="a-fixed-right-grid-col a-col-left"
                                                                        style={{
                                                                          paddingRight:
                                                                            "4%",
                                                                          float:
                                                                            "left"
                                                                        }}
                                                                      >
                                                                        <span
                                                                          id="display-string"
                                                                          className="a-size-base a-text-bold"
                                                                        />
                                                                      </div>
                                                                      <div
                                                                        id="tp-order-level-monthly-payment-subtotal-price"
                                                                        className="a-text-right a-fixed-right-grid-col a-col-right"
                                                                        style={{
                                                                          width: 110,
                                                                          marginRight:
                                                                            "-110px",
                                                                          float:
                                                                            "left"
                                                                        }}
                                                                      ></div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  id="twister-plus-item-level-monthly-payments-section"
                                                                  className="a-section aok-hidden"
                                                                >
                                                                  <hr
                                                                    id="twister-plus-monthly-payments-divider"
                                                                    aria-hidden="true"
                                                                    className="a-spacing-small a-divider-normal"
                                                                  />
                                                                  <div
                                                                    id="tp-monthly-payments-breakdown-section"
                                                                    className="a-section"
                                                                  >
                                                                    <span className="a-text-bold">
                                                                      Initial
                                                                      payment
                                                                      breakdown
                                                                    </span>
                                                                  </div>
                                                                  <hr
                                                                    aria-hidden="true"
                                                                    className="a-spacing-small a-divider-normal"
                                                                  />
                                                                  <div
                                                                    id="tp-tool-tip-item-level-monthly-payments-price-block"
                                                                    className="a-fixed-right-grid a-spacing-small"
                                                                  >
                                                                    <div
                                                                      className="a-fixed-right-grid-inner"
                                                                      style={{
                                                                        paddingRight: 110
                                                                      }}
                                                                    >
                                                                      <div
                                                                        className="a-fixed-right-grid-col a-col-left"
                                                                        style={{
                                                                          paddingRight:
                                                                            "0%",
                                                                          float:
                                                                            "left"
                                                                        }}
                                                                      ></div>
                                                                      <div
                                                                        id="tp-item-level-monthly-payment-subtotal-price"
                                                                        className="a-text-right a-fixed-right-grid-col a-col-right"
                                                                        style={{
                                                                          width: 110,
                                                                          marginRight:
                                                                            "-110px",
                                                                          float:
                                                                            "left"
                                                                        }}
                                                                      ></div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  id="tp-tool-tip-footnote-section"
                                                                  className="a-section a-spacing-small"
                                                                >
                                                                  <span
                                                                    id="tp-footnote-text"
                                                                    className="a-size-small a-color-secondary"
                                                                  >
                                                                    Shipping
                                                                    cost,
                                                                    delivery
                                                                    date and
                                                                    order total
                                                                    (including
                                                                    tax) shown
                                                                    at checkout.
                                                                  </span>
                                                                  <br />
                                                                </div>
                                                                <div
                                                                  id="tp-tool-tip-strings"
                                                                  className="a-section a-spacing-small aok-hidden"
                                                                >
                                                                  <span
                                                                    id="tp-tool-tip-item-strings"
                                                                    data-item-count-plural-template=" (###itemQuantity items)"
                                                                    data-item-count-singular-template=" (###itemQuantity item)"
                                                                  ></span>
                                                                  <span
                                                                    id="tp-tool-tip-footnote-string"
                                                                    data-monthly-payment-footnote-template="Monthly payments apply to the main item only, not to enhancements."
                                                                  ></span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="addToCart_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="addToCart"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="addToCart"
                                                  data-csa-c-slot-id="addToCart_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="85xilj-vg4te7-p3akq4-cax90w"
                                                  data-cel-widget="addToCart_feature_div"
                                                >
                                                  <div className="a-button-stack">
                                                    <span
                                                      className="a-declarative"
                                                      data-action="dp-pre-atc-declarative"
                                                      data-csa-c-type="widget"
                                                      data-csa-c-func-deps="aui-da-dp-pre-atc-declarative"
                                                      data-dp-pre-atc-declarative="{}"
                                                      id="atc-declarative"
                                                      data-csa-c-id="uxo7az-ql6azz-2ho2vl-ol0wtr"
                                                    >
                                                      <span
                                                        id="submit.add-to-cart"
                                                        className="a-button a-spacing-small a-button-primary a-button-icon"
                                                      >
                                                        <span className="a-button-inner">
                                                          <i className="a-icon a-icon-cart" />
                                                          <input
                                                            id="add-to-cart-button"
                                                            name="submit.add-to-cart"
                                                            title="Add to Shopping Cart"
                                                            data-hover="Select <b>__dims__</b> from the left<br> to add to Shopping Cart"
                                                            data-ref=""
                                                            className="a-button-input attach-dss-atc"
                                                            type="button"
                                                            formAction="/cart/add-to-cart/ref=dp_start-bbf_1_glance"
                                                            defaultValue="Add to Cart"
                                                            aria-labelledby="submit.add-to-cart-announce"
                                                          />
                                                          <span
                                                            id="submit.add-to-cart-announce"
                                                            className="a-button-text"
                                                            aria-hidden="true"
                                                          >
                                                            Add to Cart
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>{" "}
                                                  </div>
                                                  <div
                                                    className="dp-cif aok-hidden"
                                                    data-feature-details='{"name":"atc","isInteractive":false}'
                                                  ></div>
                                                </div>
                                                <div
                                                  id="preAddToCartFramework_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="preAddToCartFramework"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="preAddToCartFramework"
                                                  data-csa-c-slot-id="preAddToCartFramework_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="m1k1o4-src5x2-koe0cd-niidxo"
                                                  data-cel-widget="preAddToCartFramework_feature_div"
                                                ></div>
                                                <div
                                                  id="buyNow_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="buyNow"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="buyNow"
                                                  data-csa-c-slot-id="buyNow_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="378n2u-z5yrb2-jzb5oa-du9ddd"
                                                  data-cel-widget="buyNow_feature_div"
                                                >
                                                  <div className="a-button-stack">
                                                    <div
                                                      id="buyNow"
                                                      className="a-section a-spacing-base"
                                                    >
                                                      <div
                                                        id="turboState"
                                                        className="a-section a-spacing-none a-padding-none turbo-checkout-state-root"
                                                      ></div>{" "}
                                                      <span
                                                        className="a-declarative"
                                                        data-action="a-modal"
                                                        data-csa-c-type="widget"
                                                        data-csa-c-func-deps="aui-da-a-modal"
                                                        data-a-modal='{"name":"turbo"}'
                                                        id="turbo-checkout-modal"
                                                        data-csa-c-id="en167u-r3ydib-657kw6-r7gjze"
                                                      />
                                                      <span
                                                        id="submit.buy-now"
                                                        className="a-button a-button-oneclick a-button-icon onml-buy-now-button"
                                                      >
                                                        <span className="a-button-inner">
                                                          <i className="a-icon a-icon-buynow" />
                                                          <input
                                                            id="buy-now-button"
                                                            name="submit.buy-now"
                                                            title="Buy Now"
                                                            data-hover="Select <b>__dims__</b> from the left<br> to Buy"
                                                            className="a-button-input"
                                                            type="submit"
                                                            aria-labelledby="submit.buy-now-announce"
                                                          />
                                                          <span
                                                            id="submit.buy-now-announce"
                                                            className="a-button-text"
                                                            aria-hidden="true"
                                                          >
                                                            Buy Now
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="twisterPlusBuyBoxMessage_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="twisterPlusBuyBoxMessage"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="twisterPlusBuyBoxMessage"
                                                  data-csa-c-slot-id="twisterPlusBuyBoxMessage_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="dztwuu-z6wflm-4jmf21-odg6lw"
                                                  data-cel-widget="twisterPlusBuyBoxMessage_feature_div"
                                                >
                                                  <div className="a-section">
                                                    <div
                                                      className="a-box a-alert-inline a-alert-inline-error tp-bbm-info-message-container aok-hidden a-spacing-base"
                                                      role="alert"
                                                    >
                                                      <div className="a-box-inner a-alert-container">
                                                        <i className="a-icon a-icon-alert" />
                                                        <div className="a-alert-content">
                                                          <span className="tp-bbm-info-message">
                                                            The enhancements
                                                            that you chose are
                                                            not available for
                                                            this seller.
                                                          </span>
                                                          <span
                                                            className="a-declarative"
                                                            data-action="a-popover"
                                                            data-csa-c-type="widget"
                                                            data-csa-c-func-deps="aui-da-a-popover"
                                                            data-a-popover='{"closeButton":"false","name":"twisterPlusBuyBoxMessagePopOver","activate":"onmouseover","width":"250px","position":"triggerBottom"}'
                                                            data-csa-c-id="28883c-3bnkjn-oejwrt-hcbu4c"
                                                          >
                                                            <a
                                                              id="tp_bbm_info_message_details"
                                                              className="a-size-base a-link-normal"
                                                              href="#"
                                                            >
                                                              Details
                                                            </a>
                                                          </span>
                                                          <div
                                                            className="a-popover-preload"
                                                            id="a-popover-twisterPlusBuyBoxMessagePopOver"
                                                          >
                                                            <div
                                                              id="tp-bbm-popover-inner"
                                                              className="a-section"
                                                            >
                                                              <div
                                                                id="twister-plus-unavailable-items-tool-tip"
                                                                className="a-section twister-plus-unavailable-items-tool-tip"
                                                              >
                                                                <div className="a-section">
                                                                  <span
                                                                    id="tp_bbm_info_message"
                                                                    className="a-size-base"
                                                                  >
                                                                    To add the
                                                                    following
                                                                    enhancements
                                                                    to your
                                                                    purchase,
                                                                    choose a
                                                                    different
                                                                    seller.
                                                                  </span>
                                                                </div>
                                                                <hr
                                                                  aria-hidden="true"
                                                                  className="a-spacing-base a-divider-text"
                                                                />
                                                                <div className="a-section twister-plus-unavailable-message-item-template aok-hidden">
                                                                  <span className="a-size-base a-text-bold">
                                                                    %cardName%
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="a-box a-alert-inline a-alert-inline-error tp-bbm-info-message-with-card-name-container aok-hidden a-spacing-base"
                                                      role="alert"
                                                    >
                                                      <div className="a-box-inner a-alert-container">
                                                        <i className="a-icon a-icon-alert" />
                                                        <div className="a-alert-content">
                                                          <span className="tp-bbm-info-message-with-card-name">
                                                            ${"{"}cardName{"}"}
                                                            not available for
                                                            the seller that you
                                                            chose
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="a-box a-alert-inline a-alert-inline-error tp-bbm-info-message-quantity-restriction-container aok-hidden a-spacing-base"
                                                      role="alert"
                                                    >
                                                      <div className="a-box-inner a-alert-container">
                                                        <i className="a-icon a-icon-alert" />
                                                        <div className="a-alert-content">
                                                          <span className="tp-bbm-info-message-quantity-restriction">
                                                            ${"{"}cardName{"}"}
                                                            unavailable for
                                                            quantities greater
                                                            than ${"{"}
                                                            maxQuantity{"}"}.
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="tabularSecureTransaction_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="tabularSecureTransaction"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="tabularSecureTransaction"
                                                  data-csa-c-slot-id="tabularSecureTransaction_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="ihyb5h-fli55z-x20yqs-qtg84"
                                                  data-cel-widget="tabularSecureTransaction_feature_div"
                                                ></div>
                                                <div
                                                  id="oneClick_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="oneClick"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="oneClick"
                                                  data-csa-c-slot-id="oneClick_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="ma6lhp-4spks8-lr5tk2-flk10z"
                                                  data-cel-widget="oneClick_feature_div"
                                                ></div>
                                                <div
                                                  id="detailPageGifting_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="detailPageGifting"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="detailPageGifting"
                                                  data-csa-c-slot-id="detailPageGifting_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="otheu8-z02br-j1l5x8-hz68z3"
                                                  data-cel-widget="detailPageGifting_feature_div"
                                                >
                                                  <div
                                                    data-a-input-name="gift-wrap"
                                                    className="a-checkbox"
                                                  >
                                                    <label htmlFor="gift-wrap">
                                                      <input
                                                        id="gift-wrap"
                                                        type="checkbox"
                                                        name="gift-wrap"
                                                        defaultValue="yes"
                                                      />
                                                      <i className="a-icon a-icon-checkbox" />
                                                      <span className="a-label a-checkbox-label">
                                                        Add gift options
                                                      </span>
                                                    </label>
                                                  </div>
                                                </div>
                                                <div
                                                  id="makoPreRegistration"
                                                  className="celwidget"
                                                  data-feature-name="makoPreRegistration"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="makoPreRegistration"
                                                  data-csa-c-slot-id="makoPreRegistration"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="ge9x8g-72wh8b-g9n07j-l0q40h"
                                                  data-cel-widget="makoPreRegistration"
                                                ></div>
                                                <div
                                                  id="accessoryUpsellAmabot_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="accessoryUpsellAmabot"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="accessoryUpsellAmabot"
                                                  data-csa-c-slot-id="accessoryUpsellAmabot_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="qrgnj7-ioesdp-1343we-fcmwa7"
                                                  data-cel-widget="accessoryUpsellAmabot_feature_div"
                                                ></div>
                                                <div
                                                  id="accessoryUpsellBtf_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="accessoryUpsellBtf"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="accessoryUpsellBtf"
                                                  data-csa-c-slot-id="accessoryUpsellBtf_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="ukhjg4-jg38zk-6lg801-c15j3q"
                                                  data-cel-widget="accessoryUpsellBtf_feature_div"
                                                ></div>
                                                <div
                                                  id="unifiedLocation_feature_div"
                                                  className="celwidget"
                                                  data-feature-name="unifiedLocation"
                                                  data-csa-c-type="widget"
                                                  data-csa-c-content-id="unifiedLocation"
                                                  data-csa-c-slot-id="unifiedLocation_feature_div"
                                                  data-csa-c-asin="B09CHJ5RWK"
                                                  data-csa-c-is-in-initial-active-row="false"
                                                  data-csa-c-id="ux41bd-4q1hgs-pfx3d7-865nbm"
                                                  data-cel-widget="unifiedLocation_feature_div"
                                                ></div>
                                              </div>
                                            </div>
                                            <div
                                              id="digitalDashHighProminence_feature_div"
                                              className="celwidget"
                                              data-feature-name="digitalDashHighProminence"
                                              data-csa-c-type="widget"
                                              data-csa-c-content-id="digitalDashHighProminence"
                                              data-csa-c-slot-id="digitalDashHighProminence_feature_div"
                                              data-csa-c-asin="B09CHJ5RWK"
                                              data-csa-c-is-in-initial-active-row="false"
                                              data-csa-c-id="v0p86n-yzyqzc-4rnc3k-3j9fso"
                                              data-cel-widget="digitalDashHighProminence_feature_div"
                                            ></div>
                                            <div
                                              id="marsAccessoryUpsell_feature_div"
                                              className="celwidget"
                                              data-feature-name="marsAccessoryUpsellSuppressAccessory"
                                              data-csa-c-type="widget"
                                              data-csa-c-content-id="marsAccessoryUpsellSuppressAccessory"
                                              data-csa-c-slot-id="marsAccessoryUpsell_feature_div"
                                              data-csa-c-asin="B09CHJ5RWK"
                                              data-csa-c-is-in-initial-active-row="false"
                                              data-csa-c-id="88l98f-97oti8-3uhppg-3ca85a"
                                              data-cel-widget="marsAccessoryUpsell_feature_div"
                                            ></div>
                                            <div
                                              id="addToWishlist_feature_div"
                                              className="celwidget"
                                              data-feature-name="addToWishlist"
                                              data-csa-c-type="widget"
                                              data-csa-c-content-id="addToWishlist"
                                              data-csa-c-slot-id="addToWishlist_feature_div"
                                              data-csa-c-asin="B09CHJ5RWK"
                                              data-csa-c-is-in-initial-active-row="false"
                                              data-csa-c-id="etzv6g-nb8js4-4igj6n-7x5xnk"
                                              data-cel-widget="addToWishlist_feature_div"
                                            >
                                              <div
                                                id="wishlistButtonStack"
                                                className="a-button-stack"
                                              >
                                                <div
                                                  id="atwl-inline-spinner"
                                                  className="a-section a-hidden"
                                                >
                                                  <div className="a-spinner-wrapper">
                                                    <span className="a-spinner a-spinner-medium" />
                                                  </div>
                                                </div>
                                                <div
                                                  id="atwl-inline"
                                                  className="a-section a-spacing-none a-hidden"
                                                >
                                                  <div className="a-row a-text-ellipsis">
                                                    <div
                                                      id="atwl-inline-sucess-msg"
                                                      className="a-box a-alert-inline a-alert-inline-success"
                                                      aria-live="polite"
                                                      aria-atomic="true"
                                                    >
                                                      <div className="a-box-inner a-alert-container">
                                                        <i className="a-icon a-icon-alert" />
                                                        <div className="a-alert-content">
                                                          <span
                                                            className="a-size-base"
                                                            role="alert"
                                                          >
                                                            Added to
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>{" "}
                                                    <a
                                                      id="atwl-inline-link"
                                                      className="a-link-normal"
                                                      href="/gp/registry/wishlist/"
                                                    >
                                                      <span
                                                        id="atwl-inline-link-text"
                                                        className="a-size-base"
                                                        role="alert"
                                                      ></span>{" "}
                                                    </a>
                                                  </div>
                                                </div>
                                                <div
                                                  id="atwl-inline-error"
                                                  className="a-section a-hidden"
                                                >
                                                  <div
                                                    className="a-box a-alert-inline a-alert-inline-error"
                                                    role="alert"
                                                  >
                                                    <div className="a-box-inner a-alert-container">
                                                      <i className="a-icon a-icon-alert" />
                                                      <div className="a-alert-content">
                                                        <span
                                                          id="atwl-inline-error-msg"
                                                          className="a-size-base"
                                                          role="alert"
                                                        >
                                                          Unable to add item to
                                                          Wish List. Please try
                                                          again.
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="atwl-dd-spinner-holder"
                                                  className="a-section a-hidden"
                                                >
                                                  <div className="a-row a-dropdown">
                                                    <div className="a-section a-popover-wrapper">
                                                      <div className="a-section a-text-center a-popover-inner">
                                                        <div className="a-box a-popover-loading">
                                                          <div className="a-box-inner"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="atwl-dd-error-holder"
                                                  className="a-section a-hidden"
                                                >
                                                  <div className="a-section a-dropdown">
                                                    <div className="a-section a-popover-wrapper">
                                                      <div className="a-section a-spacing-base a-padding-base a-text-left a-popover-inner">
                                                        <h3 className="a-color-error">
                                                          Sorry, there was a
                                                          problem.
                                                        </h3>
                                                        <span>
                                                          There was an error
                                                          retrieving your Wish
                                                          Lists. Please try
                                                          again.
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="atwl-dd-unavail-holder"
                                                  className="a-section a-hidden"
                                                >
                                                  <div className="a-section a-dropdown">
                                                    <div className="a-section a-popover-wrapper">
                                                      <div className="a-section a-spacing-base a-padding-base a-text-left a-popover-inner">
                                                        <h3 className="a-color-error">
                                                          Sorry, there was a
                                                          problem.
                                                        </h3>
                                                        <span>
                                                          List unavailable.
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              {/* sp:csrf */}
                                              <input
                                                type="hidden"
                                                name="anti-csrftoken-a2z"
                                                defaultValue="hDBYnOBvZA0B1VtY08rTuUTGyrEaZVEq36JJQpur/K0cAAAAAGdDKxo5ZTU1MWQwNC03ZjdmLTQyNWMtYTI3ZS04OTUyMDQ0OWNmZjU="
                                                id="lists-sp-csrf-form-token"
                                              />
                                              {/* sp:end-csrf */}
                                              {/* sp:csrf */}
                                              <input
                                                type="hidden"
                                                name="anti-csrftoken-a2z"
                                                defaultValue="hIkp+GHe98uByKd+FArOl9vRw8EwGEH5HwQKfnPtA1oTAAAAAGdDKxo5ZTU1MWQwNC03ZjdmLTQyNWMtYTI3ZS04OTUyMDQ0OWNmZjU="
                                                id="creator-sp-csrf-form-token"
                                              />
                                              {/* sp:end-csrf */}
                                            </div>
                                            <div
                                              id="addToRegistry_feature_div"
                                              className="celwidget"
                                              data-feature-name="addToRegistry"
                                              data-csa-c-type="widget"
                                              data-csa-c-content-id="addToRegistry"
                                              data-csa-c-slot-id="addToRegistry_feature_div"
                                              data-csa-c-asin="B09CHJ5RWK"
                                              data-csa-c-is-in-initial-active-row="false"
                                              data-csa-c-id="53m119-jth3la-y9zc84-fq0fey"
                                              data-cel-widget="addToRegistry_feature_div"
                                            ></div>
                                            <div
                                              id="digitalDashLowProminence_feature_div"
                                              className="celwidget"
                                              data-feature-name="digitalDashLowProminence"
                                              data-csa-c-type="widget"
                                              data-csa-c-content-id="digitalDashLowProminence"
                                              data-csa-c-slot-id="digitalDashLowProminence_feature_div"
                                              data-csa-c-asin="B09CHJ5RWK"
                                              data-csa-c-is-in-initial-active-row="false"
                                              data-csa-c-id="63wbe2-wmw9c9-jr866j-1trouv"
                                              data-cel-widget="digitalDashLowProminence_feature_div"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                  <input
                                    data-addnewaddress="add-new"
                                    id="cartAddressNew"
                                    name="dropdown-selection"
                                    type="hidden"
                                    defaultValue="add-new"
                                    className="nav-progressive-attribute"
                                  />
                                  <input
                                    data-addnewaddress="add-new"
                                    id="cartAddressUsed"
                                    name="dropdown-selection-ubb"
                                    type="hidden"
                                    defaultValue="add-new"
                                    className="nav-progressive-attribute"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="dp-cif aok-hidden"
                            data-feature-details='{"name":"od","isInteractive":false}'
                          ></div>
                        </div>
                      </div>
                      <div
                        id="olpLinkWidget_feature_div"
                        className="celwidget"
                        data-feature-name="olpLinkWidget"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="olpLinkWidget"
                        data-csa-c-slot-id="olpLinkWidget_feature_div"
                        data-csa-c-asin="B09CHJ5RWK"
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="2420z9-3asxp-abhjuh-yk39v7"
                        data-cel-widget="olpLinkWidget_feature_div"
                      >
                        <div id="all-offers-display" className="a-section">
                          <div
                            id="all-offers-display-spinner"
                            className="a-spinner-wrapper aok-hidden"
                          >
                            <span className="a-spinner a-spinner-medium" />
                          </div>
                          <form
                            method="get"
                            action=""
                            autoComplete="off"
                            className="aok-hidden all-offers-display-params"
                          >
                            {" "}
                            <input
                              type="hidden"
                              name=""
                              defaultValue="true"
                              id="all-offers-display-reload-param"
                            />{" "}
                            <input
                              type="hidden"
                              name=""
                              id="all-offers-display-params"
                              data-asin="B09CHJ5RWK"
                              data-m=""
                              data-qid={1732454536}
                              data-smid=""
                              data-sourcecustomerorglistid=""
                              data-sourcecustomerorglistitemid=""
                              data-sr="8-7"
                            />{" "}
                          </form>
                        </div>{" "}
                        <span
                          className="a-declarative"
                          data-action="close-all-offers-display"
                          data-csa-c-type="widget"
                          data-csa-c-func-deps="aui-da-close-all-offers-display"
                          data-close-all-offers-display="{}"
                          data-csa-c-id="pp2dln-y9eh2y-rt30y1-8x460w"
                        >
                          <div
                            id="aod-background"
                            className="a-section aok-hidden aod-darken-background"
                          >
                            {" "}
                          </div>
                        </span>
                      </div>
                      <div
                        id="simpleBundleV2_feature_div"
                        className="celwidget"
                        data-feature-name="simpleBundleV2"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="simpleBundleV2"
                        data-csa-c-slot-id="simpleBundleV2_feature_div"
                        data-csa-c-asin="B09CHJ5RWK"
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="89n6oa-riqt4s-p6bjs-nbdpz"
                        data-cel-widget="simpleBundleV2_feature_div"
                      ></div>
                      <div
                        id="sellYoursHere_feature_div"
                        className="celwidget"
                        data-feature-name="sellYoursHere"
                        data-csa-c-type="widget"
                        data-csa-c-content-id="sellYoursHere"
                        data-csa-c-slot-id="sellYoursHere_feature_div"
                        data-csa-c-asin="B09CHJ5RWK"
                        data-csa-c-is-in-initial-active-row="false"
                        data-csa-c-id="950mde-qcejnq-7xozzw-ngi1g3"
                        data-cel-widget="sellYoursHere_feature_div"
                      ></div>
                    </div>
                    <div
                      id="attachAccessoryModal_feature_div"
                      className="celwidget"
                      data-feature-name="attachAccessoryModal"
                      data-csa-c-type="widget"
                      data-csa-c-content-id="attachAccessoryModal"
                      data-csa-c-slot-id="attachAccessoryModal_feature_div"
                      data-csa-c-asin="B09CHJ5RWK"
                      data-csa-c-is-in-initial-active-row="false"
                      data-csa-c-id="nt1to8-tkpy0d-9uqk08-4jqo25"
                      data-cel-widget="attachAccessoryModal_feature_div"
                    >
                      <input
                        type="hidden"
                        id="attach-customer-logged-in"
                        defaultValue="false"
                      />
                      <input
                        type="hidden"
                        id="attach-marketplaceId"
                        defaultValue="A21TJRUUN4KGV"
                      />
                      <input
                        type="hidden"
                        id="attach-customerId"
                        defaultValue=""
                      />
                      <input
                        type="hidden"
                        id="attach-sessionId"
                        defaultValue="261-0713373-3141624"
                      />
                      <input
                        type="hidden"
                        id="attach-preselected-merchant-id"
                        defaultValue="A1BWY9D1T7XXN2"
                      />{" "}
                      <input
                        type="hidden"
                        id="attach-languageOfPreference"
                        defaultValue="en_IN"
                      />
                      <input
                        type="hidden"
                        id="attach-baseAsin"
                        defaultValue="B09CHJ5RWK"
                      />
                      <input
                        type="hidden"
                        id="attach-base-product-price"
                        defaultValue={169.0}
                      />
                      <input
                        type="hidden"
                        id="attach-base-product-currency-symbol"
                        defaultValue="₹"
                      />
                      <input
                        type="hidden"
                        id="attach-used-currency-of-preference"
                        defaultValue="false"
                      />
                      <input
                        type="hidden"
                        id="attach-is-prime-member"
                        defaultValue="false"
                      />
                      <input
                        type="hidden"
                        id="attach-has-recommendations"
                        defaultValue="false"
                      />
                      <input
                        type="hidden"
                        id="attach-has-ddwl"
                        defaultValue="false"
                      />
                      <input
                        type="hidden"
                        id="attach-cart-migration-enabled"
                        defaultValue="true"
                      />
                      <input
                        type="hidden"
                        id="attach-currency-of-preference"
                        defaultValue="INR"
                      />
                      <input
                        type="hidden"
                        id="attach-aapi-ajax-csrf-token"
                        defaultValue="1@gwK4di4nVSSigR/rLgJhoFvC4HxBQ26ztjjOKM5QerkIAAAAAQAAAABnQysacmF3AAAAABVX8CwXqz42z+J7i/ABqA==@NLD_FNH31T"
                      />
                      <input
                        type="hidden"
                        id="attach-aapi-ajax-endpoint"
                        defaultValue="https://data.amazon.in/api/marketplaces/A21TJRUUN4KGV"
                      />
                      <div id="attach-dss-placeholder">
                        <div
                          id="attach-desktop-sideSheet"
                          className="a-section attach-desktop-sideSheet aok-hidden"
                        >
                          <input
                            type="hidden"
                            id="attachSIDeprecated"
                            defaultValue=""
                          />
                          <div
                            id="attach-warranty-pane"
                            className="a-section aok-hidden"
                          >
                            <div
                              id="attach-warranty"
                              className="a-section attach-sidesheet-card"
                            >
                              <div
                                id="attach-warranty-display"
                                className="a-section"
                              >
                                <input
                                  type="hidden"
                                  name=""
                                  defaultValue="B0BZ8MD2T6"
                                  id="attach-warranty-asin"
                                />
                                <h1
                                  id="attach-warranty-header"
                                  className="a-size-medium a-spacing-none a-color-base a-text-center"
                                >
                                  Add to your order{" "}
                                </h1>
                                <hr
                                  id="attach-warranty-divider"
                                  aria-hidden="true"
                                  className="a-spacing-base a-spacing-top-small a-divider-normal"
                                />
                                <div className="a-row a-spacing-micro">
                                  <div className="a-column a-span2">
                                    {" "}
                                    <img
                                      alt=""
                                      src="https://m.media-amazon.com/images/I/51-1PgrcnGL._SL75_.jpg"
                                      className="attach-accessory-image"
                                      id="attach-sheet-warranty-image"
                                    />{" "}
                                  </div>
                                  <div className="a-column a-span10 a-span-last">
                                    {" "}
                                    <a
                                      className="a-size-large a-color-base a-spacing-micro a-link-normal"
                                      target="_blank"
                                      href="/dp/B0BZ8MD2T6/ref=dp_atch_dss_w_lm_B09CHJ5RWK_B0BZ8MD2T6"
                                    >
                                      <span
                                        id="attach-warranty-displayTitle"
                                        className="a-text-bold"
                                      >
                                        {" "}
                                        1 Year Extended Warranty{" "}
                                      </span>{" "}
                                    </a>{" "}
                                    <br />{" "}
                                    <span className="a-size-base a-color-secondary">
                                      from Onsite Electro Services Private
                                      Limited{" "}
                                    </span>
                                    <div className="a-icon-row a-spacing-micro">
                                      {" "}
                                      <a
                                        className="a-link-normal"
                                        target="_blank"
                                        href="/product-reviews/B0BZ8MD2T6/ref=dp_atch_dss_w_r_B09CHJ5RWK_B0BZ8MD2T6?ie=UTF8&showViewpoints=1"
                                      >
                                        <i className="a-icon a-icon-star a-star-4" />
                                      </a>{" "}
                                      <a
                                        className="a-link-normal"
                                        target="_blank"
                                        href="/product-reviews/B0BZ8MD2T6/ref=dp_atch_dss_w_r_B09CHJ5RWK_B0BZ8MD2T6?ie=UTF8&showViewpoints=1"
                                      >
                                        461
                                      </a>
                                    </div>{" "}
                                    <span className="a-size-large a-color-base attach-warranty-price attach-accessory-price-warranty">
                                      ₹69.00{" "}
                                    </span>
                                  </div>
                                </div>
                                <div className="a-row">
                                  <div className="a-column a-span8">
                                    <div className="a-row a-spacing-micro">
                                      <ul className="a-unordered-list a-vertical">
                                        <li>
                                          <span className="a-list-item">
                                            EMAIL DELIVERY ONLY: Download your
                                            extended warranty certificate by
                                            sharing your device details. The
                                            link is available under buyer/seller
                                            messages at www.amazon.in/msg and is
                                            also sent to your Amazon registered
                                            email ID.
                                          </span>
                                        </li>
                                        <li>
                                          <span className="a-list-item">
                                            REPAIR OR REPLACEMENT GUARANTEE: We
                                            will either repair your device or
                                            give a replacement. The replacement
                                            device or gift vouchers will be
                                            provided at the discretion of
                                            Onsitego on the basis of the
                                            depreciated value of your device.
                                          </span>
                                        </li>
                                        <li>
                                          <span className="a-list-item">
                                            HASSLE-FREE SERVICE: ‘No Questions
                                            Asked’ Repair Policy |
                                            Zero-Paperwork Claims Process | Free
                                            Pick &amp; Drop or At-Home Service.
                                          </span>
                                        </li>
                                        <li>
                                          <span className="a-list-item">
                                            LIMIT OF LIABILITY: Onsitego
                                            liability is limited to the
                                            depreciated value of the device as
                                            detailed in our T&amp;C document.
                                          </span>
                                        </li>
                                        <li>
                                          <span className="a-list-item">
                                            HIGH-QUALITY REPAIRS: Service by
                                            Onsitego authorized service
                                            engineers with high-quality spare
                                            parts every single time.
                                          </span>
                                        </li>
                                        <li>
                                          <span className="a-list-item">
                                            EASY TO REQUEST SERVICE: Download
                                            the Onsitego app to raise a repair
                                            request within 10 seconds or visit
                                            our website. You can also call us on
                                            our toll-free number 99205 99206.
                                          </span>
                                        </li>
                                        <li>
                                          <span className="a-list-item">
                                            COVERAGE: The plan covers all
                                            defects &amp; malfunctions under the
                                            original manufacturer’s warranty.
                                            The plan starts the day after the
                                            manufacturer’s warranty ends. It
                                            does not cover physical or liquid
                                            damage, accessories or consumables.
                                            It also does not cover parts that
                                            are not covered under the standard
                                            manufacturer’s warranty.
                                          </span>
                                        </li>
                                        <li>
                                          <span className="a-list-item">
                                            ELIGIBILITY: The plan can be
                                            purchased only for new devices
                                            bought on the Amazon platform and
                                            WITHIN 9 MONTHS of device purchase.
                                            You can purchase this plan only for
                                            devices which have AT LEAST 1-YEAR
                                            manufacturer's warranty valid in
                                            India. The sum of manufacturer’s
                                            warranty and extended warranty
                                            CANNOT EXCEED 5 YEARS. This plan
                                            does not cover products or devices
                                            purchased or used for COMMERCIAL
                                            purposes.
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="a-column a-span4 a-span-last">
                                    <div className="a-box a-spacing-base a-color-alternate-background">
                                      <div className="a-box-inner">
                                        <div
                                          className="a-box a-alert-inline a-alert-inline-success aok-hidden attach_add_accessory_alert_warranty attach_add_accessory_alert"
                                          aria-live="polite"
                                          aria-atomic="true"
                                        >
                                          <div className="a-box-inner a-alert-container">
                                            <i className="a-icon a-icon-alert" />
                                            <div className="a-alert-content">
                                              <span className="a-size-base a-color-success">
                                                Added to cart
                                              </span>{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="a-box a-alert-inline a-alert-inline-error aok-hidden attach_add_accessory_alert attach_add_accessory_error_warranty"
                                          role="alert"
                                        >
                                          <div className="a-box-inner a-alert-container">
                                            <i className="a-icon a-icon-alert" />
                                            <div className="a-alert-content">
                                              <span className="a-size-base">
                                                An error occurred when
                                                processing your request.{" "}
                                              </span>{" "}
                                              <a
                                                className="a-link-normal attach-add-to-cart-retry"
                                                href="#"
                                              >
                                                {" "}
                                                Try again
                                              </a>{" "}
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <span className="a-spinner a-spinner-small aok-hidden attach_add_accessory_spinner_warranty" />
                                        <div className="a-section attach-warranty-button-row">
                                          <div className="a-button-stack">
                                            <span
                                              id="attachSiAddCoverage"
                                              className="a-button a-button-primary"
                                            >
                                              <span className="a-button-inner">
                                                <input
                                                  data-asin="B0BZ8MD2T6"
                                                  data-offering-id="LfN7glYRZdRwTOHfijLf%2FdSL0ejJzcRYPNDOp9VZNTgrTSdbqOdE7COWGhKgsfEwtJkkhjI39bWCsEvfLIXH1%2Bnlbg479eKCctv%2FCS%2BQyhx6F2wHF7MNpZZXXzDV2FRwDzmFsCVzC%2F1Cyl1IudWZ3ViS0VZ5LypMk4HHgz64FpM26uTH3632XfSL9EE7FVCy"
                                                  className="a-button-input"
                                                  type="submit"
                                                  aria-labelledby="attachSiAddCoverage-announce"
                                                />
                                                <span
                                                  id="attachSiAddCoverage-announce"
                                                  className="a-button-text"
                                                  aria-hidden="true"
                                                >
                                                  Add Protection
                                                </span>
                                              </span>
                                            </span>
                                            <span
                                              id="attachSiNoCoverage"
                                              className="a-button a-button-grouplast a-button-base"
                                            >
                                              <span className="a-button-inner">
                                                <input
                                                  className="a-button-input"
                                                  type="submit"
                                                  aria-labelledby="attachSiNoCoverage-announce"
                                                />
                                                <span
                                                  id="attachSiNoCoverage-announce"
                                                  className="a-button-text"
                                                  aria-hidden="true"
                                                >
                                                  Skip
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                                <a
                                  className="a-link-normal"
                                  target="_blank"
                                  rel="noopener"
                                  href="/dp/B0BZ8MD2T6/ref=dp_atch_dss_w_lm_B09CHJ5RWK_B0BZ8MD2T6"
                                >
                                  Learn more{" "}
                                </a>
                                <div className="a-row"> </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="attach-warranty-pane-ld"
                            className="a-section aok-hidden"
                          >
                            <div
                              id="attach-warranty-ld"
                              className="a-section attach-sidesheet-card"
                            >
                              <div
                                id="attach-warranty-display-ld"
                                className="a-section"
                              >
                                <input
                                  type="hidden"
                                  name=""
                                  id="attach-warranty-asin"
                                />
                                <h1
                                  id="attach-warranty-header"
                                  className="a-size-medium a-spacing-none a-color-base a-text-center"
                                >
                                  Add to your order{" "}
                                </h1>
                                <hr
                                  id="attach-warranty-divider"
                                  aria-hidden="true"
                                  className="a-spacing-base a-spacing-top-small a-divider-normal"
                                />
                                <div className="a-row a-spacing-micro">
                                  <div className="a-column a-span2">
                                    {" "}
                                    <img
                                      alt=""
                                      src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif"
                                      className="attach-accessory-image"
                                      id="attach-sheet-warranty-image"
                                    />{" "}
                                  </div>
                                  <div className="a-column a-span10 a-span-last">
                                    {" "}
                                    <a
                                      className="a-size-large a-color-base a-spacing-micro a-link-normal"
                                      target="_blank"
                                      href="/dp//ref=dp_atch_dss_w_lm_B09CHJ5RWK_"
                                    >
                                      <span
                                        id="attach-warranty-displayTitle"
                                        className="a-text-bold"
                                      >
                                        {" "}
                                      </span>{" "}
                                    </a>
                                    <br />{" "}
                                    <span className="a-size-base a-color-secondary">
                                      from{" "}
                                    </span>{" "}
                                    <span className="a-size-large a-color-base attach-warranty-price attach-accessory-price-warranty"></span>{" "}
                                  </div>
                                </div>
                                <div className="a-row">
                                  <div className="a-column a-span8">
                                    <div className="a-row a-spacing-micro">
                                      <ul className="a-unordered-list a-vertical"></ul>
                                    </div>
                                  </div>
                                  <div className="a-column a-span4 a-span-last">
                                    <div className="a-box a-spacing-base a-color-alternate-background">
                                      <div className="a-box-inner">
                                        <div
                                          className="a-box a-alert-inline a-alert-inline-success aok-hidden attach_add_accessory_alert_warranty attach_add_accessory_alert"
                                          aria-live="polite"
                                          aria-atomic="true"
                                        >
                                          <div className="a-box-inner a-alert-container">
                                            <i className="a-icon a-icon-alert" />
                                            <div className="a-alert-content">
                                              <span className="a-size-base a-color-success">
                                                Added to cart
                                              </span>{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="a-box a-alert-inline a-alert-inline-error aok-hidden attach_add_accessory_alert attach_add_accessory_error_warranty"
                                          role="alert"
                                        >
                                          <div className="a-box-inner a-alert-container">
                                            <i className="a-icon a-icon-alert" />
                                            <div className="a-alert-content">
                                              <span className="a-size-base">
                                                An error occurred when
                                                processing your request.{" "}
                                              </span>{" "}
                                              <a
                                                className="a-link-normal attach-add-to-cart-retry"
                                                href="#"
                                              >
                                                {" "}
                                                Try again
                                              </a>{" "}
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <span className="a-spinner a-spinner-small aok-hidden attach_add_accessory_spinner_warranty" />
                                        <div className="a-section attach-warranty-button-row">
                                          <div className="a-button-stack">
                                            <span
                                              id="attachSiAddCoverage-ld"
                                              className="a-button a-button-primary"
                                            >
                                              <span className="a-button-inner">
                                                <input
                                                  data-asin=""
                                                  data-offering-id=""
                                                  className="a-button-input"
                                                  type="submit"
                                                  aria-labelledby="attachSiAddCoverage-ld-announce"
                                                />
                                                <span
                                                  id="attachSiAddCoverage-ld-announce"
                                                  className="a-button-text"
                                                  aria-hidden="true"
                                                >
                                                  Add Protection
                                                </span>
                                              </span>
                                            </span>
                                            <span
                                              id="attachSiNoCoverage-ld"
                                              className="a-button a-button-grouplast a-button-base"
                                            >
                                              <span className="a-button-inner">
                                                <input
                                                  className="a-button-input"
                                                  type="submit"
                                                  aria-labelledby="attachSiNoCoverage-ld-announce"
                                                />
                                                <span
                                                  id="attachSiNoCoverage-ld-announce"
                                                  className="a-button-text"
                                                  aria-hidden="true"
                                                >
                                                  Skip
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                                <a
                                  className="a-link-normal"
                                  target="_blank"
                                  rel="noopener"
                                  href="/dp//ref=dp_atch_dss_w_lm_B09CHJ5RWK_"
                                >
                                  Learn more{" "}
                                </a>
                                <div className="a-row"> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ATFCriticalFeaturesDataContainer">
          <div
            id="twisterJsInitializer_feature_div"
            className="celwidget"
            data-feature-name="twisterJsInitializer"
            data-csa-c-type="widget"
            data-csa-c-content-id="twisterJsInitializer"
            data-csa-c-slot-id="twisterJsInitializer_feature_div"
            data-csa-c-asin="B09CHJ5RWK"
            data-csa-c-is-in-initial-active-row="false"
            data-csa-c-id="vi4bju-rijy87-s0udck-cvvfpx"
            data-cel-widget="twisterJsInitializer_feature_div"
          ></div>
          <div
            id="imageBlockVariations_feature_div"
            className="celwidget"
            data-feature-name="imageBlockVariations"
            data-csa-c-type="widget"
            data-csa-c-content-id="imageBlockVariations"
            data-csa-c-slot-id="imageBlockVariations_feature_div"
            data-csa-c-asin="B09CHJ5RWK"
            data-csa-c-is-in-initial-active-row="false"
            data-csa-c-id="8henqg-c2vzkb-r8qcsz-yuwrc9"
            data-cel-widget="imageBlockVariations_feature_div"
          ></div>
        </div>
        {/* MarkAF */}
      </div>
      <div
        id="emit-js_feature_div"
        className="celwidget"
        data-feature-name="emit-js"
        data-csa-c-type="widget"
        data-csa-c-content-id="emit-js"
        data-csa-c-slot-id="emit-js_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="zf2x1d-qbg723-uskfq6-hg82qq"
        data-cel-widget="emit-js_feature_div"
      ></div>
      <div
        id="bundleV2_feature_div"
        className="celwidget"
        data-feature-name="bundleV2"
        data-csa-c-type="widget"
        data-csa-c-content-id="bundleV2"
        data-csa-c-slot-id="bundleV2_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="o6kzrk-ccy83b-3h8jqm-37ipbe"
        data-cel-widget="bundleV2_feature_div"
      ></div>
      <div
        id="dp-ads-center-promo-top_feature_div"
        className="celwidget"
        data-feature-name="dp-ads-center-promo-top"
        data-csa-c-type="widget"
        data-csa-c-content-id="dp-ads-center-promo-top"
        data-csa-c-slot-id="dp-ads-center-promo-top_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="yrn216-97qn9u-857hj1-6tsurb"
        data-cel-widget="dp-ads-center-promo-top_feature_div"
      ></div>
      <div
        id="similarities_feature_div"
        className="celwidget"
        data-feature-name="similarities"
        data-csa-c-type="widget"
        data-csa-c-content-id="similarities"
        data-csa-c-slot-id="similarities_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="51x61b-dopj7r-92rzt3-8295i3"
        data-cel-widget="similarities_feature_div"
      >
        <div
          
          className="celwidget"
          data-csa-c-id="fvq0hk-z4eof-ebdwbz-dbqtq9"
          data-cel-widget="sims-consolidated-1_csm_instrumentation_wrapper"
        >
          <div
            className="celwidget pd_rd_w-xbBu8 content-id-amzn1.sym.c7ef6266-a9b9-4df2-ad24-f795ecdadcdc pf_rd_p-c7ef6266-a9b9-4df2-ad24-f795ecdadcdc pf_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-Tz2Zi pd_rd_r-9e0d30ae-7ef3-49c7-a998-32869a69adf3 c-f"
            
            data-csa-op-log-render=""
            data-csa-c-content-id="amzn1.sym.c7ef6266-a9b9-4df2-ad24-f795ecdadcdc"
            data-csa-c-slot-id="product-bundle-1"
            data-csa-c-type="widget"
            data-csa-c-painter="p13n-desktop-sims-fbt-cards"
            data-csa-c-id="2godg6-1x5la-l4n9mz-an21u"
            data-cel-widget="p13n-desktop-sims-fbt_DPSims_0"
          >
            {/*CardsClient*/}
            <div
              id="CardInstancesdus9hHpDOI2AWMjqtp4hg"
              data-card-metrics-id="p13n-desktop-sims-fbt_DPSims_0"
              data-mix-claimed="true"
            >
              <div
                className="cardRoot bucket"
                data-count={3}
                data-components='{"1":{"checked":true,"minQuantity":1,"price":{"currencyCode":"INR","currencySymbol":"₹","currencySymbolPosition":"Left","decimalSeparator":".","displayString":"₹169.00","fractionalValue":"00","wholeValue":"169"},"showPrice":true,"suppressed":false},"2":{"checked":true,"minQuantity":1,"price":{"currencyCode":"INR","currencySymbol":"₹","currencySymbolPosition":"Left","decimalSeparator":".","displayString":"₹280.00","fractionalValue":"00","wholeValue":"280"},"showPrice":true,"suppressed":false},"3":{"checked":true,"minQuantity":1,"price":{"currencyCode":"INR","currencySymbol":"₹","currencySymbolPosition":"Left","decimalSeparator":".","displayString":"₹99.00","fractionalValue":"00","wholeValue":"99"},"showPrice":true,"suppressed":false}}'
                data-add-to-cart='["Add to Cart","Add both to Cart","Add all three to Cart","Add all three to cart","Add both to cart","Choose items to buy together."]'
                data-price-totals='{"1":"₹169.00","2":"₹280.00","3":"₹99.00","12":"₹449.00","13":"₹268.00","23":"₹379.00","123":"₹548.00"}'
                data-points-total="{}"
                data-punt="false"
              >
                <div className="a-section a-spacing-medium" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="miraiBTFShopByLook_feature_div"
        className="celwidget"
        data-feature-name="miraiBTFShopByLook"
        data-csa-c-type="widget"
        data-csa-c-content-id="miraiBTFShopByLook"
        data-csa-c-slot-id="miraiBTFShopByLook_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="qasshv-9ffjk5-rkif9k-91s6yj"
        data-cel-widget="miraiBTFShopByLook_feature_div"
      ></div>
      <div
        id="px-profile_feature_div"
        className="celwidget"
        data-feature-name="px-profile"
        data-csa-c-type="widget"
        data-csa-c-content-id="px-profile"
        data-csa-c-slot-id="px-profile_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="xmi5qh-pf9xqd-jg45ko-fw447d"
        data-cel-widget="px-profile_feature_div"
      ></div>
      <div
        id="px-acquisition_feature_div"
        className="celwidget"
        data-feature-name="px-acquisition"
        data-csa-c-type="widget"
        data-csa-c-content-id="px-acquisition"
        data-csa-c-slot-id="px-acquisition_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="o1yvn1-daztdr-cffcra-b9aysq"
        data-cel-widget="px-acquisition_feature_div"
      ></div>
      <div
        id="virtual-brand-ingress_feature_div"
        className="celwidget"
        data-feature-name="virtual-brand-ingress"
        data-csa-c-type="widget"
        data-csa-c-content-id="virtual-brand-ingress"
        data-csa-c-slot-id="virtual-brand-ingress_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="wamode-8sxm6g-5qmqda-mairez"
        data-cel-widget="virtual-brand-ingress_feature_div"
      ></div>
      <div
        id="Desktop-Detailed-Evaluation-Zone"
        className="celwidget"
        data-feature-name="Desktop-Detailed-Evaluation-Zone"
        data-csa-c-type="widget"
        data-csa-c-content-id="Desktop-Detailed-Evaluation-Zone"
        data-csa-c-slot-id="Desktop-Detailed-Evaluation-Zone"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="u7grsf-fd1syy-p8mu4c-ixhsxa"
        data-cel-widget="Desktop-Detailed-Evaluation-Zone"
      >
        <div
          id="ask-dp-search_feature_div"
          className="celwidget pd_rd_w-c2Rw5 pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="ask-dp-search"
          data-csa-c-type="widget"
          data-csa-c-content-id="ask-dp-search"
          data-csa-c-slot-id="ask-dp-search_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="p6kepl-m68zoh-6cuneg-80jfrh"
          data-cel-widget="ask-dp-search_feature_div"
        >
          <a />
        </div>
        <div
          id="climatePledgeFriendlyBTF_feature_div"
          className="celwidget pd_rd_w-DZU0u pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="climatePledgeFriendlyBTFAllMp"
          data-csa-c-type="widget"
          data-csa-c-content-id="climatePledgeFriendlyBTFAllMp"
          data-csa-c-slot-id="climatePledgeFriendlyBTF_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="upgj08-a24pm3-8k8507-sd6s3c"
          data-cel-widget="climatePledgeFriendlyBTF_feature_div"
        ></div>
        <div
          id="productDocuments_feature_div"
          className="celwidget pd_rd_w-ER06L pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="productDocuments"
          data-csa-c-type="widget"
          data-csa-c-content-id="productDocuments"
          data-csa-c-slot-id="productDocuments_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="vspxjq-n6unox-z5ybeo-o94aus"
          data-cel-widget="productDocuments_feature_div"
        ></div>
        <div
          id="ask-btf_feature_div"
          className="celwidget pd_rd_w-3BiL4 pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="ask-btf"
          data-csa-c-type="widget"
          data-csa-c-content-id="ask-btf"
          data-csa-c-slot-id="ask-btf_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="6ro1ur-libz0m-t8z2iu-ecl7m9"
          data-cel-widget="ask-btf_feature_div"
        >
          <div
            id="cf-ask-cel"
            className="a-section celwidget"
            data-csa-c-id="aznpbu-93h65l-2usc2k-k97w3e"
            data-cel-widget="cf-ask-cel"
          >
            <div id="Ask" />
            <div
              data-url="/ask/askBrowseAjaxLoad/asin/B09CHJ5RWK"
              className="a-section askBTFLazyLoad"
            >
              {/* add celwidget name 'ask-browse-ajax-load' to record client side metric, following guidance: https://w.amazon.com/index.php/ClientSideMetrics/UserDocs/CEL/Widgets#Onboarding */}
              <div
               
                className="celwidget"
                data-csa-c-id="vxzvgu-6y2g0q-li4z0y-seqs60"
                data-cel-widget="ask-browse-ajax-load"
              >
                {/* ask-automation:start */}
                <div
                  id="ask-btf-container"
                 
                  className="celwidget"
                  data-csa-c-id="hnor3c-3jzcto-4x2nr0-kkcz3i"
                  data-cel-widget="ask-btf-desktop"
                ></div>
                {/* ask-automation:end */}
              </div>
            </div>
          </div>
        </div>
        <div
          id="click-to-call_feature_div"
          className="celwidget pd_rd_w-lfGA1 pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="click-to-call"
          data-csa-c-type="widget"
          data-csa-c-content-id="click-to-call"
          data-csa-c-slot-id="click-to-call_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="lgtlwb-jp01a2-b2suoo-qt5q0y"
          data-cel-widget="click-to-call_feature_div"
        ></div>
        <div
          id="bundleComponentDetails_feature_div"
          className="celwidget pd_rd_w-Z70sC pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="bundleComponentDetails"
          data-csa-c-type="widget"
          data-csa-c-content-id="bundleComponentDetails"
          data-csa-c-slot-id="bundleComponentDetails_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="fqzefj-onotic-td7jla-xr58j4"
          data-cel-widget="bundleComponentDetails_feature_div"
        ></div>
        <div
          id="technicalSpecifications_feature_div"
          className="celwidget pd_rd_w-5QfZ7 pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="technicalSpecifications"
          data-csa-c-type="widget"
          data-csa-c-content-id="technicalSpecifications"
          data-csa-c-slot-id="technicalSpecifications_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="ltofct-ugcytn-wq1lxw-volplh"
          data-cel-widget="technicalSpecifications_feature_div"
        >
          <div className="a-divider a-divider-section" />
        </div>
        <div
          id="aplus_feature_div"
          className="celwidget pd_rd_w-NUEgp pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="aplus"
          data-csa-c-type="widget"
          data-csa-c-content-id="aplus"
          data-csa-c-slot-id="aplus_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="20l98j-yf59ua-d9p9w6-t5v7y2"
          data-cel-widget="aplus_feature_div"
        >
          <div id="aplus" className="a-section a-spacing-large bucket">
            <hr  className="bucketDivider" />
            <h2>Product Description</h2>
            <div
              className="aplus-v2 desktop celwidget"
              
              data-csa-c-id="oelk5v-uuht24-tzeht5-y0rnm"
              data-cel-widget="aplus"
            >
              <div
                className="celwidget aplus-module 3p-module-b aplus-standard"
                
                data-csa-c-id="3thf0c-x48ir9-69wlax-uw0c9q"
                data-cel-widget="aplus-3p-module-b"
              >
                <div className="aplus-module-wrapper aplus-3p-fixed-width">
                  <h3 className="a-spacing-mini"> SELLORIA WATCH </h3>{" "}
                  <img
                    alt="SELLORIA Digital Watch Shockproof Multi-Functional Automatic Black Color Strap Waterproof,SPN-MX9E8"
                    src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8a793b4a-d602-47b4-9497-25caaed521e7.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                    className="a-spacing-base"
                    data-src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8a793b4a-d602-47b4-9497-25caaed521e7.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                  />
                  <noscript>
                    &lt;img alt="SELLORIA Digital Watch Shockproof
                    Multi-Functional Automatic Black Color Strap
                    Waterproof,SPN-MX9E8"
                    src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8a793b4a-d602-47b4-9497-25caaed521e7.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                    /&gt;
                  </noscript>
                  <h3 className="a-spacing-mini"> STYLISH SELLORIA WATCHES </h3>
                  <p className="a-spacing-base">
                    {" "}
                    Digital timepieces have not only upgraded their high-tech
                    features but have also caught up to the design challenge.
                    With a digital watch, you get the best of both worlds -
                    smart, sophisticated shape and state-of-the-art technology.
                    The modern digital watch is fast shaping up to be the
                    accessory of the future, rather than a novelty of a bygone
                    era. Dressed up for a business lunch or paired down for a
                    hike in the mountains, the digital watch wears as well as it
                    performs.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="va-related-videos-widgetReverseInterleave"
          className="celwidget pd_rd_w-dYuDH pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="va-related-videos-widgetReverseInterleave"
          data-csa-c-type="widget"
          data-csa-c-content-id="va-related-videos-widgetReverseInterleave"
          data-csa-c-slot-id="va-related-videos-widgetReverseInterleave"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="9owny8-s3iokk-hfiwb0-8nxbbd"
          data-cel-widget="va-related-videos-widgetReverseInterleave"
        >
          <div
            id="va-related-videos-widget_feature_div"
            className="celwidget"
            data-feature-name="va-related-videos-widget"
            data-csa-c-type="widget"
            data-csa-c-content-id="va-related-videos-widget"
            data-csa-c-slot-id="va-related-videos-widget_feature_div"
            data-csa-c-asin=""
            data-csa-c-is-in-initial-active-row="false"
            data-csa-c-id="oelm23-i9nlzn-an902o-4aznbk"
            data-cel-widget="va-related-videos-widget_feature_div"
          ></div>
        </div>
        <div
          id="productDescription_feature_div"
          className="celwidget pd_rd_w-Bzosm pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="productDescription"
          data-csa-c-type="widget"
          data-csa-c-content-id="productDescription"
          data-csa-c-slot-id="productDescription_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="58qy6h-q9argp-vhbsef-8gma1v"
          data-cel-widget="productDescription_feature_div"
        >
          <div></div>
        </div>
        <div
          id="aplusBrandStory_feature_div"
          className="celwidget pd_rd_w-LcVqr pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="aplusBrandStory"
          data-csa-c-type="widget"
          data-csa-c-content-id="aplusBrandStory"
          data-csa-c-slot-id="aplusBrandStory_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="3ysv99-kaplw-hg5vtz-66pon"
          data-cel-widget="aplusBrandStory_feature_div"
        ></div>
        <div
          id="brandSnapshot_feature_div"
          className="celwidget pd_rd_w-NUxgw pd_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-74PFi"
          data-feature-name="brandSnapshot_desktop"
          data-csa-c-type="widget"
          data-csa-c-content-id="brandSnapshot_desktop"
          data-csa-c-slot-id="brandSnapshot_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="wpi4q0-h0e2z6-n0lgb0-hb9jmr"
          data-cel-widget="brandSnapshot_feature_div"
        ></div>
      </div>
      <div
        id="promotions_feature_div"
        className="celwidget"
        data-feature-name="promotions"
        data-csa-c-type="widget"
        data-csa-c-content-id="promotions"
        data-csa-c-slot-id="promotions_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="vzeke9-8l07kq-xe1p9p-hsg027"
        data-cel-widget="promotions_feature_div"
      ></div>
      <div
        id="legal_feature_div"
        className="celwidget"
        data-feature-name="legal"
        data-csa-c-type="widget"
        data-csa-c-content-id="legal"
        data-csa-c-slot-id="legal_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="hmtafj-ko46tv-94oomk-nxapom"
        data-cel-widget="legal_feature_div"
      ></div>
      <div
        id="importantInformation_feature_div"
        className="celwidget"
        data-feature-name="importantInformationRemoveDE"
        data-csa-c-type="widget"
        data-csa-c-content-id="importantInformationRemoveDE"
        data-csa-c-slot-id="importantInformation_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="vn4x6d-utofpz-pizkal-kqznd9"
        data-cel-widget="importantInformation_feature_div"
      ></div>
      <div
        id="similarities_feature_div"
        className="celwidget"
        data-feature-name="similarities"
        data-csa-c-type="widget"
        data-csa-c-content-id="similarities"
        data-csa-c-slot-id="similarities_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="hiuwtn-ct90eg-h86kbh-by892t"
        data-cel-widget="similarities_feature_div"
      ></div>
      <div
        id="product-comparison_feature_div"
        className="celwidget"
        data-feature-name="product-comparison"
        data-csa-c-type="widget"
        data-csa-c-content-id="product-comparison"
        data-csa-c-slot-id="product-comparison_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="5nsch8-rqcfhp-z32nth-mqs7l4"
        data-cel-widget="product-comparison_feature_div"
      >
        <div
      
          className="celwidget"
          data-csa-c-id="1nt178-q3ml7x-oilwjc-az4uda"
          data-cel-widget="sims-consolidated-4_csm_instrumentation_wrapper"
        >
          <div
            className="celwidget pd_rd_w-36JmL content-id-amzn1.sym.4c610b0e-88c2-4ee7-aa8c-0844a8493424 pf_rd_p-4c610b0e-88c2-4ee7-aa8c-0844a8493424 pf_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-Tz2Zi pd_rd_r-9e0d30ae-7ef3-49c7-a998-32869a69adf3 c-f"
            
            data-csa-op-log-render=""
            data-csa-c-content-id="amzn1.sym.4c610b0e-88c2-4ee7-aa8c-0844a8493424"
            data-csa-c-slot-id="comparison-container-6"
            data-csa-c-type="widget"
            data-csa-c-painter="product-comparison-desktop-cards"
            data-csa-c-id="smvrnx-9rxjcq-iq80ds-h4jgoz"
            data-cel-widget="product-comparison-desktop_DPSims_5"
          >
            {/*CardsClient*/}
          </div>
        </div>
      </div>
      <div
        id="legal-compliance-card_feature_div"
        className="celwidget"
        data-feature-name="legal-compliance-card"
        data-csa-c-type="widget"
        data-csa-c-content-id="legal-compliance-card"
        data-csa-c-slot-id="legal-compliance-card_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="36tlzz-8evscf-ibpy9c-lheejo"
        data-cel-widget="legal-compliance-card_feature_div"
      >
        <div
          className="celwidget c-f"
          
          data-csa-op-log-render=""
          data-csa-c-content-id="DsUnknown"
          data-csa-c-slot-id="DsUnknown-2"
          data-csa-c-type="widget"
          data-csa-c-painter="legal-compliance-card-cards"
          data-csa-c-id="tnqg22-yxc9qk-a28srd-dij8dp"
          data-cel-widget="legal-compliance-card_DetailPage_1"
        >
          {/*CardsClient*/}
          <div
            id="CardInstancehAEoY0Z-w1Igr4S9AuQ1WA"
            data-card-metrics-id="legal-compliance-card_DetailPage_1"
            data-acp-tracking="{}"
            data-mix-claimed="true"
          >
            <input
              type="hidden"
              className="asinValue"
              defaultValue="B09CHJ5RWK"
              aria-hidden="true"
            />
            <input
              type="hidden"
              className="deviceTypeValue"
              defaultValue="desktop"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div
        id="sponsoredProducts2_feature_div"
        className="celwidget"
        data-feature-name="sponsoredProducts2"
        data-csa-c-type="widget"
        data-csa-c-content-id="sponsoredProducts2"
        data-csa-c-slot-id="sponsoredProducts2_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="e9hefj-hf6su3-wnxamp-f9o3y0"
        data-cel-widget="sponsoredProducts2_feature_div"
      ></div>
      <div
        id="sims-themis-sponsored-products-2_feature_div"
        className="celwidget"
        data-feature-name="sims-themis-sponsored-products-2"
        data-csa-c-type="widget"
        data-csa-c-content-id="sims-themis-sponsored-products-2"
        data-csa-c-slot-id="sims-themis-sponsored-products-2_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="n4pihp-y8tw3l-5ki83t-p5e651"
        data-cel-widget="sims-themis-sponsored-products-2_feature_div"
      >
        <div
          
          className="celwidget"
          data-csa-c-id="a1qpjo-ypiqyg-t1l0f6-3qqpjr"
          data-cel-widget="sims-consolidated-5_csm_instrumentation_wrapper"
        >
          <div
            className="celwidget pd_rd_w-a2nJn content-id-amzn1.sym.a67825cd-bf53-4190-b32f-f5084546a8c2 pf_rd_p-a67825cd-bf53-4190-b32f-f5084546a8c2 pf_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-Tz2Zi pd_rd_r-9e0d30ae-7ef3-49c7-a998-32869a69adf3"
            
            data-csa-op-log-render=""
            data-csa-c-content-id="amzn1.sym.a67825cd-bf53-4190-b32f-f5084546a8c2"
            data-csa-c-slot-id="sponsored-products-5"
            data-csa-c-type="widget"
            data-csa-c-painter="FirebirdPainter"
            data-csa-c-id="h3h0y8-21zd69-r6x45r-z6qurc"
            data-cel-widget="desktop-dp-sims_SponsoredProductsSimsDp2Desktop"
          >
            <div
              data-csa-c-type="widget"
              data-csa-c-slot-id="sp_detail2"
              data-csa-c-id="gkeysi-fmvra7-j6eb1t-4kq2bq"
            >
              <hr
                aria-hidden="true"
                className="a-divider-normal bucketDivider"
              />
              <div
                id="sp_detail2"
                data-a-carousel-options='{"initialSeenAsins":["B08X21DHX5","B09C3CG7YV","B0BPHY3H5W","B095YWP668","B099NTQJNQ","B09SQ5S1R5","B08ZSBDX12","B0B2WTH81F","B0BH4N1P38","B08YP6S6HW"],"set_size":140,"filteredItems":[],"name":"sp_detail2_carousel","auto_adjust_height":"true","circular":false,"ajax":{"params":{"cc":10,"widgetLocale":"en_IN","isBlended":false,"searchTerms":"watch","pRTime":"1732455193980","showHelpfulSentence":false,"start":10,"ipAddress":"112.196.181.152","ASIN":"B09CHJ5RWK","pRID":"AGSRENW6SRAW518HGTR3","isPrimeMember":false,"storeId":"watches","isGetBlendedWidgetsAPI":false,"slateToken":"AgAATUgwRgIhAIkND/QZfJuCqYVUc5yhXK7nIJFUn4YOJ9iwFgxewKehAiEAwZuXyntocUZhBZiQuto5HO5UZjIDzilu+PLUnHV6ozoCdjEAAQBMAZNeYFy5HI8jAnYxGX2KPQ8q/tbF7oqw1RzPQAO67PWBWjxPDYf4AyrZmWoAAAAIBnJldGFpbAlhbWF6b24uaW4FZW4tSU5JTlIBoQIABwoCAAILAQEDAAAEAAA=","p13N":"%26pd_rd_w%3Da2nJn%26content-id%3Damzn1.sym.a67825cd-bf53-4190-b32f-f5084546a8c2%26pf_rd_p%3Da67825cd-bf53-4190-b32f-f5084546a8c2%26pf_rd_r%3DAGSRENW6SRAW518HGTR3%26pd_rd_wg%3DTz2Zi%26pd_rd_r%3D9e0d30ae-7ef3-49c7-a998-32869a69adf3","wName":"sp_detail2","widgetGroup":"desktop-dp-sims","isMultiPlacementRequest":true,"doNotShowProductAttributes":false,"strategyId":"SponsoredProductsSimsDp2Desktop","isPoweredByJavelin":false,"isPantry":0,"isFresh":0},"url":"/sspa/paginate"}}'
                data-ad-placement-metadata='{"slotName":"sp_detail2","adProgramId":"1024","pageType":"Detail"}'
                data-p13n-feature-metadata='{"baseAsin":"B09CHJ5RWK","pd_rd_wg":"Tz2Zi","pd_rd_w":"a2nJn","pd_rd_r":"9e0d30ae-7ef3-49c7-a998-32869a69adf3"}'
                data-p13n-feature-name="sp_detail2"
                data-p13n-global='{"auiDeviceType":"desktop","marketplaceId":65060284443744,"marketplace":"IN","requestId":"AGSRENW6SRAW518HGTR3","session":"261-0713373-3141624"}'
                data-a-display-strategy="swap"
                data-a-transition-strategy="swap"
                data-a-ajax-strategy="clicksCustomAjax"
                role="group"
                className="a-begin a-carousel-container a-carousel-display-swap a-carousel-transition-swap"
              >
                <input
                  autoComplete="on"
                  type="hidden"
                  className="a-carousel-firstvisibleitem"
                />
                <span className="a-end aok-hidden" />
              </div>
              <div style={{ marginBottom: 19 }} />
            </div>
          </div>
        </div>
      </div>
      <div
        id="cpsiaProductSafetyWarning_feature_div"
        className="celwidget"
        data-feature-name="cpsiaProductSafetyWarningCard"
        data-csa-c-type="widget"
        data-csa-c-content-id="cpsiaProductSafetyWarningCard"
        data-csa-c-slot-id="cpsiaProductSafetyWarning_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="j6tlmd-78g8cl-57uaal-fbj0xt"
        data-cel-widget="cpsiaProductSafetyWarning_feature_div"
      >
        <div
          className="celwidget c-f"
          
          data-csa-op-log-render=""
          data-csa-c-content-id="DsUnknown"
          data-csa-c-slot-id="DsUnknown-3"
          data-csa-c-type="widget"
          data-csa-c-painter="dp-cpsia-product-safety-warning-cards"
          data-csa-c-id="aadrsx-7fxcry-jqz4dv-a4kgzy"
          data-cel-widget="dp-cpsia-product-safety-warning_DetailPage_2"
        >
          {/*CardsClient*/}
          <div
            id="CardInstanceledXIIM1g635___nRV7eKQ"
            data-card-metrics-id="dp-cpsia-product-safety-warning_DetailPage_2"
          />
        </div>
      </div>
      <div
        id="buffetServiceCard_feature_div"
        className="celwidget"
        data-feature-name="buffetServiceCard"
        data-csa-c-type="widget"
        data-csa-c-content-id="buffetServiceCard"
        data-csa-c-slot-id="buffetServiceCard_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="5l8a9a-p455wp-hineua-8fxss7"
        data-cel-widget="buffetServiceCard_feature_div"
      >
        <div
          className="celwidget c-f"
      
          data-csa-op-log-render=""
          data-csa-c-content-id="DsUnknown"
          data-csa-c-slot-id="DsUnknown-4"
          data-csa-c-type="widget"
          data-csa-c-painter="buffet-disclaimers-card-cards"
          data-csa-c-id="h52tdm-e7cr8e-ja9obs-lxapgz"
          data-cel-widget="buffet-disclaimers-card_DetailPage_3"
        >
          {/*CardsClient*/}
          <div
            id="CardInstanceHDDERwvWcGACfqZW5O7NUQ"
            data-card-metrics-id="buffet-disclaimers-card_DetailPage_3"
            data-acp-tracking="{}"
            data-mix-claimed="true"
          />
        </div>
      </div>
      <div
        id="dp-ads-middle_feature_div"
        className="celwidget"
        data-feature-name="dp-ads-middle"
        data-csa-c-type="widget"
        data-csa-c-content-id="dp-ads-middle"
        data-csa-c-slot-id="dp-ads-middle_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="h5tab2-jcwokv-8x0mkx-ccdsb9"
        data-cel-widget="dp-ads-middle_feature_div"
      ></div>
      <div
        id="dp-ads-center-promo_feature_div"
        className="celwidget"
        data-feature-name="dp-ads-center-promo"
        data-csa-c-type="widget"
        data-csa-c-content-id="dp-ads-center-promo"
        data-csa-c-slot-id="dp-ads-center-promo_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="gagkml-ussutn-cxwk53-puj3d4"
        data-cel-widget="dp-ads-center-promo_feature_div"
      ></div>
      <div
        id="px-acquisition-bot_feature_div"
        className="celwidget"
        data-feature-name="px-acquisition-bot"
        data-csa-c-type="widget"
        data-csa-c-content-id="px-acquisition-bot"
        data-csa-c-slot-id="px-acquisition-bot_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="faex2k-y11l3k-wa3jp1-scb57z"
        data-cel-widget="px-acquisition-bot_feature_div"
      ></div>
      <div
        id="discovery-and-inspiration_feature_div"
        className="celwidget"
        data-feature-name="discovery-and-inspiration"
        data-csa-c-type="widget"
        data-csa-c-content-id="discovery-and-inspiration"
        data-csa-c-slot-id="discovery-and-inspiration_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="46uf5m-pmsyvo-mr1l38-kwna1b"
        data-cel-widget="discovery-and-inspiration_feature_div"
      >
        <div
        
          className="celwidget"
          data-csa-c-id="3dd2aa-4vf8es-s16sy8-ocel3a"
          data-cel-widget="sims-consolidated-6_csm_instrumentation_wrapper"
        >
          <div
            className="celwidget pd_rd_w-XUbX7 content-id-amzn1.sym.aa14fa00-bc47-4b9c-afe8-e5f5a8aecc2e pf_rd_p-aa14fa00-bc47-4b9c-afe8-e5f5a8aecc2e pf_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-Tz2Zi pd_rd_r-9e0d30ae-7ef3-49c7-a998-32869a69adf3 c-f"
            
            data-csa-op-log-render=""
            data-csa-c-content-id="amzn1.sym.aa14fa00-bc47-4b9c-afe8-e5f5a8aecc2e"
            data-csa-c-slot-id="discovery-and-inspiration-container-7"
            data-csa-c-type="widget"
            data-csa-c-painter="multi-brand-video-desktop-cards"
            data-csa-c-id="npq3hu-4mto7v-9hlyjz-y3odci"
            data-cel-widget="multi-brand-video-desktop_DPSims_6"
          >
            {/*CardsClient*/}
            <div
              className="_multi-brand-video-desktop_style_mbvContainer__2A_sC"
              data-props='{"clientId":"9e0d30ae-7ef3-49c7-a998-32869a69adf3","language":"en-IN","marketplaceId":"A21TJRUUN4KGV","pageType":"Detail","weblabs":"ADPT_SBV_1041956:T1,ADPT_SBV_880477:C,ADPT_SBV_948350:C,ADPT_SBV_956803:T1,ADPT_SBV_959560:C,MBV_394048:T5,SBV_414150:C,SBV_427616:C,SBV_468340:C,SBV_620753:T1,SBV_623814:C,SBV_633512:C,SBV_633539:T1,SBV_633907:C,SBV_642751:T1,SBV_656845:C,SBV_668132:T1,SBV_672322:T1,SBV_708584:C,SBV_736363:C,SBV_776653:C,SBV_814590:C,SBV_834356:T1,SBV_836067:C,SBV_842986:T1","widgetGroupId":"desktop-dp-sims","widgetType":"multi-brand-video"}'
              id="CardInstanceCamcF-OLoxx2rKBjugfzsw"
              data-card-metrics-id="multi-brand-video-desktop_DPSims_6"
              data-mix-claimed="true"
            ></div>
          </div>
        </div>
      </div>
      <div
        id="expert-reviews_feature_div"
        className="celwidget"
        data-feature-name="expert-reviews"
        data-csa-c-type="widget"
        data-csa-c-content-id="expert-reviews"
        data-csa-c-slot-id="expert-reviews_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="rtk1hk-wh98ly-1khcyg-d49h6n"
        data-cel-widget="expert-reviews_feature_div"
      ></div>
      <div
        id="customer-reviews_feature_div"
        className="celwidget"
        data-feature-name="customer-reviews"
        data-csa-c-type="widget"
        data-csa-c-content-id="customer-reviews"
        data-csa-c-slot-id="customer-reviews_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="8ezafq-8tzwwv-bh41io-eftekk"
        data-cel-widget="customer-reviews_feature_div"
      >
        <div
          
          className="celwidget"
          data-csa-c-id="aawo0e-vfoou8-vdubt6-r9h685"
          data-cel-widget="customer-reviews_csm_instrumentation_wrapper"
        />
      </div>
      <div
        id="detail-page-cf-marker_feature_div"
        className="celwidget"
        data-feature-name="detail-page-cf-marker"
        data-csa-c-type="widget"
        data-csa-c-content-id="detail-page-cf-marker"
        data-csa-c-slot-id="detail-page-cf-marker_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="i5utsa-2d2c2m-s13hw9-h1u2jh"
        data-cel-widget="detail-page-cf-marker_feature_div"
      ></div>
      <div
        id="jquery-available_feature_div"
        className="celwidget"
        data-feature-name="jquery-available"
        data-csa-c-type="widget"
        data-csa-c-content-id="jquery-available"
        data-csa-c-slot-id="jquery-available_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="oj49vj-486vva-nl6324-sevwxk"
        data-cel-widget="jquery-available_feature_div"
      ></div>
      <div
        id="amazonjq-section_feature_div"
        className="celwidget"
        data-feature-name="amazonjq-section"
        data-csa-c-type="widget"
        data-csa-c-content-id="amazonjq-section"
        data-csa-c-slot-id="amazonjq-section_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="awqthz-q97ghq-wk33tk-ytdpd8"
        data-cel-widget="amazonjq-section_feature_div"
      ></div>
      <div
        id="cloudfront-web-bug_feature_div"
        className="celwidget"
        data-feature-name="cloudfront-web-bug"
        data-csa-c-type="widget"
        data-csa-c-content-id="cloudfront-web-bug"
        data-csa-c-slot-id="cloudfront-web-bug_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="iu3kih-3uv0re-arqehd-8cowpj"
        data-cel-widget="cloudfront-web-bug_feature_div"
      ></div>
      <div
        id="similarities_feature_div"
        className="celwidget"
        data-feature-name="similarities"
        data-csa-c-type="widget"
        data-csa-c-content-id="similarities"
        data-csa-c-slot-id="similarities_feature_div"
        data-csa-c-asin=""
        data-csa-c-is-in-initial-active-row="false"
        data-csa-c-id="amhy9w-ixz8xj-7jz0nj-bgzwut"
        data-cel-widget="similarities_feature_div"
      >
        <div
          
          className="celwidget"
          data-csa-c-id="4v2sll-s0z8ot-gago7y-tfopyk"
          data-cel-widget="sims-consolidated-7_csm_instrumentation_wrapper"
        >
          <div
            id="DPSims_sims-container_desktop-dp-sims_2_container"
            lazy-load-status="loaded"
          >
            <div className="widget-html-container">
              <div
                className="celwidget pd_rd_w-xuHQf content-id-amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0 pf_rd_p-9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0 pf_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-Tz2Zi pd_rd_r-9e0d30ae-7ef3-49c7-a998-32869a69adf3"
                
                data-csa-op-log-render=""
                data-csa-c-content-id="amzn1.sym.9f1cb690-f0b7-44de-b6ff-1bad1e37d3f0"
                data-csa-c-slot-id="sims-container-3"
                data-csa-c-type="widget"
                data-csa-c-painter="FirebirdPainter"
                data-cel-widget="desktop-dp-sims_SPThematicPrimeThemeForNonPrimeMembers"
                data-csa-c-id="3l4t42-zfrmfy-4h8udk-ca6rnc"
              ></div>
            </div>
          </div>
        </div>
        <div
          id="similaritiesContainerITReverseInterleave"
          className="celwidget"
          data-feature-name="similaritiesContainerITReverseInterleave"
          data-csa-c-type="widget"
          data-csa-c-content-id="similaritiesContainerITReverseInterleave"
          data-csa-c-slot-id="similaritiesContainerITReverseInterleave"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="hrcco3-v648mu-844h98-djatvf"
          data-cel-widget="similaritiesContainerITReverseInterleave"
        >
          <div
            id="similarities_feature_div"
            className="celwidget"
            data-feature-name="similarities"
            data-csa-c-type="widget"
            data-csa-c-content-id="similarities"
            data-csa-c-slot-id="similarities_feature_div"
            data-csa-c-asin=""
            data-csa-c-is-in-initial-active-row="false"
            data-csa-c-id="e0cj40-6u7uic-osgq94-yfr88z"
            data-cel-widget="similarities_feature_div"
          >
            <div
              
              className="celwidget"
              data-csa-c-id="xhu8g3-7dxeta-czfbl3-urmdh3"
              data-cel-widget="sims-consolidated-8_csm_instrumentation_wrapper"
            >
              <div
                id="DPSims_sims-container_desktop-dp-sims_3_container"
                lazy-load-status="loaded"
              >
                <div className="widget-html-container">
                  <div
                    className="celwidget pd_rd_w-CFeYL content-id-amzn1.sym.1f02df7f-f362-4e6d-9a92-f270d75713e4 pf_rd_p-1f02df7f-f362-4e6d-9a92-f270d75713e4 pf_rd_r-AGSRENW6SRAW518HGTR3 pd_rd_wg-Tz2Zi pd_rd_r-9e0d30ae-7ef3-49c7-a998-32869a69adf3 c-f"
                    
                    data-csa-op-log-render=""
                    data-csa-c-content-id="amzn1.sym.1f02df7f-f362-4e6d-9a92-f270d75713e4"
                    data-csa-c-slot-id="sims-container-4"
                    data-csa-c-type="widget"
                    data-csa-c-painter="p13n-desktop-carousel-cards"
                    data-csa-c-id="m886md-inhw6w-p9ryxc-lkn0yz"
                    data-cel-widget="p13n-desktop-carousel_DPSims_3"
                  >
                    {/*CardsClient*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="page-refresh-js-initializer_feature_div"
          className="celwidget"
          data-feature-name="page-refresh-js-initializer"
          data-csa-c-type="widget"
          data-csa-c-content-id="page-refresh-js-initializer"
          data-csa-c-slot-id="page-refresh-js-initializer_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="m2yucf-djoj4u-b5ob4g-jm9r2b"
          data-cel-widget="page-refresh-js-initializer_feature_div"
        ></div>
        <div
          id="ajaxBlockComponents_feature_div"
          className="celwidget"
          data-feature-name="ajaxBlockComponents"
          data-csa-c-type="widget"
          data-csa-c-content-id="ajaxBlockComponents"
          data-csa-c-slot-id="ajaxBlockComponents_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="2b2dan-fsomqd-g4zlzo-mowifv"
          data-cel-widget="ajaxBlockComponents_feature_div"
        ></div>
        <div
          id="twister-js-initializer_feature_div"
          className="celwidget"
          data-feature-name="twister-js-initializer"
          data-csa-c-type="widget"
          data-csa-c-content-id="twister-js-initializer"
          data-csa-c-slot-id="twister-js-initializer_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="2qr77f-yvqkl0-moo0ui-9hfpy6"
          data-cel-widget="twister-js-initializer_feature_div"
        ></div>
        <div
          id="seo-related-keywords-pages_feature_div"
          className="celwidget"
          data-feature-name="seo-related-keywords-pages"
          data-csa-c-type="widget"
          data-csa-c-content-id="seo-related-keywords-pages"
          data-csa-c-slot-id="seo-related-keywords-pages_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="uzzxza-t8thh1-6074e-3bu5a3"
          data-cel-widget="seo-related-keywords-pages_feature_div"
        ></div>
        <div
          id="sponsored-products-logger_feature_div"
          className="celwidget"
          data-feature-name="sponsored-products-logger"
          data-csa-c-type="widget"
          data-csa-c-content-id="sponsored-products-logger"
          data-csa-c-slot-id="sponsored-products-logger_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="7yx7f6-hqlrqo-qt45mx-nrubdh"
          data-cel-widget="sponsored-products-logger_feature_div"
        ></div>
        <div
          id="ad-endcap-1-drambot_feature_div"
          className="celwidget"
          data-feature-name="ad-endcap-1-drambot"
          data-csa-c-type="widget"
          data-csa-c-content-id="ad-endcap-1-drambot"
          data-csa-c-slot-id="ad-endcap-1-drambot_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="ygxw5-ow5bz6-7w69an-18re6d"
          data-cel-widget="ad-endcap-1-drambot_feature_div"
        ></div>
        <div
          id="registry-sable-update_feature_div"
          className="celwidget"
          data-feature-name="registry-sable-update"
          data-csa-c-type="widget"
          data-csa-c-content-id="registry-sable-update"
          data-csa-c-slot-id="registry-sable-update_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="6m9a8x-kpwddf-vhr2hl-66xsag"
          data-cel-widget="registry-sable-update_feature_div"
        ></div>
        <div
          id="btfSubNavDesktop_feature_div"
          className="celwidget"
          data-feature-name="btfSubNavDesktop"
          data-csa-c-type="widget"
          data-csa-c-content-id="btfSubNavDesktop"
          data-csa-c-slot-id="btfSubNavDesktop_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="hgg452-j22i8p-jfiph6-jzc0wn"
          data-cel-widget="btfSubNavDesktop_feature_div"
        ></div>
        <div
          id="emit-js_feature_div"
          className="celwidget"
          data-feature-name="emit-js"
          data-csa-c-type="widget"
          data-csa-c-content-id="emit-js"
          data-csa-c-slot-id="emit-js_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="lguidk-qc6awn-peigdt-y9nu2p"
          data-cel-widget="emit-js_feature_div"
        ></div>
        <div
          id="log-metrics_feature_div"
          className="celwidget"
          data-feature-name="log-metrics"
          data-csa-c-type="widget"
          data-csa-c-content-id="log-metrics"
          data-csa-c-slot-id="log-metrics_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="jwmkhc-660fv9-lr6nk1-99jegk"
          data-cel-widget="log-metrics_feature_div"
        ></div>
        <div
          id="log-detail-page-metrics_feature_div"
          className="celwidget"
          data-feature-name="log-detail-page-metrics"
          data-csa-c-type="widget"
          data-csa-c-content-id="log-detail-page-metrics"
          data-csa-c-slot-id="log-detail-page-metrics_feature_div"
          data-csa-c-asin=""
          data-csa-c-is-in-initial-active-row="false"
          data-csa-c-id="febxb-o96qk0-ftig2n-qzmdpf"
          data-cel-widget="log-detail-page-metrics_feature_div"
        ></div>
        <input type="hidden" name="1click-tsdelta" id="1click-tsdelta" />
      </div>
    </div>
  </div>
  <div id="a-popover-root" style={{ zIndex: -1, position: "absolute" }} />
  <input type="hidden" id="lists-createlist-createAndAddAsin" />
  {/* htmlEndMarker */}
  {/* sp:end-feature:host-btf */}
  {/* sp:feature:aui-preload */}
  {/* sp:end-feature:aui-preload */}
  {/* sp:feature:nav-footer */}
  {/* NAVYAAN FOOTER START */}
  {/* WITH MOZART */}
  <div className="navLeftFooter nav-sprite-v1" id="navFooter">
    <a href="javascript:void(0)" id="navBackToTop" aria-label="Back to top">
      <div className="navFooterBackToTop">
        <span className="navFooterBackToTopText">Back to top</span>
      </div>
    </a>
    <div
      className="navFooterVerticalColumn navAccessibility"
      role="presentation"
    >
      <div
        className="navFooterVerticalRow navAccessibility"
        style={{ display: "table-row" }}
      >
        <div className="navFooterLinkCol navAccessibility">
          <div className="navFooterColHead" role="heading" aria-level={6}>
            Get to Know Us
          </div>
          <ul>
            <li className="nav_first">
              <a
                href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer"
                className="nav_a"
              >
                About Amazon
              </a>
            </li>
            <li>
              <a href="https://amazon.jobs" className="nav_a">
                Careers
              </a>
            </li>
            <li>
              <a
                href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer"
                className="nav_a"
              >
                Press Releases
              </a>
            </li>
            <li className="nav_last ">
              <a href="https://www.amazon.science" className="nav_a">
                Amazon Science
              </a>
            </li>
          </ul>
        </div>
        <div className="navFooterColSpacerInner navAccessibility" />
        <div className="navFooterLinkCol navAccessibility">
          <div className="navFooterColHead" role="heading" aria-level={6}>
            Connect with Us
          </div>
          <ul>
            <li className="nav_first">
              <a
                href="https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6"
                className="nav_a"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6"
                className="nav_a"
              >
                Twitter
              </a>
            </li>
            <li className="nav_last ">
              <a
                href="https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards"
                className="nav_a"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="navFooterColSpacerInner navAccessibility" />
        <div className="navFooterLinkCol navAccessibility">
          <div className="navFooterColHead" role="heading" aria-level={6}>
            Make Money with Us
          </div>
          <ul>
            <li className="nav_first">
              <a
                href="/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C"
                className="nav_a"
              >
                Sell on Amazon
              </a>
            </li>
            <li>
              <a
                href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT"
                className="nav_a"
              >
                Sell under Amazon Accelerator
              </a>
            </li>
            <li>
              <a
                href="https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT"
                className="nav_a"
              >
                Protect and Build Your Brand
              </a>
            </li>
            <li>
              <a
                href="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1"
                className="nav_a"
              >
                Amazon Global Selling
              </a>
            </li>
            <li>
              <a
                href="https://supply.amazon.com/?ref_=footer_sta&lang=en-IN"
                className="nav_a"
              >
                Supply to Amazon
              </a>
            </li>
            <li>
              <a
                href="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc"
                className="nav_a"
              >
                Become an Affiliate
              </a>
            </li>
            <li>
              <a
                href="https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter"
                className="nav_a"
              >
                Fulfilment by Amazon
              </a>
            </li>
            <li>
              <a
                href="https://advertising.amazon.in/?ref=Amz.in"
                className="nav_a"
              >
                Advertise Your Products
              </a>
            </li>
            <li className="nav_last ">
              <a href="https://www.amazonpay.in/merchant" className="nav_a">
                Amazon Pay on Merchants
              </a>
            </li>
          </ul>
        </div>
        <div className="navFooterColSpacerInner navAccessibility" />
        <div className="navFooterLinkCol navAccessibility">
          <div className="navFooterColHead" role="heading" aria-level={6}>
            Let Us Help You
          </div>
          <ul>
            <li className="nav_first">
              <a href="/gp/css/homepage.html?ref_=footer_ya" className="nav_a">
                Your Account
              </a>
            </li>
            <li>
              <a
                href="/gp/css/returns/homepage.html?ref_=footer_hy_f_4"
                className="nav_a"
              >
                Returns Centre
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa"
                className="nav_a"
              >
                Recalls and Product Safety Alerts
              </a>
            </li>
            <li>
              <a
                href="/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc"
                className="nav_a"
              >
                100% Purchase Protection
              </a>
            </li>
            <li>
              <a
                href="/gp/browse.html?node=6967393031&ref_=footer_mobapp"
                className="nav_a"
              >
                Amazon App Download
              </a>
            </li>
            <li className="nav_last ">
              <a
                href="/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he"
                className="nav_a"
              >
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="nav-footer-line" />
    <div className="navFooterLine navFooterLinkLine navFooterPadItemLine">
      <span>
        <div className="navFooterLine navFooterLogoLine">
          <a aria-label="Amazon India Home" href="/ref=footer_logo">
            <div className="nav-logo-base nav-sprite" />
          </a>
        </div>
      </span>
      <span className="icp-container-desktop">
        <div className="navFooterLine">
          <a
            href="/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2FSELLORIA-Shockproof-Multi-Functional-Waterproof-Resistance%2Fdp%2FB09CHJ5RWK%3Fcrid%3D15LXPTWQ3BJ2A%26dib%3DeyJ2IjoiMSJ9.K0ktjucI-teePMdVZx5Jnadt9dIlpzg-aCS89zpCxUG3tJVDYApOWbesGFiTWosijf23nmOHWdA3yZcwKbFPT_PczRejz2HzxJnglypx0W6PgQSJLJYT4FVJlT6K-WWpmzrJnEx34X21aRQZT2Depu3cZG87KfBJVZXWru92lAR8IamwAqdBb8MuPEbWDkFZrCuFUfS6uDsShsyYdnp8kzsb1yURs4C0sbTuhvlggxfyNXt5NlpCqaNViK1l3MArXCut22CnTHuFzYFX0y6lV3XNTFZtMcAWg8TDpPlUe8Q.nOVZAHn8fAV0orBCqJGRj8yMkjqTdizVnecuEsQuGks%26dib_tag%3Dse%26keywords%3Dwatch%26qid%3D1732454536%26sprefix%3D%252Caps%252C236%26sr%3D8-7&ref_=footer_lang"
            aria-label="Choose a language for shopping."
            aria-owns="nav-flyout-icp-footer-flyout"
            className="icp-button"
            id="icp-touch-link-language"
          >
            <div className="icp-nav-globe-img-2 icp-button-globe-2" />
            <span className="icp-color-base">English</span>
            <span className="nav-arrow icp-up-down-arrow" />
          </a>
          <a
            href="/customer-preferences/country?ie=UTF8&preferencesReturnUrl=%2FSELLORIA-Shockproof-Multi-Functional-Waterproof-Resistance%2Fdp%2FB09CHJ5RWK%3Fcrid%3D15LXPTWQ3BJ2A%26dib%3DeyJ2IjoiMSJ9.K0ktjucI-teePMdVZx5Jnadt9dIlpzg-aCS89zpCxUG3tJVDYApOWbesGFiTWosijf23nmOHWdA3yZcwKbFPT_PczRejz2HzxJnglypx0W6PgQSJLJYT4FVJlT6K-WWpmzrJnEx34X21aRQZT2Depu3cZG87KfBJVZXWru92lAR8IamwAqdBb8MuPEbWDkFZrCuFUfS6uDsShsyYdnp8kzsb1yURs4C0sbTuhvlggxfyNXt5NlpCqaNViK1l3MArXCut22CnTHuFzYFX0y6lV3XNTFZtMcAWg8TDpPlUe8Q.nOVZAHn8fAV0orBCqJGRj8yMkjqTdizVnecuEsQuGks%26dib_tag%3Dse%26keywords%3Dwatch%26qid%3D1732454536%26sprefix%3D%252Caps%252C236%26sr%3D8-7&ref_=footer_icp_cp"
            aria-label="Choose a country/region for shopping."
            className="icp-button"
            id="icp-touch-link-country"
          >
            <span className="icp-flag-3 icp-flag-3-in" />
            <span className="icp-color-base">India</span>
          </a>
        </div>
      </span>
    </div>
    <div
      className="navFooterLine navFooterLinkLine navFooterDescLine"
      aria-label="More on Amazon"
    >
      <table
        className="navFooterMoreOnAmazon"
        cellSpacing={0}
        role="presentation"
        summary="More on Amazon"
      >
        <tbody>
          <tr>
            <td className="navFooterDescItem">
              <a href="https://www.abebooks.com/" className="nav_a">
                AbeBooks
                <br />
                <span className="navFooterDescText">
                  Books, art
                  <br />
                  &amp; collectibles
                </span>
              </a>
            </td>
            <td className="navFooterDescSpacer" style={{ width: "4%" }} />
            <td className="navFooterDescItem">
              <a
                href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter"
                className="nav_a"
              >
                Amazon Web Services
                <br />
                <span className="navFooterDescText">
                  Scalable Cloud
                  <br />
                  Computing Services
                </span>
              </a>
            </td>
            <td className="navFooterDescSpacer" style={{ width: "4%" }} />
            <td className="navFooterDescItem">
              <a href="https://www.audible.in/" className="nav_a">
                Audible
                <br />
                <span className="navFooterDescText">
                  Download
                  <br />
                  Audio Books
                </span>
              </a>
            </td>
            <td className="navFooterDescSpacer" style={{ width: "4%" }} />
            <td className="navFooterDescItem">
              <a href="https://www.imdb.com/" className="nav_a">
                IMDb
                <br />
                <span className="navFooterDescText">
                  Movies, TV
                  <br />
                  &amp; Celebrities
                </span>
              </a>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className="navFooterDescItem">
              <a href="https://www.shopbop.com/" className="nav_a">
                Shopbop
                <br />
                <span className="navFooterDescText">
                  Designer
                  <br />
                  Fashion Brands
                </span>
              </a>
            </td>
            <td className="navFooterDescSpacer" style={{ width: "4%" }} />
            <td className="navFooterDescItem">
              <a href="/business?ref=footer_aingw" className="nav_a">
                Amazon Business
                <br />
                <span className="navFooterDescText">
                  Everything For
                  <br />
                  Your Business
                </span>
              </a>
            </td>
            <td className="navFooterDescSpacer" style={{ width: "4%" }} />
            <td className="navFooterDescItem">
              <a href="/now?ref=footer_amznow" className="nav_a">
                Prime Now
                <br />
                <span className="navFooterDescText">
                  {" "}
                  2-Hour Delivery
                  <br />
                  on Everyday Items
                </span>
              </a>
            </td>
            <td className="navFooterDescSpacer" style={{ width: "4%" }} />
            <td className="navFooterDescItem">
              <a href="/music/prime?ref=footer_apm" className="nav_a">
                Amazon Prime Music
                <br />
                <span className="navFooterDescText">
                  100 million songs, ad-free
                  <br />
                  Over 15 million podcast episodes{" "}
                </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="navFooterLine navFooterLinkLine navFooterPadItemLine navFooterCopyright">
      <ul>
        <li className="nav_first">
          <a
            href="/gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou"
            id=""
            className="nav_a"
          >
            Conditions of Use &amp; Sale
          </a>{" "}
        </li>
        <li>
          <a
            href="/gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy"
            id=""
            className="nav_a"
          >
            Privacy Notice
          </a>{" "}
        </li>
        <li className="nav_last">
          <a
            href="/gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba"
            id=""
            className="nav_a"
          >
            Interest-Based Ads
          </a>{" "}
        </li>
      </ul>
      <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
    </div>
  </div>
  {/* NAVYAAN FOOTER END */}
  {/* sp:end-feature:nav-footer */}
  {/* sp:feature:configured-sitewide-assets */}
  {/* sp:end-feature:configured-sitewide-assets */}
  {/* sp:feature:customer-behavior-js */}
  {/* sp:end-feature:customer-behavior-js */}
  {/* sp:feature:csm:body-close */}
  <div id="be" style={{ display: "none", visibility: "hidden" }}>
    <form name="ue_backdetect" action="get">
      <input type="hidden" name="ue_back" defaultValue={2} />
    </form>
  </div>
  <noscript>
    &lt;img height="1" width="1" style='display:none;visibility:hidden;'
    src='https://fls-eu.amazon.in/1/batch/1/OP/A21TJRUUN4KGV:261-0713373-3141624:AGSRENW6SRAW518HGTR3$uedata=s:%2Frd%2Fuedata%3Fnoscript%26id%3DAGSRENW6SRAW518HGTR3:0'
    alt="" /&gt;
  </noscript>
  {/* sp:end-feature:csm:body-close */}
  <div className="attach-dss-modal-layer" style={{ display: "none" }}>
    <div
      id="attach-popover-lgtbox"
      className="attach-dss-backdrop"
      style={{ display: "none" }}
    />
  </div>
  {/*NAVYAAN-HMENU-AJAX*/}
  <div
    id="hmenu-container"
    
    style={{ display: "block" }}
    className="celwidget nav-sprite-v1"
    data-csa-c-id="baxul8-f4th3s-oviohe-335kne"
    data-cel-widget="Navigation-desktop-HamburgerMenu"
  >
    <div
      id="hmenu-canvas-background"
      className="hmenu-transparent hmenu-dark-bkg-color"
    >
      <div className="nav-sprite hmenu-close-icon" />
    </div>
    <div
      id="hmenu-canvas"
      className="hmenu-translateX-left nav-ignore-pinning"
      aria-labelledby="nav-menu-label"
      aria-modal="true"
      role="dialog"
    >
      <span id="nav-menu-label" className="nav-hidden-aria">
        Browse all categories
      </span>
      <div
        id="hmenu-close-icon"
        className="nav-sprite hmenu-close-icon"
        tabIndex={0}
        role="button"
        aria-label="Close menu"
      />
      <a
        id="hmenu-customer-profile-link"
        href="javascript:void(0)"
        data-nav-ref="nav_em_hd_re_signin"
      >
        <div id="hmenu-customer-profile">
          <div id="hmenu-customer-profile-left" className="hmenu-avatar-icon">
            <div id="hmenu-customer-avatar-icon" className="nav-sprite" />
          </div>
          <div id="hmenu-customer-profile-right">
            <div id="hmenu-customer-name">
              <b>Hello, sign in</b>
            </div>
          </div>
        </div>
      </a>
      <div id="hmenu-content">
        <ul className="hmenu" data-menu-id={1}>
          <li>
            <div
              className="hmenu-item hmenu-title "
              role="heading"
              aria-level={6}
            >
              Trending
            </div>
          </li>
          <li>
            <a
              href="/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2"
              className="hmenu-item"
            >
              Best Sellers
            </a>
          </li>
          <li>
            <a
              href="/gp/new-releases/?ref_=nav_em_cs_newreleases_0_1_1_3"
              className="hmenu-item"
            >
              New Releases
            </a>
          </li>
          <li>
            <a
              href="/gp/movers-and-shakers/?ref_=nav_em_ms_0_1_1_4"
              className="hmenu-item"
            >
              Movers and Shakers
            </a>
          </li>
          <li className="hmenu-separator" />
          <li>
            <div
              className="hmenu-item hmenu-title "
              role="heading"
              aria-level={6}
            >
              Digital Content and Devices
            </div>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={2}
              data-ref-tag="nav_em_1_1_1_6"
            >
              <div>Echo &amp; Alexa</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={3}
              data-ref-tag="nav_em_1_1_1_7"
            >
              <div>Fire TV</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={4}
              data-ref-tag="nav_em_1_1_1_8"
            >
              <div>Kindle E-Readers &amp; eBooks</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={5}
              data-ref-tag="nav_em_1_1_1_9"
            >
              <div>Audible Audiobooks</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={6}
              data-ref-tag="nav_em_1_1_1_10"
            >
              <div>Amazon Prime Video</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={7}
              data-ref-tag="nav_em_1_1_1_11"
            >
              <div>Amazon Prime Music</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li className="hmenu-separator" />
          <li>
            <div
              className="hmenu-item hmenu-title "
              role="heading"
              aria-level={6}
            >
              Shop by Category
            </div>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={8}
              data-ref-tag="nav_em_1_1_1_13"
            >
              <div>Mobiles, Computers</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={9}
              data-ref-tag="nav_em_1_1_1_14"
            >
              <div>TV, Appliances, Electronics</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={10}
              data-ref-tag="nav_em_1_1_1_15"
            >
              <div>Men's Fashion</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={11}
              data-ref-tag="nav_em_1_1_1_16"
            >
              <div>Women's Fashion</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <ul className="hmenu-compress-section compressed" aria-hidden="true">
            <li className="hmenu-mini-divider" />
            <li>
              <a
                href=""
                className="hmenu-item"
                tabIndex={-1}
                data-menu-id={12}
                data-ref-tag="nav_em_1_1_1_17"
              >
                <div>Home, Kitchen, Pets</div>
                <i className="nav-sprite hmenu-arrow-next" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="hmenu-item"
                tabIndex={-1}
                data-menu-id={13}
                data-ref-tag="nav_em_1_1_1_18"
              >
                <div>Beauty, Health, Grocery</div>
                <i className="nav-sprite hmenu-arrow-next" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="hmenu-item"
                tabIndex={-1}
                data-menu-id={14}
                data-ref-tag="nav_em_1_1_1_19"
              >
                <div>Sports, Fitness, Bags, Luggage</div>
                <i className="nav-sprite hmenu-arrow-next" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="hmenu-item"
                tabIndex={-1}
                data-menu-id={15}
                data-ref-tag="nav_em_1_1_1_20"
              >
                <div>Toys, Baby Products, Kids' Fashion</div>
                <i className="nav-sprite hmenu-arrow-next" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="hmenu-item"
                tabIndex={-1}
                data-menu-id={16}
                data-ref-tag="nav_em_1_1_1_21"
              >
                <div>Car, Motorbike, Industrial</div>
                <i className="nav-sprite hmenu-arrow-next" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="hmenu-item"
                tabIndex={-1}
                data-menu-id={17}
                data-ref-tag="nav_em_1_1_1_22"
              >
                <div>Books</div>
                <i className="nav-sprite hmenu-arrow-next" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="hmenu-item"
                tabIndex={-1}
                data-menu-id={18}
                data-ref-tag="nav_em_1_1_1_23"
              >
                <div>Movies, Music &amp; Video Games</div>
                <i className="nav-sprite hmenu-arrow-next" />
              </a>
            </li>
          </ul>
          <li>
            <a
              className="hmenu-item hmenu-compressed-btn"
              href=""
              aria-label="See all"
            >
              <div>See all</div>
              <i className="nav-sprite hmenu-arrow-more" />
            </a>
            <a
              className="hmenu-item hmenu-expanded-btn"
              href=""
              aria-label="See less"
            >
              <div>see less</div>
              <i className="nav-sprite hmenu-arrow-less" />
            </a>
          </li>
          <li className="hmenu-separator" />
          <li>
            <div
              className="hmenu-item hmenu-title "
              role="heading"
              aria-level={6}
            >
              Programs &amp; Features
            </div>
          </li>
          <li>
            <a
              href="/amazonpay/home?ref_=nav_em_apay_nav_desktop_0_1_1_25"
              className="hmenu-item"
            >
              Amazon Pay
            </a>
          </li>
          <li>
            <a
              href=""
              className="hmenu-item"
              data-menu-id={19}
              data-ref-tag="nav_em_1_1_1_26"
            >
              <div>Gift Cards &amp; Mobile Recharges</div>
              <i className="nav-sprite hmenu-arrow-next" />
            </a>
          </li>
          <li>
            <a
              href="/gp/browse.html?node=10894223031&ref_=nav_em_topnav_storetab_lpdin_0_1_1_27"
              className="hmenu-item"
            >
              Amazon Launchpad
            </a>
          </li>
          <li>
            <a
              href="/business/register/org/landing?ref_=nav_em_ab_in_desktop_hmenu_top_0_1_1_28"
              className="hmenu-item"
            >
              Amazon Business
            </a>
          </li>
          <ul className="hmenu-compress-section compressed" aria-hidden="true">
            <li className="hmenu-mini-divider" />
            <li>
              <a
                href="/gp/browse.html?node=16676064031&ref_=nav_em_nav_amazon_karigar_0_1_1_29"
                className="hmenu-item"
                tabIndex={-1}
              >
                Handloom and Handicrafts
              </a>
            </li>
            <li>
              <a
                href="/gp/browse.html?node=14311774031&ref_=nav_em_msbc_t1_bhg_amazon_saheli_0_1_1_30"
                className="hmenu-item"
                tabIndex={-1}
              >
                Amazon Saheli
              </a>
            </li>
            <li>
              <a
                href="/gp/browse.html?node=16180618031&ref_=nav_em_ham_combos_nav_desktop_0_1_1_31"
                className="hmenu-item"
                tabIndex={-1}
              >
                Amazon Combos
              </a>
            </li>
            <li>
              <a
                href="/gp/browse.html?node=32615889031&ref_=nav_em_ac_hamburger_0_1_1_32"
                className="hmenu-item"
                tabIndex={-1}
              >
                Amazon Custom
              </a>
            </li>
            <li>
              <a
                href="/flights?ref_=nav_em_sbc_desktop_flights_0_1_1_33"
                className="hmenu-item"
                tabIndex={-1}
              >
                Flight Tickets
              </a>
            </li>
            <li>
              <a
                href="/gp/browse.html?node=31818347031&ref_=nav_em_ham_bxgy_nav_0_1_1_34"
                className="hmenu-item"
                tabIndex={-1}
              >
                Buy more, Save more
              </a>
            </li>
            <li>
              <a
                href="/outlet?ref_=nav_em_sbc_desktop_outlet_0_1_1_35"
                className="hmenu-item"
                tabIndex={-1}
              >
                Clearance store
              </a>
            </li>
            <li>
              <a
                href="/gp/browse.html?node=21469514031&ref_=nav_em_nav_ibrand_desktop_0_1_1_36"
                className="hmenu-item"
                tabIndex={-1}
              >
                International Brands
              </a>
            </li>
          </ul>
          <li>
            <a
              className="hmenu-item hmenu-compressed-btn"
              href=""
              aria-label="See all"
            >
              <div>See all</div>
              <i className="nav-sprite hmenu-arrow-more" />
            </a>
            <a
              className="hmenu-item hmenu-expanded-btn"
              href=""
              aria-label="See less"
            >
              <div>see less</div>
              <i className="nav-sprite hmenu-arrow-less" />
            </a>
          </li>
          <li className="hmenu-separator" />
          <li>
            <div
              className="hmenu-item hmenu-title "
              role="heading"
              aria-level={6}
            >
              Help &amp; Settings
            </div>
          </li>
          <li>
            <a
              href="/gp/css/homepage.html?ref_=nav_em_ya_0_1_1_38"
              className="hmenu-item"
            >
              Your Account
            </a>
          </li>
          <li>
            <a
              href="/gp/help/customer/display.html?nodeId=508510&ref_=nav_em_cs_help_0_1_1_39"
              className="hmenu-item"
            >
              Customer Service
            </a>
          </li>
          <li>
            <a className="hmenu-item" href="javascript:void(0)">
              Sign in
            </a>
          </li>
        </ul>
      </div>
      <a
        id="hmenu-back-to-top"
        className="hmenu-hidden-link nav-side-menu-back-to-top"
        href="javascript:void(0)"
        aria-hidden="true"
      >
        <div>Back to top</div>
      </a>
    </div>
  </div>
  {/*NAVYAAN-HMENU-AJAX-END*/}

      </>
  );
  
};

export default Amazon;
