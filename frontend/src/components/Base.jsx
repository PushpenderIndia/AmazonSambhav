import React from "react";

const Base = () => {
  return (
    <div id="wrapper">
      {/* Page */}
      <div id="page" className="">
        {/* Layout Wrap */}
        <div className="layout-wrap">
        <div id="preload" class="preload-container">
                    <div class="preloading">
                        <span></span>
                    </div>
                </div>
          {/* Section Menu Left */}
          <div className="section-menu-left">
            <div className="box-logo">
              <a href="index.html" id="site-logo-inner">
                <img
                  id="logo_header"
                  alt=""
                  src="src/static/images/logo/logo.png"
                  data-light="src/static/images/logo/logo.png"
                  data-dark="src/static/images/logo/logo-dark.png"
                />
              </a>
              <div className="button-show-hide">
                <i className="icon-menu-left"></i>
              </div>
            </div>
            <div className="center">
              <div className="center-item">
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-grid"></i>
                      </div>
                      <div className="text">Dashboard</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="gallery.html" className="">
                      <div className="icon">
                        <i className="icon-image"></i>
                      </div>
                      <div className="text">Link Social Media</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="report.html" className="">
                      <div className="icon">
                        <i className="icon-pie-chart"></i>
                      </div>
                      <div className="text">Generated Listings</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="setting.html" className="">
                      <div className="icon">
                        <i className="icon-settings"></i>
                      </div>
                      <div className="text">Setting</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="">
                      <div className="icon">
                        <i className="icon-help-circle"></i>
                      </div>
                      <div className="text">Help center</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Section Content Right */}
          <div className="section-content-right">
            {/* Header Dashboard */}
            <div className="header-dashboard">
              <div className="wrap">
                <div className="header-left">
                  <a href="index.html">
                    <img
                      id="logo_header_mobile"
                      alt=""
                      src="images/logo/logo.png"
                      data-light="images/logo/logo.png"
                      data-dark="images/logo/logo-dark.png"
                      data-width="154px"
                      data-height="52px"
                      data-retina="images/logo/logo@2x.png"
                    />
                  </a>
                  <div className="button-show-hide">
                    <i className="icon-menu-left"></i>
                  </div>
                  <form className="form-search flex-grow">
                    <fieldset className="name">
                      <input
                        type="text"
                        placeholder="Search here..."
                        className="show-search"
                        name="name"
                        required
                      />
                    </fieldset>
                    <div className="button-submit">
                      <button className="" type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="header-grid">
                  <div className="header-item button-zoom-maximize">
                    <i className="icon-maximize"></i>
                  </div>
                  <div className="popup-wrap user type-header">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton3"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="header-user wg-user">
                          <span className="image">
                            <img src="images/avatar/user-1.png" alt="" />
                          </span>
                          <span className="flex flex-column">
                            <span className="body-title mb-2">Kristin Watson</span>
                            <span className="text-tiny">Admin</span>
                          </span>
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end has-content"
                        aria-labelledby="dropdownMenuButton3"
                      >
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
            {/* Main Content */}
            <div className="main-content">
              <div className="main-content-inner">
                <div className="main-content-wrap">
                  {/* Content Goes Here */}
                  {/* Add your components here */}
                </div>
              </div>
              {/* Bottom Page */}
              <div className="bottom-page">
                <div className="body-text">Copyright © 2024 Remos. Design with</div>
                <i className="icon-heart"></i>
                <div className="body-text">
                  by{" "}
                  <a href="https://themeforest.net/user/themesflat/portfolio">
                    Themesflat
                  </a>{" "}
                  All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
