import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='footer'>
        <div className='sections-container'>
            <div className='section'>
                <p className='companyName'>CAFECOLD</p>
                <p className='companyTitle'>From frost to freight. Always Cool</p>
            </div>

            <div className='section'>
                <Link className='navlinks' to="/">Home</Link>
                <Link className='navlinks' to="/about">About</Link>
                <Link className='navlinks' to="/strategy">Strategy</Link>
                <Link className='navlinks' to="/career">Career</Link>
                <Link className='navlinks' to="/contact">Contact</Link>
            </div>

            <div className='section'>
                <Link className='navlinks' to="">Facebook</Link>
                <Link className='navlinks' to="">Linkedin</Link>
                <Link className='navlinks' to="">X</Link>
            </div>

            <div className='section'>
                <p className='navlinks'>Registered Office</p>
                <p className='subNavlinks'>Electronic City PO, Bangalore - 100</p>
                <p className='subNavlinks'>
                    7022007829<br />
                    <a href="mailto:enquiries@shipswift.in" className="email-link">enquiries@shipswift.in</a>
                </p>
            </div>

            <div className='section'>
                <p className='navlinks'>Communication Address</p>
                <p className='subNavlinks'>Share Office Solutions
                    Murphy Road, Indranagar, 
                    Bangalore
                </p>
                <p className='subNavlinks'>7022007828</p>
            </div>
        </div>

        <hr />

        <div id='policy'>
            <p>Privacy Policy</p>
            <p>© 2025 by NR Supply Chain Solutions Pvt Ltd</p>
        </div>
    </div>
  );
}

export default Footer;