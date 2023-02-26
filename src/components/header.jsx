import React from 'react';

export default function Header () {
      // <!-- header -->
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" className="burger-container">
          <svg className="icon-toggle cursor-point">
            <use xlink:href="#svg-icon-toggle"></use>
          </svg>
        </label>

        {/* <!-- navbar-menu --> */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">男款</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">女款</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">最新消息</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">客製商品</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">聯絡我們</a>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            {/* <!-- search --> */}
            <li className="nav-item">
              <svg className="nav-icon cursor-point">
                <use xlink:href="#svg-icon-search"></use>
              </svg>                              
            </li>
            {/* <!-- cart --> */}
            <li className="nav-item">
              <svg className="nav-icon cursor-point">
                <use xlink:href="#svg-icon-cart"></use>
              </svg>
            </li>
            <li id="theme-toggle" className="nav-item">
              <!-- moon -->
              <svg className="nav-icon cursor-point">
                <use xlink:href="#svg-icon-moon"></use>
              </svg>               
              <!-- sun -->
              <svg className="nav-icon cursor-point">
                <use xlink:href="#svg-icon-sun"></use>
              </svg>
            </li>
          </ul>
        </nav>

        <!-- logo -->
        <a className="header-logo-container" href="#">
          <svg className="icon-logo cursor-point">
            <use xlink:href="#svg-icon-logo"></use>
          </svg>
        </a>
      </div>
    </header>
}