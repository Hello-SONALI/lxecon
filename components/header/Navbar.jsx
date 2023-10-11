import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (
    <>
  <header className="header-wrapper">
        <div className="topbar-wrapper">
          <div className="container">
            <div className="topbar-inner">
              <div className="topbar-left">
                Redias Digital &amp; Creative Agency Receives Capital Investment.
              </div>
              <div className="topbar-right">
                <ul>
                  <li>
                    <Link href="mailto:dynamiclayers@gmail.com">
                      dynamiclayers@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Login</Link>
                  </li>
                  <li className="topbar-search">
                    <form action="#">
                      <input type="text" placeholder="Search" autoComplete="off" />
                      <button className="search-btn" type="button">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /.topbar-wrapper */}
        <div className="navigation-wrapper">
          <div className="container">
            <div className="navigation-inner">
              <div className="site-logo">
                <Link href="index.html">
                  <Image src="/assets/img/logo.png" alt="Redias" width={170} height={51} />
                </Link>
              </div>
              <nav className="navigation-menu">
                <ul className="main-menu">
                  <li>
                    <Link href="/">Home</Link>
                   
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                    
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                    
                  </li>
  
                  <li>
                    <Link href="/pricing">Pricing</Link>
                    
                  </li>
                  
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
                <button className="sidebar-trigger">
                  <svg
                    fill="currentColor"
                    height={16}
                    viewBox="0 0 16 16"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                  </svg>
                </button>
              </nav>
              <div className="header-number">
                <i className="las la-comments" />
                <div>
                  Let's Chat
                  <Link href="tel:881900678956">88 1900 6789 56</Link>
                </div>
              </div>
              <div className="mobile-menu-icon">
                <div className="burger-menu">
                  <div className="line-menu line-half first-line" />
                  <div className="line-menu" />
                  <div className="line-menu line-half last-line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="popup-sidebox" className="popup-sidebox">
        <button className="sidebox-close">
          <i className="las la-times" />
        </button>
        <div className="sidebox-content">
          <div className="site-logo">
            <Link href="index.html">
              <Image src="/assets/img/logo-light.png" alt="logo"   width={170} height={51}/>
            </Link>
          </div>
          <p>
            Everything your taxi business needs is already here! redias, a theme made
            for taxi service companies.
          </p>
          <ul className="sidebox-list">
            <li className="call">
              <span>Call for ride:</span>5267-214-392
            </li>
            <li>
              <span>You can find us at:</span>Halk Street New York, USA - 2386
            </li>
            <li>
              <span>Email now:</span>Info.redias@mail.com
            </li>
          </ul>
        </div>
      </div>
      
  

    </>
  )
}

export default Navbar
