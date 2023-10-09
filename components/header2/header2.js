import React from 'react'
import Link from 'next/link'
import MobileMenu2 from '../MobileMenu2/MobileMenu2';


const Header2 = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu2 />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand logo" href='/'><small>My</small>love<span><i
                    className="fi flaticon-dove"></i></span></Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link href="/home">Home</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} href="/home">Home style 1</Link></li>
                        <li><Link onClick={ClickHandler} href="/home2">Home style 2</Link></li>
                        <li><Link onClick={ClickHandler} href="/home3">Home style 3</Link></li>
                        <li><Link onClick={ClickHandler} href="/home4">Home Static Hero</Link></li>
                        <li><Link onClick={ClickHandler} href="/home5">Home Box Style</Link></li>
                        <li><Link onClick={ClickHandler} href="/home6">Home Video Banar</Link></li>
                        <li><Link onClick={ClickHandler} href="/invitation">Invitation</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/about">About</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/wedding">Wedding</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} href="/wedding">Wedding</Link></li>
                        <li><Link onClick={ClickHandler} href="/wedding-details">Wedding Details</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/gallery">Gallery</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} href="/gallery">Gallery Style 1</Link></li>
                        <li><Link onClick={ClickHandler} href="/gallery-s2">Gallery Style 2</Link></li>
                        <li><Link onClick={ClickHandler} href="/gallery-slide">Gallery Slide</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/rsvp">RSVP</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/story">pages</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} href="/story">Our story</Link></li>
                        <li><Link onClick={ClickHandler} href="/accomodation">Accomodation</Link></li>
                        <li><Link onClick={ClickHandler} href="/event">When & Where</Link></li>
                        <li><Link onClick={ClickHandler} href="/groom-bride">Bridesmaid & Groomsman</Link></li>
                        <li><Link onClick={ClickHandler} href="/coming">Coming Soon</Link></li>
                        <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                        <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                        <li><Link onClick={ClickHandler} href="/register">Register</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/blog">Blog</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} href="/">Blog details</Link>
                          <ul className="sub-menu">
                            <li><Link onClick={ClickHandler} href="/blog-single/1">Blog details right sidebar</Link>
                            </li>
                            <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/1">Blog details left
                              sidebar</Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/1">Blog details
                              fullwidth</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <Link className="theme-btn" href="/rsvp"><span className="text">Attend Now</span> <span className="mobile">
                    <i className="fi flaticon-user"></i>
                  </span></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header2;