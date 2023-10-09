import React from 'react'
import Link from 'next/link'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

  return(

    <footer className="wpo-site-footer">
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2023 <Link onClick={ClickHandler}
                                href="/">By Gustave</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;