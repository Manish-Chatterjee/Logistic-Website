import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavSidebar from './NavSidebar';

const Header = () => {

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const handleResize = () => {
    // Check if the window width is less than or equal to 1024 pixels (common breakpoint for tablets)
    setIsMobileOrTablet(window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleResize(); // Check size on mount
    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up on unmount
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='bg1'>

    <div id='header'>
        <div id='company'>
          <Link to='/' onClick={handleScrollToTop} style={{textDecoration:"none"}}>
            <p className='companyName'>Frosty Freight</p>
            <p className='companyTitle'>Keeping it Cool & Fresh</p>
          </Link>
        </div>

        {isMobileOrTablet ? <NavSidebar/> :
        <div id='nav'>
        
            <Link className='navlinks' to="/" onClick={handleScrollToTop}>Home</Link>
            <Link className='navlinks' to="/about" onClick={handleScrollToTop}>About</Link>
            <Link className='navlinks' to="/strategy" onClick={handleScrollToTop}>Strategy</Link>
            <Link className='navlinks' to="/career" onClick={handleScrollToTop}>Career</Link>
            <Link className='navlinks' to="/contact" onClick={handleScrollToTop}>Contact</Link>
          
        </div>}
    </div>

    </div>
  )
}

export default Header