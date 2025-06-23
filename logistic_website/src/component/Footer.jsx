import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      };

      const year = new Date().getFullYear();
    

  return (

    <div className='bg1'>

    <div id='footer'>
        <div className='sections-container'>
            <div className='section' id='titleMobile'>
                <Link to='/' onClick={handleScrollToTop} style={{textDecoration:"none"}}>
                    <p className='companyName'>CAFECOLD</p>
                    <p className='companyTitle'>From frost to freight. Always Cool</p>
                </Link>
            </div>

            <div className='section'>
                <Link className='navlinks header' to="/" onClick={handleScrollToTop}>Home</Link>
                <Link className='navlinks header' to="/about" onClick={handleScrollToTop}>About</Link>
                <Link className='navlinks header' to="/strategy" onClick={handleScrollToTop}>Strategy</Link>
                <Link className='navlinks header' to="/career" onClick={handleScrollToTop}>Career</Link>
                <Link className='navlinks header' to="/contact" onClick={handleScrollToTop}>Contact</Link>
            </div>

            <div className='section'>
                <Link className='navlinks' to="">Facebook</Link>
                <Link className='navlinks' to="">Linkedin</Link>
                <Link className='navlinks' to="">X</Link>
            </div>

        </div>

        <hr />

        <div id='policy'>
            <p>Privacy Policy</p>
            <p>&copy; {year} by FrostBite Solutions Pvt Ltd</p>
        </div>
    </div>

    </div>

  );
}

export default Footer;