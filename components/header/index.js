import React from 'react'
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = (props) => {

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
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <NavLink className="navbar-brand logo" href='/'><small>My</small>love<span><i
                    className="fi flaticon-dove"></i></span></NavLink>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                    </li>
                    <li><Link activeClass="active" to="couple" spy={true} smooth={true} duration={500} >Couple</Link></li>
                    <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} >Story</Link></li>
                    <li><Link activeClass="active" to="RSVP" spy={true} smooth={true} duration={500} >RSVP</Link></li>
                    <li><Link activeClass="active" to="event" spy={true} smooth={true} duration={500} >Events</Link></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;